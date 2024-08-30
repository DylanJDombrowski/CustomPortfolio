// blog/visualization.js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function createVisualization(posts, container, onPostClick) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", "#000005");

  // Add a starry background
  const starCount = 200;
  const stars = d3.range(starCount).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5,
  }));

  const starsGroup = svg.append("g");

  starsGroup
    .selectAll(".star")
    .data(stars)
    .enter()
    .append("circle")
    .attr("class", "star")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", (d) => d.radius)
    .attr("fill", "#ffffff")
    .style("opacity", () => Math.random());

  // Rotate stars
  function rotateStars() {
    starsGroup
      .transition()
      .ease(d3.easeLinear)
      .duration(150000)
      .attrTween("transform", () => {
        return (t) => `rotate(${t * 360} ${width / 2} ${height / 2})`;
      })
      .on("end", rotateStars);
  }

  rotateStars();

  const g = svg.append("g");

  const zoom = d3
    .zoom()
    .scaleExtent([0.1, 4])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  const simulation = d3
    .forceSimulation()
    .force(
      "link",
      d3
        .forceLink()
        .id((d) => d.id)
        .distance(100)
    )
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(30));

  const nodes = [
    ...posts.map((post) => ({
      id: post.title,
      type: "post",
      tags: post.tags,
      date: post.date,
      file: post.file,
    })),
    ...Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => ({
      id: tag,
      type: "tag",
    })),
  ];

  const links = posts.flatMap((post) =>
    post.tags.map((tag) => ({ source: post.title, target: tag }))
  );

  const link = g
    .append("g")
    .attr("stroke", "#4a9ff5")
    .attr("stroke-opacity", 0.3)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", 1);

  const node = g
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", (d) => (d.type === "post" ? 6 : 4))
    .attr("fill", (d) => (d.type === "post" ? "#fcff5d" : "#4a9ff5"))
    .call(drag(simulation));

  node.append("title").text((d) => d.id);

  simulation.nodes(nodes).on("tick", ticked);
  simulation.force("link").links(links);

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  }

  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  node
    .on("mouseover", function (event, d) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("r", (d) => (d.type === "post" ? 8 : 6))
        .attr("fill", "#ffffff");

      // Highlight connected nodes and links
      const connectedNodes = links
        .filter((l) => l.source.id === d.id || l.target.id === d.id)
        .flatMap((l) => [l.source.id, l.target.id]);

      node
        .filter((n) => connectedNodes.includes(n.id))
        .transition()
        .duration(300)
        .attr("fill", "#ffffff");

      link
        .filter((l) => l.source.id === d.id || l.target.id === d.id)
        .transition()
        .duration(300)
        .attr("stroke", "#ffffff")
        .attr("stroke-opacity", 1)
        .attr("stroke-width", 2);

      if (d.type === "post") {
        showPostPreview(d, event);
      } else {
        showTagTooltip(d, event);
      }
    })
    .on("mouseout", function (event, d) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("r", (d) => (d.type === "post" ? 6 : 4))
        .attr("fill", (d) => (d.type === "post" ? "#fcff5d" : "#4a9ff5"));

      // Reset connected nodes and links
      node
        .transition()
        .duration(300)
        .attr("fill", (d) => (d.type === "post" ? "#fcff5d" : "#4a9ff5"));

      link
        .transition()
        .duration(300)
        .attr("stroke", "#4a9ff5")
        .attr("stroke-opacity", 0.3)
        .attr("stroke-width", 1);

      hidePreview();
    })
    .on("click", (event, d) => {
      if (d.type === "post") {
        onPostClick(d);
      }
    });

  node
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", (d) =>
      d.type === "post" ? `Blog post: ${d.id}` : `Tag: ${d.id}`
    )
    .on("keypress", function (event, d) {
      if (event.key === "Enter" || event.key === " ") {
        if (d.type === "post") {
          onPostClick(d);
        }
      }
    });

  function showPostPreview(post, event) {
    const preview = d3
      .select("body")
      .append("div")
      .attr("class", "post-preview")
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY + 10 + "px");

    preview.html(`
      <h3>${post.id}</h3>
      <p>Date: ${new Date(post.date).toLocaleDateString()}</p>
      <p>Tags: ${post.tags.join(", ")}</p>
      <a href="/posts/${post.id
        .toLowerCase()
        .replace(/ /g, "-")}.html" class="read-more">Read full post</a>
    `);
  }

  function showTagTooltip(tag, event) {
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY + 10 + "px")
      .text(tag.id);
  }

  function hidePreview() {
    d3.select(".post-preview").remove();
    d3.select(".tooltip").remove();
  }

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    svg.attr("width", newWidth).attr("height", newHeight);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
    simulation.alpha(1).restart();
  });
}

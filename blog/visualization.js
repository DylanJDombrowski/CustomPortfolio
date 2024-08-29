// blog/visualization.js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function createVisualization(posts, container, onPostClick) {
  const width = container.clientWidth;
  const height = container.clientHeight;

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

  svg
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
      group: "post",
      tags: post.tags,
      date: post.date,
      file: post.file,
    })),
    ...Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => ({
      id: tag,
      group: "tag",
    })),
  ];

  const links = posts.flatMap((post) =>
    post.tags.map((tag) => ({ source: post.title, target: tag }))
  );

  const link = g
    .append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#4a9ff5")
    .attr("stroke-opacity", 0.3)
    .attr("stroke-width", 1);

  const node = g
    .append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("click", (event, d) => {
      if (d.group === "post") {
        onPostClick(d);
      }
    });

  node
    .append("circle")
    .attr("r", (d) => (d.group === "post" ? 6 : 4))
    .attr("fill", (d) => (d.group === "post" ? "#fcff5d" : "#4a9ff5"));

  node.append("title").text((d) => d.id);

  // Add hover effect
  node
    .on("mouseover", function (event, d) {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(300)
        .attr("r", (d) => (d.group === "post" ? 8 : 6))
        .attr("fill", "#ffffff");

      // Highlight connected nodes and links
      const connectedNodes = links
        .filter((l) => l.source.id === d.id || l.target.id === d.id)
        .flatMap((l) => [l.source.id, l.target.id]);

      node
        .selectAll("circle")
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
    })
    .on("mouseout", function (event, d) {
      d3.select(this)
        .select("circle")
        .transition()
        .duration(300)
        .attr("r", (d) => (d.group === "post" ? 6 : 4))
        .attr("fill", (d) => (d.group === "post" ? "#fcff5d" : "#4a9ff5"));

      // Reset connected nodes and links
      node
        .selectAll("circle")
        .transition()
        .duration(300)
        .attr("fill", (d) => (d.group === "post" ? "#fcff5d" : "#4a9ff5"));

      link
        .transition()
        .duration(300)
        .attr("stroke", "#4a9ff5")
        .attr("stroke-opacity", 0.3)
        .attr("stroke-width", 1);
    });

  simulation.nodes(nodes).on("tick", ticked);
  simulation.force("link").links(links);

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  }

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
}

var qd = Object.defineProperty;
var ep = (e, t, n) =>
  t in e
    ? qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ku = (e, t, n) => (ep(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rf = { exports: {} },
  na = {},
  af = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lr = Symbol.for("react.element"),
  tp = Symbol.for("react.portal"),
  np = Symbol.for("react.fragment"),
  rp = Symbol.for("react.strict_mode"),
  ip = Symbol.for("react.profiler"),
  ap = Symbol.for("react.provider"),
  op = Symbol.for("react.context"),
  lp = Symbol.for("react.forward_ref"),
  up = Symbol.for("react.suspense"),
  sp = Symbol.for("react.memo"),
  fp = Symbol.for("react.lazy"),
  Su = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var of = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lf = Object.assign,
  uf = {};
function In(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uf),
    (this.updater = n || of);
}
In.prototype.isReactComponent = {};
In.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sf() {}
sf.prototype = In.prototype;
function cl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uf),
    (this.updater = n || of);
}
var dl = (cl.prototype = new sf());
dl.constructor = cl;
lf(dl, In.prototype);
dl.isPureReactComponent = !0;
var xu = Array.isArray,
  ff = Object.prototype.hasOwnProperty,
  pl = { current: null },
  cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      ff.call(t, r) && !cf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Lr,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: pl.current,
  };
}
function dp(e, t) {
  return {
    $$typeof: Lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ml(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Eu = /\/+/g;
function _a(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pp("" + e.key)
    : t.toString(36);
}
function mi(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Lr:
          case tp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + _a(o, 0) : r),
      xu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Eu, "$&/") + "/"),
          mi(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (ml(i) &&
            (i = dp(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Eu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), xu(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var u = r + _a(a, l);
      o += mi(a, t, n, u, i);
    }
  else if (((u = cp(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + _a(a, l++)), (o += mi(a, t, n, u, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    mi(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function mp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  vi = { transition: null },
  vp = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: vi,
    ReactCurrentOwner: pl,
  };
R.Children = {
  map: Wr,
  forEach: function (e, t, n) {
    Wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ml(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = In;
R.Fragment = np;
R.Profiler = ip;
R.PureComponent = cl;
R.StrictMode = rp;
R.Suspense = up;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lf({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = pl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      ff.call(t, u) &&
        !cf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: Lr, type: e.type, key: i, ref: a, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: op,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ap, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = df;
R.createFactory = function (e) {
  var t = df.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: lp, render: e };
};
R.isValidElement = ml;
R.lazy = function (e) {
  return { $$typeof: fp, _payload: { _status: -1, _result: e }, _init: mp };
};
R.memo = function (e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = vi.transition;
  vi.transition = {};
  try {
    e();
  } finally {
    vi.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
R.useContext = function (e) {
  return pe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
R.useId = function () {
  return pe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return pe.current.useRef(e);
};
R.useState = function (e) {
  return pe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return pe.current.useTransition();
};
R.version = "18.2.0";
af.exports = R;
var Jt = af.exports;
const vl = fl(Jt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp = Jt,
  yp = Symbol.for("react.element"),
  gp = Symbol.for("react.fragment"),
  wp = Object.prototype.hasOwnProperty,
  kp = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) wp.call(t, r) && !Sp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: yp,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: kp.current,
  };
}
na.Fragment = gp;
na.jsx = pf;
na.jsxs = pf;
rf.exports = na;
var Ne = rf.exports,
  no = {},
  mf = { exports: {} },
  Ce = {},
  vf = { exports: {} },
  hf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, A) {
    var L = P.length;
    P.push(A);
    e: for (; 0 < L; ) {
      var X = (L - 1) >>> 1,
        te = P[X];
      if (0 < i(te, A)) (P[X] = A), (P[L] = te), (L = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var A = P[0],
      L = P.pop();
    if (L !== A) {
      P[0] = L;
      e: for (var X = 0, te = P.length, $r = te >>> 1; X < $r; ) {
        var Rt = 2 * (X + 1) - 1,
          Ca = P[Rt],
          Mt = Rt + 1,
          Ur = P[Mt];
        if (0 > i(Ca, L))
          Mt < te && 0 > i(Ur, Ca)
            ? ((P[X] = Ur), (P[Mt] = L), (X = Mt))
            : ((P[X] = Ca), (P[Rt] = L), (X = Rt));
        else if (Mt < te && 0 > i(Ur, L)) (P[X] = Ur), (P[Mt] = L), (X = Mt);
        else break e;
      }
    }
    return A;
  }
  function i(P, A) {
    var L = P.sortIndex - A.sortIndex;
    return L !== 0 ? L : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    m = null,
    v = 3,
    h = !1,
    w = !1,
    k = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= P)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function y(P) {
    if (((k = !1), p(P), !w))
      if (n(u) !== null) (w = !0), xa(S);
      else {
        var A = n(s);
        A !== null && Ea(y, A.startTime - P);
      }
  }
  function S(P, A) {
    (w = !1), k && ((k = !1), d(T), (T = -1)), (h = !0);
    var L = v;
    try {
      for (
        p(A), m = n(u);
        m !== null && (!(m.expirationTime > A) || (P && !Re()));

      ) {
        var X = m.callback;
        if (typeof X == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var te = X(m.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (m.callback = te) : m === n(u) && r(u),
            p(A);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var $r = !0;
      else {
        var Rt = n(s);
        Rt !== null && Ea(y, Rt.startTime - A), ($r = !1);
      }
      return $r;
    } finally {
      (m = null), (v = L), (h = !1);
    }
  }
  var C = !1,
    _ = null,
    T = -1,
    b = 5,
    z = -1;
  function Re() {
    return !(e.unstable_now() - z < b);
  }
  function jn() {
    if (_ !== null) {
      var P = e.unstable_now();
      z = P;
      var A = !0;
      try {
        A = _(!0, P);
      } finally {
        A ? Dn() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var Dn;
  if (typeof f == "function")
    Dn = function () {
      f(jn);
    };
  else if (typeof MessageChannel < "u") {
    var wu = new MessageChannel(),
      Jd = wu.port2;
    (wu.port1.onmessage = jn),
      (Dn = function () {
        Jd.postMessage(null);
      });
  } else
    Dn = function () {
      O(jn, 0);
    };
  function xa(P) {
    (_ = P), C || ((C = !0), Dn());
  }
  function Ea(P, A) {
    T = O(function () {
      P(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || h || ((w = !0), xa(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = v;
      }
      var L = v;
      v = A;
      try {
        return P();
      } finally {
        v = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = v;
      v = P;
      try {
        return A();
      } finally {
        v = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, A, L) {
      var X = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? X + L : X))
          : (L = X),
        P)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = L + te),
        (P = {
          id: c++,
          callback: A,
          priorityLevel: P,
          startTime: L,
          expirationTime: te,
          sortIndex: -1,
        }),
        L > X
          ? ((P.sortIndex = L),
            t(s, P),
            n(u) === null &&
              P === n(s) &&
              (k ? (d(T), (T = -1)) : (k = !0), Ea(y, L - X)))
          : ((P.sortIndex = te), t(u, P), w || h || ((w = !0), xa(S))),
        P
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (P) {
      var A = v;
      return function () {
        var L = v;
        v = A;
        try {
          return P.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    });
})(hf);
vf.exports = hf;
var xp = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = Jt,
  Ee = xp;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gf = new Set(),
  sr = {};
function qt(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++) gf.add(t[e]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ro = Object.prototype.hasOwnProperty,
  Ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cu = {},
  _u = {};
function Cp(e) {
  return ro.call(_u, e)
    ? !0
    : ro.call(Cu, e)
    ? !1
    : Ep.test(e)
    ? (_u[e] = !0)
    : ((Cu[e] = !0), !1);
}
function _p(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pp(e, t, n, r) {
  if (t === null || typeof t > "u" || _p(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hl = /[\-:]([a-z])/g;
function yl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hl, yl);
    oe[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hl, yl);
    oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hl, yl);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gl(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pp(t, n, i, r) && (n = null),
    r || i === null
      ? Cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  wl = Symbol.for("react.strict_mode"),
  io = Symbol.for("react.profiler"),
  wf = Symbol.for("react.provider"),
  kf = Symbol.for("react.context"),
  kl = Symbol.for("react.forward_ref"),
  ao = Symbol.for("react.suspense"),
  oo = Symbol.for("react.suspense_list"),
  Sl = Symbol.for("react.memo"),
  ct = Symbol.for("react.lazy"),
  Sf = Symbol.for("react.offscreen"),
  Pu = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pu && e[Pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Pa;
function Qn(e) {
  if (Pa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pa = (t && t[1]) || "";
    }
  return (
    `
` +
    Pa +
    e
  );
}
var Na = !1;
function Ta(e, t) {
  if (!e || Na) return "";
  Na = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ta(e.type, !1)), e;
    case 11:
      return (e = Ta(e.type.render, !1)), e;
    case 1:
      return (e = Ta(e.type, !0)), e;
    default:
      return "";
  }
}
function lo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case io:
      return "Profiler";
    case wl:
      return "StrictMode";
    case ao:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kf:
        return (e.displayName || "Context") + ".Consumer";
      case wf:
        return (e._context.displayName || "Context") + ".Provider";
      case kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Sl:
        return (
          (t = e.displayName || null), t !== null ? t : lo(e.type) || "Memo"
        );
      case ct:
        (t = e._payload), (e = e._init);
        try {
          return lo(e(t));
        } catch {}
    }
  return null;
}
function Tp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return lo(t);
    case 8:
      return t === wl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Op(e) {
  var t = xf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = Op(e));
}
function Ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = xf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cf(e, t) {
  (t = t.checked), t != null && gl(e, "checked", t, !1);
}
function so(e, t) {
  Cf(e, t);
  var n = Pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fo(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fo(e, t, n) {
  (t !== "number" || Ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function _f(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Vr,
  Nf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vr = Vr || document.createElement("div"),
          Vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  Ap.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function Tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Of(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Tf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Lp = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mo(e, t) {
  if (t) {
    if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function vo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ho = null;
function xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yo = null,
  wn = null,
  kn = null;
function Lu(e) {
  if ((e = Rr(e))) {
    if (typeof yo != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = la(t)), yo(e.stateNode, e.type, t));
  }
}
function Af(e) {
  wn ? (kn ? kn.push(e) : (kn = [e])) : (wn = e);
}
function Lf() {
  if (wn) {
    var e = wn,
      t = kn;
    if (((kn = wn = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function If() {}
var Oa = !1;
function Rf(e, t, n) {
  if (Oa) return e(t, n);
  Oa = !0;
  try {
    return zf(e, t, n);
  } finally {
    (Oa = !1), (wn !== null || kn !== null) && (If(), Lf());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = la(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var go = !1;
if (et)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        go = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    go = !1;
  }
function zp(e, t, n, r, i, a, o, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var qn = !1,
  Oi = null,
  Ai = !1,
  wo = null,
  Ip = {
    onError: function (e) {
      (qn = !0), (Oi = e);
    },
  };
function Rp(e, t, n, r, i, a, o, l, u) {
  (qn = !1), (Oi = null), zp.apply(Ip, arguments);
}
function Mp(e, t, n, r, i, a, o, l, u) {
  if ((Rp.apply(this, arguments), qn)) {
    if (qn) {
      var s = Oi;
      (qn = !1), (Oi = null);
    } else throw Error(g(198));
    Ai || ((Ai = !0), (wo = s));
  }
}
function en(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (en(e) !== e) throw Error(g(188));
}
function bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = en(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return zu(i), e;
        if (a === r) return zu(i), t;
        a = a.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function bf(e) {
  return (e = bp(e)), e !== null ? jf(e) : null;
}
function jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Df = Ee.unstable_scheduleCallback,
  Iu = Ee.unstable_cancelCallback,
  jp = Ee.unstable_shouldYield,
  Dp = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  Fp = Ee.unstable_getCurrentPriorityLevel,
  El = Ee.unstable_ImmediatePriority,
  Ff = Ee.unstable_UserBlockingPriority,
  Li = Ee.unstable_NormalPriority,
  $p = Ee.unstable_LowPriority,
  $f = Ee.unstable_IdlePriority,
  ra = null,
  Qe = null;
function Up(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : Bp,
  Wp = Math.log,
  Hp = Math.LN2;
function Bp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / Hp) | 0)) | 0;
}
var Yr = 64,
  Qr = 4194304;
function Xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Xn(l)) : ((a &= o), a !== 0 && (r = Xn(a)));
  } else (o = n & ~i), o !== 0 ? (r = Xn(o)) : a !== 0 && (r = Xn(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Vp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - $e(a),
      l = 1 << o,
      u = i[o];
    u === -1
      ? (!(l & n) || l & r) && (i[o] = Vp(l, t))
      : u <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uf() {
  var e = Yr;
  return (Yr <<= 1), !(Yr & 4194240) && (Yr = 64), e;
}
function Aa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function Qp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $e(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Cl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var j = 0;
function Wf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hf,
  _l,
  Bf,
  Vf,
  Yf,
  So = !1,
  Kr = [],
  gt = null,
  wt = null,
  kt = null,
  dr = new Map(),
  pr = new Map(),
  pt = [],
  Kp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ru(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Rr(t)), t !== null && _l(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Xp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (gt = Un(gt, e, t, n, r, i)), !0;
    case "dragenter":
      return (wt = Un(wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (kt = Un(kt, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return dr.set(a, Un(dr.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), pr.set(a, Un(pr.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Qf(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mf(n)), t !== null)) {
          (e.blockedOn = t),
            Yf(e.priority, function () {
              Bf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ho = r), n.target.dispatchEvent(r), (ho = null);
    } else return (t = Rr(n)), t !== null && _l(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Mu(e, t, n) {
  hi(e) && n.delete(t);
}
function Gp() {
  (So = !1),
    gt !== null && hi(gt) && (gt = null),
    wt !== null && hi(wt) && (wt = null),
    kt !== null && hi(kt) && (kt = null),
    dr.forEach(Mu),
    pr.forEach(Mu);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    So ||
      ((So = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Gp)));
}
function mr(e) {
  function t(i) {
    return Wn(i, e);
  }
  if (0 < Kr.length) {
    Wn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gt !== null && Wn(gt, e),
      wt !== null && Wn(wt, e),
      kt !== null && Wn(kt, e),
      dr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    Qf(n), n.blockedOn === null && pt.shift();
}
var Sn = lt.ReactCurrentBatchConfig,
  Ii = !0;
function Zp(e, t, n, r) {
  var i = j,
    a = Sn.transition;
  Sn.transition = null;
  try {
    (j = 1), Pl(e, t, n, r);
  } finally {
    (j = i), (Sn.transition = a);
  }
}
function Jp(e, t, n, r) {
  var i = j,
    a = Sn.transition;
  Sn.transition = null;
  try {
    (j = 4), Pl(e, t, n, r);
  } finally {
    (j = i), (Sn.transition = a);
  }
}
function Pl(e, t, n, r) {
  if (Ii) {
    var i = xo(e, t, n, r);
    if (i === null) $a(e, t, r, Ri, n), Ru(e, r);
    else if (Xp(i, e, t, n, r)) r.stopPropagation();
    else if ((Ru(e, r), t & 4 && -1 < Kp.indexOf(e))) {
      for (; i !== null; ) {
        var a = Rr(i);
        if (
          (a !== null && Hf(a),
          (a = xo(e, t, n, r)),
          a === null && $a(e, t, r, Ri, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else $a(e, t, r, null, n);
  }
}
var Ri = null;
function xo(e, t, n, r) {
  if (((Ri = null), (e = xl(r)), (e = Dt(e)), e !== null))
    if (((t = en(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ri = e), null;
}
function Kf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fp()) {
        case El:
          return 1;
        case Ff:
          return 4;
        case Li:
        case $p:
          return 16;
        case $f:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vt = null,
  Nl = null,
  yi = null;
function Xf() {
  if (yi) return yi;
  var e,
    t = Nl,
    n = t.length,
    r,
    i = "value" in vt ? vt.value : vt.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (yi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function gi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xr() {
  return !0;
}
function bu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Xr
        : bu),
      (this.isPropagationStopped = bu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xr));
      },
      persist: function () {},
      isPersistent: Xr,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Tl = _e(Rn),
  Ir = Y({}, Rn, { view: 0, detail: 0 }),
  qp = _e(Ir),
  La,
  za,
  Hn,
  ia = Y({}, Ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ol,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hn &&
            (Hn && e.type === "mousemove"
              ? ((La = e.screenX - Hn.screenX), (za = e.screenY - Hn.screenY))
              : (za = La = 0),
            (Hn = e)),
          La);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : za;
    },
  }),
  ju = _e(ia),
  em = Y({}, ia, { dataTransfer: 0 }),
  tm = _e(em),
  nm = Y({}, Ir, { relatedTarget: 0 }),
  Ia = _e(nm),
  rm = Y({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  im = _e(rm),
  am = Y({}, Rn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  om = _e(am),
  lm = Y({}, Rn, { data: 0 }),
  Du = _e(lm),
  um = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fm[e]) ? !!t[e] : !1;
}
function Ol() {
  return cm;
}
var dm = Y({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ol,
    charCode: function (e) {
      return e.type === "keypress" ? gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? gi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pm = _e(dm),
  mm = Y({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fu = _e(mm),
  vm = Y({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ol,
  }),
  hm = _e(vm),
  ym = Y({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gm = _e(ym),
  wm = Y({}, ia, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  km = _e(wm),
  Sm = [9, 13, 27, 32],
  Al = et && "CompositionEvent" in window,
  er = null;
et && "documentMode" in document && (er = document.documentMode);
var xm = et && "TextEvent" in window && !er,
  Gf = et && (!Al || (er && 8 < er && 11 >= er)),
  $u = " ",
  Uu = !1;
function Zf(e, t) {
  switch (e) {
    case "keyup":
      return Sm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Em(e, t) {
  switch (e) {
    case "compositionend":
      return Jf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uu = !0), $u);
    case "textInput":
      return (e = t.data), e === $u && Uu ? null : e;
    default:
      return null;
  }
}
function Cm(e, t) {
  if (an)
    return e === "compositionend" || (!Al && Zf(e, t))
      ? ((e = Xf()), (yi = Nl = vt = null), (an = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _m = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_m[e.type] : t === "textarea";
}
function qf(e, t, n, r) {
  Af(r),
    (t = Mi(t, "onChange")),
    0 < t.length &&
      ((n = new Tl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var tr = null,
  vr = null;
function Pm(e) {
  fc(e, 0);
}
function aa(e) {
  var t = un(e);
  if (Ef(t)) return e;
}
function Nm(e, t) {
  if (e === "change") return t;
}
var ec = !1;
if (et) {
  var Ra;
  if (et) {
    var Ma = "oninput" in document;
    if (!Ma) {
      var Hu = document.createElement("div");
      Hu.setAttribute("oninput", "return;"),
        (Ma = typeof Hu.oninput == "function");
    }
    Ra = Ma;
  } else Ra = !1;
  ec = Ra && (!document.documentMode || 9 < document.documentMode);
}
function Bu() {
  tr && (tr.detachEvent("onpropertychange", tc), (vr = tr = null));
}
function tc(e) {
  if (e.propertyName === "value" && aa(vr)) {
    var t = [];
    qf(t, vr, e, xl(e)), Rf(Pm, t);
  }
}
function Tm(e, t, n) {
  e === "focusin"
    ? (Bu(), (tr = t), (vr = n), tr.attachEvent("onpropertychange", tc))
    : e === "focusout" && Bu();
}
function Om(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return aa(vr);
}
function Am(e, t) {
  if (e === "click") return aa(t);
}
function Lm(e, t) {
  if (e === "input" || e === "change") return aa(t);
}
function zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : zm;
function hr(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ro.call(t, i) || !We(e[i], t[i])) return !1;
  }
  return !0;
}
function Vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yu(e, t) {
  var n = Vu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vu(n);
  }
}
function nc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rc() {
  for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ti(e.document);
  }
  return t;
}
function Ll(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Im(e) {
  var t = rc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ll(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Yu(n, a));
        var o = Yu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rm = et && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  Eo = null,
  nr = null,
  Co = !1;
function Qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Co ||
    on == null ||
    on !== Ti(r) ||
    ((r = on),
    "selectionStart" in r && Ll(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (nr && hr(nr, r)) ||
      ((nr = r),
      (r = Mi(Eo, "onSelect")),
      0 < r.length &&
        ((t = new Tl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Gr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ln = {
    animationend: Gr("Animation", "AnimationEnd"),
    animationiteration: Gr("Animation", "AnimationIteration"),
    animationstart: Gr("Animation", "AnimationStart"),
    transitionend: Gr("Transition", "TransitionEnd"),
  },
  ba = {},
  ic = {};
et &&
  ((ic = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  "TransitionEvent" in window || delete ln.transitionend.transition);
function oa(e) {
  if (ba[e]) return ba[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ic) return (ba[e] = t[n]);
  return e;
}
var ac = oa("animationend"),
  oc = oa("animationiteration"),
  lc = oa("animationstart"),
  uc = oa("transitionend"),
  sc = new Map(),
  Ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lt(e, t) {
  sc.set(e, t), qt(t, [e]);
}
for (var ja = 0; ja < Ku.length; ja++) {
  var Da = Ku[ja],
    Mm = Da.toLowerCase(),
    bm = Da[0].toUpperCase() + Da.slice(1);
  Lt(Mm, "on" + bm);
}
Lt(ac, "onAnimationEnd");
Lt(oc, "onAnimationIteration");
Lt(lc, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(uc, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));
function Xu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mp(r, t, void 0, e), (e.currentTarget = null);
}
function fc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
          Xu(i, l, s), (a = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          Xu(i, l, s), (a = u);
        }
    }
  }
  if (Ai) throw ((e = wo), (Ai = !1), (wo = null), e);
}
function F(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cc(t, e, 2, !1), n.add(r));
}
function Fa(e, t, n) {
  var r = 0;
  t && (r |= 4), cc(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Zr]) {
    (e[Zr] = !0),
      gf.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || Fa(n, !1, e), Fa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || ((t[Zr] = !0), Fa("selectionchange", !1, t));
  }
}
function cc(e, t, n, r) {
  switch (Kf(t)) {
    case 1:
      var i = Zp;
      break;
    case 4:
      i = Jp;
      break;
    default:
      i = Pl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !go ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function $a(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Dt(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Rf(function () {
    var s = a,
      c = xl(n),
      m = [];
    e: {
      var v = sc.get(e);
      if (v !== void 0) {
        var h = Tl,
          w = e;
        switch (e) {
          case "keypress":
            if (gi(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = pm;
            break;
          case "focusin":
            (w = "focus"), (h = Ia);
            break;
          case "focusout":
            (w = "blur"), (h = Ia);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ia;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = tm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = hm;
            break;
          case ac:
          case oc:
          case lc:
            h = im;
            break;
          case uc:
            h = gm;
            break;
          case "scroll":
            h = qp;
            break;
          case "wheel":
            h = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Fu;
        }
        var k = (t & 4) !== 0,
          O = !k && e === "scroll",
          d = k ? (v !== null ? v + "Capture" : null) : v;
        k = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              d !== null && ((y = cr(f, d)), y != null && k.push(gr(f, y, p)))),
            O)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((v = new h(v, w, null, n, c)), m.push({ event: v, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          v &&
            n !== ho &&
            (w = n.relatedTarget || n.fromElement) &&
            (Dt(w) || w[tt]))
        )
          break e;
        if (
          (h || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          h
            ? ((w = n.relatedTarget || n.toElement),
              (h = s),
              (w = w ? Dt(w) : null),
              w !== null &&
                ((O = en(w)), w !== O || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = s)),
          h !== w)
        ) {
          if (
            ((k = ju),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Fu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (O = h == null ? v : un(h)),
            (p = w == null ? v : un(w)),
            (v = new k(y, f + "leave", h, n, c)),
            (v.target = O),
            (v.relatedTarget = p),
            (y = null),
            Dt(c) === s &&
              ((k = new k(d, f + "enter", w, n, c)),
              (k.target = p),
              (k.relatedTarget = O),
              (y = k)),
            (O = y),
            h && w)
          )
            t: {
              for (k = h, d = w, f = 0, p = k; p; p = tn(p)) f++;
              for (p = 0, y = d; y; y = tn(y)) p++;
              for (; 0 < f - p; ) (k = tn(k)), f--;
              for (; 0 < p - f; ) (d = tn(d)), p--;
              for (; f--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = tn(k)), (d = tn(d));
              }
              k = null;
            }
          else k = null;
          h !== null && Gu(m, v, h, k, !1),
            w !== null && O !== null && Gu(m, O, w, k, !0);
        }
      }
      e: {
        if (
          ((v = s ? un(s) : window),
          (h = v.nodeName && v.nodeName.toLowerCase()),
          h === "select" || (h === "input" && v.type === "file"))
        )
          var S = Nm;
        else if (Wu(v))
          if (ec) S = Lm;
          else {
            S = Om;
            var C = Tm;
          }
        else
          (h = v.nodeName) &&
            h.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (S = Am);
        if (S && (S = S(e, s))) {
          qf(m, S, n, c);
          break e;
        }
        C && C(e, v, s),
          e === "focusout" &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === "number" &&
            fo(v, "number", v.value);
      }
      switch (((C = s ? un(s) : window), e)) {
        case "focusin":
          (Wu(C) || C.contentEditable === "true") &&
            ((on = C), (Eo = s), (nr = null));
          break;
        case "focusout":
          nr = Eo = on = null;
          break;
        case "mousedown":
          Co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Co = !1), Qu(m, n, c);
          break;
        case "selectionchange":
          if (Rm) break;
        case "keydown":
        case "keyup":
          Qu(m, n, c);
      }
      var _;
      if (Al)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        an
          ? Zf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Gf &&
          n.locale !== "ko" &&
          (an || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && an && (_ = Xf())
            : ((vt = c),
              (Nl = "value" in vt ? vt.value : vt.textContent),
              (an = !0))),
        (C = Mi(s, T)),
        0 < C.length &&
          ((T = new Du(T, e, null, n, c)),
          m.push({ event: T, listeners: C }),
          _ ? (T.data = _) : ((_ = Jf(n)), _ !== null && (T.data = _)))),
        (_ = xm ? Em(e, n) : Cm(e, n)) &&
          ((s = Mi(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Du("onBeforeInput", "beforeinput", null, n, c)),
            m.push({ event: c, listeners: s }),
            (c.data = _)));
    }
    fc(m, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Mi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = cr(e, n)),
      a != null && r.unshift(gr(e, a, i)),
      (a = cr(e, t)),
      a != null && r.push(gr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gu(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = cr(n, a)), u != null && o.unshift(gr(n, u, l)))
        : i || ((u = cr(n, a)), u != null && o.push(gr(n, u, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dm = /\r\n?/g,
  Fm = /\u0000|\uFFFD/g;
function Zu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dm,
      `
`
    )
    .replace(Fm, "");
}
function Jr(e, t, n) {
  if (((t = Zu(t)), Zu(e) !== t && n)) throw Error(g(425));
}
function bi() {}
var _o = null,
  Po = null;
function No(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  $m = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ju = typeof Promise == "function" ? Promise : void 0,
  Um =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ju < "u"
      ? function (e) {
          return Ju.resolve(null).then(e).catch(Wm);
        }
      : To;
function Wm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ua(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mr(t);
}
function St(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + Mn,
  wr = "__reactProps$" + Mn,
  tt = "__reactContainer$" + Mn,
  Oo = "__reactEvents$" + Mn,
  Hm = "__reactListeners$" + Mn,
  Bm = "__reactHandles$" + Mn;
function Dt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qu(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rr(e) {
  return (
    (e = e[Ve] || e[tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function la(e) {
  return e[wr] || null;
}
var Ao = [],
  sn = -1;
function zt(e) {
  return { current: e };
}
function U(e) {
  0 > sn || ((e.current = Ao[sn]), (Ao[sn] = null), sn--);
}
function D(e, t) {
  sn++, (Ao[sn] = e.current), (e.current = t);
}
var Nt = {},
  fe = zt(Nt),
  ye = zt(!1),
  Vt = Nt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function ji() {
  U(ye), U(fe);
}
function es(e, t, n) {
  if (fe.current !== Nt) throw Error(g(168));
  D(fe, t), D(ye, n);
}
function dc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(g(108, Tp(e) || "Unknown", i));
  return Y({}, n, r);
}
function Di(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    (Vt = fe.current),
    D(fe, e),
    D(ye, ye.current),
    !0
  );
}
function ts(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = dc(e, t, Vt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ye),
      U(fe),
      D(fe, e))
    : U(ye),
    D(ye, n);
}
var Ge = null,
  ua = !1,
  Wa = !1;
function pc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Vm(e) {
  (ua = !0), pc(e);
}
function It() {
  if (!Wa && Ge !== null) {
    Wa = !0;
    var e = 0,
      t = j;
    try {
      var n = Ge;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (ua = !1);
    } catch (i) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), Df(El, It), i);
    } finally {
      (j = t), (Wa = !1);
    }
  }
  return null;
}
var fn = [],
  cn = 0,
  Fi = null,
  $i = 0,
  Te = [],
  Oe = 0,
  Yt = null,
  Ze = 1,
  Je = "";
function bt(e, t) {
  (fn[cn++] = $i), (fn[cn++] = Fi), (Fi = e), ($i = t);
}
function mc(e, t, n) {
  (Te[Oe++] = Ze), (Te[Oe++] = Je), (Te[Oe++] = Yt), (Yt = e);
  var r = Ze;
  e = Je;
  var i = 32 - $e(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - $e(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ze = (1 << (32 - $e(t) + i)) | (n << i) | r),
      (Je = a + e);
  } else (Ze = (1 << a) | (n << i) | r), (Je = e);
}
function zl(e) {
  e.return !== null && (bt(e, 1), mc(e, 1, 0));
}
function Il(e) {
  for (; e === Fi; )
    (Fi = fn[--cn]), (fn[cn] = null), ($i = fn[--cn]), (fn[cn] = null);
  for (; e === Yt; )
    (Yt = Te[--Oe]),
      (Te[Oe] = null),
      (Je = Te[--Oe]),
      (Te[Oe] = null),
      (Ze = Te[--Oe]),
      (Te[Oe] = null);
}
var xe = null,
  Se = null,
  H = !1,
  De = null;
function vc(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ns(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (Se = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (H) {
    var t = Se;
    if (t) {
      var n = t;
      if (!ns(e, t)) {
        if (Lo(e)) throw Error(g(418));
        t = St(n.nextSibling);
        var r = xe;
        t && ns(e, t)
          ? vc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e));
      }
    } else {
      if (Lo(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e);
    }
  }
}
function rs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function qr(e) {
  if (e !== xe) return !1;
  if (!H) return rs(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Lo(e)) throw (hc(), Error(g(418)));
    for (; t; ) vc(e, t), (t = St(t.nextSibling));
  }
  if ((rs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = St(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = xe ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function hc() {
  for (var e = Se; e; ) e = St(e.nextSibling);
}
function Nn() {
  (Se = xe = null), (H = !1);
}
function Rl(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Ym = lt.ReactCurrentBatchConfig;
function be(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ui = zt(null),
  Wi = null,
  dn = null,
  Ml = null;
function bl() {
  Ml = dn = Wi = null;
}
function jl(e) {
  var t = Ui.current;
  U(Ui), (e._currentValue = t);
}
function Io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xn(e, t) {
  (Wi = e),
    (Ml = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (Ml !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (Wi === null) throw Error(g(308));
      (dn = e), (Wi.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var Ft = null;
function Dl(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function yc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    nt(e, r)
  );
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function Fl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      nt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    nt(e, n)
  );
}
function wi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cl(e, n);
  }
}
function is(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hi(e, t, n, r) {
  var i = e.updateQueue;
  dt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), o === null ? (a = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var m = i.baseState;
    (o = 0), (c = s = u = null), (l = a);
    do {
      var v = l.lane,
        h = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            k = l;
          switch (((v = t), (h = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                m = w.call(h, m, v);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (v = typeof w == "function" ? w.call(h, m, v) : w),
                v == null)
              )
                break e;
              m = Y({}, m, v);
              break e;
            case 2:
              dt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [l]) : v.push(l));
      } else
        (h = {
          eventTime: h,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = h), (u = m)) : (c = c.next = h),
          (o |= v);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = m),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Kt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function as(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(g(191, i));
        i.call(r);
      }
    }
}
var wc = new yf.Component().refs;
function Ro(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? en(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Ct(e),
      a = qe(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = xt(e, a, i)),
      t !== null && (Ue(t, e, i, r), wi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = Ct(e),
      a = qe(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = xt(e, a, i)),
      t !== null && (Ue(t, e, i, r), wi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Ct(e),
      i = qe(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = xt(e, i, r)),
      t !== null && (Ue(t, e, r, n), wi(t, e, r));
  },
};
function os(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hr(n, r) || !hr(i, a)
      : !0
  );
}
function kc(e, t, n) {
  var r = !1,
    i = Nt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = ze(a))
      : ((i = ge(t) ? Vt : fe.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Pn(e, i) : Nt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function ls(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sa.enqueueReplaceState(t, t.state, null);
}
function Mo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = wc), Fl(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = ze(a))
    : ((a = ge(t) ? Vt : fe.current), (i.context = Pn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Ro(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && sa.enqueueReplaceState(i, i.state, null),
      Hi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === wc && (l = i.refs = {}),
              o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function ei(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function us(e) {
  var t = e._init;
  return t(e._payload);
}
function Sc(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = _t(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, f, p, y) {
    return f === null || f.tag !== 6
      ? ((f = Xa(p, d.mode, y)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function u(d, f, p, y) {
    var S = p.type;
    return S === rn
      ? c(d, f, p.props.children, y, p.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === ct &&
            us(S) === f.type))
      ? ((y = i(f, p.props)), (y.ref = Bn(d, f, p)), (y.return = d), y)
      : ((y = _i(p.type, p.key, p.props, null, d.mode, y)),
        (y.ref = Bn(d, f, p)),
        (y.return = d),
        y);
  }
  function s(d, f, p, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = Ga(p, d.mode, y)), (f.return = d), f)
      : ((f = i(f, p.children || [])), (f.return = d), f);
  }
  function c(d, f, p, y, S) {
    return f === null || f.tag !== 7
      ? ((f = Bt(p, d.mode, y, S)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function m(d, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Xa("" + f, d.mode, p)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Hr:
          return (
            (p = _i(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = Bn(d, null, f)),
            (p.return = d),
            p
          );
        case nn:
          return (f = Ga(f, d.mode, p)), (f.return = d), f;
        case ct:
          var y = f._init;
          return m(d, y(f._payload), p);
      }
      if (Kn(f) || Fn(f))
        return (f = Bt(f, d.mode, p, null)), (f.return = d), f;
      ei(d, f);
    }
    return null;
  }
  function v(d, f, p, y) {
    var S = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : l(d, f, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Hr:
          return p.key === S ? u(d, f, p, y) : null;
        case nn:
          return p.key === S ? s(d, f, p, y) : null;
        case ct:
          return (S = p._init), v(d, f, S(p._payload), y);
      }
      if (Kn(p) || Fn(p)) return S !== null ? null : c(d, f, p, y, null);
      ei(d, p);
    }
    return null;
  }
  function h(d, f, p, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(p) || null), l(f, d, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Hr:
          return (d = d.get(y.key === null ? p : y.key) || null), u(f, d, y, S);
        case nn:
          return (d = d.get(y.key === null ? p : y.key) || null), s(f, d, y, S);
        case ct:
          var C = y._init;
          return h(d, f, p, C(y._payload), S);
      }
      if (Kn(y) || Fn(y)) return (d = d.get(p) || null), c(f, d, y, S, null);
      ei(f, y);
    }
    return null;
  }
  function w(d, f, p, y) {
    for (
      var S = null, C = null, _ = f, T = (f = 0), b = null;
      _ !== null && T < p.length;
      T++
    ) {
      _.index > T ? ((b = _), (_ = null)) : (b = _.sibling);
      var z = v(d, _, p[T], y);
      if (z === null) {
        _ === null && (_ = b);
        break;
      }
      e && _ && z.alternate === null && t(d, _),
        (f = a(z, f, T)),
        C === null ? (S = z) : (C.sibling = z),
        (C = z),
        (_ = b);
    }
    if (T === p.length) return n(d, _), H && bt(d, T), S;
    if (_ === null) {
      for (; T < p.length; T++)
        (_ = m(d, p[T], y)),
          _ !== null &&
            ((f = a(_, f, T)), C === null ? (S = _) : (C.sibling = _), (C = _));
      return H && bt(d, T), S;
    }
    for (_ = r(d, _); T < p.length; T++)
      (b = h(_, d, T, p[T], y)),
        b !== null &&
          (e && b.alternate !== null && _.delete(b.key === null ? T : b.key),
          (f = a(b, f, T)),
          C === null ? (S = b) : (C.sibling = b),
          (C = b));
    return (
      e &&
        _.forEach(function (Re) {
          return t(d, Re);
        }),
      H && bt(d, T),
      S
    );
  }
  function k(d, f, p, y) {
    var S = Fn(p);
    if (typeof S != "function") throw Error(g(150));
    if (((p = S.call(p)), p == null)) throw Error(g(151));
    for (
      var C = (S = null), _ = f, T = (f = 0), b = null, z = p.next();
      _ !== null && !z.done;
      T++, z = p.next()
    ) {
      _.index > T ? ((b = _), (_ = null)) : (b = _.sibling);
      var Re = v(d, _, z.value, y);
      if (Re === null) {
        _ === null && (_ = b);
        break;
      }
      e && _ && Re.alternate === null && t(d, _),
        (f = a(Re, f, T)),
        C === null ? (S = Re) : (C.sibling = Re),
        (C = Re),
        (_ = b);
    }
    if (z.done) return n(d, _), H && bt(d, T), S;
    if (_ === null) {
      for (; !z.done; T++, z = p.next())
        (z = m(d, z.value, y)),
          z !== null &&
            ((f = a(z, f, T)), C === null ? (S = z) : (C.sibling = z), (C = z));
      return H && bt(d, T), S;
    }
    for (_ = r(d, _); !z.done; T++, z = p.next())
      (z = h(_, d, T, z.value, y)),
        z !== null &&
          (e && z.alternate !== null && _.delete(z.key === null ? T : z.key),
          (f = a(z, f, T)),
          C === null ? (S = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        _.forEach(function (jn) {
          return t(d, jn);
        }),
      H && bt(d, T),
      S
    );
  }
  function O(d, f, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Hr:
          e: {
            for (var S = p.key, C = f; C !== null; ) {
              if (C.key === S) {
                if (((S = p.type), S === rn)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (f = i(C, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === ct &&
                    us(S) === C.type)
                ) {
                  n(d, C.sibling),
                    (f = i(C, p.props)),
                    (f.ref = Bn(d, C, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === rn
              ? ((f = Bt(p.props.children, d.mode, y, p.key)),
                (f.return = d),
                (d = f))
              : ((y = _i(p.type, p.key, p.props, null, d.mode, y)),
                (y.ref = Bn(d, f, p)),
                (y.return = d),
                (d = y));
          }
          return o(d);
        case nn:
          e: {
            for (C = p.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(d, f.sibling),
                    (f = i(f, p.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Ga(p, d.mode, y)), (f.return = d), (d = f);
          }
          return o(d);
        case ct:
          return (C = p._init), O(d, f, C(p._payload), y);
      }
      if (Kn(p)) return w(d, f, p, y);
      if (Fn(p)) return k(d, f, p, y);
      ei(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, p)), (f.return = d), (d = f))
          : (n(d, f), (f = Xa(p, d.mode, y)), (f.return = d), (d = f)),
        o(d))
      : n(d, f);
  }
  return O;
}
var Tn = Sc(!0),
  xc = Sc(!1),
  Mr = {},
  Ke = zt(Mr),
  kr = zt(Mr),
  Sr = zt(Mr);
function $t(e) {
  if (e === Mr) throw Error(g(174));
  return e;
}
function $l(e, t) {
  switch ((D(Sr, t), D(kr, e), D(Ke, Mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : po(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = po(t, e));
  }
  U(Ke), D(Ke, t);
}
function On() {
  U(Ke), U(kr), U(Sr);
}
function Ec(e) {
  $t(Sr.current);
  var t = $t(Ke.current),
    n = po(t, e.type);
  t !== n && (D(kr, e), D(Ke, n));
}
function Ul(e) {
  kr.current === e && (U(Ke), U(kr));
}
var B = zt(0);
function Bi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ha = [];
function Wl() {
  for (var e = 0; e < Ha.length; e++)
    Ha[e]._workInProgressVersionPrimary = null;
  Ha.length = 0;
}
var ki = lt.ReactCurrentDispatcher,
  Ba = lt.ReactCurrentBatchConfig,
  Qt = 0,
  V = null,
  J = null,
  ne = null,
  Vi = !1,
  rr = !1,
  xr = 0,
  Qm = 0;
function le() {
  throw Error(g(321));
}
function Hl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1;
  return !0;
}
function Bl(e, t, n, r, i, a) {
  if (
    ((Qt = a),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ki.current = e === null || e.memoizedState === null ? Zm : Jm),
    (e = n(r, i)),
    rr)
  ) {
    a = 0;
    do {
      if (((rr = !1), (xr = 0), 25 <= a)) throw Error(g(301));
      (a += 1),
        (ne = J = null),
        (t.updateQueue = null),
        (ki.current = qm),
        (e = n(r, i));
    } while (rr);
  }
  if (
    ((ki.current = Yi),
    (t = J !== null && J.next !== null),
    (Qt = 0),
    (ne = J = V = null),
    (Vi = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function Vl() {
  var e = xr !== 0;
  return (xr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (V.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Ie() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ne === null ? V.memoizedState : ne.next;
  if (t !== null) (ne = t), (J = e);
  else {
    if (e === null) throw Error(g(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ne === null ? (V.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Va(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = J,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      u = null,
      s = a;
    do {
      var c = s.lane;
      if ((Qt & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = m), (o = r)) : (u = u.next = m),
          (V.lanes |= c),
          (Kt |= c);
      }
      s = s.next;
    } while (s !== null && s !== a);
    u === null ? (o = r) : (u.next = l),
      We(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (V.lanes |= a), (Kt |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ya(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    We(a, t.memoizedState) || (he = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Cc() {}
function _c(e, t) {
  var n = V,
    r = Ie(),
    i = t(),
    a = !We(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (he = !0)),
    (r = r.queue),
    Yl(Tc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cr(9, Nc.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(g(349));
    Qt & 30 || Pc(n, t, i);
  }
  return i;
}
function Pc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oc(t) && Ac(e);
}
function Tc(e, t, n) {
  return n(function () {
    Oc(t) && Ac(e);
  });
}
function Oc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function Ac(e) {
  var t = nt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function ss(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gm.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lc() {
  return Ie().memoizedState;
}
function Si(e, t, n, r) {
  var i = Be();
  (V.flags |= e),
    (i.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fa(e, t, n, r) {
  var i = Ie();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((a = o.destroy), r !== null && Hl(r, o.deps))) {
      i.memoizedState = Cr(t, n, a, r);
      return;
    }
  }
  (V.flags |= e), (i.memoizedState = Cr(1 | t, n, a, r));
}
function fs(e, t) {
  return Si(8390656, 8, e, t);
}
function Yl(e, t) {
  return fa(2048, 8, e, t);
}
function zc(e, t) {
  return fa(4, 2, e, t);
}
function Ic(e, t) {
  return fa(4, 4, e, t);
}
function Rc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fa(4, 4, Rc.bind(null, t, e), n)
  );
}
function Ql() {}
function bc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Dc(e, t, n) {
  return Qt & 21
    ? (We(n, t) || ((n = Uf()), (V.lanes |= n), (Kt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Km(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ba.transition;
  Ba.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (Ba.transition = r);
  }
}
function Fc() {
  return Ie().memoizedState;
}
function Xm(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $c(e))
  )
    Uc(t, n);
  else if (((n = yc(e, t, n, r)), n !== null)) {
    var i = de();
    Ue(n, e, r, i), Wc(n, t, r);
  }
}
function Gm(e, t, n) {
  var r = Ct(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($c(e)) Uc(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), We(l, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Dl(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = yc(e, t, i, r)),
      n !== null && ((i = de()), Ue(n, e, r, i), Wc(n, t, r));
  }
}
function $c(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Uc(e, t) {
  rr = Vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cl(e, n);
  }
}
var Yi = {
    readContext: ze,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: fs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Si(4194308, 4, Rc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Si(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Si(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xm.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ss,
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = ss(!1),
        t = e[0];
      return (e = Km.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        i = Be();
      if (H) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(g(349));
        Qt & 30 || Pc(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        fs(Tc.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Cr(9, Nc.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = re.identifierPrefix;
      if (H) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jm = {
    readContext: ze,
    useCallback: bc,
    useContext: ze,
    useEffect: Yl,
    useImperativeHandle: Mc,
    useInsertionEffect: zc,
    useLayoutEffect: Ic,
    useMemo: jc,
    useReducer: Va,
    useRef: Lc,
    useState: function () {
      return Va(Er);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ie();
      return Dc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Va(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Cc,
    useSyncExternalStore: _c,
    useId: Fc,
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: ze,
    useCallback: bc,
    useContext: ze,
    useEffect: Yl,
    useImperativeHandle: Mc,
    useInsertionEffect: zc,
    useLayoutEffect: Ic,
    useMemo: jc,
    useReducer: Ya,
    useRef: Lc,
    useState: function () {
      return Ya(Er);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ie();
      return J === null ? (t.memoizedState = e) : Dc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Ya(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Cc,
    useSyncExternalStore: _c,
    useId: Fc,
    unstable_isNewReconciler: !1,
  };
function An(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Np(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Qa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ev = typeof WeakMap == "function" ? WeakMap : Map;
function Hc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ki || ((Ki = !0), (Yo = r)), bo(e, t);
    }),
    n
  );
}
function Bc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        bo(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        bo(e, t),
          typeof r != "function" &&
            (Et === null ? (Et = new Set([this])) : Et.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ev();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = mv.bind(null, e, t, n)), t.then(e, e));
}
function ds(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ps(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tv = lt.ReactCurrentOwner,
  he = !1;
function ce(e, t, n, r) {
  t.child = e === null ? xc(t, null, n, r) : Tn(t, e.child, n, r);
}
function ms(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    xn(t, i),
    (r = Bl(e, t, n, r, a, i)),
    (n = Vl()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        rt(e, t, i))
      : (H && n && zl(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function vs(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !tu(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Vc(e, t, a, r, i))
      : ((e = _i(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hr), n(o, r) && e.ref === t.ref)
    )
      return rt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vc(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hr(a, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), rt(e, t, i);
  }
  return jo(e, t, n, r, i);
}
function Yc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(mn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(mn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        D(mn, ke),
        (ke |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(mn, ke),
      (ke |= r);
  return ce(e, t, i, n), t.child;
}
function Qc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function jo(e, t, n, r, i) {
  var a = ge(n) ? Vt : fe.current;
  return (
    (a = Pn(t, a)),
    xn(t, i),
    (n = Bl(e, t, n, r, a, i)),
    (r = Vl()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        rt(e, t, i))
      : (H && r && zl(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function hs(e, t, n, r, i) {
  if (ge(n)) {
    var a = !0;
    Di(t);
  } else a = !1;
  if ((xn(t, i), t.stateNode === null))
    xi(e, t), kc(t, n, r), Mo(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ze(s))
      : ((s = ge(n) ? Vt : fe.current), (s = Pn(t, s)));
    var c = n.getDerivedStateFromProps,
      m =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && ls(t, o, r, s)),
      (dt = !1);
    var v = t.memoizedState;
    (o.state = v),
      Hi(t, r, o, i),
      (u = t.memoizedState),
      l !== r || v !== u || ye.current || dt
        ? (typeof c == "function" && (Ro(t, n, c, r), (u = t.memoizedState)),
          (l = dt || os(t, n, l, r, v, u, s))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      gc(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : be(t.type, l)),
      (o.props = s),
      (m = t.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ze(u))
        : ((u = ge(n) ? Vt : fe.current), (u = Pn(t, u)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== m || v !== u) && ls(t, o, r, u)),
      (dt = !1),
      (v = t.memoizedState),
      (o.state = v),
      Hi(t, r, o, i);
    var w = t.memoizedState;
    l !== m || v !== w || ye.current || dt
      ? (typeof h == "function" && (Ro(t, n, h, r), (w = t.memoizedState)),
        (s = dt || os(t, n, s, r, v, w, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Do(e, t, n, r, a, i);
}
function Do(e, t, n, r, i, a) {
  Qc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ts(t, n, !1), rt(e, t, a);
  (r = t.stateNode), (tv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Tn(t, e.child, null, a)), (t.child = Tn(t, null, l, a)))
      : ce(e, t, l, a),
    (t.memoizedState = r.state),
    i && ts(t, n, !0),
    t.child
  );
}
function Kc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? es(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && es(e, t.context, !1),
    $l(e, t.containerInfo);
}
function ys(e, t, n, r, i) {
  return Nn(), Rl(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xc(e, t, n) {
  var r = t.pendingProps,
    i = B.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    D(B, i & 1),
    e === null)
  )
    return (
      zo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = pa(o, r, 0, null)),
              (e = Bt(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = $o(n)),
              (t.memoizedState = Fo),
              e)
            : Kl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return nv(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = _t(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = _t(l, a)) : ((a = Bt(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? $o(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fo),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = _t(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kl(e, t) {
  return (
    (t = pa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ti(e, t, n, r) {
  return (
    r !== null && Rl(r),
    Tn(t, e.child, null, n),
    (e = Kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nv(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qa(Error(g(422)))), ti(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = pa({ mode: "visible", children: r.children }, i, 0, null)),
        (a = Bt(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Tn(t, e.child, null, o),
        (t.child.memoizedState = $o(o)),
        (t.memoizedState = Fo),
        a);
  if (!(t.mode & 1)) return ti(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(g(419))), (r = Qa(a, r, void 0)), ti(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), he || l)) {
    if (((r = re), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), nt(e, i), Ue(r, e, i, -1));
    }
    return eu(), (r = Qa(Error(g(421)))), ti(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Se = St(i.nextSibling)),
      (xe = t),
      (H = !0),
      (De = null),
      e !== null &&
        ((Te[Oe++] = Ze),
        (Te[Oe++] = Je),
        (Te[Oe++] = Yt),
        (Ze = e.id),
        (Je = e.overflow),
        (Yt = t)),
      (t = Kl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function Ka(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Gc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gs(e, n, t);
        else if (e.tag === 19) gs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ka(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ka(t, !0, n, null, a);
        break;
      case "together":
        Ka(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rv(e, t, n) {
  switch (t.tag) {
    case 3:
      Kc(t), Nn();
      break;
    case 5:
      Ec(t);
      break;
    case 1:
      ge(t.type) && Di(t);
      break;
    case 4:
      $l(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      D(Ui, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Xc(e, t, n)
          : (D(B, B.current & 1),
            (e = rt(e, t, n)),
            e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yc(e, t, n);
  }
  return rt(e, t, n);
}
var Zc, Uo, Jc, qc;
Zc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uo = function () {};
Jc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $t(Ke.current);
    var a = null;
    switch (n) {
      case "input":
        (i = uo(e, i)), (r = uo(e, r)), (a = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = co(e, i)), (r = co(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bi);
    }
    mo(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (sr.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (a || (a = []), a.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (a = a || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (sr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && F("scroll", e),
                  a || l === u || (a = []))
                : (a = a || []).push(s, u));
    }
    n && (a = a || []).push("style", n);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
qc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function iv(e, t, n) {
  var r = t.pendingProps;
  switch ((Il(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return ge(t.type) && ji(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        U(ye),
        U(fe),
        Wl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Xo(De), (De = null)))),
        Uo(e, t),
        ue(t),
        null
      );
    case 5:
      Ul(t);
      var i = $t(Sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Jc(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ue(t), null;
        }
        if (((e = $t(Ke.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Ve] = t), (r[wr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gn.length; i++) F(Gn[i], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Nu(r, a), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Ou(r, a), F("invalid", r);
          }
          mo(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : sr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), Tu(r, a, !0);
              break;
            case "textarea":
              Br(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = bi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ve] = t),
            (e[wr] = r),
            Zc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = vo(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gn.length; i++) F(Gn[i], e);
                i = r;
                break;
              case "source":
                F("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (i = r);
                break;
              case "details":
                F("toggle", e), (i = r);
                break;
              case "input":
                Nu(e, r), (i = uo(e, r)), F("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Ou(e, r), (i = co(e, r)), F("invalid", e);
                break;
              default:
                i = r;
            }
            mo(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var u = l[a];
                a === "style"
                  ? Of(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Nf(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && fr(e, u)
                    : typeof u == "number" && fr(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (sr.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && F("scroll", e)
                      : u != null && gl(e, a, u, o));
              }
            switch (n) {
              case "input":
                Br(e), Tu(e, r, !1);
                break;
              case "textarea":
                Br(e), Au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? gn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = bi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = $t(Sr.current)), $t(Ke.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (a = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Se !== null && t.mode & 1 && !(t.flags & 128))
          hc(), Nn(), (t.flags |= 98560), (a = !1);
        else if (((a = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(g(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(g(317));
            a[Ve] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (a = !1);
        } else De !== null && (Xo(De), (De = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? q === 0 && (q = 3) : eu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        On(), Uo(e, t), e === null && yr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return jl(t.type._context), ue(t), null;
    case 17:
      return ge(t.type) && ji(), ue(t), null;
    case 19:
      if ((U(B), (a = t.memoizedState), a === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Vn(a, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Bi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Vn(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            G() > Ln &&
            ((t.flags |= 128), (r = !0), Vn(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !H)
            )
              return ue(t), null;
          } else
            2 * G() - a.renderingStartTime > Ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = G()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        ql(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function av(e, t) {
  switch ((Il(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && ji(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        U(ye),
        U(fe),
        Wl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ul(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return On(), null;
    case 10:
      return jl(t.type._context), null;
    case 22:
    case 23:
      return ql(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1,
  se = !1,
  ov = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Wo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ws = !1;
function lv(e, t) {
  if (((_o = Ii), (e = rc()), Ll(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var h;
              m !== n || (i !== 0 && m.nodeType !== 3) || (l = o + i),
                m !== a || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (h = m.firstChild) !== null;

            )
              (v = m), (m = h);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++s === i && (l = o),
                v === a && ++c === r && (u = o),
                (h = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = h;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, Ii = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    O = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : be(t.type, k),
                      O
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          Q(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = ws), (ws = !1), w;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Wo(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ca(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ho(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[wr], delete t[Oo], delete t[Hm], delete t[Bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ks(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), (e = e.sibling);
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
var ie = null,
  je = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), (n = n.sibling);
}
function nd(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(ra, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || pn(n, t);
    case 6:
      var r = ie,
        i = je;
      (ie = null),
        st(e, t, n),
        (ie = r),
        (je = i),
        ie !== null &&
          (je
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (je
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ua(e.parentNode, n)
              : e.nodeType === 1 && Ua(e, n),
            mr(e))
          : Ua(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (i = je),
        (ie = n.stateNode.containerInfo),
        (je = !0),
        st(e, t, n),
        (ie = r),
        (je = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Wo(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Q(n, t, l);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), st(e, t, n), (se = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function Ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ov()),
      t.forEach(function (r) {
        var i = hv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ie = l.stateNode), (je = !1);
              break e;
            case 3:
              (ie = l.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (ie = l.stateNode.containerInfo), (je = !0);
              break e;
          }
          l = l.return;
        }
        if (ie === null) throw Error(g(160));
        nd(a, o, i), (ie = null), (je = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        Q(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rd(t, e), (t = t.sibling);
}
function rd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), He(e), r & 4)) {
        try {
          ir(3, e, e.return), ca(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          ir(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Me(t, e), He(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        He(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          fr(i, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && Cf(i, a),
              vo(l, o);
            var s = vo(l, a);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                m = u[o + 1];
              c === "style"
                ? Of(i, m)
                : c === "dangerouslySetInnerHTML"
                ? Nf(i, m)
                : c === "children"
                ? fr(i, m)
                : gl(i, c, m, s);
            }
            switch (l) {
              case "input":
                so(i, a);
                break;
              case "textarea":
                _f(i, a);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? gn(i, !!a.multiple, h, !1)
                  : v !== !!a.multiple &&
                    (a.defaultValue != null
                      ? gn(i, !!a.multiple, a.defaultValue, !0)
                      : gn(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[wr] = a;
          } catch (k) {
            Q(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Me(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mr(t.containerInfo);
        } catch (k) {
          Q(e, e.return, k);
        }
      break;
    case 4:
      Me(t, e), He(e);
      break;
    case 13:
      Me(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Zl = G())),
        r & 4 && Ss(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (s = se) || c), Me(t, e), (se = s)) : Me(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (E = e, c = e.child; c !== null; ) {
            for (m = E = c; E !== null; ) {
              switch (((v = E), (h = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, v, v.return);
                  break;
                case 1:
                  pn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      Q(r, n, k);
                    }
                  }
                  break;
                case 5:
                  pn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Es(m);
                    continue;
                  }
              }
              h !== null ? ((h.return = v), (E = h)) : Es(m);
            }
            c = c.sibling;
          }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                (i = m.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Tf("display", o)));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (c === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (k) {
                Q(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), (m = m.return);
          }
          c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), He(e), r & 4 && Ss(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (fr(i, ""), (r.flags &= -33));
          var a = ks(e);
          Vo(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = ks(e);
          Bo(e, l, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uv(e, t, n) {
  (E = e), id(e);
}
function id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var i = E,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ni;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || se;
        l = ni;
        var s = se;
        if (((ni = o), (se = u) && !s))
          for (E = i; E !== null; )
            (o = E),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Cs(i)
                : u !== null
                ? ((u.return = o), (E = u))
                : Cs(i);
        for (; a !== null; ) (E = a), id(a), (a = a.sibling);
        (E = i), (ni = l), (se = s);
      }
      xs(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (E = a)) : xs(e);
  }
}
function xs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && as(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                as(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var m = c.dehydrated;
                    m !== null && mr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        se || (t.flags & 512 && Ho(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Es(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Cs(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ca(4, t);
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Q(t, i, u);
            }
          }
          var a = t.return;
          try {
            Ho(t);
          } catch (u) {
            Q(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ho(t);
          } catch (u) {
            Q(t, o, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
    }
    if (t === e) {
      E = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (E = l);
      break;
    }
    E = t.return;
  }
}
var sv = Math.ceil,
  Qi = lt.ReactCurrentDispatcher,
  Xl = lt.ReactCurrentOwner,
  Le = lt.ReactCurrentBatchConfig,
  M = 0,
  re = null,
  Z = null,
  ae = 0,
  ke = 0,
  mn = zt(0),
  q = 0,
  _r = null,
  Kt = 0,
  da = 0,
  Gl = 0,
  ar = null,
  ve = null,
  Zl = 0,
  Ln = 1 / 0,
  Xe = null,
  Ki = !1,
  Yo = null,
  Et = null,
  ri = !1,
  ht = null,
  Xi = 0,
  or = 0,
  Qo = null,
  Ei = -1,
  Ci = 0;
function de() {
  return M & 6 ? G() : Ei !== -1 ? Ei : (Ei = G());
}
function Ct(e) {
  return e.mode & 1
    ? M & 2 && ae !== 0
      ? ae & -ae
      : Ym.transition !== null
      ? (Ci === 0 && (Ci = Uf()), Ci)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kf(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < or) throw ((or = 0), (Qo = null), Error(g(185)));
  zr(e, n, r),
    (!(M & 2) || e !== re) &&
      (e === re && (!(M & 2) && (da |= n), q === 4 && mt(e, ae)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Ln = G() + 500), ua && It()));
}
function we(e, t) {
  var n = e.callbackNode;
  Yp(e, t);
  var r = zi(e, e === re ? ae : 0);
  if (r === 0)
    n !== null && Iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Iu(n), t === 1))
      e.tag === 0 ? Vm(_s.bind(null, e)) : pc(_s.bind(null, e)),
        Um(function () {
          !(M & 6) && It();
        }),
        (n = null);
    else {
      switch (Wf(r)) {
        case 1:
          n = El;
          break;
        case 4:
          n = Ff;
          break;
        case 16:
          n = Li;
          break;
        case 536870912:
          n = $f;
          break;
        default:
          n = Li;
      }
      n = dd(n, ad.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ad(e, t) {
  if (((Ei = -1), (Ci = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = zi(e, e === re ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Gi(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var a = ld();
    (re !== e || ae !== t) && ((Xe = null), (Ln = G() + 500), Ht(e, t));
    do
      try {
        dv();
        break;
      } catch (l) {
        od(e, l);
      }
    while (!0);
    bl(),
      (Qi.current = a),
      (M = i),
      Z !== null ? (t = 0) : ((re = null), (ae = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ko(e)), i !== 0 && ((r = i), (t = Ko(e, i)))), t === 1)
    )
      throw ((n = _r), Ht(e, 0), mt(e, r), we(e, G()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !fv(i) &&
          ((t = Gi(e, r)),
          t === 2 && ((a = ko(e)), a !== 0 && ((r = a), (t = Ko(e, a)))),
          t === 1))
      )
        throw ((n = _r), Ht(e, 0), mt(e, r), we(e, G()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          jt(e, ve, Xe);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = Zl + 500 - G()), 10 < t))
          ) {
            if (zi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = To(jt.bind(null, e, ve, Xe), t);
            break;
          }
          jt(e, ve, Xe);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - $e(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(jt.bind(null, e, ve, Xe), r);
            break;
          }
          jt(e, ve, Xe);
          break;
        case 5:
          jt(e, ve, Xe);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function Ko(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = Gi(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && Xo(t)),
    e
  );
}
function Xo(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function fv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!We(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~Gl,
      t &= ~da,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _s(e) {
  if (M & 6) throw Error(g(327));
  En();
  var t = zi(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = Gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && ((t = r), (n = Ko(e, r)));
  }
  if (n === 1) throw ((n = _r), Ht(e, 0), mt(e, t), we(e, G()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, ve, Xe),
    we(e, G()),
    null
  );
}
function Jl(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Ln = G() + 500), ua && It());
  }
}
function Xt(e) {
  ht !== null && ht.tag === 0 && !(M & 6) && En();
  var t = M;
  M |= 1;
  var n = Le.transition,
    r = j;
  try {
    if (((Le.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (Le.transition = n), (M = t), !(M & 6) && It();
  }
}
function ql() {
  (ke = mn.current), U(mn);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $m(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Il(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ji();
          break;
        case 3:
          On(), U(ye), U(fe), Wl();
          break;
        case 5:
          Ul(r);
          break;
        case 4:
          On();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          jl(r.type._context);
          break;
        case 22:
        case 23:
          ql();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (Z = e = _t(e.current, null)),
    (ae = ke = t),
    (q = 0),
    (_r = null),
    (Gl = da = Kt = 0),
    (ve = ar = null),
    Ft !== null)
  ) {
    for (t = 0; t < Ft.length; t++)
      if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Ft = null;
  }
  return e;
}
function od(e, t) {
  do {
    var n = Z;
    try {
      if ((bl(), (ki.current = Yi), Vi)) {
        for (var r = V.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vi = !1;
      }
      if (
        ((Qt = 0),
        (ne = J = V = null),
        (rr = !1),
        (xr = 0),
        (Xl.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (_r = t), (Z = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          u = t;
        if (
          ((t = ae),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = l,
            m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = ds(o);
          if (h !== null) {
            (h.flags &= -257),
              ps(h, o, l, a, t),
              h.mode & 1 && cs(a, s, t),
              (t = h),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              cs(a, s, t), eu();
              break e;
            }
            u = Error(g(426));
          }
        } else if (H && l.mode & 1) {
          var O = ds(o);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              ps(O, o, l, a, t),
              Rl(An(u, l));
            break e;
          }
        }
        (a = u = An(u, l)),
          q !== 4 && (q = 2),
          ar === null ? (ar = [a]) : ar.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var d = Hc(a, u, t);
              is(a, d);
              break e;
            case 1:
              l = u;
              var f = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Et === null || !Et.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var y = Bc(a, l, t);
                is(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      sd(n);
    } catch (S) {
      (t = S), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ld() {
  var e = Qi.current;
  return (Qi.current = Yi), e === null ? Yi : e;
}
function eu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    re === null || (!(Kt & 268435455) && !(da & 268435455)) || mt(re, ae);
}
function Gi(e, t) {
  var n = M;
  M |= 2;
  var r = ld();
  (re !== e || ae !== t) && ((Xe = null), Ht(e, t));
  do
    try {
      cv();
      break;
    } catch (i) {
      od(e, i);
    }
  while (!0);
  if ((bl(), (M = n), (Qi.current = r), Z !== null)) throw Error(g(261));
  return (re = null), (ae = 0), q;
}
function cv() {
  for (; Z !== null; ) ud(Z);
}
function dv() {
  for (; Z !== null && !jp(); ) ud(Z);
}
function ud(e) {
  var t = cd(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? sd(e) : (Z = t),
    (Xl.current = null);
}
function sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = av(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = iv(n, t, ke)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function jt(e, t, n) {
  var r = j,
    i = Le.transition;
  try {
    (Le.transition = null), (j = 1), pv(e, t, n, r);
  } finally {
    (Le.transition = i), (j = r);
  }
  return null;
}
function pv(e, t, n, r) {
  do En();
  while (ht !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Qp(e, a),
    e === re && ((Z = re = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ri ||
      ((ri = !0),
      dd(Li, function () {
        return En(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = Le.transition), (Le.transition = null);
    var o = j;
    j = 1;
    var l = M;
    (M |= 4),
      (Xl.current = null),
      lv(e, n),
      rd(n, e),
      Im(Po),
      (Ii = !!_o),
      (Po = _o = null),
      (e.current = n),
      uv(n),
      Dp(),
      (M = l),
      (j = o),
      (Le.transition = a);
  } else e.current = n;
  if (
    (ri && ((ri = !1), (ht = e), (Xi = i)),
    (a = e.pendingLanes),
    a === 0 && (Et = null),
    Up(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ki) throw ((Ki = !1), (e = Yo), (Yo = null), e);
  return (
    Xi & 1 && e.tag !== 0 && En(),
    (a = e.pendingLanes),
    a & 1 ? (e === Qo ? or++ : ((or = 0), (Qo = e))) : (or = 0),
    It(),
    null
  );
}
function En() {
  if (ht !== null) {
    var e = Wf(Xi),
      t = Le.transition,
      n = j;
    try {
      if (((Le.transition = null), (j = 16 > e ? 16 : e), ht === null))
        var r = !1;
      else {
        if (((e = ht), (ht = null), (Xi = 0), M & 6)) throw Error(g(331));
        var i = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var a = E,
            o = a.child;
          if (E.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (E = s; E !== null; ) {
                  var c = E;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, c, a);
                  }
                  var m = c.child;
                  if (m !== null) (m.return = c), (E = m);
                  else
                    for (; E !== null; ) {
                      c = E;
                      var v = c.sibling,
                        h = c.return;
                      if ((ed(c), c === s)) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = h), (E = v);
                        break;
                      }
                      E = h;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var O = k.sibling;
                    (k.sibling = null), (k = O);
                  } while (k !== null);
                }
              }
              E = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (E = o);
          else
            e: for (; E !== null; ) {
              if (((a = E), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (E = d);
                break e;
              }
              E = a.return;
            }
        }
        var f = e.current;
        for (E = f; E !== null; ) {
          o = E;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (E = p);
          else
            e: for (o = f; E !== null; ) {
              if (((l = E), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, l);
                  }
                } catch (S) {
                  Q(l, l.return, S);
                }
              if (l === o) {
                E = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                (y.return = l.return), (E = y);
                break e;
              }
              E = l.return;
            }
        }
        if (
          ((M = i), It(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(ra, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (Le.transition = t);
    }
  }
  return !1;
}
function Ps(e, t, n) {
  (t = An(n, t)),
    (t = Hc(e, t, 1)),
    (e = xt(e, t, 1)),
    (t = de()),
    e !== null && (zr(e, 1, t), we(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Ps(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ps(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Et === null || !Et.has(r)))
        ) {
          (e = An(n, e)),
            (e = Bc(t, e, 1)),
            (t = xt(t, e, 1)),
            (e = de()),
            t !== null && (zr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (ae & n) === n &&
      (q === 4 || (q === 3 && (ae & 130023424) === ae && 500 > G() - Zl)
        ? Ht(e, 0)
        : (Gl |= n)),
    we(e, t);
}
function fd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
      : (t = 1));
  var n = de();
  (e = nt(e, t)), e !== null && (zr(e, t, n), we(e, n));
}
function vv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fd(e, n);
}
function hv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), fd(e, n);
}
var cd;
cd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), rv(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), H && t.flags & 1048576 && mc(t, $i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xi(e, t), (e = t.pendingProps);
      var i = Pn(t, fe.current);
      xn(t, n), (i = Bl(null, t, r, e, i, n));
      var a = Vl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((a = !0), Di(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fl(t),
            (i.updater = sa),
            (t.stateNode = i),
            (i._reactInternals = t),
            Mo(t, r, e, n),
            (t = Do(null, t, r, !0, a, n)))
          : ((t.tag = 0), H && a && zl(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = gv(r)),
          (e = be(r, e)),
          i)
        ) {
          case 0:
            t = jo(null, t, r, e, n);
            break e;
          case 1:
            t = hs(null, t, r, e, n);
            break e;
          case 11:
            t = ms(null, t, r, e, n);
            break e;
          case 14:
            t = vs(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        jo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        hs(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Kc(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          gc(e, t),
          Hi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = An(Error(g(423)), t)), (t = ys(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = An(Error(g(424)), t)), (t = ys(e, t, r, n, i));
            break e;
          } else
            for (
              Se = St(t.stateNode.containerInfo.firstChild),
                xe = t,
                H = !0,
                De = null,
                n = xc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === i)) {
            t = rt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ec(t),
        e === null && zo(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        No(r, i) ? (o = null) : a !== null && No(r, a) && (t.flags |= 32),
        Qc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zo(t), null;
    case 13:
      return Xc(e, t, n);
    case 4:
      return (
        $l(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        ms(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          D(Ui, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (We(a.value, o)) {
            if (a.children === i.children && !ye.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = qe(-1, n & -n)), (u.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      Io(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Io(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (i = ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = be(r, t.pendingProps)),
        (i = be(r.type, i)),
        vs(e, t, r, i, n)
      );
    case 15:
      return Vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : be(r, i)),
        xi(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), Di(t)) : (e = !1),
        xn(t, n),
        kc(t, r, i),
        Mo(t, r, i, n),
        Do(null, t, r, !0, e, n)
      );
    case 19:
      return Gc(e, t, n);
    case 22:
      return Yc(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function dd(e, t) {
  return Df(e, t);
}
function yv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new yv(e, t, n, r);
}
function tu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gv(e) {
  if (typeof e == "function") return tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kl)) return 11;
    if (e === Sl) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _i(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) tu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case rn:
        return Bt(n.children, i, a, t);
      case wl:
        (o = 8), (i |= 8);
        break;
      case io:
        return (
          (e = Ae(12, n, t, i | 2)), (e.elementType = io), (e.lanes = a), e
        );
      case ao:
        return (e = Ae(13, n, t, i)), (e.elementType = ao), (e.lanes = a), e;
      case oo:
        return (e = Ae(19, n, t, i)), (e.elementType = oo), (e.lanes = a), e;
      case Sf:
        return pa(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wf:
              o = 10;
              break e;
            case kf:
              o = 9;
              break e;
            case kl:
              o = 11;
              break e;
            case Sl:
              o = 14;
              break e;
            case ct:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Bt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function pa(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = Sf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xa(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function Ga(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Aa(0)),
    (this.expirationTimes = Aa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Aa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, t, n, r, i, a, o, l, u) {
  return (
    (e = new wv(e, t, n, l, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ae(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fl(a),
    e
  );
}
function kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pd(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (en(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return dc(e, n, t);
  }
  return t;
}
function md(e, t, n, r, i, a, o, l, u) {
  return (
    (e = nu(n, r, !0, e, i, a, o, l, u)),
    (e.context = pd(null)),
    (n = e.current),
    (r = de()),
    (i = Ct(n)),
    (a = qe(r, i)),
    (a.callback = t ?? null),
    xt(n, a, i),
    (e.current.lanes = i),
    zr(e, i, r),
    we(e, r),
    e
  );
}
function ma(e, t, n, r) {
  var i = t.current,
    a = de(),
    o = Ct(i);
  return (
    (n = pd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xt(i, t, o)),
    e !== null && (Ue(e, i, o, a), wi(e, i, o)),
    o
  );
}
function Zi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ns(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  Ns(e, t), (e = e.alternate) && Ns(e, t);
}
function Sv() {
  return null;
}
var vd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
va.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  ma(e, t, null, null);
};
va.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      ma(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function va(e) {
  this._internalRoot = e;
}
va.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && Qf(e);
  }
};
function au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ts() {}
function xv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var s = Zi(o);
        a.call(s);
      };
    }
    var o = md(t, r, e, 0, null, !1, !1, "", Ts);
    return (
      (e._reactRootContainer = o),
      (e[tt] = o.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = Zi(u);
      l.call(s);
    };
  }
  var u = nu(e, 0, !1, null, null, !1, !1, "", Ts);
  return (
    (e._reactRootContainer = u),
    (e[tt] = u.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      ma(t, u, n, r);
    }),
    u
  );
}
function ya(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Zi(o);
        l.call(u);
      };
    }
    ma(t, o, e, i);
  } else o = xv(n, t, e, i, r);
  return Zi(o);
}
Hf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 &&
          (Cl(t, n | 1), we(t, G()), !(M & 6) && ((Ln = G() + 500), It()));
      }
      break;
    case 13:
      Xt(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var i = de();
          Ue(r, e, 1, i);
        }
      }),
        ru(e, 1);
  }
};
_l = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
Bf = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = nt(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    ru(e, t);
  }
};
Vf = function () {
  return j;
};
Yf = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
yo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((so(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = la(r);
            if (!i) throw Error(g(90));
            Ef(r), so(r, i);
          }
        }
      }
      break;
    case "textarea":
      _f(e, n);
      break;
    case "select":
      (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
  }
};
zf = Jl;
If = Xt;
var Ev = { usingClientEntryPoint: !1, Events: [Rr, un, la, Af, Lf, Jl] },
  Yn = {
    findFiberByHostInstance: Dt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Cv = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || Sv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ii.isDisabled && ii.supportsFiber)
    try {
      (ra = ii.inject(Cv)), (Qe = ii);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ev;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(g(200));
  return kv(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!au(e)) throw Error(g(299));
  var n = !1,
    r = "",
    i = vd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = nu(e, 1, !1, null, null, n, !1, r, i)),
    (e[tt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = bf(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Xt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!ha(t)) throw Error(g(200));
  return ya(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!au(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = vd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = md(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[tt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new va(t);
};
Ce.render = function (e, t, n) {
  if (!ha(t)) throw Error(g(200));
  return ya(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!ha(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Xt(function () {
        ya(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = Jl;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ha(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return ya(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function hd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd);
    } catch (e) {
      console.error(e);
    }
}
hd(), (mf.exports = Ce);
var _v = mf.exports,
  Os = _v;
(no.createRoot = Os.createRoot), (no.hydrateRoot = Os.hydrateRoot);
var yd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var l = arguments[o];
        l && (a = i(a, r(l)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number") return a;
      if (typeof a != "object") return "";
      if (Array.isArray(a)) return n.apply(null, a);
      if (
        a.toString !== Object.prototype.toString &&
        !a.toString.toString().includes("[native code]")
      )
        return a.toString();
      var o = "";
      for (var l in a) t.call(a, l) && a[l] && (o = i(o, l));
      return o;
    }
    function i(a, o) {
      return o ? (a ? a + " " + o : a + o) : a;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(yd);
var Pv = yd.exports;
const Nv = fl(Pv),
  Tv = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Ov = "xs",
  Av = Jt.createContext({ prefixes: {}, breakpoints: Tv, minBreakpoint: Ov });
function Lv(e, t) {
  const { prefixes: n } = Jt.useContext(Av);
  return e || n[t] || t;
}
var gd = { exports: {} },
  zv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Iv = zv,
  Rv = Iv;
function wd() {}
function kd() {}
kd.resetWarningCache = wd;
var Mv = function () {
  function e(r, i, a, o, l, u) {
    if (u !== Rv) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: kd,
    resetWarningCache: wd,
  };
  return (n.PropTypes = n), n;
};
gd.exports = Mv();
var bv = gd.exports;
const I = fl(bv),
  Sd = Jt.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i }, a) => {
      const o = Lv(e, "container"),
        l = typeof t == "string" ? `-${t}` : "-fluid";
      return Ne.jsx(n, { ref: a, ...i, className: Nv(r, t ? `${o}${l}` : o) });
    }
  );
Sd.displayName = "Container";
function As(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? As(Object(n), !0).forEach(function (r) {
          ee(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : As(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ji(e) {
  "@babel/helpers - typeof";
  return (
    (Ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ji(e)
  );
}
function jv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ls(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Dv(e, t, n) {
  return (
    t && Ls(e.prototype, t),
    n && Ls(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ee(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ou(e, t) {
  return $v(e) || Wv(e, t) || xd(e, t) || Bv();
}
function br(e) {
  return Fv(e) || Uv(e) || xd(e) || Hv();
}
function Fv(e) {
  if (Array.isArray(e)) return Go(e);
}
function $v(e) {
  if (Array.isArray(e)) return e;
}
function Uv(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Wv(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (u) {
      (a = !0), (l = u);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function xd(e, t) {
  if (e) {
    if (typeof e == "string") return Go(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Go(e, t);
  }
}
function Go(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Hv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zs = function () {},
  lu = {},
  Ed = {},
  Cd = null,
  _d = { mark: zs, measure: zs };
try {
  typeof window < "u" && (lu = window),
    typeof document < "u" && (Ed = document),
    typeof MutationObserver < "u" && (Cd = MutationObserver),
    typeof performance < "u" && (_d = performance);
} catch {}
var Vv = lu.navigator || {},
  Is = Vv.userAgent,
  Rs = Is === void 0 ? "" : Is,
  Tt = lu,
  W = Ed,
  Ms = Cd,
  ai = _d;
Tt.document;
var ut =
    !!W.documentElement &&
    !!W.head &&
    typeof W.addEventListener == "function" &&
    typeof W.createElement == "function",
  Pd = ~Rs.indexOf("MSIE") || ~Rs.indexOf("Trident/"),
  oi,
  li,
  ui,
  si,
  fi,
  it = "___FONT_AWESOME___",
  Zo = 16,
  Nd = "fa",
  Td = "svg-inline--fa",
  Gt = "data-fa-i2svg",
  Jo = "data-fa-pseudo-element",
  Yv = "data-fa-pseudo-element-pending",
  uu = "data-prefix",
  su = "data-icon",
  bs = "fontawesome-i2svg",
  Qv = "async",
  Kv = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Od = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  $ = "classic",
  K = "sharp",
  fu = [$, K];
function jr(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[$];
    },
  });
}
var Pr = jr(
    ((oi = {}),
    ee(oi, $, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    ee(oi, K, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    oi)
  ),
  Nr = jr(
    ((li = {}),
    ee(li, $, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    ee(li, K, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    li)
  ),
  Tr = jr(
    ((ui = {}),
    ee(ui, $, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    ee(ui, K, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    ui)
  ),
  Xv = jr(
    ((si = {}),
    ee(si, $, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    ee(si, K, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    si)
  ),
  Gv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Ad = "fa-layers-text",
  Zv =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Jv = jr(
    ((fi = {}),
    ee(fi, $, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    ee(fi, K, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    fi)
  ),
  Ld = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  qv = Ld.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  eh = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Ut = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Or = new Set();
Object.keys(Nr[$]).map(Or.add.bind(Or));
Object.keys(Nr[K]).map(Or.add.bind(Or));
var th = []
    .concat(fu, br(Or), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Ut.GROUP,
      Ut.SWAP_OPACITY,
      Ut.PRIMARY,
      Ut.SECONDARY,
    ])
    .concat(
      Ld.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      qv.map(function (e) {
        return "w-".concat(e);
      })
    ),
  lr = Tt.FontAwesomeConfig || {};
function nh(e) {
  var t = W.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function rh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (W && typeof W.querySelector == "function") {
  var ih = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  ih.forEach(function (e) {
    var t = ou(e, 2),
      n = t[0],
      r = t[1],
      i = rh(nh(n));
    i != null && (lr[r] = i);
  });
}
var zd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Nd,
  replacementClass: Td,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
lr.familyPrefix && (lr.cssPrefix = lr.familyPrefix);
var zn = x(x({}, zd), lr);
zn.autoReplaceSvg || (zn.observeMutations = !1);
var N = {};
Object.keys(zd).forEach(function (e) {
  Object.defineProperty(N, e, {
    enumerable: !0,
    set: function (n) {
      (zn[e] = n),
        ur.forEach(function (r) {
          return r(N);
        });
    },
    get: function () {
      return zn[e];
    },
  });
});
Object.defineProperty(N, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (zn.cssPrefix = t),
      ur.forEach(function (n) {
        return n(N);
      });
  },
  get: function () {
    return zn.cssPrefix;
  },
});
Tt.FontAwesomeConfig = N;
var ur = [];
function ah(e) {
  return (
    ur.push(e),
    function () {
      ur.splice(ur.indexOf(e), 1);
    }
  );
}
var ft = Zo,
  Ye = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function oh(e) {
  if (!(!e || !ut)) {
    var t = W.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = W.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return W.head.insertBefore(t, r), e;
  }
}
var lh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ar() {
  for (var e = 12, t = ""; e-- > 0; ) t += lh[(Math.random() * 62) | 0];
  return t;
}
function bn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function cu(e) {
  return e.classList
    ? bn(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function Id(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function uh(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(Id(e[n]), '" ');
    }, "")
    .trim();
}
function ga(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function du(e) {
  return (
    e.size !== Ye.size ||
    e.x !== Ye.x ||
    e.y !== Ye.y ||
    e.rotate !== Ye.rotate ||
    e.flipX ||
    e.flipY
  );
}
function sh(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    u = { transform: "".concat(a, " ").concat(o, " ").concat(l) },
    s = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: u, path: s };
}
function fh(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Zo : n,
    i = e.height,
    a = i === void 0 ? Zo : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    u = "";
  return (
    l && Pd
      ? (u += "translate("
          .concat(t.x / ft - r / 2, "em, ")
          .concat(t.y / ft - a / 2, "em) "))
      : l
      ? (u += "translate(calc(-50% + "
          .concat(t.x / ft, "em), calc(-50% + ")
          .concat(t.y / ft, "em)) "))
      : (u += "translate(".concat(t.x / ft, "em, ").concat(t.y / ft, "em) ")),
    (u += "scale("
      .concat((t.size / ft) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / ft) * (t.flipY ? -1 : 1), ") ")),
    (u += "rotate(".concat(t.rotate, "deg) ")),
    u
  );
}
var ch = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Rd() {
  var e = Nd,
    t = Td,
    n = N.cssPrefix,
    r = N.replacementClass,
    i = ch;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(a, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return i;
}
var js = !1;
function Za() {
  N.autoAddCss && !js && (oh(Rd()), (js = !0));
}
var dh = {
    mixout: function () {
      return { dom: { css: Rd, insertCss: Za } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Za();
        },
        beforeI2svg: function () {
          Za();
        },
      };
    },
  },
  at = Tt || {};
at[it] || (at[it] = {});
at[it].styles || (at[it].styles = {});
at[it].hooks || (at[it].hooks = {});
at[it].shims || (at[it].shims = []);
var Fe = at[it],
  Md = [],
  ph = function e() {
    W.removeEventListener("DOMContentLoaded", e),
      (qi = 1),
      Md.map(function (t) {
        return t();
      });
  },
  qi = !1;
ut &&
  ((qi = (W.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    W.readyState
  )),
  qi || W.addEventListener("DOMContentLoaded", ph));
function mh(e) {
  ut && (qi ? setTimeout(e, 0) : Md.push(e));
}
function Dr(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == "string"
    ? Id(e)
    : "<"
        .concat(t, " ")
        .concat(uh(r), ">")
        .concat(a.map(Dr).join(""), "</")
        .concat(t, ">");
}
function Ds(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var vh = function (t, n) {
    return function (r, i, a, o) {
      return t.call(n, r, i, a, o);
    };
  },
  Ja = function (t, n, r, i) {
    var a = Object.keys(t),
      o = a.length,
      l = i !== void 0 ? vh(n, i) : n,
      u,
      s,
      c;
    for (
      r === void 0 ? ((u = 1), (c = t[a[0]])) : ((u = 0), (c = r));
      u < o;
      u++
    )
      (s = a[u]), (c = l(c, t[s], s, t));
    return c;
  };
function hh(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function qo(e) {
  var t = hh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function yh(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Fs(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function el(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Fs(t);
  typeof Fe.hooks.addPack == "function" && !i
    ? Fe.hooks.addPack(e, Fs(t))
    : (Fe.styles[e] = x(x({}, Fe.styles[e] || {}), a)),
    e === "fas" && el("fa", t);
}
var ci,
  di,
  pi,
  vn = Fe.styles,
  gh = Fe.shims,
  wh =
    ((ci = {}),
    ee(ci, $, Object.values(Tr[$])),
    ee(ci, K, Object.values(Tr[K])),
    ci),
  pu = null,
  bd = {},
  jd = {},
  Dd = {},
  Fd = {},
  $d = {},
  kh =
    ((di = {}),
    ee(di, $, Object.keys(Pr[$])),
    ee(di, K, Object.keys(Pr[K])),
    di);
function Sh(e) {
  return ~th.indexOf(e);
}
function xh(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !Sh(i) ? i : null;
}
var Ud = function () {
  var t = function (a) {
    return Ja(
      vn,
      function (o, l, u) {
        return (o[u] = Ja(l, a, {})), o;
      },
      {}
    );
  };
  (bd = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (u) {
        return typeof u == "number";
      });
      l.forEach(function (u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  })),
    (jd = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (u) {
          return typeof u == "string";
        });
        l.forEach(function (u) {
          i[u] = o;
        });
      }
      return i;
    })),
    ($d = t(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (u) {
          i[u] = o;
        }),
        i
      );
    }));
  var n = "far" in vn || N.autoFetchSvg,
    r = Ja(
      gh,
      function (i, a) {
        var o = a[0],
          l = a[1],
          u = a[2];
        return (
          l === "far" && !n && (l = "fas"),
          typeof o == "string" && (i.names[o] = { prefix: l, iconName: u }),
          typeof o == "number" &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: u }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Dd = r.names),
    (Fd = r.unicodes),
    (pu = wa(N.styleDefault, { family: N.familyDefault }));
};
ah(function (e) {
  pu = wa(e.styleDefault, { family: N.familyDefault });
});
Ud();
function mu(e, t) {
  return (bd[e] || {})[t];
}
function Eh(e, t) {
  return (jd[e] || {})[t];
}
function Wt(e, t) {
  return ($d[e] || {})[t];
}
function Wd(e) {
  return Dd[e] || { prefix: null, iconName: null };
}
function Ch(e) {
  var t = Fd[e],
    n = mu("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Ot() {
  return pu;
}
var vu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? $ : n,
    i = Pr[r][e],
    a = Nr[r][e] || Nr[r][i],
    o = e in Fe.styles ? e : null;
  return a || o || null;
}
var $s =
  ((pi = {}), ee(pi, $, Object.keys(Tr[$])), ee(pi, K, Object.keys(Tr[K])), pi);
function ka(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      ee(t, $, "".concat(N.cssPrefix, "-").concat($)),
      ee(t, K, "".concat(N.cssPrefix, "-").concat(K)),
      t),
    o = null,
    l = $;
  (e.includes(a[$]) ||
    e.some(function (s) {
      return $s[$].includes(s);
    })) &&
    (l = $),
    (e.includes(a[K]) ||
      e.some(function (s) {
        return $s[K].includes(s);
      })) &&
      (l = K);
  var u = e.reduce(function (s, c) {
    var m = xh(N.cssPrefix, c);
    if (
      (vn[c]
        ? ((c = wh[l].includes(c) ? Xv[l][c] : c), (o = c), (s.prefix = c))
        : kh[l].indexOf(c) > -1
        ? ((o = c), (s.prefix = wa(c, { family: l })))
        : m
        ? (s.iconName = m)
        : c !== N.replacementClass &&
          c !== a[$] &&
          c !== a[K] &&
          s.rest.push(c),
      !i && s.prefix && s.iconName)
    ) {
      var v = o === "fa" ? Wd(s.iconName) : {},
        h = Wt(s.prefix, s.iconName);
      v.prefix && (o = null),
        (s.iconName = v.iconName || h || s.iconName),
        (s.prefix = v.prefix || s.prefix),
        s.prefix === "far" &&
          !vn.far &&
          vn.fas &&
          !N.autoFetchSvg &&
          (s.prefix = "fas");
    }
    return s;
  }, vu());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"),
    !u.prefix &&
      l === K &&
      (vn.fass || N.autoFetchSvg) &&
      ((u.prefix = "fass"),
      (u.iconName = Wt(u.prefix, u.iconName) || u.iconName)),
    (u.prefix === "fa" || o === "fa") && (u.prefix = Ot() || "fas"),
    u
  );
}
var _h = (function () {
    function e() {
      jv(this, e), (this.definitions = {});
    }
    return (
      Dv(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = x(x({}, n.definitions[l] || {}), o[l])),
                el(l, o[l]);
              var u = Tr[$][l];
              u && el(u, o[l]), Ud();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  u = o.iconName,
                  s = o.icon,
                  c = s[2];
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (m) {
                      typeof m == "string" && (n[l][m] = s);
                    }),
                  (n[l][u] = s);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Us = [],
  hn = {},
  Cn = {},
  Ph = Object.keys(Cn);
function Nh(e, t) {
  var n = t.mixoutsTo;
  return (
    (Us = e),
    (hn = {}),
    Object.keys(Cn).forEach(function (r) {
      Ph.indexOf(r) === -1 && delete Cn[r];
    }),
    Us.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == "function" && (n[o] = i[o]),
            Ji(i[o]) === "object" &&
              Object.keys(i[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          hn[o] || (hn[o] = []), hn[o].push(a[o]);
        });
      }
      r.provides && r.provides(Cn);
    }),
    n
  );
}
function tl(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var a = hn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function Zt(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = hn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function ot() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Cn[e] ? Cn[e].apply(null, t) : void 0;
}
function nl(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Ot();
  if (t)
    return (t = Wt(n, t) || t), Ds(Hd.definitions, n, t) || Ds(Fe.styles, n, t);
}
var Hd = new _h(),
  Th = function () {
    (N.autoReplaceSvg = !1), (N.observeMutations = !1), Zt("noAuto");
  },
  Oh = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ut
        ? (Zt("beforeI2svg", t), ot("pseudoElements2svg", t), ot("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0),
        (N.observeMutations = !0),
        mh(function () {
          Lh({ autoReplaceSvgRoot: n }), Zt("watch", t);
        });
    },
  },
  Ah = {
    icon: function (t) {
      if (t === null) return null;
      if (Ji(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Wt(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = wa(t[0]);
        return { prefix: r, iconName: Wt(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(N.cssPrefix, "-")) > -1 || t.match(Gv))
      ) {
        var i = ka(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || Ot(),
          iconName: Wt(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var a = Ot();
        return { prefix: a, iconName: Wt(a, t) || t };
      }
    },
  },
  Pe = {
    noAuto: Th,
    config: N,
    dom: Oh,
    parse: Ah,
    library: Hd,
    findIconDefinition: nl,
    toHtml: Dr,
  },
  Lh = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? W : n;
    (Object.keys(Fe.styles).length > 0 || N.autoFetchSvg) &&
      ut &&
      N.autoReplaceSvg &&
      Pe.dom.i2svg({ node: r });
  };
function Sa(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return Dr(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (ut) {
          var r = W.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function zh(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (du(o) && n.found && !r.found) {
    var l = n.width,
      u = n.height,
      s = { x: l / u / 2, y: 0.5 };
    i.style = ga(
      x(
        x({}, a),
        {},
        {
          "transform-origin": ""
            .concat(s.x + o.x / 16, "em ")
            .concat(s.y + o.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function Ih(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? "".concat(t, "-").concat(N.cssPrefix, "-").concat(n) : a;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: x(x({}, i), {}, { id: o }), children: r },
      ],
    },
  ];
}
function hu(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    u = e.title,
    s = e.maskId,
    c = e.titleId,
    m = e.extra,
    v = e.watchable,
    h = v === void 0 ? !1 : v,
    w = r.found ? r : n,
    k = w.width,
    O = w.height,
    d = i === "fak",
    f = [N.replacementClass, a ? "".concat(N.cssPrefix, "-").concat(a) : ""]
      .filter(function (b) {
        return m.classes.indexOf(b) === -1;
      })
      .filter(function (b) {
        return b !== "" || !!b;
      })
      .concat(m.classes)
      .join(" "),
    p = {
      children: [],
      attributes: x(
        x({}, m.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": a,
          class: f,
          role: m.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(k, " ").concat(O),
        }
      ),
    },
    y =
      d && !~m.classes.indexOf("fa-fw")
        ? { width: "".concat((k / O) * 16 * 0.0625, "em") }
        : {};
  h && (p.attributes[Gt] = ""),
    u &&
      (p.children.push({
        tag: "title",
        attributes: {
          id: p.attributes["aria-labelledby"] || "title-".concat(c || Ar()),
        },
        children: [u],
      }),
      delete p.attributes.title);
  var S = x(
      x({}, p),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: s,
        transform: o,
        symbol: l,
        styles: x(x({}, y), m.styles),
      }
    ),
    C =
      r.found && n.found
        ? ot("generateAbstractMask", S) || { children: [], attributes: {} }
        : ot("generateAbstractIcon", S) || { children: [], attributes: {} },
    _ = C.children,
    T = C.attributes;
  return (S.children = _), (S.attributes = T), l ? Ih(S) : zh(S);
}
function Ws(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    u = l === void 0 ? !1 : l,
    s = x(
      x(x({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(" ") }
    );
  u && (s[Gt] = "");
  var c = x({}, o.styles);
  du(i) &&
    ((c.transform = fh({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var m = ga(c);
  m.length > 0 && (s.style = m);
  var v = [];
  return (
    v.push({ tag: "span", attributes: s, children: [t] }),
    a &&
      v.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    v
  );
}
function Rh(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = x(
      x(x({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    a = ga(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
var qa = Fe.styles;
function rl(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = ou(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(N.cssPrefix, "-").concat(Ut.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(N.cssPrefix, "-").concat(Ut.SECONDARY),
                fill: "currentColor",
                d: a[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(N.cssPrefix, "-").concat(Ut.PRIMARY),
                fill: "currentColor",
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var Mh = { found: !1, width: 512, height: 512 };
function bh(e, t) {
  !Od &&
    !N.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function il(e, t) {
  var n = t;
  return (
    t === "fa" && N.styleDefault !== null && (t = Ot()),
    new Promise(function (r, i) {
      if ((ot("missingIconAbstract"), n === "fa")) {
        var a = Wd(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && qa[t] && qa[t][e]) {
        var o = qa[t][e];
        return r(rl(o));
      }
      bh(e, t),
        r(
          x(
            x({}, Mh),
            {},
            {
              icon:
                N.showMissingIcons && e ? ot("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Hs = function () {},
  al =
    N.measurePerformance && ai && ai.mark && ai.measure
      ? ai
      : { mark: Hs, measure: Hs },
  Zn = 'FA "6.5.1"',
  jh = function (t) {
    return (
      al.mark("".concat(Zn, " ").concat(t, " begins")),
      function () {
        return Bd(t);
      }
    );
  },
  Bd = function (t) {
    al.mark("".concat(Zn, " ").concat(t, " ends")),
      al.measure(
        "".concat(Zn, " ").concat(t),
        "".concat(Zn, " ").concat(t, " begins"),
        "".concat(Zn, " ").concat(t, " ends")
      );
  },
  yu = { begin: jh, end: Bd },
  Pi = function () {};
function Bs(e) {
  var t = e.getAttribute ? e.getAttribute(Gt) : null;
  return typeof t == "string";
}
function Dh(e) {
  var t = e.getAttribute ? e.getAttribute(uu) : null,
    n = e.getAttribute ? e.getAttribute(su) : null;
  return t && n;
}
function Fh(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(N.replacementClass)
  );
}
function $h() {
  if (N.autoReplaceSvg === !0) return Ni.replace;
  var e = Ni[N.autoReplaceSvg];
  return e || Ni.replace;
}
function Uh(e) {
  return W.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wh(e) {
  return W.createElement(e);
}
function Vd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? Uh : Wh) : n;
  if (typeof e == "string") return W.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(Vd(o, { ceFn: r }));
    }),
    i
  );
}
function Hh(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var Ni = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Vd(i), n);
        }),
        n.getAttribute(Gt) === null && N.keepOriginalSource)
      ) {
        var r = W.createComment(Hh(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~cu(n).indexOf(N.replacementClass)) return Ni.replace(t);
    var i = new RegExp("".concat(N.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(" ").reduce(
        function (l, u) {
          return (
            u === N.replacementClass || u.match(i)
              ? l.toSvg.push(u)
              : l.toNode.push(u),
            l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(" ")),
        a.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function (l) {
      return Dr(l);
    }).join(`
`);
    n.setAttribute(Gt, ""), (n.innerHTML = o);
  },
};
function Vs(e) {
  e();
}
function Yd(e, t) {
  var n = typeof t == "function" ? t : Pi;
  if (e.length === 0) n();
  else {
    var r = Vs;
    N.mutateApproach === Qv && (r = Tt.requestAnimationFrame || Vs),
      r(function () {
        var i = $h(),
          a = yu.begin("mutate");
        e.map(i), a(), n();
      });
  }
}
var gu = !1;
function Qd() {
  gu = !0;
}
function ol() {
  gu = !1;
}
var ea = null;
function Ys(e) {
  if (Ms && N.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Pi : t,
      r = e.nodeCallback,
      i = r === void 0 ? Pi : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? Pi : a,
      l = e.observeMutationsRoot,
      u = l === void 0 ? W : l;
    (ea = new Ms(function (s) {
      if (!gu) {
        var c = Ot();
        bn(s).forEach(function (m) {
          if (
            (m.type === "childList" &&
              m.addedNodes.length > 0 &&
              !Bs(m.addedNodes[0]) &&
              (N.searchPseudoElements && o(m.target), n(m.target)),
            m.type === "attributes" &&
              m.target.parentNode &&
              N.searchPseudoElements &&
              o(m.target.parentNode),
            m.type === "attributes" &&
              Bs(m.target) &&
              ~eh.indexOf(m.attributeName))
          )
            if (m.attributeName === "class" && Dh(m.target)) {
              var v = ka(cu(m.target)),
                h = v.prefix,
                w = v.iconName;
              m.target.setAttribute(uu, h || c),
                w && m.target.setAttribute(su, w);
            } else Fh(m.target) && i(m.target);
        });
      }
    })),
      ut &&
        ea.observe(u, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function Bh() {
  ea && ea.disconnect();
}
function Vh(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var a = i.split(":"),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function Yh(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = ka(cu(e));
  return (
    i.prefix || (i.prefix = Ot()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          Eh(i.prefix, e.innerText) || mu(i.prefix, qo(e.innerText))),
      !i.iconName &&
        N.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function Qh(e) {
  var t = bn(e.attributes).reduce(function (i, a) {
      return (
        i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    N.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(N.replacementClass, "-title-")
            .concat(r || Ar()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function Kh() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ye,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Qs(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = Yh(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = Qh(e),
    l = tl("parseNodeAttributes", {}, e),
    u = t.styleParser ? Vh(e) : [];
  return x(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: Ye,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: u, attributes: o },
    },
    l
  );
}
var Xh = Fe.styles;
function Kd(e) {
  var t = N.autoReplaceSvg === "nest" ? Qs(e, { styleParser: !1 }) : Qs(e);
  return ~t.extra.classes.indexOf(Ad)
    ? ot("generateLayersText", e, t)
    : ot("generateSvgReplacementMutation", e, t);
}
var At = new Set();
fu.map(function (e) {
  At.add("fa-".concat(e));
});
Object.keys(Pr[$]).map(At.add.bind(At));
Object.keys(Pr[K]).map(At.add.bind(At));
At = br(At);
function Ks(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ut) return Promise.resolve();
  var n = W.documentElement.classList,
    r = function (m) {
      return n.add("".concat(bs, "-").concat(m));
    },
    i = function (m) {
      return n.remove("".concat(bs, "-").concat(m));
    },
    a = N.autoFetchSvg
      ? At
      : fu
          .map(function (c) {
            return "fa-".concat(c);
          })
          .concat(Object.keys(Xh));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(Ad, ":not([").concat(Gt, "])")]
    .concat(
      a.map(function (c) {
        return ".".concat(c, ":not([").concat(Gt, "])");
      })
    )
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = bn(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var u = yu.begin("onTree"),
    s = l.reduce(function (c, m) {
      try {
        var v = Kd(m);
        v && c.push(v);
      } catch (h) {
        Od || (h.name === "MissingIcon" && console.error(h));
      }
      return c;
    }, []);
  return new Promise(function (c, m) {
    Promise.all(s)
      .then(function (v) {
        Yd(v, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            u(),
            c();
        });
      })
      .catch(function (v) {
        u(), m(v);
      });
  });
}
function Gh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Kd(e).then(function (n) {
    n && Yd([n], t);
  });
}
function Zh(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : nl(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : nl(i || {})),
      e(r, x(x({}, n), {}, { mask: i }))
    );
  };
}
var Jh = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Ye : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      l = n.mask,
      u = l === void 0 ? null : l,
      s = n.maskId,
      c = s === void 0 ? null : s,
      m = n.title,
      v = m === void 0 ? null : m,
      h = n.titleId,
      w = h === void 0 ? null : h,
      k = n.classes,
      O = k === void 0 ? [] : k,
      d = n.attributes,
      f = d === void 0 ? {} : d,
      p = n.styles,
      y = p === void 0 ? {} : p;
    if (t) {
      var S = t.prefix,
        C = t.iconName,
        _ = t.icon;
      return Sa(x({ type: "icon" }, t), function () {
        return (
          Zt("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          N.autoA11y &&
            (v
              ? (f["aria-labelledby"] = ""
                  .concat(N.replacementClass, "-title-")
                  .concat(w || Ar()))
              : ((f["aria-hidden"] = "true"), (f.focusable = "false"))),
          hu({
            icons: {
              main: rl(_),
              mask: u
                ? rl(u.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: C,
            transform: x(x({}, Ye), i),
            symbol: o,
            title: v,
            maskId: c,
            titleId: w,
            extra: { attributes: f, styles: y, classes: O },
          })
        );
      });
    }
  },
  qh = {
    mixout: function () {
      return { icon: Zh(Jh) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Ks), (n.nodeCallback = Gh), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? W : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Ks(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            u = r.transform,
            s = r.symbol,
            c = r.mask,
            m = r.maskId,
            v = r.extra;
          return new Promise(function (h, w) {
            Promise.all([
              il(i, l),
              c.iconName
                ? il(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (k) {
                var O = ou(k, 2),
                  d = O[0],
                  f = O[1];
                h([
                  n,
                  hu({
                    icons: { main: d, mask: f },
                    prefix: l,
                    iconName: i,
                    transform: u,
                    symbol: s,
                    maskId: m,
                    title: a,
                    titleId: o,
                    extra: v,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(w);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            l = n.styles,
            u = ga(l);
          u.length > 0 && (i.style = u);
          var s;
          return (
            du(o) &&
              (s = ot("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(s || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  ey = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return Sa({ type: "layer" }, function () {
            Zt("beforeDOMElementCreation", { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (u) {
                      o = o.concat(u.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(N.cssPrefix, "-layers")]
                      .concat(br(a))
                      .join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  ty = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            u = r.attributes,
            s = u === void 0 ? {} : u,
            c = r.styles,
            m = c === void 0 ? {} : c;
          return Sa({ type: "counter", content: n }, function () {
            return (
              Zt("beforeDOMElementCreation", { content: n, params: r }),
              Rh({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: s,
                  styles: m,
                  classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(
                    br(l)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  ny = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? Ye : i,
            o = r.title,
            l = o === void 0 ? null : o,
            u = r.classes,
            s = u === void 0 ? [] : u,
            c = r.attributes,
            m = c === void 0 ? {} : c,
            v = r.styles,
            h = v === void 0 ? {} : v;
          return Sa({ type: "text", content: n }, function () {
            return (
              Zt("beforeDOMElementCreation", { content: n, params: r }),
              Ws({
                content: n,
                transform: x(x({}, Ye), a),
                title: l,
                extra: {
                  attributes: m,
                  styles: h,
                  classes: ["".concat(N.cssPrefix, "-layers-text")].concat(
                    br(s)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          u = null;
        if (Pd) {
          var s = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (l = c.width / s), (u = c.height / s);
        }
        return (
          N.autoA11y && !i && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            Ws({
              content: n.innerHTML,
              width: l,
              height: u,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  ry = new RegExp('"', "ug"),
  Xs = [1105920, 1112319];
function iy(e) {
  var t = e.replace(ry, ""),
    n = yh(t, 0),
    r = n >= Xs[0] && n <= Xs[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: qo(i ? t[0] : t), isSecondary: r || i };
}
function Gs(e, t) {
  var n = "".concat(Yv).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = bn(e.children),
      o = a.filter(function (_) {
        return _.getAttribute(Jo) === t;
      })[0],
      l = Tt.getComputedStyle(e, t),
      u = l.getPropertyValue("font-family").match(Zv),
      s = l.getPropertyValue("font-weight"),
      c = l.getPropertyValue("content");
    if (o && !u) return e.removeChild(o), r();
    if (u && c !== "none" && c !== "") {
      var m = l.getPropertyValue("content"),
        v = ~["Sharp"].indexOf(u[2]) ? K : $,
        h = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(u[2])
          ? Nr[v][u[2].toLowerCase()]
          : Jv[v][s],
        w = iy(m),
        k = w.value,
        O = w.isSecondary,
        d = u[0].startsWith("FontAwesome"),
        f = mu(h, k),
        p = f;
      if (d) {
        var y = Ch(k);
        y.iconName && y.prefix && ((f = y.iconName), (h = y.prefix));
      }
      if (
        f &&
        !O &&
        (!o || o.getAttribute(uu) !== h || o.getAttribute(su) !== p)
      ) {
        e.setAttribute(n, p), o && e.removeChild(o);
        var S = Kh(),
          C = S.extra;
        (C.attributes[Jo] = t),
          il(f, h)
            .then(function (_) {
              var T = hu(
                  x(
                    x({}, S),
                    {},
                    {
                      icons: { main: _, mask: vu() },
                      prefix: h,
                      iconName: p,
                      extra: C,
                      watchable: !0,
                    }
                  )
                ),
                b = W.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(b, e.firstChild)
                : e.appendChild(b),
                (b.outerHTML = T.map(function (z) {
                  return Dr(z);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function ay(e) {
  return Promise.all([Gs(e, "::before"), Gs(e, "::after")]);
}
function oy(e) {
  return (
    e.parentNode !== document.head &&
    !~Kv.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Jo) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Zs(e) {
  if (ut)
    return new Promise(function (t, n) {
      var r = bn(e.querySelectorAll("*")).filter(oy).map(ay),
        i = yu.begin("searchPseudoElements");
      Qd(),
        Promise.all(r)
          .then(function () {
            i(), ol(), t();
          })
          .catch(function () {
            i(), ol(), n();
          });
    });
}
var ly = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Zs), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? W : r;
        N.searchPseudoElements && Zs(i);
      };
    },
  },
  Js = !1,
  uy = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Qd(), (Js = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Ys(tl("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          Bh();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Js
            ? ol()
            : Ys(tl("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  qs = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var a = i.toLowerCase().split("-"),
          o = a[0],
          l = a.slice(1).join("-");
        if (o && l === "h") return (r.flipX = !0), r;
        if (o && l === "v") return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + l;
            break;
          case "shrink":
            r.size = r.size - l;
            break;
          case "left":
            r.x = r.x - l;
            break;
          case "right":
            r.x = r.x + l;
            break;
          case "up":
            r.y = r.y - l;
            break;
          case "down":
            r.y = r.y + l;
            break;
          case "rotate":
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  sy = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return qs(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = qs(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          l = { transform: "translate(".concat(a / 2, " 256)") },
          u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          s = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(i.rotate, " 0 0)"),
          m = { transform: "".concat(u, " ").concat(s, " ").concat(c) },
          v = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          h = { outer: l, inner: m, path: v };
        return {
          tag: "g",
          attributes: x({}, h.outer),
          children: [
            {
              tag: "g",
              attributes: x({}, h.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: x(x({}, r.icon.attributes), h.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  eo = { x: 0, y: 0, width: "100%", height: "100%" };
function ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function fy(e) {
  return e.tag === "g" ? e.children : [e];
}
var cy = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            a = i
              ? ka(
                  i.split(" ").map(function (o) {
                    return o.trim();
                  })
                )
              : vu();
          return (
            a.prefix || (a.prefix = Ot()),
            (n.mask = a),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          l = n.maskId,
          u = n.transform,
          s = a.width,
          c = a.icon,
          m = o.width,
          v = o.icon,
          h = sh({ transform: u, containerWidth: m, iconWidth: s }),
          w = { tag: "rect", attributes: x(x({}, eo), {}, { fill: "white" }) },
          k = c.children ? { children: c.children.map(ef) } : {},
          O = {
            tag: "g",
            attributes: x({}, h.inner),
            children: [
              ef(
                x({ tag: c.tag, attributes: x(x({}, c.attributes), h.path) }, k)
              ),
            ],
          },
          d = { tag: "g", attributes: x({}, h.outer), children: [O] },
          f = "mask-".concat(l || Ar()),
          p = "clip-".concat(l || Ar()),
          y = {
            tag: "mask",
            attributes: x(
              x({}, eo),
              {},
              {
                id: f,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [w, d],
          },
          S = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: p }, children: fy(v) },
              y,
            ],
          };
        return (
          r.push(S, {
            tag: "rect",
            attributes: x(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(p, ")"),
                mask: "url(#".concat(f, ")"),
              },
              eo
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  dy = {
    provides: function (t) {
      var n = !1;
      Tt.matchMedia &&
        (n = Tt.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            a = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: x(
              x({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var o = x(x({}, a), {}, { attributeName: "opacity" }),
            l = {
              tag: "circle",
              attributes: x(x({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: x(
                    x({}, a),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: x(x({}, o), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(l),
            r.push({
              tag: "path",
              attributes: x(
                x({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: x(x({}, o), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: x(
                  x({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: x(x({}, o), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  py = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            a = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  my = [dh, qh, ey, ty, ny, ly, uy, sy, cy, dy, py];
Nh(my, { mixoutsTo: Pe });
Pe.noAuto;
Pe.config;
Pe.library;
Pe.dom;
var ll = Pe.parse;
Pe.findIconDefinition;
Pe.toHtml;
var vy = Pe.icon;
Pe.layer;
Pe.text;
Pe.counter;
function tf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tf(Object(n), !0).forEach(function (r) {
          yn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ta(e) {
  "@babel/helpers - typeof";
  return (
    (ta =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ta(e)
  );
}
function yn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yy(e, t) {
  if (e == null) return {};
  var n = hy(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ul(e) {
  return gy(e) || wy(e) || ky(e) || Sy();
}
function gy(e) {
  if (Array.isArray(e)) return sl(e);
}
function wy(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ky(e, t) {
  if (e) {
    if (typeof e == "string") return sl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sl(e, t);
  }
}
function sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Sy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xy(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    u = e.spin,
    s = e.spinPulse,
    c = e.spinReverse,
    m = e.pulse,
    v = e.fixedWidth,
    h = e.inverse,
    w = e.border,
    k = e.listItem,
    O = e.flip,
    d = e.size,
    f = e.rotation,
    p = e.pull,
    y =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": u,
        "fa-spin-reverse": c,
        "fa-spin-pulse": s,
        "fa-pulse": m,
        "fa-fw": v,
        "fa-inverse": h,
        "fa-border": w,
        "fa-li": k,
        "fa-flip": O === !0,
        "fa-flip-horizontal": O === "horizontal" || O === "both",
        "fa-flip-vertical": O === "vertical" || O === "both",
      }),
      yn(t, "fa-".concat(d), typeof d < "u" && d !== null),
      yn(t, "fa-rotate-".concat(f), typeof f < "u" && f !== null && f !== 0),
      yn(t, "fa-pull-".concat(p), typeof p < "u" && p !== null),
      yn(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(y)
    .map(function (S) {
      return y[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function Ey(e) {
  return (e = e - 0), e === e;
}
function Xd(e) {
  return Ey(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Cy = ["style"];
function _y(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Py(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = Xd(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[_y(i)] = a) : (t[i] = a), t;
    }, {});
}
function Gd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (u) {
      return Gd(e, u);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (u, s) {
        var c = t.attributes[s];
        switch (s) {
          case "class":
            (u.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            u.attrs.style = Py(c);
            break;
          default:
            s.indexOf("aria-") === 0 || s.indexOf("data-") === 0
              ? (u.attrs[s.toLowerCase()] = c)
              : (u.attrs[Xd(s)] = c);
        }
        return u;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    l = yy(n, Cy);
  return (
    (i.attrs.style = yt(yt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, yt(yt({}, i.attrs), l)].concat(ul(r)))
  );
}
var Zd = !1;
try {
  Zd = !0;
} catch {}
function Ny() {
  if (!Zd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function nf(e) {
  if (e && ta(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (ll.icon) return ll.icon(e);
  if (e === null) return null;
  if (e && ta(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function to(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? yn({}, e, t)
    : {};
}
var Fr = vl.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    l = e.titleId,
    u = e.maskId,
    s = nf(n),
    c = to("classes", [].concat(ul(xy(e)), ul(a.split(" ")))),
    m = to(
      "transform",
      typeof e.transform == "string" ? ll.transform(e.transform) : e.transform
    ),
    v = to("mask", nf(r)),
    h = vy(
      s,
      yt(
        yt(yt(yt({}, c), m), v),
        {},
        { symbol: i, title: o, titleId: l, maskId: u }
      )
    );
  if (!h) return Ny("Could not find icon", s), null;
  var w = h.abstract,
    k = { ref: t };
  return (
    Object.keys(e).forEach(function (O) {
      Fr.defaultProps.hasOwnProperty(O) || (k[O] = e[O]);
    }),
    Ty(w[0], k)
  );
});
Fr.displayName = "FontAwesomeIcon";
Fr.propTypes = {
  beat: I.bool,
  border: I.bool,
  beatFade: I.bool,
  bounce: I.bool,
  className: I.string,
  fade: I.bool,
  flash: I.bool,
  mask: I.oneOfType([I.object, I.array, I.string]),
  maskId: I.string,
  fixedWidth: I.bool,
  inverse: I.bool,
  flip: I.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: I.oneOfType([I.object, I.array, I.string]),
  listItem: I.bool,
  pull: I.oneOf(["right", "left"]),
  pulse: I.bool,
  rotation: I.oneOf([0, 90, 180, 270]),
  shake: I.bool,
  size: I.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: I.bool,
  spinPulse: I.bool,
  spinReverse: I.bool,
  symbol: I.oneOfType([I.bool, I.string]),
  title: I.string,
  titleId: I.string,
  transform: I.oneOfType([I.string, I.object]),
  swapOpacity: I.bool,
};
Fr.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var Ty = Gd.bind(null, vl.createElement),
  Oy = {
    prefix: "fab",
    iconName: "x-twitter",
    icon: [
      512,
      512,
      [],
      "e61b",
      "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
    ],
  };
class Ay extends Jt.Component {
  constructor(n) {
    super(n);
    ku(this, "fetchNewQuote", () => {
      const n = [
          {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates",
          },
          {
            text: "At the touch of love everyone becomes a poet.",
            author: "Plato",
          },
          {
            text: "The mind is everything; what you think you become.",
            author: "Buddha",
          },
          {
            text: "To be, or not to be, that is the question.",
            author: "William Shakespeare",
          },
          { text: "I think, therefore I am.", author: "René Descartes" },
          {
            text: "The unexamined life is not worth living.",
            author: "Socrates",
          },
          {
            text: "You will not be punished for your anger, you will be punished by your anger.",
            author: "Buddha",
          },
          {
            text: "The greatest wealth is to live content with little.",
            author: "Plato",
          },
          {
            text: "One cannot step twice in the same river.",
            author: "Heraclitus",
          },
          {
            text: "The journey of a thousand miles begins with one step.",
            author: "Lao Tzu",
          },
          { text: "Act without expectation.", author: "Lao Tzu" },
          {
            text: "Mastering others is strength. Mastering yourself is true power.",
            author: "Lao Tzu",
          },
          {
            text: "When you realize there is nothing lacking, the whole world belongs to you.",
            author: "Lao Tzu",
          },
          {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "Chinese Proverb",
          },
          {
            text: "An obstacle is often a stepping stone.",
            author: "Prescott",
          },
          {
            text: "The mind is everything. What you think you become.",
            author: "Buddha",
          },
          {
            text: "Life is 10% what happens to us and 90% how we react to it.",
            author: "Charles R. Swindoll",
          },
          {
            text: "Change your thoughts and you change your world.",
            author: "Norman Vincent Peale",
          },
          {
            text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            author: "Zig Ziglar",
          },
          {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
          },
          {
            text: "To live is the rarest thing in the world. Most people exist, that is all.",
            author: "Oscar Wilde",
          },
          {
            text: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius",
          },
          {
            text: "Our lives begin to end the day we become silent about things that matter.",
            author: "Martin Luther King Jr.",
          },
          {
            text: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt",
          },
          {
            text: "The only person you are destined to become is the person you decide to be.",
            author: "Ralph Waldo Emerson",
          },
          {
            text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
            author: "Henry David Thoreau",
          },
          {
            text: "When I let go of what I am, I become what I might be.",
            author: "Lao Tzu",
          },
          {
            text: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi",
          },
          {
            text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            author: "Ralph Waldo Emerson",
          },
          {
            text: "He who knows others is wise; he who knows himself is enlightened.",
            author: "Lao Tzu",
          },
          {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
          },
          {
            text: "We cannot solve our problems with the same thinking we used when we created them.",
            author: "Albert Einstein",
          },
          {
            text: "An unexamined life is not worth living.",
            author: "Socrates",
          },
          {
            text: "Happiness is not something ready-made. It comes from your own actions.",
            author: "Dalai Lama",
          },
          {
            text: "The best revenge is massive success.",
            author: "Frank Sinatra",
          },
          { text: "What you seek is seeking you.", author: "Rumi" },
          {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt",
          },
          {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein",
          },
          {
            text: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs",
          },
          {
            text: "The only real failure in life is not to be true to the best one knows.",
            author: "Buddha",
          },
          {
            text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
            author: "Mahatma Gandhi",
          },
          {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela",
          },
          {
            text: "It is never too late to be what you might have been.",
            author: "George Eliot",
          },
          {
            text: "Happiness is when what you think, what you say, and what you do are in harmony.",
            author: "Mahatma Gandhi",
          },
          {
            text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
            author: "Edmund Burke",
          },
          {
            text: "Life is really simple, but we insist on making it complicated.",
            author: "Confucius",
          },
          {
            text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            author: "Ralph Waldo Emerson",
          },
          {
            text: "Everything has beauty, but not everyone sees it.",
            author: "Confucius",
          },
          {
            text: "To know oneself is to study oneself in action with another person.",
            author: "Bruce Lee",
          },
          {
            text: "Your work is to discover your world and then with all your heart give yourself to it.",
            author: "Buddha",
          },
          {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
          },
          {
            text: "The only true wisdom is knowing you know nothing.",
            author: "Socrates",
          },
          {
            text: "The mind is everything. What you think, you become.",
            author: "Buddha",
          },
          {
            text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
            author: "Helen Keller",
          },
          {
            text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            author: "Albert Schweitzer",
          },
          {
            text: "What lies behind you and what lies in front of you pales in comparison to what lies inside of you.",
            author: "Ralph Waldo Emerson",
          },
          {
            text: "The purpose of our lives is to be happy.",
            author: "Dalai Lama",
          },
          {
            text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
            author: "Robert Louis Stevenson",
          },
          {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            author: "Abraham Lincoln",
          },
        ],
        r = Math.floor(Math.random() * n.length),
        i = n[r];
      function a() {
        const l = Math.floor(Math.random() * 120),
          u = Math.floor(Math.random() * 120),
          s = Math.floor(Math.random() * 120);
        return `#${l.toString(16).padStart(2, "0")}${u
          .toString(16)
          .padStart(2, "0")}${s.toString(16).padStart(2, "0")}`;
      }
      const o = a();
      this.setState({
        currentQuote: i.text,
        currentAuthor: i.author,
        backgroundColor: o,
      });
    });
    this.state = {
      currentQuote: "",
      currentAuthor: "",
      backgroundColor: "#ffffff",
    };
  }
  componentDidMount() {
    this.fetchNewQuote();
  }
  render() {
    const {
      currentQuote: n,
      currentAuthor: r,
      backgroundColor: i,
    } = this.state;
    return (
      (document.body.style.backgroundColor = i),
      Ne.jsxs(Sd, {
        className: "centered-container",
        children: [
          Ne.jsx("div", {
            id: "quote-box",
            style: { color: i },
            children: Ne.jsxs("p", {
              className: "fs-2 text-center",
              id: "text",
              children: ['"', n, '"'],
            }),
          }),
          Ne.jsxs("p", {
            className: "text-end fs-5",
            style: { color: i },
            id: "author",
            children: ["- ", r],
          }),
          Ne.jsxs("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
              Ne.jsx("a", {
                style: {
                  backgroundColor: i,
                  fontSize: "18px",
                  color: "white",
                  marginTop: "20px",
                },
                className: "btn",
                id: "tweet-quote",
                href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  n + " - " + r
                )}`,
                target: "_blank",
                rel: "noopener noreferrer",
                children: Ne.jsx(Fr, { icon: Oy }),
              }),
              Ne.jsx("button", {
                className: "btn",
                id: "new-quote",
                style: { backgroundColor: i, fontSize: "18px", color: "white" },
                onClick: this.fetchNewQuote,
                children: "New Quote",
              }),
            ],
          }),
        ],
      })
    );
  }
}
function Ly() {
  return Ne.jsx(Ay, {});
}
no.createRoot(document.getElementById("root")).render(
  Ne.jsx(vl.StrictMode, { children: Ne.jsx(Ly, {}) })
);

(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Dr = {},
  mc = {
    get exports() {
      return Dr;
    },
    set exports(e) {
      Dr = e;
    },
  },
  ol = {},
  Qe = {},
  hc = {
    get exports() {
      return Qe;
    },
    set exports(e) {
      Qe = e;
    },
  },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for("react.element"),
  vc = Symbol.for("react.portal"),
  yc = Symbol.for("react.fragment"),
  gc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  kc = Symbol.for("react.provider"),
  Sc = Symbol.for("react.context"),
  xc = Symbol.for("react.forward_ref"),
  Ec = Symbol.for("react.suspense"),
  Nc = Symbol.for("react.memo"),
  Cc = Symbol.for("react.lazy"),
  Ao = Symbol.iterator;
function _c(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ao && e[Ao]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bu = Object.assign,
  es = {};
function an(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = es),
    (this.updater = n || qu);
}
an.prototype.isReactComponent = {};
an.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e !== null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ts() {}
ts.prototype = an.prototype;
function Ki(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = es),
    (this.updater = n || qu);
}
var Yi = (Ki.prototype = new ts());
Yi.constructor = Ki;
bu(Yi, an.prototype);
Yi.isPureReactComponent = !0;
var Bo = Array.isArray,
  ns = Object.prototype.hasOwnProperty,
  Xi = { current: null },
  rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t !== null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ns.call(t, r) && !rs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: qn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Xi.current,
  };
}
function zc(e, t) {
  return {
    $$typeof: qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Pc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wo = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key !== null
    ? Pc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qn:
          case vc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Cl(o, 0) : r),
      Bo(l)
        ? ((n = ""),
          e !== null && (n = e.replace(Wo, "$&/") + "/"),
          xr(l, t, n, "", function (c) {
            return c;
          }))
        : l !== null &&
          (Gi(l) &&
            (l = zc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Wo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Bo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Cl(i, u);
      o += xr(i, t, n, s, l);
    }
  else if (((s = _c(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Cl(i, u++)), (o += xr(i, t, n, s, l));
  else if (i === "object")
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
function ir(e, t, n) {
  if (e === null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Lc(e) {
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
var se = { current: null },
  Er = { transition: null },
  Tc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Xi,
  };
T.Children = {
  map: ir,
  forEach: function (e, t, n) {
    ir(
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
      ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = an;
T.Fragment = yc;
T.Profiler = wc;
T.PureComponent = Ki;
T.StrictMode = gc;
T.Suspense = Ec;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
T.cloneElement = function (e, t, n) {
  if (e === null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t !== null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Xi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ns.call(t, s) &&
        !rs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ls;
T.createFactory = function (e) {
  var t = ls.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: xc, render: e };
};
T.isValidElement = Gi;
T.lazy = function (e) {
  return { $$typeof: Cc, _payload: { _status: -1, _result: e }, _init: Lc };
};
T.memo = function (e, t) {
  return { $$typeof: Nc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.2.0";
(function (e) {
  e.exports = T;
})(hc);
const it = pc(Qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc = Qe,
  Rc = Symbol.for("react.element"),
  Oc = Symbol.for("react.fragment"),
  Dc = Object.prototype.hasOwnProperty,
  Ic = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Dc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Rc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ic.current,
  };
}
ol.Fragment = Oc;
ol.jsx = is;
ol.jsxs = is;
(function (e) {
  e.exports = ol;
})(mc);
const m = Dr.jsx,
  R = Dr.jsxs;
var Jl = {},
  ql = {},
  Fc = {
    get exports() {
      return ql;
    },
    set exports(e) {
      ql = e;
    },
  },
  we = {},
  bl = {},
  Uc = {
    get exports() {
      return bl;
    },
    set exports(e) {
      bl = e;
    },
  },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, P) {
    var L = N.length;
    N.push(P);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        Z = N[Q];
      if (0 < l(Z, P)) (N[Q] = P), (N[L] = Z), (L = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var P = N[0],
      L = N.pop();
    if (L !== P) {
      N[0] = L;
      e: for (var Q = 0, Z = N.length, rr = Z >>> 1; Q < rr; ) {
        var kt = 2 * (Q + 1) - 1,
          Nl = N[kt],
          St = kt + 1,
          lr = N[St];
        if (0 > l(Nl, L))
          St < Z && 0 > l(lr, Nl)
            ? ((N[Q] = lr), (N[St] = L), (Q = St))
            : ((N[Q] = Nl), (N[kt] = L), (Q = kt));
        else if (St < Z && 0 > l(lr, L)) (N[Q] = lr), (N[St] = L), (Q = St);
        else break e;
      }
    }
    return P;
  }
  function l(N, P) {
    var L = N.sortIndex - P.sortIndex;
    return L !== 0 ? L : N.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    p = 3,
    w = !1,
    k = !1,
    S = !1,
    U = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= N)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function y(N) {
    if (((S = !1), d(N), !k))
      if (n(s) !== null) (k = !0), xl(E);
      else {
        var P = n(c);
        P !== null && El(y, P.startTime - N);
      }
  }
  function E(N, P) {
    (k = !1), S && ((S = !1), f(z), (z = -1)), (w = !0);
    var L = p;
    try {
      for (
        d(P), h = n(s);
        h !== null && (!(h.expirationTime > P) || (N && !Pe()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var Z = Q(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
            d(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var rr = !0;
      else {
        var kt = n(c);
        kt !== null && El(y, kt.startTime - P), (rr = !1);
      }
      return rr;
    } finally {
      (h = null), (p = L), (w = !1);
    }
  }
  var C = !1,
    _ = null,
    z = -1,
    W = 5,
    M = -1;
  function Pe() {
    return !(e.unstable_now() - M < W);
  }
  function dn() {
    if (_ !== null) {
      var N = e.unstable_now();
      M = N;
      var P = !0;
      try {
        P = _(!0, N);
      } finally {
        P ? pn() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var pn;
  if (typeof a == "function")
    pn = function () {
      a(dn);
    };
  else if (typeof MessageChannel < "u") {
    var Ho = new MessageChannel(),
      dc = Ho.port2;
    (Ho.port1.onmessage = dn),
      (pn = function () {
        dc.postMessage(null);
      });
  } else
    pn = function () {
      U(dn, 0);
    };
  function xl(N) {
    (_ = N), C || ((C = !0), pn());
  }
  function El(N, P) {
    z = U(function () {
      N(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), xl(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var L = p;
      p = P;
      try {
        return N();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, P) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = p;
      p = N;
      try {
        return P();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, P, L) {
      var Q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q))
          : (L = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (N = {
          id: v++,
          callback: P,
          priorityLevel: N,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > Q
          ? ((N.sortIndex = L),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (S ? (f(z), (z = -1)) : (S = !0), El(y, L - Q)))
          : ((N.sortIndex = Z), t(s, N), k || w || ((k = !0), xl(E))),
        N
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (N) {
      var P = p;
      return function () {
        var L = p;
        p = P;
        try {
          return N.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(os);
(function (e) {
  e.exports = os;
})(Uc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var us = Qe,
  ge = bl;
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
var ss = new Set(),
  In = {};
function Dt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) ss.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ei = Object.prototype.hasOwnProperty,
  Vc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qo = {},
  Ko = {};
function $c(e) {
  return ei.call(Ko, e)
    ? !0
    : ei.call(Qo, e)
    ? !1
    : Vc.test(e)
    ? (Ko[e] = !0)
    : ((Qo[e] = !0), !1);
}
function Hc(e, t, n, r) {
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
function Ac(e, t, n, r) {
  if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zi = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zi, Ji);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zi, Ji);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zi, Ji);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ac(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = us.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  bi = Symbol.for("react.strict_mode"),
  ti = Symbol.for("react.profiler"),
  as = Symbol.for("react.provider"),
  cs = Symbol.for("react.context"),
  eo = Symbol.for("react.forward_ref"),
  ni = Symbol.for("react.suspense"),
  ri = Symbol.for("react.suspense_list"),
  to = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  fs = Symbol.for("react.offscreen"),
  Yo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yo && e[Yo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  _l;
function xn(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var zl = !1;
function Pl(e, t) {
  if (!e || zl) return "";
  zl = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Bc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e;
    case 11:
      return (e = Pl(e.type.render, !1)), e;
    case 1:
      return (e = Pl(e.type, !0)), e;
    default:
      return "";
  }
}
function li(e) {
  if (e === null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case ti:
      return "Profiler";
    case bi:
      return "StrictMode";
    case ni:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cs:
        return (e.displayName || "Context") + ".Consumer";
      case as:
        return (e._context.displayName || "Context") + ".Provider";
      case eo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case to:
        return (
          (t = e.displayName || null), t !== null ? t : li(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return li(e(t));
        } catch {}
    }
  return null;
}
function Wc(e) {
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
      return li(t);
    case 8:
      return t === bi ? "StrictMode" : "Mode";
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
function ht(e) {
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
function ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qc(e) {
  var t = ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
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
function ur(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ir(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, t) {
  var n = t.checked;
  return A({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xo(e, t) {
  var n = t.defaultValue === null ? "" : t.defaultValue,
    r = t.checked !== null ? t.checked : t.defaultChecked;
  (n = ht(t.value !== null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked !== null
          : t.value !== null,
    });
}
function ms(e, t) {
  (t = t.checked), t !== null && qi(e, "checked", t, !1);
}
function oi(e, t) {
  ms(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n !== null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ui(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ui(e, t.type, ht(t.defaultValue)),
    t.checked === null &&
      t.defaultChecked !== null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Go(e, t, n) {
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
function ui(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) &&
    (n === null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Gt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function si(e, t) {
  if (t.dangerouslySetInnerHTML !== null) throw Error(g(91));
  return A({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zo(e, t) {
  var n = t.value;
  if (n === null) {
    if (((n = t.children), (t = t.defaultValue), n !== null)) {
      if (t !== null) throw Error(g(92));
      if (En(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t === null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function hs(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n !== null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue === null && e.defaultValue !== n && (e.defaultValue = n)),
    r !== null && (e.defaultValue = "" + r);
}
function Jo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ai(e, t) {
  return e === null || e === "http://www.w3.org/1999/xhtml"
    ? vs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sr,
  ys = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
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
  Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  Kc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
  });
});
function gs(e, t, n) {
  return t === null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
    ? ("" + t).trim()
    : t + "px";
}
function ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Yc = A(
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
function ci(e, t) {
  if (t) {
    if (Yc[e] && (t.children !== null || t.dangerouslySetInnerHTML !== null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML !== null) {
      if (t.children !== null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style !== null && typeof t.style != "object") throw Error(g(62));
  }
}
function fi(e, t) {
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
var di = null;
function no(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pi = null,
  Zt = null,
  Jt = null;
function qo(e) {
  if ((e = tr(e))) {
    if (typeof pi != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = fl(t)), pi(e.stateNode, e.type, t));
  }
}
function ks(e) {
  Zt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Zt = e);
}
function Ss() {
  if (Zt) {
    var e = Zt,
      t = Jt;
    if (((Jt = Zt = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function Es() {}
var Ll = !1;
function Ns(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return xs(e, t, n);
  } finally {
    (Ll = !1), (Zt !== null || Jt !== null) && (Es(), Ss());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
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
var mi = !1;
if (Ye)
  try {
    var hn = {};
    Object.defineProperty(hn, "passive", {
      get: function () {
        mi = !0;
      },
    }),
      window.addEventListener("test", hn, hn),
      window.removeEventListener("test", hn, hn);
  } catch {
    mi = !1;
  }
function Xc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var zn = !1,
  jr = null,
  Fr = !1,
  hi = null,
  Gc = {
    onError: function (e) {
      (zn = !0), (jr = e);
    },
  };
function Zc(e, t, n, r, l, i, o, u, s) {
  (zn = !1), (jr = null), Xc.apply(Gc, arguments);
}
function Jc(e, t, n, r, l, i, o, u, s) {
  if ((Zc.apply(this, arguments), zn)) {
    if (zn) {
      var c = jr;
      (zn = !1), (jr = null);
    } else throw Error(g(198));
    Fr || ((Fr = !0), (hi = c));
  }
}
function It(e) {
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
function Cs(e) {
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
function bo(e) {
  if (It(e) !== e) throw Error(g(188));
}
function qc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return bo(l), e;
        if (i === r) return bo(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return (e = qc(e)), e !== null ? zs(e) : null;
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = ge.unstable_scheduleCallback,
  eu = ge.unstable_cancelCallback,
  bc = ge.unstable_shouldYield,
  ef = ge.unstable_requestPaint,
  K = ge.unstable_now,
  tf = ge.unstable_getCurrentPriorityLevel,
  ro = ge.unstable_ImmediatePriority,
  Ls = ge.unstable_UserBlockingPriority,
  Ur = ge.unstable_NormalPriority,
  nf = ge.unstable_LowPriority,
  Ts = ge.unstable_IdlePriority,
  ul = null,
  Ve = null;
function rf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : uf,
  lf = Math.log,
  of = Math.LN2;
function uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lf(e) / of) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function Nn(e) {
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
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Nn(u)) : ((i &= o), i !== 0 && (r = Nn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Nn(o)) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function sf(e, t) {
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
function af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = sf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function vi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ms() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function cf(e, t) {
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
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function lo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Os,
  io,
  Ds,
  Is,
  js,
  yi = !1,
  fr = [],
  ot = null,
  ut = null,
  st = null,
  Un = new Map(),
  Vn = new Map(),
  tt = [],
  ff =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && io(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function df(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = vn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = vn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = vn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Un.set(i, vn(Un.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, vn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Fs(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cs(n)), t !== null)) {
          (e.blockedOn = t),
            js(e.priority, function () {
              Ds(n);
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
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (di = r), n.target.dispatchEvent(r), (di = null);
    } else return (t = tr(n)), t !== null && io(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  Nr(e) && n.delete(t);
}
function pf() {
  (yi = !1),
    ot !== null && Nr(ot) && (ot = null),
    ut !== null && Nr(ut) && (ut = null),
    st !== null && Nr(st) && (st = null),
    Un.forEach(nu),
    Vn.forEach(nu);
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yi ||
      ((yi = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, pf)));
}
function $n(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < fr.length) {
    yn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && yn(ot, e),
      ut !== null && yn(ut, e),
      st !== null && yn(st, e),
      Un.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    Fs(n), n.blockedOn === null && tt.shift();
}
var qt = Je.ReactCurrentBatchConfig,
  $r = !0;
function mf(e, t, n, r) {
  var l = D,
    i = qt.transition;
  qt.transition = null;
  try {
    (D = 1), oo(e, t, n, r);
  } finally {
    (D = l), (qt.transition = i);
  }
}
function hf(e, t, n, r) {
  var l = D,
    i = qt.transition;
  qt.transition = null;
  try {
    (D = 4), oo(e, t, n, r);
  } finally {
    (D = l), (qt.transition = i);
  }
}
function oo(e, t, n, r) {
  if ($r) {
    var l = gi(e, t, n, r);
    if (l === null) $l(e, t, r, Hr, n), tu(e, r);
    else if (df(l, e, t, n, r)) r.stopPropagation();
    else if ((tu(e, r), t & 4 && -1 < ff.indexOf(e))) {
      for (; l !== null; ) {
        var i = tr(l);
        if (
          (i !== null && Os(i),
          (i = gi(e, t, n, r)),
          i === null && $l(e, t, r, Hr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Hr = null;
function gi(e, t, n, r) {
  if (((Hr = null), (e = no(r)), (e = Nt(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Cs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hr = e), null;
}
function Us(e) {
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
      switch (tf()) {
        case ro:
          return 1;
        case Ls:
          return 4;
        case Ur:
        case nf:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  uo = null,
  Cr = null;
function Vs() {
  if (Cr) return Cr;
  var e,
    t = uo,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function ru() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented !== null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dr
        : ru),
      (this.isPropagationStopped = ru),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  so = ke(cn),
  er = A({}, cn, { view: 0, detail: 0 }),
  vf = ke(er),
  Ml,
  Rl,
  gn,
  sl = A({}, er, {
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
    getModifierState: ao,
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
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((Ml = e.screenX - gn.screenX), (Rl = e.screenY - gn.screenY))
              : (Rl = Ml = 0),
            (gn = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rl;
    },
  }),
  lu = ke(sl),
  yf = A({}, sl, { dataTransfer: 0 }),
  gf = ke(yf),
  wf = A({}, er, { relatedTarget: 0 }),
  Ol = ke(wf),
  kf = A({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(kf),
  xf = A({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ef = ke(xf),
  Nf = A({}, cn, { data: 0 }),
  iu = ke(Nf),
  Cf = {
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
  _f = {
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
  zf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function ao() {
  return Pf;
}
var Lf = A({}, er, {
    key: function (e) {
      if (e.key) {
        var t = Cf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _f[e.keyCode] || "Unidentified"
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
    getModifierState: ao,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Tf = ke(Lf),
  Mf = A({}, sl, {
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
  ou = ke(Mf),
  Rf = A({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ao,
  }),
  Of = ke(Rf),
  Df = A({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  If = ke(Df),
  jf = A({}, sl, {
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
  Ff = ke(jf),
  Uf = [9, 13, 27, 32],
  co = Ye && "CompositionEvent" in window,
  Pn = null;
Ye && "documentMode" in document && (Pn = document.documentMode);
var Vf = Ye && "TextEvent" in window && !Pn,
  $s = Ye && (!co || (Pn && 8 < Pn && 11 >= Pn)),
  uu = String.fromCharCode(32),
  su = !1;
function Hs(e, t) {
  switch (e) {
    case "keyup":
      return Uf.indexOf(t.keyCode) !== -1;
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
function As(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function $f(e, t) {
  switch (e) {
    case "compositionend":
      return As(t);
    case "keypress":
      return t.which !== 32 ? null : ((su = !0), uu);
    case "textInput":
      return (e = t.data), e === uu && su ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (Vt)
    return e === "compositionend" || (!co && Hs(e, t))
      ? ((e = Vs()), (Cr = uo = rt = null), (Vt = !1), e)
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
      return $s && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Af = {
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
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Af[e.type] : t === "textarea";
}
function Bs(e, t, n, r) {
  ks(r),
    (t = Ar(t, "onChange")),
    0 < t.length &&
      ((n = new so("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ln = null,
  Hn = null;
function Bf(e) {
  ea(e, 0);
}
function al(e) {
  var t = At(e);
  if (ps(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Ws = !1;
if (Ye) {
  var Dl;
  if (Ye) {
    var Il = "oninput" in document;
    if (!Il) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (Il = typeof cu.oninput == "function");
    }
    Dl = Il;
  } else Dl = !1;
  Ws = Dl && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Ln && (Ln.detachEvent("onpropertychange", Qs), (Hn = Ln = null));
}
function Qs(e) {
  if (e.propertyName === "value" && al(Hn)) {
    var t = [];
    Bs(t, Hn, e, no(e)), Ns(Bf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin"
    ? (fu(), (Ln = t), (Hn = n), Ln.attachEvent("onpropertychange", Qs))
    : e === "focusout" && fu();
}
function Kf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Hn);
}
function Yf(e, t) {
  if (e === "click") return al(t);
}
function Xf(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Gf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Gf;
function An(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ei.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = du(e);
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
    n = du(n);
  }
}
function Ks(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ks(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ys() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function fo(e) {
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
function Zf(e) {
  var t = Ys(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ks(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fo(n)) {
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
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = pu(n, i));
        var o = pu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
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
var Jf = Ye && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  wi = null,
  Tn = null,
  ki = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ki ||
    $t === null ||
    $t !== Ir(r) ||
    ((r = $t),
    "selectionStart" in r && fo(r)
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
    (Tn && An(Tn, r)) ||
      ((Tn = r),
      (r = Ar(wi, "onSelect")),
      0 < r.length &&
        ((t = new so("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ht = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  jl = {},
  Xs = {};
Ye &&
  ((Xs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  "TransitionEvent" in window || delete Ht.transitionend.transition);
function cl(e) {
  if (jl[e]) return jl[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return (jl[e] = t[n]);
  return e;
}
var Gs = cl("animationend"),
  Zs = cl("animationiteration"),
  Js = cl("animationstart"),
  qs = cl("transitionend"),
  bs = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  bs.set(e, t), Dt(t, [e]);
}
for (var Fl = 0; Fl < hu.length; Fl++) {
  var Ul = hu[Fl],
    qf = Ul.toLowerCase(),
    bf = Ul[0].toUpperCase() + Ul.slice(1);
  yt(qf, "on" + bf);
}
yt(Gs, "onAnimationEnd");
yt(Zs, "onAnimationIteration");
yt(Js, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(qs, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jc(r, t, void 0, e), (e.currentTarget = null);
}
function ea(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          vu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          vu(l, u, c), (i = s);
        }
    }
  }
  if (Fr) throw ((e = hi), (Fr = !1), (hi = null), e);
}
function j(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ta(t, e, 2, !1), n.add(r));
}
function Vl(e, t, n) {
  var r = 0;
  t && (r |= 4), ta(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      ss.forEach(function (n) {
        n !== "selectionchange" && (ed.has(n) || Vl(n, !1, e), Vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Vl("selectionchange", !1, t));
  }
}
function ta(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var l = mf;
      break;
    case 4:
      l = hf;
      break;
    default:
      l = oo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !mi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Nt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ns(function () {
    var c = i,
      v = no(n),
      h = [];
    e: {
      var p = bs.get(e);
      if (p !== void 0) {
        var w = so,
          k = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Tf;
            break;
          case "focusin":
            (k = "focus"), (w = Ol);
            break;
          case "focusout":
            (k = "blur"), (w = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ol;
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
            w = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Of;
            break;
          case Gs:
          case Zs:
          case Js:
            w = Sf;
            break;
          case qs:
            w = If;
            break;
          case "scroll":
            w = vf;
            break;
          case "wheel":
            w = Ff;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ou;
        }
        var S = (t & 4) !== 0,
          U = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Fn(a, f)), y !== null && S.push(Wn(a, y, d)))),
            U)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new w(p, k, null, n, v)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== di &&
            (k = n.relatedTarget || n.fromElement) &&
            (Nt(k) || k[Xe]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = c),
              (k = k ? Nt(k) : null),
              k !== null &&
                ((U = It(k)), k !== U || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((S = lu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ou),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (U = w === null ? p : At(w)),
            (d = k === null ? p : At(k)),
            (p = new S(y, a + "leave", w, n, v)),
            (p.target = U),
            (p.relatedTarget = d),
            (y = null),
            Nt(v) === c &&
              ((S = new S(f, a + "enter", k, n, v)),
              (S.target = d),
              (S.relatedTarget = U),
              (y = S)),
            (U = y),
            w && k)
          )
            t: {
              for (S = w, f = k, a = 0, d = S; d; d = jt(d)) a++;
              for (d = 0, y = f; y; y = jt(y)) d++;
              for (; 0 < a - d; ) (S = jt(S)), a--;
              for (; 0 < d - a; ) (f = jt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = jt(S)), (f = jt(f));
              }
              S = null;
            }
          else S = null;
          w !== null && yu(h, p, w, S, !1),
            k !== null && U !== null && yu(h, U, k, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? At(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var E = Wf;
        else if (au(p))
          if (Ws) E = Xf;
          else {
            E = Kf;
            var C = Qf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Yf);
        if (E && (E = E(e, c))) {
          Bs(h, E, n, v);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            ui(p, "number", p.value);
      }
      switch (((C = c ? At(c) : window), e)) {
        case "focusin":
          (au(C) || C.contentEditable === "true") &&
            (($t = C), (wi = c), (Tn = null));
          break;
        case "focusout":
          Tn = wi = $t = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ki = !1), mu(h, n, v);
          break;
        case "selectionchange":
          if (Jf) break;
        case "keydown":
        case "keyup":
          mu(h, n, v);
      }
      var _;
      if (co)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Vt
          ? Hs(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        ($s &&
          n.locale !== "ko" &&
          (Vt || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && Vt && (_ = Vs())
            : ((rt = v),
              (uo = "value" in rt ? rt.value : rt.textContent),
              (Vt = !0))),
        (C = Ar(c, z)),
        0 < C.length &&
          ((z = new iu(z, e, null, n, v)),
          h.push({ event: z, listeners: C }),
          _ ? (z.data = _) : ((_ = As(n)), _ !== null && (z.data = _)))),
        (_ = Vf ? $f(e, n) : Hf(e, n)) &&
          ((c = Ar(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new iu("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    ea(h, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Fn(e, n)),
      i !== null && r.unshift(Wn(e, i, l)),
      (i = Fn(e, t)),
      i !== null && r.push(Wn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Fn(n, i)), s !== null && o.unshift(Wn(n, s, u)))
        : l || ((s = Fn(n, i)), s !== null && o.push(Wn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var td = /\r\n?/g,
  nd = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      td,
      `
`
    )
    .replace(nd, "");
}
function hr(e, t, n) {
  if (((t = gu(t)), gu(e) !== t && n)) throw Error(g(425));
}
function Br() {}
var Si = null,
  xi = null;
function Ei(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html !== null)
  );
}
var Ni = typeof setTimeout == "function" ? setTimeout : void 0,
  rd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  ld =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(id);
        }
      : Ni;
function id(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function at(e) {
  for (; e !== null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ku(e) {
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
var fn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + fn,
  Qn = "__reactProps$" + fn,
  Xe = "__reactContainer$" + fn,
  Ci = "__reactEvents$" + fn,
  od = "__reactListeners$" + fn,
  ud = "__reactHandles$" + fn;
function Nt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ku(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[Ue] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function fl(e) {
  return e[Qn] || null;
}
var _i = [],
  Bt = -1;
function gt(e) {
  return { current: e };
}
function F(e) {
  0 > Bt || ((e.current = _i[Bt]), (_i[Bt] = null), Bt--);
}
function I(e, t) {
  Bt++, (_i[Bt] = e.current), (e.current = t);
}
var vt = {},
  ie = gt(vt),
  de = gt(!1),
  Lt = vt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e !== null;
}
function Wr() {
  F(de), F(ie);
}
function Su(e, t, n) {
  if (ie.current !== vt) throw Error(g(168));
  I(ie, t), I(de, n);
}
function na(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Wc(e) || "Unknown", l));
  return A({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Lt = ie.current),
    I(ie, e),
    I(de, de.current),
    !0
  );
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = na(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(ie),
      I(ie, e))
    : F(de),
    I(de, n);
}
var Ae = null,
  dl = !1,
  Al = !1;
function ra(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function sd(e) {
  (dl = !0), ra(e);
}
function wt() {
  if (!Al && Ae !== null) {
    Al = !0;
    var e = 0,
      t = D;
    try {
      var n = Ae;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (dl = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ps(ro, wt), l);
    } finally {
      (D = t), (Al = !1);
    }
  }
  return null;
}
var Wt = [],
  Qt = 0,
  Kr = null,
  Yr = 0,
  Se = [],
  xe = 0,
  Tt = null,
  Be = 1,
  We = "";
function xt(e, t) {
  (Wt[Qt++] = Yr), (Wt[Qt++] = Kr), (Kr = e), (Yr = t);
}
function la(e, t, n) {
  (Se[xe++] = Be), (Se[xe++] = We), (Se[xe++] = Tt), (Tt = e);
  var r = Be;
  e = We;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (We = i + e);
  } else (Be = (1 << i) | (n << l) | r), (We = e);
}
function po(e) {
  e.return !== null && (xt(e, 1), la(e, 1, 0));
}
function mo(e) {
  for (; e === Kr; )
    (Kr = Wt[--Qt]), (Wt[Qt] = null), (Yr = Wt[--Qt]), (Wt[Qt] = null);
  for (; e === Tt; )
    (Tt = Se[--xe]),
      (Se[xe] = null),
      (We = Se[--xe]),
      (Se[xe] = null),
      (Be = Se[--xe]),
      (Se[xe] = null);
}
var ye = null,
  ve = null,
  V = !1,
  Re = null;
function ia(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Eu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: Be, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if (V) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Eu(e, t)) {
        if (zi(e)) throw Error(g(418));
        t = at(n.nextSibling);
        var r = ye;
        t && Eu(e, t)
          ? ia(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
      }
    } else {
      if (zi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!V) return Nu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (zi(e)) throw (oa(), Error(g(418)));
    for (; t; ) ia(e, t), (t = at(t.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function oa() {
  for (var e = ve; e; ) e = at(e.nextSibling);
}
function rn() {
  (ve = ye = null), (V = !1);
}
function ho(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var ad = Je.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = A({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xr = gt(null),
  Gr = null,
  Kt = null,
  vo = null;
function yo() {
  vo = Kt = Gr = null;
}
function go(e) {
  var t = Xr.current;
  F(Xr), (e._currentValue = t);
}
function Li(e, t, n) {
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
function bt(e, t) {
  (Gr = e),
    (vo = Kt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (vo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (Gr === null) throw Error(g(308));
      (Kt = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Kt = Kt.next = e;
  return t;
}
var Ct = null;
function wo(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function ua(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), wo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
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
var et = !1;
function ko(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sa(e, t) {
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
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), wo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lo(e, n);
  }
}
function Cu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
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
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            S = u;
          switch (((p = t), (w = n), S.tag)) {
            case 1:
              if (((k = S.payload), typeof k == "function")) {
                h = k.call(w, h, p);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = S.payload),
                (p = typeof k == "function" ? k.call(w, h, p) : k),
                p === null)
              )
                break e;
              h = A({}, h, p);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Rt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var aa = new us.Component().refs;
function Ti(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n === null ? t : A({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = dt(e),
      i = Ke(r, l);
    (i.payload = t),
      n !== null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), zr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = dt(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n !== null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), zr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t !== null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (De(t, e, r, n), zr(t, e, r));
  },
};
function zu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !An(n, r) || !An(l, i)
      : !0
  );
}
function ca(e, t, n) {
  var r = !1,
    l = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ce(i))
      : ((l = pe(t) ? Lt : ie.current),
        (r = t.contextTypes),
        (i = (r = r !== null) ? nn(e, l) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Pu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Mi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = aa), ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ce(i))
    : ((i = pe(t) ? Lt : ie.current), (l.context = nn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ti(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && pl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === aa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function yr(e, t) {
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
function Lu(e) {
  var t = e._init;
  return t(e._payload);
}
function fa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = pt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Gl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var E = d.type;
    return E === Ut
      ? v(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            Lu(E) === a.type))
      ? ((y = l(a, d.props)), (y.ref = wn(f, a, d)), (y.return = f), y)
      : ((y = Or(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = wn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Zl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = Pt(d, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Gl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = wn(f, null, a)),
            (d.return = f),
            d
          );
        case Ft:
          return (a = Zl(a, f.mode, d)), (a.return = f), a;
        case be:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (En(a) || mn(a))
        return (a = Pt(a, f.mode, d, null)), (a.return = f), a;
      yr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === E ? s(f, a, d, y) : null;
        case Ft:
          return d.key === E ? c(f, a, d, y) : null;
        case be:
          return (E = d._init), p(f, a, E(d._payload), y);
      }
      if (En(d) || mn(d)) return E !== null ? null : v(f, a, d, y, null);
      yr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case or:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, E);
        case Ft:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E);
        case be:
          var C = y._init;
          return w(f, a, d, C(y._payload), E);
      }
      if (En(y) || mn(y)) return (f = f.get(d) || null), v(a, f, y, E, null);
      yr(a, y);
    }
    return null;
  }
  function k(f, a, d, y) {
    for (
      var E = null, C = null, _ = a, z = (a = 0), W = null;
      _ !== null && z < d.length;
      z++
    ) {
      _.index > z ? ((W = _), (_ = null)) : (W = _.sibling);
      var M = p(f, _, d[z], y);
      if (M === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && M.alternate === null && t(f, _),
        (a = i(M, a, z)),
        C === null ? (E = M) : (C.sibling = M),
        (C = M),
        (_ = W);
    }
    if (z === d.length) return n(f, _), V && xt(f, z), E;
    if (_ === null) {
      for (; z < d.length; z++)
        (_ = h(f, d[z], y)),
          _ !== null &&
            ((a = i(_, a, z)), C === null ? (E = _) : (C.sibling = _), (C = _));
      return V && xt(f, z), E;
    }
    for (_ = r(f, _); z < d.length; z++)
      (W = w(_, f, z, d[z], y)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? z : W.key),
          (a = i(W, a, z)),
          C === null ? (E = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      V && xt(f, z),
      E
    );
  }
  function S(f, a, d, y) {
    var E = mn(d);
    if (typeof E != "function") throw Error(g(150));
    if (((d = E.call(d)), d === null)) throw Error(g(151));
    for (
      var C = (E = null), _ = a, z = (a = 0), W = null, M = d.next();
      _ !== null && !M.done;
      z++, M = d.next()
    ) {
      _.index > z ? ((W = _), (_ = null)) : (W = _.sibling);
      var Pe = p(f, _, M.value, y);
      if (Pe === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = i(Pe, a, z)),
        C === null ? (E = Pe) : (C.sibling = Pe),
        (C = Pe),
        (_ = W);
    }
    if (M.done) return n(f, _), V && xt(f, z), E;
    if (_ === null) {
      for (; !M.done; z++, M = d.next())
        (M = h(f, M.value, y)),
          M !== null &&
            ((a = i(M, a, z)), C === null ? (E = M) : (C.sibling = M), (C = M));
      return V && xt(f, z), E;
    }
    for (_ = r(f, _); !M.done; z++, M = d.next())
      (M = w(_, f, z, M.value, y)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? z : M.key),
          (a = i(M, a, z)),
          C === null ? (E = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        _.forEach(function (dn) {
          return t(f, dn);
        }),
      V && xt(f, z),
      E
    );
  }
  function U(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ut &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Ut)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    Lu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = wn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ut
              ? ((a = Pt(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Or(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = wn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Zl(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case be:
          return (C = d._init), U(f, a, C(d._payload), y);
      }
      if (En(d)) return k(f, a, d, y);
      if (mn(d)) return S(f, a, d, y);
      yr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Gl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return U;
}
var ln = fa(!0),
  da = fa(!1),
  nr = {},
  $e = gt(nr),
  Kn = gt(nr),
  Yn = gt(nr);
function _t(e) {
  if (e === nr) throw Error(g(174));
  return e;
}
function So(e, t) {
  switch ((I(Yn, t), I(Kn, e), I($e, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ai(t, e));
  }
  F($e), I($e, t);
}
function on() {
  F($e), F(Kn), F(Yn);
}
function pa(e) {
  _t(Yn.current);
  var t = _t($e.current),
    n = ai(t, e.type);
  t !== n && (I(Kn, e), I($e, n));
}
function xo(e) {
  Kn.current === e && (F($e), F(Kn));
}
var $ = gt(0);
function Jr(e) {
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
var Bl = [];
function Eo() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Pr = Je.ReactCurrentDispatcher,
  Wl = Je.ReactCurrentBatchConfig,
  Mt = 0,
  H = null,
  X = null,
  J = null,
  qr = !1,
  Mn = !1,
  Xn = 0,
  cd = 0;
function ne() {
  throw Error(g(321));
}
function No(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Co(e, t, n, r, l, i) {
  if (
    ((Mt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? md : hd),
    (e = n(r, l)),
    Mn)
  ) {
    i = 0;
    do {
      if (((Mn = !1), (Xn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Pr.current = vd),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Pr.current = br),
    (t = X !== null && X.next !== null),
    (Mt = 0),
    (J = X = H = null),
    (qr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function _o() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
}
function _e() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(g(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Mt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (H.lanes |= v),
          (Rt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Ie(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (Rt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ma() {}
function ha(e, t) {
  var n = H,
    r = _e(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    zo(ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zn(9, ya.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349));
    Mt & 30 || va(n, t, l);
  }
  return l;
}
function va(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ya(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wa(t) && ka(e);
}
function ga(e, t, n) {
  return n(function () {
    wa(t) && ka(e);
  });
}
function wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function ka(e) {
  var t = Ge(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Tu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pd.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sa() {
  return _e().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Fe();
  (H.flags |= e),
    (l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && No(r, o.deps))) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Zn(1 | t, n, i, r));
}
function Mu(e, t) {
  return Lr(8390656, 8, e, t);
}
function zo(e, t) {
  return ml(2048, 8, e, t);
}
function xa(e, t) {
  return ml(4, 2, e, t);
}
function Ea(e, t) {
  return ml(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t !== null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ca(e, t, n) {
  return (
    (n = n !== null ? n.concat([e]) : null), ml(4, 4, Na.bind(null, t, e), n)
  );
}
function Po() {}
function _a(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function za(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return Mt & 21
    ? (Ie(n, t) || ((n = Ms()), (H.lanes |= n), (Rt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function fd(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Wl.transition = r);
  }
}
function La() {
  return _e().memoizedState;
}
function dd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ta(e))
  )
    Ma(t, n);
  else if (((n = ua(e, t, n, r)), n !== null)) {
    var l = ue();
    De(n, e, r, l), Ra(n, t, r);
  }
}
function pd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) Ma(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), wo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ua(e, t, l, r)),
      n !== null && ((l = ue()), De(n, e, r, l), Ra(n, t, r));
  }
}
function Ta(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Ma(e, t) {
  Mn = qr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lo(e, n);
  }
}
var br = {
    readContext: Ce,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: Mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n !== null ? n.concat([e]) : null),
        Lr(4194308, 4, Na.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
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
        (e = e.dispatch = dd.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Tu,
    useDebugValue: Po,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Tu(!1),
        t = e[0];
      return (e = fd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Fe();
      if (V) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(g(349));
        Mt & 30 || va(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Mu(ga.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zn(9, ya.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (V) {
        var n = We,
          r = Be;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hd = {
    readContext: Ce,
    useCallback: _a,
    useContext: Ce,
    useEffect: zo,
    useImperativeHandle: Ca,
    useInsertionEffect: xa,
    useLayoutEffect: Ea,
    useMemo: za,
    useReducer: Ql,
    useRef: Sa,
    useState: function () {
      return Ql(Gn);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = _e();
      return Pa(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Gn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ma,
    useSyncExternalStore: ha,
    useId: La,
    unstable_isNewReconciler: !1,
  },
  vd = {
    readContext: Ce,
    useCallback: _a,
    useContext: Ce,
    useEffect: zo,
    useImperativeHandle: Ca,
    useInsertionEffect: xa,
    useLayoutEffect: Ea,
    useMemo: za,
    useReducer: Kl,
    useRef: Sa,
    useState: function () {
      return Kl(Gn);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var t = _e();
      return X === null ? (t.memoizedState = e) : Pa(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(Gn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ma,
    useSyncExternalStore: ha,
    useId: La,
    unstable_isNewReconciler: !1,
  };
function un(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ri(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yd = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Ai = r)), Ri(e, t);
    }),
    n
  );
}
function Da(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ri(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ri(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Md.bind(null, e, t, n)), t.then(e, e));
}
function Ou(e) {
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
function Du(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gd = Je.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? da(t, null, n, r) : ln(t, e.child, n, r);
}
function Iu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    bt(t, l),
    (r = Co(e, t, n, r, i, l)),
    (n = _o()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (V && n && po(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function ju(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !jo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ia(e, t, i, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : An), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ia(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (An(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Oi(e, t, n, r, l);
}
function ja(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Xt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Xt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Xt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Xt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function Fa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oi(e, t, n, r, l) {
  var i = pe(n) ? Lt : ie.current;
  return (
    (i = nn(t, i)),
    bt(t, l),
    (n = Co(e, t, n, r, i, l)),
    (r = _o()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (V && r && po(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Qr(t);
  } else i = !1;
  if ((bt(t, l), t.stateNode === null))
    Tr(e, t), ca(t, n, r), Mi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ce(c))
      : ((c = pe(n) ? Lt : ie.current), (c = nn(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Pu(t, o, r, c)),
      (et = !1);
    var p = t.memoizedState;
    (o.state = p),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || et
        ? (typeof v == "function" && (Ti(t, n, v, r), (s = t.memoizedState)),
          (u = et || zu(t, n, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      sa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ce(s))
        : ((s = pe(n) ? Lt : ie.current), (s = nn(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Pu(t, o, r, s)),
      (et = !1),
      (p = t.memoizedState),
      (o.state = p),
      Zr(t, r, o, l);
    var k = t.memoizedState;
    u !== h || p !== k || de.current || et
      ? (typeof w == "function" && (Ti(t, n, w, r), (k = t.memoizedState)),
        (c = et || zu(t, n, c, r, p, k, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Di(e, t, n, r, i, l);
}
function Di(e, t, n, r, l, i) {
  Fa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (gd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ln(t, e.child, null, i)), (t.child = ln(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && xu(t, n, !0),
    t.child
  );
}
function Ua(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Su(e, t.context, !1),
    So(e, t.containerInfo);
}
function Uu(e, t, n, r, l) {
  return rn(), ho(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
function ji(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      Pi(t),
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
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = yl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ji(n)),
              (t.memoizedState = Ii),
              e)
            : Lo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return wd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ji(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ii),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
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
function Lo(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && ho(r),
    ln(t, e.child, null, n),
    (e = Lo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yl(Error(g(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ln(t, e.child, null, o),
        (t.child.memoizedState = ji(o)),
        (t.memoizedState = Ii),
        i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Yl(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ge(e, l), De(r, e, l, -1));
    }
    return Io(), (r = Yl(Error(g(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = at(l.nextSibling)),
      (ye = t),
      (V = !0),
      (Re = null),
      e !== null &&
        ((Se[xe++] = Be),
        (Se[xe++] = We),
        (Se[xe++] = Tt),
        (Be = e.id),
        (We = e.overflow),
        (Tt = t)),
      (t = Lo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Li(e.return, t, n);
}
function Xl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function $a(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
        else if (e.tag === 19) Vu(e, n, t);
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
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xl(t, !0, n, null, i);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function kd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ua(t), rn();
      break;
    case 5:
      pa(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      So(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Va(e, t, n)
          : (I($, $.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $a(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ja(e, t, n);
  }
  return Ze(e, t, n);
}
var Ha, Fi, Aa, Ba;
Ha = function (e, t) {
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
Fi = function () {};
Aa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t($e.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ii(e, l)), (r = ii(e, r)), (i = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = si(e, l)), (r = si(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Br);
    }
    ci(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] !== null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (In.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l !== null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s !== null || u !== null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s !== null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (In.hasOwnProperty(c)
                ? (s !== null && c === "onScroll" && j("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ba = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!V)
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
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Sd(e, t, n) {
  var r = t.pendingProps;
  switch ((mo(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Wr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        on(),
        F(de),
        F(ie),
        Eo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (Qi(Re), (Re = null)))),
        Fi(e, t),
        re(t),
        null
      );
    case 5:
      xo(t);
      var l = _t(Yn.current);
      if (((n = t.type), e !== null && t.stateNode !== null))
        Aa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (((e = _t($e.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) j(Cn[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j("error", r), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              Xo(r, i), j("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                j("invalid", r);
              break;
            case "textarea":
              Zo(r, i), j("invalid", r);
          }
          ci(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : In.hasOwnProperty(o) &&
                  u !== null &&
                  o === "onScroll" &&
                  j("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), Go(r, i, !0);
              break;
            case "textarea":
              ur(r), Jo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vs(n)),
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
            (e[Ue] = t),
            (e[Qn] = r),
            Ha(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = fi(n, r)), n)) {
              case "dialog":
                j("cancel", e), j("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) j(Cn[l], e);
                l = r;
                break;
              case "source":
                j("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                j("error", e), j("load", e), (l = r);
                break;
              case "details":
                j("toggle", e), (l = r);
                break;
              case "input":
                Xo(e, r), (l = ii(e, r)), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  j("invalid", e);
                break;
              case "textarea":
                Zo(e, r), (l = si(e, r)), j("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ws(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s !== null && ys(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && jn(e, s)
                    : typeof s == "number" && jn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (In.hasOwnProperty(i)
                      ? s !== null && i === "onScroll" && j("scroll", e)
                      : s !== null && qi(e, i, s, o));
              }
            switch (n) {
              case "input":
                ur(e), Go(e, r, !1);
                break;
              case "textarea":
                ur(e), Jo(e);
                break;
              case "option":
                r.value !== null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i !== null
                    ? Gt(e, !!r.multiple, i, !1)
                    : r.defaultValue !== null &&
                      Gt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
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
      return re(t), null;
    case 6:
      if (e && t.stateNode !== null) Ba(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = _t(Yn.current)), _t($e.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ve !== null && t.mode & 1 && !(t.flags & 128))
          oa(), rn(), (t.flags |= 98560), (i = !1);
        else if (((i = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ue] = t;
          } else
            rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Re !== null && (Qi(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : Io())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        on(), Fi(e, t), e === null && Bn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return go(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Wr(), re(t), null;
    case 19:
      if ((F($), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) kn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Jr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    kn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > sn &&
            ((t.flags |= 128), (r = !0), kn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
            )
              return re(t), null;
          } else
            2 * K() - i.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Do(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function xd(e, t) {
  switch ((mo(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Wr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        F(de),
        F(ie),
        Eo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xo(t), null;
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F($), null;
    case 4:
      return on(), null;
    case 10:
      return go(t.type._context), null;
    case 22:
    case 23:
      return Do(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  le = !1,
  Ed = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Ui(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var $u = !1;
function Nd(e, t) {
  if (((Si = $r), (e = Ys()), fo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, $r = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var S = k.memoizedProps,
                    U = k.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Te(t.type, S),
                      U
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
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
          B(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (k = $u), ($u = !1), k;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ui(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
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
function Vi(e) {
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
function Wa(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Qn], delete t[Ci], delete t[od], delete t[ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qa(e.return)) return null;
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
function $i(e, t, n) {
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
          n !== null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), (e = e.sibling);
}
function Hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
var b = null,
  Me = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ka(e, t, n), (n = n.sibling);
}
function Ka(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Yt(n, t);
    case 6:
      var r = b,
        l = Me;
      (b = null),
        qe(e, t, n),
        (b = r),
        (Me = l),
        b !== null &&
          (Me
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Me
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, n)
              : e.nodeType === 1 && Hl(e, n),
            $n(e))
          : Hl(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Me),
        (b = n.stateNode.containerInfo),
        (Me = !0),
        qe(e, t, n),
        (b = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ui(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Yt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), qe(e, t, n), (le = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ed()),
      t.forEach(function (r) {
        var l = Od.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Me = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(g(160));
        Ka(i, o, l), (b = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ya(t, e), (t = t.sibling);
}
function Ya(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), je(e), r & 4)) {
        try {
          Rn(3, e, e.return), hl(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          Rn(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      Le(t, e), je(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        je(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          jn(l, "");
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l !== null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name !== null && ms(l, i),
              fi(u, o);
            var c = fi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? ws(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ys(l, h)
                : v === "children"
                ? jn(l, h)
                : qi(l, v, h, c);
            }
            switch (u) {
              case "input":
                oi(l, i);
                break;
              case "textarea":
                hs(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w !== null
                  ? Gt(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue !== null
                      ? Gt(l, !!i.multiple, i.defaultValue, !0)
                      : Gt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Qn] = i;
          } catch (S) {
            B(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Le(t, e), je(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      break;
    case 4:
      Le(t, e), je(e);
      break;
    case 13:
      Le(t, e),
        je(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ro = K())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || v), Le(t, e), (le = c)) : Le(t, e),
        je(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (x = e, v = e.child; v !== null; ) {
            for (h = x = v; x !== null; ) {
              switch (((p = x), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, p, p.return);
                  break;
                case 1:
                  Yt(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (S) {
                      B(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Yt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Wu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (x = w)) : Wu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s !== null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = gs("display", o)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), je(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), je(e);
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jn(l, ""), (r.flags &= -33));
          var i = Hu(e);
          Hi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Hu(e);
          $i(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cd(e, t, n) {
  (x = e), Xa(e);
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = wr;
        var c = le;
        if (((wr = o), (le = s) && !c))
          for (x = l; x !== null; )
            (o = x),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qu(l)
                : s !== null
                ? ((s.return = o), (x = s))
                : Qu(l);
        for (; i !== null; ) (x = i), Xa(i), (i = i.sibling);
        (x = l), (wr = u), (le = c);
      }
      Bu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : Bu(e);
  }
}
function Bu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && _u(t, i, r);
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
                _u(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && $n(h);
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
        le || (t.flags & 512 && Vi(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Wu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Qu(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Vi(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Vi(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (x = u);
      break;
    }
    x = t.return;
  }
}
var _d = Math.ceil,
  el = Je.ReactCurrentDispatcher,
  To = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  O = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Xt = gt(0),
  G = 0,
  Jn = null,
  Rt = 0,
  vl = 0,
  Mo = 0,
  On = null,
  ce = null,
  Ro = 0,
  sn = 1 / 0,
  He = null,
  tl = !1,
  Ai = null,
  ft = null,
  kr = !1,
  lt = null,
  nl = 0,
  Dn = 0,
  Bi = null,
  Mr = -1,
  Rr = 0;
function ue() {
  return O & 6 ? K() : Mr !== -1 ? Mr : (Mr = K());
}
function dt(e) {
  return e.mode & 1
    ? O & 2 && ee !== 0
      ? ee & -ee
      : ad.transition !== null
      ? (Rr === 0 && (Rr = Ms()), Rr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Bi = null), Error(g(185)));
  bn(e, n, r),
    (!(O & 2) || e !== q) &&
      (e === q && (!(O & 2) && (vl |= n), G === 4 && nt(e, ee)),
      me(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((sn = K() + 500), dl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  af(e, t);
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n !== null && eu(n), t === 1))
      e.tag === 0 ? sd(Ku.bind(null, e)) : ra(Ku.bind(null, e)),
        ld(function () {
          !(O & 6) && wt();
        }),
        (n = null);
    else {
      switch (Rs(r)) {
        case 1:
          n = ro;
          break;
        case 4:
          n = Ls;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = Ur;
      }
      n = nc(n, Ga.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ga(e, t) {
  if (((Mr = -1), (Rr = 0), O & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var i = Ja();
    (q !== e || ee !== t) && ((He = null), (sn = K() + 500), zt(e, t));
    do
      try {
        Ld();
        break;
      } catch (u) {
        Za(e, u);
      }
    while (1);
    yo(),
      (el.current = i),
      (O = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = vi(e)), l !== 0 && ((r = l), (t = Wi(e, l)))), t === 1)
    )
      throw ((n = Jn), zt(e, 0), nt(e, r), me(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !zd(l) &&
          ((t = rl(e, r)),
          t === 2 && ((i = vi(e)), i !== 0 && ((r = i), (t = Wi(e, i)))),
          t === 1))
      )
        throw ((n = Jn), zt(e, 0), nt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Et(e, ce, He);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Ro + 500 - K()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ni(Et.bind(null, e, ce, He), t);
            break;
          }
          Et(e, ce, He);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
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
                : 1960 * _d(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ni(Et.bind(null, e, ce, He), r);
            break;
          }
          Et(e, ce, He);
          break;
        case 5:
          Et(e, ce, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Ga.bind(null, e) : null;
}
function Wi(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Qi(t)),
    e
  );
}
function Qi(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function zd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
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
function nt(e, t) {
  for (
    t &= ~Mo,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ku(e) {
  if (O & 6) throw Error(g(327));
  en();
  var t = Vr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && ((t = r), (n = Wi(e, r)));
  }
  if (n === 1) throw ((n = Jn), zt(e, 0), nt(e, t), me(e, K()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, ce, He),
    me(e, K()),
    null
  );
}
function Oo(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((sn = K() + 500), dl && wt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(O & 6) && en();
  var t = O;
  O |= 1;
  var n = Ne.transition,
    r = D;
  try {
    if (((Ne.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Ne.transition = n), (O = t), !(O & 6) && wt();
  }
}
function Do() {
  (he = Xt.current), F(Xt);
}
function zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((mo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r !== null && Wr();
          break;
        case 3:
          on(), F(de), F(ie), Eo();
          break;
        case 5:
          xo(r);
          break;
        case 4:
          on();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          go(r.type._context);
          break;
        case 22:
        case 23:
          Do();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = pt(e.current, null)),
    (ee = he = t),
    (G = 0),
    (Jn = null),
    (Mo = vl = Rt = 0),
    (ce = On = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function Za(e, t) {
  do {
    var n = Y;
    try {
      if ((yo(), (Pr.current = br), qr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        qr = !1;
      }
      if (
        ((Mt = 0),
        (J = X = H = null),
        (Mn = !1),
        (Xn = 0),
        (To.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Jn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Ou(o);
          if (w !== null) {
            (w.flags &= -257),
              Du(w, o, u, i, t),
              w.mode & 1 && Ru(i, c, t),
              (t = w),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ru(i, c, t), Io();
              break e;
            }
            s = Error(g(426));
          }
        } else if (V && u.mode & 1) {
          var U = Ou(o);
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256),
              Du(U, o, u, i, t),
              ho(un(s, u));
            break e;
          }
        }
        (i = s = un(s, u)),
          G !== 4 && (G = 2),
          On === null ? (On = [i]) : On.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Oa(i, s, t);
              Cu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ft === null || !ft.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Da(i, u, t);
                Cu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ba(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ja() {
  var e = el.current;
  return (el.current = br), e === null ? br : e;
}
function Io() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(Rt & 268435455) && !(vl & 268435455)) || nt(q, ee);
}
function rl(e, t) {
  var n = O;
  O |= 2;
  var r = Ja();
  (q !== e || ee !== t) && ((He = null), zt(e, t));
  do
    try {
      Pd();
      break;
    } catch (l) {
      Za(e, l);
    }
  while (1);
  if ((yo(), (O = n), (el.current = r), Y !== null)) throw Error(g(261));
  return (q = null), (ee = 0), G;
}
function Pd() {
  for (; Y !== null; ) qa(Y);
}
function Ld() {
  for (; Y !== null && !bc(); ) qa(Y);
}
function qa(e) {
  var t = tc(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? ba(e) : (Y = t),
    (To.current = null);
}
function ba(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = Sd(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Et(e, t, n) {
  var r = D,
    l = Ne.transition;
  try {
    (Ne.transition = null), (D = 1), Td(e, t, n, r);
  } finally {
    (Ne.transition = l), (D = r);
  }
  return null;
}
function Td(e, t, n, r) {
  do en();
  while (lt !== null);
  if (O & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (cf(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      kr ||
      ((kr = !0),
      nc(Ur, function () {
        return en(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = D;
    D = 1;
    var u = O;
    (O |= 4),
      (To.current = null),
      Nd(e, n),
      Ya(n, e),
      Zf(xi),
      ($r = !!Si),
      (xi = Si = null),
      (e.current = n),
      Cd(n),
      ef(),
      (O = u),
      (D = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (kr && ((kr = !1), (lt = e), (nl = l)),
    (i = e.pendingLanes),
    i === 0 && (ft = null),
    rf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Ai), (Ai = null), e);
  return (
    nl & 1 && e.tag !== 0 && en(),
    (i = e.pendingLanes),
    i & 1 ? (e === Bi ? Dn++ : ((Dn = 0), (Bi = e))) : (Dn = 0),
    wt(),
    null
  );
}
function en() {
  if (lt !== null) {
    var e = Rs(nl),
      t = Ne.transition,
      n = D;
    try {
      if (((Ne.transition = null), (D = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (nl = 0), O & 6)) throw Error(g(331));
        var l = O;
        for (O |= 4, x = e.current; x !== null; ) {
          var i = x,
            o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var v = x;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (x = h);
                  else
                    for (; x !== null; ) {
                      v = x;
                      var p = v.sibling,
                        w = v.return;
                      if ((Wa(v), v === c)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (x = p);
                        break;
                      }
                      x = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var U = S.sibling;
                    (S.sibling = null), (S = U);
                  } while (S !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (x = f);
                break e;
              }
              x = i.return;
            }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
          else
            e: for (o = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                x = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (x = y);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((O = l), wt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Yu(e, t, n) {
  (t = un(n, t)),
    (t = Oa(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ue()),
    e !== null && (bn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = un(n, e)),
            (e = Da(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ue()),
            t !== null && (bn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Md(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Ro)
        ? zt(e, 0)
        : (Mo |= n)),
    me(e, t);
}
function ec(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ge(e, t)), e !== null && (bn(e, t, n), me(e, n));
}
function Rd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ec(e, n);
}
function Od(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), ec(e, n);
}
var tc;
tc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), kd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), V && t.flags & 1048576 && la(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tr(e, t), (e = t.pendingProps);
      var l = nn(t, ie.current);
      bt(t, n), (l = Co(null, t, r, e, l, n));
      var i = _o();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ko(t),
            (l.updater = pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Mi(t, r, e, n),
            (t = Di(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && po(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Id(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Oi(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Iu(null, t, r, e, n);
            break e;
          case 14:
            t = ju(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Oi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Fu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ua(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          sa(e, t),
          Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = un(Error(g(423)), t)), (t = Uu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = un(Error(g(424)), t)), (t = Uu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = at(t.stateNode.containerInfo.firstChild),
                ye = t,
                V = !0,
                Re = null,
                n = da(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pa(t),
        e === null && Pi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ei(r, l) ? (o = null) : i !== null && Ei(r, i) && (t.flags |= 32),
        Fa(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Pi(t), null;
    case 13:
      return Va(e, t, n);
    case 4:
      return (
        So(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ln(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Iu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(Xr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Li(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Li(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        bt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        ju(e, t, r, l, n)
      );
    case 15:
      return Ia(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Tr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Qr(t)) : (e = !1),
        bt(t, n),
        ca(t, r, l),
        Mi(t, r, l, n),
        Di(null, t, r, !0, e, n)
      );
    case 19:
      return $a(e, t, n);
    case 22:
      return ja(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function nc(e, t) {
  return Ps(e, t);
}
function Dd(e, t, n, r) {
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
function Ee(e, t, n, r) {
  return new Dd(e, t, n, r);
}
function jo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function") return jo(e) ? 1 : 0;
  if (e !== null) {
    if (((e = e.$$typeof), e === eo)) return 11;
    if (e === to) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
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
function Or(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) jo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ut:
        return Pt(n.children, l, i, t);
      case bi:
        (o = 8), (l |= 8);
        break;
      case ti:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = ti), (e.lanes = i), e
        );
      case ni:
        return (e = Ee(13, n, t, l)), (e.elementType = ni), (e.lanes = i), e;
      case ri:
        return (e = Ee(19, n, t, l)), (e.elementType = ri), (e.lanes = i), e;
      case fs:
        return yl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case as:
              o = 10;
              break e;
            case cs:
              o = 9;
              break e;
            case eo:
              o = 11;
              break e;
            case to:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e === null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = fs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Zl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jd(e, t, n, r, l) {
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
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new jd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ko(i),
    e
  );
}
function Fd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r === null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n)) return na(e, n, t);
  }
  return t;
}
function lc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Fo(n, r, !0, e, l, i, o, u, s)),
    (e.context = rc(null)),
    (n = e.current),
    (r = ue()),
    (l = dt(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    bn(e, l, r),
    me(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = dt(l);
  return (
    (n = rc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (De(e, l, o, i), zr(e, l, o)),
    o
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uo(e, t) {
  Xu(e, t), (e = e.alternate) && Xu(e, t);
}
function Ud() {
  return null;
}
var ic =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vo(e) {
  this._internalRoot = e;
}
wl.prototype.render = Vo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Vo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      gl(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function $o(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gu() {}
function Vd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ll(o);
        i.call(c);
      };
    }
    var o = lc(t, r, e, 0, null, !1, !1, "", Gu);
    return (
      (e._reactRootContainer = o),
      (e[Xe] = o.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ll(s);
      u.call(c);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Gu);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function Sl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ll(o);
        u.call(s);
      };
    }
    gl(t, o, e, l);
  } else o = Vd(n, t, e, l, r);
  return ll(o);
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (lo(t, n | 1), me(t, K()), !(O & 6) && ((sn = K() + 500), wt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          De(r, e, 1, l);
        }
      }),
        Uo(e, 1);
  }
};
io = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ue();
      De(t, e, 134217728, n);
    }
    Uo(e, 134217728);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ue();
      De(n, e, t, r);
    }
    Uo(e, t);
  }
};
Is = function () {
  return D;
};
js = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
pi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((oi(e, n), (t = n.name), n.type === "radio" && t !== null)) {
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
            var l = fl(r);
            if (!l) throw Error(g(90));
            ps(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      hs(e, n);
      break;
    case "select":
      (t = n.value), t !== null && Gt(e, !!n.multiple, t, !1);
  }
};
xs = Oo;
Es = Ot;
var $d = { usingClientEntryPoint: !1, Events: [tr, At, fl, ks, Ss, Oo] },
  Sn = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Hd = {
    bundleType: Sn.bundleType,
    version: Sn.version,
    rendererPackageName: Sn.rendererPackageName,
    rendererConfig: Sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sn.findFiberByHostInstance || Ud,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (ul = Sr.inject(Hd)), (Ve = Sr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(g(200));
  return Fd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!$o(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = ic;
  return (
    t !== null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Vo(t)
  );
};
we.findDOMNode = function (e) {
  if (e === null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Ot(e);
};
we.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(g(200));
  return Sl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!$o(e)) throw Error(g(405));
  var r = (n !== null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = ic;
  if (
    (n !== null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = lc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Xe] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData === null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wl(t);
};
we.render = function (e, t, n) {
  if (!kl(t)) throw Error(g(200));
  return Sl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Oo;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(g(200));
  if (e === null || e._reactInternals === void 0) throw Error(g(38));
  return Sl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = we);
})(Fc);
var Zu = ql;
(Jl.createRoot = Zu.createRoot), (Jl.hydrateRoot = Zu.hydrateRoot);
const Ad = "/Saurabh.jpg",
  il = "/Saurabhpdf.pdf",
  Bd = () =>
    m("div", {
      className: "heet flex items-center mt-4",
      id: "about",
      children: R("div", {
        className: "flex",
        children: [
          m("div", {
            className: "w-96 md:block hidden",
            children: m("img", { src: Ad, alt: "avatar", className: "w-full" }),
          }),
          R("div", {
            className: "mx-8",
            children: [
              m("div", {
                className: "mb-4 text-4xl font-semibold",
                children: "Saurabh K",
              }),
              m("div", {
                className: "my-4 text-lg",
                children: "Reactjs Developer",
              }),
              m("div", {
                className: "my-4 ",
                children:
                  "I am Passionate Web developer and a dedicated front-end Developer enthusiast. A beginner seeking to prove his web development skills and problem-solving skills. I develop dynamic and fully functional website. And with a good sense of UI/UX designing. I am always dedicated to web projects and the work along with the coming deadline.",
              }),
              m("div", {
                className: "my-4",
                children:
                  "I have been practicing and polishing web development skill for a year. Building responsive website using bootstrap and tailwindcss. And Reactjs as my javascript framework.",
              }),
              m("button", {
                className:
                  "px-6 py-3 rounded-full mr-4 font-bold bg-green-500 text-white hover:bg-green-300",
                children: m("a", {
                  href: il,
                  download: !0,
                  children: "Download CV",
                }),
              }),
            ],
          }),
        ],
      }),
    });
var oc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ju = it.createContext && it.createContext(oc),
  mt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (mt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        mt.apply(this, arguments)
      );
    },
  Wd =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e !== null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function uc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return it.createElement(t.tag, mt({ key: n }, t.attr), uc(t.child));
    })
  );
}
function ze(e) {
  return function (t) {
    return it.createElement(Qd, mt({ attr: mt({}, e.attr) }, t), uc(e.child));
  };
}
function Qd(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = Wd(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      it.createElement(
        "svg",
        mt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: mt(mt({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && it.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ju !== void 0
    ? it.createElement(Ju.Consumer, null, function (n) {
        return t(n);
      })
    : t(oc);
}
function Kd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
        },
      },
    ],
  })(e);
}
function Yd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
        },
      },
    ],
  })(e);
}
function Xd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
        },
      },
    ],
  })(e);
}
const Gd = () => {
  const e = "p-2 mx-3 rounded-full border-2 border-green-500 text-green-500",
    [t, n] = Qe.useState(""),
    [r, l] = Qe.useState(""),
    [i, o] = Qe.useState("");
  return R("div", {
    className: "text-center",
    id: "contact",
    children: [
      m("div", { className: "mb-4 font-bold text-sm", children: "Contact" }),
      m("div", {
        className: "my-4 text-3xl",
        children: "Get in touch with me!",
      }),
      R("div", {
        className: "max-w-[480px] mx-auto mb-8",
        children: [
          "Email me directly if you have any kind of doubt. ",
          m("br", {}),
          " Sorry, Phone number is not available now.",
        ],
      }),
      m("div", {
        className: "flex items-center justify-center text-left",
        children: R("div", {
          className: "flex rounded-md mb-12 shadow-lg bg-slate-50",
          children: [
            R("form", {
              className: "flex flex-col w-[28rem] mx-4 mb-4",
              children: [
                m("div", {
                  className: " font-bold my-3 mx-2",
                  children: "Available 24/7",
                }),
                m("div", {
                  className: "text-3xl font-bold mb-6 mx-2",
                  children: "Get in Touch",
                }),
                m("input", {
                  type: "text",
                  placeholder: "Name...",
                  value: t,
                  onChange: (u) => n(u.target.value),
                  className: "m-3 p-2 border rounded-md outline-none ",
                }),
                m("input", {
                  type: "email",
                  placeholder: "Email...",
                  value: r,
                  onChange: (u) => l(u.target.value),
                  className: "m-3 p-2 border rounded-md outline-none ",
                }),
                m("textarea", {
                  placeholder: "Message...",
                  value: i,
                  onChange: (u) => o(u.target.value),
                  rows: 6,
                  className:
                    "resize-none m-3 p-2 border rounded-md outline-none",
                }),
                m("a", {
                  className:
                    "px-6 py-3 rounded-full mr-4 font-bold bg-green-500 text-white hover:bg-green-300 text-center",
                  type: "submit",
                  href:
                    t && i && r
                      ? `https://mail.google.com/mail/?view=cm&fs=1&to=imsaurabhk2002@gmail.com&su=SUBJECT=Ihaveajob&body=${i}&bcc=${r}`
                      : null,
                  children: "Send Message",
                }),
              ],
            }),
            R("div", {
              className:
                "border-l-2 w-96 lg:flex flex-col justify-center hidden",
              children: [
                R("div", {
                  className: "flex items-center mx-8 my-4",
                  children: [
                    m("div", { className: e, children: m(Xd, {}) }),
                    R("div", {
                      className: "w-full",
                      children: [
                        m("div", {
                          className: "font-bold",
                          children: "Location",
                        }),
                        m("div", {
                          className: "py-2 border-b",
                          children: "Dehradun, Uttarakhand, India",
                        }),
                      ],
                    }),
                  ],
                }),
                R("div", {
                  className: "flex items-center mx-8 my-4",
                  children: [
                    m("div", { className: e, children: m(Yd, {}) }),
                    R("div", {
                      className: "w-full",
                      children: [
                        m("div", {
                          className: "font-bold",
                          children: "Phone Number",
                        }),
                        m("div", {
                          className: "py-2 border-b",
                          children: "----------",
                        }),
                      ],
                    }),
                  ],
                }),
                R("div", {
                  className: "flex items-center mx-8 my-4",
                  children: [
                    m("div", { className: e, children: m(Kd, {}) }),
                    R("div", {
                      className: "w-full",
                      children: [
                        m("div", { className: "font-bold", children: "Email" }),
                        m("div", {
                          className: "py-2 border-b",
                          children: "imsaurabhk2002@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function sc(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
      },
    ],
  })(e);
}
function ac(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function cc(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 488 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
        },
      },
    ],
  })(e);
}
function fc(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function Zd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
      },
    ],
  })(e);
}
function Jd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z",
        },
      },
    ],
  })(e);
}
function qd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z",
        },
      },
    ],
  })(e);
}
function bd(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
        },
      },
    ],
  })(e);
}
const ep = () => {
    const e =
      "p-3 rounded-full mr-4 font-bold border-2 border-green-500  hover:bg-green-500 hover:text-white text-green-500 hover:transition-all hover:ease-in-out";
    return m("footer", {
      className: "shadow-xl h-[100px] z-50 drop-shadow-md bg-slate-50",
      children: R("div", {
        className:
          "xl:max-w-[1120px] lg:max-w-[976px] md:max-w-[720px] max-w-[450px] mx-auto h-full flex items-center justify-between",
        children: [
          m("div", {
            className: "text-4xl font-bold text-green-500",
            children: "Saurabh",
          }),
          R("div", {
            children: [
              m("button", {
                className: e,
                children: m("a", {
                  href: "mailto:imsaurabhk2002@gmail.com",
                  children: m(cc, {}),
                }),
              }),
              m("button", {
                className: e,
                children: m("a", {
                  href: "https://github.com/Sauby",
                  children: m(ac, {}),
                }),
              }),
              m("button", {
                className: e,
                children: m("a", {
                  href: "https://www.facebook.com/people/Saurabh-K/100089792110228/",
                  children: m(sc, {}),
                }),
              }),
              m("button", {
                className: e,
                children: m("a", {
                  href: "https://www.linkedin.com/in/saurabh-k-778027261",
                  children: m(fc, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  tp = "/avatars.svg",
  np = () => {
    const e =
      "p-3 rounded-full mr-4 font-bold border-2 border-green-500  hover:bg-green-500 hover:text-white text-green-500 hover:transition-all hover:ease-in-out";
    return m("div", {
      children: R("div", {
        className:
          "flex items-center justify-center lg:items-end lg:justify-between heet",
        children: [
          R("div", {
            children: [
              m("p", {
                className: "text-3xl font-semibold my-4",
                children: "hello, I'm",
              }),
              m("div", {
                className: "text-6xl font-bold my-4",
                children: "Saurabh K",
              }),
              m("div", {
                className: "text-2xl font-semibold my-4",
                children: "ReactJS Dev",
              }),
              R("div", {
                className: "my-4",
                children: [
                  m("button", {
                    className:
                      "px-6 py-3 rounded-full mr-4 font-bold bg-green-500 text-white hover:bg-green-300",
                    children: m("a", {
                      href: "mailto:imsaurabhk2002@gmail.com",
                      children: "Hire Me!",
                    }),
                  }),
                  m("button", {
                    className:
                      "px-6 py-3 rounded-full mr-4 font-bold bg-slate-600 text-white hover:bg-slate-400",
                    children: m("a", {
                      href: il,
                      download: !0,
                      children: "Download CV",
                    }),
                  }),
                  R("div", {
                    className: "my-4",
                    children: [
                      m("button", {
                        className: e,
                        children: m("a", {
                          href: "mailto:imsaurabhk2002@gmail.com",
                          children: m(cc, {}),
                        }),
                      }),
                      m("button", {
                        className: e,
                        children: m("a", {
                          href: "https://github.com/Sauby",
                          children: m(ac, {}),
                        }),
                      }),
                      m("button", {
                        className: e,
                        children: m("a", {
                          href: "https://www.facebook.com/people/Saurabh-K/100089792110228/",
                          children: m(sc, {}),
                        }),
                      }),
                      m("button", {
                        className: e,
                        children: m("a", {
                          href: "https://www.linkedin.com/in/saurabh-k-778027261",
                          children: m(fc, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          m("div", {
            className: "w-1/2 hidden lg:block",
            children: m("img", {
              src: tp,
              alt: "man",
              className: "w-3/4 float-right",
            }),
          }),
        ],
      }),
    });
  },
  rp = () =>
    m("div", {
      className: "rounded bg-green-500 flex items-center h-28 text-white my-8",
      children: R("div", {
        className: "px-8 flex item-center justify-between w-full",
        children: [
          R("div", {
            children: [
              m("div", {
                className: "text-xl font-bold",
                children: "Hire me for your Project",
              }),
              m("div", {
                className: "text-sm font-bold mt-2",
                children: "Place order now!",
              }),
            ],
          }),
          m("button", {
            className:
              "text-black px-6 py-3 rounded-full mr-4 font-bold bg-white hover:bg-slate-100",
            children: m("a", {
              href: "mailto:imsaurabhk2002@gmail.com",
              children: "Hire Me!",
            }),
          }),
        ],
      }),
    });
function lp(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
const ip = () => {
    const [e, t] = Qe.useState(!1);
    return R("div", {
      className:
        "fixed top-0 left-0 shadow-xl w-screen h-[100px] z-50 bg-white",
      children: [
        R("div", {
          className:
            "xl:max-w-[1120px] lg:max-w-[976px] md:max-w-[720px] max-w-[450px] mx-auto h-full flex items-center justify-between",
          children: [
            m("div", {
              className: "text-4xl font-bold text-green-500 ",
              children: "Saurabh",
            }),
            R("ul", {
              className: "hidden text-xs font-bold px-8 items-center lg:flex",
              children: [
                m("li", {
                  className:
                    "px-4 hover:text-slate-600 hover:transition-all hover:ease-in-out",
                  children: m("a", { href: "/", children: "Home" }),
                }),
                m("li", {
                  className:
                    "px-4 hover:text-slate-600 hover:transition-all hover:ease-in-out",
                  children: m("a", { href: "#about", children: "About" }),
                }),
                m("li", {
                  className:
                    "px-4 hover:text-slate-600 hover:transition-all hover:ease-in-out",
                  children: m("a", { href: "#services", children: "Service" }),
                }),
                m("li", {
                  className:
                    "px-4 hover:text-slate-600 hover:transition-all hover:ease-in-out",
                  children: m("a", { href: "#contact", children: "Contact" }),
                }),
                m("li", {
                  className: "px-4 ",
                  children: m("button", {
                    className:
                      "px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-300",
                    children: m("a", {
                      href: il,
                      download: !0,
                      children: "Download CV",
                    }),
                  }),
                }),
              ],
            }),
            m("div", {
              className: "p-2 border rounded block lg:hidden",
              onClick: () => {
                t(!e);
              },
              children: m(lp, {}),
            }),
          ],
        }),
        e
          ? R("ul", {
              className:
                "text-xs font-bold px-8 text-center bg-white block lg:hidden",
              children: [
                m("li", {
                  className: "py-4",
                  children: m("a", { href: "/", children: "Home" }),
                }),
                m("li", {
                  className: "py-4",
                  children: m("a", { href: "#about", children: "About" }),
                }),
                m("li", {
                  className: "py-4",
                  children: m("a", { href: "#services", children: "Service" }),
                }),
                m("li", {
                  className: "py-4",
                  children: m("a", { href: "#contact", children: "Contact" }),
                }),
                m("li", {
                  className: "py-4 ",
                  children: m("button", {
                    className: "px-6 py-3 rounded-full bg-green-500 text-white",
                    children: m("a", {
                      href: il,
                      download: !0,
                      children: "Download CV",
                    }),
                  }),
                }),
              ],
            })
          : null,
      ],
    });
  },
  op = () => {
    const e =
      "border-2 rounded h-44 px-8 flex flex-col items-center justify-center text-green-500 hover:text-white hover:bg-green-500";
    return m("div", {
      className: "heet flex items-center justify-center text-center",
      id: "services",
      children: R("div", {
        children: [
          m("div", {
            className: "mb-4 font-bold text-sm",
            children: "Service",
          }),
          m("div", { className: "my-4 text-3xl", children: "What I do?" }),
          m("div", {
            className: "max-w-[480px] mx-auto mb-8",
            children:
              "I am a web developer bringing forth the best website with a ton of functionality and UI/UX.",
          }),
          R("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",
            children: [
              R("div", {
                className: e,
                children: [
                  m(Zd, { size: 50 }),
                  m("div", { className: "text-xl", children: "Reactjs" }),
                ],
              }),
              R("div", {
                className: e,
                children: [
                  m(qd, { size: 50 }),
                  m("div", { className: "text-xl", children: "Web Design" }),
                ],
              }),
              R("div", {
                className: e,
                children: [
                  m(bd, { size: 50 }),
                  m("div", { className: "text-xl", children: "UI/UX" }),
                ],
              }),
              R("div", {
                className: e,
                children: [
                  m(Jd, { size: 50 }),
                  m("div", { className: "text-xl", children: "Adobe XD" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function up() {
  return R("div", {
    children: [
      m(ip, {}),
      R("div", {
        className:
          "xl:max-w-[1120px] lg:max-w-[976px] md:max-w-[720px] max-w-[450px] mx-auto",
        children: [m(np, {}), m(Bd, {}), m(op, {}), m(rp, {}), m(Gd, {})],
      }),
      m(ep, {}),
    ],
  });
}
Jl.createRoot(document.getElementById("root")).render(
  m(it.StrictMode, { children: m(up, {}) })
);

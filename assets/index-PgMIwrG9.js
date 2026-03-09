(function () {
  const O = document.createElement("link").relList;
  if (O && O.supports && O.supports("modulepreload")) return;
  for (const q of document.querySelectorAll('link[rel="modulepreload"]')) y(q);
  new MutationObserver((q) => {
    for (const X of q)
      if (X.type === "childList")
        for (const hl of X.addedNodes)
          hl.tagName === "LINK" && hl.rel === "modulepreload" && y(hl);
  }).observe(document, { childList: !0, subtree: !0 });
  function D(q) {
    const X = {};
    return (
      q.integrity && (X.integrity = q.integrity),
      q.referrerPolicy && (X.referrerPolicy = q.referrerPolicy),
      q.crossOrigin === "use-credentials"
        ? (X.credentials = "include")
        : q.crossOrigin === "anonymous"
        ? (X.credentials = "omit")
        : (X.credentials = "same-origin"),
      X
    );
  }
  function y(q) {
    if (q.ep) return;
    q.ep = !0;
    const X = D(q);
    fetch(q.href, X);
  }
})();
var rf = { exports: {} },
  xu = {};
var Td;
function f1() {
  if (Td) return xu;
  Td = 1;
  var x = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.fragment");
  function D(y, q, X) {
    var hl = null;
    if (
      (X !== void 0 && (hl = "" + X),
      q.key !== void 0 && (hl = "" + q.key),
      "key" in q)
    ) {
      X = {};
      for (var Al in q) Al !== "key" && (X[Al] = q[Al]);
    } else X = q;
    return (
      (q = X.ref),
      { $$typeof: x, type: y, key: hl, ref: q !== void 0 ? q : null, props: X }
    );
  }
  return (xu.Fragment = O), (xu.jsx = D), (xu.jsxs = D), xu;
}
var Ed;
function s1() {
  return Ed || ((Ed = 1), (rf.exports = f1())), rf.exports;
}
var r = s1(),
  df = { exports: {} },
  Y = {};
var Ad;
function o1() {
  if (Ad) return Y;
  Ad = 1;
  var x = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    hl = Symbol.for("react.context"),
    Al = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    dl = Symbol.iterator;
  function Wl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (dl && o[dl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Yl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Rl = Object.assign,
    Mt = {};
  function $l(o, T, _) {
    (this.props = o),
      (this.context = T),
      (this.refs = Mt),
      (this.updater = _ || Yl);
  }
  ($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (o, T) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, o, T, "setState");
    }),
    ($l.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    });
  function Wt() {}
  Wt.prototype = $l.prototype;
  function Hl(o, T, _) {
    (this.props = o),
      (this.context = T),
      (this.refs = Mt),
      (this.updater = _ || Yl);
  }
  var ct = (Hl.prototype = new Wt());
  (ct.constructor = Hl), Rl(ct, $l.prototype), (ct.isPureReactComponent = !0);
  var zt = Array.isArray;
  function Gl() {}
  var k = { H: null, A: null, T: null, S: null },
    Ll = Object.prototype.hasOwnProperty;
  function Tt(o, T, _) {
    var M = _.ref;
    return {
      $$typeof: x,
      type: o,
      key: T,
      ref: M !== void 0 ? M : null,
      props: _,
    };
  }
  function Ze(o, T) {
    return Tt(o.type, T, o.props);
  }
  function Et(o) {
    return typeof o == "object" && o !== null && o.$$typeof === x;
  }
  function Xl(o) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (_) {
        return T[_];
      })
    );
  }
  var Te = /\/+/g;
  function jt(o, T) {
    return typeof o == "object" && o !== null && o.key != null
      ? Xl("" + o.key)
      : T.toString(36);
  }
  function bt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Gl, Gl)
            : ((o.status = "pending"),
              o.then(
                function (T) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = T));
                },
                function (T) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = T));
                }
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function p(o, T, _, M, G) {
    var Z = typeof o;
    (Z === "undefined" || Z === "boolean") && (o = null);
    var tl = !1;
    if (o === null) tl = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          tl = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case x:
            case O:
              tl = !0;
              break;
            case F:
              return (tl = o._init), p(tl(o._payload), T, _, M, G);
          }
      }
    if (tl)
      return (
        (G = G(o)),
        (tl = M === "" ? "." + jt(o, 0) : M),
        zt(G)
          ? ((_ = ""),
            tl != null && (_ = tl.replace(Te, "$&/") + "/"),
            p(G, T, _, "", function (Oa) {
              return Oa;
            }))
          : G != null &&
            (Et(G) &&
              (G = Ze(
                G,
                _ +
                  (G.key == null || (o && o.key === G.key)
                    ? ""
                    : ("" + G.key).replace(Te, "$&/") + "/") +
                  tl
              )),
            T.push(G)),
        1
      );
    tl = 0;
    var Bl = M === "" ? "." : M + ":";
    if (zt(o))
      for (var gl = 0; gl < o.length; gl++)
        (M = o[gl]), (Z = Bl + jt(M, gl)), (tl += p(M, T, _, Z, G));
    else if (((gl = Wl(o)), typeof gl == "function"))
      for (o = gl.call(o), gl = 0; !(M = o.next()).done; )
        (M = M.value), (Z = Bl + jt(M, gl++)), (tl += p(M, T, _, Z, G));
    else if (Z === "object") {
      if (typeof o.then == "function") return p(bt(o), T, _, M, G);
      throw (
        ((T = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return tl;
  }
  function A(o, T, _) {
    if (o == null) return o;
    var M = [],
      G = 0;
    return (
      p(o, M, "", "", function (Z) {
        return T.call(_, Z, G++);
      }),
      M
    );
  }
  function B(o) {
    if (o._status === -1) {
      var T = o._result;
      (T = T()),
        T.then(
          function (_) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = _));
          },
          function (_) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = _));
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = T));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    fl = {
      map: A,
      forEach: function (o, T, _) {
        A(
          o,
          function () {
            T.apply(this, arguments);
          },
          _
        );
      },
      count: function (o) {
        var T = 0;
        return (
          A(o, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (o) {
        return (
          A(o, function (T) {
            return T;
          }) || []
        );
      },
      only: function (o) {
        if (!Et(o))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return o;
      },
    };
  return (
    (Y.Activity = R),
    (Y.Children = fl),
    (Y.Component = $l),
    (Y.Fragment = D),
    (Y.Profiler = q),
    (Y.PureComponent = Hl),
    (Y.StrictMode = y),
    (Y.Suspense = U),
    (Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (Y.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return k.H.useMemoCache(o);
      },
    }),
    (Y.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (Y.cacheSignal = function () {
      return null;
    }),
    (Y.cloneElement = function (o, T, _) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + "."
        );
      var M = Rl({}, o.props),
        G = o.key;
      if (T != null)
        for (Z in (T.key !== void 0 && (G = "" + T.key), T))
          !Ll.call(T, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && T.ref === void 0) ||
            (M[Z] = T[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) M.children = _;
      else if (1 < Z) {
        for (var tl = Array(Z), Bl = 0; Bl < Z; Bl++)
          tl[Bl] = arguments[Bl + 2];
        M.children = tl;
      }
      return Tt(o.type, G, M);
    }),
    (Y.createContext = function (o) {
      return (
        (o = {
          $$typeof: hl,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: X, _context: o }),
        o
      );
    }),
    (Y.createElement = function (o, T, _) {
      var M,
        G = {},
        Z = null;
      if (T != null)
        for (M in (T.key !== void 0 && (Z = "" + T.key), T))
          Ll.call(T, M) &&
            M !== "key" &&
            M !== "__self" &&
            M !== "__source" &&
            (G[M] = T[M]);
      var tl = arguments.length - 2;
      if (tl === 1) G.children = _;
      else if (1 < tl) {
        for (var Bl = Array(tl), gl = 0; gl < tl; gl++)
          Bl[gl] = arguments[gl + 2];
        G.children = Bl;
      }
      if (o && o.defaultProps)
        for (M in ((tl = o.defaultProps), tl))
          G[M] === void 0 && (G[M] = tl[M]);
      return Tt(o, Z, G);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (o) {
      return { $$typeof: Al, render: o };
    }),
    (Y.isValidElement = Et),
    (Y.lazy = function (o) {
      return { $$typeof: F, _payload: { _status: -1, _result: o }, _init: B };
    }),
    (Y.memo = function (o, T) {
      return { $$typeof: E, type: o, compare: T === void 0 ? null : T };
    }),
    (Y.startTransition = function (o) {
      var T = k.T,
        _ = {};
      k.T = _;
      try {
        var M = o(),
          G = k.S;
        G !== null && G(_, M),
          typeof M == "object" &&
            M !== null &&
            typeof M.then == "function" &&
            M.then(Gl, ul);
      } catch (Z) {
        ul(Z);
      } finally {
        T !== null && _.types !== null && (T.types = _.types), (k.T = T);
      }
    }),
    (Y.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (Y.use = function (o) {
      return k.H.use(o);
    }),
    (Y.useActionState = function (o, T, _) {
      return k.H.useActionState(o, T, _);
    }),
    (Y.useCallback = function (o, T) {
      return k.H.useCallback(o, T);
    }),
    (Y.useContext = function (o) {
      return k.H.useContext(o);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (o, T) {
      return k.H.useDeferredValue(o, T);
    }),
    (Y.useEffect = function (o, T) {
      return k.H.useEffect(o, T);
    }),
    (Y.useEffectEvent = function (o) {
      return k.H.useEffectEvent(o);
    }),
    (Y.useId = function () {
      return k.H.useId();
    }),
    (Y.useImperativeHandle = function (o, T, _) {
      return k.H.useImperativeHandle(o, T, _);
    }),
    (Y.useInsertionEffect = function (o, T) {
      return k.H.useInsertionEffect(o, T);
    }),
    (Y.useLayoutEffect = function (o, T) {
      return k.H.useLayoutEffect(o, T);
    }),
    (Y.useMemo = function (o, T) {
      return k.H.useMemo(o, T);
    }),
    (Y.useOptimistic = function (o, T) {
      return k.H.useOptimistic(o, T);
    }),
    (Y.useReducer = function (o, T, _) {
      return k.H.useReducer(o, T, _);
    }),
    (Y.useRef = function (o) {
      return k.H.useRef(o);
    }),
    (Y.useState = function (o) {
      return k.H.useState(o);
    }),
    (Y.useSyncExternalStore = function (o, T, _) {
      return k.H.useSyncExternalStore(o, T, _);
    }),
    (Y.useTransition = function () {
      return k.H.useTransition();
    }),
    (Y.version = "19.2.4"),
    Y
  );
}
var _d;
function bf() {
  return _d || ((_d = 1), (df.exports = o1())), df.exports;
}
var xe = bf(),
  mf = { exports: {} },
  zu = {},
  hf = { exports: {} },
  yf = {};
var Nd;
function r1() {
  return (
    Nd ||
      ((Nd = 1),
      (function (x) {
        function O(p, A) {
          var B = p.length;
          p.push(A);
          l: for (; 0 < B; ) {
            var ul = (B - 1) >>> 1,
              fl = p[ul];
            if (0 < q(fl, A)) (p[ul] = A), (p[B] = fl), (B = ul);
            else break l;
          }
        }
        function D(p) {
          return p.length === 0 ? null : p[0];
        }
        function y(p) {
          if (p.length === 0) return null;
          var A = p[0],
            B = p.pop();
          if (B !== A) {
            p[0] = B;
            l: for (var ul = 0, fl = p.length, o = fl >>> 1; ul < o; ) {
              var T = 2 * (ul + 1) - 1,
                _ = p[T],
                M = T + 1,
                G = p[M];
              if (0 > q(_, B))
                M < fl && 0 > q(G, _)
                  ? ((p[ul] = G), (p[M] = B), (ul = M))
                  : ((p[ul] = _), (p[T] = B), (ul = T));
              else if (M < fl && 0 > q(G, B)) (p[ul] = G), (p[M] = B), (ul = M);
              else break l;
            }
          }
          return A;
        }
        function q(p, A) {
          var B = p.sortIndex - A.sortIndex;
          return B !== 0 ? B : p.id - A.id;
        }
        if (
          ((x.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var X = performance;
          x.unstable_now = function () {
            return X.now();
          };
        } else {
          var hl = Date,
            Al = hl.now();
          x.unstable_now = function () {
            return hl.now() - Al;
          };
        }
        var U = [],
          E = [],
          F = 1,
          R = null,
          dl = 3,
          Wl = !1,
          Yl = !1,
          Rl = !1,
          Mt = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          Hl = typeof setImmediate < "u" ? setImmediate : null;
        function ct(p) {
          for (var A = D(E); A !== null; ) {
            if (A.callback === null) y(E);
            else if (A.startTime <= p)
              y(E), (A.sortIndex = A.expirationTime), O(U, A);
            else break;
            A = D(E);
          }
        }
        function zt(p) {
          if (((Rl = !1), ct(p), !Yl))
            if (D(U) !== null) (Yl = !0), Gl || ((Gl = !0), Xl());
            else {
              var A = D(E);
              A !== null && bt(zt, A.startTime - p);
            }
        }
        var Gl = !1,
          k = -1,
          Ll = 5,
          Tt = -1;
        function Ze() {
          return Mt ? !0 : !(x.unstable_now() - Tt < Ll);
        }
        function Et() {
          if (((Mt = !1), Gl)) {
            var p = x.unstable_now();
            Tt = p;
            var A = !0;
            try {
              l: {
                (Yl = !1), Rl && ((Rl = !1), Wt(k), (k = -1)), (Wl = !0);
                var B = dl;
                try {
                  t: {
                    for (
                      ct(p), R = D(U);
                      R !== null && !(R.expirationTime > p && Ze());

                    ) {
                      var ul = R.callback;
                      if (typeof ul == "function") {
                        (R.callback = null), (dl = R.priorityLevel);
                        var fl = ul(R.expirationTime <= p);
                        if (((p = x.unstable_now()), typeof fl == "function")) {
                          (R.callback = fl), ct(p), (A = !0);
                          break t;
                        }
                        R === D(U) && y(U), ct(p);
                      } else y(U);
                      R = D(U);
                    }
                    if (R !== null) A = !0;
                    else {
                      var o = D(E);
                      o !== null && bt(zt, o.startTime - p), (A = !1);
                    }
                  }
                  break l;
                } finally {
                  (R = null), (dl = B), (Wl = !1);
                }
                A = void 0;
              }
            } finally {
              A ? Xl() : (Gl = !1);
            }
          }
        }
        var Xl;
        if (typeof Hl == "function")
          Xl = function () {
            Hl(Et);
          };
        else if (typeof MessageChannel < "u") {
          var Te = new MessageChannel(),
            jt = Te.port2;
          (Te.port1.onmessage = Et),
            (Xl = function () {
              jt.postMessage(null);
            });
        } else
          Xl = function () {
            $l(Et, 0);
          };
        function bt(p, A) {
          k = $l(function () {
            p(x.unstable_now());
          }, A);
        }
        (x.unstable_IdlePriority = 5),
          (x.unstable_ImmediatePriority = 1),
          (x.unstable_LowPriority = 4),
          (x.unstable_NormalPriority = 3),
          (x.unstable_Profiling = null),
          (x.unstable_UserBlockingPriority = 2),
          (x.unstable_cancelCallback = function (p) {
            p.callback = null;
          }),
          (x.unstable_forceFrameRate = function (p) {
            0 > p || 125 < p
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ll = 0 < p ? Math.floor(1e3 / p) : 5);
          }),
          (x.unstable_getCurrentPriorityLevel = function () {
            return dl;
          }),
          (x.unstable_next = function (p) {
            switch (dl) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = dl;
            }
            var B = dl;
            dl = A;
            try {
              return p();
            } finally {
              dl = B;
            }
          }),
          (x.unstable_requestPaint = function () {
            Mt = !0;
          }),
          (x.unstable_runWithPriority = function (p, A) {
            switch (p) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                p = 3;
            }
            var B = dl;
            dl = p;
            try {
              return A();
            } finally {
              dl = B;
            }
          }),
          (x.unstable_scheduleCallback = function (p, A, B) {
            var ul = x.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? ul + B : ul))
                : (B = ul),
              p)
            ) {
              case 1:
                var fl = -1;
                break;
              case 2:
                fl = 250;
                break;
              case 5:
                fl = 1073741823;
                break;
              case 4:
                fl = 1e4;
                break;
              default:
                fl = 5e3;
            }
            return (
              (fl = B + fl),
              (p = {
                id: F++,
                callback: A,
                priorityLevel: p,
                startTime: B,
                expirationTime: fl,
                sortIndex: -1,
              }),
              B > ul
                ? ((p.sortIndex = B),
                  O(E, p),
                  D(U) === null &&
                    p === D(E) &&
                    (Rl ? (Wt(k), (k = -1)) : (Rl = !0), bt(zt, B - ul)))
                : ((p.sortIndex = fl),
                  O(U, p),
                  Yl || Wl || ((Yl = !0), Gl || ((Gl = !0), Xl()))),
              p
            );
          }),
          (x.unstable_shouldYield = Ze),
          (x.unstable_wrapCallback = function (p) {
            var A = dl;
            return function () {
              var B = dl;
              dl = A;
              try {
                return p.apply(this, arguments);
              } finally {
                dl = B;
              }
            };
          });
      })(yf)),
    yf
  );
}
var Od;
function d1() {
  return Od || ((Od = 1), (hf.exports = r1())), hf.exports;
}
var vf = { exports: {} },
  Cl = {};
var Md;
function m1() {
  if (Md) return Cl;
  Md = 1;
  var x = bf();
  function O(U) {
    var E = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var F = 2; F < arguments.length; F++)
        E += "&args[]=" + encodeURIComponent(arguments[F]);
    }
    return (
      "Minified React error #" +
      U +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function D() {}
  var y = {
      d: {
        f: D,
        r: function () {
          throw Error(O(522));
        },
        D,
        C: D,
        L: D,
        m: D,
        X: D,
        S: D,
        M: D,
      },
      p: 0,
      findDOMNode: null,
    },
    q = Symbol.for("react.portal");
  function X(U, E, F) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: R == null ? null : "" + R,
      children: U,
      containerInfo: E,
      implementation: F,
    };
  }
  var hl = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Al(U, E) {
    if (U === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    (Cl.createPortal = function (U, E) {
      var F =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(O(299));
      return X(U, E, null, F);
    }),
    (Cl.flushSync = function (U) {
      var E = hl.T,
        F = y.p;
      try {
        if (((hl.T = null), (y.p = 2), U)) return U();
      } finally {
        (hl.T = E), (y.p = F), y.d.f();
      }
    }),
    (Cl.preconnect = function (U, E) {
      typeof U == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        y.d.C(U, E));
    }),
    (Cl.prefetchDNS = function (U) {
      typeof U == "string" && y.d.D(U);
    }),
    (Cl.preinit = function (U, E) {
      if (typeof U == "string" && E && typeof E.as == "string") {
        var F = E.as,
          R = Al(F, E.crossOrigin),
          dl = typeof E.integrity == "string" ? E.integrity : void 0,
          Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        F === "style"
          ? y.d.S(U, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: R,
              integrity: dl,
              fetchPriority: Wl,
            })
          : F === "script" &&
            y.d.X(U, {
              crossOrigin: R,
              integrity: dl,
              fetchPriority: Wl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Cl.preinitModule = function (U, E) {
      if (typeof U == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var F = Al(E.as, E.crossOrigin);
            y.d.M(U, {
              crossOrigin: F,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && y.d.M(U);
    }),
    (Cl.preload = function (U, E) {
      if (
        typeof U == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var F = E.as,
          R = Al(F, E.crossOrigin);
        y.d.L(U, F, {
          crossOrigin: R,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Cl.preloadModule = function (U, E) {
      if (typeof U == "string")
        if (E) {
          var F = Al(E.as, E.crossOrigin);
          y.d.m(U, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: F,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else y.d.m(U);
    }),
    (Cl.requestFormReset = function (U) {
      y.d.r(U);
    }),
    (Cl.unstable_batchedUpdates = function (U, E) {
      return U(E);
    }),
    (Cl.useFormState = function (U, E, F) {
      return hl.H.useFormState(U, E, F);
    }),
    (Cl.useFormStatus = function () {
      return hl.H.useHostTransitionStatus();
    }),
    (Cl.version = "19.2.4"),
    Cl
  );
}
var jd;
function h1() {
  if (jd) return vf.exports;
  jd = 1;
  function x() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (O) {
        console.error(O);
      }
  }
  return x(), (vf.exports = m1()), vf.exports;
}
var Dd;
function y1() {
  if (Dd) return zu;
  Dd = 1;
  var x = d1(),
    O = bf(),
    D = h1();
  function y(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function X(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function hl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Al(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (X(l) !== l) throw Error(y(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = X(l)), t === null)) throw Error(y(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return U(u), l;
          if (n === a) return U(u), t;
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (c === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (c === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (e.alternate !== a) throw Error(y(190));
    }
    if (e.tag !== 3) throw Error(y(188));
    return e.stateNode.current === e ? l : t;
  }
  function F(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = F(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    dl = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    Yl = Symbol.for("react.portal"),
    Rl = Symbol.for("react.fragment"),
    Mt = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    Hl = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    zt = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    Ll = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    Ze = Symbol.for("react.memo_cache_sentinel"),
    Et = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Et && l[Et]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Te = Symbol.for("react.client.reference");
  function jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Te ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Rl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Mt:
        return "StrictMode";
      case zt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ct:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case k:
          return (
            (t = l.displayName || null), t !== null ? t : jt(l.type) || "Memo"
          );
        case Ll:
          (t = l._payload), (l = l._init);
          try {
            return jt(l(t));
          } catch {}
      }
    return null;
  }
  var bt = Array.isArray,
    p = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    ul = [],
    fl = -1;
  function o(l) {
    return { current: l };
  }
  function T(l) {
    0 > fl || ((l.current = ul[fl]), (ul[fl] = null), fl--);
  }
  function _(l, t) {
    fl++, (ul[fl] = l.current), (l.current = t);
  }
  var M = o(null),
    G = o(null),
    Z = o(null),
    tl = o(null);
  function Bl(l, t) {
    switch ((_(Z, t), _(G, l), _(M, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Jr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Jr(t)), (l = wr(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(M), _(M, l);
  }
  function gl() {
    T(M), T(G), T(Z);
  }
  function Oa(l) {
    l.memoizedState !== null && _(tl, l);
    var t = M.current,
      e = wr(t, l.type);
    t !== e && (_(G, l), _(M, e));
  }
  function Eu(l) {
    G.current === l && (T(M), T(G)),
      tl.current === l && (T(tl), (gu._currentValue = B));
  }
  var Jn, xf;
  function Ee(l) {
    if (Jn === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (Jn = (t && t[1]) || ""),
          (xf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Jn +
      l +
      xf
    );
  }
  var wn = !1;
  function kn(l, t) {
    if (!l || wn) return "";
    wn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var v = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  v = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                v = g;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && v && typeof g.stack == "string") return [g.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          h = c.split(`
`);
        for (
          u = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === f.length || u === h.length)
          for (
            a = f.length - 1, u = h.length - 1;
            1 <= a && 0 <= u && f[a] !== h[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== h[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || f[a] !== h[u])) {
                  var b =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (wn = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? Ee(e) : "";
  }
  function Gd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(l.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ee("Suspense Fallback")
          : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function zf(l) {
    try {
      var t = "",
        e = null;
      do (t += Gd(l, e)), (e = l), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Wn = Object.prototype.hasOwnProperty,
    $n = x.unstable_scheduleCallback,
    Fn = x.unstable_cancelCallback,
    Ld = x.unstable_shouldYield,
    Xd = x.unstable_requestPaint,
    Fl = x.unstable_now,
    Qd = x.unstable_getCurrentPriorityLevel,
    Tf = x.unstable_ImmediatePriority,
    Ef = x.unstable_UserBlockingPriority,
    Au = x.unstable_NormalPriority,
    Zd = x.unstable_LowPriority,
    Af = x.unstable_IdlePriority,
    Vd = x.log,
    Kd = x.unstable_setDisableYieldValue,
    Ma = null,
    Il = null;
  function $t(l) {
    if (
      (typeof Vd == "function" && Kd(l),
      Il && typeof Il.setStrictMode == "function")
    )
      try {
        Il.setStrictMode(Ma, l);
      } catch {}
  }
  var Pl = Math.clz32 ? Math.clz32 : kd,
    Jd = Math.log,
    wd = Math.LN2;
  function kd(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Jd(l) / wd) | 0)) | 0;
  }
  var _u = 256,
    Nu = 262144,
    Ou = 4194304;
  function Ae(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Mu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = Ae(a))
            : ((i &= c),
              i !== 0
                ? (u = Ae(i))
                : e || ((e = c & ~l), e !== 0 && (u = Ae(e)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = Ae(c))
            : i !== 0
            ? (u = Ae(i))
            : e || ((e = a & ~l), e !== 0 && (u = Ae(e)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & n) === 0 &&
          ((n = u & -u),
          (e = t & -t),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? t
        : u
    );
  }
  function ja(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Wd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _f() {
    var l = Ou;
    return (Ou <<= 1), (Ou & 62914560) === 0 && (Ou = 4194304), l;
  }
  function In(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Da(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function $d(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      f = l.expirationTimes,
      h = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var b = 31 - Pl(e),
        z = 1 << b;
      (c[b] = 0), (f[b] = -1);
      var v = h[b];
      if (v !== null)
        for (h[b] = null, b = 0; b < v.length; b++) {
          var g = v[b];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && Nf(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Nf(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - Pl(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
  }
  function Of(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - Pl(e),
        u = 1 << a;
      (u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
    }
  }
  function Mf(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : Pn(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function Pn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function li(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function jf() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : vd(l.type));
  }
  function Df(l, t) {
    var e = A.p;
    try {
      return (A.p = l), t();
    } finally {
      A.p = e;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ol = "__reactFiber$" + Ft,
    Ql = "__reactProps$" + Ft,
    Ve = "__reactContainer$" + Ft,
    ti = "__reactEvents$" + Ft,
    Fd = "__reactListeners$" + Ft,
    Id = "__reactHandles$" + Ft,
    Uf = "__reactResources$" + Ft,
    Ua = "__reactMarker$" + Ft;
  function ei(l) {
    delete l[Ol], delete l[Ql], delete l[ti], delete l[Fd], delete l[Id];
  }
  function Ke(l) {
    var t = l[Ol];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Ve] || e[Ol])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = ld(l); l !== null; ) {
            if ((e = l[Ol])) return e;
            l = ld(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function Je(l) {
    if ((l = l[Ol] || l[Ve])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(y(33));
  }
  function we(l) {
    var t = l[Uf];
    return (
      t ||
        (t = l[Uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _l(l) {
    l[Ua] = !0;
  }
  var Hf = new Set(),
    Cf = {};
  function _e(l, t) {
    ke(l, t), ke(l + "Capture", t);
  }
  function ke(l, t) {
    for (Cf[l] = t, l = 0; l < t.length; l++) Hf.add(t[l]);
  }
  var Pd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Rf = {},
    Bf = {};
  function l0(l) {
    return Wn.call(Bf, l)
      ? !0
      : Wn.call(Rf, l)
      ? !1
      : Pd.test(l)
      ? (Bf[l] = !0)
      : ((Rf[l] = !0), !1);
  }
  function ju(l, t, e) {
    if (l0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Du(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Dt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function qf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function t0(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (e = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function ai(l) {
    if (!l._valueTracker) {
      var t = qf(l) ? "checked" : "value";
      l._valueTracker = t0(l, t, "" + l[t]);
    }
  }
  function Yf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = qf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Uu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var e0 = /[\n"\\]/g;
  function st(l) {
    return l.replace(e0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ui(l, t, e, a, u, n, i, c) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ft(t))
          : l.value !== "" + ft(t) && (l.value = "" + ft(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ni(l, i, ft(t))
        : e != null
        ? ni(l, i, ft(e))
        : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + ft(c))
        : l.removeAttribute("name");
  }
  function Gf(l, t, e, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ai(l);
        return;
      }
      (e = e != null ? "" + ft(e) : ""),
        (t = t != null ? "" + ft(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ai(l);
  }
  function ni(l, t, e) {
    (t === "number" && Uu(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function We(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        (u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + ft(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          (l[u].selected = !0), a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lf(l, t, e) {
    if (
      t != null &&
      ((t = "" + ft(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + ft(e) : "";
  }
  function Xf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(y(92));
        if (bt(a)) {
          if (1 < a.length) throw Error(y(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = ft(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      ai(l);
  }
  function $e(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var a0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || a0.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function Zf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(y(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var u in t)
        (a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Qf(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && Qf(l, n, t[n]);
  }
  function ii(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var u0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    n0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(l) {
    return n0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ut() {}
  var ci = null;
  function fi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Fe = null,
    Ie = null;
  function Vf(l) {
    var t = Je(l);
    if (t && (l = t.stateNode)) {
      var e = l[Ql] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ui(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + st("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Ql] || null;
                if (!u) throw Error(y(90));
                ui(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && Yf(a);
          }
          break l;
        case "textarea":
          Lf(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && We(l, !!e.multiple, t, !1);
      }
    }
  }
  var si = !1;
  function Kf(l, t, e) {
    if (si) return l(t, e);
    si = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((si = !1),
        (Fe !== null || Ie !== null) &&
          (xn(), Fe && ((t = Fe), (l = Ie), (Ie = Fe = null), Vf(t), l)))
      )
        for (t = 0; t < l.length; t++) Vf(l[t]);
    }
  }
  function Ca(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Ql] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(y(231, t, typeof e));
    return e;
  }
  var Ht = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    oi = !1;
  if (Ht)
    try {
      var Ra = {};
      Object.defineProperty(Ra, "passive", {
        get: function () {
          oi = !0;
        },
      }),
        window.addEventListener("test", Ra, Ra),
        window.removeEventListener("test", Ra, Ra);
    } catch {
      oi = !1;
    }
  var It = null,
    ri = null,
    Cu = null;
  function Jf() {
    if (Cu) return Cu;
    var l,
      t = ri,
      e = t.length,
      a,
      u = "value" in It ? It.value : It.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (Cu = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Ru(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Bu() {
    return !0;
  }
  function wf() {
    return !1;
  }
  function Zl(l) {
    function t(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Bu
          : wf),
        (this.isPropagationStopped = wf),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Bu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Bu));
        },
        persist: function () {},
        isPersistent: Bu,
      }),
      t
    );
  }
  var Ne = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qu = Zl(Ne),
    Ba = R({}, Ne, { view: 0, detail: 0 }),
    i0 = Zl(Ba),
    di,
    mi,
    qa,
    Yu = R({}, Ba, {
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
      getModifierState: yi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== qa &&
              (qa && l.type === "mousemove"
                ? ((di = l.screenX - qa.screenX), (mi = l.screenY - qa.screenY))
                : (mi = di = 0),
              (qa = l)),
            di);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : mi;
      },
    }),
    kf = Zl(Yu),
    c0 = R({}, Yu, { dataTransfer: 0 }),
    f0 = Zl(c0),
    s0 = R({}, Ba, { relatedTarget: 0 }),
    hi = Zl(s0),
    o0 = R({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    r0 = Zl(o0),
    d0 = R({}, Ne, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    m0 = Zl(d0),
    h0 = R({}, Ne, { data: 0 }),
    Wf = Zl(h0),
    y0 = {
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
    v0 = {
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
    g0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function b0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = g0[l])
      ? !!t[l]
      : !1;
  }
  function yi() {
    return b0;
  }
  var p0 = R({}, Ba, {
      key: function (l) {
        if (l.key) {
          var t = y0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ru(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? v0[l.keyCode] || "Unidentified"
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
      getModifierState: yi,
      charCode: function (l) {
        return l.type === "keypress" ? Ru(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ru(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    S0 = Zl(p0),
    x0 = R({}, Yu, {
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
    $f = Zl(x0),
    z0 = R({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yi,
    }),
    T0 = Zl(z0),
    E0 = R({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    A0 = Zl(E0),
    _0 = R({}, Yu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    N0 = Zl(_0),
    O0 = R({}, Ne, { newState: 0, oldState: 0 }),
    M0 = Zl(O0),
    j0 = [9, 13, 27, 32],
    vi = Ht && "CompositionEvent" in window,
    Ya = null;
  Ht && "documentMode" in document && (Ya = document.documentMode);
  var D0 = Ht && "TextEvent" in window && !Ya,
    Ff = Ht && (!vi || (Ya && 8 < Ya && 11 >= Ya)),
    If = " ",
    Pf = !1;
  function ls(l, t) {
    switch (l) {
      case "keyup":
        return j0.indexOf(t.keyCode) !== -1;
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
  function ts(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Pe = !1;
  function U0(l, t) {
    switch (l) {
      case "compositionend":
        return ts(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pf = !0), If);
      case "textInput":
        return (l = t.data), l === If && Pf ? null : l;
      default:
        return null;
    }
  }
  function H0(l, t) {
    if (Pe)
      return l === "compositionend" || (!vi && ls(l, t))
        ? ((l = Jf()), (Cu = ri = It = null), (Pe = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ff && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var C0 = {
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
  function es(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!C0[l.type] : t === "textarea";
  }
  function as(l, t, e, a) {
    Fe ? (Ie ? Ie.push(a) : (Ie = [a])) : (Fe = a),
      (t = On(t, "onChange")),
      0 < t.length &&
        ((e = new qu("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var Ga = null,
    La = null;
  function R0(l) {
    Lr(l, 0);
  }
  function Gu(l) {
    var t = Ha(l);
    if (Yf(t)) return l;
  }
  function us(l, t) {
    if (l === "change") return t;
  }
  var ns = !1;
  if (Ht) {
    var gi;
    if (Ht) {
      var bi = "oninput" in document;
      if (!bi) {
        var is = document.createElement("div");
        is.setAttribute("oninput", "return;"),
          (bi = typeof is.oninput == "function");
      }
      gi = bi;
    } else gi = !1;
    ns = gi && (!document.documentMode || 9 < document.documentMode);
  }
  function cs() {
    Ga && (Ga.detachEvent("onpropertychange", fs), (La = Ga = null));
  }
  function fs(l) {
    if (l.propertyName === "value" && Gu(La)) {
      var t = [];
      as(t, La, l, fi(l)), Kf(R0, t);
    }
  }
  function B0(l, t, e) {
    l === "focusin"
      ? (cs(), (Ga = t), (La = e), Ga.attachEvent("onpropertychange", fs))
      : l === "focusout" && cs();
  }
  function q0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Gu(La);
  }
  function Y0(l, t) {
    if (l === "click") return Gu(t);
  }
  function G0(l, t) {
    if (l === "input" || l === "change") return Gu(t);
  }
  function L0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var lt = typeof Object.is == "function" ? Object.is : L0;
  function Xa(l, t) {
    if (lt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Wn.call(t, u) || !lt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function ss(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function os(l, t) {
    var e = ss(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ss(e);
    }
  }
  function rs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? rs(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ds(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Uu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Uu(l.document);
    }
    return t;
  }
  function pi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var X0 = Ht && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    Si = null,
    Qa = null,
    xi = !1;
  function ms(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    xi ||
      la == null ||
      la !== Uu(a) ||
      ((a = la),
      "selectionStart" in a && pi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Qa && Xa(Qa, a)) ||
        ((Qa = a),
        (a = On(Si, "onSelect")),
        0 < a.length &&
          ((t = new qu("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = la))));
  }
  function Oe(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ta = {
      animationend: Oe("Animation", "AnimationEnd"),
      animationiteration: Oe("Animation", "AnimationIteration"),
      animationstart: Oe("Animation", "AnimationStart"),
      transitionrun: Oe("Transition", "TransitionRun"),
      transitionstart: Oe("Transition", "TransitionStart"),
      transitioncancel: Oe("Transition", "TransitionCancel"),
      transitionend: Oe("Transition", "TransitionEnd"),
    },
    zi = {},
    hs = {};
  Ht &&
    ((hs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ta.animationend.animation,
      delete ta.animationiteration.animation,
      delete ta.animationstart.animation),
    "TransitionEvent" in window || delete ta.transitionend.transition);
  function Me(l) {
    if (zi[l]) return zi[l];
    if (!ta[l]) return l;
    var t = ta[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in hs) return (zi[l] = t[e]);
    return l;
  }
  var ys = Me("animationend"),
    vs = Me("animationiteration"),
    gs = Me("animationstart"),
    Q0 = Me("transitionrun"),
    Z0 = Me("transitionstart"),
    V0 = Me("transitioncancel"),
    bs = Me("transitionend"),
    ps = new Map(),
    Ti =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ti.push("scrollEnd");
  function pt(l, t) {
    ps.set(l, t), _e(t, [l]);
  }
  var Lu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ot = [],
    ea = 0,
    Ei = 0;
  function Xu() {
    for (var l = ea, t = (Ei = ea = 0); t < l; ) {
      var e = ot[t];
      ot[t++] = null;
      var a = ot[t];
      ot[t++] = null;
      var u = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (((ot[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u);
      }
      n !== 0 && Ss(e, u, n);
    }
  }
  function Qu(l, t, e, a) {
    (ot[ea++] = l),
      (ot[ea++] = t),
      (ot[ea++] = e),
      (ot[ea++] = a),
      (Ei |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Ai(l, t, e, a) {
    return Qu(l, t, e, a), Zu(l);
  }
  function je(l, t) {
    return Qu(l, null, null, t), Zu(l);
  }
  function Ss(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Pl(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function Zu(l) {
    if (50 < ou) throw ((ou = 0), (Cc = null), Error(y(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var aa = {};
  function K0(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function tt(l, t, e, a) {
    return new K0(l, t, e, a);
  }
  function _i(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Ct(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = tt(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function xs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Vu(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof l == "function")) _i(l) && (i = 1);
    else if (typeof l == "string")
      i = $m(l, e, M.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case Tt:
          return (l = tt(31, e, t, u)), (l.elementType = Tt), (l.lanes = n), l;
        case Rl:
          return De(e.children, u, n, t);
        case Mt:
          (i = 8), (u |= 24);
          break;
        case $l:
          return (
            (l = tt(12, e, t, u | 2)), (l.elementType = $l), (l.lanes = n), l
          );
        case zt:
          return (l = tt(13, e, t, u)), (l.elementType = zt), (l.lanes = n), l;
        case Gl:
          return (l = tt(19, e, t, u)), (l.elementType = Gl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case ct:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case Ll:
                (i = 16), (a = null);
                break l;
            }
          (i = 29),
            (e = Error(y(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = tt(i, e, t, u)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function De(l, t, e, a) {
    return (l = tt(7, l, a, t)), (l.lanes = e), l;
  }
  function Ni(l, t, e) {
    return (l = tt(6, l, null, t)), (l.lanes = e), l;
  }
  function zs(l) {
    var t = tt(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function Oi(l, t, e) {
    return (
      (t = tt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Ts = new WeakMap();
  function rt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ts.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: zf(t) }), Ts.set(l, t), t);
    }
    return { value: l, source: t, stack: zf(t) };
  }
  var ua = [],
    na = 0,
    Ku = null,
    Za = 0,
    dt = [],
    mt = 0,
    Pt = null,
    At = 1,
    _t = "";
  function Rt(l, t) {
    (ua[na++] = Za), (ua[na++] = Ku), (Ku = l), (Za = t);
  }
  function Es(l, t, e) {
    (dt[mt++] = At), (dt[mt++] = _t), (dt[mt++] = Pt), (Pt = l);
    var a = At;
    l = _t;
    var u = 32 - Pl(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - Pl(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (At = (1 << (32 - Pl(t) + u)) | (e << u) | a),
        (_t = n + l);
    } else (At = (1 << n) | (e << u) | a), (_t = l);
  }
  function Mi(l) {
    l.return !== null && (Rt(l, 1), Es(l, 1, 0));
  }
  function ji(l) {
    for (; l === Ku; )
      (Ku = ua[--na]), (ua[na] = null), (Za = ua[--na]), (ua[na] = null);
    for (; l === Pt; )
      (Pt = dt[--mt]),
        (dt[mt] = null),
        (_t = dt[--mt]),
        (dt[mt] = null),
        (At = dt[--mt]),
        (dt[mt] = null);
  }
  function As(l, t) {
    (dt[mt++] = At),
      (dt[mt++] = _t),
      (dt[mt++] = Pt),
      (At = t.id),
      (_t = t.overflow),
      (Pt = l);
  }
  var Ml = null,
    ol = null,
    W = !1,
    le = null,
    ht = !1,
    Di = Error(y(519));
  function te(l) {
    var t = Error(
      y(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Va(rt(t, l)), Di);
  }
  function _s(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ol] = l), (t[Ql] = a), e)) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < du.length; e++) K(du[e], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t),
          Gf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Xf(t, a.value, a.defaultValue, a.children);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Vr(t.textContent, e)
        ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)),
          a.onScroll != null && K("scroll", t),
          a.onScrollEnd != null && K("scrollend", t),
          a.onClick != null && (t.onclick = Ut),
          (t = !0))
        : (t = !1),
      t || te(l, !0);
  }
  function Ns(l) {
    for (Ml = l.return; Ml; )
      switch (Ml.tag) {
        case 5:
        case 31:
        case 13:
          ht = !1;
          return;
        case 27:
        case 3:
          ht = !0;
          return;
        default:
          Ml = Ml.return;
      }
  }
  function ia(l) {
    if (l !== Ml) return !1;
    if (!W) return Ns(l), (W = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Wc(l.type, l.memoizedProps))),
        (e = !e)),
      e && ol && te(l),
      Ns(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(y(317));
      ol = Pr(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(y(317));
      ol = Pr(l);
    } else
      t === 27
        ? ((t = ol), ye(l.type) ? ((l = lf), (lf = null), (ol = l)) : (ol = t))
        : (ol = Ml ? vt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ue() {
    (ol = Ml = null), (W = !1);
  }
  function Ui() {
    var l = le;
    return (
      l !== null &&
        (wl === null ? (wl = l) : wl.push.apply(wl, l), (le = null)),
      l
    );
  }
  function Va(l) {
    le === null ? (le = [l]) : le.push(l);
  }
  var Hi = o(null),
    He = null,
    Bt = null;
  function ee(l, t, e) {
    _(Hi, t._currentValue), (t._currentValue = e);
  }
  function qt(l) {
    (l._currentValue = Hi.current), T(Hi);
  }
  function Ci(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Ri(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              (n.lanes |= e),
                (c = n.alternate),
                c !== null && (c.lanes |= e),
                Ci(n.return, e, l),
                a || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(y(341));
        (i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Ci(i, e, l),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ca(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(y(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          lt(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === tl.current) {
        if (((i = u.alternate), i === null)) throw Error(y(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(gu) : (l = [gu]));
      }
      u = u.return;
    }
    l !== null && Ri(t, l, e, a), (t.flags |= 262144);
  }
  function Ju(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ce(l) {
    (He = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function jl(l) {
    return Os(He, l);
  }
  function wu(l, t) {
    return He === null && Ce(l), Os(l, t);
  }
  function Os(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Bt === null)) {
      if (l === null) throw Error(y(308));
      (Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Bt = Bt.next = t;
    return e;
  }
  var J0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    w0 = x.unstable_scheduleCallback,
    k0 = x.unstable_NormalPriority,
    Sl = {
      $$typeof: Hl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Bi() {
    return { controller: new J0(), data: new Map(), refCount: 0 };
  }
  function Ka(l) {
    l.refCount--,
      l.refCount === 0 &&
        w0(k0, function () {
          l.controller.abort();
        });
  }
  var Ja = null,
    qi = 0,
    fa = 0,
    sa = null;
  function W0(l, t) {
    if (Ja === null) {
      var e = (Ja = []);
      (qi = 0),
        (fa = Lc()),
        (sa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return qi++, t.then(Ms, Ms), t;
  }
  function Ms() {
    if (--qi === 0 && Ja !== null) {
      sa !== null && (sa.status = "fulfilled");
      var l = Ja;
      (Ja = null), (fa = 0), (sa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function $0(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var js = p.S;
  p.S = function (l, t) {
    (hr = Fl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        W0(l, t),
      js !== null && js(l, t);
  };
  var Re = o(null);
  function Yi() {
    var l = Re.current;
    return l !== null ? l : sl.pooledCache;
  }
  function ku(l, t) {
    t === null ? _(Re, Re.current) : _(Re, t.pool);
  }
  function Ds() {
    var l = Yi();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var oa = Error(y(460)),
    Gi = Error(y(474)),
    Wu = Error(y(542)),
    $u = { then: function () {} };
  function Us(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Hs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Ut, Ut), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Rs(l), l);
      default:
        if (typeof t.status == "string") t.then(Ut, Ut);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(y(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Rs(l), l);
        }
        throw ((qe = t), oa);
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((qe = e), oa)
        : e;
    }
  }
  var qe = null;
  function Cs() {
    if (qe === null) throw Error(y(459));
    var l = qe;
    return (qe = null), l;
  }
  function Rs(l) {
    if (l === oa || l === Wu) throw Error(y(483));
  }
  var ra = null,
    wa = 0;
  function Fu(l) {
    var t = wa;
    return (wa += 1), ra === null && (ra = []), Hs(ra, l, t);
  }
  function ka(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function Iu(l, t) {
    throw t.$$typeof === dl
      ? Error(y(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function Bs(l) {
    function t(d, s) {
      if (l) {
        var m = d.deletions;
        m === null ? ((d.deletions = [s]), (d.flags |= 16)) : m.push(s);
      }
    }
    function e(d, s) {
      if (!l) return null;
      for (; s !== null; ) t(d, s), (s = s.sibling);
      return null;
    }
    function a(d) {
      for (var s = new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling);
      return s;
    }
    function u(d, s) {
      return (d = Ct(d, s)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, s, m) {
      return (
        (d.index = m),
        l
          ? ((m = d.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((d.flags |= 67108866), s) : m)
              : ((d.flags |= 67108866), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, m, S) {
      return s === null || s.tag !== 6
        ? ((s = Ni(m, d.mode, S)), (s.return = d), s)
        : ((s = u(s, m)), (s.return = d), s);
    }
    function f(d, s, m, S) {
      var H = m.type;
      return H === Rl
        ? b(d, s, m.props.children, S, m.key)
        : s !== null &&
          (s.elementType === H ||
            (typeof H == "object" &&
              H !== null &&
              H.$$typeof === Ll &&
              Be(H) === s.type))
        ? ((s = u(s, m.props)), ka(s, m), (s.return = d), s)
        : ((s = Vu(m.type, m.key, m.props, null, d.mode, S)),
          ka(s, m),
          (s.return = d),
          s);
    }
    function h(d, s, m, S) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = Oi(m, d.mode, S)), (s.return = d), s)
        : ((s = u(s, m.children || [])), (s.return = d), s);
    }
    function b(d, s, m, S, H) {
      return s === null || s.tag !== 7
        ? ((s = De(m, d.mode, S, H)), (s.return = d), s)
        : ((s = u(s, m)), (s.return = d), s);
    }
    function z(d, s, m) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return (s = Ni("" + s, d.mode, m)), (s.return = d), s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return (
              (m = Vu(s.type, s.key, s.props, null, d.mode, m)),
              ka(m, s),
              (m.return = d),
              m
            );
          case Yl:
            return (s = Oi(s, d.mode, m)), (s.return = d), s;
          case Ll:
            return (s = Be(s)), z(d, s, m);
        }
        if (bt(s) || Xl(s))
          return (s = De(s, d.mode, m, null)), (s.return = d), s;
        if (typeof s.then == "function") return z(d, Fu(s), m);
        if (s.$$typeof === Hl) return z(d, wu(d, s), m);
        Iu(d, s);
      }
      return null;
    }
    function v(d, s, m, S) {
      var H = s !== null ? s.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return H !== null ? null : c(d, s, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            return m.key === H ? f(d, s, m, S) : null;
          case Yl:
            return m.key === H ? h(d, s, m, S) : null;
          case Ll:
            return (m = Be(m)), v(d, s, m, S);
        }
        if (bt(m) || Xl(m)) return H !== null ? null : b(d, s, m, S, null);
        if (typeof m.then == "function") return v(d, s, Fu(m), S);
        if (m.$$typeof === Hl) return v(d, s, wu(d, m), S);
        Iu(d, m);
      }
      return null;
    }
    function g(d, s, m, S, H) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (d = d.get(m) || null), c(s, d, "" + S, H);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Wl:
            return (
              (d = d.get(S.key === null ? m : S.key) || null), f(s, d, S, H)
            );
          case Yl:
            return (
              (d = d.get(S.key === null ? m : S.key) || null), h(s, d, S, H)
            );
          case Ll:
            return (S = Be(S)), g(d, s, m, S, H);
        }
        if (bt(S) || Xl(S)) return (d = d.get(m) || null), b(s, d, S, H, null);
        if (typeof S.then == "function") return g(d, s, m, Fu(S), H);
        if (S.$$typeof === Hl) return g(d, s, m, wu(s, S), H);
        Iu(s, S);
      }
      return null;
    }
    function N(d, s, m, S) {
      for (
        var H = null, I = null, j = s, Q = (s = 0), w = null;
        j !== null && Q < m.length;
        Q++
      ) {
        j.index > Q ? ((w = j), (j = null)) : (w = j.sibling);
        var P = v(d, j, m[Q], S);
        if (P === null) {
          j === null && (j = w);
          break;
        }
        l && j && P.alternate === null && t(d, j),
          (s = n(P, s, Q)),
          I === null ? (H = P) : (I.sibling = P),
          (I = P),
          (j = w);
      }
      if (Q === m.length) return e(d, j), W && Rt(d, Q), H;
      if (j === null) {
        for (; Q < m.length; Q++)
          (j = z(d, m[Q], S)),
            j !== null &&
              ((s = n(j, s, Q)),
              I === null ? (H = j) : (I.sibling = j),
              (I = j));
        return W && Rt(d, Q), H;
      }
      for (j = a(j); Q < m.length; Q++)
        (w = g(j, d, Q, m[Q], S)),
          w !== null &&
            (l && w.alternate !== null && j.delete(w.key === null ? Q : w.key),
            (s = n(w, s, Q)),
            I === null ? (H = w) : (I.sibling = w),
            (I = w));
      return (
        l &&
          j.forEach(function (Se) {
            return t(d, Se);
          }),
        W && Rt(d, Q),
        H
      );
    }
    function C(d, s, m, S) {
      if (m == null) throw Error(y(151));
      for (
        var H = null, I = null, j = s, Q = (s = 0), w = null, P = m.next();
        j !== null && !P.done;
        Q++, P = m.next()
      ) {
        j.index > Q ? ((w = j), (j = null)) : (w = j.sibling);
        var Se = v(d, j, P.value, S);
        if (Se === null) {
          j === null && (j = w);
          break;
        }
        l && j && Se.alternate === null && t(d, j),
          (s = n(Se, s, Q)),
          I === null ? (H = Se) : (I.sibling = Se),
          (I = Se),
          (j = w);
      }
      if (P.done) return e(d, j), W && Rt(d, Q), H;
      if (j === null) {
        for (; !P.done; Q++, P = m.next())
          (P = z(d, P.value, S)),
            P !== null &&
              ((s = n(P, s, Q)),
              I === null ? (H = P) : (I.sibling = P),
              (I = P));
        return W && Rt(d, Q), H;
      }
      for (j = a(j); !P.done; Q++, P = m.next())
        (P = g(j, d, Q, P.value, S)),
          P !== null &&
            (l && P.alternate !== null && j.delete(P.key === null ? Q : P.key),
            (s = n(P, s, Q)),
            I === null ? (H = P) : (I.sibling = P),
            (I = P));
      return (
        l &&
          j.forEach(function (c1) {
            return t(d, c1);
          }),
        W && Rt(d, Q),
        H
      );
    }
    function cl(d, s, m, S) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Rl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Wl:
            l: {
              for (var H = m.key; s !== null; ) {
                if (s.key === H) {
                  if (((H = m.type), H === Rl)) {
                    if (s.tag === 7) {
                      e(d, s.sibling),
                        (S = u(s, m.props.children)),
                        (S.return = d),
                        (d = S);
                      break l;
                    }
                  } else if (
                    s.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === Ll &&
                      Be(H) === s.type)
                  ) {
                    e(d, s.sibling),
                      (S = u(s, m.props)),
                      ka(S, m),
                      (S.return = d),
                      (d = S);
                    break l;
                  }
                  e(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              m.type === Rl
                ? ((S = De(m.props.children, d.mode, S, m.key)),
                  (S.return = d),
                  (d = S))
                : ((S = Vu(m.type, m.key, m.props, null, d.mode, S)),
                  ka(S, m),
                  (S.return = d),
                  (d = S));
            }
            return i(d);
          case Yl:
            l: {
              for (H = m.key; s !== null; ) {
                if (s.key === H)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    e(d, s.sibling),
                      (S = u(s, m.children || [])),
                      (S.return = d),
                      (d = S);
                    break l;
                  } else {
                    e(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              (S = Oi(m, d.mode, S)), (S.return = d), (d = S);
            }
            return i(d);
          case Ll:
            return (m = Be(m)), cl(d, s, m, S);
        }
        if (bt(m)) return N(d, s, m, S);
        if (Xl(m)) {
          if (((H = Xl(m)), typeof H != "function")) throw Error(y(150));
          return (m = H.call(m)), C(d, s, m, S);
        }
        if (typeof m.then == "function") return cl(d, s, Fu(m), S);
        if (m.$$typeof === Hl) return cl(d, s, wu(d, m), S);
        Iu(d, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (e(d, s.sibling), (S = u(s, m)), (S.return = d), (d = S))
            : (e(d, s), (S = Ni(m, d.mode, S)), (S.return = d), (d = S)),
          i(d))
        : e(d, s);
    }
    return function (d, s, m, S) {
      try {
        wa = 0;
        var H = cl(d, s, m, S);
        return (ra = null), H;
      } catch (j) {
        if (j === oa || j === Wu) throw j;
        var I = tt(29, j, null, d.mode);
        return (I.lanes = S), (I.return = d), I;
      }
    };
  }
  var Ye = Bs(!0),
    qs = Bs(!1),
    ae = !1;
  function Li(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xi(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ue(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ne(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ll & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Zu(l)),
        Ss(l, null, e),
        t
      );
    }
    return Qu(l, a, t, e), Zu(l);
  }
  function Wa(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Of(l, e);
    }
  }
  function Qi(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var Zi = !1;
  function $a() {
    if (Zi) {
      var l = sa;
      if (l !== null) throw l;
    }
  }
  function Fa(l, t, e, a) {
    Zi = !1;
    var u = l.updateQueue;
    ae = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        h = f.next;
      (f.next = null), i === null ? (n = h) : (i.next = h), (i = f);
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (c = b.lastBaseUpdate),
        c !== i &&
          (c === null ? (b.firstBaseUpdate = h) : (c.next = h),
          (b.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var z = u.baseState;
      (i = 0), (b = h = f = null), (c = n);
      do {
        var v = c.lane & -536870913,
          g = v !== c.lane;
        if (g ? (J & v) === v : (a & v) === v) {
          v !== 0 && v === fa && (Zi = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var N = l,
              C = c;
            v = t;
            var cl = e;
            switch (C.tag) {
              case 1:
                if (((N = C.payload), typeof N == "function")) {
                  z = N.call(cl, z, v);
                  break l;
                }
                z = N;
                break l;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = C.payload),
                  (v = typeof N == "function" ? N.call(cl, z, v) : N),
                  v == null)
                )
                  break l;
                z = R({}, z, v);
                break l;
              case 2:
                ae = !0;
            }
          }
          (v = c.callback),
            v !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [v]) : g.push(v));
        } else
          (g = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            b === null ? ((h = b = g), (f = z)) : (b = b.next = g),
            (i |= v);
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          (g = c),
            (c = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      b === null && (f = z),
        (u.baseState = f),
        (u.firstBaseUpdate = h),
        (u.lastBaseUpdate = b),
        n === null && (u.shared.lanes = 0),
        (oe |= i),
        (l.lanes = i),
        (l.memoizedState = z);
    }
  }
  function Ys(l, t) {
    if (typeof l != "function") throw Error(y(191, l));
    l.call(t);
  }
  function Gs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Ys(e[l], t);
  }
  var da = o(null),
    Pu = o(0);
  function Ls(l, t) {
    (l = Jt), _(Pu, l), _(da, t), (Jt = l | t.baseLanes);
  }
  function Vi() {
    _(Pu, Jt), _(da, da.current);
  }
  function Ki() {
    (Jt = Pu.current), T(da), T(Pu);
  }
  var et = o(null),
    yt = null;
  function ie(l) {
    var t = l.alternate;
    _(bl, bl.current & 1),
      _(et, l),
      yt === null &&
        (t === null || da.current !== null || t.memoizedState !== null) &&
        (yt = l);
  }
  function Ji(l) {
    _(bl, bl.current), _(et, l), yt === null && (yt = l);
  }
  function Xs(l) {
    l.tag === 22
      ? (_(bl, bl.current), _(et, l), yt === null && (yt = l))
      : ce();
  }
  function ce() {
    _(bl, bl.current), _(et, et.current);
  }
  function at(l) {
    T(et), yt === l && (yt = null), T(bl);
  }
  var bl = o(0);
  function ln(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || Ic(e) || Pc(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Yt = 0,
    L = null,
    nl = null,
    xl = null,
    tn = !1,
    ma = !1,
    Ge = !1,
    en = 0,
    Ia = 0,
    ha = null,
    F0 = 0;
  function yl() {
    throw Error(y(321));
  }
  function wi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!lt(l[e], t[e])) return !1;
    return !0;
  }
  function ki(l, t, e, a, u, n) {
    return (
      (Yt = n),
      (L = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (p.H = l === null || l.memoizedState === null ? Ao : sc),
      (Ge = !1),
      (n = e(a, u)),
      (Ge = !1),
      ma && (n = Zs(t, e, a, u)),
      Qs(l),
      n
    );
  }
  function Qs(l) {
    p.H = tu;
    var t = nl !== null && nl.next !== null;
    if (((Yt = 0), (xl = nl = L = null), (tn = !1), (Ia = 0), (ha = null), t))
      throw Error(y(300));
    l === null ||
      zl ||
      ((l = l.dependencies), l !== null && Ju(l) && (zl = !0));
  }
  function Zs(l, t, e, a) {
    L = l;
    var u = 0;
    do {
      if ((ma && (ha = null), (Ia = 0), (ma = !1), 25 <= u))
        throw Error(y(301));
      if (((u += 1), (xl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (p.H = _o), (n = t(e, a));
    } while (ma);
    return n;
  }
  function I0() {
    var l = p.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Pa(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (L.flags |= 1024),
      t
    );
  }
  function Wi() {
    var l = en !== 0;
    return (en = 0), l;
  }
  function $i(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Fi(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      tn = !1;
    }
    (Yt = 0), (xl = nl = L = null), (ma = !1), (Ia = en = 0), (ha = null);
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return xl === null ? (L.memoizedState = xl = l) : (xl = xl.next = l), xl;
  }
  function pl() {
    if (nl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = xl === null ? L.memoizedState : xl.next;
    if (t !== null) (xl = t), (nl = l);
    else {
      if (l === null)
        throw L.alternate === null ? Error(y(467)) : Error(y(310));
      (nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        xl === null ? (L.memoizedState = xl = l) : (xl = xl.next = l);
    }
    return xl;
  }
  function an() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(l) {
    var t = Ia;
    return (
      (Ia += 1),
      ha === null && (ha = []),
      (l = Hs(ha, l, t)),
      (t = L),
      (xl === null ? t.memoizedState : xl.next) === null &&
        ((t = t.alternate),
        (p.H = t === null || t.memoizedState === null ? Ao : sc)),
      l
    );
  }
  function un(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pa(l);
      if (l.$$typeof === Hl) return jl(l);
    }
    throw Error(y(438, String(l)));
  }
  function Ii(l) {
    var t = null,
      e = L.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = L.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = an()), (L.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ze;
    return t.index++, e;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = pl();
    return Pi(t, nl, l);
  }
  function Pi(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (t.baseQueue = u = n), (a.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        h = t,
        b = !1;
      do {
        var z = h.lane & -536870913;
        if (z !== h.lane ? (J & z) === z : (Yt & z) === z) {
          var v = h.revertLane;
          if (v === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              z === fa && (b = !0);
          else if ((Yt & v) === v) {
            (h = h.next), v === fa && (b = !0);
            continue;
          } else
            (z = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((c = f = z), (i = n)) : (f = f.next = z),
              (L.lanes |= v),
              (oe |= v);
          (z = h.action),
            Ge && e(n, z),
            (n = h.hasEagerState ? h.eagerState : e(n, z));
        } else
          (v = {
            lane: z,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            f === null ? ((c = f = v), (i = n)) : (f = f.next = v),
            (L.lanes |= z),
            (oe |= z);
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !lt(n, l.memoizedState) && ((zl = !0), b && ((e = sa), e !== null)))
      )
        throw e;
      (l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function lc(l) {
    var t = pl(),
      e = t.queue;
    if (e === null) throw Error(y(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = l(n, i.action)), (i = i.next);
      while (i !== u);
      lt(n, t.memoizedState) || (zl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function Vs(l, t, e) {
    var a = L,
      u = pl(),
      n = W;
    if (n) {
      if (e === void 0) throw Error(y(407));
      e = e();
    } else e = t();
    var i = !lt((nl || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (zl = !0)),
      (u = u.queue),
      ac(ws.bind(null, a, u, l), [l]),
      u.getSnapshot !== t || i || (xl !== null && xl.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, { destroy: void 0 }, Js.bind(null, a, u, e, t), null),
        sl === null)
      )
        throw Error(y(349));
      n || (Yt & 127) !== 0 || Ks(a, t, e);
    }
    return e;
  }
  function Ks(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = L.updateQueue),
      t === null
        ? ((t = an()), (L.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function Js(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), ks(t) && Ws(l);
  }
  function ws(l, t, e) {
    return e(function () {
      ks(t) && Ws(l);
    });
  }
  function ks(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !lt(l, e);
    } catch {
      return !0;
    }
  }
  function Ws(l) {
    var t = je(l, 2);
    t !== null && kl(t, l, 2);
  }
  function tc(l) {
    var t = ql();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Ge)) {
        $t(!0);
        try {
          e();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function $s(l, t, e, a) {
    return (l.baseState = e), Pi(l, nl, typeof a == "function" ? a : Gt);
  }
  function P0(l, t, e, a, u) {
    if (sn(l)) throw Error(y(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      p.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), Fs(t, n))
          : ((n.next = e.next), (t.pending = e.next = n));
    }
  }
  function Fs(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = p.T,
        i = {};
      p.T = i;
      try {
        var c = e(u, a),
          f = p.S;
        f !== null && f(i, c), Is(l, t, c);
      } catch (h) {
        ec(l, t, h);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), (p.T = n);
      }
    } else
      try {
        (n = e(u, a)), Is(l, t, n);
      } catch (h) {
        ec(l, t, h);
      }
  }
  function Is(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Ps(l, t, a);
          },
          function (a) {
            return ec(l, t, a);
          }
        )
      : Ps(l, t, e);
  }
  function Ps(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      lo(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Fs(l, e)));
  }
  function ec(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), lo(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function lo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function to(l, t) {
    return t;
  }
  function eo(l, t) {
    if (W) {
      var e = sl.formState;
      if (e !== null) {
        l: {
          var a = L;
          if (W) {
            if (ol) {
              t: {
                for (var u = ol, n = ht; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = vt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (ol = vt(u.nextSibling)), (a = u.data === "F!");
                break l;
              }
            }
            te(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = ql()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: to,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = zo.bind(null, L, a)),
      (a.dispatch = e),
      (a = tc(!1)),
      (n = fc.bind(null, L, !1, a.queue)),
      (a = ql()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = P0.bind(null, L, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function ao(l) {
    var t = pl();
    return uo(t, nl, l);
  }
  function uo(l, t, e) {
    if (
      ((t = Pi(l, t, to)[0]),
      (l = nn(Gt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Pa(t);
      } catch (i) {
        throw i === oa ? Wu : i;
      }
    else a = t;
    t = pl();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((L.flags |= 2048),
        ya(9, { destroy: void 0 }, lm.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function lm(l, t) {
    l.action = t;
  }
  function no(l) {
    var t = pl(),
      e = nl;
    if (e !== null) return uo(t, e, l);
    pl(), (t = t.memoizedState), (e = pl());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function ya(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = L.updateQueue),
      t === null && ((t = an()), (L.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function io() {
    return pl().memoizedState;
  }
  function cn(l, t, e, a) {
    var u = ql();
    (L.flags |= l),
      (u.memoizedState = ya(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a
      ));
  }
  function fn(l, t, e, a) {
    var u = pl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    nl !== null && a !== null && wi(a, nl.memoizedState.deps)
      ? (u.memoizedState = ya(t, n, e, a))
      : ((L.flags |= l), (u.memoizedState = ya(1 | t, n, e, a)));
  }
  function co(l, t) {
    cn(8390656, 8, l, t);
  }
  function ac(l, t) {
    fn(2048, 8, l, t);
  }
  function tm(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) (t = an()), (L.updateQueue = t), (t.events = [l]);
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function fo(l) {
    var t = pl().memoizedState;
    return (
      tm({ ref: t, nextImpl: l }),
      function () {
        if ((ll & 2) !== 0) throw Error(y(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function so(l, t) {
    return fn(4, 2, l, t);
  }
  function oo(l, t) {
    return fn(4, 4, l, t);
  }
  function ro(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function mo(l, t, e) {
    (e = e != null ? e.concat([l]) : null), fn(4, 4, ro.bind(null, t, l), e);
  }
  function uc() {}
  function ho(l, t) {
    var e = pl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && wi(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function yo(l, t) {
    var e = pl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && wi(t, a[1])) return a[0];
    if (((a = l()), Ge)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function nc(l, t, e) {
    return e === void 0 || ((Yt & 1073741824) !== 0 && (J & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = vr()), (L.lanes |= l), (oe |= l), e);
  }
  function vo(l, t, e, a) {
    return lt(e, t)
      ? e
      : da.current !== null
      ? ((l = nc(l, e, a)), lt(l, t) || (zl = !0), l)
      : (Yt & 42) === 0 || ((Yt & 1073741824) !== 0 && (J & 261930) === 0)
      ? ((zl = !0), (l.memoizedState = e))
      : ((l = vr()), (L.lanes |= l), (oe |= l), t);
  }
  function go(l, t, e, a, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = p.T,
      c = {};
    (p.T = c), fc(l, !1, t, e);
    try {
      var f = u(),
        h = p.S;
      if (
        (h !== null && h(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var b = $0(f, a);
        lu(l, t, b, it(l));
      } else lu(l, t, a, it(l));
    } catch (z) {
      lu(l, t, { then: function () {}, status: "rejected", reason: z }, it());
    } finally {
      (A.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (p.T = i);
    }
  }
  function em() {}
  function ic(l, t, e, a) {
    if (l.tag !== 5) throw Error(y(476));
    var u = bo(l).queue;
    go(
      l,
      u,
      t,
      B,
      e === null
        ? em
        : function () {
            return po(l), e(a);
          }
    );
  }
  function bo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: B,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function po(l) {
    var t = bo(l);
    t.next === null && (t = l.alternate.memoizedState),
      lu(l, t.next.queue, {}, it());
  }
  function cc() {
    return jl(gu);
  }
  function So() {
    return pl().memoizedState;
  }
  function xo() {
    return pl().memoizedState;
  }
  function am(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = it();
          l = ue(e);
          var a = ne(t, l, e);
          a !== null && (kl(a, t, e), Wa(a, t, e)),
            (t = { cache: Bi() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function um(l, t, e) {
    var a = it();
    (e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sn(l)
        ? To(t, e)
        : ((e = Ai(l, t, e, a)), e !== null && (kl(e, l, a), Eo(e, t, a)));
  }
  function zo(l, t, e) {
    var a = it();
    lu(l, t, e, a);
  }
  function lu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sn(l)) To(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = c), lt(c, i)))
            return Qu(l, t, u, 0), sl === null && Xu(), !1;
        } catch {}
      if (((e = Ai(l, t, u, a)), e !== null))
        return kl(e, l, a), Eo(e, t, a), !0;
    }
    return !1;
  }
  function fc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Lc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sn(l))
    ) {
      if (t) throw Error(y(479));
    } else (t = Ai(l, e, a, 2)), t !== null && kl(t, l, 2);
  }
  function sn(l) {
    var t = l.alternate;
    return l === L || (t !== null && t === L);
  }
  function To(l, t) {
    ma = tn = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function Eo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Of(l, e);
    }
  }
  var tu = {
    readContext: jl,
    use: un,
    useCallback: yl,
    useContext: yl,
    useEffect: yl,
    useImperativeHandle: yl,
    useLayoutEffect: yl,
    useInsertionEffect: yl,
    useMemo: yl,
    useReducer: yl,
    useRef: yl,
    useState: yl,
    useDebugValue: yl,
    useDeferredValue: yl,
    useTransition: yl,
    useSyncExternalStore: yl,
    useId: yl,
    useHostTransitionStatus: yl,
    useFormState: yl,
    useActionState: yl,
    useOptimistic: yl,
    useMemoCache: yl,
    useCacheRefresh: yl,
  };
  tu.useEffectEvent = yl;
  var Ao = {
      readContext: jl,
      use: un,
      useCallback: function (l, t) {
        return (ql().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: jl,
      useEffect: co,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          cn(4194308, 4, ro.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return cn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        cn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = ql();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ge) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = ql();
        if (e !== void 0) {
          var u = e(t);
          if (Ge) {
            $t(!0);
            try {
              e(t);
            } finally {
              $t(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = um.bind(null, L, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = ql();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = tc(l);
        var t = l.queue,
          e = zo.bind(null, L, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: uc,
      useDeferredValue: function (l, t) {
        var e = ql();
        return nc(e, l, t);
      },
      useTransition: function () {
        var l = tc(!1);
        return (
          (l = go.bind(null, L, l.queue, !0, !1)),
          (ql().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = L,
          u = ql();
        if (W) {
          if (e === void 0) throw Error(y(407));
          e = e();
        } else {
          if (((e = t()), sl === null)) throw Error(y(349));
          (J & 127) !== 0 || Ks(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          co(ws.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ya(9, { destroy: void 0 }, Js.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = ql(),
          t = sl.identifierPrefix;
        if (W) {
          var e = _t,
            a = At;
          (e = (a & ~(1 << (32 - Pl(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = en++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_");
        } else (e = F0++), (t = "_" + t + "r_" + e.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: cc,
      useFormState: eo,
      useActionState: eo,
      useOptimistic: function (l) {
        var t = ql();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = fc.bind(null, L, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: Ii,
      useCacheRefresh: function () {
        return (ql().memoizedState = am.bind(null, L));
      },
      useEffectEvent: function (l) {
        var t = ql(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((ll & 2) !== 0) throw Error(y(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    sc = {
      readContext: jl,
      use: un,
      useCallback: ho,
      useContext: jl,
      useEffect: ac,
      useImperativeHandle: mo,
      useInsertionEffect: so,
      useLayoutEffect: oo,
      useMemo: yo,
      useReducer: nn,
      useRef: io,
      useState: function () {
        return nn(Gt);
      },
      useDebugValue: uc,
      useDeferredValue: function (l, t) {
        var e = pl();
        return vo(e, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = nn(Gt)[0],
          t = pl().memoizedState;
        return [typeof l == "boolean" ? l : Pa(l), t];
      },
      useSyncExternalStore: Vs,
      useId: So,
      useHostTransitionStatus: cc,
      useFormState: ao,
      useActionState: ao,
      useOptimistic: function (l, t) {
        var e = pl();
        return $s(e, nl, l, t);
      },
      useMemoCache: Ii,
      useCacheRefresh: xo,
    };
  sc.useEffectEvent = fo;
  var _o = {
    readContext: jl,
    use: un,
    useCallback: ho,
    useContext: jl,
    useEffect: ac,
    useImperativeHandle: mo,
    useInsertionEffect: so,
    useLayoutEffect: oo,
    useMemo: yo,
    useReducer: lc,
    useRef: io,
    useState: function () {
      return lc(Gt);
    },
    useDebugValue: uc,
    useDeferredValue: function (l, t) {
      var e = pl();
      return nl === null ? nc(e, l, t) : vo(e, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = lc(Gt)[0],
        t = pl().memoizedState;
      return [typeof l == "boolean" ? l : Pa(l), t];
    },
    useSyncExternalStore: Vs,
    useId: So,
    useHostTransitionStatus: cc,
    useFormState: no,
    useActionState: no,
    useOptimistic: function (l, t) {
      var e = pl();
      return nl !== null
        ? $s(e, nl, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: Ii,
    useCacheRefresh: xo,
  };
  _o.useEffectEvent = fo;
  function oc(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : R({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var rc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = it(),
        u = ue(a);
      (u.payload = t),
        e != null && (u.callback = e),
        (t = ne(l, u, a)),
        t !== null && (kl(t, l, a), Wa(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = it(),
        u = ue(a);
      (u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = ne(l, u, a)),
        t !== null && (kl(t, l, a), Wa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = it(),
        a = ue(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ne(l, a, e)),
        t !== null && (kl(t, l, e), Wa(t, l, e));
    },
  };
  function No(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xa(e, a) || !Xa(u, n)
        : !0
    );
  }
  function Oo(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && rc.enqueueReplaceState(t, t.state, null);
  }
  function Le(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = R({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Mo(l) {
    Lu(l);
  }
  function jo(l) {
    console.error(l);
  }
  function Do(l) {
    Lu(l);
  }
  function on(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Uo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function dc(l, t, e) {
    return (
      (e = ue(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        on(l, t);
      }),
      e
    );
  }
  function Ho(l) {
    return (l = ue(l)), (l.tag = 3), l;
  }
  function Co(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          Uo(t, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        Uo(t, e, a),
          typeof u != "function" &&
            (re === null ? (re = new Set([this])) : re.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function nm(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && ca(t, e, u, !0),
        (e = et.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              yt === null ? zn() : e.alternate === null && vl === 0 && (vl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === $u
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  qc(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === $u
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  qc(l, a, u)),
              !1
            );
        }
        throw Error(y(435, e.tag));
      }
      return qc(l, a, u), zn(), !1;
    }
    if (W)
      return (
        (t = et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Di && ((l = Error(y(422), { cause: a })), Va(rt(l, e))))
          : (a !== Di && ((t = Error(y(423), { cause: a })), Va(rt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = rt(a, e)),
            (u = dc(l.stateNode, a, u)),
            Qi(l, u),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(y(520), { cause: a });
    if (
      ((n = rt(n, e)),
      su === null ? (su = [n]) : su.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    (a = rt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = dc(e.stateNode, a, l)),
            Qi(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (re === null || !re.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Ho(u)),
              Co(u, l, e, a),
              Qi(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var mc = Error(y(461)),
    zl = !1;
  function Dl(l, t, e, a) {
    t.child = l === null ? qs(t, null, e, a) : Ye(t, l.child, e, a);
  }
  function Ro(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Ce(t),
      (a = ki(l, t, e, i, n, u)),
      (c = Wi()),
      l !== null && !zl
        ? ($i(l, t, u), Lt(l, t, u))
        : (W && c && Mi(t), (t.flags |= 1), Dl(l, t, a, u), t.child)
    );
  }
  function Bo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !_i(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), qo(l, t, n, a, u))
        : ((l = Vu(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !xc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Xa), e(i, a) && l.ref === t.ref)
      )
        return Lt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function qo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xa(n, a) && l.ref === t.ref)
        if (((zl = !1), (t.pendingProps = a = n), xc(l, u)))
          (l.flags & 131072) !== 0 && (zl = !0);
        else return (t.lanes = l.lanes), Lt(l, t, u);
    }
    return hc(l, t, e, a, u);
  }
  function Yo(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, u = 0; a !== null; )
            (u = u | a.lanes | a.childLanes), (a = a.sibling);
          a = u & ~n;
        } else (a = 0), (t.child = null);
        return Go(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ku(t, n !== null ? n.cachePool : null),
          n !== null ? Ls(t, n) : Vi(),
          Xs(t);
      else
        return (
          (a = t.lanes = 536870912),
          Go(l, t, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (ku(t, n.cachePool), Ls(t, n), ce(), (t.memoizedState = null))
        : (l !== null && ku(t, null), Vi(), ce());
    return Dl(l, t, u, e), t.child;
  }
  function eu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Go(l, t, e, a, u) {
    var n = Yi();
    return (
      (n = n === null ? null : { parent: Sl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && ku(t, null),
      Vi(),
      Xs(t),
      l !== null && ca(l, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function rn(l, t) {
    return (
      (t = mn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Lo(l, t, e) {
    return (
      Ye(t, l.child, null, e),
      (l = rn(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function im(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (W) {
        if (a.mode === "hidden")
          return (l = rn(t, a)), (t.lanes = 536870912), eu(null, l);
        if (
          (Ji(t),
          (l = ol)
            ? ((l = Ir(l, ht)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = zs(l)),
                (e.return = t),
                (t.child = e),
                (Ml = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw te(t);
        return (t.lanes = 536870912), null;
      }
      return rn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Ji(t), u))
        if (t.flags & 256) (t.flags &= -257), (t = Lo(l, t, e));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(y(558));
      else if (
        (zl || ca(l, t, e, !1), (u = (e & l.childLanes) !== 0), zl || u)
      ) {
        if (
          ((a = sl),
          a !== null && ((i = Mf(a, e)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), je(l, i), kl(a, l, i), mc);
        zn(), (t = Lo(l, t, e));
      } else
        (l = n.treeContext),
          (ol = vt(i.nextSibling)),
          (Ml = t),
          (W = !0),
          (le = null),
          (ht = !1),
          l !== null && As(t, l),
          (t = rn(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = Ct(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function dn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(y(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function hc(l, t, e, a, u) {
    return (
      Ce(t),
      (e = ki(l, t, e, a, void 0, u)),
      (a = Wi()),
      l !== null && !zl
        ? ($i(l, t, u), Lt(l, t, u))
        : (W && a && Mi(t), (t.flags |= 1), Dl(l, t, e, u), t.child)
    );
  }
  function Xo(l, t, e, a, u, n) {
    return (
      Ce(t),
      (t.updateQueue = null),
      (e = Zs(t, a, e, u)),
      Qs(l),
      (a = Wi()),
      l !== null && !zl
        ? ($i(l, t, n), Lt(l, t, n))
        : (W && a && Mi(t), (t.flags |= 1), Dl(l, t, e, n), t.child)
    );
  }
  function Qo(l, t, e, a, u) {
    if ((Ce(t), t.stateNode === null)) {
      var n = aa,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = jl(i)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = rc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Li(t),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? jl(i) : aa),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (oc(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && rc.enqueueReplaceState(n, n.state, null),
          Fa(t, a, n, u),
          $a(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Le(e, c);
      n.props = f;
      var h = n.context,
        b = e.contextType;
      (i = aa), typeof b == "object" && b !== null && (i = jl(b));
      var z = e.getDerivedStateFromProps;
      (b =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        b ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || h !== i) && Oo(t, n, a, i)),
        (ae = !1);
      var v = t.memoizedState;
      (n.state = v),
        Fa(t, a, n, u),
        $a(),
        (h = t.memoizedState),
        c || v !== h || ae
          ? (typeof z == "function" && (oc(t, e, z, a), (h = t.memoizedState)),
            (f = ae || No(t, e, f, a, v, h, i))
              ? (b ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = h)),
            (n.props = a),
            (n.state = h),
            (n.context = i),
            (a = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        Xi(l, t),
        (i = t.memoizedProps),
        (b = Le(e, i)),
        (n.props = b),
        (z = t.pendingProps),
        (v = n.context),
        (h = e.contextType),
        (f = aa),
        typeof h == "object" && h !== null && (f = jl(h)),
        (c = e.getDerivedStateFromProps),
        (h =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== z || v !== f) && Oo(t, n, a, f)),
        (ae = !1),
        (v = t.memoizedState),
        (n.state = v),
        Fa(t, a, n, u),
        $a();
      var g = t.memoizedState;
      i !== z ||
      v !== g ||
      ae ||
      (l !== null && l.dependencies !== null && Ju(l.dependencies))
        ? (typeof c == "function" && (oc(t, e, c, a), (g = t.memoizedState)),
          (b =
            ae ||
            No(t, e, b, a, v, g, f) ||
            (l !== null && l.dependencies !== null && Ju(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (n.props = a),
          (n.state = g),
          (n.context = f),
          (a = b))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      dn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Ye(t, l.child, null, u)),
              (t.child = Ye(t, null, e, u)))
            : Dl(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Lt(l, t, u)),
      l
    );
  }
  function Zo(l, t, e, a) {
    return Ue(), (t.flags |= 256), Dl(l, t, e, a), t.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function vc(l) {
    return { baseLanes: l, cachePool: Ds() };
  }
  function gc(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= nt), l;
  }
  function Vo(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (W) {
        if (
          (u ? ie(t) : ce(),
          (l = ol)
            ? ((l = Ir(l, ht)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = zs(l)),
                (e.return = t),
                (t.child = e),
                (Ml = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw te(t);
        return Pc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var c = a.children;
      return (
        (a = a.fallback),
        u
          ? (ce(),
            (u = t.mode),
            (c = mn({ mode: "hidden", children: c }, u)),
            (a = De(a, u, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = vc(e)),
            (a.childLanes = gc(l, i, e)),
            (t.memoizedState = yc),
            eu(null, a))
          : (ie(t), bc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (ie(t), (t.flags &= -257), (t = pc(l, t, e)))
          : t.memoizedState !== null
          ? (ce(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (ce(),
            (c = a.fallback),
            (u = t.mode),
            (a = mn({ mode: "visible", children: a.children }, u)),
            (c = De(c, u, e, null)),
            (c.flags |= 2),
            (a.return = t),
            (c.return = t),
            (a.sibling = c),
            (t.child = a),
            Ye(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = vc(e)),
            (a.childLanes = gc(l, i, e)),
            (t.memoizedState = yc),
            (t = eu(null, a)));
      else if ((ie(t), Pc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
        (i = h),
          (a = Error(y(419))),
          (a.stack = ""),
          (a.digest = i),
          Va({ value: a, source: null, stack: null }),
          (t = pc(l, t, e));
      } else if (
        (zl || ca(l, t, e, !1), (i = (e & l.childLanes) !== 0), zl || i)
      ) {
        if (
          ((i = sl),
          i !== null && ((a = Mf(i, e)), a !== 0 && a !== f.retryLane))
        )
          throw ((f.retryLane = a), je(l, a), kl(i, l, a), mc);
        Ic(c) || zn(), (t = pc(l, t, e));
      } else
        Ic(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ol = vt(c.nextSibling)),
            (Ml = t),
            (W = !0),
            (le = null),
            (ht = !1),
            l !== null && As(t, l),
            (t = bc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ce(),
        (c = a.fallback),
        (u = t.mode),
        (f = l.child),
        (h = f.sibling),
        (a = Ct(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        h !== null ? (c = Ct(h, c)) : ((c = De(c, u, e, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        eu(null, a),
        (a = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = vc(e))
          : ((u = c.cachePool),
            u !== null
              ? ((f = Sl._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = Ds()),
            (c = { baseLanes: c.baseLanes | e, cachePool: u })),
        (a.memoizedState = c),
        (a.childLanes = gc(l, i, e)),
        (t.memoizedState = yc),
        eu(l.child, a))
      : (ie(t),
        (e = l.child),
        (l = e.sibling),
        (e = Ct(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function bc(l, t) {
    return (
      (t = mn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function mn(l, t) {
    return (l = tt(22, l, null, t)), (l.lanes = 0), l;
  }
  function pc(l, t, e) {
    return (
      Ye(t, l.child, null, e),
      (l = bc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Ko(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Ci(l.return, t, e);
  }
  function Sc(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function Jo(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = bl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      _(bl, i),
      Dl(l, t, a, e),
      (a = W ? Za : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Ko(l, e, t);
        else if (l.tag === 19) Ko(l, e, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          (l = e.alternate),
            l !== null && ln(l) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          Sc(t, !1, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && ln(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = e), (e = u), (u = l);
        }
        Sc(t, !0, e, null, n, a);
        break;
      case "together":
        Sc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (oe |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ca(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Ct(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Ct(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function xc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ju(l)));
  }
  function cm(l, t, e) {
    switch (t.tag) {
      case 3:
        Bl(t, t.stateNode.containerInfo),
          ee(t, Sl, l.memoizedState.cache),
          Ue();
        break;
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ee(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Ji(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ie(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Vo(l, t, e)
            : (ie(t), (l = Lt(l, t, e)), l !== null ? l.sibling : null);
        ie(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (ca(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return Jo(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          _(bl, bl.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Yo(l, t, e, t.pendingProps);
      case 24:
        ee(t, Sl, l.memoizedState.cache);
    }
    return Lt(l, t, e);
  }
  function wo(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) zl = !0;
      else {
        if (!xc(l, e) && (t.flags & 128) === 0) return (zl = !1), cm(l, t, e);
        zl = (l.flags & 131072) !== 0;
      }
    else (zl = !1), W && (t.flags & 1048576) !== 0 && Es(t, Za, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Be(t.elementType)), (t.type = l), typeof l == "function"))
            _i(l)
              ? ((a = Le(l, a)), (t.tag = 1), (t = Qo(null, t, l, a, e)))
              : ((t.tag = 0), (t = hc(null, t, l, a, e)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === ct) {
                (t.tag = 11), (t = Ro(null, t, l, a, e));
                break l;
              } else if (u === k) {
                (t.tag = 14), (t = Bo(null, t, l, a, e));
                break l;
              }
            }
            throw ((t = jt(l) || l), Error(y(306, t, "")));
          }
        }
        return t;
      case 0:
        return hc(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (u = Le(a, t.pendingProps)), Qo(l, t, a, u, e);
      case 3:
        l: {
          if ((Bl(t, t.stateNode.containerInfo), l === null))
            throw Error(y(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (u = n.element), Xi(l, t), Fa(t, a, null, e);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ee(t, Sl, a),
            a !== n.cache && Ri(t, [Sl], e, !0),
            $a(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Zo(l, t, a, e);
              break l;
            } else if (a !== u) {
              (u = rt(Error(y(424)), t)), Va(u), (t = Zo(l, t, a, e));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  ol = vt(l.firstChild),
                  Ml = t,
                  W = !0,
                  le = null,
                  ht = !0,
                  e = qs(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
          else {
            if ((Ue(), a === u)) {
              t = Lt(l, t, e);
              break l;
            }
            Dl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dn(l, t),
          l === null
            ? (e = ud(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : W ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Mn(Z.current).createElement(e)),
                (a[Ol] = t),
                (a[Ql] = l),
                Ul(a, e, l),
                _l(a),
                (t.stateNode = a))
            : (t.memoizedState = ud(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Oa(t),
          l === null &&
            W &&
            ((a = t.stateNode = td(t.type, t.pendingProps, Z.current)),
            (Ml = t),
            (ht = !0),
            (u = ol),
            ye(t.type) ? ((lf = u), (ol = vt(a.firstChild))) : (ol = u)),
          Dl(l, t, t.pendingProps.children, e),
          dn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            W &&
            ((u = a = ol) &&
              ((a = qm(a, t.type, t.pendingProps, ht)),
              a !== null
                ? ((t.stateNode = a),
                  (Ml = t),
                  (ol = vt(a.firstChild)),
                  (ht = !1),
                  (u = !0))
                : (u = !1)),
            u || te(t)),
          Oa(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Wc(u, n) ? (a = null) : i !== null && Wc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = ki(l, t, I0, null, null, e)), (gu._currentValue = u)),
          dn(l, t),
          Dl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            W &&
            ((l = e = ol) &&
              ((e = Ym(e, t.pendingProps, ht)),
              e !== null
                ? ((t.stateNode = e), (Ml = t), (ol = null), (l = !0))
                : (l = !1)),
            l || te(t)),
          null
        );
      case 13:
        return Vo(l, t, e);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Ye(t, null, a, e)) : Dl(l, t, a, e),
          t.child
        );
      case 11:
        return Ro(l, t, t.type, t.pendingProps, e);
      case 7:
        return Dl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Dl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Dl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          ee(t, t.type, a.value),
          Dl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Ce(t),
          (u = jl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Dl(l, t, a, e),
          t.child
        );
      case 14:
        return Bo(l, t, t.type, t.pendingProps, e);
      case 15:
        return qo(l, t, t.type, t.pendingProps, e);
      case 19:
        return Jo(l, t, e);
      case 31:
        return im(l, t, e);
      case 22:
        return Yo(l, t, e, t.pendingProps);
      case 24:
        return (
          Ce(t),
          (a = jl(Sl)),
          l === null
            ? ((u = Yi()),
              u === null &&
                ((u = sl),
                (n = Bi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Li(t),
              ee(t, Sl, u))
            : ((l.lanes & e) !== 0 && (Xi(l, t), Fa(t, null, null, e), $a()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ee(t, Sl, a))
                : ((a = n.cache),
                  ee(t, Sl, a),
                  a !== u.cache && Ri(t, [Sl], e, !0))),
          Dl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function zc(l, t, e, a, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Sr()) l.flags |= 8192;
        else throw ((qe = $u), Gi);
    } else l.flags &= -16777217;
  }
  function ko(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !sd(t)))
      if (Sr()) l.flags |= 8192;
      else throw ((qe = $u), Gi);
  }
  function hn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? _f() : 536870912), (l.lanes |= t), (pa |= t));
  }
  function au(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function fm(l, t, e) {
    var a = t.pendingProps;
    switch ((ji(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qt(Sl),
          gl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ia(t)
              ? Xt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ui())),
          rl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Xt(t),
              n !== null ? (rl(t), ko(t, n)) : (rl(t), zc(t, u, null, a, e)))
            : n
            ? n !== l.memoizedState
              ? (Xt(t), rl(t), ko(t, n))
              : (rl(t), (t.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== a && Xt(t),
              rl(t),
              zc(t, u, l, a, e)),
          null
        );
      case 27:
        if (
          (Eu(t),
          (e = Z.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return rl(t), null;
          }
          (l = M.current),
            ia(t) ? _s(t) : ((l = td(u, a, e)), (t.stateNode = l), Xt(t));
        }
        return rl(t), null;
      case 5:
        if ((Eu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return rl(t), null;
          }
          if (((n = M.current), ia(t))) _s(t);
          else {
            var i = Mn(Z.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (n = i.createElement("div")),
                      (n.innerHTML = "<script></script>"),
                      (n = n.removeChild(n.firstChild));
                    break;
                  case "select":
                    (n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size);
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            (n[Ol] = t), (n[Ql] = a);
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = n;
            l: switch ((Ul(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Xt(t);
          }
        }
        return (
          rl(t),
          zc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(y(166));
          if (((l = Z.current), ia(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Ml),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (l[Ol] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Vr(l.nodeValue, e)
              )),
              l || te(t, !0);
          } else (l = Mn(l).createTextNode(a)), (l[Ol] = t), (t.stateNode = l);
        }
        return rl(t), null;
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ia(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(y(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(y(557));
              l[Ol] = t;
            } else
              Ue(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            rl(t), (l = !1);
          } else
            (e = Ui()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0);
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(y(558));
        }
        return rl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ia(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(y(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(y(317));
              u[Ol] = t;
            } else
              Ue(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            rl(t), (u = !1);
          } else
            (u = Ui()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              hn(t, t.updateQueue),
              rl(t),
              null)
        );
      case 4:
        return gl(), l === null && Vc(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return qt(t.type), rl(t), null;
      case 19:
        if ((T(bl), (a = t.memoizedState), a === null)) return rl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) au(a, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ln(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      au(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      hn(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    xs(e, l), (e = e.sibling);
                  return (
                    _(bl, (bl.current & 1) | 2),
                    W && Rt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              Fl() > pn &&
              ((t.flags |= 128), (u = !0), au(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = ln(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                hn(t, l),
                au(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !W)
              )
                return rl(t), null;
            } else
              2 * Fl() - a.renderingStartTime > pn &&
                e !== 536870912 &&
                ((t.flags |= 128), (u = !0), au(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = Fl()),
            (l.sibling = null),
            (e = bl.current),
            _(bl, u ? (e & 1) | 2 : e & 1),
            W && Rt(t, a.treeForkCount),
            l)
          : (rl(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Ki(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rl(t),
          (e = t.updateQueue),
          e !== null && hn(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && T(Re),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          qt(Sl),
          rl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function sm(l, t) {
    switch ((ji(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          qt(Sl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Eu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(y(340));
          Ue();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(y(340));
          Ue();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return T(bl), null;
      case 4:
        return gl(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return (
          at(t),
          Ki(),
          l !== null && T(Re),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return qt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wo(l, t) {
    switch ((ji(t), t.tag)) {
      case 3:
        qt(Sl), gl();
        break;
      case 26:
      case 27:
      case 5:
        Eu(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(bl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        at(t), Ki(), l !== null && T(Re);
        break;
      case 24:
        qt(Sl);
    }
  }
  function uu(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function fe(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              (i.destroy = void 0), (u = t);
              var f = e,
                h = c;
              try {
                h();
              } catch (b) {
                al(u, f, b);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      al(t, t.return, b);
    }
  }
  function $o(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Gs(t, e);
      } catch (a) {
        al(l, l.return, a);
      }
    }
  }
  function Fo(l, t, e) {
    (e.props = Le(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      al(l, t, a);
    }
  }
  function nu(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Nt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          al(l, t, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          al(l, t, u);
        }
      else e.current = null;
  }
  function Io(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function Tc(l, t, e) {
    try {
      var a = l.stateNode;
      Dm(a, l.type, e, t), (a[Ql] = t);
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function Po(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ye(l.type)) ||
      l.tag === 4
    );
  }
  function Ec(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Po(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ye(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ac(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Ut));
    else if (
      a !== 4 &&
      (a === 27 && ye(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Ac(l, t, e), l = l.sibling; l !== null; )
        Ac(l, t, e), (l = l.sibling);
  }
  function yn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && ye(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, e), l = l.sibling; l !== null; )
        yn(l, t, e), (l = l.sibling);
  }
  function lr(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ul(t, a, e), (t[Ol] = l), (t[Ql] = e);
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Qt = !1,
    Tl = !1,
    _c = !1,
    tr = typeof WeakSet == "function" ? WeakSet : Set,
    Nl = null;
  function om(l, t) {
    if (((l = l.containerInfo), (wc = Bn), (l = ds(l)), pi(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              h = 0,
              b = 0,
              z = l,
              v = null;
            t: for (;;) {
              for (
                var g;
                z !== e || (u !== 0 && z.nodeType !== 3) || (c = i + u),
                  z !== n || (a !== 0 && z.nodeType !== 3) || (f = i + a),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (g = z.firstChild) !== null;

              )
                (v = z), (z = g);
              for (;;) {
                if (z === l) break t;
                if (
                  (v === e && ++h === u && (c = i),
                  v === n && ++b === a && (f = i),
                  (g = z.nextSibling) !== null)
                )
                  break;
                (z = v), (v = z.parentNode);
              }
              z = g;
            }
            e = c === -1 || f === -1 ? null : { start: c, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      kc = { focusedElem: l, selectionRange: e }, Bn = !1, Nl = t;
      Nl !== null;

    )
      if (
        ((t = Nl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Nl = l);
      else
        for (; Nl !== null; ) {
          switch (((t = Nl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  (u = l[e]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (e = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var N = Le(e.type, u);
                  (l = a.getSnapshotBeforeUpdate(N, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (C) {
                  al(e, e.return, C);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Fc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(y(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Nl = l);
            break;
          }
          Nl = t.return;
        }
  }
  function er(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, e), a & 4 && uu(5, e);
        break;
      case 1:
        if ((Vt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              al(e, e.return, i);
            }
          else {
            var u = Le(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              al(e, e.return, i);
            }
          }
        a & 64 && $o(e), a & 512 && nu(e, e.return);
        break;
      case 3:
        if ((Vt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Gs(l, t);
          } catch (i) {
            al(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && lr(e);
      case 26:
      case 5:
        Vt(l, e), t === null && a & 4 && Io(e), a & 512 && nu(e, e.return);
        break;
      case 12:
        Vt(l, e);
        break;
      case 31:
        Vt(l, e), a & 4 && nr(l, e);
        break;
      case 13:
        Vt(l, e),
          a & 4 && ir(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = pm.bind(null, e)), Gm(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Qt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Tl), (u = Qt);
          var n = Tl;
          (Qt = a),
            (Tl = t) && !n ? Kt(l, e, (e.subtreeFlags & 8772) !== 0) : Vt(l, e),
            (Qt = u),
            (Tl = n);
        }
        break;
      case 30:
        break;
      default:
        Vt(l, e);
    }
  }
  function ar(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), ar(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ei(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var ml = null,
    Vl = !1;
  function Zt(l, t, e) {
    for (e = e.child; e !== null; ) ur(l, t, e), (e = e.sibling);
  }
  function ur(l, t, e) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(Ma, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Tl || Nt(e, t),
          Zt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Tl || Nt(e, t);
        var a = ml,
          u = Vl;
        ye(e.type) && ((ml = e.stateNode), (Vl = !1)),
          Zt(l, t, e),
          hu(e.stateNode),
          (ml = a),
          (Vl = u);
        break;
      case 5:
        Tl || Nt(e, t);
      case 6:
        if (
          ((a = ml),
          (u = Vl),
          (ml = null),
          Zt(l, t, e),
          (ml = a),
          (Vl = u),
          ml !== null)
        )
          if (Vl)
            try {
              (ml.nodeType === 9
                ? ml.body
                : ml.nodeName === "HTML"
                ? ml.ownerDocument.body
                : ml
              ).removeChild(e.stateNode);
            } catch (n) {
              al(e, t, n);
            }
          else
            try {
              ml.removeChild(e.stateNode);
            } catch (n) {
              al(e, t, n);
            }
        break;
      case 18:
        ml !== null &&
          (Vl
            ? ((l = ml),
              $r(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              Na(l))
            : $r(ml, e.stateNode));
        break;
      case 4:
        (a = ml),
          (u = Vl),
          (ml = e.stateNode.containerInfo),
          (Vl = !0),
          Zt(l, t, e),
          (ml = a),
          (Vl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fe(2, e, t), Tl || fe(4, e, t), Zt(l, t, e);
        break;
      case 1:
        Tl ||
          (Nt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Fo(e, t, a)),
          Zt(l, t, e);
        break;
      case 21:
        Zt(l, t, e);
        break;
      case 22:
        (Tl = (a = Tl) || e.memoizedState !== null), Zt(l, t, e), (Tl = a);
        break;
      default:
        Zt(l, t, e);
    }
  }
  function nr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Na(l);
      } catch (e) {
        al(t, t.return, e);
      }
    }
  }
  function ir(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Na(l);
      } catch (e) {
        al(t, t.return, e);
      }
  }
  function rm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new tr()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new tr()),
          t
        );
      default:
        throw Error(y(435, l.tag));
    }
  }
  function vn(l, t) {
    var e = rm(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Sm.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function Kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ye(c.type)) {
                (ml = c.stateNode), (Vl = !1);
                break l;
              }
              break;
            case 5:
              (ml = c.stateNode), (Vl = !1);
              break l;
            case 3:
            case 4:
              (ml = c.stateNode.containerInfo), (Vl = !0);
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(y(160));
        ur(n, i, u),
          (ml = null),
          (Vl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) cr(t, l), (t = t.sibling);
  }
  var St = null;
  function cr(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Kl(t, l),
          Jl(l),
          a & 4 && (fe(3, l, l.return), uu(3, l), fe(5, l, l.return));
        break;
      case 1:
        Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Nt(e, e.return)),
          a & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = St;
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Nt(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ua] ||
                          n[Ol] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ul(n, a, e),
                        (n[Ol] = l),
                        _l(n),
                        (a = n);
                      break l;
                    case "link":
                      var i = cd("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ul(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = cd("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(a)),
                        Ul(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  (n[Ol] = l), _l(n), (a = n);
                }
                l.stateNode = a;
              } else fd(u, l.type, l.stateNode);
            else l.stateNode = id(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? fd(u, l.type, l.stateNode)
                  : id(u, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Tc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Nt(e, e.return)),
          e !== null && a & 4 && Tc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (Kl(t, l),
          Jl(l),
          a & 512 && (Tl || e === null || Nt(e, e.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            $e(u, "");
          } catch (N) {
            al(l, l.return, N);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Tc(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (_c = !0);
        break;
      case 6:
        if ((Kl(t, l), Jl(l), a & 4)) {
          if (l.stateNode === null) throw Error(y(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (N) {
            al(l, l.return, N);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (u = St),
          (St = jn(t.containerInfo)),
          Kl(t, l),
          (St = u),
          Jl(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Na(t.containerInfo);
          } catch (N) {
            al(l, l.return, N);
          }
        _c && ((_c = !1), fr(l));
        break;
      case 4:
        (a = St),
          (St = jn(l.stateNode.containerInfo)),
          Kl(t, l),
          Jl(l),
          (St = a);
        break;
      case 12:
        Kl(t, l), Jl(l);
        break;
      case 31:
        Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vn(l, a)));
        break;
      case 13:
        Kl(t, l),
          Jl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (bn = Fl()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null,
          h = Qt,
          b = Tl;
        if (
          ((Qt = h || u),
          (Tl = b || f),
          Kl(t, l),
          (Tl = b),
          (Qt = h),
          Jl(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (e === null || f || Qt || Tl || Xe(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                f = e = t;
                try {
                  if (((n = f.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    c = f.stateNode;
                    var z = f.memoizedProps.style,
                      v =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    c.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (N) {
                  al(f, f.return, N);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (N) {
                  al(f, f.return, N);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? Fr(g, !0) : Fr(f.stateNode, !1);
                } catch (N) {
                  al(f, f.return, N);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), vn(l, e))));
        break;
      case 19:
        Kl(t, l),
          Jl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Kl(t, l), Jl(l);
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (Po(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(y(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = Ec(l);
            yn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && ($e(i, ""), (e.flags &= -33));
            var c = Ec(l);
            yn(l, c, i);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo,
              h = Ec(l);
            Ac(l, h, f);
            break;
          default:
            throw Error(y(161));
        }
      } catch (b) {
        al(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function fr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        fr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) er(l, t.alternate, t), (t = t.sibling);
  }
  function Xe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fe(4, t, t.return), Xe(t);
          break;
        case 1:
          Nt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && Fo(t, t.return, e),
            Xe(t);
          break;
        case 27:
          hu(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), Xe(t);
          break;
        case 22:
          t.memoizedState === null && Xe(t);
          break;
        case 30:
          Xe(t);
          break;
        default:
          Xe(t);
      }
      l = l.sibling;
    }
  }
  function Kt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kt(u, n, e), uu(4, n);
          break;
        case 1:
          if (
            (Kt(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (h) {
              al(a, a.return, h);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ys(f[u], c);
            } catch (h) {
              al(a, a.return, h);
            }
          }
          e && i & 64 && $o(n), nu(n, n.return);
          break;
        case 27:
          lr(n);
        case 26:
        case 5:
          Kt(u, n, e), e && a === null && i & 4 && Io(n), nu(n, n.return);
          break;
        case 12:
          Kt(u, n, e);
          break;
        case 31:
          Kt(u, n, e), e && i & 4 && nr(u, n);
          break;
        case 13:
          Kt(u, n, e), e && i & 4 && ir(u, n);
          break;
        case 22:
          n.memoizedState === null && Kt(u, n, e), nu(n, n.return);
          break;
        case 30:
          break;
        default:
          Kt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Nc(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Ka(e));
  }
  function Oc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ka(l));
  }
  function xt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) sr(l, t, e, a), (t = t.sibling);
  }
  function sr(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xt(l, t, e, a), u & 2048 && uu(9, t);
        break;
      case 1:
        xt(l, t, e, a);
        break;
      case 3:
        xt(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ka(l)));
        break;
      case 12:
        if (u & 2048) {
          xt(l, t, e, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            al(t, t.return, f);
          }
        } else xt(l, t, e, a);
        break;
      case 31:
        xt(l, t, e, a);
        break;
      case 13:
        xt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? xt(l, t, e, a)
              : iu(l, t)
            : n._visibility & 2
            ? xt(l, t, e, a)
            : ((n._visibility |= 2),
              va(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Nc(i, t);
        break;
      case 24:
        xt(l, t, e, a), u & 2048 && Oc(t.alternate, t);
        break;
      default:
        xt(l, t, e, a);
    }
  }
  function va(l, t, e, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var n = l,
        i = t,
        c = e,
        f = a,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          va(n, i, c, f, u), uu(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null
            ? b._visibility & 2
              ? va(n, i, c, f, u)
              : iu(n, i)
            : ((b._visibility |= 2), va(n, i, c, f, u)),
            u && h & 2048 && Nc(i.alternate, i);
          break;
        case 24:
          va(n, i, c, f, u), u && h & 2048 && Oc(i.alternate, i);
          break;
        default:
          va(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function iu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            iu(e, a), u & 2048 && Nc(a.alternate, a);
            break;
          case 24:
            iu(e, a), u & 2048 && Oc(a.alternate, a);
            break;
          default:
            iu(e, a);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function ga(l, t, e) {
    if (l.subtreeFlags & cu)
      for (l = l.child; l !== null; ) or(l, t, e), (l = l.sibling);
  }
  function or(l, t, e) {
    switch (l.tag) {
      case 26:
        ga(l, t, e),
          l.flags & cu &&
            l.memoizedState !== null &&
            Fm(e, St, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ga(l, t, e);
        break;
      case 3:
      case 4:
        var a = St;
        (St = jn(l.stateNode.containerInfo)), ga(l, t, e), (St = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = cu), (cu = 16777216), ga(l, t, e), (cu = a))
            : ga(l, t, e));
        break;
      default:
        ga(l, t, e);
    }
  }
  function rr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function fu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Nl = a), mr(a, l);
        }
      rr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) dr(l), (l = l.sibling);
  }
  function dr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fu(l), l.flags & 2048 && fe(9, l, l.return);
        break;
      case 3:
        fu(l);
        break;
      case 12:
        fu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), gn(l))
          : fu(l);
        break;
      default:
        fu(l);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Nl = a), mr(a, l);
        }
      rr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          fe(8, t, t.return), gn(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), gn(t));
          break;
        default:
          gn(t);
      }
      l = l.sibling;
    }
  }
  function mr(l, t) {
    for (; Nl !== null; ) {
      var e = Nl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          fe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Nl = a);
      else
        l: for (e = l; Nl !== null; ) {
          a = Nl;
          var u = a.sibling,
            n = a.return;
          if ((ar(a), a === e)) {
            Nl = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Nl = u);
            break l;
          }
          Nl = n;
        }
    }
  }
  var dm = {
      getCacheForType: function (l) {
        var t = jl(Sl),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
      cacheSignal: function () {
        return jl(Sl).controller.signal;
      },
    },
    mm = typeof WeakMap == "function" ? WeakMap : Map,
    ll = 0,
    sl = null,
    V = null,
    J = 0,
    el = 0,
    ut = null,
    se = !1,
    ba = !1,
    Mc = !1,
    Jt = 0,
    vl = 0,
    oe = 0,
    Qe = 0,
    jc = 0,
    nt = 0,
    pa = 0,
    su = null,
    wl = null,
    Dc = !1,
    bn = 0,
    hr = 0,
    pn = 1 / 0,
    Sn = null,
    re = null,
    El = 0,
    de = null,
    Sa = null,
    wt = 0,
    Uc = 0,
    Hc = null,
    yr = null,
    ou = 0,
    Cc = null;
  function it() {
    return (ll & 2) !== 0 && J !== 0 ? J & -J : p.T !== null ? Lc() : jf();
  }
  function vr() {
    if (nt === 0)
      if ((J & 536870912) === 0 || W) {
        var l = Nu;
        (Nu <<= 1), (Nu & 3932160) === 0 && (Nu = 262144), (nt = l);
      } else nt = 536870912;
    return (l = et.current), l !== null && (l.flags |= 32), nt;
  }
  function kl(l, t, e) {
    ((l === sl && (el === 2 || el === 9)) || l.cancelPendingCommit !== null) &&
      (xa(l, 0), me(l, J, nt, !1)),
      Da(l, e),
      ((ll & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((ll & 2) === 0 && (Qe |= e), vl === 4 && me(l, J, nt, !1)),
        Ot(l));
  }
  function gr(l, t, e) {
    if ((ll & 6) !== 0) throw Error(y(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || ja(l, t),
      u = a ? vm(l, t) : Bc(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        ba && !a && me(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !hm(e))) {
          (u = Bc(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = su;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (xa(c, i).flags |= 256), (i = Bc(c, i, !1)), i !== 2)) {
                if (Mc && !f) {
                  (c.errorRecoveryDisabledLanes |= n), (Qe |= n), (u = 4);
                  break l;
                }
                (n = wl),
                  (wl = u),
                  n !== null && (wl === null ? (wl = n) : wl.push.apply(wl, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          xa(l, 0), me(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              me(a, t, nt, !se);
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((u = bn + 300 - Fl()), 10 < u)) {
            if ((me(a, t, nt, !se), Mu(a, 0, !0) !== 0)) break l;
            (wt = t),
              (a.timeoutHandle = kr(
                br.bind(
                  null,
                  a,
                  e,
                  wl,
                  Sn,
                  Dc,
                  t,
                  nt,
                  Qe,
                  pa,
                  se,
                  n,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break l;
          }
          br(a, e, wl, Sn, Dc, t, nt, Qe, pa, se, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function br(l, t, e, a, u, n, i, c, f, h, b, z, v, g) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      (z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ut,
      }),
        or(t, n, z);
      var N =
        (n & 62914560) === n ? bn - Fl() : (n & 4194048) === n ? hr - Fl() : 0;
      if (((N = Im(z, N)), N !== null)) {
        (wt = n),
          (l.cancelPendingCommit = N(
            _r.bind(null, l, t, n, e, a, u, i, c, f, b, z, null, v, g)
          )),
          me(l, n, i, !h);
        return;
      }
    }
    _r(l, t, n, e, a, u, i, c, f);
  }
  function hm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!lt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function me(l, t, e, a) {
    (t &= ~jc),
      (t &= ~Qe),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - Pl(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && Nf(l, e, t);
  }
  function xn() {
    return (ll & 6) === 0 ? (ru(0), !1) : !0;
  }
  function Rc() {
    if (V !== null) {
      if (el === 0) var l = V.return;
      else (l = V), (Bt = He = null), Fi(l), (ra = null), (wa = 0), (l = V);
      for (; l !== null; ) Wo(l.alternate, l), (l = l.return);
      V = null;
    }
  }
  function xa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), Cm(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (wt = 0),
      Rc(),
      (sl = l),
      (V = e = Ct(l.current, null)),
      (J = t),
      (el = 0),
      (ut = null),
      (se = !1),
      (ba = ja(l, t)),
      (Mc = !1),
      (pa = nt = jc = Qe = oe = vl = 0),
      (wl = su = null),
      (Dc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - Pl(a),
          n = 1 << u;
        (t |= l[u]), (a &= ~n);
      }
    return (Jt = t), Xu(), e;
  }
  function pr(l, t) {
    (L = null),
      (p.H = tu),
      t === oa || t === Wu
        ? ((t = Cs()), (el = 3))
        : t === Gi
        ? ((t = Cs()), (el = 4))
        : (el =
            t === mc
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ut = t),
      V === null && ((vl = 1), on(l, rt(t, l.current)));
  }
  function Sr() {
    var l = et.current;
    return l === null
      ? !0
      : (J & 4194048) === J
      ? yt === null
      : (J & 62914560) === J || (J & 536870912) !== 0
      ? l === yt
      : !1;
  }
  function xr() {
    var l = p.H;
    return (p.H = tu), l === null ? tu : l;
  }
  function zr() {
    var l = p.A;
    return (p.A = dm), l;
  }
  function zn() {
    (vl = 4),
      se || ((J & 4194048) !== J && et.current !== null) || (ba = !0),
      ((oe & 134217727) === 0 && (Qe & 134217727) === 0) ||
        sl === null ||
        me(sl, J, nt, !1);
  }
  function Bc(l, t, e) {
    var a = ll;
    ll |= 2;
    var u = xr(),
      n = zr();
    (sl !== l || J !== t) && ((Sn = null), xa(l, t)), (t = !1);
    var i = vl;
    l: do
      try {
        if (el !== 0 && V !== null) {
          var c = V,
            f = ut;
          switch (el) {
            case 8:
              Rc(), (i = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var h = el;
              if (((el = 0), (ut = null), za(l, c, f, h), e && ba)) {
                i = 0;
                break l;
              }
              break;
            default:
              (h = el), (el = 0), (ut = null), za(l, c, f, h);
          }
        }
        ym(), (i = vl);
        break;
      } catch (b) {
        pr(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = He = null),
      (ll = a),
      (p.H = u),
      (p.A = n),
      V === null && ((sl = null), (J = 0), Xu()),
      i
    );
  }
  function ym() {
    for (; V !== null; ) Tr(V);
  }
  function vm(l, t) {
    var e = ll;
    ll |= 2;
    var a = xr(),
      u = zr();
    sl !== l || J !== t
      ? ((Sn = null), (pn = Fl() + 500), xa(l, t))
      : (ba = ja(l, t));
    l: do
      try {
        if (el !== 0 && V !== null) {
          t = V;
          var n = ut;
          t: switch (el) {
            case 1:
              (el = 0), (ut = null), za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Us(n)) {
                (el = 0), (ut = null), Er(t);
                break;
              }
              (t = function () {
                (el !== 2 && el !== 9) || sl !== l || (el = 7), Ot(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              el = 7;
              break l;
            case 4:
              el = 5;
              break l;
            case 7:
              Us(n)
                ? ((el = 0), (ut = null), Er(t))
                : ((el = 0), (ut = null), za(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? sd(i) : c.stateNode.complete) {
                    (el = 0), (ut = null);
                    var f = c.sibling;
                    if (f !== null) V = f;
                    else {
                      var h = c.return;
                      h !== null ? ((V = h), Tn(h)) : (V = null);
                    }
                    break t;
                  }
              }
              (el = 0), (ut = null), za(l, t, n, 5);
              break;
            case 6:
              (el = 0), (ut = null), za(l, t, n, 6);
              break;
            case 8:
              Rc(), (vl = 6);
              break l;
            default:
              throw Error(y(462));
          }
        }
        gm();
        break;
      } catch (b) {
        pr(l, b);
      }
    while (!0);
    return (
      (Bt = He = null),
      (p.H = a),
      (p.A = u),
      (ll = e),
      V !== null ? 0 : ((sl = null), (J = 0), Xu(), vl)
    );
  }
  function gm() {
    for (; V !== null && !Ld(); ) Tr(V);
  }
  function Tr(l) {
    var t = wo(l.alternate, l, Jt);
    (l.memoizedProps = l.pendingProps), t === null ? Tn(l) : (V = t);
  }
  function Er(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Xo(e, t, t.pendingProps, t.type, void 0, J);
        break;
      case 11:
        t = Xo(e, t, t.pendingProps, t.type.render, t.ref, J);
        break;
      case 5:
        Fi(t);
      default:
        Wo(e, t), (t = V = xs(t, Jt)), (t = wo(e, t, Jt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Tn(l) : (V = t);
  }
  function za(l, t, e, a) {
    (Bt = He = null), Fi(t), (ra = null), (wa = 0);
    var u = t.return;
    try {
      if (nm(l, u, t, e, J)) {
        (vl = 1), on(l, rt(e, l.current)), (V = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((V = u), n);
      (vl = 1), on(l, rt(e, l.current)), (V = null);
      return;
    }
    t.flags & 32768
      ? (W || a === 1
          ? (l = !0)
          : ba || (J & 536870912) !== 0
          ? (l = !1)
          : ((se = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = et.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ar(t, l))
      : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ar(t, se);
        return;
      }
      l = t.return;
      var e = fm(t.alternate, t, Jt);
      if (e !== null) {
        V = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function Ar(l, t) {
    do {
      var e = sm(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (V = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        V = l;
        return;
      }
      V = l = e;
    } while (l !== null);
    (vl = 6), (V = null);
  }
  function _r(l, t, e, a, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do En();
    while (El !== 0);
    if ((ll & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === l.current) throw Error(y(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Ei),
        $d(l, e, n, i, c, f),
        l === sl && ((V = sl = null), (J = 0)),
        (Sa = t),
        (de = l),
        (wt = e),
        (Uc = n),
        (Hc = u),
        (yr = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            xm(Au, function () {
              return Dr(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = p.T), (p.T = null), (u = A.p), (A.p = 2), (i = ll), (ll |= 4);
        try {
          om(l, t, e);
        } finally {
          (ll = i), (A.p = u), (p.T = a);
        }
      }
      (El = 1), Nr(), Or(), Mr();
    }
  }
  function Nr() {
    if (El === 1) {
      El = 0;
      var l = de,
        t = Sa,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = p.T), (p.T = null);
        var a = A.p;
        A.p = 2;
        var u = ll;
        ll |= 4;
        try {
          cr(t, l);
          var n = kc,
            i = ds(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            rs(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && pi(c)) {
              var h = f.start,
                b = f.end;
              if ((b === void 0 && (b = h), "selectionStart" in c))
                (c.selectionStart = h),
                  (c.selectionEnd = Math.min(b, c.value.length));
              else {
                var z = c.ownerDocument || document,
                  v = (z && z.defaultView) || window;
                if (v.getSelection) {
                  var g = v.getSelection(),
                    N = c.textContent.length,
                    C = Math.min(f.start, N),
                    cl = f.end === void 0 ? C : Math.min(f.end, N);
                  !g.extend && C > cl && ((i = cl), (cl = C), (C = i));
                  var d = os(c, C),
                    s = os(c, cl);
                  if (
                    d &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var m = z.createRange();
                    m.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      C > cl
                        ? (g.addRange(m), g.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), g.addRange(m));
                  }
                }
              }
            }
            for (z = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                z.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < z.length;
              c++
            ) {
              var S = z[c];
              (S.element.scrollLeft = S.left), (S.element.scrollTop = S.top);
            }
          }
          (Bn = !!wc), (kc = wc = null);
        } finally {
          (ll = u), (A.p = a), (p.T = e);
        }
      }
      (l.current = t), (El = 2);
    }
  }
  function Or() {
    if (El === 2) {
      El = 0;
      var l = de,
        t = Sa,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = p.T), (p.T = null);
        var a = A.p;
        A.p = 2;
        var u = ll;
        ll |= 4;
        try {
          er(l, t.alternate, t);
        } finally {
          (ll = u), (A.p = a), (p.T = e);
        }
      }
      El = 3;
    }
  }
  function Mr() {
    if (El === 4 || El === 3) {
      (El = 0), Xd();
      var l = de,
        t = Sa,
        e = wt,
        a = yr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (El = 5)
        : ((El = 0), (Sa = de = null), jr(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (re = null),
        li(e),
        (t = t.stateNode),
        Il && typeof Il.onCommitFiberRoot == "function")
      )
        try {
          Il.onCommitFiberRoot(Ma, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = p.T), (u = A.p), (A.p = 2), (p.T = null);
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (p.T = t), (A.p = u);
        }
      }
      (wt & 3) !== 0 && En(),
        Ot(l),
        (u = l.pendingLanes),
        (e & 261930) !== 0 && (u & 42) !== 0
          ? l === Cc
            ? ou++
            : ((ou = 0), (Cc = l))
          : (ou = 0),
        ru(0);
    }
  }
  function jr(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ka(t)));
  }
  function En() {
    return Nr(), Or(), Mr(), Dr();
  }
  function Dr() {
    if (El !== 5) return !1;
    var l = de,
      t = Uc;
    Uc = 0;
    var e = li(wt),
      a = p.T,
      u = A.p;
    try {
      (A.p = 32 > e ? 32 : e), (p.T = null), (e = Hc), (Hc = null);
      var n = de,
        i = wt;
      if (((El = 0), (Sa = de = null), (wt = 0), (ll & 6) !== 0))
        throw Error(y(331));
      var c = ll;
      if (
        ((ll |= 4),
        dr(n.current),
        sr(n, n.current, i, e),
        (ll = c),
        ru(0, !1),
        Il && typeof Il.onPostCommitFiberRoot == "function")
      )
        try {
          Il.onPostCommitFiberRoot(Ma, n);
        } catch {}
      return !0;
    } finally {
      (A.p = u), (p.T = a), jr(l, t);
    }
  }
  function Ur(l, t, e) {
    (t = rt(e, t)),
      (t = dc(l.stateNode, t, 2)),
      (l = ne(l, t, 2)),
      l !== null && (Da(l, 2), Ot(l));
  }
  function al(l, t, e) {
    if (l.tag === 3) Ur(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ur(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (re === null || !re.has(a)))
          ) {
            (l = rt(e, l)),
              (e = Ho(2)),
              (a = ne(t, e, 2)),
              a !== null && (Co(e, a, t, l), Da(a, 2), Ot(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function qc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new mm();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(e) ||
      ((Mc = !0), u.add(e), (l = bm.bind(null, l, t, e)), t.then(l, l));
  }
  function bm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      sl === l &&
        (J & e) === e &&
        (vl === 4 || (vl === 3 && (J & 62914560) === J && 300 > Fl() - bn)
          ? (ll & 2) === 0 && xa(l, 0)
          : (jc |= e),
        pa === J && (pa = 0)),
      Ot(l);
  }
  function Hr(l, t) {
    t === 0 && (t = _f()), (l = je(l, t)), l !== null && (Da(l, t), Ot(l));
  }
  function pm(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), Hr(l, e);
  }
  function Sm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    a !== null && a.delete(t), Hr(l, e);
  }
  function xm(l, t) {
    return $n(l, t);
  }
  var An = null,
    Ta = null,
    Yc = !1,
    _n = !1,
    Gc = !1,
    he = 0;
  function Ot(l) {
    l !== Ta &&
      l.next === null &&
      (Ta === null ? (An = Ta = l) : (Ta = Ta.next = l)),
      (_n = !0),
      Yc || ((Yc = !0), Tm());
  }
  function ru(l, t) {
    if (!Gc && _n) {
      Gc = !0;
      do
        for (var e = !1, a = An; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              (n = (1 << (31 - Pl(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), qr(a, n));
          } else
            (n = J),
              (n = Mu(
                a,
                a === sl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || ja(a, n) || ((e = !0), qr(a, n));
          a = a.next;
        }
      while (e);
      Gc = !1;
    }
  }
  function zm() {
    Cr();
  }
  function Cr() {
    _n = Yc = !1;
    var l = 0;
    he !== 0 && Hm() && (l = he);
    for (var t = Fl(), e = null, a = An; a !== null; ) {
      var u = a.next,
        n = Rr(a, t);
      n === 0
        ? ((a.next = null),
          e === null ? (An = u) : (e.next = u),
          u === null && (Ta = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (_n = !0)),
        (a = u);
    }
    (El !== 0 && El !== 5) || ru(l), he !== 0 && (he = 0);
  }
  function Rr(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - Pl(n),
        c = 1 << i,
        f = u[i];
      f === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Wd(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = sl),
      (e = J),
      (e = Mu(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (el === 2 || el === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Fn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || ja(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Fn(a), li(e))) {
        case 2:
        case 8:
          e = Ef;
          break;
        case 32:
          e = Au;
          break;
        case 268435456:
          e = Af;
          break;
        default:
          e = Au;
      }
      return (
        (a = Br.bind(null, l)),
        (e = $n(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Fn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Br(l, t) {
    if (El !== 0 && El !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (En() && l.callbackNode !== e) return null;
    var a = J;
    return (
      (a = Mu(
        l,
        l === sl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (gr(l, a, t),
          Rr(l, Fl()),
          l.callbackNode != null && l.callbackNode === e
            ? Br.bind(null, l)
            : null)
    );
  }
  function qr(l, t) {
    if (En()) return null;
    gr(l, t, !0);
  }
  function Tm() {
    Rm(function () {
      (ll & 6) !== 0 ? $n(Tf, zm) : Cr();
    });
  }
  function Lc() {
    if (he === 0) {
      var l = fa;
      l === 0 && ((l = _u), (_u <<= 1), (_u & 261888) === 0 && (_u = 256)),
        (he = l);
    }
    return he;
  }
  function Yr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Hu("" + l);
  }
  function Gr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function Em(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Yr((u[Ql] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Ql] || null)
          ? Yr(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new qu("action", "action", null, a, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (he !== 0) {
                  var f = i ? Gr(u, i) : new FormData(u);
                  ic(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? Gr(u, i) : new FormData(u)),
                  ic(
                    e,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Xc = 0; Xc < Ti.length; Xc++) {
    var Qc = Ti[Xc],
      Am = Qc.toLowerCase(),
      _m = Qc[0].toUpperCase() + Qc.slice(1);
    pt(Am, "on" + _m);
  }
  pt(ys, "onAnimationEnd"),
    pt(vs, "onAnimationIteration"),
    pt(gs, "onAnimationStart"),
    pt("dblclick", "onDoubleClick"),
    pt("focusin", "onFocus"),
    pt("focusout", "onBlur"),
    pt(Q0, "onTransitionRun"),
    pt(Z0, "onTransitionStart"),
    pt(V0, "onTransitionCancel"),
    pt(bs, "onTransitionEnd"),
    ke("onMouseEnter", ["mouseout", "mouseover"]),
    ke("onMouseLeave", ["mouseout", "mouseover"]),
    ke("onPointerEnter", ["pointerout", "pointerover"]),
    ke("onPointerLeave", ["pointerout", "pointerover"]),
    _e(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    _e(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _e(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    _e(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    _e(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var du =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Nm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(du)
    );
  function Lr(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              f = c.instance,
              h = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            (n = c), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              Lu(b);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (f = c.instance),
              (h = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            (n = c), (u.currentTarget = h);
            try {
              n(u);
            } catch (b) {
              Lu(b);
            }
            (u.currentTarget = null), (n = f);
          }
      }
    }
  }
  function K(l, t) {
    var e = t[ti];
    e === void 0 && (e = t[ti] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Xr(t, l, 2, !1), e.add(a));
  }
  function Zc(l, t, e) {
    var a = 0;
    t && (a |= 4), Xr(e, l, a, t);
  }
  var Nn = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(l) {
    if (!l[Nn]) {
      (l[Nn] = !0),
        Hf.forEach(function (e) {
          e !== "selectionchange" && (Nm.has(e) || Zc(e, !1, l), Zc(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Nn] || ((t[Nn] = !0), Zc("selectionchange", !1, t));
    }
  }
  function Xr(l, t, e, a) {
    switch (vd(t)) {
      case 2:
        var u = t1;
        break;
      case 8:
        u = e1;
        break;
      default:
        u = nf;
    }
    (e = u.bind(null, t, e, l)),
      (u = void 0),
      !oi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
        ? l.addEventListener(t, e, { passive: u })
        : l.addEventListener(t, e, !1);
  }
  function Kc(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ke(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Kf(function () {
      var h = n,
        b = fi(e),
        z = [];
      l: {
        var v = ps.get(l);
        if (v !== void 0) {
          var g = qu,
            N = l;
          switch (l) {
            case "keypress":
              if (Ru(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = S0;
              break;
            case "focusin":
              (N = "focus"), (g = hi);
              break;
            case "focusout":
              (N = "blur"), (g = hi);
              break;
            case "beforeblur":
            case "afterblur":
              g = hi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = f0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = T0;
              break;
            case ys:
            case vs:
            case gs:
              g = r0;
              break;
            case bs:
              g = A0;
              break;
            case "scroll":
            case "scrollend":
              g = i0;
              break;
            case "wheel":
              g = N0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = m0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = $f;
              break;
            case "toggle":
            case "beforetoggle":
              g = M0;
          }
          var C = (t & 4) !== 0,
            cl = !C && (l === "scroll" || l === "scrollend"),
            d = C ? (v !== null ? v + "Capture" : null) : v;
          C = [];
          for (var s = h, m; s !== null; ) {
            var S = s;
            if (
              ((m = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                m === null ||
                d === null ||
                ((S = Ca(s, d)), S != null && C.push(mu(s, S, m))),
              cl)
            )
              break;
            s = s.return;
          }
          0 < C.length &&
            ((v = new g(v, N, null, e, b)), z.push({ event: v, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            v &&
              e !== ci &&
              (N = e.relatedTarget || e.fromElement) &&
              (Ke(N) || N[Ve]))
          )
            break l;
          if (
            (g || v) &&
            ((v =
              b.window === b
                ? b
                : (v = b.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            g
              ? ((N = e.relatedTarget || e.toElement),
                (g = h),
                (N = N ? Ke(N) : null),
                N !== null &&
                  ((cl = X(N)),
                  (C = N.tag),
                  N !== cl || (C !== 5 && C !== 27 && C !== 6)) &&
                  (N = null))
              : ((g = null), (N = h)),
            g !== N)
          ) {
            if (
              ((C = kf),
              (S = "onMouseLeave"),
              (d = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((C = $f),
                (S = "onPointerLeave"),
                (d = "onPointerEnter"),
                (s = "pointer")),
              (cl = g == null ? v : Ha(g)),
              (m = N == null ? v : Ha(N)),
              (v = new C(S, s + "leave", g, e, b)),
              (v.target = cl),
              (v.relatedTarget = m),
              (S = null),
              Ke(b) === h &&
                ((C = new C(d, s + "enter", N, e, b)),
                (C.target = m),
                (C.relatedTarget = cl),
                (S = C)),
              (cl = S),
              g && N)
            )
              t: {
                for (C = Om, d = g, s = N, m = 0, S = d; S; S = C(S)) m++;
                S = 0;
                for (var H = s; H; H = C(H)) S++;
                for (; 0 < m - S; ) (d = C(d)), m--;
                for (; 0 < S - m; ) (s = C(s)), S--;
                for (; m--; ) {
                  if (d === s || (s !== null && d === s.alternate)) {
                    C = d;
                    break t;
                  }
                  (d = C(d)), (s = C(s));
                }
                C = null;
              }
            else C = null;
            g !== null && Qr(z, v, g, C, !1),
              N !== null && cl !== null && Qr(z, cl, N, C, !0);
          }
        }
        l: {
          if (
            ((v = h ? Ha(h) : window),
            (g = v.nodeName && v.nodeName.toLowerCase()),
            g === "select" || (g === "input" && v.type === "file"))
          )
            var I = us;
          else if (es(v))
            if (ns) I = G0;
            else {
              I = q0;
              var j = B0;
            }
          else
            (g = v.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? h && ii(h.elementType) && (I = us)
                : (I = Y0);
          if (I && (I = I(l, h))) {
            as(z, I, e, b);
            break l;
          }
          j && j(l, v, h),
            l === "focusout" &&
              h &&
              v.type === "number" &&
              h.memoizedProps.value != null &&
              ni(v, "number", v.value);
        }
        switch (((j = h ? Ha(h) : window), l)) {
          case "focusin":
            (es(j) || j.contentEditable === "true") &&
              ((la = j), (Si = h), (Qa = null));
            break;
          case "focusout":
            Qa = Si = la = null;
            break;
          case "mousedown":
            xi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xi = !1), ms(z, e, b);
            break;
          case "selectionchange":
            if (X0) break;
          case "keydown":
          case "keyup":
            ms(z, e, b);
        }
        var Q;
        if (vi)
          l: {
            switch (l) {
              case "compositionstart":
                var w = "onCompositionStart";
                break l;
              case "compositionend":
                w = "onCompositionEnd";
                break l;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break l;
            }
            w = void 0;
          }
        else
          Pe
            ? ls(l, e) && (w = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (w = "onCompositionStart");
        w &&
          (Ff &&
            e.locale !== "ko" &&
            (Pe || w !== "onCompositionStart"
              ? w === "onCompositionEnd" && Pe && (Q = Jf())
              : ((It = b),
                (ri = "value" in It ? It.value : It.textContent),
                (Pe = !0))),
          (j = On(h, w)),
          0 < j.length &&
            ((w = new Wf(w, l, null, e, b)),
            z.push({ event: w, listeners: j }),
            Q ? (w.data = Q) : ((Q = ts(e)), Q !== null && (w.data = Q)))),
          (Q = D0 ? U0(l, e) : H0(l, e)) &&
            ((w = On(h, "onBeforeInput")),
            0 < w.length &&
              ((j = new Wf("onBeforeInput", "beforeinput", null, e, b)),
              z.push({ event: j, listeners: w }),
              (j.data = Q))),
          Em(z, l, h, e, b);
      }
      Lr(z, t);
    });
  }
  function mu(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function On(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ca(l, e)),
          u != null && a.unshift(mu(l, u, n)),
          (u = Ca(l, t)),
          u != null && a.push(mu(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Om(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Qr(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        f = c.alternate,
        h = c.stateNode;
      if (((c = c.tag), f !== null && f === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        h === null ||
        ((f = h),
        u
          ? ((h = Ca(e, n)), h != null && i.unshift(mu(e, h, f)))
          : u || ((h = Ca(e, n)), h != null && i.push(mu(e, h, f)))),
        (e = e.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Mm = /\r\n?/g,
    jm = /\u0000|\uFFFD/g;
  function Zr(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Mm,
        `
`
      )
      .replace(jm, "");
  }
  function Vr(l, t) {
    return (t = Zr(t)), Zr(l) === t;
  }
  function il(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || $e(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            $e(l, "" + a);
        break;
      case "className":
        Du(l, "class", a);
        break;
      case "tabIndex":
        Du(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(l, e, a);
        break;
      case "style":
        Zf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Du(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = Hu("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && il(l, t, "name", u.name, u, null),
                il(l, t, "formEncType", u.formEncType, u, null),
                il(l, t, "formMethod", u.formMethod, u, null),
                il(l, t, "formTarget", u.formTarget, u, null))
              : (il(l, t, "encType", u.encType, u, null),
                il(l, t, "method", u.method, u, null),
                il(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = Hu("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ut);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = Hu("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), ju(l, "popover", a);
        break;
      case "xlinkActuate":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ju(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = u0.get(e) || e), ju(l, e, a));
    }
  }
  function Jc(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Zf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(y(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? $e(l, a)
          : (typeof a == "number" || typeof a == "bigint") && $e(l, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ut);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[Ql] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : ju(l, e, a);
          }
    }
  }
  function Ul(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", l), K("load", l);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, t));
                default:
                  il(l, t, n, i, e, null);
              }
          }
        u && il(l, t, "srcSet", e.srcSet, e, null),
          a && il(l, t, "src", e.src, e, null);
        return;
      case "input":
        K("invalid", l);
        var c = (n = i = u = null),
          f = null,
          h = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var b = e[a];
            if (b != null)
              switch (a) {
                case "name":
                  u = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  f = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(y(137, t));
                  break;
                default:
                  il(l, t, a, b, e, null);
              }
          }
        Gf(l, n, c, f, h, i, u, !1);
        return;
      case "select":
        K("invalid", l), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                il(l, t, u, c, e, null);
            }
        (t = n),
          (e = i),
          (l.multiple = !!a),
          t != null ? We(l, !!a, t, !1) : e != null && We(l, !!a, e, !0);
        return;
      case "textarea":
        K("invalid", l), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(y(91));
                break;
              default:
                il(l, t, i, c, e, null);
            }
        Xf(l, a, u, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) &&
            ((a = e[f]), a != null) &&
            (f === "selected"
              ? (l.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : il(l, t, f, a, e, null));
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < du.length; a++) K(du[a], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in e)
          if (e.hasOwnProperty(h) && ((a = e[h]), a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, t));
              default:
                il(l, t, h, a, e, null);
            }
        return;
      default:
        if (ii(t)) {
          for (b in e)
            e.hasOwnProperty(b) &&
              ((a = e[b]), a !== void 0 && Jc(l, t, b, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && il(l, t, c, a, e, null));
  }
  function Dm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          h = null,
          b = null;
        for (g in e) {
          var z = e[g];
          if (e.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                a.hasOwnProperty(g) || il(l, t, g, null, a, z);
            }
        }
        for (var v in a) {
          var g = a[v];
          if (((z = e[v]), a.hasOwnProperty(v) && (g != null || z != null)))
            switch (v) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                h = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(y(137, t));
                break;
              default:
                g !== z && il(l, t, v, g, a, z);
            }
        }
        ui(l, i, c, f, h, b, n, u);
        return;
      case "select":
        g = i = c = v = null;
        for (n in e)
          if (((f = e[n]), e.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                a.hasOwnProperty(n) || il(l, t, n, null, a, f);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (f = e[u]),
            a.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && il(l, t, u, n, a, f);
            }
        (t = c),
          (e = i),
          (a = g),
          v != null
            ? We(l, !!e, v, !1)
            : !!a != !!e &&
              (t != null ? We(l, !!e, t, !0) : We(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (c in e)
          if (
            ((u = e[c]),
            e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, c, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(y(91));
                break;
              default:
                u !== n && il(l, t, i, u, a, n);
            }
        Lf(l, v, g);
        return;
      case "option":
        for (var N in e)
          (v = e[N]),
            e.hasOwnProperty(N) &&
              v != null &&
              !a.hasOwnProperty(N) &&
              (N === "selected" ? (l.selected = !1) : il(l, t, N, null, a, v));
        for (f in a)
          (v = a[f]),
            (g = e[f]),
            a.hasOwnProperty(f) &&
              v !== g &&
              (v != null || g != null) &&
              (f === "selected"
                ? (l.selected =
                    v && typeof v != "function" && typeof v != "symbol")
                : il(l, t, f, v, a, g));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var C in e)
          (v = e[C]),
            e.hasOwnProperty(C) &&
              v != null &&
              !a.hasOwnProperty(C) &&
              il(l, t, C, null, a, v);
        for (h in a)
          if (
            ((v = a[h]),
            (g = e[h]),
            a.hasOwnProperty(h) && v !== g && (v != null || g != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(y(137, t));
                break;
              default:
                il(l, t, h, v, a, g);
            }
        return;
      default:
        if (ii(t)) {
          for (var cl in e)
            (v = e[cl]),
              e.hasOwnProperty(cl) &&
                v !== void 0 &&
                !a.hasOwnProperty(cl) &&
                Jc(l, t, cl, void 0, a, v);
          for (b in a)
            (v = a[b]),
              (g = e[b]),
              !a.hasOwnProperty(b) ||
                v === g ||
                (v === void 0 && g === void 0) ||
                Jc(l, t, b, v, a, g);
          return;
        }
    }
    for (var d in e)
      (v = e[d]),
        e.hasOwnProperty(d) &&
          v != null &&
          !a.hasOwnProperty(d) &&
          il(l, t, d, null, a, v);
    for (z in a)
      (v = a[z]),
        (g = e[z]),
        !a.hasOwnProperty(z) ||
          v === g ||
          (v == null && g == null) ||
          il(l, t, z, v, a, g);
  }
  function Kr(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Um() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Kr(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a],
              h = f.startTime;
            if (h > c) break;
            var b = f.transferSize,
              z = f.initiatorType;
            b &&
              Kr(z) &&
              ((f = f.responseEnd), (i += b * (f < c ? 1 : (c - h) / (f - h))));
          }
          if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var wc = null,
    kc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Jr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wr(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Wc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $c = null;
  function Hm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === $c
        ? !1
        : (($c = l), !0)
      : (($c = null), !1);
  }
  var kr = typeof setTimeout == "function" ? setTimeout : void 0,
    Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wr = typeof Promise == "function" ? Promise : void 0,
    Rm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wr < "u"
        ? function (l) {
            return Wr.resolve(null).then(l).catch(Bm);
          }
        : kr;
  function Bm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ye(l) {
    return l === "head";
  }
  function $r(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            l.removeChild(u), Na(t);
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") hu(l.ownerDocument.documentElement);
        else if (e === "head") {
          (e = l.ownerDocument.head), hu(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            n[Ua] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i);
          }
        } else e === "body" && hu(l.ownerDocument.body);
      e = u;
    } while (e);
    Na(t);
  }
  function Fr(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function Fc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(e), ei(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function qm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ua])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = vt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ym(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = vt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ir(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = vt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ic(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Pc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Gm(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function vt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var lf = null;
  function Pr(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return vt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ld(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function td(l, t, e) {
    switch (((t = Mn(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(y(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(y(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(y(454));
        return l;
      default:
        throw Error(y(451));
    }
  }
  function hu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ei(l);
  }
  var gt = new Map(),
    ed = new Set();
  function jn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var kt = A.d;
  A.d = { f: Lm, r: Xm, D: Qm, C: Zm, L: Vm, m: Km, X: wm, S: Jm, M: km };
  function Lm() {
    var l = kt.f(),
      t = xn();
    return l || t;
  }
  function Xm(l) {
    var t = Je(l);
    t !== null && t.tag === 5 && t.type === "form" ? po(t) : kt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function ad(l, t, e) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var u = st(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        ed.has(u) ||
          (ed.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            Ul(t, "link", l),
            _l(t),
            a.head.appendChild(t)));
    }
  }
  function Qm(l) {
    kt.D(l), ad("dns-prefetch", l, null);
  }
  function Zm(l, t) {
    kt.C(l, t), ad("preconnect", l, t);
  }
  function Vm(l, t, e) {
    kt.L(l, t, e);
    var a = Ea;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + st(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + st(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + st(e.imageSizes) + '"]'))
        : (u += '[href="' + st(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = _a(l);
      }
      gt.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        gt.set(n, l),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(yu(n))) ||
          (t === "script" && a.querySelector(vu(n))) ||
          ((t = a.createElement("link")),
          Ul(t, "link", l),
          _l(t),
          a.head.appendChild(t)));
    }
  }
  function Km(l, t) {
    kt.m(l, t);
    var e = Ea;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + st(a) + '"][href="' + st(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _a(l);
      }
      if (
        !gt.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        gt.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(vu(n))) return;
        }
        (a = e.createElement("link")),
          Ul(a, "link", l),
          _l(a),
          e.head.appendChild(a);
      }
    }
  }
  function Jm(l, t, e) {
    kt.S(l, t, e);
    var a = Ea;
    if (a && l) {
      var u = we(a).hoistableStyles,
        n = Aa(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(yu(n)))) c.loading = 5;
        else {
          (l = R({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = gt.get(n)) && tf(l, e);
          var f = (i = a.createElement("link"));
          _l(f),
            Ul(f, "link", l),
            (f._p = new Promise(function (h, b) {
              (f.onload = h), (f.onerror = b);
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Dn(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i);
      }
    }
  }
  function wm(l, t) {
    kt.X(l, t);
    var e = Ea;
    if (e && l) {
      var a = we(e).hoistableScripts,
        u = _a(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(vu(u))),
        n ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = gt.get(u)) && ef(l, t),
          (n = e.createElement("script")),
          _l(n),
          Ul(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function km(l, t) {
    kt.M(l, t);
    var e = Ea;
    if (e && l) {
      var a = we(e).hoistableScripts,
        u = _a(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(vu(u))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = gt.get(u)) && ef(l, t),
          (n = e.createElement("script")),
          _l(n),
          Ul(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function ud(l, t, e, a) {
    var u = (u = Z.current) ? jn(u) : null;
    if (!u) throw Error(y(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = Aa(e.href)),
            (e = we(u).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = Aa(e.href);
          var n = we(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              gt.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                gt.set(l, e),
                n || Wm(u, l, e, i.state))),
            t && a === null)
          )
            throw Error(y(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _a(e)),
              (e = we(u).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + st(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function nd(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Wm(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ul(t, "link", e),
        _l(t),
        l.head.appendChild(t));
  }
  function _a(l) {
    return '[src="' + st(l) + '"]';
  }
  function vu(l) {
    return "script[async]" + l;
  }
  function id(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + st(e.href) + '"]');
          if (a) return (t.instance = a), _l(a), a;
          var u = R({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            _l(a),
            Ul(a, "style", u),
            Dn(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = Aa(e.href);
          var n = l.querySelector(yu(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), _l(n), n;
          (a = nd(e)),
            (u = gt.get(u)) && tf(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n);
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              (i.onload = c), (i.onerror = f);
            })),
            Ul(n, "link", a),
            (t.state.loading |= 4),
            Dn(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = _a(e.src)),
            (u = l.querySelector(vu(n)))
              ? ((t.instance = u), _l(u), u)
              : ((a = e),
                (u = gt.get(n)) && ((a = R({}, e)), ef(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                _l(u),
                Ul(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Dn(a, e.precedence, l));
    return t.instance;
  }
  function Dn(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function tf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function ef(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function cd(l, t, e) {
    if (Un === null) {
      var a = new Map(),
        u = (Un = new Map());
      u.set(e, a);
    } else (u = Un), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ua] ||
          n[Ol] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function fd(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function $m(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function sd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Fm(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Aa(a.href),
          n = t.querySelector(yu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = n),
            _l(n);
          return;
        }
        (n = t.ownerDocument || t),
          (a = nd(a)),
          (u = gt.get(u)) && tf(a, u),
          (n = n.createElement("link")),
          _l(n);
        var i = n;
        (i._p = new Promise(function (c, f) {
          (i.onload = c), (i.onerror = f);
        })),
          Ul(n, "link", a),
          (e.instance = n);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Hn.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  var af = 0;
  function Im(l, t) {
    return (
      l.stylesheets && l.count === 0 && Rn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, 6e4 + t);
            0 < l.imgBytes && af === 0 && (af = 62500 * Um());
            var u = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend))
              ) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, (l.imgBytes > af ? 50 : 800) + t);
            return (
              (l.unsuspend = e),
              function () {
                (l.unsuspend = null), clearTimeout(a), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Cn = null;
  function Rn(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Cn = new Map()),
        t.forEach(Pm, l),
        (Cn = null),
        Hn.call(l));
  }
  function Pm(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Cn.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Cn.set(l, e);
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Hn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var gu = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function l1(l, t, e, a, u, n, i, c, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = In(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = In(0)),
      (this.hiddenUpdates = In(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function od(l, t, e, a, u, n, i, c, f, h, b, z) {
    return (
      (l = new l1(l, t, e, i, f, h, b, z, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = tt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Bi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Li(n),
      l
    );
  }
  function rd(l) {
    return l ? ((l = aa), l) : aa;
  }
  function dd(l, t, e, a, u, n) {
    (u = rd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ue(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = ne(l, a, t)),
      e !== null && (kl(e, l, t), Wa(e, l, t));
  }
  function md(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function uf(l, t) {
    md(l, t), (l = l.alternate) && md(l, t);
  }
  function hd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = je(l, 67108864);
      t !== null && kl(t, l, 67108864), uf(l, 67108864);
    }
  }
  function yd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = it();
      t = Pn(t);
      var e = je(l, t);
      e !== null && kl(e, l, t), uf(l, t);
    }
  }
  var Bn = !0;
  function t1(l, t, e, a) {
    var u = p.T;
    p.T = null;
    var n = A.p;
    try {
      (A.p = 2), nf(l, t, e, a);
    } finally {
      (A.p = n), (p.T = u);
    }
  }
  function e1(l, t, e, a) {
    var u = p.T;
    p.T = null;
    var n = A.p;
    try {
      (A.p = 8), nf(l, t, e, a);
    } finally {
      (A.p = n), (p.T = u);
    }
  }
  function nf(l, t, e, a) {
    if (Bn) {
      var u = cf(a);
      if (u === null) Kc(l, t, a, qn, e), gd(l, a);
      else if (u1(u, l, t, e, a)) a.stopPropagation();
      else if ((gd(l, a), t & 4 && -1 < a1.indexOf(l))) {
        for (; u !== null; ) {
          var n = Je(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ae(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Pl(i));
                      (c.entanglements[1] |= f), (i &= ~f);
                    }
                    Ot(n), (ll & 6) === 0 && ((pn = Fl() + 500), ru(0));
                  }
                }
                break;
              case 31:
              case 13:
                (c = je(n, 2)), c !== null && kl(c, n, 2), xn(), uf(n, 2);
            }
          if (((n = cf(a)), n === null && Kc(l, t, a, qn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Kc(l, t, a, null, e);
    }
  }
  function cf(l) {
    return (l = fi(l)), ff(l);
  }
  var qn = null;
  function ff(l) {
    if (((qn = null), (l = Ke(l)), l !== null)) {
      var t = X(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = hl(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = Al(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (qn = l), null;
  }
  function vd(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qd()) {
          case Tf:
            return 2;
          case Ef:
            return 8;
          case Au:
          case Zd:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sf = !1,
    ve = null,
    ge = null,
    be = null,
    bu = new Map(),
    pu = new Map(),
    pe = [],
    a1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function gd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ve = null;
        break;
      case "dragenter":
      case "dragleave":
        ge = null;
        break;
      case "mouseover":
      case "mouseout":
        be = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(t.pointerId);
    }
  }
  function Su(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Je(t)), t !== null && hd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function u1(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return (ve = Su(ve, l, t, e, a, u)), !0;
      case "dragenter":
        return (ge = Su(ge, l, t, e, a, u)), !0;
      case "mouseover":
        return (be = Su(be, l, t, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return bu.set(n, Su(bu.get(n) || null, l, t, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), pu.set(n, Su(pu.get(n) || null, l, t, e, a, u)), !0
        );
    }
    return !1;
  }
  function bd(l) {
    var t = Ke(l.target);
    if (t !== null) {
      var e = X(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = hl(e)), t !== null)) {
            (l.blockedOn = t),
              Df(l.priority, function () {
                yd(e);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = Al(e)), t !== null)) {
            (l.blockedOn = t),
              Df(l.priority, function () {
                yd(e);
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = cf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (ci = a), e.target.dispatchEvent(a), (ci = null);
      } else return (t = Je(e)), t !== null && hd(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function pd(l, t, e) {
    Yn(l) && e.delete(t);
  }
  function n1() {
    (sf = !1),
      ve !== null && Yn(ve) && (ve = null),
      ge !== null && Yn(ge) && (ge = null),
      be !== null && Yn(be) && (be = null),
      bu.forEach(pd),
      pu.forEach(pd);
  }
  function Gn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      sf ||
        ((sf = !0),
        x.unstable_scheduleCallback(x.unstable_NormalPriority, n1)));
  }
  var Ln = null;
  function Sd(l) {
    Ln !== l &&
      ((Ln = l),
      x.unstable_scheduleCallback(x.unstable_NormalPriority, function () {
        Ln === l && (Ln = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (ff(a || e) === null) continue;
            break;
          }
          var n = Je(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ic(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Na(l) {
    function t(f) {
      return Gn(f, l);
    }
    ve !== null && Gn(ve, l),
      ge !== null && Gn(ge, l),
      be !== null && Gn(be, l),
      bu.forEach(t),
      pu.forEach(t);
    for (var e = 0; e < pe.length; e++) {
      var a = pe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < pe.length && ((e = pe[0]), e.blockedOn === null); )
      bd(e), e.blockedOn === null && pe.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Ql] || null;
        if (typeof n == "function") i || Sd(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Ql] || null))) c = i.formAction;
            else if (ff(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            Sd(e);
        }
      }
  }
  function xd() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      u !== null && (u(), (u = null)), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function of(l) {
    this._internalRoot = l;
  }
  (Xn.prototype.render = of.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var e = t.current,
        a = it();
      dd(e, a, l, t, null, null);
    }),
    (Xn.prototype.unmount = of.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          dd(l.current, 2, null, l, null, null), xn(), (t[Ve] = null);
        }
      });
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = jf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < pe.length && t !== 0 && t < pe[e].priority; e++);
      pe.splice(e, 0, l), e === 0 && bd(l);
    }
  };
  var zd = O.version;
  if (zd !== "19.2.4") throw Error(y(527, zd, "19.2.4"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(y(188))
        : ((l = Object.keys(l).join(",")), Error(y(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? F(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var i1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: p,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        (Ma = Qn.inject(i1)), (Il = Qn);
      } catch {}
  }
  return (
    (zu.createRoot = function (l, t) {
      if (!q(l)) throw Error(y(299));
      var e = !1,
        a = "",
        u = Mo,
        n = jo,
        i = Do;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = od(l, 1, !1, null, null, e, a, null, u, n, i, xd)),
        (l[Ve] = t.current),
        Vc(l),
        new of(t)
      );
    }),
    (zu.hydrateRoot = function (l, t, e) {
      if (!q(l)) throw Error(y(299));
      var a = !1,
        u = "",
        n = Mo,
        i = jo,
        c = Do,
        f = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.formState !== void 0 && (f = e.formState)),
        (t = od(l, 1, !0, t, e ?? null, a, u, f, n, i, c, xd)),
        (t.context = rd(null)),
        (e = t.current),
        (a = it()),
        (a = Pn(a)),
        (u = ue(a)),
        (u.callback = null),
        ne(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Da(t, e),
        Ot(t),
        (l[Ve] = t.current),
        Vc(l),
        new Xn(t)
      );
    }),
    (zu.version = "19.2.4"),
    zu
  );
}
var Ud;
function v1() {
  if (Ud) return mf.exports;
  Ud = 1;
  function x() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (O) {
        console.error(O);
      }
  }
  return x(), (mf.exports = y1()), mf.exports;
}
var g1 = v1();
const Cd = (...x) =>
  x
    .filter((O, D, y) => !!O && O.trim() !== "" && y.indexOf(O) === D)
    .join(" ")
    .trim();
const b1 = (x) => x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const p1 = (x) =>
  x.replace(/^([A-Z])|[\s-_]+(\w)/g, (O, D, y) =>
    y ? y.toUpperCase() : D.toLowerCase()
  );
const Hd = (x) => {
  const O = p1(x);
  return O.charAt(0).toUpperCase() + O.slice(1);
};
var S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const x1 = (x) => {
  for (const O in x)
    if (O.startsWith("aria-") || O === "role" || O === "title") return !0;
  return !1;
};
const z1 = xe.forwardRef(
  (
    {
      color: x = "currentColor",
      size: O = 24,
      strokeWidth: D = 2,
      absoluteStrokeWidth: y,
      className: q = "",
      children: X,
      iconNode: hl,
      ...Al
    },
    U
  ) =>
    xe.createElement(
      "svg",
      {
        ref: U,
        ...S1,
        width: O,
        height: O,
        stroke: x,
        strokeWidth: y ? (Number(D) * 24) / Number(O) : D,
        className: Cd("lucide", q),
        ...(!X && !x1(Al) && { "aria-hidden": "true" }),
        ...Al,
      },
      [
        ...hl.map(([E, F]) => xe.createElement(E, F)),
        ...(Array.isArray(X) ? X : [X]),
      ]
    )
);
const ze = (x, O) => {
  const D = xe.forwardRef(({ className: y, ...q }, X) =>
    xe.createElement(z1, {
      ref: X,
      iconNode: O,
      className: Cd(`lucide-${b1(Hd(x))}`, `lucide-${x}`, y),
      ...q,
    })
  );
  return (D.displayName = Hd(x)), D;
};
const T1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  E1 = ze("check", T1);
const A1 = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  _1 = ze("copy", A1);
const N1 = [
    [
      "path",
      {
        d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",
        key: "1wtuz0",
      },
    ],
    ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16", key: "e09ifn" }],
    ["path", { d: "M2 21h13", key: "1x0fut" }],
    ["path", { d: "M3 9h11", key: "1p7c0w" }],
  ],
  O1 = ze("fuel", N1);
const M1 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  j1 = ze("menu", M1);
const D1 = [
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
        key: "u4xsad",
      },
    ],
    [
      "path",
      {
        d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
        key: "676m9",
      },
    ],
    [
      "path",
      { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" },
    ],
  ],
  U1 = ze("rocket", D1);
const H1 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  C1 = ze("shield", H1);
const R1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  B1 = ze("target", R1);
const q1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Y1 = ze("x", q1),
  $ = {
    nav: {
      brand: "$OILINU",
      links: ["About", "How to Buy", "Community"],
      cta: "Buy $OILINU",
    },
    hero: {
      heading: `OIL INU`,
      ticker: "$OILINU",
      subheading:
        "The war-chest memecoin fueling the frontlines of Ethereum. Drill deep. Stack $OILINU. Deploy capital like it's an airstrike.",
      cta_jupiter: "Buy on Uniswap",
      cta_phantom: "Buy on Phantom",
    },
    ticker: {
      items: [
        "DRILL BABY DRILL",
        "$OILINU",
        "PUMP THE RESERVES",
        "SECURE THE BAG",
        "NO RETREAT",
        "FILL THE BARREL",
        "WARTIME ECONOMY",
        "SEND IT",
      ],
    },
    about: {
      label: "INTEL BRIEFING",
      heading: "WHAT IS $OILINU?",
      paragraphs: [
        "Oil powers the world — economies, industries, and global growth.",
        "Oil Inu brings that energy on-chain, driven by community and conviction.",
        "Built in the trenches. Powered by believers",
      ],
      stats: [
        { value: "$OILINU", label: "Ticker" },
        { value: "ETH", label: "Network" },
        { value: "0/0", label: "TAX" },
      ],
    },
    features: {
      label: "ARSENAL",
      heading: "TACTICAL ADVANTAGES",
      items: [
        {
          icon: "shield",
          title: "Fortified Contract",
          description:
            "Deployed on Ethereum. This operation is locked tighter than a military bunker.",
        },
        {
          icon: "target",
          title: "Meme OILINU",
          description:
            "Armed with the dankest memes on Ethereum. The OIL INU never sleeps.",
        },
        {
          icon: "fuel",
          title: "Fueled By Community",
          description:
            "The $OILINU is an unstoppable force. Diamond-hand soldiers who never break rank.",
        },
        {
          icon: "rocket",
          title: "Explosive Growth",
          description:
            "Like a missile locked on target - $OILINU is programmed for one direction only: UP.",
        },
      ],
    },
    howToBuy: {
      label: "FIELD MANUAL",
      heading: "HOW TO BUY",
      description:
        "Enlist in the $OILINU in three simple steps. No prior combat experience required.",
      steps: [
        {
          step: "01",
          title: "Create a Wallet",
          description:
            "Download Metamask or your preferred Ethereum wallet. Secure your keys like classified intel.",
        },
        {
          step: "02",
          title: "Get ETH",
          description:
            "Fund your wallet with ETH from any exchange. This is your ammunition.",
        },
        {
          step: "03",
          title: "Swap for $OILINU",
          description:
            "Head to Metamask, paste the $OILINU contract address, and swap your ETH for $OILINU.",
        },
      ],
    },
    community: {
      label: "JOIN THE COMMUNITY",
      heading: "ENLIST NOW",
      description:
        "The $OILINU is growing. Join our Telegram and Twitter to stay on the frontlines and never miss a tactical update.",
      telegram_label: "Telegram HQ",
      telegram_description:
        "Join the command center. Real-time intel, alpha, and camaraderie.",
      twitter_label: "X / Twitter",
      twitter_description: "Follow for tactical updates, memes, and war cries.",
    },
    cta: {
      heading: "READY TO DRILL?",
      subheading:
        "Secure your $OILINU before the next airstrike.",
    },
    footer: {
      copyright: "OIL INU. All barrels reserved.",
      tagline: "The OIL INU",
    },
  },
  Rd = "https://t.me/oilinuChat",
  Bd = "https://x.com/oilinudoge_X",
  Zn = "0x3b4255b55a85Cfc3CAaf4611CEd7fa4111B26997",
  Vn = `https://trade.phantom.com/token/${Zn}`,
  Tu = `https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x3b4255b55a85Cfc3CAaf4611CEd7fa4111B26997`,
  gf = "https://oilscann.info";
function G1() {
  const [x, O] = xe.useState(!1);
  return r.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/20",
    children: [
      r.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: r.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [
            r.jsxs("a", {
              href: "#",
              className: "flex items-center gap-2",
              children: [
                r.jsx("img", {
                  src: "/oillogo.png",
                  alt: "$OIL",
                  className: "h-10 w-10 object-contain rounded-full border-2 border-gold",
                }),
                r.jsx("span", {
                  className: "font-display text-2xl text-gold tracking-wider",
                  children: $.nav.brand,
                }),
              ],
            }),
            r.jsxs("div", {
              className: "hidden md:flex items-center gap-8",
              children: [
                $.nav.links.map((D) =>
                  r.jsx(
                    "a",
                    {
                      href: `#${D.toLowerCase().replace(/\s+/g, "-")}`,
                      className:
                        "font-heading text-sm uppercase tracking-widest text-grey-light hover:text-gold transition-colors duration-300",
                      children: D,
                    },
                    D
                  )
                ),
                r.jsx("a", {
                  href: Tu,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "ml-2 px-5 py-2 border border-gold text-gold font-heading font-bold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors duration-300",
                  children: $.nav.cta,
                }),
                
              ],
            }),
            r.jsx("button", {
              onClick: () => O(!x),
              className: "md:hidden text-gold",
              "aria-label": "Toggle menu",
              children: x ? r.jsx(Y1, { size: 24 }) : r.jsx(j1, { size: 24 }),
            }),
          ],
        }),
      }),
      x &&
        r.jsx("div", {
          className: "md:hidden bg-dark border-t border-gold/20",
          children: r.jsxs("div", {
            className: "px-4 py-4 space-y-3",
            children: [
              $.nav.links.map((D) =>
                r.jsx(
                  "a",
                  {
                    href: `#${D.toLowerCase().replace(/\s+/g, "-")}`,
                    onClick: () => O(!1),
                    className:
                      "block font-heading text-sm uppercase tracking-widest text-grey-light hover:text-gold transition-colors",
                    children: D,
                  },
                  D
                )
              ),
              r.jsx("a", {
                href: Tu,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "block mt-3 px-5 py-2 border border-gold text-gold font-heading font-bold text-sm uppercase tracking-wider text-center hover:bg-gold/10 transition-colors",
                children: $.nav.cta,
              }),
              
            ],
          }),
        }),
    ],
  });
}
function qd({ size: x = 24, className: O = "" }) {
  return r.jsx("svg", {
    width: x,
    height: x,
    viewBox: "0 0 448 512",
    fill: "currentColor",
    className: O,
    children: r.jsx("path", {
      d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
    }),
  });
}
function Yd({ size: x = 24, className: O = "" }) {
  return r.jsx("svg", {
    width: x,
    height: x,
    viewBox: "0 0 1200 1227",
    fill: "currentColor",
    className: O,
    children: r.jsx("path", {
      d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
    }),
  });
}
function pf({ size: x = 24, className: O = "" }) {
  const D = `jup-grad-${x}`;
  return r.jsxs("svg", {
    width: x,
    height: x,
    viewBox: "0 0 33 32",
    fill: "none",
    className: O,
    children: [
      r.jsx("defs", {
        children: r.jsxs("linearGradient", {
          id: D,
          x1: "21.5",
          x2: "6.667",
          y1: "6.5",
          y2: "32",
          gradientUnits: "userSpaceOnUse",
          children: [
            r.jsx("stop", { offset: "0", stopColor: "#C7F284" }),
            r.jsx("stop", { offset: "1", stopColor: "#00BEF0" }),
          ],
        }),
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M3.09 25.167a16.433 16.433 0 0 0 11.621 6.75c-1.185-1.784-2.907-3.424-5.057-4.673-2.15-1.25-4.428-1.931-6.563-2.077Z",
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M12.543 22.27C8.4 19.864 3.916 19.25.708 20.334c.31 1.024.718 2.015 1.22 2.96 2.787-.065 5.83.692 8.663 2.337 2.832 1.645 4.998 3.915 6.323 6.369 1.07-.033 2.134-.17 3.177-.407-.648-3.323-3.406-6.915-7.548-9.323Z",
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M32.285 12.5A16.42 16.42 0 0 0 11.846.627c3.546.434 7.48 1.765 11.34 4.007 3.86 2.242 6.967 5.001 9.1 7.868Z",
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M27.127 20.358c-1.815-3.013-4.923-5.9-8.753-8.124-3.83-2.225-7.875-3.495-11.389-3.58-3.091-.072-5.411.826-6.363 2.466l-.02.028c-.085.308-.159.616-.226.925 1.33-.525 2.87-.817 4.584-.85 3.81-.071 8.073 1.147 12.008 3.433 3.935 2.286 7.108 5.388 8.932 8.732.818 1.506 1.329 2.99 1.53 4.407.236-.21.467-.428.691-.654l.016-.032c.952-1.641.584-4.101-1.01-6.75Z",
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M15.46 17.248C9.598 13.842 3.117 13.309 0 15.685c.006.745.063 1.488.17 2.224a12.904 12.904 0 0 1 2.817-.522c3.483-.262 7.322.709 10.806 2.734 3.484 2.025 6.23 4.88 7.728 8.033.414.864.73 1.771.941 2.706a16.43 16.43 0 0 0 2.017-.953c.522-3.886-3.152-9.251-9.018-12.659Z",
      }),
      r.jsx("path", {
        fill: `url(#${D})`,
        d: "M30.143 15.314c-1.835-3.01-4.97-5.904-8.827-8.144-3.857-2.239-7.918-3.53-11.443-3.633-2.688-.078-4.77.574-5.848 1.804 4.48-.76 10.392.517 16.121 3.845 5.73 3.329 9.767 7.832 11.326 12.1.534-1.545.07-3.676-1.329-5.972Z",
      }),
    ],
  });
}
function Kn({ size: x = 24, className: O = "" }) {
  return r.jsx("svg", {
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: O,
    children: r.jsx("path", {
      d: "M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516 1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006 2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8 9.752 4.8 3 12.154 3 16.905 3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141.557 0 .947.47.947 1.14 0 .672-.39 1.155-.947 1.155-.57 0-.96-.483-.96-1.154",
    }),
  });
}
function Sf({
  src: x,
  alt: O,
  badge: D = "Classified",
  className: y = "",
  glow: q = !0,
  square: X = !1,
}) {
  return r.jsxs("div", {
    className: `relative group ${y}`,
    children: [
      q &&
        r.jsx("div", {
          className:
            "absolute -inset-4 bg-gold/10 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700",
        }),
      r.jsxs("div", {
        className: `relative border border-gold/20 p-2 bg-dark/50 backdrop-blur-sm ${
          X ? "aspect-square" : ""
        }`,
        children: [
          r.jsx("div", {
            className:
              "absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold",
          }),
          r.jsx("div", {
            className:
              "absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-gold",
          }),
          r.jsx("div", {
            className:
              "absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-gold",
          }),
          r.jsx("div", {
            className:
              "absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold",
          }),
          r.jsx("img", {
            src: x,
            alt: O,
            className: `relative w-full h-full ${
              X ? "object-cover" : "object-contain"
            }`,
          }),
          r.jsx("div", {
            className: "absolute inset-0 pointer-events-none opacity-[0.03]",
            style: {
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,168,76,0.4) 2px, rgba(201,168,76,0.4) 3px)",
            },
          }),
        ],
      }),
      r.jsx("div", {
        className:
          "absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold/90 px-4 py-0.5 whitespace-nowrap",
        children: r.jsx("span", {
          className:
            "font-heading text-[10px] uppercase tracking-[0.25em] text-black font-bold",
          children: D,
        }),
      }),
    ],
  });
}
function L1() {
  const [x, O] = xe.useState(!1),
    D = () => {
      navigator.clipboard.writeText(Zn), O(!0), setTimeout(() => O(!1), 2e3);
    };
  return r.jsxs("section", {
    className:
      "relative min-h-screen flex items-center justify-center pt-28 pb-12 sm:pt-16 overflow-hidden",
    children: [
      r.jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
      r.jsxs("div", {
        className: "absolute inset-0 opacity-10",
        children: [
          r.jsx("div", {
            className:
              "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl",
            style: {
              background:
                "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
            },
          }),
          r.jsx("div", {
            className:
              "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl",
            style: {
              background:
                "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
            },
          }),
        ],
      }),
      r.jsx("div", {
        className: "absolute inset-0 overflow-hidden opacity-5",
        children: Array.from({ length: 10 }).map((y, q) =>
          r.jsx(
            "div",
            {
              className: "absolute h-px bg-gold",
              style: {
                width: "200%",
                top: `${q * 10}%`,
                left: "-50%",
                transform: "rotate(-15deg)",
              },
            },
            q
          )
        ),
      }),
      r.jsx("div", {
        className:
          "relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full",
        children: r.jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
          children: [
            r.jsxs("div", {
              className:
                "flex-1 text-center lg:text-left animate-slide-up min-w-0 w-full",
              children: [
                r.jsx("img", {
                  src: "/oillogo.png",
                  alt: "Trump Oil Reserve Logo",
                  className:
                    "h-28 sm:h-36 w-auto object-contain mx-auto lg:mx-0 mb-6 rounded-full border-4 border-gold",
                }),
                r.jsx("h1", {
                  className:
                    "font-display text-5xl sm:text-6xl lg:text-8xl leading-none tracking-wide mb-4 whitespace-pre-line",
                  children: r.jsx("span", {
                    className: "text-gradient-gold",
                    children: $.hero.heading,
                  }),
                }),
                r.jsx("div", {
                  className:
                    "inline-block px-3 py-1 bg-gold text-black font-display text-2xl sm:text-3xl tracking-wider mb-6",
                  children: $.hero.ticker,
                }),
                r.jsx("p", {
                  className:
                    "text-grey-light text-base sm:text-xl mx-auto lg:mx-0 mb-8 leading-relaxed",
                  children: $.hero.subheading,
                }),
                r.jsxs("div", {
                  className: "inline-flex flex-col gap-4 mb-8",
                  children: [
                    
                    r.jsxs("div", {
                      className: "flex flex-col sm:flex-row gap-4",
                      children: [
                        r.jsxs("a", {
                          href: Tu,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "group flex items-center justify-center gap-3 px-5 py-3 sm:px-8 sm:py-4 border-2 border-[#C7F284] text-[#C7F284] font-heading font-bold text-sm sm:text-lg uppercase tracking-wider hover:bg-[#C7F284]/10 transition-all duration-300",
                          children: [
                            $.hero.cta_jupiter,
                          ],
                        }),
                        
                      ],
                    }),
                  ],
                }),
                r.jsx("div", {
                  className:
                    "w-full max-w-xl mx-auto lg:mx-0 bg-dark/80 border border-gold/20 p-3 sm:p-4 overflow-hidden",
                  children: r.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      r.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          r.jsx("span", {
                            className:
                              "font-heading text-[10px] uppercase tracking-[0.3em] text-gold block mb-1",
                            children: "Contract Address",
                          }),
                          r.jsx("p", {
                            className:
                              "font-mono text-xs text-grey-light truncate",
                            children: Zn,
                          }),
                        ],
                      }),
                      r.jsxs("button", {
                        onClick: D,
                        className:
                          "flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/30 text-gold font-heading text-[10px] uppercase tracking-wider hover:bg-gold/20 transition-colors shrink-0 cursor-pointer",
                        children: [
                          x ? r.jsx(E1, { size: 12 }) : r.jsx(_1, { size: 12 }),
                          x ? "Copied!" : "Copy CA",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            r.jsx("div", {
              className: "flex-1 flex justify-center animate-float",
              children: r.jsx(Sf, {
                src: "/hero_image.jpg",
                alt: "Trump Oil Reserve",
                badge: "OIL INU",
                square: !0,
                className: "w-full max-w-lg lg:max-w-xl",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function X1() {
  const x = $.ticker.items,
    O = [...x, ...x];
  return r.jsx("div", {
    className: "bg-gold py-3 mt-8 sm:mt-0 overflow-hidden",
    children: r.jsx("div", {
      className: "animate-marquee flex whitespace-nowrap",
      children: O.map((D, y) =>
        r.jsxs(
          "span",
          {
            className:
              "inline-flex items-center gap-4 mx-6 font-heading text-sm font-bold uppercase tracking-widest text-black",
            children: [
              r.jsx("span", { className: "w-2 h-2 bg-black rotate-45" }),
              D,
            ],
          },
          y
        )
      ),
    }),
  });
}
function Q1() {
  return r.jsxs("section", {
    id: "about",
    className: "py-24 bg-dark relative",
    children: [
      r.jsx("div", {
        className:
          "absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20",
      }),
      r.jsx("div", {
        className:
          "absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20",
      }),
      r.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: r.jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-16",
          children: [
            r.jsx("div", {
              className: "flex-1 flex justify-center",
              children: r.jsx(Sf, {
                src: "/what_is_oil.jpg",
                alt: "What is $OIL",
                badge: "STRONG OIL INU",
                square: !0,
                className: "w-full max-w-lg",
              }),
            }),
            r.jsxs("div", {
              className: "flex-1 space-y-6",
              children: [
                r.jsx("span", {
                  className:
                    "inline-block font-heading text-xs uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1",
                  children: $.about.label,
                }),
                r.jsx("h2", {
                  className:
                    "font-display text-4xl sm:text-5xl text-gradient-gold",
                  children: $.about.heading,
                }),
                $.about.paragraphs.map((x, O) =>
                  r.jsx(
                    "p",
                    {
                      className: "text-grey-light leading-relaxed text-lg",
                      children: x,
                    },
                    O
                  )
                ),
                r.jsx("div", {
                  className: "grid grid-cols-3 gap-4 pt-6",
                  children: $.about.stats.map((x) =>
                    r.jsxs(
                      "div",
                      {
                        className:
                          "bg-grey/30 border border-gold/10 p-4 text-center",
                        children: [
                          r.jsx("div", {
                            className: "font-display text-3xl text-gold",
                            children: x.value,
                          }),
                          r.jsx("div", {
                            className:
                              "font-heading text-xs uppercase tracking-widest text-grey-light mt-1",
                            children: x.label,
                          }),
                        ],
                      },
                      x.label
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Z1 = {
  shield: r.jsx(C1, { size: 32 }),
  target: r.jsx(B1, { size: 32 }),
  fuel: r.jsx(O1, { size: 32 }),
  rocket: r.jsx(U1, { size: 32 }),
};
function V1() {
  return r.jsx("section", {
    className: "py-24 bg-black relative overflow-hidden",
    children: r.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        r.jsxs("div", {
          className: "text-center mb-16",
          children: [
            r.jsx("span", {
              className:
                "inline-block font-heading text-xs uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1 mb-4",
              children: $.features.label,
            }),
            r.jsx("h2", {
              className: "font-display text-4xl sm:text-5xl text-gradient-gold",
              children: $.features.heading,
            }),
          ],
        }),
        r.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: $.features.items.map((x) =>
            r.jsxs(
              "div",
              {
                className:
                  "group relative bg-dark border border-gold/10 p-8 hover:border-gold/40 transition-all duration-500",
                children: [
                  r.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-500",
                  }),
                  r.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-500",
                  }),
                  r.jsx("div", {
                    className:
                      "text-gold mb-5 group-hover:scale-110 transition-transform duration-300",
                    children: Z1[x.icon],
                  }),
                  r.jsx("h3", {
                    className:
                      "font-heading text-xl font-bold uppercase tracking-wider text-white mb-3",
                    children: x.title,
                  }),
                  r.jsx("p", {
                    className: "text-grey-light leading-relaxed text-sm",
                    children: x.description,
                  }),
                ],
              },
              x.title
            )
          ),
        }),
      ],
    }),
  });
}
function K1() {
  return r.jsx("section", {
    id: "how-to-buy",
    className: "py-24 bg-dark relative",
    children: r.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        r.jsxs("div", {
          className: "text-center mb-16",
          children: [
            r.jsx("span", {
              className:
                "inline-block font-heading text-xs uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1 mb-4",
              children: $.howToBuy.label,
            }),
            r.jsx("h2", {
              className:
                "font-display text-4xl sm:text-5xl text-gradient-gold mb-4",
              children: $.howToBuy.heading,
            }),
            r.jsx("p", {
              className: "text-grey-light text-lg max-w-2xl mx-auto",
              children: $.howToBuy.description,
            }),
          ],
        }),
        r.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: $.howToBuy.steps.map((x, O) =>
            r.jsxs(
              "div",
              {
                className:
                  "relative bg-black border border-gold/10 p-8 group hover:border-gold/40 transition-all duration-500",
                children: [
                  r.jsx("div", {
                    className:
                      "font-display text-6xl text-gold/10 absolute top-4 right-6 group-hover:text-gold/20 transition-colors duration-500",
                    children: x.step,
                  }),
                  r.jsx("div", {
                    className:
                      "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/40 via-gold/10 to-transparent",
                  }),
                  r.jsx("h3", {
                    className:
                      "font-heading text-xl font-bold uppercase tracking-wider text-white mb-4 relative",
                    children: x.title,
                  }),
                  r.jsx("p", {
                    className:
                      "text-grey-light leading-relaxed text-sm relative mb-5",
                    children: x.description,
                  }),
                  O === 0 &&
                    r.jsxs("a", {
                      href: "https://metamask.io/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "relative inline-flex items-center gap-2 px-4 py-2 border border-[#ab9ff2] text-[#ab9ff2] font-heading text-xs uppercase tracking-wider hover:bg-[#ab9ff2]/10 transition-colors",
                      children: [
                        "Download Metamask",
                      ],
                    }),
                  O === 2 &&
                    r.jsxs("div", {
                      className: "relative flex flex-col sm:flex-row gap-3",
                      children: [
                        r.jsxs("a", {
                          href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x3b4255b55a85Cfc3CAaf4611CEd7fa4111B26997",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 px-4 py-2 border border-[#C7F284] text-[#C7F284] font-heading text-xs uppercase tracking-wider hover:bg-[#C7F284]/10 transition-colors",
                          children: ["Uniswap"],
                        }),
                      ],
                    }),
                  O < $.howToBuy.steps.length - 1 &&
                    r.jsx("div", {
                      className:
                        "hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 border-t-2 border-r-2 border-gold/30 rotate-45 z-10",
                    }),
                ],
              },
              x.step
            )
          ),
        }),
      ],
    }),
  });
}
function J1() {
  return r.jsx("section", {
    id: "community",
    className: "py-24 bg-dark relative",
    children: r.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        r.jsx("div", {
          className: "mb-12 border border-gold/20 overflow-hidden",
          children: r.jsx("img", {
            src: "/oilbanner.jpg",
            alt: "Trump Oil Reserve",
            className: "w-full object-cover",
          }),
        }),
        r.jsxs("div", {
          className: "text-center mb-16",
          children: [
            r.jsx("span", {
              className:
                "inline-block font-heading text-xs uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1 mb-4",
              children: $.community.label,
            }),
            r.jsx("h2", {
              className:
                "font-display text-4xl sm:text-5xl text-gradient-gold mb-4",
              children: $.community.heading,
            }),
            r.jsx("p", {
              className: "text-grey-light text-lg max-w-2xl mx-auto",
              children: $.community.description,
            }),
          ],
        }),
        r.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto",
          children: [
            r.jsxs("a", {
              href: Rd,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "group bg-black border border-gold/10 p-8 text-center hover:border-[#26a5e4]/50 transition-all duration-500 block",
              children: [
                r.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto mb-5 bg-[#26a5e4]/10 border border-[#26a5e4]/30 flex items-center justify-center group-hover:bg-[#26a5e4]/20 transition-colors duration-300",
                  children: r.jsx(qd, {
                    size: 28,
                    className: "text-[#26a5e4]",
                  }),
                }),
                r.jsx("h3", {
                  className:
                    "font-heading text-xl font-bold uppercase tracking-wider text-white mb-2",
                  children: $.community.telegram_label,
                }),
                r.jsx("p", {
                  className: "text-grey-light text-sm leading-relaxed",
                  children: $.community.telegram_description,
                }),
              ],
            }),
            r.jsxs("a", {
              href: Bd,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "group bg-black border border-gold/10 p-8 text-center hover:border-white/30 transition-all duration-500 block",
              children: [
                r.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto mb-5 bg-white/5 border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300",
                  children: r.jsx(Yd, { size: 22, className: "text-white" }),
                }),
                r.jsx("h3", {
                  className:
                    "font-heading text-xl font-bold uppercase tracking-wider text-white mb-2",
                  children: $.community.twitter_label,
                }),
                r.jsx("p", {
                  className: "text-grey-light text-sm leading-relaxed",
                  children: $.community.twitter_description,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function w1() {
  return r.jsxs("section", {
    className: "py-24 bg-black relative overflow-hidden",
    children: [
      r.jsx("div", {
        className: "absolute inset-0 opacity-5",
        style: {
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.3) 0%, transparent 60%)",
        },
      }),
      r.jsx("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: r.jsxs("div", {
          className:
            "flex flex-col lg:flex-row items-center gap-12 bg-dark border border-gold/20 p-8 sm:p-12 lg:p-16",
          children: [
            r.jsx("video", {
              src: "/ready_to_drill.mp4",
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              className: "w-64 sm:w-72",
            }),
            r.jsxs("div", {
              className: "flex-1 text-center lg:text-left",
              children: [
                r.jsx("h2", {
                  className:
                    "font-display text-4xl sm:text-5xl text-gradient-gold mb-4",
                  children: $.cta.heading,
                }),
                r.jsx("p", {
                  className: "text-grey-light text-lg mb-8 max-w-xl",
                  children: $.cta.subheading,
                }),
                r.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                  children: [
                    r.jsxs("a", {
                      href: Tu,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "group flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#C7F284] text-[#C7F284] font-heading font-bold text-lg uppercase tracking-wider hover:bg-[#C7F284]/10 transition-all duration-300",
                      children: [
                        "Buy on Uniswap",
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
}
function k1() {
  return r.jsx("footer", {
    className: "bg-dark border-t border-gold/10 py-12",
    children: r.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        r.jsxs("div", {
          className: "text-center mb-8",
          children: [
            r.jsx("img", {
              src: "/oillogo.png",
              alt: "$OIL",
              className: "h-16 w-16 object-contain mx-auto mb-3 rounded-full border-2 border-gold",
            }),
            r.jsx("p", {
              className:
                "font-heading text-sm uppercase tracking-[0.3em] text-gold/60 mt-2",
              children: $.footer.tagline,
            }),
          ],
        }),
        r.jsxs("div", {
          className: "flex justify-center gap-4 mb-8",
          children: [
            r.jsx("a", {
              href: Rd,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "w-10 h-10 border border-[#26a5e4]/30 flex items-center justify-center text-[#26a5e4]/60 hover:text-[#26a5e4] hover:border-[#26a5e4] transition-colors",
              "aria-label": "Telegram",
              children: r.jsx(qd, { size: 18 }),
            }),
            r.jsx("a", {
              href: Bd,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors",
              "aria-label": "X / Twitter",
              children: r.jsx(Yd, { size: 16 }),
            }),
          ],
        }),
        r.jsx("div", {
          className: "border-t border-grey/20 pt-8",
          children: r.jsxs("p", {
            className: "text-grey-medium text-xs text-center mt-4",
            children: ["© ", new Date().getFullYear(), " ", $.footer.copyright],
          }),
        }),
      ],
    }),
  });
}
function W1() {
  return r.jsxs("div", {
    className: "min-h-screen bg-black",
    children: [
      r.jsx(G1, {}),
      r.jsx(L1, {}),
      r.jsx(X1, {}),
      r.jsx(Q1, {}),
      r.jsx(V1, {}),
      r.jsx(K1, {}),
      r.jsx(J1, {}),
      r.jsx(w1, {}),
      r.jsx(k1, {}),
    ],
  });
}
g1.createRoot(document.getElementById("root")).render(
  r.jsx(xe.StrictMode, { children: r.jsx(W1, {}) })
);

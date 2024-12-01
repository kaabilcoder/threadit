const __vite__fileDeps = ["assets/Feed-B1kJhorZ.js", "assets/InfinitePosts-7GOSrJQu.js", "assets/Post-dMvrYO60.js", "assets/Profile-DCeeu-hL.js", "assets/Inbox-B6ej0djh.js", "assets/FullPost-CqtkWRCX.js", "assets/SavedPosts-ALI_CJvt.js", "assets/SubThread-9-RmU2K9.js"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
var np = e => {
    throw TypeError(e)
};
var mu = (e, t, n) => t.has(e) || np("Cannot " + n);
var C = (e, t, n) => (mu(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    B = (e, t, n) => t.has(e) ? np("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    _ = (e, t, n, r) => (mu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Z = (e, t, n) => (mu(e, t, "access private method"), n);
var aa = (e, t, n, r) => ({
    set _(i) {
        _(e, t, i, n)
    },
    get _() {
        return C(e, t, r)
    }
});

function Tg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();
var lA = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Jd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function uA(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var Rg = {
        exports: {}
    },
    Dl = {},
    kg = {
        exports: {}
    },
    ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o = Symbol.for("react.element"),
    eS = Symbol.for("react.portal"),
    tS = Symbol.for("react.fragment"),
    nS = Symbol.for("react.strict_mode"),
    rS = Symbol.for("react.profiler"),
    iS = Symbol.for("react.provider"),
    sS = Symbol.for("react.context"),
    oS = Symbol.for("react.forward_ref"),
    aS = Symbol.for("react.suspense"),
    lS = Symbol.for("react.memo"),
    uS = Symbol.for("react.lazy"),
    rp = Symbol.iterator;

function cS(e) {
    return e === null || typeof e != "object" ? null : (e = rp && e[rp] || e["@@iterator"], typeof e == "function" ? e : null)
}
var jg = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Lg = Object.assign,
    bg = {};

function ms(e, t, n) {
    this.props = e, this.context = t, this.refs = bg, this.updater = n || jg
}
ms.prototype.isReactComponent = {};
ms.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
ms.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ng() {}
Ng.prototype = ms.prototype;

function Zd(e, t, n) {
    this.props = e, this.context = t, this.refs = bg, this.updater = n || jg
}
var ef = Zd.prototype = new Ng;
ef.constructor = Zd;
Lg(ef, ms.prototype);
ef.isPureReactComponent = !0;
var ip = Array.isArray,
    Ag = Object.prototype.hasOwnProperty,
    tf = {
        current: null
    },
    Dg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Og(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Ag.call(t, r) && !Dg.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: $o,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: tf.current
    }
}

function dS(e, t) {
    return {
        $$typeof: $o,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function nf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === $o
}

function fS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var sp = /\/+/g;

function yu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? fS("" + e.key) : t.toString(36)
}

function ba(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case $o:
                case eS:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + yu(o, 0) : r, ip(i) ? (n = "", e != null && (n = e.replace(sp, "$&/") + "/"), ba(i, t, n, "", function(u) {
        return u
    })) : i != null && (nf(i) && (i = dS(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(sp, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", ip(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + yu(s, a);
            o += ba(s, t, n, l, i)
        } else if (l = cS(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + yu(s, a++), o += ba(s, t, n, l, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function la(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return ba(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function hS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var at = {
        current: null
    },
    Na = {
        transition: null
    },
    pS = {
        ReactCurrentDispatcher: at,
        ReactCurrentBatchConfig: Na,
        ReactCurrentOwner: tf
    };

function Mg() {
    throw Error("act(...) is not supported in production builds of React.")
}
ee.Children = {
    map: la,
    forEach: function(e, t, n) {
        la(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return la(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return la(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nf(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ee.Component = ms;
ee.Fragment = tS;
ee.Profiler = rS;
ee.PureComponent = Zd;
ee.StrictMode = nS;
ee.Suspense = aS;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pS;
ee.act = Mg;
ee.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Lg({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = tf.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Ag.call(t, l) && !Dg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: $o,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
ee.createContext = function(e) {
    return e = {
        $$typeof: sS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: iS,
        _context: e
    }, e.Consumer = e
};
ee.createElement = Og;
ee.createFactory = function(e) {
    var t = Og.bind(null, e);
    return t.type = e, t
};
ee.createRef = function() {
    return {
        current: null
    }
};
ee.forwardRef = function(e) {
    return {
        $$typeof: oS,
        render: e
    }
};
ee.isValidElement = nf;
ee.lazy = function(e) {
    return {
        $$typeof: uS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: hS
    }
};
ee.memo = function(e, t) {
    return {
        $$typeof: lS,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ee.startTransition = function(e) {
    var t = Na.transition;
    Na.transition = {};
    try {
        e()
    } finally {
        Na.transition = t
    }
};
ee.unstable_act = Mg;
ee.useCallback = function(e, t) {
    return at.current.useCallback(e, t)
};
ee.useContext = function(e) {
    return at.current.useContext(e)
};
ee.useDebugValue = function() {};
ee.useDeferredValue = function(e) {
    return at.current.useDeferredValue(e)
};
ee.useEffect = function(e, t) {
    return at.current.useEffect(e, t)
};
ee.useId = function() {
    return at.current.useId()
};
ee.useImperativeHandle = function(e, t, n) {
    return at.current.useImperativeHandle(e, t, n)
};
ee.useInsertionEffect = function(e, t) {
    return at.current.useInsertionEffect(e, t)
};
ee.useLayoutEffect = function(e, t) {
    return at.current.useLayoutEffect(e, t)
};
ee.useMemo = function(e, t) {
    return at.current.useMemo(e, t)
};
ee.useReducer = function(e, t, n) {
    return at.current.useReducer(e, t, n)
};
ee.useRef = function(e) {
    return at.current.useRef(e)
};
ee.useState = function(e) {
    return at.current.useState(e)
};
ee.useSyncExternalStore = function(e, t, n) {
    return at.current.useSyncExternalStore(e, t, n)
};
ee.useTransition = function() {
    return at.current.useTransition()
};
ee.version = "18.3.1";
kg.exports = ee;
var S = kg.exports;
const mS = Jd(S),
    yS = Tg({
        __proto__: null,
        default: mS
    }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gS = S,
    vS = Symbol.for("react.element"),
    xS = Symbol.for("react.fragment"),
    wS = Object.prototype.hasOwnProperty,
    SS = gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ES = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Fg(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) wS.call(t, r) && !ES.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: vS,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: SS.current
    }
}
Dl.Fragment = xS;
Dl.jsx = Fg;
Dl.jsxs = Fg;
Rg.exports = Dl;
var x = Rg.exports,
    pc = {},
    _g = {
        exports: {}
    },
    Rt = {},
    Vg = {
        exports: {}
    },
    Ig = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, W) {
        var Q = M.length;
        M.push(W);
        e: for (; 0 < Q;) {
            var le = Q - 1 >>> 1,
                ue = M[le];
            if (0 < i(ue, W)) M[le] = W, M[Q] = ue, Q = le;
            else break e
        }
    }

    function n(M) {
        return M.length === 0 ? null : M[0]
    }

    function r(M) {
        if (M.length === 0) return null;
        var W = M[0],
            Q = M.pop();
        if (Q !== W) {
            M[0] = Q;
            e: for (var le = 0, ue = M.length, Ht = ue >>> 1; le < Ht;) {
                var gt = 2 * (le + 1) - 1,
                    vt = M[gt],
                    tt = gt + 1,
                    Lt = M[tt];
                if (0 > i(vt, Q)) tt < ue && 0 > i(Lt, vt) ? (M[le] = Lt, M[tt] = Q, le = tt) : (M[le] = vt, M[gt] = Q, le = gt);
                else if (tt < ue && 0 > i(Lt, Q)) M[le] = Lt, M[tt] = Q, le = tt;
                else break e
            }
        }
        return W
    }

    function i(M, W) {
        var Q = M.sortIndex - W.sortIndex;
        return Q !== 0 ? Q : M.id - W.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        h = 3,
        f = !1,
        g = !1,
        p = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(M) {
        for (var W = n(u); W !== null;) {
            if (W.callback === null) r(u);
            else if (W.startTime <= M) r(u), W.sortIndex = W.expirationTime, t(l, W);
            else break;
            W = n(u)
        }
    }

    function P(M) {
        if (p = !1, v(M), !g)
            if (n(l) !== null) g = !0, Fe(k);
            else {
                var W = n(u);
                W !== null && jt(P, W.startTime - M)
            }
    }

    function k(M, W) {
        g = !1, p && (p = !1, m(T), T = -1), f = !0;
        var Q = h;
        try {
            for (v(W), d = n(l); d !== null && (!(d.expirationTime > W) || M && !H());) {
                var le = d.callback;
                if (typeof le == "function") {
                    d.callback = null, h = d.priorityLevel;
                    var ue = le(d.expirationTime <= W);
                    W = e.unstable_now(), typeof ue == "function" ? d.callback = ue : d === n(l) && r(l), v(W)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var Ht = !0;
            else {
                var gt = n(u);
                gt !== null && jt(P, gt.startTime - W), Ht = !1
            }
            return Ht
        } finally {
            d = null, h = Q, f = !1
        }
    }
    var L = !1,
        w = null,
        T = -1,
        A = 5,
        O = -1;

    function H() {
        return !(e.unstable_now() - O < A)
    }

    function de() {
        if (w !== null) {
            var M = e.unstable_now();
            O = M;
            var W = !0;
            try {
                W = w(!0, M)
            } finally {
                W ? pe() : (L = !1, w = null)
            }
        } else L = !1
    }
    var pe;
    if (typeof y == "function") pe = function() {
        y(de)
    };
    else if (typeof MessageChannel < "u") {
        var Le = new MessageChannel,
            ce = Le.port2;
        Le.port1.onmessage = de, pe = function() {
            ce.postMessage(null)
        }
    } else pe = function() {
        E(de, 0)
    };

    function Fe(M) {
        w = M, L || (L = !0, pe())
    }

    function jt(M, W) {
        T = E(function() {
            M(e.unstable_now())
        }, W)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
        M.callback = null
    }, e.unstable_continueExecution = function() {
        g || f || (g = !0, Fe(k))
    }, e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < M ? Math.floor(1e3 / M) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(M) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var W = 3;
                break;
            default:
                W = h
        }
        var Q = h;
        h = W;
        try {
            return M()
        } finally {
            h = Q
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, W) {
        switch (M) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                M = 3
        }
        var Q = h;
        h = M;
        try {
            return W()
        } finally {
            h = Q
        }
    }, e.unstable_scheduleCallback = function(M, W, Q) {
        var le = e.unstable_now();
        switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? le + Q : le) : Q = le, M) {
            case 1:
                var ue = -1;
                break;
            case 2:
                ue = 250;
                break;
            case 5:
                ue = 1073741823;
                break;
            case 4:
                ue = 1e4;
                break;
            default:
                ue = 5e3
        }
        return ue = Q + ue, M = {
            id: c++,
            callback: W,
            priorityLevel: M,
            startTime: Q,
            expirationTime: ue,
            sortIndex: -1
        }, Q > le ? (M.sortIndex = Q, t(u, M), n(l) === null && M === n(u) && (p ? (m(T), T = -1) : p = !0, jt(P, Q - le))) : (M.sortIndex = ue, t(l, M), g || f || (g = !0, Fe(k))), M
    }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(M) {
        var W = h;
        return function() {
            var Q = h;
            h = W;
            try {
                return M.apply(this, arguments)
            } finally {
                h = Q
            }
        }
    }
})(Ig);
Vg.exports = Ig;
var PS = Vg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CS = S,
    Ct = PS;

function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zg = new Set,
    ho = {};

function ci(e, t) {
    rs(e, t), rs(e + "Capture", t)
}

function rs(e, t) {
    for (ho[e] = t, e = 0; e < t.length; e++) zg.add(t[e])
}
var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    mc = Object.prototype.hasOwnProperty,
    TS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    op = {},
    ap = {};

function RS(e) {
    return mc.call(ap, e) ? !0 : mc.call(op, e) ? !1 : TS.test(e) ? ap[e] = !0 : (op[e] = !0, !1)
}

function kS(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function jS(e, t, n, r) {
    if (t === null || typeof t > "u" || kS(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function lt(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ke[e] = new lt(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ke[t] = new lt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ke[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ke[e] = new lt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ke[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ke[e] = new lt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ke[e] = new lt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ke[e] = new lt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ke[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var rf = /[\-:]([a-z])/g;

function sf(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(rf, sf);
    Ke[t] = new lt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(rf, sf);
    Ke[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(rf, sf);
    Ke[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ke[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ke.xlinkHref = new lt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ke[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function of(e, t, n, r) {
    var i = Ke.hasOwnProperty(t) ? Ke[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jS(t, n, i, r) && (n = null), r || i === null ? RS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Vn = CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ua = Symbol.for("react.element"),
    wi = Symbol.for("react.portal"),
    Si = Symbol.for("react.fragment"),
    af = Symbol.for("react.strict_mode"),
    yc = Symbol.for("react.profiler"),
    Ug = Symbol.for("react.provider"),
    Bg = Symbol.for("react.context"),
    lf = Symbol.for("react.forward_ref"),
    gc = Symbol.for("react.suspense"),
    vc = Symbol.for("react.suspense_list"),
    uf = Symbol.for("react.memo"),
    Gn = Symbol.for("react.lazy"),
    $g = Symbol.for("react.offscreen"),
    lp = Symbol.iterator;

function Ns(e) {
    return e === null || typeof e != "object" ? null : (e = lp && e[lp] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ce = Object.assign,
    gu;

function Ks(e) {
    if (gu === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        gu = t && t[1] || ""
    }
    return `
` + gu + e
}
var vu = !1;

function xu(e, t) {
    if (!e || vu) return "";
    vu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        vu = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ks(e) : ""
}

function LS(e) {
    switch (e.tag) {
        case 5:
            return Ks(e.type);
        case 16:
            return Ks("Lazy");
        case 13:
            return Ks("Suspense");
        case 19:
            return Ks("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = xu(e.type, !1), e;
        case 11:
            return e = xu(e.type.render, !1), e;
        case 1:
            return e = xu(e.type, !0), e;
        default:
            return ""
    }
}

function xc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Si:
            return "Fragment";
        case wi:
            return "Portal";
        case yc:
            return "Profiler";
        case af:
            return "StrictMode";
        case gc:
            return "Suspense";
        case vc:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Bg:
            return (e.displayName || "Context") + ".Consumer";
        case Ug:
            return (e._context.displayName || "Context") + ".Provider";
        case lf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case uf:
            return t = e.displayName || null, t !== null ? t : xc(e.type) || "Memo";
        case Gn:
            t = e._payload, e = e._init;
            try {
                return xc(e(t))
            } catch {}
    }
    return null
}

function bS(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return xc(t);
        case 8:
            return t === af ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function wr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Hg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function NS(e) {
    var t = Hg(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ca(e) {
    e._valueTracker || (e._valueTracker = NS(e))
}

function Wg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Hg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ya(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function wc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function up(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = wr(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Kg(e, t) {
    t = t.checked, t != null && of(e, "checked", t, !1)
}

function Sc(e, t) {
    Kg(e, t);
    var n = wr(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ec(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ec(e, t.type, wr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function cp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ec(e, t, n) {
    (t !== "number" || Ya(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Qs = Array.isArray;

function _i(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + wr(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Pc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function dp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(D(92));
            if (Qs(n)) {
                if (1 < n.length) throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: wr(n)
    }
}

function Qg(e, t) {
    var n = wr(t.value),
        r = wr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function fp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function qg(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Cc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? qg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var da, Gg = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (da = da || document.createElement("div"), da.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = da.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function po(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Js = {
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
        strokeWidth: !0
    },
    AS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Js).forEach(function(e) {
    AS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Js[t] = Js[e]
    })
});

function Yg(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Js.hasOwnProperty(e) && Js[e] ? ("" + t).trim() : t + "px"
}

function Xg(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Yg(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var DS = Ce({
    menuitem: !0
}, {
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
    wbr: !0
});

function Tc(e, t) {
    if (t) {
        if (DS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(D(62))
    }
}

function Rc(e, t) {
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
            return !0
    }
}
var kc = null;

function cf(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var jc = null,
    Vi = null,
    Ii = null;

function hp(e) {
    if (e = Ko(e)) {
        if (typeof jc != "function") throw Error(D(280));
        var t = e.stateNode;
        t && (t = Vl(t), jc(e.stateNode, e.type, t))
    }
}

function Jg(e) {
    Vi ? Ii ? Ii.push(e) : Ii = [e] : Vi = e
}

function Zg() {
    if (Vi) {
        var e = Vi,
            t = Ii;
        if (Ii = Vi = null, hp(e), t)
            for (e = 0; e < t.length; e++) hp(t[e])
    }
}

function ev(e, t) {
    return e(t)
}

function tv() {}
var wu = !1;

function nv(e, t, n) {
    if (wu) return e(t, n);
    wu = !0;
    try {
        return ev(e, t, n)
    } finally {
        wu = !1, (Vi !== null || Ii !== null) && (tv(), Zg())
    }
}

function mo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Vl(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(D(231, t, typeof n));
    return n
}
var Lc = !1;
if (An) try {
    var As = {};
    Object.defineProperty(As, "passive", {
        get: function() {
            Lc = !0
        }
    }), window.addEventListener("test", As, As), window.removeEventListener("test", As, As)
} catch {
    Lc = !1
}

function OS(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Zs = !1,
    Xa = null,
    Ja = !1,
    bc = null,
    MS = {
        onError: function(e) {
            Zs = !0, Xa = e
        }
    };

function FS(e, t, n, r, i, s, o, a, l) {
    Zs = !1, Xa = null, OS.apply(MS, arguments)
}

function _S(e, t, n, r, i, s, o, a, l) {
    if (FS.apply(this, arguments), Zs) {
        if (Zs) {
            var u = Xa;
            Zs = !1, Xa = null
        } else throw Error(D(198));
        Ja || (Ja = !0, bc = u)
    }
}

function di(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function rv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function pp(e) {
    if (di(e) !== e) throw Error(D(188))
}

function VS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = di(e), t === null) throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return pp(i), e;
                if (s === r) return pp(i), t;
                s = s.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (a === r) {
                    o = !0, r = i, n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a;) {
                    if (a === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (a === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(D(189))
            }
        }
        if (n.alternate !== r) throw Error(D(190))
    }
    if (n.tag !== 3) throw Error(D(188));
    return n.stateNode.current === n ? e : t
}

function iv(e) {
    return e = VS(e), e !== null ? sv(e) : null
}

function sv(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = sv(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var ov = Ct.unstable_scheduleCallback,
    mp = Ct.unstable_cancelCallback,
    IS = Ct.unstable_shouldYield,
    zS = Ct.unstable_requestPaint,
    je = Ct.unstable_now,
    US = Ct.unstable_getCurrentPriorityLevel,
    df = Ct.unstable_ImmediatePriority,
    av = Ct.unstable_UserBlockingPriority,
    Za = Ct.unstable_NormalPriority,
    BS = Ct.unstable_LowPriority,
    lv = Ct.unstable_IdlePriority,
    Ol = null,
    dn = null;

function $S(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function") try {
        dn.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Xt = Math.clz32 ? Math.clz32 : KS,
    HS = Math.log,
    WS = Math.LN2;

function KS(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (HS(e) / WS | 0) | 0
}
var fa = 64,
    ha = 4194304;

function qs(e) {
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
            return e
    }
}

function el(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = qs(a) : (s &= o, s !== 0 && (r = qs(s)))
    } else o = n & ~i, o !== 0 ? r = qs(o) : s !== 0 && (r = qs(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Xt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function QS(e, t) {
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
            return -1
    }
}

function qS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - Xt(s),
            a = 1 << o,
            l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = QS(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function Nc(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function uv() {
    var e = fa;
    return fa <<= 1, !(fa & 4194240) && (fa = 64), e
}

function Su(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Ho(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = n
}

function GS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Xt(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function ff(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Xt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var oe = 0;

function cv(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var dv, hf, fv, hv, pv, Ac = !1,
    pa = [],
    cr = null,
    dr = null,
    fr = null,
    yo = new Map,
    go = new Map,
    Jn = [],
    YS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function yp(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            cr = null;
            break;
        case "dragenter":
        case "dragleave":
            dr = null;
            break;
        case "mouseover":
        case "mouseout":
            fr = null;
            break;
        case "pointerover":
        case "pointerout":
            yo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            go.delete(t.pointerId)
    }
}

function Ds(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = Ko(t), t !== null && hf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function XS(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return cr = Ds(cr, e, t, n, r, i), !0;
        case "dragenter":
            return dr = Ds(dr, e, t, n, r, i), !0;
        case "mouseover":
            return fr = Ds(fr, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return yo.set(s, Ds(yo.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, go.set(s, Ds(go.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function mv(e) {
    var t = _r(e.target);
    if (t !== null) {
        var n = di(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = rv(n), t !== null) {
                    e.blockedOn = t, pv(e.priority, function() {
                        fv(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Aa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            kc = r, n.target.dispatchEvent(r), kc = null
        } else return t = Ko(n), t !== null && hf(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function gp(e, t, n) {
    Aa(e) && n.delete(t)
}

function JS() {
    Ac = !1, cr !== null && Aa(cr) && (cr = null), dr !== null && Aa(dr) && (dr = null), fr !== null && Aa(fr) && (fr = null), yo.forEach(gp), go.forEach(gp)
}

function Os(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ac || (Ac = !0, Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority, JS)))
}

function vo(e) {
    function t(i) {
        return Os(i, e)
    }
    if (0 < pa.length) {
        Os(pa[0], e);
        for (var n = 1; n < pa.length; n++) {
            var r = pa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (cr !== null && Os(cr, e), dr !== null && Os(dr, e), fr !== null && Os(fr, e), yo.forEach(t), go.forEach(t), n = 0; n < Jn.length; n++) r = Jn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null);) mv(n), n.blockedOn === null && Jn.shift()
}
var zi = Vn.ReactCurrentBatchConfig,
    tl = !0;

function ZS(e, t, n, r) {
    var i = oe,
        s = zi.transition;
    zi.transition = null;
    try {
        oe = 1, pf(e, t, n, r)
    } finally {
        oe = i, zi.transition = s
    }
}

function eE(e, t, n, r) {
    var i = oe,
        s = zi.transition;
    zi.transition = null;
    try {
        oe = 4, pf(e, t, n, r)
    } finally {
        oe = i, zi.transition = s
    }
}

function pf(e, t, n, r) {
    if (tl) {
        var i = Dc(e, t, n, r);
        if (i === null) Nu(e, t, r, nl, n), yp(e, r);
        else if (XS(i, e, t, n, r)) r.stopPropagation();
        else if (yp(e, r), t & 4 && -1 < YS.indexOf(e)) {
            for (; i !== null;) {
                var s = Ko(i);
                if (s !== null && dv(s), s = Dc(e, t, n, r), s === null && Nu(e, t, r, nl, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else Nu(e, t, r, null, n)
    }
}
var nl = null;

function Dc(e, t, n, r) {
    if (nl = null, e = cf(r), e = _r(e), e !== null)
        if (t = di(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = rv(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return nl = e, null
}

function yv(e) {
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
            switch (US()) {
                case df:
                    return 1;
                case av:
                    return 4;
                case Za:
                case BS:
                    return 16;
                case lv:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var lr = null,
    mf = null,
    Da = null;

function gv() {
    if (Da) return Da;
    var e, t = mf,
        n = t.length,
        r, i = "value" in lr ? lr.value : lr.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return Da = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Oa(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ma() {
    return !0
}

function vp() {
    return !1
}

function kt(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ma : vp, this.isPropagationStopped = vp, this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ma)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ma)
        },
        persist: function() {},
        isPersistent: ma
    }), t
}
var ys = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    yf = kt(ys),
    Wo = Ce({}, ys, {
        view: 0,
        detail: 0
    }),
    tE = kt(Wo),
    Eu, Pu, Ms, Ml = Ce({}, Wo, {
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
        getModifierState: gf,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ms && (Ms && e.type === "mousemove" ? (Eu = e.screenX - Ms.screenX, Pu = e.screenY - Ms.screenY) : Pu = Eu = 0, Ms = e), Eu)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Pu
        }
    }),
    xp = kt(Ml),
    nE = Ce({}, Ml, {
        dataTransfer: 0
    }),
    rE = kt(nE),
    iE = Ce({}, Wo, {
        relatedTarget: 0
    }),
    Cu = kt(iE),
    sE = Ce({}, ys, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    oE = kt(sE),
    aE = Ce({}, ys, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    lE = kt(aE),
    uE = Ce({}, ys, {
        data: 0
    }),
    wp = kt(uE),
    cE = {
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
        MozPrintableKey: "Unidentified"
    },
    dE = {
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
        224: "Meta"
    },
    fE = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function hE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fE[e]) ? !!t[e] : !1
}

function gf() {
    return hE
}
var pE = Ce({}, Wo, {
        key: function(e) {
            if (e.key) {
                var t = cE[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Oa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dE[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: gf,
        charCode: function(e) {
            return e.type === "keypress" ? Oa(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Oa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    mE = kt(pE),
    yE = Ce({}, Ml, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Sp = kt(yE),
    gE = Ce({}, Wo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: gf
    }),
    vE = kt(gE),
    xE = Ce({}, ys, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wE = kt(xE),
    SE = Ce({}, Ml, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    EE = kt(SE),
    PE = [9, 13, 27, 32],
    vf = An && "CompositionEvent" in window,
    eo = null;
An && "documentMode" in document && (eo = document.documentMode);
var CE = An && "TextEvent" in window && !eo,
    vv = An && (!vf || eo && 8 < eo && 11 >= eo),
    Ep = " ",
    Pp = !1;

function xv(e, t) {
    switch (e) {
        case "keyup":
            return PE.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function wv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ei = !1;

function TE(e, t) {
    switch (e) {
        case "compositionend":
            return wv(t);
        case "keypress":
            return t.which !== 32 ? null : (Pp = !0, Ep);
        case "textInput":
            return e = t.data, e === Ep && Pp ? null : e;
        default:
            return null
    }
}

function RE(e, t) {
    if (Ei) return e === "compositionend" || !vf && xv(e, t) ? (e = gv(), Da = mf = lr = null, Ei = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return vv && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var kE = {
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
    week: !0
};

function Cp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kE[e.type] : t === "textarea"
}

function Sv(e, t, n, r) {
    Jg(r), t = rl(t, "onChange"), 0 < t.length && (n = new yf("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var to = null,
    xo = null;

function jE(e) {
    Av(e, 0)
}

function Fl(e) {
    var t = Ti(e);
    if (Wg(t)) return e
}

function LE(e, t) {
    if (e === "change") return t
}
var Ev = !1;
if (An) {
    var Tu;
    if (An) {
        var Ru = "oninput" in document;
        if (!Ru) {
            var Tp = document.createElement("div");
            Tp.setAttribute("oninput", "return;"), Ru = typeof Tp.oninput == "function"
        }
        Tu = Ru
    } else Tu = !1;
    Ev = Tu && (!document.documentMode || 9 < document.documentMode)
}

function Rp() {
    to && (to.detachEvent("onpropertychange", Pv), xo = to = null)
}

function Pv(e) {
    if (e.propertyName === "value" && Fl(xo)) {
        var t = [];
        Sv(t, xo, e, cf(e)), nv(jE, t)
    }
}

function bE(e, t, n) {
    e === "focusin" ? (Rp(), to = t, xo = n, to.attachEvent("onpropertychange", Pv)) : e === "focusout" && Rp()
}

function NE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(xo)
}

function AE(e, t) {
    if (e === "click") return Fl(t)
}

function DE(e, t) {
    if (e === "input" || e === "change") return Fl(t)
}

function OE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var en = typeof Object.is == "function" ? Object.is : OE;

function wo(e, t) {
    if (en(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!mc.call(t, i) || !en(e[i], t[i])) return !1
    }
    return !0
}

function kp(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function jp(e, t) {
    var n = kp(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = kp(n)
    }
}

function Cv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Tv() {
    for (var e = window, t = Ya(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ya(e.document)
    }
    return t
}

function xf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function ME(e) {
    var t = Tv(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Cv(n.ownerDocument.documentElement, n)) {
        if (r !== null && xf(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = jp(n, s);
                var o = jp(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var FE = An && "documentMode" in document && 11 >= document.documentMode,
    Pi = null,
    Oc = null,
    no = null,
    Mc = !1;

function Lp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Mc || Pi == null || Pi !== Ya(r) || (r = Pi, "selectionStart" in r && xf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), no && wo(no, r) || (no = r, r = rl(Oc, "onSelect"), 0 < r.length && (t = new yf("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Pi)))
}

function ya(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ci = {
        animationend: ya("Animation", "AnimationEnd"),
        animationiteration: ya("Animation", "AnimationIteration"),
        animationstart: ya("Animation", "AnimationStart"),
        transitionend: ya("Transition", "TransitionEnd")
    },
    ku = {},
    Rv = {};
An && (Rv = document.createElement("div").style, "AnimationEvent" in window || (delete Ci.animationend.animation, delete Ci.animationiteration.animation, delete Ci.animationstart.animation), "TransitionEvent" in window || delete Ci.transitionend.transition);

function _l(e) {
    if (ku[e]) return ku[e];
    if (!Ci[e]) return e;
    var t = Ci[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Rv) return ku[e] = t[n];
    return e
}
var kv = _l("animationend"),
    jv = _l("animationiteration"),
    Lv = _l("animationstart"),
    bv = _l("transitionend"),
    Nv = new Map,
    bp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Cr(e, t) {
    Nv.set(e, t), ci(t, [e])
}
for (var ju = 0; ju < bp.length; ju++) {
    var Lu = bp[ju],
        _E = Lu.toLowerCase(),
        VE = Lu[0].toUpperCase() + Lu.slice(1);
    Cr(_E, "on" + VE)
}
Cr(kv, "onAnimationEnd");
Cr(jv, "onAnimationIteration");
Cr(Lv, "onAnimationStart");
Cr("dblclick", "onDoubleClick");
Cr("focusin", "onFocus");
Cr("focusout", "onBlur");
Cr(bv, "onTransitionEnd");
rs("onMouseEnter", ["mouseout", "mouseover"]);
rs("onMouseLeave", ["mouseout", "mouseover"]);
rs("onPointerEnter", ["pointerout", "pointerover"]);
rs("onPointerLeave", ["pointerout", "pointerover"]);
ci("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ci("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ci("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ci("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ci("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ci("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    IE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));

function Np(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, _S(r, t, void 0, e), e.currentTarget = null
}

function Av(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
                    Np(i, a, u), s = l
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
                        Np(i, a, u), s = l
                    }
        }
    }
    if (Ja) throw e = bc, Ja = !1, bc = null, e
}

function me(e, t) {
    var n = t[zc];
    n === void 0 && (n = t[zc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Dv(t, e, 2, !1), n.add(r))
}

function bu(e, t, n) {
    var r = 0;
    t && (r |= 4), Dv(n, e, r, t)
}
var ga = "_reactListening" + Math.random().toString(36).slice(2);

function So(e) {
    if (!e[ga]) {
        e[ga] = !0, zg.forEach(function(n) {
            n !== "selectionchange" && (IE.has(n) || bu(n, !1, e), bu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ga] || (t[ga] = !0, bu("selectionchange", !1, t))
    }
}

function Dv(e, t, n, r) {
    switch (yv(t)) {
        case 1:
            var i = ZS;
            break;
        case 4:
            i = eE;
            break;
        default:
            i = pf
    }
    n = i.bind(null, t, n, e), i = void 0, !Lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Nu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = _r(a), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    r = s = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    nv(function() {
        var u = s,
            c = cf(n),
            d = [];
        e: {
            var h = Nv.get(e);
            if (h !== void 0) {
                var f = yf,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Oa(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = mE;
                        break;
                    case "focusin":
                        g = "focus", f = Cu;
                        break;
                    case "focusout":
                        g = "blur", f = Cu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = Cu;
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
                        f = xp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = rE;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = vE;
                        break;
                    case kv:
                    case jv:
                    case Lv:
                        f = oE;
                        break;
                    case bv:
                        f = wE;
                        break;
                    case "scroll":
                        f = tE;
                        break;
                    case "wheel":
                        f = EE;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = lE;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = Sp
                }
                var p = (t & 4) !== 0,
                    E = !p && e === "scroll",
                    m = p ? h !== null ? h + "Capture" : null : h;
                p = [];
                for (var y = u, v; y !== null;) {
                    v = y;
                    var P = v.stateNode;
                    if (v.tag === 5 && P !== null && (v = P, m !== null && (P = mo(y, m), P != null && p.push(Eo(y, P, v)))), E) break;
                    y = y.return
                }
                0 < p.length && (h = new f(h, g, null, n, c), d.push({
                    event: h,
                    listeners: p
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", h && n !== kc && (g = n.relatedTarget || n.fromElement) && (_r(g) || g[Dn])) break e;
                if ((f || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, f ? (g = n.relatedTarget || n.toElement, f = u, g = g ? _r(g) : null, g !== null && (E = di(g), g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (f = null, g = u), f !== g)) {
                    if (p = xp, P = "onMouseLeave", m = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (p = Sp, P = "onPointerLeave", m = "onPointerEnter", y = "pointer"), E = f == null ? h : Ti(f), v = g == null ? h : Ti(g), h = new p(P, y + "leave", f, n, c), h.target = E, h.relatedTarget = v, P = null, _r(c) === u && (p = new p(m, y + "enter", g, n, c), p.target = v, p.relatedTarget = E, P = p), E = P, f && g) t: {
                        for (p = f, m = g, y = 0, v = p; v; v = gi(v)) y++;
                        for (v = 0, P = m; P; P = gi(P)) v++;
                        for (; 0 < y - v;) p = gi(p),
                        y--;
                        for (; 0 < v - y;) m = gi(m),
                        v--;
                        for (; y--;) {
                            if (p === m || m !== null && p === m.alternate) break t;
                            p = gi(p), m = gi(m)
                        }
                        p = null
                    }
                    else p = null;
                    f !== null && Ap(d, h, f, p, !1), g !== null && E !== null && Ap(d, E, g, p, !0)
                }
            }
            e: {
                if (h = u ? Ti(u) : window, f = h.nodeName && h.nodeName.toLowerCase(), f === "select" || f === "input" && h.type === "file") var k = LE;
                else if (Cp(h))
                    if (Ev) k = DE;
                    else {
                        k = NE;
                        var L = bE
                    }
                else(f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = AE);
                if (k && (k = k(e, u))) {
                    Sv(d, k, n, c);
                    break e
                }
                L && L(e, h, u),
                e === "focusout" && (L = h._wrapperState) && L.controlled && h.type === "number" && Ec(h, "number", h.value)
            }
            switch (L = u ? Ti(u) : window, e) {
                case "focusin":
                    (Cp(L) || L.contentEditable === "true") && (Pi = L, Oc = u, no = null);
                    break;
                case "focusout":
                    no = Oc = Pi = null;
                    break;
                case "mousedown":
                    Mc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Mc = !1, Lp(d, n, c);
                    break;
                case "selectionchange":
                    if (FE) break;
                case "keydown":
                case "keyup":
                    Lp(d, n, c)
            }
            var w;
            if (vf) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Ei ? xv(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (vv && n.locale !== "ko" && (Ei || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ei && (w = gv()) : (lr = c, mf = "value" in lr ? lr.value : lr.textContent, Ei = !0)), L = rl(u, T), 0 < L.length && (T = new wp(T, e, null, n, c), d.push({
                event: T,
                listeners: L
            }), w ? T.data = w : (w = wv(n), w !== null && (T.data = w)))),
            (w = CE ? TE(e, n) : RE(e, n)) && (u = rl(u, "onBeforeInput"), 0 < u.length && (c = new wp("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = w))
        }
        Av(d, t)
    })
}

function Eo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = mo(e, n), s != null && r.unshift(Eo(e, s, i)), s = mo(e, t), s != null && r.push(Eo(e, s, i))), e = e.return
    }
    return r
}

function gi(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ap(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = mo(n, s), l != null && o.unshift(Eo(n, l, a))) : i || (l = mo(n, s), l != null && o.push(Eo(n, l, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var zE = /\r\n?/g,
    UE = /\u0000|\uFFFD/g;

function Dp(e) {
    return (typeof e == "string" ? e : "" + e).replace(zE, `
`).replace(UE, "")
}

function va(e, t, n) {
    if (t = Dp(t), Dp(e) !== t && n) throw Error(D(425))
}

function il() {}
var Fc = null,
    _c = null;

function Vc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ic = typeof setTimeout == "function" ? setTimeout : void 0,
    BE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Op = typeof Promise == "function" ? Promise : void 0,
    $E = typeof queueMicrotask == "function" ? queueMicrotask : typeof Op < "u" ? function(e) {
        return Op.resolve(null).then(e).catch(HE)
    } : Ic;

function HE(e) {
    setTimeout(function() {
        throw e
    })
}

function Au(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), vo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    vo(t)
}

function hr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Mp(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var gs = Math.random().toString(36).slice(2),
    cn = "__reactFiber$" + gs,
    Po = "__reactProps$" + gs,
    Dn = "__reactContainer$" + gs,
    zc = "__reactEvents$" + gs,
    WE = "__reactListeners$" + gs,
    KE = "__reactHandles$" + gs;

function _r(e) {
    var t = e[cn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Dn] || n[cn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Mp(e); e !== null;) {
                    if (n = e[cn]) return n;
                    e = Mp(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ko(e) {
    return e = e[cn] || e[Dn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ti(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(D(33))
}

function Vl(e) {
    return e[Po] || null
}
var Uc = [],
    Ri = -1;

function Tr(e) {
    return {
        current: e
    }
}

function ye(e) {
    0 > Ri || (e.current = Uc[Ri], Uc[Ri] = null, Ri--)
}

function fe(e, t) {
    Ri++, Uc[Ri] = e.current, e.current = t
}
var Sr = {},
    et = Tr(Sr),
    ht = Tr(!1),
    ei = Sr;

function is(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Sr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function pt(e) {
    return e = e.childContextTypes, e != null
}

function sl() {
    ye(ht), ye(et)
}

function Fp(e, t, n) {
    if (et.current !== Sr) throw Error(D(168));
    fe(et, t), fe(ht, n)
}

function Ov(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(D(108, bS(e) || "Unknown", i));
    return Ce({}, n, r)
}

function ol(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sr, ei = et.current, fe(et, e), fe(ht, ht.current), !0
}

function _p(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(D(169));
    n ? (e = Ov(e, t, ei), r.__reactInternalMemoizedMergedChildContext = e, ye(ht), ye(et), fe(et, e)) : ye(ht), fe(ht, n)
}
var Sn = null,
    Il = !1,
    Du = !1;

function Mv(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}

function QE(e) {
    Il = !0, Mv(e)
}

function Rr() {
    if (!Du && Sn !== null) {
        Du = !0;
        var e = 0,
            t = oe;
        try {
            var n = Sn;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Sn = null, Il = !1
        } catch (i) {
            throw Sn !== null && (Sn = Sn.slice(e + 1)), ov(df, Rr), i
        } finally {
            oe = t, Du = !1
        }
    }
    return null
}
var ki = [],
    ji = 0,
    al = null,
    ll = 0,
    Ft = [],
    _t = 0,
    ti = null,
    Pn = 1,
    Cn = "";

function Nr(e, t) {
    ki[ji++] = ll, ki[ji++] = al, al = e, ll = t
}

function Fv(e, t, n) {
    Ft[_t++] = Pn, Ft[_t++] = Cn, Ft[_t++] = ti, ti = e;
    var r = Pn;
    e = Cn;
    var i = 32 - Xt(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Xt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Pn = 1 << 32 - Xt(t) + i | n << i | r, Cn = s + e
    } else Pn = 1 << s | n << i | r, Cn = e
}

function wf(e) {
    e.return !== null && (Nr(e, 1), Fv(e, 1, 0))
}

function Sf(e) {
    for (; e === al;) al = ki[--ji], ki[ji] = null, ll = ki[--ji], ki[ji] = null;
    for (; e === ti;) ti = Ft[--_t], Ft[_t] = null, Cn = Ft[--_t], Ft[_t] = null, Pn = Ft[--_t], Ft[_t] = null
}
var Pt = null,
    Et = null,
    xe = !1,
    Yt = null;

function _v(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Vp(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, Et = hr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, Et = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ti !== null ? {
                id: Pn,
                overflow: Cn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pt = e, Et = null, !0) : !1;
        default:
            return !1
    }
}

function Bc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function $c(e) {
    if (xe) {
        var t = Et;
        if (t) {
            var n = t;
            if (!Vp(e, t)) {
                if (Bc(e)) throw Error(D(418));
                t = hr(n.nextSibling);
                var r = Pt;
                t && Vp(e, t) ? _v(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, Pt = e)
            }
        } else {
            if (Bc(e)) throw Error(D(418));
            e.flags = e.flags & -4097 | 2, xe = !1, Pt = e
        }
    }
}

function Ip(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Pt = e
}

function xa(e) {
    if (e !== Pt) return !1;
    if (!xe) return Ip(e), xe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps)), t && (t = Et)) {
        if (Bc(e)) throw Vv(), Error(D(418));
        for (; t;) _v(e, t), t = hr(t.nextSibling)
    }
    if (Ip(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Et = hr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Et = null
        }
    } else Et = Pt ? hr(e.stateNode.nextSibling) : null;
    return !0
}

function Vv() {
    for (var e = Et; e;) e = hr(e.nextSibling)
}

function ss() {
    Et = Pt = null, xe = !1
}

function Ef(e) {
    Yt === null ? Yt = [e] : Yt.push(e)
}
var qE = Vn.ReactCurrentBatchConfig;

function Fs(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(D(309));
                var r = n.stateNode
            }
            if (!r) throw Error(D(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(D(284));
        if (!n._owner) throw Error(D(290, e))
    }
    return e
}

function wa(e, t) {
    throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function zp(e) {
    var t = e._init;
    return t(e._payload)
}

function Iv(e) {
    function t(m, y) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [y], m.flags |= 16) : v.push(y)
        }
    }

    function n(m, y) {
        if (!e) return null;
        for (; y !== null;) t(m, y), y = y.sibling;
        return null
    }

    function r(m, y) {
        for (m = new Map; y !== null;) y.key !== null ? m.set(y.key, y) : m.set(y.index, y), y = y.sibling;
        return m
    }

    function i(m, y) {
        return m = gr(m, y), m.index = 0, m.sibling = null, m
    }

    function s(m, y, v) {
        return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < y ? (m.flags |= 2, y) : v) : (m.flags |= 2, y)) : (m.flags |= 1048576, y)
    }

    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, y, v, P) {
        return y === null || y.tag !== 6 ? (y = zu(v, m.mode, P), y.return = m, y) : (y = i(y, v), y.return = m, y)
    }

    function l(m, y, v, P) {
        var k = v.type;
        return k === Si ? c(m, y, v.props.children, P, v.key) : y !== null && (y.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Gn && zp(k) === y.type) ? (P = i(y, v.props), P.ref = Fs(m, y, v), P.return = m, P) : (P = Ua(v.type, v.key, v.props, null, m.mode, P), P.ref = Fs(m, y, v), P.return = m, P)
    }

    function u(m, y, v, P) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Uu(v, m.mode, P), y.return = m, y) : (y = i(y, v.children || []), y.return = m, y)
    }

    function c(m, y, v, P, k) {
        return y === null || y.tag !== 7 ? (y = Xr(v, m.mode, P, k), y.return = m, y) : (y = i(y, v), y.return = m, y)
    }

    function d(m, y, v) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return y = zu("" + y, m.mode, v), y.return = m, y;
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ua:
                    return v = Ua(y.type, y.key, y.props, null, m.mode, v), v.ref = Fs(m, null, y), v.return = m, v;
                case wi:
                    return y = Uu(y, m.mode, v), y.return = m, y;
                case Gn:
                    var P = y._init;
                    return d(m, P(y._payload), v)
            }
            if (Qs(y) || Ns(y)) return y = Xr(y, m.mode, v, null), y.return = m, y;
            wa(m, y)
        }
        return null
    }

    function h(m, y, v, P) {
        var k = y !== null ? y.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(m, y, "" + v, P);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ua:
                    return v.key === k ? l(m, y, v, P) : null;
                case wi:
                    return v.key === k ? u(m, y, v, P) : null;
                case Gn:
                    return k = v._init, h(m, y, k(v._payload), P)
            }
            if (Qs(v) || Ns(v)) return k !== null ? null : c(m, y, v, P, null);
            wa(m, v)
        }
        return null
    }

    function f(m, y, v, P, k) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return m = m.get(v) || null, a(y, m, "" + P, k);
        if (typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
                case ua:
                    return m = m.get(P.key === null ? v : P.key) || null, l(y, m, P, k);
                case wi:
                    return m = m.get(P.key === null ? v : P.key) || null, u(y, m, P, k);
                case Gn:
                    var L = P._init;
                    return f(m, y, v, L(P._payload), k)
            }
            if (Qs(P) || Ns(P)) return m = m.get(v) || null, c(y, m, P, k, null);
            wa(y, P)
        }
        return null
    }

    function g(m, y, v, P) {
        for (var k = null, L = null, w = y, T = y = 0, A = null; w !== null && T < v.length; T++) {
            w.index > T ? (A = w, w = null) : A = w.sibling;
            var O = h(m, w, v[T], P);
            if (O === null) {
                w === null && (w = A);
                break
            }
            e && w && O.alternate === null && t(m, w), y = s(O, y, T), L === null ? k = O : L.sibling = O, L = O, w = A
        }
        if (T === v.length) return n(m, w), xe && Nr(m, T), k;
        if (w === null) {
            for (; T < v.length; T++) w = d(m, v[T], P), w !== null && (y = s(w, y, T), L === null ? k = w : L.sibling = w, L = w);
            return xe && Nr(m, T), k
        }
        for (w = r(m, w); T < v.length; T++) A = f(w, m, T, v[T], P), A !== null && (e && A.alternate !== null && w.delete(A.key === null ? T : A.key), y = s(A, y, T), L === null ? k = A : L.sibling = A, L = A);
        return e && w.forEach(function(H) {
            return t(m, H)
        }), xe && Nr(m, T), k
    }

    function p(m, y, v, P) {
        var k = Ns(v);
        if (typeof k != "function") throw Error(D(150));
        if (v = k.call(v), v == null) throw Error(D(151));
        for (var L = k = null, w = y, T = y = 0, A = null, O = v.next(); w !== null && !O.done; T++, O = v.next()) {
            w.index > T ? (A = w, w = null) : A = w.sibling;
            var H = h(m, w, O.value, P);
            if (H === null) {
                w === null && (w = A);
                break
            }
            e && w && H.alternate === null && t(m, w), y = s(H, y, T), L === null ? k = H : L.sibling = H, L = H, w = A
        }
        if (O.done) return n(m, w), xe && Nr(m, T), k;
        if (w === null) {
            for (; !O.done; T++, O = v.next()) O = d(m, O.value, P), O !== null && (y = s(O, y, T), L === null ? k = O : L.sibling = O, L = O);
            return xe && Nr(m, T), k
        }
        for (w = r(m, w); !O.done; T++, O = v.next()) O = f(w, m, T, O.value, P), O !== null && (e && O.alternate !== null && w.delete(O.key === null ? T : O.key), y = s(O, y, T), L === null ? k = O : L.sibling = O, L = O);
        return e && w.forEach(function(de) {
            return t(m, de)
        }), xe && Nr(m, T), k
    }

    function E(m, y, v, P) {
        if (typeof v == "object" && v !== null && v.type === Si && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ua:
                    e: {
                        for (var k = v.key, L = y; L !== null;) {
                            if (L.key === k) {
                                if (k = v.type, k === Si) {
                                    if (L.tag === 7) {
                                        n(m, L.sibling), y = i(L, v.props.children), y.return = m, m = y;
                                        break e
                                    }
                                } else if (L.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Gn && zp(k) === L.type) {
                                    n(m, L.sibling), y = i(L, v.props), y.ref = Fs(m, L, v), y.return = m, m = y;
                                    break e
                                }
                                n(m, L);
                                break
                            } else t(m, L);
                            L = L.sibling
                        }
                        v.type === Si ? (y = Xr(v.props.children, m.mode, P, v.key), y.return = m, m = y) : (P = Ua(v.type, v.key, v.props, null, m.mode, P), P.ref = Fs(m, y, v), P.return = m, m = P)
                    }
                    return o(m);
                case wi:
                    e: {
                        for (L = v.key; y !== null;) {
                            if (y.key === L)
                                if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                                    n(m, y.sibling), y = i(y, v.children || []), y.return = m, m = y;
                                    break e
                                } else {
                                    n(m, y);
                                    break
                                }
                            else t(m, y);
                            y = y.sibling
                        }
                        y = Uu(v, m.mode, P),
                        y.return = m,
                        m = y
                    }
                    return o(m);
                case Gn:
                    return L = v._init, E(m, y, L(v._payload), P)
            }
            if (Qs(v)) return g(m, y, v, P);
            if (Ns(v)) return p(m, y, v, P);
            wa(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, y !== null && y.tag === 6 ? (n(m, y.sibling), y = i(y, v), y.return = m, m = y) : (n(m, y), y = zu(v, m.mode, P), y.return = m, m = y), o(m)) : n(m, y)
    }
    return E
}
var os = Iv(!0),
    zv = Iv(!1),
    ul = Tr(null),
    cl = null,
    Li = null,
    Pf = null;

function Cf() {
    Pf = Li = cl = null
}

function Tf(e) {
    var t = ul.current;
    ye(ul), e._currentValue = t
}

function Hc(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ui(e, t) {
    cl = e, Pf = Li = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ft = !0), e.firstContext = null)
}

function Bt(e) {
    var t = e._currentValue;
    if (Pf !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Li === null) {
            if (cl === null) throw Error(D(308));
            Li = e, cl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Li = Li.next = e;
    return t
}
var Vr = null;

function Rf(e) {
    Vr === null ? Vr = [e] : Vr.push(e)
}

function Uv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Rf(t)) : (n.next = i.next, i.next = n), t.interleaved = n, On(e, r)
}

function On(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Yn = !1;

function kf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Bv(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Rn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function pr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, ne & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, On(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Rf(r)) : (t.next = i.next, i.next = t), r.interleaved = t, On(e, n)
}

function Ma(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ff(e, n)
    }
}

function Up(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function dl(e, t, n, r) {
    var i = e.updateQueue;
    Yn = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, o === null ? s = u : o.next = u, o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0, c = u = l = null, a = s;
        do {
            var h = a.lane,
                f = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e,
                        p = a;
                    switch (h = t, f = n, p.tag) {
                        case 1:
                            if (g = p.payload, typeof g == "function") {
                                d = g.call(f, d, h);
                                break e
                            }
                            d = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = p.payload, h = typeof g == "function" ? g.call(f, d, h) : g, h == null) break e;
                            d = Ce({}, d, h);
                            break e;
                        case 2:
                            Yn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else f = {
                eventTime: f,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = f, l = d) : c = c.next = f, o |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        ri |= o, e.lanes = o, e.memoizedState = d
    }
}

function Bp(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(D(191, i));
                i.call(r)
            }
        }
}
var Qo = {},
    fn = Tr(Qo),
    Co = Tr(Qo),
    To = Tr(Qo);

function Ir(e) {
    if (e === Qo) throw Error(D(174));
    return e
}

function jf(e, t) {
    switch (fe(To, t), fe(Co, e), fe(fn, Qo), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Cc(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cc(t, e)
    }
    ye(fn), fe(fn, t)
}

function as() {
    ye(fn), ye(Co), ye(To)
}

function $v(e) {
    Ir(To.current);
    var t = Ir(fn.current),
        n = Cc(t, e.type);
    t !== n && (fe(Co, e), fe(fn, n))
}

function Lf(e) {
    Co.current === e && (ye(fn), ye(Co))
}
var Se = Tr(0);

function fl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ou = [];

function bf() {
    for (var e = 0; e < Ou.length; e++) Ou[e]._workInProgressVersionPrimary = null;
    Ou.length = 0
}
var Fa = Vn.ReactCurrentDispatcher,
    Mu = Vn.ReactCurrentBatchConfig,
    ni = 0,
    Pe = null,
    De = null,
    Ve = null,
    hl = !1,
    ro = !1,
    Ro = 0,
    GE = 0;

function Qe() {
    throw Error(D(321))
}

function Nf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!en(e[n], t[n])) return !1;
    return !0
}

function Af(e, t, n, r, i, s) {
    if (ni = s, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fa.current = e === null || e.memoizedState === null ? ZE : eP, e = n(r, i), ro) {
        s = 0;
        do {
            if (ro = !1, Ro = 0, 25 <= s) throw Error(D(301));
            s += 1, Ve = De = null, t.updateQueue = null, Fa.current = tP, e = n(r, i)
        } while (ro)
    }
    if (Fa.current = pl, t = De !== null && De.next !== null, ni = 0, Ve = De = Pe = null, hl = !1, t) throw Error(D(300));
    return e
}

function Df() {
    var e = Ro !== 0;
    return Ro = 0, e
}

function sn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ve === null ? Pe.memoizedState = Ve = e : Ve = Ve.next = e, Ve
}

function $t() {
    if (De === null) {
        var e = Pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = De.next;
    var t = Ve === null ? Pe.memoizedState : Ve.next;
    if (t !== null) Ve = t, De = e;
    else {
        if (e === null) throw Error(D(310));
        De = e, e = {
            memoizedState: De.memoizedState,
            baseState: De.baseState,
            baseQueue: De.baseQueue,
            queue: De.queue,
            next: null
        }, Ve === null ? Pe.memoizedState = Ve = e : Ve = Ve.next = e
    }
    return Ve
}

function ko(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Fu(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = De,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var a = o = null,
            l = null,
            u = s;
        do {
            var c = u.lane;
            if ((ni & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, o = r) : l = l.next = d, Pe.lanes |= c, ri |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a, en(r, t.memoizedState) || (ft = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, Pe.lanes |= s, ri |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function _u(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        en(s, t.memoizedState) || (ft = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function Hv() {}

function Wv(e, t) {
    var n = Pe,
        r = $t(),
        i = t(),
        s = !en(r.memoizedState, i);
    if (s && (r.memoizedState = i, ft = !0), r = r.queue, Of(qv.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ve !== null && Ve.memoizedState.tag & 1) {
        if (n.flags |= 2048, jo(9, Qv.bind(null, n, r, i, t), void 0, null), Ie === null) throw Error(D(349));
        ni & 30 || Kv(n, t, i)
    }
    return i
}

function Kv(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Qv(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gv(t) && Yv(e)
}

function qv(e, t, n) {
    return n(function() {
        Gv(t) && Yv(e)
    })
}

function Gv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !en(e, n)
    } catch {
        return !0
    }
}

function Yv(e) {
    var t = On(e, 1);
    t !== null && Jt(t, e, 1, -1)
}

function $p(e) {
    var t = sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ko,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = JE.bind(null, Pe, e), [t.memoizedState, e]
}

function jo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Xv() {
    return $t().memoizedState
}

function _a(e, t, n, r) {
    var i = sn();
    Pe.flags |= e, i.memoizedState = jo(1 | t, n, void 0, r === void 0 ? null : r)
}

function zl(e, t, n, r) {
    var i = $t();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (De !== null) {
        var o = De.memoizedState;
        if (s = o.destroy, r !== null && Nf(r, o.deps)) {
            i.memoizedState = jo(t, n, s, r);
            return
        }
    }
    Pe.flags |= e, i.memoizedState = jo(1 | t, n, s, r)
}

function Hp(e, t) {
    return _a(8390656, 8, e, t)
}

function Of(e, t) {
    return zl(2048, 8, e, t)
}

function Jv(e, t) {
    return zl(4, 2, e, t)
}

function Zv(e, t) {
    return zl(4, 4, e, t)
}

function e0(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function t0(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zl(4, 4, e0.bind(null, t, e), n)
}

function Mf() {}

function n0(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function r0(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function i0(e, t, n) {
    return ni & 21 ? (en(n, t) || (n = uv(), Pe.lanes |= n, ri |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ft = !0), e.memoizedState = n)
}

function YE(e, t) {
    var n = oe;
    oe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Mu.transition;
    Mu.transition = {};
    try {
        e(!1), t()
    } finally {
        oe = n, Mu.transition = r
    }
}

function s0() {
    return $t().memoizedState
}

function XE(e, t, n) {
    var r = yr(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, o0(e)) a0(t, n);
    else if (n = Uv(e, t, n, r), n !== null) {
        var i = ot();
        Jt(n, e, r, i), l0(n, t, r)
    }
}

function JE(e, t, n) {
    var r = yr(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (o0(e)) a0(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                a = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = a, en(a, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Rf(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Uv(e, t, i, r), n !== null && (i = ot(), Jt(n, e, r, i), l0(n, t, r))
    }
}

function o0(e) {
    var t = e.alternate;
    return e === Pe || t !== null && t === Pe
}

function a0(e, t) {
    ro = hl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function l0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ff(e, n)
    }
}
var pl = {
        readContext: Bt,
        useCallback: Qe,
        useContext: Qe,
        useEffect: Qe,
        useImperativeHandle: Qe,
        useInsertionEffect: Qe,
        useLayoutEffect: Qe,
        useMemo: Qe,
        useReducer: Qe,
        useRef: Qe,
        useState: Qe,
        useDebugValue: Qe,
        useDeferredValue: Qe,
        useTransition: Qe,
        useMutableSource: Qe,
        useSyncExternalStore: Qe,
        useId: Qe,
        unstable_isNewReconciler: !1
    },
    ZE = {
        readContext: Bt,
        useCallback: function(e, t) {
            return sn().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Bt,
        useEffect: Hp,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, _a(4194308, 4, e0.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return _a(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return _a(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = sn();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = sn();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = XE.bind(null, Pe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = sn();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: $p,
        useDebugValue: Mf,
        useDeferredValue: function(e) {
            return sn().memoizedState = e
        },
        useTransition: function() {
            var e = $p(!1),
                t = e[0];
            return e = YE.bind(null, e[1]), sn().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Pe,
                i = sn();
            if (xe) {
                if (n === void 0) throw Error(D(407));
                n = n()
            } else {
                if (n = t(), Ie === null) throw Error(D(349));
                ni & 30 || Kv(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, Hp(qv.bind(null, r, s, e), [e]), r.flags |= 2048, jo(9, Qv.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = sn(),
                t = Ie.identifierPrefix;
            if (xe) {
                var n = Cn,
                    r = Pn;
                n = (r & ~(1 << 32 - Xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ro++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = GE++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    eP = {
        readContext: Bt,
        useCallback: n0,
        useContext: Bt,
        useEffect: Of,
        useImperativeHandle: t0,
        useInsertionEffect: Jv,
        useLayoutEffect: Zv,
        useMemo: r0,
        useReducer: Fu,
        useRef: Xv,
        useState: function() {
            return Fu(ko)
        },
        useDebugValue: Mf,
        useDeferredValue: function(e) {
            var t = $t();
            return i0(t, De.memoizedState, e)
        },
        useTransition: function() {
            var e = Fu(ko)[0],
                t = $t().memoizedState;
            return [e, t]
        },
        useMutableSource: Hv,
        useSyncExternalStore: Wv,
        useId: s0,
        unstable_isNewReconciler: !1
    },
    tP = {
        readContext: Bt,
        useCallback: n0,
        useContext: Bt,
        useEffect: Of,
        useImperativeHandle: t0,
        useInsertionEffect: Jv,
        useLayoutEffect: Zv,
        useMemo: r0,
        useReducer: _u,
        useRef: Xv,
        useState: function() {
            return _u(ko)
        },
        useDebugValue: Mf,
        useDeferredValue: function(e) {
            var t = $t();
            return De === null ? t.memoizedState = e : i0(t, De.memoizedState, e)
        },
        useTransition: function() {
            var e = _u(ko)[0],
                t = $t().memoizedState;
            return [e, t]
        },
        useMutableSource: Hv,
        useSyncExternalStore: Wv,
        useId: s0,
        unstable_isNewReconciler: !1
    };

function Kt(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Wc(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ul = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? di(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ot(),
            i = yr(e),
            s = Rn(r, i);
        s.payload = t, n != null && (s.callback = n), t = pr(e, s, i), t !== null && (Jt(t, e, i, r), Ma(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ot(),
            i = yr(e),
            s = Rn(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = pr(e, s, i), t !== null && (Jt(t, e, i, r), Ma(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ot(),
            r = yr(e),
            i = Rn(n, r);
        i.tag = 2, t != null && (i.callback = t), t = pr(e, i, r), t !== null && (Jt(t, e, r, n), Ma(t, e, r))
    }
};

function Wp(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !wo(n, r) || !wo(i, s) : !0
}

function u0(e, t, n) {
    var r = !1,
        i = Sr,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = Bt(s) : (i = pt(t) ? ei : et.current, r = t.contextTypes, s = (r = r != null) ? is(e, i) : Sr), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function Kp(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null)
}

function Kc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, kf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Bt(s) : (s = pt(t) ? ei : et.current, i.context = is(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Wc(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ul.enqueueReplaceState(i, i.state, null), dl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function ls(e, t) {
    try {
        var n = "",
            r = t;
        do n += LS(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Vu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Qc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var nP = typeof WeakMap == "function" ? WeakMap : Map;

function c0(e, t, n) {
    n = Rn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        yl || (yl = !0, rd = r), Qc(e, t)
    }, n
}

function d0(e, t, n) {
    n = Rn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Qc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Qc(e, t), typeof r != "function" && (mr === null ? mr = new Set([this]) : mr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Qp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new nP;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = yP.bind(null, e, t, n), t.then(e, e))
}

function qp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Gp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, pr(n, t, 1))), n.lanes |= 1), e)
}
var rP = Vn.ReactCurrentOwner,
    ft = !1;

function st(e, t, n, r) {
    t.child = e === null ? zv(t, null, n, r) : os(t, e.child, n, r)
}

function Yp(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Ui(t, i), r = Af(e, t, n, r, s, i), n = Df(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mn(e, t, i)) : (xe && n && wf(t), t.flags |= 1, st(e, t, r, i), t.child)
}

function Xp(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !$f(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, f0(e, t, s, r, i)) : (e = Ua(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : wo, n(o, r) && e.ref === t.ref) return Mn(e, t, i)
    }
    return t.flags |= 1, e = gr(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function f0(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (wo(s, r) && e.ref === t.ref)
            if (ft = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (ft = !0);
            else return t.lanes = e.lanes, Mn(e, t, i)
    }
    return qc(e, t, n, r, i)
}

function h0(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, fe(Ni, St), St |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, fe(Ni, St), St |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, fe(Ni, St), St |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, fe(Ni, St), St |= r;
    return st(e, t, i, n), t.child
}

function p0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function qc(e, t, n, r, i) {
    var s = pt(n) ? ei : et.current;
    return s = is(t, s), Ui(t, i), n = Af(e, t, n, r, s, i), r = Df(), e !== null && !ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mn(e, t, i)) : (xe && r && wf(t), t.flags |= 1, st(e, t, n, i), t.child)
}

function Jp(e, t, n, r, i) {
    if (pt(n)) {
        var s = !0;
        ol(t)
    } else s = !1;
    if (Ui(t, i), t.stateNode === null) Va(e, t), u0(t, n, r), Kc(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Bt(u) : (u = pt(n) ? ei : et.current, u = is(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && Kp(t, o, r, u), Yn = !1;
        var h = t.memoizedState;
        o.state = h, dl(t, r, o, i), l = t.memoizedState, a !== r || h !== l || ht.current || Yn ? (typeof c == "function" && (Wc(t, n, c, r), l = t.memoizedState), (a = Yn || Wp(t, n, a, r, h, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Bv(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Kt(t.type, a), o.props = u, d = t.pendingProps, h = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Bt(l) : (l = pt(n) ? ei : et.current, l = is(t, l));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || h !== l) && Kp(t, o, r, l), Yn = !1, h = t.memoizedState, o.state = h, dl(t, r, o, i);
        var g = t.memoizedState;
        a !== d || h !== g || ht.current || Yn ? (typeof f == "function" && (Wc(t, n, f, r), g = t.memoizedState), (u = Yn || Wp(t, n, u, r, h, g, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Gc(e, t, n, r, s, i)
}

function Gc(e, t, n, r, i, s) {
    p0(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && _p(t, n, !1), Mn(e, t, s);
    r = t.stateNode, rP.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = os(t, e.child, null, s), t.child = os(t, null, a, s)) : st(e, t, a, s), t.memoizedState = r.state, i && _p(t, n, !0), t.child
}

function m0(e) {
    var t = e.stateNode;
    t.pendingContext ? Fp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fp(e, t.context, !1), jf(e, t.containerInfo)
}

function Zp(e, t, n, r, i) {
    return ss(), Ef(i), t.flags |= 256, st(e, t, n, r), t.child
}
var Yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Xc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function y0(e, t, n) {
    var r = t.pendingProps,
        i = Se.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), fe(Se, i & 1), e === null) return $c(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Hl(o, r, 0, null), e = Xr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Xc(n), t.memoizedState = Yc, e) : Ff(t, o));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return iP(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = gr(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = gr(a, s) : (s = Xr(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Xc(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Yc, r
    }
    return s = e.child, e = s.sibling, r = gr(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ff(e, t) {
    return t = Hl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Sa(e, t, n, r) {
    return r !== null && Ef(r), os(t, e.child, null, n), e = Ff(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function iP(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vu(Error(D(422))), Sa(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Hl({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = Xr(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && os(t, e.child, null, o), t.child.memoizedState = Xc(o), t.memoizedState = Yc, s);
    if (!(t.mode & 1)) return Sa(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(D(419)), r = Vu(s, r, void 0), Sa(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, ft || a) {
        if (r = Ie, r !== null) {
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
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, On(e, i), Jt(r, e, i, -1))
        }
        return Bf(), r = Vu(Error(D(421))), Sa(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gP.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Et = hr(i.nextSibling), Pt = t, xe = !0, Yt = null, e !== null && (Ft[_t++] = Pn, Ft[_t++] = Cn, Ft[_t++] = ti, Pn = e.id, Cn = e.overflow, ti = t), t = Ff(t, r.children), t.flags |= 4096, t)
}

function em(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Hc(e.return, t, n)
}

function Iu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function g0(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (st(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && em(e, n, t);
            else if (e.tag === 19) em(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (fe(Se, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && fl(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Iu(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && fl(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Iu(t, !0, n, null, s);
            break;
        case "together":
            Iu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Va(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ri |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child, n = gr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = gr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function sP(e, t, n) {
    switch (t.tag) {
        case 3:
            m0(t), ss();
            break;
        case 5:
            $v(t);
            break;
        case 1:
            pt(t.type) && ol(t);
            break;
        case 4:
            jf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            fe(ul, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (fe(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? y0(e, t, n) : (fe(Se, Se.current & 1), e = Mn(e, t, n), e !== null ? e.sibling : null);
            fe(Se, Se.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return g0(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(Se, Se.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, h0(e, t, n)
    }
    return Mn(e, t, n)
}
var v0, Jc, x0, w0;
v0 = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Jc = function() {};
x0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Ir(fn.current);
        var s = null;
        switch (n) {
            case "input":
                i = wc(e, i), r = wc(e, r), s = [];
                break;
            case "select":
                i = Ce({}, i, {
                    value: void 0
                }), r = Ce({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Pc(e, i), r = Pc(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = il)
        }
        Tc(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ho.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                    } else n || (s || (s = []), s.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ho.hasOwnProperty(u) ? (l != null && u === "onScroll" && me("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
w0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function _s(e, t) {
    if (!xe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function oP(e, t, n) {
    var r = t.pendingProps;
    switch (Sf(t), t.tag) {
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
            return qe(t), null;
        case 1:
            return pt(t.type) && sl(), qe(t), null;
        case 3:
            return r = t.stateNode, as(), ye(ht), ye(et), bf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Yt !== null && (od(Yt), Yt = null))), Jc(e, t), qe(t), null;
        case 5:
            Lf(t);
            var i = Ir(To.current);
            if (n = t.type, e !== null && t.stateNode != null) x0(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(D(166));
                    return qe(t), null
                }
                if (e = Ir(fn.current), xa(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[cn] = t, r[Po] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            me("cancel", r), me("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            me("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Gs.length; i++) me(Gs[i], r);
                            break;
                        case "source":
                            me("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            me("error", r), me("load", r);
                            break;
                        case "details":
                            me("toggle", r);
                            break;
                        case "input":
                            up(r, s), me("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, me("invalid", r);
                            break;
                        case "textarea":
                            dp(r, s), me("invalid", r)
                    }
                    Tc(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && va(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && va(r.textContent, a, e), i = ["children", "" + a]) : ho.hasOwnProperty(o) && a != null && o === "onScroll" && me("scroll", r)
                        } switch (n) {
                        case "input":
                            ca(r), cp(r, s, !0);
                            break;
                        case "textarea":
                            ca(r), fp(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = il)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = qg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[cn] = t, e[Po] = r, v0(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Rc(n, r), n) {
                            case "dialog":
                                me("cancel", e), me("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                me("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Gs.length; i++) me(Gs[i], e);
                                i = r;
                                break;
                            case "source":
                                me("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                me("error", e), me("load", e), i = r;
                                break;
                            case "details":
                                me("toggle", e), i = r;
                                break;
                            case "input":
                                up(e, r), i = wc(e, r), me("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Ce({}, r, {
                                    value: void 0
                                }), me("invalid", e);
                                break;
                            case "textarea":
                                dp(e, r), i = Pc(e, r), me("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Tc(n, i),
                        a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? Xg(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Gg(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && po(e, l) : typeof l == "number" && po(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ho.hasOwnProperty(s) ? l != null && s === "onScroll" && me("scroll", e) : l != null && of(e, s, l, o))
                            } switch (n) {
                            case "input":
                                ca(e), cp(e, r, !1);
                                break;
                            case "textarea":
                                ca(e), fp(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + wr(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? _i(e, !!r.multiple, s, !1) : r.defaultValue != null && _i(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = il)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return qe(t), null;
        case 6:
            if (e && t.stateNode != null) w0(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
                if (n = Ir(To.current), Ir(fn.current), xa(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[cn] = t, (s = r.nodeValue !== n) && (e = Pt, e !== null)) switch (e.tag) {
                        case 3:
                            va(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && va(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cn] = t, t.stateNode = r
            }
            return qe(t), null;
        case 13:
            if (ye(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (xe && Et !== null && t.mode & 1 && !(t.flags & 128)) Vv(), ss(), t.flags |= 98560, s = !1;
                else if (s = xa(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(D(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(D(317));
                        s[cn] = t
                    } else ss(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    qe(t), s = !1
                } else Yt !== null && (od(Yt), Yt = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Me === 0 && (Me = 3) : Bf())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
        case 4:
            return as(), Jc(e, t), e === null && So(t.stateNode.containerInfo), qe(t), null;
        case 10:
            return Tf(t.type._context), qe(t), null;
        case 17:
            return pt(t.type) && sl(), qe(t), null;
        case 19:
            if (ye(Se), s = t.memoizedState, s === null) return qe(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) _s(s, !1);
                else {
                    if (Me !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = fl(e), o !== null) {
                                for (t.flags |= 128, _s(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return fe(Se, Se.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && je() > us && (t.flags |= 128, r = !0, _s(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = fl(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _s(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !xe) return qe(t), null
                    } else 2 * je() - s.renderingStartTime > us && n !== 1073741824 && (t.flags |= 128, r = !0, _s(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = je(), t.sibling = null, n = Se.current, fe(Se, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
        case 22:
        case 23:
            return Uf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? St & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(D(156, t.tag))
}

function aP(e, t) {
    switch (Sf(t), t.tag) {
        case 1:
            return pt(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return as(), ye(ht), ye(et), bf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Lf(t), null;
        case 13:
            if (ye(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(D(340));
                ss()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ye(Se), null;
        case 4:
            return as(), null;
        case 10:
            return Tf(t.type._context), null;
        case 22:
        case 23:
            return Uf(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ea = !1,
    Xe = !1,
    lP = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;

function bi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Re(e, t, r)
        } else n.current = null
}

function Zc(e, t, n) {
    try {
        n()
    } catch (r) {
        Re(e, t, r)
    }
}
var tm = !1;

function uP(e, t) {
    if (Fc = tl, e = Tv(), xf(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    h = null;
                t: for (;;) {
                    for (var f; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i), d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r), d.nodeType === 3 && (o += d.nodeValue.length), (f = d.firstChild) !== null;) h = d, d = f;
                    for (;;) {
                        if (d === e) break t;
                        if (h === n && ++u === i && (a = o), h === s && ++c === r && (l = o), (f = d.nextSibling) !== null) break;
                        d = h, h = d.parentNode
                    }
                    d = f
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (_c = {
            focusedElem: e,
            selectionRange: n
        }, tl = !1, V = t; V !== null;)
        if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
        else
            for (; V !== null;) {
                t = V;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var p = g.memoizedProps,
                                    E = g.memoizedState,
                                    m = t.stateNode,
                                    y = m.getSnapshotBeforeUpdate(t.elementType === t.type ? p : Kt(t.type, p), E);
                                m.__reactInternalSnapshotBeforeUpdate = y
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                    }
                } catch (P) {
                    Re(t, t.return, P)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, V = e;
                    break
                }
                V = t.return
            }
    return g = tm, tm = !1, g
}

function io(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && Zc(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function Bl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ed(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function S0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, S0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cn], delete t[Po], delete t[zc], delete t[WE], delete t[KE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function E0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function nm(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || E0(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function td(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = il));
    else if (r !== 4 && (e = e.child, e !== null))
        for (td(e, t, n), e = e.sibling; e !== null;) td(e, t, n), e = e.sibling
}

function nd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (nd(e, t, n), e = e.sibling; e !== null;) nd(e, t, n), e = e.sibling
}
var $e = null,
    qt = !1;

function Bn(e, t, n) {
    for (n = n.child; n !== null;) P0(e, t, n), n = n.sibling
}

function P0(e, t, n) {
    if (dn && typeof dn.onCommitFiberUnmount == "function") try {
        dn.onCommitFiberUnmount(Ol, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Xe || bi(n, t);
        case 6:
            var r = $e,
                i = qt;
            $e = null, Bn(e, t, n), $e = r, qt = i, $e !== null && (qt ? (e = $e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : $e.removeChild(n.stateNode));
            break;
        case 18:
            $e !== null && (qt ? (e = $e, n = n.stateNode, e.nodeType === 8 ? Au(e.parentNode, n) : e.nodeType === 1 && Au(e, n), vo(e)) : Au($e, n.stateNode));
            break;
        case 4:
            r = $e, i = qt, $e = n.stateNode.containerInfo, qt = !0, Bn(e, t, n), $e = r, qt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && Zc(n, t, o), i = i.next
                } while (i !== r)
            }
            Bn(e, t, n);
            break;
        case 1:
            if (!Xe && (bi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Re(n, t, a)
            }
            Bn(e, t, n);
            break;
        case 21:
            Bn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, Bn(e, t, n), Xe = r) : Bn(e, t, n);
            break;
        default:
            Bn(e, t, n)
    }
}

function rm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new lP), t.forEach(function(r) {
            var i = vP.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Wt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            $e = a.stateNode, qt = !1;
                            break e;
                        case 3:
                            $e = a.stateNode.containerInfo, qt = !0;
                            break e;
                        case 4:
                            $e = a.stateNode.containerInfo, qt = !0;
                            break e
                    }
                    a = a.return
                }
                if ($e === null) throw Error(D(160));
                P0(s, o, i), $e = null, qt = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                Re(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) C0(t, e), t = t.sibling
}

function C0(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Wt(t, e), rn(e), r & 4) {
                try {
                    io(3, e, e.return), Bl(3, e)
                } catch (p) {
                    Re(e, e.return, p)
                }
                try {
                    io(5, e, e.return)
                } catch (p) {
                    Re(e, e.return, p)
                }
            }
            break;
        case 1:
            Wt(t, e), rn(e), r & 512 && n !== null && bi(n, n.return);
            break;
        case 5:
            if (Wt(t, e), rn(e), r & 512 && n !== null && bi(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    po(i, "")
                } catch (p) {
                    Re(e, e.return, p)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && Kg(i, s), Rc(a, o);
                    var u = Rc(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o],
                            d = l[o + 1];
                        c === "style" ? Xg(i, d) : c === "dangerouslySetInnerHTML" ? Gg(i, d) : c === "children" ? po(i, d) : of(i, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            Sc(i, s);
                            break;
                        case "textarea":
                            Qg(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var f = s.value;
                            f != null ? _i(i, !!s.multiple, f, !1) : h !== !!s.multiple && (s.defaultValue != null ? _i(i, !!s.multiple, s.defaultValue, !0) : _i(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Po] = s
                } catch (p) {
                    Re(e, e.return, p)
                }
            }
            break;
        case 6:
            if (Wt(t, e), rn(e), r & 4) {
                if (e.stateNode === null) throw Error(D(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (p) {
                    Re(e, e.return, p)
                }
            }
            break;
        case 3:
            if (Wt(t, e), rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                vo(t.containerInfo)
            } catch (p) {
                Re(e, e.return, p)
            }
            break;
        case 4:
            Wt(t, e), rn(e);
            break;
        case 13:
            Wt(t, e), rn(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (If = je())), r & 4 && rm(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (u = Xe) || c, Wt(t, e), Xe = u) : Wt(t, e), rn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (V = e, c = e.child; c !== null;) {
                        for (d = V = c; V !== null;) {
                            switch (h = V, f = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    io(4, h, h.return);
                                    break;
                                case 1:
                                    bi(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (p) {
                                            Re(r, n, p)
                                        }
                                    }
                                    break;
                                case 5:
                                    bi(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        sm(d);
                                        continue
                                    }
                            }
                            f !== null ? (f.return = h, V = f) : sm(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Yg("display", o))
                            } catch (p) {
                                Re(e, e.return, p)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (p) {
                            Re(e, e.return, p)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Wt(t, e), rn(e), r & 4 && rm(e);
            break;
        case 21:
            break;
        default:
            Wt(t, e), rn(e)
    }
}

function rn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (E0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (po(i, ""), r.flags &= -33);
                    var s = nm(e);
                    nd(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = nm(e);
                    td(e, a, o);
                    break;
                default:
                    throw Error(D(161))
            }
        }
        catch (l) {
            Re(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function cP(e, t, n) {
    V = e, T0(e)
}

function T0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null;) {
        var i = V,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ea;
            if (!o) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || Xe;
                a = Ea;
                var u = Xe;
                if (Ea = o, (Xe = l) && !u)
                    for (V = i; V !== null;) o = V, l = o.child, o.tag === 22 && o.memoizedState !== null ? om(i) : l !== null ? (l.return = o, V = l) : om(i);
                for (; s !== null;) V = s, T0(s), s = s.sibling;
                V = i, Ea = a, Xe = u
            }
            im(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, V = s) : im(e)
    }
}

function im(e) {
    for (; V !== null;) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Xe || Bl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Xe)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Kt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = t.updateQueue;
                        s !== null && Bp(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Bp(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && vo(d)
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
                        throw Error(D(163))
                }
                Xe || t.flags & 512 && ed(t)
            } catch (h) {
                Re(t, t.return, h)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function sm(e) {
    for (; V !== null;) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function om(e) {
    for (; V !== null;) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Bl(4, t)
                    } catch (l) {
                        Re(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Re(t, i, l)
                        }
                    }
                    var s = t.return;
                    try {
                        ed(t)
                    } catch (l) {
                        Re(t, s, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        ed(t)
                    } catch (l) {
                        Re(t, o, l)
                    }
            }
        } catch (l) {
            Re(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, V = a;
            break
        }
        V = t.return
    }
}
var dP = Math.ceil,
    ml = Vn.ReactCurrentDispatcher,
    _f = Vn.ReactCurrentOwner,
    zt = Vn.ReactCurrentBatchConfig,
    ne = 0,
    Ie = null,
    Ae = null,
    We = 0,
    St = 0,
    Ni = Tr(0),
    Me = 0,
    Lo = null,
    ri = 0,
    $l = 0,
    Vf = 0,
    so = null,
    dt = null,
    If = 0,
    us = 1 / 0,
    wn = null,
    yl = !1,
    rd = null,
    mr = null,
    Pa = !1,
    ur = null,
    gl = 0,
    oo = 0,
    id = null,
    Ia = -1,
    za = 0;

function ot() {
    return ne & 6 ? je() : Ia !== -1 ? Ia : Ia = je()
}

function yr(e) {
    return e.mode & 1 ? ne & 2 && We !== 0 ? We & -We : qE.transition !== null ? (za === 0 && (za = uv()), za) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yv(e.type)), e) : 1
}

function Jt(e, t, n, r) {
    if (50 < oo) throw oo = 0, id = null, Error(D(185));
    Ho(e, n, r), (!(ne & 2) || e !== Ie) && (e === Ie && (!(ne & 2) && ($l |= n), Me === 4 && Zn(e, We)), mt(e, r), n === 1 && ne === 0 && !(t.mode & 1) && (us = je() + 500, Il && Rr()))
}

function mt(e, t) {
    var n = e.callbackNode;
    qS(e, t);
    var r = el(e, e === Ie ? We : 0);
    if (r === 0) n !== null && mp(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && mp(n), t === 1) e.tag === 0 ? QE(am.bind(null, e)) : Mv(am.bind(null, e)), $E(function() {
            !(ne & 6) && Rr()
        }), n = null;
        else {
            switch (cv(r)) {
                case 1:
                    n = df;
                    break;
                case 4:
                    n = av;
                    break;
                case 16:
                    n = Za;
                    break;
                case 536870912:
                    n = lv;
                    break;
                default:
                    n = Za
            }
            n = D0(n, R0.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function R0(e, t) {
    if (Ia = -1, za = 0, ne & 6) throw Error(D(327));
    var n = e.callbackNode;
    if (Bi() && e.callbackNode !== n) return null;
    var r = el(e, e === Ie ? We : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
    else {
        t = r;
        var i = ne;
        ne |= 2;
        var s = j0();
        (Ie !== e || We !== t) && (wn = null, us = je() + 500, Yr(e, t));
        do try {
            pP();
            break
        } catch (a) {
            k0(e, a)
        }
        while (!0);
        Cf(), ml.current = s, ne = i, Ae !== null ? t = 0 : (Ie = null, We = 0, t = Me)
    }
    if (t !== 0) {
        if (t === 2 && (i = Nc(e), i !== 0 && (r = i, t = sd(e, i))), t === 1) throw n = Lo, Yr(e, 0), Zn(e, r), mt(e, je()), n;
        if (t === 6) Zn(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !fP(i) && (t = vl(e, r), t === 2 && (s = Nc(e), s !== 0 && (r = s, t = sd(e, s))), t === 1)) throw n = Lo, Yr(e, 0), Zn(e, r), mt(e, je()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(D(345));
                case 2:
                    Ar(e, dt, wn);
                    break;
                case 3:
                    if (Zn(e, r), (r & 130023424) === r && (t = If + 500 - je(), 10 < t)) {
                        if (el(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            ot(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ic(Ar.bind(null, e, dt, wn), t);
                        break
                    }
                    Ar(e, dt, wn);
                    break;
                case 4:
                    if (Zn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - Xt(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dP(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ic(Ar.bind(null, e, dt, wn), r);
                        break
                    }
                    Ar(e, dt, wn);
                    break;
                case 5:
                    Ar(e, dt, wn);
                    break;
                default:
                    throw Error(D(329))
            }
        }
    }
    return mt(e, je()), e.callbackNode === n ? R0.bind(null, e) : null
}

function sd(e, t) {
    var n = so;
    return e.current.memoizedState.isDehydrated && (Yr(e, t).flags |= 256), e = vl(e, t), e !== 2 && (t = dt, dt = n, t !== null && od(t)), e
}

function od(e) {
    dt === null ? dt = e : dt.push.apply(dt, e)
}

function fP(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!en(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Zn(e, t) {
    for (t &= ~Vf, t &= ~$l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Xt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function am(e) {
    if (ne & 6) throw Error(D(327));
    Bi();
    var t = el(e, 0);
    if (!(t & 1)) return mt(e, je()), null;
    var n = vl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Nc(e);
        r !== 0 && (t = r, n = sd(e, r))
    }
    if (n === 1) throw n = Lo, Yr(e, 0), Zn(e, t), mt(e, je()), n;
    if (n === 6) throw Error(D(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ar(e, dt, wn), mt(e, je()), null
}

function zf(e, t) {
    var n = ne;
    ne |= 1;
    try {
        return e(t)
    } finally {
        ne = n, ne === 0 && (us = je() + 500, Il && Rr())
    }
}

function ii(e) {
    ur !== null && ur.tag === 0 && !(ne & 6) && Bi();
    var t = ne;
    ne |= 1;
    var n = zt.transition,
        r = oe;
    try {
        if (zt.transition = null, oe = 1, e) return e()
    } finally {
        oe = r, zt.transition = n, ne = t, !(ne & 6) && Rr()
    }
}

function Uf() {
    St = Ni.current, ye(Ni)
}

function Yr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, BE(n)), Ae !== null)
        for (n = Ae.return; n !== null;) {
            var r = n;
            switch (Sf(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && sl();
                    break;
                case 3:
                    as(), ye(ht), ye(et), bf();
                    break;
                case 5:
                    Lf(r);
                    break;
                case 4:
                    as();
                    break;
                case 13:
                    ye(Se);
                    break;
                case 19:
                    ye(Se);
                    break;
                case 10:
                    Tf(r.type._context);
                    break;
                case 22:
                case 23:
                    Uf()
            }
            n = n.return
        }
    if (Ie = e, Ae = e = gr(e.current, null), We = St = t, Me = 0, Lo = null, Vf = $l = ri = 0, dt = so = null, Vr !== null) {
        for (t = 0; t < Vr.length; t++)
            if (n = Vr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            } Vr = null
    }
    return e
}

function k0(e, t) {
    do {
        var n = Ae;
        try {
            if (Cf(), Fa.current = pl, hl) {
                for (var r = Pe.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                hl = !1
            }
            if (ni = 0, Ve = De = Pe = null, ro = !1, Ro = 0, _f.current = null, n === null || n.return === null) {
                Me = 1, Lo = t, Ae = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (t = We, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var f = qp(o);
                    if (f !== null) {
                        f.flags &= -257, Gp(f, o, a, s, t), f.mode & 1 && Qp(s, u, t), t = f, l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var p = new Set;
                            p.add(l), t.updateQueue = p
                        } else g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qp(s, u, t), Bf();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (xe && a.mode & 1) {
                    var E = qp(o);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), Gp(E, o, a, s, t), Ef(ls(l, a));
                        break e
                    }
                }
                s = l = ls(l, a),
                Me !== 4 && (Me = 2),
                so === null ? so = [s] : so.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var m = c0(s, l, t);
                            Up(s, m);
                            break e;
                        case 1:
                            a = l;
                            var y = s.type,
                                v = s.stateNode;
                            if (!(s.flags & 128) && (typeof y.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (mr === null || !mr.has(v)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var P = d0(s, a, t);
                                Up(s, P);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            b0(n)
        } catch (k) {
            t = k, Ae === n && n !== null && (Ae = n = n.return);
            continue
        }
        break
    } while (!0)
}

function j0() {
    var e = ml.current;
    return ml.current = pl, e === null ? pl : e
}

function Bf() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Ie === null || !(ri & 268435455) && !($l & 268435455) || Zn(Ie, We)
}

function vl(e, t) {
    var n = ne;
    ne |= 2;
    var r = j0();
    (Ie !== e || We !== t) && (wn = null, Yr(e, t));
    do try {
        hP();
        break
    } catch (i) {
        k0(e, i)
    }
    while (!0);
    if (Cf(), ne = n, ml.current = r, Ae !== null) throw Error(D(261));
    return Ie = null, We = 0, Me
}

function hP() {
    for (; Ae !== null;) L0(Ae)
}

function pP() {
    for (; Ae !== null && !IS();) L0(Ae)
}

function L0(e) {
    var t = A0(e.alternate, e, St);
    e.memoizedProps = e.pendingProps, t === null ? b0(e) : Ae = t, _f.current = null
}

function b0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = aP(n, t), n !== null) {
                n.flags &= 32767, Ae = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Me = 6, Ae = null;
                return
            }
        } else if (n = oP(n, t, St), n !== null) {
            Ae = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ae = t;
            return
        }
        Ae = t = e
    } while (t !== null);
    Me === 0 && (Me = 5)
}

function Ar(e, t, n) {
    var r = oe,
        i = zt.transition;
    try {
        zt.transition = null, oe = 1, mP(e, t, n, r)
    } finally {
        zt.transition = i, oe = r
    }
    return null
}

function mP(e, t, n, r) {
    do Bi(); while (ur !== null);
    if (ne & 6) throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (GS(e, s), e === Ie && (Ae = Ie = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pa || (Pa = !0, D0(Za, function() {
            return Bi(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = zt.transition, zt.transition = null;
        var o = oe;
        oe = 1;
        var a = ne;
        ne |= 4, _f.current = null, uP(e, n), C0(n, e), ME(_c), tl = !!Fc, _c = Fc = null, e.current = n, cP(n), zS(), ne = a, oe = o, zt.transition = s
    } else e.current = n;
    if (Pa && (Pa = !1, ur = e, gl = i), s = e.pendingLanes, s === 0 && (mr = null), $S(n.stateNode), mt(e, je()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (yl) throw yl = !1, e = rd, rd = null, e;
    return gl & 1 && e.tag !== 0 && Bi(), s = e.pendingLanes, s & 1 ? e === id ? oo++ : (oo = 0, id = e) : oo = 0, Rr(), null
}

function Bi() {
    if (ur !== null) {
        var e = cv(gl),
            t = zt.transition,
            n = oe;
        try {
            if (zt.transition = null, oe = 16 > e ? 16 : e, ur === null) var r = !1;
            else {
                if (e = ur, ur = null, gl = 0, ne & 6) throw Error(D(331));
                var i = ne;
                for (ne |= 4, V = e.current; V !== null;) {
                    var s = V,
                        o = s.child;
                    if (V.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null;) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            io(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, V = d;
                                    else
                                        for (; V !== null;) {
                                            c = V;
                                            var h = c.sibling,
                                                f = c.return;
                                            if (S0(c), c === u) {
                                                V = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = f, V = h;
                                                break
                                            }
                                            V = f
                                        }
                                }
                            }
                            var g = s.alternate;
                            if (g !== null) {
                                var p = g.child;
                                if (p !== null) {
                                    g.child = null;
                                    do {
                                        var E = p.sibling;
                                        p.sibling = null, p = E
                                    } while (p !== null)
                                }
                            }
                            V = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, V = o;
                    else e: for (; V !== null;) {
                        if (s = V, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                io(9, s, s.return)
                        }
                        var m = s.sibling;
                        if (m !== null) {
                            m.return = s.return, V = m;
                            break e
                        }
                        V = s.return
                    }
                }
                var y = e.current;
                for (V = y; V !== null;) {
                    o = V;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) v.return = o, V = v;
                    else e: for (o = y; V !== null;) {
                        if (a = V, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Bl(9, a)
                            }
                        } catch (k) {
                            Re(a, a.return, k)
                        }
                        if (a === o) {
                            V = null;
                            break e
                        }
                        var P = a.sibling;
                        if (P !== null) {
                            P.return = a.return, V = P;
                            break e
                        }
                        V = a.return
                    }
                }
                if (ne = i, Rr(), dn && typeof dn.onPostCommitFiberRoot == "function") try {
                    dn.onPostCommitFiberRoot(Ol, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            oe = n, zt.transition = t
        }
    }
    return !1
}

function lm(e, t, n) {
    t = ls(n, t), t = c0(e, t, 1), e = pr(e, t, 1), t = ot(), e !== null && (Ho(e, 1, t), mt(e, t))
}

function Re(e, t, n) {
    if (e.tag === 3) lm(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                lm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mr === null || !mr.has(r))) {
                    e = ls(n, e), e = d0(t, e, 1), t = pr(t, e, 1), e = ot(), t !== null && (Ho(t, 1, e), mt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function yP(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & n, Ie === e && (We & n) === n && (Me === 4 || Me === 3 && (We & 130023424) === We && 500 > je() - If ? Yr(e, 0) : Vf |= n), mt(e, t)
}

function N0(e, t) {
    t === 0 && (e.mode & 1 ? (t = ha, ha <<= 1, !(ha & 130023424) && (ha = 4194304)) : t = 1);
    var n = ot();
    e = On(e, t), e !== null && (Ho(e, t, n), mt(e, n))
}

function gP(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), N0(e, n)
}

function vP(e, t) {
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
            throw Error(D(314))
    }
    r !== null && r.delete(t), N0(e, n)
}
var A0;
A0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ht.current) ft = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ft = !1, sP(e, t, n);
            ft = !!(e.flags & 131072)
        }
    else ft = !1, xe && t.flags & 1048576 && Fv(t, ll, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Va(e, t), e = t.pendingProps;
            var i = is(t, et.current);
            Ui(t, n), i = Af(null, t, r, e, i, n);
            var s = Df();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pt(r) ? (s = !0, ol(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, kf(t), i.updater = Ul, t.stateNode = i, i._reactInternals = t, Kc(t, r, e, n), t = Gc(null, t, r, !0, s, n)) : (t.tag = 0, xe && s && wf(t), st(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Va(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = wP(r), e = Kt(r, e), i) {
                    case 0:
                        t = qc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Jp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Yp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Xp(null, t, r, Kt(r.type, e), n);
                        break e
                }
                throw Error(D(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Kt(r, i), qc(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Kt(r, i), Jp(e, t, r, i, n);
        case 3:
            e: {
                if (m0(t), e === null) throw Error(D(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                Bv(e, t),
                dl(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = ls(Error(D(423)), t), t = Zp(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = ls(Error(D(424)), t), t = Zp(e, t, r, n, i);
                    break e
                } else
                    for (Et = hr(t.stateNode.containerInfo.firstChild), Pt = t, xe = !0, Yt = null, n = zv(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ss(), r === i) {
                        t = Mn(e, t, n);
                        break e
                    }
                    st(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return $v(t), e === null && $c(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, Vc(r, i) ? o = null : s !== null && Vc(r, s) && (t.flags |= 32), p0(e, t), st(e, t, o, n), t.child;
        case 6:
            return e === null && $c(t), null;
        case 13:
            return y0(e, t, n);
        case 4:
            return jf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = os(t, null, r, n) : st(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Kt(r, i), Yp(e, t, r, i, n);
        case 7:
            return st(e, t, t.pendingProps, n), t.child;
        case 8:
            return st(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return st(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, fe(ul, r._currentValue), r._currentValue = o, s !== null)
                    if (en(s.value, o)) {
                        if (s.children === i.children && !ht.current) {
                            t = Mn(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = Rn(-1, n & -n), l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Hc(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(D(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Hc(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                st(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Ui(t, n), i = Bt(i), r = r(i), t.flags |= 1, st(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Kt(r, t.pendingProps), i = Kt(r.type, i), Xp(e, t, r, i, n);
        case 15:
            return f0(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Kt(r, i), Va(e, t), t.tag = 1, pt(r) ? (e = !0, ol(t)) : e = !1, Ui(t, n), u0(t, r, i), Kc(t, r, i, n), Gc(null, t, r, !0, e, n);
        case 19:
            return g0(e, t, n);
        case 22:
            return h0(e, t, n)
    }
    throw Error(D(156, t.tag))
};

function D0(e, t) {
    return ov(e, t)
}

function xP(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function It(e, t, n, r) {
    return new xP(e, t, n, r)
}

function $f(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function wP(e) {
    if (typeof e == "function") return $f(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === lf) return 11;
        if (e === uf) return 14
    }
    return 2
}

function gr(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ua(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") $f(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Si:
            return Xr(n.children, i, s, t);
        case af:
            o = 8, i |= 8;
            break;
        case yc:
            return e = It(12, n, t, i | 2), e.elementType = yc, e.lanes = s, e;
        case gc:
            return e = It(13, n, t, i), e.elementType = gc, e.lanes = s, e;
        case vc:
            return e = It(19, n, t, i), e.elementType = vc, e.lanes = s, e;
        case $g:
            return Hl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ug:
                    o = 10;
                    break e;
                case Bg:
                    o = 9;
                    break e;
                case lf:
                    o = 11;
                    break e;
                case uf:
                    o = 14;
                    break e;
                case Gn:
                    o = 16, r = null;
                    break e
            }
            throw Error(D(130, e == null ? e : typeof e, ""))
    }
    return t = It(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function Xr(e, t, n, r) {
    return e = It(7, e, r, t), e.lanes = n, e
}

function Hl(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = $g, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function zu(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e
}

function Uu(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function SP(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Su(0), this.expirationTimes = Su(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Su(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Hf(e, t, n, r, i, s, o, a, l) {
    return e = new SP(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = It(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, kf(s), e
}

function EP(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wi,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function O0(e) {
    if (!e) return Sr;
    e = e._reactInternals;
    e: {
        if (di(e) !== e || e.tag !== 1) throw Error(D(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pt(n)) return Ov(e, n, t)
    }
    return t
}

function M0(e, t, n, r, i, s, o, a, l) {
    return e = Hf(n, r, !0, e, i, s, o, a, l), e.context = O0(null), n = e.current, r = ot(), i = yr(n), s = Rn(r, i), s.callback = t ?? null, pr(n, s, i), e.current.lanes = i, Ho(e, i, r), mt(e, r), e
}

function Wl(e, t, n, r) {
    var i = t.current,
        s = ot(),
        o = yr(i);
    return n = O0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pr(i, t, o), e !== null && (Jt(e, i, o, s), Ma(e, i, o)), o
}

function xl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function um(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Wf(e, t) {
    um(e, t), (e = e.alternate) && um(e, t)
}

function PP() {
    return null
}
var F0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Kf(e) {
    this._internalRoot = e
}
Kl.prototype.render = Kf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(D(409));
    Wl(e, t, null, null)
};
Kl.prototype.unmount = Kf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ii(function() {
            Wl(null, e, null, null)
        }), t[Dn] = null
    }
};

function Kl(e) {
    this._internalRoot = e
}
Kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = hv();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
        Jn.splice(n, 0, e), n === 0 && mv(e)
    }
};

function Qf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ql(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function cm() {}

function CP(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = xl(o);
                s.call(u)
            }
        }
        var o = M0(t, r, e, 0, null, !1, !1, "", cm);
        return e._reactRootContainer = o, e[Dn] = o.current, So(e.nodeType === 8 ? e.parentNode : e), ii(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = xl(l);
            a.call(u)
        }
    }
    var l = Hf(e, 0, !1, null, null, !1, !1, "", cm);
    return e._reactRootContainer = l, e[Dn] = l.current, So(e.nodeType === 8 ? e.parentNode : e), ii(function() {
        Wl(t, l, n, r)
    }), l
}

function ql(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = xl(o);
                a.call(l)
            }
        }
        Wl(t, o, e, i)
    } else o = CP(n, t, e, i, r);
    return xl(o)
}
dv = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = qs(t.pendingLanes);
                n !== 0 && (ff(t, n | 1), mt(t, je()), !(ne & 6) && (us = je() + 500, Rr()))
            }
            break;
        case 13:
            ii(function() {
                var r = On(e, 1);
                if (r !== null) {
                    var i = ot();
                    Jt(r, e, 1, i)
                }
            }), Wf(e, 1)
    }
};
hf = function(e) {
    if (e.tag === 13) {
        var t = On(e, 134217728);
        if (t !== null) {
            var n = ot();
            Jt(t, e, 134217728, n)
        }
        Wf(e, 134217728)
    }
};
fv = function(e) {
    if (e.tag === 13) {
        var t = yr(e),
            n = On(e, t);
        if (n !== null) {
            var r = ot();
            Jt(n, e, t, r)
        }
        Wf(e, t)
    }
};
hv = function() {
    return oe
};
pv = function(e, t) {
    var n = oe;
    try {
        return oe = e, t()
    } finally {
        oe = n
    }
};
jc = function(e, t, n) {
    switch (t) {
        case "input":
            if (Sc(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Vl(r);
                        if (!i) throw Error(D(90));
                        Wg(r), Sc(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Qg(e, n);
            break;
        case "select":
            t = n.value, t != null && _i(e, !!n.multiple, t, !1)
    }
};
ev = zf;
tv = ii;
var TP = {
        usingClientEntryPoint: !1,
        Events: [Ko, Ti, Vl, Jg, Zg, zf]
    },
    Vs = {
        findFiberByHostInstance: _r,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    RP = {
        bundleType: Vs.bundleType,
        version: Vs.version,
        rendererPackageName: Vs.rendererPackageName,
        rendererConfig: Vs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = iv(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Vs.findFiberByHostInstance || PP,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ca.isDisabled && Ca.supportsFiber) try {
        Ol = Ca.inject(RP), dn = Ca
    } catch {}
}
Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TP;
Rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qf(t)) throw Error(D(200));
    return EP(e, t, null, n)
};
Rt.createRoot = function(e, t) {
    if (!Qf(e)) throw Error(D(299));
    var n = !1,
        r = "",
        i = F0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Hf(e, 1, !1, null, null, n, !1, r, i), e[Dn] = t.current, So(e.nodeType === 8 ? e.parentNode : e), new Kf(t)
};
Rt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
    return e = iv(t), e = e === null ? null : e.stateNode, e
};
Rt.flushSync = function(e) {
    return ii(e)
};
Rt.hydrate = function(e, t, n) {
    if (!Ql(t)) throw Error(D(200));
    return ql(null, e, t, !0, n)
};
Rt.hydrateRoot = function(e, t, n) {
    if (!Qf(e)) throw Error(D(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = F0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = M0(t, null, e, 1, n ?? null, i, !1, s, o), e[Dn] = t.current, So(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Kl(t)
};
Rt.render = function(e, t, n) {
    if (!Ql(t)) throw Error(D(200));
    return ql(null, e, t, !1, n)
};
Rt.unmountComponentAtNode = function(e) {
    if (!Ql(e)) throw Error(D(40));
    return e._reactRootContainer ? (ii(function() {
        ql(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Dn] = null
        })
    }), !0) : !1
};
Rt.unstable_batchedUpdates = zf;
Rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ql(n)) throw Error(D(200));
    if (e == null || e._reactInternals === void 0) throw Error(D(38));
    return ql(e, t, n, !1, r)
};
Rt.version = "18.3.1-next-f1338f8080-20240426";

function _0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)
    } catch (e) {
        console.error(e)
    }
}
_0(), _g.exports = Rt;
var qf = _g.exports;
const kP = Jd(qf),
    jP = Tg({
        __proto__: null,
        default: kP
    }, [qf]);
var dm = qf;
pc.createRoot = dm.createRoot, pc.hydrateRoot = dm.hydrateRoot;
const LP = "modulepreload",
    bP = function(e) {
        return "/" + e
    },
    fm = {},
    vs = function(t, n, r) {
        let i = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const s = document.querySelector("meta[property=csp-nonce]"),
                o = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
            i = Promise.all(n.map(a => {
                if (a = bP(a), a in fm) return;
                fm[a] = !0;
                const l = a.endsWith(".css"),
                    u = l ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${u}`)) return;
                const c = document.createElement("link");
                if (c.rel = l ? "stylesheet" : LP, l || (c.as = "script", c.crossOrigin = ""), c.href = a, o && c.setAttribute("nonce", o), document.head.appendChild(c), l) return new Promise((d, h) => {
                    c.addEventListener("load", d), c.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${a}`)))
                })
            }))
        }
        return i.then(() => t()).catch(s => {
            const o = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (o.payload = s, window.dispatchEvent(o), !o.defaultPrevented) throw s
        })
    };
var xs = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    cs = typeof window > "u" || "Deno" in globalThis;

function Ot() {}

function NP(e, t) {
    return typeof e == "function" ? e(t) : e
}

function ad(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function V0(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function $i(e, t) {
    return typeof e == "function" ? e(t) : e
}

function hm(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: i,
        predicate: s,
        queryKey: o,
        stale: a
    } = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Gf(o, t.options)) return !1
        } else if (!bo(t.queryKey, o)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}

function pm(e, t) {
    const {
        exact: n,
        status: r,
        predicate: i,
        mutationKey: s
    } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (si(t.options.mutationKey) !== si(s)) return !1
        } else if (!bo(t.options.mutationKey, s)) return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}

function Gf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || si)(e)
}

function si(e) {
    return JSON.stringify(e, (t, n) => ld(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n)
}

function bo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !bo(e[n], t[n])) : !1
}

function I0(e, t) {
    if (e === t) return e;
    const n = mm(e) && mm(t);
    if (n || ld(e) && ld(t)) {
        const r = n ? e : Object.keys(e),
            i = r.length,
            s = n ? t : Object.keys(t),
            o = s.length,
            a = n ? [] : {};
        let l = 0;
        for (let u = 0; u < o; u++) {
            const c = n ? u : s[u];
            (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, l++) : (a[c] = I0(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && l++)
        }
        return i === o && l === i ? e : a
    }
    return t
}

function wl(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function mm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function ld(e) {
    if (!ym(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!ym(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function ym(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function AP(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function ud(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? I0(e, t) : t
}

function DP(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function OP(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var z0 = Symbol(),
    U0 = (e, t) => !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === z0 ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn,
    $r, er, Hi, mg, MP = (mg = class extends xs {
        constructor() {
            super();
            B(this, $r);
            B(this, er);
            B(this, Hi);
            _(this, Hi, t => {
                if (!cs && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, er) || this.setEventListener(C(this, Hi))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = C(this, er)) == null || t.call(this), _(this, er, void 0))
        }
        setEventListener(t) {
            var n;
            _(this, Hi, t), (n = C(this, er)) == null || n.call(this), _(this, er, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            C(this, $r) !== t && (_(this, $r, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof C(this, $r) == "boolean" ? C(this, $r) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, $r = new WeakMap, er = new WeakMap, Hi = new WeakMap, mg),
    No = new MP,
    Wi, tr, Ki, yg, FP = (yg = class extends xs {
        constructor() {
            super();
            B(this, Wi, !0);
            B(this, tr);
            B(this, Ki);
            _(this, Ki, t => {
                if (!cs && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, tr) || this.setEventListener(C(this, Ki))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = C(this, tr)) == null || t.call(this), _(this, tr, void 0))
        }
        setEventListener(t) {
            var n;
            _(this, Ki, t), (n = C(this, tr)) == null || n.call(this), _(this, tr, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            C(this, Wi) !== t && (_(this, Wi, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return C(this, Wi)
        }
    }, Wi = new WeakMap, tr = new WeakMap, Ki = new WeakMap, yg),
    Sl = new FP;

function _P(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function B0(e) {
    return (e ?? "online") === "online" ? Sl.isOnline() : !0
}
var $0 = class {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Bu(e) {
    return e instanceof $0
}

function H0(e) {
    let t = !1,
        n = 0,
        r = !1,
        i, s, o;
    const a = new Promise((m, y) => {
            s = m, o = y
        }),
        l = m => {
            var y;
            r || (g(new $0(m)), (y = e.abort) == null || y.call(e))
        },
        u = () => {
            t = !0
        },
        c = () => {
            t = !1
        },
        d = () => No.isFocused() && (e.networkMode === "always" || Sl.isOnline()) && e.canRun(),
        h = () => B0(e.networkMode) && e.canRun(),
        f = m => {
            var y;
            r || (r = !0, (y = e.onSuccess) == null || y.call(e, m), i == null || i(), s(m))
        },
        g = m => {
            var y;
            r || (r = !0, (y = e.onError) == null || y.call(e, m), i == null || i(), o(m))
        },
        p = () => new Promise(m => {
            var y;
            i = v => {
                (r || d()) && m(v)
            }, (y = e.onPause) == null || y.call(e)
        }).then(() => {
            var m;
            i = void 0, r || (m = e.onContinue) == null || m.call(e)
        }),
        E = () => {
            if (r) return;
            let m;
            const y = n === 0 ? e.initialPromise : void 0;
            try {
                m = y ?? e.fn()
            } catch (v) {
                m = Promise.reject(v)
            }
            Promise.resolve(m).then(f).catch(v => {
                var T;
                if (r) return;
                const P = e.retry ?? (cs ? 0 : 3),
                    k = e.retryDelay ?? _P,
                    L = typeof k == "function" ? k(n, v) : k,
                    w = P === !0 || typeof P == "number" && n < P || typeof P == "function" && P(n, v);
                if (t || !w) {
                    g(v);
                    return
                }
                n++, (T = e.onFail) == null || T.call(e, n, v), AP(L).then(() => d() ? void 0 : p()).then(() => {
                    t ? g(v) : E()
                })
            })
        };
    return {
        promise: a,
        cancel: l,
        continue: () => (i == null || i(), a),
        cancelRetry: u,
        continueRetry: c,
        canStart: h,
        start: () => (h() ? E() : p().then(E), a)
    }
}

function VP() {
    let e = [],
        t = 0,
        n = h => {
            h()
        },
        r = h => {
            h()
        },
        i = h => setTimeout(h, 0);
    const s = h => {
            i = h
        },
        o = h => {
            let f;
            t++;
            try {
                f = h()
            } finally {
                t--, t || u()
            }
            return f
        },
        a = h => {
            t ? e.push(h) : i(() => {
                n(h)
            })
        },
        l = h => (...f) => {
            a(() => {
                h(...f)
            })
        },
        u = () => {
            const h = e;
            e = [], h.length && i(() => {
                r(() => {
                    h.forEach(f => {
                        n(f)
                    })
                })
            })
        };
    return {
        batch: o,
        batchCalls: l,
        schedule: a,
        setNotifyFunction: h => {
            n = h
        },
        setBatchNotifyFunction: h => {
            r = h
        },
        setScheduler: s
    }
}
var Oe = VP(),
    Hr, gg, W0 = (gg = class {
        constructor() {
            B(this, Hr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), ad(this.gcTime) && _(this, Hr, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (cs ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            C(this, Hr) && (clearTimeout(C(this, Hr)), _(this, Hr, void 0))
        }
    }, Hr = new WeakMap, gg),
    Qi, qi, Dt, Ge, Io, Wr, Qt, xn, vg, IP = (vg = class extends W0 {
        constructor(t) {
            super();
            B(this, Qt);
            B(this, Qi);
            B(this, qi);
            B(this, Dt);
            B(this, Ge);
            B(this, Io);
            B(this, Wr);
            _(this, Wr, !1), _(this, Io, t.defaultOptions), this.setOptions(t.options), this.observers = [], _(this, Dt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, _(this, Qi, t.state || zP(this.options)), this.state = C(this, Qi), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = C(this, Ge)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = {
                ...C(this, Io),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && C(this, Dt).remove(this)
        }
        setData(t, n) {
            const r = ud(this.state.data, t, this.options);
            return Z(this, Qt, xn).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Z(this, Qt, xn).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, i;
            const n = (r = C(this, Ge)) == null ? void 0 : r.promise;
            return (i = C(this, Ge)) == null || i.cancel(t), n ? n.then(Ot).catch(Ot) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(C(this, Qi))
        }
        isActive() {
            return this.observers.some(t => t.options.enabled !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !V0(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = C(this, Ge)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = C(this, Ge)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), C(this, Dt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (C(this, Ge) && (C(this, Wr) ? C(this, Ge).cancel({
                revert: !0
            }) : C(this, Ge).cancelRetry()), this.scheduleGc()), C(this, Dt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Z(this, Qt, xn).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var l, u, c;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (C(this, Ge)) return C(this, Ge).continueRetry(), C(this, Ge).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const d = this.observers.find(h => h.options.queryFn);
                d && this.setOptions(d.options)
            }
            const r = new AbortController,
                i = d => {
                    Object.defineProperty(d, "signal", {
                        enumerable: !0,
                        get: () => (_(this, Wr, !0), r.signal)
                    })
                },
                s = () => {
                    const d = U0(this.options, n),
                        h = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return i(h), _(this, Wr, !1), this.options.persister ? this.options.persister(d, h, this) : d(h)
                },
                o = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: s
                };
            i(o), (l = this.options.behavior) == null || l.onFetch(o, this), _(this, qi, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) && Z(this, Qt, xn).call(this, {
                type: "fetch",
                meta: (c = o.fetchOptions) == null ? void 0 : c.meta
            });
            const a = d => {
                var h, f, g, p;
                Bu(d) && d.silent || Z(this, Qt, xn).call(this, {
                    type: "error",
                    error: d
                }), Bu(d) || ((f = (h = C(this, Dt).config).onError) == null || f.call(h, d, this), (p = (g = C(this, Dt).config).onSettled) == null || p.call(g, this.state.data, d, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return _(this, Ge, H0({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: o.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: d => {
                    var h, f, g, p;
                    if (d === void 0) {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    this.setData(d), (f = (h = C(this, Dt).config).onSuccess) == null || f.call(h, d, this), (p = (g = C(this, Dt).config).onSettled) == null || p.call(g, d, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: a,
                onFail: (d, h) => {
                    Z(this, Qt, xn).call(this, {
                        type: "failed",
                        failureCount: d,
                        error: h
                    })
                },
                onPause: () => {
                    Z(this, Qt, xn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Z(this, Qt, xn).call(this, {
                        type: "continue"
                    })
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0
            })), C(this, Ge).start()
        }
    }, Qi = new WeakMap, qi = new WeakMap, Dt = new WeakMap, Ge = new WeakMap, Io = new WeakMap, Wr = new WeakMap, Qt = new WeakSet, xn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return {
                        ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                    };
                case "pause":
                    return {
                        ...r, fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...r, fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...r, ...K0(r.data, this.options), fetchMeta: t.meta ?? null
                    };
                case "success":
                    return {
                        ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const i = t.error;
                    return Bu(i) && i.revert && C(this, qi) ? {
                        ...C(this, qi),
                        fetchStatus: "idle"
                    } : {
                        ...r,
                        error: i,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...r, isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...r, ...t.state
                    }
            }
        };
        this.state = n(this.state), Oe.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), C(this, Dt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, vg);

function K0(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: B0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function zP(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var on, xg, UP = (xg = class extends xs {
        constructor(t = {}) {
            super();
            B(this, on);
            this.config = t, _(this, on, new Map)
        }
        build(t, n, r) {
            const i = n.queryKey,
                s = n.queryHash ?? Gf(i, n);
            let o = this.get(s);
            return o || (o = new IP({
                cache: this,
                queryKey: i,
                queryHash: s,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(i)
            }), this.add(o)), o
        }
        add(t) {
            C(this, on).has(t.queryHash) || (C(this, on).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = C(this, on).get(t.queryHash);
            n && (t.destroy(), n === t && C(this, on).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return C(this, on).get(t)
        }
        getAll() {
            return [...C(this, on).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => hm(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => hm(t, r)) : n
        }
        notify(t) {
            Oe.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, on = new WeakMap, xg),
    an, rt, Kr, ln, Kn, wg, BP = (wg = class extends W0 {
        constructor(t) {
            super();
            B(this, ln);
            B(this, an);
            B(this, rt);
            B(this, Kr);
            this.mutationId = t.mutationId, _(this, rt, t.mutationCache), _(this, an, []), this.state = t.state || Q0(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            C(this, an).includes(t) || (C(this, an).push(t), this.clearGcTimeout(), C(this, rt).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            _(this, an, C(this, an).filter(n => n !== t)), this.scheduleGc(), C(this, rt).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            C(this, an).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, rt).remove(this))
        }
        continue () {
            var t;
            return ((t = C(this, Kr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, s, o, a, l, u, c, d, h, f, g, p, E, m, y, v, P, k, L, w;
            _(this, Kr, H0({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (T, A) => {
                    Z(this, ln, Kn).call(this, {
                        type: "failed",
                        failureCount: T,
                        error: A
                    })
                },
                onPause: () => {
                    Z(this, ln, Kn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Z(this, ln, Kn).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => C(this, rt).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !C(this, Kr).canStart();
            try {
                if (!n) {
                    Z(this, ln, Kn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((s = (i = C(this, rt).config).onMutate) == null ? void 0 : s.call(i, t, this));
                    const A = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
                    A !== this.state.context && Z(this, ln, Kn).call(this, {
                        type: "pending",
                        context: A,
                        variables: t,
                        isPaused: r
                    })
                }
                const T = await C(this, Kr).start();
                return await ((u = (l = C(this, rt).config).onSuccess) == null ? void 0 : u.call(l, T, t, this.state.context, this)), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, T, t, this.state.context)), await ((f = (h = C(this, rt).config).onSettled) == null ? void 0 : f.call(h, T, null, this.state.variables, this.state.context, this)), await ((p = (g = this.options).onSettled) == null ? void 0 : p.call(g, T, null, t, this.state.context)), Z(this, ln, Kn).call(this, {
                    type: "success",
                    data: T
                }), T
            } catch (T) {
                try {
                    throw await ((m = (E = C(this, rt).config).onError) == null ? void 0 : m.call(E, T, t, this.state.context, this)), await ((v = (y = this.options).onError) == null ? void 0 : v.call(y, T, t, this.state.context)), await ((k = (P = C(this, rt).config).onSettled) == null ? void 0 : k.call(P, void 0, T, this.state.variables, this.state.context, this)), await ((w = (L = this.options).onSettled) == null ? void 0 : w.call(L, void 0, T, t, this.state.context)), T
                } finally {
                    Z(this, ln, Kn).call(this, {
                        type: "error",
                        error: T
                    })
                }
            } finally {
                C(this, rt).runNext(this)
            }
        }
    }, an = new WeakMap, rt = new WeakMap, Kr = new WeakMap, ln = new WeakSet, Kn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return {
                        ...r, failureCount: t.failureCount, failureReason: t.error
                    };
                case "pause":
                    return {
                        ...r, isPaused: !0
                    };
                case "continue":
                    return {
                        ...r, isPaused: !1
                    };
                case "pending":
                    return {
                        ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                    };
                case "error":
                    return {
                        ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                    }
            }
        };
        this.state = n(this.state), Oe.batch(() => {
            C(this, an).forEach(r => {
                r.onMutationUpdate(t)
            }), C(this, rt).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, wg);

function Q0() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var wt, zo, Sg, $P = (Sg = class extends xs {
    constructor(t = {}) {
        super();
        B(this, wt);
        B(this, zo);
        this.config = t, _(this, wt, new Map), _(this, zo, Date.now())
    }
    build(t, n, r) {
        const i = new BP({
            mutationCache: this,
            mutationId: ++aa(this, zo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i), i
    }
    add(t) {
        const n = Ta(t),
            r = C(this, wt).get(n) ?? [];
        r.push(t), C(this, wt).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ta(t);
        if (C(this, wt).has(n)) {
            const i = (r = C(this, wt).get(n)) == null ? void 0 : r.filter(s => s !== t);
            i && (i.length === 0 ? C(this, wt).delete(n) : C(this, wt).set(n, i))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = C(this, wt).get(Ta(t))) == null ? void 0 : r.find(i => i.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = C(this, wt).get(Ta(t))) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Oe.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...C(this, wt).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => pm(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => pm(t, n))
    }
    notify(t) {
        Oe.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Oe.batch(() => Promise.all(t.map(n => n.continue().catch(Ot))))
    }
}, wt = new WeakMap, zo = new WeakMap, Sg);

function Ta(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}

function HP(e) {
    return {
        onFetch: (t, n) => {
            const r = async () => {
                var g, p, E, m, y;
                const i = t.options,
                    s = (E = (p = (g = t.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : E.direction,
                    o = ((m = t.state.data) == null ? void 0 : m.pages) || [],
                    a = ((y = t.state.data) == null ? void 0 : y.pageParams) || [],
                    l = {
                        pages: [],
                        pageParams: []
                    };
                let u = !1;
                const c = v => {
                        Object.defineProperty(v, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", () => {
                                u = !0
                            }), t.signal)
                        })
                    },
                    d = U0(t.options, t.fetchOptions),
                    h = async (v, P, k) => {
                        if (u) return Promise.reject();
                        if (P == null && v.pages.length) return Promise.resolve(v);
                        const L = {
                            queryKey: t.queryKey,
                            pageParam: P,
                            direction: k ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        c(L);
                        const w = await d(L),
                            {
                                maxPages: T
                            } = t.options,
                            A = k ? OP : DP;
                        return {
                            pages: A(v.pages, w, T),
                            pageParams: A(v.pageParams, P, T)
                        }
                    };
                let f;
                if (s && o.length) {
                    const v = s === "backward",
                        P = v ? q0 : cd,
                        k = {
                            pages: o,
                            pageParams: a
                        },
                        L = P(i, k);
                    f = await h(k, L, v)
                } else {
                    f = await h(l, a[0] ?? i.initialPageParam);
                    const v = e ?? o.length;
                    for (let P = 1; P < v; P++) {
                        const k = cd(i, f);
                        f = await h(f, k)
                    }
                }
                return f
            };
            t.options.persister ? t.fetchFn = () => {
                var i, s;
                return (s = (i = t.options).persister) == null ? void 0 : s.call(i, r, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = r
        }
    }
}

function cd(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return e.getNextPageParam(t[r], t, n[r], n)
}

function q0(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)
}

function cA(e, t) {
    return t ? cd(e, t) != null : !1
}

function dA(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : q0(e, t) != null
}
var Te, nr, rr, Gi, Yi, ir, Xi, Ji, Eg, WP = (Eg = class {
        constructor(e = {}) {
            B(this, Te);
            B(this, nr);
            B(this, rr);
            B(this, Gi);
            B(this, Yi);
            B(this, ir);
            B(this, Xi);
            B(this, Ji);
            _(this, Te, e.queryCache || new UP), _(this, nr, e.mutationCache || new $P), _(this, rr, e.defaultOptions || {}), _(this, Gi, new Map), _(this, Yi, new Map), _(this, ir, 0)
        }
        mount() {
            aa(this, ir)._++, C(this, ir) === 1 && (_(this, Xi, No.subscribe(async e => {
                e && (await this.resumePausedMutations(), C(this, Te).onFocus())
            })), _(this, Ji, Sl.subscribe(async e => {
                e && (await this.resumePausedMutations(), C(this, Te).onOnline())
            })))
        }
        unmount() {
            var e, t;
            aa(this, ir)._--, C(this, ir) === 0 && ((e = C(this, Xi)) == null || e.call(this), _(this, Xi, void 0), (t = C(this, Ji)) == null || t.call(this), _(this, Ji, void 0))
        }
        isFetching(e) {
            return C(this, Te).findAll({
                ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return C(this, nr).findAll({
                ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = C(this, Te).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e);
            {
                const n = this.defaultQueryOptions(e),
                    r = C(this, Te).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime($i(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return C(this, Te).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                i = C(this, Te).get(r.queryHash),
                s = i == null ? void 0 : i.state.data,
                o = NP(t, s);
            if (o !== void 0) return C(this, Te).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Oe.batch(() => C(this, Te).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = C(this, Te).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = C(this, Te);
            Oe.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = C(this, Te),
                r = {
                    type: "active",
                    ...e
                };
            return Oe.batch(() => (n.findAll(e).forEach(i => {
                i.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Oe.batch(() => C(this, Te).findAll(e).map(i => i.cancel(n)));
            return Promise.all(r).then(Ot).catch(Ot)
        }
        invalidateQueries(e = {}, t = {}) {
            return Oe.batch(() => {
                if (C(this, Te).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = {
                    ...e,
                    type: e.refetchType ?? e.type ?? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = {
                    ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
                },
                r = Oe.batch(() => C(this, Te).findAll(e).filter(i => !i.isDisabled()).map(i => {
                    let s = i.fetch(void 0, n);
                    return n.throwOnError || (s = s.catch(Ot)), i.state.fetchStatus === "paused" ? Promise.resolve() : s
                }));
            return Promise.all(r).then(Ot)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = C(this, Te).build(this, t);
            return n.isStaleByTime($i(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Ot).catch(Ot)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = HP(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Ot).catch(Ot)
        }
        resumePausedMutations() {
            return Sl.isOnline() ? C(this, nr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return C(this, Te)
        }
        getMutationCache() {
            return C(this, nr)
        }
        getDefaultOptions() {
            return C(this, rr)
        }
        setDefaultOptions(e) {
            _(this, rr, e)
        }
        setQueryDefaults(e, t) {
            C(this, Gi).set(si(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...C(this, Gi).values()];
            let n = {};
            return t.forEach(r => {
                bo(e, r.queryKey) && (n = {
                    ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            C(this, Yi).set(si(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...C(this, Yi).values()];
            let n = {};
            return t.forEach(r => {
                bo(e, r.mutationKey) && (n = {
                    ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = {
                ...C(this, rr).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Gf(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === z0 && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : {
                ...C(this, rr).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            C(this, Te).clear(), C(this, nr).clear()
        }
    }, Te = new WeakMap, nr = new WeakMap, rr = new WeakMap, Gi = new WeakMap, Yi = new WeakMap, ir = new WeakMap, Xi = new WeakMap, Ji = new WeakMap, Eg),
    ut, ie, Uo, it, Qr, Zi, un, Bo, es, ts, qr, Gr, sr, ns, re, Ys, dd, fd, hd, pd, md, yd, gd, G0, Pg, KP = (Pg = class extends xs {
        constructor(t, n) {
            super();
            B(this, re);
            B(this, ut);
            B(this, ie);
            B(this, Uo);
            B(this, it);
            B(this, Qr);
            B(this, Zi);
            B(this, un);
            B(this, Bo);
            B(this, es);
            B(this, ts);
            B(this, qr);
            B(this, Gr);
            B(this, sr);
            B(this, ns, new Set);
            this.options = n, _(this, ut, t), _(this, un, null), this.bindMethods(), this.setOptions(n)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (C(this, ie).addObserver(this), gm(C(this, ie), this.options) ? Z(this, re, Ys).call(this) : this.updateResult(), Z(this, re, pd).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return vd(C(this, ie), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return vd(C(this, ie), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, Z(this, re, md).call(this), Z(this, re, yd).call(this), C(this, ie).removeObserver(this)
        }
        setOptions(t, n) {
            const r = this.options,
                i = C(this, ie);
            if (this.options = C(this, ut).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
            Z(this, re, gd).call(this), C(this, ie).setOptions(this.options), r._defaulted && !wl(this.options, r) && C(this, ut).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: C(this, ie),
                observer: this
            });
            const s = this.hasListeners();
            s && vm(C(this, ie), i, this.options, r) && Z(this, re, Ys).call(this), this.updateResult(n), s && (C(this, ie) !== i || this.options.enabled !== r.enabled || $i(this.options.staleTime, C(this, ie)) !== $i(r.staleTime, C(this, ie))) && Z(this, re, dd).call(this);
            const o = Z(this, re, fd).call(this);
            s && (C(this, ie) !== i || this.options.enabled !== r.enabled || o !== C(this, sr)) && Z(this, re, hd).call(this, o)
        }
        getOptimisticResult(t) {
            const n = C(this, ut).getQueryCache().build(C(this, ut), t),
                r = this.createResult(n, t);
            return qP(this, r) && (_(this, it, r), _(this, Zi, this.options), _(this, Qr, C(this, ie).state)), r
        }
        getCurrentResult() {
            return C(this, it)
        }
        trackResult(t, n) {
            const r = {};
            return Object.keys(t).forEach(i => {
                Object.defineProperty(r, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(i), n == null || n(i), t[i])
                })
            }), r
        }
        trackProp(t) {
            C(this, ns).add(t)
        }
        getCurrentQuery() {
            return C(this, ie)
        }
        refetch({
            ...t
        } = {}) {
            return this.fetch({
                ...t
            })
        }
        fetchOptimistic(t) {
            const n = C(this, ut).defaultQueryOptions(t),
                r = C(this, ut).getQueryCache().build(C(this, ut), n);
            return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n))
        }
        fetch(t) {
            return Z(this, re, Ys).call(this, {
                ...t,
                cancelRefetch: t.cancelRefetch ?? !0
            }).then(() => (this.updateResult(), C(this, it)))
        }
        createResult(t, n) {
            var w;
            const r = C(this, ie),
                i = this.options,
                s = C(this, it),
                o = C(this, Qr),
                a = C(this, Zi),
                u = t !== r ? t.state : C(this, Uo),
                {
                    state: c
                } = t;
            let d = {
                    ...c
                },
                h = !1,
                f;
            if (n._optimisticResults) {
                const T = this.hasListeners(),
                    A = !T && gm(t, n),
                    O = T && vm(t, r, n, i);
                (A || O) && (d = {
                    ...d,
                    ...K0(c.data, t.options)
                }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle")
            }
            let {
                error: g,
                errorUpdatedAt: p,
                status: E
            } = d;
            if (n.select && d.data !== void 0)
                if (s && d.data === (o == null ? void 0 : o.data) && n.select === C(this, Bo)) f = C(this, es);
                else try {
                    _(this, Bo, n.select), f = n.select(d.data), f = ud(s == null ? void 0 : s.data, f, n), _(this, es, f), _(this, un, null)
                } catch (T) {
                    _(this, un, T)
                } else f = d.data;
            if (n.placeholderData !== void 0 && f === void 0 && E === "pending") {
                let T;
                if (s != null && s.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData)) T = s.data;
                else if (T = typeof n.placeholderData == "function" ? n.placeholderData((w = C(this, ts)) == null ? void 0 : w.state.data, C(this, ts)) : n.placeholderData, n.select && T !== void 0) try {
                    T = n.select(T), _(this, un, null)
                } catch (A) {
                    _(this, un, A)
                }
                T !== void 0 && (E = "success", f = ud(s == null ? void 0 : s.data, T, n), h = !0)
            }
            C(this, un) && (g = C(this, un), f = C(this, es), p = Date.now(), E = "error");
            const m = d.fetchStatus === "fetching",
                y = E === "pending",
                v = E === "error",
                P = y && m,
                k = f !== void 0;
            return {
                status: E,
                fetchStatus: d.fetchStatus,
                isPending: y,
                isSuccess: E === "success",
                isError: v,
                isInitialLoading: P,
                isLoading: P,
                data: f,
                dataUpdatedAt: d.dataUpdatedAt,
                error: g,
                errorUpdatedAt: p,
                failureCount: d.fetchFailureCount,
                failureReason: d.fetchFailureReason,
                errorUpdateCount: d.errorUpdateCount,
                isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
                isFetching: m,
                isRefetching: m && !y,
                isLoadingError: v && !k,
                isPaused: d.fetchStatus === "paused",
                isPlaceholderData: h,
                isRefetchError: v && k,
                isStale: Yf(t, n),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const n = C(this, it),
                r = this.createResult(C(this, ie), this.options);
            if (_(this, Qr, C(this, ie).state), _(this, Zi, this.options), C(this, Qr).data !== void 0 && _(this, ts, C(this, ie)), wl(r, n)) return;
            _(this, it, r);
            const i = {},
                s = () => {
                    if (!n) return !0;
                    const {
                        notifyOnChangeProps: o
                    } = this.options, a = typeof o == "function" ? o() : o;
                    if (a === "all" || !a && !C(this, ns).size) return !0;
                    const l = new Set(a ?? C(this, ns));
                    return this.options.throwOnError && l.add("error"), Object.keys(C(this, it)).some(u => {
                        const c = u;
                        return C(this, it)[c] !== n[c] && l.has(c)
                    })
                };
            (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0), Z(this, re, G0).call(this, {
                ...i,
                ...t
            })
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && Z(this, re, pd).call(this)
        }
    }, ut = new WeakMap, ie = new WeakMap, Uo = new WeakMap, it = new WeakMap, Qr = new WeakMap, Zi = new WeakMap, un = new WeakMap, Bo = new WeakMap, es = new WeakMap, ts = new WeakMap, qr = new WeakMap, Gr = new WeakMap, sr = new WeakMap, ns = new WeakMap, re = new WeakSet, Ys = function(t) {
        Z(this, re, gd).call(this);
        let n = C(this, ie).fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(Ot)), n
    }, dd = function() {
        Z(this, re, md).call(this);
        const t = $i(this.options.staleTime, C(this, ie));
        if (cs || C(this, it).isStale || !ad(t)) return;
        const r = V0(C(this, it).dataUpdatedAt, t) + 1;
        _(this, qr, setTimeout(() => {
            C(this, it).isStale || this.updateResult()
        }, r))
    }, fd = function() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, ie)) : this.options.refetchInterval) ?? !1
    }, hd = function(t) {
        Z(this, re, yd).call(this), _(this, sr, t), !(cs || this.options.enabled === !1 || !ad(C(this, sr)) || C(this, sr) === 0) && _(this, Gr, setInterval(() => {
            (this.options.refetchIntervalInBackground || No.isFocused()) && Z(this, re, Ys).call(this)
        }, C(this, sr)))
    }, pd = function() {
        Z(this, re, dd).call(this), Z(this, re, hd).call(this, Z(this, re, fd).call(this))
    }, md = function() {
        C(this, qr) && (clearTimeout(C(this, qr)), _(this, qr, void 0))
    }, yd = function() {
        C(this, Gr) && (clearInterval(C(this, Gr)), _(this, Gr, void 0))
    }, gd = function() {
        const t = C(this, ut).getQueryCache().build(C(this, ut), this.options);
        if (t === C(this, ie)) return;
        const n = C(this, ie);
        _(this, ie, t), _(this, Uo, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
    }, G0 = function(t) {
        Oe.batch(() => {
            t.listeners && this.listeners.forEach(n => {
                n(C(this, it))
            }), C(this, ut).getQueryCache().notify({
                query: C(this, ie),
                type: "observerResultsUpdated"
            })
        })
    }, Pg);

function QP(e, t) {
    return t.enabled !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}

function gm(e, t) {
    return QP(e, t) || e.state.data !== void 0 && vd(e, t, t.refetchOnMount)
}

function vd(e, t, n) {
    if (t.enabled !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Yf(e, t)
    }
    return !1
}

function vm(e, t, n, r) {
    return (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Yf(e, n)
}

function Yf(e, t) {
    return t.enabled !== !1 && e.isStaleByTime($i(t.staleTime, e))
}

function qP(e, t) {
    return !wl(e.getCurrentResult(), t)
}
var or, ar, ct, En, Nn, Ba, xd, Cg, GP = (Cg = class extends xs {
        constructor(n, r) {
            super();
            B(this, Nn);
            B(this, or);
            B(this, ar);
            B(this, ct);
            B(this, En);
            _(this, or, n), this.setOptions(r), this.bindMethods(), Z(this, Nn, Ba).call(this)
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(n) {
            var i;
            const r = this.options;
            this.options = C(this, or).defaultMutationOptions(n), wl(this.options, r) || C(this, or).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: C(this, ct),
                observer: this
            }), r != null && r.mutationKey && this.options.mutationKey && si(r.mutationKey) !== si(this.options.mutationKey) ? this.reset() : ((i = C(this, ct)) == null ? void 0 : i.state.status) === "pending" && C(this, ct).setOptions(this.options)
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || (n = C(this, ct)) == null || n.removeObserver(this)
        }
        onMutationUpdate(n) {
            Z(this, Nn, Ba).call(this), Z(this, Nn, xd).call(this, n)
        }
        getCurrentResult() {
            return C(this, ar)
        }
        reset() {
            var n;
            (n = C(this, ct)) == null || n.removeObserver(this), _(this, ct, void 0), Z(this, Nn, Ba).call(this), Z(this, Nn, xd).call(this)
        }
        mutate(n, r) {
            var i;
            return _(this, En, r), (i = C(this, ct)) == null || i.removeObserver(this), _(this, ct, C(this, or).getMutationCache().build(C(this, or), this.options)), C(this, ct).addObserver(this), C(this, ct).execute(n)
        }
    }, or = new WeakMap, ar = new WeakMap, ct = new WeakMap, En = new WeakMap, Nn = new WeakSet, Ba = function() {
        var r;
        const n = ((r = C(this, ct)) == null ? void 0 : r.state) ?? Q0();
        _(this, ar, {
            ...n,
            isPending: n.status === "pending",
            isSuccess: n.status === "success",
            isError: n.status === "error",
            isIdle: n.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        })
    }, xd = function(n) {
        Oe.batch(() => {
            var r, i, s, o, a, l, u, c;
            if (C(this, En) && this.hasListeners()) {
                const d = C(this, ar).variables,
                    h = C(this, ar).context;
                (n == null ? void 0 : n.type) === "success" ? ((i = (r = C(this, En)).onSuccess) == null || i.call(r, n.data, d, h), (o = (s = C(this, En)).onSettled) == null || o.call(s, n.data, null, d, h)) : (n == null ? void 0 : n.type) === "error" && ((l = (a = C(this, En)).onError) == null || l.call(a, n.error, d, h), (c = (u = C(this, En)).onSettled) == null || c.call(u, void 0, n.error, d, h))
            }
            this.listeners.forEach(d => {
                d(C(this, ar))
            })
        })
    }, Cg),
    Y0 = S.createContext(void 0),
    qo = e => {
        const t = S.useContext(Y0);
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    YP = ({
        client: e,
        children: t
    }) => (S.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), x.jsx(Y0.Provider, {
        value: e,
        children: t
    })),
    X0 = S.createContext(!1),
    XP = () => S.useContext(X0);
X0.Provider;

function JP() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var ZP = S.createContext(JP()),
    eC = () => S.useContext(ZP);

function J0(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function tC() {}
var nC = (e, t) => {
        (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
    },
    rC = e => {
        S.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    iC = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: r
    }) => e.isError && !t.isReset() && !e.isFetching && r && J0(n, [e.error, r]),
    sC = e => {
        e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
    },
    oC = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
    aC = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function lC(e, t, n) {
    const r = qo(),
        i = XP(),
        s = eC(),
        o = r.defaultQueryOptions(e);
    o._optimisticResults = i ? "isRestoring" : "optimistic", sC(o), nC(o, s), rC(s);
    const [a] = S.useState(() => new t(r, o)), l = a.getOptimisticResult(o);
    if (S.useSyncExternalStore(S.useCallback(u => {
            const c = i ? () => {} : a.subscribe(Oe.batchCalls(u));
            return a.updateResult(), c
        }, [a, i]), () => a.getCurrentResult(), () => a.getCurrentResult()), S.useEffect(() => {
            a.setOptions(o, {
                listeners: !1
            })
        }, [o, a]), oC(o, l)) throw aC(o, a, s);
    if (iC({
            result: l,
            errorResetBoundary: s,
            throwOnError: o.throwOnError,
            query: r.getQueryCache().get(o.queryHash)
        })) throw l.error;
    return o.notifyOnChangeProps ? l : a.trackResult(l)
}

function Xf(e, t) {
    return lC(e, KP)
}

function Jf(e, t) {
    const n = qo(),
        [r] = S.useState(() => new GP(n, e));
    S.useEffect(() => {
        r.setOptions(e)
    }, [r, e]);
    const i = S.useSyncExternalStore(S.useCallback(o => r.subscribe(Oe.batchCalls(o)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        s = S.useCallback((o, a) => {
            r.mutate(o, a).catch(tC)
        }, [r]);
    if (i.error && J0(r.options.throwOnError, [i.error])) throw i.error;
    return {
        ...i,
        mutate: s,
        mutateAsync: i.mutate
    }
}
var uC = function() {
    return null
};
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function we() {
    return we = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, we.apply(this, arguments)
}
var be;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(be || (be = {}));
const xm = "popstate";

function cC(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: s,
            search: o,
            hash: a
        } = r.location;
        return Ao("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : oi(i)
    }
    return fC(t, n, null, e)
}

function J(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ds(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function dC() {
    return Math.random().toString(36).substr(2, 8)
}

function wm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ao(e, t, n, r) {
    return n === void 0 && (n = null), we({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? kr(t) : t, {
        state: n,
        key: t && t.key || r || dC()
    })
}

function oi(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function kr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function fC(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: s = !1
    } = r, o = i.history, a = be.Pop, l = null, u = c();
    u == null && (u = 0, o.replaceState(we({}, o.state, {
        idx: u
    }), ""));

    function c() {
        return (o.state || {
            idx: null
        }).idx
    }

    function d() {
        a = be.Pop;
        let E = c(),
            m = E == null ? null : E - u;
        u = E, l && l({
            action: a,
            location: p.location,
            delta: m
        })
    }

    function h(E, m) {
        a = be.Push;
        let y = Ao(p.location, E, m);
        u = c() + 1;
        let v = wm(y, u),
            P = p.createHref(y);
        try {
            o.pushState(v, "", P)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            i.location.assign(P)
        }
        s && l && l({
            action: a,
            location: p.location,
            delta: 1
        })
    }

    function f(E, m) {
        a = be.Replace;
        let y = Ao(p.location, E, m);
        u = c();
        let v = wm(y, u),
            P = p.createHref(y);
        o.replaceState(v, "", P), s && l && l({
            action: a,
            location: p.location,
            delta: 0
        })
    }

    function g(E) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
            y = typeof E == "string" ? E : oi(E);
        return y = y.replace(/ $/, "%20"), J(m, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, m)
    }
    let p = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(E) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(xm, d), l = E, () => {
                i.removeEventListener(xm, d), l = null
            }
        },
        createHref(E) {
            return t(i, E)
        },
        createURL: g,
        encodeLocation(E) {
            let m = g(E);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: f,
        go(E) {
            return o.go(E)
        }
    };
    return p
}
var ve;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ve || (ve = {}));
const hC = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function pC(e) {
    return e.index === !0
}

function wd(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, s) => {
        let o = [...n, s],
            a = typeof i.id == "string" ? i.id : o.join("-");
        if (J(i.index !== !0 || !i.children, "Cannot specify children on an index route"), J(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), pC(i)) {
            let l = we({}, i, t(i), {
                id: a
            });
            return r[a] = l, l
        } else {
            let l = we({}, i, t(i), {
                id: a,
                children: void 0
            });
            return r[a] = l, i.children && (l.children = wd(i.children, t, o, r)), l
        }
    })
}

function Ai(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? kr(t) : t,
        i = pn(r.pathname || "/", n);
    if (i == null) return null;
    let s = e1(e);
    mC(s);
    let o = null;
    for (let a = 0; o == null && a < s.length; ++a) {
        let l = RC(i);
        o = CC(s[a], l)
    }
    return o
}

function Z0(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}

function e1(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (J(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = kn([r, l.relativePath]),
            c = n.concat(l);
        s.children && s.children.length > 0 && (J(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), e1(s.children, t, c, u)), !(s.path == null && !s.index) && t.push({
            path: u,
            score: EC(u, s.index),
            routesMeta: c
        })
    };
    return e.forEach((s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
        else
            for (let l of t1(s.path)) i(s, o, l)
    }), t
}

function t1(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [s, ""] : [s];
    let o = t1(r.join("/")),
        a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))), i && a.push(...o), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function mC(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : PC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const yC = /^:[\w-]+$/,
    gC = 3,
    vC = 2,
    xC = 1,
    wC = 10,
    SC = -2,
    Sm = e => e === "*";

function EC(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Sm) && (r += SC), t && (r += vC), n.filter(i => !Sm(i)).reduce((i, s) => i + (yC.test(s) ? gC : s === "" ? xC : wC), r)
}

function PC(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function CC(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, i = "/", s = [];
    for (let o = 0; o < n.length; ++o) {
        let a = n[o],
            l = o === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            c = Sd({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: l
            }, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = a.route;
        s.push({
            params: r,
            pathname: kn([i, c.pathname]),
            pathnameBase: LC(kn([i, c.pathnameBase])),
            route: d
        }), c.pathnameBase !== "/" && (i = kn([i, c.pathnameBase]))
    }
    return s
}

function Sd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = TC(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let s = i[0],
        o = s.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {
                paramName: h,
                isOptional: f
            } = c;
            if (h === "*") {
                let p = a[d] || "";
                o = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1")
            }
            const g = a[d];
            return f && !g ? u[h] = void 0 : u[h] = (g || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}

function TC(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ds(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function RC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ds(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function pn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function kC(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? kr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : jC(n, t) : t,
        search: bC(r),
        hash: NC(i)
    }
}

function jC(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function $u(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function n1(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Gl(e, t) {
    let n = n1(e);
    return t ? n.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function Yl(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = kr(e) : (i = we({}, e), J(!i.pathname || !i.pathname.includes("?"), $u("?", "pathname", "search", i)), J(!i.pathname || !i.pathname.includes("#"), $u("#", "pathname", "hash", i)), J(!i.search || !i.search.includes("#"), $u("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "",
        o = s ? "/" : i.pathname,
        a;
    if (o == null) a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";) h.shift(), d -= 1;
            i.pathname = h.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = kC(i, a),
        u = o && o !== "/" && o.endsWith("/"),
        c = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}
const kn = e => e.join("/").replace(/\/\/+/g, "/"),
    LC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    bC = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    NC = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Zf {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function eh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const r1 = ["post", "put", "patch", "delete"],
    AC = new Set(r1),
    DC = ["get", ...r1],
    OC = new Set(DC),
    MC = new Set([301, 302, 303, 307, 308]),
    FC = new Set([307, 308]),
    Hu = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    _C = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Is = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    th = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    VC = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    i1 = "remix-router-transitions";

function IC(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    J(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let i;
    if (e.mapRouteProperties) i = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let R = e.detectErrorBoundary;
        i = j => ({
            hasErrorBoundary: R(j)
        })
    } else i = VC;
    let s = {},
        o = wd(e.routes, i, void 0, s),
        a, l = e.basename || "/",
        u = e.unstable_dataStrategy || $C,
        c = we({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            unstable_skipActionErrorRevalidation: !1
        }, e.future),
        d = null,
        h = new Set,
        f = null,
        g = null,
        p = null,
        E = e.hydrationData != null,
        m = Ai(o, e.history.location, l),
        y = null;
    if (m == null) {
        let R = Mt(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: j,
                route: N
            } = Nm(o);
        m = j, y = {
            [N.id]: R
        }
    }
    let v, P = m.some(R => R.route.lazy),
        k = m.some(R => R.route.loader);
    if (P) v = !1;
    else if (!k) v = !0;
    else if (c.v7_partialHydration) {
        let R = e.hydrationData ? e.hydrationData.loaderData : null,
            j = e.hydrationData ? e.hydrationData.errors : null,
            N = F => F.route.loader ? typeof F.route.loader == "function" && F.route.loader.hydrate === !0 ? !1 : R && R[F.route.id] !== void 0 || j && j[F.route.id] !== void 0 : !0;
        if (j) {
            let F = m.findIndex(I => j[I.route.id] !== void 0);
            v = m.slice(0, F + 1).every(N)
        } else v = m.every(N)
    } else v = e.hydrationData != null;
    let L, w = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: m,
            initialized: v,
            navigation: Hu,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || y,
            fetchers: new Map,
            blockers: new Map
        },
        T = be.Pop,
        A = !1,
        O, H = !1,
        de = new Map,
        pe = null,
        Le = !1,
        ce = !1,
        Fe = [],
        jt = [],
        M = new Map,
        W = 0,
        Q = -1,
        le = new Map,
        ue = new Set,
        Ht = new Map,
        gt = new Map,
        vt = new Set,
        tt = new Map,
        Lt = new Map,
        fu = !1;

    function Iw() {
        if (d = e.history.listen(R => {
                let {
                    action: j,
                    location: N,
                    delta: F
                } = R;
                if (fu) {
                    fu = !1;
                    return
                }
                ds(Lt.size === 0 || F != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let I = Jh({
                    currentLocation: w.location,
                    nextLocation: N,
                    historyAction: j
                });
                if (I && F != null) {
                    fu = !0, e.history.go(F * -1), ra(I, {
                        state: "blocked",
                        location: N,
                        proceed() {
                            ra(I, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: N
                            }), e.history.go(F)
                        },
                        reset() {
                            let G = new Map(w.blockers);
                            G.set(I, Is), xt({
                                blockers: G
                            })
                        }
                    });
                    return
                }
                return Lr(j, N)
            }), n) {
            t2(t, de);
            let R = () => n2(t, de);
            t.addEventListener("pagehide", R), pe = () => t.removeEventListener("pagehide", R)
        }
        return w.initialized || Lr(be.Pop, w.location, {
            initialHydration: !0
        }), L
    }

    function zw() {
        d && d(), pe && pe(), h.clear(), O && O.abort(), w.fetchers.forEach((R, j) => na(j)), w.blockers.forEach((R, j) => Xh(j))
    }

    function Uw(R) {
        return h.add(R), () => h.delete(R)
    }

    function xt(R, j) {
        j === void 0 && (j = {}), w = we({}, w, R);
        let N = [],
            F = [];
        c.v7_fetcherPersist && w.fetchers.forEach((I, G) => {
            I.state === "idle" && (vt.has(G) ? F.push(G) : N.push(G))
        }), [...h].forEach(I => I(w, {
            deletedFetchers: F,
            unstable_viewTransitionOpts: j.viewTransitionOpts,
            unstable_flushSync: j.flushSync === !0
        })), c.v7_fetcherPersist && (N.forEach(I => w.fetchers.delete(I)), F.forEach(I => na(I)))
    }

    function Ts(R, j, N) {
        var F, I;
        let {
            flushSync: G
        } = N === void 0 ? {} : N, U = w.actionData != null && w.navigation.formMethod != null && Gt(w.navigation.formMethod) && w.navigation.state === "loading" && ((F = R.state) == null ? void 0 : F._isRedirect) !== !0, z;
        j.actionData ? Object.keys(j.actionData).length > 0 ? z = j.actionData : z = null : U ? z = w.actionData : z = null;
        let X = j.loaderData ? Lm(w.loaderData, j.loaderData, j.matches || [], j.errors) : w.loaderData,
            q = w.blockers;
        q.size > 0 && (q = new Map(q), q.forEach((K, ge) => q.set(ge, Is)));
        let ze = A === !0 || w.navigation.formMethod != null && Gt(w.navigation.formMethod) && ((I = R.state) == null ? void 0 : I._isRedirect) !== !0;
        a && (o = a, a = void 0), Le || T === be.Pop || (T === be.Push ? e.history.push(R, R.state) : T === be.Replace && e.history.replace(R, R.state));
        let Ue;
        if (T === be.Pop) {
            let K = de.get(w.location.pathname);
            K && K.has(R.pathname) ? Ue = {
                currentLocation: w.location,
                nextLocation: R
            } : de.has(R.pathname) && (Ue = {
                currentLocation: R,
                nextLocation: w.location
            })
        } else if (H) {
            let K = de.get(w.location.pathname);
            K ? K.add(R.pathname) : (K = new Set([R.pathname]), de.set(w.location.pathname, K)), Ue = {
                currentLocation: w.location,
                nextLocation: R
            }
        }
        xt(we({}, j, {
            actionData: z,
            loaderData: X,
            historyAction: T,
            location: R,
            initialized: !0,
            navigation: Hu,
            revalidation: "idle",
            restoreScrollPosition: ep(R, j.matches || w.matches),
            preventScrollReset: ze,
            blockers: q
        }), {
            viewTransitionOpts: Ue,
            flushSync: G === !0
        }), T = be.Pop, A = !1, H = !1, Le = !1, ce = !1, Fe = [], jt = []
    }
    async function Wh(R, j) {
        if (typeof R == "number") {
            e.history.go(R);
            return
        }
        let N = Ed(w.location, w.matches, l, c.v7_prependBasename, R, c.v7_relativeSplatPath, j == null ? void 0 : j.fromRouteId, j == null ? void 0 : j.relative),
            {
                path: F,
                submission: I,
                error: G
            } = Em(c.v7_normalizeFormMethod, !1, N, j),
            U = w.location,
            z = Ao(w.location, F, j && j.state);
        z = we({}, z, e.history.encodeLocation(z));
        let X = j && j.replace != null ? j.replace : void 0,
            q = be.Push;
        X === !0 ? q = be.Replace : X === !1 || I != null && Gt(I.formMethod) && I.formAction === w.location.pathname + w.location.search && (q = be.Replace);
        let ze = j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
            Ue = (j && j.unstable_flushSync) === !0,
            K = Jh({
                currentLocation: U,
                nextLocation: z,
                historyAction: q
            });
        if (K) {
            ra(K, {
                state: "blocked",
                location: z,
                proceed() {
                    ra(K, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: z
                    }), Wh(R, j)
                },
                reset() {
                    let ge = new Map(w.blockers);
                    ge.set(K, Is), xt({
                        blockers: ge
                    })
                }
            });
            return
        }
        return await Lr(q, z, {
            submission: I,
            pendingError: G,
            preventScrollReset: ze,
            replace: j && j.replace,
            enableViewTransition: j && j.unstable_viewTransition,
            flushSync: Ue
        })
    }

    function Bw() {
        if (hu(), xt({
                revalidation: "loading"
            }), w.navigation.state !== "submitting") {
            if (w.navigation.state === "idle") {
                Lr(w.historyAction, w.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Lr(T || w.historyAction, w.navigation.location, {
                overrideNavigation: w.navigation
            })
        }
    }
    async function Lr(R, j, N) {
        O && O.abort(), O = null, T = R, Le = (N && N.startUninterruptedRevalidation) === !0, Xw(w.location, w.matches), A = (N && N.preventScrollReset) === !0, H = (N && N.enableViewTransition) === !0;
        let F = a || o,
            I = N && N.overrideNavigation,
            G = Ai(F, j, l),
            U = (N && N.flushSync) === !0;
        if (!G) {
            let K = Mt(404, {
                    pathname: j.pathname
                }),
                {
                    matches: ge,
                    route: _e
                } = Nm(F);
            pu(), Ts(j, {
                matches: ge,
                loaderData: {},
                errors: {
                    [_e.id]: K
                }
            }, {
                flushSync: U
            });
            return
        }
        if (w.initialized && !ce && GC(w.location, j) && !(N && N.submission && Gt(N.submission.formMethod))) {
            Ts(j, {
                matches: G
            }, {
                flushSync: U
            });
            return
        }
        O = new AbortController;
        let z = vi(e.history, j, O.signal, N && N.submission),
            X;
        if (N && N.pendingError) X = [ao(G).route.id, {
            type: ve.error,
            error: N.pendingError
        }];
        else if (N && N.submission && Gt(N.submission.formMethod)) {
            let K = await $w(z, j, N.submission, G, {
                replace: N.replace,
                flushSync: U
            });
            if (K.shortCircuited) return;
            X = K.pendingActionResult, I = Wu(j, N.submission), U = !1, z = vi(e.history, z.url, z.signal)
        }
        let {
            shortCircuited: q,
            loaderData: ze,
            errors: Ue
        } = await Hw(z, j, G, I, N && N.submission, N && N.fetcherSubmission, N && N.replace, N && N.initialHydration === !0, U, X);
        q || (O = null, Ts(j, we({
            matches: G
        }, bm(X), {
            loaderData: ze,
            errors: Ue
        })))
    }
    async function $w(R, j, N, F, I) {
        I === void 0 && (I = {}), hu();
        let G = ZC(j, N);
        xt({
            navigation: G
        }, {
            flushSync: I.flushSync === !0
        });
        let U, z = Cd(F, j);
        if (!z.route.action && !z.route.lazy) U = {
            type: ve.error,
            error: Mt(405, {
                method: R.method,
                pathname: j.pathname,
                routeId: z.route.id
            })
        };
        else if (U = (await ks("action", R, [z], F))[0], R.signal.aborted) return {
            shortCircuited: !0
        };
        if (Ur(U)) {
            let X;
            return I && I.replace != null ? X = I.replace : X = Rm(U.response.headers.get("Location"), new URL(R.url), l) === w.location.pathname + w.location.search, await Rs(R, U, {
                submission: N,
                replace: X
            }), {
                shortCircuited: !0
            }
        }
        if (zr(U)) throw Mt(400, {
            type: "defer-action"
        });
        if (Vt(U)) {
            let X = ao(F, z.route.id);
            return (I && I.replace) !== !0 && (T = be.Push), {
                pendingActionResult: [X.route.id, U]
            }
        }
        return {
            pendingActionResult: [z.route.id, U]
        }
    }
    async function Hw(R, j, N, F, I, G, U, z, X, q) {
        let ze = F || Wu(j, I),
            Ue = I || G || Om(ze),
            K = a || o,
            [ge, _e] = Pm(e.history, w, N, Ue, j, c.v7_partialHydration && z === !0, c.unstable_skipActionErrorRevalidation, ce, Fe, jt, vt, Ht, ue, K, l, q);
        if (pu(te => !(N && N.some(nt => nt.route.id === te)) || ge && ge.some(nt => nt.route.id === te)), Q = ++W, ge.length === 0 && _e.length === 0) {
            let te = Gh();
            return Ts(j, we({
                matches: N,
                loaderData: {},
                errors: q && Vt(q[1]) ? {
                    [q[0]]: q[1].error
                } : null
            }, bm(q), te ? {
                fetchers: new Map(w.fetchers)
            } : {}), {
                flushSync: X
            }), {
                shortCircuited: !0
            }
        }
        if (!Le && (!c.v7_partialHydration || !z)) {
            _e.forEach(nt => {
                let bt = w.fetchers.get(nt.key),
                    Be = zs(void 0, bt ? bt.data : void 0);
                w.fetchers.set(nt.key, Be)
            });
            let te;
            q && !Vt(q[1]) ? te = {
                [q[0]]: q[1].data
            } : w.actionData && (Object.keys(w.actionData).length === 0 ? te = null : te = w.actionData), xt(we({
                navigation: ze
            }, te !== void 0 ? {
                actionData: te
            } : {}, _e.length > 0 ? {
                fetchers: new Map(w.fetchers)
            } : {}), {
                flushSync: X
            })
        }
        _e.forEach(te => {
            M.has(te.key) && zn(te.key), te.controller && M.set(te.key, te.controller)
        });
        let Ls = () => _e.forEach(te => zn(te.key));
        O && O.signal.addEventListener("abort", Ls);
        let {
            loaderResults: Un,
            fetcherResults: pi
        } = await Kh(w.matches, N, ge, _e, R);
        if (R.signal.aborted) return {
            shortCircuited: !0
        };
        O && O.signal.removeEventListener("abort", Ls), _e.forEach(te => M.delete(te.key));
        let mi = Am([...Un, ...pi]);
        if (mi) {
            if (mi.idx >= ge.length) {
                let te = _e[mi.idx - ge.length].key;
                ue.add(te)
            }
            return await Rs(R, mi.result, {
                replace: U
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: yi,
            errors: nn
        } = jm(w, N, ge, Un, q, _e, pi, tt);
        tt.forEach((te, nt) => {
            te.subscribe(bt => {
                (bt || te.done) && tt.delete(nt)
            })
        }), c.v7_partialHydration && z && w.errors && Object.entries(w.errors).filter(te => {
            let [nt] = te;
            return !ge.some(bt => bt.route.id === nt)
        }).forEach(te => {
            let [nt, bt] = te;
            nn = Object.assign(nn || {}, {
                [nt]: bt
            })
        });
        let ia = Gh(),
            sa = Yh(Q),
            oa = ia || sa || _e.length > 0;
        return we({
            loaderData: yi,
            errors: nn
        }, oa ? {
            fetchers: new Map(w.fetchers)
        } : {})
    }

    function Ww(R, j, N, F) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        M.has(R) && zn(R);
        let I = (F && F.unstable_flushSync) === !0,
            G = a || o,
            U = Ed(w.location, w.matches, l, c.v7_prependBasename, N, c.v7_relativeSplatPath, j, F == null ? void 0 : F.relative),
            z = Ai(G, U, l);
        if (!z) {
            js(R, j, Mt(404, {
                pathname: U
            }), {
                flushSync: I
            });
            return
        }
        let {
            path: X,
            submission: q,
            error: ze
        } = Em(c.v7_normalizeFormMethod, !0, U, F);
        if (ze) {
            js(R, j, ze, {
                flushSync: I
            });
            return
        }
        let Ue = Cd(z, X);
        if (A = (F && F.preventScrollReset) === !0, q && Gt(q.formMethod)) {
            Kw(R, j, X, Ue, z, I, q);
            return
        }
        Ht.set(R, {
            routeId: j,
            path: X
        }), Qw(R, j, X, Ue, z, I, q)
    }
    async function Kw(R, j, N, F, I, G, U) {
        if (hu(), Ht.delete(R), !F.route.action && !F.route.lazy) {
            let Be = Mt(405, {
                method: U.formMethod,
                pathname: N,
                routeId: j
            });
            js(R, j, Be, {
                flushSync: G
            });
            return
        }
        let z = w.fetchers.get(R);
        In(R, e2(U, z), {
            flushSync: G
        });
        let X = new AbortController,
            q = vi(e.history, N, X.signal, U);
        M.set(R, X);
        let ze = W,
            K = (await ks("action", q, [F], I))[0];
        if (q.signal.aborted) {
            M.get(R) === X && M.delete(R);
            return
        }
        if (c.v7_fetcherPersist && vt.has(R)) {
            if (Ur(K) || Vt(K)) {
                In(R, Qn(void 0));
                return
            }
        } else {
            if (Ur(K))
                if (M.delete(R), Q > ze) {
                    In(R, Qn(void 0));
                    return
                } else return ue.add(R), In(R, zs(U)), Rs(q, K, {
                    fetcherSubmission: U
                });
            if (Vt(K)) {
                js(R, j, K.error);
                return
            }
        }
        if (zr(K)) throw Mt(400, {
            type: "defer-action"
        });
        let ge = w.navigation.location || w.location,
            _e = vi(e.history, ge, X.signal),
            Ls = a || o,
            Un = w.navigation.state !== "idle" ? Ai(Ls, w.navigation.location, l) : w.matches;
        J(Un, "Didn't find any matches after fetcher action");
        let pi = ++W;
        le.set(R, pi);
        let mi = zs(U, K.data);
        w.fetchers.set(R, mi);
        let [yi, nn] = Pm(e.history, w, Un, U, ge, !1, c.unstable_skipActionErrorRevalidation, ce, Fe, jt, vt, Ht, ue, Ls, l, [F.route.id, K]);
        nn.filter(Be => Be.key !== R).forEach(Be => {
            let bs = Be.key,
                tp = w.fetchers.get(bs),
                Zw = zs(void 0, tp ? tp.data : void 0);
            w.fetchers.set(bs, Zw), M.has(bs) && zn(bs), Be.controller && M.set(bs, Be.controller)
        }), xt({
            fetchers: new Map(w.fetchers)
        });
        let ia = () => nn.forEach(Be => zn(Be.key));
        X.signal.addEventListener("abort", ia);
        let {
            loaderResults: sa,
            fetcherResults: oa
        } = await Kh(w.matches, Un, yi, nn, _e);
        if (X.signal.aborted) return;
        X.signal.removeEventListener("abort", ia), le.delete(R), M.delete(R), nn.forEach(Be => M.delete(Be.key));
        let te = Am([...sa, ...oa]);
        if (te) {
            if (te.idx >= yi.length) {
                let Be = nn[te.idx - yi.length].key;
                ue.add(Be)
            }
            return Rs(_e, te.result)
        }
        let {
            loaderData: nt,
            errors: bt
        } = jm(w, w.matches, yi, sa, void 0, nn, oa, tt);
        if (w.fetchers.has(R)) {
            let Be = Qn(K.data);
            w.fetchers.set(R, Be)
        }
        Yh(pi), w.navigation.state === "loading" && pi > Q ? (J(T, "Expected pending action"), O && O.abort(), Ts(w.navigation.location, {
            matches: Un,
            loaderData: nt,
            errors: bt,
            fetchers: new Map(w.fetchers)
        })) : (xt({
            errors: bt,
            loaderData: Lm(w.loaderData, nt, Un, bt),
            fetchers: new Map(w.fetchers)
        }), ce = !1)
    }
    async function Qw(R, j, N, F, I, G, U) {
        let z = w.fetchers.get(R);
        In(R, zs(U, z ? z.data : void 0), {
            flushSync: G
        });
        let X = new AbortController,
            q = vi(e.history, N, X.signal);
        M.set(R, X);
        let ze = W,
            K = (await ks("loader", q, [F], I))[0];
        if (zr(K) && (K = await l1(K, q.signal, !0) || K), M.get(R) === X && M.delete(R), !q.signal.aborted) {
            if (vt.has(R)) {
                In(R, Qn(void 0));
                return
            }
            if (Ur(K))
                if (Q > ze) {
                    In(R, Qn(void 0));
                    return
                } else {
                    ue.add(R), await Rs(q, K);
                    return
                } if (Vt(K)) {
                js(R, j, K.error);
                return
            }
            J(!zr(K), "Unhandled fetcher deferred data"), In(R, Qn(K.data))
        }
    }
    async function Rs(R, j, N) {
        let {
            submission: F,
            fetcherSubmission: I,
            replace: G
        } = N === void 0 ? {} : N;
        j.response.headers.has("X-Remix-Revalidate") && (ce = !0);
        let U = j.response.headers.get("Location");
        J(U, "Expected a Location header on the redirect Response"), U = Rm(U, new URL(R.url), l);
        let z = Ao(w.location, U, {
            _isRedirect: !0
        });
        if (n) {
            let ge = !1;
            if (j.response.headers.has("X-Remix-Reload-Document")) ge = !0;
            else if (th.test(U)) {
                const _e = e.history.createURL(U);
                ge = _e.origin !== t.location.origin || pn(_e.pathname, l) == null
            }
            if (ge) {
                G ? t.location.replace(U) : t.location.assign(U);
                return
            }
        }
        O = null;
        let X = G === !0 ? be.Replace : be.Push,
            {
                formMethod: q,
                formAction: ze,
                formEncType: Ue
            } = w.navigation;
        !F && !I && q && ze && Ue && (F = Om(w.navigation));
        let K = F || I;
        if (FC.has(j.response.status) && K && Gt(K.formMethod)) await Lr(X, z, {
            submission: we({}, K, {
                formAction: U
            }),
            preventScrollReset: A
        });
        else {
            let ge = Wu(z, F);
            await Lr(X, z, {
                overrideNavigation: ge,
                fetcherSubmission: I,
                preventScrollReset: A
            })
        }
    }
    async function ks(R, j, N, F) {
        try {
            let I = await HC(u, R, j, N, F, s, i);
            return await Promise.all(I.map((G, U) => {
                if (YC(G)) {
                    let z = G.result;
                    return {
                        type: ve.redirect,
                        response: QC(z, j, N[U].route.id, F, l, c.v7_relativeSplatPath)
                    }
                }
                return KC(G)
            }))
        } catch (I) {
            return N.map(() => ({
                type: ve.error,
                error: I
            }))
        }
    }
    async function Kh(R, j, N, F, I) {
        let [G, ...U] = await Promise.all([N.length ? ks("loader", I, N, j) : [], ...F.map(z => {
            if (z.matches && z.match && z.controller) {
                let X = vi(e.history, z.path, z.controller.signal);
                return ks("loader", X, [z.match], z.matches).then(q => q[0])
            } else return Promise.resolve({
                type: ve.error,
                error: Mt(404, {
                    pathname: z.path
                })
            })
        })]);
        return await Promise.all([Dm(R, N, G, G.map(() => I.signal), !1, w.loaderData), Dm(R, F.map(z => z.match), U, F.map(z => z.controller ? z.controller.signal : null), !0)]), {
            loaderResults: G,
            fetcherResults: U
        }
    }

    function hu() {
        ce = !0, Fe.push(...pu()), Ht.forEach((R, j) => {
            M.has(j) && (jt.push(j), zn(j))
        })
    }

    function In(R, j, N) {
        N === void 0 && (N = {}), w.fetchers.set(R, j), xt({
            fetchers: new Map(w.fetchers)
        }, {
            flushSync: (N && N.flushSync) === !0
        })
    }

    function js(R, j, N, F) {
        F === void 0 && (F = {});
        let I = ao(w.matches, j);
        na(R), xt({
            errors: {
                [I.route.id]: N
            },
            fetchers: new Map(w.fetchers)
        }, {
            flushSync: (F && F.flushSync) === !0
        })
    }

    function Qh(R) {
        return c.v7_fetcherPersist && (gt.set(R, (gt.get(R) || 0) + 1), vt.has(R) && vt.delete(R)), w.fetchers.get(R) || _C
    }

    function na(R) {
        let j = w.fetchers.get(R);
        M.has(R) && !(j && j.state === "loading" && le.has(R)) && zn(R), Ht.delete(R), le.delete(R), ue.delete(R), vt.delete(R), w.fetchers.delete(R)
    }

    function qw(R) {
        if (c.v7_fetcherPersist) {
            let j = (gt.get(R) || 0) - 1;
            j <= 0 ? (gt.delete(R), vt.add(R)) : gt.set(R, j)
        } else na(R);
        xt({
            fetchers: new Map(w.fetchers)
        })
    }

    function zn(R) {
        let j = M.get(R);
        J(j, "Expected fetch controller: " + R), j.abort(), M.delete(R)
    }

    function qh(R) {
        for (let j of R) {
            let N = Qh(j),
                F = Qn(N.data);
            w.fetchers.set(j, F)
        }
    }

    function Gh() {
        let R = [],
            j = !1;
        for (let N of ue) {
            let F = w.fetchers.get(N);
            J(F, "Expected fetcher: " + N), F.state === "loading" && (ue.delete(N), R.push(N), j = !0)
        }
        return qh(R), j
    }

    function Yh(R) {
        let j = [];
        for (let [N, F] of le)
            if (F < R) {
                let I = w.fetchers.get(N);
                J(I, "Expected fetcher: " + N), I.state === "loading" && (zn(N), le.delete(N), j.push(N))
            } return qh(j), j.length > 0
    }

    function Gw(R, j) {
        let N = w.blockers.get(R) || Is;
        return Lt.get(R) !== j && Lt.set(R, j), N
    }

    function Xh(R) {
        w.blockers.delete(R), Lt.delete(R)
    }

    function ra(R, j) {
        let N = w.blockers.get(R) || Is;
        J(N.state === "unblocked" && j.state === "blocked" || N.state === "blocked" && j.state === "blocked" || N.state === "blocked" && j.state === "proceeding" || N.state === "blocked" && j.state === "unblocked" || N.state === "proceeding" && j.state === "unblocked", "Invalid blocker state transition: " + N.state + " -> " + j.state);
        let F = new Map(w.blockers);
        F.set(R, j), xt({
            blockers: F
        })
    }

    function Jh(R) {
        let {
            currentLocation: j,
            nextLocation: N,
            historyAction: F
        } = R;
        if (Lt.size === 0) return;
        Lt.size > 1 && ds(!1, "A router only supports one blocker at a time");
        let I = Array.from(Lt.entries()),
            [G, U] = I[I.length - 1],
            z = w.blockers.get(G);
        if (!(z && z.state === "proceeding") && U({
                currentLocation: j,
                nextLocation: N,
                historyAction: F
            })) return G
    }

    function pu(R) {
        let j = [];
        return tt.forEach((N, F) => {
            (!R || R(F)) && (N.cancel(), j.push(F), tt.delete(F))
        }), j
    }

    function Yw(R, j, N) {
        if (f = R, p = j, g = N || null, !E && w.navigation === Hu) {
            E = !0;
            let F = ep(w.location, w.matches);
            F != null && xt({
                restoreScrollPosition: F
            })
        }
        return () => {
            f = null, p = null, g = null
        }
    }

    function Zh(R, j) {
        return g && g(R, j.map(F => Z0(F, w.loaderData))) || R.key
    }

    function Xw(R, j) {
        if (f && p) {
            let N = Zh(R, j);
            f[N] = p()
        }
    }

    function ep(R, j) {
        if (f) {
            let N = Zh(R, j),
                F = f[N];
            if (typeof F == "number") return F
        }
        return null
    }

    function Jw(R) {
        s = {}, a = wd(R, i, void 0, s)
    }
    return L = {
        get basename() {
            return l
        },
        get future() {
            return c
        },
        get state() {
            return w
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: Iw,
        subscribe: Uw,
        enableScrollRestoration: Yw,
        navigate: Wh,
        fetch: Ww,
        revalidate: Bw,
        createHref: R => e.history.createHref(R),
        encodeLocation: R => e.history.encodeLocation(R),
        getFetcher: Qh,
        deleteFetcher: qw,
        dispose: zw,
        getBlocker: Gw,
        deleteBlocker: Xh,
        _internalFetchControllers: M,
        _internalActiveDeferreds: tt,
        _internalSetRoutes: Jw
    }, L
}

function zC(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function Ed(e, t, n, r, i, s, o, a) {
    let l, u;
    if (o) {
        l = [];
        for (let d of t)
            if (l.push(d), d.route.id === o) {
                u = d;
                break
            }
    } else l = t, u = t[t.length - 1];
    let c = Yl(i || ".", Gl(l, s), pn(e.pathname, n) || e.pathname, a === "path");
    return i == null && (c.search = e.search, c.hash = e.hash), (i == null || i === "" || i === ".") && u && u.route.index && !nh(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (c.pathname = c.pathname === "/" ? n : kn([n, c.pathname])), oi(c)
}

function Em(e, t, n, r) {
    if (!r || !zC(r)) return {
        path: n
    };
    if (r.formMethod && !JC(r.formMethod)) return {
        path: n,
        error: Mt(405, {
            method: r.formMethod
        })
    };
    let i = () => ({
            path: n,
            error: Mt(400, {
                type: "invalid-body"
            })
        }),
        s = r.formMethod || "get",
        o = e ? s.toUpperCase() : s.toLowerCase(),
        a = o1(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!Gt(o)) return i();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((f, g) => {
                let [p, E] = g;
                return "" + f + p + "=" + E + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!Gt(o)) return i();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return i()
            }
        }
    }
    J(typeof FormData == "function", "FormData is not available in this environment");
    let l, u;
    if (r.formData) l = Pd(r.formData), u = r.formData;
    else if (r.body instanceof FormData) l = Pd(r.body), u = r.body;
    else if (r.body instanceof URLSearchParams) l = r.body, u = km(l);
    else if (r.body == null) l = new URLSearchParams, u = new FormData;
    else try {
        l = new URLSearchParams(r.body), u = km(l)
    } catch {
        return i()
    }
    let c = {
        formMethod: o,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (Gt(c.formMethod)) return {
        path: n,
        submission: c
    };
    let d = kr(n);
    return t && d.search && nh(d.search) && l.append("index", ""), d.search = "?" + l, {
        path: oi(d),
        submission: c
    }
}

function UC(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function Pm(e, t, n, r, i, s, o, a, l, u, c, d, h, f, g, p) {
    let E = p ? Vt(p[1]) ? p[1].error : p[1].data : void 0,
        m = e.createURL(t.location),
        y = e.createURL(i),
        v = p && Vt(p[1]) ? p[0] : void 0,
        P = v ? UC(n, v) : n,
        k = p ? p[1].statusCode : void 0,
        L = o && k && k >= 400,
        w = P.filter((A, O) => {
            let {
                route: H
            } = A;
            if (H.lazy) return !0;
            if (H.loader == null) return !1;
            if (s) return typeof H.loader != "function" || H.loader.hydrate ? !0 : t.loaderData[H.id] === void 0 && (!t.errors || t.errors[H.id] === void 0);
            if (BC(t.loaderData, t.matches[O], A) || l.some(Le => Le === A.route.id)) return !0;
            let de = t.matches[O],
                pe = A;
            return Cm(A, we({
                currentUrl: m,
                currentParams: de.params,
                nextUrl: y,
                nextParams: pe.params
            }, r, {
                actionResult: E,
                unstable_actionStatus: k,
                defaultShouldRevalidate: L ? !1 : a || m.pathname + m.search === y.pathname + y.search || m.search !== y.search || s1(de, pe)
            }))
        }),
        T = [];
    return d.forEach((A, O) => {
        if (s || !n.some(ce => ce.route.id === A.routeId) || c.has(O)) return;
        let H = Ai(f, A.path, g);
        if (!H) {
            T.push({
                key: O,
                routeId: A.routeId,
                path: A.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let de = t.fetchers.get(O),
            pe = Cd(H, A.path),
            Le = !1;
        h.has(O) ? Le = !1 : u.includes(O) ? Le = !0 : de && de.state !== "idle" && de.data === void 0 ? Le = a : Le = Cm(pe, we({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: E,
            unstable_actionStatus: k,
            defaultShouldRevalidate: L ? !1 : a
        })), Le && T.push({
            key: O,
            routeId: A.routeId,
            path: A.path,
            matches: H,
            match: pe,
            controller: new AbortController
        })
    }), [w, T]
}

function BC(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0;
    return r || i
}

function s1(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Cm(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function Tm(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    J(i, "No route found in manifest");
    let s = {};
    for (let o in r) {
        let l = i[o] !== void 0 && o !== "hasErrorBoundary";
        ds(!l, 'Route "' + i.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !l && !hC.has(o) && (s[o] = r[o])
    }
    Object.assign(i, s), Object.assign(i, we({}, t(i), {
        lazy: void 0
    }))
}

function $C(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function HC(e, t, n, r, i, s, o, a) {
    let l = r.reduce((d, h) => d.add(h.route.id), new Set),
        u = new Set,
        c = await e({
            matches: i.map(d => {
                let h = l.has(d.route.id);
                return we({}, d, {
                    shouldLoad: h,
                    resolve: g => (u.add(d.route.id), h ? WC(t, n, d, s, o, g, a) : Promise.resolve({
                        type: ve.data,
                        result: void 0
                    }))
                })
            }),
            request: n,
            params: i[0].params,
            context: a
        });
    return i.forEach(d => J(u.has(d.route.id), '`match.resolve()` was not called for route id "' + d.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), c.filter((d, h) => l.has(i[h].route.id))
}
async function WC(e, t, n, r, i, s, o) {
    let a, l, u = c => {
        let d, h = new Promise((p, E) => d = E);
        l = () => d(), t.signal.addEventListener("abort", l);
        let f = p => typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : c({
                request: t,
                params: n.params,
                context: o
            }, ...p !== void 0 ? [p] : []),
            g;
        return s ? g = s(p => f(p)) : g = (async () => {
            try {
                return {
                    type: "data",
                    result: await f()
                }
            } catch (p) {
                return {
                    type: "error",
                    result: p
                }
            }
        })(), Promise.race([g, h])
    };
    try {
        let c = n.route[e];
        if (n.route.lazy)
            if (c) {
                let d, [h] = await Promise.all([u(c).catch(f => {
                    d = f
                }), Tm(n.route, i, r)]);
                if (d !== void 0) throw d;
                a = h
            } else if (await Tm(n.route, i, r), c = n.route[e], c) a = await u(c);
        else if (e === "action") {
            let d = new URL(t.url),
                h = d.pathname + d.search;
            throw Mt(405, {
                method: t.method,
                pathname: h,
                routeId: n.route.id
            })
        } else return {
            type: ve.data,
            result: void 0
        };
        else if (c) a = await u(c);
        else {
            let d = new URL(t.url),
                h = d.pathname + d.search;
            throw Mt(404, {
                pathname: h
            })
        }
        J(a.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (c) {
        return {
            type: ve.error,
            result: c
        }
    } finally {
        l && t.signal.removeEventListener("abort", l)
    }
    return a
}
async function KC(e) {
    let {
        result: t,
        type: n,
        status: r
    } = e;
    if (a1(t)) {
        let o;
        try {
            let a = t.headers.get("Content-Type");
            a && /\bapplication\/json\b/.test(a) ? t.body == null ? o = null : o = await t.json() : o = await t.text()
        } catch (a) {
            return {
                type: ve.error,
                error: a
            }
        }
        return n === ve.error ? {
            type: ve.error,
            error: new Zf(t.status, t.statusText, o),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: ve.data,
            data: o,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === ve.error) return {
        type: ve.error,
        error: t,
        statusCode: eh(t) ? t.status : r
    };
    if (XC(t)) {
        var i, s;
        return {
            type: ve.deferred,
            deferredData: t,
            statusCode: (i = t.init) == null ? void 0 : i.status,
            headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: ve.data,
        data: t,
        statusCode: r
    }
}

function QC(e, t, n, r, i, s) {
    let o = e.headers.get("Location");
    if (J(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !th.test(o)) {
        let a = r.slice(0, r.findIndex(l => l.route.id === n) + 1);
        o = Ed(new URL(t.url), a, i, !0, o, s), e.headers.set("Location", o)
    }
    return e
}

function Rm(e, t, n) {
    if (th.test(e)) {
        let r = e,
            i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            s = pn(i.pathname, n) != null;
        if (i.origin === t.origin && s) return i.pathname + i.search + i.hash
    }
    return e
}

function vi(e, t, n, r) {
    let i = e.createURL(o1(t)).toString(),
        s = {
            signal: n
        };
    if (r && Gt(r.formMethod)) {
        let {
            formMethod: o,
            formEncType: a
        } = r;
        s.method = o.toUpperCase(), a === "application/json" ? (s.headers = new Headers({
            "Content-Type": a
        }), s.body = JSON.stringify(r.json)) : a === "text/plain" ? s.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? s.body = Pd(r.formData) : s.body = r.formData
    }
    return new Request(i, s)
}

function Pd(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function km(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function qC(e, t, n, r, i, s) {
    let o = {},
        a = null,
        l, u = !1,
        c = {},
        d = r && Vt(r[1]) ? r[1].error : void 0;
    return n.forEach((h, f) => {
        let g = t[f].route.id;
        if (J(!Ur(h), "Cannot handle redirect results in processLoaderData"), Vt(h)) {
            let p = h.error;
            d !== void 0 && (p = d, d = void 0), a = a || {};
            {
                let E = ao(e, g);
                a[E.route.id] == null && (a[E.route.id] = p)
            }
            o[g] = void 0, u || (u = !0, l = eh(h.error) ? h.error.status : 500), h.headers && (c[g] = h.headers)
        } else zr(h) ? (i.set(g, h.deferredData), o[g] = h.deferredData.data, h.statusCode != null && h.statusCode !== 200 && !u && (l = h.statusCode), h.headers && (c[g] = h.headers)) : (o[g] = h.data, h.statusCode && h.statusCode !== 200 && !u && (l = h.statusCode), h.headers && (c[g] = h.headers))
    }), d !== void 0 && r && (a = {
        [r[0]]: d
    }, o[r[0]] = void 0), {
        loaderData: o,
        errors: a,
        statusCode: l || 200,
        loaderHeaders: c
    }
}

function jm(e, t, n, r, i, s, o, a) {
    let {
        loaderData: l,
        errors: u
    } = qC(t, n, r, i, a);
    for (let c = 0; c < s.length; c++) {
        let {
            key: d,
            match: h,
            controller: f
        } = s[c];
        J(o !== void 0 && o[c] !== void 0, "Did not find corresponding fetcher result");
        let g = o[c];
        if (!(f && f.signal.aborted))
            if (Vt(g)) {
                let p = ao(e.matches, h == null ? void 0 : h.route.id);
                u && u[p.route.id] || (u = we({}, u, {
                    [p.route.id]: g.error
                })), e.fetchers.delete(d)
            } else if (Ur(g)) J(!1, "Unhandled fetcher revalidation redirect");
        else if (zr(g)) J(!1, "Unhandled fetcher deferred data");
        else {
            let p = Qn(g.data);
            e.fetchers.set(d, p)
        }
    }
    return {
        loaderData: l,
        errors: u
    }
}

function Lm(e, t, n, r) {
    let i = we({}, t);
    for (let s of n) {
        let o = s.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (i[o] = t[o]) : e[o] !== void 0 && s.route.loader && (i[o] = e[o]), r && r.hasOwnProperty(o)) break
    }
    return i
}

function bm(e) {
    return e ? Vt(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function ao(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function Nm(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Mt(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: i,
        type: s
    } = t === void 0 ? {} : t, o = "Unknown Server Error", a = "Unknown @remix-run/router error";
    return e === 400 ? (o = "Bad Request", i && n && r ? a = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : s === "defer-action" ? a = "defer() is not supported in actions" : s === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (o = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (o = "Method Not Allowed", i && n && r ? a = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')), new Zf(e || 500, o, new Error(a), !0)
}

function Am(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Ur(n)) return {
            result: n,
            idx: t
        }
    }
}

function o1(e) {
    let t = typeof e == "string" ? kr(e) : e;
    return oi(we({}, t, {
        hash: ""
    }))
}

function GC(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function YC(e) {
    return a1(e.result) && MC.has(e.result.status)
}

function zr(e) {
    return e.type === ve.deferred
}

function Vt(e) {
    return e.type === ve.error
}

function Ur(e) {
    return (e && e.type) === ve.redirect
}

function XC(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function a1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function JC(e) {
    return OC.has(e.toLowerCase())
}

function Gt(e) {
    return AC.has(e.toLowerCase())
}
async function Dm(e, t, n, r, i, s) {
    for (let o = 0; o < n.length; o++) {
        let a = n[o],
            l = t[o];
        if (!l) continue;
        let u = e.find(d => d.route.id === l.route.id),
            c = u != null && !s1(u, l) && (s && s[l.route.id]) !== void 0;
        if (zr(a) && (i || c)) {
            let d = r[o];
            J(d, "Expected an AbortSignal for revalidating fetcher deferred result"), await l1(a, d, i).then(h => {
                h && (n[o] = h || n[o])
            })
        }
    }
}
async function l1(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: ve.data,
                data: e.deferredData.unwrappedData
            }
        } catch (i) {
            return {
                type: ve.error,
                error: i
            }
        }
        return {
            type: ve.data,
            data: e.deferredData.data
        }
    }
}

function nh(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Cd(e, t) {
    let n = typeof t == "string" ? kr(t).search : t.search;
    if (e[e.length - 1].route.index && nh(n || "")) return e[e.length - 1];
    let r = n1(e);
    return r[r.length - 1]
}

function Om(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: s,
        json: o
    } = e;
    if (!(!t || !n || !r)) {
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: i
        };
        if (s != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: s,
            json: void 0,
            text: void 0
        };
        if (o !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: o,
            text: void 0
        }
    }
}

function Wu(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function ZC(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function zs(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function e2(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Qn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function t2(e, t) {
    try {
        let n = e.sessionStorage.getItem(i1);
        if (n) {
            let r = JSON.parse(n);
            for (let [i, s] of Object.entries(r || {})) s && Array.isArray(s) && t.set(i, new Set(s || []))
        }
    } catch {}
}

function n2(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, i] of t) n[r] = [...i];
        try {
            e.sessionStorage.setItem(i1, JSON.stringify(n))
        } catch (r) {
            ds(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function El() {
    return El = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, El.apply(this, arguments)
}
const Go = S.createContext(null),
    Xl = S.createContext(null),
    mn = S.createContext(null),
    rh = S.createContext(null),
    yn = S.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    u1 = S.createContext(null);

function r2(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    ws() || J(!1);
    let {
        basename: r,
        navigator: i
    } = S.useContext(mn), {
        hash: s,
        pathname: o,
        search: a
    } = Jl(e, {
        relative: n
    }), l = o;
    return r !== "/" && (l = o === "/" ? r : kn([r, o])), i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}

function ws() {
    return S.useContext(rh) != null
}

function gn() {
    return ws() || J(!1), S.useContext(rh).location
}

function c1(e) {
    S.useContext(mn).static || S.useLayoutEffect(e)
}

function Ss() {
    let {
        isDataRoute: e
    } = S.useContext(yn);
    return e ? v2() : i2()
}

function i2() {
    ws() || J(!1);
    let e = S.useContext(Go),
        {
            basename: t,
            future: n,
            navigator: r
        } = S.useContext(mn),
        {
            matches: i
        } = S.useContext(yn),
        {
            pathname: s
        } = gn(),
        o = JSON.stringify(Gl(i, n.v7_relativeSplatPath)),
        a = S.useRef(!1);
    return c1(() => {
        a.current = !0
    }), S.useCallback(function(u, c) {
        if (c === void 0 && (c = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = Yl(u, JSON.parse(o), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : kn([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, o, s, e])
}
const s2 = S.createContext(null);

function o2(e) {
    let t = S.useContext(yn).outlet;
    return t && S.createElement(s2.Provider, {
        value: e
    }, t)
}

function hA() {
    let {
        matches: e
    } = S.useContext(yn), t = e[e.length - 1];
    return t ? t.params : {}
}

function Jl(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = S.useContext(mn), {
        matches: i
    } = S.useContext(yn), {
        pathname: s
    } = gn(), o = JSON.stringify(Gl(i, r.v7_relativeSplatPath));
    return S.useMemo(() => Yl(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}

function a2(e, t, n, r) {
    ws() || J(!1);
    let {
        navigator: i
    } = S.useContext(mn), {
        matches: s
    } = S.useContext(yn), o = s[s.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = gn(),
        c;
    c = u;
    let d = c.pathname || "/",
        h = d;
    if (l !== "/") {
        let p = l.replace(/^\//, "").split("/");
        h = "/" + d.replace(/^\//, "").split("/").slice(p.length).join("/")
    }
    let f = Ai(e, {
        pathname: h
    });
    return f2(f && f.map(p => Object.assign({}, p, {
        params: Object.assign({}, a, p.params),
        pathname: kn([l, i.encodeLocation ? i.encodeLocation(p.pathname).pathname : p.pathname]),
        pathnameBase: p.pathnameBase === "/" ? l : kn([l, i.encodeLocation ? i.encodeLocation(p.pathnameBase).pathname : p.pathnameBase])
    })), s, n, r)
}

function l2() {
    let e = g2(),
        t = eh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: i
    }, n) : null, null)
}
const u2 = S.createElement(l2, null);
class c2 extends S.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(yn.Provider, {
            value: this.props.routeContext
        }, S.createElement(u1.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function d2(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = S.useContext(Go);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(yn.Provider, {
        value: t
    }, r)
}

function f2(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if ((s = n) != null && s.errors) e = n.matches;
        else return null
    }
    let o = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || J(!1), o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: h,
                    errors: f
                } = n, g = d.route.loader && h[d.route.id] === void 0 && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || g) {
                    l = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c, d, h) => {
        let f, g = !1,
            p = null,
            E = null;
        n && (f = a && d.route.id ? a[d.route.id] : void 0, p = d.route.errorElement || u2, l && (u < 0 && h === 0 ? (g = !0, E = null) : u === h && (g = !0, E = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1)),
            y = () => {
                let v;
                return f ? v = p : g ? v = E : d.route.Component ? v = S.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c, S.createElement(d2, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? S.createElement(c2, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: f,
            children: y(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : y()
    }, null)
}
var d1 = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(d1 || {}),
    fs = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(fs || {});

function h2(e) {
    let t = S.useContext(Go);
    return t || J(!1), t
}

function ih(e) {
    let t = S.useContext(Xl);
    return t || J(!1), t
}

function p2(e) {
    let t = S.useContext(yn);
    return t || J(!1), t
}

function f1(e) {
    let t = p2(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || J(!1), n.route.id
}

function m2() {
    return ih(fs.UseNavigation).navigation
}

function y2() {
    let {
        matches: e,
        loaderData: t
    } = ih(fs.UseMatches);
    return S.useMemo(() => e.map(n => Z0(n, t)), [e, t])
}

function g2() {
    var e;
    let t = S.useContext(u1),
        n = ih(fs.UseRouteError),
        r = f1(fs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function v2() {
    let {
        router: e
    } = h2(d1.UseNavigateStable), t = f1(fs.UseNavigateStable), n = S.useRef(!1);
    return c1(() => {
        n.current = !0
    }), S.useCallback(function(i, s) {
        s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, El({
            fromRouteId: t
        }, s)))
    }, [e, t])
}

function h1(e) {
    let {
        to: t,
        replace: n,
        state: r,
        relative: i
    } = e;
    ws() || J(!1);
    let {
        future: s,
        static: o
    } = S.useContext(mn), {
        matches: a
    } = S.useContext(yn), {
        pathname: l
    } = gn(), u = Ss(), c = Yl(t, Gl(a, s.v7_relativeSplatPath), l, i === "path"), d = JSON.stringify(c);
    return S.useEffect(() => u(JSON.parse(d), {
        replace: n,
        state: r,
        relative: i
    }), [u, d, i, n, r]), null
}

function p1(e) {
    return o2(e.context)
}

function x2(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = be.Pop,
        navigator: s,
        static: o = !1,
        future: a
    } = e;
    ws() && J(!1);
    let l = t.replace(/^\/*/, "/"),
        u = S.useMemo(() => ({
            basename: l,
            navigator: s,
            static: o,
            future: El({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, s, o]);
    typeof r == "string" && (r = kr(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: h = "",
        state: f = null,
        key: g = "default"
    } = r, p = S.useMemo(() => {
        let E = pn(c, l);
        return E == null ? null : {
            location: {
                pathname: E,
                search: d,
                hash: h,
                state: f,
                key: g
            },
            navigationType: i
        }
    }, [l, c, d, h, f, g, i]);
    return p == null ? null : S.createElement(mn.Provider, {
        value: u
    }, S.createElement(rh.Provider, {
        children: n,
        value: p
    }))
}
new Promise(() => {});

function w2(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: S.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ai() {
    return ai = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ai.apply(this, arguments)
}

function m1(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, s;
    for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function S2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function E2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !S2(e)
}

function Td(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [
            [n, r]
        ])
    }, []))
}

function P2(e, t) {
    let n = Td(e);
    return t && t.forEach((r, i) => {
        n.has(i) || t.getAll(i).forEach(s => {
            n.append(i, s)
        })
    }), n
}
const C2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    T2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
    R2 = "6";
try {
    window.__reactRouterVersion = R2
} catch {}

function k2(e, t) {
    return IC({
        basename: void 0,
        future: ai({}, void 0, {
            v7_prependBasename: !0
        }),
        history: cC({
            window: void 0
        }),
        hydrationData: j2(),
        routes: e,
        mapRouteProperties: w2,
        unstable_dataStrategy: void 0,
        window: void 0
    }).initialize()
}

function j2() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = ai({}, t, {
        errors: L2(t.errors)
    })), t
}

function L2(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse") n[r] = new Zf(i.status, i.statusText, i.data, i.internal === !0);
        else if (i && i.__type === "Error") {
        if (i.__subType) {
            let s = window[i.__subType];
            if (typeof s == "function") try {
                let o = new s(i.message);
                o.stack = "", n[r] = o
            } catch {}
        }
        if (n[r] == null) {
            let s = new Error(i.message);
            s.stack = "", n[r] = s
        }
    } else n[r] = i;
    return n
}
const y1 = S.createContext({
        isTransitioning: !1
    }),
    b2 = S.createContext(new Map),
    N2 = "startTransition",
    Mm = yS[N2],
    A2 = "flushSync",
    Fm = jP[A2];

function D2(e) {
    Mm ? Mm(e) : e()
}

function Us(e) {
    Fm ? Fm(e) : e()
}
class O2 {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function M2(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [i, s] = S.useState(n.state), [o, a] = S.useState(), [l, u] = S.useState({
        isTransitioning: !1
    }), [c, d] = S.useState(), [h, f] = S.useState(), [g, p] = S.useState(), E = S.useRef(new Map), {
        v7_startTransition: m
    } = r || {}, y = S.useCallback(w => {
        m ? D2(w) : w()
    }, [m]), v = S.useCallback((w, T) => {
        let {
            deletedFetchers: A,
            unstable_flushSync: O,
            unstable_viewTransitionOpts: H
        } = T;
        A.forEach(pe => E.current.delete(pe)), w.fetchers.forEach((pe, Le) => {
            pe.data !== void 0 && E.current.set(Le, pe.data)
        });
        let de = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!H || de) {
            O ? Us(() => s(w)) : y(() => s(w));
            return
        }
        if (O) {
            Us(() => {
                h && (c && c.resolve(), h.skipTransition()), u({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: H.currentLocation,
                    nextLocation: H.nextLocation
                })
            });
            let pe = n.window.document.startViewTransition(() => {
                Us(() => s(w))
            });
            pe.finished.finally(() => {
                Us(() => {
                    d(void 0), f(void 0), a(void 0), u({
                        isTransitioning: !1
                    })
                })
            }), Us(() => f(pe));
            return
        }
        h ? (c && c.resolve(), h.skipTransition(), p({
            state: w,
            currentLocation: H.currentLocation,
            nextLocation: H.nextLocation
        })) : (a(w), u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: H.currentLocation,
            nextLocation: H.nextLocation
        }))
    }, [n.window, h, c, E, y]);
    S.useLayoutEffect(() => n.subscribe(v), [n, v]), S.useEffect(() => {
        l.isTransitioning && !l.flushSync && d(new O2)
    }, [l]), S.useEffect(() => {
        if (c && o && n.window) {
            let w = o,
                T = c.promise,
                A = n.window.document.startViewTransition(async () => {
                    y(() => s(w)), await T
                });
            A.finished.finally(() => {
                d(void 0), f(void 0), a(void 0), u({
                    isTransitioning: !1
                })
            }), f(A)
        }
    }, [y, o, c, n.window]), S.useEffect(() => {
        c && o && i.location.key === o.location.key && c.resolve()
    }, [c, h, i.location, o]), S.useEffect(() => {
        !l.isTransitioning && g && (a(g.state), u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: g.currentLocation,
            nextLocation: g.nextLocation
        }), p(void 0))
    }, [l.isTransitioning, g]), S.useEffect(() => {}, []);
    let P = S.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: w => n.navigate(w),
            push: (w, T, A) => n.navigate(w, {
                state: T,
                preventScrollReset: A == null ? void 0 : A.preventScrollReset
            }),
            replace: (w, T, A) => n.navigate(w, {
                replace: !0,
                state: T,
                preventScrollReset: A == null ? void 0 : A.preventScrollReset
            })
        }), [n]),
        k = n.basename || "/",
        L = S.useMemo(() => ({
            router: n,
            navigator: P,
            static: !1,
            basename: k
        }), [n, P, k]);
    return S.createElement(S.Fragment, null, S.createElement(Go.Provider, {
        value: L
    }, S.createElement(Xl.Provider, {
        value: i
    }, S.createElement(b2.Provider, {
        value: E.current
    }, S.createElement(y1.Provider, {
        value: l
    }, S.createElement(x2, {
        basename: k,
        location: i.location,
        navigationType: i.historyAction,
        navigator: P,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, i.initialized || n.future.v7_partialHydration ? S.createElement(F2, {
        routes: n.routes,
        future: n.future,
        state: i
    }) : t))))), null)
}

function F2(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return a2(t, void 0, r, n)
}
const _2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    V2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Fn = S.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: s,
            replace: o,
            state: a,
            target: l,
            to: u,
            preventScrollReset: c,
            unstable_viewTransition: d
        } = t, h = m1(t, C2), {
            basename: f
        } = S.useContext(mn), g, p = !1;
        if (typeof u == "string" && V2.test(u) && (g = u, _2)) try {
            let v = new URL(window.location.href),
                P = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
                k = pn(P.pathname, f);
            P.origin === v.origin && k != null ? u = k + P.search + P.hash : p = !0
        } catch {}
        let E = r2(u, {
                relative: i
            }),
            m = z2(u, {
                replace: o,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: i,
                unstable_viewTransition: d
            });

        function y(v) {
            r && r(v), v.defaultPrevented || m(v)
        }
        return S.createElement("a", ai({}, h, {
            href: g || E,
            onClick: p || s ? r : y,
            ref: n,
            target: l
        }))
    }),
    Bs = S.forwardRef(function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: i = !1,
            className: s = "",
            end: o = !1,
            style: a,
            to: l,
            unstable_viewTransition: u,
            children: c
        } = t, d = m1(t, T2), h = Jl(l, {
            relative: d.relative
        }), f = gn(), g = S.useContext(Xl), {
            navigator: p,
            basename: E
        } = S.useContext(mn), m = g != null && $2(h) && u === !0, y = p.encodeLocation ? p.encodeLocation(h).pathname : h.pathname, v = f.pathname, P = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        i || (v = v.toLowerCase(), P = P ? P.toLowerCase() : null, y = y.toLowerCase()), P && E && (P = pn(P, E) || P);
        const k = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
        let L = v === y || !o && v.startsWith(y) && v.charAt(k) === "/",
            w = P != null && (P === y || !o && P.startsWith(y) && P.charAt(y.length) === "/"),
            T = {
                isActive: L,
                isPending: w,
                isTransitioning: m
            },
            A = L ? r : void 0,
            O;
        typeof s == "function" ? O = s(T) : O = [s, L ? "active" : null, w ? "pending" : null, m ? "transitioning" : null].filter(Boolean).join(" ");
        let H = typeof a == "function" ? a(T) : a;
        return S.createElement(Fn, ai({}, d, {
            "aria-current": A,
            className: O,
            ref: n,
            style: H,
            to: l,
            unstable_viewTransition: u
        }), typeof c == "function" ? c(T) : c)
    });

function pA(e) {
    let {
        getKey: t,
        storageKey: n
    } = e;
    return U2({
        getKey: t,
        storageKey: n
    }), null
}
var Pl;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Pl || (Pl = {}));
var Rd;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Rd || (Rd = {}));

function g1(e) {
    let t = S.useContext(Go);
    return t || J(!1), t
}

function I2(e) {
    let t = S.useContext(Xl);
    return t || J(!1), t
}

function z2(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: s,
        relative: o,
        unstable_viewTransition: a
    } = t === void 0 ? {} : t, l = Ss(), u = gn(), c = Jl(e, {
        relative: o
    });
    return S.useCallback(d => {
        if (E2(d, n)) {
            d.preventDefault();
            let h = r !== void 0 ? r : oi(u) === oi(c);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                unstable_viewTransition: a
            })
        }
    }, [u, l, c, r, i, n, e, s, o, a])
}

function mA(e) {
    let t = S.useRef(Td(e)),
        n = S.useRef(!1),
        r = gn(),
        i = S.useMemo(() => P2(r.search, n.current ? null : t.current), [r.search]),
        s = Ss(),
        o = S.useCallback((a, l) => {
            const u = Td(typeof a == "function" ? a(i) : a);
            n.current = !0, s("?" + u, l)
        }, [s, i]);
    return [i, o]
}
const _m = "react-router-scroll-positions";
let Ra = {};

function U2(e) {
    let {
        getKey: t,
        storageKey: n
    } = e === void 0 ? {} : e, {
        router: r
    } = g1(Pl.UseScrollRestoration), {
        restoreScrollPosition: i,
        preventScrollReset: s
    } = I2(Rd.UseScrollRestoration), {
        basename: o
    } = S.useContext(mn), a = gn(), l = y2(), u = m2();
    S.useEffect(() => (window.history.scrollRestoration = "manual", () => {
        window.history.scrollRestoration = "auto"
    }), []), B2(S.useCallback(() => {
        if (u.state === "idle") {
            let c = (t ? t(a, l) : null) || a.key;
            Ra[c] = window.scrollY
        }
        try {
            sessionStorage.setItem(n || _m, JSON.stringify(Ra))
        } catch {}
        window.history.scrollRestoration = "auto"
    }, [n, t, u.state, a, l])), typeof document < "u" && (S.useLayoutEffect(() => {
        try {
            let c = sessionStorage.getItem(n || _m);
            c && (Ra = JSON.parse(c))
        } catch {}
    }, [n]), S.useLayoutEffect(() => {
        let c = t && o !== "/" ? (h, f) => t(ai({}, h, {
                pathname: pn(h.pathname, o) || h.pathname
            }), f) : t,
            d = r == null ? void 0 : r.enableScrollRestoration(Ra, () => window.scrollY, c);
        return () => d && d()
    }, [r, o, t]), S.useLayoutEffect(() => {
        if (i !== !1) {
            if (typeof i == "number") {
                window.scrollTo(0, i);
                return
            }
            if (a.hash) {
                let c = document.getElementById(decodeURIComponent(a.hash.slice(1)));
                if (c) {
                    c.scrollIntoView();
                    return
                }
            }
            s !== !0 && window.scrollTo(0, 0)
        }
    }, [a, i, s]))
}

function B2(e, t) {
    let {
        capture: n
    } = {};
    S.useEffect(() => {
        let r = n != null ? {
            capture: n
        } : void 0;
        return window.addEventListener("pagehide", e, r), () => {
            window.removeEventListener("pagehide", e, r)
        }
    }, [e, n])
}

function $2(e, t) {
    t === void 0 && (t = {});
    let n = S.useContext(y1);
    n == null && J(!1);
    let {
        basename: r
    } = g1(Pl.useViewTransitionState), i = Jl(e, {
        relative: t.relative
    });
    if (!n.isTransitioning) return !1;
    let s = pn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        o = pn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Sd(i.pathname, o) != null || Sd(i.pathname, s) != null
}

function v1(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: H2
} = Object.prototype, {
    getPrototypeOf: sh
} = Object, Zl = (e => t => {
    const n = H2.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), tn = e => (e = e.toLowerCase(), t => Zl(t) === e), eu = e => t => typeof t === e, {
    isArray: Es
} = Array, Do = eu("undefined");

function W2(e) {
    return e !== null && !Do(e) && e.constructor !== null && !Do(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const x1 = tn("ArrayBuffer");

function K2(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && x1(e.buffer), t
}
const Q2 = eu("string"),
    Ut = eu("function"),
    w1 = eu("number"),
    tu = e => e !== null && typeof e == "object",
    q2 = e => e === !0 || e === !1,
    $a = e => {
        if (Zl(e) !== "object") return !1;
        const t = sh(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    G2 = tn("Date"),
    Y2 = tn("File"),
    X2 = tn("Blob"),
    J2 = tn("FileList"),
    Z2 = e => tu(e) && Ut(e.pipe),
    eT = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = Zl(e)) === "formdata" || t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"))
    },
    tT = tn("URLSearchParams"),
    [nT, rT, iT, sT] = ["ReadableStream", "Request", "Response", "Headers"].map(tn),
    oT = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Yo(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if (typeof e != "object" && (e = [e]), Es(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = s.length;
        let a;
        for (r = 0; r < o; r++) a = s[r], t.call(null, e[a], a, e)
    }
}

function S1(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
const E1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    P1 = e => !Do(e) && e !== E1;

function kd() {
    const {
        caseless: e
    } = P1(this) && this || {}, t = {}, n = (r, i) => {
        const s = e && S1(t, i) || i;
        $a(t[s]) && $a(r) ? t[s] = kd(t[s], r) : $a(r) ? t[s] = kd({}, r) : Es(r) ? t[s] = r.slice() : t[s] = r
    };
    for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Yo(arguments[r], n);
    return t
}
const aT = (e, t, n, {
        allOwnKeys: r
    } = {}) => (Yo(t, (i, s) => {
        n && Ut(i) ? e[s] = v1(i, n) : e[s] = i
    }, {
        allOwnKeys: r
    }), e),
    lT = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    uT = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    cT = (e, t, n, r) => {
        let i, s, o;
        const a = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0;) o = i[s], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
            e = n !== !1 && sh(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    dT = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    fT = e => {
        if (!e) return null;
        if (Es(e)) return e;
        let t = e.length;
        if (!w1(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    hT = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && sh(Uint8Array)),
    pT = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (;
            (i = r.next()) && !i.done;) {
            const s = i.value;
            t.call(e, s[0], s[1])
        }
    },
    mT = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    yT = tn("HTMLFormElement"),
    gT = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
        return r.toUpperCase() + i
    }),
    Vm = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    vT = tn("RegExp"),
    C1 = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Yo(n, (i, s) => {
            let o;
            (o = t(i, s, e)) !== !1 && (r[s] = o || i)
        }), Object.defineProperties(e, r)
    },
    xT = e => {
        C1(e, (t, n) => {
            if (Ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (Ut(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    wT = (e, t) => {
        const n = {},
            r = i => {
                i.forEach(s => {
                    n[s] = !0
                })
            };
        return Es(e) ? r(e) : r(String(e).split(t)), n
    },
    ST = () => {},
    ET = (e, t) => e != null && Number.isFinite(e = +e) ? e : t,
    Ku = "abcdefghijklmnopqrstuvwxyz",
    Im = "0123456789",
    T1 = {
        DIGIT: Im,
        ALPHA: Ku,
        ALPHA_DIGIT: Ku + Ku.toUpperCase() + Im
    },
    PT = (e = 16, t = T1.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function CT(e) {
    return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const TT = e => {
        const t = new Array(10),
            n = (r, i) => {
                if (tu(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const s = Es(r) ? [] : {};
                        return Yo(r, (o, a) => {
                            const l = n(o, i + 1);
                            !Do(l) && (s[a] = l)
                        }), t[i] = void 0, s
                    }
                }
                return r
            };
        return n(e, 0)
    },
    RT = tn("AsyncFunction"),
    kT = e => e && (tu(e) || Ut(e)) && Ut(e.then) && Ut(e.catch),
    b = {
        isArray: Es,
        isArrayBuffer: x1,
        isBuffer: W2,
        isFormData: eT,
        isArrayBufferView: K2,
        isString: Q2,
        isNumber: w1,
        isBoolean: q2,
        isObject: tu,
        isPlainObject: $a,
        isReadableStream: nT,
        isRequest: rT,
        isResponse: iT,
        isHeaders: sT,
        isUndefined: Do,
        isDate: G2,
        isFile: Y2,
        isBlob: X2,
        isRegExp: vT,
        isFunction: Ut,
        isStream: Z2,
        isURLSearchParams: tT,
        isTypedArray: hT,
        isFileList: J2,
        forEach: Yo,
        merge: kd,
        extend: aT,
        trim: oT,
        stripBOM: lT,
        inherits: uT,
        toFlatObject: cT,
        kindOf: Zl,
        kindOfTest: tn,
        endsWith: dT,
        toArray: fT,
        forEachEntry: pT,
        matchAll: mT,
        isHTMLForm: yT,
        hasOwnProperty: Vm,
        hasOwnProp: Vm,
        reduceDescriptors: C1,
        freezeMethods: xT,
        toObjectSet: wT,
        toCamelCase: gT,
        noop: ST,
        toFiniteNumber: ET,
        findKey: S1,
        global: E1,
        isContextDefined: P1,
        ALPHABET: T1,
        generateString: PT,
        isSpecCompliantForm: CT,
        toJSONObject: TT,
        isAsyncFn: RT,
        isThenable: kT
    };

function Y(e, t, n, r, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}
b.inherits(Y, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: b.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const R1 = Y.prototype,
    k1 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    k1[e] = {
        value: e
    }
});
Object.defineProperties(Y, k1);
Object.defineProperty(R1, "isAxiosError", {
    value: !0
});
Y.from = (e, t, n, r, i, s) => {
    const o = Object.create(R1);
    return b.toFlatObject(e, o, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"), Y.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o
};
const jT = null;

function jd(e) {
    return b.isPlainObject(e) || b.isArray(e)
}

function j1(e) {
    return b.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function zm(e, t, n) {
    return e ? e.concat(t).map(function(i, s) {
        return i = j1(i), !n && s ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}

function LT(e) {
    return b.isArray(e) && !e.some(jd)
}
const bT = b.toFlatObject(b, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function nu(e, t, n) {
    if (!b.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = b.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(p, E) {
        return !b.isUndefined(E[p])
    });
    const r = n.metaTokens,
        i = n.visitor || c,
        s = n.dots,
        o = n.indexes,
        l = (n.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
    if (!b.isFunction(i)) throw new TypeError("visitor must be a function");

    function u(g) {
        if (g === null) return "";
        if (b.isDate(g)) return g.toISOString();
        if (!l && b.isBlob(g)) throw new Y("Blob is not supported. Use a Buffer instead.");
        return b.isArrayBuffer(g) || b.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }

    function c(g, p, E) {
        let m = g;
        if (g && !E && typeof g == "object") {
            if (b.endsWith(p, "{}")) p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
            else if (b.isArray(g) && LT(g) || (b.isFileList(g) || b.endsWith(p, "[]")) && (m = b.toArray(g))) return p = j1(p), m.forEach(function(v, P) {
                !(b.isUndefined(v) || v === null) && t.append(o === !0 ? zm([p], P, s) : o === null ? p : p + "[]", u(v))
            }), !1
        }
        return jd(g) ? !0 : (t.append(zm(E, p, s), u(g)), !1)
    }
    const d = [],
        h = Object.assign(bT, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: jd
        });

    function f(g, p) {
        if (!b.isUndefined(g)) {
            if (d.indexOf(g) !== -1) throw Error("Circular reference detected in " + p.join("."));
            d.push(g), b.forEach(g, function(m, y) {
                (!(b.isUndefined(m) || m === null) && i.call(t, m, b.isString(y) ? y.trim() : y, p, h)) === !0 && f(m, p ? p.concat(y) : [y])
            }), d.pop()
        }
    }
    if (!b.isObject(e)) throw new TypeError("data must be an object");
    return f(e), t
}

function Um(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function oh(e, t) {
    this._pairs = [], e && nu(e, this, t)
}
const L1 = oh.prototype;
L1.append = function(t, n) {
    this._pairs.push([t, n])
};
L1.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Um)
    } : Um;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function NT(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function b1(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || NT,
        i = n && n.serialize;
    let s;
    if (i ? s = i(t, n) : s = b.isURLSearchParams(t) ? t.toString() : new oh(t, n).toString(r), s) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class Bm {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        b.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const N1 = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    AT = typeof URLSearchParams < "u" ? URLSearchParams : oh,
    DT = typeof FormData < "u" ? FormData : null,
    OT = typeof Blob < "u" ? Blob : null,
    MT = {
        isBrowser: !0,
        classes: {
            URLSearchParams: AT,
            FormData: DT,
            Blob: OT
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    ah = typeof window < "u" && typeof document < "u",
    FT = (e => ah && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    _T = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    VT = ah && window.location.href || "http://localhost",
    IT = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: ah,
        hasStandardBrowserEnv: FT,
        hasStandardBrowserWebWorkerEnv: _T,
        origin: VT
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Zt = {
        ...IT,
        ...MT
    };

function zT(e, t) {
    return nu(e, new Zt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, s) {
            return Zt.isNode && b.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function UT(e) {
    return b.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function BT(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++) s = n[r], t[s] = e[s];
    return t
}

function A1(e) {
    function t(n, r, i, s) {
        let o = n[s++];
        if (o === "__proto__") return !0;
        const a = Number.isFinite(+o),
            l = s >= n.length;
        return o = !o && b.isArray(i) ? i.length : o, l ? (b.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !b.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && b.isArray(i[o]) && (i[o] = BT(i[o])), !a)
    }
    if (b.isFormData(e) && b.isFunction(e.entries)) {
        const n = {};
        return b.forEachEntry(e, (r, i) => {
            t(UT(r), i, n, 0)
        }), n
    }
    return null
}

function $T(e, t, n) {
    if (b.isString(e)) try {
        return (t || JSON.parse)(e), b.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const Xo = {
    transitional: N1,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            s = b.isObject(t);
        if (s && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t)) return i ? JSON.stringify(A1(t)) : t;
        if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t) || b.isReadableStream(t)) return t;
        if (b.isArrayBufferView(t)) return t.buffer;
        if (b.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let a;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return zT(t, this.formSerializer).toString();
            if ((a = b.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return nu(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return s || i ? (n.setContentType("application/json", !1), $T(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || Xo.transitional,
            r = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (b.isResponse(t) || b.isReadableStream(t)) return t;
        if (t && b.isString(t) && (r && !this.responseType || i)) {
            const o = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (o) throw a.name === "SyntaxError" ? Y.from(a, Y.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Zt.classes.FormData,
        Blob: Zt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Xo.headers[e] = {}
});
const HT = b.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    WT = e => {
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(o) {
            i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && HT[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    $m = Symbol("internals");

function $s(e) {
    return e && String(e).trim().toLowerCase()
}

function Ha(e) {
    return e === !1 || e == null ? e : b.isArray(e) ? e.map(Ha) : String(e)
}

function KT(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const QT = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Qu(e, t, n, r, i) {
    if (b.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), !!b.isString(t)) {
        if (b.isString(r)) return t.indexOf(r) !== -1;
        if (b.isRegExp(r)) return r.test(t)
    }
}

function qT(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function GT(e, t) {
    const n = b.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, s, o) {
                return this[r].call(this, t, i, s, o)
            },
            configurable: !0
        })
    })
}
class yt {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;

        function s(a, l, u) {
            const c = $s(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const d = b.findKey(i, c);
            (!d || i[d] === void 0 || u === !0 || u === void 0 && i[d] !== !1) && (i[d || l] = Ha(a))
        }
        const o = (a, l) => b.forEach(a, (u, c) => s(u, c, l));
        if (b.isPlainObject(t) || t instanceof this.constructor) o(t, n);
        else if (b.isString(t) && (t = t.trim()) && !QT(t)) o(WT(t), n);
        else if (b.isHeaders(t))
            for (const [a, l] of t.entries()) s(l, a, r);
        else t != null && s(n, t, r);
        return this
    }
    get(t, n) {
        if (t = $s(t), t) {
            const r = b.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return KT(i);
                if (b.isFunction(n)) return n.call(this, i, r);
                if (b.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = $s(t), t) {
            const r = b.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Qu(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;

        function s(o) {
            if (o = $s(o), o) {
                const a = b.findKey(r, o);
                a && (!n || Qu(r, r[a], a, n)) && (delete r[a], i = !0)
            }
        }
        return b.isArray(t) ? t.forEach(s) : s(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--;) {
            const s = n[r];
            (!t || Qu(this, this[s], s, t, !0)) && (delete this[s], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            r = {};
        return b.forEach(this, (i, s) => {
            const o = b.findKey(r, s);
            if (o) {
                n[o] = Ha(i), delete n[s];
                return
            }
            const a = t ? qT(s) : String(s).trim();
            a !== s && delete n[s], n[a] = Ha(i), r[a] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return b.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && b.isArray(r) ? r.join(", ") : r)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)), r
    }
    static accessor(t) {
        const r = (this[$m] = this[$m] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function s(o) {
            const a = $s(o);
            r[a] || (GT(i, o), r[a] = !0)
        }
        return b.isArray(t) ? t.forEach(s) : s(t), this
    }
}
yt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(yt.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
b.freezeMethods(yt);

function qu(e, t) {
    const n = this || Xo,
        r = t || n,
        i = yt.from(r.headers);
    let s = r.data;
    return b.forEach(e, function(a) {
        s = a.call(n, s, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), s
}

function D1(e) {
    return !!(e && e.__CANCEL__)
}

function Ps(e, t, n) {
    Y.call(this, e ?? "canceled", Y.ERR_CANCELED, t, n), this.name = "CanceledError"
}
b.inherits(Ps, Y, {
    __CANCEL__: !0
});

function O1(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Y("Request failed with status code " + n.status, [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function YT(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function XT(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        s = 0,
        o;
    return t = t !== void 0 ? t : 1e3,
        function(l) {
            const u = Date.now(),
                c = r[s];
            o || (o = u), n[i] = l, r[i] = u;
            let d = s,
                h = 0;
            for (; d !== i;) h += n[d++], d = d % e;
            if (i = (i + 1) % e, i === s && (s = (s + 1) % e), u - o < t) return;
            const f = c && u - c;
            return f ? Math.round(h * 1e3 / f) : void 0
        }
}

function JT(e, t) {
    let n = 0;
    const r = 1e3 / t;
    let i = null;
    return function() {
        const o = this === !0,
            a = Date.now();
        if (o || a - n > r) return i && (clearTimeout(i), i = null), n = a, e.apply(null, arguments);
        i || (i = setTimeout(() => (i = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)))
    }
}
const Cl = (e, t, n = 3) => {
        let r = 0;
        const i = XT(50, 250);
        return JT(s => {
            const o = s.loaded,
                a = s.lengthComputable ? s.total : void 0,
                l = o - r,
                u = i(l),
                c = o <= a;
            r = o;
            const d = {
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: l,
                rate: u || void 0,
                estimated: u && a && c ? (a - o) / u : void 0,
                event: s,
                lengthComputable: a != null
            };
            d[t ? "download" : "upload"] = !0, e(d)
        }, n)
    },
    ZT = Zt.hasStandardBrowserEnv ? function() {
        const t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
        let r;

        function i(s) {
            let o = s;
            return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return r = i(window.location.href),
            function(o) {
                const a = b.isString(o) ? i(o) : o;
                return a.protocol === r.protocol && a.host === r.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(),
    eR = Zt.hasStandardBrowserEnv ? {
        write(e, t, n, r, i, s) {
            const o = [e + "=" + encodeURIComponent(t)];
            b.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), b.isString(r) && o.push("path=" + r), b.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ")
        },
        read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function tR(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function nR(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function M1(e, t) {
    return e && !tR(t) ? nR(e, t) : t
}
const Hm = e => e instanceof yt ? {
    ...e
} : e;

function li(e, t) {
    t = t || {};
    const n = {};

    function r(u, c, d) {
        return b.isPlainObject(u) && b.isPlainObject(c) ? b.merge.call({
            caseless: d
        }, u, c) : b.isPlainObject(c) ? b.merge({}, c) : b.isArray(c) ? c.slice() : c
    }

    function i(u, c, d) {
        if (b.isUndefined(c)) {
            if (!b.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, c, d)
    }

    function s(u, c) {
        if (!b.isUndefined(c)) return r(void 0, c)
    }

    function o(u, c) {
        if (b.isUndefined(c)) {
            if (!b.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }

    function a(u, c, d) {
        if (d in t) return r(u, c);
        if (d in e) return r(void 0, u)
    }
    const l = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, c) => i(Hm(u), Hm(c), !0)
    };
    return b.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const d = l[c] || i,
            h = d(e[c], t[c], c);
        b.isUndefined(h) && d !== a || (n[c] = h)
    }), n
}
const F1 = e => {
        const t = li({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: i,
            xsrfCookieName: s,
            headers: o,
            auth: a
        } = t;
        t.headers = o = yt.from(o), t.url = b1(M1(t.baseURL, t.url), e.params, e.paramsSerializer), a && o.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
        let l;
        if (b.isFormData(n)) {
            if (Zt.hasStandardBrowserEnv || Zt.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
            else if ((l = o.getContentType()) !== !1) {
                const [u, ...c] = l ? l.split(";").map(d => d.trim()).filter(Boolean) : [];
                o.setContentType([u || "multipart/form-data", ...c].join("; "))
            }
        }
        if (Zt.hasStandardBrowserEnv && (r && b.isFunction(r) && (r = r(t)), r || r !== !1 && ZT(t.url))) {
            const u = i && s && eR.read(s);
            u && o.set(i, u)
        }
        return t
    },
    rR = typeof XMLHttpRequest < "u",
    iR = rR && function(e) {
        return new Promise(function(n, r) {
            const i = F1(e);
            let s = i.data;
            const o = yt.from(i.headers).normalize();
            let {
                responseType: a
            } = i, l;

            function u() {
                i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l)
            }
            let c = new XMLHttpRequest;
            c.open(i.method.toUpperCase(), i.url, !0), c.timeout = i.timeout;

            function d() {
                if (!c) return;
                const f = yt.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
                    p = {
                        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
                        status: c.status,
                        statusText: c.statusText,
                        headers: f,
                        config: e,
                        request: c
                    };
                O1(function(m) {
                    n(m), u()
                }, function(m) {
                    r(m), u()
                }, p), c = null
            }
            "onloadend" in c ? c.onloadend = d : c.onreadystatechange = function() {
                !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(d)
            }, c.onabort = function() {
                c && (r(new Y("Request aborted", Y.ECONNABORTED, i, c)), c = null)
            }, c.onerror = function() {
                r(new Y("Network Error", Y.ERR_NETWORK, i, c)), c = null
            }, c.ontimeout = function() {
                let g = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
                const p = i.transitional || N1;
                i.timeoutErrorMessage && (g = i.timeoutErrorMessage), r(new Y(g, p.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, i, c)), c = null
            }, s === void 0 && o.setContentType(null), "setRequestHeader" in c && b.forEach(o.toJSON(), function(g, p) {
                c.setRequestHeader(p, g)
            }), b.isUndefined(i.withCredentials) || (c.withCredentials = !!i.withCredentials), a && a !== "json" && (c.responseType = i.responseType), typeof i.onDownloadProgress == "function" && c.addEventListener("progress", Cl(i.onDownloadProgress, !0)), typeof i.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Cl(i.onUploadProgress)), (i.cancelToken || i.signal) && (l = f => {
                c && (r(!f || f.type ? new Ps(null, e, c) : f), c.abort(), c = null)
            }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
            const h = YT(i.url);
            if (h && Zt.protocols.indexOf(h) === -1) {
                r(new Y("Unsupported protocol " + h + ":", Y.ERR_BAD_REQUEST, e));
                return
            }
            c.send(s || null)
        })
    },
    sR = (e, t) => {
        let n = new AbortController,
            r;
        const i = function(l) {
            if (!r) {
                r = !0, o();
                const u = l instanceof Error ? l : this.reason;
                n.abort(u instanceof Y ? u : new Ps(u instanceof Error ? u.message : u))
            }
        };
        let s = t && setTimeout(() => {
            i(new Y(`timeout ${t} of ms exceeded`, Y.ETIMEDOUT))
        }, t);
        const o = () => {
            e && (s && clearTimeout(s), s = null, e.forEach(l => {
                l && (l.removeEventListener ? l.removeEventListener("abort", i) : l.unsubscribe(i))
            }), e = null)
        };
        e.forEach(l => l && l.addEventListener && l.addEventListener("abort", i));
        const {
            signal: a
        } = n;
        return a.unsubscribe = o, [a, () => {
            s && clearTimeout(s), s = null
        }]
    },
    oR = function*(e, t) {
        let n = e.byteLength;
        if (!t || n < t) {
            yield e;
            return
        }
        let r = 0,
            i;
        for (; r < n;) i = r + t, yield e.slice(r, i), r = i
    },
    aR = async function*(e, t, n) {
        for await (const r of e) yield* oR(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
    }, Wm = (e, t, n, r, i) => {
        const s = aR(e, t, i);
        let o = 0;
        return new ReadableStream({
            type: "bytes",
            async pull(a) {
                const {
                    done: l,
                    value: u
                } = await s.next();
                if (l) {
                    a.close(), r();
                    return
                }
                let c = u.byteLength;
                n && n(o += c), a.enqueue(new Uint8Array(u))
            },
            cancel(a) {
                return r(a), s.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Km = (e, t) => {
        const n = e != null;
        return r => setTimeout(() => t({
            lengthComputable: n,
            total: e,
            loaded: r
        }))
    }, ru = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _1 = ru && typeof ReadableStream == "function", Ld = ru && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())), lR = _1 && (() => {
        let e = !1;
        const t = new Request(Zt.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return e = !0, "half"
            }
        }).headers.has("Content-Type");
        return e && !t
    })(), Qm = 64 * 1024, bd = _1 && !!(() => {
        try {
            return b.isReadableStream(new Response("").body)
        } catch {}
    })(), Tl = {
        stream: bd && (e => e.body)
    };
ru && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Tl[t] && (Tl[t] = b.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new Y(`Response type '${t}' is not supported`, Y.ERR_NOT_SUPPORT, r)
        })
    })
})(new Response);
const uR = async e => {
    if (e == null) return 0;
    if (b.isBlob(e)) return e.size;
    if (b.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
    if (b.isArrayBufferView(e)) return e.byteLength;
    if (b.isURLSearchParams(e) && (e = e + ""), b.isString(e)) return (await Ld(e)).byteLength
}, cR = async (e, t) => {
    const n = b.toFiniteNumber(e.getContentLength());
    return n ?? uR(t)
}, dR = ru && (async e => {
    let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: h
    } = F1(e);
    u = u ? (u + "").toLowerCase() : "text";
    let [f, g] = i || s || o ? sR([i, s], o) : [], p, E;
    const m = () => {
        !p && setTimeout(() => {
            f && f.unsubscribe()
        }), p = !0
    };
    let y;
    try {
        if (l && lR && n !== "get" && n !== "head" && (y = await cR(c, r)) !== 0) {
            let L = new Request(t, {
                    method: "POST",
                    body: r,
                    duplex: "half"
                }),
                w;
            b.isFormData(r) && (w = L.headers.get("content-type")) && c.setContentType(w), L.body && (r = Wm(L.body, Qm, Km(y, Cl(l)), null, Ld))
        }
        b.isString(d) || (d = d ? "cors" : "omit"), E = new Request(t, {
            ...h,
            signal: f,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d
        });
        let v = await fetch(E);
        const P = bd && (u === "stream" || u === "response");
        if (bd && (a || P)) {
            const L = {};
            ["status", "statusText", "headers"].forEach(T => {
                L[T] = v[T]
            });
            const w = b.toFiniteNumber(v.headers.get("content-length"));
            v = new Response(Wm(v.body, Qm, a && Km(w, Cl(a, !0)), P && m, Ld), L)
        }
        u = u || "text";
        let k = await Tl[b.findKey(Tl, u) || "text"](v, e);
        return !P && m(), g && g(), await new Promise((L, w) => {
            O1(L, w, {
                data: k,
                headers: yt.from(v.headers),
                status: v.status,
                statusText: v.statusText,
                config: e,
                request: E
            })
        })
    } catch (v) {
        throw m(), v && v.name === "TypeError" && /fetch/i.test(v.message) ? Object.assign(new Y("Network Error", Y.ERR_NETWORK, e, E), {
            cause: v.cause || v
        }) : Y.from(v, v && v.code, e, E)
    }
}), Nd = {
    http: jT,
    xhr: iR,
    fetch: dR
};
b.forEach(Nd, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const qm = e => `- ${e}`,
    fR = e => b.isFunction(e) || e === null || e === !1,
    V1 = {
        getAdapter: e => {
            e = b.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, r;
            const i = {};
            for (let s = 0; s < t; s++) {
                n = e[s];
                let o;
                if (r = n, !fR(n) && (r = Nd[(o = String(n)).toLowerCase()], r === void 0)) throw new Y(`Unknown adapter '${o}'`);
                if (r) break;
                i[o || "#" + s] = r
            }
            if (!r) {
                const s = Object.entries(i).map(([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = t ? s.length > 1 ? `since :
` + s.map(qm).join(`
`) : " " + qm(s[0]) : "as no adapter specified";
                throw new Y("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: Nd
    };

function Gu(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ps(null, e)
}

function Gm(e) {
    return Gu(e), e.headers = yt.from(e.headers), e.data = qu.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), V1.getAdapter(e.adapter || Xo.adapter)(e).then(function(r) {
        return Gu(e), r.data = qu.call(e, e.transformResponse, r), r.headers = yt.from(r.headers), r
    }, function(r) {
        return D1(r) || (Gu(e), r && r.response && (r.response.data = qu.call(e, e.transformResponse, r.response), r.response.headers = yt.from(r.response.headers))), Promise.reject(r)
    })
}
const I1 = "1.7.2",
    lh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    lh[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Ym = {};
lh.transitional = function(t, n, r) {
    function i(s, o) {
        return "[Axios v" + I1 + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
    }
    return (s, o, a) => {
        if (t === !1) throw new Y(i(o, " has been removed" + (n ? " in " + n : "")), Y.ERR_DEPRECATED);
        return n && !Ym[o] && (Ym[o] = !0, console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(s, o, a) : !0
    }
};

function hR(e, t, n) {
    if (typeof e != "object") throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0;) {
        const s = r[i],
            o = t[s];
        if (o) {
            const a = e[s],
                l = a === void 0 || o(a, s, e);
            if (l !== !0) throw new Y("option " + s + " must be " + l, Y.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new Y("Unknown option " + s, Y.ERR_BAD_OPTION)
    }
}
const Ad = {
        assertOptions: hR,
        validators: lh
    },
    $n = Ad.validators;
class Jr {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new Bm,
            response: new Bm
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = li(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: i,
            headers: s
        } = n;
        r !== void 0 && Ad.assertOptions(r, {
            silentJSONParsing: $n.transitional($n.boolean),
            forcedJSONParsing: $n.transitional($n.boolean),
            clarifyTimeoutError: $n.transitional($n.boolean)
        }, !1), i != null && (b.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : Ad.assertOptions(i, {
            encode: $n.function,
            serialize: $n.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let o = s && b.merge(s.common, s[n.method]);
        s && b.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete s[g]
        }), n.headers = yt.concat(o, s);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(p) {
            typeof p.runWhen == "function" && p.runWhen(n) === !1 || (l = l && p.synchronous, a.unshift(p.fulfilled, p.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(p) {
            u.push(p.fulfilled, p.rejected)
        });
        let c, d = 0,
            h;
        if (!l) {
            const g = [Gm.bind(this), void 0];
            for (g.unshift.apply(g, a), g.push.apply(g, u), h = g.length, c = Promise.resolve(n); d < h;) c = c.then(g[d++], g[d++]);
            return c
        }
        h = a.length;
        let f = n;
        for (d = 0; d < h;) {
            const g = a[d++],
                p = a[d++];
            try {
                f = g(f)
            } catch (E) {
                p.call(this, E);
                break
            }
        }
        try {
            c = Gm.call(this, f)
        } catch (g) {
            return Promise.reject(g)
        }
        for (d = 0, h = u.length; d < h;) c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(t) {
        t = li(this.defaults, t);
        const n = M1(t.baseURL, t.url);
        return b1(n, t.params, t.paramsSerializer)
    }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
    Jr.prototype[t] = function(n, r) {
        return this.request(li(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
b.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, o, a) {
            return this.request(li(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Jr.prototype[t] = n(), Jr.prototype[t + "Form"] = n(!0)
});
class uh {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        });
        const r = this;
        this.promise.then(i => {
            if (!r._listeners) return;
            let s = r._listeners.length;
            for (; s-- > 0;) r._listeners[s](i);
            r._listeners = null
        }), this.promise.then = i => {
            let s;
            const o = new Promise(a => {
                r.subscribe(a), s = a
            }).then(i);
            return o.cancel = function() {
                r.unsubscribe(s)
            }, o
        }, t(function(s, o, a) {
            r.reason || (r.reason = new Ps(s, o, a), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new uh(function(i) {
                t = i
            }),
            cancel: t
        }
    }
}

function pR(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function mR(e) {
    return b.isObject(e) && e.isAxiosError === !0
}
const Dd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Dd).forEach(([e, t]) => {
    Dd[t] = e
});

function z1(e) {
    const t = new Jr(e),
        n = v1(Jr.prototype.request, t);
    return b.extend(n, Jr.prototype, t, {
        allOwnKeys: !0
    }), b.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return z1(li(e, i))
    }, n
}
const ae = z1(Xo);
ae.Axios = Jr;
ae.CanceledError = Ps;
ae.CancelToken = uh;
ae.isCancel = D1;
ae.VERSION = I1;
ae.toFormData = nu;
ae.AxiosError = Y;
ae.Cancel = ae.CanceledError;
ae.all = function(t) {
    return Promise.all(t)
};
ae.spread = pR;
ae.isAxiosError = mR;
ae.mergeConfig = li;
ae.AxiosHeaders = yt;
ae.formToJSON = e => A1(b.isHTMLForm(e) ? new FormData(e) : e);
ae.getAdapter = V1.getAdapter;
ae.HttpStatusCode = Dd;
ae.default = ae;
var U1 = {
        exports: {}
    },
    yR = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    gR = yR,
    vR = gR;

function B1() {}

function $1() {}
$1.resetWarningCache = B1;
var xR = function() {
    function e(r, i, s, o, a, l) {
        if (l !== vR) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    e.isRequired = e;

    function t() {
        return e
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
        checkPropTypes: $1,
        resetWarningCache: B1
    };
    return n.PropTypes = n, n
};
U1.exports = xR();
var H1 = U1.exports;
const he = Jd(H1),
    W1 = S.createContext();
K1.propTypes = {
    children: he.any
};

function K1({
    children: e
}) {
    const t = qo(),
        n = JSON.parse(localStorage.getItem("user")),
        [r, i] = S.useState(!!n),
        [s, o] = S.useState(n || {}),
        {
            refetch: a
        } = Xf({
            queryKey: ["user"],
            queryFn: async () => await ae.get("/api/user").then(c => (localStorage.setItem("user", JSON.stringify(c.data)), o(c.data), i(!0), c.data)).catch(() => (i(!1), o({}), {})),
            retry: 1,
            enabled: r
        });
    S.useEffect(() => {
        a()
    }, [a]);

    function l(c) {
        localStorage.setItem("user", JSON.stringify(c)), o(c), i(!0), t.invalidateQueries()
    }

    function u() {
        ae.get("api/user/logout").then(() => {
            localStorage.removeItem("user"), t.invalidateQueries(), window.location.href = "/all"
        })
    }
    return x.jsx(W1.Provider, {
        value: {
            isAuthenticated: r,
            login: l,
            logout: u,
            user: s
        },
        children: e
    })
}

function fi() {
    return S.useContext(W1)
}
const ch = S.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    iu = S.createContext({}),
    su = S.createContext(null),
    dh = typeof document < "u",
    fh = dh ? S.useLayoutEffect : S.useEffect,
    Q1 = S.createContext({
        strict: !1
    }),
    hh = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    wR = "framerAppearId",
    q1 = "data-" + hh(wR),
    SR = {
        skipAnimations: !1,
        useManualTiming: !1
    };
class Xm {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function ER(e) {
    let t = new Xm,
        n = new Xm,
        r = 0,
        i = !1,
        s = !1;
    const o = new WeakSet,
        a = {
            schedule: (l, u = !1, c = !1) => {
                const d = c && i,
                    h = d ? t : n;
                return u && o.add(l), h.add(l) && d && i && (r = t.order.length), l
            },
            cancel: l => {
                n.remove(l), o.delete(l)
            },
            process: l => {
                if (i) {
                    s = !0;
                    return
                }
                if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        o.has(c) && (a.schedule(c), e()), c(l)
                    }
                i = !1, s && (s = !1, a.process(l))
            }
        };
    return a
}
const ka = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    PR = 40;

function G1(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        s = ka.reduce((d, h) => (d[h] = ER(() => n = !0), d), {}),
        o = d => {
            s[d].process(i)
        },
        a = () => {
            const d = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, PR), 1), i.timestamp = d, i.isProcessing = !0, ka.forEach(o), i.isProcessing = !1, n && t && (r = !1, e(a))
        },
        l = () => {
            n = !0, r = !0, i.isProcessing || e(a)
        };
    return {
        schedule: ka.reduce((d, h) => {
            const f = s[h];
            return d[h] = (g, p = !1, E = !1) => (n || l(), f.schedule(g, p, E)), d
        }, {}),
        cancel: d => ka.forEach(h => s[h].cancel(d)),
        state: i,
        steps: s
    }
}
const {
    schedule: ph,
    cancel: yA
} = G1(queueMicrotask, !1);

function CR(e, t, n, r) {
    const {
        visualElement: i
    } = S.useContext(iu), s = S.useContext(Q1), o = S.useContext(su), a = S.useContext(ch).reducedMotion, l = S.useRef();
    r = r || s.renderer, !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const u = l.current;
    S.useInsertionEffect(() => {
        u && u.update(n, o)
    });
    const c = S.useRef(!!(n[q1] && !window.HandoffComplete));
    return fh(() => {
        u && (ph.render(u.render), c.current && u.animationState && u.animationState.animateChanges())
    }), S.useEffect(() => {
        u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0))
    }), u
}

function Di(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function TR(e, t, n) {
    return S.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Di(n) && (n.current = r))
    }, [t])
}

function Oo(e) {
    return typeof e == "string" || Array.isArray(e)
}

function ou(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const mh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    yh = ["initial", ...mh];

function au(e) {
    return ou(e.animate) || yh.some(t => Oo(e[t]))
}

function Y1(e) {
    return !!(au(e) || e.variants)
}

function RR(e, t) {
    if (au(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Oo(n) ? n : void 0,
            animate: Oo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function kR(e) {
    const {
        initial: t,
        animate: n
    } = RR(e, S.useContext(iu));
    return S.useMemo(() => ({
        initial: t,
        animate: n
    }), [Jm(t), Jm(n)])
}

function Jm(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Zm = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Mo = {};
for (const e in Zm) Mo[e] = {
    isEnabled: t => Zm[e].some(n => !!t[n])
};

function jR(e) {
    for (const t in e) Mo[t] = {
        ...Mo[t],
        ...e[t]
    }
}
const gh = S.createContext({}),
    X1 = S.createContext({}),
    LR = Symbol.for("motionComponentSymbol");

function bR({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && jR(e);

    function s(a, l) {
        let u;
        const c = {
                ...S.useContext(ch),
                ...a,
                layoutId: NR(a)
            },
            {
                isStatic: d
            } = c,
            h = kR(a),
            f = r(a, d);
        if (!d && dh) {
            h.visualElement = CR(i, f, c, t);
            const g = S.useContext(X1),
                p = S.useContext(Q1).strict;
            h.visualElement && (u = h.visualElement.loadFeatures(c, p, e, g))
        }
        return x.jsxs(iu.Provider, {
            value: h,
            children: [u && h.visualElement ? x.jsx(u, {
                visualElement: h.visualElement,
                ...c
            }) : null, n(i, a, TR(f, h.visualElement, l), f, d, h.visualElement)]
        })
    }
    const o = S.forwardRef(s);
    return o[LR] = i, o
}

function NR({
    layoutId: e
}) {
    const t = S.useContext(gh).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function AR(e) {
    function t(r, i = {}) {
        return bR(e(r, i))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    })
}
const DR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function vh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(DR.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const Rl = {};

function OR(e) {
    Object.assign(Rl, e)
}
const Jo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    hi = new Set(Jo);

function J1(e, {
    layout: t,
    layoutId: n
}) {
    return hi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Rl[e] || e === "opacity")
}
const Je = e => !!(e && e.getVelocity),
    MR = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    FR = Jo.length;

function _R(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, i) {
    let s = "";
    for (let o = 0; o < FR; o++) {
        const a = Jo[o];
        if (e[a] !== void 0) {
            const l = MR[a] || a;
            s += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(e, r ? "" : s) : n && r && (s = "none"), s
}
const Z1 = e => t => typeof t == "string" && t.startsWith(e),
    ex = Z1("--"),
    VR = Z1("var(--"),
    xh = e => VR(e) ? IR.test(e.split("/*")[0].trim()) : !1,
    IR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    zR = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Er = (e, t, n) => n > t ? t : n < e ? e : n,
    Cs = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    lo = {
        ...Cs,
        transform: e => Er(0, 1, e)
    },
    ja = {
        ...Cs,
        default: 1
    },
    uo = e => Math.round(e * 1e5) / 1e5,
    wh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    UR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    BR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function Zo(e) {
    return typeof e == "string"
}
const ea = e => ({
        test: t => Zo(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    qn = ea("deg"),
    hn = ea("%"),
    $ = ea("px"),
    $R = ea("vh"),
    HR = ea("vw"),
    ey = {
        ...hn,
        parse: e => hn.parse(e) / 100,
        transform: e => hn.transform(e * 100)
    },
    ty = {
        ...Cs,
        transform: Math.round
    },
    tx = {
        borderWidth: $,
        borderTopWidth: $,
        borderRightWidth: $,
        borderBottomWidth: $,
        borderLeftWidth: $,
        borderRadius: $,
        radius: $,
        borderTopLeftRadius: $,
        borderTopRightRadius: $,
        borderBottomRightRadius: $,
        borderBottomLeftRadius: $,
        width: $,
        maxWidth: $,
        height: $,
        maxHeight: $,
        size: $,
        top: $,
        right: $,
        bottom: $,
        left: $,
        padding: $,
        paddingTop: $,
        paddingRight: $,
        paddingBottom: $,
        paddingLeft: $,
        margin: $,
        marginTop: $,
        marginRight: $,
        marginBottom: $,
        marginLeft: $,
        rotate: qn,
        rotateX: qn,
        rotateY: qn,
        rotateZ: qn,
        scale: ja,
        scaleX: ja,
        scaleY: ja,
        scaleZ: ja,
        skew: qn,
        skewX: qn,
        skewY: qn,
        distance: $,
        translateX: $,
        translateY: $,
        translateZ: $,
        x: $,
        y: $,
        z: $,
        perspective: $,
        transformPerspective: $,
        opacity: lo,
        originX: ey,
        originY: ey,
        originZ: $,
        zIndex: ty,
        backgroundPositionX: $,
        backgroundPositionY: $,
        fillOpacity: lo,
        strokeOpacity: lo,
        numOctaves: ty
    };

function Sh(e, t, n, r) {
    const {
        style: i,
        vars: s,
        transform: o,
        transformOrigin: a
    } = e;
    let l = !1,
        u = !1,
        c = !0;
    for (const d in t) {
        const h = t[d];
        if (ex(d)) {
            s[d] = h;
            continue
        }
        const f = tx[d],
            g = zR(h, f);
        if (hi.has(d)) {
            if (l = !0, o[d] = g, !c) continue;
            h !== (f.default || 0) && (c = !1)
        } else d.startsWith("origin") ? (u = !0, a[d] = g) : i[d] = g
    }
    if (t.transform || (l || r ? i.transform = _R(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
        const {
            originX: d = "50%",
            originY: h = "50%",
            originZ: f = 0
        } = a;
        i.transformOrigin = `${d} ${h} ${f}`
    }
}
const Eh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function nx(e, t, n) {
    for (const r in t) !Je(t[r]) && !J1(r, n) && (e[r] = t[r])
}

function WR({
    transformTemplate: e
}, t, n) {
    return S.useMemo(() => {
        const r = Eh();
        return Sh(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function KR(e, t, n) {
    const r = e.style || {},
        i = {};
    return nx(i, r, e), Object.assign(i, WR(e, t, n)), i
}

function QR(e, t, n) {
    const r = {},
        i = KR(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const qR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function kl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || qR.has(e)
}
let rx = e => !kl(e);

function GR(e) {
    e && (rx = t => t.startsWith("on") ? !kl(t) : e(t))
}
try {
    GR(require("@emotion/is-prop-valid").default)
} catch {}

function YR(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (rx(i) || n === !0 && kl(i) || !t && !kl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function ny(e, t, n) {
    return typeof e == "string" ? e : $.transform(t + n * e)
}

function XR(e, t, n) {
    const r = ny(t, e.x, e.width),
        i = ny(n, e.y, e.height);
    return `${r} ${i}`
}
const JR = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    ZR = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function ek(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? JR : ZR;
    e[s.offset] = $.transform(-r);
    const o = $.transform(t),
        a = $.transform(n);
    e[s.array] = `${o} ${a}`
}

function Ph(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d, h) {
    if (Sh(e, u, c, h), d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: g,
        dimensions: p
    } = e;
    f.transform && (p && (g.transform = f.transform), delete f.transform), p && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = XR(p, i !== void 0 ? i : .5, s !== void 0 ? s : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), o !== void 0 && ek(f, o, a, l, !1)
}
const ix = () => ({
        ...Eh(),
        attrs: {}
    }),
    Ch = e => typeof e == "string" && e.toLowerCase() === "svg";

function tk(e, t, n, r) {
    const i = S.useMemo(() => {
        const s = ix();
        return Ph(s, t, {
            enableHardwareAcceleration: !1
        }, Ch(r), e.transformTemplate), {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        nx(s, e.style, e), i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}

function nk(e = !1) {
    return (n, r, i, {
        latestValues: s
    }, o) => {
        const l = (vh(n) ? tk : QR)(r, s, o, n),
            u = YR(r, typeof n == "string", e),
            c = n !== S.Fragment ? {
                ...u,
                ...l,
                ref: i
            } : {},
            {
                children: d
            } = r,
            h = S.useMemo(() => Je(d) ? d.get() : d, [d]);
        return S.createElement(n, {
            ...c,
            children: h
        })
    }
}

function sx(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s])
}
const ox = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function ax(e, t, n, r) {
    sx(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(ox.has(i) ? i : hh(i), t.attrs[i])
}

function Th(e, t, n) {
    var r;
    const {
        style: i
    } = e, s = {};
    for (const o in i)(Je(i[o]) || t.style && Je(t.style[o]) || J1(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}

function lx(e, t, n) {
    const r = Th(e, t, n);
    for (const i in e)
        if (Je(e[i]) || Je(t[i])) {
            const s = Jo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        } return r
}

function ry(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Rh(e, t, n, r) {
    if (typeof t == "function") {
        const [i, s] = ry(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, s] = ry(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}

function ux(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Od = e => Array.isArray(e),
    rk = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    ik = e => Od(e) ? e[e.length - 1] || 0 : e;

function Wa(e) {
    const t = Je(e) ? e.get() : e;
    return rk(t) ? t.toValue() : t
}

function sk({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, s) {
    const o = {
        latestValues: ok(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = a => n(r, a, o)), o
}
const cx = e => (t, n) => {
    const r = S.useContext(iu),
        i = S.useContext(su),
        s = () => sk(e, t, r, i);
    return n ? s() : ux(s)
};

function ok(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const h in s) i[h] = Wa(s[h]);
    let {
        initial: o,
        animate: a
    } = e;
    const l = au(e),
        u = Y1(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    return d && typeof d != "boolean" && !ou(d) && (Array.isArray(d) ? d : [d]).forEach(f => {
        const g = Rh(e, f);
        if (!g) return;
        const {
            transitionEnd: p,
            transition: E,
            ...m
        } = g;
        for (const y in m) {
            let v = m[y];
            if (Array.isArray(v)) {
                const P = c ? v.length - 1 : 0;
                v = v[P]
            }
            v !== null && (i[y] = v)
        }
        for (const y in p) i[y] = p[y]
    }), i
}
const Ze = e => e,
    {
        schedule: se,
        cancel: _n,
        state: He,
        steps: Yu
    } = G1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0),
    ak = {
        useVisualState: cx({
            scrapeMotionValuesFromProps: lx,
            createRenderState: ix,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                se.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), se.render(() => {
                    Ph(n, r, {
                        enableHardwareAcceleration: !1
                    }, Ch(t.tagName), e.transformTemplate), ax(t, n)
                })
            }
        })
    },
    lk = {
        useVisualState: cx({
            scrapeMotionValuesFromProps: Th,
            createRenderState: Eh
        })
    };

function uk(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return {
        ...vh(e) ? ak : lk,
        preloadedFeatures: n,
        useRender: nk(t),
        createVisualElement: r,
        Component: e
    }
}

function Tn(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const dx = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function lu(e, t = "page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const ck = e => t => dx(t) && e(t, lu(t));

function jn(e, t, n, r) {
    return Tn(e, t, ck(n), r)
}
const dk = (e, t) => n => t(e(n)),
    Ln = (...e) => e.reduce(dk);

function fx(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const iy = fx("dragHorizontal"),
    sy = fx("dragVertical");

function hx(e) {
    let t = !1;
    if (e === "y") t = sy();
    else if (e === "x") t = iy();
    else {
        const n = iy(),
            r = sy();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function px() {
    const e = hx(!0);
    return e ? (e(), !1) : !0
}
class jr {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function oy(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        i = (s, o) => {
            if (s.pointerType === "touch" || px()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
            const l = a[r];
            l && se.postRender(() => l(s, o))
        };
    return jn(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class fk extends jr {
    mount() {
        this.unmount = Ln(oy(this.node, !0), oy(this.node, !1))
    }
    unmount() {}
}
class hk extends jr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ln(Tn(this.node.current, "focus", () => this.onFocus()), Tn(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const mx = (e, t) => t ? e === t ? !0 : mx(e, t.parentElement) : !1;

function Xu(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, lu(n))
}
class pk extends jr {
    constructor() {
        super(...arguments), this.removeStartListeners = Ze, this.removeEndListeners = Ze, this.removeAccessibleListeners = Ze, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                s = jn(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps(), h = !d && !mx(this.node.current, a.target) ? c : u;
                    h && se.update(() => h(a, l))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                o = jn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Ln(s, o), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = s => {
                    if (s.key !== "Enter" || this.isPressing) return;
                    const o = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || Xu("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && se.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Tn(this.node.current, "keyup", o), Xu("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = Tn(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Xu("cancel", (s, o) => this.cancelPress(s, o))
                },
                i = Tn(this.node.current, "blur", r);
            this.removeAccessibleListeners = Ln(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && se.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !px()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && se.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = jn(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Tn(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Ln(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Md = new WeakMap,
    Ju = new WeakMap,
    mk = e => {
        const t = Md.get(e.target);
        t && t(e)
    },
    yk = e => {
        e.forEach(mk)
    };

function gk({
    root: e,
    ...t
}) {
    const n = e || document;
    Ju.has(n) || Ju.set(n, {});
    const r = Ju.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(yk, {
        root: e,
        ...t
    })), r[i]
}

function vk(e, t, n) {
    const r = gk(t);
    return Md.set(e, n), r.observe(e), () => {
        Md.delete(e), r.unobserve(e)
    }
}
const xk = {
    some: 0,
    all: 1
};
class wk extends jr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : xk[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), h = u ? c : d;
            h && h(l)
        };
        return vk(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Sk(t, n)) && this.startObserver()
    }
    unmount() {}
}

function Sk({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const Ek = {
    inView: {
        Feature: wk
    },
    tap: {
        Feature: pk
    },
    focus: {
        Feature: hk
    },
    hover: {
        Feature: fk
    }
};

function yx(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function uu(e, t, n) {
    const r = e.getProps();
    return Rh(r, t, n !== void 0 ? n : r.custom, e)
}
const vr = e => e * 1e3,
    bn = e => e / 1e3,
    Pk = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Ck = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Tk = {
        type: "keyframes",
        duration: .8
    },
    Rk = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    kk = (e, {
        keyframes: t
    }) => t.length > 2 ? Tk : hi.has(e) ? e.startsWith("scale") ? Ck(t[1]) : Pk : Rk;

function jk({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function kh(e, t) {
    return e[t] || e.default || e
}
const Lk = e => e !== null;

function cu(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(Lk),
        s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
let Ka;

function bk() {
    Ka = void 0
}
const xr = {
        now: () => (Ka === void 0 && xr.set(He.isProcessing || SR.useManualTiming ? He.timestamp : performance.now()), Ka),
        set: e => {
            Ka = e, queueMicrotask(bk)
        }
    },
    gx = e => /^0[^.\s]+$/u.test(e);

function Nk(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || gx(e) : !0
}
let Fd = Ze;
const vx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Ak = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Dk(e) {
    const t = Ak.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function xx(e, t, n = 1) {
    const [r, i] = Dk(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return vx(o) ? parseFloat(o) : o
    }
    return xh(i) ? xx(i, t, n + 1) : i
}
const Ok = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    ay = e => e === Cs || e === $,
    ly = (e, t) => parseFloat(e.split(", ")[t]),
    uy = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return ly(i[1], t);
        {
            const s = r.match(/^matrix\((.+)\)$/u);
            return s ? ly(s[1], e) : 0
        }
    },
    Mk = new Set(["x", "y", "z"]),
    Fk = Jo.filter(e => !Mk.has(e));

function _k(e) {
    const t = [];
    return Fk.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const hs = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: uy(4, 13),
    y: uy(5, 14)
};
hs.translateX = hs.x;
hs.translateY = hs.y;
const wx = e => t => t.test(e),
    Vk = {
        test: e => e === "auto",
        parse: e => e
    },
    Sx = [Cs, $, hn, qn, HR, $R, Vk],
    cy = e => Sx.find(wx(e)),
    Zr = new Set;
let _d = !1,
    Vd = !1;

function Ex() {
    if (Vd) {
        const e = Array.from(Zr).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = _k(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([s, o]) => {
                var a;
                (a = r.getValue(s)) === null || a === void 0 || a.set(o)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Vd = !1, _d = !1, Zr.forEach(e => e.complete()), Zr.clear()
}

function Px() {
    Zr.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Vd = !0)
    })
}

function Ik() {
    Px(), Ex()
}
class jh {
    constructor(t, n, r, i, s, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Zr.add(this), _d || (_d = !0, se.read(Px), se.resolveKeyframes(Ex))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get(),
                        a = t[t.length - 1];
                    if (o !== void 0) t[0] = o;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0])
                } else t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Zr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Zr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Lh = (e, t) => n => !!(Zo(n) && BR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Cx = (e, t, n) => r => {
        if (!Zo(r)) return r;
        const [i, s, o, a] = r.match(wh);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    zk = e => Er(0, 255, e),
    Zu = {
        ...Cs,
        transform: e => Math.round(zk(e))
    },
    Br = {
        test: Lh("rgb", "red"),
        parse: Cx("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Zu.transform(e) + ", " + Zu.transform(t) + ", " + Zu.transform(n) + ", " + uo(lo.transform(r)) + ")"
    };

function Uk(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Id = {
        test: Lh("#"),
        parse: Uk,
        transform: Br.transform
    },
    Oi = {
        test: Lh("hsl", "hue"),
        parse: Cx("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + hn.transform(uo(t)) + ", " + hn.transform(uo(n)) + ", " + uo(lo.transform(r)) + ")"
    },
    Ye = {
        test: e => Br.test(e) || Id.test(e) || Oi.test(e),
        parse: e => Br.test(e) ? Br.parse(e) : Oi.test(e) ? Oi.parse(e) : Id.parse(e),
        transform: e => Zo(e) ? e : e.hasOwnProperty("red") ? Br.transform(e) : Oi.transform(e)
    };

function Bk(e) {
    var t, n;
    return isNaN(e) && Zo(e) && (((t = e.match(wh)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(UR)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Tx = "number",
    Rx = "color",
    $k = "var",
    Hk = "var(",
    dy = "${}",
    Wk = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Fo(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let s = 0;
    const a = t.replace(Wk, l => (Ye.test(l) ? (r.color.push(s), i.push(Rx), n.push(Ye.parse(l))) : l.startsWith(Hk) ? (r.var.push(s), i.push($k), n.push(l)) : (r.number.push(s), i.push(Tx), n.push(parseFloat(l))), ++s, dy)).split(dy);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function kx(e) {
    return Fo(e).values
}

function jx(e) {
    const {
        split: t,
        types: n
    } = Fo(e), r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o], i[o] !== void 0) {
                const a = n[o];
                a === Tx ? s += uo(i[o]) : a === Rx ? s += Ye.transform(i[o]) : s += i[o]
            } return s
    }
}
const Kk = e => typeof e == "number" ? 0 : e;

function Qk(e) {
    const t = kx(e);
    return jx(e)(t.map(Kk))
}
const Pr = {
        test: Bk,
        parse: kx,
        createTransformer: jx,
        getAnimatableNone: Qk
    },
    qk = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Gk(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(wh) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = qk.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const Yk = /\b([a-z-]*)\(.*?\)/gu,
    zd = {
        ...Pr,
        getAnimatableNone: e => {
            const t = e.match(Yk);
            return t ? t.map(Gk).join(" ") : e
        }
    },
    Xk = {
        ...tx,
        color: Ye,
        backgroundColor: Ye,
        outlineColor: Ye,
        fill: Ye,
        stroke: Ye,
        borderColor: Ye,
        borderTopColor: Ye,
        borderRightColor: Ye,
        borderBottomColor: Ye,
        borderLeftColor: Ye,
        filter: zd,
        WebkitFilter: zd
    },
    bh = e => Xk[e];

function Lx(e, t) {
    let n = bh(e);
    return n !== zd && (n = Pr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Jk = new Set(["auto", "none", "0"]);

function Zk(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const s = e[r];
        typeof s == "string" && !Jk.has(s) && Fo(s).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const s of t) e[s] = Lx(n, i)
}
class bx extends jh {
    constructor(t, n, r, i) {
        super(t, n, r, i, i == null ? void 0 : i.owner, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), xh(u))) {
                const c = xx(u, n.current);
                c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Ok.has(r) || t.length !== 2) return;
        const [i, s] = t, o = cy(i), a = cy(s);
        if (o !== a)
            if (ay(o) && ay(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) Nk(t[i]) && r.push(i);
        r.length && Zk(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = hs[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n.current) return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1,
            a = i[o];
        i[o] = hs[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Nx(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const fy = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Pr.test(e) || e === "0") && !e.startsWith("url("));

function ej(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function tj(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const s = e[e.length - 1],
        o = fy(i, t),
        a = fy(s, t);
    return !o || !a ? !1 : ej(e) || n === "spring" && r
}
class Ax {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...a
        }, this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Ik(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: s,
            delay: o,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !tj(t, r, i, s))
            if (o) this.options.duration = 0;
            else {
                l == null || l(cu(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            } const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function Dx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const nj = 5;

function Ox(e, t, n) {
    const r = Math.max(t - nj, 0);
    return Dx(n - e(r), t - r)
}
const ec = .001,
    rj = .01,
    ij = 10,
    sj = .05,
    oj = 1;

function aj({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, s, o = 1 - t;
    o = Er(sj, oj, o), e = Er(rj, ij, bn(e)), o < 1 ? (i = u => {
        const c = u * o,
            d = c * e,
            h = c - n,
            f = Ud(u, o),
            g = Math.exp(-d);
        return ec - h / f * g
    }, s = u => {
        const d = u * o * e,
            h = d * n + n,
            f = Math.pow(o, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-d),
            p = Ud(Math.pow(u, 2), o);
        return (-i(u) + ec > 0 ? -1 : 1) * ((h - f) * g) / p
    }) : (i = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -ec + c * d
    }, s = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = uj(i, s, a);
    if (e = vr(e), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const lj = 12;

function uj(e, t, n) {
    let r = n;
    for (let i = 1; i < lj; i++) r = r - e(r) / t(r);
    return r
}

function Ud(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const cj = ["duration", "bounce"],
    dj = ["stiffness", "damping", "mass"];

function hy(e, t) {
    return t.some(n => e[n] !== void 0)
}

function fj(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!hy(e, dj) && hy(e, cj)) {
        const n = aj(e);
        t = {
            ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function Mx({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        s = e[e.length - 1],
        o = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: d,
            isResolvedFromDuration: h
        } = fj({
            ...r,
            velocity: -bn(r.velocity || 0)
        }),
        f = d || 0,
        g = l / (2 * Math.sqrt(a * u)),
        p = s - i,
        E = bn(Math.sqrt(a / u)),
        m = Math.abs(p) < 5;
    n || (n = m ? .01 : 2), t || (t = m ? .005 : .5);
    let y;
    if (g < 1) {
        const v = Ud(E, g);
        y = P => {
            const k = Math.exp(-g * E * P);
            return s - k * ((f + g * E * p) / v * Math.sin(v * P) + p * Math.cos(v * P))
        }
    } else if (g === 1) y = v => s - Math.exp(-E * v) * (p + (f + E * p) * v);
    else {
        const v = E * Math.sqrt(g * g - 1);
        y = P => {
            const k = Math.exp(-g * E * P),
                L = Math.min(v * P, 300);
            return s - k * ((f + g * E * p) * Math.sinh(L) + v * p * Math.cosh(L)) / v
        }
    }
    return {
        calculatedDuration: h && c || null,
        next: v => {
            const P = y(v);
            if (h) o.done = v >= c;
            else {
                let k = f;
                v !== 0 && (g < 1 ? k = Ox(y, v, P) : k = 0);
                const L = Math.abs(k) <= n,
                    w = Math.abs(s - P) <= t;
                o.done = L && w
            }
            return o.value = o.done ? s : P, o
        }
    }
}

function py({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        h = {
            done: !1,
            value: d
        },
        f = T => a !== void 0 && T < a || l !== void 0 && T > l,
        g = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
    let p = n * t;
    const E = d + p,
        m = o === void 0 ? E : o(E);
    m !== E && (p = m - d);
    const y = T => -p * Math.exp(-T / r),
        v = T => m + y(T),
        P = T => {
            const A = y(T),
                O = v(T);
            h.done = Math.abs(A) <= u, h.value = h.done ? m : O
        };
    let k, L;
    const w = T => {
        f(h.value) && (k = T, L = Mx({
            keyframes: [h.value, g(h.value)],
            velocity: Ox(v, T, h.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    };
    return w(0), {
        calculatedDuration: null,
        next: T => {
            let A = !1;
            return !L && k === void 0 && (A = !0, P(T), w(T)), k !== void 0 && T >= k ? L.next(T - k) : (!A && P(T), h)
        }
    }
}
const Fx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    hj = 1e-7,
    pj = 12;

function mj(e, t, n, r, i) {
    let s, o, a = 0;
    do o = t + (n - t) / 2, s = Fx(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > hj && ++a < pj);
    return o
}

function ta(e, t, n, r) {
    if (e === t && n === r) return Ze;
    const i = s => mj(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Fx(i(s), t, r)
}
const yj = ta(.42, 0, 1, 1),
    gj = ta(0, 0, .58, 1),
    _x = ta(.42, 0, .58, 1),
    vj = e => Array.isArray(e) && typeof e[0] != "number",
    Vx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Ix = e => t => 1 - e(1 - t),
    Nh = e => 1 - Math.sin(Math.acos(e)),
    zx = Ix(Nh),
    xj = Vx(Nh),
    Ux = ta(.33, 1.53, .69, .99),
    Ah = Ix(Ux),
    wj = Vx(Ah),
    Sj = e => (e *= 2) < 1 ? .5 * Ah(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    my = {
        linear: Ze,
        easeIn: yj,
        easeInOut: _x,
        easeOut: gj,
        circIn: Nh,
        circInOut: xj,
        circOut: zx,
        backIn: Ah,
        backInOut: wj,
        backOut: Ux,
        anticipate: Sj
    },
    yy = e => {
        if (Array.isArray(e)) {
            Fd(e.length === 4);
            const [t, n, r, i] = e;
            return ta(t, n, r, i)
        } else if (typeof e == "string") return Fd(my[e] !== void 0), my[e];
        return e
    },
    _o = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Ee = (e, t, n) => e + (t - e) * n;

function tc(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Ej({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = tc(l, a, e + 1 / 3), s = tc(l, a, e), o = tc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}

function jl(e, t) {
    return n => n > 0 ? t : e
}
const nc = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    Pj = [Id, Br, Oi],
    Cj = e => Pj.find(t => t.test(e));

function gy(e) {
    const t = Cj(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Oi && (n = Ej(n)), n
}
const vy = (e, t) => {
        const n = gy(e),
            r = gy(t);
        if (!n || !r) return jl(e, t);
        const i = {
            ...n
        };
        return s => (i.red = nc(n.red, r.red, s), i.green = nc(n.green, r.green, s), i.blue = nc(n.blue, r.blue, s), i.alpha = Ee(n.alpha, r.alpha, s), Br.transform(i))
    },
    Bd = new Set(["none", "hidden"]);

function Tj(e, t) {
    return Bd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function Rj(e, t) {
    return n => Ee(e, t, n)
}

function Dh(e) {
    return typeof e == "number" ? Rj : typeof e == "string" ? xh(e) ? jl : Ye.test(e) ? vy : Lj : Array.isArray(e) ? Bx : typeof e == "object" ? Ye.test(e) ? vy : kj : jl
}

function Bx(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((s, o) => Dh(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n
    }
}

function kj(e, t) {
    const n = {
            ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Dh(e[i])(e[i], t[i]));
    return i => {
        for (const s in r) n[s] = r[s](i);
        return n
    }
}

function jj(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s],
            a = e.indexes[o][i[o]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[s] = l, i[o]++
    }
    return r
}
const Lj = (e, t) => {
    const n = Pr.createTransformer(t),
        r = Fo(e),
        i = Fo(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Bd.has(e) && !i.values.length || Bd.has(t) && !r.values.length ? Tj(e, t) : Ln(Bx(jj(r, i), i.values), n) : jl(e, t)
};

function $x(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ee(e, t, n) : Dh(e)(e, t)
}

function bj(e, t, n) {
    const r = [],
        i = n || $x,
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Ze : t;
            a = Ln(l, a)
        }
        r.push(a)
    }
    return r
}

function Nj(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if (Fd(s === t.length), s === 1) return () => t[0];
    if (s === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const o = bj(t, r, i),
        a = o.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = _o(e[c], e[c + 1], u);
            return o[c](d)
        };
    return n ? u => l(Er(e[0], e[s - 1], u)) : l
}

function Aj(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = _o(0, t, r);
        e.push(Ee(n, 1, i))
    }
}

function Dj(e) {
    const t = [0];
    return Aj(t, e.length - 1), t
}

function Oj(e, t) {
    return e.map(n => n * t)
}

function Mj(e, t) {
    return e.map(() => t || _x).splice(0, e.length - 1)
}

function Ll({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = vj(r) ? r.map(yy) : yy(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = Oj(n && n.length === t.length ? n : Dj(t), e),
        a = Nj(o, t, {
            ease: Array.isArray(i) ? i : Mj(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l), s.done = l >= e, s)
    }
}
const xy = 2e4;

function Fj(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < xy;) t += n, r = e.next(t);
    return t >= xy ? 1 / 0 : t
}
const _j = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => se.update(t, !0),
            stop: () => _n(t),
            now: () => He.isProcessing ? He.timestamp : xr.now()
        }
    },
    Vj = {
        decay: py,
        inertia: py,
        tween: Ll,
        keyframes: Ll,
        spring: Mx
    },
    Ij = e => e / 100;
class Oh extends Ax {
    constructor({
        KeyframeResolver: t = jh,
        ...n
    }) {
        super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: a
            } = this.options;
            a && a()
        };
        const {
            name: r,
            motionValue: i,
            keyframes: s
        } = this.options, o = (a, l) => this.onKeyframesResolved(a, l);
        r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(s, o, r, i) : this.resolver = new t(s, o, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = this.options, a = Vj[n] || Ll;
        let l, u;
        a !== Ll && typeof t[0] != "number" && (l = Ln(Ij, $x(t[0], t[1])), t = [0, 100]);
        const c = a({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (u = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Fj(c));
        const {
            calculatedDuration: d
        } = c, h = d + i, f = h * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: f
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: T
            } = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: s,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return s.next(0);
        const {
            delay: h,
            repeat: f,
            repeatType: g,
            repeatDelay: p,
            onUpdate: E
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? m < 0 : m > c;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let v = this.currentTime,
            P = s;
        if (f) {
            const T = Math.min(this.currentTime, c) / d;
            let A = Math.floor(T),
                O = T % 1;
            !O && T >= 1 && (O = 1), O === 1 && A--, A = Math.min(A, f + 1), !!(A % 2) && (g === "reverse" ? (O = 1 - O, p && (O -= p / d)) : g === "mirror" && (P = o)), v = Er(0, 1, O) * d
        }
        const k = y ? {
            done: !1,
            value: l[0]
        } : P.next(v);
        a && (k.value = a(k.value));
        let {
            done: L
        } = k;
        !y && u !== null && (L = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const w = this.holdTime === null && (this.state === "finished" || this.state === "running" && L);
        return w && i !== void 0 && (k.value = cu(l, this.options, i)), E && E(k.value), w && this.finish(), k
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? bn(t.calculatedDuration) : 0
    }
    get time() {
        return bn(this.currentTime)
    }
    set time(t) {
        t = vr(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = bn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = _j,
            onPlay: n
        } = this.options;
        this.driver || (this.driver = t(i => this.tick(i))), n && n();
        const r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const Hx = e => Array.isArray(e) && typeof e[0] == "number";

function Wx(e) {
    return !!(!e || typeof e == "string" && e in Mh || Hx(e) || Array.isArray(e) && e.every(Wx))
}
const Xs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Mh = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Xs([0, .65, .55, 1]),
        circOut: Xs([.55, 0, 1, .45]),
        backIn: Xs([.31, .01, .66, -.59]),
        backOut: Xs([.33, 1.53, .69, .99])
    };

function zj(e) {
    return Kx(e) || Mh.easeOut
}

function Kx(e) {
    if (e) return Hx(e) ? Xs(e) : Array.isArray(e) ? e.map(zj) : Mh[e]
}

function Uj(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Kx(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const Bj = Nx(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    $j = new Set(["opacity", "clipPath", "filter", "transform"]),
    bl = 10,
    Hj = 2e4;

function Wj(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !Wx(e.ease)
}

function Kj(e, t) {
    const n = new Oh({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < Hj;) r = n.sample(s), i.push(r.value), s += bl;
    return {
        times: void 0,
        keyframes: i,
        duration: s - bl,
        ease: "linear"
    }
}
class wy extends Ax {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            keyframes: i
        } = this.options;
        this.resolver = new bx(i, (s, o) => this.onKeyframesResolved(s, o), n, r), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u
        } = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
        if (Wj(this.options)) {
            const {
                onComplete: d,
                onUpdate: h,
                motionValue: f,
                ...g
            } = this.options, p = Kj(t, g);
            t = p.keyframes, t.length === 1 && (t[1] = t[0]), i = p.duration, s = p.times, o = p.ease, a = "keyframes"
        }
        const c = Uj(l.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: s,
            ease: o
        });
        return c.startTime = xr.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
            const {
                onComplete: d
            } = this.options;
            l.set(cu(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: c,
            duration: i,
            times: s,
            type: a,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return bn(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return bn(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = vr(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return Ze;
            const {
                animation: r
            } = n;
            r.timeline = t, r.onfinish = null
        }
        return Ze
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: s,
            ease: o,
            times: a
        } = t;
        if (!(n.playState === "idle" || n.playState === "finished")) {
            if (this.time) {
                const {
                    motionValue: l,
                    onUpdate: u,
                    onComplete: c,
                    ...d
                } = this.options, h = new Oh({
                    ...d,
                    keyframes: r,
                    duration: i,
                    type: s,
                    ease: o,
                    times: a,
                    isGenerator: !0
                }), f = vr(this.time);
                l.setWithVelocity(h.sample(f - bl).value, h.sample(f).value, bl)
            }
            this.cancel()
        }
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: s,
            damping: o,
            type: a
        } = t;
        return Bj() && r && $j.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && s !== "mirror" && o !== 0 && a !== "inertia"
    }
}

function Qj(e, t) {
    let n;
    const r = () => {
        const {
            currentTime: i
        } = t, o = (i === null ? 0 : i.value) / 100;
        n !== o && e(o), n = o
    };
    return se.update(r, !0), () => _n(r)
}
const qj = Nx(() => window.ScrollTimeline !== void 0);
class Gj {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t) {
        const n = this.animations.map(r => {
            if (qj() && r.attachTimeline) r.attachTimeline(t);
            else return r.pause(), Qj(i => {
                r.time = r.duration * i
            }, t)
        });
        return () => {
            n.forEach((r, i) => {
                r && r(), this.animations[i].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
const Fh = (e, t, n, r = {}, i, s) => o => {
    const a = kh(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - vr(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    jk(a) || (c = {
        ...c,
        ...kk(e, c)
    }), c.duration && (c.duration = vr(c.duration)), c.repeatDelay && (c.repeatDelay = vr(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
        const h = cu(c.keyframes, a);
        if (h !== void 0) return se.update(() => {
            c.onUpdate(h), c.onComplete()
        }), new Gj([])
    }
    return !s && wy.supports(c) ? new wy(c) : new Oh(c)
};

function Nl(e) {
    return !!(Je(e) && e.add)
}

function _h(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Vh(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Ih {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return _h(this.subscriptions, t), () => Vh(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Sy = 30,
    Yj = e => !isNaN(parseFloat(e));
class Xj {
    constructor(t, n = {}) {
        this.version = "11.2.10", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const s = xr.now();
            this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = xr.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Yj(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Ih);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), se.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = xr.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Sy) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Sy);
        return Dx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Vo(e, t) {
    return new Xj(e, t)
}

function Jj(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Vo(n))
}

function Zj(e, t) {
    const n = uu(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = ik(s[o]);
        Jj(e, o, a)
    }
}

function Qx(e) {
    return e.getProps()[q1]
}

function eL({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function qx(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var s;
    let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    const u = e.getValue("willChange");
    r && (o = r);
    const c = [],
        d = i && e.animationState && e.animationState.getState()[i];
    for (const h in l) {
        const f = e.getValue(h, (s = e.latestValues[h]) !== null && s !== void 0 ? s : null),
            g = l[h];
        if (g === void 0 || d && eL(d, h)) continue;
        const p = {
            delay: n,
            elapsed: 0,
            ...kh(o || {}, h)
        };
        let E = !1;
        if (window.HandoffAppearAnimations) {
            const y = Qx(e);
            if (y) {
                const v = window.HandoffAppearAnimations(y, h, f, se);
                v !== null && (p.elapsed = v, E = !0)
            }
        }
        f.start(Fh(h, f, g, e.shouldReduceMotion && hi.has(h) ? {
            type: !1
        } : p, e, E));
        const m = f.animation;
        m && (Nl(u) && (u.add(h), m.then(() => u.remove(h))), c.push(m))
    }
    return a && Promise.all(c).then(() => {
        se.update(() => {
            a && Zj(e, a)
        })
    }), c
}

function $d(e, t, n = {}) {
    var r;
    const i = uu(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: s = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(qx(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: h
            } = s;
            return tL(e, t, c + u, d, h, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = s;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
        return u().then(() => c())
    } else return Promise.all([o(), a(n.delay)])
}

function tL(e, t, n = 0, r = 0, i = 1, s) {
    const o = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(nL).forEach((u, c) => {
        u.notify("AnimationStart", t), o.push($d(u, t, {
            ...s,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(o)
}

function nL(e, t) {
    return e.sortNodePosition(t)
}

function rL(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => $d(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = $d(e, t, n);
    else {
        const i = typeof t == "function" ? uu(e, t, n.custom) : t;
        r = Promise.all(qx(e, i, n))
    }
    return r.then(() => {
        se.postRender(() => {
            e.notify("AnimationComplete", t)
        })
    })
}
const iL = [...mh].reverse(),
    sL = mh.length;

function oL(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => rL(e, n, r)))
}

function aL(e) {
    let t = oL(e);
    const n = uL();
    let r = !0;
    const i = l => (u, c) => {
        var d;
        const h = uu(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (h) {
            const {
                transition: f,
                transitionEnd: g,
                ...p
            } = h;
            u = {
                ...u,
                ...p,
                ...g
            }
        }
        return u
    };

    function s(l) {
        t = l(e)
    }

    function o(l) {
        const u = e.getProps(),
            c = e.getVariantContext(!0) || {},
            d = [],
            h = new Set;
        let f = {},
            g = 1 / 0;
        for (let E = 0; E < sL; E++) {
            const m = iL[E],
                y = n[m],
                v = u[m] !== void 0 ? u[m] : c[m],
                P = Oo(v),
                k = m === l ? y.isActive : null;
            k === !1 && (g = E);
            let L = v === c[m] && v !== u[m] && P;
            if (L && r && e.manuallyAnimateOnMount && (L = !1), y.protectedKeys = {
                    ...f
                }, !y.isActive && k === null || !v && !y.prevProp || ou(v) || typeof v == "boolean") continue;
            let T = lL(y.prevProp, v) || m === l && y.isActive && !L && P || E > g && P,
                A = !1;
            const O = Array.isArray(v) ? v : [v];
            let H = O.reduce(i(m), {});
            k === !1 && (H = {});
            const {
                prevResolvedValues: de = {}
            } = y, pe = {
                ...de,
                ...H
            }, Le = ce => {
                T = !0, h.has(ce) && (A = !0, h.delete(ce)), y.needsAnimating[ce] = !0;
                const Fe = e.getValue(ce);
                Fe && (Fe.liveStyle = !1)
            };
            for (const ce in pe) {
                const Fe = H[ce],
                    jt = de[ce];
                if (f.hasOwnProperty(ce)) continue;
                let M = !1;
                Od(Fe) && Od(jt) ? M = !yx(Fe, jt) : M = Fe !== jt, M ? Fe != null ? Le(ce) : h.add(ce) : Fe !== void 0 && h.has(ce) ? Le(ce) : y.protectedKeys[ce] = !0
            }
            y.prevProp = v, y.prevResolvedValues = H, y.isActive && (f = {
                ...f,
                ...H
            }), r && e.blockInitialAnimation && (T = !1), T && (!L || A) && d.push(...O.map(ce => ({
                animation: ce,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const E = {};
            h.forEach(m => {
                const y = e.getBaseTarget(m),
                    v = e.getValue(m);
                v && (v.liveStyle = !0), E[m] = y ?? null
            }), d.push({
                animation: E
            })
        }
        let p = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(d) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(h => {
            var f;
            return (f = h.animationState) === null || f === void 0 ? void 0 : f.setActive(l, u)
        }), n[l].isActive = u;
        const d = o(l);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n
    }
}

function lL(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !yx(t, e) : !1
}

function br(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function uL() {
    return {
        animate: br(!0),
        whileInView: br(),
        whileHover: br(),
        whileTap: br(),
        whileDrag: br(),
        whileFocus: br(),
        exit: br()
    }
}
class cL extends jr {
    constructor(t) {
        super(t), t.animationState || (t.animationState = aL(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), ou(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let dL = 0;
class fL extends jr {
    constructor() {
        super(...arguments), this.id = dL++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const hL = {
        animation: {
            Feature: cL
        },
        exit: {
            Feature: fL
        }
    },
    Ey = (e, t) => Math.abs(e - t);

function pL(e, t) {
    const n = Ey(e.x, t.x),
        r = Ey(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Gx {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: s = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = ic(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    f = pL(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !f) return;
                const {
                    point: g
                } = d, {
                    timestamp: p
                } = He;
                this.history.push({
                    ...g,
                    timestamp: p
                });
                const {
                    onStart: E,
                    onMove: m
                } = this.handlers;
                h || (E && E(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, h) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = rc(h, this.transformPagePoint), se.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, h) => {
                this.end();
                const {
                    onEnd: f,
                    onSessionEnd: g,
                    resumeAnimation: p
                } = this.handlers;
                if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const E = ic(d.type === "pointercancel" ? this.lastMoveEventInfo : rc(h, this.transformPagePoint), this.history);
                this.startEvent && f && f(d, E), g && g(d, E)
            }, !dx(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const o = lu(t),
            a = rc(o, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = He;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, ic(a, this.history)), this.removeListeners = Ln(jn(this.contextWindow, "pointermove", this.handlePointerMove), jn(this.contextWindow, "pointerup", this.handlePointerUp), jn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), _n(this.updatePoint)
    }
}

function rc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Py(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function ic({
    point: e
}, t) {
    return {
        point: e,
        delta: Py(e, Yx(t)),
        offset: Py(e, mL(t)),
        velocity: yL(t, .1)
    }
}

function mL(e) {
    return e[0]
}

function Yx(e) {
    return e[e.length - 1]
}

function yL(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = Yx(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > vr(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = bn(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function Tt(e) {
    return e.max - e.min
}

function Hd(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function Cy(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Ee(t.min, t.max, e.origin), e.scale = Tt(n) / Tt(t), (Hd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ee(n.min, n.max, e.origin) - e.originPoint, (Hd(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function co(e, t, n, r) {
    Cy(e.x, t.x, n.x, r ? r.originX : void 0), Cy(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Ty(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Tt(t)
}

function gL(e, t, n) {
    Ty(e.x, t.x, n.x), Ty(e.y, t.y, n.y)
}

function Ry(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Tt(t)
}

function fo(e, t, n) {
    Ry(e.x, t.x, n.x), Ry(e.y, t.y, n.y)
}

function vL(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? Ee(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Ee(n, e, r.max) : Math.min(e, n)), e
}

function ky(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function xL(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: ky(e.x, n, i),
        y: ky(e.y, t, r)
    }
}

function jy(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function wL(e, t) {
    return {
        x: jy(e.x, t.x),
        y: jy(e.y, t.y)
    }
}

function SL(e, t) {
    let n = .5;
    const r = Tt(e),
        i = Tt(t);
    return i > r ? n = _o(t.min, t.max - r, e.min) : r > i && (n = _o(e.min, e.max - i, t.min)), Er(0, 1, n)
}

function EL(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Wd = .35;

function PL(e = Wd) {
    return e === !1 ? e = 0 : e === !0 && (e = Wd), {
        x: Ly(e, "left", "right"),
        y: Ly(e, "top", "bottom")
    }
}

function Ly(e, t, n) {
    return {
        min: by(e, t),
        max: by(e, n)
    }
}

function by(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Ny = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Mi = () => ({
        x: Ny(),
        y: Ny()
    }),
    Ay = () => ({
        min: 0,
        max: 0
    }),
    ke = () => ({
        x: Ay(),
        y: Ay()
    });

function At(e) {
    return [e("x"), e("y")]
}

function Xx({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function CL({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function TL(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function sc(e) {
    return e === void 0 || e === 1
}

function Kd({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !sc(e) || !sc(t) || !sc(n)
}

function Dr(e) {
    return Kd(e) || Jx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Jx(e) {
    return Dy(e.x) || Dy(e.y)
}

function Dy(e) {
    return e && e !== "0%"
}

function Al(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function Oy(e, t, n, r, i) {
    return i !== void 0 && (e = Al(e, i, r)), Al(e, n, r) + t
}

function Qd(e, t = 0, n = 1, r, i) {
    e.min = Oy(e.min, t, n, r, i), e.max = Oy(e.max, t, n, r, i)
}

function Zx(e, {
    x: t,
    y: n
}) {
    Qd(e.x, t.translate, t.scale, t.originPoint), Qd(e.y, n.translate, n.scale, n.originPoint)
}

function RL(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a], o = s.projectionDelta;
        const l = s.instance;
        l && l.style && l.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Fi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Zx(e, o)), r && Dr(s.latestValues) && Fi(e, s.latestValues))
    }
    t.x = My(t.x), t.y = My(t.y)
}

function My(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Xn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Fy(e, t, [n, r, i]) {
    const s = t[i] !== void 0 ? t[i] : .5,
        o = Ee(e.min, e.max, s);
    Qd(e, t[n], t[r], o, t.scale)
}
const kL = ["x", "scaleX", "originX"],
    jL = ["y", "scaleY", "originY"];

function Fi(e, t) {
    Fy(e.x, t, kL), Fy(e.y, t, jL)
}

function ew(e, t) {
    return Xx(TL(e.getBoundingClientRect(), t))
}

function LL(e, t, n) {
    const r = ew(e, n),
        {
            scroll: i
        } = t;
    return i && (Xn(r.x, i.offset.x), Xn(r.y, i.offset.y)), r
}
const tw = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    bL = new WeakMap;
class NL {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ke(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(lu(c, "page").point)
            },
            s = (c, d) => {
                const {
                    drag: h,
                    dragPropagation: f,
                    onDragStart: g
                } = this.getProps();
                if (h && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = hx(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), At(E => {
                    let m = this.getAxisMotionValue(E).get() || 0;
                    if (hn.test(m)) {
                        const {
                            projection: y
                        } = this.visualElement;
                        if (y && y.layout) {
                            const v = y.layout.layoutBox[E];
                            v && (m = Tt(v) * (parseFloat(m) / 100))
                        }
                    }
                    this.originPoint[E] = m
                }), g && se.postRender(() => g(c, d));
                const {
                    animationState: p
                } = this.visualElement;
                p && p.setActive("whileDrag", !0)
            },
            o = (c, d) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: f,
                    onDirectionLock: g,
                    onDrag: p
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: E
                } = d;
                if (f && this.currentDirection === null) {
                    this.currentDirection = AL(E), this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, E), this.updateAxis("y", d.point, E), this.visualElement.render(), p && p(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => At(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new Gx(t, {
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: tw(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: s
        } = this.getProps();
        s && se.postRender(() => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !La(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = vL(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
        n && Di(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = xL(i.layoutBox, n) : this.constraints = !1, this.elastic = PL(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && At(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = EL(i.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Di(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = LL(r, i.root, this.visualElement.getTransformPagePoint());
        let o = wL(i.layout.layoutBox, s);
        if (n) {
            const a = n(CL(o));
            this.hasMutatedConstraints = !!a, a && (o = Xx(a))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = At(c => {
            if (!La(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                f = i ? 40 : 1e7,
                g = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: h,
                    bounceDamping: f,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...d
                };
            return this.startAxisValueAnimation(c, g)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Fh(t, r, 0, n, this.visualElement))
    }
    stopAnimation() {
        At(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        At(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        At(n => {
            const {
                drag: r
            } = this.getProps();
            if (!La(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                s.set(t[n] - Ee(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Di(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        At(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = SL({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), At(o => {
            if (!La(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(Ee(l, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        bL.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = jn(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Di(l) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const o = Tn(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (At(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = Wd,
                dragMomentum: a = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function La(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function AL(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class DL extends jr {
    constructor(t) {
        super(t), this.removeGroupControls = Ze, this.removeListeners = Ze, this.controls = new NL(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ze
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const _y = e => (t, n) => {
    e && se.postRender(() => e(t, n))
};
class OL extends jr {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ze
    }
    onPointerDown(t) {
        this.session = new Gx(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tw(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: _y(t),
            onStart: _y(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && se.postRender(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = jn(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function ML() {
    const e = S.useContext(su);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const Qa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Vy(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Hs = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if ($.test(e)) e = parseFloat(e);
                else return e;
            const n = Vy(e, t.target.x),
                r = Vy(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    FL = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Pr.parse(e);
            if (i.length > 5) return r;
            const s = Pr.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const u = Ee(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i)
        }
    };
class _L extends S.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        OR(VL), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), Qa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, o = r.projection;
        return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || se.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), ph.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function nw(e) {
    const [t, n] = ML(), r = S.useContext(gh);
    return x.jsx(_L, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(X1),
        isPresent: t,
        safeToRemove: n
    })
}
const VL = {
        borderRadius: {
            ...Hs,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Hs,
        borderTopRightRadius: Hs,
        borderBottomLeftRadius: Hs,
        borderBottomRightRadius: Hs,
        boxShadow: FL
    },
    rw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    IL = rw.length,
    Iy = e => typeof e == "string" ? parseFloat(e) : e,
    zy = e => typeof e == "number" || $.test(e);

function zL(e, t, n, r, i, s) {
    i ? (e.opacity = Ee(0, n.opacity !== void 0 ? n.opacity : 1, UL(r)), e.opacityExit = Ee(t.opacity !== void 0 ? t.opacity : 1, 0, BL(r))) : s && (e.opacity = Ee(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < IL; o++) {
        const a = `border${rw[o]}Radius`;
        let l = Uy(t, a),
            u = Uy(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || zy(l) === zy(u) ? (e[a] = Math.max(Ee(Iy(l), Iy(u), r), 0), (hn.test(u) || hn.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = Ee(t.rotate || 0, n.rotate || 0, r))
}

function Uy(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const UL = iw(0, .5, zx),
    BL = iw(.5, .95, Ze);

function iw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(_o(e, t, r))
}

function By(e, t) {
    e.min = t.min, e.max = t.max
}

function Nt(e, t) {
    By(e.x, t.x), By(e.y, t.y)
}

function $y(e, t, n, r, i) {
    return e -= t, e = Al(e, 1 / n, r), i !== void 0 && (e = Al(e, 1 / i, r)), e
}

function $L(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (hn.test(t) && (t = parseFloat(t), t = Ee(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let a = Ee(s.min, s.max, r);
    e === s && (a -= t), e.min = $y(e.min, t, n, a, i), e.max = $y(e.max, t, n, a, i)
}

function Hy(e, t, [n, r, i], s, o) {
    $L(e, t[n], t[r], t[i], t.scale, s, o)
}
const HL = ["x", "scaleX", "originX"],
    WL = ["y", "scaleY", "originY"];

function Wy(e, t, n, r) {
    Hy(e.x, t, HL, n ? n.x : void 0, r ? r.x : void 0), Hy(e.y, t, WL, n ? n.y : void 0, r ? r.y : void 0)
}

function Ky(e) {
    return e.translate === 0 && e.scale === 1
}

function sw(e) {
    return Ky(e.x) && Ky(e.y)
}

function KL(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function ow(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function Qy(e) {
    return Tt(e.x) / Tt(e.y)
}
class QL {
    constructor() {
        this.members = []
    }
    add(t) {
        _h(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Vh(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function qy(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: h,
            skewX: f,
            skewY: g
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const qL = (e, t) => e.depth - t.depth;
class GL {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        _h(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Vh(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(qL), this.isDirty = !1, this.children.forEach(t)
    }
}

function YL(e, t) {
    const n = xr.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && (_n(r), e(s - t))
        };
    return se.read(r, !0), () => _n(r)
}

function XL(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function JL(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function ZL(e, t, n) {
    const r = Je(e) ? e : Vo(e);
    return r.start(Fh("", r, t, n)), r.animation
}
const oc = ["", "X", "Y", "Z"],
    eb = {
        visibility: "hidden"
    },
    Gy = 1e3;
let tb = 0;
const Or = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function ac(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function aw(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return !1;
    const {
        visualElement: t
    } = e.options;
    return t ? Qx(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? aw(e.parent) : !1 : !1
}

function lw({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            this.id = tb++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Or.totalNodes = Or.resolvedTargetDeltas = Or.recalculatedProjection = 0, this.nodes.forEach(ib), this.nodes.forEach(ub), this.nodes.forEach(cb), this.nodes.forEach(sb), XL(Or)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new GL)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ih), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = JL(o), this.instance = o;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = YL(h, 250), Qa.hasAnimatedSinceResize && (Qa.hasAnimatedSinceResize = !1, this.nodes.forEach(Xy))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: f,
                layout: g
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || c.getDefaultTransition() || mb,
                    {
                        onLayoutAnimationStart: E,
                        onLayoutAnimationComplete: m
                    } = c.getProps(),
                    y = !this.targetLayout || !ow(this.targetLayout, g) || f,
                    v = !h && f;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || h && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
                    const P = {
                        ...kh(p, "layout"),
                        onPlay: E,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P)
                } else h || Xy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, _n(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(db), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.HandoffCancelAllAnimations && aw(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yy);
                return
            }
            this.isUpdating || this.nodes.forEach(ab), this.isUpdating = !1, this.nodes.forEach(lb), this.nodes.forEach(nb), this.nodes.forEach(rb), this.clearAllSnapshots();
            const a = xr.now();
            He.delta = Er(0, 1e3 / 60, a - He.timestamp), He.timestamp = a, He.isProcessing = !0, Yu.update.process(He), Yu.preRender.process(He), Yu.render.process(He), He.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ph.read(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(ob), this.sharedNodes.forEach(fb)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, se.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            se.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !sw(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o && (a || Dr(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), yb(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return ke();
            const a = o.measureViewportBox(),
                {
                    scroll: l
                } = this.root;
            return l && (Xn(a.x, l.offset.x), Xn(a.y, l.offset.y)), a
        }
        removeElementScroll(o) {
            const a = ke();
            Nt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l],
                    {
                        scroll: c,
                        options: d
                    } = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Nt(a, o);
                        const {
                            scroll: h
                        } = this.root;
                        h && (Xn(a.x, -h.offset.x), Xn(a.y, -h.offset.y))
                    }
                    Xn(a.x, c.offset.x), Xn(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(o, a = !1) {
            const l = ke();
            Nt(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Fi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), Dr(c.latestValues) && Fi(l, c.latestValues)
            }
            return Dr(this.latestValues) && Fi(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = ke();
            Nt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Dr(u.latestValues)) continue;
                Kd(u.latestValues) && u.updateSnapshot();
                const c = ke(),
                    d = u.measurePageBox();
                Nt(c, d), Wy(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Dr(this.latestValues) && Wy(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== He.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: d,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(d || h))) {
                if (this.resolvedRelativeTargetAt = He.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), fo(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ke(), this.targetWithTransforms = ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gL(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nt(this.target, this.layout.layoutBox), Zx(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), fo(this.relativeTargetOrigin, this.target, f.target), Nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Or.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Kd(this.parent.latestValues) || Jx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === He.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            Nt(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                f = this.treeScale.y;
            RL(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ke());
            const {
                target: g
            } = a;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Mi(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Mi(), this.projectionDeltaWithTransform = Mi());
            const p = this.projectionTransform;
            co(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = qy(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== h || this.treeScale.y !== f) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Or.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = {
                    ...this.latestValues
                },
                d = Mi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = ke(),
                f = l ? l.source : void 0,
                g = this.layout ? this.layout.source : void 0,
                p = f !== g,
                E = this.getStack(),
                m = !E || E.members.length <= 1,
                y = !!(p && !m && this.options.crossfade === !0 && !this.path.some(pb));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = P => {
                const k = P / 1e3;
                Jy(d.x, o.x, k), Jy(d.y, o.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hb(this.relativeTarget, this.relativeTargetOrigin, h, k), v && KL(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = ke()), Nt(v, this.relativeTarget)), p && (this.animationValues = c, zL(c, u, this.latestValues, k, y, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (_n(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
                Qa.hasAnimatedSinceResize = !0, this.currentAnimation = ZL(0, Gy, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Gy), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && uw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ke();
                    const d = Tt(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + d;
                    const h = Tt(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + h
                }
                Nt(a, l), Fi(a, c), co(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new QL), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && ac("z", o, u, this.animationValues);
            for (let c = 0; c < oc.length; c++) ac(`rotate${oc[c]}`, o, u, this.animationValues), ac(`skew${oc[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return eb;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Wa(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Wa(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Dr(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p
            }
            const h = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = qy(this.projectionDeltaWithTransform, this.treeScale, h), c && (u.transform = c(h, u.transform));
            const {
                x: f,
                y: g
            } = this.projectionDelta;
            u.transformOrigin = `${f.origin*100}% ${g.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const p in Rl) {
                if (h[p] === void 0) continue;
                const {
                    correct: E,
                    applyTo: m
                } = Rl[p], y = u.transform === "none" ? h[p] : E(h[p], d);
                if (m) {
                    const v = m.length;
                    for (let P = 0; P < v; P++) u[m[P]] = y
                } else u[p] = y
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Wa(o == null ? void 0 : o.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(Yy), this.root.sharedNodes.clear()
        }
    }
}

function nb(e) {
    e.updateLayout()
}

function rb(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = n.source !== e.layout.source;
        s === "size" ? At(d => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
                f = Tt(h);
            h.min = r[d].min, h.max = h.min + f
        }) : uw(s, n.layoutBox, r) && At(d => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
                f = Tt(r[d]);
            h.max = h.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + f)
        });
        const a = Mi();
        co(a, r, n.layoutBox);
        const l = Mi();
        o ? co(l, e.applyTransform(i, !0), n.measuredBox) : co(l, r, n.layoutBox);
        const u = !sw(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: h,
                    layout: f
                } = d;
                if (h && f) {
                    const g = ke();
                    fo(g, n.layoutBox, h.layoutBox);
                    const p = ke();
                    fo(p, r, f.layoutBox), ow(g, p) || (c = !0), d.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = g, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function ib(e) {
    Or.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function sb(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function ob(e) {
    e.clearSnapshot()
}

function Yy(e) {
    e.clearMeasurements()
}

function ab(e) {
    e.isLayoutDirty = !1
}

function lb(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Xy(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function ub(e) {
    e.resolveTargetDelta()
}

function cb(e) {
    e.calcProjection()
}

function db(e) {
    e.resetSkewAndRotation()
}

function fb(e) {
    e.removeLeadSnapshot()
}

function Jy(e, t, n) {
    e.translate = Ee(t.translate, 0, n), e.scale = Ee(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Zy(e, t, n, r) {
    e.min = Ee(t.min, n.min, r), e.max = Ee(t.max, n.max, r)
}

function hb(e, t, n, r) {
    Zy(e.x, t.x, n.x, r), Zy(e.y, t.y, n.y, r)
}

function pb(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const mb = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    eg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    tg = eg("applewebkit/") && !eg("chrome/") ? Math.round : Ze;

function ng(e) {
    e.min = tg(e.min), e.max = tg(e.max)
}

function yb(e) {
    ng(e.x), ng(e.y)
}

function uw(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Hd(Qy(t), Qy(n), .2)
}
const gb = lw({
        attachResizeListener: (e, t) => Tn(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    lc = {
        current: void 0
    },
    cw = lw({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!lc.current) {
                const e = new gb({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), lc.current = e
            }
            return lc.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    vb = {
        pan: {
            Feature: OL
        },
        drag: {
            Feature: DL,
            ProjectionNode: cw,
            MeasureLayout: nw
        }
    },
    qd = {
        current: null
    },
    dw = {
        current: !1
    };

function xb() {
    if (dw.current = !0, !!dh)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => qd.current = e.matches;
            e.addListener(t), t()
        } else qd.current = !1
}

function wb(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const i in t) {
        const s = t[i],
            o = n[i];
        if (Je(s)) e.addValue(i, s), Nl(r) && r.add(i);
        else if (Je(o)) e.addValue(i, Vo(s, {
            owner: e
        })), Nl(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const a = e.getValue(i);
                a.liveStyle === !0 ? a.jump(s) : a.hasAnimated || a.set(s)
            } else {
                const a = e.getStaticValue(i);
                e.addValue(i, Vo(a !== void 0 ? a : s, {
                    owner: e
                }))
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}
const rg = new WeakMap,
    Sb = [...Sx, Ye, Pr],
    Eb = e => Sb.find(wx(e)),
    fw = Object.keys(Mo),
    Pb = fw.length,
    ig = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Cb = yh.length;

function hw(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : hw(e.parent)
}
class Tb {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: s,
        visualState: o
    }, a = {}) {
        this.resolveKeyframes = (h, f, g, p) => new this.KeyframeResolver(h, f, g, p, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = jh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => se.render(this.render, !1, !0);
        const {
            latestValues: l,
            renderState: u
        } = o;
        this.latestValues = l, this.baseTarget = {
            ...l
        }, this.initialValues = n.initial ? {
            ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = au(n), this.isVariantNode = Y1(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in d) {
            const f = d[h];
            l[h] !== void 0 && Je(f) && (f.set(l[h], !1), Nl(c) && c.add(h))
        }
    }
    mount(t) {
        this.current = t, rg.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), dw.current || xb(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : qd.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        rg.delete(this.current), this.projection && this.projection.unmount(), _n(this.notifyUpdate), _n(this.render), this.valueSubscriptions.forEach(n => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features)(t = this.features[n]) === null || t === void 0 || t.unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = hi.has(t),
            i = n.on("change", o => {
                this.latestValues[t] = o, this.props.onUpdate && se.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, i, s) {
        let o, a;
        for (let l = 0; l < Pb; l++) {
            const u = fw[l],
                {
                    isEnabled: c,
                    Feature: d,
                    ProjectionNode: h,
                    MeasureLayout: f
                } = Mo[u];
            h && (o = h), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), f && (a = f))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            const {
                layoutId: l,
                layout: u,
                drag: c,
                dragConstraints: d,
                layoutScroll: h,
                layoutRoot: f
            } = n;
            this.projection = new o(this.latestValues, n["data-framer-portal-id"] ? void 0 : hw(this.parent)), this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || d && Di(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: h,
                layoutRoot: f
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < ig.length; r++) {
            const i = ig[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = "on" + i,
                o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = wb(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < Cb; r++) {
            const i = yh[r],
                s = this.props[i];
            (Oo(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Vo(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (vx(i) || gx(i)) ? i = parseFloat(i) : !Eb(i) && Pr.test(n) && (i = Lx(t, n)), this.setBaseTarget(t, Je(i) ? i.get() : i)), Je(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = Rh(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0) return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Je(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Ih), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class pw extends Tb {
    constructor() {
        super(...arguments), this.KeyframeResolver = bx
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function Rb(e) {
    return window.getComputedStyle(e)
}
class kb extends pw {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (hi.has(n)) {
            const r = bh(n);
            return r && r.default || 0
        } else {
            const r = Rb(t),
                i = (ex(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return ew(t, n)
    }
    build(t, n, r, i) {
        Sh(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Th(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Je(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, i) {
        sx(t, n, r, i)
    }
}
class jb extends pw {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (hi.has(n)) {
            const r = bh(n);
            return r && r.default || 0
        }
        return n = ox.has(n) ? n : hh(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ke()
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return lx(t, n, r)
    }
    build(t, n, r, i) {
        Ph(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        ax(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Ch(t.tagName), super.mount(t)
    }
}
const Lb = (e, t) => vh(e) ? new jb(t, {
        enableHardwareAcceleration: !1
    }) : new kb(t, {
        allowProjection: e !== S.Fragment,
        enableHardwareAcceleration: !0
    }),
    bb = {
        layout: {
            ProjectionNode: cw,
            MeasureLayout: nw
        }
    },
    Nb = {
        ...hL,
        ...Ek,
        ...vb,
        ...bb
    },
    Ab = AR((e, t) => uk(e, t, Nb, Lb));

function mw() {
    const e = S.useRef(!1);
    return fh(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Db() {
    const e = mw(),
        [t, n] = S.useState(0),
        r = S.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [S.useCallback(() => se.postRender(r), [r]), t]
}
class Ob extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Mb({
    children: e,
    isPresent: t
}) {
    const n = S.useId(),
        r = S.useRef(null),
        i = S.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: s
        } = S.useContext(ch);
    return S.useInsertionEffect(() => {
        const {
            width: o,
            height: a,
            top: l,
            left: u
        } = i.current;
        if (t || !r.current || !o || !a) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return s && (c.nonce = s), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), x.jsx(Ob, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: S.cloneElement(e, {
            ref: r
        })
    })
}
const uc = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o
}) => {
    const a = ux(Fb),
        l = S.useId(),
        u = S.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: c => {
                a.set(c, !0);
                for (const d of a.values())
                    if (!d) return;
                r && r()
            },
            register: c => (a.set(c, !1), () => a.delete(c))
        }), s ? [Math.random()] : [n]);
    return S.useMemo(() => {
        a.forEach((c, d) => a.set(d, !1))
    }, [n]), S.useEffect(() => {
        !n && !a.size && r && r()
    }, [n]), o === "popLayout" && (e = x.jsx(Mb, {
        isPresent: n,
        children: e
    })), x.jsx(su.Provider, {
        value: u,
        children: e
    })
};

function Fb() {
    return new Map
}

function _b(e) {
    return S.useEffect(() => () => e(), [])
}
const Mr = e => e.key || "";

function Vb(e, t) {
    e.forEach(n => {
        const r = Mr(n);
        t.set(r, n)
    })
}

function Ib(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }), t
}
const zb = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: s = !0,
    mode: o = "sync"
}) => {
    const a = S.useContext(gh).forceRender || Db()[0],
        l = mw(),
        u = Ib(e);
    let c = u;
    const d = S.useRef(new Map).current,
        h = S.useRef(c),
        f = S.useRef(new Map).current,
        g = S.useRef(!0);
    if (fh(() => {
            g.current = !1, Vb(u, f), h.current = c
        }), _b(() => {
            g.current = !0, f.clear(), d.clear()
        }), g.current) return x.jsx(x.Fragment, {
        children: c.map(y => x.jsx(uc, {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o,
            children: y
        }, Mr(y)))
    });
    c = [...c];
    const p = h.current.map(Mr),
        E = u.map(Mr),
        m = p.length;
    for (let y = 0; y < m; y++) {
        const v = p[y];
        E.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0)
    }
    return o === "wait" && d.size && (c = []), d.forEach((y, v) => {
        if (E.indexOf(v) !== -1) return;
        const P = f.get(v);
        if (!P) return;
        const k = p.indexOf(v);
        let L = y;
        if (!L) {
            const w = () => {
                d.delete(v);
                const T = Array.from(f.keys()).filter(A => !E.includes(A));
                if (T.forEach(A => f.delete(A)), h.current = u.filter(A => {
                        const O = Mr(A);
                        return O === v || T.includes(O)
                    }), !d.size) {
                    if (l.current === !1) return;
                    a(), r && r()
                }
            };
            L = x.jsx(uc, {
                isPresent: !1,
                onExitComplete: w,
                custom: t,
                presenceAffectsLayout: s,
                mode: o,
                children: P
            }, Mr(P)), d.set(v, L)
        }
        c.splice(k, 0, L)
    }), c = c.map(y => {
        const v = y.key;
        return d.has(v) ? y : x.jsx(uc, {
            isPresent: !0,
            presenceAffectsLayout: s,
            mode: o,
            children: y
        }, Mr(y))
    }), x.jsx(x.Fragment, {
        children: d.size ? c : c.map(y => S.cloneElement(y))
    })
};

function yw(e, t, n = window) {
    const r = S.useRef(t);
    S.useEffect(() => {
        r.current = t
    }, [t]), S.useEffect(() => {
        if (n == null) return;
        const i = s => r.current(s);
        return n.addEventListener(e, i), () => n.removeEventListener(e, i)
    }, [e, n])
}
zh.propTypes = {
    children: he.node,
    setShowModal: he.func
};

function zh({
    children: e,
    setShowModal: t
}) {
    const n = S.useRef();
    return yw("click", r => {
        r.target === n.current && t(!1)
    }, document), x.jsx(Ab.div, {
        initial: {
            opacity: 0,
            background: "rgba(0,0,0,0)"
        },
        animate: {
            opacity: 1,
            background: "rgba(0,0,0,0.9)"
        },
        transition: {
            duration: .25
        },
        exit: {
            opacity: 0
        },
        ref: n,
        style: {
            margin: 0
        },
        className: "flex fixed inset-0 z-20 justify-center items-center min-h-screen min-w-screen",
        children: e
    })
}
const Uh = "/assets/avatar-RTP6kqrb.png",
    sg = "/assets/threads-BEpPZMh6.png";
Ne.propTypes = {
    type: he.string,
    className: he.string,
    onClick: he.func,
    active: he.bool,
    defaultStyle: he.bool
};
const Ub = {
    moon: x.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    }),
    home: x.jsx("path", {
        d: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
    }),
    popular: x.jsx("path", {
        d: "M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"
    }),
    all: x.jsx("path", {
        d: "M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"
    }),
    search: x.jsx("path", {
        d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
    }),
    message: x.jsx("path", {
        d: "M20 3H4c-1.103 0-2 .897-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.897-2-2-2zm-1 9h-3.142c-.446 1.722-1.997 3-3.858 3s-3.412-1.278-3.858-3H4V5h16v7h-1z"
    }),
    mail: x.jsx("path", {
        d: "M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
    }),
    "down-arrow": x.jsx("path", {
        d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
    }),
    notifications: x.jsxs(x.Fragment, {
        children: [x.jsx("circle", {
            cx: "18",
            cy: "6",
            r: "3"
        }), x.jsx("path", {
            d: "M13 6c0-.712.153-1.387.422-2H6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7.422A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5z"
        })]
    }),
    "eye-open": x.jsxs(x.Fragment, {
        children: [x.jsx("path", {
            d: "M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
        }), x.jsx("path", {
            d: "M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"
        })]
    }),
    "eye-close": x.jsx("path", {
        d: "M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"
    }),
    "arrow-right": x.jsx("path", {
        d: "m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
    }),
    "circle-logout": x.jsxs(x.Fragment, {
        children: [x.jsx("path", {
            d: "m2 12 5 4v-3h9v-2H7V8z"
        }), x.jsx("path", {
            d: "M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"
        })]
    }),
    "circle-login": x.jsxs(x.Fragment, {
        children: [x.jsx("path", {
            d: "m10.998 16 5-4-5-4v3h-9v2h9z"
        }), x.jsx("path", {
            d: "M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"
        })]
    }),
    more: x.jsx("path", {
        d: "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    }),
    share: x.jsx("path", {
        d: "M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
    }),
    comment: x.jsx("path", {
        d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
    }),
    mobileVote: x.jsx("path", {
        d: "M13 18v-6h5l-6-7-6 7h5v6z"
    }),
    add: x.jsx("path", {
        d: "M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
    }),
    edit: x.jsx("path", {
        d: "M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"
    }),
    send: x.jsx("path", {
        d: "m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"
    }),
    save: x.jsx("path", {
        d: "M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z"
    }),
    delete: x.jsx("path", {
        d: "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
    })
};

function Ne({
    type: e,
    className: t,
    onClick: n,
    active: r,
    defaultStyle: i = !0
}) {
    return x.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        onClick: n,
        className: `${t} ${r&&(i?"text-theme-red-coral":"text-sky-600")} md:cursor-pointer fill-current ${i?"group-hover:text-theme-red-coral active:text-theme-red-coral hover:text-theme-red-coral":"group-hover:text-sky-600 hover:text-sky-600 active:text-sky-600"}  text-inherit`,
        children: Ub[e]
    })
}

function Bb(e, t) {
    yw("click", n => {
        e.current == null || e.current.contains(n.target) || t(n)
    }, document)
}
gw.propTypes = {
    subThreadName: he.string,
    setShowModal: he.func,
    edit: he.bool,
    ogInfo: he.object
};

function gw({
    subThreadName: e,
    setShowModal: t,
    edit: n = !1,
    ogInfo: r = {}
}) {
    const i = qo(),
        [s, o] = S.useState(n ? r.name : e),
        [a, l] = S.useState((r == null ? void 0 : r.description) || ""),
        [u, c] = S.useState(""),
        [d, h] = S.useState("image"),
        [f, g] = S.useState(""),
        {
            user: p
        } = fi();
    async function E(m) {
        m == null || m.preventDefault();
        const y = new FormData;
        n || y.append("name", s), y.append("content_type", d), y.append("content_url", f), y.append("description", a), u && y.append("media", u, u.name), n ? await ae.patch(`/api/thread/${r.id}`, y, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(v => {
            t(!1), i.setQueryData(["thread", `${r.name.slice(2)}`], () => v.data.new_data)
        }).catch(v => alert(`${v.message} check your fields`)) : await ae.post("/api/thread", y, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => t(!1)).catch(v => alert(`${v.message} check your fields`))
    }
    return S.useEffect(() => (No.setFocused(!1), () => No.setFocused(!0)), []), x.jsxs("div", {
        className: `flex flex-col p-5 space-y-5 w-5/6 rounded-md min-h-4/6 ${n?"md:w-2/4 md:h-4/6":"md:w-3/4 md:h-5/6"}  md:p-10 bg-theme-cultured`,
        children: [x.jsxs("div", {
            className: "flex flex-col justify-around items-center p-4 space-y-3 bg-white rounded-xl md:flex-row md:space-y-0",
            children: [x.jsxs("p", {
                children: [n ? "Editing" : "Creating", " Subthread as"]
            }), x.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [x.jsx("img", {
                    src: p.avatar || Uh,
                    className: "object-cover w-9 h-9 rounded-full",
                    alt: ""
                }), x.jsx("p", {
                    children: p.username
                })]
            })]
        }), x.jsxs("form", {
            className: "flex flex-col flex-1 justify-around p-3 space-y-5 w-full h-1/2 bg-white rounded-md",
            onSubmit: E,
            children: [!n && x.jsxs("label", {
                htmlFor: "name",
                className: "flex flex-col space-y-1 md:space-y-0 md:space-x-2 md:flex-row",
                children: [x.jsx("span", {
                    className: "text-sm font-light",
                    children: "Subthread Name"
                }), x.jsx("input", {
                    type: "text",
                    name: "name",
                    id: "name",
                    value: s,
                    placeholder: s,
                    onChange: m => o(m.target.value),
                    className: "w-full border-b border-gray-800 focus:outline-none",
                    required: !0,
                    maxLength: 50,
                    minLength: 3,
                    pattern: "\\w"
                })]
            }), x.jsxs("label", {
                htmlFor: "description",
                className: "flex flex-col items-center space-y-1 md:space-y-0 md:space-x-2 md:flex-row",
                children: [x.jsx("span", {
                    className: "text-sm font-light",
                    children: "Description"
                }), x.jsx("textarea", {
                    type: "text",
                    value: a,
                    onChange: m => l(m.target.value),
                    name: "description",
                    id: "description",
                    className: "w-full h-20 max-h-28 border-b border-gray-800 focus:outline-none"
                })]
            }), x.jsxs("label", {
                htmlFor: "media",
                className: "flex flex-col items-center space-y-3 md:space-y-0 md:space-x-5 md:flex-row",
                children: [x.jsxs("select", {
                    className: "px-10 py-2 bg-white rounded-md border md:px-12",
                    name: "type",
                    id: "media_type",
                    onChange: m => h(m.target.value),
                    children: [x.jsx("option", {
                        value: "image",
                        children: "Image"
                    }), x.jsx("option", {
                        value: "url",
                        children: "URL"
                    })]
                }), d === "image" ? x.jsx("input", {
                    onChange: m => {
                        m.target.files[0].size > 10485760 ? alert("File too large, only upload files less than 10MB") : c(m.target.files[0])
                    },
                    type: "file",
                    name: "file",
                    accept: "image/*",
                    id: "image",
                    className: "w-full focus:outline-none"
                }) : x.jsx("input", {
                    type: "text",
                    name: "media_url",
                    id: "media_url",
                    className: "p-2 w-full rounded-md border border-gray-800 focus:outline-none",
                    onChange: m => g(m.target.value)
                })]
            }), n && x.jsx("span", {
                className: "text-sm font-semibold text-red-500",
                children: "Only Add Image if you want to modify the original image if empty the original will be used."
            }), x.jsx("button", {
                type: "submit",
                className: "py-2 font-semibold text-white rounded-md bg-theme-orange active:scale-95",
                children: "Submit"
            })]
        })]
    })
}

function $b() {
    const {
        isAuthenticated: e,
        user: t,
        logout: n
    } = fi(), r = gn(), i = Ss();
    return x.jsxs("nav", {
        className: "flex justify-between items-center mx-1 h-16 md:p-5",
        children: [x.jsx(ps, {}), x.jsxs("div", {
            className: "flex items-center md:space-x-10",
            children: [x.jsxs("div", {
                className: `list-none hidden md:flex space-x-10 text-gray-600 fill-current 
                    ${!e&&"flex-1 space-x-20"}`,
                children: [x.jsxs(Bs, {
                    to: `${e?"/home":"/login"}`,
                    className: ({
                        isActive: s
                    }) => `duration-500 group flex space-x-1 group cursor-pointer ${s&&"text-theme-orange"}`,
                    children: [x.jsx(Ne, {
                        type: "home",
                        className: "w-6 h-6"
                    }), x.jsx("h2", {
                        className: "font-semibold group-hover:text-theme-orange",
                        children: "Home"
                    })]
                }), x.jsxs(Bs, {
                    to: "/popular",
                    className: ({
                        isActive: s
                    }) => `group flex space-x-1 group cursor-pointer ${s&&"text-theme-orange"}`,
                    children: [x.jsx(Ne, {
                        type: "popular",
                        className: "w-6 h-6"
                    }), x.jsx("h2", {
                        className: "font-semibold group-hover:text-theme-orange",
                        children: "Popular"
                    })]
                }), x.jsxs(Bs, {
                    to: "/all",
                    className: ({
                        isActive: s
                    }) => `group flex space-x-1 group cursor-pointer ${s&&"text-theme-orange"}`,
                    children: [x.jsx(Ne, {
                        type: "all",
                        className: "w-6 h-6"
                    }), x.jsx("h2", {
                        className: "font-semibold group-hover:text-theme-orange",
                        children: "All"
                    })]
                })]
            }), x.jsx(Bh, {
                callBackFunc: s => i(s)
            })]
        }), x.jsxs("div", {
            className: "flex items-center md:space-x-6",
            children: [e && x.jsxs(x.Fragment, {
                children: [x.jsx(Bs, {
                    to: "/saved",
                    className: ({
                        isActive: s
                    }) => `${s&&"text-theme-orange"}`,
                    title: "saved",
                    children: x.jsx(Ne, {
                        type: "save",
                        className: "hidden w-6 h-6 md:block"
                    })
                }), x.jsx(Bs, {
                    to: "/inbox",
                    className: ({
                        isActive: s
                    }) => `${s&&"text-theme-orange"}`,
                    title: "inbox",
                    children: x.jsx(Ne, {
                        type: "message",
                        className: "hidden w-6 h-6 md:block"
                    })
                }), x.jsxs(Fn, {
                    to: `/u/${t.username}`,
                    className: "hidden md:flex items-center space-x-2 bg-theme-cultured rounded-3xl pr-3 py-0.5",
                    children: [x.jsx("img", {
                        loading: "lazy",
                        width: "auto",
                        height: "100%",
                        src: t.avatar || Uh,
                        className: "object-cover w-10 h-10 rounded-full duration-500 cursor-pointer hover:scale-125 md:block"
                    }), x.jsxs("div", {
                        className: "text-sm font-semibold md:block",
                        children: [x.jsx("p", {
                            className: "text-gray-700",
                            children: t.username
                        }), x.jsxs("p", {
                            className: "text-gray-500 truncate",
                            children: ["karma: ", t.karma.user_karma]
                        })]
                    })]
                }), x.jsxs("button", {
                    onClick: n,
                    className: "hidden flex-col items-center md:flex",
                    children: [x.jsx(Ne, {
                        type: "circle-logout",
                        className: "w-6 h-6 duration-300 rotate-180 md:block hover:scale-110"
                    }), x.jsx("span", {
                        className: "text-sm font-semibold",
                        children: "Logout"
                    })]
                })]
            }), x.jsxs("select", {
                name: "page",
                id: "page",
                className: "px-1 py-3 mr-1 text-center rounded-md md:hidden bg-theme-cultured",
                onChange: s => {
                    if (s.target.value !== "logout") i(s.target.value);
                    else return n(), i("/all")
                },
                value: r.pathname,
                children: [x.jsxs("optgroup", {
                    label: "Feeds",
                    children: [e && x.jsx("option", {
                        value: "/home",
                        children: "Home"
                    }), x.jsx("option", {
                        value: "/popular",
                        children: "Popular"
                    }), x.jsx("option", {
                        value: "/all",
                        children: "All"
                    })]
                }), x.jsx("optgroup", {
                    label: "Other",
                    children: e ? x.jsxs(x.Fragment, {
                        children: [x.jsx("option", {
                            value: "/inbox",
                            children: "Inbox"
                        }), x.jsx("option", {
                            value: "/saved",
                            children: "Saved"
                        }), x.jsx("option", {
                            value: `/u/${t.username}`,
                            children: "Profile"
                        }), x.jsx("option", {
                            value: "logout",
                            children: "Logout"
                        })]
                    }) : x.jsxs(x.Fragment, {
                        children: [x.jsx("option", {
                            value: "/register",
                            children: "Register"
                        }), x.jsx("option", {
                            value: "/login",
                            children: "Login"
                        })]
                    })
                })]
            })]
        }), !e && x.jsxs(Fn, {
            to: "/login",
            className: "hidden font-semibold cursor-pointer md:flex hover:text-theme-orange group",
            children: ["Login", x.jsx(Ne, {
                type: "arrow-right",
                className: "invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"
            })]
        })]
    })
}
ps.propTypes = {
    forBanner: he.bool,
    children: he.node
};

function ps({
    forBanner: e = !1,
    children: t
}) {
    return e ? x.jsxs("div", {
        className: "hidden relative flex-col justify-center items-center space-y-5 rounded-md cursor-pointer md:flex group",
        children: [x.jsx("img", {
            src: sg,
            alt: "threadit-logo",
            className: "object-cover"
        }), x.jsx("span", {
            className: `hidden md:block absolute w-4 h-4\r
                    bg-theme-orange rounded-full bottom-[5.9rem] z-20 right-[8rem] group-hover:animate-bounce`
        }), x.jsx("span", {
            className: "hidden md:block absolute w-4 h-4 bg-theme-cultured rounded-full bottom-[5.9rem] z-10 right-[8rem]"
        }), x.jsx("h1", {
            className: "font-mono text-6xl font-bold tracking-tight",
            children: "Threaddit"
        }), x.jsx("p", {
            className: "text-lg font-semibold",
            children: "The Internet Home Place, where many communities reside"
        }), t]
    }) : x.jsxs(Fn, {
        to: "/",
        className: "flex relative items-center space-x-3 cursor-pointer group",
        children: [x.jsx("img", {
            src: sg,
            className: "object-cover w-10 h-10",
            alt: "threadit-logo"
        }), x.jsx("span", {
            className: `hidden md:block absolute w-2 h-2 bg-theme-orange rounded-full\r
                    right-[1.4rem] top-[0.2rem] z-20 group-hover:animate-bounce`
        }), x.jsx("span", {
            className: "hidden md:block absolute w-2 h-2 bg-white rounded-full right-[1.4rem] top-[0.2rem] z-10"
        }), x.jsx("h1", {
            className: "hidden font-mono text-3xl font-bold tracking-tight md:block",
            children: "Threaddit"
        }), t]
    })
}
Bh.propTypes = {
    callBackFunc: he.func,
    forPost: he.bool
};

function Bh({
    callBackFunc: e,
    forPost: t = !1
}) {
    const [n, r] = S.useState(!1), i = S.useRef(), [s, o] = S.useState(""), a = Xf({
        queryKey: ["threads/search", s],
        queryFn: async ({
            signal: u
        }) => new Promise(d => setTimeout(d, 500)).then(async () => await ae.get("/api/threads/search", {
            params: {
                name: s
            },
            signal: u
        }).then(d => d.data)),
        enabled: s.length > 0 && s.replace(/\s/g, "").length > 0
    });
    Bb(i, () => {
        o("")
    });
    const l = a.data ? a.data.map(u => u.name) : [];
    return x.jsxs("div", {
        className: "flex items-center py-2.5 pl-2 md:p-2.5 space-x-3 rounded-md bg-neutral-100 relative",
        ref: i,
        children: [x.jsx(Ne, {
            type: "search",
            className: "w-6 h-6"
        }), x.jsx("input", {
            value: s,
            onChange: u => o(u.target.value),
            type: "search",
            name: "search",
            id: "search",
            className: "py-0.5 w-48  md:w-full bg-neutral-100 focus:outline-none md:pr-20",
            placeholder: "Find community"
        }), a.data && s && x.jsxs("ul", {
            className: "flex absolute right-0 top-full z-50 flex-col p-5 mt-3 space-y-5 w-full list-none bg-white rounded-md border shadow-xl border-y-theme-gray-blue",
            children: [a.data.slice(0, 5).map(u => x.jsxs("li", {
                className: `flex space-x-5 cursor-pointer ${!u.logo&&"pl-[3.75rem]"}`,
                onClick: () => {
                    e(t ? {
                        id: u.id,
                        name: u.name
                    } : u.name), o("")
                },
                children: [u.logo && x.jsx("img", {
                    src: u.logo,
                    className: "object-cover w-10 h-10 rounded-full"
                }), x.jsxs("div", {
                    className: "flex flex-col",
                    children: [x.jsx("p", {
                        className: "text-sm font-semibold tracking-wide md:text-base",
                        children: u.name
                    }), x.jsxs("span", {
                        className: "text-xs font-light md:text-sm",
                        children: [u.subscriberCount, " Members"]
                    })]
                })]
            }, u.name)), !l.includes(`t/${s}`) && !t && x.jsxs(x.Fragment, {
                children: [x.jsx("span", {
                    className: "w-full border border-theme-orange"
                }), x.jsxs("div", {
                    className: "flex justify-center items-center m-0 font-semibold cursor-pointer group",
                    onClick: () => {
                        r(!0), o("")
                    },
                    children: [x.jsxs("p", {
                        className: "text-sm md:text-base",
                        children: ['Create subthread "', s, '"']
                    }), x.jsx(Ne, {
                        type: "arrow-right",
                        className: "w-6 h-6 duration-500 group-hover:translate-x-1"
                    })]
                })]
            })]
        }), n && x.jsx(zh, {
            setShowModal: r,
            showModal: n,
            children: x.jsx(gw, {
                subThreadName: s,
                setShowModal: r
            })
        })]
    })
}

function Fr() {
    return Fr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Fr.apply(this, arguments)
}
const Hb = ["children", "options"];
var og, ag;
(function(e) {
    e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33"
})(og || (og = {})),
function(e) {
    e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN"
}(ag || (ag = {}));
const lg = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
        for: "htmlFor"
    }),
    ug = {
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        nbsp: " ",
        quot: "“"
    },
    Wb = ["style", "script"],
    Kb = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    Qb = /mailto:/i,
    qb = /\n{2,}$/,
    vw = /^(\s*>[\s\S]*?)(?=\n{2,})/,
    Gb = /^ *> ?/gm,
    Yb = /^ {2,}\n/,
    Xb = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    xw = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    ww = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    Jb = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    Zb = /^(?:\n *)*\n/,
    eN = /\r\n?/g,
    tN = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
    nN = /^\[\^([^\]]+)]/,
    rN = /\f/g,
    iN = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
    sN = /^\s*?\[(x|\s)\]/,
    Sw = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    Ew = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    Pw = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Gd = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
    oN = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
    Cw = /^<!--[\s\S]*?(?:-->)/,
    aN = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    Yd = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    lN = /^\{.*\}$/,
    uN = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    cN = /^<([^ >]+@[^ >]+)>/,
    dN = /^<([^ >]+:\/[^ >]+)>/,
    fN = /-([a-z])?/gi,
    Tw = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
    hN = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    pN = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    mN = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    yN = /(\[|\])/g,
    gN = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    vN = /\t/g,
    xN = /(^ *\||\| *$)/g,
    wN = /^ *:-+: *$/,
    SN = /^ *:-+ *$/,
    EN = /^ *-+: *$/,
    du = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",
    PN = new RegExp(`^([*_])\\1${du}\\1\\1(?!\\1)`),
    CN = new RegExp(`^([*_])${du}\\1(?!\\1|\\w)`),
    TN = new RegExp(`^==${du}==`),
    RN = new RegExp(`^~~${du}~~`),
    kN = /^\\([^0-9A-Za-z\s])/,
    jN = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    LN = /^\n+/,
    bN = /^([ \t]*)/,
    NN = /\\([^\\])/g,
    cg = / *\n+$/,
    AN = /(?:^|\n)( *)$/,
    $h = "(?:\\d+\\.)",
    Hh = "(?:[*+-])";

function Rw(e) {
    return "( *)(" + (e === 1 ? $h : Hh) + ") +"
}
const kw = Rw(1),
    jw = Rw(2);

function Lw(e) {
    return new RegExp("^" + (e === 1 ? kw : jw))
}
const DN = Lw(1),
    ON = Lw(2);

function bw(e) {
    return new RegExp("^" + (e === 1 ? kw : jw) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? $h : Hh) + " )[^\\n]*)*(\\n|$)", "gm")
}
const Nw = bw(1),
    Aw = bw(2);

function Dw(e) {
    const t = e === 1 ? $h : Hh;
    return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
}
const Ow = Dw(1),
    Mw = Dw(2);

function dg(e, t) {
    const n = t === 1,
        r = n ? Ow : Mw,
        i = n ? Nw : Aw,
        s = n ? DN : ON;
    return {
        match(o, a, l) {
            const u = AN.exec(l);
            return u && (a.list || !a.inline && !a.simple) ? r.exec(o = u[1] + o) : null
        },
        order: 1,
        parse(o, a, l) {
            const u = n ? +o[2] : void 0,
                c = o[0].replace(qb, `
`).match(i);
            let d = !1;
            return {
                items: c.map(function(h, f) {
                    const g = s.exec(h)[0].length,
                        p = new RegExp("^ {1," + g + "}", "gm"),
                        E = h.replace(p, "").replace(s, ""),
                        m = f === c.length - 1,
                        y = E.indexOf(`

`) !== -1 || m && d;
                    d = y;
                    const v = l.inline,
                        P = l.list;
                    let k;
                    l.list = !0, y ? (l.inline = !1, k = E.replace(cg, `

`)) : (l.inline = !0, k = E.replace(cg, ""));
                    const L = a(k, l);
                    return l.inline = v, l.list = P, L
                }),
                ordered: n,
                start: u
            }
        },
        render: (o, a, l) => e(o.ordered ? "ol" : "ul", {
            key: l.key,
            start: o.type === "20" ? o.start : void 0
        }, o.items.map(function(u, c) {
            return e("li", {
                key: c
            }, a(u, l))
        }))
    }
}
const MN = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),
    FN = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    Fw = [vw, xw, ww, Sw, Pw, Ew, Cw, Tw, Nw, Ow, Aw, Mw],
    _N = [...Fw, /^[^\n]+(?:  \n|\n{2,})/, Gd, Yd];

function VN(e) {
    return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
}

function IN(e) {
    return EN.test(e) ? "right" : wN.test(e) ? "center" : SN.test(e) ? "left" : null
}

function fg(e, t, n, r) {
    const i = n.inTable;
    n.inTable = !0;
    let s = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((a, l) => (l.trim() === "|" ? a.push(r ? {
        type: "26"
    } : {
        type: "27",
        text: l
    }) : l !== "" && a.push.apply(a, t(l, n)), a), []);
    n.inTable = i;
    let o = [
        []
    ];
    return s.forEach(function(a, l) {
        a.type === "26" ? l !== 0 && l !== s.length - 1 && o.push([]) : (a.type !== "27" || s[l + 1] != null && s[l + 1].type !== "26" || (a.text = a.text.trimEnd()), o[o.length - 1].push(a))
    }), o
}

function zN(e, t, n) {
    n.inline = !0;
    const r = e[2] ? e[2].replace(xN, "").split("|").map(IN) : [],
        i = e[3] ? function(o, a, l) {
            return o.trim().split(`
`).map(function(u) {
                return fg(u, a, l, !0)
            })
        }(e[3], t, n) : [],
        s = fg(e[1], t, n, !!i.length);
    return n.inline = !1, i.length ? {
        align: r,
        cells: i,
        header: s,
        type: "25"
    } : {
        children: s,
        type: "21"
    }
}

function hg(e, t) {
    return e.align[t] == null ? {} : {
        textAlign: e.align[t]
    }
}

function Hn(e) {
    return function(t, n) {
        return n.inline ? e.exec(t) : null
    }
}

function Wn(e) {
    return function(t, n) {
        return n.inline || n.simple ? e.exec(t) : null
    }
}

function vn(e) {
    return function(t, n) {
        return n.inline || n.simple ? null : e.exec(t)
    }
}

function Ws(e) {
    return function(t) {
        return e.exec(t)
    }
}

function UN(e, t, n) {
    if (t.inline || t.simple || n && !n.endsWith(`
`)) return null;
    let r = "";
    e.split(`
`).every(s => !Fw.some(o => o.test(s)) && (r += s + `
`, s.trim()));
    const i = r.trimEnd();
    return i == "" ? null : [r, i]
}

function xi(e) {
    try {
        if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
    } catch {
        return null
    }
    return e
}

function pg(e) {
    return e.replace(NN, "$1")
}

function qa(e, t, n) {
    const r = n.inline || !1,
        i = n.simple || !1;
    n.inline = !0, n.simple = !0;
    const s = e(t, n);
    return n.inline = r, n.simple = i, s
}

function BN(e, t, n) {
    const r = n.inline || !1,
        i = n.simple || !1;
    n.inline = !1, n.simple = !0;
    const s = e(t, n);
    return n.inline = r, n.simple = i, s
}

function $N(e, t, n) {
    const r = n.inline || !1;
    n.inline = !1;
    const i = e(t, n);
    return n.inline = r, i
}
const cc = (e, t, n) => ({
    children: qa(t, e[1], n)
});

function dc() {
    return {}
}

function fc() {
    return null
}

function HN(...e) {
    return e.filter(Boolean).join(" ")
}

function hc(e, t, n) {
    let r = e;
    const i = t.split(".");
    for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
    return r || n
}

function WN(e = "", t = {}) {
    t.overrides = t.overrides || {}, t.slugify = t.slugify || VN, t.namedCodesToUnicode = t.namedCodesToUnicode ? Fr({}, ug, t.namedCodesToUnicode) : ug;
    const n = t.createElement || S.createElement;

    function r(f, g, ...p) {
        const E = hc(t.overrides, `${f}.props`, {});
        return n(function(m, y) {
            const v = hc(y, m);
            return v ? typeof v == "function" || typeof v == "object" && "render" in v ? v : hc(y, `${m}.component`, m) : m
        }(f, t.overrides), Fr({}, g, E, {
            className: HN(g == null ? void 0 : g.className, E.className) || void 0
        }), ...p)
    }

    function i(f) {
        f = f.replace(iN, "");
        let g = !1;
        t.forceInline ? g = !0 : t.forceBlock || (g = gN.test(f) === !1);
        const p = c(u(g ? f : `${f.trimEnd().replace(LN,"")}

`, {
            inline: g
        }));
        for (; typeof p[p.length - 1] == "string" && !p[p.length - 1].trim();) p.pop();
        if (t.wrapper === null) return p;
        const E = t.wrapper || (g ? "span" : "div");
        let m;
        if (p.length > 1 || t.forceWrapper) m = p;
        else {
            if (p.length === 1) return m = p[0], typeof m == "string" ? r("span", {
                key: "outer"
            }, m) : m;
            m = null
        }
        return S.createElement(E, {
            key: "outer"
        }, m)
    }

    function s(f) {
        const g = f.match(Kb);
        return g ? g.reduce(function(p, E, m) {
            const y = E.indexOf("=");
            if (y !== -1) {
                const v = function(w) {
                        return w.indexOf("-") !== -1 && w.match(aN) === null && (w = w.replace(fN, function(T, A) {
                            return A.toUpperCase()
                        })), w
                    }(E.slice(0, y)).trim(),
                    P = function(w) {
                        const T = w[0];
                        return (T === '"' || T === "'") && w.length >= 2 && w[w.length - 1] === T ? w.slice(1, -1) : w
                    }(E.slice(y + 1).trim()),
                    k = lg[v] || v,
                    L = p[k] = function(w, T) {
                        return w === "style" ? T.split(/;\s?/).reduce(function(A, O) {
                            const H = O.slice(0, O.indexOf(":"));
                            return A[H.trim().replace(/(-[a-z])/g, de => de[1].toUpperCase())] = O.slice(H.length + 1).trim(), A
                        }, {}) : w === "href" || w === "src" ? xi(T) : (T.match(lN) && (T = T.slice(1, T.length - 1)), T === "true" || T !== "false" && T)
                    }(v, P);
                typeof L == "string" && (Gd.test(L) || Yd.test(L)) && (p[k] = S.cloneElement(i(L.trim()), {
                    key: m
                }))
            } else E !== "style" && (p[lg[E] || E] = !0);
            return p
        }, {}) : null
    }
    const o = [],
        a = {},
        l = {
            0: {
                match: vn(vw),
                order: 1,
                parse: (f, g, p) => ({
                    children: g(f[0].replace(Gb, ""), p)
                }),
                render: (f, g, p) => r("blockquote", {
                    key: p.key
                }, g(f.children, p))
            },
            1: {
                match: Ws(Yb),
                order: 1,
                parse: dc,
                render: (f, g, p) => r("br", {
                    key: p.key
                })
            },
            2: {
                match: vn(Xb),
                order: 1,
                parse: dc,
                render: (f, g, p) => r("hr", {
                    key: p.key
                })
            },
            3: {
                match: vn(ww),
                order: 0,
                parse: f => ({
                    lang: void 0,
                    text: f[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
                }),
                render: (f, g, p) => r("pre", {
                    key: p.key
                }, r("code", Fr({}, f.attrs, {
                    className: f.lang ? `lang-${f.lang}` : ""
                }), f.text))
            },
            4: {
                match: vn(xw),
                order: 0,
                parse: f => ({
                    attrs: s(f[3] || ""),
                    lang: f[2] || void 0,
                    text: f[4],
                    type: "3"
                })
            },
            5: {
                match: Wn(Jb),
                order: 3,
                parse: f => ({
                    text: f[2]
                }),
                render: (f, g, p) => r("code", {
                    key: p.key
                }, f.text)
            },
            6: {
                match: vn(tN),
                order: 0,
                parse: f => (o.push({
                    footnote: f[2],
                    identifier: f[1]
                }), {}),
                render: fc
            },
            7: {
                match: Hn(nN),
                order: 1,
                parse: f => ({
                    target: `#${t.slugify(f[1])}`,
                    text: f[1]
                }),
                render: (f, g, p) => r("a", {
                    key: p.key,
                    href: xi(f.target)
                }, r("sup", {
                    key: p.key
                }, f.text))
            },
            8: {
                match: Hn(sN),
                order: 1,
                parse: f => ({
                    completed: f[1].toLowerCase() === "x"
                }),
                render: (f, g, p) => r("input", {
                    checked: f.completed,
                    key: p.key,
                    readOnly: !0,
                    type: "checkbox"
                })
            },
            9: {
                match: vn(t.enforceAtxHeadings ? Ew : Sw),
                order: 1,
                parse: (f, g, p) => ({
                    children: qa(g, f[2], p),
                    id: t.slugify(f[2]),
                    level: f[1].length
                }),
                render: (f, g, p) => r(`h${f.level}`, {
                    id: f.id,
                    key: p.key
                }, g(f.children, p))
            },
            10: {
                match: vn(Pw),
                order: 0,
                parse: (f, g, p) => ({
                    children: qa(g, f[1], p),
                    level: f[2] === "=" ? 1 : 2,
                    type: "9"
                })
            },
            11: {
                match: Ws(Gd),
                order: 1,
                parse(f, g, p) {
                    const [, E] = f[3].match(bN), m = new RegExp(`^${E}`, "gm"), y = f[3].replace(m, ""), v = (P = y, _N.some(T => T.test(P)) ? $N : qa);
                    var P;
                    const k = f[1].toLowerCase(),
                        L = Wb.indexOf(k) !== -1,
                        w = {
                            attrs: s(f[2]),
                            noInnerParse: L,
                            tag: (L ? k : f[1]).trim()
                        };
                    return p.inAnchor = p.inAnchor || k === "a", L ? w.text = f[3] : w.children = v(g, y, p), p.inAnchor = !1, w
                },
                render: (f, g, p) => r(f.tag, Fr({
                    key: p.key
                }, f.attrs), f.text || g(f.children, p))
            },
            13: {
                match: Ws(Yd),
                order: 1,
                parse: f => ({
                    attrs: s(f[2] || ""),
                    tag: f[1].trim()
                }),
                render: (f, g, p) => r(f.tag, Fr({}, f.attrs, {
                    key: p.key
                }))
            },
            12: {
                match: Ws(Cw),
                order: 1,
                parse: () => ({}),
                render: fc
            },
            14: {
                match: Wn(FN),
                order: 1,
                parse: f => ({
                    alt: f[1],
                    target: pg(f[2]),
                    title: f[3]
                }),
                render: (f, g, p) => r("img", {
                    key: p.key,
                    alt: f.alt || void 0,
                    title: f.title || void 0,
                    src: xi(f.target)
                })
            },
            15: {
                match: Hn(MN),
                order: 3,
                parse: (f, g, p) => ({
                    children: BN(g, f[1], p),
                    target: pg(f[2]),
                    title: f[3]
                }),
                render: (f, g, p) => r("a", {
                    key: p.key,
                    href: xi(f.target),
                    title: f.title
                }, g(f.children, p))
            },
            16: {
                match: Hn(dN),
                order: 0,
                parse: f => ({
                    children: [{
                        text: f[1],
                        type: "27"
                    }],
                    target: f[1],
                    type: "15"
                })
            },
            17: {
                match: (f, g) => g.inAnchor ? null : Hn(uN)(f, g),
                order: 0,
                parse: f => ({
                    children: [{
                        text: f[1],
                        type: "27"
                    }],
                    target: f[1],
                    title: void 0,
                    type: "15"
                })
            },
            18: {
                match: Hn(cN),
                order: 0,
                parse(f) {
                    let g = f[1],
                        p = f[1];
                    return Qb.test(p) || (p = "mailto:" + p), {
                        children: [{
                            text: g.replace("mailto:", ""),
                            type: "27"
                        }],
                        target: p,
                        type: "15"
                    }
                }
            },
            20: dg(r, 1),
            33: dg(r, 2),
            19: {
                match: vn(Zb),
                order: 3,
                parse: dc,
                render: () => `
`
            },
            21: {
                match: UN,
                order: 3,
                parse: cc,
                render: (f, g, p) => r("p", {
                    key: p.key
                }, g(f.children, p))
            },
            22: {
                match: Hn(hN),
                order: 0,
                parse: f => (a[f[1]] = {
                    target: f[2],
                    title: f[4]
                }, {}),
                render: fc
            },
            23: {
                match: Wn(pN),
                order: 0,
                parse: f => ({
                    alt: f[1] || void 0,
                    ref: f[2]
                }),
                render: (f, g, p) => a[f.ref] ? r("img", {
                    key: p.key,
                    alt: f.alt,
                    src: xi(a[f.ref].target),
                    title: a[f.ref].title
                }) : null
            },
            24: {
                match: Hn(mN),
                order: 0,
                parse: (f, g, p) => ({
                    children: g(f[1], p),
                    fallbackChildren: g(f[0].replace(yN, "\\$1"), p),
                    ref: f[2]
                }),
                render: (f, g, p) => a[f.ref] ? r("a", {
                    key: p.key,
                    href: xi(a[f.ref].target),
                    title: a[f.ref].title
                }, g(f.children, p)) : r("span", {
                    key: p.key
                }, g(f.fallbackChildren, p))
            },
            25: {
                match: vn(Tw),
                order: 1,
                parse: zN,
                render(f, g, p) {
                    const E = f;
                    return r("table", {
                        key: p.key
                    }, r("thead", null, r("tr", null, E.header.map(function(m, y) {
                        return r("th", {
                            key: y,
                            style: hg(E, y)
                        }, g(m, p))
                    }))), r("tbody", null, E.cells.map(function(m, y) {
                        return r("tr", {
                            key: y
                        }, m.map(function(v, P) {
                            return r("td", {
                                key: P,
                                style: hg(E, P)
                            }, g(v, p))
                        }))
                    })))
                }
            },
            27: {
                match: Ws(jN),
                order: 4,
                parse: f => ({
                    text: f[0].replace(oN, (g, p) => t.namedCodesToUnicode[p] ? t.namedCodesToUnicode[p] : g)
                }),
                render: f => f.text
            },
            28: {
                match: Wn(PN),
                order: 2,
                parse: (f, g, p) => ({
                    children: g(f[2], p)
                }),
                render: (f, g, p) => r("strong", {
                    key: p.key
                }, g(f.children, p))
            },
            29: {
                match: Wn(CN),
                order: 3,
                parse: (f, g, p) => ({
                    children: g(f[2], p)
                }),
                render: (f, g, p) => r("em", {
                    key: p.key
                }, g(f.children, p))
            },
            30: {
                match: Wn(kN),
                order: 1,
                parse: f => ({
                    text: f[1],
                    type: "27"
                })
            },
            31: {
                match: Wn(TN),
                order: 3,
                parse: cc,
                render: (f, g, p) => r("mark", {
                    key: p.key
                }, g(f.children, p))
            },
            32: {
                match: Wn(RN),
                order: 3,
                parse: cc,
                render: (f, g, p) => r("del", {
                    key: p.key
                }, g(f.children, p))
            }
        };
    t.disableParsingRawHTML === !0 && (delete l[11], delete l[13]);
    const u = function(f) {
            let g = Object.keys(f);

            function p(E, m) {
                let y = [],
                    v = "";
                for (; E;) {
                    let P = 0;
                    for (; P < g.length;) {
                        const k = g[P],
                            L = f[k],
                            w = L.match(E, m, v);
                        if (w) {
                            const T = w[0];
                            E = E.substring(T.length);
                            const A = L.parse(w, p, m);
                            A.type == null && (A.type = k), y.push(A), v = T;
                            break
                        }
                        P++
                    }
                }
                return y
            }
            return g.sort(function(E, m) {
                    let y = f[E].order,
                        v = f[m].order;
                    return y !== v ? y - v : E < m ? -1 : 1
                }),
                function(E, m) {
                    return p(function(y) {
                        return y.replace(eN, `
`).replace(rN, "").replace(vN, "    ")
                    }(E), m)
                }
        }(l),
        c = (d = function(f, g) {
            return function(p, E, m) {
                const y = f[p.type].render;
                return g ? g(() => y(p, E, m), p, E, m) : y(p, E, m)
            }
        }(l, t.renderRule), function f(g, p = {}) {
            if (Array.isArray(g)) {
                const E = p.key,
                    m = [];
                let y = !1;
                for (let v = 0; v < g.length; v++) {
                    p.key = v;
                    const P = f(g[v], p),
                        k = typeof P == "string";
                    k && y ? m[m.length - 1] += P : P !== null && m.push(P), y = k
                }
                return p.key = E, m
            }
            return d(g, f, p)
        });
    var d;
    const h = i(e);
    return o.length ? r("div", null, h, r("footer", {
        key: "footer"
    }, o.map(function(f) {
        return r("div", {
            id: t.slugify(f.identifier),
            key: f.identifier
        }, f.identifier, c(u(f.footnote, {
            inline: !0
        })))
    }))) : h
}
const KN = e => {
    let {
        children: t = "",
        options: n
    } = e, r = function(i, s) {
        if (i == null) return {};
        var o, a, l = {},
            u = Object.keys(i);
        for (a = 0; a < u.length; a++) s.indexOf(o = u[a]) >= 0 || (l[o] = i[o]);
        return l
    }(e, Hb);
    return S.cloneElement(WN(t, n), r)
};
ui.propTypes = {
    forPosts: he.bool,
    children: he.node
};

function ui({
    forPosts: e = !1,
    children: t = null
}) {
    return x.jsxs(x.Fragment, {
        children: [x.jsx("div", {
            className: `flex justify-center items-center ${e?"max-w-full max-h-full":"w-screen h-screen"}`,
            children: x.jsxs("div", {
                style: {
                    color: "#FF4500"
                },
                className: "la-pacman la-dark la-3x",
                children: [x.jsx("div", {}), x.jsx("div", {}), x.jsx("div", {}), x.jsx("div", {}), x.jsx("div", {}), x.jsx("div", {})]
            })
        }), t]
    })
}
_w.propTypes = {
    setShowModal: he.func,
    isEdit: he.bool,
    postInfo: he.object,
    threadInfo: he.object
};

function _w({
    setShowModal: e,
    isEdit: t = !1,
    postInfo: n = {},
    threadInfo: r = {}
}) {
    const i = qo(),
        [s, o] = S.useState((n == null ? void 0 : n.title) || ""),
        [a, l] = S.useState((n == null ? void 0 : n.content) || ""),
        [u, c] = S.useState(""),
        [d, h] = S.useState(!1),
        [f, g] = S.useState("media"),
        [p, E] = S.useState(""),
        [m, y] = S.useState(t ? {
            id: r.thread_id,
            name: r.thread_name
        } : { id: 0, name: "Default Subthread" }), // Default Subthread
        {
            user: v
        } = fi(),
        {
            mutate: P,
            status: k
        } = Jf({
            mutationFn: async L => {
                L == null || L.preventDefault();
                const w = new FormData();
                w.append("title", s);
                w.append("content_type", f);
                w.append("content_url", p);
                w.append("content", a);
                u && w.append("media", u, u.name);
                w.append("subthread_id", m.id || 0); // Ensure default subthread_id is set
                if (t) {
                    await ae.patch(`/api/post/${n.id}`, w, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }).then(T => {
                        i.setQueryData(["post/comment", `${n.id}`], A => ({
                            ...A,
                            post_info: T.data.new_data
                        }));
                        e(!1);
                    }).catch(T => alert(`${T.message} check your fields, Title and thread is mandatory`));
                } else {
                    await ae.post("/api/post", w, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }).then(() => e(!1)).catch(T => alert(`${T.message} check your fields, Title is mandatory`));
                }
            }
        });

    return x.jsxs("div", {
        className: "flex flex-col w-5/6 p-5 space-y-5 rounded-md h-4/6 blur-none md:w-3/4 md:h-5/6 md:p-10 bg-theme-cultured",
        children: [x.jsxs("div", {
            className: "flex flex-col items-center justify-between p-4 space-y-3 bg-white rounded-xl md:flex-row md:space-y-0",
            children: [x.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [x.jsxs("p", {
                    children: [t ? "Editing" : "Posting", " as"]
                }), x.jsx("img", {
                    src: v.avatar || Uh,
                    className: "object-cover w-8 h-8 rounded-full md:w-12 md:h-12",
                    alt: ""
                }), x.jsx("p", {
                    children: v.username
                })]
            }), k === "loading" && x.jsx(ui, {
                forPosts: !0
            }), x.jsxs("div", {
                className: "flex items-center mr-2 space-x-2 md:space-x-3",
                children: [x.jsxs("p", {
                    className: "hidden md:block",
                    children: [t ? "Editing" : "Posting", " on"]
                }), x.jsx("p", {
                    className: "md:hidden",
                    children: "On"
                }), m ? x.jsxs("div", {
                    className: "flex items-center p-1 space-x-3",
                    children: [x.jsx("p", {
                        className: "tracking-wide medium text- md:text-base text-theme-orange",
                        children: m.name
                    }), x.jsx(Ne, {
                        type: "delete",
                        className: "w-7 h-7 text-theme-orange",
                        onClick: () => y({ id: 0, name: "Default Subthread" }) // Reset to Default Subthread
                    })]
                }) : x.jsx(Bh, {
                    callBackFunc: y,
                    forPost: !0
                })]
            })]
        }), x.jsxs("form", {
            encType: "multipart/form-data",
            onSubmit: P,
            className: "flex flex-col flex-1 justify-around p-1.5 w-full h-1/2 bg-white rounded-md",
            children: [x.jsxs("label", {
                htmlFor: "title",
                children: [x.jsx("span", {
                    children: "Title"
                }), x.jsx("input", {
                    value: s,
                    onChange: L => o(L.target.value),
                    type: "text",
                    name: "title",
                    id: "title",
                    className: "w-full border-b border-gray-800 focus:outline-none",
                    required: !0
                })]
            }), x.jsxs("label", {
                htmlFor: "content",
                className: "",
                children: [x.jsx("span", {
                    children: d ? "Markdown Preview" : "Content"
                }), x.jsx("button", {
                    type: "button",
                    className: "active:scale-90 ml-5 my-0.5 py-0.5 px-2 bg-blue-600 text-white font-semibold rounded-md",
                    onClick: () => h(!d),
                    children: d ? "close preview" : "preview markdown"
                }), x.jsx("div", {
                    className: "flex flex-col space-y-2",
                    children: d ? x.jsx("div", {
                        className: "max-w-full p-2 overflow-auto prose border border-gray-800 h-28",
                        children: x.jsx(KN, {
                            options: {
                                forceBlock: !0,
                                wrapper: "div"
                            },
                            className: "w-full",
                            children: a.replace(`
`, `<br />
`) || "This is markdown preview"
                        })
                    }) : x.jsx("textarea", {
                        value: a,
                        onChange: L => l(L.target.value),
                        name: "content",
                        id: "content",
                        className: "w-full p-2 border border-gray-800 h-28 md:max-h-32 focus:outline-none"
                    })
                })]
            }), x.jsxs("label", {
                htmlFor: "media",
                className: "flex flex-col items-center space-y-3 md:space-y-0 md:space-x-5 md:flex-row",
                children: [x.jsxs("select", {
                    className: "px-10 py-2 bg-white border rounded-md md:px-12",
                    name: "mediaType",
                    id: "mediaType",
                    onChange: L => g(L.target.value),
                    children: [x.jsx("option", {
                        value: "media",
                        children: "Media"
                    }), x.jsx("option", {
                        value: "url",
                        children: "URL"
                    })]
                }), f === "media" ? x.jsx("label", {
                    htmlFor: "media",
                    children: x.jsx("input", {
                        onChange: L => {
                            L.target.files[0].size > 10485760 ? alert("File too large, only upload files less than 10MB") : c(L.target.files[0]);
                        },
                        type: "file",
                        name: "media",
                        alt: "media",
                        accept: "image/*, video/*",
                        id: "media",
                        className: "w-full focus:outline-none"
                    })
                }) : x.jsx("input", {
                    type: "text",
                    name: "media_url",
                    id: "media_url",
                    className: "w-full p-2 border border-gray-800 rounded-md focus:outline-none",
                    onChange: L => E(L.target.value)
                })]
            }), t && x.jsx("span", {
                className: "text-sm font-semibold text-red-500",
                children: "Only Add Image if you want to modify the original image; if empty, the original will be used."
            }), x.jsx("button", {
                type: "submit",
                disabled: k === "loading",
                className: "py-2 font-semibold text-white rounded-md bg-theme-orange active:scale-95",
                children: k === "loading" ? "Submitting..." : "Submit"
            })]
        })]
    });
}


function QN() {
    const [e, t] = S.useState(!1), {
        isAuthenticated: n
    } = fi(), r = gn();
    return x.jsxs("div", {
        className: "flex flex-col min-h-screen min-w-screen",
        children: [x.jsx($b, {}), x.jsx("main", {
            className: "flex flex-col flex-1 bg-theme-cultured",
            children: x.jsx(p1, {})
        }), n && r.pathname != "/inbox" && x.jsx("div", {
            className: "fixed right-5 bottom-5 w-14 h-14 rounded-xl bg-theme-orange active:scale-90",
            onClick: () => t(!0),
            children: x.jsx(Ne, {
                type: "add",
                className: "text-white cursor-pointer fill-current hover:text-white",
                onClick: () => t(!0)
            })
        }), x.jsx(zb, {
            children: e && n && x.jsx(zh, {
                showModal: e,
                setShowModal: t,
                children: x.jsx(_w, {
                    setShowModal: t
                })
            })
        })]
    })
}
Vw.propTypes = {
    message: he.string,
    fullScreen: he.bool
};

function Vw({
    message: e = "Something went wrong",
    fullScreen: t = !0
}) {
    return x.jsx("div", {
        className: `flex flex-col justify-center items-center space-y-10 ${t?"w-screen h-screen":"w-full h-full"} bg-theme-cultured`,
        children: x.jsx(ui, {
            forPosts: t,
            children: x.jsx("h1", {
                className: "text-2xl font-bold",
                children: e
            })
        })
    })
}

function qN() {
    const {
        data: e
    } = Xf({
        queryKey: ["threads/all"],
        queryFn: async () => await ae.get("/api/threads").then(t => t.data)
    });
    return x.jsxs("aside", {
        className: "hidden flex-col w-56 md:flex",
        children: [(e == null ? void 0 : e.subscribed.length) !== 0 && x.jsxs(x.Fragment, {
            children: [x.jsxs("div", {
                className: "flex flex-col m-5 space-y-4",
                children: [x.jsxs("div", {
                    className: "flex justify-between w-48 cursor-pointer",
                    children: [x.jsx("h2", {
                        className: "font-semibold uppercase",
                        children: "Subscribed"
                    }), x.jsx("span", {
                        className: "pr-1",
                        children: "ALL"
                    })]
                }), x.jsx(Ga, {
                    threadList: e == null ? void 0 : e.subscribed
                })]
            }), x.jsx("span", {
                className: "mx-5 border border-theme-silver-chalice"
            })]
        }), x.jsxs("div", {
            className: "flex flex-col m-5 space-y-4",
            children: [x.jsxs("div", {
                className: "flex justify-between w-48 cursor-pointer",
                children: [x.jsx("h2", {
                    className: "font-semibold uppercase",
                    children: "Top Threads"
                }), x.jsx("span", {
                    className: "pr-1",
                    children: "ALL"
                })]
            }), x.jsx(Ga, {
                threadList: e == null ? void 0 : e.all
            })]
        }), x.jsx("span", {
            className: "mx-5 border border-theme-silver-chalice"
        }), x.jsxs("div", {
            className: "flex flex-col m-5 space-y-4",
            children: [x.jsxs("div", {
                className: "flex justify-between w-48 cursor-pointer",
                children: [x.jsx("h2", {
                    className: "font-semibold uppercase",
                    children: "Popular Threads"
                }), x.jsx("span", {
                    className: "pr-1",
                    children: "ALL"
                })]
            }), x.jsx(Ga, {
                threadList: e == null ? void 0 : e.popular
            })]
        })]
    })
}
Ga.propTypes = {
    threadList: H1.array
};

function Ga({
    threadList: e
}) {
    return x.jsx("div", {
        className: "flex flex-col space-y-4 w-48 list-none",
        children: e == null ? void 0 : e.slice(0, 10).map(t => x.jsxs(Fn, {
            to: `/${t.name}`,
            className: "flex justify-between w-48 cursor-pointer",
            children: [x.jsxs("div", {
                className: `flex items-center space-x-3 ${!t.logo&&"pl-9"}`,
                children: [t.logo && x.jsx("img", {
                    loading: "lazy",
                    width: "auto",
                    height: "100%",
                    src: t.logo,
                    alt: "",
                    className: "object-cover w-6 h-6 rounded-full"
                }), x.jsx("span", {
                    className: "truncate",
                    children: t.name
                })]
            }), x.jsx("span", {
                className: "p-1 px-2 text-sm font-semibold rounded-md bg-theme-gray-blue",
                children: t.subscriberCount > 9 ? t.subscriberCount : `0${t.subscriberCount}`
            })]
        }, t.name))
    })
}

function GN() {
    return x.jsxs("div", {
        className: "flex flex-1 max-w-full bg-theme-cultured",
        children: [x.jsx(qN, {}), x.jsx(p1, {})]
    })
}
Xd.propTypes = {
    children: he.node,
    redirectTo: he.string
};

function Xd({
    children: e,
    redirectTo: t = "/login"
}) {
    const {
        isAuthenticated: n
    } = fi();
    return n ? e : x.jsx(h1, {
        replace: !0,
        to: t
    })
}

function YN() {
    const [e, t] = S.useState(!1), [n, r] = S.useState(""), [i, s] = S.useState(""), {
        isAuthenticated: o,
        login: a
    } = fi(), l = Ss(), {
        mutate: u,
        status: c,
        error: d,
        reset: h
    } = Jf({
        mutationFn: async () => await ae.post("/api/user/login", {
            email: n,
            password: i
        }).then(f => a(f.data)),
        onSuccess: () => l("/home")
    });
    return S.useEffect(() => (document.title = "Threaddit | Login", () => {
        document.title = "Threaddit"
    })), o ? l("/home") : x.jsxs("div", {
        className: "flex justify-center items-center min-h-screen md:space-x-10 bg-theme-cultured",
        children: [x.jsx(ps, {
            forBanner: !0
        }), x.jsxs("div", {
            className: "flex flex-col p-5 py-10 space-y-10 bg-white rounded-md shadow-xl md:p-5",
            children: [x.jsx("div", {
                className: "flex justify-center md:hidden",
                children: x.jsx(ps, {
                    children: x.jsx("h1", {
                        className: "font-mono text-3xl font-bold tracking-tight md:block",
                        children: "Threaddit"
                    })
                })
            }), x.jsx("h1", {
                className: `font-semibold ${c!=="loading"&&"text-2xl "} tracking-wide ${d&&"font-bold uppercase text-theme-orange"}`,
                children: d ? d.response.data.message : c === "loading" ? x.jsx(ui, {
                    forPosts: !0
                }) : "Welcome Back!"
            }), x.jsxs("form", {
                className: "flex flex-col items-center space-y-5 bg-white",
                onSubmit: f => {
                    f == null || f.preventDefault(), u()
                },
                children: [x.jsxs("label", {
                    htmlFor: "email",
                    className: "flex flex-col space-y-1",
                    children: [x.jsx("span", {
                        className: "pl-2 text-sm font-light",
                        children: "Email"
                    }), x.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        required: !0,
                        value: n,
                        onChange: f => {
                            r(f.target.value), h()
                        },
                        className: "px-2 py-2 pr-24 border-b focus:outline-none focus:border-black"
                    })]
                }), x.jsxs("label", {
                    htmlFor: "password",
                    className: "flex flex-col space-y-1",
                    children: [x.jsx("span", {
                        className: "pl-2 text-sm font-light",
                        children: "Password"
                    }), x.jsxs("div", {
                        className: "flex items-center border-b",
                        children: [x.jsx("input", {
                            type: `${e?"text":"password"}`,
                            name: "password",
                            id: "password",
                            className: "px-2 py-2 pr-20 focus:outline-none",
                            required: !0,
                            minLength: 8,
                            value: i,
                            onChange: f => {
                                s(f.target.value), h()
                            }
                        }), e ? x.jsx(Ne, {
                            type: "eye-open",
                            className: "w-6 h-6",
                            onClick: () => t(!e)
                        }) : x.jsx(Ne, {
                            type: "eye-close",
                            className: "w-6 h-6",
                            onClick: () => t(!e)
                        })]
                    })]
                }), x.jsx("button", {
                    type: "submit",
                    disabled: c === "loading",
                    className: "py-2 w-full font-semibold text-white rounded-md bg-theme-orange active:scale-95",
                    children: c === "loading" ? "Logging in..." : "Log in"
                })]
            }), x.jsxs("div", {
                className: "flex justify-between",
                children: [x.jsxs(Fn, {
                    to: "/login",
                    className: "flex font-semibold cursor-pointer group hover:text-theme-orange",
                    children: ["Forgot Password", x.jsx(Ne, {
                        type: "arrow-right",
                        className: "invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"
                    })]
                }), x.jsxs(Fn, {
                    to: "/register",
                    className: "flex font-semibold cursor-pointer hover:text-theme-orange group",
                    children: ["Signup", x.jsx(Ne, {
                        type: "arrow-right",
                        className: "invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"
                    })]
                })]
            })]
        })]
    })
}

function XN() {
    const e = Ss(),
        {
            isAuthenticated: t,
            login: n
        } = fi(),
        [r, i] = S.useState(!1),
        [s, o] = S.useState(""),
        [a, l] = S.useState(""),
        [u, c] = S.useState(""),
        {
            mutate: d,
            error: h,
            status: f
        } = Jf({
            mutationFn: async () => await ae.post("/api/user/register", {
                username: s,
                email: a,
                password: u
            }).then(m => n(m.data)),
            onSuccess: () => e("/home")
        });
    if (S.useEffect(() => (document.title = "Threaddit | Signup", () => {
            document.title = "Threaddit"
        })), t) return e("/home");
    const {
        username: g,
        email: p,
        password: E
    } = h ? h.response.data.errors : {};
    return x.jsxs("div", {
        className: "flex justify-center items-center w-screen h-screen md:space-x-10 bg-theme-cultured",
        onSubmit: m => {
            m.preventDefault(), d()
        },
        children: [x.jsx(ps, {
            forBanner: !0
        }), x.jsxs("div", {
            className: "flex flex-col p-5 py-10 space-y-10 bg-white rounded-md shadow-xl md:p-5",
            children: [x.jsx("div", {
                className: "flex justify-center md:hidden",
                children: x.jsx(ps, {
                    children: x.jsx("h1", {
                        className: "font-mono text-3xl font-bold tracking-tight md:block",
                        children: "Threaddit"
                    })
                })
            }), x.jsx("h1", {
                className: `${f!=="loading"&&"text-2xl"} font-semibold tracking-wide`,
                children: f === "loading" ? x.jsx(ui, {
                    forPosts: !0
                }) : "Welcome Back!"
            }), x.jsxs("form", {
                className: "flex flex-col items-center space-y-5 bg-white",
                children: [x.jsxs("label", {
                    htmlFor: "email",
                    className: "flex flex-col space-y-1",
                    children: [x.jsx("span", {
                        className: "pl-2 text-sm font-light",
                        children: "Username"
                    }), x.jsx("input", {
                        type: "text",
                        name: "username",
                        id: "username",
                        required: !0,
                        value: s,
                        onChange: m => {
                            o(m.target.value)
                        },
                        maxLength: 15,
                        minLength: 4,
                        className: "px-2 py-2 pr-24 border-b focus:outline-none focus:border-black"
                    }), g == null ? void 0 : g.map(m => x.jsx("abbr", {
                        title: m,
                        className: "w-72 text-sm font-semibold no-underline truncate text-theme-orange",
                        children: m
                    }, m))]
                }), x.jsxs("label", {
                    htmlFor: "email",
                    className: "flex flex-col space-y-1",
                    children: [x.jsx("span", {
                        className: "pl-2 text-sm font-light",
                        children: "Email"
                    }), x.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        required: !0,
                        value: a,
                        onChange: m => {
                            l(m.target.value)
                        },
                        className: "px-2 py-2 pr-24 border-b focus:outline-none focus:border-black"
                    }), p == null ? void 0 : p.map(m => x.jsx("aabr", {
                        title: m,
                        className: "w-72 text-sm font-semibold truncate underline-none text-theme-orange",
                        children: m
                    }, m))]
                }), x.jsxs("label", {
                    htmlFor: "password",
                    className: "flex flex-col space-y-1",
                    children: [x.jsx("span", {
                        className: "pl-2 text-sm font-light",
                        children: "Password"
                    }), x.jsxs("div", {
                        className: "flex items-center border-b",
                        children: [x.jsx("input", {
                            type: `${r?"text":"password"}`,
                            name: "password",
                            id: "password",
                            className: "px-2 py-2 pr-20 focus:outline-none",
                            required: !0,
                            value: u,
                            onChange: m => {
                                c(m.target.value)
                            },
                            minLength: 8
                        }), E == null ? void 0 : E.map(m => x.jsx("aabr", {
                            title: m,
                            className: "w-72 text-sm font-semibold truncate underline-none text-theme-orange",
                            children: m
                        }, m)), r ? x.jsx(Ne, {
                            type: "eye-open",
                            className: "w-6 h-6",
                            onClick: () => i(!r)
                        }) : x.jsx(Ne, {
                            type: "eye-close",
                            className: "w-6 h-6",
                            onClick: () => i(!r)
                        })]
                    })]
                }), x.jsx("button", {
                    type: "submit",
                    disabled: f === "loading",
                    className: "py-2 w-full font-semibold text-white rounded-md bg-theme-orange active:scale-95",
                    children: f === "loading" ? "Signing Up..." : "Sign Up"
                })]
            }), x.jsxs("div", {
                className: "flex justify-between",
                children: [x.jsxs(Fn, {
                    to: "/register",
                    className: "flex font-semibold cursor-pointer group hover:text-theme-orange",
                    children: ["Forgot Password", x.jsx(Ne, {
                        type: "arrow-right",
                        className: "invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"
                    })]
                }), x.jsxs(Fn, {
                    to: "/login",
                    className: "flex font-semibold cursor-pointer hover:text-theme-orange group",
                    children: ["Login", x.jsx(Ne, {
                        type: "arrow-right",
                        className: "invisible w-6 h-6 duration-200 group-hover:visible text-theme-orange group-hover:translate-x-1"
                    })]
                })]
            })]
        })]
    })
}
const JN = S.lazy(() => vs(() => import("./Feed-B1kJhorZ.js"), __vite__mapDeps([0, 1, 2]))),
    ZN = S.lazy(() => vs(() => import("./Profile-DCeeu-hL.js"), __vite__mapDeps([3, 1, 2, 4]))),
    eA = S.lazy(() => vs(() => import("./FullPost-CqtkWRCX.js"), __vite__mapDeps([5, 2]))),
    tA = S.lazy(() => vs(() => import("./Inbox-B6ej0djh.js"), [])),
    nA = S.lazy(() => vs(() => import("./SavedPosts-ALI_CJvt.js"), __vite__mapDeps([6, 1, 2]))),
    rA = S.lazy(() => vs(() => import("./SubThread-9-RmU2K9.js"), __vite__mapDeps([7, 1, 2]))),
    iA = k2([{
        path: "/",
        element: x.jsx(QN, {}),
        errorElement: x.jsx(Vw, {}),
        children: [{
            path: "/",
            element: x.jsx(GN, {}),
            children: [{
                path: "/",
                element: x.jsx(h1, {
                    to: "/all"
                })
            }, {
                path: "/:feedName",
                element: x.jsx(JN, {})
            }, {
                path: "/post/:postId",
                element: x.jsx(eA, {})
            }]
        }, {
            path: "/u/:username",
            element: x.jsx(ZN, {})
        }, {
            path: "/t/:threadName",
            element: x.jsx(rA, {})
        }, {
            path: "/saved",
            element: x.jsx(Xd, {
                children: x.jsx(nA, {})
            })
        }, {
            path: "/inbox",
            element: x.jsx(Xd, {
                children: x.jsx(tA, {})
            })
        }]
    }, {
        path: "/login",
        element: x.jsx(YN, {})
    }, {
        path: "/register",
        element: x.jsx(XN, {})
    }]),
    sA = new WP({
        defaultOptions: {
            queries: {
                staleTime: 12e4
            }
        }
    });

function oA() {
    return x.jsxs(YP, {
        client: sA,
        children: [x.jsx(uC, {
            initialIsOpen: !1
        }), x.jsx(K1, {
            children: x.jsx(S.Suspense, {
                fallback: x.jsx(ui, {}),
                children: x.jsx(M2, {
                    router: iA,
                    fallbackElement: x.jsx(ui, {})
                })
            })
        })]
    })
}
pc.createRoot(document.getElementById("root")).render(x.jsx(oA, {}));
export {
    fi as A, pA as B, ui as L, zh as M, gw as N, he as P, KP as Q, Ne as S, vs as _, hA as a, qo as b, Uh as c, ae as d, Xf as e, No as f, zb as g, Jf as h, Fn as i, x as j, KN as k, HP as l, Ab as m, cA as n, dA as o, lC as p, mA as q, S as r, uA as s, H1 as t, Ss as u, lA as v, Jd as w, gn as x, Bb as y, _w as z
};

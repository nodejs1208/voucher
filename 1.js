function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function hexToRgb(t) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    t = t.replace(e, function(t, e, n, r) {
        return e + e + n + n + r + r
    });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return n ? {
        r: parseInt(n[1], 16),
        g: parseInt(n[2], 16),
        b: parseInt(n[3], 16)
    } : null
}

function clamp(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function isInArray(t, e) {
    return e.indexOf(t) > -1
}! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
}(this, function() {
    var t, e, n = Array,
        r = n.prototype,
        i = Object,
        o = i.prototype,
        a = Function,
        s = a.prototype,
        u = String,
        l = u.prototype,
        c = Number,
        f = c.prototype,
        p = r.slice,
        h = r.splice,
        d = r.push,
        v = r.unshift,
        m = r.concat,
        y = r.join,
        g = s.call,
        b = s.apply,
        x = Math.max,
        w = Math.min,
        _ = o.toString,
        T = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
        S = Function.prototype.toString,
        C = /^\s*class /,
        k = function(t) {
            try {
                var e = S.call(t),
                    n = e.replace(/\/\/.*\n/g, ""),
                    r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                    i = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return C.test(i)
            } catch (o) {
                return !1
            }
        },
        E = function(t) {
            try {
                return k(t) ? !1 : (S.call(t), !0)
            } catch (e) {
                return !1
            }
        },
        A = "[object Function]",
        j = "[object GeneratorFunction]",
        t = function(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (T) return E(t);
            if (k(t)) return !1;
            var e = _.call(t);
            return e === A || e === j
        },
        O = RegExp.prototype.exec,
        D = function(t) {
            try {
                return O.call(t), !0
            } catch (e) {
                return !1
            }
        },
        F = "[object RegExp]";
    e = function(t) {
        return "object" != typeof t ? !1 : T ? D(t) : _.call(t) === F
    };
    var P, I = String.prototype.valueOf,
        N = function(t) {
            try {
                return I.call(t), !0
            } catch (e) {
                return !1
            }
        },
        z = "[object String]";
    P = function(t) {
        return "string" == typeof t ? !0 : "object" != typeof t ? !1 : T ? N(t) : _.call(t) === z
    };
    var L = i.defineProperty && function() {
            try {
                var t = {};
                i.defineProperty(t, "x", {
                    enumerable: !1,
                    value: t
                });
                for (var e in t) return !1;
                return t.x === t
            } catch (n) {
                return !1
            }
        }(),
        M = function(t) {
            var e;
            return e = L ? function(t, e, n, r) {
                    !r && e in t || i.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: n
                    })
                } : function(t, e, n, r) {
                    !r && e in t || (t[e] = n)
                },
                function(n, r, i) {
                    for (var o in r) t.call(r, o) && e(n, o, r[o], i)
                }
        }(o.hasOwnProperty),
        R = function(t) {
            var e = typeof t;
            return null === t || "object" !== e && "function" !== e
        },
        q = c.isNaN || function(t) {
            return t !== t
        },
        W = {
            ToInteger: function(t) {
                var e = +t;
                return q(e) ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
            },
            ToPrimitive: function(e) {
                var n, r, i;
                if (R(e)) return e;
                if (r = e.valueOf, t(r) && (n = r.call(e), R(n))) return n;
                if (i = e.toString, t(i) && (n = i.call(e), R(n))) return n;
                throw new TypeError
            },
            ToObject: function(t) {
                if (null == t) throw new TypeError("can't convert " + t + " to object");
                return i(t)
            },
            ToUint32: function(t) {
                return t >>> 0
            }
        },
        H = function() {};
    M(s, {
        bind: function(e) {
            var n = this;
            if (!t(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var r, o = p.call(arguments, 1), s = function() {
                    if (this instanceof r) {
                        var t = b.call(n, this, m.call(o, p.call(arguments)));
                        return i(t) === t ? t : this
                    }
                    return b.call(n, e, m.call(o, p.call(arguments)))
                }, u = x(0, n.length - o.length), l = [], c = 0; u > c; c++) d.call(l, "$" + c);
            return r = a("binder", "return function (" + y.call(l, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (H.prototype = n.prototype, r.prototype = new H, H.prototype = null), r
        }
    });
    var $ = g.bind(o.hasOwnProperty),
        B = g.bind(o.toString),
        V = g.bind(p),
        U = b.bind(p),
        Y = g.bind(l.slice),
        X = g.bind(l.split),
        G = g.bind(l.indexOf),
        Q = g.bind(d),
        Z = g.bind(o.propertyIsEnumerable),
        J = g.bind(r.sort),
        K = n.isArray || function(t) {
            return "[object Array]" === B(t)
        },
        tt = 1 !== [].unshift(0);
    M(r, {
        unshift: function() {
            return v.apply(this, arguments), this.length
        }
    }, tt), M(n, {
        isArray: K
    });
    var et = i("a"),
        nt = "a" !== et[0] || !(0 in et),
        rt = function(t) {
            var e = !0,
                n = !0,
                r = !1;
            if (t) try {
                t.call("foo", function(t, n, r) {
                    "object" != typeof r && (e = !1)
                }), t.call([1], function() {
                    "use strict";
                    n = "string" == typeof this
                }, "x")
            } catch (i) {
                r = !0
            }
            return !!t && !r && e && n
        };
    M(r, {
        forEach: function(e) {
            var n, r = W.ToObject(this),
                i = nt && P(this) ? X(this, "") : r,
                o = -1,
                a = W.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.forEach callback must be a function");
            for (; ++o < a;) o in i && ("undefined" == typeof n ? e(i[o], o, r) : e.call(n, i[o], o, r))
        }
    }, !rt(r.forEach)), M(r, {
        map: function(e) {
            var r, i = W.ToObject(this),
                o = nt && P(this) ? X(this, "") : i,
                a = W.ToUint32(o.length),
                s = n(a);
            if (arguments.length > 1 && (r = arguments[1]), !t(e)) throw new TypeError("Array.prototype.map callback must be a function");
            for (var u = 0; a > u; u++) u in o && ("undefined" == typeof r ? s[u] = e(o[u], u, i) : s[u] = e.call(r, o[u], u, i));
            return s
        }
    }, !rt(r.map)), M(r, {
        filter: function(e) {
            var n, r, i = W.ToObject(this),
                o = nt && P(this) ? X(this, "") : i,
                a = W.ToUint32(o.length),
                s = [];
            if (arguments.length > 1 && (r = arguments[1]), !t(e)) throw new TypeError("Array.prototype.filter callback must be a function");
            for (var u = 0; a > u; u++) u in o && (n = o[u], ("undefined" == typeof r ? e(n, u, i) : e.call(r, n, u, i)) && Q(s, n));
            return s
        }
    }, !rt(r.filter)), M(r, {
        every: function(e) {
            var n, r = W.ToObject(this),
                i = nt && P(this) ? X(this, "") : r,
                o = W.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.every callback must be a function");
            for (var a = 0; o > a; a++)
                if (a in i && !("undefined" == typeof n ? e(i[a], a, r) : e.call(n, i[a], a, r))) return !1;
            return !0
        }
    }, !rt(r.every)), M(r, {
        some: function(e) {
            var n, r = W.ToObject(this),
                i = nt && P(this) ? X(this, "") : r,
                o = W.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.some callback must be a function");
            for (var a = 0; o > a; a++)
                if (a in i && ("undefined" == typeof n ? e(i[a], a, r) : e.call(n, i[a], a, r))) return !0;
            return !1
        }
    }, !rt(r.some));
    var it = !1;
    r.reduce && (it = "object" == typeof r.reduce.call("es5", function(t, e, n, r) {
        return r
    })), M(r, {
        reduce: function(e) {
            var n = W.ToObject(this),
                r = nt && P(this) ? X(this, "") : n,
                i = W.ToUint32(r.length);
            if (!t(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
            if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
            var o, a = 0;
            if (arguments.length >= 2) o = arguments[1];
            else
                for (;;) {
                    if (a in r) {
                        o = r[a++];
                        break
                    }
                    if (++a >= i) throw new TypeError("reduce of empty array with no initial value")
                }
            for (; i > a; a++) a in r && (o = e(o, r[a], a, n));
            return o
        }
    }, !it);
    var ot = !1;
    r.reduceRight && (ot = "object" == typeof r.reduceRight.call("es5", function(t, e, n, r) {
        return r
    })), M(r, {
        reduceRight: function(e) {
            var n = W.ToObject(this),
                r = nt && P(this) ? X(this, "") : n,
                i = W.ToUint32(r.length);
            if (!t(e)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
            if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
            var o, a = i - 1;
            if (arguments.length >= 2) o = arguments[1];
            else
                for (;;) {
                    if (a in r) {
                        o = r[a--];
                        break
                    }
                    if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                }
            if (0 > a) return o;
            do a in r && (o = e(o, r[a], a, n)); while (a--);
            return o
        }
    }, !ot);
    var at = r.indexOf && -1 !== [0, 1].indexOf(1, 2);
    M(r, {
        indexOf: function(t) {
            var e = nt && P(this) ? X(this, "") : W.ToObject(this),
                n = W.ToUint32(e.length);
            if (0 === n) return -1;
            var r = 0;
            for (arguments.length > 1 && (r = W.ToInteger(arguments[1])), r = r >= 0 ? r : x(0, n + r); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }
    }, at);
    var st = r.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
    M(r, {
        lastIndexOf: function(t) {
            var e = nt && P(this) ? X(this, "") : W.ToObject(this),
                n = W.ToUint32(e.length);
            if (0 === n) return -1;
            var r = n - 1;
            for (arguments.length > 1 && (r = w(r, W.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
                if (r in e && t === e[r]) return r;
            return -1
        }
    }, st);
    var ut = function() {
        var t = [1, 2],
            e = t.splice();
        return 2 === t.length && K(e) && 0 === e.length
    }();
    M(r, {
        splice: function(t, e) {
            return 0 === arguments.length ? [] : h.apply(this, arguments)
        }
    }, !ut);
    var lt = function() {
        var t = {};
        return r.splice.call(t, 0, 0, 1), 1 === t.length
    }();
    M(r, {
        splice: function(t, e) {
            if (0 === arguments.length) return [];
            var n = arguments;
            return this.length = x(W.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof e && (n = V(arguments), n.length < 2 ? Q(n, this.length - t) : n[1] = W.ToInteger(e)), h.apply(this, n)
        }
    }, !lt);
    var ct = function() {
            var t = new n(1e5);
            return t[8] = "x", t.splice(1, 1), 7 === t.indexOf("x")
        }(),
        ft = function() {
            var t = 256,
                e = [];
            return e[t] = "a", e.splice(t + 1, 0, "b"), "a" === e[t]
        }();
    M(r, {
        splice: function(t, e) {
            for (var n, r = W.ToObject(this), i = [], o = W.ToUint32(r.length), a = W.ToInteger(t), s = 0 > a ? x(o + a, 0) : w(a, o), l = w(x(W.ToInteger(e), 0), o - s), c = 0; l > c;) n = u(s + c), $(r, n) && (i[c] = r[n]), c += 1;
            var f, p = V(arguments, 2),
                h = p.length;
            if (l > h) {
                c = s;
                for (var d = o - l; d > c;) n = u(c + l), f = u(c + h), $(r, n) ? r[f] = r[n] : delete r[f], c += 1;
                c = o;
                for (var v = o - l + h; c > v;) delete r[c - 1], c -= 1
            } else if (h > l)
                for (c = o - l; c > s;) n = u(c + l - 1), f = u(c + h - 1), $(r, n) ? r[f] = r[n] : delete r[f], c -= 1;
            c = s;
            for (var m = 0; m < p.length; ++m) r[c] = p[m], c += 1;
            return r.length = o - l + h, i
        }
    }, !ct || !ft);
    var pt, ht = r.join;
    try {
        pt = "1,2,3" !== Array.prototype.join.call("123", ",")
    } catch (dt) {
        pt = !0
    }
    pt && M(r, {
        join: function(t) {
            var e = "undefined" == typeof t ? "," : t;
            return ht.call(P(this) ? X(this, "") : this, e)
        }
    }, pt);
    var vt = "1,2" !== [1, 2].join(void 0);
    vt && M(r, {
        join: function(t) {
            var e = "undefined" == typeof t ? "," : t;
            return ht.call(this, e)
        }
    }, vt);
    var mt = function(t) {
            for (var e = W.ToObject(this), n = W.ToUint32(e.length), r = 0; r < arguments.length;) e[n + r] = arguments[r], r += 1;
            return e.length = n + r, n + r
        },
        yt = function() {
            var t = {},
                e = Array.prototype.push.call(t, void 0);
            return 1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !$(t, 0)
        }();
    M(r, {
        push: function(t) {
            return K(this) ? d.apply(this, arguments) : mt.apply(this, arguments)
        }
    }, yt);
    var gt = function() {
        var t = [],
            e = t.push(void 0);
        return 1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !$(t, 0)
    }();
    M(r, {
        push: mt
    }, gt), M(r, {
        slice: function(t, e) {
            var n = P(this) ? X(this, "") : this;
            return U(n, arguments)
        }
    }, nt);
    var bt = function() {
            try {
                return [1, 2].sort(null), [1, 2].sort({}), !0
            } catch (t) {}
            return !1
        }(),
        xt = function() {
            try {
                return [1, 2].sort(/a/), !1
            } catch (t) {}
            return !0
        }(),
        wt = function() {
            try {
                return [1, 2].sort(void 0), !0
            } catch (t) {}
            return !1
        }();
    M(r, {
        sort: function(e) {
            if ("undefined" == typeof e) return J(this);
            if (!t(e)) throw new TypeError("Array.prototype.sort callback must be a function");
            return J(this, e)
        }
    }, bt || !wt || !xt);
    var _t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        Tt = function() {}.propertyIsEnumerable("prototype"),
        St = !$("x", "0"),
        Ct = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        },
        kt = {
            $window: !0,
            $console: !0,
            $parent: !0,
            $self: !0,
            $frame: !0,
            $frames: !0,
            $frameElement: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $external: !0
        },
        Et = function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                !kt["$" + t] && $(window, t) && null !== window[t] && "object" == typeof window[t] && Ct(window[t])
            } catch (e) {
                return !0
            }
            return !1
        }(),
        At = function(t) {
            if ("undefined" == typeof window || !Et) return Ct(t);
            try {
                return Ct(t)
            } catch (e) {
                return !1
            }
        },
        jt = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        Ot = jt.length,
        Dt = function(t) {
            return "[object Arguments]" === B(t)
        },
        Ft = function(e) {
            return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && !K(e) && t(e.callee)
        },
        Pt = Dt(arguments) ? Dt : Ft;
    M(i, {
        keys: function(e) {
            var n = t(e),
                r = Pt(e),
                i = null !== e && "object" == typeof e,
                o = i && P(e);
            if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
            var a = [],
                s = Tt && n;
            if (o && St || r)
                for (var l = 0; l < e.length; ++l) Q(a, u(l));
            if (!r)
                for (var c in e) s && "prototype" === c || !$(e, c) || Q(a, u(c));
            if (_t)
                for (var f = At(e), p = 0; Ot > p; p++) {
                    var h = jt[p];
                    f && "constructor" === h || !$(e, h) || Q(a, h)
                }
            return a
        }
    });
    var It = i.keys && function() {
            return 2 === i.keys(arguments).length
        }(1, 2),
        Nt = i.keys && function() {
            var t = i.keys(arguments);
            return 1 !== arguments.length || 1 !== t.length || 1 !== t[0]
        }(1),
        zt = i.keys;
    M(i, {
        keys: function(t) {
            return zt(Pt(t) ? V(t) : t)
        }
    }, !It || Nt);
    var Lt, Mt, Rt = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
        qt = new Date(-0x55d318d56a724),
        Wt = new Date(14496624e5),
        Ht = "Mon, 01 Jan -45875 11:59:59 GMT" !== qt.toUTCString(),
        $t = qt.getTimezoneOffset(); - 720 > $t ? (Lt = "Tue Jan 02 -45875" !== qt.toDateString(), Mt = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Wt.toString())) : (Lt = "Mon Jan 01 -45875" !== qt.toDateString(), Mt = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Wt.toString()));
    var Bt = g.bind(Date.prototype.getFullYear),
        Vt = g.bind(Date.prototype.getMonth),
        Ut = g.bind(Date.prototype.getDate),
        Yt = g.bind(Date.prototype.getUTCFullYear),
        Xt = g.bind(Date.prototype.getUTCMonth),
        Gt = g.bind(Date.prototype.getUTCDate),
        Qt = g.bind(Date.prototype.getUTCDay),
        Zt = g.bind(Date.prototype.getUTCHours),
        Jt = g.bind(Date.prototype.getUTCMinutes),
        Kt = g.bind(Date.prototype.getUTCSeconds),
        te = g.bind(Date.prototype.getUTCMilliseconds),
        ee = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ne = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        re = function(t, e) {
            return Ut(new Date(e, t, 0))
        };
    M(Date.prototype, {
        getFullYear: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Bt(this);
            return 0 > t && Vt(this) > 11 ? t + 1 : t
        },
        getMonth: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Bt(this),
                e = Vt(this);
            return 0 > t && e > 11 ? 0 : e
        },
        getDate: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Bt(this),
                e = Vt(this),
                n = Ut(this);
            if (0 > t && e > 11) {
                if (12 === e) return n;
                var r = re(0, t + 1);
                return r - n + 1
            }
            return n
        },
        getUTCFullYear: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Yt(this);
            return 0 > t && Xt(this) > 11 ? t + 1 : t
        },
        getUTCMonth: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Yt(this),
                e = Xt(this);
            return 0 > t && e > 11 ? 0 : e
        },
        getUTCDate: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Yt(this),
                e = Xt(this),
                n = Gt(this);
            if (0 > t && e > 11) {
                if (12 === e) return n;
                var r = re(0, t + 1);
                return r - n + 1
            }
            return n
        }
    }, Rt), M(Date.prototype, {
        toUTCString: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Qt(this),
                e = Gt(this),
                n = Xt(this),
                r = Yt(this),
                i = Zt(this),
                o = Jt(this),
                a = Kt(this);
            return ee[t] + ", " + (10 > e ? "0" + e : e) + " " + ne[n] + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > a ? "0" + a : a) + " GMT"
        }
    }, Rt || Ht), M(Date.prototype, {
        toDateString: function() {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = this.getDay(),
                e = this.getDate(),
                n = this.getMonth(),
                r = this.getFullYear();
            return ee[t] + " " + ne[n] + " " + (10 > e ? "0" + e : e) + " " + r
        }
    }, Rt || Lt), (Rt || Mt) && (Date.prototype.toString = function() {
        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
        var t = this.getDay(),
            e = this.getDate(),
            n = this.getMonth(),
            r = this.getFullYear(),
            i = this.getHours(),
            o = this.getMinutes(),
            a = this.getSeconds(),
            s = this.getTimezoneOffset(),
            u = Math.floor(Math.abs(s) / 60),
            l = Math.floor(Math.abs(s) % 60);
        return ee[t] + " " + ne[n] + " " + (10 > e ? "0" + e : e) + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > a ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (10 > u ? "0" + u : u) + (10 > l ? "0" + l : l)
    }, L && i.defineProperty(Date.prototype, "toString", {
        configurable: !0,
        enumerable: !1,
        writable: !0
    }));
    var ie = -621987552e5,
        oe = "-000001",
        ae = Date.prototype.toISOString && -1 === new Date(ie).toISOString().indexOf(oe),
        se = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
        ue = g.bind(Date.prototype.getTime);
    M(Date.prototype, {
        toISOString: function() {
            if (!isFinite(this) || !isFinite(ue(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
            var t = Yt(this),
                e = Xt(this);
            t += Math.floor(e / 12), e = (e % 12 + 12) % 12;
            var n = [e + 1, Gt(this), Zt(this), Jt(this), Kt(this)];
            t = (0 > t ? "-" : t > 9999 ? "+" : "") + Y("00000" + Math.abs(t), t >= 0 && 9999 >= t ? -4 : -6);
            for (var r = 0; r < n.length; ++r) n[r] = Y("00" + n[r], -2);
            return t + "-" + V(n, 0, 2).join("-") + "T" + V(n, 2).join(":") + "." + Y("000" + te(this), -3) + "Z"
        }
    }, ae || se);
    var le = function() {
        try {
            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(ie).toJSON().indexOf(oe) && Date.prototype.toJSON.call({
                toISOString: function() {
                    return !0
                }
            })
        } catch (t) {
            return !1
        }
    }();
    le || (Date.prototype.toJSON = function(e) {
        var n = i(this),
            r = W.ToPrimitive(n);
        if ("number" == typeof r && !isFinite(r)) return null;
        var o = n.toISOString;
        if (!t(o)) throw new TypeError("toISOString property is not callable");
        return o.call(n)
    });
    var ce = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
        fe = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
        pe = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (pe || fe || !ce) {
        var he = Math.pow(2, 31) - 1,
            de = q(new Date(1970, 0, 1, 0, 0, 0, he + 1).getTime());
        Date = function(t) {
            var e = function(n, r, i, o, a, s, l) {
                    var c, f = arguments.length;
                    if (this instanceof t) {
                        var p = s,
                            h = l;
                        if (de && f >= 7 && l > he) {
                            var d = Math.floor(l / he) * he,
                                v = Math.floor(d / 1e3);
                            p += v, h -= 1e3 * v
                        }
                        c = 1 === f && u(n) === n ? new t(e.parse(n)) : f >= 7 ? new t(n, r, i, o, a, p, h) : f >= 6 ? new t(n, r, i, o, a, p) : f >= 5 ? new t(n, r, i, o, a) : f >= 4 ? new t(n, r, i, o) : f >= 3 ? new t(n, r, i) : f >= 2 ? new t(n, r) : f >= 1 ? new t(n instanceof t ? +n : n) : new t
                    } else c = t.apply(this, arguments);
                    return R(c) || M(c, {
                        constructor: e
                    }, !0), c
                },
                n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                i = function(t, e) {
                    var n = e > 1 ? 1 : 0;
                    return r[e] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
                },
                o = function(e) {
                    var n = 0,
                        r = e;
                    if (de && r > he) {
                        var i = Math.floor(r / he) * he,
                            o = Math.floor(i / 1e3);
                        n += o, r -= 1e3 * o
                    }
                    return c(new t(1970, 0, 1, 0, 0, n, r))
                };
            for (var a in t) $(t, a) && (e[a] = t[a]);
            M(e, {
                now: t.now,
                UTC: t.UTC
            }, !0), e.prototype = t.prototype, M(e.prototype, {
                constructor: e
            }, !0);
            var s = function(e) {
                var r = n.exec(e);
                if (r) {
                    var a, s = c(r[1]),
                        u = c(r[2] || 1) - 1,
                        l = c(r[3] || 1) - 1,
                        f = c(r[4] || 0),
                        p = c(r[5] || 0),
                        h = c(r[6] || 0),
                        d = Math.floor(1e3 * c(r[7] || 0)),
                        v = Boolean(r[4] && !r[8]),
                        m = "-" === r[9] ? 1 : -1,
                        y = c(r[10] || 0),
                        g = c(r[11] || 0),
                        b = p > 0 || h > 0 || d > 0;
                    return (b ? 24 : 25) > f && 60 > p && 60 > h && 1e3 > d && u > -1 && 12 > u && 24 > y && 60 > g && l > -1 && l < i(s, u + 1) - i(s, u) && (a = 60 * (24 * (i(s, u) + l) + f + y * m), a = 1e3 * (60 * (a + p + g * m) + h) + d, v && (a = o(a)), a >= -864e13 && 864e13 >= a) ? a : NaN
                }
                return t.parse.apply(this, arguments)
            };
            return M(e, {
                parse: s
            }), e
        }(Date)
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    var ve = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
        me = {
            base: 1e7,
            size: 6,
            data: [0, 0, 0, 0, 0, 0],
            multiply: function(t, e) {
                for (var n = -1, r = e; ++n < me.size;) r += t * me.data[n], me.data[n] = r % me.base, r = Math.floor(r / me.base)
            },
            divide: function(t) {
                for (var e = me.size, n = 0; --e >= 0;) n += me.data[e], me.data[e] = Math.floor(n / t), n = n % t * me.base
            },
            numToString: function() {
                for (var t = me.size, e = ""; --t >= 0;)
                    if ("" !== e || 0 === t || 0 !== me.data[t]) {
                        var n = u(me.data[t]);
                        "" === e ? e = n : e += Y("0000000", 0, 7 - n.length) + n
                    }
                return e
            },
            pow: function ze(t, e, n) {
                return 0 === e ? n : e % 2 === 1 ? ze(t, e - 1, n * t) : ze(t * t, e / 2, n)
            },
            log: function(t) {
                for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                for (; n >= 2;) e += 1, n /= 2;
                return e
            }
        },
        ye = function(t) {
            var e, n, r, i, o, a, s, l;
            if (e = c(t), e = q(e) ? 0 : Math.floor(e), 0 > e || e > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
            if (n = c(this), q(n)) return "NaN";
            if (-1e21 >= n || n >= 1e21) return u(n);
            if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21)
                if (o = me.log(n * me.pow(2, 69, 1)) - 69, a = 0 > o ? n * me.pow(2, -o, 1) : n / me.pow(2, o, 1), a *= 4503599627370496, o = 52 - o, o > 0) {
                    for (me.multiply(0, a), s = e; s >= 7;) me.multiply(1e7, 0), s -= 7;
                    for (me.multiply(me.pow(10, s, 1), 0), s = o - 1; s >= 23;) me.divide(1 << 23), s -= 23;
                    me.divide(1 << s), me.multiply(1, 1), me.divide(2), i = me.numToString()
                } else me.multiply(0, a), me.multiply(1 << -o, 0), i = me.numToString() + Y("0.00000000000000000000", 2, 2 + e);
            return e > 0 ? (l = i.length, i = e >= l ? r + Y("0.0000000000000000000", 0, e - l + 2) + i : r + Y(i, 0, l - e) + "." + Y(i, l - e)) : i = r + i, i
        };
    M(f, {
        toFixed: ye
    }, ve);
    var ge = function() {
            try {
                return "1" === 1..toPrecision(void 0)
            } catch (t) {
                return !0
            }
        }(),
        be = f.toPrecision;
    M(f, {
        toPrecision: function(t) {
            return "undefined" == typeof t ? be.call(this) : be.call(this, t)
        }
    }, ge), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
        var t = "undefined" == typeof /()??/.exec("")[1],
            n = Math.pow(2, 32) - 1;
        l.split = function(r, i) {
            var o = String(this);
            if ("undefined" == typeof r && 0 === i) return [];
            if (!e(r)) return X(this, r, i);
            var a, s, u, l, c = [],
                f = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                p = 0,
                h = new RegExp(r.source, f + "g");
            t || (a = new RegExp("^" + h.source + "$(?!\\s)", f));
            var v = "undefined" == typeof i ? n : W.ToUint32(i);
            for (s = h.exec(o); s && (u = s.index + s[0].length, !(u > p && (Q(c, Y(o, p, s.index)), !t && s.length > 1 && s[0].replace(a, function() {
                    for (var t = 1; t < arguments.length - 2; t++) "undefined" == typeof arguments[t] && (s[t] = void 0)
                }), s.length > 1 && s.index < o.length && d.apply(c, V(s, 1)), l = s[0].length, p = u, c.length >= v)));) h.lastIndex === s.index && h.lastIndex++, s = h.exec(o);
            return p === o.length ? !l && h.test("") || Q(c, "") : Q(c, Y(o, p)), c.length > v ? V(c, 0, v) : c
        }
    }() : "0".split(void 0, 0).length && (l.split = function(t, e) {
        return "undefined" == typeof t && 0 === e ? [] : X(this, t, e)
    });
    var xe = l.replace,
        we = function() {
            var t = [];
            return "x".replace(/x(.)?/g, function(e, n) {
                Q(t, n)
            }), 1 === t.length && "undefined" == typeof t[0]
        }();
    we || (l.replace = function(n, r) {
        var i = t(r),
            o = e(n) && /\)[*?]/.test(n.source);
        if (i && o) {
            var a = function(t) {
                var e = arguments.length,
                    i = n.lastIndex;
                n.lastIndex = 0;
                var o = n.exec(t) || [];
                return n.lastIndex = i, Q(o, arguments[e - 2], arguments[e - 1]), r.apply(this, o)
            };
            return xe.call(this, n, a)
        }
        return xe.call(this, n, r)
    });
    var _e = l.substr,
        Te = "".substr && "b" !== "0b".substr(-1);
    M(l, {
        substr: function(t, e) {
            var n = t;
            return 0 > t && (n = x(this.length + t, 0)), _e.call(this, n, e)
        }
    }, Te);
    var Se = "	\n\x0B\f\r 혻���롡���곣�귘�꺿�꾟�끸�녳�뉍�댿�됤�듼��걼��\u2028\u2029\ufeff",
        Ce = "��",
        ke = "[" + Se + "]",
        Ee = new RegExp("^" + ke + ke + "*"),
        Ae = new RegExp(ke + ke + "*$"),
        je = l.trim && (Se.trim() || !Ce.trim());
    M(l, {
        trim: function() {
            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
            return u(this).replace(Ee, "").replace(Ae, "")
        }
    }, je);
    var Oe = g.bind(String.prototype.trim),
        De = l.lastIndexOf && -1 !== "abc�귙걚".lastIndexOf("�귙걚", 2);
    M(l, {
        lastIndexOf: function(t) {
            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
            for (var e = u(this), n = u(t), r = arguments.length > 1 ? c(arguments[1]) : NaN, i = q(r) ? 1 / 0 : W.ToInteger(r), o = w(x(i, 0), e.length), a = n.length, s = o + a; s > 0;) {
                s = x(0, s - a);
                var l = G(Y(e, s, o + a), n);
                if (-1 !== l) return s + l
            }
            return -1
        }
    }, De);
    var Fe = l.lastIndexOf;
    if (M(l, {
            lastIndexOf: function(t) {
                return Fe.apply(this, arguments)
            }
        }, 1 !== l.lastIndexOf.length), 8 === parseInt(Se + "08") && 22 === parseInt(Se + "0x16") || (parseInt = function(t) {
            var e = /^[\-+]?0[xX]/;
            return function(n, r) {
                var i = Oe(n),
                    o = c(r) || (e.test(i) ? 16 : 10);
                return t(i, o)
            }
        }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(t) {
            return function(e) {
                var n = Oe(e),
                    r = t(n);
                return 0 === r && "-" === Y(n, 0, 1) ? -0 : r
            }
        }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
        var Pe = function() {
            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
            var t = this.name;
            "undefined" == typeof t ? t = "Error" : "string" != typeof t && (t = u(t));
            var e = this.message;
            return "undefined" == typeof e ? e = "" : "string" != typeof e && (e = u(e)), t ? e ? t + ": " + e : t : e
        };
        Error.prototype.toString = Pe
    }
    if (L) {
        var Ie = function(t, e) {
            if (Z(t, e)) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                n.enumerable = !1, Object.defineProperty(t, e, n)
            }
        };
        Ie(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Ie(Error.prototype, "name")
    }
    if ("/a/gim" !== String(/a/gim)) {
        var Ne = function() {
            var t = "/" + this.source + "/";
            return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), t
        };
        RegExp.prototype.toString = Ne
    }
}),
function() {
    function t(t, e) {
        return t.set(e[0], e[1]), t
    }

    function e(t, e) {
        return t.add(e), t
    }

    function n(t, e, n) {
        var r = n.length;
        switch (r) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }

    function r(t, e, n, r) {
        for (var i = -1, o = t.length; ++i < o;) {
            var a = t[i];
            e(r, a, n(a), t)
        }
        return r
    }

    function i(t, e) {
        for (var n = -1, r = t.length, i = -1, o = e.length, a = Array(r + o); ++n < r;) a[n] = t[n];
        for (; ++i < o;) a[n++] = e[i];
        return a
    }

    function o(t, e) {
        for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
        return t
    }

    function a(t, e) {
        for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
        return t
    }

    function s(t, e) {
        for (var n = -1, r = t.length; ++n < r;)
            if (!e(t[n], n, t)) return !1;
        return !0
    }

    function u(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }

    function l(t, e) {
        return !!t.length && b(t, e, 0) > -1
    }

    function c(t, e, n) {
        for (var r = -1, i = t.length; ++r < i;)
            if (n(e, t[r])) return !0;
        return !1
    }

    function f(t, e) {
        for (var n = -1, r = t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }

    function p(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }

    function h(t, e, n, r) {
        var i = -1,
            o = t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }

    function d(t, e, n, r) {
        var i = t.length;
        for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
        return n
    }

    function v(t, e) {
        for (var n = -1, r = t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }

    function m(t, e, n) {
        for (var r = -1, i = t.length; ++r < i;) {
            var o = t[r],
                a = e(o);
            if (null != a && (s === Q ? a === a : n(a, s))) var s = a,
                u = o
        }
        return u
    }

    function y(t, e, n, r) {
        var i;
        return n(t, function(t, n, o) {
            return e(t, n, o) ? (i = r ? n : t, !1) : void 0
        }), i
    }

    function g(t, e, n) {
        for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;)
            if (e(t[i], i, t)) return i;
        return -1
    }

    function b(t, e, n) {
        if (e !== e) return R(t, n);
        for (var r = n - 1, i = t.length; ++r < i;)
            if (t[r] === e) return r;
        return -1
    }

    function x(t, e, n, r) {
        for (var i = n - 1, o = t.length; ++i < o;)
            if (r(t[i], e)) return i;
        return -1
    }

    function w(t, e) {
        var n = t ? t.length : 0;
        return n ? S(t, e) / n : St
    }

    function _(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }

    function T(t, e) {
        var n = t.length;
        for (t.sort(e); n--;) t[n] = t[n].value;
        return t
    }

    function S(t, e) {
        for (var n, r = -1, i = t.length; ++r < i;) {
            var o = e(t[r]);
            o !== Q && (n = n === Q ? o : n + o)
        }
        return n
    }

    function C(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }

    function k(t, e) {
        return f(e, function(e) {
            return [e, t[e]]
        })
    }

    function E(t) {
        return function(e) {
            return t(e)
        }
    }

    function A(t, e) {
        return f(e, function(e) {
            return t[e]
        })
    }

    function j(t, e) {
        for (var n = -1, r = t.length; ++n < r && b(e, t[n], 0) > -1;);
        return n
    }

    function O(t, e) {
        for (var n = t.length; n-- && b(e, t[n], 0) > -1;);
        return n
    }

    function D(t) {
        return t && t.Object === Object ? t : null
    }

    function F(t, e) {
        if (t !== e) {
            var n = null === t,
                r = t === Q,
                i = t === t,
                o = null === e,
                a = e === Q,
                s = e === e;
            if (t > e && !o || !i || n && !a && s || r && s) return 1;
            if (e > t && !n || !s || o && !r && i || a && i) return -1
        }
        return 0
    }

    function P(t, e, n) {
        for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length; ++r < a;) {
            var u = F(i[r], o[r]);
            if (u) {
                if (r >= s) return u;
                var l = n[r];
                return u * ("desc" == l ? -1 : 1)
            }
        }
        return t.index - e.index
    }

    function I(t, e) {
        for (var n = t.length, r = 0; n--;) t[n] === e && r++;
        return r
    }

    function N(t) {
        return function(e, n) {
            var r;
            return e === Q && n === Q ? 0 : (e !== Q && (r = e), n !== Q && (r = r === Q ? n : t(r, n)), r)
        }
    }

    function z(t) {
        return Tn[t]
    }

    function L(t) {
        return Sn[t]
    }

    function M(t) {
        return "\\" + En[t]
    }

    function R(t, e, n) {
        for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
            var o = t[i];
            if (o !== o) return i
        }
        return -1
    }

    function q(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "")
        } catch (n) {}
        return e
    }

    function W(t, e) {
        return t = "number" == typeof t || Ae.test(t) ? +t : -1, e = null == e ? _t : e, t > -1 && t % 1 == 0 && e > t
    }

    function H(t) {
        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
        return n
    }

    function $(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }

    function B(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            a !== e && a !== et || (t[n] = et, o[i++] = n)
        }
        return o
    }

    function V(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }

    function U(t) {
        if (!t || !vn.test(t)) return t.length;
        for (var e = dn.lastIndex = 0; dn.test(t);) e++;
        return e
    }

    function Y(t) {
        return t.match(dn)
    }

    function X(t) {
        return Cn[t]
    }

    function G(D) {
        function Ae(t) {
            if (es(t) && !$c(t) && !(t instanceof Ie)) {
                if (t instanceof Pe) return t;
                if (sl.call(t, "__wrapped__")) return Ui(t)
            }
            return new Pe(t)
        }

        function Fe() {}

        function Pe(t, e) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = Q
        }

        function Ie(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ct, this.__views__ = []
        }

        function Ne() {
            var t = new Ie(this.__wrapped__);
            return t.__actions__ = Ur(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ur(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ur(this.__views__), t
        }

        function ze() {
            if (this.__filtered__) {
                var t = new Ie(this);
                t.__dir__ = -1, t.__filtered__ = !0
            } else t = this.clone(), t.__dir__ *= -1;
            return t
        }

        function Le() {
            var t = this.__wrapped__.value(),
                e = this.__dir__,
                n = $c(t),
                r = 0 > e,
                i = n ? t.length : 0,
                o = Ai(0, i, this.__views__),
                a = o.start,
                s = o.end,
                u = s - a,
                l = r ? s : a - 1,
                c = this.__iteratees__,
                f = c.length,
                p = 0,
                h = Fl(u, this.__takeCount__);
            if (!n || J > i || i == u && h == u) return Pr(t, this.__actions__);
            var d = [];
            t: for (; u-- && h > p;) {
                l += e;
                for (var v = -1, m = t[l]; ++v < f;) {
                    var y = c[v],
                        g = y.iteratee,
                        b = y.type,
                        x = g(m);
                    if (b == bt) m = x;
                    else if (!x) {
                        if (b == gt) continue t;
                        break t
                    }
                }
                d[p++] = m
            }
            return d
        }

        function Me() {}

        function Re(t, e) {
            return We(t, e) && delete t[e]
        }

        function qe(t, e) {
            if (Wl) {
                var n = t[e];
                return n === tt ? Q : n
            }
            return sl.call(t, e) ? t[e] : Q
        }

        function We(t, e) {
            return Wl ? t[e] !== Q : sl.call(t, e)
        }

        function He(t, e, n) {
            t[e] = Wl && n === Q ? tt : n
        }

        function $e(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function Be() {
            this.__data__ = {
                hash: new Me,
                map: Ll ? new Ll : [],
                string: new Me
            }
        }

        function Ve(t) {
            var e = this.__data__;
            return zi(t) ? Re("string" == typeof t ? e.string : e.hash, t) : Ll ? e.map["delete"](t) : on(e.map, t)
        }

        function Ue(t) {
            var e = this.__data__;
            return zi(t) ? qe("string" == typeof t ? e.string : e.hash, t) : Ll ? e.map.get(t) : an(e.map, t)
        }

        function Ye(t) {
            var e = this.__data__;
            return zi(t) ? We("string" == typeof t ? e.string : e.hash, t) : Ll ? e.map.has(t) : sn(e.map, t)
        }

        function Xe(t, e) {
            var n = this.__data__;
            return zi(t) ? He("string" == typeof t ? n.string : n.hash, t, e) : Ll ? n.map.set(t, e) : ln(n.map, t, e), this
        }

        function Ge(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.__data__ = new $e; ++e < n;) this.push(t[e])
        }

        function Qe(t, e) {
            var n = t.__data__;
            if (zi(e)) {
                var r = n.__data__,
                    i = "string" == typeof e ? r.string : r.hash;
                return i[e] === tt
            }
            return n.has(e)
        }

        function Ze(t) {
            var e = this.__data__;
            if (zi(t)) {
                var n = e.__data__,
                    r = "string" == typeof t ? n.string : n.hash;
                r[t] = tt
            } else e.set(t, tt)
        }

        function Je(t) {
            var e = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function Ke() {
            this.__data__ = {
                array: [],
                map: null
            }
        }

        function tn(t) {
            var e = this.__data__,
                n = e.array;
            return n ? on(n, t) : e.map["delete"](t)
        }

        function en(t) {
            var e = this.__data__,
                n = e.array;
            return n ? an(n, t) : e.map.get(t)
        }

        function nn(t) {
            var e = this.__data__,
                n = e.array;
            return n ? sn(n, t) : e.map.has(t)
        }

        function rn(t, e) {
            var n = this.__data__,
                r = n.array;
            r && (r.length < J - 1 ? ln(r, t, e) : (n.array = null, n.map = new $e(r)));
            var i = n.map;
            return i && i.set(t, e), this
        }

        function on(t, e) {
            var n = un(t, e);
            if (0 > n) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : Sl.call(t, n, 1), !0
        }

        function an(t, e) {
            var n = un(t, e);
            return 0 > n ? Q : t[n][1]
        }

        function sn(t, e) {
            return un(t, e) > -1
        }

        function un(t, e) {
            for (var n = t.length; n--;)
                if (za(t[n][0], e)) return n;
            return -1
        }

        function ln(t, e, n) {
            var r = un(t, e);
            0 > r ? t.push([e, n]) : t[r][1] = n
        }

        function cn(t, e, n, r) {
            return t === Q || za(t, ol[n]) && !sl.call(r, n) ? e : t
        }

        function fn(t, e, n) {
            (n === Q || za(t[e], n)) && ("number" != typeof e || n !== Q || e in t) || (t[e] = n)
        }

        function pn(t, e, n) {
            var r = t[e];
            sl.call(t, e) && za(r, n) && (n !== Q || e in t) || (t[e] = n)
        }

        function dn(t, e, n, r) {
            return Kl(t, function(t, i, o) {
                e(r, t, n(t), o)
            }), r
        }

        function Tn(t, e) {
            return t && Yr(e, Ws(e), t)
        }

        function Sn(t, e) {
            for (var n = -1, r = null == t, i = e.length, o = Array(i); ++n < i;) o[n] = r ? Q : Ms(t, e[n]);
            return o
        }

        function Cn(t) {
            return Ha(t) ? t : []
        }

        function kn(t) {
            return "function" == typeof t ? t : Fu
        }

        function En(t) {
            return "string" == typeof t || vs(t) ? t : t + ""
        }

        function On(t) {
            return $c(t) ? t : lc(t)
        }

        function Dn(t, e, n) {
            return t === t && (n !== Q && (t = n >= t ? t : n), e !== Q && (t = t >= e ? t : e)), t
        }

        function Pn(t, e, n, r, i, a, s) {
            var u;
            if (r && (u = a ? r(t, i, a, s) : r(t)), u !== Q) return u;
            if (!ts(t)) return t;
            var l = $c(t);
            if (l) {
                if (u = Oi(t), !e) return Ur(t, u)
            } else {
                var c = Ei(t),
                    f = c == Pt || c == It;
                if (Bc(t)) return zr(t, e);
                if (c == Lt || c == At || f && !a) {
                    if (q(t)) return a ? t : {};
                    if (u = Di(f ? {} : t), !e) return Gr(t, Tn(u, t))
                } else {
                    if (!_n[c]) return a ? t : {};
                    u = Fi(t, c, Pn, e)
                }
            }
            s || (s = new Je);
            var p = s.get(t);
            if (p) return p;
            if (s.set(t, u), !l) var h = n ? gi(t) : Ws(t);
            return o(h || t, function(i, o) {
                h && (o = i, i = t[o]), pn(u, o, Pn(i, e, n, r, o, t, s))
            }), u
        }

        function In(t) {
            var e = Ws(t),
                n = e.length;
            return function(r) {
                if (null == r) return !n;
                for (var i = n; i--;) {
                    var o = e[i],
                        a = t[o],
                        s = r[o];
                    if (s === Q && !(o in Object(r)) || !a(s)) return !1
                }
                return !0
            }
        }

        function Nn(t) {
            return ts(t) ? wl(t) : {}
        }

        function zn(t, e, n) {
            if ("function" != typeof t) throw new rl(K);
            return Tl(function() {
                t.apply(Q, n)
            }, e)
        }

        function Rn(t, e, n, r) {
            var i = -1,
                o = l,
                a = !0,
                s = t.length,
                u = [],
                p = e.length;
            if (!s) return u;
            n && (e = f(e, E(n))),
                r ? (o = c, a = !1) : e.length >= J && (o = Qe, a = !1, e = new Ge(e));
            t: for (; ++i < s;) {
                var h = t[i],
                    d = n ? n(h) : h;
                if (a && d === d) {
                    for (var v = p; v--;)
                        if (e[v] === d) continue t;
                    u.push(h)
                } else o(e, d, r) || u.push(h)
            }
            return u
        }

        function qn(t, e) {
            var n = !0;
            return Kl(t, function(t, r, i) {
                return n = !!e(t, r, i)
            }), n
        }

        function Wn(t, e, n, r) {
            var i = t.length;
            for (n = Ts(n), 0 > n && (n = -n > i ? 0 : i + n), r = r === Q || r > i ? i : Ts(r), 0 > r && (r += i), r = n > r ? 0 : Ss(r); r > n;) t[n++] = e;
            return t
        }

        function Hn(t, e) {
            var n = [];
            return Kl(t, function(t, r, i) {
                e(t, r, i) && n.push(t)
            }), n
        }

        function $n(t, e, n, r) {
            r || (r = []);
            for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i];
                e > 0 && Ha(a) && (n || $c(a) || Ra(a)) ? e > 1 ? $n(a, e - 1, n, r) : p(r, a) : n || (r[r.length] = a)
            }
            return r
        }

        function Bn(t, e) {
            return t && ec(t, e, Ws)
        }

        function Vn(t, e) {
            return t && nc(t, e, Ws)
        }

        function Un(t, e) {
            return u(e, function(e) {
                return Za(t[e])
            })
        }

        function Yn(t, e) {
            e = Ni(e, t) ? [e] : On(e);
            for (var n = 0, r = e.length; null != t && r > n;) t = t[e[n++]];
            return n && n == r ? t : Q
        }

        function Xn(t, e, n) {
            var r = e(t);
            return $c(t) ? r : p(r, n(t))
        }

        function Gn(t, e) {
            return sl.call(t, e) || "object" == typeof t && e in t && null === Ci(t)
        }

        function Qn(t, e) {
            return e in Object(t)
        }

        function Zn(t, e, n) {
            return t >= Fl(e, n) && t < Dl(e, n)
        }

        function Jn(t, e, n) {
            for (var r = n ? c : l, i = t[0].length, o = t.length, a = o, s = Array(o), u = 1 / 0, p = []; a--;) {
                var h = t[a];
                a && e && (h = f(h, E(e))), u = Fl(h.length, u), s[a] = !n && (e || i >= 120 && h.length >= 120) ? new Ge(a && h) : Q
            }
            h = t[0];
            var d = -1,
                v = s[0];
            t: for (; ++d < i && p.length < u;) {
                var m = h[d],
                    y = e ? e(m) : m;
                if (!(v ? Qe(v, y) : r(p, y, n))) {
                    for (a = o; --a;) {
                        var g = s[a];
                        if (!(g ? Qe(g, y) : r(t[a], y, n))) continue t
                    }
                    v && v.push(y), p.push(m)
                }
            }
            return p
        }

        function Kn(t, e, n, r) {
            return Bn(t, function(t, i, o) {
                e(r, n(t), i, o)
            }), r
        }

        function tr(t, e, r) {
            Ni(e, t) || (e = On(e), t = $i(t, e), e = fo(e));
            var i = null == t ? t : t[e];
            return null == i ? Q : n(i, t, r)
        }

        function er(t, e, n, r, i) {
            return t === e ? !0 : null == t || null == e || !ts(t) && !es(e) ? t !== t && e !== e : nr(t, e, er, n, r, i)
        }

        function nr(t, e, n, r, i, o) {
            var a = $c(t),
                s = $c(e),
                u = jt,
                l = jt;
            a || (u = Ei(t), u = u == At ? Lt : u), s || (l = Ei(e), l = l == At ? Lt : l);
            var c = u == Lt && !q(t),
                f = l == Lt && !q(e),
                p = u == l;
            if (p && !c) return o || (o = new Je), a || ms(t) ? vi(t, e, n, r, i, o) : mi(t, e, u, n, r, i, o);
            if (!(i & ht)) {
                var h = c && sl.call(t, "__wrapped__"),
                    d = f && sl.call(e, "__wrapped__");
                if (h || d) {
                    var v = h ? t.value() : t,
                        m = d ? e.value() : e;
                    return o || (o = new Je), n(v, m, r, i, o)
                }
            }
            return p ? (o || (o = new Je), yi(t, e, n, r, i, o)) : !1
        }

        function rr(t, e, n, r) {
            var i = n.length,
                o = i,
                a = !r;
            if (null == t) return !o;
            for (t = Object(t); i--;) {
                var s = n[i];
                if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
            }
            for (; ++i < o;) {
                s = n[i];
                var u = s[0],
                    l = t[u],
                    c = s[1];
                if (a && s[2]) {
                    if (l === Q && !(u in t)) return !1
                } else {
                    var f = new Je;
                    if (r) var p = r(l, c, u, t, e, f);
                    if (!(p === Q ? er(c, l, r, pt | ht, f) : p)) return !1
                }
            }
            return !0
        }

        function ir(t) {
            return "function" == typeof t ? t : null == t ? Fu : "object" == typeof t ? $c(t) ? lr(t[0], t[1]) : ur(t) : qu(t)
        }

        function or(t) {
            return Ol(Object(t))
        }

        function ar(t) {
            t = null == t ? t : Object(t);
            var e = [];
            for (var n in t) e.push(n);
            return e
        }

        function sr(t, e) {
            var n = -1,
                r = Wa(t) ? Array(t.length) : [];
            return Kl(t, function(t, i, o) {
                r[++n] = e(t, i, o)
            }), r
        }

        function ur(t) {
            var e = _i(t);
            return 1 == e.length && e[0][2] ? qi(e[0][0], e[0][1]) : function(n) {
                return n === t || rr(n, t, e)
            }
        }

        function lr(t, e) {
            return Ni(t) && Ri(e) ? qi(t, e) : function(n) {
                var r = Ms(n, t);
                return r === Q && r === e ? qs(n, t) : er(e, r, Q, pt | ht)
            }
        }

        function cr(t, e, n, r, i) {
            if (t !== e) {
                if (!$c(e) && !ms(e)) var a = Hs(e);
                o(a || e, function(o, s) {
                    if (a && (s = o, o = e[s]), ts(o)) i || (i = new Je), fr(t, e, s, n, cr, r, i);
                    else {
                        var u = r ? r(t[s], o, s + "", t, e, i) : Q;
                        u === Q && (u = o), fn(t, s, u)
                    }
                })
            }
        }

        function fr(t, e, n, r, i, o, a) {
            var s = t[n],
                u = e[n],
                l = a.get(u);
            if (l) return void fn(t, n, l);
            var c = o ? o(s, u, n + "", t, e, a) : Q,
                f = c === Q;
            f && (c = u, $c(u) || ms(u) ? $c(s) ? c = s : Ha(s) ? c = Ur(s) : (f = !1, c = Pn(u, !0)) : cs(u) || Ra(u) ? Ra(s) ? c = ks(s) : !ts(s) || r && Za(s) ? (f = !1, c = Pn(u, !0)) : c = s : f = !1), a.set(u, c), f && i(c, u, r, o, a), a["delete"](u), fn(t, n, c)
        }

        function pr(t, e, n) {
            var r = -1;
            e = f(e.length ? e : [Fu], wi());
            var i = sr(t, function(t, n, i) {
                var o = f(e, function(e) {
                    return e(t)
                });
                return {
                    criteria: o,
                    index: ++r,
                    value: t
                }
            });
            return T(i, function(t, e) {
                return P(t, e, n)
            })
        }

        function hr(t, e) {
            return t = Object(t), h(e, function(e, n) {
                return n in t && (e[n] = t[n]), e
            }, {})
        }

        function dr(t, e) {
            for (var n = -1, r = bi(t), i = r.length, o = {}; ++n < i;) {
                var a = r[n],
                    s = t[a];
                e(s, a) && (o[a] = s)
            }
            return o
        }

        function vr(t) {
            return function(e) {
                return null == e ? Q : e[t]
            }
        }

        function mr(t) {
            return function(e) {
                return Yn(e, t)
            }
        }

        function yr(t, e, n, r) {
            var i = r ? x : b,
                o = -1,
                a = e.length,
                s = t;
            for (n && (s = f(t, E(n))); ++o < a;)
                for (var u = 0, l = e[o], c = n ? n(l) : l;
                    (u = i(s, c, u, r)) > -1;) s !== t && Sl.call(s, u, 1), Sl.call(t, u, 1);
            return t
        }

        function gr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--;) {
                var i = e[n];
                if (r == n || i != o) {
                    var o = i;
                    if (W(i)) Sl.call(t, i, 1);
                    else if (Ni(i, t)) delete t[i];
                    else {
                        var a = On(i),
                            s = $i(t, a);
                        null != s && delete s[fo(a)]
                    }
                }
            }
            return t
        }

        function br(t, e) {
            return t + kl(Il() * (e - t + 1))
        }

        function xr(t, e, n, r) {
            for (var i = -1, o = Dl(Cl((e - t) / (n || 1)), 0), a = Array(o); o--;) a[r ? o : ++i] = t, t += n;
            return a
        }

        function wr(t, e) {
            var n = "";
            if (!t || 1 > e || e > _t) return n;
            do e % 2 && (n += t), e = kl(e / 2), e && (t += t); while (e);
            return n
        }

        function _r(t, e, n, r) {
            e = Ni(e, t) ? [e] : On(e);
            for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                var u = e[i];
                if (ts(s)) {
                    var l = n;
                    if (i != a) {
                        var c = s[u];
                        l = r ? r(c, u, s) : Q, l === Q && (l = null == c ? W(e[i + 1]) ? [] : {} : c)
                    }
                    pn(s, u, l)
                }
                s = s[u]
            }
            return t
        }

        function Tr(t, e, n) {
            var r = -1,
                i = t.length;
            0 > e && (e = -e > i ? 0 : i + e), n = n > i ? i : n, 0 > n && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var o = Array(i); ++r < i;) o[r] = t[r + e];
            return o
        }

        function Sr(t, e) {
            var n;
            return Kl(t, function(t, r, i) {
                return n = e(t, r, i), !n
            }), !!n
        }

        function Cr(t, e, n) {
            var r = 0,
                i = t ? t.length : r;
            if ("number" == typeof e && e === e && Et >= i) {
                for (; i > r;) {
                    var o = r + i >>> 1,
                        a = t[o];
                    (n ? e >= a : e > a) && null !== a ? r = o + 1 : i = o
                }
                return i
            }
            return kr(t, e, Fu, n)
        }

        function kr(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, u = e === Q; o > i;) {
                var l = kl((i + o) / 2),
                    c = n(t[l]),
                    f = c !== Q,
                    p = c === c;
                if (a) var h = p || r;
                else h = s ? p && f && (r || null != c) : u ? p && (r || f) : null == c ? !1 : r ? e >= c : e > c;
                h ? i = l + 1 : o = l
            }
            return Fl(o, kt)
        }

        function Er(t) {
            return Ar(t)
        }

        function Ar(t, e) {
            for (var n = 0, r = t.length, i = t[0], o = e ? e(i) : i, a = o, s = 1, u = [i]; ++n < r;) i = t[n], o = e ? e(i) : i, za(o, a) || (a = o, u[s++] = i);
            return u
        }

        function jr(t, e, n) {
            var r = -1,
                i = l,
                o = t.length,
                a = !0,
                s = [],
                u = s;
            if (n) a = !1, i = c;
            else if (o >= J) {
                var f = e ? null : ic(t);
                if (f) return V(f);
                a = !1, i = Qe, u = new Ge
            } else u = e ? [] : s;
            t: for (; ++r < o;) {
                var p = t[r],
                    h = e ? e(p) : p;
                if (a && h === h) {
                    for (var d = u.length; d--;)
                        if (u[d] === h) continue t;
                    e && u.push(h), s.push(p)
                } else i(u, h, n) || (u !== s && u.push(h), s.push(p))
            }
            return s
        }

        function Or(t, e) {
            e = Ni(e, t) ? [e] : On(e), t = $i(t, e);
            var n = fo(e);
            return null != t && Rs(t, n) ? delete t[n] : !0
        }

        function Dr(t, e, n, r) {
            return _r(t, e, n(Yn(t, e)), r)
        }

        function Fr(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1;
                (r ? o-- : ++o < i) && e(t[o], o, t););
            return n ? Tr(t, r ? 0 : o, r ? o + 1 : i) : Tr(t, r ? o + 1 : 0, r ? i : o)
        }

        function Pr(t, e) {
            var n = t;
            return n instanceof Ie && (n = n.value()), h(e, function(t, e) {
                return e.func.apply(e.thisArg, p([t], e.args))
            }, n)
        }

        function Ir(t, e, n) {
            for (var r = -1, i = t.length; ++r < i;) var o = o ? p(Rn(o, t[r], e, n), Rn(t[r], o, e, n)) : t[r];
            return o && o.length ? jr(o, e, n) : []
        }

        function Nr(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                var s = o > r ? e[r] : Q;
                n(a, t[r], s)
            }
            return a
        }

        function zr(t, e) {
            if (e) return t.slice();
            var n = new t.constructor(t.length);
            return t.copy(n), n
        }

        function Lr(t) {
            var e = new t.constructor(t.byteLength);
            return new ml(e).set(new ml(t)), e
        }

        function Mr(t, e) {
            var n = e ? Lr(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength)
        }

        function Rr(e, n, r) {
            var i = n ? r($(e), !0) : $(e);
            return h(i, t, new e.constructor)
        }

        function qr(t) {
            var e = new t.constructor(t.source, _e.exec(t));
            return e.lastIndex = t.lastIndex, e
        }

        function Wr(t, n, r) {
            var i = n ? r(V(t), !0) : V(t);
            return h(i, e, new t.constructor)
        }

        function Hr(t) {
            return Zl ? Object(Zl.call(t)) : {}
        }

        function $r(t, e) {
            var n = e ? Lr(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        }

        function Br(t, e, n, r) {
            for (var i = -1, o = t.length, a = n.length, s = -1, u = e.length, l = Dl(o - a, 0), c = Array(u + l), f = !r; ++s < u;) c[s] = e[s];
            for (; ++i < a;)(f || o > i) && (c[n[i]] = t[i]);
            for (; l--;) c[s++] = t[i++];
            return c
        }

        function Vr(t, e, n, r) {
            for (var i = -1, o = t.length, a = -1, s = n.length, u = -1, l = e.length, c = Dl(o - s, 0), f = Array(c + l), p = !r; ++i < c;) f[i] = t[i];
            for (var h = i; ++u < l;) f[h + u] = e[u];
            for (; ++a < s;)(p || o > i) && (f[h + n[a]] = t[i++]);
            return f
        }

        function Ur(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
            return e
        }

        function Yr(t, e, n) {
            return Xr(t, e, n)
        }

        function Xr(t, e, n, r) {
            n || (n = {});
            for (var i = -1, o = e.length; ++i < o;) {
                var a = e[i],
                    s = r ? r(n[a], t[a], a, n, t) : t[a];
                pn(n, a, s)
            }
            return n
        }

        function Gr(t, e) {
            return Yr(t, ki(t), e)
        }

        function Qr(t, e) {
            return function(n, i) {
                var o = $c(n) ? r : dn,
                    a = e ? e() : {};
                return o(n, t, wi(i), a)
            }
        }

        function Zr(t) {
            return ka(function(e, n) {
                var r = -1,
                    i = n.length,
                    o = i > 1 ? n[i - 1] : Q,
                    a = i > 2 ? n[2] : Q;
                for (o = "function" == typeof o ? (i--, o) : Q, a && Ii(n[0], n[1], a) && (o = 3 > i ? Q : o, i = 1), e = Object(e); ++r < i;) {
                    var s = n[r];
                    s && t(e, s, r, o)
                }
                return e
            })
        }

        function Jr(t, e) {
            return function(n, r) {
                if (null == n) return n;
                if (!Wa(n)) return t(n, r);
                for (var i = n.length, o = e ? i : -1, a = Object(n);
                    (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }

        function Kr(t) {
            return function(e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), s = a.length; s--;) {
                    var u = a[t ? s : ++i];
                    if (n(o[u], u, o) === !1) break
                }
                return e
            }
        }

        function ti(t, e, n) {
            function r() {
                var e = this && this !== Ln && this instanceof r ? o : t;
                return e.apply(i ? n : this, arguments)
            }
            var i = e & nt,
                o = ri(t);
            return r
        }

        function ei(t) {
            return function(e) {
                e = As(e);
                var n = vn.test(e) ? Y(e) : Q,
                    r = n ? n[0] : e.charAt(0),
                    i = n ? n.slice(1).join("") : e.slice(1);
                return r[t]() + i
            }
        }

        function ni(t) {
            return function(e) {
                return h(Au(uu(e)), t, "")
            }
        }

        function ri(t) {
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = Nn(t.prototype),
                    r = t.apply(n, e);
                return ts(r) ? r : n
            }
        }

        function ii(t, e, r) {
            function i() {
                for (var a = arguments.length, s = Array(a), u = a, l = Si(i); u--;) s[u] = arguments[u];
                var c = 3 > a && s[0] !== l && s[a - 1] !== l ? [] : B(s, l);
                if (a -= c.length, r > a) return pi(t, e, ai, i.placeholder, Q, s, c, Q, Q, r - a);
                var f = this && this !== Ln && this instanceof i ? o : t;
                return n(f, this, s)
            }
            var o = ri(t);
            return i
        }

        function oi(t) {
            return ka(function(e) {
                e = $n(e, 1);
                var n = e.length,
                    r = n,
                    i = Pe.prototype.thru;
                for (t && e.reverse(); r--;) {
                    var o = e[r];
                    if ("function" != typeof o) throw new rl(K);
                    if (i && !a && "wrapper" == xi(o)) var a = new Pe([], !0)
                }
                for (r = a ? r : n; ++r < n;) {
                    o = e[r];
                    var s = xi(o),
                        u = "wrapper" == s ? oc(o) : Q;
                    a = u && Li(u[0]) && u[1] == (lt | ot | st | ct) && !u[4].length && 1 == u[9] ? a[xi(u[0])].apply(a, u[3]) : 1 == o.length && Li(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var t = arguments,
                        r = t[0];
                    if (a && 1 == t.length && $c(r) && r.length >= J) return a.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                    return o
                }
            })
        }

        function ai(t, e, n, r, i, o, a, s, u, l) {
            function c() {
                for (var y = arguments.length, g = y, b = Array(y); g--;) b[g] = arguments[g];
                if (d) var x = Si(c),
                    w = I(b, x);
                if (r && (b = Br(b, r, i, d)), o && (b = Vr(b, o, a, d)), y -= w, d && l > y) {
                    var _ = B(b, x);
                    return pi(t, e, ai, c.placeholder, n, b, _, s, u, l - y)
                }
                var T = p ? n : this,
                    S = h ? T[t] : t;
                return y = b.length, s ? b = Bi(b, s) : v && y > 1 && b.reverse(), f && y > u && (b.length = u), this && this !== Ln && this instanceof c && (S = m || ri(S)), S.apply(T, b)
            }
            var f = e & lt,
                p = e & nt,
                h = e & rt,
                d = e & (ot | at),
                v = e & ft,
                m = h ? Q : ri(t);
            return c
        }

        function si(t, e) {
            return function(n, r) {
                return Kn(n, t, e(r), {})
            }
        }

        function ui(t) {
            return ka(function(e) {
                return e = f($n(e, 1), wi()), ka(function(r) {
                    var i = this;
                    return t(e, function(t) {
                        return n(t, i, r)
                    })
                })
            })
        }

        function li(t, e) {
            e = e === Q ? " " : e + "";
            var n = e.length;
            if (2 > n) return n ? wr(e, t) : e;
            var r = wr(e, Cl(t / U(e)));
            return vn.test(e) ? Y(r).slice(0, t).join("") : r.slice(0, t)
        }

        function ci(t, e, r, i) {
            function o() {
                for (var e = -1, u = arguments.length, l = -1, c = i.length, f = Array(c + u), p = this && this !== Ln && this instanceof o ? s : t; ++l < c;) f[l] = i[l];
                for (; u--;) f[l++] = arguments[++e];
                return n(p, a ? r : this, f)
            }
            var a = e & nt,
                s = ri(t);
            return o
        }

        function fi(t) {
            return function(e, n, r) {
                return r && "number" != typeof r && Ii(e, n, r) && (n = r = Q), e = Cs(e), e = e === e ? e : 0, n === Q ? (n = e, e = 0) : n = Cs(n) || 0, r = r === Q ? n > e ? 1 : -1 : Cs(r) || 0, xr(e, n, r, t)
            }
        }

        function pi(t, e, n, r, i, o, a, s, u, l) {
            var c = e & ot,
                f = s ? Ur(s) : Q,
                p = c ? a : Q,
                h = c ? Q : a,
                d = c ? o : Q,
                v = c ? Q : o;
            e |= c ? st : ut, e &= ~(c ? ut : st), e & it || (e &= ~(nt | rt));
            var m = [t, e, i, d, p, v, h, f, u, l],
                y = n.apply(Q, m);
            return Li(t) && uc(y, m), y.placeholder = r, y
        }

        function hi(t) {
            var e = el[t];
            return function(t, n) {
                if (t = Cs(t), n = Ts(n)) {
                    var r = (As(t) + "e").split("e"),
                        i = e(r[0] + "e" + (+r[1] + n));
                    return r = (As(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                }
                return e(t)
            }
        }

        function di(t, e, n, r, i, o, a, s) {
            var u = e & rt;
            if (!u && "function" != typeof t) throw new rl(K);
            var l = r ? r.length : 0;
            if (l || (e &= ~(st | ut), r = i = Q), a = a === Q ? a : Dl(Ts(a), 0), s = s === Q ? s : Ts(s), l -= i ? i.length : 0, e & ut) {
                var c = r,
                    f = i;
                r = i = Q
            }
            var p = u ? Q : oc(t),
                h = [t, e, n, r, i, c, f, o, a, s];
            if (p && Wi(h, p), t = h[0], e = h[1], n = h[2], r = h[3], i = h[4], s = h[9] = null == h[9] ? u ? 0 : t.length : Dl(h[9] - l, 0), !s && e & (ot | at) && (e &= ~(ot | at)), e && e != nt) d = e == ot || e == at ? ii(t, e, s) : e != st && e != (nt | st) || i.length ? ai.apply(Q, h) : ci(t, e, n, r);
            else var d = ti(t, e, n);
            var v = p ? rc : uc;
            return v(d, h)
        }

        function vi(t, e, n, r, i, o) {
            var a = -1,
                s = i & ht,
                u = i & pt,
                l = t.length,
                c = e.length;
            if (l != c && !(s && c > l)) return !1;
            var f = o.get(t);
            if (f) return f == e;
            var p = !0;
            for (o.set(t, e); ++a < l;) {
                var h = t[a],
                    d = e[a];
                if (r) var m = s ? r(d, h, a, e, t, o) : r(h, d, a, t, e, o);
                if (m !== Q) {
                    if (m) continue;
                    p = !1;
                    break
                }
                if (u) {
                    if (!v(e, function(t) {
                            return h === t || n(h, t, r, i, o)
                        })) {
                        p = !1;
                        break
                    }
                } else if (h !== d && !n(h, d, r, i, o)) {
                    p = !1;
                    break
                }
            }
            return o["delete"](t), p
        }

        function mi(t, e, n, r, i, o, a) {
            switch (n) {
                case Ut:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case Vt:
                    return !(t.byteLength != e.byteLength || !r(new ml(t), new ml(e)));
                case Ot:
                case Dt:
                    return +t == +e;
                case Ft:
                    return t.name == e.name && t.message == e.message;
                case zt:
                    return t != +t ? e != +e : t == +e;
                case Rt:
                case Wt:
                    return t == e + "";
                case Nt:
                    var s = $;
                case qt:
                    var u = o & ht;
                    if (s || (s = V), t.size != e.size && !u) return !1;
                    var l = a.get(t);
                    return l ? l == e : (o |= pt, a.set(t, e), vi(s(t), s(e), r, i, o, a));
                case Ht:
                    if (Zl) return Zl.call(t) == Zl.call(e)
            }
            return !1
        }

        function yi(t, e, n, r, i, o) {
            var a = i & ht,
                s = Ws(t),
                u = s.length,
                l = Ws(e),
                c = l.length;
            if (u != c && !a) return !1;
            for (var f = u; f--;) {
                var p = s[f];
                if (!(a ? p in e : Gn(e, p))) return !1
            }
            var h = o.get(t);
            if (h) return h == e;
            var d = !0;
            o.set(t, e);
            for (var v = a; ++f < u;) {
                p = s[f];
                var m = t[p],
                    y = e[p];
                if (r) var g = a ? r(y, m, p, e, t, o) : r(m, y, p, t, e, o);
                if (!(g === Q ? m === y || n(m, y, r, i, o) : g)) {
                    d = !1;
                    break
                }
                v || (v = "constructor" == p)
            }
            if (d && !v) {
                var b = t.constructor,
                    x = e.constructor;
                b != x && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof x && x instanceof x) && (d = !1)
            }
            return o["delete"](t), d
        }

        function gi(t) {
            return Xn(t, Ws, ki)
        }

        function bi(t) {
            return Xn(t, Hs, sc)
        }

        function xi(t) {
            for (var e = t.name + "", n = Bl[e], r = sl.call(Bl, e) ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (null == o || o == t) return i.name
            }
            return e
        }

        function wi() {
            var t = Ae.iteratee || Pu;
            return t = t === Pu ? ir : t, arguments.length ? t(arguments[0], arguments[1]) : t
        }

        function _i(t) {
            for (var e = Qs(t), n = e.length; n--;) e[n][2] = Ri(e[n][1]);
            return e
        }

        function Ti(t, e) {
            var n = t[e];
            return as(n) ? n : Q
        }

        function Si(t) {
            var e = sl.call(Ae, "placeholder") ? Ae : t;
            return e.placeholder
        }

        function Ci(t) {
            return El(Object(t))
        }

        function ki(t) {
            return bl(Object(t))
        }

        function Ei(t) {
            return cl.call(t)
        }

        function Ai(t, e, n) {
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r],
                    a = o.size;
                switch (o.type) {
                    case "drop":
                        t += a;
                        break;
                    case "dropRight":
                        e -= a;
                        break;
                    case "take":
                        e = Fl(e, t + a);
                        break;
                    case "takeRight":
                        t = Dl(t, e - a)
                }
            }
            return {
                start: t,
                end: e
            }
        }

        function ji(t, e, n) {
            e = Ni(e, t) ? [e] : On(e);
            for (var r, i = -1, o = e.length; ++i < o;) {
                var a = e[i];
                if (!(r = null != t && n(t, a))) break;
                t = t[a]
            }
            if (r) return r;
            var o = t ? t.length : 0;
            return !!o && Ka(o) && W(a, o) && ($c(t) || ds(t) || Ra(t))
        }

        function Oi(t) {
            var e = t.length,
                n = t.constructor(e);
            return e && "string" == typeof t[0] && sl.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }

        function Di(t) {
            return "function" != typeof t.constructor || Mi(t) ? {} : Nn(Ci(t))
        }

        function Fi(t, e, n, r) {
            var i = t.constructor;
            switch (e) {
                case Vt:
                    return Lr(t);
                case Ot:
                case Dt:
                    return new i(+t);
                case Ut:
                    return Mr(t, r);
                case Yt:
                case Xt:
                case Gt:
                case Qt:
                case Zt:
                case Jt:
                case Kt:
                case te:
                case ee:
                    return $r(t, r);
                case Nt:
                    return Rr(t, r, n);
                case zt:
                case Wt:
                    return new i(t);
                case Rt:
                    return qr(t);
                case qt:
                    return Wr(t, r, n);
                case Ht:
                    return Hr(t)
            }
        }

        function Pi(t) {
            var e = t ? t.length : Q;
            return Ka(e) && ($c(t) || ds(t) || Ra(t)) ? C(e, String) : null
        }

        function Ii(t, e, n) {
            if (!ts(n)) return !1;
            var r = typeof e;
            return ("number" == r ? Wa(n) && W(e, n.length) : "string" == r && e in n) ? za(n[e], t) : !1
        }

        function Ni(t, e) {
            var n = typeof t;
            return "number" == n || "symbol" == n ? !0 : !$c(t) && (vs(t) || he.test(t) || !pe.test(t) || null != e && t in Object(e))
        }

        function zi(t) {
            var e = typeof t;
            return "number" == e || "boolean" == e || "string" == e && "__proto__" != t || null == t
        }

        function Li(t) {
            var e = xi(t),
                n = Ae[e];
            if ("function" != typeof n || !(e in Ie.prototype)) return !1;
            if (t === n) return !0;
            var r = oc(n);
            return !!r && t === r[0]
        }

        function Mi(t) {
            var e = t && t.constructor,
                n = "function" == typeof e && e.prototype || ol;
            return t === n
        }

        function Ri(t) {
            return t === t && !ts(t)
        }

        function qi(t, e) {
            return function(n) {
                return null == n ? !1 : n[t] === e && (e !== Q || t in Object(n))
            }
        }

        function Wi(t, e) {
            var n = t[1],
                r = e[1],
                i = n | r,
                o = (nt | rt | lt) > i,
                a = r == lt && n == ot || r == lt && n == ct && t[7].length <= e[8] || r == (lt | ct) && e[7].length <= e[8] && n == ot;
            if (!o && !a) return t;
            r & nt && (t[2] = e[2], i |= n & nt ? 0 : it);
            var s = e[3];
            if (s) {
                var u = t[3];
                t[3] = u ? Br(u, s, e[4]) : Ur(s), t[4] = u ? B(t[3], et) : Ur(e[4])
            }
            return s = e[5], s && (u = t[5], t[5] = u ? Vr(u, s, e[6]) : Ur(s), t[6] = u ? B(t[5], et) : Ur(e[6])), s = e[7], s && (t[7] = Ur(s)), r & lt && (t[8] = null == t[8] ? e[8] : Fl(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
        }

        function Hi(t, e, n, r, i, o) {
            return ts(t) && ts(e) && cr(t, e, Q, Hi, o.set(e, t)), t
        }

        function $i(t, e) {
            return 1 == e.length ? t : Yn(t, Tr(e, 0, -1))
        }

        function Bi(t, e) {
            for (var n = t.length, r = Fl(e.length, n), i = Ur(t); r--;) {
                var o = e[r];
                t[r] = W(o, n) ? i[o] : Q
            }
            return t
        }

        function Vi(t) {
            if (Za(t)) try {
                return al.call(t)
            } catch (e) {}
            return As(t)
        }

        function Ui(t) {
            if (t instanceof Ie) return t.clone();
            var e = new Pe(t.__wrapped__, t.__chain__);
            return e.__actions__ = Ur(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
        }

        function Yi(t, e, n) {
            e = (n ? Ii(t, e, n) : e === Q) ? 1 : Dl(Ts(e), 0);
            var r = t ? t.length : 0;
            if (!r || 1 > e) return [];
            for (var i = 0, o = 0, a = Array(Cl(r / e)); r > i;) a[o++] = Tr(t, i, i += e);
            return a
        }

        function Xi(t) {
            for (var e = -1, n = t ? t.length : 0, r = 0, i = []; ++e < n;) {
                var o = t[e];
                o && (i[r++] = o)
            }
            return i
        }

        function Gi() {
            var t = arguments.length,
                e = Da(arguments[0]);
            if (2 > t) return t ? Ur(e) : [];
            for (var n = Array(t - 1); t--;) n[t - 1] = arguments[t];
            return i(e, $n(n, 1))
        }

        function Qi(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Q ? 1 : Ts(e), Tr(t, 0 > e ? 0 : e, r)) : []
        }

        function Zi(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Q ? 1 : Ts(e), e = r - e, Tr(t, 0, 0 > e ? 0 : e)) : []
        }

        function Ji(t, e) {
            return t && t.length ? Fr(t, wi(e, 3), !0, !0) : []
        }

        function Ki(t, e) {
            return t && t.length ? Fr(t, wi(e, 3), !0) : []
        }

        function to(t, e, n, r) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && Ii(t, e, n) && (n = 0, r = i), Wn(t, e, n, r)) : []
        }

        function eo(t, e) {
            return t && t.length ? g(t, wi(e, 3)) : -1
        }

        function no(t, e) {
            return t && t.length ? g(t, wi(e, 3), !0) : -1
        }

        function ro(t) {
            var e = t ? t.length : 0;
            return e ? $n(t, 1) : []
        }

        function io(t) {
            var e = t ? t.length : 0;
            return e ? $n(t, wt) : []
        }

        function oo(t, e) {
            var n = t ? t.length : 0;
            return n ? (e = e === Q ? 1 : Ts(e), $n(t, e)) : []
        }

        function ao(t) {
            for (var e = -1, n = t ? t.length : 0, r = {}; ++e < n;) {
                var i = t[e];
                r[i[0]] = i[1]
            }
            return r
        }

        function so(t) {
            return t ? t[0] : Q
        }

        function uo(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n = Ts(n), 0 > n && (n = Dl(r + n, 0)), b(t, e, n)) : -1
        }

        function lo(t) {
            return Zi(t, 1)
        }

        function co(t, e) {
            return t ? jl.call(t, e) : ""
        }

        function fo(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : Q
        }

        function po(t, e, n) {
            var r = t ? t.length : 0;
            if (!r) return -1;
            var i = r;
            if (n !== Q && (i = Ts(n), i = (0 > i ? Dl(r + i, 0) : Fl(i, r - 1)) + 1), e !== e) return R(t, i, !0);
            for (; i--;)
                if (t[i] === e) return i;
            return -1
        }

        function ho(t, e) {
            return t && t.length && e && e.length ? yr(t, e) : t
        }

        function vo(t, e, n) {
            return t && t.length && e && e.length ? yr(t, e, wi(n)) : t
        }

        function mo(t, e, n) {
            return t && t.length && e && e.length ? yr(t, e, Q, n) : t
        }

        function yo(t, e) {
            var n = [];
            if (!t || !t.length) return n;
            var r = -1,
                i = [],
                o = t.length;
            for (e = wi(e, 3); ++r < o;) {
                var a = t[r];
                e(a, r, t) && (n.push(a), i.push(r))
            }
            return gr(t, i), n
        }

        function go(t) {
            return t ? Nl.call(t) : t
        }

        function bo(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && Ii(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : Ts(e), n = n === Q ? r : Ts(n)), Tr(t, e, n)) : []
        }

        function xo(t, e) {
            return Cr(t, e)
        }

        function wo(t, e, n) {
            return kr(t, e, wi(n))
        }

        function _o(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = Cr(t, e);
                if (n > r && za(t[r], e)) return r
            }
            return -1
        }

        function To(t, e) {
            return Cr(t, e, !0)
        }

        function So(t, e, n) {
            return kr(t, e, wi(n), !0)
        }

        function Co(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = Cr(t, e, !0) - 1;
                if (za(t[r], e)) return r
            }
            return -1
        }

        function ko(t) {
            return t && t.length ? Er(t) : []
        }

        function Eo(t, e) {
            return t && t.length ? Ar(t, wi(e)) : []
        }

        function Ao(t) {
            return Qi(t, 1)
        }

        function jo(t, e, n) {
            return t && t.length ? (e = n || e === Q ? 1 : Ts(e), Tr(t, 0, 0 > e ? 0 : e)) : []
        }

        function Oo(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Q ? 1 : Ts(e), e = r - e, Tr(t, 0 > e ? 0 : e, r)) : []
        }

        function Do(t, e) {
            return t && t.length ? Fr(t, wi(e, 3), !1, !0) : []
        }

        function Fo(t, e) {
            return t && t.length ? Fr(t, wi(e, 3)) : []
        }

        function Po(t) {
            return t && t.length ? jr(t) : []
        }

        function Io(t, e) {
            return t && t.length ? jr(t, wi(e)) : []
        }

        function No(t, e) {
            return t && t.length ? jr(t, Q, e) : []
        }

        function zo(t) {
            if (!t || !t.length) return [];
            var e = 0;
            return t = u(t, function(t) {
                return Ha(t) ? (e = Dl(t.length, e), !0) : void 0
            }), C(e, function(e) {
                return f(t, vr(e))
            })
        }

        function Lo(t, e) {
            if (!t || !t.length) return [];
            var r = zo(t);
            return null == e ? r : f(r, function(t) {
                return n(e, Q, t)
            })
        }

        function Mo(t, e) {
            return Nr(t || [], e || [], pn)
        }

        function Ro(t, e) {
            return Nr(t || [], e || [], _r)
        }

        function qo(t) {
            var e = Ae(t);
            return e.__chain__ = !0, e
        }

        function Wo(t, e) {
            return e(t), t
        }

        function Ho(t, e) {
            return e(t)
        }

        function $o() {
            return qo(this)
        }

        function Bo() {
            return new Pe(this.value(), this.__chain__)
        }

        function Vo() {
            this.__values__ === Q && (this.__values__ = _s(this.value()));
            var t = this.__index__ >= this.__values__.length,
                e = t ? Q : this.__values__[this.__index__++];
            return {
                done: t,
                value: e
            }
        }

        function Uo() {
            return this
        }

        function Yo(t) {
            for (var e, n = this; n instanceof Fe;) {
                var r = Ui(n);
                r.__index__ = 0, r.__values__ = Q, e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t, e
        }

        function Xo() {
            var t = this.__wrapped__;
            if (t instanceof Ie) {
                var e = t;
                return this.__actions__.length && (e = new Ie(this)), e = e.reverse(), e.__actions__.push({
                    func: Ho,
                    args: [go],
                    thisArg: Q
                }), new Pe(e, this.__chain__)
            }
            return this.thru(go)
        }

        function Go() {
            return Pr(this.__wrapped__, this.__actions__)
        }

        function Qo(t, e, n) {
            var r = $c(t) ? s : qn;
            return n && Ii(t, e, n) && (e = Q), r(t, wi(e, 3))
        }

        function Zo(t, e) {
            var n = $c(t) ? u : Hn;
            return n(t, wi(e, 3))
        }

        function Jo(t, e) {
            if (e = wi(e, 3), $c(t)) {
                var n = g(t, e);
                return n > -1 ? t[n] : Q
            }
            return y(t, e, Kl)
        }

        function Ko(t, e) {
            if (e = wi(e, 3), $c(t)) {
                var n = g(t, e, !0);
                return n > -1 ? t[n] : Q
            }
            return y(t, e, tc)
        }

        function ta(t, e) {
            return $n(aa(t, e), 1)
        }

        function ea(t, e) {
            return $n(aa(t, e), wt)
        }

        function na(t, e, n) {
            return n = n === Q ? 1 : Ts(n), $n(aa(t, e), n)
        }

        function ra(t, e) {
            return "function" == typeof e && $c(t) ? o(t, e) : Kl(t, wi(e))
        }

        function ia(t, e) {
            return "function" == typeof e && $c(t) ? a(t, e) : tc(t, wi(e))
        }

        function oa(t, e, n, r) {
            t = Wa(t) ? t : nu(t), n = n && !r ? Ts(n) : 0;
            var i = t.length;
            return 0 > n && (n = Dl(i + n, 0)), ds(t) ? i >= n && t.indexOf(e, n) > -1 : !!i && b(t, e, n) > -1
        }

        function aa(t, e) {
            var n = $c(t) ? f : sr;
            return n(t, wi(e, 3))
        }

        function sa(t, e, n, r) {
            return null == t ? [] : ($c(e) || (e = null == e ? [] : [e]), n = r ? Q : n, $c(n) || (n = null == n ? [] : [n]), pr(t, e, n))
        }

        function ua(t, e, n) {
            var r = $c(t) ? h : _,
                i = arguments.length < 3;
            return r(t, wi(e, 4), n, i, Kl)
        }

        function la(t, e, n) {
            var r = $c(t) ? d : _,
                i = arguments.length < 3;
            return r(t, wi(e, 4), n, i, tc)
        }

        function ca(t, e) {
            var n = $c(t) ? u : Hn;
            return e = wi(e, 3), n(t, function(t, n, r) {
                return !e(t, n, r)
            })
        }

        function fa(t) {
            var e = Wa(t) ? t : nu(t),
                n = e.length;
            return n > 0 ? e[br(0, n - 1)] : Q
        }

        function pa(t, e, n) {
            var r = -1,
                i = _s(t),
                o = i.length,
                a = o - 1;
            for (e = (n ? Ii(t, e, n) : e === Q) ? 1 : Dn(Ts(e), 0, o); ++r < e;) {
                var s = br(r, a),
                    u = i[s];
                i[s] = i[r], i[r] = u
            }
            return i.length = e, i
        }

        function ha(t) {
            return pa(t, Ct)
        }

        function da(t) {
            if (null == t) return 0;
            if (Wa(t)) {
                var e = t.length;
                return e && ds(t) ? U(t) : e
            }
            if (es(t)) {
                var n = Ei(t);
                if (n == Nt || n == qt) return t.size
            }
            return Ws(t).length
        }

        function va(t, e, n) {
            var r = $c(t) ? v : Sr;
            return n && Ii(t, e, n) && (e = Q), r(t, wi(e, 3))
        }

        function ma(t, e) {
            if ("function" != typeof e) throw new rl(K);
            return t = Ts(t),
                function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
        }

        function ya(t, e, n) {
            return e = n ? Q : e, e = t && null == e ? t.length : e, di(t, lt, Q, Q, Q, Q, e)
        }

        function ga(t, e) {
            var n;
            if ("function" != typeof e) throw new rl(K);
            return t = Ts(t),
                function() {
                    return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = Q), n
                }
        }

        function ba(t, e, n) {
            e = n ? Q : e;
            var r = di(t, ot, Q, Q, Q, Q, Q, e);
            return r.placeholder = ba.placeholder, r
        }

        function xa(t, e, n) {
            e = n ? Q : e;
            var r = di(t, at, Q, Q, Q, Q, Q, e);
            return r.placeholder = xa.placeholder, r
        }

        function wa(t, e, n) {
            function r(e) {
                var n = p,
                    r = h;
                return p = h = Q, y = e, d = t.apply(r, n)
            }

            function i(t) {
                return y = t, v = Tl(s, e), g ? r(t) : d
            }

            function o(t) {
                var n = t - m,
                    r = t - y,
                    i = e - n;
                return b === !1 ? i : Fl(i, b - r)
            }

            function a(t) {
                var n = t - m,
                    r = t - y;
                return !m || n >= e || 0 > n || b !== !1 && r >= b
            }

            function s() {
                var t = Ic();
                return a(t) ? u(t) : void(v = Tl(s, o(t)))
            }

            function u(t) {
                return yl(v), v = Q, x && p ? r(t) : (p = h = Q, d)
            }

            function l() {
                v !== Q && yl(v), m = y = 0, p = h = v = Q
            }

            function c() {
                return v === Q ? d : u(Ic())
            }

            function f() {
                var t = Ic(),
                    n = a(t);
                return p = arguments, h = this, m = t, n ? v === Q ? i(m) : (yl(v), v = Tl(s, e), r(m)) : d
            }
            var p, h, d, v, m = 0,
                y = 0,
                g = !1,
                b = !1,
                x = !0;
            if ("function" != typeof t) throw new rl(K);
            return e = Cs(e) || 0, ts(n) && (g = !!n.leading, b = "maxWait" in n && Dl(Cs(n.maxWait) || 0, e), x = "trailing" in n ? !!n.trailing : x), f.cancel = l, f.flush = c, f
        }

        function _a(t) {
            return di(t, ft)
        }

        function Ta(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw new rl(K);
            var n = function() {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a), a
            };
            return n.cache = new(Ta.Cache || $e), n
        }

        function Sa(t) {
            if ("function" != typeof t) throw new rl(K);
            return function() {
                return !t.apply(this, arguments)
            }
        }

        function Ca(t) {
            return ga(2, t)
        }

        function ka(t, e) {
            if ("function" != typeof t) throw new rl(K);
            return e = Dl(e === Q ? t.length - 1 : Ts(e), 0),
                function() {
                    for (var r = arguments, i = -1, o = Dl(r.length - e, 0), a = Array(o); ++i < o;) a[i] = r[e + i];
                    switch (e) {
                        case 0:
                            return t.call(this, a);
                        case 1:
                            return t.call(this, r[0], a);
                        case 2:
                            return t.call(this, r[0], r[1], a)
                    }
                    var s = Array(e + 1);
                    for (i = -1; ++i < e;) s[i] = r[i];
                    return s[e] = a, n(t, this, s)
                }
        }

        function Ea(t, e) {
            if ("function" != typeof t) throw new rl(K);
            return e = e === Q ? 0 : Dl(Ts(e), 0), ka(function(r) {
                var i = r[e],
                    o = r.slice(0, e);
                return i && p(o, i), n(t, this, o)
            })
        }

        function Aa(t, e, n) {
            var r = !0,
                i = !0;
            if ("function" != typeof t) throw new rl(K);
            return ts(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), wa(t, e, {
                leading: r,
                maxWait: e,
                trailing: i
            })
        }

        function ja(t) {
            return ya(t, 1)
        }

        function Oa(t, e) {
            return e = null == e ? Fu : e, qc(e, t)
        }

        function Da() {
            if (!arguments.length) return [];
            var t = arguments[0];
            return $c(t) ? t : [t]
        }

        function Fa(t) {
            return Pn(t, !1, !0)
        }

        function Pa(t, e) {
            return Pn(t, !1, !0, e)
        }

        function Ia(t) {
            return Pn(t, !0, !0)
        }

        function Na(t, e) {
            return Pn(t, !0, !0, e)
        }

        function za(t, e) {
            return t === e || t !== t && e !== e
        }

        function La(t, e) {
            return t > e
        }

        function Ma(t, e) {
            return t >= e
        }

        function Ra(t) {
            return Ha(t) && sl.call(t, "callee") && (!_l.call(t, "callee") || cl.call(t) == At)
        }

        function qa(t) {
            return es(t) && cl.call(t) == Vt
        }

        function Wa(t) {
            return null != t && Ka(ac(t)) && !Za(t)
        }

        function Ha(t) {
            return es(t) && Wa(t)
        }

        function $a(t) {
            return t === !0 || t === !1 || es(t) && cl.call(t) == Ot
        }

        function Ba(t) {
            return es(t) && cl.call(t) == Dt
        }

        function Va(t) {
            return !!t && 1 === t.nodeType && es(t) && !cs(t)
        }

        function Ua(t) {
            if (Wa(t) && ($c(t) || ds(t) || Za(t.splice) || Ra(t) || Bc(t))) return !t.length;
            if (es(t)) {
                var e = Ei(t);
                if (e == Nt || e == qt) return !t.size
            }
            for (var n in t)
                if (sl.call(t, n)) return !1;
            return !($l && Ws(t).length)
        }

        function Ya(t, e) {
            return er(t, e)
        }

        function Xa(t, e, n) {
            n = "function" == typeof n ? n : Q;
            var r = n ? n(t, e) : Q;
            return r === Q ? er(t, e, n) : !!r
        }

        function Ga(t) {
            return es(t) ? cl.call(t) == Ft || "string" == typeof t.message && "string" == typeof t.name : !1
        }

        function Qa(t) {
            return "number" == typeof t && Al(t)
        }

        function Za(t) {
            var e = ts(t) ? cl.call(t) : "";
            return e == Pt || e == It
        }

        function Ja(t) {
            return "number" == typeof t && t == Ts(t)
        }

        function Ka(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && _t >= t
        }

        function ts(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function es(t) {
            return !!t && "object" == typeof t
        }

        function ns(t) {
            return es(t) && Ei(t) == Nt
        }

        function rs(t, e) {
            return t === e || rr(t, e, _i(e))
        }

        function is(t, e, n) {
            return n = "function" == typeof n ? n : Q, rr(t, e, _i(e), n)
        }

        function os(t) {
            return ls(t) && t != +t
        }

        function as(t) {
            if (!ts(t)) return !1;
            var e = Za(t) || q(t) ? pl : ke;
            return e.test(Vi(t))
        }

        function ss(t) {
            return null === t
        }

        function us(t) {
            return null == t
        }

        function ls(t) {
            return "number" == typeof t || es(t) && cl.call(t) == zt
        }

        function cs(t) {
            if (!es(t) || cl.call(t) != Lt || q(t)) return !1;
            var e = Ci(t);
            if (null === e) return !0;
            var n = sl.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && al.call(n) == ll
        }

        function fs(t) {
            return ts(t) && cl.call(t) == Rt
        }

        function ps(t) {
            return Ja(t) && t >= -_t && _t >= t
        }

        function hs(t) {
            return es(t) && Ei(t) == qt
        }

        function ds(t) {
            return "string" == typeof t || !$c(t) && es(t) && cl.call(t) == Wt
        }

        function vs(t) {
            return "symbol" == typeof t || es(t) && cl.call(t) == Ht
        }

        function ms(t) {
            return es(t) && Ka(t.length) && !!wn[cl.call(t)]
        }

        function ys(t) {
            return t === Q
        }

        function gs(t) {
            return es(t) && Ei(t) == $t
        }

        function bs(t) {
            return es(t) && cl.call(t) == Bt
        }

        function xs(t, e) {
            return e > t
        }

        function ws(t, e) {
            return e >= t
        }

        function _s(t) {
            if (!t) return [];
            if (Wa(t)) return ds(t) ? Y(t) : Ur(t);
            if (xl && t[xl]) return H(t[xl]());
            var e = Ei(t),
                n = e == Nt ? $ : e == qt ? V : nu;
            return n(t)
        }

        function Ts(t) {
            if (!t) return 0 === t ? t : 0;
            if (t = Cs(t), t === wt || t === -wt) {
                var e = 0 > t ? -1 : 1;
                return e * Tt
            }
            var n = t % 1;
            return t === t ? n ? t - n : t : 0
        }

        function Ss(t) {
            return t ? Dn(Ts(t), 0, Ct) : 0
        }

        function Cs(t) {
            if ("number" == typeof t) return t;
            if (vs(t)) return St;
            if (ts(t)) {
                var e = Za(t.valueOf) ? t.valueOf() : t;
                t = ts(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(ye, "");
            var n = Ce.test(t);
            return n || Ee.test(t) ? jn(t.slice(2), n ? 2 : 8) : Se.test(t) ? St : +t
        }

        function ks(t) {
            return Yr(t, Hs(t))
        }

        function Es(t) {
            return Dn(Ts(t), -_t, _t)
        }

        function As(t) {
            if ("string" == typeof t) return t;
            if (null == t) return "";
            if (vs(t)) return Jl ? Jl.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -wt ? "-0" : e
        }

        function js(t, e) {
            var n = Nn(t);
            return e ? Tn(n, e) : n
        }

        function Os(t, e) {
            return y(t, wi(e, 3), Bn, !0)
        }

        function Ds(t, e) {
            return y(t, wi(e, 3), Vn, !0)
        }

        function Fs(t, e) {
            return null == t ? t : ec(t, wi(e), Hs)
        }

        function Ps(t, e) {
            return null == t ? t : nc(t, wi(e), Hs)
        }

        function Is(t, e) {
            return t && Bn(t, wi(e))
        }

        function Ns(t, e) {
            return t && Vn(t, wi(e))
        }

        function zs(t) {
            return null == t ? [] : Un(t, Ws(t))
        }

        function Ls(t) {
            return null == t ? [] : Un(t, Hs(t))
        }

        function Ms(t, e, n) {
            var r = null == t ? Q : Yn(t, e);
            return r === Q ? n : r
        }

        function Rs(t, e) {
            return null != t && ji(t, e, Gn)
        }

        function qs(t, e) {
            return null != t && ji(t, e, Qn)
        }

        function Ws(t) {
            var e = Mi(t);
            if (!e && !Wa(t)) return or(t);
            var n = Pi(t),
                r = !!n,
                i = n || [],
                o = i.length;
            for (var a in t) !Gn(t, a) || r && ("length" == a || W(a, o)) || e && "constructor" == a || i.push(a);
            return i
        }

        function Hs(t) {
            for (var e = -1, n = Mi(t), r = ar(t), i = r.length, o = Pi(t), a = !!o, s = o || [], u = s.length; ++e < i;) {
                var l = r[e];
                a && ("length" == l || W(l, u)) || "constructor" == l && (n || !sl.call(t, l)) || s.push(l)
            }
            return s
        }

        function $s(t, e) {
            var n = {};
            return e = wi(e, 3), Bn(t, function(t, r, i) {
                n[e(t, r, i)] = t
            }), n
        }

        function Bs(t, e) {
            var n = {};
            return e = wi(e, 3), Bn(t, function(t, r, i) {
                n[r] = e(t, r, i)
            }), n
        }

        function Vs(t, e) {
            return e = wi(e), dr(t, function(t, n) {
                return !e(t, n)
            })
        }

        function Us(t, e) {
            return null == t ? {} : dr(t, wi(e))
        }

        function Ys(t, e, n) {
            e = Ni(e, t) ? [e] : On(e);
            var r = -1,
                i = e.length;
            for (i || (t = Q, i = 1); ++r < i;) {
                var o = null == t ? Q : t[e[r]];
                o === Q && (r = i, o = n), t = Za(o) ? o.call(t) : o
            }
            return t
        }

        function Xs(t, e, n) {
            return null == t ? t : _r(t, e, n)
        }

        function Gs(t, e, n, r) {
            return r = "function" == typeof r ? r : Q, null == t ? t : _r(t, e, n, r)
        }

        function Qs(t) {
            return k(t, Ws(t))
        }

        function Zs(t) {
            return k(t, Hs(t))
        }

        function Js(t, e, n) {
            var r = $c(t) || ms(t);
            if (e = wi(e, 4), null == n)
                if (r || ts(t)) {
                    var i = t.constructor;
                    n = r ? $c(t) ? new i : [] : Za(i) ? Nn(Ci(t)) : {}
                } else n = {};
            return (r ? o : Bn)(t, function(t, r, i) {
                return e(n, t, r, i)
            }), n
        }

        function Ks(t, e) {
            return null == t ? !0 : Or(t, e)
        }

        function tu(t, e, n) {
            return null == t ? t : Dr(t, e, kn(n))
        }

        function eu(t, e, n, r) {
            return r = "function" == typeof r ? r : Q, null == t ? t : Dr(t, e, kn(n), r)
        }

        function nu(t) {
            return t ? A(t, Ws(t)) : []
        }

        function ru(t) {
            return null == t ? [] : A(t, Hs(t))
        }

        function iu(t, e, n) {
            return n === Q && (n = e, e = Q), n !== Q && (n = Cs(n), n = n === n ? n : 0), e !== Q && (e = Cs(e), e = e === e ? e : 0), Dn(Cs(t), e, n)
        }

        function ou(t, e, n) {
            return e = Cs(e) || 0, n === Q ? (n = e, e = 0) : n = Cs(n) || 0, t = Cs(t), Zn(t, e, n)
        }

        function au(t, e, n) {
            if (n && "boolean" != typeof n && Ii(t, e, n) && (e = n = Q), n === Q && ("boolean" == typeof e ? (n = e, e = Q) : "boolean" == typeof t && (n = t, t = Q)), t === Q && e === Q ? (t = 0, e = 1) : (t = Cs(t) || 0, e === Q ? (e = t, t = 0) : e = Cs(e) || 0), t > e) {
                var r = t;
                t = e, e = r
            }
            if (n || t % 1 || e % 1) {
                var i = Il();
                return Fl(t + i * (e - t + An("1e-" + ((i + "").length - 1))), e)
            }
            return br(t, e)
        }

        function su(t) {
            return hf(As(t).toLowerCase())
        }

        function uu(t) {
            return t = As(t), t && t.replace(je, z).replace(hn, "")
        }

        function lu(t, e, n) {
            t = As(t), e = "string" == typeof e ? e : e + "";
            var r = t.length;
            return n = n === Q ? r : Dn(Ts(n), 0, r), n -= e.length, n >= 0 && t.indexOf(e, n) == n
        }

        function cu(t) {
            return t = As(t), t && ue.test(t) ? t.replace(ae, L) : t
        }

        function fu(t) {
            return t = As(t), t && me.test(t) ? t.replace(ve, "\\$&") : t
        }

        function pu(t, e, n) {
            t = As(t), e = Ts(e);
            var r = e ? U(t) : 0;
            if (!e || r >= e) return t;
            var i = (e - r) / 2;
            return li(kl(i), n) + t + li(Cl(i), n)
        }

        function hu(t, e, n) {
            t = As(t), e = Ts(e);
            var r = e ? U(t) : 0;
            return e && e > r ? t + li(e - r, n) : t
        }

        function du(t, e, n) {
            t = As(t), e = Ts(e);
            var r = e ? U(t) : 0;
            return e && e > r ? li(e - r, n) + t : t;
        }

        function vu(t, e, n) {
            return n || null == e ? e = 0 : e && (e = +e), t = As(t).replace(ye, ""), Pl(t, e || (Te.test(t) ? 16 : 10))
        }

        function mu(t, e, n) {
            return e = (n ? Ii(t, e, n) : e === Q) ? 1 : Ts(e), wr(As(t), e)
        }

        function yu() {
            var t = arguments,
                e = As(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2])
        }

        function gu(t, e, n) {
            return As(t).split(e, n)
        }

        function bu(t, e, n) {
            return t = As(t), n = Dn(Ts(n), 0, t.length), t.lastIndexOf(e, n) == n
        }

        function xu(t, e, n) {
            var r = Ae.templateSettings;
            n && Ii(t, e, n) && (e = Q), t = As(t), e = Yc({}, e, r, cn);
            var i, o, a = Yc({}, e.imports, r.imports, cn),
                s = Ws(a),
                u = A(a, s),
                l = 0,
                c = e.interpolate || Oe,
                f = "__p += '",
                p = nl((e.escape || Oe).source + "|" + c.source + "|" + (c === fe ? we : Oe).source + "|" + (e.evaluate || Oe).source + "|$", "g"),
                h = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++xn + "]") + "\n";
            t.replace(p, function(e, n, r, a, s, u) {
                return r || (r = a), f += t.slice(l, u).replace(De, M), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
            }), f += "';\n";
            var d = e.variable;
            d || (f = "with (obj) {\n" + f + "\n}\n"), f = (o ? f.replace(ne, "") : f).replace(re, "$1").replace(ie, "$1;"), f = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = df(function() {
                return Function(s, h + "return " + f).apply(Q, u)
            });
            if (v.source = f, Ga(v)) throw v;
            return v
        }

        function wu(t) {
            return As(t).toLowerCase()
        }

        function _u(t) {
            return As(t).toUpperCase()
        }

        function Tu(t, e, n) {
            if (t = As(t), !t) return t;
            if (n || e === Q) return t.replace(ye, "");
            if (e += "", !e) return t;
            var r = Y(t),
                i = Y(e);
            return r.slice(j(r, i), O(r, i) + 1).join("")
        }

        function Su(t, e, n) {
            if (t = As(t), !t) return t;
            if (n || e === Q) return t.replace(be, "");
            if (e += "", !e) return t;
            var r = Y(t);
            return r.slice(0, O(r, Y(e)) + 1).join("")
        }

        function Cu(t, e, n) {
            if (t = As(t), !t) return t;
            if (n || e === Q) return t.replace(ge, "");
            if (e += "", !e) return t;
            var r = Y(t);
            return r.slice(j(r, Y(e))).join("")
        }

        function ku(t, e) {
            var n = dt,
                r = vt;
            if (ts(e)) {
                var i = "separator" in e ? e.separator : i;
                n = "length" in e ? Ts(e.length) : n, r = "omission" in e ? As(e.omission) : r
            }
            t = As(t);
            var o = t.length;
            if (vn.test(t)) {
                var a = Y(t);
                o = a.length
            }
            if (n >= o) return t;
            var s = n - U(r);
            if (1 > s) return r;
            var u = a ? a.slice(0, s).join("") : t.slice(0, s);
            if (i === Q) return u + r;
            if (a && (s += u.length - s), fs(i)) {
                if (t.slice(s).search(i)) {
                    var l, c = u;
                    for (i.global || (i = nl(i.source, As(_e.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(c);) var f = l.index;
                    u = u.slice(0, f === Q ? s : f)
                }
            } else if (t.indexOf(i, s) != s) {
                var p = u.lastIndexOf(i);
                p > -1 && (u = u.slice(0, p))
            }
            return u + r
        }

        function Eu(t) {
            return t = As(t), t && se.test(t) ? t.replace(oe, X) : t
        }

        function Au(t, e, n) {
            return t = As(t), e = n ? Q : e, e === Q && (e = gn.test(t) ? yn : mn), t.match(e) || []
        }

        function ju(t) {
            var e = t ? t.length : 0,
                r = wi();
            return t = e ? f(t, function(t) {
                if ("function" != typeof t[1]) throw new rl(K);
                return [r(t[0]), t[1]]
            }) : [], ka(function(r) {
                for (var i = -1; ++i < e;) {
                    var o = t[i];
                    if (n(o[0], this, r)) return n(o[1], this, r)
                }
            })
        }

        function Ou(t) {
            return In(Pn(t, !0))
        }

        function Du(t) {
            return function() {
                return t
            }
        }

        function Fu(t) {
            return t
        }

        function Pu(t) {
            return ir("function" == typeof t ? t : Pn(t, !0))
        }

        function Iu(t) {
            return ur(Pn(t, !0))
        }

        function Nu(t, e) {
            return lr(t, Pn(e, !0))
        }

        function zu(t, e, n) {
            var r = Ws(e),
                i = Un(e, r);
            null != n || ts(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = Un(e, Ws(e)));
            var a = ts(n) && "chain" in n ? n.chain : !0,
                s = Za(t);
            return o(i, function(n) {
                var r = e[n];
                t[n] = r, s && (t.prototype[n] = function() {
                    var e = this.__chain__;
                    if (a || e) {
                        var n = t(this.__wrapped__),
                            i = n.__actions__ = Ur(this.__actions__);
                        return i.push({
                            func: r,
                            args: arguments,
                            thisArg: t
                        }), n.__chain__ = e, n
                    }
                    return r.apply(t, p([this.value()], arguments))
                })
            }), t
        }

        function Lu() {
            return Ln._ === this && (Ln._ = fl), this
        }

        function Mu() {}

        function Ru(t) {
            return t = Ts(t),
                function() {
                    return arguments[t]
                }
        }

        function qu(t) {
            return Ni(t) ? vr(t) : mr(t)
        }

        function Wu(t) {
            return function(e) {
                return null == t ? Q : Yn(t, e)
            }
        }

        function Hu(t, e) {
            if (t = Ts(t), 1 > t || t > _t) return [];
            var n = Ct,
                r = Fl(t, Ct);
            e = wi(e), t -= Ct;
            for (var i = C(r, e); ++n < t;) e(n);
            return i
        }

        function $u(t) {
            return $c(t) ? f(t, En) : vs(t) ? [t] : Ur(lc(t))
        }

        function Bu(t) {
            var e = ++ul;
            return As(t) + e
        }

        function Vu(t) {
            return t && t.length ? m(t, Fu, La) : Q
        }

        function Uu(t, e) {
            return t && t.length ? m(t, wi(e), La) : Q
        }

        function Yu(t) {
            return w(t, Fu)
        }

        function Xu(t, e) {
            return w(t, wi(e))
        }

        function Gu(t) {
            return t && t.length ? m(t, Fu, xs) : Q
        }

        function Qu(t, e) {
            return t && t.length ? m(t, wi(e), xs) : Q
        }

        function Zu(t) {
            return t && t.length ? S(t, Fu) : 0
        }

        function Ju(t, e) {
            return t && t.length ? S(t, wi(e)) : 0
        }
        D = D ? Mn.defaults({}, D, Mn.pick(Ln, bn)) : Ln;
        var Ku = D.Date,
            tl = D.Error,
            el = D.Math,
            nl = D.RegExp,
            rl = D.TypeError,
            il = D.Array.prototype,
            ol = D.Object.prototype,
            al = D.Function.prototype.toString,
            sl = ol.hasOwnProperty,
            ul = 0,
            ll = al.call(Object),
            cl = ol.toString,
            fl = Ln._,
            pl = nl("^" + al.call(sl).replace(ve, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            hl = Fn ? D.Buffer : Q,
            dl = D.Reflect,
            vl = D.Symbol,
            ml = D.Uint8Array,
            yl = D.clearTimeout,
            gl = dl ? dl.enumerate : Q,
            bl = Object.getOwnPropertySymbols,
            xl = "symbol" == typeof(xl = vl && vl.iterator) ? xl : Q,
            wl = Object.create,
            _l = ol.propertyIsEnumerable,
            Tl = D.setTimeout,
            Sl = il.splice,
            Cl = el.ceil,
            kl = el.floor,
            El = Object.getPrototypeOf,
            Al = D.isFinite,
            jl = il.join,
            Ol = Object.keys,
            Dl = el.max,
            Fl = el.min,
            Pl = D.parseInt,
            Il = el.random,
            Nl = il.reverse,
            zl = Ti(D, "DataView"),
            Ll = Ti(D, "Map"),
            Ml = Ti(D, "Promise"),
            Rl = Ti(D, "Set"),
            ql = Ti(D, "WeakMap"),
            Wl = Ti(Object, "create"),
            Hl = ql && new ql,
            $l = !_l.call({
                valueOf: 1
            }, "valueOf"),
            Bl = {},
            Vl = Vi(zl),
            Ul = Vi(Ll),
            Yl = Vi(Ml),
            Xl = Vi(Rl),
            Gl = Vi(ql),
            Ql = vl ? vl.prototype : Q,
            Zl = Ql ? Ql.valueOf : Q,
            Jl = Ql ? Ql.toString : Q;
        Ae.templateSettings = {
            escape: le,
            evaluate: ce,
            interpolate: fe,
            variable: "",
            imports: {
                _: Ae
            }
        }, Ae.prototype = Fe.prototype, Ae.prototype.constructor = Ae, Pe.prototype = Nn(Fe.prototype), Pe.prototype.constructor = Pe, Ie.prototype = Nn(Fe.prototype), Ie.prototype.constructor = Ie, Me.prototype = Wl ? Wl(null) : ol, $e.prototype.clear = Be, $e.prototype["delete"] = Ve, $e.prototype.get = Ue, $e.prototype.has = Ye, $e.prototype.set = Xe, Ge.prototype.push = Ze, Je.prototype.clear = Ke, Je.prototype["delete"] = tn, Je.prototype.get = en, Je.prototype.has = nn, Je.prototype.set = rn;
        var Kl = Jr(Bn),
            tc = Jr(Vn, !0),
            ec = Kr(),
            nc = Kr(!0);
        gl && !_l.call({
            valueOf: 1
        }, "valueOf") && (ar = function(t) {
            return H(gl(t))
        });
        var rc = Hl ? function(t, e) {
                return Hl.set(t, e), t
            } : Fu,
            ic = Rl && 2 === new Rl([1, 2]).size ? function(t) {
                return new Rl(t)
            } : Mu,
            oc = Hl ? function(t) {
                return Hl.get(t)
            } : Mu,
            ac = vr("length");
        bl || (ki = function() {
            return []
        });
        var sc = bl ? function(t) {
            for (var e = []; t;) p(e, ki(t)), t = Ci(t);
            return e
        } : ki;
        (zl && Ei(new zl(new ArrayBuffer(1))) != Ut || Ll && Ei(new Ll) != Nt || Ml && Ei(Ml.resolve()) != Mt || Rl && Ei(new Rl) != qt || ql && Ei(new ql) != $t) && (Ei = function(t) {
            var e = cl.call(t),
                n = e == Lt ? t.constructor : null,
                r = Vi(n);
            if (r) switch (r) {
                case Vl:
                    return Ut;
                case Ul:
                    return Nt;
                case Yl:
                    return Mt;
                case Xl:
                    return qt;
                case Gl:
                    return $t
            }
            return e
        });
        var uc = function() {
                var t = 0,
                    e = 0;
                return function(n, r) {
                    var i = Ic(),
                        o = yt - (i - e);
                    if (e = i, o > 0) {
                        if (++t >= mt) return n
                    } else t = 0;
                    return rc(n, r)
                }
            }(),
            lc = Ta(function(t) {
                var e = [];
                return As(t).replace(de, function(t, n, r, i) {
                    e.push(r ? i.replace(xe, "$1") : n || t)
                }), e
            }),
            cc = ka(function(t, e) {
                return Ha(t) ? Rn(t, $n(e, 1, !0)) : []
            }),
            fc = ka(function(t, e) {
                var n = fo(e);
                return Ha(n) && (n = Q), Ha(t) ? Rn(t, $n(e, 1, !0), wi(n)) : []
            }),
            pc = ka(function(t, e) {
                var n = fo(e);
                return Ha(n) && (n = Q), Ha(t) ? Rn(t, $n(e, 1, !0), Q, n) : []
            }),
            hc = ka(function(t) {
                var e = f(t, Cn);
                return e.length && e[0] === t[0] ? Jn(e) : []
            }),
            dc = ka(function(t) {
                var e = fo(t),
                    n = f(t, Cn);
                return e === fo(n) ? e = Q : n.pop(), n.length && n[0] === t[0] ? Jn(n, wi(e)) : []
            }),
            vc = ka(function(t) {
                var e = fo(t),
                    n = f(t, Cn);
                return e === fo(n) ? e = Q : n.pop(), n.length && n[0] === t[0] ? Jn(n, Q, e) : []
            }),
            mc = ka(ho),
            yc = ka(function(t, e) {
                e = f($n(e, 1), String);
                var n = Sn(t, e);
                return gr(t, e.sort(F)), n
            }),
            gc = ka(function(t) {
                return jr($n(t, 1, !0))
            }),
            bc = ka(function(t) {
                var e = fo(t);
                return Ha(e) && (e = Q), jr($n(t, 1, !0), wi(e))
            }),
            xc = ka(function(t) {
                var e = fo(t);
                return Ha(e) && (e = Q), jr($n(t, 1, !0), Q, e)
            }),
            wc = ka(function(t, e) {
                return Ha(t) ? Rn(t, e) : []
            }),
            _c = ka(function(t) {
                return Ir(u(t, Ha))
            }),
            Tc = ka(function(t) {
                var e = fo(t);
                return Ha(e) && (e = Q), Ir(u(t, Ha), wi(e))
            }),
            Sc = ka(function(t) {
                var e = fo(t);
                return Ha(e) && (e = Q), Ir(u(t, Ha), Q, e)
            }),
            Cc = ka(zo),
            kc = ka(function(t) {
                var e = t.length,
                    n = e > 1 ? t[e - 1] : Q;
                return n = "function" == typeof n ? (t.pop(), n) : Q, Lo(t, n)
            }),
            Ec = ka(function(t) {
                t = $n(t, 1);
                var e = t.length,
                    n = e ? t[0] : 0,
                    r = this.__wrapped__,
                    i = function(e) {
                        return Sn(e, t)
                    };
                return !(e > 1 || this.__actions__.length) && r instanceof Ie && W(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
                    func: Ho,
                    args: [i],
                    thisArg: Q
                }), new Pe(r, this.__chain__).thru(function(t) {
                    return e && !t.length && t.push(Q), t
                })) : this.thru(i)
            }),
            Ac = Qr(function(t, e, n) {
                sl.call(t, n) ? ++t[n] : t[n] = 1
            }),
            jc = Qr(function(t, e, n) {
                sl.call(t, n) ? t[n].push(e) : t[n] = [e]
            }),
            Oc = ka(function(t, e, r) {
                var i = -1,
                    o = "function" == typeof e,
                    a = Ni(e),
                    s = Wa(t) ? Array(t.length) : [];
                return Kl(t, function(t) {
                    var u = o ? e : a && null != t ? t[e] : Q;
                    s[++i] = u ? n(u, t, r) : tr(t, e, r)
                }), s
            }),
            Dc = Qr(function(t, e, n) {
                t[n] = e
            }),
            Fc = Qr(function(t, e, n) {
                t[n ? 0 : 1].push(e)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            Pc = ka(function(t, e) {
                if (null == t) return [];
                var n = e.length;
                return n > 1 && Ii(t, e[0], e[1]) ? e = [] : n > 2 && Ii(e[0], e[1], e[2]) && (e.length = 1), pr(t, $n(e, 1), [])
            }),
            Ic = Ku.now,
            Nc = ka(function(t, e, n) {
                var r = nt;
                if (n.length) {
                    var i = B(n, Si(Nc));
                    r |= st
                }
                return di(t, r, e, n, i)
            }),
            zc = ka(function(t, e, n) {
                var r = nt | rt;
                if (n.length) {
                    var i = B(n, Si(zc));
                    r |= st
                }
                return di(e, r, t, n, i)
            }),
            Lc = ka(function(t, e) {
                return zn(t, 1, e)
            }),
            Mc = ka(function(t, e, n) {
                return zn(t, Cs(e) || 0, n)
            });
        Ta.Cache = $e;
        var Rc = ka(function(t, e) {
                e = f($n(e, 1), wi());
                var r = e.length;
                return ka(function(i) {
                    for (var o = -1, a = Fl(i.length, r); ++o < a;) i[o] = e[o].call(this, i[o]);
                    return n(t, this, i)
                })
            }),
            qc = ka(function(t, e) {
                var n = B(e, Si(qc));
                return di(t, st, Q, e, n)
            }),
            Wc = ka(function(t, e) {
                var n = B(e, Si(Wc));
                return di(t, ut, Q, e, n)
            }),
            Hc = ka(function(t, e) {
                return di(t, ct, Q, Q, Q, $n(e, 1))
            }),
            $c = Array.isArray,
            Bc = hl ? function(t) {
                return t instanceof hl
            } : Du(!1),
            Vc = Zr(function(t, e) {
                if ($l || Mi(e) || Wa(e)) return void Yr(e, Ws(e), t);
                for (var n in e) sl.call(e, n) && pn(t, n, e[n])
            }),
            Uc = Zr(function(t, e) {
                if ($l || Mi(e) || Wa(e)) return void Yr(e, Hs(e), t);
                for (var n in e) pn(t, n, e[n])
            }),
            Yc = Zr(function(t, e, n, r) {
                Xr(e, Hs(e), t, r)
            }),
            Xc = Zr(function(t, e, n, r) {
                Xr(e, Ws(e), t, r)
            }),
            Gc = ka(function(t, e) {
                return Sn(t, $n(e, 1))
            }),
            Qc = ka(function(t) {
                return t.push(Q, cn), n(Yc, Q, t)
            }),
            Zc = ka(function(t) {
                return t.push(Q, Hi), n(nf, Q, t)
            }),
            Jc = si(function(t, e, n) {
                t[e] = n
            }, Du(Fu)),
            Kc = si(function(t, e, n) {
                sl.call(t, e) ? t[e].push(n) : t[e] = [n]
            }, wi),
            tf = ka(tr),
            ef = Zr(function(t, e, n) {
                cr(t, e, n)
            }),
            nf = Zr(function(t, e, n, r) {
                cr(t, e, n, r)
            }),
            rf = ka(function(t, e) {
                return null == t ? {} : (e = f($n(e, 1), En), hr(t, Rn(bi(t), e)))
            }),
            of = ka(function(t, e) {
                return null == t ? {} : hr(t, $n(e, 1))
            }),
            af = ni(function(t, e, n) {
                return e = e.toLowerCase(), t + (n ? su(e) : e)
            }),
            sf = ni(function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }),
            uf = ni(function(t, e, n) {
                return t + (n ? " " : "") + e.toLowerCase()
            }),
            lf = ei("toLowerCase"),
            cf = ni(function(t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase()
            }),
            ff = ni(function(t, e, n) {
                return t + (n ? " " : "") + hf(e)
            }),
            pf = ni(function(t, e, n) {
                return t + (n ? " " : "") + e.toUpperCase()
            }),
            hf = ei("toUpperCase"),
            df = ka(function(t, e) {
                try {
                    return n(t, Q, e)
                } catch (r) {
                    return Ga(r) ? r : new tl(r)
                }
            }),
            vf = ka(function(t, e) {
                return o($n(e, 1), function(e) {
                    t[e] = Nc(t[e], t)
                }), t
            }),
            mf = oi(),
            yf = oi(!0),
            gf = ka(function(t, e) {
                return function(n) {
                    return tr(n, t, e)
                }
            }),
            bf = ka(function(t, e) {
                return function(n) {
                    return tr(t, n, e)
                }
            }),
            xf = ui(f),
            wf = ui(s),
            _f = ui(v),
            Tf = fi(),
            Sf = fi(!0),
            Cf = N(function(t, e) {
                return t + e
            }),
            kf = hi("ceil"),
            Ef = N(function(t, e) {
                return t / e
            }),
            Af = hi("floor"),
            jf = N(function(t, e) {
                return t * e
            }),
            Of = hi("round"),
            Df = N(function(t, e) {
                return t - e
            });
        return Ae.after = ma, Ae.ary = ya, Ae.assign = Vc, Ae.assignIn = Uc, Ae.assignInWith = Yc, Ae.assignWith = Xc, Ae.at = Gc, Ae.before = ga, Ae.bind = Nc, Ae.bindAll = vf, Ae.bindKey = zc, Ae.castArray = Da, Ae.chain = qo, Ae.chunk = Yi, Ae.compact = Xi, Ae.concat = Gi, Ae.cond = ju, Ae.conforms = Ou, Ae.constant = Du, Ae.countBy = Ac, Ae.create = js, Ae.curry = ba, Ae.curryRight = xa, Ae.debounce = wa, Ae.defaults = Qc, Ae.defaultsDeep = Zc, Ae.defer = Lc, Ae.delay = Mc, Ae.difference = cc, Ae.differenceBy = fc, Ae.differenceWith = pc, Ae.drop = Qi, Ae.dropRight = Zi, Ae.dropRightWhile = Ji, Ae.dropWhile = Ki, Ae.fill = to, Ae.filter = Zo, Ae.flatMap = ta, Ae.flatMapDeep = ea, Ae.flatMapDepth = na, Ae.flatten = ro, Ae.flattenDeep = io, Ae.flattenDepth = oo, Ae.flip = _a, Ae.flow = mf, Ae.flowRight = yf, Ae.fromPairs = ao, Ae.functions = zs, Ae.functionsIn = Ls, Ae.groupBy = jc, Ae.initial = lo, Ae.intersection = hc, Ae.intersectionBy = dc, Ae.intersectionWith = vc, Ae.invert = Jc, Ae.invertBy = Kc, Ae.invokeMap = Oc, Ae.iteratee = Pu, Ae.keyBy = Dc, Ae.keys = Ws, Ae.keysIn = Hs, Ae.map = aa, Ae.mapKeys = $s, Ae.mapValues = Bs, Ae.matches = Iu, Ae.matchesProperty = Nu, Ae.memoize = Ta, Ae.merge = ef, Ae.mergeWith = nf, Ae.method = gf, Ae.methodOf = bf, Ae.mixin = zu, Ae.negate = Sa, Ae.nthArg = Ru, Ae.omit = rf, Ae.omitBy = Vs, Ae.once = Ca, Ae.orderBy = sa, Ae.over = xf, Ae.overArgs = Rc, Ae.overEvery = wf, Ae.overSome = _f, Ae.partial = qc, Ae.partialRight = Wc, Ae.partition = Fc, Ae.pick = of, Ae.pickBy = Us, Ae.property = qu, Ae.propertyOf = Wu, Ae.pull = mc, Ae.pullAll = ho, Ae.pullAllBy = vo, Ae.pullAllWith = mo, Ae.pullAt = yc, Ae.range = Tf, Ae.rangeRight = Sf, Ae.rearg = Hc, Ae.reject = ca, Ae.remove = yo, Ae.rest = ka, Ae.reverse = go, Ae.sampleSize = pa, Ae.set = Xs, Ae.setWith = Gs, Ae.shuffle = ha, Ae.slice = bo, Ae.sortBy = Pc, Ae.sortedUniq = ko, Ae.sortedUniqBy = Eo, Ae.split = gu, Ae.spread = Ea, Ae.tail = Ao, Ae.take = jo, Ae.takeRight = Oo, Ae.takeRightWhile = Do, Ae.takeWhile = Fo, Ae.tap = Wo, Ae.throttle = Aa, Ae.thru = Ho, Ae.toArray = _s, Ae.toPairs = Qs, Ae.toPairsIn = Zs, Ae.toPath = $u, Ae.toPlainObject = ks, Ae.transform = Js, Ae.unary = ja, Ae.union = gc, Ae.unionBy = bc, Ae.unionWith = xc, Ae.uniq = Po, Ae.uniqBy = Io, Ae.uniqWith = No, Ae.unset = Ks, Ae.unzip = zo, Ae.unzipWith = Lo, Ae.update = tu, Ae.updateWith = eu, Ae.values = nu, Ae.valuesIn = ru, Ae.without = wc, Ae.words = Au, Ae.wrap = Oa, Ae.xor = _c, Ae.xorBy = Tc, Ae.xorWith = Sc, Ae.zip = Cc, Ae.zipObject = Mo, Ae.zipObjectDeep = Ro, Ae.zipWith = kc, Ae.entries = Qs, Ae.entriesIn = Zs, Ae.extend = Uc, Ae.extendWith = Yc, zu(Ae, Ae), Ae.add = Cf, Ae.attempt = df, Ae.camelCase = af, Ae.capitalize = su, Ae.ceil = kf, Ae.clamp = iu, Ae.clone = Fa, Ae.cloneDeep = Ia, Ae.cloneDeepWith = Na, Ae.cloneWith = Pa, Ae.deburr = uu, Ae.divide = Ef, Ae.endsWith = lu, Ae.eq = za, Ae.escape = cu, Ae.escapeRegExp = fu, Ae.every = Qo, Ae.find = Jo, Ae.findIndex = eo, Ae.findKey = Os, Ae.findLast = Ko, Ae.findLastIndex = no, Ae.findLastKey = Ds, Ae.floor = Af, Ae.forEach = ra, Ae.forEachRight = ia, Ae.forIn = Fs, Ae.forInRight = Ps, Ae.forOwn = Is, Ae.forOwnRight = Ns, Ae.get = Ms, Ae.gt = La, Ae.gte = Ma, Ae.has = Rs, Ae.hasIn = qs, Ae.head = so, Ae.identity = Fu, Ae.includes = oa, Ae.indexOf = uo, Ae.inRange = ou, Ae.invoke = tf, Ae.isArguments = Ra, Ae.isArray = $c, Ae.isArrayBuffer = qa, Ae.isArrayLike = Wa, Ae.isArrayLikeObject = Ha, Ae.isBoolean = $a, Ae.isBuffer = Bc, Ae.isDate = Ba, Ae.isElement = Va, Ae.isEmpty = Ua, Ae.isEqual = Ya, Ae.isEqualWith = Xa, Ae.isError = Ga, Ae.isFinite = Qa, Ae.isFunction = Za, Ae.isInteger = Ja, Ae.isLength = Ka, Ae.isMap = ns, Ae.isMatch = rs, Ae.isMatchWith = is, Ae.isNaN = os, Ae.isNative = as, Ae.isNil = us, Ae.isNull = ss, Ae.isNumber = ls, Ae.isObject = ts, Ae.isObjectLike = es, Ae.isPlainObject = cs, Ae.isRegExp = fs, Ae.isSafeInteger = ps, Ae.isSet = hs, Ae.isString = ds, Ae.isSymbol = vs, Ae.isTypedArray = ms, Ae.isUndefined = ys, Ae.isWeakMap = gs, Ae.isWeakSet = bs, Ae.join = co, Ae.kebabCase = sf, Ae.last = fo, Ae.lastIndexOf = po, Ae.lowerCase = uf, Ae.lowerFirst = lf, Ae.lt = xs, Ae.lte = ws, Ae.max = Vu, Ae.maxBy = Uu, Ae.mean = Yu, Ae.meanBy = Xu, Ae.min = Gu, Ae.minBy = Qu, Ae.multiply = jf, Ae.noConflict = Lu, Ae.noop = Mu, Ae.now = Ic, Ae.pad = pu, Ae.padEnd = hu, Ae.padStart = du, Ae.parseInt = vu, Ae.random = au, Ae.reduce = ua, Ae.reduceRight = la, Ae.repeat = mu, Ae.replace = yu, Ae.result = Ys, Ae.round = Of, Ae.runInContext = G, Ae.sample = fa, Ae.size = da, Ae.snakeCase = cf, Ae.some = va, Ae.sortedIndex = xo, Ae.sortedIndexBy = wo, Ae.sortedIndexOf = _o, Ae.sortedLastIndex = To, Ae.sortedLastIndexBy = So, Ae.sortedLastIndexOf = Co, Ae.startCase = ff, Ae.startsWith = bu, Ae.subtract = Df, Ae.sum = Zu, Ae.sumBy = Ju, Ae.template = xu, Ae.times = Hu, Ae.toInteger = Ts, Ae.toLength = Ss, Ae.toLower = wu, Ae.toNumber = Cs, Ae.toSafeInteger = Es, Ae.toString = As, Ae.toUpper = _u, Ae.trim = Tu, Ae.trimEnd = Su, Ae.trimStart = Cu, Ae.truncate = ku, Ae.unescape = Eu, Ae.uniqueId = Bu, Ae.upperCase = pf, Ae.upperFirst = hf, Ae.each = ra, Ae.eachRight = ia, Ae.first = so, zu(Ae, function() {
            var t = {};
            return Bn(Ae, function(e, n) {
                sl.call(Ae.prototype, n) || (t[n] = e)
            }), t
        }(), {
            chain: !1
        }), Ae.VERSION = Z, o(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
            Ae[t].placeholder = Ae
        }), o(["drop", "take"], function(t, e) {
            Ie.prototype[t] = function(n) {
                var r = this.__filtered__;
                if (r && !e) return new Ie(this);
                n = n === Q ? 1 : Dl(Ts(n), 0);
                var i = this.clone();
                return r ? i.__takeCount__ = Fl(n, i.__takeCount__) : i.__views__.push({
                    size: Fl(n, Ct),
                    type: t + (i.__dir__ < 0 ? "Right" : "")
                }), i
            }, Ie.prototype[t + "Right"] = function(e) {
                return this.reverse()[t](e).reverse()
            }
        }), o(["filter", "map", "takeWhile"], function(t, e) {
            var n = e + 1,
                r = n == gt || n == xt;
            Ie.prototype[t] = function(t) {
                var e = this.clone();
                return e.__iteratees__.push({
                    iteratee: wi(t, 3),
                    type: n
                }), e.__filtered__ = e.__filtered__ || r, e
            }
        }), o(["head", "last"], function(t, e) {
            var n = "take" + (e ? "Right" : "");
            Ie.prototype[t] = function() {
                return this[n](1).value()[0]
            }
        }), o(["initial", "tail"], function(t, e) {
            var n = "drop" + (e ? "" : "Right");
            Ie.prototype[t] = function() {
                return this.__filtered__ ? new Ie(this) : this[n](1)
            }
        }), Ie.prototype.compact = function() {
            return this.filter(Fu)
        }, Ie.prototype.find = function(t) {
            return this.filter(t).head()
        }, Ie.prototype.findLast = function(t) {
            return this.reverse().find(t)
        }, Ie.prototype.invokeMap = ka(function(t, e) {
            return "function" == typeof t ? new Ie(this) : this.map(function(n) {
                return tr(n, t, e)
            })
        }), Ie.prototype.reject = function(t) {
            return t = wi(t, 3), this.filter(function(e) {
                return !t(e)
            })
        }, Ie.prototype.slice = function(t, e) {
            t = Ts(t);
            var n = this;
            return n.__filtered__ && (t > 0 || 0 > e) ? new Ie(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== Q && (e = Ts(e), n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
        }, Ie.prototype.takeRightWhile = function(t) {
            return this.reverse().takeWhile(t).reverse()
        }, Ie.prototype.toArray = function() {
            return this.take(Ct)
        }, Bn(Ie.prototype, function(t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e),
                r = /^(?:head|last)$/.test(e),
                i = Ae[r ? "take" + ("last" == e ? "Right" : "") : e],
                o = r || /^find/.test(e);
            i && (Ae.prototype[e] = function() {
                var e = this.__wrapped__,
                    a = r ? [1] : arguments,
                    s = e instanceof Ie,
                    u = a[0],
                    l = s || $c(e),
                    c = function(t) {
                        var e = i.apply(Ae, p([t], a));
                        return r && f ? e[0] : e
                    };
                l && n && "function" == typeof u && 1 != u.length && (s = l = !1);
                var f = this.__chain__,
                    h = !!this.__actions__.length,
                    d = o && !f,
                    v = s && !h;
                if (!o && l) {
                    e = v ? e : new Ie(this);
                    var m = t.apply(e, a);
                    return m.__actions__.push({
                        func: Ho,
                        args: [c],
                        thisArg: Q
                    }), new Pe(m, f)
                }
                return d && v ? t.apply(this, a) : (m = this.thru(c), d ? r ? m.value()[0] : m.value() : m)
            })
        }), o(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
            var e = il[t],
                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                r = /^(?:pop|shift)$/.test(t);
            Ae.prototype[t] = function() {
                var t = arguments;
                if (r && !this.__chain__) {
                    var i = this.value();
                    return e.apply($c(i) ? i : [], t)
                }
                return this[n](function(n) {
                    return e.apply($c(n) ? n : [], t)
                })
            }
        }), Bn(Ie.prototype, function(t, e) {
            var n = Ae[e];
            if (n) {
                var r = n.name + "",
                    i = Bl[r] || (Bl[r] = []);
                i.push({
                    name: e,
                    func: n
                })
            }
        }), Bl[ai(Q, rt).name] = [{
            name: "wrapper",
            func: Q
        }], Ie.prototype.clone = Ne, Ie.prototype.reverse = ze, Ie.prototype.value = Le, Ae.prototype.at = Ec, Ae.prototype.chain = $o, Ae.prototype.commit = Bo, Ae.prototype.next = Vo, Ae.prototype.plant = Yo, Ae.prototype.reverse = Xo, Ae.prototype.toJSON = Ae.prototype.valueOf = Ae.prototype.value = Go, xl && (Ae.prototype[xl] = Uo), Ae
    }
    var Q, Z = "4.8.2",
        J = 200,
        K = "Expected a function",
        tt = "__lodash_hash_undefined__",
        et = "__lodash_placeholder__",
        nt = 1,
        rt = 2,
        it = 4,
        ot = 8,
        at = 16,
        st = 32,
        ut = 64,
        lt = 128,
        ct = 256,
        ft = 512,
        pt = 1,
        ht = 2,
        dt = 30,
        vt = "...",
        mt = 150,
        yt = 16,
        gt = 1,
        bt = 2,
        xt = 3,
        wt = 1 / 0,
        _t = 9007199254740991,
        Tt = 1.7976931348623157e308,
        St = NaN,
        Ct = 4294967295,
        kt = Ct - 1,
        Et = Ct >>> 1,
        At = "[object Arguments]",
        jt = "[object Array]",
        Ot = "[object Boolean]",
        Dt = "[object Date]",
        Ft = "[object Error]",
        Pt = "[object Function]",
        It = "[object GeneratorFunction]",
        Nt = "[object Map]",
        zt = "[object Number]",
        Lt = "[object Object]",
        Mt = "[object Promise]",
        Rt = "[object RegExp]",
        qt = "[object Set]",
        Wt = "[object String]",
        Ht = "[object Symbol]",
        $t = "[object WeakMap]",
        Bt = "[object WeakSet]",
        Vt = "[object ArrayBuffer]",
        Ut = "[object DataView]",
        Yt = "[object Float32Array]",
        Xt = "[object Float64Array]",
        Gt = "[object Int8Array]",
        Qt = "[object Int16Array]",
        Zt = "[object Int32Array]",
        Jt = "[object Uint8Array]",
        Kt = "[object Uint8ClampedArray]",
        te = "[object Uint16Array]",
        ee = "[object Uint32Array]",
        ne = /\b__p \+= '';/g,
        re = /\b(__p \+=) '' \+/g,
        ie = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        oe = /&(?:amp|lt|gt|quot|#39|#96);/g,
        ae = /[&<>"'`]/g,
        se = RegExp(oe.source),
        ue = RegExp(ae.source),
        le = /<%-([\s\S]+?)%>/g,
        ce = /<%([\s\S]+?)%>/g,
        fe = /<%=([\s\S]+?)%>/g,
        pe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        he = /^\w*$/,
        de = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
        ve = /[\\^$.*+?()[\]{}|]/g,
        me = RegExp(ve.source),
        ye = /^\s+|\s+$/g,
        ge = /^\s+/,
        be = /\s+$/,
        xe = /\\(\\)?/g,
        we = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        _e = /\w*$/,
        Te = /^0x/i,
        Se = /^[-+]0x[0-9a-f]+$/i,
        Ce = /^0b[01]+$/i,
        ke = /^\[object .+?Constructor\]$/,
        Ee = /^0o[0-7]+$/i,
        Ae = /^(?:0|[1-9]\d*)$/,
        je = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Oe = /($^)/,
        De = /['\n\r\u2028\u2029\\]/g,
        Fe = "\\ud800-\\udfff",
        Pe = "\\u0300-\\u036f\\ufe20-\\ufe23",
        Ie = "\\u20d0-\\u20f0",
        Ne = "\\u2700-\\u27bf",
        ze = "a-z\\xdf-\\xf6\\xf8-\\xff",
        Le = "\\xac\\xb1\\xd7\\xf7",
        Me = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        Re = "\\u2018\\u2019\\u201c\\u201d",
        qe = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        We = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        He = "\\ufe0e\\ufe0f",
        $e = Le + Me + Re + qe,
        Be = "[" + Fe + "]",
        Ve = "[" + $e + "]",
        Ue = "[" + Pe + Ie + "]",
        Ye = "\\d+",
        Xe = "[" + Ne + "]",
        Ge = "[" + ze + "]",
        Qe = "[^" + Fe + $e + Ye + Ne + ze + We + "]",
        Ze = "\\ud83c[\\udffb-\\udfff]",
        Je = "(?:" + Ue + "|" + Ze + ")",
        Ke = "[^" + Fe + "]",
        tn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        en = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        nn = "[" + We + "]",
        rn = "\\u200d",
        on = "(?:" + Ge + "|" + Qe + ")",
        an = "(?:" + nn + "|" + Qe + ")",
        sn = Je + "?",
        un = "[" + He + "]?",
        ln = "(?:" + rn + "(?:" + [Ke, tn, en].join("|") + ")" + un + sn + ")*",
        cn = un + sn + ln,
        fn = "(?:" + [Xe, tn, en].join("|") + ")" + cn,
        pn = "(?:" + [Ke + Ue + "?", Ue, tn, en, Be].join("|") + ")",
        hn = RegExp(Ue, "g"),
        dn = RegExp(Ze + "(?=" + Ze + ")|" + pn + cn, "g"),
        vn = RegExp("[" + rn + Fe + Pe + Ie + He + "]"),
        mn = /[a-zA-Z0-9]+/g,
        yn = RegExp([nn + "?" + Ge + "+(?=" + [Ve, nn, "$"].join("|") + ")", an + "+(?=" + [Ve, nn + on, "$"].join("|") + ")", nn + "?" + on + "+", nn + "+", Ye, fn].join("|"), "g"),
        gn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        bn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        xn = -1,
        wn = {};
    wn[Yt] = wn[Xt] = wn[Gt] = wn[Qt] = wn[Zt] = wn[Jt] = wn[Kt] = wn[te] = wn[ee] = !0, wn[At] = wn[jt] = wn[Vt] = wn[Ot] = wn[Ut] = wn[Dt] = wn[Ft] = wn[Pt] = wn[Nt] = wn[zt] = wn[Lt] = wn[Rt] = wn[qt] = wn[Wt] = wn[$t] = !1;
    var _n = {};
    _n[At] = _n[jt] = _n[Vt] = _n[Ut] = _n[Ot] = _n[Dt] = _n[Yt] = _n[Xt] = _n[Gt] = _n[Qt] = _n[Zt] = _n[Nt] = _n[zt] = _n[Lt] = _n[Rt] = _n[qt] = _n[Wt] = _n[Ht] = _n[Jt] = _n[Kt] = _n[te] = _n[ee] = !0, _n[Ft] = _n[Pt] = _n[$t] = !1;
    var Tn = {
            "�": "A",
            "횁": "A",
            "횂": "A",
            "횄": "A",
            "횆": "A",
            "횇": "A",
            "횪": "a",
            "찼": "a",
            "창": "a",
            "찾": "a",
            "채": "a",
            "책": "a",
            "횉": "C",
            "챌": "c",
            "횖": "D",
            "챨": "d",
            "횊": "E",
            "횋": "E",
            "횎": "E",
            "횏": "E",
            "챔": "e",
            "챕": "e",
            "챗": "e",
            "챘": "e",
            "횑": "I",
            "횒": "I",
            "횓": "I",
            "횕": "I",
            "챙": "i",
            "챠": "i",
            "챤": "i",
            "챦": "i",
            "횗": "N",
            "챰": "n",
            "횘": "O",
            "횙": "O",
            "횚": "O",
            "횛": "O",
            "횜": "O",
            "횠": "O",
            "챵": "o",
            "처": "o",
            "척": "o",
            "천": "o",
            "철": "o",
            "첩": "o",
            "횢": "U",
            "횣": "U",
            "횤": "U",
            "횥": "U",
            "첫": "u",
            "첬": "u",
            "청": "u",
            "체": "u",
            "횦": "Y",
            "첵": "y",
            "첼": "y",
            "횈": "Ae",
            "챈": "ae",
            "횧": "Th",
            "첸": "th",
            "횩": "ss"
        },
        Sn = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        Cn = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        kn = {
            "function": !0,
            object: !0
        },
        En = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        An = parseFloat,
        jn = parseInt,
        On = kn[typeof exports] && exports && !exports.nodeType ? exports : Q,
        Dn = kn[typeof module] && module && !module.nodeType ? module : Q,
        Fn = Dn && Dn.exports === On ? On : Q,
        Pn = D(On && Dn && "object" == typeof global && global),
        In = D(kn[typeof self] && self),
        Nn = D(kn[typeof window] && window),
        zn = D(kn[typeof this] && this),
        Ln = Pn || Nn !== (zn && zn.window) && Nn || In || zn || Function("return this")(),
        Mn = G();
    (Nn || In || {})._ = Mn, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return Mn
    }) : On && Dn ? (Fn && ((Dn.exports = Mn)._ = Mn), On._ = Mn) : Ln._ = Mn
}.call(this),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = ot.type(t);
            return "function" === n || ot.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function r(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (vt.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function(t) {
                return K.call(e, t) > -1 !== n
            })
        }

        function i(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = {};
            return ot.each(t.match(wt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            G.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a), ot.ready()
        }

        function s() {
            this.expando = ot.expando + s.uid++
        }

        function u(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)
                if (r = "data-" + e.replace(At, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? ot.parseJSON(n) : n
                    } catch (i) {}
                    kt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function l(t, e, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return ot.css(t, e, "")
                },
                u = s(),
                l = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
                c = (ot.cssNumber[e] || "px" !== l && +u) && Ot.exec(ot.css(t, e));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do o = o || ".5", c /= o, ot.style(t, e, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function c(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
        }

        function f(t, e) {
            for (var n = 0, r = t.length; r > n; n++) Ct.set(t[n], "globalEval", !e || Ct.get(e[n], "globalEval"))
        }

        function p(t, e, n, r, i) {
            for (var o, a, s, u, l, p, h = e.createDocumentFragment(), d = [], v = 0, m = t.length; m > v; v++)
                if (o = t[v], o || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(d, o.nodeType ? [o] : o);
                    else if (Lt.test(o)) {
                for (a = a || h.appendChild(e.createElement("div")), s = (It.exec(o) || ["", ""])[1].toLowerCase(), u = zt[s] || zt._default, a.innerHTML = u[1] + ot.htmlPrefilter(o) + u[2], p = u[0]; p--;) a = a.lastChild;
                ot.merge(d, a.childNodes), a = h.firstChild, a.textContent = ""
            } else d.push(e.createTextNode(o));
            for (h.textContent = "", v = 0; o = d[v++];)
                if (r && ot.inArray(o, r) > -1) i && i.push(o);
                else if (l = ot.contains(o.ownerDocument, o), a = c(h.appendChild(o), "script"), l && f(a), n)
                for (p = 0; o = a[p++];) Nt.test(o.type || "") && n.push(o);
            return h
        }

        function h() {
            return !0
        }

        function d() {
            return !1
        }

        function v() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function m(t, e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in e) m(t, s, n, r, e[s], o);
                return t
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = d;
            else if (!i) return t;
            return 1 === o && (a = i, i = function(t) {
                return ot().off(t), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ot.guid++)), t.each(function() {
                ot.event.add(this, e, i, r, n)
            })
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function b(t) {
            var e = Bt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            var n, r, i, o, a, s, u, l;
            if (1 === e.nodeType) {
                if (Ct.hasData(t) && (o = Ct.access(t), a = Ct.set(e, o), l = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in l)
                        for (n = 0, r = l[i].length; r > n; n++) ot.event.add(e, i, l[i][n])
                }
                kt.hasData(t) && (s = kt.access(t), u = ot.extend({}, s), kt.set(e, u))
            }
        }

        function w(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Pt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function _(t, e, n, r) {
            e = Z.apply([], e);
            var i, o, a, s, u, l, f = 0,
                h = t.length,
                d = h - 1,
                v = e[0],
                m = ot.isFunction(v);
            if (m || h > 1 && "string" == typeof v && !rt.checkClone && $t.test(v)) return t.each(function(i) {
                var o = t.eq(i);
                m && (e[0] = v.call(this, i, o.html())), _(o, e, n, r)
            });
            if (h && (i = p(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (a = ot.map(c(i, "script"), g), s = a.length; h > f; f++) u = i, f !== d && (u = ot.clone(u, !0, !0), s && ot.merge(a, c(u, "script"))), n.call(t[f], u, f);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, ot.map(a, b), f = 0; s > f; f++) u = a[f], Nt.test(u.type || "") && !Ct.access(u, "globalEval") && ot.contains(l, u) && (u.src ? ot._evalUrl && ot._evalUrl(u.src) : ot.globalEval(u.textContent.replace(Vt, "")))
            }
            return t
        }

        function T(t, e, n) {
            for (var r, i = e ? ot.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ot.cleanData(c(r)), r.parentNode && (n && ot.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
            return t
        }

        function S(t, e) {
            var n = ot(e.createElement(t)).appendTo(e.body),
                r = ot.css(n[0], "display");
            return n.detach(), r
        }

        function C(t) {
            var e = G,
                n = Yt[t];
            return n || (n = S(t, e), "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), n = S(t, e), Ut.detach()), Yt[t] = n), n
        }

        function k(t, e, n) {
            var r, i, o, a, s = t.style;
            return n = n || Qt(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), n && !rt.pixelMarginRight() && Gt.test(a) && Xt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
        }

        function E(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function A(t) {
            if (t in re) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
                if (t = ne[n] + e, t in re) return t
        }

        function j(t, e, n) {
            var r = Ot.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
        }

        function O(t, e, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(t, n + Dt[o], !0, i)), r ? ("content" === n && (a -= ot.css(t, "padding" + Dt[o], !0, i)), "margin" !== n && (a -= ot.css(t, "border" + Dt[o] + "Width", !0, i))) : (a += ot.css(t, "padding" + Dt[o], !0, i), "padding" !== n && (a += ot.css(t, "border" + Dt[o] + "Width", !0, i)));
            return a
        }

        function D(e, n, r) {
            var i = !0,
                o = "width" === n ? e.offsetWidth : e.offsetHeight,
                a = Qt(e),
                s = "border-box" === ot.css(e, "boxSizing", !1, a);
            if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = k(e, n, a), (0 > o || null == o) && (o = e.style[n]), Gt.test(o)) return o;
                i = s && (rt.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
            }
            return o + O(e, n, r || (s ? "border" : "content"), i, a) + "px"
        }

        function F(t, e) {
            for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = Ct.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ft(r) && (o[a] = Ct.access(r, "olddisplay", C(r.nodeName)))) : (i = Ft(r), "none" === n && i || Ct.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
            for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function P(t, e, n, r, i) {
            return new P.prototype.init(t, e, n, r, i)
        }

        function I() {
            return t.setTimeout(function() {
                ie = void 0
            }), ie = ot.now()
        }

        function N(t, e) {
            var n, r = 0,
                i = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Dt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function z(t, e, n) {
            for (var r, i = (R.tweeners[e] || []).concat(R.tweeners["*"]), o = 0, a = i.length; a > o; o++)
                if (r = i[o].call(n, e, t)) return r
        }

        function L(t, e, n) {
            var r, i, o, a, s, u, l, c, f = this,
                p = {},
                h = t.style,
                d = t.nodeType && Ft(t),
                v = Ct.get(t, "fxshow");
            n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = ot.css(t, "display"), c = "none" === l ? Ct.get(t, "olddisplay") || C(t.nodeName) : l, "inline" === c && "none" === ot.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (r in e)
                if (i = e[r], ae.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        d = !0
                    }
                    p[r] = v && v[r] || ot.style(t, r)
                } else l = void 0;
            if (ot.isEmptyObject(p)) "inline" === ("none" === l ? C(t.nodeName) : l) && (h.display = l);
            else {
                v ? "hidden" in v && (d = v.hidden) : v = Ct.access(t, "fxshow", {}), o && (v.hidden = !d), d ? ot(t).show() : f.done(function() {
                    ot(t).hide()
                }), f.done(function() {
                    var e;
                    Ct.remove(t, "fxshow");
                    for (e in p) ot.style(t, e, p[e])
                });
                for (r in p) a = z(d ? v[r] : 0, r, f), r in v || (v[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, r, i, o, a;
            for (n in t)
                if (r = ot.camelCase(n), i = e[r], o = t[n], ot.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = ot.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete t[r];
                    for (n in o) n in t || (t[n] = o[n], e[n] = i)
                } else e[r] = i
        }

        function R(t, e, n) {
            var r, i, o = 0,
                a = R.prefilters.length,
                s = ot.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var e = ie || I(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                    return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
                },
                l = s.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {},
                        easing: ot.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ie || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var r = ot.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(e) {
                        var n = 0,
                            r = e ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) l.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]), this
                    }
                }),
                c = l.props;
            for (M(c, l.opts.specialEasing); a > o; o++)
                if (r = R.prefilters[o].call(l, t, c, l.opts)) return ot.isFunction(r.stop) && (ot._queueHooks(l.elem, l.opts.queue).stop = ot.proxy(r.stop, r)), r;
            return ot.map(c, z, l), ot.isFunction(l.opts.start) && l.opts.start.call(t, l), ot.fx.timer(ot.extend(u, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function q(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function W(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0,
                    o = e.toLowerCase().match(wt) || [];
                if (ot.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function H(t, e, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ot.each(t[s] || [], function(t, s) {
                    var l = s(e, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
                }), u
            }
            var o = {},
                a = t === ke;
            return i(e.dataTypes[0]) || !o["*"] && i("*")
        }

        function $(t, e) {
            var n, r, i = ot.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && ot.extend(!0, t, r), t
        }

        function B(t, e, n) {
            for (var r, i, o, a, s = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
        }

        function V(t, e, n, r) {
            var i, o, a, s, u, l = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = l[u + " " + o] || l["* " + o], !a)
                    for (i in l)
                        if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function U(t, e, n, r) {
            var i;
            if (ot.isArray(e)) ot.each(e, function(e, i) {
                n || Oe.test(t) ? r(t, i) : U(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            });
            else if (n || "object" !== ot.type(e)) r(t, e);
            else
                for (i in e) U(t + "[" + i + "]", e[i], n, r)
        }

        function Y(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var X = [],
            G = t.document,
            Q = X.slice,
            Z = X.concat,
            J = X.push,
            K = X.indexOf,
            tt = {},
            et = tt.toString,
            nt = tt.hasOwnProperty,
            rt = {},
            it = "2.2.3",
            ot = function(t, e) {
                return new ot.fn.init(t, e)
            },
            at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            ut = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: it,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return ot.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: J,
            sort: X.sort,
            splice: X.splice
        }, ot.extend = ot.fn.extend = function() {
            var t, e, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = a[e], r = t[e], a !== r && (l && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, a[e] = ot.extend(l, o, r)) : void 0 !== r && (a[e] = r));
            return a
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || nt.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(st, "ms-").replace(ut, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var r, i = 0;
                if (n(t))
                    for (r = t.length; r > i && e.call(t[i], i, t[i]) !== !1; i++);
                else
                    for (i in t)
                        if (e.call(t[i], i, t[i]) === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(at, "")
            },
            makeArray: function(t, e) {
                var r = e || [];
                return null != t && (n(Object(t)) ? ot.merge(r, "string" == typeof t ? [t] : t) : J.call(r, t)), r
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : K.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
                return t.length = i, t
            },
            grep: function(t, e, n) {
                for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, r) {
                var i, o, a = 0,
                    s = [];
                if (n(t))
                    for (i = t.length; i > a; a++) o = e(t[a], a, r), null != o && s.push(o);
                else
                    for (a in t) o = e(t[a], a, r), null != o && s.push(o);
                return Z.apply([], s)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, r, i;
                return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (r = Q.call(arguments, 2), i = function() {
                    return t.apply(e || this, r.concat(Q.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
            },
            now: Date.now,
            support: rt
        }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = X[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, n, r) {
                var i, o, a, s, u, l, f, h, d = e && e.ownerDocument,
                    v = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v) return n;
                if (!r && ((e ? e.ownerDocument || e : q) !== F && D(e), e = e || F, I)) {
                    if (11 !== v && (l = yt.exec(t)))
                        if (i = l[1]) {
                            if (9 === v) {
                                if (!(a = e.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (d && (a = d.getElementById(i)) && M(e, a) && a.id === i) return n.push(a), n
                        } else {
                            if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(i)), n
                        }
                    if (w.qsa && !V[t + " "] && (!N || !N.test(t))) {
                        if (1 !== v) d = e, h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(bt, "\\$&") : e.setAttribute("id", s = R), f = C(t), o = f.length, u = pt.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = u + " " + p(f[o]);
                            h = f.join(","), d = gt.test(t) && c(e.parentNode) || e
                        }
                        if (h) try {
                            return J.apply(n, d.querySelectorAll(h)), n
                        } catch (m) {} finally {
                            s === R && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(st, "$1"), e, n, r)
            }

            function n() {
                function t(n, r) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
                var e = [];
                return t
            }

            function r(t) {
                return t[R] = !0, t
            }

            function i(t) {
                var e = F.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = e
            }

            function a(t, e) {
                var n = e && t,
                    r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function u(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function l(t) {
                return r(function(e) {
                    return e = +e, r(function(n, r) {
                        for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function f() {}

            function p(t) {
                for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
                return r
            }

            function h(t, e, n) {
                var r = e.dir,
                    i = n && "parentNode" === r,
                    o = H++;
                return e.first ? function(e, n, o) {
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) return t(e, n, o)
                } : function(e, n, a) {
                    var s, u, l, c = [W, o];
                    if (a) {
                        for (; e = e[r];)
                            if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                    } else
                        for (; e = e[r];)
                            if (1 === e.nodeType || i) {
                                if (l = e[R] || (e[R] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
                                if (u[r] = c, c[2] = t(e, n, a)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, n, r) {
                    for (var i = t.length; i--;)
                        if (!t[i](e, n, r)) return !1;
                    return !0
                } : t[0]
            }

            function v(t, n, r) {
                for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
                return r
            }

            function m(t, e, n, r, i) {
                for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), l && e.push(s)));
                return a
            }

            function y(t, e, n, i, o, a) {
                return i && !i[R] && (i = y(i)), o && !o[R] && (o = y(o, a)), r(function(r, a, s, u) {
                    var l, c, f, p = [],
                        h = [],
                        d = a.length,
                        y = r || v(e || "*", s.nodeType ? [s] : s, []),
                        g = !t || !r && e ? y : m(y, p, t, s, u),
                        b = n ? o || (r ? t : d || i) ? [] : a : g;
                    if (n && n(g, b, s, u), i)
                        for (l = m(b, h), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[h[c]] = !(g[h[c]] = f));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (l = [], c = b.length; c--;)(f = b[c]) && l.push(g[c] = f);
                                o(null, b = [], l, u)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (l = o ? tt(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else b = m(b === a ? b.splice(d, b.length) : b), o ? o(null, a, b, u) : J.apply(a, b)
                })
            }

            function g(t) {
                for (var e, n, r, i = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = h(function(t) {
                        return t === e
                    }, a, !0), l = h(function(t) {
                        return tt(e, t) > -1
                    }, a, !0), c = [function(t, n, r) {
                        var i = !o && (r || n !== A) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                        return e = null, i
                    }]; i > s; s++)
                    if (n = _.relative[t[s].type]) c = [h(d(c), n)];
                    else {
                        if (n = _.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                            for (r = ++s; i > r && !_.relative[t[r].type]; r++);
                            return y(s > 1 && d(c), s > 1 && p(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, r > s && g(t.slice(s, r)), i > r && g(t = t.slice(r)), i > r && p(t))
                        }
                        c.push(n)
                    }
                return d(c)
            }

            function b(t, n) {
                var i = n.length > 0,
                    o = t.length > 0,
                    a = function(r, a, s, u, l) {
                        var c, f, p, h = 0,
                            d = "0",
                            v = r && [],
                            y = [],
                            g = A,
                            b = r || o && _.find.TAG("*", l),
                            x = W += null == g ? 1 : Math.random() || .1,
                            w = b.length;
                        for (l && (A = a === F || a || l); d !== w && null != (c = b[d]); d++) {
                            if (o && c) {
                                for (f = 0, a || c.ownerDocument === F || (D(c), s = !I); p = t[f++];)
                                    if (p(c, a || F, s)) {
                                        u.push(c);
                                        break
                                    }
                                l && (W = x)
                            }
                            i && ((c = !p && c) && h--, r && v.push(c))
                        }
                        if (h += d, i && d !== h) {
                            for (f = 0; p = n[f++];) p(v, y, a, s);
                            if (r) {
                                if (h > 0)
                                    for (; d--;) v[d] || y[d] || (y[d] = Q.call(u));
                                y = m(y)
                            }
                            J.apply(u, y), l && !r && y.length > 0 && h + n.length > 1 && e.uniqueSort(u)
                        }
                        return l && (W = x, A = g), v
                    };
                return i ? r(a) : a
            }
            var x, w, _, T, S, C, k, E, A, j, O, D, F, P, I, N, z, L, M, R = "sizzle" + 1 * new Date,
                q = t.document,
                W = 0,
                H = 0,
                $ = n(),
                B = n(),
                V = n(),
                U = function(t, e) {
                    return t === e && (O = !0), 0
                },
                Y = 1 << 31,
                X = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Z = G.push,
                J = G.push,
                K = G.slice,
                tt = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
                ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ut = new RegExp("^" + nt + "*," + nt + "*"),
                lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ft = new RegExp(ot),
                pt = new RegExp("^" + rt + "$"),
                ht = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                dt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                bt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                _t = function() {
                    D()
                };
            try {
                J.apply(G = K.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
            } catch (Tt) {
                J = {
                    apply: G.length ? function(t, e) {
                        Z.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, S = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, D = e.setDocument = function(t) {
                var e, n, r = t ? t.ownerDocument || t : q;
                return r !== F && 9 === r.nodeType && r.documentElement ? (F = r, P = F.documentElement, I = !S(F), (n = F.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), w.attributes = i(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = i(function(t) {
                    return t.appendChild(F.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = mt.test(F.getElementsByClassName), w.getById = i(function(t) {
                    return P.appendChild(t).id = R, !F.getElementsByName || !F.getElementsByName(R).length
                }), w.getById ? (_.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, _.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, _.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
                }, z = [], N = [], (w.qsa = mt.test(F.querySelectorAll)) && (i(function(t) {
                    P.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || N.push(".#.+[+~]")
                }), i(function(t) {
                    var e = F.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (w.matchesSelector = mt.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                    w.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), z.push("!=", ot)
                }), N = N.length && new RegExp(N.join("|")), z = z.length && new RegExp(z.join("|")), e = mt.test(P.compareDocumentPosition), M = e || mt.test(P.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === F || t.ownerDocument === q && M(q, t) ? -1 : e === F || e.ownerDocument === q && M(q, e) ? 1 : j ? tt(j, t) - tt(j, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n, r = 0,
                        i = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        u = [e];
                    if (!i || !o) return t === F ? -1 : e === F ? 1 : i ? -1 : o ? 1 : j ? tt(j, t) - tt(j, e) : 0;
                    if (i === o) return a(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; s[r] === u[r];) r++;
                    return r ? a(s[r], u[r]) : s[r] === q ? -1 : u[r] === q ? 1 : 0
                }, F) : F
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== F && D(t), n = n.replace(ct, "='$1']"), w.matchesSelector && I && !V[n + " "] && (!z || !z.test(n)) && (!N || !N.test(n))) try {
                    var r = L.call(t, n);
                    if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                } catch (i) {}
                return e(n, F, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== F && D(t), M(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== F && D(t);
                var n = _.attrHandle[e.toLowerCase()],
                    r = n && X.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== r ? r : w.attributes || !I ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    r = 0,
                    i = 0;
                if (O = !w.detectDuplicates, j = !w.sortStable && t.slice(0), t.sort(U), O) {
                    for (; e = t[i++];) e === t[i] && (r = n.push(i));
                    for (; r--;) t.splice(n[r], 1)
                }
                return j = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    r = 0,
                    i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else
                    for (; e = t[r++];) n += T(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = $[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && $(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(i) {
                            var o = e.attr(i, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, r, i) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === r && 0 === i ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, u) {
                            var l, c, f, p, h, d, v = o !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                y = s && e.nodeName.toLowerCase(),
                                g = !u && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; v;) {
                                        for (p = e; p = p[v];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        d = v = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [a ? m.firstChild : m.lastChild], a && g) {
                                    for (p = m, f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[t] || [], h = l[0] === W && l[1], b = h && l[2], p = h && m.childNodes[h]; p = ++h && p && p[v] || (b = h = 0) || d.pop();)
                                        if (1 === p.nodeType && ++b && p === e) {
                                            c[t] = [W, h, b];
                                            break
                                        }
                                } else if (g && (p = e, f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[t] || [], h = l[0] === W && l[1], b = h), b === !1)
                                    for (;
                                        (p = ++h && p && p[v] || (b = h = 0) || d.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (g && (f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[t] = [W, b]), p !== e)););
                                return b -= i, b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var i, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[R] ? o(n) : o.length > 1 ? (i = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                            for (var r, i = o(t, n), a = i.length; a--;) r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                        }) : function(t) {
                            return o(t, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [],
                            n = [],
                            i = k(t.replace(st, "$1"));
                        return i[R] ? r(function(t, e, n, r) {
                            for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return t = t.replace(xt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: r(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === P
                    },
                    focus: function(t) {
                        return t === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !_.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return dt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[x] = u(x);
            return f.prototype = _.filters = _.pseudos, _.setFilters = new f, C = e.tokenize = function(t, n) {
                var r, i, o, a, s, u, l, c = B[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = t, u = [], l = _.preFilter; s;) {
                    r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = lt.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(st, " ")
                    }), s = s.slice(r.length));
                    for (a in _.filter) !(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? e.error(t) : B(t, u).slice(0)
            }, k = e.compile = function(t, e) {
                var n, r = [],
                    i = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--;) o = g(e[n]), o[R] ? r.push(o) : i.push(o);
                    o = V(t, b(i, r)), o.selector = t
                }
                return o
            }, E = e.select = function(t, e, n, r) {
                var i, o, a, s, u, l = "function" == typeof t && t,
                    f = !r && C(t = l.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && I && _.relative[o[1].type]) {
                        if (e = (_.find.ID(a.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                        l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (i = ht.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
                        if ((u = _.find[s]) && (r = u(a.matches[0].replace(xt, wt), gt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(i, 1), t = r.length && p(o), !t) return J.apply(n, r), n;
                            break
                        }
                }
                return (l || k(t, f))(r, e, !I, n, !e || gt.test(t) && c(e.parentNode) || e), n
            }, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!O, D(), w.sortDetached = i(function(t) {
                return 1 & t.compareDocumentPosition(F.createElement("div"))
            }), i(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), i(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, n) {
                var r;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ft = function(t, e, n) {
                for (var r = [], i = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (i && ot(t).is(n)) break;
                        r.push(t)
                    }
                return r
            },
            pt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            ht = ot.expr.match.needsContext,
            dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            vt = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ot.find.matchesSelector(r, t) ? [r] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (ot.contains(i[e], this)) return !0
                }));
                for (e = 0; n > e; e++) ot.find(t, i[e], r);
                return r = this.pushStack(n > 1 ? ot.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
            },
            filter: function(t) {
                return this.pushStack(r(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(r(this, t || [], !0))
            },
            is: function(t) {
                return !!r(this, "string" == typeof t && ht.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var mt, yt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = ot.fn.init = function(t, e, n) {
                var r, i;
                if (!t) return this;
                if (n = n || mt, "string" == typeof t) {
                    if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : yt.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (r[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), dt.test(r[1]) && ot.isPlainObject(e))
                            for (r in e) ot.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this
                    }
                    return i = G.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        gt.prototype = ot.fn, mt = ot(G);
        var bt = /^(?:parents|prev(?:Until|All))/,
            xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            has: function(t) {
                var e = ot(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (ot.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, r = 0, i = this.length, o = [], a = ht.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? K.call(ot(t), this[0]) : K.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ft(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ft(t, "parentNode", n)
            },
            next: function(t) {
                return i(t, "nextSibling")
            },
            prev: function(t) {
                return i(t, "previousSibling")
            },
            nextAll: function(t) {
                return ft(t, "nextSibling")
            },
            prevAll: function(t) {
                return ft(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ft(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ft(t, "previousSibling", n)
            },
            siblings: function(t) {
                return pt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return pt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || ot.merge([], t.childNodes)
            }
        }, function(t, e) {
            ot.fn[t] = function(n, r) {
                var i = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (xt[t] || ot.uniqueSort(i), bt.test(t) && i.reverse()), this.pushStack(i)
            }
        });
        var wt = /\S+/g;
        ot.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : ot.extend({}, t);
            var e, n, r, i, a = [],
                s = [],
                u = -1,
                l = function() {
                    for (i = t.once, r = e = !0; s.length; u = -1)
                        for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = a.length, n = !1);
                    t.memory || (n = !1), e = !1, i && (a = n ? [] : "")
                },
                c = {
                    add: function() {
                        return a && (n && !e && (u = a.length - 1, s.push(n)), function r(e) {
                            ot.each(e, function(e, n) {
                                ot.isFunction(n) ? t.unique && c.has(n) || a.push(n) : n && n.length && "string" !== ot.type(n) && r(n)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return ot.each(arguments, function(t, e) {
                            for (var n;
                                (n = ot.inArray(e, a, n)) > -1;) a.splice(n, 1), u >= n && u--
                        }), this
                    },
                    has: function(t) {
                        return t ? ot.inArray(t, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return i = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return i = s = [], n || (a = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(t, n) {
                        return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, ot.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ot.Deferred(function(n) {
                                ot.each(e, function(e, o) {
                                    var a = ot.isFunction(t[e]) && t[e];
                                    i[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ot.extend(t, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ot.each(e, function(t, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), t && t.call(i, i), i
            },
            when: function(t) {
                var e, n, r, i = 0,
                    o = Q.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0,
                    u = 1 === s ? t : ot.Deferred(),
                    l = function(t, n, r) {
                        return function(i) {
                            n[t] = this, r[t] = arguments.length > 1 ? Q.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var _t;
        ot.fn.ready = function(t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (_t.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
            }
        }), ot.ready.promise = function(e) {
            return _t || (_t = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a))), _t.promise(e)
        }, ot.ready.promise();
        var Tt = function(t, e, n, r, i, o, a) {
                var s = 0,
                    u = t.length,
                    l = null == n;
                if ("object" === ot.type(n)) {
                    i = !0;
                    for (s in n) Tt(t, e, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
                        return l.call(ot(t), n)
                    })), e))
                    for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
            },
            St = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        s.uid = 1, s.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!St(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[e] = n;
                else
                    for (r in e) i[r] = e[r];
                return i
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var r;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, r, i, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        ot.isArray(e) ? r = e.concat(e.map(ot.camelCase)) : (i = ot.camelCase(e), e in o ? r = [e, i] : (r = i, r = r in o ? [r] : r.match(wt) || [])), n = r.length;
                        for (; n--;) delete o[r[n]]
                    }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ot.isEmptyObject(e)
            }
        };
        var Ct = new s,
            kt = new s,
            Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            At = /[A-Z]/g;
        ot.extend({
            hasData: function(t) {
                return kt.hasData(t) || Ct.hasData(t)
            },
            data: function(t, e, n) {
                return kt.access(t, e, n)
            },
            removeData: function(t, e) {
                kt.remove(t, e)
            },
            _data: function(t, e, n) {
                return Ct.access(t, e, n)
            },
            _removeData: function(t, e) {
                Ct.remove(t, e)
            }
        }), ot.fn.extend({
            data: function(t, e) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = kt.get(o), 1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), u(o, r, i[r])));
                        Ct.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function() {
                    kt.set(this, t)
                }) : Tt(this, function(e) {
                    var n, r;
                    if (o && void 0 === e) {
                        if (n = kt.get(o, t) || kt.get(o, t.replace(At, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (r = ot.camelCase(t), n = kt.get(o, r), void 0 !== n) return n;
                        if (n = u(o, r, void 0), void 0 !== n) return n
                    } else r = ot.camelCase(t), this.each(function() {
                        var n = kt.get(this, r);
                        kt.set(this, r, e), t.indexOf("-") > -1 && void 0 !== n && kt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    kt.remove(this, t)
                })
            }
        }), ot.extend({
            queue: function(t, e, n) {
                var r;
                return t ? (e = (e || "fx") + "queue", r = Ct.get(t, e), n && (!r || ot.isArray(n) ? r = Ct.access(t, e, ot.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ot.queue(t, e),
                    r = n.length,
                    i = n.shift(),
                    o = ot._queueHooks(t, e),
                    a = function() {
                        ot.dequeue(t, e)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Ct.get(t, n) || Ct.access(t, n, {
                    empty: ot.Callbacks("once memory").add(function() {
                        Ct.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ot.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, r = 1,
                    i = ot.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = Ct.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(e)
            }
        });
        var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ot = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
            Dt = ["Top", "Right", "Bottom", "Left"],
            Ft = function(t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            Pt = /^(?:checkbox|radio)$/i,
            It = /<([\w:-]+)/,
            Nt = /^$|\/(?:java|ecma)script/i,
            zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Lt = /<|&#?\w+;/;
        ! function() {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                n = G.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), rt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Mt = /^key/,
            Rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            qt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, p, h, d, v, m = Ct.get(t);
                if (m)
                    for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ot.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                            return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(wt) || [""], l = e.length; l--;) s = qt.exec(e[l]) || [], h = v = s[1], d = (s[2] || "").split(".").sort(), h && (f = ot.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = ot.event.special[h] || {}, c = ot.extend({
                        type: h,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ot.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ot.event.global[h] = !0)
            },
            remove: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, p, h, d, v, m = Ct.hasData(t) && Ct.get(t);
                if (m && (u = m.events)) {
                    for (e = (e || "").match(wt) || [""], l = e.length; l--;)
                        if (s = qt.exec(e[l]) || [], h = v = s[1], d = (s[2] || "").split(".").sort(), h) {
                            for (f = ot.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            a && !p.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || ot.removeEvent(t, h, m.handle), delete u[h])
                        } else
                            for (h in u) ot.event.remove(t, h + e[l], n, r, !0);
                    ot.isEmptyObject(u) && Ct.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = ot.event.fix(t);
                var e, n, r, i, o, a = [],
                    s = Q.call(arguments),
                    u = (Ct.get(this, "events") || {})[t.type] || [],
                    l = ot.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                    for (a = ot.event.handlers.call(this, t, u), e = 0;
                        (i = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, r, i, o, a = [],
                    s = e.delegateCount,
                    u = t.target;
                if (s && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(u) > -1 : ot.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, r, i, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[ot.expando]) return t;
                var e, n, r, i = t.type,
                    o = t,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Rt.test(i) ? this.mouseHooks : Mt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== v() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === v() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ot.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ot.Event = function(t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : d) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            constructor: ot.Event,
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, r = this,
                        i = t.relatedTarget,
                        o = t.handleObj;
                    return i && (i === r || ot.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ot.fn.extend({
            on: function(t, e, n, r) {
                return m(this, t, e, n, r)
            },
            one: function(t, e, n, r) {
                return m(this, t, e, n, r, 1)
            },
            off: function(t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ot(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function() {
                    ot.event.remove(this, t, n, e)
                })
            }
        });
        var Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Ht = /<script|<style|<link/i,
            $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Bt = /^true\/(.*)/,
            Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
            htmlPrefilter: function(t) {
                return t.replace(Wt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var r, i, o, a, s = t.cloneNode(!0),
                    u = ot.contains(t.ownerDocument, t);
                if (!(rt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (a = c(s), o = c(t), r = 0, i = o.length; i > r; r++) w(o[r], a[r]);
                if (e)
                    if (n)
                        for (o = o || c(t), a = a || c(s), r = 0, i = o.length; i > r; r++) x(o[r], a[r]);
                    else x(t, s);
                return a = c(s, "script"), a.length > 0 && f(a, !u && c(t, "script")), s
            },
            cleanData: function(t) {
                for (var e, n, r, i = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (St(n)) {
                        if (e = n[Ct.expando]) {
                            if (e.events)
                                for (r in e.events) i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, e.handle);
                            n[Ct.expando] = void 0
                        }
                        n[kt.expando] && (n[kt.expando] = void 0)
                    }
            }
        }), ot.fn.extend({
            domManip: _,
            detach: function(t) {
                return T(this, t, !0)
            },
            remove: function(t) {
                return T(this, t)
            },
            text: function(t) {
                return Tt(this, function(t) {
                    return void 0 === t ? ot.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return _(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return _(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return _(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return _(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ot.clone(this, t, e)
                })
            },
            html: function(t) {
                return Tt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ht.test(t) && !zt[(It.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ot.htmlPrefilter(t);
                        try {
                            for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (i) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return _(this, arguments, function(e) {
                    var n = this.parentNode;
                    ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ot.fn[t] = function(t) {
                for (var n, r = [], i = ot(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), ot(i[a])[e](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ut, Yt = {
                HTML: "block",
                BODY: "block"
            },
            Xt = /^margin/,
            Gt = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
            Qt = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            },
            Zt = function(t, e, n, r) {
                var i, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e) t.style[o] = a[o];
                return i
            },
            Jt = G.documentElement;
        ! function() {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Jt.appendChild(a);
                var e = t.getComputedStyle(s);
                n = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, Jt.removeChild(a)
            }
            var n, r, i, o, a = G.createElement("div"),
                s = G.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ot.extend(rt, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                pixelMarginRight: function() {
                    return null == r && e(), i
                },
                reliableMarginLeft: function() {
                    return null == r && e(), o
                },
                reliableMarginRight: function() {
                    var e, n = s.appendChild(G.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Jt.appendChild(a), e = !parseFloat(t.getComputedStyle(n).marginRight), Jt.removeChild(a), s.removeChild(n), e
                }
            }))
        }();
        var Kt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ne = ["Webkit", "O", "Moz", "ms"],
            re = G.createElement("div").style;
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = k(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = ot.camelCase(e),
                        u = t.style;
                    return e = ot.cssProps[s] || (ot.cssProps[s] = A(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Ot.exec(n)) && i[1] && (n = l(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[s] ? "" : "px")), rt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
                }
            },
            css: function(t, e, n, r) {
                var i, o, a, s = ot.camelCase(e);
                return e = ot.cssProps[s] || (ot.cssProps[s] = A(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = k(t, e, r)), "normal" === i && e in ee && (i = ee[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }), ot.each(["height", "width"], function(t, e) {
            ot.cssHooks[e] = {
                get: function(t, n, r) {
                    return n ? Kt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                        return D(t, e, r)
                    }) : D(t, e, r) : void 0
                },
                set: function(t, n, r) {
                    var i, o = r && Qt(t),
                        a = r && O(t, e, r, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                    return a && (i = Ot.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), j(t, n, a)
                }
            }
        }), ot.cssHooks.marginLeft = E(rt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), ot.cssHooks.marginRight = E(rt.reliableMarginRight, function(t, e) {
            return e ? Zt(t, {
                display: "inline-block"
            }, k, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ot.cssHooks[t + e] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + Dt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Xt.test(t) || (ot.cssHooks[t + e].set = j)
        }), ot.fn.extend({
            css: function(t, e) {
                return Tt(this, function(t, e, n) {
                    var r, i, o = {},
                        a = 0;
                    if (ot.isArray(e)) {
                        for (r = Qt(t), i = e.length; i > a; a++) o[e[a]] = ot.css(t, e[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return F(this, !0)
            },
            hide: function() {
                return F(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ft(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = P, P.prototype = {
            constructor: P,
            init: function(t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = P.propHooks[this.prop];
                return t && t.get ? t.get(this) : P.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = P.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
            }
        }, P.prototype.init.prototype = P.prototype, P.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ot.fx = P.prototype.init, ot.fx.step = {};
        var ie, oe, ae = /^(?:toggle|show|hide)$/,
            se = /queueHooks$/;
        ot.Animation = ot.extend(R, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return l(n.elem, t, Ot.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
                    for (var n, r = 0, i = t.length; i > r; r++) n = t[r], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(e)
                },
                prefilters: [L],
                prefilter: function(t, e) {
                    e ? R.prefilters.unshift(t) : R.prefilters.push(t)
                }
            }), ot.speed = function(t, e, n) {
                var r = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: n || !n && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ot.isFunction(e) && e
                };
                return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
                }, r
            }, ot.fn.extend({
                fadeTo: function(t, e, n, r) {
                    return this.filter(Ft).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, r)
                },
                animate: function(t, e, n, r) {
                    var i = ot.isEmptyObject(t),
                        o = ot.speed(e, n, r),
                        a = function() {
                            var e = R(this, ot.extend({}, t), o);
                            (i || Ct.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, n) {
                    var r = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            i = null != t && t + "queueHooks",
                            o = ot.timers,
                            a = Ct.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && se.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                        !e && n || ot.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = Ct.get(this),
                            r = n[t + "queue"],
                            i = n[t + "queueHooks"],
                            o = ot.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, ot.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function(t, e) {
                var n = ot.fn[e];
                ot.fn[e] = function(t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
                }
            }), ot.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ot.fn[t] = function(t, n, r) {
                    return this.animate(e, t, n, r)
                }
            }), ot.timers = [], ot.fx.tick = function() {
                var t, e = 0,
                    n = ot.timers;
                for (ie = ot.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || ot.fx.stop(), ie = void 0
            }, ot.fx.timer = function(t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                t.clearInterval(oe), oe = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function(e, n) {
                return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, r) {
                    var i = t.setTimeout(n, e);
                    r.stop = function() {
                        t.clearTimeout(i)
                    }
                })
            },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    n = e.appendChild(G.createElement("option"));
                t.type = "checkbox", rt.checkOn = "" !== t.value, rt.optSelected = n.selected, e.disabled = !0, rt.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", rt.radioValue = "t" === t.value
            }();
        var ue, le = ot.expr.attrHandle;
        ot.fn.extend({
            attr: function(t, e) {
                return Tt(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ot.find.attr(t, e), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!rt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, r, i = 0,
                    o = e && e.match(wt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
            }
        }), ue = {
            set: function(t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = le[e] || ot.find.attr;
            le[e] = function(t, e, r) {
                var i, o;
                return r || (o = le[e], le[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, le[e] = o), i
            }
        });
        var ce = /^(?:input|select|textarea|button)$/i,
            fe = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(t, e) {
                return Tt(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ot.propFix[t] || t]
                })
            }
        }), ot.extend({
            prop: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, i = ot.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ce.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), rt.optSelected || (ot.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        });
        var pe = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, q(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(wt) || []; n = this[u++];)
                        if (i = q(n), r = 1 === n.nodeType && (" " + i + " ").replace(pe, " ")) {
                            for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = ot.trim(r), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(wt) || []; n = this[u++];)
                        if (i = q(n), r = 1 === n.nodeType && (" " + i + " ").replace(pe, " ")) {
                            for (a = 0; o = e[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            s = ot.trim(r), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                    ot(this).toggleClass(t.call(this, n, q(this), e), e)
                }) : this.each(function() {
                    var e, r, i, o;
                    if ("string" === n)
                        for (r = 0, i = ot(this), o = t.match(wt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = q(this), e && Ct.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ct.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + q(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var he = /\r/g,
            de = /[\x20\t\r\n\f]+/g;
        ot.fn.extend({
            val: function(t) {
                var e, n, r, i = this[0]; {
                    if (arguments.length) return r = ot.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, ot(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(t) {
                            return null == t ? "" : t + ""
                        })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return e = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(he, "") : null == n ? "" : n)
                }
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t)).replace(de, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u], (n.selected || u === i) && (rt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ot(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, r, i = t.options, o = ot.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
                }
            }, rt.checkOn || (ot.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ve = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
                trigger: function(e, n, r, i) {
                    var o, a, s, u, l, c, f, p = [r || G],
                        h = nt.call(e, "type") ? e.type : e,
                        d = nt.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !ve.test(h + ot.event.triggered) && (h.indexOf(".") > -1 && (d = h.split("."), h = d.shift(), d.sort()), l = h.indexOf(":") < 0 && "on" + h, e = e[ot.expando] ? e : new ot.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ot.makeArray(n, [e]), f = ot.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !ot.isWindow(r)) {
                            for (u = f.delegateType || h, ve.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || G) && p.push(s.defaultView || s.parentWindow || t)
                        }
                        for (o = 0;
                            (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || h, c = (Ct.get(a, "events") || {})[e.type] && Ct.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && St(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                        return e.type = h, i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !St(r) || l && ot.isFunction(r[h]) && !ot.isWindow(r) && (s = r[l], s && (r[l] = null), ot.event.triggered = h, r[h](), ot.event.triggered = void 0, s && (r[l] = s)), e.result
                    }
                },
                simulate: function(t, e, n) {
                    var r = ot.extend(new ot.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    ot.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
                }
            }), ot.fn.extend({
                trigger: function(t, e) {
                    return this.each(function() {
                        ot.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    return n ? ot.event.trigger(t, e, n, !0) : void 0
                }
            }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                ot.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), ot.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), rt.focusin = "onfocusin" in t,
            rt.focusin || ot.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    ot.event.simulate(e, t.target, ot.event.fix(t))
                };
                ot.event.special[e] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Ct.access(r, e);
                        i || r.addEventListener(t, n, !0), Ct.access(r, e, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Ct.access(r, e) - 1;
                        i ? Ct.access(r, e, i) : (r.removeEventListener(t, n, !0), Ct.remove(r, e))
                    }
                }
            });
        var me = t.location,
            ye = ot.now(),
            ge = /\?/;
        ot.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, ot.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (r) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
        };
        var be = /#.*$/,
            xe = /([?&])_=[^&]*/,
            we = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Te = /^(?:GET|HEAD)$/,
            Se = /^\/\//,
            Ce = {},
            ke = {},
            Ee = "*/".concat("*"),
            Ae = G.createElement("a");
        Ae.href = me.href, ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: me.href,
                type: "GET",
                isLocal: _e.test(me.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ee,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? $($(t, ot.ajaxSettings), e) : $(ot.ajaxSettings, t)
            },
            ajaxPrefilter: W(Ce),
            ajaxTransport: W(ke),
            ajax: function(e, n) {
                function r(e, n, r, s) {
                    var l, f, g, b, w, T = n;
                    2 !== x && (x = 2, u && t.clearTimeout(u), i = void 0, a = s || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (b = B(p, _, r)), b = V(p, b, _, l), l ? (p.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), w = _.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, f = b.data, g = b.error, l = !g)) : (g = T, !e && T || (T = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || T) + "", l ? v.resolveWith(h, [f, T, _]) : v.rejectWith(h, [_, T, g]), _.statusCode(y), y = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [_, p, l ? f : g]), m.fireWith(h, [_, T]), c && (d.trigger("ajaxComplete", [_, p]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var i, o, a, s, u, l, c, f, p = ot.ajaxSetup({}, n),
                    h = p.context || p,
                    d = p.context && (h.nodeType || h.jquery) ? ot(h) : ot.event,
                    v = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    y = p.statusCode || {},
                    g = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!s)
                                    for (s = {}; e = we.exec(a);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, g[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return i && i.abort(e), r(0, e), this
                        }
                    };
                if (v.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, p.url = ((e || p.url || me.href) + "").replace(be, "").replace(Se, me.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(wt) || [""], null == p.crossDomain) {
                    l = G.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Ae.protocol + "//" + Ae.host != l.protocol + "//" + l.host
                    } catch (T) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), H(Ce, p, n, _), 2 === x) return _;
                c = ot.event && p.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Te.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ge.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = xe.test(o) ? o.replace(xe, "$1_=" + ye++) : o + (ge.test(o) ? "&" : "?") + "_=" + ye++)), p.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) _.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(h, _, p) === !1 || 2 === x)) return _.abort();
                w = "abort";
                for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[f](p[f]);
                if (i = H(ke, p, n, _)) {
                    if (_.readyState = 1, c && d.trigger("ajaxSend", [_, p]), 2 === x) return _;
                    p.async && p.timeout > 0 && (u = t.setTimeout(function() {
                        _.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, i.send(g, r)
                    } catch (T) {
                        if (!(2 > x)) throw T;
                        r(-1, T)
                    }
                } else r(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function(t, e) {
            ot[e] = function(t, n, r, i) {
                return ot.isFunction(n) && (i = i || r, r = n, n = void 0), ot.ajax(ot.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, ot.isPlainObject(t) && t))
            }
        }), ot._evalUrl = function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(t) {
                var e;
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return ot.isFunction(t) ? this.each(function(e) {
                    ot(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ot(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ot.isFunction(t);
                return this.each(function(n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(t) {
            return !ot.expr.filters.visible(t)
        }, ot.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var je = /%20/g,
            Oe = /\[\]$/,
            De = /\r?\n/g,
            Fe = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(t, e) {
            var n, r = [],
                i = function(t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                i(this.name, this.value)
            });
            else
                for (n in t) U(n, t[n], e, i);
            return r.join("&").replace(je, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Pe.test(this.nodeName) && !Fe.test(t) && (this.checked || !Pt.test(t))
                }).map(function(t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Ie = {
                0: 200,
                1223: 204
            },
            Ne = ot.ajaxSettings.xhr();
        rt.cors = !!Ne && "withCredentials" in Ne, rt.ajax = Ne = !!Ne, ot.ajaxTransport(function(e) {
            var n, r;
            return rt.cors || Ne && !e.crossDomain ? {
                send: function(i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    n = function(t) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ie[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && t.setTimeout(function() {
                            n && r()
                        })
                    }, n = n("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (u) {
                        if (n) throw u
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ot.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(r, i) {
                        e = ot("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var ze = [],
            Le = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ze.pop() || ot.expando + "_" + ye++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function(e, n, r) {
            var i, o, a, s = e.jsonp !== !1 && (Le.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Le, "$1" + i) : e.jsonp !== !1 && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return a || ot.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? ot(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, ze.push(i)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), ot.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || G;
            var r = dt.exec(t),
                i = !n && [];
            return r ? [e.createElement(r[1])] : (r = p([t], e, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
        };
        var Me = ot.fn.load;
        ot.fn.load = function(t, e, n) {
            if ("string" != typeof t && Me) return Me.apply(this, arguments);
            var r, i, o, a = this,
                s = t.indexOf(" ");
            return s > -1 && (r = ot.trim(t.slice(s)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && ot.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(t)).find(r) : t)
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ot.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function(t) {
            return ot.grep(ot.timers, function(e) {
                return t === e.elem
            }).length
        }, ot.offset = {
            setOffset: function(t, e, n) {
                var r, i, o, a, s, u, l, c = ot.css(t, "position"),
                    f = ot(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), s = f.offset(), o = ot.css(t, "top"), u = ot.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, s))), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : f.css(p)
            }
        }, ot.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    },
                    o = r && r.ownerDocument;
                if (o) return e = o.documentElement, ot.contains(e, r) ? (i = r.getBoundingClientRect(), n = Y(o), {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (r = t.offset()), r.top += ot.css(t[0], "borderTopWidth", !0), r.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - r.top - ot.css(n, "marginTop", !0),
                        left: e.left - r.left - ot.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || Jt
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            ot.fn[t] = function(r) {
                return Tt(this, function(t, r, i) {
                    var o = Y(t);
                    return void 0 === i ? o ? o[e] : t[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
                }, t, r, arguments.length)
            }
        }), ot.each(["top", "left"], function(t, e) {
            ot.cssHooks[e] = E(rt.pixelPosition, function(t, n) {
                return n ? (n = k(t, e), Gt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, r) {
                ot.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Tt(this, function(e, n, r) {
                        var i;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ot.css(e, n, a) : ot.style(e, n, r, a)
                    }, e, o ? r : void 0, o, null)
                }
            })
        }), ot.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, r) {
                return this.on(e, t, n, r)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var Re = t.jQuery,
            qe = t.$;
        return ot.noConflict = function(e) {
            return t.$ === ot && (t.$ = qe), e && t.jQuery === ot && (t.jQuery = Re), ot
        }, e || (t.jQuery = t.$ = ot), ot
    }),
    function(t) {
        function e(t) {
            var e = t.length,
                r = n.type(t);
            return "function" === r || n.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        if (!t.jQuery) {
            var n = function(t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function(t) {
                return null != t && t == t.window
            }, n.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[a.call(t)] || "object" : typeof t
            }, n.isArray = Array.isArray || function(t) {
                return "array" === n.type(t)
            }, n.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
                try {
                    if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                for (e in t);
                return void 0 === e || o.call(t, e)
            }, n.each = function(t, n, r) {
                var i, o = 0,
                    a = t.length,
                    s = e(t);
                if (r) {
                    if (s)
                        for (; a > o && (i = n.apply(t[o], r), i !== !1); o++);
                    else
                        for (o in t)
                            if (i = n.apply(t[o], r), i === !1) break
                } else if (s)
                    for (; a > o && (i = n.call(t[o], o, t[o]), i !== !1); o++);
                else
                    for (o in t)
                        if (i = n.call(t[o], o, t[o]), i === !1) break; return t
            }, n.data = function(t, e, i) {
                if (void 0 === i) {
                    var o = t[n.expando],
                        a = o && r[o];
                    if (void 0 === e) return a;
                    if (a && e in a) return a[e]
                } else if (void 0 !== e) {
                    var o = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return r[o] = r[o] || {}, r[o][e] = i, i
                }
            }, n.removeData = function(t, e) {
                var i = t[n.expando],
                    o = i && r[i];
                o && n.each(e, function(t, e) {
                    delete o[e]
                })
            }, n.extend = function() {
                var t, e, r, i, o, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" != typeof s && "function" !== n.type(s) && (s = {}), u === l && (s = this, u--); l > u; u++)
                    if (null != (o = arguments[u]))
                        for (i in o) t = s[i], r = o[i], s !== r && (c && r && (n.isPlainObject(r) || (e = n.isArray(r))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[i] = n.extend(c, a, r)) : void 0 !== r && (s[i] = r));
                return s
            }, n.queue = function(t, r, i) {
                function o(t, n) {
                    var r = n || [];
                    return null != t && (e(Object(t)) ? ! function(t, e) {
                        for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
                        if (n !== n)
                            for (; void 0 !== e[r];) t[i++] = e[r++];
                        return t.length = i, t
                    }(r, "string" == typeof t ? [t] : t) : [].push.call(r, t)), r
                }
                if (t) {
                    r = (r || "fx") + "queue";
                    var a = n.data(t, r);
                    return i ? (!a || n.isArray(i) ? a = n.data(t, r, o(i)) : a.push(i), a) : a || []
                }
            }, n.dequeue = function(t, e) {
                n.each(t.nodeType ? [t] : t, function(t, r) {
                    e = e || "fx";
                    var i = n.queue(r, e),
                        o = i.shift();
                    "inprogress" === o && (o = i.shift()), o && ("fx" === e && i.unshift("inprogress"), o.call(r, function() {
                        n.dequeue(r, e)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        r = this.offset(),
                        i = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(t).offset();
                    return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, t.style && (i.top += parseFloat(t.style.borderTopWidth) || 0, i.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: r.top - i.top,
                        left: r.left - i.left
                    }
                }
            };
            var r = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var i = {}, o = i.hasOwnProperty, a = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < s.length; u++) i["[object " + s[u] + "]"] = s[u].toLowerCase();
            n.fn.init.prototype = n.fn, t.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function() {
        return function(t, e, n, r) {
            function i(t) {
                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                    var i = t[e];
                    i && r.push(i)
                }
                return r
            }

            function o(t) {
                return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
            }

            function a(t) {
                var e = p.data(t, "velocity");
                return null === e ? r : e
            }

            function s(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function u(t, n, r, i) {
                function o(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function a(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function u(t, e, n) {
                    return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
                }

                function l(t, e, n) {
                    return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
                }

                function c(e, n) {
                    for (var i = 0; v > i; ++i) {
                        var o = l(n, t, r);
                        if (0 === o) return n;
                        var a = u(n, t, r) - e;
                        n -= a / o
                    }
                    return n
                }

                function f() {
                    for (var e = 0; b > e; ++e) T[e] = u(e * x, t, r)
                }

                function p(e, n, i) {
                    var o, a, s = 0;
                    do a = n + (i - n) / 2, o = u(a, t, r) - e, o > 0 ? i = a : n = a; while (Math.abs(o) > y && ++s < g);
                    return a
                }

                function h(e) {
                    for (var n = 0, i = 1, o = b - 1; i != o && T[i] <= e; ++i) n += x;
                    --i;
                    var a = (e - T[i]) / (T[i + 1] - T[i]),
                        s = n + a * x,
                        u = l(s, t, r);
                    return u >= m ? c(e, s) : 0 == u ? s : p(e, n, n + x)
                }

                function d() {
                    S = !0, t == n && r == i || f()
                }
                var v = 4,
                    m = .001,
                    y = 1e-7,
                    g = 10,
                    b = 11,
                    x = 1 / (b - 1),
                    w = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var _ = 0; 4 > _; ++_)
                    if ("number" != typeof arguments[_] || isNaN(arguments[_]) || !isFinite(arguments[_])) return !1;
                t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
                var T = w ? new Float32Array(b) : new Array(b),
                    S = !1,
                    C = function(e) {
                        return S || d(), t === n && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : u(h(e), n, i)
                    };
                C.getControlPoints = function() {
                    return [{
                        x: t,
                        y: n
                    }, {
                        x: r,
                        y: i
                    }]
                };
                var k = "generateBezier(" + [t, n, r, i] + ")";
                return C.toString = function() {
                    return k
                }, C
            }

            function l(t, e) {
                var n = t;
                return v.isString(t) ? b.Easings[t] || (n = !1) : n = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? x.apply(null, t.concat([e])) : v.isArray(t) && 4 === t.length ? u.apply(null, t) : !1, n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : g), n
            }

            function c(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = i(b.State.calls));
                    for (var o = 0; n > o; o++)
                        if (b.State.calls[o]) {
                            var s = b.State.calls[o],
                                u = s[0],
                                l = s[2],
                                h = s[3],
                                d = !!h,
                                m = null;
                            h || (h = b.State.calls[o][3] = e - 16);
                            for (var y = Math.min((e - h) / l.duration, 1), g = 0, x = u.length; x > g; g++) {
                                var _ = u[g],
                                    S = _.element;
                                if (a(S)) {
                                    var C = !1;
                                    if (l.display !== r && null !== l.display && "none" !== l.display) {
                                        if ("flex" === l.display) {
                                            var k = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(k, function(t, e) {
                                                w.setPropertyValue(S, "display", e)
                                            })
                                        }
                                        w.setPropertyValue(S, "display", l.display)
                                    }
                                    l.visibility !== r && "hidden" !== l.visibility && w.setPropertyValue(S, "visibility", l.visibility);
                                    for (var E in _)
                                        if ("element" !== E) {
                                            var A, j = _[E],
                                                O = v.isString(j.easing) ? b.Easings[j.easing] : j.easing;
                                            if (1 === y) A = j.endValue;
                                            else {
                                                var D = j.endValue - j.startValue;
                                                if (A = j.startValue + D * O(y, l, D), !d && A === j.currentValue) continue
                                            }
                                            if (j.currentValue = A, "tween" === E) m = A;
                                            else {
                                                if (w.Hooks.registered[E]) {
                                                    var F = w.Hooks.getRoot(E),
                                                        P = a(S).rootPropertyValueCache[F];
                                                    P && (j.rootPropertyValue = P)
                                                }
                                                var I = w.setPropertyValue(S, E, j.currentValue + (0 === parseFloat(A) ? "" : j.unitType), j.rootPropertyValue, j.scrollData);
                                                w.Hooks.registered[E] && (w.Normalizations.registered[F] ? a(S).rootPropertyValueCache[F] = w.Normalizations.registered[F]("extract", null, I[1]) : a(S).rootPropertyValueCache[F] = I[1]), "transform" === I[0] && (C = !0)
                                            }
                                        }
                                    l.mobileHA && a(S).transformCache.translate3d === r && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && w.flushTransformCache(S)
                                }
                            }
                            l.display !== r && "none" !== l.display && (b.State.calls[o][2].display = !1), l.visibility !== r && "hidden" !== l.visibility && (b.State.calls[o][2].visibility = !1), l.progress && l.progress.call(s[1], s[1], y, Math.max(0, h + l.duration - e), h, m), 1 === y && f(o)
                        }
                }
                b.State.isTicking && T(c)
            }

            function f(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var n = b.State.calls[t][0], i = b.State.calls[t][1], o = b.State.calls[t][2], s = b.State.calls[t][4], u = !1, l = 0, c = n.length; c > l; l++) {
                    var f = n[l].element;
                    if (e || o.loop || ("none" === o.display && w.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(f, "visibility", o.visibility)), o.loop !== !0 && (p.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(p.queue(f)[1])) && a(f)) {
                        a(f).isAnimating = !1, a(f).rootPropertyValueCache = {};
                        var h = !1;
                        p.each(w.Lists.transforms3D, function(t, e) {
                            var n = /^scale/.test(e) ? 1 : 0,
                                i = a(f).transformCache[e];
                            a(f).transformCache[e] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (h = !0, delete a(f).transformCache[e])
                        }), o.mobileHA && (h = !0, delete a(f).transformCache.translate3d), h && w.flushTransformCache(f), w.Values.removeClass(f, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && l === c - 1) try {
                        o.complete.call(i, i)
                    } catch (d) {
                        setTimeout(function() {
                            throw d
                        }, 1)
                    }
                    s && o.loop !== !0 && s(i), a(f) && o.loop === !0 && !e && (p.each(a(f).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(f, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && p.dequeue(f, o.queue)
                }
                b.State.calls[t] = !1;
                for (var v = 0, m = b.State.calls.length; m > v; v++)
                    if (b.State.calls[v] !== !1) {
                        u = !0;
                        break
                    }
                u === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var p, h = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = n.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return r
                }(),
                d = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var n, r = (new Date).getTime();
                        return n = Math.max(0, 16 - (r - t)), t = r + n, setTimeout(function() {
                            e(r + n)
                        }, n)
                    }
                }(),
                v = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== r && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                m = !1;
            if (t.fn && t.fn.jquery ? (p = t, m = !0) : p = e.Velocity.Utilities, 8 >= h && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= h) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var y = 400,
                g = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: y,
                        easing: g,
                        begin: r,
                        complete: r,
                        progress: r,
                        display: r,
                        visibility: r,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(t) {
                        p.data(t, "velocity", {
                            isSVG: v.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== r ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var x = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, n, r) {
                    var i = {
                        x: e.x + r.dx * n,
                        v: e.v + r.dv * n,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: i.v,
                        dv: t(i)
                    }
                }

                function n(n, r) {
                    var i = {
                            dx: n.v,
                            dv: t(n)
                        },
                        o = e(n, .5 * r, i),
                        a = e(n, .5 * r, o),
                        s = e(n, r, a),
                        u = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx),
                        l = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + u * r, n.v = n.v + l * r, n
                }
                return function r(t, e, i) {
                    var o, a, s, u = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        l = [0],
                        c = 0,
                        f = 1e-4,
                        p = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, i = i || null, u.tension = t, u.friction = e, o = null !== i, o ? (c = r(t, e), a = c / i * p) : a = p;;)
                        if (s = n(s || u, a), l.push(1 + s.x), c += 16, !(Math.abs(s.x) > f && Math.abs(s.v) > f)) break;
                    return o ? function(t) {
                        return l[t * (l.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, p.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(t, e) {
                b.Easings[e[0]] = u.apply(null, e[1])
            });
            var w = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < w.Lists.colors.length; t++) {
                            var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var n, r, i;
                        if (h)
                            for (n in w.Hooks.templates) {
                                r = w.Hooks.templates[n], i = r[0].split(" ");
                                var o = r[1].match(w.RegEx.valueSplit);
                                "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[n] = [i.join(" "), o.join(" ")])
                            }
                        for (n in w.Hooks.templates) {
                            r = w.Hooks.templates[n], i = r[0].split(" ");
                            for (var t in i) {
                                var a = n + i[t],
                                    s = t;
                                w.Hooks.registered[a] = [n, s]
                            }
                        }
                    },
                    getRoot: function(t) {
                        var e = w.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var n = w.Hooks.registered[t];
                        if (n) {
                            var r = n[0],
                                i = n[1];
                            return e = w.Hooks.cleanRootPropertyValue(r, e), e.toString().match(w.RegEx.valueSplit)[i]
                        }
                        return e
                    },
                    injectValue: function(t, e, n) {
                        var r = w.Hooks.registered[t];
                        if (r) {
                            var i, o, a = r[0],
                                s = r[1];
                            return n = w.Hooks.cleanRootPropertyValue(a, n), i = n.toString().match(w.RegEx.valueSplit), i[s] = e, o = i.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, n) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var r;
                                    return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(w.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(t, e, n) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var r = parseFloat(n);
                                    if (!r && 0 !== r) {
                                        var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        r = i ? i[1] : 0
                                    }
                                    return r;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(t, e, n) {
                            if (8 >= h) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = r ? r[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        9 >= h || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                        for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() {
                            var e = w.Lists.transformsBase[t];
                            w.Normalizations.registered[e] = function(t, n, i) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === r || a(n).transformCache[e] === r ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && a(n).transformCache[e] === r && 1 > i && (i = 1), o = !/(\d)$/i.test(i);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(i);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(i)
                                        }
                                        return o || (a(n).transformCache[e] = "(" + i + ")"), a(n).transformCache[e]
                                }
                            }
                        }();
                        for (var t = 0; t < w.Lists.colors.length; t++) ! function() {
                            var e = w.Lists.colors[t];
                            w.Normalizations.registered[e] = function(t, n, i) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var o;
                                        if (w.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : w.RegEx.isHex.test(i) ? a = "rgb(" + w.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case "inject":
                                        return 8 >= h ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (h || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = e.length; r > n; n++) {
                            var i;
                            if (i = 0 === n ? t : e[n] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase()
                                }), v.isString(b.State.prefixElement.style[i])) return b.State.prefixMatches[t] = i, [i, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(n, function(t, e, n, r) {
                            return e + e + n + n + r + r;
                        }), e = r.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(t, n, i, o) {
                    function s(t, n) {
                        function i() {
                            l && w.setPropertyValue(t, "display", "none")
                        }
                        var u = 0;
                        if (8 >= h) u = p.css(t, n);
                        else {
                            var l = !1;
                            if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(t, "display") && (l = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !o) {
                                if ("height" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var c = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                    return i(), c
                                }
                                if ("width" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var f = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                    return i(), f
                                }
                            }
                            var d;
                            d = a(t) === r ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), u = 9 === h && "filter" === n ? d.getPropertyValue(n) : d[n], "" !== u && null !== u || (u = t.style[n]), i()
                        }
                        if ("auto" === u && /^(top|right|bottom|left)$/i.test(n)) {
                            var v = s(t, "position");
                            ("fixed" === v || "absolute" === v && /top|left/i.test(n)) && (u = p(t).position()[n] + "px")
                        }
                        return u
                    }
                    var u;
                    if (w.Hooks.registered[n]) {
                        var l = n,
                            c = w.Hooks.getRoot(l);
                        i === r && (i = w.getPropertyValue(t, w.Names.prefixCheck(c)[0])), w.Normalizations.registered[c] && (i = w.Normalizations.registered[c]("extract", t, i)), u = w.Hooks.extractValue(l, i)
                    } else if (w.Normalizations.registered[n]) {
                        var f, d;
                        f = w.Normalizations.registered[n]("name", t), "transform" !== f && (d = s(t, w.Names.prefixCheck(f)[0]), w.Values.isCSSNullValue(d) && w.Hooks.templates[n] && (d = w.Hooks.templates[n][1])), u = w.Normalizations.registered[n]("extract", t, d)
                    }
                    if (!/^[\d-]/.test(u))
                        if (a(t) && a(t).isSVG && w.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                u = t.getBBox()[n]
                            } catch (v) {
                                u = 0
                            } else u = t.getAttribute(n);
                            else u = s(t, w.Names.prefixCheck(n)[0]);
                    return w.Values.isCSSNullValue(u) && (u = 0), b.debug >= 2, u
                },
                setPropertyValue: function(t, n, r, i, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? e.scrollTo(r, o.alternateValue) : e.scrollTo(o.alternateValue, r);
                    else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", t)) w.Normalizations.registered[n]("inject", t, r), s = "transform", r = a(t).transformCache[n];
                    else {
                        if (w.Hooks.registered[n]) {
                            var u = n,
                                l = w.Hooks.getRoot(n);
                            i = i || w.getPropertyValue(t, l), r = w.Hooks.injectValue(u, r, i), n = l
                        }
                        if (w.Normalizations.registered[n] && (r = w.Normalizations.registered[n]("inject", t, r), n = w.Normalizations.registered[n]("name", t)), s = w.Names.prefixCheck(n)[0], 8 >= h) try {
                            t.style[s] = r
                        } catch (c) {
                            b.debug
                        } else a(t) && a(t).isSVG && w.Names.SVGAttribute(n) ? t.setAttribute(n, r) : t.style[s] = r;
                        b.debug >= 2
                    }
                    return [s, r]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(w.getPropertyValue(t, e))
                    }
                    var n = "";
                    if ((h || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                        var r = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        p.each(a(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), r[t] && (n += t + "(" + r[t].join(" ") + ") ", delete r[t])
                        })
                    } else {
                        var i, o;
                        p.each(a(t).transformCache, function(e) {
                            return i = a(t).transformCache[e], "transformPerspective" === e ? (o = i, !0) : (9 === h && "rotateZ" === e && (e = "rotate"), void(n += e + i + " "))
                        }), o && (n = "perspective" + o + " " + n)
                    }
                    w.setPropertyValue(t, "transform", n)
                }
            };
            w.Hooks.register(), w.Normalizations.register(), b.hook = function(t, e, n) {
                var i = r;
                return t = o(t), p.each(t, function(t, o) {
                    if (a(o) === r && b.init(o), n === r) i === r && (i = b.CSS.getPropertyValue(o, e));
                    else {
                        var s = b.CSS.setPropertyValue(o, e, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(o), i = s
                    }
                }), i
            };
            var _ = function() {
                function t() {
                    return s ? E.promise || null : u
                }

                function i() {
                    function t(t) {
                        function f(t, e) {
                            var n = r,
                                i = r,
                                a = r;
                            return v.isArray(t) ? (n = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? a = t[1] : (v.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (i = e ? t[1] : l(t[1], s.duration), t[2] !== r && (a = t[2]))) : n = t, e || (i = i || s.easing), v.isFunction(n) && (n = n.call(o, S, T)), v.isFunction(a) && (a = a.call(o, S, T)), [n || 0, i, a]
                        }

                        function h(t, e) {
                            var n, r;
                            return r = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return n = t, ""
                            }), n || (n = w.Values.getUnitType(t)), [r, n]
                        }

                        function y() {
                            var t = {
                                    myParent: o.parentNode || n.body,
                                    position: w.getPropertyValue(o, "position"),
                                    fontSize: w.getPropertyValue(o, "fontSize")
                                },
                                r = t.position === I.lastPosition && t.myParent === I.lastParent,
                                i = t.fontSize === I.lastFontSize;
                            I.lastParent = t.myParent, I.lastPosition = t.position, I.lastFontSize = t.fontSize;
                            var s = 100,
                                u = {};
                            if (i && r) u.emToPx = I.lastEmToPx, u.percentToPxWidth = I.lastPercentToPxWidth, u.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var l = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                b.init(l), t.myParent.appendChild(l), p.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                    b.CSS.setPropertyValue(l, e, "hidden")
                                }), b.CSS.setPropertyValue(l, "position", t.position), b.CSS.setPropertyValue(l, "fontSize", t.fontSize), b.CSS.setPropertyValue(l, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                    b.CSS.setPropertyValue(l, e, s + "%")
                                }), b.CSS.setPropertyValue(l, "paddingLeft", s + "em"), u.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(l, "width", null, !0)) || 1) / s, u.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(l, "height", null, !0)) || 1) / s, u.emToPx = I.lastEmToPx = (parseFloat(w.getPropertyValue(l, "paddingLeft")) || 1) / s, t.myParent.removeChild(l)
                            }
                            return null === I.remToPx && (I.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(e.innerWidth) / 100, I.vhToPx = parseFloat(e.innerHeight) / 100), u.remToPx = I.remToPx, u.vwToPx = I.vwToPx, u.vhToPx = I.vhToPx, b.debug >= 1, u
                        }
                        if (s.begin && 0 === S) try {
                            s.begin.call(d, d)
                        } catch (x) {
                            setTimeout(function() {
                                throw x
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var _, C, k, j = /^x$/i.test(s.axis) ? "Left" : "Top",
                                O = parseFloat(s.offset) || 0;
                            s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, _ = s.container["scroll" + j], k = _ + p(o).position()[j.toLowerCase()] + O) : s.container = null : (_ = b.State.scrollAnchor[b.State["scrollProperty" + j]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === j ? "Top" : "Left")]], k = p(o).offset()[j.toLowerCase()] + O), u = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: _,
                                    currentValue: _,
                                    endValue: k,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: j,
                                        alternateValue: C
                                    }
                                },
                                element: o
                            }, b.debug
                        } else if ("reverse" === A) {
                            if (!a(o).tweensContainer) return void p.dequeue(o, s.queue);
                            "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, g.easing || delete s.easing, g.duration || delete s.duration, s = p.extend({}, a(o).opts, s);
                            var D = p.extend(!0, {}, a(o).tweensContainer);
                            for (var F in D)
                                if ("element" !== F) {
                                    var P = D[F].startValue;
                                    D[F].startValue = D[F].currentValue = D[F].endValue, D[F].endValue = P, v.isEmptyObject(g) || (D[F].easing = s.easing), b.debug
                                }
                            u = D
                        } else if ("start" === A) {
                            var D;
                            a(o).tweensContainer && a(o).isAnimating === !0 && (D = a(o).tweensContainer), p.each(m, function(t, e) {
                                if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                    var n = f(e, !0),
                                        i = n[0],
                                        o = n[1],
                                        a = n[2];
                                    if (w.RegEx.isHex.test(i)) {
                                        for (var s = ["Red", "Green", "Blue"], u = w.Values.hexToRgb(i), l = a ? w.Values.hexToRgb(a) : r, c = 0; c < s.length; c++) {
                                            var p = [u[c]];
                                            o && p.push(o), l !== r && p.push(l[c]), m[t + s[c]] = p
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var z in m) {
                                var L = f(m[z]),
                                    M = L[0],
                                    R = L[1],
                                    q = L[2];
                                z = w.Names.camelCase(z);
                                var W = w.Hooks.getRoot(z),
                                    H = !1;
                                if (a(o).isSVG || "tween" === W || w.Names.prefixCheck(W)[1] !== !1 || w.Normalizations.registered[W] !== r) {
                                    (s.display !== r && null !== s.display && "none" !== s.display || s.visibility !== r && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !q && 0 !== M && (q = 0), s._cacheValues && D && D[z] ? (q === r && (q = D[z].endValue + D[z].unitType), H = a(o).rootPropertyValueCache[W]) : w.Hooks.registered[z] ? q === r ? (H = w.getPropertyValue(o, W), q = w.getPropertyValue(o, z, H)) : H = w.Hooks.templates[W][1] : q === r && (q = w.getPropertyValue(o, z));
                                    var $, B, V, U = !1;
                                    if ($ = h(z, q), q = $[0], V = $[1], $ = h(z, M), M = $[0].replace(/^([+-\/*])=/, function(t, e) {
                                            return U = e, ""
                                        }), B = $[1], q = parseFloat(q) || 0, M = parseFloat(M) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(z) ? (M /= 100, B = "em") : /^scale/.test(z) ? (M /= 100, B = "") : /(Red|Green|Blue)$/i.test(z) && (M = M / 100 * 255, B = "")), /[\/*]/.test(U)) B = V;
                                    else if (V !== B && 0 !== q)
                                        if (0 === M) B = V;
                                        else {
                                            i = i || y();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                            switch (V) {
                                                case "%":
                                                    q *= "x" === Y ? i.percentToPxWidth : i.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    q *= i[V + "ToPx"]
                                            }
                                            switch (B) {
                                                case "%":
                                                    q *= 1 / ("x" === Y ? i.percentToPxWidth : i.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    q *= 1 / i[B + "ToPx"]
                                            }
                                        }
                                    switch (U) {
                                        case "+":
                                            M = q + M;
                                            break;
                                        case "-":
                                            M = q - M;
                                            break;
                                        case "*":
                                            M = q * M;
                                            break;
                                        case "/":
                                            M = q / M
                                    }
                                    u[z] = {
                                        rootPropertyValue: H,
                                        startValue: q,
                                        currentValue: q,
                                        endValue: M,
                                        unitType: B,
                                        easing: R
                                    }, b.debug
                                } else b.debug
                            }
                            u.element = o
                        }
                        u.element && (w.Values.addClass(o, "velocity-animating"), N.push(u), "" === s.queue && (a(o).tweensContainer = u, a(o).opts = s), a(o).isAnimating = !0, S === T - 1 ? (b.State.calls.push([N, d, s, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : S++)
                    }
                    var i, o = this,
                        s = p.extend({}, b.defaults, g),
                        u = {};
                    switch (a(o) === r && b.init(o), parseFloat(s.delay) && s.queue !== !1 && p.queue(o, s.queue, function(t) {
                        b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(s.delay)),
                            next: t
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = y;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = l(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== r && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== r && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : p.queue(o, s.queue, function(e, n) {
                        return n === !0 ? (E.promise && E.resolver(d), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o)
                }
                var s, u, h, d, m, g, x = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
                if (v.isWrapped(this) ? (s = !1, h = 0, d = this, u = this) : (s = !0, h = 1, d = x ? arguments[0].elements || arguments[0].e : arguments[0]), d = o(d)) {
                    x ? (m = arguments[0].properties || arguments[0].p, g = arguments[0].options || arguments[0].o) : (m = arguments[h], g = arguments[h + 1]);
                    var T = d.length,
                        S = 0;
                    if (!/^(stop|finish|finishAll)$/i.test(m) && !p.isPlainObject(g)) {
                        var C = h + 1;
                        g = {};
                        for (var k = C; k < arguments.length; k++) v.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? v.isString(arguments[k]) || v.isArray(arguments[k]) ? g.easing = arguments[k] : v.isFunction(arguments[k]) && (g.complete = arguments[k]) : g.duration = arguments[k]
                    }
                    var E = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (E.promise = new b.Promise(function(t, e) {
                        E.resolver = t, E.rejecter = e
                    }));
                    var A;
                    switch (m) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "finish":
                        case "finishAll":
                        case "stop":
                            p.each(d, function(t, e) {
                                a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer), "finishAll" !== m || g !== !0 && !v.isString(g) || (p.each(p.queue(e, v.isString(g) ? g : ""), function(t, e) {
                                    v.isFunction(e) && e()
                                }), p.queue(e, v.isString(g) ? g : "", []))
                            });
                            var j = [];
                            return p.each(b.State.calls, function(t, e) {
                                e && p.each(e[1], function(n, i) {
                                    var o = g === r ? "" : g;
                                    return o === !0 || e[2].queue === o || g === r && e[2].queue === !1 ? void p.each(d, function(n, r) {
                                        r === i && ((g === !0 || v.isString(g)) && (p.each(p.queue(r, v.isString(g) ? g : ""), function(t, e) {
                                            v.isFunction(e) && e(null, !0)
                                        }), p.queue(r, v.isString(g) ? g : "", [])), "stop" === m ? (a(r) && a(r).tweensContainer && o !== !1 && p.each(a(r).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), j.push(t)) : "finish" !== m && "finishAll" !== m || (e[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === m && (p.each(j, function(t, e) {
                                f(e, !0)
                            }), E.promise && E.resolver(d)), t();
                        default:
                            if (!p.isPlainObject(m) || v.isEmptyObject(m)) {
                                if (v.isString(m) && b.Redirects[m]) {
                                    var O = p.extend({}, g),
                                        D = O.duration,
                                        F = O.delay || 0;
                                    return O.backwards === !0 && (d = p.extend(!0, [], d).reverse()), p.each(d, function(t, e) {
                                        parseFloat(O.stagger) ? O.delay = F + parseFloat(O.stagger) * t : v.isFunction(O.stagger) && (O.delay = F + O.stagger.call(e, t, T)), O.drag && (O.duration = parseFloat(D) || (/^(callout|transition)/.test(m) ? 1e3 : y), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / T : (t + 1) / T), .75 * O.duration, 200)), b.Redirects[m].call(e, e, O || {}, t, T, d, E.promise ? E : r)
                                    }), t()
                                }
                                var P = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise && E.rejecter(new Error(P)), t()
                            }
                            A = "start"
                    }
                    var I = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        N = [];
                    p.each(d, function(t, e) {
                        v.isNode(e) && i.call(e)
                    });
                    var z, O = p.extend({}, b.defaults, g);
                    if (O.loop = parseInt(O.loop), z = 2 * O.loop - 1, O.loop)
                        for (var L = 0; z > L; L++) {
                            var M = {
                                delay: O.delay,
                                progress: O.progress
                            };
                            L === z - 1 && (M.display = O.display, M.visibility = O.visibility, M.complete = O.complete), _(d, "reverse", M)
                        }
                    return t()
                }
            };
            b = p.extend(_, b), b.animate = _;
            var T = e.requestAnimationFrame || d;
            return b.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function() {
                n.hidden ? (T = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }, c()) : T = e.requestAnimationFrame || d
            }), t.Velocity = b, t !== e && (t.fn.velocity = _, t.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function(t, e) {
                b.Redirects["slide" + e] = function(t, n, i, o, a, s) {
                    var u = p.extend({}, n),
                        l = u.begin,
                        c = u.complete,
                        f = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        h = {};
                    u.display === r && (u.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), u.begin = function() {
                        l && l.call(a, a);
                        for (var n in f) {
                            h[n] = t.style[n];
                            var r = b.CSS.getPropertyValue(t, n);
                            f[n] = "Down" === e ? [r, 0] : [0, r]
                        }
                        h.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, u.complete = function() {
                        for (var e in h) t.style[e] = h[e];
                        c && c.call(a, a), s && s.resolver(a)
                    }, b(t, f, u)
                }
            }), p.each(["In", "Out"], function(t, e) {
                b.Redirects["fade" + e] = function(t, n, i, o, a, s) {
                    var u = p.extend({}, n),
                        l = {
                            opacity: "In" === e ? 1 : 0
                        },
                        c = u.complete;
                    i !== o - 1 ? u.complete = u.begin = null : u.complete = function() {
                        c && c.call(a, a), s && s.resolver(a)
                    }, u.display === r && (u.display = "In" === e ? "auto" : "none"), b(this, l, u)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }), window.Modernizr = function(t, e, n) {
        function r(t) {
            g.cssText = t
        }

        function i(t, e) {
            return typeof t === e
        }

        function o(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var r in t) {
                var i = t[r];
                if (!o(i, "-") && g[i] !== n) return "pfx" == e ? i : !0
            }
            return !1
        }

        function s(t, e, r) {
            for (var o in t) {
                var a = e[t[o]];
                if (a !== n) return r === !1 ? t[o] : i(a, "function") ? a.bind(r || e) : a
            }
            return !1
        }

        function u(t, e, n) {
            var r = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + w.join(r + " ") + r).split(" ");
            return i(e, "string") || i(e, "undefined") ? a(o, e) : (o = (t + " " + _.join(r + " ") + r).split(" "), s(o, e, n))
        }
        var l, c, f, p = "2.6.2",
            h = {},
            d = !0,
            v = e.documentElement,
            m = "modernizr",
            y = e.createElement(m),
            g = y.style,
            b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            x = "Webkit Moz O ms",
            w = x.split(" "),
            _ = x.toLowerCase().split(" "),
            T = {},
            S = [],
            C = S.slice,
            k = function(t, n, r, i) {
                var o, a, s, u, l = e.createElement("div"),
                    c = e.body,
                    f = c || e.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) s = e.createElement("div"), s.id = i ? i[r] : m + (r + 1), l.appendChild(s);
                return o = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), l.id = m, (c ? l : f).innerHTML += o, f.appendChild(l), c || (f.style.background = "", f.style.overflow = "hidden", u = v.style.overflow, v.style.overflow = "hidden", v.appendChild(f)), a = n(l, t), c ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), v.style.overflow = u), !!a
            },
            E = {}.hasOwnProperty;
        f = i(E, "undefined") || i(E.call, "undefined") ? function(t, e) {
            return e in t && i(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return E.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = C.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = e.prototype;
                        var o = new i,
                            a = e.apply(o, n.concat(C.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return e.apply(t, n.concat(C.call(arguments)))
                };
            return r
        }), T.csstransforms = function() {
            return !!u("transform")
        }, T.csstransforms3d = function() {
            var t = !!u("perspective");
            return t && "webkitPerspective" in v.style && k("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, T.csstransitions = function() {
            return u("transition")
        };
        for (var A in T) f(T, A) && (c = A.toLowerCase(), h[c] = T[A](), S.push((h[c] ? "" : "no-") + c));
        return h.addTest = function(t, e) {
            if ("object" == typeof t)
                for (var r in t) f(t, r) && h.addTest(r, t[r]);
            else {
                if (t = t.toLowerCase(), h[t] !== n) return h;
                e = "function" == typeof e ? e() : e, "undefined" != typeof d && d && (v.className += " " + (e ? "" : "no-") + t), h[t] = e
            }
            return h
        }, r(""), y = l = null, h._version = p, h._prefixes = b, h._domPrefixes = _, h._cssomPrefixes = w, h.testProp = function(t) {
            return a([t])
        }, h.testAllProps = u, h.testStyles = k, h.prefixed = function(t, e, n) {
            return e ? u(t, e, n) : u(t, "pfx")
        }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + S.join(" ") : ""), h
    }(this, this.document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
    }(function(t, e, n) {
        "use strict";

        function r(t) {
            return t ? t.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-") : ""
        }

        function i(e, n, r) {
            var i, o, a, s = null,
                u = 0;
            r = r || {};
            var l = function() {
                u = r.leading === !1 ? 0 : t.now(), s = null, a = e.apply(i, o), i = o = null
            };
            return function() {
                var c = t.now();
                u || r.leading !== !1 || (u = c);
                var f = n - (c - u);
                return i = this, o = arguments, 0 >= f || f > n ? (clearTimeout(s), s = null, u = c, a = e.apply(i, o), i = o = null) : s || r.trailing === !1 || (s = setTimeout(l, f)), a
            }
        }

        function o(t, e, n) {
            for (var r = 0, i = t.length; i > r; r++)
                if (e.call(n, t[r], r, t) === {}) return
        }

        function a(e, n, r) {
            return setTimeout(t.proxy(e, n), r)
        }

        function s(t) {
            return Math.max.apply(Math, t)
        }

        function u(t) {
            return Math.min.apply(Math, t)
        }

        function l(e) {
            return t.isNumeric(e) ? e : 0
        }

        function c(t) {
            var e, n, r = t.length;
            if (!r) return t;
            for (; --r;) n = Math.floor(Math.random() * (r + 1)), e = t[n], t[n] = t[r], t[r] = e;
            return t
        }
        if ("object" != typeof e) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
        var f = e.prefixed("transition"),
            p = e.prefixed("transitionDelay"),
            h = e.prefixed("transitionDuration"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[f],
            v = e.prefixed("transform"),
            m = r(v),
            y = e.csstransforms && e.csstransitions,
            g = e.csstransforms3d,
            b = !!window.getComputedStyle,
            x = "shuffle",
            w = "all",
            _ = "groups",
            T = 1,
            S = .001,
            C = window.getComputedStyle || function() {},
            k = function(t, e) {
                this.x = l(t), this.y = l(e)
            };
        k.equals = function(t, e) {
            return t.x === e.x && t.y === e.y
        };
        var E = function() {
                if (!b) return !1;
                var t = document.body || document.documentElement,
                    e = document.createElement("div");
                e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
                var n = C(e, null).width,
                    r = "10px" === n;
                return t.removeChild(e), r
            }(),
            A = 0,
            j = t(window),
            O = function(e, n) {
                n = n || {}, t.extend(this, O.options, n, O.settings), this.$el = t(e), this.element = e, this.unique = "shuffle_" + A++, this._fire(O.EventType.LOADING), this._init(), a(function() {
                    this.initialized = !0, this._fire(O.EventType.DONE)
                }, this, 16)
            };
        return O.EventType = {
            LOADING: "loading",
            DONE: "done",
            LAYOUT: "layout",
            REMOVED: "removed"
        }, O.ClassName = {
            BASE: x,
            SHUFFLE_ITEM: "shuffle-item",
            FILTERED: "filtered",
            CONCEALED: "concealed"
        }, O.options = {
            group: w,
            speed: 250,
            easing: "ease-out",
            itemSelector: "",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimeter: null,
            buffer: 0,
            columnThreshold: b ? .01 : .1,
            initialSort: null,
            throttle: i,
            throttleTime: 300,
            sequentialFadeDelay: 150,
            supported: y
        }, O.settings = {
            useSizer: !1,
            itemCss: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible"
            },
            revealAppendedDelay: 300,
            lastSort: {},
            lastFilter: w,
            enabled: !0,
            destroyed: !1,
            initialized: !1,
            _animations: [],
            _transitions: [],
            _isMovementCanceled: !1,
            styleQueue: []
        }, O.Point = k, O._getItemTransformString = function(t, e) {
            return g ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
        }, O._getNumberStyle = function(e, n, r) {
            if (b) {
                r = r || C(e, null);
                var i = O._getFloat(r[n]);
                return E || "width" !== n ? E || "height" !== n || (i += O._getFloat(r.paddingTop) + O._getFloat(r.paddingBottom) + O._getFloat(r.borderTopWidth) + O._getFloat(r.borderBottomWidth)) : i += O._getFloat(r.paddingLeft) + O._getFloat(r.paddingRight) + O._getFloat(r.borderLeftWidth) + O._getFloat(r.borderRightWidth), i
            }
            return O._getFloat(t(e).css(n))
        }, O._getFloat = function(t) {
            return l(parseFloat(t))
        }, O._getOuterWidth = function(t, e) {
            var n = C(t, null),
                r = O._getNumberStyle(t, "width", n);
            if (e) {
                var i = O._getNumberStyle(t, "marginLeft", n),
                    o = O._getNumberStyle(t, "marginRight", n);
                r += i + o
            }
            return r
        }, O._getOuterHeight = function(t, e) {
            var n = C(t, null),
                r = O._getNumberStyle(t, "height", n);
            if (e) {
                var i = O._getNumberStyle(t, "marginTop", n),
                    o = O._getNumberStyle(t, "marginBottom", n);
                r += i + o
            }
            return r
        }, O._skipTransition = function(t, e, n) {
            var r = t.style[h];
            t.style[h] = "0ms", e.call(n);
            var i = t.offsetWidth;
            i = null, t.style[h] = r
        }, O.prototype._init = function() {
            this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(O.ClassName.BASE), this._initItems(), j.on("resize." + x + "." + this.unique, this._getResizeFunction());
            var t = this.$el.css(["position", "overflow"]),
                e = O._getOuterWidth(this.element);
            this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && a(function() {
                this._setTransitions(), this.element.style[f] = "height " + this.speed + "ms " + this.easing
            }, this)
        }, O.prototype._getResizeFunction = function() {
            var e = t.proxy(this._onResize, this);
            return this.throttle ? this.throttle(e, this.throttleTime) : e
        }, O.prototype._getElementOption = function(t) {
            return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
        }, O.prototype._validateStyles = function(t) {
            "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
        }, O.prototype._filter = function(t, e) {
            t = t || this.lastFilter, e = e || this.$items;
            var n = this._getFilteredSets(t, e);
            return this._toggleFilterClasses(n.filtered, n.concealed), this.lastFilter = t, "string" == typeof t && (this.group = t), n.filtered
        }, O.prototype._getFilteredSets = function(e, n) {
            var r = t(),
                i = t();
            return e === w ? r = n : o(n, function(n) {
                var o = t(n);
                this._doesPassFilter(e, o) ? r = r.add(o) : i = i.add(o)
            }, this), {
                filtered: r,
                concealed: i
            }
        }, O.prototype._doesPassFilter = function(e, n) {
            if (t.isFunction(e)) return e.call(n[0], n, this);
            var r = n.data(_),
                i = this.delimeter && !t.isArray(r) ? r.split(this.delimeter) : r;
            return t.inArray(e, i) > -1
        }, O.prototype._toggleFilterClasses = function(t, e) {
            t.removeClass(O.ClassName.CONCEALED).addClass(O.ClassName.FILTERED), e.removeClass(O.ClassName.FILTERED).addClass(O.ClassName.CONCEALED)
        }, O.prototype._initItems = function(t) {
            t = t || this.$items, t.addClass([O.ClassName.SHUFFLE_ITEM, O.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new k).data("scale", T)
        }, O.prototype._updateItemCount = function() {
            this.visibleItems = this._getFilteredItems().length
        }, O.prototype._setTransition = function(t) {
            t.style[f] = m + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        }, O.prototype._setTransitions = function(t) {
            t = t || this.$items, o(t, function(t) {
                this._setTransition(t)
            }, this)
        }, O.prototype._setSequentialDelay = function(t) {
            this.supported && o(t, function(t, e) {
                t.style[p] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
            }, this)
        }, O.prototype._getItems = function() {
            return this.$el.children(this.itemSelector)
        }, O.prototype._getFilteredItems = function() {
            return this.$items.filter("." + O.ClassName.FILTERED)
        }, O.prototype._getConcealedItems = function() {
            return this.$items.filter("." + O.ClassName.CONCEALED)
        }, O.prototype._getColumnSize = function(e, n) {
            var r;
            return r = t.isFunction(this.columnWidth) ? this.columnWidth(e) : this.useSizer ? O._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? O._getOuterWidth(this.$items[0], !0) : e, 0 === r && (r = e), r + n
        }, O.prototype._getGutterSize = function(e) {
            var n;
            return n = t.isFunction(this.gutterWidth) ? this.gutterWidth(e) : this.useSizer ? O._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
        }, O.prototype._setColumns = function(t) {
            var e = t || O._getOuterWidth(this.element),
                n = this._getGutterSize(e),
                r = this._getColumnSize(e, n),
                i = (e + n) / r;
            Math.abs(Math.round(i) - i) < this.columnThreshold && (i = Math.round(i)), this.cols = Math.max(Math.floor(i), 1), this.containerWidth = e, this.colWidth = r
        }, O.prototype._setContainerSize = function() {
            this.$el.css("height", this._getContainerSize())
        }, O.prototype._getContainerSize = function() {
            return s(this.positions)
        }, O.prototype._fire = function(t, e) {
            this.$el.trigger(t + "." + x, e && e.length ? e : [this])
        }, O.prototype._resetCols = function() {
            var t = this.cols;
            for (this.positions = []; t--;) this.positions.push(0)
        }, O.prototype._layout = function(t, e) {
            o(t, function(t) {
                this._layoutItem(t, !!e)
            }, this), this._processStyleQueue(), this._setContainerSize()
        }, O.prototype._layoutItem = function(e, n) {
            var r = t(e),
                i = r.data(),
                o = i.point,
                a = i.scale,
                s = {
                    width: O._getOuterWidth(e, !0),
                    height: O._getOuterHeight(e, !0)
                },
                u = this._getItemPosition(s);
            k.equals(o, u) && a === T || (i.point = u, i.scale = T, this.styleQueue.push({
                $item: r,
                point: u,
                scale: T,
                opacity: n ? 0 : 1,
                skipTransition: n || 0 === this.speed,
                callfront: function() {
                    n || r.css("visibility", "visible")
                },
                callback: function() {
                    n && r.css("visibility", "hidden")
                }
            }))
        }, O.prototype._getItemPosition = function(t) {
            for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), n = this._getColumnSet(e, this.cols), r = this._getShortColumn(n, this.buffer), i = new k(Math.round(this.colWidth * r), Math.round(n[r])), o = n[r] + t.height, a = this.cols + 1 - n.length, s = 0; a > s; s++) this.positions[r + s] = o;
            return i
        }, O.prototype._getColumnSpan = function(t, e, n) {
            var r = t / e;
            return Math.abs(Math.round(r) - r) < this.columnThreshold && (r = Math.round(r)), Math.min(Math.ceil(r), n)
        }, O.prototype._getColumnSet = function(t, e) {
            if (1 === t) return this.positions;
            for (var n = e + 1 - t, r = [], i = 0; n > i; i++) r[i] = s(this.positions.slice(i, i + t));
            return r
        }, O.prototype._getShortColumn = function(t, e) {
            for (var n = u(t), r = 0, i = t.length; i > r; r++)
                if (t[r] >= n - e && t[r] <= n + e) return r;
            return 0
        }, O.prototype._shrink = function(e) {
            var n = e || this._getConcealedItems();
            o(n, function(e) {
                var n = t(e),
                    r = n.data();
                r.scale !== S && (r.scale = S, this.styleQueue.push({
                    $item: n,
                    point: r.point,
                    scale: S,
                    opacity: 0,
                    callback: function() {
                        n.css("visibility", "hidden")
                    }
                }))
            }, this)
        }, O.prototype._onResize = function() {
            if (this.enabled && !this.destroyed) {
                var t = O._getOuterWidth(this.element);
                t !== this.containerWidth && this.update()
            }
        }, O.prototype._getStylesForTransition = function(t) {
            var e = {
                opacity: t.opacity
            };
            return this.supported ? e[v] = O._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
        }, O.prototype._transition = function(e) {
            var n = this._getStylesForTransition(e);
            this._startItemAnimation(e.$item, n, e.callfront || t.noop, e.callback || t.noop)
        }, O.prototype._startItemAnimation = function(e, n, r, i) {
            function o(e) {
                e.target === e.currentTarget && (t(e.target).off(d, o), a._removeTransitionReference(s), i())
            }
            var a = this,
                s = {
                    $element: e,
                    handler: o
                };
            if (r(), !this.initialized) return e.css(n), void i();
            if (this.supported) e.css(n), e.on(d, o), this._transitions.push(s);
            else {
                var u = e.stop(!0).animate(n, this.speed, "swing", i);
                this._animations.push(u.promise())
            }
        }, O.prototype._processStyleQueue = function(e) {
            this.isTransitioning && this._cancelMovement();
            var n = t();
            o(this.styleQueue, function(t) {
                t.skipTransition ? this._styleImmediately(t) : (n = n.add(t.$item), this._transition(t))
            }, this), n.length > 0 && this.initialized && this.speed > 0 ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(n, d, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : e || a(this._layoutEnd, this), this.styleQueue.length = 0
        }, O.prototype._cancelMovement = function() {
            this.supported ? o(this._transitions, function(t) {
                t.$element.off(d, t.handler)
            }) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
        }, O.prototype._removeTransitionReference = function(e) {
            var n = t.inArray(e, this._transitions);
            n > -1 && this._transitions.splice(n, 1)
        }, O.prototype._styleImmediately = function(t) {
            O._skipTransition(t.$item[0], function() {
                t.$item.css(this._getStylesForTransition(t))
            }, this)
        }, O.prototype._movementFinished = function() {
            this.isTransitioning = !1, this._layoutEnd()
        }, O.prototype._layoutEnd = function() {
            this._fire(O.EventType.LAYOUT)
        }, O.prototype._addItems = function(t, e, n) {
            this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), o(this.styleQueue, function(t) {
                t.skipTransition = !0
            }), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, n) : this.shuffle(this.lastFilter)
        }, O.prototype._addItemsToEnd = function(t, e) {
            var n = this._filter(null, t),
                r = n.get();
            this._updateItemCount(), this._layout(r, !0), e && this.supported && this._setSequentialDelay(r), this._revealAppended(r)
        }, O.prototype._revealAppended = function(e) {
            a(function() {
                o(e, function(e) {
                    var n = t(e);
                    this._transition({
                        $item: n,
                        opacity: 1,
                        point: n.data("point"),
                        scale: T
                    })
                }, this), this._whenCollectionDone(t(e), d, function() {
                    t(e).css(p, "0ms"), this._movementFinished()
                })
            }, this, this.revealAppendedDelay)
        }, O.prototype._whenCollectionDone = function(e, n, r) {
            function i(e) {
                e.target === e.currentTarget && (t(e.target).off(n, i), o++, o === a && (s._removeTransitionReference(u), r.call(s)))
            }
            var o = 0,
                a = e.length,
                s = this,
                u = {
                    $element: e,
                    handler: i
                };
            e.on(n, i), this._transitions.push(u)
        }, O.prototype._whenAnimationsDone = function(e) {
            t.when.apply(null, this._animations).always(t.proxy(function() {
                this._animations.length = 0, this._isMovementCanceled || e.call(this)
            }, this))
        }, O.prototype.shuffle = function(t, e) {
            this.enabled && (t || (t = w), this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
        }, O.prototype.sort = function(t) {
            if (this.enabled) {
                this._resetCols();
                var e = t || this.lastSort,
                    n = this._getFilteredItems().sorted(e);
                this._layout(n), this.lastSort = e
            }
        }, O.prototype.update = function(t) {
            this.enabled && (t || this._setColumns(), this.sort())
        }, O.prototype.layout = function() {
            this.update(!0)
        }, O.prototype.appended = function(t, e, n) {
            this._addItems(t, e === !0, n !== !1)
        }, O.prototype.disable = function() {
            this.enabled = !1
        }, O.prototype.enable = function(t) {
            this.enabled = !0, t !== !1 && this.update()
        }, O.prototype.remove = function(e) {
            function n() {
                e.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(O.EventType.REMOVED, [e, this]), e = null
            }
            e.length && e.jquery && (this._toggleFilterClasses(t(), e), this._shrink(e), this.sort(), this.$el.one(O.EventType.LAYOUT + "." + x, t.proxy(n, this)))
        }, O.prototype.destroy = function() {
            j.off("." + this.unique), this.$el.removeClass(x).removeAttr("style").removeData(x), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([O.ClassName.CONCEALED, O.ClassName.FILTERED, O.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
        }, t.fn.shuffle = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var r = t(this),
                    i = r.data(x);
                i ? "string" == typeof e && i[e] && i[e].apply(i, n) : (i = new O(this, e), r.data(x, i))
            })
        }, t.fn.sorted = function(e) {
            var r = t.extend({}, t.fn.sorted.defaults, e),
                i = this.get(),
                o = !1;
            return i.length ? r.randomize ? c(i) : (t.isFunction(r.by) && i.sort(function(e, i) {
                if (o) return 0;
                var a = r.by(t(e)),
                    s = r.by(t(i));
                return a === n && s === n ? (o = !0, 0) : s > a || "sortFirst" === a || "sortLast" === s ? -1 : a > s || "sortLast" === a || "sortFirst" === s ? 1 : 0
            }), o ? this.get() : (r.reverse && i.reverse(), i)) : []
        }, t.fn.sorted.defaults = {
            reverse: !1,
            by: null,
            randomize: !1
        }, O
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(t) {
        var e = "1.7.2",
            n = {},
            r = {
                exclude: [],
                excludeWithin: [],
                offset: 0,
                direction: "top",
                delegateSelector: null,
                scrollElement: null,
                scrollTarget: null,
                beforeScroll: function() {},
                afterScroll: function() {},
                easing: "swing",
                speed: 400,
                autoCoefficient: 2,
                preventDefault: !0
            },
            i = function(e) {
                var n = [],
                    r = !1,
                    i = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
                return this.each(function() {
                    var e = t(this);
                    if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(e[i]() > 0 ? n.push(this) : (e[i](1), r = e[i]() > 0, r && n.push(this), e[i](0))) : (n.push(document.scrollingElement), !1)
                }), n.length || this.each(function() {
                    this === document.documentElement && "smooth" === t(this).css("scrollBehavior") && (n = [this]), n.length || "BODY" !== this.nodeName || (n = [this])
                }), "first" === e.el && n.length > 1 && (n = [n[0]]), n
            };
        t.fn.extend({
            scrollable: function(t) {
                var e = i.call(this, {
                    dir: t
                });
                return this.pushStack(e)
            },
            firstScrollable: function(t) {
                var e = i.call(this, {
                    el: "first",
                    dir: t
                });
                return this.pushStack(e)
            },
            smoothScroll: function(e, n) {
                if (e = e || {}, "options" === e) return n ? this.each(function() {
                    var e = t(this),
                        r = t.extend(e.data("ssOpts") || {}, n);
                    t(this).data("ssOpts", r)
                }) : this.first().data("ssOpts");
                var r = t.extend({}, t.fn.smoothScroll.defaults, e),
                    i = function(e) {
                        var n = function(t) {
                                return t.replace(/(:|\.|\/)/g, "\\$1")
                            },
                            i = this,
                            o = t(this),
                            a = t.extend({}, r, o.data("ssOpts") || {}),
                            s = r.exclude,
                            u = a.excludeWithin,
                            l = 0,
                            c = 0,
                            f = !0,
                            p = {},
                            h = t.smoothScroll.filterPath(location.pathname),
                            d = t.smoothScroll.filterPath(i.pathname),
                            v = location.hostname === i.hostname || !i.hostname,
                            m = a.scrollTarget || d === h,
                            y = n(i.hash);
                        if (y && !t(y).length && (f = !1), a.scrollTarget || v && m && y) {
                            for (; f && l < s.length;) o.is(n(s[l++])) && (f = !1);
                            for (; f && c < u.length;) o.closest(u[c++]).length && (f = !1)
                        } else f = !1;
                        f && (a.preventDefault && e.preventDefault(), t.extend(p, a, {
                            scrollTarget: a.scrollTarget || y,
                            link: i
                        }), t.smoothScroll(p))
                    };
                return null !== e.delegateSelector ? this.undelegate(e.delegateSelector, "click.smoothscroll").delegate(e.delegateSelector, "click.smoothscroll", i) : this.unbind("click.smoothscroll").bind("click.smoothscroll", i), this
            }
        }), t.smoothScroll = function(e, r) {
            if ("options" === e && "object" == typeof r) return t.extend(n, r);
            var i, o, a, s, u, l = 0,
                c = "offset",
                f = "scrollTop",
                p = {},
                h = {};
            "number" == typeof e ? (i = t.extend({
                link: null
            }, t.fn.smoothScroll.defaults, n), a = e) : (i = t.extend({
                link: null
            }, t.fn.smoothScroll.defaults, e || {}, n), i.scrollElement && (c = "position", "static" === i.scrollElement.css("position") && i.scrollElement.css("position", "relative"))), f = "left" === i.direction ? "scrollLeft" : f, i.scrollElement ? (o = i.scrollElement, /^(?:HTML|BODY)$/.test(o[0].nodeName) || (l = o[f]())) : o = t("html, body").firstScrollable(i.direction), i.beforeScroll.call(o, i), a = "number" == typeof e ? e : r || t(i.scrollTarget)[c]() && t(i.scrollTarget)[c]()[i.direction] || 0, p[f] = a + l + i.offset, s = i.speed, "auto" === s && (u = Math.abs(p[f] - o[f]()), s = u / i.autoCoefficient), h = {
                duration: s,
                easing: i.easing,
                complete: function() {
                    i.afterScroll.call(i.link, i)
                }
            }, i.step && (h.step = i.step), o.length ? o.stop().animate(p, h) : i.afterScroll.call(i.link, i)
        }, t.smoothScroll.version = e, t.smoothScroll.filterPath = function(t) {
            return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }, t.fn.smoothScroll.defaults = r
    });
var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
    }
}();
! function(t) {
    "use strict";

    function e(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/,
                n = e.exec(t.toString());
            return n && n.length > 1 ? n[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function n(t) {
        return /true/.test(t) ? !0 : /false/.test(t) ? !1 : isNaN(1 * t) ? t : parseFloat(t)
    }

    function r(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var i = "6.2.0",
        o = {
            version: i,
            _plugins: {},
            _uuids: [],
            rtl: function() {
                return "rtl" === t("html").attr("dir")
            },
            plugin: function(t, n) {
                var i = n || e(t),
                    o = r(i);
                this._plugins[o] = this[i] = t
            },
            registerPlugin: function(t, n) {
                var i = n ? r(n) : e(t.constructor).toLowerCase();
                t.uuid = this.GetYoDigits(6, i), t.$element.attr("data-" + i) || t.$element.attr("data-" + i, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + i), this._uuids.push(t.uuid)
            },
            unregisterPlugin: function(t) {
                var n = r(e(t.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + n).removeData("zfPlugin").trigger("destroyed.zf." + n);
                for (var i in t) t[i] = null
            },
            reInit: function(e) {
                var n = e instanceof t;
                try {
                    if (n) e.each(function() {
                        t(this).data("zfPlugin")._init()
                    });
                    else {
                        var i = typeof e,
                            o = this,
                            a = {
                                object: function(e) {
                                    e.forEach(function(e) {
                                        e = r(e), t("[data-" + e + "]").foundation("_init")
                                    })
                                },
                                string: function() {
                                    e = r(e), t("[data-" + e + "]").foundation("_init")
                                },
                                undefined: function() {
                                    this.object(Object.keys(o._plugins))
                                }
                            };
                        a[i](e)
                    }
                } catch (s) {} finally {
                    return e
                }
            },
            GetYoDigits: function(t, e) {
                return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
            },
            reflow: function(e, r) {
                "undefined" == typeof r ? r = Object.keys(this._plugins) : "string" == typeof r && (r = [r]);
                var i = this;
                t.each(r, function(r, o) {
                    var a = i._plugins[o],
                        s = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                    s.each(function() {
                        var e = t(this),
                            r = {};
                        if (!e.data("zfPlugin")) {
                            if (e.attr("data-options")) {
                                e.attr("data-options").split(";").forEach(function(t, e) {
                                    var i = t.split(":").map(function(t) {
                                        return t.trim()
                                    });
                                    i[0] && (r[i[0]] = n(i[1]))
                                })
                            }
                            try {
                                e.data("zfPlugin", new a(t(this), r))
                            } catch (i) {} finally {
                                return
                            }
                        }
                    })
                })
            },
            getFnName: e,
            transitionend: function(t) {
                var e, n = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    r = document.createElement("div");
                for (var i in n) "undefined" != typeof r.style[i] && (e = n[i]);
                return e ? e : (e = setTimeout(function() {
                    t.triggerHandler("transitionend", [t])
                }, 1), "transitionend")
            }
        };
    o.util = {
        throttle: function(t, e) {
            var n = null;
            return function() {
                var r = this,
                    i = arguments;
                null === n && (n = setTimeout(function() {
                    t.apply(r, i), n = null
                }, e))
            }
        }
    };
    var a = function(n) {
        var r = typeof n,
            i = t("meta.foundation-mq"),
            a = t(".no-js");
        if (i.length || t('<meta class="foundation-mq">').appendTo(document.head), a.length && a.removeClass("no-js"), "undefined" === r) o.MediaQuery._init(), o.reflow(this);
        else {
            if ("string" !== r) throw new TypeError("We're sorry, " + r + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var s = Array.prototype.slice.call(arguments, 1),
                u = this.data("zfPlugin");
            if (void 0 === u || void 0 === u[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (u ? e(u) : "this element") + ".");
            1 === this.length ? u[n].apply(u, s) : this.each(function(e, r) {
                u[n].apply(t(r).data("zfPlugin"), s)
            })
        }
        return this
    };
    window.Foundation = o, t.fn.foundation = a,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var n = t[e];
                window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var r = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        n = Math.max(r + 16, e);
                    return setTimeout(function() {
                        t(r = n)
                    }, n - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                n = this,
                r = function() {},
                i = function() {
                    return n.apply(this instanceof r ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (r.prototype = this.prototype), i.prototype = new r, i
        })
}(jQuery), ! function(t) {
    var e = function() {
        function e(n, r) {
            _classCallCheck(this, e), this.$element = n, this.options = t.extend({}, e.defaults, this.$element.data(), r), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var n = t(this),
                            r = n.find("a"),
                            i = n.hasClass("is-active"),
                            o = r[0].hash.slice(1),
                            a = r[0].id ? r[0].id : o + "-label",
                            s = t("#" + o);
                        n.attr({
                            role: "presentation"
                        }), r.attr({
                            role: "tab",
                            "aria-controls": o,
                            "aria-selected": i,
                            id: a
                        }), s.attr({
                            role: "tabpanel",
                            "aria-hidden": !i,
                            "aria-labelledby": a
                        }), i && e.options.autoFocus && r.focus()
                    }), this.options.matchHeight) {
                    var n = this.$tabContent.find("img");
                    n.length ? Foundation.onImagesLoaded(n, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this.options.matchHeight && t(window).on("changed.zf.mediaquery", this._setHeight.bind(this))
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var e = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(n) {
                    n.preventDefault(), n.stopPropagation(), t(this).hasClass("is-active") || e._handleTabChange(t(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var e = this;
                e.$element.find("li:first-of-type"), e.$element.find("li:last-of-type");
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(n) {
                    if (9 !== n.which) {
                        n.stopPropagation(), n.preventDefault();
                        var r, i, o = t(this),
                            a = o.parent("ul").children("li");
                        a.each(function(n) {
                            return t(this).is(o) ? void(e.options.wrapOnKeys ? (r = 0 === n ? a.last() : a.eq(n - 1), i = n === a.length - 1 ? a.first() : a.eq(n + 1)) : (r = a.eq(Math.max(0, n - 1)), i = a.eq(Math.min(n + 1, a.length - 1)))) : void 0
                        }), Foundation.Keyboard.handleKey(n, "Tabs", {
                            open: function() {
                                o.find('[role="tab"]').focus(), e._handleTabChange(o)
                            },
                            previous: function() {
                                r.find('[role="tab"]').focus(), e._handleTabChange(r)
                            },
                            next: function() {
                                i.find('[role="tab"]').focus(), e._handleTabChange(i)
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(e) {
                var n = e.find('[role="tab"]'),
                    r = n[0].hash,
                    i = this.$tabContent.find(r),
                    o = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                        "aria-selected": "false"
                    });
                t("#" + o.attr("aria-controls")).removeClass("is-active").attr({
                    "aria-hidden": "true"
                }), e.addClass("is-active"), n.attr({
                    "aria-selected": "true"
                }), i.addClass("is-active").attr({
                    "aria-hidden": "false"
                }), this.$element.trigger("change.zf.tabs", [e])
            }
        }, {
            key: "selectTab",
            value: function(t) {
                var e;
                e = "object" == typeof t ? t[0].id : t, e.indexOf("#") < 0 && (e = "#" + e);
                var n = this.$tabTitles.find('[href="' + e + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(n)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var e = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var n = t(this),
                        r = n.hasClass("is-active");
                    r || n.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var i = this.getBoundingClientRect().height;
                    r || n.css({
                        visibility: "",
                        display: ""
                    }), e = i > e ? i : e
                }).css("height", e + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && t(window).off("changed.zf.mediaquery"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(e, "Tabs")
}(jQuery), ! function(t) {
    function e(t) {
        var e = {};
        for (var n in t) e[t[n]] = t[n];
        return e
    }
    var n = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        r = {},
        i = {
            keys: e(n),
            parseKey: function(t) {
                var e = n[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
                return t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e
            },
            handleKey: function(e, n, i) {
                var o, a, s, u = r[n],
                    l = this.parseKey(e);
                u && (o = "undefined" == typeof u.ltr ? u : Foundation.rtl() ? t.extend({}, u.ltr, u.rtl) : t.extend({}, u.rtl, u.ltr), a = o[l], s = i[a], s && "function" == typeof s ? (s.apply(), (i.handled || "function" == typeof i.handled) && i.handled.apply()) : (i.unhandled || "function" == typeof i.unhandled) && i.unhandled.apply())
            },
            findFocusable: function(e) {
                return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                    return t(this).is(":visible") && !(t(this).attr("tabindex") < 0)
                })
            },
            register: function(t, e) {
                r[t] = e
            }
        };
    Foundation.Keyboard = i
}(jQuery), ! function(t) {
    function e(t, e, n) {
        var r, i, o = this,
            a = e.duration,
            s = Object.keys(t.data())[0] || "timer",
            u = -1;
        this.isPaused = !1, this.restart = function() {
            u = -1, clearTimeout(i), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(i), u = 0 >= u ? a : u, t.data("paused", !1), r = Date.now(), i = setTimeout(function() {
                e.infinite && o.restart(), n()
            }, u), t.trigger("timerstart.zf." + s)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(i), t.data("paused", !0);
            var e = Date.now();
            u -= e - r, t.trigger("timerpaused.zf." + s)
        }
    }

    function n(e, n) {
        function r() {
            i--, 0 === i && n()
        }
        var i = e.length;
        0 === i && n(), e.each(function() {
            this.complete ? r() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? r() : t(this).one("load", function() {
                r()
            })
        })
    }
    Foundation.Timer = e, Foundation.onImagesLoaded = n
}(jQuery), ! function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return t.svg4everybody = e()
    }) : "object" == typeof exports ? module.exports = e() : t.svg4everybody = e()
}(this, function() {
    function t(t, e) {
        if (e) {
            var n = document.createDocumentFragment(),
                r = !t.getAttribute("viewBox") && e.getAttribute("viewBox");
            r && t.setAttribute("viewBox", r);
            for (var i = e.cloneNode(!0); i.childNodes.length;) n.appendChild(i.firstChild);
            t.appendChild(n)
        }
    }

    function e(e) {
        "undefined" != typeof XDomainRequest ? (e.onprogress = function() {}, e.ontimeout = function() {}, e.onerror = function() {}, e.onload = function() {
            var n = e._cachedDocument;
            n || (n = e._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(r) {
                var i = e._cachedTarget[r.id];
                i || (i = e._cachedTarget[r.id] = n.getElementById(r.id)), t(r.svg, i)
            })
        }) : (e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var n = e._cachedDocument;
                n || (n = e._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function(r) {
                    var i = e._cachedTarget[r.id];
                    i || (i = e._cachedTarget[r.id] = n.getElementById(r.id)), t(r.svg, i)
                })
            }
        }, e.onreadystatechange())
    }

    function n(n) {
        function r() {
            for (var n = 0; n < f.length;) {
                var a = f[n],
                    s = a.parentNode;
                if (s && /svg/i.test(s.nodeName)) {
                    var u = a.getAttribute("xlink:href");
                    if (i && (!o.validate || o.validate(u, s, a))) {
                        s.removeChild(a);
                        var p = u.split("#"),
                            h = p.shift(),
                            d = p.join("#");
                        if (h.length) {
                            var v = l[h];
                            "undefined" != typeof XDomainRequest ? v || (v = l[h] = new window.XDomainRequest, v.open("GET", h), v.send(), v._embeds = []) : v || (v = l[h] = new XMLHttpRequest, v.open("GET", h), v.send(), v._embeds = []), v._embeds.push({
                                svg: s,
                                id: d
                            }), e(v)
                        } else t(s, document.getElementById(d))
                    }
                } else ++n
            }
            c(r, 67)
        }
        var i, o = Object(n),
            a = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            s = /\bAppleWebKit\/(\d+)\b/,
            u = /\bEdge\/12\.(\d+)\b/;
        i = "polyfill" in o ? o.polyfill : a.test(navigator.userAgent) || (navigator.userAgent.match(u) || [])[1] < 10547 || (navigator.userAgent.match(s) || [])[1] < 537;
        var l = {},
            c = window.requestAnimationFrame || setTimeout,
            f = document.getElementsByTagName("use");
        i && r()
    }
    return n
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(t) {
    function e(e) {
        var n = {},
            r = /^jQuery\d+$/;
        return t.each(e.attributes, function(t, e) {
            e.specified && !r.test(e.name) && (n[e.name] = e.value)
        }), n
    }

    function n(e, n) {
        var r = this,
            o = t(this);
        if (r.value === o.attr(s ? "placeholder-x" : "placeholder") && o.hasClass(h.customClass))
            if (r.value = "", o.removeClass(h.customClass), o.data("placeholder-password")) {
                if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = n, n;
                o.focus()
            } else r == i() && r.select()
    }

    function r(r) {
        var i, o = this,
            a = t(this),
            u = o.id;
        if (!r || "blur" !== r.type || !a.hasClass(h.customClass))
            if ("" === o.value) {
                if ("password" === o.type) {
                    if (!a.data("placeholder-textinput")) {
                        try {
                            i = a.clone().prop({
                                type: "text"
                            })
                        } catch (l) {
                            i = t("<input>").attr(t.extend(e(this), {
                                type: "text"
                            }))
                        }
                        i.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": a,
                            "placeholder-id": u
                        }).bind("focus.placeholder", n), a.data({
                            "placeholder-textinput": i,
                            "placeholder-id": u
                        }).before(i)
                    }
                    o.value = "", a = a.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", a.data("placeholder-id")).show()
                } else {
                    var c = a.data("placeholder-password");
                    c && (c[0].value = "", a.attr("id", a.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                a.addClass(h.customClass), a[0].value = a.attr(s ? "placeholder-x" : "placeholder")
            } else a.removeClass(h.customClass)
    }

    function i() {
        try {
            return document.activeElement
        } catch (t) {}
    }
    var o, a, s = !1,
        u = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        l = "placeholder" in document.createElement("input") && !u && !s,
        c = "placeholder" in document.createElement("textarea") && !u && !s,
        f = t.valHooks,
        p = t.propHooks,
        h = {};
    l && c ? (a = t.fn.placeholder = function() {
        return this
    }, a.input = !0, a.textarea = !0) : (a = t.fn.placeholder = function(e) {
        var i = {
            customClass: "placeholder"
        };
        return h = t.extend({}, i, e), this.filter((l ? "textarea" : ":input") + "[" + (s ? "placeholder-x" : "placeholder") + "]").not("." + h.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": n,
            "blur.placeholder": r
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, a.input = l, a.textarea = c, o = {
        get: function(e) {
            var n = t(e),
                r = n.data("placeholder-password");
            return r ? r[0].value : n.data("placeholder-enabled") && n.hasClass(h.customClass) ? "" : e.value
        },
        set: function(e, o) {
            var a, s, u = t(e);
            return "" !== o && (a = u.data("placeholder-textinput"), s = u.data("placeholder-password"), a ? (n.call(a[0], !0, o) || (e.value = o), a[0].value = o) : s && (n.call(e, !0, o) || (s[0].value = o), e.value = o)), u.data("placeholder-enabled") ? ("" === o ? (e.value = o, e != i() && r.call(e)) : (u.hasClass(h.customClass) && n.call(e), e.value = o), u) : (e.value = o, u)
        }
    }, l || (f.input = o, p.value = o), c || (f.textarea = o, p.value = o), t(function() {
        t(document).delegate("form", "submit.placeholder", function() {
            var e = t("." + h.customClass, this).each(function() {
                n.call(this, !0, "")
            });
            setTimeout(function() {
                e.each(r)
            }, 10)
        })
    }), t(window).bind("beforeunload.placeholder", function() {
        var e = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (e = !1)
        } catch (n) {}
        e && t("." + h.customClass).each(function() {
            this.value = ""
        })
    }))
}),
function(t, e, n) {
    "use strict";

    function r(t, e) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var n = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var r in n) null === n[r] && delete n[r];
        this.extend(this, a, e, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var i = "Parallax",
        o = 30,
        a = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    r.prototype.extend = function() {
        if (arguments.length > 1)
            for (var t = arguments[0], e = 1, n = arguments.length; n > e; e++) {
                var r = arguments[e];
                for (var i in r) t[i] = r[i]
            }
    }, r.prototype.data = function(t, e) {
        return this.deserialize(t.getAttribute("data-" + e))
    }, r.prototype.deserialize = function(t) {
        return "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t
    }, r.prototype.camelCase = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, r.prototype.transformSupport = function(r) {
        for (var i = e.createElement("div"), o = !1, a = null, s = !1, u = null, l = null, c = 0, f = this.vendors.length; f > c; c++)
            if (null !== this.vendors[c] ? (u = this.vendors[c][0] + "transform", l = this.vendors[c][1] + "Transform") : (u = "transform", l = "transform"), i.style[l] !== n) {
                o = !0;
                break
            }
        switch (r) {
            case "2D":
                s = o;
                break;
            case "3D":
                if (o) {
                    var p = e.body || e.createElement("body"),
                        h = e.documentElement,
                        d = h.style.overflow;
                    e.body || (h.style.overflow = "hidden", h.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(i), i.style[l] = "translate3d(1px,1px,1px)", a = t.getComputedStyle(i).getPropertyValue(u), s = a !== n && a.length > 0 && "none" !== a, h.style.overflow = d, p.removeChild(i)
                }
        }
        return s
    }, r.prototype.ww = null, r.prototype.wh = null, r.prototype.wcx = null, r.prototype.wcy = null, r.prototype.wrx = null, r.prototype.wry = null, r.prototype.portrait = null, r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], r.prototype.motionSupport = !!t.DeviceMotionEvent, r.prototype.orientationSupport = !!t.DeviceOrientationEvent, r.prototype.orientationStatus = 0, r.prototype.propertyCache = {}, r.prototype.initialise = function() {
        r.prototype.transform2DSupport === n && (r.prototype.transform2DSupport = r.prototype.transformSupport("2D"), r.prototype.transform3DSupport = r.prototype.transformSupport("3D")), this.transform3DSupport && this.accelerate(this.element);
        var e = t.getComputedStyle(this.element);
        "static" === e.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, r.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, e = this.layers.length; e > t; t++) {
            var n = this.layers[t];
            this.transform3DSupport && this.accelerate(n), n.style.position = t ? "absolute" : "relative", n.style.display = "block", n.style.left = 0, n.style.top = 0, this.depths.push(this.data(n, "depth") || 0)
        }
    }, r.prototype.updateDimensions = function() {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, r.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, r.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, r.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, r.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, r.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, r.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, r.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, r.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, r.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, r.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, r.prototype.clamp = function(t, e, n) {
        return t = Math.max(t, e), t = Math.min(t, n)
    }, r.prototype.css = function(t, e, r) {
        var i = this.propertyCache[e];
        if (!i)
            for (var o = 0, a = this.vendors.length; a > o; o++)
                if (i = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + e) : e, t.style[i] !== n) {
                    this.propertyCache[e] = i;
                    break
                }
        t.style[i] = r
    }, r.prototype.accelerate = function(t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, r.prototype.setPosition = function(t, e, n) {
        e += "px", n += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + n + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + n + ")") : (t.style.left = e, t.style.top = n)
    }, r.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, r.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, r.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, r.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var n = 0, r = this.layers.length; r > n; n++) {
            var i = this.layers[n],
                o = this.depths[n],
                a = this.vx * o * (this.invertX ? -1 : 1),
                s = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(i, a, s)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, r.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / o,
                n = (t.gamma || 0) / o,
                r = this.wh > this.ww;
            this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = n), this.ix = e, this.iy = n
        }
    }, r.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            n = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), n = Math.max(n, this.ey), n = Math.min(n, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (n - this.wcy) / this.wry)
    }, t[i] = r
}(window, document);
var pJS = function(t, e) {
    var n = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n,
            w: n.offsetWidth,
            h: n.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var r = this.pJS;
    e && Object.deepExtend(r, e), r.tmp.obj = {
        size_value: r.particles.size.value,
        size_anim_speed: r.particles.size.anim.speed,
        move_speed: r.particles.move.speed,
        line_linked_distance: r.particles.line_linked.distance,
        line_linked_width: r.particles.line_linked.width,
        mode_grab_distance: r.interactivity.modes.grab.distance,
        mode_bubble_distance: r.interactivity.modes.bubble.distance,
        mode_bubble_size: r.interactivity.modes.bubble.size,
        mode_repulse_distance: r.interactivity.modes.repulse.distance
    }, r.fn.retinaInit = function() {
        r.retina_detect && window.devicePixelRatio > 1 ? (r.canvas.pxratio = window.devicePixelRatio, r.tmp.retina = !0) : (r.canvas.pxratio = 1, r.tmp.retina = !1), r.canvas.w = r.canvas.el.offsetWidth * r.canvas.pxratio, r.canvas.h = r.canvas.el.offsetHeight * r.canvas.pxratio, r.particles.size.value = r.tmp.obj.size_value * r.canvas.pxratio, r.particles.size.anim.speed = r.tmp.obj.size_anim_speed * r.canvas.pxratio, r.particles.move.speed = r.tmp.obj.move_speed * r.canvas.pxratio, r.particles.line_linked.distance = r.tmp.obj.line_linked_distance * r.canvas.pxratio, r.interactivity.modes.grab.distance = r.tmp.obj.mode_grab_distance * r.canvas.pxratio, r.interactivity.modes.bubble.distance = r.tmp.obj.mode_bubble_distance * r.canvas.pxratio, r.particles.line_linked.width = r.tmp.obj.line_linked_width * r.canvas.pxratio, r.interactivity.modes.bubble.size = r.tmp.obj.mode_bubble_size * r.canvas.pxratio, r.interactivity.modes.repulse.distance = r.tmp.obj.mode_repulse_distance * r.canvas.pxratio
    }, r.fn.canvasInit = function() {
        r.canvas.ctx = r.canvas.el.getContext("2d")
    }, r.fn.canvasSize = function() {
        r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h, r && r.interactivity.events.resize && window.addEventListener("resize", _.throttle(function() {
            r.canvas.w = r.canvas.el.offsetWidth, r.canvas.h = r.canvas.el.offsetHeight, r.tmp.retina && (r.canvas.w *= r.canvas.pxratio, r.canvas.h *= r.canvas.pxratio), r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h,
                r.particles.move.enable || (r.fn.particlesEmpty(), r.fn.particlesCreate(), r.fn.particlesDraw(), r.fn.vendors.densityAutoParticles()), r.fn.vendors.densityAutoParticles()
        }, 32))
    }, r.fn.canvasPaint = function() {
        r.canvas.ctx.fillRect(0, 0, r.canvas.w, r.canvas.h)
    }, r.fn.canvasClear = function() {
        r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h)
    }, r.fn.particle = function(t, e, n) {
        if (this.radius = (r.particles.size.random ? Math.random() : 1) * r.particles.size.value, r.particles.size.anim.enable && (this.size_status = !1, this.vs = r.particles.size.anim.speed / 100, r.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * r.canvas.w, this.y = n ? n.y : Math.random() * r.canvas.h, this.x > r.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > r.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), r.particles.move.bounce && r.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof t.value)
            if (t.value instanceof Array) {
                var i = t.value[Math.floor(Math.random() * r.particles.color.value.length)];
                this.color.rgb = hexToRgb(i)
            } else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
                r: t.value.r,
                g: t.value.g,
                b: t.value.b
            }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
                h: t.value.h,
                s: t.value.s,
                l: t.value.l
            });
        else "random" == t.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (r.particles.opacity.random ? Math.random() : 1) * r.particles.opacity.value, r.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = r.particles.opacity.anim.speed / 100, r.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (r.particles.move.direction) {
            case "top":
                o = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                o = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                o = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                o = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                o = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                o = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                o = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                o = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                o = {
                    x: 0,
                    y: 0
                }
        }
        r.particles.move.straight ? (this.vx = o.x, this.vy = o.y, r.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var a = r.particles.shape.type;
        if ("object" == typeof a) {
            if (a instanceof Array) {
                var s = a[Math.floor(Math.random() * a.length)];
                this.shape = s
            }
        } else this.shape = a;
        if ("image" == this.shape) {
            var u = r.particles.shape;
            this.img = {
                src: u.image.src,
                ratio: u.image.width / u.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == r.tmp.img_type && void 0 != r.tmp.source_svg && (r.fn.vendors.createSvgImg(this), r.tmp.pushing && (this.img.loaded = !1))
        }
    }, r.fn.particle.prototype.draw = function() {
        function t() {
            r.canvas.ctx.drawImage(a, e.x - n, e.y - n, 2 * n, 2 * n / e.img.ratio)
        }
        var e = this;
        if (void 0 != e.radius_bubble) var n = e.radius_bubble;
        else var n = e.radius;
        if (void 0 != e.opacity_bubble) var i = e.opacity_bubble;
        else var i = e.opacity;
        if (e.color.rgb) var o = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
        else var o = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
        switch (r.canvas.ctx.fillStyle = o, r.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                r.canvas.ctx.arc(e.x, e.y, n, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                r.canvas.ctx.rect(e.x - n, e.y - n, 2 * n, 2 * n);
                break;
            case "triangle":
                r.fn.vendors.drawShape(r.canvas.ctx, e.x - n, e.y + n / 1.66, 2 * n, 3, 2);
                break;
            case "polygon":
                r.fn.vendors.drawShape(r.canvas.ctx, e.x - n / (r.particles.shape.polygon.nb_sides / 3.5), e.y - n / .76, 2.66 * n / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                r.fn.vendors.drawShape(r.canvas.ctx, e.x - 2 * n / (r.particles.shape.polygon.nb_sides / 4), e.y - n / 1.52, 2 * n * 2.66 / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == r.tmp.img_type) var a = e.img.obj;
                else var a = r.tmp.img_obj;
                a && t()
        }
        r.canvas.ctx.closePath(), r.particles.shape.stroke.width > 0 && (r.canvas.ctx.strokeStyle = r.particles.shape.stroke.color, r.canvas.ctx.lineWidth = r.particles.shape.stroke.width, r.canvas.ctx.stroke()), r.canvas.ctx.fill()
    }, r.fn.particlesCreate = function() {
        for (var t = 0; t < r.particles.number.value; t++) r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value))
    }, r.fn.particlesUpdate = function() {
        for (var t = 0; t < r.particles.array.length; t++) {
            var e = r.particles.array[t];
            if (r.particles.move.enable) {
                var n = r.particles.move.speed / 2;
                e.x += e.vx * n, e.y += e.vy * n
            }
            if (r.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= r.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= r.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), r.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= r.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= r.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == r.particles.move.out_mode) var i = {
                x_left: e.radius,
                x_right: r.canvas.w,
                y_top: e.radius,
                y_bottom: r.canvas.h
            };
            else var i = {
                x_left: -e.radius,
                x_right: r.canvas.w + e.radius,
                y_top: -e.radius,
                y_bottom: r.canvas.h + e.radius
            };
            switch (e.x - e.radius > r.canvas.w ? (e.x = i.x_left, e.y = Math.random() * r.canvas.h) : e.x + e.radius < 0 && (e.x = i.x_right, e.y = Math.random() * r.canvas.h), e.y - e.radius > r.canvas.h ? (e.y = i.y_top, e.x = Math.random() * r.canvas.w) : e.y + e.radius < 0 && (e.y = i.y_bottom, e.x = Math.random() * r.canvas.w), r.particles.move.out_mode) {
                case "bounce":
                    e.x + e.radius > r.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > r.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
            }
            if (isInArray("grab", r.interactivity.events.onhover.mode) && r.fn.modes.grabParticle(e), (isInArray("bubble", r.interactivity.events.onhover.mode) || isInArray("bubble", r.interactivity.events.onclick.mode)) && r.fn.modes.bubbleParticle(e), (isInArray("repulse", r.interactivity.events.onhover.mode) || isInArray("repulse", r.interactivity.events.onclick.mode)) && r.fn.modes.repulseParticle(e), r.particles.line_linked.enable || r.particles.move.attract.enable)
                for (var o = t + 1; o < r.particles.array.length; o++) {
                    var a = r.particles.array[o];
                    r.particles.line_linked.enable && r.fn.interact.linkParticles(e, a), r.particles.move.attract.enable && r.fn.interact.attractParticles(e, a), r.particles.move.bounce && r.fn.interact.bounceParticles(e, a)
                }
        }
    }, r.fn.particlesDraw = function() {
        r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h), r.fn.particlesUpdate();
        for (var t = 0; t < r.particles.array.length; t++) {
            var e = r.particles.array[t];
            e.draw()
        }
    }, r.fn.particlesEmpty = function() {
        r.particles.array = []
    }, r.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(r.fn.checkAnimFrame), cancelRequestAnimFrame(r.fn.drawAnimFrame), r.tmp.source_svg = void 0, r.tmp.img_obj = void 0, r.tmp.count_svg = 0, r.fn.particlesEmpty(), r.fn.canvasClear(), r.fn.vendors.start()
    }, r.fn.interact.linkParticles = function(t, e) {
        var n = t.x - e.x,
            i = t.y - e.y,
            o = Math.sqrt(n * n + i * i);
        if (o <= r.particles.line_linked.distance) {
            var a = r.particles.line_linked.opacity - o / (1 / r.particles.line_linked.opacity) / r.particles.line_linked.distance;
            if (a > 0) {
                var s = r.particles.line_linked.color_rgb_line;
                r.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + a + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(t.x, t.y), r.canvas.ctx.lineTo(e.x, e.y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath()
            }
        }
    }, r.fn.interact.attractParticles = function(t, e) {
        var n = t.x - e.x,
            i = t.y - e.y,
            o = Math.sqrt(n * n + i * i);
        if (o <= r.particles.line_linked.distance) {
            var a = n / (1e3 * r.particles.move.attract.rotateX),
                s = i / (1e3 * r.particles.move.attract.rotateY);
            t.vx -= a, t.vy -= s, e.vx += a, e.vy += s
        }
    }, r.fn.interact.bounceParticles = function(t, e) {
        var n = t.x - e.x,
            r = t.y - e.y,
            i = Math.sqrt(n * n + r * r),
            o = t.radius + e.radius;
        o >= i && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, r.fn.modes.pushParticles = function(t, e) {
        r.tmp.pushing = !0;
        for (var n = 0; t > n; n++) r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value, {
            x: e ? e.pos_x : Math.random() * r.canvas.w,
            y: e ? e.pos_y : Math.random() * r.canvas.h
        })), n == t - 1 && (r.particles.move.enable || r.fn.particlesDraw(), r.tmp.pushing = !1)
    }, r.fn.modes.removeParticles = function(t) {
        r.particles.array.splice(0, t), r.particles.move.enable || r.fn.particlesDraw()
    }, r.fn.modes.bubbleParticle = function(t) {
        function e() {
            t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }

        function n(e, n, i, o, s) {
            if (e != n)
                if (r.tmp.bubble_duration_end) {
                    if (void 0 != i) {
                        var u = o - f * (o - e) / r.interactivity.modes.bubble.duration,
                            l = e - u;
                        p = e + l, "size" == s && (t.radius_bubble = p), "opacity" == s && (t.opacity_bubble = p)
                    }
                } else if (a <= r.interactivity.modes.bubble.distance) {
                if (void 0 != i) var c = i;
                else var c = o;
                if (c != e) {
                    var p = o - f * (o - e) / r.interactivity.modes.bubble.duration;
                    "size" == s && (t.radius_bubble = p), "opacity" == s && (t.opacity_bubble = p)
                }
            } else "size" == s && (t.radius_bubble = void 0), "opacity" == s && (t.opacity_bubble = void 0)
        }
        if (r.interactivity.events.onhover.enable && isInArray("bubble", r.interactivity.events.onhover.mode)) {
            var i = t.x - r.interactivity.mouse.pos_x,
                o = t.y - r.interactivity.mouse.pos_y,
                a = Math.sqrt(i * i + o * o),
                s = 1 - a / r.interactivity.modes.bubble.distance;
            if (a <= r.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == r.interactivity.status) {
                    if (r.interactivity.modes.bubble.size != r.particles.size.value)
                        if (r.interactivity.modes.bubble.size > r.particles.size.value) {
                            var u = t.radius + r.interactivity.modes.bubble.size * s;
                            u >= 0 && (t.radius_bubble = u)
                        } else {
                            var l = t.radius - r.interactivity.modes.bubble.size,
                                u = t.radius - l * s;
                            u > 0 ? t.radius_bubble = u : t.radius_bubble = 0
                        }
                    if (r.interactivity.modes.bubble.opacity != r.particles.opacity.value)
                        if (r.interactivity.modes.bubble.opacity > r.particles.opacity.value) {
                            var c = r.interactivity.modes.bubble.opacity * s;
                            c > t.opacity && c <= r.interactivity.modes.bubble.opacity && (t.opacity_bubble = c)
                        } else {
                            var c = t.opacity - (r.particles.opacity.value - r.interactivity.modes.bubble.opacity) * s;
                            c < t.opacity && c >= r.interactivity.modes.bubble.opacity && (t.opacity_bubble = c)
                        }
                }
            } else e();
            "mouseleave" == r.interactivity.status && e()
        } else if (r.interactivity.events.onclick.enable && isInArray("bubble", r.interactivity.events.onclick.mode)) {
            if (r.tmp.bubble_clicking) {
                var i = t.x - r.interactivity.mouse.click_pos_x,
                    o = t.y - r.interactivity.mouse.click_pos_y,
                    a = Math.sqrt(i * i + o * o),
                    f = ((new Date).getTime() - r.interactivity.mouse.click_time) / 1e3;
                f > r.interactivity.modes.bubble.duration && (r.tmp.bubble_duration_end = !0), f > 2 * r.interactivity.modes.bubble.duration && (r.tmp.bubble_clicking = !1, r.tmp.bubble_duration_end = !1)
            }
            r.tmp.bubble_clicking && (n(r.interactivity.modes.bubble.size, r.particles.size.value, t.radius_bubble, t.radius, "size"), n(r.interactivity.modes.bubble.opacity, r.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }, r.fn.modes.repulseParticle = function(t) {
        function e() {
            var e = Math.atan2(p, f);
            if (t.vx = d * Math.cos(e), t.vy = d * Math.sin(e), "bounce" == r.particles.move.out_mode) {
                var n = {
                    x: t.x + t.vx,
                    y: t.y + t.vy
                };
                n.x + t.radius > r.canvas.w ? t.vx = -t.vx : n.x - t.radius < 0 && (t.vx = -t.vx), n.y + t.radius > r.canvas.h ? t.vy = -t.vy : n.y - t.radius < 0 && (t.vy = -t.vy)
            }
        }
        if (r.interactivity.events.onhover.enable && isInArray("repulse", r.interactivity.events.onhover.mode) && "mousemove" == r.interactivity.status) {
            var n = t.x - r.interactivity.mouse.pos_x,
                i = t.y - r.interactivity.mouse.pos_y,
                o = Math.sqrt(n * n + i * i),
                a = {
                    x: n / o,
                    y: i / o
                },
                s = r.interactivity.modes.repulse.distance,
                u = 100,
                l = clamp(1 / s * (-1 * Math.pow(o / s, 2) + 1) * s * u, 0, 50),
                c = {
                    x: t.x + a.x * l,
                    y: t.y + a.y * l
                };
            "bounce" == r.particles.move.out_mode ? (c.x - t.radius > 0 && c.x + t.radius < r.canvas.w && (t.x = c.x), c.y - t.radius > 0 && c.y + t.radius < r.canvas.h && (t.y = c.y)) : (t.x = c.x, t.y = c.y)
        } else if (r.interactivity.events.onclick.enable && isInArray("repulse", r.interactivity.events.onclick.mode))
            if (r.tmp.repulse_finish || (r.tmp.repulse_count++, r.tmp.repulse_count == r.particles.array.length && (r.tmp.repulse_finish = !0)), r.tmp.repulse_clicking) {
                var s = Math.pow(r.interactivity.modes.repulse.distance / 6, 3),
                    f = r.interactivity.mouse.click_pos_x - t.x,
                    p = r.interactivity.mouse.click_pos_y - t.y,
                    h = f * f + p * p,
                    d = -s / h * 1;
                s >= h && e()
            } else 0 == r.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, r.fn.modes.grabParticle = function(t) {
        if (r.interactivity.events.onhover.enable && "mousemove" == r.interactivity.status) {
            var e = t.x - r.interactivity.mouse.pos_x,
                n = t.y - r.interactivity.mouse.pos_y,
                i = Math.sqrt(e * e + n * n);
            if (i <= r.interactivity.modes.grab.distance) {
                var o = r.interactivity.modes.grab.line_linked.opacity - i / (1 / r.interactivity.modes.grab.line_linked.opacity) / r.interactivity.modes.grab.distance;
                if (o > 0) {
                    var a = r.particles.line_linked.color_rgb_line;
                    r.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(t.x, t.y), r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x, r.interactivity.mouse.pos_y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath()
                }
            }
        }
    }, r.fn.vendors.eventsListeners = function() {
        "window" == r.interactivity.detect_on ? r.interactivity.el = window : r.interactivity.el = r.canvas.el, (r.interactivity.events.onhover.enable || r.interactivity.events.onclick.enable) && (r.interactivity.el.addEventListener("mousemove", function(t) {
            if (r.interactivity.el == window) var e = t.clientX,
                n = t.clientY;
            else var e = t.offsetX || t.clientX,
                n = t.offsetY || t.clientY;
            r.interactivity.mouse.pos_x = e, r.interactivity.mouse.pos_y = n, r.tmp.retina && (r.interactivity.mouse.pos_x *= r.canvas.pxratio, r.interactivity.mouse.pos_y *= r.canvas.pxratio), r.interactivity.status = "mousemove"
        }), r.interactivity.el.addEventListener("mouseleave", function(t) {
            r.interactivity.mouse.pos_x = null, r.interactivity.mouse.pos_y = null, r.interactivity.status = "mouseleave"
        })), r.interactivity.events.onclick.enable && r.interactivity.el.addEventListener("click", function() {
            if (r.interactivity.mouse.click_pos_x = r.interactivity.mouse.pos_x, r.interactivity.mouse.click_pos_y = r.interactivity.mouse.pos_y, r.interactivity.mouse.click_time = (new Date).getTime(), r.interactivity.events.onclick.enable) switch (r.interactivity.events.onclick.mode) {
                case "push":
                    r.particles.move.enable ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : 1 == r.interactivity.modes.push.particles_nb ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : r.interactivity.modes.push.particles_nb > 1 && r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    r.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    r.tmp.repulse_clicking = !0, r.tmp.repulse_count = 0, r.tmp.repulse_finish = !1, setTimeout(function() {
                        r.tmp.repulse_clicking = !1
                    }, 1e3 * r.interactivity.modes.repulse.duration)
            }
        })
    }, r.fn.vendors.densityAutoParticles = function() {
        if (r.particles.number.density.enable) {
            var t = r.canvas.el.width * r.canvas.el.height / 1e3;
            r.tmp.retina && (t /= 2 * r.canvas.pxratio);
            var e = t * r.particles.number.value / r.particles.number.density.value_area,
                n = r.particles.array.length - e;
            0 > n ? r.fn.modes.pushParticles(Math.abs(n)) : r.fn.modes.removeParticles(n)
        }
    }, r.fn.vendors.checkOverlap = function(t, e) {
        for (var n = 0; n < r.particles.array.length; n++) {
            var i = r.particles.array[n],
                o = t.x - i.x,
                a = t.y - i.y,
                s = Math.sqrt(o * o + a * a);
            s <= t.radius + i.radius && (t.x = e ? e.x : Math.random() * r.canvas.w, t.y = e ? e.y : Math.random() * r.canvas.h, r.fn.vendors.checkOverlap(t))
        }
    }, r.fn.vendors.createSvgImg = function(t) {
        var e = r.tmp.source_svg,
            n = /#([0-9A-F]{3,6})/gi,
            i = e.replace(n, function(e, n, r, i) {
                if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
                else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
                return o
            }),
            o = new Blob([i], {
                type: "image/svg+xml;charset=utf-8"
            }),
            a = window.URL || window.webkitURL || window,
            s = a.createObjectURL(o),
            u = new Image;
        u.addEventListener("load", function() {
            t.img.obj = u, t.img.loaded = !0, a.revokeObjectURL(s), r.tmp.count_svg++
        }), u.src = s
    }, r.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(r.fn.drawAnimFrame), n.remove(), pJSDom = null
    }, r.fn.vendors.drawShape = function(t, e, n, r, i, o) {
        var a = i * o,
            s = i / o,
            u = 180 * (s - 2) / s,
            l = Math.PI - Math.PI * u / 180;
        t.save(), t.beginPath(), t.translate(e, n), t.moveTo(0, 0);
        for (var c = 0; a > c; c++) t.lineTo(r, 0), t.translate(r, 0), t.rotate(l);
        t.fill(), t.restore()
    }, r.fn.vendors.exportImg = function() {
        window.open(r.canvas.el.toDataURL("image/png"), "_blank")
    }, r.fn.vendors.loadImg = function(t) {
        if (r.tmp.img_error = void 0, "" != r.particles.shape.image.src)
            if ("svg" == t) {
                var e = new XMLHttpRequest;
                e.open("GET", r.particles.shape.image.src), e.onreadystatechange = function(t) {
                    4 == e.readyState && (200 == e.status ? (r.tmp.source_svg = t.currentTarget.response, r.fn.vendors.checkBeforeDraw()) : r.tmp.img_error = !0)
                }, e.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function() {
                    r.tmp.img_obj = n, r.fn.vendors.checkBeforeDraw()
                }), n.src = r.particles.shape.image.src
            }
        else r.tmp.img_error = !0
    }, r.fn.vendors.draw = function() {
        "image" == r.particles.shape.type ? "svg" == r.tmp.img_type ? r.tmp.count_svg >= r.particles.number.value ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : void 0 != r.tmp.img_obj ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame))
    }, r.fn.vendors.checkBeforeDraw = function() {
        "image" == r.particles.shape.type ? "svg" == r.tmp.img_type && void 0 == r.tmp.source_svg ? r.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(r.tmp.checkAnimFrame), r.tmp.img_error || (r.fn.vendors.init(), r.fn.vendors.draw())) : (r.fn.vendors.init(), r.fn.vendors.draw())
    }, r.fn.vendors.init = function() {
        r.fn.retinaInit(), r.fn.canvasInit(), r.fn.canvasSize(), r.fn.canvasPaint(), r.fn.particlesCreate(), r.fn.vendors.densityAutoParticles(), r.particles.line_linked.color_rgb_line = hexToRgb(r.particles.line_linked.color)
    }, r.fn.vendors.start = function() {
        isInArray("image", r.particles.shape.type) ? (r.tmp.img_type = r.particles.shape.image.src.substr(r.particles.shape.image.src.length - 3), r.fn.vendors.loadImg(r.tmp.img_type)) : r.fn.vendors.checkBeforeDraw()
    }, r.fn.vendors.eventsListeners(), r.fn.vendors.start()
};
Object.deepExtend = function(t, e) {
        for (var n in e) e[n] && e[n].constructor && e[n].constructor === Object ? (t[n] = t[n] || {}, arguments.callee(t[n], e[n])) : t[n] = e[n];
        return t
    }, window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), window.cancelRequestAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
    }(), window.pJSDom = [], window.particlesJS = function(t, e) {
        "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
        var n = document.getElementById(t),
            r = "particles-js-canvas-el",
            i = n.getElementsByClassName(r);
        if (i.length)
            for (; i.length > 0;) n.removeChild(i[0]);
        var o = document.createElement("canvas");
        o.className = r, o.style.width = "100%", o.style.height = "100%";
        var a = document.getElementById(t).appendChild(o);
        null != a && pJSDom.push(new pJS(t, e))
    }, window.particlesJS.load = function(t, e, n) {
        var r = new XMLHttpRequest;
        r.open("GET", e), r.onreadystatechange = function(e) {
            if (4 == r.readyState && 200 == r.status) {
                var i = JSON.parse(e.currentTarget.response);
                window.particlesJS(t, i), n && n()
            }
        }, r.send()
    },
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
            e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function n(n, o, s) {
            function u(t, e, r) {
                var i, o = "$()." + n + '("' + e + '")';
                return t.each(function(t, u) {
                    var l = s.data(u, n);
                    if (!l) return void a(n + " not initialized. Cannot call methods, i.e. " + o);
                    var c = l[e];
                    if (!c || "_" == e.charAt(0)) return void a(o + " is not a valid method");
                    var f = c.apply(l, r);
                    i = void 0 === i ? f : i
                }), void 0 !== i ? i : t
            }

            function l(t, e) {
                t.each(function(t, r) {
                    var i = s.data(r, n);
                    i ? (i.option(e), i._init()) : (i = new o(r, e), s.data(r, n, i))
                })
            }
            s = s || e || t.jQuery, s && (o.prototype.option || (o.prototype.option = function(t) {
                s.isPlainObject(t) && (this.options = s.extend(!0, this.options, t))
            }), s.fn[n] = function(t) {
                if ("string" == typeof t) {
                    var e = i.call(arguments, 1);
                    return u(this, t, e)
                }
                return l(this, t), this
            }, r(s))
        }

        function r(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var i = Array.prototype.slice,
            o = t.console,
            a = "undefined" == typeof o ? function() {} : function(t) {
                o.error(t)
            };
        return r(e || t.jQuery), n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    r = n[t] = n[t] || [];
                return -1 == r.indexOf(e) && r.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    r = n[t] = n[t] || {};
                return r[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var r = n.indexOf(e);
                return -1 != r && n.splice(r, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var r = 0,
                    i = n[r];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; i;) {
                    var a = o && o[i];
                    a && (this.off(t, i), delete o[i]), i.apply(this, e), r += a ? 0 : 1, i = n[r]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                n = -1 == t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function e() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; l > e; e++) {
                var n = u[e];
                t[n] = 0
            }
            return t
        }

        function r(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function i() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var i = r(e);
                o.isBoxSizeOuter = a = 200 == t(i.width), n.removeChild(e)
            }
        }

        function o(e) {
            if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = r(e);
                if ("none" == o.display) return n();
                var s = {};
                s.width = e.offsetWidth, s.height = e.offsetHeight;
                for (var c = s.isBorderBox = "border-box" == o.boxSizing, f = 0; l > f; f++) {
                    var p = u[f],
                        h = o[p],
                        d = parseFloat(h);
                    s[p] = isNaN(d) ? 0 : d
                }
                var v = s.paddingLeft + s.paddingRight,
                    m = s.paddingTop + s.paddingBottom,
                    y = s.marginLeft + s.marginRight,
                    g = s.marginTop + s.marginBottom,
                    b = s.borderLeftWidth + s.borderRightWidth,
                    x = s.borderTopWidth + s.borderBottomWidth,
                    w = c && a,
                    _ = t(o.width);
                _ !== !1 && (s.width = _ + (w ? 0 : v + b));
                var T = t(o.height);
                return T !== !1 && (s.height = T + (w ? 0 : m + x)), s.innerWidth = s.width - (v + b), s.innerHeight = s.height - (m + x), s.outerWidth = s.width + y, s.outerHeight = s.height + g, s
            }
        }
        var a, s = "undefined" == typeof console ? e : function(t) {},
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            l = u.length,
            c = !1;
        return o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var n = {};
        n.extend = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        }, n.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, r) {
            t = n.makeArray(t);
            var i = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!r) return void i.push(t);
                    e(t, r) && i.push(t);
                    for (var n = t.querySelectorAll(r), o = 0; o < n.length; o++) i.push(n[o])
                }
            }), i
        }, n.debounceMethod = function(t, e, n) {
            var r = t.prototype[e],
                i = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[i];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[i] = setTimeout(function() {
                    r.apply(o, e), delete o[i]
                }, n || 100)
            }
        }, n.docReady = function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function(e, i) {
            n.docReady(function() {
                var o = n.toDashed(i),
                    a = "data-" + o,
                    s = document.querySelectorAll("[" + a + "]"),
                    u = document.querySelectorAll(".js-" + o),
                    l = n.makeArray(s).concat(n.makeArray(u)),
                    c = a + "-options",
                    f = t.jQuery;
                l.forEach(function(t) {
                    var n, o = t.getAttribute(a) || t.getAttribute(c);
                    try {
                        n = o && JSON.parse(o)
                    } catch (s) {
                        return void(r && r.error("Error parsing " + a + " on " + t.className + ": " + s))
                    }
                    var u = new e(t, n);
                    f && f.data(t, i, u)
                })
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function n(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function i(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var o = document.documentElement.style,
            a = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[a],
            l = {
                transform: s,
                transition: a,
                transitionDuration: a + "Duration",
                transitionProperty: a + "Property",
                transitionDelay: a + "Delay"
            },
            c = r.prototype = Object.create(t.prototype);
        c.constructor = r, c._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function() {
            this.size = e(this.element)
        }, c.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var r = l[n] || n;
                e[r] = t[n]
            }
        }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                r = t[e ? "left" : "right"],
                i = t[n ? "top" : "bottom"],
                o = this.layout.size,
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.width : parseInt(r, 10),
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.height : parseInt(i, 10);
            a = isNaN(a) ? 0 : a, s = isNaN(s) ? 0 : s, a -= e ? o.paddingLeft : o.paddingRight, s -= n ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = s
        }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                r = this.layout._getOption("originTop"),
                i = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                a = n ? "right" : "left",
                s = this.position.x + t[i];
            e[o] = this.getXValue(s), e[a] = "";
            var u = r ? "paddingTop" : "paddingBottom",
                l = r ? "top" : "bottom",
                c = r ? "bottom" : "top",
                f = this.position.y + t[u];
            e[l] = this.getYValue(f), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, c.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, c._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                r = this.position.y,
                i = parseInt(t, 10),
                o = parseInt(e, 10),
                a = i === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
            var s = t - n,
                u = e - r,
                l = {};
            l.transform = this.getTranslate(s, u), this.transition({
                to: l,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, c.getTranslate = function(t, e) {
            var n = this.layout._getOption("originLeft"),
                r = this.layout._getOption("originTop");
            return t = n ? t : -t, e = r ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, c._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var r = this.element.offsetHeight;
                r = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var f = "opacity," + i(s);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: f,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(u, this, !1)
            }
        }, c.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, c.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var p = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    r = p[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[r], n(e.ingProperties) && this.disableTransition(), r in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[r]), r in e.onEnd) {
                    var i = e.onEnd[r];
                    i.call(this), delete e.onEnd[r]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
        }, c._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return c.removeTransitionStyles = function() {
            this.css(h)
        }, c.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, c.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, c.remove = function() {
            return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, c.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, c.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, c.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, r, i, o) {
            return e(t, n, r, i, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, n, r, i) {
        "use strict";

        function o(t, e) {
            var n = r.getQueryElement(t);
            if (!n) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var i = ++f;
            this.element.outlayerGUID = i, p[i] = this, this._create();
            var o = this._getOption("initLayout");
            o && this.layout()
        }

        function a(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function s(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                n = e && e[1],
                r = e && e[2];
            if (!n.length) return 0;
            n = parseFloat(n);
            var i = d[r] || 1;
            return n * i
        }
        var u = t.console,
            l = t.jQuery,
            c = function() {},
            f = 0,
            p = {};
        o.namespace = "outlayer", o.Item = i, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var h = o.prototype;
        r.extend(h, e.prototype), h.option = function(t) {
            r.extend(this.options, t)
        }, h._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, o.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, h._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, h.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, h._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, r = [], i = 0; i < e.length; i++) {
                var o = e[i],
                    a = new n(o, this);
                r.push(a)
            }
            return r
        }, h._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, h.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, h.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function() {
            this.getSize()
        }, h.getSize = function() {
            this.size = n(this.element)
        }, h._getMeasurement = function(t, e) {
            var r, i = this.options[t];
            i ? ("string" == typeof i ? r = this.element.querySelector(i) : i instanceof HTMLElement && (r = i), this[t] = r ? n(r)[e] : i) : this[t] = 0
        }, h.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, h._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, h._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var r = this._getItemLayoutPosition(t);
                    r.item = t, r.isInstant = e || t.isLayoutInstant, n.push(r)
                }, this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, h._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, h.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = s(t), this.stagger)
        }, h._positionItem = function(t, e, n, r, i) {
            r ? t.goTo(e, n) : (t.stagger(i * this.stagger), t.moveTo(e, n))
        }, h._postLayout = function() {
            this.resizeContainer()
        }, h.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, h._getContainerSize = c, h._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function(t, e) {
            function n() {
                i.dispatchEvent(t + "Complete", null, [e])
            }

            function r() {
                a++, a == o && n()
            }
            var i = this,
                o = e.length;
            if (!e || !o) return void n();
            var a = 0;
            e.forEach(function(e) {
                e.once(t, r)
            })
        }, h.dispatchEvent = function(t, e, n) {
            var r = e ? [e].concat(n) : n;
            if (this.emitEvent(t, r), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var i = l.Event(e);
                    i.type = t, this.$element.trigger(i, n)
                } else this.$element.trigger(t, n)
        }, h.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, h.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                r.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, h._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, h._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, h._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, h._manageStamp = c, h._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                r = this._boundingRect,
                i = n(t),
                o = {
                    left: e.left - r.left - i.marginLeft,
                    top: e.top - r.top - i.marginTop,
                    right: r.right - e.right - i.marginRight,
                    bottom: r.bottom - e.bottom - i.marginBottom
                };
            return o
        }, h.handleEvent = r.handleEvent, h.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, h.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, h.onresize = function() {
            this.resize()
        }, r.debounceMethod(o, "onresize", 100), h.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, h.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, h.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, h.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.reveal()
                })
            }
        }, h.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, n) {
                    t.stagger(n * e), t.hide()
                })
            }
        }, h.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, h.getItems = function(t) {
            t = r.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, h.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), r.removeFrom(this.items, t)
            }, this)
        }, h.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete p[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, o.create = function(t, e) {
            var n = a(o);
            return n.defaults = r.extend({}, o.defaults), r.extend(n.defaults, e), n.compatOptions = r.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = a(i), r.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        };
        var d = {
            ms: 1,
            s: 1e3
        };
        return o.Item = i, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var n = t.create("masonry");
        return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var r = this.columnWidth += this.gutter,
                i = this.containerWidth + this.gutter,
                o = i / r,
                a = r - i % r,
                s = a && 1 > a ? "round" : "floor";
            o = Math[s](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                n = t ? this.element.parentNode : this.element,
                r = e(n);
            this.containerWidth = r && r.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var i = this._getColGroup(r), o = Math.min.apply(Math, i), a = i.indexOf(o), s = {
                    x: this.columnWidth * a,
                    y: o
                }, u = o + t.size.outerHeight, l = this.cols + 1 - i.length, c = 0; l > c; c++) this.colYs[a + c] = u;
            return s
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, r = 0; n > r; r++) {
                var i = this.colYs.slice(r, r + t);
                e[r] = Math.max.apply(Math, i)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var n = e(t),
                r = this._getElementOffset(t),
                i = this._getOption("originLeft"),
                o = i ? r.left : r.right,
                a = o + n.outerWidth,
                s = Math.floor(o / this.columnWidth);
            s = Math.max(0, s);
            var u = Math.floor(a / this.columnWidth);
            u -= a % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
            for (var l = this._getOption("originTop"), c = (l ? r.top : r.bottom) + n.outerHeight, f = s; u >= f; f++) this.colYs[f] = Math.max(c, this.colYs[f])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    });

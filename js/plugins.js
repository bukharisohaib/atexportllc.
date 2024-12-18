/*
 * Modernizr 2.8.3
 */
window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }

    function a(e, t) {
        return typeof e === t
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var i = t[e[o]];
            if (i !== n) return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
        }
        return !1
    }

    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + k.join(r + " ") + r).split(" ");
        return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
    }

    function l() {
        p.input = function(n) {
            for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
            return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(e) {
            for (var r, o, a, i = 0, c = e.length; c > i; i++) E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
            return P
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, f, m = "2.8.3",
        p = {},
        h = !0,
        g = t.documentElement,
        v = "modernizr",
        y = t.createElement(v),
        b = y.style,
        E = t.createElement("input"),
        x = ":)",
        w = {}.toString,
        S = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms",
        k = C.split(" "),
        T = C.toLowerCase().split(" "),
        N = {
            svg: "http://www.w3.org/2000/svg"
        },
        M = {},
        P = {},
        j = {},
        $ = [],
        D = $.slice,
        F = function(e, n, r, o) {
            var a, i, c, s, u = t.createElement("div"),
                l = t.body,
                d = l || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
            return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i
        },
        z = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var r;
            return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        },
        A = function() {
            function e(e, o) {
                o = o || t.createElement(r[e] || "div"), e = "on" + e;
                var i = e in o;
                return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        L = {}.hasOwnProperty;
    f = a(L, "undefined") || a(L.call, "undefined") ? function(e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return L.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = D.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var o = function() {};
                    o.prototype = t.prototype;
                    var a = new o,
                        i = t.apply(a, n.concat(D.call(arguments)));
                    return Object(i) === i ? i : a
                }
                return t.apply(e, n.concat(D.call(arguments)))
            };
        return r
    }), M.flexbox = function() {
        return u("flexWrap")
    }, M.flexboxlegacy = function() {
        return u("boxDirection")
    }, M.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, M.canvastext = function() {
        return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, M.webgl = function() {
        return !!e.WebGLRenderingContext
    }, M.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, M.geolocation = function() {
        return "geolocation" in navigator
    }, M.postmessage = function() {
        return !!e.postMessage
    }, M.websqldatabase = function() {
        return !!e.openDatabase
    }, M.indexedDB = function() {
        return !!u("indexedDB", e)
    }, M.hashchange = function() {
        return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, M.history = function() {
        return !(!e.history || !history.pushState)
    }, M.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, M.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, M.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
    }, M.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
    }, M.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, M.backgroundsize = function() {
        return u("backgroundSize")
    }, M.borderimage = function() {
        return u("borderImage")
    }, M.borderradius = function() {
        return u("borderRadius")
    }, M.boxshadow = function() {
        return u("boxShadow")
    }, M.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, M.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, M.cssanimations = function() {
        return u("animationName")
    }, M.csscolumns = function() {
        return u("columnCount")
    }, M.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient")
    }, M.cssreflections = function() {
        return u("boxReflect")
    }, M.csstransforms = function() {
        return !!u("transform")
    }, M.csstransforms3d = function() {
        var e = !!u("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, M.csstransitions = function() {
        return u("transition")
    }, M.fontface = function() {
        var e;
        return F('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var o = t.getElementById("smodernizr"),
                a = o.sheet || o.styleSheet,
                i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
            e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
        }), e
    }, M.generatedcontent = function() {
        var e;
        return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, M.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, M.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, M.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, M.webworkers = function() {
        return !!e.Worker
    }, M.applicationcache = function() {
        return !!e.applicationCache
    }, M.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }, M.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, M.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }, M.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var H in M) f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));
    return p.input || l(), p.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var r in e) f(e, r) && p.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), p[e] !== n) return p;
                t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
            }
            return p
        }, r(""), y = E = null,
        function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = y.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function o(e) {
                var t = v[e[h]];
                return t || (t = {}, g++, e[h] = g, v[g] = t), t
            }

            function a(e, n, r) {
                if (n || (n = t), l) return n.createElement(e);
                r || (r = o(n));
                var a;
                return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
            }

            function i(e, n) {
                if (e || (e = t), l) return e.createDocumentFragment();
                n = n || o(e);
                for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++) a.createElement(c[i]);
                return a
            }

            function c(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return y.shivMethods ? a(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
            }

            function s(e) {
                e || (e = t);
                var r = o(e);
                return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e
            }
            var u, l, d = "3.7.0",
                f = e.html5 || {},
                m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h = "_html5shiv",
                g = 0,
                v = {};
            ! function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    u = !0, l = !0
                }
            }();
            var y = {
                elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: d,
                shivCSS: f.shivCSS !== !1,
                supportsUnknownElements: l,
                shivMethods: f.shivMethods !== !1,
                type: "default",
                shivDocument: s,
                createElement: a,
                createDocumentFragment: i
            };
            e.html5 = y, s(t)
        }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function(e) {
            return c([e])
        }, p.testAllProps = u, p.testStyles = F, p.prefixed = function(e, t, n) {
            return t ? u(e, t, n) : u(e, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p
}(this, this.document);
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e, t, n) {
    typeof define == "function" && define.amd ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
})(this, document, function(e, t, n, r) {
    (function(e, t, n, r) {
        function T(e) {
            while (e && typeof e.originalEvent != "undefined") e = e.originalEvent;
            return e
        }

        function N(t, n) {
            var i = t.type,
                s, o, a, l, c, h, p, d, v;
            t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f);
            if (s)
                for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
            i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1);
            if (i.search(/^touch/) !== -1) {
                a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r;
                if (h)
                    for (d = 0, v = u.length; d < v; d++) l = u[d], t[l] = h[l]
            }
            return t
        }

        function C(t) {
            var n = {},
                r, s;
            while (t) {
                r = e.data(t, i);
                for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return n
        }

        function k(t, n) {
            var r;
            while (t) {
                r = e.data(t, i);
                if (r && (!n || r[n])) return t;
                t = t.parentNode
            }
            return null
        }

        function L() {
            g = !1
        }

        function A() {
            g = !0
        }

        function O() {
            E = 0, v.length = 0, m = !1, A()
        }

        function M() {
            L()
        }

        function _() {
            D(), c = setTimeout(function() {
                c = 0, O()
            }, e.vmouse.resetTimerDuration)
        }

        function D() {
            c && (clearTimeout(c), c = 0)
        }

        function P(t, n, r) {
            var i;
            if (r && r[t] || !r && k(n.target, t)) i = N(n, t), e(n.target).trigger(i);
            return i
        }

        function H(t) {
            var n = e.data(t.target, s),
                r;
            !m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
        }

        function B(t) {
            var n = T(t).touches,
                r, i, o;
            n && n.length === 1 && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
        }

        function j(e) {
            if (g) return;
            d || P("vmousecancel", e, C(e.target)), d = !0, _()
        }

        function F(t) {
            if (g) return;
            var n = T(t).touches[0],
                r = d,
                i = e.vmouse.moveDistanceThreshold,
                s = C(t.target);
            d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
        }

        function I(e) {
            if (g) return;
            A();
            var t = C(e.target),
                n, r;
            P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
                touchID: E,
                x: r.clientX,
                y: r.clientY
            }), m = !0)), P("vmouseout", e, t), d = !1, _()
        }

        function q(t) {
            var n = e.data(t, i),
                r;
            if (n)
                for (r in n)
                    if (n[r]) return !0;
            return !1
        }

        function R() {}

        function U(t) {
            var n = t.substr(1);
            return {
                setup: function() {
                    q(this) || e.data(this, i, {});
                    var r = e.data(this, i);
                    r[t] = !0, l[t] = (l[t] || 0) + 1, l[t] === 1 && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
                },
                teardown: function() {
                    --l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
                    var r = e(this),
                        s = e.data(this, i);
                    s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
                }
            }
        }
        var i = "virtualMouseBindings",
            s = "virtualTouchID",
            o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            u = "clientX clientY pageX pageY screenX screenY".split(" "),
            a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            f = e.event.props.concat(a),
            l = {},
            c = 0,
            h = 0,
            p = 0,
            d = !1,
            v = [],
            m = !1,
            g = !1,
            y = "addEventListener" in n,
            b = e(n),
            w = 1,
            E = 0,
            S, x;
        e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
        y && n.addEventListener("click", function(t) {
            var n = v.length,
                r = t.target,
                i, o, u, a, f, l;
            if (n) {
                i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r;
                while (u) {
                    for (a = 0; a < n; a++) {
                        f = v[a], l = 0;
                        if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) {
                            t.preventDefault(), t.stopPropagation();
                            return
                        }
                    }
                    u = u.parentNode
                }
            }
        }, !0)
    })(e, t, n),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t) {
        var r = {
            touch: "ontouchend" in n
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
    }(e),
    function(e, t, r) {
        function l(t, n, i, s) {
            var o = i.type;
            i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
        }
        var i = e(n),
            s = e.mobile.support.touch,
            o = "touchmove scroll",
            u = s ? "touchstart" : "mousedown",
            a = s ? "touchend" : "mouseup",
            f = s ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.bind(n, e) : this.trigger(n)
            }, e.attrFn && (e.attrFn[n] = !0)
        }), e.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function s(e, n) {
                    r = n, l(t, r ? "scrollstart" : "scrollstop", e)
                }
                var t = this,
                    n = e(t),
                    r, i;
                n.bind(o, function(t) {
                    if (!e.event.special.scrollstart.enabled) return;
                    r || s(t, !0), clearTimeout(i), i = setTimeout(function() {
                        s(t, !1)
                    }, 50)
                })
            },
            teardown: function() {
                e(this).unbind(o)
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var t = this,
                    n = e(t),
                    r = !1;
                n.bind("vmousedown", function(s) {
                    function a() {
                        clearTimeout(u)
                    }

                    function f() {
                        a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
                    }

                    function c(e) {
                        f(), !r && o === e.target ? l(t, "tap", e) : r && e.preventDefault()
                    }
                    r = !1;
                    if (s.which && s.which !== 1) return !1;
                    var o = s.target,
                        u;
                    n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function() {
                        e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
                            target: o
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(e) {
                var n = t.pageXOffset,
                    r = t.pageYOffset,
                    i = e.clientX,
                    s = e.clientY;
                if (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY) || e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX)) i -= n, s -= r;
                else if (s < e.pageY - r || i < e.pageX - n) i = e.pageX - n, s = e.pageY - r;
                return {
                    x: i,
                    y: s
                }
            },
            start: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y],
                    origin: e(t.target)
                }
            },
            stop: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    r = e.event.special.swipe.getLocation(n);
                return {
                    time: (new Date).getTime(),
                    coords: [r.x, r.y]
                }
            },
            handleSwipe: function(t, n, r, i) {
                if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
                    return l(r, "swipe", e.Event("swipe", {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), l(r, s, e.Event(s, {
                        target: i,
                        swipestart: t,
                        swipestop: n
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var t, n = this,
                    r = e(n),
                    s = {};
                t = e.data(this, "mobile-events"), t || (t = {
                    length: 0
                }, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function(t) {
                    if (e.event.special.swipe.eventInProgress) return;
                    e.event.special.swipe.eventInProgress = !0;
                    var r, o = e.event.special.swipe.start(t),
                        u = t.target,
                        l = !1;
                    s.move = function(t) {
                        if (!o || t.isDefaultPrevented()) return;
                        r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()
                    }, s.stop = function() {
                        l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
                    }, i.on(f, s.move).one(a, s.stop)
                }, r.on(u, s.start)
            },
            teardown: function() {
                var t, n;
                t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).bind(n, e.noop)
                },
                teardown: function() {
                    e(this).unbind(n)
                }
            }
        })
    }(e, this)
});
/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var t, e, i = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    t = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in t) n = t[i], null != n && (e[i] = n);
            return e
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t
    }(), e = this.WeakMap || (e = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, i, n, o, r;
            for (r = this.keys, e = n = 0, o = r.length; o > n; e = ++n)
                if (i = r[e], i === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var i, n, o, r, s;
            for (s = this.keys, i = o = 0, r = s.length; r > o; i = ++o)
                if (n = s[i], n === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), this.WOW = function() {
        function n(t) {
            null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new e
        }
        return n.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, n.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
        }, n.prototype.start = function() {
            var t, e, i, n;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (n = this.boxes, e = 0, i = n.length; i > e; e++) t = n[e], this.applyStyle(t, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
            }
        }, n.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, n.prototype.show = function(t) {
            return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
        }, n.prototype.applyStyle = function(t, e) {
            var i, n, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, n, i, o)
                }
            }(this))
        }, n.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), n.prototype.resetStyle = function() {
            var t, e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
            return o
        }, n.prototype.customStyle = function(t, e, i, n, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) {
            var i, n, o, r;
            r = [];
            for (i in e) n = e[i], t["" + i] = n, r.push(function() {
                var e, r, s, a;
                for (s = this.vendors, a = [], e = 0, r = s.length; r > e; e++) o = s[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                return a
            }.call(this));
            return r
        }, n.prototype.vendorCSS = function(t, e) {
            var i, n, o, r, s, a;
            for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), a = this.vendors, r = 0, s = a.length; s > r; r++) o = a[r], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
            return i
        }, n.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = window.getComputedStyle(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, n.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, n.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, n.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, n.prototype.scrollCallback = function() {
            var t;
            return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                var e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), !this.boxes.length) ? this.stop() : void 0
        }, n.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, n.prototype.isVisible = function(t) {
            var e, i, n, o, r;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= r
        }, n.prototype.util = function() {
            return this._util || (this._util = new t)
        }, n.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, n
    }()
}).call(this);
/*!
 Waypoints - 3.1.1
 Copyright © 2011-2015 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 */
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in t) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, u, c = this.waypoints[n][s],
                    d = c.options.offset,
                    f = c.triggerPoint,
                    w = 0,
                    y = null == f;
                c.element !== c.element.window && (w = c.adapter.offset()[r.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), c.options.offset.indexOf("%") > -1 && (d = Math.ceil(r.contextDimension * d / 100))), a = r.contextScroll - r.contextOffset, c.triggerPoint = w + a - d, l = f < r.oldScroll, h = c.triggerPoint >= r.oldScroll, p = l && h, u = !l && !h, !y && p ? (c.queueTrigger(r.backward), o[c.group.id] = c.group) : !y && u ? (c.queueTrigger(r.forward), o[c.group.id] = c.group) : y && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward), o[c.group.id] = c.group)
            }
        }
        for (var g in o) o[g].flushTriggers();
        return this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar",
        g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(a) {
                a.hide()
            },
            showElement: function(a) {
                a.show()
            }
        },
        h = {
            scroll: {
                getLeft: function(a) {
                    return a.scrollLeft()
                },
                setLeft: function(a, b) {
                    a.scrollLeft(b)
                },
                getTop: function(a) {
                    return a.scrollTop()
                },
                setTop: function(a, b) {
                    a.scrollTop(b)
                }
            },
            position: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(a) {
                    return -1 * parseInt(a.css("margin-left"), 10)
                },
                getTop: function(a) {
                    return -1 * parseInt(a.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        i = {
            position: {
                setLeft: function(a, b) {
                    a.css("left", b)
                },
                setTop: function(a, b) {
                    a.css("top", b)
                }
            },
            transform: {
                setPosition: function(a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        },
        j = function() {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break
                }
            return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function(a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
                }
        }(),
        k = j("transform"),
        l = a("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== d,
        m = l ? function(a, b, c) {
            a.css({
                "background-position-x": b,
                "background-position-y": c
            })
        } : function(a, b, c) {
            a.css("background-position", b + " " + c)
        },
        n = l ? function(a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function(a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function() {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function() {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
                b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function() {
            var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() {
                c.refresh()
            }), d.bind("resize." + this.name, function() {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        },
        refresh: function(c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
                var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        },
        _detectViewport: function() {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        },
        _findParticles: function() {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this) return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
                var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        },
        _handleScrollEvent: function() {
            var a = this,
                b = !1,
                c = function() {
                    a._repositionElements(), b = !1
                },
                d = function() {
                    b || (o(c), b = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        },
        _startAnimationLoop: function() {
            var a = this;
            this._animationLoop = function() {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function() {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);
/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.2.1 - built 2016-06-13
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2016 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
! function(t) {
    "use strict";
    var s = {
            slide: 0,
            delay: 5e3,
            preload: !1,
            preloadImage: !1,
            preloadVideo: !1,
            timer: !0,
            overlay: !1,
            autoplay: !0,
            shuffle: !1,
            cover: !0,
            color: null,
            align: "center",
            valign: "center",
            transition: "fade",
            transitionDuration: 1e3,
            transitionRegister: [],
            animation: null,
            animationDuration: "auto",
            animationRegister: [],
            init: function() {},
            play: function() {},
            pause: function() {},
            walk: function() {},
            slides: []
        },
        i = {},
        e = function(i, e) {
            this.elmt = i, this.settings = t.extend({}, s, t.vegas.defaults, e), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
                objectFit: "objectFit" in document.body.style,
                transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
                video: t.vegas.isVideoCompatible()
            }, this.settings.shuffle === !0 && this.shuffle(), this._init()
        };
    e.prototype = {
        _init: function() {
            var s, i, e, n = "BODY" === this.elmt.tagName,
                o = this.settings.timer,
                a = this.settings.overlay,
                r = this;
            this._preload(), n || (this.$elmt.css("height", this.$elmt.css("height")), s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(s), this.elmt.innerHTML = ""), o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = t('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || this.$elmt.append(s), setTimeout(function() {
                r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play")
            }, 1)
        },
        _preload: function() {
            var t, s;
            for (s = 0; s < this.settings.slides.length; s++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[s].src && (t = new Image, t.src = this.settings.slides[s].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[s].video && (this.settings.slides[s].video instanceof Array ? this._video(this.settings.slides[s].video) : this._video(this.settings.slides[s].video.src))
        },
        _random: function(t) {
            return t[Math.floor(Math.random() * t.length)]
        },
        _slideShow: function() {
            var t = this;
            this.total > 1 && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
                t.next()
            }, this._options("delay")))
        },
        _timer: function(t) {
            var s = this;
            clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.paused || this.noshow || t && setTimeout(function() {
                s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
            }, 100))
        },
        _video: function(t) {
            var s, e, n = t.toString();
            return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]), s = document.createElement("video"), s.preload = !0, t.forEach(function(t) {
                e = document.createElement("source"), e.src = t, s.appendChild(e)
            }), i[n] = s, s)
        },
        _fadeOutSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume - .09;
            n > 0 ? (t.volume = n, setTimeout(function() {
                i._fadeOutSound(t, s)
            }, e)) : t.pause()
        },
        _fadeInSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume + .09;
            1 > n && (t.volume = n, setTimeout(function() {
                i._fadeInSound(t, s)
            }, e))
        },
        _options: function(t, s) {
            return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
        },
        _goto: function(s) {
            function i() {
                f._timer(!0), setTimeout(function() {
                    y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"), h.each(function() {
                        var t = h.find("video").get(0);
                        t && (t.volume = 1, f._fadeOutSound(t, _))
                    }), e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
                    for (var t = 0; t < h.length - 4; t++) h.eq(t).remove();
                    f.trigger("walk"), f._slideShow()
                }, 100)
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0), this.slide = s;
            var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"),
                d = this.settings.slides[s].src,
                l = this.settings.slides[s].video,
                g = this._options("delay"),
                u = this._options("align"),
                c = this._options("valign"),
                p = this._options("cover"),
                m = this._options("color") || this.$elmt.css("background-color"),
                f = this,
                v = h.length,
                y = this._options("transition"),
                _ = this._options("transitionDuration"),
                w = this._options("animation"),
                b = this._options("animationDuration");
            "repeat" !== p && (p === !0 ? p = "cover" : p === !1 && (p = "contain")), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)), ("random" === w || w instanceof Array) && (w = w instanceof Array ? this._random(w) : this._random(this.animations)), ("auto" === _ || _ > g) && (_ = g), "auto" === b && (b = g), e = t('<div class="vegas-slide"></div>'), this.support.transition && y && e.addClass("vegas-transition-" + y), this.support.video && l ? (a = l instanceof Array ? this._video(l) : this._video(l.src), a.loop = void 0 !== l.loop ? l.loop : !0, a.muted = void 0 !== l.mute ? l.mute : !0, a.muted === !1 ? (a.volume = 0, this._fadeInSound(a, _)) : a.pause(), o = t(a).addClass("vegas-video").css("background-color", m), this.support.objectFit ? o.css("object-position", u + " " + c).css("object-fit", p).css("width", "100%").css("height", "100%") : "contain" === p && o.css("width", "100%").css("height", "100%"), e.append(o)) : (r = new Image, n = t('<div class="vegas-slide-inner"></div>').css("background-image", "url(" + d + ")").css("background-color", m).css("background-position", u + " " + c), "repeat" === p ? n.css("background-repeat", "repeat") : n.css("background-size", p), this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"), e.append(n)), this.support.transition || e.css("display", "none"), v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e), f._timer(!1), a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : (r.src = d, r.onload = i)
        },
        shuffle: function() {
            for (var t, s, i = this.total - 1; i > 0; i--) s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t
        },
        play: function() {
            this.paused && (this.paused = !1, this.next(), this.trigger("play"))
        },
        pause: function() {
            this._timer(!1), this.paused = !0, this.trigger("pause")
        },
        toggle: function() {
            this.paused ? this.play() : this.pause()
        },
        playing: function() {
            return !this.paused && !this.noshow
        },
        current: function(t) {
            return t ? {
                slide: this.slide,
                data: this.settings.slides[this.slide]
            } : this.slide
        },
        jump: function(t) {
            0 > t || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
        },
        next: function() {
            this.slide++, this.slide >= this.total && (this.slide = 0), this._goto(this.slide)
        },
        previous: function() {
            this.slide--, this.slide < 0 && (this.slide = this.total - 1), this._goto(this.slide)
        },
        trigger: function(t) {
            var s = [];
            s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
        },
        options: function(i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i) return this.settings;
                if (void 0 === e) return this.settings[i];
                this.settings[i] = e
            }
            this.settings.slides !== n && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
        },
        destroy: function() {
            clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
        }
    }, t.fn.vegas = function(t) {
        var s, i = arguments,
            n = !1;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            this._vegas || (this._vegas = new e(this, t))
        });
        if ("string" == typeof t) {
            if (this.each(function() {
                    var e = this._vegas;
                    if (!e) throw new Error("No Vegas applied to this element.");
                    "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
                }), n) throw new Error('No method "' + t + '" in Vegas.');
            return void 0 !== s ? s : this
        }
    }, t.vegas = {}, t.vegas.defaults = s, t.vegas.isVideoCompatible = function() {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
}(window.jQuery || window.Zepto);
/*
 jQuery animateNumber plugin
 */
! function(e) {
    var t = function(e) {
            return e.split("").reverse().join("")
        },
        n = {
            numberStep: function(t, n) {
                var r = Math.floor(t),
                    a = e(n.elem);
                a.text(r)
            }
        },
        r = function(e) {
            var t = e.elem;
            if (t.nodeType && t.parentNode) {
                var r = t._animateNumberSetter;
                r || (r = n.numberStep), r(e.now, e)
            }
        };
    e.Tween && e.Tween.propHooks ? e.Tween.propHooks.number = {
        set: r
    } : e.fx.step.number = r;
    var a = function(e, t) {
            for (var n, r, a, o = e.split("").reverse(), u = [], i = 0, m = Math.ceil(e.length / t); m > i; i++) {
                for (n = "", a = 0; t > a && (r = i * t + a, r !== e.length); a++) n += o[r];
                u.push(n)
            }
            return u
        },
        o = function(e) {
            var n = e.length - 1,
                r = t(e[n]);
            return e[n] = t(parseInt(r, 10).toString()), e
        };
    e.animateNumber = {
        numberStepFactories: {
            append: function(t) {
                return function(n, r) {
                    var a = Math.floor(n),
                        o = e(r.elem);
                    o.prop("number", n).text(a + t)
                }
            },
            separator: function(n, r) {
                return n = n || " ", r = r || 3,
                    function(u, i) {
                        var m = Math.floor(u),
                            p = m.toString(),
                            f = e(i.elem);
                        if (p.length > r) {
                            var s = a(p, r);
                            p = o(s).join(n), p = t(p)
                        }
                        f.prop("number", u).text(p)
                    }
            }
        }
    }, e.fn.animateNumber = function() {
        for (var t = arguments[0], r = e.extend({}, n, t), a = e(this), o = [r], u = 1, i = arguments.length; i > u; u++) o.push(arguments[u]);
        if (t.numberStep) {
            var m = this.each(function() {
                    this._animateNumberSetter = t.numberStep
                }),
                p = r.complete;
            r.complete = function() {
                m.each(function() {
                    delete this._animateNumberSetter
                }), p && p.apply(this, arguments)
            }
        }
        return a.animate.apply(a, o)
    }
}(jQuery);
/*
 jQuery appear plugin
 */
! function(e) {
    function r() {
        n = !1;
        for (var r = 0, a = i.length; a > r; r++) {
            var o = e(i[r]).filter(function() {
                return e(this).is(":appeared")
            });
            if (o.trigger("appear", [o]), t) {
                var f = t.not(o);
                f.trigger("disappear", [f])
            }
            t = o
        }
    }
    var t, i = [],
        a = !1,
        n = !1,
        o = {
            interval: 250,
            force_process: !1
        },
        f = e(window);
    e.expr[":"].appeared = function(r) {
        var t = e(r);
        if (!t.is(":visible")) return !1;
        var i = f.scrollLeft(),
            a = f.scrollTop(),
            n = t.offset(),
            o = n.left,
            p = n.top;
        return p + t.height() >= a && p - (t.data("appear-top-offset") || 0) <= a + f.height() && o + t.width() >= i && o - (t.data("appear-left-offset") || 0) <= i + f.width() ? !0 : !1
    }, e.fn.extend({
        appear: function(t) {
            var f = e.extend({}, o, t || {}),
                p = this.selector || this;
            if (!a) {
                var s = function() {
                    n || (n = !0, setTimeout(r, f.interval))
                };
                e(window).scroll(s).resize(s), a = !0
            }
            return f.force_process && setTimeout(r, f.interval), i.push(p), e(p)
        }
    }), e.extend({
        force_appear: function() {
            return a ? (r(), !0) : !1
        }
    })
}(jQuery);
/*
 * Cube Portfolio - Responsive jQuery Grid Plugin
 *
 * version: 4.1.1 (20 March, 2017)
 * require: jQuery v1.7+
 *
 * Copyright 2013-2017, Mihai Buricea (http://scriptpie.com/cubeportfolio/live-preview/)
 * Licensed under CodeCanyon License (http://codecanyon.net/licenses)
 *
 */
! function(a, b, c, d) {
    "use strict";

    function e(b, c, d) {
        var f = this;
        if (a.data(b, "cubeportfolio")) throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");
        f.obj = b, f.$obj = a(b), a.data(f.obj, "cubeportfolio", f), f.options = a.extend({}, a.fn.cubeportfolio.options, c, f.$obj.data("cbp-options")), f.isAnimating = !0, f.defaultFilter = f.options.defaultFilter, f.registeredEvents = [], f.queue = [], f.addedWrapp = !1, a.isFunction(d) && f.registerEvent("initFinish", d, !0);
        var g = f.$obj.children();
        f.$obj.addClass("cbp"), (0 === g.length || g.first().hasClass("cbp-item")) && (f.wrapInner(f.obj, "cbp-wrapper"), f.addedWrapp = !0), f.$ul = f.$obj.children().addClass("cbp-wrapper"), f.wrapInner(f.obj, "cbp-wrapper-outer"), f.wrapper = f.$obj.children(".cbp-wrapper-outer"), f.blocks = f.$ul.children(".cbp-item"), f.blocksOn = f.blocks, f.wrapInner(f.blocks, "cbp-item-wrapper"), f.plugins = {}, a.each(e.plugins, function(a, b) {
            var c = b(f);
            c && (f.plugins[a] = c)
        }), f.triggerEvent("afterPlugins"), f.loadImages(f.$obj, f.display)
    }
    a.extend(e.prototype, {
        storeData: function(b, c) {
            var d = this;
            c = c || 0, b.each(function(b, e) {
                var f = a(e),
                    g = f.width(),
                    h = f.height();
                f.data("cbp", {
                    index: c + b,
                    wrapper: f.children(".cbp-item-wrapper"),
                    widthInitial: g,
                    heightInitial: h,
                    width: g,
                    height: h,
                    widthAndGap: g + d.options.gapVertical,
                    heightAndGap: h + d.options.gapHorizontal,
                    left: null,
                    leftNew: null,
                    top: null,
                    topNew: null,
                    pack: !1
                })
            })
        },
        wrapInner: function(a, b) {
            var e, f, g;
            if (b = b || "", !(a.length && a.length < 1))
                for (a.length === d && (a = [a]), f = a.length - 1; f >= 0; f--) {
                    for (e = a[f], g = c.createElement("div"), g.setAttribute("class", b); e.childNodes.length;) g.appendChild(e.childNodes[0]);
                    e.appendChild(g)
                }
        },
        removeAttrImage: function(a) {
            a.removeAttribute("width"), a.removeAttribute("height"), a.removeAttribute("style")
        },
        loadImages: function(b, c) {
            var d = this;
            requestAnimationFrame(function() {
                var e = b.find("img").map(function(b, c) {
                        if (c.hasAttribute("width") && c.hasAttribute("height")) {
                            if (c.style.width = c.getAttribute("width") + "px", c.style.height = c.getAttribute("height") + "px", c.hasAttribute("data-cbp-src")) return null;
                            if (null === d.checkSrc(c)) d.removeAttrImage(c);
                            else {
                                var e = a("<img>");
                                e.on("load.cbp error.cbp", function() {
                                    a(this).off("load.cbp error.cbp"), d.removeAttrImage(c)
                                }), c.srcset ? (e.attr("sizes", c.sizes || "100vw"), e.attr("srcset", c.srcset)) : e.attr("src", c.src)
                            }
                            return null
                        }
                        return d.checkSrc(c)
                    }),
                    f = e.length;
                return 0 === f ? void c.call(d) : void a.each(e, function(b, e) {
                    var g = a("<img>");
                    g.on("load.cbp error.cbp", function() {
                        a(this).off("load.cbp error.cbp"), f--, 0 === f && c.call(d)
                    }), e.srcset ? (g.attr("sizes", e.sizes), g.attr("srcset", e.srcset)) : g.attr("src", e.src)
                })
            })
        },
        checkSrc: function(b) {
            var c = b.srcset,
                e = b.src;
            if ("" === e) return null;
            var f = a("<img>");
            c ? (f.attr("sizes", b.sizes || "100vw"), f.attr("srcset", c)) : f.attr("src", e);
            var g = f[0];
            return g.complete && g.naturalWidth !== d && 0 !== g.naturalWidth ? null : g
        },
        display: function() {
            var a = this;
            a.storeData(a.blocks), a.triggerEvent("initStartRead"), a.triggerEvent("initStartWrite"), a.layoutAndAdjustment(), a.triggerEvent("initEndRead"), a.triggerEvent("initEndWrite"), a.$obj.addClass("cbp-ready"), a.runQueue("delayFrame", a.delayFrame)
        },
        delayFrame: function() {
            var a = this;
            requestAnimationFrame(function() {
                a.resizeEvent(), a.triggerEvent("initFinish"), a.isAnimating = !1, a.$obj.trigger("initComplete.cbp")
            })
        },
        resizeEvent: function() {
            var a = this;
            e.private.resize.initEvent({
                instance: a,
                fn: function() {
                    a.triggerEvent("beforeResizeGrid"), a.width !== a.$obj.outerWidth() && ("alignCenter" === a.options.gridAdjustment && (a.wrapper[0].style.maxWidth = ""), a.layoutAndAdjustment(), a.triggerEvent("resizeGrid")), a.triggerEvent("resizeWindow")
                }
            })
        },
        gridAdjust: function() {
            var b = this;
            b.width = b.$obj.outerWidth(), "responsive" === b.options.gridAdjustment ? b.responsiveLayout() : (b.blocks.removeAttr("style"), b.blocks.each(function(c, d) {
                var e = a(d).data("cbp"),
                    f = d.getBoundingClientRect(),
                    g = b.columnWidthTruncate(f.right - f.left),
                    h = Math.round(f.bottom - f.top);
                e.height = h, e.heightAndGap = h + b.options.gapHorizontal, e.width = g, e.widthAndGap = g + b.options.gapVertical
            }), b.widthAvailable = b.width + b.options.gapVertical), b.triggerEvent("gridAdjust")
        },
        layoutAndAdjustment: function() {
            var a = this;
            a.gridAdjust(), a.layout()
        },
        layout: function() {
            var a = this;
            a.computeBlocks(a.filterConcat(a.defaultFilter)), "slider" === a.options.layoutMode ? (a.sliderLayoutReset(), a.sliderLayout()) : (a.mosaicLayoutReset(), a.mosaicLayout()), a.positionateItems(), a.resizeMainContainer()
        },
        computeFilter: function(a) {
            var b = this;
            b.computeBlocks(a), b.mosaicLayoutReset(), b.mosaicLayout(), b.filterLayout()
        },
        filterLayout: function() {
            var b = this;
            b.blocksOff.addClass("cbp-item-off"), b.blocksOn.removeClass("cbp-item-off").each(function(b, c) {
                var d = a(c).data("cbp");
                d.left = d.leftNew, d.top = d.topNew, c.style.left = d.left + "px", c.style.top = d.top + "px"
            }), b.resizeMainContainer(), b.filterFinish()
        },
        filterFinish: function() {
            var a = this;
            a.blocksAreSorted && a.sortBlocks(a.blocks, "index"), a.isAnimating = !1, a.$obj.trigger("filterComplete.cbp"), a.triggerEvent("filterFinish")
        },
        computeBlocks: function(a) {
            var b = this;
            b.blocksOnInitial = b.blocksOn, b.blocksOn = b.blocks.filter(a), b.blocksOff = b.blocks.not(a), b.triggerEvent("computeBlocksFinish", a)
        },
        responsiveLayout: function() {
            var b = this;
            b.cols = b[a.isArray(b.options.mediaQueries) ? "getColumnsBreakpoints" : "getColumnsAuto"](), b.columnWidth = b.columnWidthTruncate((b.width + b.options.gapVertical) / b.cols), b.widthAvailable = b.columnWidth * b.cols, "mosaic" === b.options.layoutMode && b.getMosaicWidthReference(), b.blocks.each(function(c, d) {
                var e, f = a(d).data("cbp"),
                    g = 1;
                "mosaic" === b.options.layoutMode && (g = b.getColsMosaic(f.widthInitial)), e = b.columnWidth * g - b.options.gapVertical, d.style.width = e + "px", f.width = e, f.widthAndGap = e + b.options.gapVertical, d.style.height = ""
            });
            var c = [];
            b.blocks.each(function(b, d) {
                a.each(a(d).find("img").filter("[width][height]"), function(b, d) {
                    var e = a(d).parent().width(),
                        f = parseInt(d.getAttribute("width"), 10),
                        g = parseInt(d.getAttribute("height"), 10),
                        h = parseFloat((f / g).toFixed(10));
                    c.push({
                        el: d,
                        width: e,
                        height: Math.round(e / h)
                    })
                })
            }), a.each(c, function(a, b) {
                b.el.width = b.width, b.el.height = b.height, b.el.style.width = b.width + "px", b.el.style.height = b.height + "px"
            }), b.blocks.each(function(c, d) {
                var e = a(d).data("cbp"),
                    f = d.getBoundingClientRect(),
                    g = Math.round(f.bottom - f.top);
                e.height = g, e.heightAndGap = g + b.options.gapHorizontal
            })
        },
        getMosaicWidthReference: function() {
            var b = this,
                c = [];
            b.blocks.each(function(b, d) {
                var e = a(d).data("cbp");
                c.push(e.widthInitial)
            }), c.sort(function(a, b) {
                return a - b
            }), c[0] ? b.mosaicWidthReference = c[0] : b.mosaicWidthReference = b.columnWidth
        },
        getColsMosaic: function(a) {
            var b = this;
            if (a === b.width) return b.cols;
            var c = a / b.mosaicWidthReference;
            return c = c % 1 >= .79 ? Math.ceil(c) : Math.floor(c), Math.min(Math.max(c, 1), b.cols)
        },
        getColumnsAuto: function() {
            var a = this;
            if (0 === a.blocks.length) return 1;
            var b = a.blocks.first().data("cbp").widthInitial + a.options.gapVertical;
            return Math.max(Math.round(a.width / b), 1)
        },
        getColumnsBreakpoints: function() {
            var b, c = this,
                d = c.width;
            return a.each(c.options.mediaQueries, function(a, c) {
                if (d >= c.width) return b = c, !1
            }), b || (b = c.options.mediaQueries[c.options.mediaQueries.length - 1]), c.triggerEvent("onMediaQueries", b.options), b.cols
        },
        columnWidthTruncate: function(a) {
            return Math.floor(a)
        },
        positionateItems: function() {
            var b, c = this;
            c.blocksOn.removeClass("cbp-item-off").each(function(c, d) {
                b = a(d).data("cbp"), b.left = b.leftNew, b.top = b.topNew, d.style.left = b.left + "px", d.style.top = b.top + "px"
            }), c.blocksOff.addClass("cbp-item-off"), c.blocksAreSorted && c.sortBlocks(c.blocks, "index")
        },
        resizeMainContainer: function() {
            var b, c = this,
                f = Math.max(c.freeSpaces.slice(-1)[0].topStart - c.options.gapHorizontal, 0);
            return "alignCenter" === c.options.gridAdjustment && (b = 0, c.blocksOn.each(function(c, d) {
                var e = a(d).data("cbp"),
                    f = e.left + e.width;
                f > b && (b = f)
            }), c.wrapper[0].style.maxWidth = b + "px"), f === c.height ? void c.triggerEvent("resizeMainContainer") : (c.obj.style.height = f + "px", c.height !== d && (e.private.modernBrowser ? c.$obj.one(e.private.transitionend, function() {
                c.$obj.trigger("pluginResize.cbp")
            }) : c.$obj.trigger("pluginResize.cbp")), c.height = f, void c.triggerEvent("resizeMainContainer"))
        },
        filterConcat: function(a) {
            return a.replace(/\|/gi, "")
        },
        pushQueue: function(a, b) {
            var c = this;
            c.queue[a] = c.queue[a] || [], c.queue[a].push(b)
        },
        runQueue: function(b, c) {
            var d = this,
                e = d.queue[b] || [];
            a.when.apply(a, e).then(a.proxy(c, d))
        },
        clearQueue: function(a) {
            var b = this;
            b.queue[a] = []
        },
        registerEvent: function(a, b, c) {
            var d = this;
            d.registeredEvents[a] || (d.registeredEvents[a] = []), d.registeredEvents[a].push({
                func: b,
                oneTime: c || !1
            })
        },
        triggerEvent: function(a, b) {
            var c, d, e = this;
            if (e.registeredEvents[a])
                for (c = 0, d = e.registeredEvents[a].length; c < d; c++) e.registeredEvents[a][c].func.call(e, b), e.registeredEvents[a][c].oneTime && (e.registeredEvents[a].splice(c, 1), c--, d--)
        },
        addItems: function(b, c, d) {
            var f = this;
            f.wrapInner(b, "cbp-item-wrapper"), f.$ul[d](b.addClass("cbp-item-loading").css({
                top: "100%",
                left: 0
            })), e.private.modernBrowser ? b.last().one(e.private.animationend, function() {
                f.addItemsFinish(b, c)
            }) : f.addItemsFinish(b, c), f.loadImages(b, function() {
                if (f.$obj.addClass("cbp-updateItems"), "append" === d) f.storeData(b, f.blocks.length), a.merge(f.blocks, b);
                else {
                    f.storeData(b);
                    var c = b.length;
                    f.blocks.each(function(b, d) {
                        a(d).data("cbp").index = c + b
                    }), f.blocks = a.merge(b, f.blocks)
                }
                f.triggerEvent("addItemsToDOM", b), f.layoutAndAdjustment(), f.elems && e.public.showCounter.call(f.obj, f.elems)
            })
        },
        addItemsFinish: function(b, c) {
            var d = this;
            d.isAnimating = !1, d.$obj.removeClass("cbp-updateItems"), b.removeClass("cbp-item-loading"), a.isFunction(c) && c.call(d, b), d.$obj.trigger("onAfterLoadMore.cbp", [b])
        },
        removeItems: function(b, c) {
            var d = this;
            d.$obj.addClass("cbp-updateItems"), e.private.modernBrowser ? b.last().one(e.private.animationend, function() {
                d.removeItemsFinish(b, c)
            }) : d.removeItemsFinish(b, c), b.each(function(b, c) {
                d.blocks.each(function(b, f) {
                    if (c === f) {
                        var g = a(f);
                        d.blocks.splice(b, 1), e.private.modernBrowser ? (g.one(e.private.animationend, function() {
                            g.remove()
                        }), g.addClass("cbp-removeItem")) : g.remove()
                    }
                })
            }), d.blocks.each(function(b, c) {
                a(c).data("cbp").index = b
            }), d.layoutAndAdjustment(), d.elems && e.public.showCounter.call(d.obj, d.elems)
        },
        removeItemsFinish: function(b, c) {
            var d = this;
            d.isAnimating = !1, d.$obj.removeClass("cbp-updateItems"), a.isFunction(c) && c.call(d, b)
        }
    }), a.fn.cubeportfolio = function(a, b, c) {
        return this.each(function() {
            if ("object" == typeof a || !a) return e.public.init.call(this, a, b);
            if (e.public[a]) return e.public[a].call(this, b, c);
            throw new Error("Method " + a + " does not exist on jquery.cubeportfolio.js")
        })
    }, e.plugins = {}, a.fn.cubeportfolio.constructor = e
}(jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = a.fn.cubeportfolio.constructor;
    a.extend(e.prototype, {
        mosaicLayoutReset: function() {
            var b = this;
            b.blocksAreSorted = !1, b.blocksOn.each(function(c, d) {
                a(d).data("cbp").pack = !1, b.options.sortToPreventGaps && (d.style.height = "")
            }), b.freeSpaces = [{
                leftStart: 0,
                leftEnd: b.widthAvailable,
                topStart: 0,
                topEnd: Math.pow(2, 18)
            }]
        },
        mosaicLayout: function() {
            for (var a = this, b = 0, c = a.blocksOn.length; b < c; b++) {
                var d = a.getSpaceIndexAndBlock();
                if (null === d) return a.mosaicLayoutReset(), a.sortBlocksToPreventGaps(), void a.mosaicLayout();
                a.generateF1F2(d.spaceIndex, d.dataBlock), a.generateG1G2G3G4(d.dataBlock), a.cleanFreeSpaces(), a.addHeightToBlocks()
            }
            a.blocksAreSorted && a.sortBlocks(a.blocksOn, "topNew")
        },
        getSpaceIndexAndBlock: function() {
            var b = this,
                c = null;
            return a.each(b.freeSpaces, function(d, e) {
                var f = e.leftEnd - e.leftStart,
                    g = e.topEnd - e.topStart;
                return b.blocksOn.each(function(b, h) {
                    var i = a(h).data("cbp");
                    if (i.pack !== !0) return i.widthAndGap <= f && i.heightAndGap <= g ? (i.pack = !0, c = {
                        spaceIndex: d,
                        dataBlock: i
                    }, i.leftNew = e.leftStart, i.topNew = e.topStart, !1) : void 0
                }), !b.blocksAreSorted && b.options.sortToPreventGaps && d > 0 ? (c = null, !1) : null === c && void 0
            }), c
        },
        generateF1F2: function(a, b) {
            var c = this,
                d = c.freeSpaces[a],
                e = {
                    leftStart: d.leftStart + b.widthAndGap,
                    leftEnd: d.leftEnd,
                    topStart: d.topStart,
                    topEnd: d.topEnd
                },
                f = {
                    leftStart: d.leftStart,
                    leftEnd: d.leftEnd,
                    topStart: d.topStart + b.heightAndGap,
                    topEnd: d.topEnd
                };
            c.freeSpaces.splice(a, 1), e.leftEnd > e.leftStart && e.topEnd > e.topStart && (c.freeSpaces.splice(a, 0, e), a++), f.leftEnd > f.leftStart && f.topEnd > f.topStart && c.freeSpaces.splice(a, 0, f)
        },
        generateG1G2G3G4: function(b) {
            var c = this,
                d = [];
            a.each(c.freeSpaces, function(a, e) {
                var f = c.intersectSpaces(e, b);
                return null === f ? void d.push(e) : (c.generateG1(e, f, d), c.generateG2(e, f, d), c.generateG3(e, f, d), void c.generateG4(e, f, d))
            }), c.freeSpaces = d
        },
        intersectSpaces: function(a, b) {
            var c = {
                leftStart: b.leftNew,
                leftEnd: b.leftNew + b.widthAndGap,
                topStart: b.topNew,
                topEnd: b.topNew + b.heightAndGap
            };
            if (a.leftStart === c.leftStart && a.leftEnd === c.leftEnd && a.topStart === c.topStart && a.topEnd === c.topEnd) return null;
            var d = Math.max(a.leftStart, c.leftStart),
                e = Math.min(a.leftEnd, c.leftEnd),
                f = Math.max(a.topStart, c.topStart),
                g = Math.min(a.topEnd, c.topEnd);
            return e <= d || g <= f ? null : {
                leftStart: d,
                leftEnd: e,
                topStart: f,
                topEnd: g
            }
        },
        generateG1: function(a, b, c) {
            a.topStart !== b.topStart && c.push({
                leftStart: a.leftStart,
                leftEnd: a.leftEnd,
                topStart: a.topStart,
                topEnd: b.topStart
            })
        },
        generateG2: function(a, b, c) {
            a.leftEnd !== b.leftEnd && c.push({
                leftStart: b.leftEnd,
                leftEnd: a.leftEnd,
                topStart: a.topStart,
                topEnd: a.topEnd
            })
        },
        generateG3: function(a, b, c) {
            a.topEnd !== b.topEnd && c.push({
                leftStart: a.leftStart,
                leftEnd: a.leftEnd,
                topStart: b.topEnd,
                topEnd: a.topEnd
            })
        },
        generateG4: function(a, b, c) {
            a.leftStart !== b.leftStart && c.push({
                leftStart: a.leftStart,
                leftEnd: b.leftStart,
                topStart: a.topStart,
                topEnd: a.topEnd
            })
        },
        cleanFreeSpaces: function() {
            var a = this;
            a.freeSpaces.sort(function(a, b) {
                return a.topStart > b.topStart ? 1 : a.topStart < b.topStart ? -1 : a.leftStart > b.leftStart ? 1 : a.leftStart < b.leftStart ? -1 : 0
            }), a.correctSubPixelValues(), a.removeNonMaximalFreeSpaces()
        },
        correctSubPixelValues: function() {
            var a, b, c, d, e = this;
            for (a = 0, b = e.freeSpaces.length - 1; a < b; a++) c = e.freeSpaces[a], d = e.freeSpaces[a + 1], d.topStart - c.topStart <= 1 && (d.topStart = c.topStart)
        },
        removeNonMaximalFreeSpaces: function() {
            var b = this;
            b.uniqueFreeSpaces(), b.freeSpaces = a.map(b.freeSpaces, function(c, d) {
                return a.each(b.freeSpaces, function(a, b) {
                    if (d !== a) return b.leftStart <= c.leftStart && b.leftEnd >= c.leftEnd && b.topStart <= c.topStart && b.topEnd >= c.topEnd ? (c = null, !1) : void 0
                }), c
            })
        },
        uniqueFreeSpaces: function() {
            var b = this,
                c = [];
            a.each(b.freeSpaces, function(b, d) {
                a.each(c, function(a, b) {
                    if (b.leftStart === d.leftStart && b.leftEnd === d.leftEnd && b.topStart === d.topStart && b.topEnd === d.topEnd) return d = null, !1
                }), null !== d && c.push(d)
            }), b.freeSpaces = c
        },
        addHeightToBlocks: function() {
            var b = this;
            a.each(b.freeSpaces, function(c, d) {
                b.blocksOn.each(function(c, e) {
                    var f = a(e).data("cbp");
                    if (f.pack === !0 && b.intersectSpaces(d, f)) {
                        var g = d.topStart - f.topNew - f.heightAndGap;
                        g === -1 && (e.style.height = f.height - 1 + "px")
                    }
                })
            })
        },
        sortBlocksToPreventGaps: function() {
            var b = this;
            b.blocksAreSorted = !0, b.blocksOn.sort(function(b, c) {
                var d = a(b).data("cbp"),
                    e = a(c).data("cbp");
                return d.widthAndGap < e.widthAndGap ? 1 : d.widthAndGap > e.widthAndGap ? -1 : d.heightAndGap < e.heightAndGap ? 1 : d.heightAndGap > e.heightAndGap ? -1 : d.index > e.index ? 1 : d.index < e.index ? -1 : void 0
            })
        },
        sortBlocks: function(b, c) {
            b.sort(function(b, d) {
                var e = a(b).data("cbp"),
                    f = a(d).data("cbp");
                return e[c] > f[c] ? 1 : e[c] < f[c] ? -1 : e.leftNew > f.leftNew ? 1 : e.leftNew < f.leftNew ? -1 : 0
            })
        }
    })
}(jQuery, window, document), jQuery.fn.cubeportfolio.options = {
        filters: "",
        search: "",
        layoutMode: "grid",
        sortToPreventGaps: !1,
        drag: !0,
        auto: !1,
        autoTimeout: 5e3,
        autoPauseOnHover: !0,
        showNavigation: !0,
        showPagination: !0,
        rewindNav: !0,
        scrollByPage: !1,
        defaultFilter: "*",
        filterDeeplinking: !1,
        animationType: "fadeOut",
        gridAdjustment: "responsive",
        mediaQueries: !1,
        gapHorizontal: 10,
        gapVertical: 10,
        caption: "pushTop",
        displayType: "fadeIn",
        displayTypeSpeed: 400,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: !0,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: !0,
        singlePageStickyNavigation: !0,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageAnimation: "left",
        singlePageCallback: null,
        singlePageInlineDelegate: ".cbp-singlePageInline",
        singlePageInlineDeeplinking: !1,
        singlePageInlinePosition: "top",
        singlePageInlineInFocus: !0,
        singlePageInlineCallback: null,
        plugins: {}
    },
    function(a, b, c, d) {
        "use strict";
        var e = a.fn.cubeportfolio.constructor,
            f = a(b);
        e.private = {
            publicEvents: function(b, c, d) {
                var e = this;
                e.events = [], e.initEvent = function(a) {
                    0 === e.events.length && e.scrollEvent(), e.events.push(a)
                }, e.destroyEvent = function(c) {
                    e.events = a.map(e.events, function(a, b) {
                        if (a.instance !== c) return a
                    }), 0 === e.events.length && f.off(b)
                }, e.scrollEvent = function() {
                    var g;
                    f.on(b, function() {
                        clearTimeout(g), g = setTimeout(function() {
                            a.isFunction(d) && d.call(e) || a.each(e.events, function(a, b) {
                                b.fn.call(b.instance)
                            })
                        }, c)
                    })
                }
            },
            checkInstance: function(b) {
                var c = a.data(this, "cubeportfolio");
                if (!c) throw new Error("cubeportfolio is not initialized. Initialize it before calling " + b + " method!");
                return c.triggerEvent("publicMethod"), c
            },
            browserInfo: function() {
                var a, c, f, g = e.private,
                    h = navigator.appVersion;
                h.indexOf("MSIE 8.") !== -1 ? g.browser = "ie8" : h.indexOf("MSIE 9.") !== -1 ? g.browser = "ie9" : h.indexOf("MSIE 10.") !== -1 ? g.browser = "ie10" : b.ActiveXObject || "ActiveXObject" in b ? g.browser = "ie11" : /android/gi.test(h) ? g.browser = "android" : /iphone|ipad|ipod/gi.test(h) ? g.browser = "ios" : /chrome/gi.test(h) ? g.browser = "chrome" : g.browser = "", f = g.styleSupport("perspective"), typeof f !== d && (a = g.styleSupport("transition"), g.transitionend = {
                    WebkitTransition: "webkitTransitionEnd",
                    transition: "transitionend"
                }[a], c = g.styleSupport("animation"), g.animationend = {
                    WebkitAnimation: "webkitAnimationEnd",
                    animation: "animationend"
                }[c], g.animationDuration = {
                    WebkitAnimation: "webkitAnimationDuration",
                    animation: "animationDuration"
                }[c], g.animationDelay = {
                    WebkitAnimation: "webkitAnimationDelay",
                    animation: "animationDelay"
                }[c], g.transform = g.styleSupport("transform"), a && c && g.transform && (g.modernBrowser = !0))
            },
            styleSupport: function(a) {
                var b, d = "Webkit" + a.charAt(0).toUpperCase() + a.slice(1),
                    e = c.createElement("div");
                return a in e.style ? b = a : d in e.style && (b = d), e = null, b
            }
        }, e.private.browserInfo(), e.private.resize = new e.private.publicEvents("resize.cbp", 50, function() {
            if (b.innerHeight == screen.height) return !0
        })
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = a.fn.cubeportfolio.constructor;
        e.public = {
            init: function(a, b) {
                new e(this, a, b)
            },
            destroy: function(b) {
                var c = e.private.checkInstance.call(this, "destroy");
                c.triggerEvent("beforeDestroy"), a.removeData(this, "cubeportfolio"), c.blocks.removeData("cbp"), c.$obj.removeClass("cbp-ready").removeAttr("style"), c.$ul.removeClass("cbp-wrapper"), e.private.resize.destroyEvent(c), c.$obj.off(".cbp"), c.blocks.removeClass("cbp-item-off").removeAttr("style"), c.blocks.find(".cbp-item-wrapper").each(function(b, c) {
                    var d = a(c),
                        e = d.children();
                    e.length ? e.unwrap() : d.remove()
                }), c.destroySlider && c.destroySlider(), c.$ul.unwrap(), c.addedWrapp && c.blocks.unwrap(), 0 === c.blocks.length && c.$ul.remove(), a.each(c.plugins, function(a, b) {
                    "function" == typeof b.destroy && b.destroy()
                }), a.isFunction(b) && b.call(c), c.triggerEvent("afterDestroy")
            },
            filter: function(b, c) {
                var f, g = e.private.checkInstance.call(this, "filter");
                if (!g.isAnimating) {
                    if (g.isAnimating = !0, a.isFunction(c) && g.registerEvent("filterFinish", c, !0), a.isFunction(b)) {
                        if (f = b.call(g, g.blocks), f === d) throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.")
                    } else {
                        if (g.options.filterDeeplinking) {
                            var h = location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi, "");
                            location.href = h + "#cbpf=" + encodeURIComponent(b), g.singlePage && g.singlePage.url && (g.singlePage.url = location.href)
                        }
                        g.defaultFilter = b, f = g.filterConcat(g.defaultFilter)
                    }
                    g.triggerEvent("filterStart", f), g.singlePageInline && g.singlePageInline.isOpen ? g.singlePageInline.close("promise", {
                        callback: function() {
                            g.computeFilter(f)
                        }
                    }) : g.computeFilter(f)
                }
            },
            showCounter: function(b, c) {
                var d = e.private.checkInstance.call(this, "showCounter");
                a.isFunction(c) && d.registerEvent("showCounterFinish", c, !0), d.elems = b, b.each(function() {
                    var b = a(this),
                        c = d.blocks.filter(b.data("filter")).length;
                    b.find(".cbp-filter-counter").text(c)
                }), d.triggerEvent("showCounterFinish", b)
            },
            appendItems: function(a, b) {
                e.public.append.call(this, a, b)
            },
            append: function(b, c) {
                var d = e.private.checkInstance.call(this, "append"),
                    f = a(b).filter(".cbp-item");
                return d.isAnimating || f.length < 1 ? void(a.isFunction(c) && c.call(d, f)) : (d.isAnimating = !0, void(d.singlePageInline && d.singlePageInline.isOpen ? d.singlePageInline.close("promise", {
                    callback: function() {
                        d.addItems(f, c, "append")
                    }
                }) : d.addItems(f, c, "append")))
            },
            prepend: function(b, c) {
                var d = e.private.checkInstance.call(this, "prepend"),
                    f = a(b).filter(".cbp-item");
                return d.isAnimating || f.length < 1 ? void(a.isFunction(c) && c.call(d, f)) : (d.isAnimating = !0, void(d.singlePageInline && d.singlePageInline.isOpen ? d.singlePageInline.close("promise", {
                    callback: function() {
                        d.addItems(f, c, "prepend")
                    }
                }) : d.addItems(f, c, "prepend")))
            },
            remove: function(b, c) {
                var d = e.private.checkInstance.call(this, "remove"),
                    f = a(b).filter(".cbp-item");
                return d.isAnimating || f.length < 1 ? void(a.isFunction(c) && c.call(d, f)) : (d.isAnimating = !0, void(d.singlePageInline && d.singlePageInline.isOpen ? d.singlePageInline.close("promise", {
                    callback: function() {
                        d.removeItems(f, c)
                    }
                }) : d.removeItems(f, c)))
            }
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = a.fn.cubeportfolio.constructor;
        a.extend(e.prototype, {
            updateSliderPagination: function() {
                var b, c, d = this;
                if (d.options.showPagination) {
                    for (b = Math.ceil(d.blocksOn.length / d.cols), d.navPagination.empty(), c = b - 1; c >= 0; c--) a("<div/>", {
                        class: "cbp-nav-pagination-item",
                        "data-slider-action": "jumpTo"
                    }).appendTo(d.navPagination);
                    d.navPaginationItems = d.navPagination.children()
                }
                d.enableDisableNavSlider()
            },
            destroySlider: function() {
                var b = this;
                "slider" === b.options.layoutMode && (b.$obj.removeClass("cbp-mode-slider"), b.$ul.removeAttr("style"), b.$ul.off(".cbp"), a(c).off(".cbp"), b.options.auto && b.stopSliderAuto())
            },
            nextSlider: function(a) {
                var b = this;
                if (b.isEndSlider()) {
                    if (!b.isRewindNav()) return;
                    b.sliderActive = 0
                } else b.options.scrollByPage ? b.sliderActive = Math.min(b.sliderActive + b.cols, b.blocksOn.length - b.cols) : b.sliderActive += 1;
                b.goToSlider()
            },
            prevSlider: function(a) {
                var b = this;
                if (b.isStartSlider()) {
                    if (!b.isRewindNav()) return;
                    b.sliderActive = b.blocksOn.length - b.cols
                } else b.options.scrollByPage ? b.sliderActive = Math.max(0, b.sliderActive - b.cols) : b.sliderActive -= 1;
                b.goToSlider()
            },
            jumpToSlider: function(a) {
                var b = this,
                    c = Math.min(a.index() * b.cols, b.blocksOn.length - b.cols);
                c !== b.sliderActive && (b.sliderActive = c, b.goToSlider())
            },
            jumpDragToSlider: function(a) {
                var b, c, d, e = this,
                    f = a > 0;
                e.options.scrollByPage ? (b = e.cols * e.columnWidth, c = e.cols) : (b = e.columnWidth, c = 1), a = Math.abs(a), d = Math.floor(a / b) * c, a % b > 20 && (d += c), f ? e.sliderActive = Math.min(e.sliderActive + d, e.blocksOn.length - e.cols) : e.sliderActive = Math.max(0, e.sliderActive - d), e.goToSlider()
            },
            isStartSlider: function() {
                return 0 === this.sliderActive
            },
            isEndSlider: function() {
                var a = this;
                return a.sliderActive + a.cols > a.blocksOn.length - 1
            },
            goToSlider: function() {
                var a = this;
                a.enableDisableNavSlider(), a.updateSliderPosition()
            },
            startSliderAuto: function() {
                var a = this;
                return a.isDrag ? void a.stopSliderAuto() : void(a.timeout = setTimeout(function() {
                    a.nextSlider(), a.startSliderAuto()
                }, a.options.autoTimeout))
            },
            stopSliderAuto: function() {
                clearTimeout(this.timeout)
            },
            enableDisableNavSlider: function() {
                var a, b, c = this;
                c.isRewindNav() || (b = c.isStartSlider() ? "addClass" : "removeClass", c.navPrev[b]("cbp-nav-stop"), b = c.isEndSlider() ? "addClass" : "removeClass", c.navNext[b]("cbp-nav-stop")), c.options.showPagination && (a = c.options.scrollByPage ? Math.ceil(c.sliderActive / c.cols) : c.isEndSlider() ? c.navPaginationItems.length - 1 : Math.floor(c.sliderActive / c.cols), c.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(a).addClass("cbp-nav-pagination-active")), c.customPagination && (a = c.options.scrollByPage ? Math.ceil(c.sliderActive / c.cols) : c.isEndSlider() ? c.customPaginationItems.length - 1 : Math.floor(c.sliderActive / c.cols), c.customPaginationItems.removeClass(c.customPaginationClass).eq(a).addClass(c.customPaginationClass))
            },
            isRewindNav: function() {
                var a = this;
                return !a.options.showNavigation || !(a.blocksOn.length <= a.cols) && !!a.options.rewindNav
            },
            sliderItemsLength: function() {
                return this.blocksOn.length <= this.cols
            },
            sliderLayout: function() {
                var b = this;
                b.blocksOn.each(function(c, d) {
                    var e = a(d).data("cbp");
                    e.leftNew = b.columnWidth * c, e.topNew = 0, b.sliderFreeSpaces.push({
                        topStart: e.heightAndGap
                    })
                }), b.getFreeSpacesForSlider(), b.$ul.width(b.columnWidth * b.blocksOn.length - b.options.gapVertical)
            },
            getFreeSpacesForSlider: function() {
                var a = this;
                a.freeSpaces = a.sliderFreeSpaces.slice(a.sliderActive, a.sliderActive + a.cols), a.freeSpaces.sort(function(a, b) {
                    return a.topStart > b.topStart ? 1 : a.topStart < b.topStart ? -1 : void 0
                })
            },
            updateSliderPosition: function() {
                var a = this,
                    b = -a.sliderActive * a.columnWidth;
                e.private.modernBrowser ? a.$ul[0].style[e.private.transform] = "translate3d(" + b + "px, 0px, 0)" : a.$ul[0].style.left = b + "px", a.getFreeSpacesForSlider(), a.resizeMainContainer()
            },
            dragSlider: function() {
                function f(b) {
                    if (!q.sliderItemsLength()) {
                        if (u ? p = b : b.preventDefault(), q.options.auto && q.stopSliderAuto(), s) return void a(m).one("click.cbp", function() {
                            return !1
                        });
                        m = a(b.target), k = j(b).x, l = 0, n = -q.sliderActive * q.columnWidth, o = q.columnWidth * (q.blocksOn.length - q.cols), r.on(t.move, h), r.on(t.end, g), q.$obj.addClass("cbp-mode-slider-dragStart")
                    }
                }

                function g(a) {
                    q.$obj.removeClass("cbp-mode-slider-dragStart"), s = !0, 0 !== l ? (m.one("click.cbp", function(a) {
                        return !1
                    }), requestAnimationFrame(function() {
                        q.jumpDragToSlider(l), q.$ul.one(e.private.transitionend, i)
                    })) : i.call(q), r.off(t.move), r.off(t.end)
                }

                function h(a) {
                    l = k - j(a).x, (l > 8 || l < -8) && a.preventDefault(), q.isDrag = !0;
                    var b = n - l;
                    l < 0 && l < n ? b = (n - l) / 5 : l > 0 && n - l < -o && (b = -o + (o + n - l) / 5), e.private.modernBrowser ? q.$ul[0].style[e.private.transform] = "translate3d(" + b + "px, 0px, 0)" : q.$ul[0].style.left = b + "px"
                }

                function i() {
                    if (s = !1, q.isDrag = !1, q.options.auto) {
                        if (q.mouseIsEntered) return;
                        q.startSliderAuto()
                    }
                }

                function j(a) {
                    return a.originalEvent !== d && a.originalEvent.touches !== d && (a = a.originalEvent.touches[0]), {
                        x: a.pageX,
                        y: a.pageY
                    }
                }
                var k, l, m, n, o, p, q = this,
                    r = a(c),
                    s = !1,
                    t = {},
                    u = !1;
                q.isDrag = !1, "ontouchstart" in b || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (t = {
                    start: "touchstart.cbp",
                    move: "touchmove.cbp",
                    end: "touchend.cbp"
                }, u = !0) : t = {
                    start: "mousedown.cbp",
                    move: "mousemove.cbp",
                    end: "mouseup.cbp"
                }, q.$ul.on(t.start, f)
            },
            sliderLayoutReset: function() {
                var a = this;
                a.freeSpaces = [], a.sliderFreeSpaces = []
            }
        })
    }(jQuery, window, document), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function() {
        for (var a = 0, b = ["moz", "webkit"], c = 0; c < b.length && !window.requestAnimationFrame; c++) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
            var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - a)),
                f = window.setTimeout(function() {
                    b(d + e)
                }, e);
            return a = d + e, f
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this;
            b.parent = a, a.filterLayout = b.filterLayout, a.registerEvent("computeBlocksFinish", function(b) {
                a.blocksOn2On = a.blocksOnInitial.filter(b), a.blocksOn2Off = a.blocksOnInitial.not(b)
            })
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.filterLayout = function() {
            function b() {
                c.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(b, c) {
                    var d = a(c).data("cbp");
                    d.left = d.leftNew, d.top = d.topNew, c.style.left = d.left + "px", c.style.top = d.top + "px", c.style[f.private.transform] = ""
                }), c.blocksOff.addClass("cbp-item-off"), c.$obj.removeClass("cbp-animation-" + c.options.animationType), c.filterFinish()
            }
            var c = this;
            c.$obj.addClass("cbp-animation-" + c.options.animationType), c.blocksOn2On.addClass("cbp-item-on2on").each(function(b, c) {
                var d = a(c).data("cbp");
                c.style[f.private.transform] = "translate3d(" + (d.leftNew - d.left) + "px, " + (d.topNew - d.top) + "px, 0)"
            }), c.blocksOn2Off.addClass("cbp-item-on2off"), c.blocksOff2On = c.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(b, c) {
                var d = a(c).data("cbp");
                c.style.left = d.leftNew + "px", c.style.top = d.topNew + "px"
            }), c.blocksOn2Off.length ? c.blocksOn2Off.last().data("cbp").wrapper.one(f.private.animationend, b) : c.blocksOff2On.length ? c.blocksOff2On.last().data("cbp").wrapper.one(f.private.animationend, b) : b(), c.resizeMainContainer()
        }, e.prototype.destroy = function() {
            var a = this.parent;
            a.$obj.removeClass("cbp-animation-" + a.options.animationType)
        }, f.plugins.animationClassic = function(b) {
            return !f.private.modernBrowser || a.inArray(b.options.animationType, ["boxShadow", "fadeOut", "flipBottom", "flipOut", "quicksand", "scaleSides", "skew"]) < 0 ? null : new e(b)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this;
            b.parent = a, a.filterLayout = b.filterLayout
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.filterLayout = function() {
            function b() {
                c.wrapper[0].removeChild(d), "sequentially" === c.options.animationType && c.blocksOn.each(function(b, c) {
                    a(c).data("cbp").wrapper[0].style[f.private.animationDelay] = ""
                }), c.$obj.removeClass("cbp-animation-" + c.options.animationType), c.filterFinish()
            }
            var c = this,
                d = c.$ul[0].cloneNode(!0);
            d.setAttribute("class", "cbp-wrapper-helper"), c.wrapper[0].insertBefore(d, c.$ul[0]), requestAnimationFrame(function() {
                c.$obj.addClass("cbp-animation-" + c.options.animationType), c.blocksOff.addClass("cbp-item-off"), c.blocksOn.removeClass("cbp-item-off").each(function(b, d) {
                    var e = a(d).data("cbp");
                    e.left = e.leftNew, e.top = e.topNew, d.style.left = e.left + "px", d.style.top = e.top + "px", "sequentially" === c.options.animationType && (e.wrapper[0].style[f.private.animationDelay] = 60 * b + "ms")
                }), c.blocksOn.length ? c.blocksOn.last().data("cbp").wrapper.one(f.private.animationend, b) : c.blocksOnInitial.length ? c.blocksOnInitial.last().data("cbp").wrapper.one(f.private.animationend, b) : b(), c.resizeMainContainer()
            })
        }, e.prototype.destroy = function() {
            var a = this.parent;
            a.$obj.removeClass("cbp-animation-" + a.options.animationType)
        }, f.plugins.animationClone = function(b) {
            return !f.private.modernBrowser || a.inArray(b.options.animationType, ["fadeOutTop", "slideLeft", "sequentially"]) < 0 ? null : new e(b)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this;
            b.parent = a, a.filterLayout = b.filterLayout
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.filterLayout = function() {
            function b() {
                c.wrapper[0].removeChild(d[0]), c.$obj.removeClass("cbp-animation-" + c.options.animationType), c.blocks.each(function(b, c) {
                    a(c).data("cbp").wrapper[0].style[f.private.animationDelay] = ""
                }), c.filterFinish()
            }
            var c = this,
                d = c.$ul.clone(!0, !0);
            d[0].setAttribute("class", "cbp-wrapper-helper"), c.wrapper[0].insertBefore(d[0], c.$ul[0]);
            var e = d.find(".cbp-item").not(".cbp-item-off");
            c.sortBlocks(e, "top"), e.children(".cbp-item-wrapper").each(function(a, b) {
                b.style[f.private.animationDelay] = 50 * a + "ms"
            }), requestAnimationFrame(function() {
                c.$obj.addClass("cbp-animation-" + c.options.animationType), c.blocksOff.addClass("cbp-item-off"), c.blocksOn.removeClass("cbp-item-off").each(function(b, c) {
                    var d = a(c).data("cbp");
                    d.left = d.leftNew, d.top = d.topNew, c.style.left = d.left + "px", c.style.top = d.top + "px", d.wrapper[0].style[f.private.animationDelay] = 50 * b + "ms"
                });
                var d = c.blocksOn.length,
                    g = e.length;
                0 === d && 0 === g ? b() : d < g ? e.last().children(".cbp-item-wrapper").one(f.private.animationend, b) : c.blocksOn.last().data("cbp").wrapper.one(f.private.animationend, b), c.resizeMainContainer()
            })
        }, e.prototype.destroy = function() {
            var a = this.parent;
            a.$obj.removeClass("cbp-animation-" + a.options.animationType)
        }, f.plugins.animationCloneDelay = function(b) {
            return !f.private.modernBrowser || a.inArray(b.options.animationType, ["3dflip", "flipOutDelay", "foldLeft", "frontRow", "rotateRoom", "rotateSides", "scaleDown", "slideDelay", "unfold"]) < 0 ? null : new e(b)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this;
            b.parent = a, a.filterLayout = b.filterLayout
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.filterLayout = function() {
            function b() {
                c.wrapper[0].removeChild(d), c.$obj.removeClass("cbp-animation-" + c.options.animationType), c.filterFinish()
            }
            var c = this,
                d = c.$ul[0].cloneNode(!0);
            d.setAttribute("class", "cbp-wrapper-helper"), c.wrapper[0].insertBefore(d, c.$ul[0]), requestAnimationFrame(function() {
                c.$obj.addClass("cbp-animation-" + c.options.animationType), c.blocksOff.addClass("cbp-item-off"), c.blocksOn.removeClass("cbp-item-off").each(function(b, c) {
                    var d = a(c).data("cbp");
                    d.left = d.leftNew, d.top = d.topNew, c.style.left = d.left + "px", c.style.top = d.top + "px"
                }), c.blocksOn.length ? c.$ul.one(f.private.animationend, b) : c.blocksOnInitial.length ? a(d).one(f.private.animationend, b) : b(), c.resizeMainContainer()
            })
        }, e.prototype.destroy = function() {
            var a = this.parent;
            a.$obj.removeClass("cbp-animation-" + a.options.animationType)
        }, f.plugins.animationWrapper = function(b) {
            return !f.private.modernBrowser || a.inArray(b.options.animationType, ["bounceBottom", "bounceLeft", "bounceTop", "moveLeft"]) < 0 ? null : new e(b)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this,
                c = a.options;
            b.parent = a, b.captionOn = c.caption, a.registerEvent("onMediaQueries", function(a) {
                a && a.hasOwnProperty("caption") ? b.captionOn !== a.caption && (b.destroy(), b.captionOn = a.caption, b.init()) : b.captionOn !== c.caption && (b.destroy(), b.captionOn = c.caption, b.init())
            }), b.init()
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.init = function() {
            var a = this;
            "" != a.captionOn && ("expand" === a.captionOn || f.private.modernBrowser || (a.parent.options.caption = a.captionOn = "minimal"), a.parent.$obj.addClass("cbp-caption-active cbp-caption-" + a.captionOn))
        }, e.prototype.destroy = function() {
            this.parent.$obj.removeClass("cbp-caption-active cbp-caption-" + this.captionOn)
        }, f.plugins.caption = function(a) {
            return new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, b.registerEvent("initFinish", function() {
                b.$obj.on("click.cbp", ".cbp-caption-defaultWrap", function(c) {
                    if (c.preventDefault(), !b.isAnimating) {
                        b.isAnimating = !0;
                        var d = a(this),
                            e = d.next(),
                            f = d.parent(),
                            g = {
                                position: "relative",
                                height: e.outerHeight(!0)
                            },
                            h = {
                                position: "relative",
                                height: 0
                            };
                        if (b.$obj.addClass("cbp-caption-expand-active"), f.hasClass("cbp-caption-expand-open")) {
                            var i = h;
                            h = g, g = i, f.removeClass("cbp-caption-expand-open")
                        }
                        e.css(g), b.$obj.one("pluginResize.cbp", function() {
                            b.isAnimating = !1, b.$obj.removeClass("cbp-caption-expand-active"), 0 === g.height && (f.removeClass("cbp-caption-expand-open"), e.attr("style", ""))
                        }), b.layoutAndAdjustment(), e.css(h), requestAnimationFrame(function() {
                            f.addClass("cbp-caption-expand-open"), e.css(g), b.triggerEvent("gridAdjust"), b.triggerEvent("resizeGrid")
                        })
                    }
                })
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.destroy = function() {
            this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active")
        }, f.plugins.captionExpand = function(a) {
            return "expand" !== a.options.caption ? null : new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c), b.registerEvent("initEndWrite", function() {
                b.blocksOn.each(function(a, c) {
                    c.style[f.private.animationDelay] = a * b.options.displayTypeSpeed + "ms"
                }), b.$obj.addClass("cbp-displayType-bottomToTop"), b.blocksOn.last().one(f.private.animationend, function() {
                    b.$obj.removeClass("cbp-displayType-bottomToTop"), b.blocksOn.each(function(a, b) {
                        b.style[f.private.animationDelay] = ""
                    }), c.resolve()
                })
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor;
        f.plugins.displayBottomToTop = function(a) {
            return f.private.modernBrowser && "bottomToTop" === a.options.displayType && 0 !== a.blocksOn.length ? new e(a) : null
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c), b.registerEvent("initEndWrite", function() {
                b.obj.style[f.private.animationDuration] = b.options.displayTypeSpeed + "ms", b.$obj.addClass("cbp-displayType-fadeIn"), b.$obj.one(f.private.animationend, function() {
                    b.$obj.removeClass("cbp-displayType-fadeIn"), b.obj.style[f.private.animationDuration] = "", c.resolve()
                })
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor;
        f.plugins.displayFadeIn = function(a) {
            return !f.private.modernBrowser || "lazyLoading" !== a.options.displayType && "fadeIn" !== a.options.displayType || 0 === a.blocksOn.length ? null : new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c), b.registerEvent("initEndWrite", function() {
                b.obj.style[f.private.animationDuration] = b.options.displayTypeSpeed + "ms", b.$obj.addClass("cbp-displayType-fadeInToTop"), b.$obj.one(f.private.animationend, function() {
                    b.$obj.removeClass("cbp-displayType-fadeInToTop"), b.obj.style[f.private.animationDuration] = "", c.resolve()
                })
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor;
        f.plugins.displayFadeInToTop = function(a) {
            return f.private.modernBrowser && "fadeInToTop" === a.options.displayType && 0 !== a.blocksOn.length ? new e(a) : null
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = a.Deferred();
            b.pushQueue("delayFrame", c), b.registerEvent("initEndWrite", function() {
                b.blocksOn.each(function(a, c) {
                    c.style[f.private.animationDelay] = a * b.options.displayTypeSpeed + "ms"
                }), b.$obj.addClass("cbp-displayType-sequentially"), b.blocksOn.last().one(f.private.animationend, function() {
                    b.$obj.removeClass("cbp-displayType-sequentially"), b.blocksOn.each(function(a, b) {
                        b.style[f.private.animationDelay] = ""
                    }), c.resolve()
                })
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor;
        f.plugins.displaySequentially = function(a) {
            return f.private.modernBrowser && "sequentially" === a.options.displayType && 0 !== a.blocksOn.length ? new e(a) : null
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.filters = a(b.options.filters), c.filterData = [], b.registerEvent("afterPlugins", function(a) {
                c.filterFromUrl(), c.registerFilter()
            }), b.registerEvent("resetFiltersVisual", function() {
                var d = b.options.defaultFilter.split("|");
                c.filters.each(function(b, c) {
                    var e = a(c).find(".cbp-filter-item");
                    a.each(d, function(a, b) {
                        var c = e.filter('[data-filter="' + b + '"]');
                        if (c.length) return c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active"), d.splice(a, 1), !1
                    })
                }), b.defaultFilter = b.options.defaultFilter
            })
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.registerFilter = function() {
            var b = this,
                c = b.parent,
                d = c.defaultFilter.split("|");
            b.wrap = b.filters.find(".cbp-l-filters-dropdownWrap").on({
                "mouseover.cbp": function() {
                    a(this).addClass("cbp-l-filters-dropdownWrap-open")
                },
                "mouseleave.cbp": function() {
                    a(this).removeClass("cbp-l-filters-dropdownWrap-open")
                }
            }), b.filters.each(function(e, f) {
                var g = a(f),
                    h = "*",
                    i = g.find(".cbp-filter-item"),
                    j = {};
                g.hasClass("cbp-l-filters-dropdown") && (j.wrap = g.find(".cbp-l-filters-dropdownWrap"), j.header = g.find(".cbp-l-filters-dropdownHeader"), j.headerText = j.header.text()), c.$obj.cubeportfolio("showCounter", i), a.each(d, function(a, b) {
                    if (i.filter('[data-filter="' + b + '"]').length) return h = b, d.splice(a, 1), !1
                }), a.data(f, "filterName", h), b.filterData.push(f), b.filtersCallback(j, i.filter('[data-filter="' + h + '"]')), i.on("click.cbp", function() {
                    var d = a(this);
                    if (!d.hasClass("cbp-filter-item-active") && !c.isAnimating) {
                        b.filtersCallback(j, d), a.data(f, "filterName", d.data("filter"));
                        var e = a.map(b.filterData, function(b, c) {
                            var d = a.data(b, "filterName");
                            return "" !== d && "*" !== d ? d : null
                        });
                        e.length < 1 && (e = ["*"]);
                        var g = e.join("|");
                        c.defaultFilter !== g && c.$obj.cubeportfolio("filter", g)
                    }
                })
            })
        }, e.prototype.filtersCallback = function(b, c) {
            a.isEmptyObject(b) || (b.wrap.trigger("mouseleave.cbp"), b.headerText ? b.headerText = "" : b.header.html(c.html())), c.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active")
        }, e.prototype.filterFromUrl = function() {
            var a = /#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);
            null !== a && (this.parent.defaultFilter = decodeURIComponent(a[1]))
        }, e.prototype.destroy = function() {
            var a = this;
            a.filters.find(".cbp-filter-item").off(".cbp"), a.wrap.off(".cbp")
        }, f.plugins.filters = function(a) {
            return "" === a.options.filters ? null : new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = b.options.gapVertical,
                d = b.options.gapHorizontal;
            b.registerEvent("onMediaQueries", function(e) {
                b.options.gapVertical = e && e.hasOwnProperty("gapVertical") ? e.gapVertical : c, b.options.gapHorizontal = e && e.hasOwnProperty("gapHorizontal") ? e.gapHorizontal : d, b.blocks.each(function(c, d) {
                    var e = a(d).data("cbp");
                    e.widthAndGap = e.width + b.options.gapVertical, e.heightAndGap = e.height + b.options.gapHorizontal
                })
            })
        }
        var f = a.fn.cubeportfolio.constructor;
        f.plugins.changeGapOnMediaQueries = function(a) {
            return new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.options = a.extend({}, g, c.parent.options.plugins.inlineSlider), c.runInit(), b.registerEvent("addItemsToDOM", function() {
                c.runInit()
            })
        }

        function f(a) {
            var b = this;
            a.hasClass("cbp-slider-inline-ready") || (a.addClass("cbp-slider-inline-ready"), b.items = a.find(".cbp-slider-wrapper").children(".cbp-slider-item"), b.active = b.items.filter(".cbp-slider-item--active").index(), b.total = b.items.length - 1, b.updateLeft(), a.find(".cbp-slider-next").on("click.cbp", function(a) {
                a.preventDefault(), b.active < b.total ? (b.active++, b.updateLeft()) : b.active === b.total && (b.active = 0, b.updateLeft())
            }), a.find(".cbp-slider-prev").on("click.cbp", function(a) {
                a.preventDefault(), b.active > 0 ? (b.active--, b.updateLeft()) : 0 === b.active && (b.active = b.total, b.updateLeft())
            }))
        }
        var g = {},
            h = a.fn.cubeportfolio.constructor;
        f.prototype.updateLeft = function() {
            var a = this;
            a.items.removeClass("cbp-slider-item--active"), a.items.eq(a.active).addClass("cbp-slider-item--active"), a.items.each(function(b, c) {
                c.style.left = b - a.active + "00%"
            })
        }, e.prototype.runInit = function() {
            var b = this;
            b.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(c, d) {
                var e = a(d),
                    g = e.find(".cbp-slider-item--active").find("img")[0];
                g.hasAttribute("data-cbp-src") ? b.parent.$obj.on("lazyLoad.cbp", function(a, b) {
                    b.src === g.src && new f(e)
                }) : new f(e)
            })
        }, e.prototype.destroy = function() {
            var b = this;
            b.parent.$obj.find(".cbp-slider-next").off("click.cbp"), b.parent.$obj.find(".cbp-slider-prev").off("click.cbp"), b.parent.$obj.off("lazyLoad.cbp"), b.parent.$obj.find(".cbp-slider-inline").each(function(b, c) {
                var d = a(c);
                d.removeClass("cbp-slider-inline-ready");
                var e = d.find(".cbp-slider-item");
                e.removeClass("cbp-slider-item--active"), e.removeAttr("style"), e.eq(0).addClass("cbp-slider-item--active")
            })
        }, h.plugins.inlineSlider = function(a) {
            return new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.options = a.extend({}, f, c.parent.options.plugins.lazyLoad), b.registerEvent("initFinish", function() {
                c.loadImages(), b.registerEvent("resizeMainContainer", function() {
                    c.loadImages()
                }), b.registerEvent("filterFinish", function() {
                    c.loadImages()
                }), g.private.lazyLoadScroll.initEvent({
                    instance: c,
                    fn: c.loadImages
                })
            }, !0)
        }
        var f = {
                loadingClass: "cbp-lazyload",
                threshold: 400
            },
            g = a.fn.cubeportfolio.constructor,
            h = a(b);
        g.private.lazyLoadScroll = new g.private.publicEvents("scroll.cbplazyLoad", 50), e.prototype.loadImages = function() {
            var b = this,
                c = b.parent.$obj.find("img").filter("[data-cbp-src]");
            0 !== c.length && (b.screenHeight = h.height(), c.each(function(c, d) {
                var e = a(d.parentNode);
                if (!b.isElementInScreen(d)) return void e.addClass(b.options.loadingClass);
                var f = d.getAttribute("data-cbp-src");
                null === b.parent.checkSrc(a("<img>").attr("src", f)) ? (b.removeLazyLoad(d, f), e.removeClass(b.options.loadingClass)) : (e.addClass(b.options.loadingClass), a("<img>").on("load.cbp error.cbp", function() {
                    b.removeLazyLoad(d, f, e)
                }).attr("src", f))
            }))
        }, e.prototype.removeLazyLoad = function(b, c, d) {
            var e = this;
            b.src = c, b.removeAttribute("data-cbp-src"), e.parent.removeAttrImage(b), e.parent.$obj.trigger("lazyLoad.cbp", b), d && (g.private.modernBrowser ? a(b).one(g.private.transitionend, function() {
                d.removeClass(e.options.loadingClass)
            }) : d.removeClass(e.options.loadingClass))
        }, e.prototype.isElementInScreen = function(a) {
            var b = this,
                c = a.getBoundingClientRect(),
                d = c.bottom + b.options.threshold,
                e = b.screenHeight + d - (c.top - b.options.threshold);
            return d >= 0 && d <= e
        }, e.prototype.destroy = function() {
            g.private.lazyLoadScroll.destroyEvent(this)
        }, g.plugins.lazyLoad = function(a) {
            return new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.options = a.extend({}, f, c.parent.options.plugins.loadMore), c.loadMore = a(c.options.selector).find(".cbp-l-loadMore-link"), 0 !== c.loadMore.length && (c.loadItems = c.loadMore.find(".cbp-l-loadMore-loadItems"), "0" === c.loadItems.text() && c.loadMore.addClass("cbp-l-loadMore-stop"), b.registerEvent("filterStart", function(a) {
                c.populateItems().then(function() {
                    var b = c.items.filter(a).length;
                    b > 0 ? (c.loadMore.removeClass("cbp-l-loadMore-stop"), c.loadItems.html(b)) : c.loadMore.addClass("cbp-l-loadMore-stop")
                })
            }), c[c.options.action]())
        }
        var f = {
                selector: "",
                action: "click",
                loadItems: 3
            },
            g = a.fn.cubeportfolio.constructor;
        e.prototype.populateItems = function() {
            var b = this;
            return b.items ? a.Deferred().resolve() : (b.items = a(), a.ajax({
                url: b.loadMore.attr("href"),
                type: "GET",
                dataType: "HTML"
            }).done(function(c) {
                var d = a.map(c.split(/\r?\n/), function(b, c) {
                    return a.trim(b)
                }).join("");
                0 !== d.length && a.each(a.parseHTML(d), function(c, d) {
                    a(d).hasClass("cbp-item") ? b.items = b.items.add(d) : a.each(d.children, function(c, d) {
                        a(d).hasClass("cbp-item") && (b.items = b.items.add(d))
                    })
                })
            }).fail(function() {
                b.items = null, b.loadMore.removeClass("cbp-l-loadMore-loading")
            }))
        }, e.prototype.populateInsertItems = function(b) {
            var c = this,
                d = [],
                e = c.parent.defaultFilter,
                f = 0;
            return c.items.each(function(b, g) {
                return f !== c.options.loadItems && void(e && "*" !== e ? a(g).filter(e).length && (d.push(g), c.items[b] = null, f++) : (d.push(g), c.items[b] = null, f++))
            }), c.items = c.items.map(function(a, b) {
                return b
            }), 0 === d.length ? void c.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop") : void c.parent.$obj.cubeportfolio("append", d, b)
        }, e.prototype.click = function() {
            function a() {
                b.loadMore.removeClass("cbp-l-loadMore-loading");
                var a, c = b.parent.defaultFilter;
                a = c && "*" !== c ? b.items.filter(c).length : b.items.length, 0 === a ? b.loadMore.addClass("cbp-l-loadMore-stop") : b.loadItems.html(a)
            }
            var b = this;
            b.loadMore.on("click.cbp", function(c) {
                c.preventDefault(), b.parent.isAnimating || b.loadMore.hasClass("cbp-l-loadMore-stop") || (b.loadMore.addClass("cbp-l-loadMore-loading"), b.populateItems().then(function() {
                    b.populateInsertItems(a)
                }))
            })
        }, e.prototype.auto = function() {
            function c() {
                if (!h && !e.loadMore.hasClass("cbp-l-loadMore-stop")) {
                    var a = e.loadMore.offset().top - 200,
                        b = f.scrollTop() + f.height();
                    a > b || (h = !0, e.populateItems().then(function() {
                        e.populateInsertItems(d)
                    }).fail(function() {
                        h = !1
                    }))
                }
            }

            function d() {
                var a, b = e.parent.defaultFilter;
                a = b && "*" !== b ? e.items.filter(b).length : e.items.length, 0 === a ? e.loadMore.removeClass("cbp-l-loadMore-loading").addClass("cbp-l-loadMore-stop") : (e.loadItems.html(a), f.trigger("scroll.loadMore")), h = !1, 0 === e.items.length && (g.private.loadMoreScroll.destroyEvent(e), e.parent.$obj.off("filterComplete.cbp"))
            }
            var e = this,
                f = a(b),
                h = !1;
            g.private.loadMoreScroll = new g.private.publicEvents("scroll.loadMore", 100), e.parent.$obj.one("initComplete.cbp", function() {
                e.loadMore.addClass("cbp-l-loadMore-loading").on("click.cbp", function(a) {
                    a.preventDefault()
                }), g.private.loadMoreScroll.initEvent({
                    instance: e,
                    fn: function() {
                        e.parent.isAnimating || c()
                    }
                }), e.parent.$obj.on("filterComplete.cbp", function() {
                    c()
                }), c()
            })
        }, e.prototype.destroy = function() {
            this.loadMore.off(".cbp"), g.private.loadMoreScroll && g.private.loadMoreScroll.destroyEvent(this)
        }, g.plugins.loadMore = function(a) {
            var b = a.options.plugins;
            return a.options.loadMore && (b.loadMore || (b.loadMore = {}), b.loadMore.selector = a.options.loadMore), a.options.loadMoreAction && (b.loadMore || (b.loadMore = {}), b.loadMore.action = a.options.loadMoreAction), b.loadMore && b.loadMore.selector ? new e(a) : null
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(a) {
            var b = this;
            b.parent = a, a.options.lightboxShowCounter === !1 && (a.options.lightboxCounter = ""), a.options.singlePageShowCounter === !1 && (a.options.singlePageCounter = ""), a.registerEvent("initStartRead", function() {
                b.run()
            }, !0)
        }
        var f = a.fn.cubeportfolio.constructor,
            g = {
                delay: 0
            },
            h = {
                init: function(b, d) {
                    var e, f = this;
                    if (f.cubeportfolio = b, f.type = d, f.isOpen = !1, f.options = f.cubeportfolio.options, "lightbox" === d && (f.cubeportfolio.registerEvent("resizeWindow", function() {
                            f.resizeImage()
                        }), f.localOptions = a.extend({}, g, f.cubeportfolio.options.plugins.lightbox)), "singlePageInline" === d) {
                        if (f.height = 0, f.createMarkupSinglePageInline(), f.cubeportfolio.registerEvent("resizeGrid", function() {
                                f.isOpen && f.close()
                            }), f.options.singlePageInlineDeeplinking) {
                            f.url = location.href, "#" === f.url.slice(-1) && (f.url = f.url.slice(0, -1));
                            var h = f.url.split("#cbpi="),
                                i = h.shift();
                            a.each(h, function(b, c) {
                                if (f.cubeportfolio.blocksOn.each(function(b, d) {
                                        var g = a(d).find(f.options.singlePageInlineDelegate + '[href="' + c + '"]');
                                        if (g.length) return e = g, !1
                                    }), e) return !1
                            }), e && f.cubeportfolio.registerEvent("initFinish", function() {
                                f.openSinglePageInline(f.cubeportfolio.blocksOn, e[0])
                            }, !0)
                        }
                        return void(f.localOptions = a.extend({}, g, f.cubeportfolio.options.plugins.singlePageInline))
                    }
                    if (f.createMarkup(), "singlePage" === d) {
                        if (f.cubeportfolio.registerEvent("resizeWindow", function() {
                                if (f.options.singlePageStickyNavigation) {
                                    var a = f.contentWrap[0].clientWidth;
                                    a > 0 && (f.navigationWrap.width(a), f.navigation.width(a))
                                }
                            }), f.options.singlePageDeeplinking) {
                            f.url = location.href, "#" === f.url.slice(-1) && (f.url = f.url.slice(0, -1));
                            var h = f.url.split("#cbp="),
                                i = h.shift();
                            if (a.each(h, function(b, c) {
                                    if (f.cubeportfolio.blocksOn.each(function(b, d) {
                                            var g = a(d).find(f.options.singlePageDelegate + '[href="' + c + '"]');
                                            if (g.length) return e = g, !1
                                        }), e) return !1
                                }), e) {
                                f.url = i;
                                var j = e,
                                    k = j.attr("data-cbp-singlePage"),
                                    l = [];
                                k ? l = j.closest(a(".cbp-item")).find('[data-cbp-singlePage="' + k + '"]') : f.cubeportfolio.blocksOn.each(function(b, c) {
                                    var d = a(c);
                                    d.not(".cbp-item-off") && d.find(f.options.singlePageDelegate).each(function(b, c) {
                                        a(c).attr("data-cbp-singlePage") || l.push(c)
                                    })
                                }), f.openSinglePage(l, e[0])
                            } else if (h.length) {
                                var m = c.createElement("a");
                                m.setAttribute("href", h[0]), f.openSinglePage([m], m)
                            }
                        }
                        f.localOptions = a.extend({}, g, f.cubeportfolio.options.plugins.singlePage)
                    }
                },
                createMarkup: function() {
                    var b = this,
                        e = "";
                    "singlePage" === b.type && "left" !== b.options.singlePageAnimation && (e = " cbp-popup-singlePage-" + b.options.singlePageAnimation), b.wrap = a("<div/>", {
                        class: "cbp-popup-wrap cbp-popup-" + b.type + e,
                        "data-action": "lightbox" === b.type ? "close" : ""
                    }).on("click.cbp", function(c) {
                        if (!b.stopEvents) {
                            var d = a(c.target).attr("data-action");
                            b[d] && (b[d](), c.preventDefault())
                        }
                    }), "singlePage" === b.type ? (b.contentWrap = a("<div/>", {
                        class: "cbp-popup-content-wrap"
                    }).appendTo(b.wrap), "ios" === f.private.browser && b.contentWrap.css("overflow", "auto"), b.content = a("<div/>", {
                        class: "cbp-popup-content"
                    }).appendTo(b.contentWrap)) : b.content = a("<div/>", {
                        class: "cbp-popup-content"
                    }).appendTo(b.wrap), a("<div/>", {
                        class: "cbp-popup-loadingBox"
                    }).appendTo(b.wrap), "ie8" === f.private.browser && (b.bg = a("<div/>", {
                        class: "cbp-popup-ie8bg",
                        "data-action": "lightbox" === b.type ? "close" : ""
                    }).appendTo(b.wrap)), "singlePage" === b.type && b.options.singlePageStickyNavigation === !1 ? b.navigationWrap = a("<div/>", {
                        class: "cbp-popup-navigation-wrap"
                    }).appendTo(b.contentWrap) : b.navigationWrap = a("<div/>", {
                        class: "cbp-popup-navigation-wrap"
                    }).appendTo(b.wrap), b.navigation = a("<div/>", {
                        class: "cbp-popup-navigation"
                    }).appendTo(b.navigationWrap), b.closeButton = a("<div/>", {
                        class: "cbp-popup-close",
                        title: "Close (Esc arrow key)",
                        "data-action": "close"
                    }).appendTo(b.navigation), b.nextButton = a("<div/>", {
                        class: "cbp-popup-next",
                        title: "Next (Right arrow key)",
                        "data-action": "next"
                    }).appendTo(b.navigation), b.prevButton = a("<div/>", {
                        class: "cbp-popup-prev",
                        title: "Previous (Left arrow key)",
                        "data-action": "prev"
                    }).appendTo(b.navigation), "singlePage" === b.type && (b.options.singlePageCounter && (b.counter = a(b.options.singlePageCounter).appendTo(b.navigation), b.counter.text("")), b.content.on("click.cbp", b.options.singlePageDelegate, function(a) {
                        a.preventDefault();
                        var e, f, g = b.dataArray.length,
                            h = this.getAttribute("href");
                        for (e = 0; e < g; e++)
                            if (b.dataArray[e].url === h) {
                                f = e;
                                break
                            }
                        if (f === d) {
                            var i = c.createElement("a");
                            i.setAttribute("href", h), b.dataArray = [{
                                url: h,
                                element: i
                            }], b.counterTotal = 1, b.nextButton.hide(), b.prevButton.hide(), b.singlePageJumpTo(0)
                        } else b.singlePageJumpTo(f - b.current)
                    }), b.contentWrap.on("mousewheel.cbp DOMMouseScroll.cbp", function(a) {
                        a.stopImmediatePropagation()
                    })), a(c).on("keydown.cbp", function(a) {
                        b.isOpen && (b.stopEvents || (i && a.stopImmediatePropagation(), 37 === a.keyCode ? b.prev() : 39 === a.keyCode ? b.next() : 27 === a.keyCode && b.close()))
                    })
                },
                createMarkupSinglePageInline: function() {
                    var b = this;
                    b.wrap = a("<div/>", {
                        class: "cbp-popup-singlePageInline"
                    }).on("click.cbp", function(c) {
                        if (!b.stopEvents) {
                            var d = a(c.target).attr("data-action");
                            d && b[d] && (b[d](), c.preventDefault())
                        }
                    }), b.content = a("<div/>", {
                        class: "cbp-popup-content"
                    }).appendTo(b.wrap), b.navigation = a("<div/>", {
                        class: "cbp-popup-navigation"
                    }).appendTo(b.wrap), b.closeButton = a("<div/>", {
                        class: "cbp-popup-close",
                        title: "Close (Esc arrow key)",
                        "data-action": "close"
                    }).appendTo(b.navigation)
                },
                destroy: function() {
                    var b = this,
                        d = a("body");
                    a(c).off("keydown.cbp"), d.off("click.cbp", b.options.lightboxDelegate), d.off("click.cbp", b.options.singlePageDelegate), b.content.off("click.cbp", b.options.singlePageDelegate), b.cubeportfolio.$obj.off("click.cbp", b.options.singlePageInlineDelegate), b.cubeportfolio.$obj.off("click.cbp", b.options.lightboxDelegate), b.cubeportfolio.$obj.off("click.cbp", b.options.singlePageDelegate), b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), b.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), b.wrap.remove()
                },
                openLightbox: function(d, e) {
                    var f, g, h = this,
                        j = 0,
                        k = [];
                    if (!h.isOpen) {
                        if (i = !0, h.isOpen = !0, h.stopEvents = !1, h.dataArray = [], h.current = null, f = e.getAttribute("href"), null === f) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                        a.each(d, function(b, c) {
                            var d, e = c.getAttribute("href"),
                                g = e,
                                i = "isImage";
                            if (a.inArray(e, k) === -1) {
                                if (f === e) h.current = j;
                                else if (!h.options.lightboxGallery) return;
                                if (/youtu\.?be/i.test(e)) {
                                    var l = e.lastIndexOf("v=") + 2;
                                    1 === l && (l = e.lastIndexOf("/") + 1), d = e.substring(l), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//www.youtube.com/embed/" + d, i = "isYoutube"
                                } else /vimeo\.com/i.test(e) ? (d = e.substring(e.lastIndexOf("/") + 1), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//player.vimeo.com/video/" + d, i = "isVimeo") : /www\.ted\.com/i.test(e) ? (g = "http://embed.ted.com/talks/" + e.substring(e.lastIndexOf("/") + 1) + ".html", i = "isTed") : /soundcloud\.com/i.test(e) ? (g = e, i = "isSoundCloud") : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e) ? (g = e.indexOf("|") !== -1 ? e.split("|") : e.split("%7C"), i = "isSelfHostedVideo") : /\.mp3$/i.test(e) && (g = e, i = "isSelfHostedAudio");
                                h.dataArray.push({
                                    src: g,
                                    title: c.getAttribute(h.options.lightboxTitleSrc),
                                    type: i
                                }), j++
                            }
                            k.push(e)
                        }), h.counterTotal = h.dataArray.length, 1 === h.counterTotal ? (h.nextButton.hide(), h.prevButton.hide(), h.dataActionImg = "") : (h.nextButton.show(), h.prevButton.show(), h.dataActionImg = 'data-action="next"'), h.wrap.appendTo(c.body), h.scrollTop = a(b).scrollTop(), h.originalStyle = a("html").attr("style"), a("html").css({
                            overflow: "hidden",
                            marginRight: b.innerWidth - a(c).width()
                        }), h.wrap.addClass("cbp-popup-transitionend"), h.wrap.show(), g = h.dataArray[h.current], h[g.type](g)
                    }
                },
                openSinglePage: function(d, e) {
                    var g, h = this,
                        i = 0,
                        j = [];
                    if (!h.isOpen) {
                        if (h.cubeportfolio.singlePageInline && h.cubeportfolio.singlePageInline.isOpen && h.cubeportfolio.singlePageInline.close(), h.isOpen = !0, h.stopEvents = !1, h.dataArray = [], h.current = null, g = e.getAttribute("href"), null === g) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                        if (a.each(d, function(b, c) {
                                var d = c.getAttribute("href");
                                a.inArray(d, j) === -1 && (g === d && (h.current = i), h.dataArray.push({
                                    url: d,
                                    element: c
                                }), i++), j.push(d)
                            }), h.counterTotal = h.dataArray.length, 1 === h.counterTotal ? (h.nextButton.hide(), h.prevButton.hide()) : (h.nextButton.show(), h.prevButton.show()), h.wrap.appendTo(c.body), h.scrollTop = a(b).scrollTop(), h.contentWrap.scrollTop(0), h.wrap.show(), h.finishOpen = 2, h.navigationMobile = a(), h.wrap.one(f.private.transitionend, function() {
                                a("html").css({
                                    overflow: "hidden",
                                    marginRight: b.innerWidth - a(c).width()
                                }), h.wrap.addClass("cbp-popup-transitionend"), h.options.singlePageStickyNavigation && (h.wrap.addClass("cbp-popup-singlePage-sticky"), h.navigationWrap.width(h.contentWrap[0].clientWidth)), h.finishOpen--, h.finishOpen <= 0 && h.updateSinglePageIsOpen.call(h)
                            }), "ie8" !== f.private.browser && "ie9" !== f.private.browser || (a("html").css({
                                overflow: "hidden",
                                marginRight: b.innerWidth - a(c).width()
                            }), h.wrap.addClass("cbp-popup-transitionend"), h.options.singlePageStickyNavigation && (h.navigationWrap.width(h.contentWrap[0].clientWidth), setTimeout(function() {
                                h.wrap.addClass("cbp-popup-singlePage-sticky")
                            }, 1e3)), h.finishOpen--), h.wrap.addClass("cbp-popup-loading"), h.wrap.offset(), h.wrap.addClass("cbp-popup-singlePage-open"), h.options.singlePageDeeplinking && (h.url = h.url.split("#cbp=")[0], location.href = h.url + "#cbp=" + h.dataArray[h.current].url), a.isFunction(h.options.singlePageCallback) && h.options.singlePageCallback.call(h, h.dataArray[h.current].url, h.dataArray[h.current].element), "ios" === f.private.browser) {
                            var k = h.contentWrap[0];
                            k.addEventListener("touchstart", function() {
                                var a = k.scrollTop,
                                    b = k.scrollHeight,
                                    c = a + k.offsetHeight;
                                0 === a ? k.scrollTop = 1 : c === b && (k.scrollTop = a - 1)
                            })
                        }
                    }
                },
                openSinglePageInline: function(c, d, e) {
                    var f, g, h, i, j = this;
                    if (e = e || !1, j.fromOpen = e, j.storeBlocks = c, j.storeCurrentBlock = d, j.isOpen) return g = j.cubeportfolio.blocksOn.index(a(d).closest(".cbp-item")), void(j.dataArray[j.current].url !== d.getAttribute("href") || j.current !== g ? j.cubeportfolio.singlePageInline.close("open", {
                        blocks: c,
                        currentBlock: d,
                        fromOpen: !0
                    }) : j.close());
                    if (j.isOpen = !0, j.stopEvents = !1, j.dataArray = [], j.current = null, f = d.getAttribute("href"), null === f) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    if (h = a(d).closest(".cbp-item")[0], c.each(function(a, b) {
                            h === b && (j.current = a)
                        }), j.dataArray[j.current] = {
                            url: f,
                            element: d
                        }, i = a(j.dataArray[j.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"), j.counterTotal = c.length, j.wrap.insertBefore(j.cubeportfolio.wrapper), j.topDifference = 0, "top" === j.options.singlePageInlinePosition) j.blocksToMove = c, j.top = 0;
                    else if ("bottom" === j.options.singlePageInlinePosition) j.blocksToMove = a(), j.top = j.cubeportfolio.height;
                    else if ("above" === j.options.singlePageInlinePosition) {
                        var k = a(c[j.current]),
                            l = k.data("cbp").top,
                            m = l + k.height();
                        j.top = l, j.blocksToMove = a(), c.each(function(b, c) {
                            var d = a(c),
                                e = d.data("cbp").top,
                                f = e + d.height();
                            f <= l || (e >= l && (j.blocksToMove = j.blocksToMove.add(c)), e < l && f > l && (j.top = f + j.options.gapHorizontal, f - l > j.topDifference && (j.topDifference = f - l + j.options.gapHorizontal)))
                        }), j.top = Math.max(j.top - j.options.gapHorizontal, 0)
                    } else {
                        var k = a(c[j.current]),
                            l = k.data("cbp").top,
                            m = l + k.height();
                        j.top = m, j.blocksToMove = a(), c.each(function(b, c) {
                            var d = a(c),
                                e = d.height(),
                                f = d.data("cbp").top,
                                g = f + e;
                            if (!(g <= m)) return f >= m - e / 2 ? void(j.blocksToMove = j.blocksToMove.add(c)) : void(g > m && f < m && (g > j.top && (j.top = g), g - m > j.topDifference && (j.topDifference = g - m)))
                        })
                    }
                    if (j.wrap[0].style.height = j.wrap.outerHeight(!0) + "px", j.deferredInline = a.Deferred(), j.options.singlePageInlineInFocus) {
                        j.scrollTop = a(b).scrollTop();
                        var n = j.cubeportfolio.$obj.offset().top + j.top - 100;
                        j.scrollTop !== n ? a("html,body").animate({
                            scrollTop: n
                        }, 350).promise().then(function() {
                            j.resizeSinglePageInline(), j.deferredInline.resolve()
                        }) : (j.resizeSinglePageInline(), j.deferredInline.resolve())
                    } else j.resizeSinglePageInline(), j.deferredInline.resolve();
                    j.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"), j.wrap.css({
                        top: j.top
                    }), j.options.singlePageInlineDeeplinking && (j.url = j.url.split("#cbpi=")[0], location.href = j.url + "#cbpi=" + j.dataArray[j.current].url), a.isFunction(j.options.singlePageInlineCallback) && j.options.singlePageInlineCallback.call(j, j.dataArray[j.current].url, j.dataArray[j.current].element)
                },
                resizeSinglePageInline: function() {
                    var a = this;
                    a.height = 0 === a.top || a.top === a.cubeportfolio.height ? a.wrap.outerHeight(!0) : a.wrap.outerHeight(!0) - a.options.gapHorizontal, a.height += a.topDifference, a.storeBlocks.each(function(a, b) {
                        f.private.modernBrowser ? b.style[f.private.transform] = "" : b.style.marginTop = ""
                    }), a.blocksToMove.each(function(b, c) {
                        f.private.modernBrowser ? c.style[f.private.transform] = "translate3d(0px, " + a.height + "px, 0)" : c.style.marginTop = a.height + "px"
                    }), a.cubeportfolio.obj.style.height = a.cubeportfolio.height + a.height + "px"
                },
                revertResizeSinglePageInline: function() {
                    var b = this;
                    b.deferredInline = a.Deferred(), b.storeBlocks.each(function(a, b) {
                        f.private.modernBrowser ? b.style[f.private.transform] = "" : b.style.marginTop = ""
                    }), b.cubeportfolio.obj.style.height = b.cubeportfolio.height + "px"
                },
                appendScriptsToWrap: function(a) {
                    var b = this,
                        d = 0,
                        e = function(f) {
                            var g = c.createElement("script"),
                                h = f.src;
                            g.type = "text/javascript", g.readyState ? g.onreadystatechange = function() {
                                "loaded" != g.readyState && "complete" != g.readyState || (g.onreadystatechange = null, d++, a[d] && e(a[d]))
                            } : g.onload = function() {
                                d++, a[d] && e(a[d])
                            }, h ? g.src = h : g.text = f.text, b.content[0].appendChild(g)
                        };
                    e(a[0])
                },
                updateSinglePage: function(b, c, d) {
                    var e, f = this;
                    f.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"), d === !1 && f.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"), f.counter && (e = a(f.getCounterMarkup(f.options.singlePageCounter, f.current + 1, f.counterTotal)), f.counter.text(e.text())), f.fromAJAX = {
                        html: b,
                        scripts: c
                    }, f.finishOpen--, f.finishOpen <= 0 && f.updateSinglePageIsOpen.call(f)
                },
                updateSinglePageIsOpen: function() {
                    var a, b = this;
                    b.wrap.addClass("cbp-popup-ready"), b.wrap.removeClass("cbp-popup-loading"), b.content.html(b.fromAJAX.html), b.fromAJAX.scripts && b.appendScriptsToWrap(b.fromAJAX.scripts), b.fromAJAX = {}, b.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"), a = b.content.find(".cbp-slider"), a.length ? (a.find(".cbp-slider-item").addClass("cbp-item"), b.slider = a.cubeportfolio({
                        layoutMode: "slider",
                        mediaQueries: [{
                            width: 1,
                            cols: 1
                        }],
                        gapHorizontal: 0,
                        gapVertical: 0,
                        caption: "",
                        coverRatio: ""
                    })) : b.slider = null, b.checkForSocialLinks(b.content), b.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp")
                },
                checkForSocialLinks: function(a) {
                    var b = this;
                    b.createFacebookShare(a.find(".cbp-social-fb")), b.createTwitterShare(a.find(".cbp-social-twitter")), b.createGooglePlusShare(a.find(".cbp-social-googleplus")), b.createPinterestShare(a.find(".cbp-social-pinterest"))
                },
                createFacebookShare: function(a) {
                    a.length && !a.attr("onclick") && a.attr("onclick", "window.open('http://www.facebook.com/sharer.php?u=" + encodeURIComponent(b.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")
                },
                createTwitterShare: function(a) {
                    a.length && !a.attr("onclick") && a.attr("onclick", "window.open('https://twitter.com/intent/tweet?source=" + encodeURIComponent(b.location.href) + "&text=" + encodeURIComponent(c.title) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;")
                },
                createGooglePlusShare: function(a) {
                    a.length && !a.attr("onclick") && a.attr("onclick", "window.open('https://plus.google.com/share?url=" + encodeURIComponent(b.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;")
                },
                createPinterestShare: function(a) {
                    if (a.length && !a.attr("onclick")) {
                        var c = "",
                            d = this.content.find("img")[0];
                        d && (c = d.src), a.attr("onclick", "window.open('http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.location.href) + "&media=" + c + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;")
                    }
                },
                updateSinglePageInline: function(a, b) {
                    var c = this;
                    c.content.html(a), b && c.appendScriptsToWrap(b), c.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"), 0 !== c.localOptions.delay ? setTimeout(function() {
                        c.singlePageInlineIsOpen.call(c)
                    }, c.localOptions.delay) : c.singlePageInlineIsOpen.call(c)
                },
                singlePageInlineIsOpen: function() {
                    function a() {
                        b.wrap.addClass("cbp-popup-singlePageInline-ready"), b.wrap[0].style.height = "", b.resizeSinglePageInline(), b.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp")
                    }
                    var b = this;
                    b.cubeportfolio.loadImages(b.wrap, function() {
                        var c = b.content.find(".cbp-slider");
                        c.length ? (c.find(".cbp-slider-item").addClass("cbp-item"), c.one("initComplete.cbp", function() {
                            b.deferredInline.done(a)
                        }), c.on("pluginResize.cbp", function() {
                            b.deferredInline.done(a)
                        }), b.slider = c.cubeportfolio({
                            layoutMode: "slider",
                            displayType: "default",
                            mediaQueries: [{
                                width: 1,
                                cols: 1
                            }],
                            gapHorizontal: 0,
                            gapVertical: 0,
                            caption: "",
                            coverRatio: ""
                        })) : (b.slider = null, b.deferredInline.done(a)), b.checkForSocialLinks(b.content)
                    })
                },
                isImage: function(b) {
                    var c = this;
                    new Image;
                    c.tooggleLoading(!0), c.cubeportfolio.loadImages(a('<div><img src="' + b.src + '"></div>'), function() {
                        c.updateImagesMarkup(b.src, b.title, c.getCounterMarkup(c.options.lightboxCounter, c.current + 1, c.counterTotal)), c.tooggleLoading(!1)
                    })
                },
                isVimeo: function(a) {
                    var b = this;
                    b.updateVideoMarkup(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                isYoutube: function(a) {
                    var b = this;
                    b.updateVideoMarkup(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                isTed: function(a) {
                    var b = this;
                    b.updateVideoMarkup(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                isSoundCloud: function(a) {
                    var b = this;
                    b.updateVideoMarkup(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                isSelfHostedVideo: function(a) {
                    var b = this;
                    b.updateSelfHostedVideo(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                isSelfHostedAudio: function(a) {
                    var b = this;
                    b.updateSelfHostedAudio(a.src, a.title, b.getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
                },
                getCounterMarkup: function(a, b, c) {
                    if (!a.length) return "";
                    var d = {
                        current: b,
                        total: c
                    };
                    return a.replace(/\{\{current}}|\{\{total}}/gi, function(a) {
                        return d[a.slice(2, -2)]
                    })
                },
                updateSelfHostedVideo: function(a, b, c) {
                    var d, e = this;
                    e.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var f = '<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
                    for (d = 0; d < a.length; d++) /(\.mp4)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/mp4">' : /(\.ogg)|(\.ogv)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/ogg">' : /(\.webm)/i.test(a[d]) && (f += '<source src="' + a[d] + '" type="video/webm">');
                    f += 'Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>", e.content.html(f), e.wrap.addClass("cbp-popup-ready"), e.preloadNearbyImages()
                },
                updateSelfHostedAudio: function(a, b, c) {
                    var d = this;
                    d.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var e = '<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="' + a + '" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                    d.content.html(e), d.wrap.addClass("cbp-popup-ready"), d.preloadNearbyImages()
                },
                updateVideoMarkup: function(a, b, c) {
                    var d = this;
                    d.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var e = '<div class="cbp-popup-lightbox-iframe"><iframe src="' + a + '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                    d.content.html(e), d.wrap.addClass("cbp-popup-ready"), d.preloadNearbyImages()
                },
                updateImagesMarkup: function(a, b, c) {
                    var d = this;
                    d.wrap.removeClass("cbp-popup-lightbox-isIframe");
                    var e = '<div class="cbp-popup-lightbox-figure"><img src="' + a + '" class="cbp-popup-lightbox-img" ' + d.dataActionImg + ' /><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                    d.content.html(e), d.wrap.addClass("cbp-popup-ready"), d.resizeImage(), d.preloadNearbyImages()
                },
                next: function() {
                    var a = this;
                    a[a.type + "JumpTo"](1)
                },
                prev: function() {
                    var a = this;
                    a[a.type + "JumpTo"](-1)
                },
                lightboxJumpTo: function(a) {
                    var b, c = this;
                    c.current = c.getIndex(c.current + a), b = c.dataArray[c.current], c[b.type](b)
                },
                singlePageJumpTo: function(b) {
                    var c = this;
                    c.current = c.getIndex(c.current + b), a.isFunction(c.options.singlePageCallback) && (c.resetWrap(), c.contentWrap.scrollTop(0), c.wrap.addClass("cbp-popup-loading"), c.slider && f.private.resize.destroyEvent(a.data(c.slider[0], "cubeportfolio")), c.options.singlePageCallback.call(c, c.dataArray[c.current].url, c.dataArray[c.current].element), c.options.singlePageDeeplinking && (location.href = c.url + "#cbp=" + c.dataArray[c.current].url))
                },
                resetWrap: function() {
                    var a = this;
                    "singlePage" === a.type && a.options.singlePageDeeplinking && (location.href = a.url + "#"), "singlePageInline" === a.type && a.options.singlePageInlineDeeplinking && (location.href = a.url + "#")
                },
                getIndex: function(a) {
                    var b = this;
                    return a %= b.counterTotal, a < 0 && (a = b.counterTotal + a), a
                },
                close: function(c, d) {
                    function e() {
                        h.slider && f.private.resize.destroyEvent(a.data(h.slider[0], "cubeportfolio")), h.content.html(""), h.wrap.detach(), h.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"), "promise" === c && a.isFunction(d.callback) && d.callback.call(h.cubeportfolio)
                    }

                    function g() {
                        var d = a(b).scrollTop();
                        h.resetWrap(), a(b).scrollTop(d), h.options.singlePageInlineInFocus && "promise" !== c ? a("html,body").animate({
                            scrollTop: h.scrollTop
                        }, 350).promise().then(function() {
                            e()
                        }) : e()
                    }
                    var h = this;
                    h.isOpen = !1, "singlePageInline" === h.type ? "open" === c ? (h.wrap.removeClass("cbp-popup-singlePageInline-ready"), a(h.dataArray[h.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"), h.openSinglePageInline(d.blocks, d.currentBlock, d.fromOpen)) : (h.height = 0, h.revertResizeSinglePageInline(), h.wrap.removeClass("cbp-popup-singlePageInline-ready"), h.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"), h.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), f.private.modernBrowser ? h.wrap.one(f.private.transitionend, function() {
                        g()
                    }) : g()) : "singlePage" === h.type ? (h.resetWrap(), a(b).scrollTop(h.scrollTop), h.stopScroll = !0, h.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend cbp-popup-singlePage-open cbp-popup-singlePage-sticky"), a("html").css({
                        overflow: "",
                        marginRight: "",
                        position: ""
                    }), "ie8" !== f.private.browser && "ie9" !== f.private.browser || (h.slider && f.private.resize.destroyEvent(a.data(h.slider[0], "cubeportfolio")), h.content.html(""), h.wrap.detach()), h.wrap.one(f.private.transitionend, function() {
                        h.slider && f.private.resize.destroyEvent(a.data(h.slider[0], "cubeportfolio")), h.content.html(""), h.wrap.detach()
                    })) : (i = !1, h.originalStyle ? a("html").attr("style", h.originalStyle) : a("html").css({
                        overflow: "",
                        marginRight: ""
                    }), a(b).scrollTop(h.scrollTop), h.slider && f.private.resize.destroyEvent(a.data(h.slider[0], "cubeportfolio")), h.content.html(""), h.wrap.detach())
                },
                tooggleLoading: function(a) {
                    var b = this;
                    b.stopEvents = a, b.wrap[a ? "addClass" : "removeClass"]("cbp-popup-loading")
                },
                resizeImage: function() {
                    if (this.isOpen) {
                        var c = this.content.find("img"),
                            d = c.parent(),
                            e = a(b).height() - (d.outerHeight(!0) - d.height()) - this.content.find(".cbp-popup-lightbox-bottom").outerHeight(!0);
                        c.css("max-height", e + "px")
                    }
                },
                preloadNearbyImages: function() {
                    for (var a = this, b = [a.getIndex(a.current + 1), a.getIndex(a.current + 2), a.getIndex(a.current + 3), a.getIndex(a.current - 1), a.getIndex(a.current - 2), a.getIndex(a.current - 3)], c = b.length - 1; c >= 0; c--) "isImage" === a.dataArray[b[c]].type && a.cubeportfolio.checkSrc(a.dataArray[b[c]])
                }
            },
            i = !1,
            j = !1,
            k = !1;
        e.prototype.run = function() {
            var b = this,
                d = b.parent,
                e = a(c.body);
            d.lightbox = null, d.options.lightboxDelegate && !j && (j = !0, d.lightbox = Object.create(h), d.lightbox.init(d, "lightbox"), e.on("click.cbp", d.options.lightboxDelegate, function(c) {
                c.preventDefault();
                var e = a(this),
                    f = e.attr("data-cbp-lightbox"),
                    g = b.detectScope(e),
                    h = g.data("cubeportfolio"),
                    i = [];
                h ? h.blocksOn.each(function(b, c) {
                    var e = a(c);
                    e.not(".cbp-item-off") && e.find(d.options.lightboxDelegate).each(function(b, c) {
                        f ? a(c).attr("data-cbp-lightbox") === f && i.push(c) : i.push(c)
                    })
                }) : i = f ? g.find(d.options.lightboxDelegate + "[data-cbp-lightbox=" + f + "]") : g.find(d.options.lightboxDelegate), d.lightbox.openLightbox(i, e[0])
            })), d.singlePage = null, d.options.singlePageDelegate && !k && (k = !0, d.singlePage = Object.create(h), d.singlePage.init(d, "singlePage"), e.on("click.cbp", d.options.singlePageDelegate, function(c) {
                c.preventDefault();
                var e = a(this),
                    f = e.attr("data-cbp-singlePage"),
                    g = b.detectScope(e),
                    h = g.data("cubeportfolio"),
                    i = [];
                h ? h.blocksOn.each(function(b, c) {
                    var e = a(c);
                    e.not(".cbp-item-off") && e.find(d.options.singlePageDelegate).each(function(b, c) {
                        f ? a(c).attr("data-cbp-singlePage") === f && i.push(c) : i.push(c)
                    })
                }) : i = f ? g.find(d.options.singlePageDelegate + "[data-cbp-singlePage=" + f + "]") : g.find(d.options.singlePageDelegate), d.singlePage.openSinglePage(i, e[0])
            })), d.singlePageInline = null, d.options.singlePageInlineDelegate && (d.singlePageInline = Object.create(h), d.singlePageInline.init(d, "singlePageInline"), d.$obj.on("click.cbp", d.options.singlePageInlineDelegate, function(b) {
                b.preventDefault();
                var c = a.data(this, "cbp-locked"),
                    e = a.data(this, "cbp-locked", +new Date);
                (!c || e - c > 300) && d.singlePageInline.openSinglePageInline(d.blocksOn, this)
            }))
        }, e.prototype.detectScope = function(b) {
            var d, e, f;
            return d = b.closest(".cbp-popup-singlePageInline"), d.length ? (f = b.closest(".cbp", d[0]), f.length ? f : d) : (e = b.closest(".cbp-popup-singlePage"), e.length ? (f = b.closest(".cbp", e[0]), f.length ? f : e) : (f = b.closest(".cbp"), f.length ? f : a(c.body)))
        }, e.prototype.destroy = function() {
            var b = this.parent;
            a(c.body).off("click.cbp"), j = !1, k = !1, b.lightbox && b.lightbox.destroy(), b.singlePage && b.singlePage.destroy(), b.singlePageInline && b.singlePageInline.destroy()
        }, f.plugins.popUp = function(a) {
            return new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.searchInput = a(b.options.search), c.searchInput.each(function(b, c) {
                var d = c.getAttribute("data-search");
                d || (d = "*"), a.data(c, "searchData", {
                    value: c.value,
                    el: d
                })
            });
            var d = null;
            c.searchInput.on("keyup.cbp paste.cbp", function(b) {
                b.preventDefault();
                var e = a(this);
                clearTimeout(d), d = setTimeout(function() {
                    c.runEvent.call(c, e)
                }, 350)
            }), c.searchNothing = c.searchInput.siblings(".cbp-search-nothing").detach(), c.searchNothingHeight = null, c.searchNothingHTML = c.searchNothing.html(), c.searchInput.siblings(".cbp-search-icon").on("click.cbp", function(b) {
                b.preventDefault(), c.runEvent.call(c, a(this).prev().val(""))
            })
        }
        var f = a.fn.cubeportfolio.constructor;
        e.prototype.runEvent = function(b) {
            var c = this,
                d = b.val(),
                e = b.data("searchData"),
                f = new RegExp(d, "i");
            e.value === d || c.parent.isAnimating || (e.value = d, d.length > 0 ? b.attr("value", d) : b.removeAttr("value"), c.parent.$obj.cubeportfolio("filter", function(b) {
                var g = b.filter(function(b, c) {
                    var d = a(c).find(e.el).text();
                    if (d.search(f) > -1) return !0
                });
                if (0 === g.length && c.searchNothing.length) {
                    var h = c.searchNothingHTML.replace("{{query}}", d);
                    c.searchNothing.html(h), c.searchNothing.appendTo(c.parent.$obj), null === c.searchNothingHeight && (c.searchNothingHeight = c.searchNothing.outerHeight(!0)), c.parent.registerEvent("resizeMainContainer", function() {
                        c.parent.height = c.parent.height + c.searchNothingHeight, c.parent.obj.style.height = c.parent.height + "px"
                    }, !0)
                } else c.searchNothing.detach();
                return c.parent.triggerEvent("resetFiltersVisual"), g
            }, function() {
                b.trigger("keyup.cbp")
            }))
        }, e.prototype.destroy = function() {
            var b = this;
            b.searchInput.off(".cbp"), b.searchInput.next(".cbp-search-icon").off(".cbp"), b.searchInput.each(function(b, c) {
                a.removeData(c)
            })
        }, f.plugins.search = function(a) {
            return "" === a.options.search ? null : new e(a)
        }
    }(jQuery, window, document),
    function(a, b, c, d) {
        "use strict";

        function e(b) {
            var c = this;
            c.parent = b, c.options = a.extend({}, f, c.parent.options.plugins.slider);
            var d = a(c.options.pagination);
            d.length > 0 && (c.parent.customPagination = d, c.parent.customPaginationItems = d.children(), c.parent.customPaginationClass = c.options.paginationClass, c.parent.customPaginationItems.on("click.cbp", function(b) {
                b.preventDefault(), b.stopImmediatePropagation(), b.stopPropagation(), c.parent.sliderStopEvents || c.parent.jumpToSlider(a(this))
            })), c.parent.registerEvent("gridAdjust", function() {
                c.sliderMarkup.call(c.parent), c.parent.registerEvent("gridAdjust", function() {
                    c.updateSlider.call(c.parent)
                })
            }, !0)
        }
        var f = {
                pagination: "",
                paginationClass: "cbp-pagination-active"
            },
            g = a.fn.cubeportfolio.constructor;
        e.prototype.sliderMarkup = function() {
            var b = this;
            b.sliderStopEvents = !1, b.sliderActive = 0, b.$obj.one("initComplete.cbp", function() {
                b.$obj.addClass("cbp-mode-slider")
            }), b.nav = a("<div/>", {
                class: "cbp-nav"
            }), b.nav.on("click.cbp", "[data-slider-action]", function(c) {
                if (c.preventDefault(), c.stopImmediatePropagation(), c.stopPropagation(), !b.sliderStopEvents) {
                    var d = a(this),
                        e = d.attr("data-slider-action");
                    b[e + "Slider"] && b[e + "Slider"](d)
                }
            }), b.options.showNavigation && (b.controls = a("<div/>", {
                class: "cbp-nav-controls"
            }), b.navPrev = a("<div/>", {
                class: "cbp-nav-prev",
                "data-slider-action": "prev"
            }).appendTo(b.controls), b.navNext = a("<div/>", {
                class: "cbp-nav-next",
                "data-slider-action": "next"
            }).appendTo(b.controls), b.controls.appendTo(b.nav)), b.options.showPagination && (b.navPagination = a("<div/>", {
                class: "cbp-nav-pagination"
            }).appendTo(b.nav)), (b.controls || b.navPagination) && b.nav.appendTo(b.$obj), b.updateSliderPagination(), b.options.auto && (b.options.autoPauseOnHover && (b.mouseIsEntered = !1, b.$obj.on("mouseenter.cbp", function(a) {
                b.mouseIsEntered = !0, b.stopSliderAuto()
            }).on("mouseleave.cbp", function(a) {
                b.mouseIsEntered = !1, b.startSliderAuto()
            })), b.startSliderAuto()), b.options.drag && g.private.modernBrowser && b.dragSlider()
        }, e.prototype.updateSlider = function() {
            var a = this;
            a.updateSliderPosition(), a.updateSliderPagination()
        }, e.prototype.destroy = function() {
            var a = this;
            a.parent.customPaginationItems && a.parent.customPaginationItems.off(".cbp"), (a.parent.controls || a.parent.navPagination) && (a.parent.nav.off(".cbp"), a.parent.nav.remove())
        }, g.plugins.slider = function(a) {
            return "slider" !== a.options.layoutMode ? null : new e(a)
        }
    }(jQuery, window, document);
/* Easing */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function(x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function(x) {
            return x * x
        },
        easeOutQuad: function(x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function(x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function(x) {
            return x * x * x
        },
        easeOutCubic: function(x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function(x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function(x) {
            return x * x * x * x
        },
        easeOutQuart: function(x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function(x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function(x) {
            return x * x * x * x * x
        },
        easeOutQuint: function(x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function(x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function(x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function(x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function(x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function(x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function(x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function(x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function(x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function(x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function(x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function(x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
});
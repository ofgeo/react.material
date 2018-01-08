!function(e) {
  function t(r) {
    if (n[r]) {
      return n[r].exports;
    }
    var i = n[r] = {i: r, l: !1, exports: {}};
    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }

  var n = {};
  t.m = e, t.c = n, t.i = function(e) {
    return e
  }, t.d = function(e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/js", t(t.s = 20)
}([function(e, t, n) {
  var r, i,
      o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
  !function(a, s) {
    "object" === o(t) && void 0 !== e ? e.exports = s() : (r = s, void 0 !== (i = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = i))
  }(0, function() {
    "use strict";

    function e(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }

    function t(e) {
      for (var t = e.childNodes.length; t > 0; --t) {
        e.removeChild(e.firstChild);
      }
      return e
    }

    function n(e, n) {
      return t(e).appendChild(n)
    }

    function r(e, t, n, r) {
      var i = document.createElement(e);
      if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) {
        i.appendChild(document.createTextNode(t));
      } else if (t) {
        for (var o = 0; o < t.length; ++o) {
          i.appendChild(t[o]);
        }
      }
      return i
    }

    function i(e, t, n, i) {
      var o = r(e, t, n, i);
      return o.setAttribute("role", "presentation"), o
    }

    function a(e, t) {
      if (3 == t.nodeType && (t = t.parentNode), e.contains) {
        return e.contains(t);
      }
      do {
        if (11 == t.nodeType && (t = t.host), t == e) {
          return !0
        }
      } while (t = t.parentNode)
    }

    function s() {
      var e;
      try {
        e = document.activeElement
      } catch (t) {
        e = document.body || null
      }
      for (; e && e.shadowRoot && e.shadowRoot.activeElement;) {
        e = e.shadowRoot.activeElement;
      }
      return e
    }

    function l(t, n) {
      var r = t.className;
      e(n).test(r) || (t.className += (r ? " " : "") + n)
    }

    function u(t, n) {
      for (var r = t.split(" "), i = 0; i < r.length; i++) {
        r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
      }
      return n
    }

    function c(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function() {
        return e.apply(null, t)
      }
    }

    function d(e, t, n) {
      t || (t = {});
      for (var r in e) {
        !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      return t
    }

    function f(e, t, n, r, i) {
      null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
      for (var o = r || 0, a = i || 0; ;) {
        var s = e.indexOf("\t", o);
        if (s < 0 || s >= t) {
          return a + (t - o);
        }
        a += s - o, a += n - a % n, o = s + 1
      }
    }

    function p(e, t) {
      for (var n = 0; n < e.length; ++n) {
        if (e[n] == t) {
          return n;
        }
      }
      return -1
    }

    function h(e, t, n) {
      for (var r = 0, i = 0; ;) {
        var o = e.indexOf("\t", r);
        -1 == o && (o = e.length);
        var a = o - r;
        if (o == e.length || i + a >= t) {
          return r + Math.min(a, t - i);
        }
        if (i += o - r, i += n - i % n, r = o + 1, i >= t) {
          return r
        }
      }
    }

    function m(e) {
      for (; La.length <= e;) {
        La.push(g(La) + " ");
      }
      return La[e]
    }

    function g(e) {
      return e[e.length - 1]
    }

    function v(e, t) {
      for (var n = [], r = 0; r < e.length; r++) {
        n[r] = t(e[r], r);
      }
      return n
    }

    function y(e, t, n) {
      for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) {
        r++;
      }
      e.splice(r, 0, t)
    }

    function b() {
    }

    function w(e, t) {
      var n;
      return Object.create ? n = Object.create(e) : (b.prototype = e, n = new b), t && d(t, n), n
    }

    function x(e) {
      return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ma.test(e))
    }

    function k(e, t) {
      return t ? !!(t.source.indexOf("\\w") > -1 && x(e)) || t.test(e) : x(e)
    }

    function C(e) {
      for (var t in e) {
        if (e.hasOwnProperty(t) && e[t]) {
          return !1;
        }
      }
      return !0
    }

    function S(e) {
      return e.charCodeAt(0) >= 768 && Oa.test(e)
    }

    function _(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && S(e.charAt(t));) {
        t += n;
      }
      return t
    }

    function T(e, t, n) {
      for (; ;) {
        if (Math.abs(t - n) <= 1) {
          return e(t) ? t : n;
        }
        var r = Math.floor((t + n) / 2);
        e(r) ? n = r : t = r
      }
    }

    function L(e, t, n) {
      var o = this;
      this.input = n, o.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = r("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = i("div", null, "CodeMirror-code"), o.selectionDiv = r("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = r("div", null, "CodeMirror-cursors"), o.measure = r("div", null, "CodeMirror-measure"), o.lineMeasure = r("div", null, "CodeMirror-measure"), o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
      var a = i("div", [o.lineSpace], "CodeMirror-lines");
      o.mover = r("div", [a], null, "position: relative"), o.sizer = r("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = r("div", null, null, "position: absolute; height: " + ka + "px; width: 1px;"), o.gutters = r("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = r("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = r("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), Jo && Qo < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), ea || $o && ua || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, n.init(o)
    }

    function M(e, t) {
      if ((t -= e.first) < 0 || t >= e.size) {
        throw new Error("There is no line " + (t + e.first) + " in the document.");
      }
      for (var n = e; !n.lines;) {
        for (var r = 0; ; ++r) {
          var i = n.children[r], o = i.chunkSize();
          if (t < o) {
            n = i;
            break
          }
          t -= o
        }
      }
      return n.lines[t]
    }

    function O(e, t, n) {
      var r = [], i = t.line;
      return e.iter(t.line, n.line + 1, function(e) {
        var o = e.text;
        i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
      }), r
    }

    function A(e, t, n) {
      var r = [];
      return e.iter(t, n, function(e) {
        r.push(e.text)
      }), r
    }

    function I(e, t) {
      var n = t - e.height;
      if (n) {
        for (var r = e; r; r = r.parent) {
          r.height += n
        }
      }
    }

    function E(e) {
      if (null == e.parent) {
        return null;
      }
      for (var t = e.parent, n = p(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
        for (var i = 0; r.children[i] != t; ++i) {
          n += r.children[i].chunkSize();
        }
      }
      return n + t.first
    }

    function N(e, t) {
      var n = e.first;
      e:do {
        for (var r = 0; r < e.children.length; ++r) {
          var i = e.children[r], o = i.height;
          if (t < o) {
            e = i;
            continue e
          }
          t -= o, n += i.chunkSize()
        }
        return n
      } while (!e.lines);
      for (var a = 0; a < e.lines.length; ++a) {
        var s = e.lines[a], l = s.height;
        if (t < l) {
          break;
        }
        t -= l
      }
      return n + a
    }

    function D(e, t) {
      return t >= e.first && t < e.first + e.size
    }

    function z(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }

    function P(e, t, n) {
      if (void 0 === n && (n = null), !(this instanceof P)) {
        return new P(e, t, n);
      }
      this.line = e, this.ch = t, this.sticky = n
    }

    function W(e, t) {
      return e.line - t.line || e.ch - t.ch
    }

    function F(e, t) {
      return e.sticky == t.sticky && 0 == W(e, t)
    }

    function H(e) {
      return P(e.line, e.ch)
    }

    function R(e, t) {
      return W(e, t) < 0 ? t : e
    }

    function B(e, t) {
      return W(e, t) < 0 ? e : t
    }

    function j(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }

    function U(e, t) {
      if (t.line < e.first) {
        return P(e.first, 0);
      }
      var n = e.first + e.size - 1;
      return t.line > n ? P(n, M(e, n).text.length) : V(t, M(e, t.line).text.length)
    }

    function V(e, t) {
      var n = e.ch;
      return null == n || n > t ? P(e.line, t) : n < 0 ? P(e.line, 0) : e
    }

    function q(e, t) {
      for (var n = [], r = 0; r < t.length; r++) {
        n[r] = U(e, t[r]);
      }
      return n
    }

    function G() {
      Aa = !0
    }

    function K() {
      Ia = !0
    }

    function $(e, t, n) {
      this.marker = e, this.from = t, this.to = n
    }

    function X(e, t) {
      if (e) {
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];
          if (r.marker == t) {
            return r
          }
        }
      }
    }

    function Y(e, t) {
      for (var n, r = 0; r < e.length; ++r) {
        e[r] != t && (n || (n = [])).push(e[r]);
      }
      return n
    }

    function Z(e, t) {
      e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
    }

    function J(e, t, n) {
      var r;
      if (e) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i], a = o.marker,
              s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
          if (s || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
            var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
            (r || (r = [])).push(new $(a, o.from, l ? null : o.to))
          }
        }
      }
      return r
    }

    function Q(e, t, n) {
      var r;
      if (e) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i], a = o.marker,
              s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
          if (s || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
            var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
            (r || (r = [])).push(new $(a, l ? null : o.from - t, null == o.to ? null : o.to - t))
          }
        }
      }
      return r
    }

    function ee(e, t) {
      if (t.full) {
        return null;
      }
      var n = D(e, t.from.line) && M(e, t.from.line).markedSpans,
          r = D(e, t.to.line) && M(e, t.to.line).markedSpans;
      if (!n && !r) {
        return null;
      }
      var i = t.from.ch, o = t.to.ch, a = 0 == W(t.from, t.to), s = J(n, i, a),
          l = Q(r, o, a), u = 1 == t.text.length,
          c = g(t.text).length + (u ? i : 0);
      if (s) {
        for (var d = 0; d < s.length; ++d) {
          var f = s[d];
          if (null == f.to) {
            var p = X(l, f.marker);
            p ? u && (f.to = null == p.to ? null : p.to + c) : f.to = i
          }
        }
      }
      if (l) {
        for (var h = 0; h < l.length; ++h) {
          var m = l[h];
          if (null != m.to && (m.to += c), null == m.from) {
            var v = X(s, m.marker);
            v || (m.from = c, u && (s || (s = [])).push(m))
          } else {
            m.from += c, u && (s || (s = [])).push(m)
          }
        }
      }
      s && (s = te(s)), l && l != s && (l = te(l));
      var y = [s];
      if (!u) {
        var b, w = t.text.length - 2;
        if (w > 0 && s) {
          for (var x = 0; x < s.length; ++x) {
            null == s[x].to && (b || (b = [])).push(new $(s[x].marker, null, null));
          }
        }
        for (var k = 0; k < w; ++k) {
          y.push(b);
        }
        y.push(l)
      }
      return y
    }

    function te(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
      }
      return e.length ? e : null
    }

    function ne(e, t, n) {
      var r = null;
      if (e.iter(t.line, n.line + 1, function(e) {
            if (e.markedSpans) {
              for (var t = 0; t < e.markedSpans.length; ++t) {
                var n = e.markedSpans[t].marker;
                !n.readOnly || r && -1 != p(r, n) || (r || (r = [])).push(n)
              }
            }
          }), !r) {
        return null;
      }
      for (var i = [{
        from: t,
        to: n
      }], o = 0; o < r.length; ++o) {
        for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
          var u = i[l];
          if (!(W(u.to, s.from) < 0 || W(u.from, s.to) > 0)) {
            var c = [l, 1], d = W(u.from, s.from), f = W(u.to, s.to);
            (d < 0 || !a.inclusiveLeft && !d) && c.push({
              from: u.from,
              to: s.from
            }), (f > 0 || !a.inclusiveRight && !f) && c.push({
              from: s.to,
              to: u.to
            }), i.splice.apply(i, c), l += c.length - 3
          }
        }
      }
      return i
    }

    function re(e) {
      var t = e.markedSpans;
      if (t) {
        for (var n = 0; n < t.length; ++n) {
          t[n].marker.detachLine(e);
        }
        e.markedSpans = null
      }
    }

    function ie(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) {
          t[n].marker.attachLine(e);
        }
        e.markedSpans = t
      }
    }

    function oe(e) {
      return e.inclusiveLeft ? -1 : 0
    }

    function ae(e) {
      return e.inclusiveRight ? 1 : 0
    }

    function se(e, t) {
      var n = e.lines.length - t.lines.length;
      if (0 != n) {
        return n;
      }
      var r = e.find(), i = t.find(), o = W(r.from, i.from) || oe(e) - oe(t);
      if (o) {
        return -o;
      }
      var a = W(r.to, i.to) || ae(e) - ae(t);
      return a || t.id - e.id
    }

    function le(e, t) {
      var n, r = Ia && e.markedSpans;
      if (r) {
        for (var i = void 0, o = 0; o < r.length; ++o) {
          i = r[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!n || se(n, i.marker) < 0) && (n = i.marker);
        }
      }
      return n
    }

    function ue(e) {
      return le(e, !0)
    }

    function ce(e) {
      return le(e, !1)
    }

    function de(e, t, n, r, i) {
      var o = M(e, t), a = Ia && o.markedSpans;
      if (a) {
        for (var s = 0; s < a.length; ++s) {
          var l = a[s];
          if (l.marker.collapsed) {
            var u = l.marker.find(0), c = W(u.from, n) || oe(l.marker) - oe(i),
                d = W(u.to, r) || ae(l.marker) - ae(i);
            if (!(c >= 0 && d <= 0 || c <= 0 && d >= 0) && (c <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? W(u.to, n) >= 0 : W(u.to, n) > 0) || c >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? W(u.from, r) <= 0 : W(u.from, r) < 0))) {
              return !0
            }
          }
        }
      }
    }

    function fe(e) {
      for (var t; t = ue(e);) {
        e = t.find(-1, !0).line;
      }
      return e
    }

    function pe(e) {
      for (var t; t = ce(e);) {
        e = t.find(1, !0).line;
      }
      return e
    }

    function he(e) {
      for (var t, n; t = ce(e);) {
        e = t.find(1, !0).line, (n || (n = [])).push(e);
      }
      return n
    }

    function me(e, t) {
      var n = M(e, t), r = fe(n);
      return n == r ? t : E(r)
    }

    function ge(e, t) {
      if (t > e.lastLine()) {
        return t;
      }
      var n, r = M(e, t);
      if (!ve(e, r)) {
        return t;
      }
      for (; n = ce(r);) {
        r = n.find(1, !0).line;
      }
      return E(r) + 1
    }

    function ve(e, t) {
      var n = Ia && t.markedSpans;
      if (n) {
        for (var r = void 0, i = 0; i < n.length; ++i) {
          if (r = n[i], r.marker.collapsed) {
            if (null == r.from) {
              return !0;
            }
            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ye(e, t, r)) {
              return !0
            }
          }
        }
      }
    }

    function ye(e, t, n) {
      if (null == n.to) {
        var r = n.marker.find(1, !0);
        return ye(e, r.line, X(r.line.markedSpans, n.marker))
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) {
        return !0;
      }
      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
        if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ye(e, t, i)) {
          return !0
        }
      }
    }

    function be(e) {
      e = fe(e);
      for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
        var i = n.lines[r];
        if (i == e) {
          break;
        }
        t += i.height
      }
      for (var o = n.parent; o; n = o, o = n.parent) {
        for (var a = 0; a < o.children.length; ++a) {
          var s = o.children[a];
          if (s == n) {
            break;
          }
          t += s.height
        }
      }
      return t
    }

    function we(e) {
      if (0 == e.height) {
        return 0;
      }
      for (var t, n = e.text.length, r = e; t = ue(r);) {
        var i = t.find(0, !0);
        r = i.from.line, n += i.from.ch - i.to.ch
      }
      for (r = e; t = ce(r);) {
        var o = t.find(0, !0);
        n -= r.text.length - o.from.ch, r = o.to.line, n += r.text.length - o.to.ch
      }
      return n
    }

    function xe(e) {
      var t = e.display, n = e.doc;
      t.maxLine = M(n, n.first), t.maxLineLength = we(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
        var n = we(e);
        n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
      })
    }

    function ke(e, t, n, r) {
      if (!e) {
        return r(t, n, "ltr");
      }
      for (var i = !1, o = 0; o < e.length; ++o) {
        var a = e[o];
        (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0)
      }
      i || r(t, n, "ltr")
    }

    function Ce(e, t, n) {
      var r;
      Ea = null;
      for (var i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.from < t && o.to > t) {
          return i;
        }
        o.to == t && (o.from != o.to && "before" == n ? r = i : Ea = i), o.from == t && (o.from != o.to && "before" != n ? r = i : Ea = i)
      }
      return null != r ? r : Ea
    }

    function Se(e, t) {
      var n = e.order;
      return null == n && (n = e.order = Na(e.text, t)), n
    }

    function _e(e, t, n) {
      var r = _(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r
    }

    function Te(e, t, n) {
      var r = _e(e, t.ch, n);
      return null == r ? null : new P(t.line, r, n < 0 ? "after" : "before")
    }

    function Le(e, t, n, r, i) {
      if (e) {
        var o = Se(n, t.doc.direction);
        if (o) {
          var a, s = i < 0 ? g(o) : o[0], l = i < 0 == (1 == s.level),
              u = l ? "after" : "before";
          if (s.level > 0) {
            var c = Zt(t, n);
            a = i < 0 ? n.text.length - 1 : 0;
            var d = Jt(t, c, a).top;
            a = T(function(e) {
              return Jt(t, c, e).top == d
            }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == u && (a = _e(n, a, 1, !0))
          } else {
            a = i < 0 ? s.to : s.from;
          }
          return new P(r, a, u)
        }
      }
      return new P(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
    }

    function Me(e, t, n, r) {
      var i = Se(t, e.doc.direction);
      if (!i) {
        return Te(t, n, r);
      }
      n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
      var o = Ce(i, n.ch, n.sticky), a = i[o];
      if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) {
        return Te(t, n, r);
      }
      var s, l = function(e, n) {
        return _e(t, e instanceof P ? e.ch : e, n)
      }, u = function(n) {
        return e.options.lineWrapping ? (s = s || Zt(e, t), vn(e, t, s, n)) : {
          begin: 0,
          end: t.text.length
        }
      }, c = u("before" == n.sticky ? l(n, -1) : n.ch);
      if ("rtl" == e.doc.direction || 1 == a.level) {
        var d = 1 == a.level == r < 0, f = l(n, d ? 1 : -1);
        if (null != f && (d ? f <= a.to && f <= c.end : f >= a.from && f >= c.begin)) {
          var p = d ? "before" : "after";
          return new P(n.line, f, p)
        }
      }
      var h = function(e, t, r) {
        for (var o = function(e, t) {
          return t ? new P(n.line, l(e, 1), "before") : new P(n.line, e, "after")
        }; e >= 0 && e < i.length; e += t) {
          var a = i[e], s = t > 0 == (1 != a.level),
              u = s ? r.begin : l(r.end, -1);
          if (a.from <= u && u < a.to) {
            return o(u, s);
          }
          if (u = s ? a.from : l(a.to, -1), r.begin <= u && u < r.end) {
            return o(u, s)
          }
        }
      }, m = h(o + r, r, c);
      if (m) {
        return m;
      }
      var g = r > 0 ? c.end : l(c.begin, -1);
      return null == g || r > 0 && g == t.text.length || !(m = h(r > 0 ? 0 : i.length - 1, r, u(g))) ? null : m
    }

    function Oe(e, t) {
      return e._handlers && e._handlers[t] || Da
    }

    function Ae(e, t, n) {
      if (e.removeEventListener) {
        e.removeEventListener(t, n, !1);
      } else if (e.detachEvent) {
        e.detachEvent("on" + t, n);
      } else {
        var r = e._handlers, i = r && r[t];
        if (i) {
          var o = p(i, n);
          o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
        }
      }
    }

    function Ie(e, t) {
      var n = Oe(e, t);
      if (n.length) {
        for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
          n[i].apply(null, r)
        }
      }
    }

    function Ee(e, t, n) {
      return "string" == typeof t && (t = {
        type: t, preventDefault: function() {
          this.defaultPrevented = !0
        }
      }), Ie(e, n || t.type, e, t), Fe(t) || t.codemirrorIgnore
    }

    function Ne(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t) {
        for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
          -1 == p(n, t[r]) && n.push(t[r])
        }
      }
    }

    function De(e, t) {
      return Oe(e, t).length > 0
    }

    function ze(e) {
      e.prototype.on = function(e, t) {
        za(this, e, t)
      }, e.prototype.off = function(e, t) {
        Ae(this, e, t)
      }
    }

    function Pe(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function We(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }

    function Fe(e) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }

    function He(e) {
      Pe(e), We(e)
    }

    function Re(e) {
      return e.target || e.srcElement
    }

    function Be(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), ca && e.ctrlKey && 1 == t && (t = 3), t
    }

    function je(e) {
      if (null == wa) {
        var t = r("span", "​");
        n(e, r("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (wa = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Jo && Qo < 8))
      }
      var i = wa ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return i.setAttribute("cm-text", ""), i
    }

    function Ue(e) {
      if (null != xa) {
        return xa;
      }
      var r = n(e, document.createTextNode("AخA")),
          i = ha(r, 0, 1).getBoundingClientRect(),
          o = ha(r, 1, 2).getBoundingClientRect();
      return t(e), !(!i || i.left == i.right) && (xa = o.right - i.right < 3)
    }

    function Ve(e) {
      if (null != Ra) {
        return Ra;
      }
      var t = n(e, r("span", "x")), i = t.getBoundingClientRect(),
          o = ha(t, 0, 1).getBoundingClientRect();
      return Ra = Math.abs(i.left - o.left) > 1
    }

    function qe(e, t) {
      arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ba[e] = t
    }

    function Ge(e, t) {
      ja[e] = t
    }

    function Ke(e) {
      if ("string" == typeof e && ja.hasOwnProperty(e)) {
        e = ja[e];
      } else if (e && "string" == typeof e.name && ja.hasOwnProperty(e.name)) {
        var t = ja[e.name];
        "string" == typeof t && (t = {name: t}), e = w(t, e), e.name = t.name
      } else {
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) {
          return Ke("application/xml");
        }
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) {
          return Ke("application/json")
        }
      }
      return "string" == typeof e ? {name: e} : e || {name: "null"}
    }

    function $e(e, t) {
      t = Ke(t);
      var n = Ba[t.name];
      if (!n) {
        return $e(e, "text/plain");
      }
      var r = n(e, t);
      if (Ua.hasOwnProperty(t.name)) {
        var i = Ua[t.name];
        for (var o in i) {
          i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
        }
      }
      if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) {
        for (var a in t.modeProps) {
          r[a] = t.modeProps[a];
        }
      }
      return r
    }

    function Xe(e, t) {
      d(t, Ua.hasOwnProperty(e) ? Ua[e] : Ua[e] = {})
    }

    function Ye(e, t) {
      if (!0 === t) {
        return t;
      }
      if (e.copyState) {
        return e.copyState(t);
      }
      var n = {};
      for (var r in t) {
        var i = t[r];
        i instanceof Array && (i = i.concat([])), n[r] = i
      }
      return n
    }

    function Ze(e, t) {
      for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) {
        t = n.state, e = n.mode;
      }
      return n || {mode: e, state: t}
    }

    function Je(e, t, n) {
      return !e.startState || e.startState(t, n)
    }

    function Qe(e, t, n, r) {
      var i = [e.state.modeGen], o = {};
      st(e, t.text, e.doc.mode, n, function(e, t) {
        return i.push(e, t)
      }, o, r);
      for (var a = 0; a < e.state.overlays.length; ++a) {
        !function(n) {
          var r = e.state.overlays[n], a = 1, s = 0;
          st(e, t.text, r.mode, !0, function(e, t) {
            for (var n = a; s < e;) {
              var o = i[a];
              o > e && i.splice(a, 1, e, i[a + 1], o), a += 2, s = Math.min(e, o)
            }
            if (t) {
              if (r.opaque) {
                i.splice(n, a - n, e, "overlay " + t), a = n + 2;
              } else {
                for (; n < a; n += 2) {
                  var l = i[n + 1];
                  i[n + 1] = (l ? l + " " : "") + "overlay " + t
                }
              }
            }
          }, o)
        }(a);
      }
      return {styles: i, classes: o.bgClass || o.textClass ? o : null}
    }

    function et(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = tt(e, E(t)),
            i = Qe(e, t, t.text.length > e.options.maxHighlightLength ? Ye(e.doc.mode, r) : r);
        t.stateAfter = r, t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.frontier && e.doc.frontier++
      }
      return t.styles
    }

    function tt(e, t, n) {
      var r = e.doc, i = e.display;
      if (!r.mode.startState) {
        return !0;
      }
      var o = lt(e, t, n), a = o > r.first && M(r, o - 1).stateAfter;
      return a = a ? Ye(r.mode, a) : Je(r.mode), r.iter(o, t, function(n) {
        nt(e, n.text, a);
        var s = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
        n.stateAfter = s ? Ye(r.mode, a) : null, ++o
      }), n && (r.frontier = o), a
    }

    function nt(e, t, n, r) {
      var i = e.doc.mode, o = new Va(t, e.options.tabSize);
      for (o.start = o.pos = r || 0, "" == t && rt(i, n); !o.eol();) {
        it(i, o, n), o.start = o.pos
      }
    }

    function rt(e, t) {
      if (e.blankLine) {
        return e.blankLine(t);
      }
      if (e.innerMode) {
        var n = Ze(e, t);
        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
      }
    }

    function it(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
        r && (r[0] = Ze(e, n).mode);
        var o = e.token(t, n);
        if (t.pos > t.start) {
          return o
        }
      }
      throw new Error("Mode " + e.name + " failed to advance stream.")
    }

    function ot(e, t, n, r) {
      var i, o = function(e) {
        return {
          start: d.start,
          end: d.pos,
          string: d.current(),
          type: i || null,
          state: e ? Ye(a.mode, c) : c
        }
      }, a = e.doc, s = a.mode;
      t = U(a, t);
      var l, u = M(a, t.line), c = tt(e, t.line, n),
          d = new Va(u.text, e.options.tabSize);
      for (r && (l = []); (r || d.pos < t.ch) && !d.eol();) {
        d.start = d.pos, i = it(s, d, c), r && l.push(o(!0));
      }
      return r ? l : o()
    }

    function at(e, t) {
      if (e) {
        for (; ;) {
          var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!n) {
            break;
          }
          e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
          var r = n[1] ? "bgClass" : "textClass";
          null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
        }
      }
      return e
    }

    function st(e, t, n, r, i, o, a) {
      var s = n.flattenSpans;
      null == s && (s = e.options.flattenSpans);
      var l, u = 0, c = null, d = new Va(t, e.options.tabSize),
          f = e.options.addModeClass && [null];
      for ("" == t && at(rt(n, r), o); !d.eol();) {
        if (d.pos > e.options.maxHighlightLength ? (s = !1, a && nt(e, t, r, d.pos), d.pos = t.length, l = null) : l = at(it(n, d, r, f), o), f) {
          var p = f[0].name;
          p && (l = "m-" + (l ? p + " " + l : p))
        }
        if (!s || c != l) {
          for (; u < d.start;) {
            u = Math.min(d.start, u + 5e3), i(u, c);
          }
          c = l
        }
        d.start = d.pos
      }
      for (; u < d.pos;) {
        var h = Math.min(d.pos, u + 5e3);
        i(h, c), u = h
      }
    }

    function lt(e, t, n) {
      for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
        if (s <= o.first) {
          return o.first;
        }
        var l = M(o, s - 1);
        if (l.stateAfter && (!n || s <= o.frontier)) {
          return s;
        }
        var u = f(l.text, null, e.options.tabSize);
        (null == i || r > u) && (i = s - 1, r = u)
      }
      return i
    }

    function ut(e, t, n, r) {
      e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), re(e), ie(e, n);
      var i = r ? r(e) : 1;
      i != e.height && I(e, i)
    }

    function ct(e) {
      e.parent = null, re(e)
    }

    function dt(e, t) {
      if (!e || /^\s*$/.test(e)) {
        return null;
      }
      var n = t.addModeClass ? $a : Ka;
      return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
    }

    function ft(e, t) {
      var n = i("span", null, null, ea ? "padding-right: .1px" : null), r = {
        pre: i("pre", [n], "CodeMirror-line"),
        content: n,
        col: 0,
        pos: 0,
        cm: e,
        trailingSpace: !1,
        splitSpaces: (Jo || ea) && e.getOption("lineWrapping")
      };
      t.measure = {};
      for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
        var a = o ? t.rest[o - 1] : t.line, s = void 0;
        r.pos = 0, r.addToken = ht, Ue(e.display.measure) && (s = Se(a, e.doc.direction)) && (r.addToken = gt(r.addToken, s)), r.map = [];
        yt(a, r, et(e, a, t != e.display.externalMeasured && E(a))), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = u(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = u(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(je(e.display.measure))), 0 == o ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
      }
      if (ea) {
        var l = r.content.lastChild;
        (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
      }
      return Ie(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = u(r.pre.className, r.textClass || "")), r
    }

    function pt(e) {
      var t = r("span", "•", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
    }

    function ht(e, t, n, i, o, a, s) {
      if (t) {
        var l, u = e.splitSpaces ? mt(t, e.trailingSpace) : t,
            c = e.cm.state.specialChars, d = !1;
        if (c.test(t)) {
          l = document.createDocumentFragment();
          for (var f = 0; ;) {
            c.lastIndex = f;
            var p = c.exec(t), h = p ? p.index - f : t.length - f;
            if (h) {
              var g = document.createTextNode(u.slice(f, f + h));
              Jo && Qo < 9 ? l.appendChild(r("span", [g])) : l.appendChild(g), e.map.push(e.pos, e.pos + h, g), e.col += h, e.pos += h
            }
            if (!p) {
              break;
            }
            f += h + 1;
            var v = void 0;
            if ("\t" == p[0]) {
              var y = e.cm.options.tabSize, b = y - e.col % y;
              v = l.appendChild(r("span", m(b), "cm-tab")), v.setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b
            } else {
              "\r" == p[0] || "\n" == p[0] ? (v = l.appendChild(r("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")), v.setAttribute("cm-text", p[0]), e.col += 1) : (v = e.cm.options.specialCharPlaceholder(p[0]), v.setAttribute("cm-text", p[0]), Jo && Qo < 9 ? l.appendChild(r("span", [v])) : l.appendChild(v), e.col += 1);
            }
            e.map.push(e.pos, e.pos + 1, v), e.pos++
          }
        } else {
          e.col += t.length, l = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, l), Jo && Qo < 9 && (d = !0), e.pos += t.length;
        }
        if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || i || o || d || s) {
          var w = n || "";
          i && (w += i), o && (w += o);
          var x = r("span", [l], w, s);
          return a && (x.title = a), e.content.appendChild(x)
        }
        e.content.appendChild(l)
      }
    }

    function mt(e, t) {
      if (e.length > 1 && !/  /.test(e)) {
        return e;
      }
      for (var n = t, r = "", i = 0; i < e.length; i++) {
        var o = e.charAt(i);
        " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
      }
      return r
    }

    function gt(e, t) {
      return function(n, r, i, o, a, s, l) {
        i = i ? i + " cm-force-border" : "cm-force-border";
        for (var u = n.pos, c = u + r.length; ;) {
          for (var d = void 0, f = 0; f < t.length && (d = t[f], !(d.to > u && d.from <= u)); f++) {
            ;
          }
          if (d.to >= c) {
            return e(n, r, i, o, a, s, l);
          }
          e(n, r.slice(0, d.to - u), i, o, null, s, l), o = null, r = r.slice(d.to - u), u = d.to
        }
      }
    }

    function vt(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
    }

    function yt(e, t, n) {
      var r = e.markedSpans, i = e.text, o = 0;
      if (r) {
        for (var a, s, l, u, c, d, f, p = i.length, h = 0, m = 1, g = "", v = 0; ;) {
          if (v == h) {
            l = u = c = d = s = "", f = null, v = 1 / 0;
            for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
              var x = r[w], k = x.marker;
              "bookmark" == k.type && x.from == h && k.widgetNode ? y.push(k) : x.from <= h && (null == x.to || x.to > h || k.collapsed && x.to == h && x.from == h) ? (null != x.to && x.to != h && v > x.to && (v = x.to, u = ""), k.className && (l += " " + k.className), k.css && (s = (s ? s + ";" : "") + k.css), k.startStyle && x.from == h && (c += " " + k.startStyle), k.endStyle && x.to == v && (b || (b = [])).push(k.endStyle, x.to), k.title && !d && (d = k.title), k.collapsed && (!f || se(f.marker, k) < 0) && (f = x)) : x.from > h && v > x.from && (v = x.from)
            }
            if (b) {
              for (var C = 0; C < b.length; C += 2) {
                b[C + 1] == v && (u += " " + b[C]);
              }
            }
            if (!f || f.from == h) {
              for (var S = 0; S < y.length; ++S) {
                vt(t, 0, y[S]);
              }
            }
            if (f && (f.from || 0) == h) {
              if (vt(t, (null == f.to ? p + 1 : f.to) - h, f.marker, null == f.from), null == f.to) {
                return;
              }
              f.to == h && (f = !1)
            }
          }
          if (h >= p) {
            break;
          }
          for (var _ = Math.min(p, v); ;) {
            if (g) {
              var T = h + g.length;
              if (!f) {
                var L = T > _ ? g.slice(0, _ - h) : g;
                t.addToken(t, L, a ? a + l : l, c, h + L.length == v ? u : "", d, s)
              }
              if (T >= _) {
                g = g.slice(_ - h), h = _;
                break
              }
              h = T, c = ""
            }
            g = i.slice(o, o = n[m++]), a = dt(n[m++], t.cm.options)
          }
        }
      } else {
        for (var M = 1; M < n.length; M += 2) {
          t.addToken(t, i.slice(o, o = n[M]), dt(n[M + 1], t.cm.options))
        }
      }
    }

    function bt(e, t, n) {
      this.line = t, this.rest = he(t), this.size = this.rest ? E(g(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = ve(e, t)
    }

    function wt(e, t, n) {
      for (var r, i = [], o = t; o < n; o = r) {
        var a = new bt(e.doc, M(e.doc, o), o);
        r = o + a.size, i.push(a)
      }
      return i
    }

    function xt(e) {
      Xa ? Xa.ops.push(e) : e.ownsGroup = Xa = {ops: [e], delayedCallbacks: []}
    }

    function kt(e) {
      var t = e.delayedCallbacks, n = 0;
      do {
        for (; n < t.length; n++) {
          t[n].call(null);
        }
        for (var r = 0; r < e.ops.length; r++) {
          var i = e.ops[r];
          if (i.cursorActivityHandlers) {
            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
              i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
            }
          }
        }
      } while (n < t.length)
    }

    function Ct(e, t) {
      var n = e.ownsGroup;
      if (n) {
        try {
          kt(n)
        } finally {
          Xa = null, t(n)
        }
      }
    }

    function St(e, t) {
      var n = Oe(e, t);
      if (n.length) {
        var r, i = Array.prototype.slice.call(arguments, 2);
        Xa ? r = Xa.delayedCallbacks : Ya ? r = Ya : (r = Ya = [], setTimeout(_t, 0));
        for (var o = 0; o < n.length; ++o) {
          !function(e) {
            r.push(function() {
              return n[e].apply(null, i)
            })
          }(o)
        }
      }
    }

    function _t() {
      var e = Ya;
      Ya = null;
      for (var t = 0; t < e.length; ++t) {
        e[t]()
      }
    }

    function Tt(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
        var o = t.changes[i];
        "text" == o ? At(e, t) : "gutter" == o ? Et(e, t, n, r) : "class" == o ? It(e, t) : "widget" == o && Nt(e, t, r)
      }
      t.changes = null
    }

    function Lt(e) {
      return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), Jo && Qo < 8 && (e.node.style.zIndex = 2)), e.node
    }

    function Mt(e, t) {
      var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
      if (n && (n += " CodeMirror-linebackground"), t.background) {
        n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
      } else if (n) {
        var i = Lt(t);
        t.background = i.insertBefore(r("div", null, n), i.firstChild), e.display.input.setUneditable(t.background)
      }
    }

    function Ot(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ft(e, t)
    }

    function At(e, t) {
      var n = t.text.className, r = Ot(e, t);
      t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, It(e, t)) : n && (t.text.className = n)
    }

    function It(e, t) {
      Mt(e, t), t.line.wrapClass ? Lt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = n || ""
    }

    function Et(e, t, n, i) {
      if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
        var o = Lt(t);
        t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), o.insertBefore(t.gutterBackground, t.text)
      }
      var a = t.line.gutterMarkers;
      if (e.options.lineNumbers || a) {
        var s = Lt(t),
            l = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
        if (e.display.input.setUneditable(l), s.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(r("div", z(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a) {
          for (var u = 0; u < e.options.gutters.length; ++u) {
            var c = e.options.gutters[u], d = a.hasOwnProperty(c) && a[c];
            d && l.appendChild(r("div", [d], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
          }
        }
      }
    }

    function Nt(e, t, n) {
      t.alignable && (t.alignable = null);
      for (var r = t.node.firstChild, i = void 0; r; r = i) {
        i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
      }
      zt(e, t, n)
    }

    function Dt(e, t, n, r) {
      var i = Ot(e, t);
      return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), It(e, t), Et(e, t, n, r), zt(e, t, r), t.node
    }

    function zt(e, t, n) {
      if (Pt(e, t.line, t, n, !0), t.rest) {
        for (var r = 0; r < t.rest.length; r++) {
          Pt(e, t.rest[r], t, n, !1)
        }
      }
    }

    function Pt(e, t, n, i, o) {
      if (t.widgets) {
        for (var a = Lt(n), s = 0, l = t.widgets; s < l.length; ++s) {
          var u = l[s], c = r("div", [u.node], "CodeMirror-linewidget");
          u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), Wt(u, c, n, i), e.display.input.setUneditable(c), o && u.above ? a.insertBefore(c, n.gutter || n.text) : a.appendChild(c), St(u, "redraw")
        }
      }
    }

    function Wt(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var i = r.wrapperWidth;
        t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
      }
      e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
    }

    function Ft(e) {
      if (null != e.height) {
        return e.height;
      }
      var t = e.doc.cm;
      if (!t) {
        return 0;
      }
      if (!a(document.body, e.node)) {
        var i = "position: relative;";
        e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), n(t.display.measure, r("div", [e.node], null, i))
      }
      return e.height = e.node.parentNode.offsetHeight
    }

    function Ht(e, t) {
      for (var n = Re(t); n != e.wrapper; n = n.parentNode) {
        if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) {
          return !0
        }
      }
    }

    function Rt(e) {
      return e.lineSpace.offsetTop
    }

    function Bt(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }

    function jt(e) {
      if (e.cachedPaddingH) {
        return e.cachedPaddingH;
      }
      var t = n(e.measure, r("pre", "x")),
          i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
          o = {left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight)};
      return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o
    }

    function Ut(e) {
      return ka - e.display.nativeBarWidth
    }

    function Vt(e) {
      return e.display.scroller.clientWidth - Ut(e) - e.display.barWidth
    }

    function qt(e) {
      return e.display.scroller.clientHeight - Ut(e) - e.display.barHeight
    }

    function Gt(e, t, n) {
      var r = e.options.lineWrapping, i = r && Vt(e);
      if (!t.measure.heights || r && t.measure.width != i) {
        var o = t.measure.heights = [];
        if (r) {
          t.measure.width = i;
          for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
            var l = a[s], u = a[s + 1];
            Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top)
          }
        }
        o.push(n.bottom - n.top)
      }
    }

    function Kt(e, t, n) {
      if (e.line == t) {
        return {map: e.measure.map, cache: e.measure.cache};
      }
      for (var r = 0; r < e.rest.length; r++) {
        if (e.rest[r] == t) {
          return {
            map: e.measure.maps[r],
            cache: e.measure.caches[r]
          };
        }
      }
      for (var i = 0; i < e.rest.length; i++) {
        if (E(e.rest[i]) > n) {
          return {
            map: e.measure.maps[i],
            cache: e.measure.caches[i],
            before: !0
          }
        }
      }
    }

    function $t(e, t) {
      t = fe(t);
      var r = E(t), i = e.display.externalMeasured = new bt(e.doc, t, r);
      i.lineN = r;
      var o = i.built = ft(e, i);
      return i.text = o.pre, n(e.display.lineMeasure, o.pre), i
    }

    function Xt(e, t, n, r) {
      return Jt(e, Zt(e, t), n, r)
    }

    function Yt(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo) {
        return e.display.view[Tn(e, t)];
      }
      var n = e.display.externalMeasured;
      return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
    }

    function Zt(e, t) {
      var n = E(t), r = Yt(e, n);
      r && !r.text ? r = null : r && r.changes && (Tt(e, r, n, xn(e)), e.curOp.forceUpdate = !0), r || (r = $t(e, t));
      var i = Kt(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: i.map,
        cache: i.cache,
        before: i.before,
        hasHeights: !1
      }
    }

    function Jt(e, t, n, r, i) {
      t.before && (n = -1);
      var o, a = n + (r || "");
      return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Gt(e, t.view, t.rect), t.hasHeights = !0), o = tn(e, t, n, r), o.bogus || (t.cache[a] = o)), {
        left: o.left,
        right: o.right,
        top: i ? o.rtop : o.top,
        bottom: i ? o.rbottom : o.bottom
      }
    }

    function Qt(e, t, n) {
      for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3) {
        if (s = e[u], l = e[u + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? (i = t - s, o = i + 1) : (u == e.length - 3 || t == l && e[u + 3] > t) && (o = l - s, i = o - 1, t >= l && (a = "right")), null != i) {
          if (r = e[u + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) {
            for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) {
              r = e[2 + (u -= 3)], a = "left";
            }
          }
          if ("right" == n && i == l - s) {
            for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) {
              r = e[(u += 3) + 2], a = "right";
            }
          }
          break
        }
      }
      return {
        node: r,
        start: i,
        end: o,
        collapse: a,
        coverStart: s,
        coverEnd: l
      }
    }

    function en(e, t) {
      var n = Za;
      if ("left" == t) {
        for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) {
          ;
        }
      } else {
        for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) {
          ;
        }
      }
      return n
    }

    function tn(e, t, n, r) {
      var i, o = Qt(t.map, n, r), a = o.node, s = o.start, l = o.end,
          u = o.collapse;
      if (3 == a.nodeType) {
        for (var c = 0; c < 4; c++) {
          for (; s && S(t.line.text.charAt(o.coverStart + s));) {
            --s;
          }
          for (; o.coverStart + l < o.coverEnd && S(t.line.text.charAt(o.coverStart + l));) {
            ++l;
          }
          if (i = Jo && Qo < 9 && 0 == s && l == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : en(ha(a, s, l).getClientRects(), r), i.left || i.right || 0 == s) {
            break;
          }
          l = s, s -= 1, u = "right"
        }
        Jo && Qo < 11 && (i = nn(e.display.measure, i))
      } else {
        s > 0 && (u = r = "right");
        var d;
        i = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : a.getBoundingClientRect()
      }
      if (Jo && Qo < 9 && !s && (!i || !i.left && !i.right)) {
        var f = a.parentNode.getClientRects()[0];
        i = f ? {
          left: f.left,
          right: f.left + wn(e.display),
          top: f.top,
          bottom: f.bottom
        } : Za
      }
      for (var p = i.top - t.rect.top, h = i.bottom - t.rect.top, m = (p + h) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++) {
        ;
      }
      var y = v ? g[v - 1] : 0, b = g[v], w = {
        left: ("right" == u ? i.right : i.left) - t.rect.left,
        right: ("left" == u ? i.left : i.right) - t.rect.left,
        top: y,
        bottom: b
      };
      return i.left || i.right || (w.bogus = !0), e.options.singleCursorHeightPerLine || (w.rtop = p, w.rbottom = h), w
    }

    function nn(e, t) {
      if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ve(e)) {
        return t;
      }
      var n = screen.logicalXDPI / screen.deviceXDPI,
          r = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: t.left * n,
        right: t.right * n,
        top: t.top * r,
        bottom: t.bottom * r
      }
    }

    function rn(e) {
      if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) {
        for (var t = 0; t < e.rest.length; t++) {
          e.measure.caches[t] = {}
        }
      }
    }

    function on(e) {
      e.display.externalMeasure = null, t(e.display.lineMeasure);
      for (var n = 0; n < e.display.view.length; n++) {
        rn(e.display.view[n])
      }
    }

    function an(e) {
      on(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
    }

    function sn() {
      return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function ln() {
      return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function un(e, t, n, r, i) {
      if (!i && t.widgets) {
        for (var o = 0; o < t.widgets.length; ++o) {
          if (t.widgets[o].above) {
            var a = Ft(t.widgets[o]);
            n.top += a, n.bottom += a
          }
        }
      }
      if ("line" == r) {
        return n;
      }
      r || (r = "local");
      var s = be(t);
      if ("local" == r ? s += Rt(e.display) : s -= e.display.viewOffset, "page" == r || "window" == r) {
        var l = e.display.lineSpace.getBoundingClientRect();
        s += l.top + ("window" == r ? 0 : ln());
        var u = l.left + ("window" == r ? 0 : sn());
        n.left += u, n.right += u
      }
      return n.top += s, n.bottom += s, n
    }

    function cn(e, t, n) {
      if ("div" == n) {
        return t;
      }
      var r = t.left, i = t.top;
      if ("page" == n) {
        r -= sn(), i -= ln();
      } else if ("local" == n || !n) {
        var o = e.display.sizer.getBoundingClientRect();
        r += o.left, i += o.top
      }
      var a = e.display.lineSpace.getBoundingClientRect();
      return {left: r - a.left, top: i - a.top}
    }

    function dn(e, t, n, r, i) {
      return r || (r = M(e.doc, t.line)), un(e, r, Xt(e, r, t.ch, i), n)
    }

    function fn(e, t, n, r, i, o) {
      function a(t, a) {
        var s = Jt(e, i, t, a ? "right" : "left", o);
        return a ? s.left = s.right : s.right = s.left, un(e, r, s, n)
      }

      function s(e, t, n) {
        var r = l[t], i = r.level % 2 != 0;
        return a(n ? e - 1 : e, i != n)
      }

      r = r || M(e.doc, t.line), i || (i = Zt(e, r));
      var l = Se(r, e.doc.direction), u = t.ch, c = t.sticky;
      if (u >= r.text.length ? (u = r.text.length, c = "before") : u <= 0 && (u = 0, c = "after"), !l) {
        return a("before" == c ? u - 1 : u, "before" == c);
      }
      var d = Ce(l, u, c), f = Ea, p = s(u, d, "before" == c);
      return null != f && (p.other = s(u, f, "before" != c)), p
    }

    function pn(e, t) {
      var n = 0;
      t = U(e.doc, t), e.options.lineWrapping || (n = wn(e.display) * t.ch);
      var r = M(e.doc, t.line), i = be(r) + Rt(e.display);
      return {left: n, right: n, top: i, bottom: i + r.height}
    }

    function hn(e, t, n, r, i) {
      var o = P(e, t, n);
      return o.xRel = i, r && (o.outside = !0), o
    }

    function mn(e, t, n) {
      var r = e.doc;
      if ((n += e.display.viewOffset) < 0) {
        return hn(r.first, 0, null, !0, -1);
      }
      var i = N(r, n), o = r.first + r.size - 1;
      if (i > o) {
        return hn(r.first + r.size - 1, M(r, o).text.length, null, !0, 1);
      }
      t < 0 && (t = 0);
      for (var a = M(r, i); ;) {
        var s = yn(e, a, i, t, n), l = ce(a), u = l && l.find(0, !0);
        if (!l || !(s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0)) {
          return s;
        }
        i = E(a = u.to.line)
      }
    }

    function gn(e, t, n, r) {
      var i = function(r) {
        return un(e, t, Jt(e, n, r), "line")
      }, o = t.text.length, a = T(function(e) {
        return i(e - 1).bottom <= r
      }, o, 0);
      return o = T(function(e) {
        return i(e).top > r
      }, a, o), {begin: a, end: o}
    }

    function vn(e, t, n, r) {
      return gn(e, t, n, un(e, t, Jt(e, n, r), "line").top)
    }

    function yn(e, t, n, r, i) {
      i -= be(t);
      var o, a = 0, s = t.text.length, l = Zt(e, t);
      if (Se(t, e.doc.direction)) {
        if (e.options.lineWrapping) {
          var u;
          u = gn(e, t, l, i), a = u.begin, s = u.end
        }
        o = new P(n, a);
        var c, d, f = fn(e, o, "line", t, l).left, p = f < r ? 1 : -1,
            h = f - r;
        do {
          if (c = h, d = o, null == (o = Me(e, t, o, p)) || o.ch < a || s <= ("before" == o.sticky ? o.ch - 1 : o.ch)) {
            o = d;
            break
          }
          h = fn(e, o, "line", t, l).left - r
        } while (p < 0 != h < 0 && Math.abs(h) <= Math.abs(c));
        if (Math.abs(h) > Math.abs(c)) {
          if (h < 0 == c < 0) {
            throw new Error("Broke out of infinite loop in coordsCharInner");
          }
          o = d
        }
      } else {
        var m = T(function(n) {
          var o = un(e, t, Jt(e, l, n), "line");
          return o.top > i ? (s = Math.min(n, s), !0) : !(o.bottom <= i) && (o.left > r || !(o.right < r) && r - o.left < o.right - r)
        }, a, s);
        m = _(t.text, m, 1), o = new P(n, m, m == s ? "before" : "after")
      }
      var g = fn(e, o, "line", t, l);
      return (i < g.top || g.bottom < i) && (o.outside = !0), o.xRel = r < g.left ? -1 : r > g.right ? 1 : 0, o
    }

    function bn(e) {
      if (null != e.cachedTextHeight) {
        return e.cachedTextHeight;
      }
      if (null == Ga) {
        Ga = r("pre");
        for (var i = 0; i < 49; ++i) {
          Ga.appendChild(document.createTextNode("x")), Ga.appendChild(r("br"));
        }
        Ga.appendChild(document.createTextNode("x"))
      }
      n(e.measure, Ga);
      var o = Ga.offsetHeight / 50;
      return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1
    }

    function wn(e) {
      if (null != e.cachedCharWidth) {
        return e.cachedCharWidth;
      }
      var t = r("span", "xxxxxxxxxx"), i = r("pre", [t]);
      n(e.measure, i);
      var o = t.getBoundingClientRect(), a = (o.right - o.left) / 10;
      return a > 2 && (e.cachedCharWidth = a), a || 10
    }

    function xn(e) {
      for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
        n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
      }
      return {
        fixedPos: kn(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth
      }
    }

    function kn(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }

    function Cn(e) {
      var t = bn(e.display), n = e.options.lineWrapping,
          r = n && Math.max(5, e.display.scroller.clientWidth / wn(e.display) - 3);
      return function(i) {
        if (ve(e.doc, i)) {
          return 0;
        }
        var o = 0;
        if (i.widgets) {
          for (var a = 0; a < i.widgets.length; a++) {
            i.widgets[a].height && (o += i.widgets[a].height);
          }
        }
        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
      }
    }

    function Sn(e) {
      var t = e.doc, n = Cn(e);
      t.iter(function(e) {
        var t = n(e);
        t != e.height && I(e, t)
      })
    }

    function _n(e, t, n, r) {
      var i = e.display;
      if (!n && "true" == Re(t).getAttribute("cm-not-content")) {
        return null;
      }
      var o, a, s = i.lineSpace.getBoundingClientRect();
      try {
        o = t.clientX - s.left, a = t.clientY - s.top
      } catch (t) {
        return null
      }
      var l, u = mn(e, o, a);
      if (r && 1 == u.xRel && (l = M(e.doc, u.line).text).length == u.ch) {
        var c = f(l, l.length, e.options.tabSize) - l.length;
        u = P(u.line, Math.max(0, Math.round((o - jt(e.display).left) / wn(e.display)) - c))
      }
      return u
    }

    function Tn(e, t) {
      if (t >= e.display.viewTo) {
        return null;
      }
      if ((t -= e.display.viewFrom) < 0) {
        return null;
      }
      for (var n = e.display.view, r = 0; r < n.length; r++) {
        if ((t -= n[r].size) < 0) {
          return r
        }
      }
    }

    function Ln(e) {
      e.display.input.showSelection(e.display.input.prepareSelection())
    }

    function Mn(e, t) {
      for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) {
        if (!1 !== t || a != n.sel.primIndex) {
          var s = n.sel.ranges[a];
          if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
            var l = s.empty();
            (l || e.options.showCursorWhenSelecting) && On(e, s.head, i), l || An(e, s, o)
          }
        }
      }
      return r
    }

    function On(e, t, n) {
      var i = fn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
          o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
      if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) {
        var a = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
        a.style.display = "", a.style.left = i.other.left + "px", a.style.top = i.other.top + "px", a.style.height = .85 * (i.other.bottom - i.other.top) + "px"
      }
    }

    function An(e, t, n) {
      function i(e, t, n, i) {
        t < 0 && (t = 0), t = Math.round(t), i = Math.round(i), l.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? d - e : n) + "px;\n                             height: " + (i - t) + "px"))
      }

      function o(t, n, r) {
        function o(n, r) {
          return dn(e, P(t, n), "div", u, r)
        }

        var a, l, u = M(s, t), f = u.text.length;
        return ke(Se(u, s.direction), n || 0, null == r ? f : r, function(e, t, s) {
          var u, p, h, m = o(e, "left");
          if (e == t) {
            u = m, p = h = m.left;
          } else {
            if (u = o(t - 1, "right"), "rtl" == s) {
              var g = m;
              m = u, u = g
            }
            p = m.left, h = u.right
          }
          null == n && 0 == e && (p = c), u.top - m.top > 3 && (i(p, m.top, null, m.bottom), p = c, m.bottom < u.top && i(p, m.bottom, null, u.top)), null == r && t == f && (h = d), (!a || m.top < a.top || m.top == a.top && m.left < a.left) && (a = m), (!l || u.bottom > l.bottom || u.bottom == l.bottom && u.right > l.right) && (l = u), p < c + 1 && (p = c), i(p, u.top, h - p, u.bottom)
        }), {start: a, end: l}
      }

      var a = e.display, s = e.doc, l = document.createDocumentFragment(),
          u = jt(e.display), c = u.left,
          d = Math.max(a.sizerWidth, Vt(e) - a.sizer.offsetLeft) - u.right,
          f = t.from(), p = t.to();
      if (f.line == p.line) {
        o(f.line, f.ch, p.ch);
      } else {
        var h = M(s, f.line), m = M(s, p.line), g = fe(h) == fe(m),
            v = o(f.line, f.ch, g ? h.text.length + 1 : null).end,
            y = o(p.line, g ? 0 : null, p.ch).start;
        g && (v.top < y.top - 2 ? (i(v.right, v.top, null, v.bottom), i(c, y.top, y.left, y.bottom)) : i(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && i(c, v.bottom, null, y.top)
      }
      n.appendChild(l)
    }

    function In(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
          return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
        }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
      }
    }

    function En(e) {
      e.state.focused || (e.display.input.focus(), Dn(e))
    }

    function Nn(e) {
      e.state.delayingBlurEvent = !0, setTimeout(function() {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, zn(e))
      }, 100)
    }

    function Dn(e, t) {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Ie(e, "focus", e, t), e.state.focused = !0, l(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), ea && setTimeout(function() {
        return e.display.input.reset(!0)
      }, 20)), e.display.input.receivedFocus()), In(e))
    }

    function zn(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (Ie(e, "blur", e, t), e.state.focused = !1, va(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
        e.state.focused || (e.display.shift = !1)
      }, 150))
    }

    function Pn(e) {
      var t = e.display, n = t.view;
      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
        for (var r = kn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) {
          if (!n[a].hidden) {
            e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
            var s = n[a].alignable;
            if (s) {
              for (var l = 0; l < s.length; l++) {
                s[l].style.left = o
              }
            }
          }
        }
        e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
      }
    }

    function Wn(e) {
      if (!e.options.lineNumbers) {
        return !1;
      }
      var t = e.doc, n = z(e.options, t.first + t.size - 1), i = e.display;
      if (n.length != i.lineNumChars) {
        var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
            a = o.firstChild.offsetWidth, s = o.offsetWidth - a;
        return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - s) + 1, i.lineNumWidth = i.lineNumInnerWidth + s, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", Mr(e), !0
      }
      return !1
    }

    function Fn(e) {
      for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
        var i = t.view[r], o = void 0;
        if (!i.hidden) {
          if (Jo && Qo < 8) {
            var a = i.node.offsetTop + i.node.offsetHeight;
            o = a - n, n = a
          } else {
            var s = i.node.getBoundingClientRect();
            o = s.bottom - s.top
          }
          var l = i.line.height - o;
          if (o < 2 && (o = bn(t)), (l > .001 || l < -.001) && (I(i.line, o), Hn(i.line), i.rest)) {
            for (var u = 0; u < i.rest.length; u++) {
              Hn(i.rest[u])
            }
          }
        }
      }
    }

    function Hn(e) {
      if (e.widgets) {
        for (var t = 0; t < e.widgets.length; ++t) {
          e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
        }
      }
    }

    function Rn(e, t, n) {
      var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Rt(e));
      var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          o = N(t, r), a = N(t, i);
      if (n && n.ensure) {
        var s = n.ensure.from.line, l = n.ensure.to.line;
        s < o ? (o = s, a = N(t, be(M(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = N(t, be(M(t, l)) - e.wrapper.clientHeight), a = l)
      }
      return {from: o, to: Math.max(a, o + 1)}
    }

    function Bn(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, $o || Tr(e, {top: t}), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), $o && Tr(e), xr(e, 100))
    }

    function jn(e, t, n) {
      (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, Pn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
    }

    function Un(e) {
      var t = e.wheelDeltaX, n = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
        x: t,
        y: n
      }
    }

    function Vn(e) {
      var t = Un(e);
      return t.x *= Qa, t.y *= Qa, t
    }

    function qn(e, t) {
      var n = Un(t), r = n.x, i = n.y, o = e.display, a = o.scroller,
          s = a.scrollWidth > a.clientWidth,
          l = a.scrollHeight > a.clientHeight;
      if (r && s || i && l) {
        if (i && ca && ea) {
          e:for (var u = t.target, c = o.view; u != a; u = u.parentNode) {
            for (var d = 0; d < c.length; d++) {
              if (c[d].node == u) {
                e.display.currentWheelTarget = u;
                break e
              }
            }
          }
        }
        if (r && !$o && !ra && null != Qa) {
          return i && l && Bn(e, Math.max(0, Math.min(a.scrollTop + i * Qa, a.scrollHeight - a.clientHeight))), jn(e, Math.max(0, Math.min(a.scrollLeft + r * Qa, a.scrollWidth - a.clientWidth))), (!i || i && l) && Pe(t), void(o.wheelStartX = null);
        }
        if (i && null != Qa) {
          var f = i * Qa, p = e.doc.scrollTop, h = p + o.wrapper.clientHeight;
          f < 0 ? p = Math.max(0, p + f - 50) : h = Math.min(e.doc.height, h + f + 50), Tr(e, {
            top: p,
            bottom: h
          })
        }
        Ja < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
          if (null != o.wheelStartX) {
            var e = a.scrollLeft - o.wheelStartX,
                t = a.scrollTop - o.wheelStartY,
                n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
            o.wheelStartX = o.wheelStartY = null, n && (Qa = (Qa * Ja + n) / (Ja + 1), ++Ja)
          }
        }, 200)) : (o.wheelDX += r, o.wheelDY += i))
      }
    }

    function Gn(e) {
      var t = e.display, n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + Bt(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + Ut(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n
      }
    }

    function Kn(e, t) {
      t || (t = Gn(e));
      var n = e.display.barWidth, r = e.display.barHeight;
      $n(e, t);
      for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) {
        n != e.display.barWidth && e.options.lineWrapping && Fn(e), $n(e, Gn(e)), n = e.display.barWidth, r = e.display.barHeight
      }
    }

    function $n(e, t) {
      var n = e.display, r = n.scrollbars.update(t);
      n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
    }

    function Xn(e) {
      e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && va(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new ns[e.options.scrollbarStyle](function(t) {
        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), za(t, "mousedown", function() {
          e.state.focused && setTimeout(function() {
            return e.display.input.focus()
          }, 0)
        }), t.setAttribute("cm-not-content", "true")
      }, function(t, n) {
        "horizontal" == n ? jn(e, t) : Bn(e, t)
      }, e), e.display.scrollbars.addClass && l(e.display.wrapper, e.display.scrollbars.addClass)
    }

    function Yn(e, t) {
      if (!Ee(e, "scrollCursorIntoView")) {
        var n = e.display, i = n.sizer.getBoundingClientRect(), o = null;
        if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !aa) {
          var a = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Rt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Ut(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
          e.display.lineSpace.appendChild(a), a.scrollIntoView(o), e.display.lineSpace.removeChild(a)
        }
      }
    }

    function Zn(e, t, n, r) {
      null == r && (r = 0);
      for (var i, o = 0; o < 5; o++) {
        var a = !1, s = fn(e, t), l = n && n != t ? fn(e, n) : s;
        i = {
          left: Math.min(s.left, l.left),
          top: Math.min(s.top, l.top) - r,
          right: Math.max(s.left, l.left),
          bottom: Math.max(s.bottom, l.bottom) + r
        };
        var u = Qn(e, i), c = e.doc.scrollTop, d = e.doc.scrollLeft;
        if (null != u.scrollTop && (Bn(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (jn(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) {
          break
        }
      }
      return i
    }

    function Jn(e, t) {
      var n = Qn(e, t);
      null != n.scrollTop && Bn(e, n.scrollTop), null != n.scrollLeft && jn(e, n.scrollLeft)
    }

    function Qn(e, t) {
      var n = e.display, r = bn(e.display);
      t.top < 0 && (t.top = 0);
      var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
          o = qt(e), a = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var s = e.doc.height + Bt(n), l = t.top < r, u = t.bottom > s - r;
      if (t.top < i) {
        a.scrollTop = l ? 0 : t.top;
      } else if (t.bottom > i + o) {
        var c = Math.min(t.top, (u ? s : t.bottom) - o);
        c != i && (a.scrollTop = c)
      }
      var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
          f = Vt(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
          p = t.right - t.left > f;
      return p && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < d ? a.scrollLeft = Math.max(0, t.left - (p ? 0 : 10)) : t.right > f + d - 3 && (a.scrollLeft = t.right + (p ? 0 : 10) - f), a
    }

    function er(e, t, n) {
      null == t && null == n || nr(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n)
    }

    function tr(e) {
      nr(e);
      var t = e.getCursor(), n = t, r = t;
      e.options.lineWrapping || (n = t.ch ? P(t.line, t.ch - 1) : t, r = P(t.line, t.ch + 1)), e.curOp.scrollToPos = {
        from: n,
        to: r,
        margin: e.options.cursorScrollMargin
      }
    }

    function nr(e) {
      var t = e.curOp.scrollToPos;
      if (t) {
        e.curOp.scrollToPos = null;
        var n = pn(e, t.from), r = pn(e, t.to), i = Qn(e, {
          left: Math.min(n.left, r.left),
          top: Math.min(n.top, r.top) - t.margin,
          right: Math.max(n.right, r.right),
          bottom: Math.max(n.bottom, r.bottom) + t.margin
        });
        e.scrollTo(i.scrollLeft, i.scrollTop)
      }
    }

    function rr(e) {
      e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: null,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++rs
      }, xt(e.curOp)
    }

    function ir(e) {
      Ct(e.curOp, function(e) {
        for (var t = 0; t < e.ops.length; t++) {
          e.ops[t].cm.curOp = null;
        }
        or(e)
      })
    }

    function or(e) {
      for (var t = e.ops, n = 0; n < t.length; n++) {
        ar(t[n]);
      }
      for (var r = 0; r < t.length; r++) {
        sr(t[r]);
      }
      for (var i = 0; i < t.length; i++) {
        lr(t[i]);
      }
      for (var o = 0; o < t.length; o++) {
        ur(t[o]);
      }
      for (var a = 0; a < t.length; a++) {
        cr(t[a])
      }
    }

    function ar(e) {
      var t = e.cm, n = t.display;
      Cr(t), e.updateMaxLine && xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new is(t, e.mustUpdate && {
        top: e.scrollTop,
        ensure: e.scrollToPos
      }, e.forceUpdate)
    }

    function sr(e) {
      e.updatedDisplay = e.mustUpdate && Sr(e.cm, e.update)
    }

    function lr(e) {
      var t = e.cm, n = t.display;
      e.updatedDisplay && Fn(t), e.barMeasure = Gn(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Xt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Ut(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Vt(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
    }

    function ur(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && jn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
      var n = e.focus && e.focus == s() && (!document.hasFocus || document.hasFocus());
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Kn(t, e.barMeasure), e.updatedDisplay && Or(t, e.barMeasure), e.selectionChanged && In(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && En(e.cm)
    }

    function cr(e) {
      var t = e.cm, n = t.display, r = t.doc;
      if (e.updatedDisplay && _r(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, Pn(t)), e.scrollToPos) {
        Yn(t, Zn(t, U(r, e.scrollToPos.from), U(r, e.scrollToPos.to), e.scrollToPos.margin))
      }
      var i = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
      if (i) {
        for (var a = 0; a < i.length; ++a) {
          i[a].lines.length || Ie(i[a], "hide");
        }
      }
      if (o) {
        for (var s = 0; s < o.length; ++s) {
          o[s].lines.length && Ie(o[s], "unhide");
        }
      }
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Ie(t, "changes", t, e.changeObjs), e.update && e.update.finish()
    }

    function dr(e, t) {
      if (e.curOp) {
        return t();
      }
      rr(e);
      try {
        return t()
      } finally {
        ir(e)
      }
    }

    function fr(e, t) {
      return function() {
        if (e.curOp) {
          return t.apply(e, arguments);
        }
        rr(e);
        try {
          return t.apply(e, arguments)
        } finally {
          ir(e)
        }
      }
    }

    function pr(e) {
      return function() {
        if (this.curOp) {
          return e.apply(this, arguments);
        }
        rr(this);
        try {
          return e.apply(this, arguments)
        } finally {
          ir(this)
        }
      }
    }

    function hr(e) {
      return function() {
        var t = this.cm;
        if (!t || t.curOp) {
          return e.apply(this, arguments);
        }
        rr(t);
        try {
          return e.apply(this, arguments)
        } finally {
          ir(t)
        }
      }
    }

    function mr(e, t, n, r) {
      null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
      var i = e.display;
      if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) {
        Ia && me(e.doc, t) < i.viewTo && vr(e);
      } else if (n <= i.viewFrom) {
        Ia && ge(e.doc, n + r) > i.viewFrom ? vr(e) : (i.viewFrom += r, i.viewTo += r);
      } else if (t <= i.viewFrom && n >= i.viewTo) {
        vr(e);
      } else if (t <= i.viewFrom) {
        var o = yr(e, n, n + r, 1);
        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : vr(e)
      } else if (n >= i.viewTo) {
        var a = yr(e, t, t, -1);
        a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : vr(e)
      } else {
        var s = yr(e, t, t, -1), l = yr(e, n, n + r, 1);
        s && l ? (i.view = i.view.slice(0, s.index).concat(wt(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : vr(e)
      }
      var u = i.externalMeasured;
      u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
    }

    function gr(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display, i = e.display.externalMeasured;
      if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
        var o = r.view[Tn(e, t)];
        if (null != o.node) {
          var a = o.changes || (o.changes = []);
          -1 == p(a, n) && a.push(n)
        }
      }
    }

    function vr(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
    }

    function yr(e, t, n, r) {
      var i, o = Tn(e, t), a = e.display.view;
      if (!Ia || n == e.doc.first + e.doc.size) {
        return {index: o, lineN: n};
      }
      for (var s = e.display.viewFrom, l = 0; l < o; l++) {
        s += a[l].size;
      }
      if (s != t) {
        if (r > 0) {
          if (o == a.length - 1) {
            return null;
          }
          i = s + a[o].size - t, o++
        } else {
          i = s - t;
        }
        t += i, n += i
      }
      for (; me(e.doc, n) != n;) {
        if (o == (r < 0 ? 0 : a.length - 1)) {
          return null;
        }
        n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
      }
      return {index: o, lineN: n}
    }

    function br(e, t, n) {
      var r = e.display;
      0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = wt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = wt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Tn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(wt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Tn(e, n)))), r.viewTo = n
    }

    function wr(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var i = t[r];
        i.hidden || i.node && !i.changes || ++n
      }
      return n
    }

    function xr(e, t) {
      e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, c(kr, e))
    }

    function kr(e) {
      var t = e.doc;
      if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
        var n = +new Date + e.options.workTime,
            r = Ye(t.mode, tt(e, t.frontier)), i = [];
        t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
          if (t.frontier >= e.display.viewFrom) {
            var a = o.styles, s = o.text.length > e.options.maxHighlightLength,
                l = Qe(e, o, s ? Ye(t.mode, r) : r, !0);
            o.styles = l.styles;
            var u = o.styleClasses, c = l.classes;
            c ? o.styleClasses = c : u && (o.styleClasses = null);
            for (var d = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !d && f < a.length; ++f) {
              d = a[f] != o.styles[f];
            }
            d && i.push(t.frontier), o.stateAfter = s ? r : Ye(t.mode, r)
          } else {
            o.text.length <= e.options.maxHighlightLength && nt(e, o.text, r), o.stateAfter = t.frontier % 5 == 0 ? Ye(t.mode, r) : null;
          }
          if (++t.frontier, +new Date > n) {
            return xr(e, e.options.workDelay), !0
          }
        }), i.length && dr(e, function() {
          for (var t = 0; t < i.length; t++) {
            gr(e, i[t], "text")
          }
        })
      }
    }

    function Cr(e) {
      var t = e.display;
      !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ut(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ut(e) + "px", t.scrollbarsClipped = !0)
    }

    function Sr(e, n) {
      var r = e.display, i = e.doc;
      if (n.editorIsHidden) {
        return vr(e), !1;
      }
      if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e)) {
        return !1;
      }
      Wn(e) && (vr(e), n.dims = xn(e));
      var o = i.first + i.size,
          a = Math.max(n.visible.from - e.options.viewportMargin, i.first),
          l = Math.min(o, n.visible.to + e.options.viewportMargin);
      r.viewFrom < a && a - r.viewFrom < 20 && (a = Math.max(i.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(o, r.viewTo)), Ia && (a = me(e.doc, a), l = ge(e.doc, l));
      var u = a != r.viewFrom || l != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
      br(e, a, l), r.viewOffset = be(M(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
      var c = wr(e);
      if (!u && 0 == c && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) {
        return !1;
      }
      var d = s();
      return c > 4 && (r.lineDiv.style.display = "none"), Lr(e, r.updateLineNumbers, n.dims), c > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, d && s() != d && d.offsetHeight && d.focus(), t(r.cursorDiv), t(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, u && (r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, xr(e, 400)), r.updateLineNumbers = null, !0
    }

    function _r(e, t) {
      for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Vt(e) || (n && null != n.top && (n = {top: Math.min(e.doc.height + Bt(e.display) - qt(e), n.top)}), t.visible = Rn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Sr(e, t); r = !1) {
        Fn(e);
        var i = Gn(e);
        Ln(e), Kn(e, i), Or(e, i)
      }
      t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
    }

    function Tr(e, t) {
      var n = new is(e, t);
      if (Sr(e, n)) {
        Fn(e), _r(e, n);
        var r = Gn(e);
        Ln(e), Kn(e, r), Or(e, r), n.finish()
      }
    }

    function Lr(e, n, r) {
      function i(t) {
        var n = t.nextSibling;
        return ea && ca && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
      }

      for (var o = e.display, a = e.options.lineNumbers, s = o.lineDiv, l = s.firstChild, u = o.view, c = o.viewFrom, d = 0; d < u.length; d++) {
        var f = u[d];
        if (f.hidden) {
          ;
        } else if (f.node && f.node.parentNode == s) {
          for (; l != f.node;) {
            l = i(l);
          }
          var h = a && null != n && n <= c && f.lineNumber;
          f.changes && (p(f.changes, "gutter") > -1 && (h = !1), Tt(e, f, c, r)), h && (t(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(z(e.options, c)))), l = f.node.nextSibling
        } else {
          var m = Dt(e, f, c, r);
          s.insertBefore(m, l)
        }
        c += f.size
      }
      for (; l;) {
        l = i(l)
      }
    }

    function Mr(e) {
      var t = e.display.gutters.offsetWidth;
      e.display.sizer.style.marginLeft = t + "px"
    }

    function Or(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ut(e) + "px"
    }

    function Ar(e) {
      var n = e.display.gutters, i = e.options.gutters;
      t(n);
      for (var o = 0; o < i.length; ++o) {
        var a = i[o],
            s = n.appendChild(r("div", null, "CodeMirror-gutter " + a));
        "CodeMirror-linenumbers" == a && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px")
      }
      n.style.display = o ? "" : "none", Mr(e)
    }

    function Ir(e) {
      var t = p(e.gutters, "CodeMirror-linenumbers");
      -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
    }

    function Er(e, t) {
      var n = e[t];
      e.sort(function(e, t) {
        return W(e.from(), t.from())
      }), t = p(e, n);
      for (var r = 1; r < e.length; r++) {
        var i = e[r], o = e[r - 1];
        if (W(o.to(), i.from()) >= 0) {
          var a = B(o.from(), i.from()), s = R(o.to(), i.to()),
              l = o.empty() ? i.from() == i.head : o.from() == o.head;
          r <= t && --t, e.splice(--r, 2, new as(l ? s : a, l ? a : s))
        }
      }
      return new os(e, t)
    }

    function Nr(e, t) {
      return new os([new as(e, t || e)], 0)
    }

    function Dr(e) {
      return e.text ? P(e.from.line + e.text.length - 1, g(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    }

    function zr(e, t) {
      if (W(e, t.from) < 0) {
        return e;
      }
      if (W(e, t.to) <= 0) {
        return Dr(t);
      }
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
      return e.line == t.to.line && (r += Dr(t).ch - t.to.ch), P(n, r)
    }

    function Pr(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var i = e.sel.ranges[r];
        n.push(new as(zr(i.anchor, t), zr(i.head, t)))
      }
      return Er(n, e.sel.primIndex)
    }

    function Wr(e, t, n) {
      return e.line == t.line ? P(n.line, e.ch - t.ch + n.ch) : P(n.line + (e.line - t.line), e.ch)
    }

    function Fr(e, t, n) {
      for (var r = [], i = P(e.first, 0), o = i, a = 0; a < t.length; a++) {
        var s = t[a], l = Wr(s.from, i, o), u = Wr(Dr(s), i, o);
        if (i = s.to, o = u, "around" == n) {
          var c = e.sel.ranges[a], d = W(c.head, c.anchor) < 0;
          r[a] = new as(d ? u : l, d ? l : u)
        } else {
          r[a] = new as(l, l)
        }
      }
      return new os(r, e.sel.primIndex)
    }

    function Hr(e) {
      e.doc.mode = $e(e.options, e.doc.modeOption), Rr(e)
    }

    function Rr(e) {
      e.doc.iter(function(e) {
        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
      }), e.doc.frontier = e.doc.first, xr(e, 100), e.state.modeGen++, e.curOp && mr(e)
    }

    function Br(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == g(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }

    function jr(e, t, n, r) {
      function i(e) {
        return n ? n[e] : null
      }

      function o(e, n, i) {
        ut(e, n, i, r), St(e, "change", e, t)
      }

      function a(e, t) {
        for (var n = [], o = e; o < t; ++o) {
          n.push(new qa(u[o], i(o), r));
        }
        return n
      }

      var s = t.from, l = t.to, u = t.text, c = M(e, s.line), d = M(e, l.line),
          f = g(u), p = i(u.length - 1), h = l.line - s.line;
      if (t.full) {
        e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
      } else if (Br(e, t)) {
        var m = a(0, u.length - 1);
        o(d, d.text, p), h && e.remove(s.line, h), m.length && e.insert(s.line, m)
      } else if (c == d) {
        if (1 == u.length) {
          o(c, c.text.slice(0, s.ch) + f + c.text.slice(l.ch), p);
        } else {
          var v = a(1, u.length - 1);
          v.push(new qa(f + c.text.slice(l.ch), p, r)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, v)
        }
      } else if (1 == u.length) {
        o(c, c.text.slice(0, s.ch) + u[0] + d.text.slice(l.ch), i(0)), e.remove(s.line + 1, h);
      } else {
        o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(d, f + d.text.slice(l.ch), p);
        var y = a(1, u.length - 1);
        h > 1 && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, y)
      }
      St(e, "change", e, t)
    }

    function Ur(e, t, n) {
      function r(e, i, o) {
        if (e.linked) {
          for (var a = 0; a < e.linked.length; ++a) {
            var s = e.linked[a];
            if (s.doc != i) {
              var l = o && s.sharedHist;
              n && !l || (t(s.doc, l), r(s.doc, e, l))
            }
          }
        }
      }

      r(e, null, !0)
    }

    function Vr(e, t) {
      if (t.cm) {
        throw new Error("This document is already in use.");
      }
      e.doc = t, t.cm = e, Sn(e), Hr(e), qr(e), e.options.lineWrapping || xe(e), e.options.mode = t.modeOption, mr(e)
    }

    function qr(e) {
      ("rtl" == e.doc.direction ? l : va)(e.display.lineDiv, "CodeMirror-rtl")
    }

    function Gr(e) {
      dr(e, function() {
        qr(e), mr(e)
      })
    }

    function Kr(e) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
    }

    function $r(e, t) {
      var n = {from: H(t.from), to: Dr(t), text: O(e, t.from, t.to)};
      return ti(e, n, t.from.line, t.to.line + 1), Ur(e, function(e) {
        return ti(e, n, t.from.line, t.to.line + 1)
      }, !0), n
    }

    function Xr(e) {
      for (; e.length;) {
        if (!g(e).ranges) {
          break;
        }
        e.pop()
      }
    }

    function Yr(e, t) {
      return t ? (Xr(e.done), g(e.done)) : e.done.length && !g(e.done).ranges ? g(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), g(e.done)) : void 0
    }

    function Zr(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var o, a, s = +new Date;
      if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > s - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = Yr(i, i.lastOp == r))) {
        a = g(o.changes), 0 == W(t.from, t.to) && 0 == W(t.from, a.to) ? a.to = Dr(t) : o.changes.push($r(e, t));
      } else {
        var l = g(i.done);
        for (l && l.ranges || ei(e.sel, i.done), o = {
          changes: [$r(e, t)],
          generation: i.generation
        }, i.done.push(o); i.done.length > i.undoDepth;) {
          i.done.shift(), i.done[0].ranges || i.done.shift()
        }
      }
      i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || Ie(e, "historyAdded")
    }

    function Jr(e, t, n, r) {
      var i = t.charAt(0);
      return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
    }

    function Qr(e, t, n, r) {
      var i = e.history, o = r && r.origin;
      n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Jr(e, o, g(i.done), t)) ? i.done[i.done.length - 1] = t : ei(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && Xr(i.undone)
    }

    function ei(e, t) {
      var n = g(t);
      n && n.ranges && n.equals(e) || t.push(e)
    }

    function ti(e, t, n, r) {
      var i = t["spans_" + e.id], o = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
        n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
      })
    }

    function ni(e) {
      if (!e) {
        return null;
      }
      for (var t, n = 0; n < e.length; ++n) {
        e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
      }
      return t ? t.length ? t : null : e
    }

    function ri(e, t) {
      var n = t["spans_" + e.id];
      if (!n) {
        return null;
      }
      for (var r = [], i = 0; i < t.text.length; ++i) {
        r.push(ni(n[i]));
      }
      return r
    }

    function ii(e, t) {
      var n = ri(e, t), r = ee(e, t);
      if (!n) {
        return r;
      }
      if (!r) {
        return n;
      }
      for (var i = 0; i < n.length; ++i) {
        var o = n[i], a = r[i];
        if (o && a) {
          e:for (var s = 0; s < a.length; ++s) {
            for (var l = a[s], u = 0; u < o.length; ++u) {
              if (o[u].marker == l.marker) {
                continue e;
              }
            }
            o.push(l)
          }
        } else {
          a && (n[i] = a)
        }
      }
      return n
    }

    function oi(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.ranges) {
          r.push(n ? os.prototype.deepCopy.call(o) : o);
        } else {
          var a = o.changes, s = [];
          r.push({changes: s});
          for (var l = 0; l < a.length; ++l) {
            var u = a[l], c = void 0;
            if (s.push({
                  from: u.from,
                  to: u.to,
                  text: u.text
                }), t) {
              for (var d in u) {
                (c = d.match(/^spans_(\d+)$/)) && p(t, Number(c[1])) > -1 && (g(s)[d] = u[d], delete u[d])
              }
            }
          }
        }
      }
      return r
    }

    function ai(e, t, n, r) {
      if (e.cm && e.cm.display.shift || e.extend) {
        var i = t.anchor;
        if (r) {
          var o = W(n, i) < 0;
          o != W(r, i) < 0 ? (i = n, n = r) : o != W(n, r) < 0 && (n = r)
        }
        return new as(i, n)
      }
      return new as(r || n, n)
    }

    function si(e, t, n, r) {
      pi(e, new os([ai(e, e.sel.primary(), t, n)], 0), r)
    }

    function li(e, t, n) {
      for (var r = [], i = 0; i < e.sel.ranges.length; i++) {
        r[i] = ai(e, e.sel.ranges[i], t[i], null);
      }
      pi(e, Er(r, e.sel.primIndex), n)
    }

    function ui(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      i[t] = n, pi(e, Er(i, e.sel.primIndex), r)
    }

    function ci(e, t, n, r) {
      pi(e, Nr(t, n), r)
    }

    function di(e, t, n) {
      var r = {
        ranges: t.ranges, update: function(t) {
          var n = this;
          this.ranges = [];
          for (var r = 0; r < t.length; r++) {
            n.ranges[r] = new as(U(e, t[r].anchor), U(e, t[r].head))
          }
        }, origin: n && n.origin
      };
      return Ie(e, "beforeSelectionChange", e, r), e.cm && Ie(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Er(r.ranges, r.ranges.length - 1) : t
    }

    function fi(e, t, n) {
      var r = e.history.done, i = g(r);
      i && i.ranges ? (r[r.length - 1] = t, hi(e, t, n)) : pi(e, t, n)
    }

    function pi(e, t, n) {
      hi(e, t, n), Qr(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
    }

    function hi(e, t, n) {
      (De(e, "beforeSelectionChange") || e.cm && De(e.cm, "beforeSelectionChange")) && (t = di(e, t, n)), mi(e, vi(e, t, n && n.bias || (W(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || tr(e.cm)
    }

    function mi(e, t) {
      t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Ne(e.cm)), St(e, "cursorActivity", e))
    }

    function gi(e) {
      mi(e, vi(e, e.sel, null, !1), Sa)
    }

    function vi(e, t, n, r) {
      for (var i, o = 0; o < t.ranges.length; o++) {
        var a = t.ranges[o],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            l = bi(e, a.anchor, s && s.anchor, n, r),
            u = bi(e, a.head, s && s.head, n, r);
        (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new as(l, u))
      }
      return i ? Er(i, t.primIndex) : t
    }

    function yi(e, t, n, r, i) {
      var o = M(e, t.line);
      if (o.markedSpans) {
        for (var a = 0; a < o.markedSpans.length; ++a) {
          var s = o.markedSpans[a], l = s.marker;
          if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
            if (i && (Ie(l, "beforeCursorEnter"), l.explicitlyCleared)) {
              if (o.markedSpans) {
                --a;
                continue
              }
              break
            }
            if (!l.atomic) {
              continue;
            }
            if (n) {
              var u = l.find(r < 0 ? 1 : -1), c = void 0;
              if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (u = wi(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = W(u, n)) && (r < 0 ? c < 0 : c > 0)) {
                return yi(e, u, t, r, i)
              }
            }
            var d = l.find(r < 0 ? -1 : 1);
            return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (d = wi(e, d, r, d.line == t.line ? o : null)), d ? yi(e, d, t, r, i) : null
          }
        }
      }
      return t
    }

    function bi(e, t, n, r, i) {
      var o = r || 1,
          a = yi(e, t, n, o, i) || !i && yi(e, t, n, o, !0) || yi(e, t, n, -o, i) || !i && yi(e, t, n, -o, !0);
      return a || (e.cantEdit = !0, P(e.first, 0))
    }

    function wi(e, t, n, r) {
      return n < 0 && 0 == t.ch ? t.line > e.first ? U(e, P(t.line - 1)) : null : n > 0 && t.ch == (r || M(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? P(t.line + 1, 0) : null : new P(t.line, t.ch + n)
    }

    function xi(e) {
      e.setSelection(P(e.firstLine(), 0), P(e.lastLine()), Sa)
    }

    function ki(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function() {
          return r.canceled = !0
        }
      };
      return n && (r.update = function(t, n, i, o) {
        t && (r.from = U(e, t)), n && (r.to = U(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
      }), Ie(e, "beforeChange", e, r), e.cm && Ie(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
        from: r.from,
        to: r.to,
        text: r.text,
        origin: r.origin
      }
    }

    function Ci(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) {
          return fr(e.cm, Ci)(e, t, n);
        }
        if (e.cm.state.suppressEdits) {
          return
        }
      }
      if (!(De(e, "beforeChange") || e.cm && De(e.cm, "beforeChange")) || (t = ki(e, t, !0))) {
        var r = Aa && !n && ne(e, t.from, t.to);
        if (r) {
          for (var i = r.length - 1; i >= 0; --i) {
            Si(e, {
              from: r[i].from,
              to: r[i].to,
              text: i ? [""] : t.text
            });
          }
        } else {
          Si(e, t)
        }
      }
    }

    function Si(e, t) {
      if (1 != t.text.length || "" != t.text[0] || 0 != W(t.from, t.to)) {
        var n = Pr(e, t);
        Zr(e, t, n, e.cm ? e.cm.curOp.id : NaN), Li(e, t, n, ee(e, t));
        var r = [];
        Ur(e, function(e, n) {
          n || -1 != p(r, e.history) || (Ei(e.history, t), r.push(e.history)), Li(e, t, null, ee(e, t))
        })
      }
    }

    function _i(e, t, n) {
      if (!e.cm || !e.cm.state.suppressEdits || n) {
        for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, l = 0; l < a.length && (r = a[l], n ? !r.ranges || r.equals(e.sel) : r.ranges); l++) {
          ;
        }
        if (l != a.length) {
          for (i.lastOrigin = i.lastSelOrigin = null; r = a.pop(), r.ranges;) {
            if (ei(r, s), n && !r.equals(e.sel)) {
              return void pi(e, r, {clearRedo: !1});
            }
            o = r
          }
          var u = [];
          ei(o, s), s.push({
            changes: u,
            generation: i.generation
          }), i.generation = r.generation || ++i.maxGeneration;
          for (var c = De(e, "beforeChange") || e.cm && De(e.cm, "beforeChange"), d = r.changes.length - 1; d >= 0; --d) {
            var f = function(n) {
              var i = r.changes[n];
              if (i.origin = t, c && !ki(e, i, !1)) {
                return a.length = 0, {};
              }
              u.push($r(e, i));
              var o = n ? Pr(e, i) : g(a);
              Li(e, i, o, ii(e, i)), !n && e.cm && e.cm.scrollIntoView({
                from: i.from,
                to: Dr(i)
              });
              var s = [];
              Ur(e, function(e, t) {
                t || -1 != p(s, e.history) || (Ei(e.history, i), s.push(e.history)), Li(e, i, null, ii(e, i))
              })
            }(d);
            if (f) {
              return f.v
            }
          }
        }
      }
    }

    function Ti(e, t) {
      if (0 != t && (e.first += t, e.sel = new os(v(e.sel.ranges, function(e) {
            return new as(P(e.anchor.line + t, e.anchor.ch), P(e.head.line + t, e.head.ch))
          }), e.sel.primIndex), e.cm)) {
        mr(e.cm, e.first, e.first - t, t);
        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
          gr(e.cm, r, "gutter")
        }
      }
    }

    function Li(e, t, n, r) {
      if (e.cm && !e.cm.curOp) {
        return fr(e.cm, Li)(e, t, n, r);
      }
      if (t.to.line < e.first) {
        return void Ti(e, t.text.length - 1 - (t.to.line - t.from.line));
      }
      if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var i = t.text.length - 1 - (e.first - t.from.line);
          Ti(e, i), t = {
            from: P(e.first, 0),
            to: P(t.to.line + i, t.to.ch),
            text: [g(t.text)],
            origin: t.origin
          }
        }
        var o = e.lastLine();
        t.to.line > o && (t = {
          from: t.from,
          to: P(o, M(e, o).text.length),
          text: [t.text[0]],
          origin: t.origin
        }), t.removed = O(e, t.from, t.to), n || (n = Pr(e, t)), e.cm ? Mi(e.cm, t, r) : jr(e, t, r), hi(e, n, Sa)
      }
    }

    function Mi(e, t, n) {
      var r = e.doc, i = e.display, o = t.from, a = t.to, s = !1, l = o.line;
      e.options.lineWrapping || (l = E(fe(M(r, o.line))), r.iter(l, a.line + 1, function(e) {
        if (e == i.maxLine) {
          return s = !0, !0
        }
      })), r.sel.contains(t.from, t.to) > -1 && Ne(e), jr(r, t, n, Cn(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(e) {
        var t = we(e);
        t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
      }), s && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, o.line), xr(e, 400);
      var u = t.text.length - (a.line - o.line) - 1;
      t.full ? mr(e) : o.line != a.line || 1 != t.text.length || Br(e.doc, t) ? mr(e, o.line, a.line + 1, u) : gr(e, o.line, "text");
      var c = De(e, "changes"), d = De(e, "change");
      if (d || c) {
        var f = {
          from: o,
          to: a,
          text: t.text,
          removed: t.removed,
          origin: t.origin
        };
        d && St(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
      }
      e.display.selForContextMenu = null
    }

    function Oi(e, t, n, r, i) {
      if (r || (r = n), W(r, n) < 0) {
        var o = r;
        r = n, n = o
      }
      "string" == typeof t && (t = e.splitLines(t)), Ci(e, {
        from: n,
        to: r,
        text: t,
        origin: i
      })
    }

    function Ai(e, t, n, r) {
      n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
    }

    function Ii(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
        var o = e[i], a = !0;
        if (o.ranges) {
          o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
          for (var s = 0; s < o.ranges.length; s++) {
            Ai(o.ranges[s].anchor, t, n, r), Ai(o.ranges[s].head, t, n, r)
          }
        } else {
          for (var l = 0; l < o.changes.length; ++l) {
            var u = o.changes[l];
            if (n < u.from.line) {
              u.from = P(u.from.line + r, u.from.ch), u.to = P(u.to.line + r, u.to.ch);
            } else if (t <= u.to.line) {
              a = !1;
              break
            }
          }
          a || (e.splice(0, i + 1), i = 0)
        }
      }
    }

    function Ei(e, t) {
      var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
      Ii(e.done, n, r, i), Ii(e.undone, n, r, i)
    }

    function Ni(e, t, n, r) {
      var i = t, o = t;
      return "number" == typeof t ? o = M(e, j(e, t)) : i = E(t), null == i ? null : (r(o, i) && e.cm && gr(e.cm, i, n), o)
    }

    function Di(e, t, n) {
      be(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && er(e, null, n)
    }

    function zi(e, t, n, r) {
      var i = new us(e, n, r), o = e.cm;
      return o && i.noHScroll && (o.display.alignWidgets = !0), Ni(e, t, "widget", function(t) {
        var n = t.widgets || (t.widgets = []);
        if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !ve(e, t)) {
          var r = be(t) < e.scrollTop;
          I(t, t.height + Ft(i)), r && er(o, null, i.height), o.curOp.forceUpdate = !0
        }
        return !0
      }), St(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : E(t)), i
    }

    function Pi(e, t, n, r, o) {
      if (r && r.shared) {
        return Wi(e, t, n, r, o);
      }
      if (e.cm && !e.cm.curOp) {
        return fr(e.cm, Pi)(e, t, n, r, o);
      }
      var a = new ds(e, o), s = W(t, n);
      if (r && d(r, a, !1), s > 0 || 0 == s && !1 !== a.clearWhenEmpty) {
        return a;
      }
      if (a.replacedWith && (a.collapsed = !0, a.widgetNode = i("span", [a.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
        if (de(e, t.line, t, n, a) || t.line != n.line && de(e, n.line, t, n, a)) {
          throw new Error("Inserting collapsed marker partially overlapping an existing one");
        }
        K()
      }
      a.addToHistory && Zr(e, {from: t, to: n, origin: "markText"}, e.sel, NaN);
      var l, u = t.line, c = e.cm;
      if (e.iter(u, n.line + 1, function(e) {
            c && a.collapsed && !c.options.lineWrapping && fe(e) == c.display.maxLine && (l = !0), a.collapsed && u != t.line && I(e, 0), Z(e, new $(a, u == t.line ? t.ch : null, u == n.line ? n.ch : null)), ++u
          }), a.collapsed && e.iter(t.line, n.line + 1, function(t) {
            ve(e, t) && I(t, 0)
          }), a.clearOnEnter && za(a, "beforeCursorEnter", function() {
            return a.clear()
          }), a.readOnly && (G(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++cs, a.atomic = !0), c) {
        if (l && (c.curOp.updateMaxLine = !0), a.collapsed) {
          mr(c, t.line, n.line + 1);
        } else if (a.className || a.title || a.startStyle || a.endStyle || a.css) {
          for (var f = t.line; f <= n.line; f++) {
            gr(c, f, "text");
          }
        }
        a.atomic && gi(c.doc), St(c, "markerAdded", c, a)
      }
      return a
    }

    function Wi(e, t, n, r, i) {
      r = d(r), r.shared = !1;
      var o = [Pi(e, t, n, r, i)], a = o[0], s = r.widgetNode;
      return Ur(e, function(e) {
        s && (r.widgetNode = s.cloneNode(!0)), o.push(Pi(e, U(e, t), U(e, n), r, i));
        for (var l = 0; l < e.linked.length; ++l) {
          if (e.linked[l].isParent) {
            return;
          }
        }
        a = g(o)
      }), new fs(o, a)
    }

    function Fi(e) {
      return e.findMarks(P(e.first, 0), e.clipPos(P(e.lastLine())), function(e) {
        return e.parent
      })
    }

    function Hi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
        if (W(o, a)) {
          var s = Pi(e, o, a, r.primary, r.primary.type);
          r.markers.push(s), s.parent = r
        }
      }
    }

    function Ri(e) {
      for (var t = 0; t < e.length; t++) {
        !function(t) {
          var n = e[t], r = [n.primary.doc];
          Ur(n.primary.doc, function(e) {
            return r.push(e)
          });
          for (var i = 0; i < n.markers.length; i++) {
            var o = n.markers[i];
            -1 == p(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
          }
        }(t)
      }
    }

    function Bi(e) {
      var t = this;
      if (Vi(t), !Ee(t, e) && !Ht(t.display, e)) {
        Pe(e), Jo && (ms = +new Date);
        var n = _n(t, e, !0), r = e.dataTransfer.files;
        if (n && !t.isReadOnly()) {
          if (r && r.length && window.FileReader && window.File) {
            for (var i = r.length, o = Array(i), a = 0, s = 0; s < i; ++s) {
              !function(e, r) {
                if (!t.options.allowDropFileTypes || -1 != p(t.options.allowDropFileTypes, e.type)) {
                  var s = new FileReader;
                  s.onload = fr(t, function() {
                    var e = s.result;
                    if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
                      n = U(t.doc, n);
                      var l = {
                        from: n,
                        to: n,
                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                        origin: "paste"
                      };
                      Ci(t.doc, l), fi(t.doc, Nr(n, Dr(l)))
                    }
                  }), s.readAsText(e)
                }
              }(r[s], s);
            }
          } else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
              return t.state.draggingText(e), void setTimeout(function() {
                return t.display.input.focus()
              }, 20);
            }
            try {
              var l = e.dataTransfer.getData("Text");
              if (l) {
                var u;
                if (t.state.draggingText && !t.state.draggingText.copy && (u = t.listSelections()), hi(t.doc, Nr(n, n)), u) {
                  for (var c = 0; c < u.length; ++c) {
                    Oi(t.doc, "", u[c].anchor, u[c].head, "drag");
                  }
                }
                t.replaceSelection(l, "around", "paste"), t.display.input.focus()
              }
            } catch (e) {
            }
          }
        }
      }
    }

    function ji(e, t) {
      if (Jo && (!e.state.draggingText || +new Date - ms < 100)) {
        return void He(t);
      }
      if (!Ee(e, t) && !Ht(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !ia)) {
        var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ra && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), ra && n.parentNode.removeChild(n)
      }
    }

    function Ui(e, t) {
      var i = _n(e, t);
      if (i) {
        var o = document.createDocumentFragment();
        On(e, i, o), e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), n(e.display.dragCursor, o)
      }
    }

    function Vi(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
    }

    function qi(e) {
      if (document.body.getElementsByClassName) {
        for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
          var r = t[n].CodeMirror;
          r && e(r)
        }
      }
    }

    function Gi() {
      gs || (Ki(), gs = !0)
    }

    function Ki() {
      var e;
      za(window, "resize", function() {
        null == e && (e = setTimeout(function() {
          e = null, qi($i)
        }, 100))
      }), za(window, "blur", function() {
        return qi(zn)
      })
    }

    function $i(e) {
      var t = e.display;
      t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
    }

    function Xi(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var n, r, i, o, a = 0; a < t.length - 1; a++) {
        var s = t[a];
        if (/^(cmd|meta|m)$/i.test(s)) {
          o = !0;
        } else if (/^a(lt)?$/i.test(s)) {
          n = !0;
        } else if (/^(c|ctrl|control)$/i.test(s)) {
          r = !0;
        } else {
          if (!/^s(hift)?$/i.test(s)) {
            throw new Error("Unrecognized modifier name: " + s);
          }
          i = !0
        }
      }
      return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e
    }

    function Yi(e) {
      var t = {};
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (/^(name|fallthrough|(de|at)tach)$/.test(n)) {
            continue;
          }
          if ("..." == r) {
            delete e[n];
            continue
          }
          for (var i = v(n.split(" "), Xi), o = 0; o < i.length; o++) {
            var a = void 0, s = void 0;
            o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
            var l = t[s];
            if (l) {
              if (l != a) {
                throw new Error("Inconsistent bindings for " + s)
              }
            } else {
              t[s] = a
            }
          }
          delete e[n]
        }
      }
      for (var u in t) {
        e[u] = t[u];
      }
      return e
    }

    function Zi(e, t, n, r) {
      t = eo(t);
      var i = t.call ? t.call(e, r) : t[e];
      if (!1 === i) {
        return "nothing";
      }
      if ("..." === i) {
        return "multi";
      }
      if (null != i && n(i)) {
        return "handled";
      }
      if (t.fallthrough) {
        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) {
          return Zi(e, t.fallthrough, n, r);
        }
        for (var o = 0; o < t.fallthrough.length; o++) {
          var a = Zi(e, t.fallthrough[o], n, r);
          if (a) {
            return a
          }
        }
      }
    }

    function Ji(e) {
      var t = "string" == typeof e ? e : vs[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }

    function Qi(e, t) {
      if (ra && 34 == e.keyCode && e.char) {
        return !1;
      }
      var n = vs[e.keyCode], r = n;
      return null != r && !e.altGraphKey && (e.altKey && "Alt" != n && (r = "Alt-" + r), (ma ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (ma ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r)
    }

    function eo(e) {
      return "string" == typeof e ? xs[e] : e
    }

    function to(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
        for (var o = t(n[i]); r.length && W(o.from, g(r).to) <= 0;) {
          var a = r.pop();
          if (W(a.from, o.from) < 0) {
            o.from = a.from;
            break
          }
        }
        r.push(o)
      }
      dr(e, function() {
        for (var t = r.length - 1; t >= 0; t--) {
          Oi(e.doc, "", r[t].from, r[t].to, "+delete");
        }
        tr(e)
      })
    }

    function no(e, t) {
      var n = M(e.doc, t), r = fe(n);
      return r != n && (t = E(r)), Le(!0, e, r, t, 1)
    }

    function ro(e, t) {
      var n = M(e.doc, t), r = pe(n);
      return r != n && (t = E(r)), Le(!0, e, n, t, -1)
    }

    function io(e, t) {
      var n = no(e, t.line), r = M(e.doc, n.line), i = Se(r, e.doc.direction);
      if (!i || 0 == i[0].level) {
        var o = Math.max(0, r.text.search(/\S/)),
            a = t.line == n.line && t.ch <= o && t.ch;
        return P(n.line, a ? 0 : o, n.sticky)
      }
      return n
    }

    function oo(e, t, n) {
      if ("string" == typeof t && !(t = Ss[t])) {
        return !1;
      }
      e.display.input.ensurePolled();
      var r = e.display.shift, i = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != Ca
      } finally {
        e.display.shift = r, e.state.suppressEdits = !1
      }
      return i
    }

    function ao(e, t, n) {
      for (var r = 0; r < e.state.keyMaps.length; r++) {
        var i = Zi(t, e.state.keyMaps[r], n, e);
        if (i) {
          return i
        }
      }
      return e.options.extraKeys && Zi(t, e.options.extraKeys, n, e) || Zi(t, e.options.keyMap, n, e)
    }

    function so(e, t, n, r) {
      var i = e.state.keySeq;
      if (i) {
        if (Ji(t)) {
          return "handled";
        }
        _s.set(50, function() {
          e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
        }), t = i + " " + t
      }
      var o = ao(e, t, r);
      return "multi" == o && (e.state.keySeq = t), "handled" == o && St(e, "keyHandled", e, t, n), "handled" != o && "multi" != o || (Pe(n), In(e)), i && !o && /\'$/.test(t) ? (Pe(n), !0) : !!o
    }

    function lo(e, t) {
      var n = Qi(t, !0);
      return !!n && (t.shiftKey && !e.state.keySeq ? so(e, "Shift-" + n, t, function(t) {
        return oo(e, t, !0)
      }) || so(e, n, t, function(t) {
        if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) {
          return oo(e, t)
        }
      }) : so(e, n, t, function(t) {
        return oo(e, t)
      }))
    }

    function uo(e, t, n) {
      return so(e, "'" + n + "'", t, function(t) {
        return oo(e, t, !0)
      })
    }

    function co(e) {
      var t = this;
      if (t.curOp.focus = s(), !Ee(t, e)) {
        Jo && Qo < 11 && 27 == e.keyCode && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = 16 == n || e.shiftKey;
        var r = lo(t, e);
        ra && (Ts = r ? n : null, !r && 88 == n && !Ha && (ca ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || fo(t)
      }
    }

    function fo(e) {
      function t(e) {
        18 != e.keyCode && e.altKey || (va(n, "CodeMirror-crosshair"), Ae(document, "keyup", t), Ae(document, "mouseover", t))
      }

      var n = e.display.lineDiv;
      l(n, "CodeMirror-crosshair"), za(document, "keyup", t), za(document, "mouseover", t)
    }

    function po(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1), Ee(this, e)
    }

    function ho(e) {
      var t = this;
      if (!(Ht(t.display, e) || Ee(t, e) || e.ctrlKey && !e.altKey || ca && e.metaKey)) {
        var n = e.keyCode, r = e.charCode;
        if (ra && n == Ts) {
          return Ts = null, void Pe(e);
        }
        if (!ra || e.which && !(e.which < 10) || !lo(t, e)) {
          var i = String.fromCharCode(null == r ? n : r);
          "\b" != i && (uo(t, e, i) || t.display.input.onKeyPress(e))
        }
      }
    }

    function mo(e) {
      var t = this, n = t.display;
      if (!(Ee(t, e) || n.activeTouch && n.input.supportsTouch())) {
        if (n.input.ensurePolled(), n.shift = e.shiftKey, Ht(n, e)) {
          return void(ea || (n.scroller.draggable = !1, setTimeout(function() {
            return n.scroller.draggable = !0
          }, 100)));
        }
        if (!wo(t, e)) {
          var r = _n(t, e);
          switch (window.focus(), Be(e)) {
            case 1:
              t.state.selectingText ? t.state.selectingText(e) : r ? go(t, e, r) : Re(e) == n.scroller && Pe(e);
              break;
            case 2:
              ea && (t.state.lastMiddleDown = +new Date), r && si(t.doc, r), setTimeout(function() {
                return n.input.focus()
              }, 20), Pe(e);
              break;
            case 3:
              ga ? xo(t, e) : Nn(t)
          }
        }
      }
    }

    function go(e, t, n) {
      Jo ? setTimeout(c(En, e), 0) : e.curOp.focus = s();
      var r, i = +new Date;
      Cs && Cs.time > i - 400 && 0 == W(Cs.pos, n) ? r = "triple" : ks && ks.time > i - 400 && 0 == W(ks.pos, n) ? (r = "double", Cs = {
        time: i,
        pos: n
      }) : (r = "single", ks = {time: i, pos: n});
      var o, a = e.doc.sel, l = ca ? t.metaKey : t.ctrlKey;
      e.options.dragDrop && Pa && !e.isReadOnly() && "single" == r && (o = a.contains(n)) > -1 && (W((o = a.ranges[o]).from(), n) < 0 || n.xRel > 0) && (W(o.to(), n) > 0 || n.xRel < 0) ? vo(e, t, n, l) : yo(e, t, n, r, l)
    }

    function vo(e, t, n, r) {
      var i = e.display, o = +new Date, a = fr(e, function(s) {
        ea && (i.scroller.draggable = !1), e.state.draggingText = !1, Ae(document, "mouseup", a), Ae(i.scroller, "drop", a), Math.abs(t.clientX - s.clientX) + Math.abs(t.clientY - s.clientY) < 10 && (Pe(s), !r && +new Date - 200 < o && si(e.doc, n), ea || Jo && 9 == Qo ? setTimeout(function() {
          document.body.focus(), i.input.focus()
        }, 20) : i.input.focus())
      });
      ea && (i.scroller.draggable = !0), e.state.draggingText = a, a.copy = ca ? t.altKey : t.ctrlKey, i.scroller.dragDrop && i.scroller.dragDrop(), za(document, "mouseup", a), za(i.scroller, "drop", a)
    }

    function yo(e, t, n, r, i) {
      function o(t) {
        if (0 != W(b, t)) {
          if (b = t, "rect" == r) {
            for (var i = [], o = e.options.tabSize, a = f(M(c, n.line).text, n.ch, o), s = f(M(c, t.line).text, t.ch, o), l = Math.min(a, s), u = Math.max(a, s), g = Math.min(n.line, t.line), v = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= v; g++) {
              var y = M(c, g).text, w = h(y, l, o);
              l == u ? i.push(new as(P(g, w), P(g, w))) : y.length > w && i.push(new as(P(g, w), P(g, h(y, u, o))))
            }
            i.length || i.push(new as(n, n)), pi(c, Er(m.ranges.slice(0, p).concat(i), p), {
              origin: "*mouse",
              scroll: !1
            }), e.scrollIntoView(t)
          } else {
            var x = d, k = x.anchor, C = t;
            if ("single" != r) {
              var S;
              S = "double" == r ? e.findWordAt(t) : new as(P(t.line, 0), U(c, P(t.line + 1, 0))), W(S.anchor, k) > 0 ? (C = S.head, k = B(x.from(), S.anchor)) : (C = S.anchor, k = R(x.to(), S.head))
            }
            var _ = m.ranges.slice(0);
            _[p] = new as(U(c, k), C), pi(c, Er(_, p), _a)
          }
        }
      }

      function a(t) {
        var n = ++x, i = _n(e, t, !0, "rect" == r);
        if (i) {
          if (0 != W(i, b)) {
            e.curOp.focus = s(), o(i);
            var l = Rn(u, c);
            (i.line >= l.to || i.line < l.from) && setTimeout(fr(e, function() {
              x == n && a(t)
            }), 150)
          } else {
            var d = t.clientY < w.top ? -20 : t.clientY > w.bottom ? 20 : 0;
            d && setTimeout(fr(e, function() {
              x == n && (u.scroller.scrollTop += d, a(t))
            }), 50)
          }
        }
      }

      function l(t) {
        e.state.selectingText = !1, x = 1 / 0, Pe(t), u.input.focus(), Ae(document, "mousemove", k), Ae(document, "mouseup", C), c.history.lastSelOrigin = null
      }

      var u = e.display, c = e.doc;
      Pe(t);
      var d, p, m = c.sel, g = m.ranges;
      if (i && !t.shiftKey ? (p = c.sel.contains(n), d = p > -1 ? g[p] : new as(n, n)) : (d = c.sel.primary(), p = c.sel.primIndex), da ? t.shiftKey && t.metaKey : t.altKey) {
        r = "rect", i || (d = new as(n, n)), n = _n(e, t, !0, !0), p = -1;
      } else if ("double" == r) {
        var v = e.findWordAt(n);
        d = e.display.shift || c.extend ? ai(c, d, v.anchor, v.head) : v
      } else if ("triple" == r) {
        var y = new as(P(n.line, 0), U(c, P(n.line + 1, 0)));
        d = e.display.shift || c.extend ? ai(c, d, y.anchor, y.head) : y
      } else {
        d = ai(c, d, n);
      }
      i ? -1 == p ? (p = g.length, pi(c, Er(g.concat([d]), p), {
        scroll: !1,
        origin: "*mouse"
      })) : g.length > 1 && g[p].empty() && "single" == r && !t.shiftKey ? (pi(c, Er(g.slice(0, p).concat(g.slice(p + 1)), 0), {
        scroll: !1,
        origin: "*mouse"
      }), m = c.sel) : ui(c, p, d, _a) : (p = 0, pi(c, new os([d], 0), _a), m = c.sel);
      var b = n, w = u.wrapper.getBoundingClientRect(), x = 0,
          k = fr(e, function(e) {
            Be(e) ? a(e) : l(e)
          }), C = fr(e, l);
      e.state.selectingText = C, za(document, "mousemove", k), za(document, "mouseup", C)
    }

    function bo(e, t, n, r) {
      var i, o;
      try {
        i = t.clientX, o = t.clientY
      } catch (t) {
        return !1
      }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) {
        return !1;
      }
      r && Pe(t);
      var a = e.display, s = a.lineDiv.getBoundingClientRect();
      if (o > s.bottom || !De(e, n)) {
        return Fe(t);
      }
      o -= s.top - a.viewOffset;
      for (var l = 0; l < e.options.gutters.length; ++l) {
        var u = a.gutters.childNodes[l];
        if (u && u.getBoundingClientRect().right >= i) {
          return Ie(e, n, e, N(e.doc, o), e.options.gutters[l], t), Fe(t)
        }
      }
    }

    function wo(e, t) {
      return bo(e, t, "gutterClick", !0)
    }

    function xo(e, t) {
      Ht(e.display, t) || ko(e, t) || Ee(e, t, "contextmenu") || e.display.input.onContextMenu(t)
    }

    function ko(e, t) {
      return !!De(e, "gutterContextMenu") && bo(e, t, "gutterContextMenu", !1)
    }

    function Co(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), an(e)
    }

    function So(e) {
      Ar(e), mr(e), Pn(e)
    }

    function _o(e, t, n) {
      if (!t != !(n && n != Ls)) {
        var r = e.display.dragFunctions, i = t ? za : Ae;
        i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop)
      }
    }

    function To(e) {
      e.options.lineWrapping ? (l(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (va(e.display.wrapper, "CodeMirror-wrap"), xe(e)), Sn(e), mr(e), an(e), setTimeout(function() {
        return Kn(e)
      }, 100)
    }

    function Lo(e, t) {
      var n = this;
      if (!(this instanceof Lo)) {
        return new Lo(e, t);
      }
      this.options = t = t ? d(t) : {}, d(Ms, t, !1), Ir(t);
      var r = t.value;
      "string" == typeof r && (r = new hs(r, t.mode, null, t.lineSeparator, t.direction)), this.doc = r;
      var i = new Lo.inputStyles[t.inputStyle](this),
          o = this.display = new L(e, r, i);
      o.wrapper.CodeMirror = this, Ar(this), Co(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Xn(this), this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: !1,
        cutIncoming: !1,
        selectingText: !1,
        draggingText: !1,
        highlight: new ba,
        keySeq: null,
        specialChars: null
      }, t.autofocus && !ua && o.input.focus(), Jo && Qo < 11 && setTimeout(function() {
        return n.display.input.reset(!0)
      }, 20), Mo(this), Gi(), rr(this), this.curOp.forceUpdate = !0, Vr(this, r), t.autofocus && !ua || this.hasFocus() ? setTimeout(c(Dn, this), 20) : zn(this);
      for (var a in Os) {
        Os.hasOwnProperty(a) && Os[a](n, t[a], Ls);
      }
      Wn(this), t.finishInit && t.finishInit(this);
      for (var s = 0; s < As.length; ++s) {
        As[s](n);
      }
      ir(this), ea && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
    }

    function Mo(e) {
      function t() {
        i.activeTouch && (o = setTimeout(function() {
          return i.activeTouch = null
        }, 1e3), a = i.activeTouch, a.end = +new Date)
      }

      function n(e) {
        if (1 != e.touches.length) {
          return !1;
        }
        var t = e.touches[0];
        return t.radiusX <= 1 && t.radiusY <= 1
      }

      function r(e, t) {
        if (null == t.left) {
          return !0;
        }
        var n = t.left - e.left, r = t.top - e.top;
        return n * n + r * r > 400
      }

      var i = e.display;
      za(i.scroller, "mousedown", fr(e, mo)), Jo && Qo < 11 ? za(i.scroller, "dblclick", fr(e, function(t) {
        if (!Ee(e, t)) {
          var n = _n(e, t);
          if (n && !wo(e, t) && !Ht(e.display, t)) {
            Pe(t);
            var r = e.findWordAt(n);
            si(e.doc, r.anchor, r.head)
          }
        }
      })) : za(i.scroller, "dblclick", function(t) {
        return Ee(e, t) || Pe(t)
      }), ga || za(i.scroller, "contextmenu", function(t) {
        return xo(e, t)
      });
      var o, a = {end: 0};
      za(i.scroller, "touchstart", function(t) {
        if (!Ee(e, t) && !n(t)) {
          i.input.ensurePolled(), clearTimeout(o);
          var r = +new Date;
          i.activeTouch = {
            start: r,
            moved: !1,
            prev: r - a.end <= 300 ? a : null
          }, 1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY)
        }
      }), za(i.scroller, "touchmove", function() {
        i.activeTouch && (i.activeTouch.moved = !0)
      }), za(i.scroller, "touchend", function(n) {
        var o = i.activeTouch;
        if (o && !Ht(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
          var a, s = e.coordsChar(i.activeTouch, "page");
          a = !o.prev || r(o, o.prev) ? new as(s, s) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(s) : new as(P(s.line, 0), U(e.doc, P(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), Pe(n)
        }
        t()
      }), za(i.scroller, "touchcancel", t), za(i.scroller, "scroll", function() {
        i.scroller.clientHeight && (Bn(e, i.scroller.scrollTop), jn(e, i.scroller.scrollLeft, !0), Ie(e, "scroll", e))
      }), za(i.scroller, "mousewheel", function(t) {
        return qn(e, t)
      }), za(i.scroller, "DOMMouseScroll", function(t) {
        return qn(e, t)
      }), za(i.wrapper, "scroll", function() {
        return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
      }), i.dragFunctions = {
        enter: function(t) {
          Ee(e, t) || He(t)
        }, over: function(t) {
          Ee(e, t) || (Ui(e, t), He(t))
        }, start: function(t) {
          return ji(e, t)
        }, drop: fr(e, Bi), leave: function(t) {
          Ee(e, t) || Vi(e)
        }
      };
      var s = i.input.getField();
      za(s, "keyup", function(t) {
        return po.call(e, t)
      }), za(s, "keydown", fr(e, co)), za(s, "keypress", fr(e, ho)), za(s, "focus", function(t) {
        return Dn(e, t)
      }), za(s, "blur", function(t) {
        return zn(e, t)
      })
    }

    function Oo(e, t, n, r) {
      var i, o = e.doc;
      null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = tt(e, t) : n = "prev");
      var a = e.options.tabSize, s = M(o, t), l = f(s.text, null, a);
      s.stateAfter && (s.stateAfter = null);
      var u, c = s.text.match(/^\s*/)[0];
      if (r || /\S/.test(s.text)) {
        if ("smart" == n && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == Ca || u > 150)) {
          if (!r) {
            return;
          }
          n = "prev"
        }
      } else {
        u = 0, n = "not";
      }
      "prev" == n ? u = t > o.first ? f(M(o, t - 1).text, null, a) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n), u = Math.max(0, u);
      var d = "", p = 0;
      if (e.options.indentWithTabs) {
        for (var h = Math.floor(u / a); h; --h) {
          p += a, d += "\t";
        }
      }
      if (p < u && (d += m(u - p)), d != c) {
        return Oi(o, d, P(t, 0), P(t, c.length), "+input"), s.stateAfter = null, !0;
      }
      for (var g = 0; g < o.sel.ranges.length; g++) {
        var v = o.sel.ranges[g];
        if (v.head.line == t && v.head.ch < c.length) {
          var y = P(t, c.length);
          ui(o, g, new as(y, y));
          break
        }
      }
    }

    function Ao(e) {
      Is = e
    }

    function Io(e, t, n, r, i) {
      var o = e.doc;
      e.display.shift = !1, r || (r = o.sel);
      var a = e.state.pasteIncoming || "paste" == i, s = Wa(t), l = null;
      if (a && r.ranges.length > 1) {
        if (Is && Is.text.join("\n") == t) {
          if (r.ranges.length % Is.text.length == 0) {
            l = [];
            for (var u = 0; u < Is.text.length; u++) {
              l.push(o.splitLines(Is.text[u]))
            }
          }
        } else {
          s.length == r.ranges.length && (l = v(s, function(e) {
            return [e]
          }));
        }
      }
      for (var c, d = r.ranges.length - 1; d >= 0; d--) {
        var f = r.ranges[d], p = f.from(), h = f.to();
        f.empty() && (n && n > 0 ? p = P(p.line, p.ch - n) : e.state.overwrite && !a ? h = P(h.line, Math.min(M(o, h.line).text.length, h.ch + g(s).length)) : Is && Is.lineWise && Is.text.join("\n") == t && (p = h = P(p.line, 0))), c = e.curOp.updateInput;
        var m = {
          from: p,
          to: h,
          text: l ? l[d % l.length] : s,
          origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input")
        };
        Ci(e.doc, m), St(e, "inputRead", e, m)
      }
      t && !a && No(e, t), tr(e), e.curOp.updateInput = c, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
    }

    function Eo(e, t) {
      var n = e.clipboardData && e.clipboardData.getData("Text");
      if (n) {
        return e.preventDefault(), t.isReadOnly() || t.options.disableInput || dr(t, function() {
          return Io(t, n, 0, null, "paste")
        }), !0
      }
    }

    function No(e, t) {
      if (e.options.electricChars && e.options.smartIndent) {
        for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
          var i = n.ranges[r];
          if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
            var o = e.getModeAt(i.head), a = !1;
            if (o.electricChars) {
              for (var s = 0; s < o.electricChars.length; s++) {
                if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                  a = Oo(e, i.head.line, "smart");
                  break
                }
              }
            } else {
              o.electricInput && o.electricInput.test(M(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Oo(e, i.head.line, "smart"));
            }
            a && St(e, "electricInput", e, i.head.line)
          }
        }
      }
    }

    function Do(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var i = e.doc.sel.ranges[r].head.line,
            o = {anchor: P(i, 0), head: P(i + 1, 0)};
        n.push(o), t.push(e.getRange(o.anchor, o.head))
      }
      return {text: t, ranges: n}
    }

    function zo(e, t) {
      e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
    }

    function Po() {
      var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
          t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return ea ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), sa && (e.style.border = "1px solid black"), zo(e), t
    }

    function Wo(e, t, n, r, i) {
      function o() {
        var r = t.line + n;
        return !(r < e.first || r >= e.first + e.size) && (t = new P(r, t.ch, t.sticky), u = M(e, r))
      }

      function a(r) {
        var a;
        if (null == (a = i ? Me(e.cm, u, t, n) : Te(u, t, n))) {
          if (r || !o()) {
            return !1;
          }
          t = Le(i, e.cm, u, t.line, n)
        } else {
          t = a;
        }
        return !0
      }

      var s = t, l = n, u = M(e, t.line);
      if ("char" == r) {
        a();
      } else if ("column" == r) {
        a(!0);
      } else if ("word" == r || "group" == r) {
        for (var c = null, d = "group" == r, f = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(n < 0) || a(!p); p = !1) {
          var h = u.text.charAt(t.ch) || "\n",
              m = k(h, f) ? "w" : d && "\n" == h ? "n" : !d || /\s/.test(h) ? null : "p";
          if (!d || p || m || (m = "s"), c && c != m) {
            n < 0 && (n = 1, a(), t.sticky = "after");
            break
          }
          if (m && (c = m), n > 0 && !a(!p)) {
            break
          }
        }
      }
      var g = bi(e, t, s, l, !0);
      return F(s, g) && (g.hitSide = !0), g
    }

    function Fo(e, t, n, r) {
      var i, o = e.doc, a = t.left;
      if ("page" == r) {
        var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
            l = Math.max(s - .5 * bn(e.display), 3);
        i = (n > 0 ? t.bottom : t.top) + n * l
      } else {
        "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
      }
      for (var u; u = mn(e, a, i), u.outside;) {
        if (n < 0 ? i <= 0 : i >= o.height) {
          u.hitSide = !0;
          break
        }
        i += 5 * n
      }
      return u
    }

    function Ho(e, t) {
      var n = Yt(e, t.line);
      if (!n || n.hidden) {
        return null;
      }
      var r = M(e.doc, t.line), i = Kt(n, r, t.line),
          o = Se(r, e.doc.direction), a = "left";
      if (o) {
        a = Ce(o, t.ch) % 2 ? "right" : "left"
      }
      var s = Qt(i.map, t.ch, a);
      return s.offset = "right" == s.collapse ? s.end : s.start, s
    }

    function Ro(e) {
      for (var t = e; t; t = t.parentNode) {
        if (/CodeMirror-gutter-wrapper/.test(t.className)) {
          return !0;
        }
      }
      return !1
    }

    function Bo(e, t) {
      return t && (e.bad = !0), e
    }

    function jo(e, t, n, r, i) {
      function o(e) {
        return function(t) {
          return t.id == e
        }
      }

      function a() {
        c && (u += d, c = !1)
      }

      function s(e) {
        e && (a(), u += e)
      }

      function l(t) {
        if (1 == t.nodeType) {
          var n = t.getAttribute("cm-text");
          if (null != n) {
            return void s(n || t.textContent.replace(/\u200b/g, ""));
          }
          var u, f = t.getAttribute("cm-marker");
          if (f) {
            var p = e.findMarks(P(r, 0), P(i + 1, 0), o(+f));
            return void(p.length && (u = p[0].find()) && s(O(e.doc, u.from, u.to).join(d)))
          }
          if ("false" == t.getAttribute("contenteditable")) {
            return;
          }
          var h = /^(pre|div|p)$/i.test(t.nodeName);
          h && a();
          for (var m = 0; m < t.childNodes.length; m++) {
            l(t.childNodes[m]);
          }
          h && (c = !0)
        } else {
          3 == t.nodeType && s(t.nodeValue)
        }
      }

      for (var u = "", c = !1, d = e.doc.lineSeparator(); l(t), t != n;) {
        t = t.nextSibling;
      }
      return u
    }

    function Uo(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
        if (!(r = e.display.lineDiv.childNodes[n])) {
          return Bo(e.clipPos(P(e.display.viewTo - 1)), !0);
        }
        t = null, n = 0
      } else {
        for (r = t; ; r = r.parentNode) {
          if (!r || r == e.display.lineDiv) {
            return null;
          }
          if (r.parentNode && r.parentNode == e.display.lineDiv) {
            break
          }
        }
      }
      for (var i = 0; i < e.display.view.length; i++) {
        var o = e.display.view[i];
        if (o.node == r) {
          return Vo(o, t, n)
        }
      }
    }

    function Vo(e, t, n) {
      function r(t, n, r) {
        for (var i = -1; i < (d ? d.length : 0); i++) {
          for (var o = i < 0 ? c.map : d[i], a = 0; a < o.length; a += 3) {
            var s = o[a + 2];
            if (s == t || s == n) {
              var l = E(i < 0 ? e.line : e.rest[i]), u = o[a] + r;
              return (r < 0 || s != t) && (u = o[a + (r ? 1 : 0)]), P(l, u)
            }
          }
        }
      }

      var i = e.text.firstChild, o = !1;
      if (!t || !a(i, t)) {
        return Bo(P(E(e.line), 0), !0);
      }
      if (t == i && (o = !0, t = i.childNodes[n], n = 0, !t)) {
        var s = e.rest ? g(e.rest) : e.line;
        return Bo(P(E(s), s.text.length), o)
      }
      var l = 3 == t.nodeType ? t : null, u = t;
      for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, n && (n = l.nodeValue.length)); u.parentNode != i;) {
        u = u.parentNode;
      }
      var c = e.measure, d = c.maps, f = r(l, u, n);
      if (f) {
        return Bo(f, o);
      }
      for (var p = u.nextSibling, h = l ? l.nodeValue.length - n : 0; p; p = p.nextSibling) {
        if (f = r(p, p.firstChild, 0)) {
          return Bo(P(f.line, f.ch - h), o);
        }
        h += p.textContent.length
      }
      for (var m = u.previousSibling, v = n; m; m = m.previousSibling) {
        if (f = r(m, m.firstChild, -1)) {
          return Bo(P(f.line, f.ch + v), o);
        }
        v += m.textContent.length
      }
    }

    function qo(e, t) {
      function n() {
        e.value = l.getValue()
      }

      if (t = t ? d(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
        var r = s();
        t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
      }
      var i;
      if (e.form && (za(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
        var o = e.form;
        i = o.submit;
        try {
          var a = o.submit = function() {
            n(), o.submit = i, o.submit(), o.submit = a
          }
        } catch (e) {
        }
      }
      t.finishInit = function(t) {
        t.save = n, t.getTextArea = function() {
          return e
        }, t.toTextArea = function() {
          t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (Ae(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
        }
      }, e.style.display = "none";
      var l = Lo(function(t) {
        return e.parentNode.insertBefore(t, e.nextSibling)
      }, t);
      return l
    }

    var Go = navigator.userAgent, Ko = navigator.platform,
        $o = /gecko\/\d/i.test(Go), Xo = /MSIE \d/.test(Go),
        Yo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Go),
        Zo = /Edge\/(\d+)/.exec(Go), Jo = Xo || Yo || Zo,
        Qo = Jo && (Xo ? document.documentMode || 6 : +(Zo || Yo)[1]),
        ea = !Zo && /WebKit\//.test(Go), ta = ea && /Qt\/\d+\.\d+/.test(Go),
        na = !Zo && /Chrome\//.test(Go), ra = /Opera\//.test(Go),
        ia = /Apple Computer/.test(navigator.vendor),
        oa = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Go), aa = /PhantomJS/.test(Go),
        sa = !Zo && /AppleWebKit/.test(Go) && /Mobile\/\w+/.test(Go),
        la = /Android/.test(Go),
        ua = sa || la || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Go),
        ca = sa || /Mac/.test(Ko), da = /\bCrOS\b/.test(Go),
        fa = /win/i.test(Ko), pa = ra && Go.match(/Version\/(\d*\.\d*)/);
    pa && (pa = Number(pa[1])), pa && pa >= 15 && (ra = !1, ea = !0);
    var ha, ma = ca && (ta || ra && (null == pa || pa < 12.11)),
        ga = $o || Jo && Qo >= 9, va = function(t, n) {
          var r = t.className, i = e(n).exec(r);
          if (i) {
            var o = r.slice(i.index + i[0].length);
            t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
          }
        };
    ha = document.createRange ? function(e, t, n, r) {
      var i = document.createRange();
      return i.setEnd(r || e, n), i.setStart(e, t), i
    } : function(e, t, n) {
      var r = document.body.createTextRange();
      try {
        r.moveToElementText(e.parentNode)
      } catch (e) {
        return r
      }
      return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
    };
    var ya = function(e) {
      e.select()
    };
    sa ? ya = function(e) {
      e.selectionStart = 0, e.selectionEnd = e.value.length
    } : Jo && (ya = function(e) {
      try {
        e.select()
      } catch (e) {
      }
    });
    var ba = function() {
      this.id = null
    };
    ba.prototype.set = function(e, t) {
      clearTimeout(this.id), this.id = setTimeout(t, e)
    };
    var wa, xa, ka = 30, Ca = {
          toString: function() {
            return "CodeMirror.Pass"
          }
        }, Sa = {scroll: !1}, _a = {origin: "*mouse"}, Ta = {origin: "+move"},
        La = [""],
        Ma = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        Oa = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
        Aa = !1, Ia = !1, Ea = null, Na = function() {
          function e(e) {
            return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
          }

          function t(e, t, n) {
            this.level = e, this.from = t, this.to = n
          }

          var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
              r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
              i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, o = /[stwN]/,
              a = /[LRr]/, s = /[Lb1n]/, l = /[1n]/;
          return function(n, r) {
            var u = "ltr" == r ? "L" : "R";
            if (0 == n.length || "ltr" == r && !i.test(n)) {
              return !1;
            }
            for (var c = n.length, d = [], f = 0; f < c; ++f) {
              d.push(e(n.charCodeAt(f)));
            }
            for (var p = 0, h = u; p < c; ++p) {
              var m = d[p];
              "m" == m ? d[p] = h : h = m
            }
            for (var v = 0, y = u; v < c; ++v) {
              var b = d[v];
              "1" == b && "r" == y ? d[v] = "n" : a.test(b) && (y = b, "r" == b && (d[v] = "R"))
            }
            for (var w = 1, x = d[0]; w < c - 1; ++w) {
              var k = d[w];
              "+" == k && "1" == x && "1" == d[w + 1] ? d[w] = "1" : "," != k || x != d[w + 1] || "1" != x && "n" != x || (d[w] = x), x = k
            }
            for (var C = 0; C < c; ++C) {
              var S = d[C];
              if ("," == S) {
                d[C] = "N";
              } else if ("%" == S) {
                var _ = void 0;
                for (_ = C + 1; _ < c && "%" == d[_]; ++_) {
                  ;
                }
                for (var T = C && "!" == d[C - 1] || _ < c && "1" == d[_] ? "1" : "N", L = C; L < _; ++L) {
                  d[L] = T;
                }
                C = _ - 1
              }
            }
            for (var M = 0, O = u; M < c; ++M) {
              var A = d[M];
              "L" == O && "1" == A ? d[M] = "L" : a.test(A) && (O = A)
            }
            for (var I = 0; I < c; ++I) {
              if (o.test(d[I])) {
                var E = void 0;
                for (E = I + 1; E < c && o.test(d[E]); ++E) {
                  ;
                }
                for (var N = "L" == (I ? d[I - 1] : u), D = "L" == (E < c ? d[E] : u), z = N == D ? N ? "L" : "R" : u, P = I; P < E; ++P) {
                  d[P] = z;
                }
                I = E - 1
              }
            }
            for (var W, F = [], H = 0; H < c;) {
              if (s.test(d[H])) {
                var R = H;
                for (++H; H < c && s.test(d[H]); ++H) {
                  ;
                }
                F.push(new t(0, R, H))
              } else {
                var B = H, j = F.length;
                for (++H; H < c && "L" != d[H]; ++H) {
                  ;
                }
                for (var U = B; U < H;) {
                  if (l.test(d[U])) {
                    B < U && F.splice(j, 0, new t(1, B, U));
                    var V = U;
                    for (++U; U < H && l.test(d[U]); ++U) {
                      ;
                    }
                    F.splice(j, 0, new t(2, V, U)), B = U
                  } else {
                    ++U;
                  }
                }
                B < H && F.splice(j, 0, new t(1, B, H))
              }
            }
            return 1 == F[0].level && (W = n.match(/^\s+/)) && (F[0].from = W[0].length, F.unshift(new t(0, 0, W[0].length))), 1 == g(F).level && (W = n.match(/\s+$/)) && (g(F).to -= W[0].length, F.push(new t(0, c - W[0].length, c))), "rtl" == r ? F.reverse() : F
          }
        }(), Da = [], za = function(e, t, n) {
          if (e.addEventListener) {
            e.addEventListener(t, n, !1);
          } else if (e.attachEvent) {
            e.attachEvent("on" + t, n);
          } else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || Da).concat(n)
          }
        }, Pa = function() {
          if (Jo && Qo < 9) {
            return !1;
          }
          var e = r("div");
          return "draggable" in e || "dragDrop" in e
        }(), Wa = 3 != "\n\nb".split(/\n/).length ? function(e) {
          for (var t = 0, n = [], r = e.length; t <= r;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                a = o.indexOf("\r");
            -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
          }
          return n
        } : function(e) {
          return e.split(/\r\n?|\n/)
        }, Fa = window.getSelection ? function(e) {
          try {
            return e.selectionStart != e.selectionEnd
          } catch (e) {
            return !1
          }
        } : function(e) {
          var t;
          try {
            t = e.ownerDocument.selection.createRange()
          } catch (e) {
          }
          return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
        }, Ha = function() {
          var e = r("div");
          return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
        }(), Ra = null, Ba = {}, ja = {}, Ua = {}, Va = function(e, t) {
          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
        };
    Va.prototype.eol = function() {
      return this.pos >= this.string.length
    }, Va.prototype.sol = function() {
      return this.pos == this.lineStart
    }, Va.prototype.peek = function() {
      return this.string.charAt(this.pos) || void 0
    }, Va.prototype.next = function() {
      if (this.pos < this.string.length) {
        return this.string.charAt(this.pos++)
      }
    }, Va.prototype.eat = function(e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) {
        return ++this.pos, t
      }
    }, Va.prototype.eatWhile = function(e) {
      for (var t = this.pos; this.eat(e);) {
        ;
      }
      return this.pos > t
    }, Va.prototype.eatSpace = function() {
      for (var e = this, t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
        ++e.pos;
      }
      return this.pos > t
    }, Va.prototype.skipToEnd = function() {
      this.pos = this.string.length
    }, Va.prototype.skipTo = function(e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) {
        return this.pos = t, !0
      }
    }, Va.prototype.backUp = function(e) {
      this.pos -= e
    }, Va.prototype.column = function() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = f(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
    }, Va.prototype.indentation = function() {
      return f(this.string, null, this.tabSize) - (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
    }, Va.prototype.match = function(e, t, n) {
      if ("string" != typeof e) {
        var r = this.string.slice(this.pos).match(e);
        return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r)
      }
      var i = function(e) {
        return n ? e.toLowerCase() : e
      };
      if (i(this.string.substr(this.pos, e.length)) == i(e)) {
        return !1 !== t && (this.pos += e.length), !0
      }
    }, Va.prototype.current = function() {
      return this.string.slice(this.start, this.pos)
    }, Va.prototype.hideFirstChars = function(e, t) {
      this.lineStart += e;
      try {
        return t()
      } finally {
        this.lineStart -= e
      }
    };
    var qa = function(e, t, n) {
      this.text = e, ie(this, t), this.height = n ? n(this) : 1
    };
    qa.prototype.lineNo = function() {
      return E(this)
    }, ze(qa);
    var Ga, Ka = {}, $a = {}, Xa = null, Ya = null,
        Za = {left: 0, right: 0, top: 0, bottom: 0}, Ja = 0, Qa = null;
    Jo ? Qa = -.53 : $o ? Qa = 15 : na ? Qa = -.7 : ia && (Qa = -1 / 3);
    var es = function(e, t, n) {
      this.cm = n;
      var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
          o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      e(i), e(o), za(i, "scroll", function() {
        i.clientHeight && t(i.scrollTop, "vertical")
      }), za(o, "scroll", function() {
        o.clientWidth && t(o.scrollLeft, "horizontal")
      }), this.checkedZeroWidth = !1, Jo && Qo < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    };
    es.prototype.update = function(e) {
      var t = e.scrollWidth > e.clientWidth + 1,
          n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
      if (n) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
        var i = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
      } else {
        this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      }
      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var o = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
      } else {
        this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      }
      return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
        right: n ? r : 0,
        bottom: t ? r : 0
      }
    }, es.prototype.setScrollLeft = function(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
    }, es.prototype.setScrollTop = function(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
    }, es.prototype.zeroWidthHack = function() {
      var e = ca && !oa ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new ba, this.disableVert = new ba
    }, es.prototype.enableZeroWidthBar = function(e, t) {
      function n() {
        var r = e.getBoundingClientRect();
        document.elementFromPoint(r.left + 1, r.bottom - 1) != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
      }

      e.style.pointerEvents = "auto", t.set(1e3, n)
    }, es.prototype.clear = function() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert)
    };
    var ts = function() {
    };
    ts.prototype.update = function() {
      return {bottom: 0, right: 0}
    }, ts.prototype.setScrollLeft = function() {
    }, ts.prototype.setScrollTop = function() {
    }, ts.prototype.clear = function() {
    };
    var ns = {native: es, null: ts}, rs = 0, is = function(e, t, n) {
      var r = e.display;
      this.viewport = t, this.visible = Rn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Vt(e), this.force = n, this.dims = xn(e), this.events = []
    };
    is.prototype.signal = function(e, t) {
      De(e, t) && this.events.push(arguments)
    }, is.prototype.finish = function() {
      for (var e = this, t = 0; t < this.events.length; t++) {
        Ie.apply(null, e.events[t])
      }
    };
    var os = function(e, t) {
      this.ranges = e, this.primIndex = t
    };
    os.prototype.primary = function() {
      return this.ranges[this.primIndex]
    }, os.prototype.equals = function(e) {
      var t = this;
      if (e == this) {
        return !0;
      }
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) {
        return !1;
      }
      for (var n = 0; n < this.ranges.length; n++) {
        var r = t.ranges[n], i = e.ranges[n];
        if (!F(r.anchor, i.anchor) || !F(r.head, i.head)) {
          return !1
        }
      }
      return !0
    }, os.prototype.deepCopy = function() {
      for (var e = this, t = [], n = 0; n < this.ranges.length; n++) {
        t[n] = new as(H(e.ranges[n].anchor), H(e.ranges[n].head));
      }
      return new os(t, this.primIndex)
    }, os.prototype.somethingSelected = function() {
      for (var e = this, t = 0; t < this.ranges.length; t++) {
        if (!e.ranges[t].empty()) {
          return !0;
        }
      }
      return !1
    }, os.prototype.contains = function(e, t) {
      var n = this;
      t || (t = e);
      for (var r = 0; r < this.ranges.length; r++) {
        var i = n.ranges[r];
        if (W(t, i.from()) >= 0 && W(e, i.to()) <= 0) {
          return r
        }
      }
      return -1
    };
    var as = function(e, t) {
      this.anchor = e, this.head = t
    };
    as.prototype.from = function() {
      return B(this.anchor, this.head)
    }, as.prototype.to = function() {
      return R(this.anchor, this.head)
    }, as.prototype.empty = function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
    };
    var ss = function(e) {
      var t = this;
      this.lines = e, this.parent = null;
      for (var n = 0, r = 0; r < e.length; ++r) {
        e[r].parent = t, n += e[r].height;
      }
      this.height = n
    };
    ss.prototype.chunkSize = function() {
      return this.lines.length
    }, ss.prototype.removeInner = function(e, t) {
      for (var n = this, r = e, i = e + t; r < i; ++r) {
        var o = n.lines[r];
        n.height -= o.height, ct(o), St(o, "delete")
      }
      this.lines.splice(e, t)
    }, ss.prototype.collapse = function(e) {
      e.push.apply(e, this.lines)
    }, ss.prototype.insertInner = function(e, t, n) {
      var r = this;
      this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
      for (var i = 0; i < t.length; ++i) {
        t[i].parent = r
      }
    }, ss.prototype.iterN = function(e, t, n) {
      for (var r = this, i = e + t; e < i; ++e) {
        if (n(r.lines[e])) {
          return !0
        }
      }
    };
    var ls = function(e) {
      var t = this;
      this.children = e;
      for (var n = 0, r = 0, i = 0; i < e.length; ++i) {
        var o = e[i];
        n += o.chunkSize(), r += o.height, o.parent = t
      }
      this.size = n, this.height = r, this.parent = null
    };
    ls.prototype.chunkSize = function() {
      return this.size
    }, ls.prototype.removeInner = function(e, t) {
      var n = this;
      this.size -= t;
      for (var r = 0; r < this.children.length; ++r) {
        var i = n.children[r], o = i.chunkSize();
        if (e < o) {
          var a = Math.min(t, o - e), s = i.height;
          if (i.removeInner(e, a), n.height -= s - i.height, o == a && (n.children.splice(r--, 1), i.parent = null), 0 == (t -= a)) {
            break;
          }
          e = 0
        } else {
          e -= o
        }
      }
      if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof ss))) {
        var l = [];
        this.collapse(l), this.children = [new ss(l)], this.children[0].parent = this
      }
    }, ls.prototype.collapse = function(e) {
      for (var t = this, n = 0; n < this.children.length; ++n) {
        t.children[n].collapse(e)
      }
    }, ls.prototype.insertInner = function(e, t, n) {
      var r = this;
      this.size += t.length, this.height += n;
      for (var i = 0; i < this.children.length; ++i) {
        var o = r.children[i], a = o.chunkSize();
        if (e <= a) {
          if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) {
            for (var s = o.lines.length % 25 + 25, l = s; l < o.lines.length;) {
              var u = new ss(o.lines.slice(l, l += 25));
              o.height -= u.height, r.children.splice(++i, 0, u), u.parent = r
            }
            o.lines = o.lines.slice(0, s), r.maybeSpill()
          }
          break
        }
        e -= a
      }
    }, ls.prototype.maybeSpill = function() {
      if (!(this.children.length <= 10)) {
        var e = this;
        do {
          var t = e.children.splice(e.children.length - 5, 5), n = new ls(t);
          if (e.parent) {
            e.size -= n.size, e.height -= n.height;
            var r = p(e.parent.children, e);
            e.parent.children.splice(r + 1, 0, n)
          } else {
            var i = new ls(e.children);
            i.parent = e, e.children = [i, n], e = i
          }
          n.parent = e.parent
        } while (e.children.length > 10);
        e.parent.maybeSpill()
      }
    }, ls.prototype.iterN = function(e, t, n) {
      for (var r = this, i = 0; i < this.children.length; ++i) {
        var o = r.children[i], a = o.chunkSize();
        if (e < a) {
          var s = Math.min(t, a - e);
          if (o.iterN(e, s, n)) {
            return !0;
          }
          if (0 == (t -= s)) {
            break;
          }
          e = 0
        } else {
          e -= a
        }
      }
    };
    var us = function(e, t, n) {
      var r = this;
      if (n) {
        for (var i in n) {
          n.hasOwnProperty(i) && (r[i] = n[i]);
        }
      }
      this.doc = e, this.node = t
    };
    us.prototype.clear = function() {
      var e = this, t = this.doc.cm, n = this.line.widgets, r = this.line,
          i = E(r);
      if (null != i && n) {
        for (var o = 0; o < n.length; ++o) {
          n[o] == e && n.splice(o--, 1);
        }
        n.length || (r.widgets = null);
        var a = Ft(this);
        I(r, Math.max(0, r.height - a)), t && (dr(t, function() {
          Di(t, r, -a), gr(t, i, "widget")
        }), St(t, "lineWidgetCleared", t, this, i))
      }
    }, us.prototype.changed = function() {
      var e = this, t = this.height, n = this.doc.cm, r = this.line;
      this.height = null;
      var i = Ft(this) - t;
      i && (I(r, r.height + i), n && dr(n, function() {
        n.curOp.forceUpdate = !0, Di(n, r, i), St(n, "lineWidgetChanged", n, e, E(r))
      }))
    }, ze(us);
    var cs = 0, ds = function(e, t) {
      this.lines = [], this.type = t, this.doc = e, this.id = ++cs
    };
    ds.prototype.clear = function() {
      var e = this;
      if (!this.explicitlyCleared) {
        var t = this.doc.cm, n = t && !t.curOp;
        if (n && rr(t), De(this, "clear")) {
          var r = this.find();
          r && St(this, "clear", r.from, r.to)
        }
        for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
          var s = e.lines[a], l = X(s.markedSpans, e);
          t && !e.collapsed ? gr(t, E(s), "text") : t && (null != l.to && (o = E(s)), null != l.from && (i = E(s))), s.markedSpans = Y(s.markedSpans, l), null == l.from && e.collapsed && !ve(e.doc, s) && t && I(s, bn(t.display))
        }
        if (t && this.collapsed && !t.options.lineWrapping) {
          for (var u = 0; u < this.lines.length; ++u) {
            var c = fe(e.lines[u]), d = we(c);
            d > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = d, t.display.maxLineChanged = !0)
          }
        }
        null != i && t && this.collapsed && mr(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && gi(t.doc)), t && St(t, "markerCleared", t, this, i, o), n && ir(t), this.parent && this.parent.clear()
      }
    }, ds.prototype.find = function(e, t) {
      var n = this;
      null == e && "bookmark" == this.type && (e = 1);
      for (var r, i, o = 0; o < this.lines.length; ++o) {
        var a = n.lines[o], s = X(a.markedSpans, n);
        if (null != s.from && (r = P(t ? a : E(a), s.from), -1 == e)) {
          return r;
        }
        if (null != s.to && (i = P(t ? a : E(a), s.to), 1 == e)) {
          return i
        }
      }
      return r && {from: r, to: i}
    }, ds.prototype.changed = function() {
      var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
      t && r && dr(r, function() {
        var i = t.line, o = E(t.line), a = Yt(r, o);
        if (a && (rn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ve(n.doc, i) && null != n.height) {
          var s = n.height;
          n.height = null;
          var l = Ft(n) - s;
          l && I(i, i.height + l)
        }
        St(r, "markerChanged", r, e)
      })
    }, ds.prototype.attachLine = function(e) {
      if (!this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        t.maybeHiddenMarkers && -1 != p(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
      }
      this.lines.push(e)
    }, ds.prototype.detachLine = function(e) {
      if (this.lines.splice(p(this.lines, e), 1), !this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
      }
    }, ze(ds);
    var fs = function(e, t) {
      var n = this;
      this.markers = e, this.primary = t;
      for (var r = 0; r < e.length; ++r) {
        e[r].parent = n
      }
    };
    fs.prototype.clear = function() {
      var e = this;
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var t = 0; t < this.markers.length; ++t) {
          e.markers[t].clear();
        }
        St(this, "clear")
      }
    }, fs.prototype.find = function(e, t) {
      return this.primary.find(e, t)
    }, ze(fs);
    var ps = 0, hs = function e(t, n, r, i, o) {
      if (!(this instanceof e)) {
        return new e(t, n, r, i, o);
      }
      null == r && (r = 0), ls.call(this, [new ss([new qa("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = r;
      var a = P(r, 0);
      this.sel = Nr(a), this.history = new Kr(null), this.id = ++ps, this.modeOption = n, this.lineSep = i, this.direction = "rtl" == o ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(t)), jr(this, {
        from: a,
        to: a,
        text: t
      }), pi(this, Nr(a), Sa)
    };
    hs.prototype = w(ls.prototype, {
      constructor: hs, iter: function(e, t, n) {
        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
      }, insert: function(e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) {
          n += t[r].height;
        }
        this.insertInner(e - this.first, t, n)
      }, remove: function(e, t) {
        this.removeInner(e - this.first, t)
      }, getValue: function(e) {
        var t = A(this, this.first, this.first + this.size);
        return !1 === e ? t : t.join(e || this.lineSeparator())
      }, setValue: hr(function(e) {
        var t = P(this.first, 0), n = this.first + this.size - 1;
        Ci(this, {
          from: t,
          to: P(n, M(this, n).text.length),
          text: this.splitLines(e),
          origin: "setValue",
          full: !0
        }, !0), pi(this, Nr(t))
      }), replaceRange: function(e, t, n, r) {
        t = U(this, t), n = n ? U(this, n) : t, Oi(this, e, t, n, r)
      }, getRange: function(e, t, n) {
        var r = O(this, U(this, e), U(this, t));
        return !1 === n ? r : r.join(n || this.lineSeparator())
      }, getLine: function(e) {
        var t = this.getLineHandle(e);
        return t && t.text
      }, getLineHandle: function(e) {
        if (D(this, e)) {
          return M(this, e)
        }
      }, getLineNumber: function(e) {
        return E(e)
      }, getLineHandleVisualStart: function(e) {
        return "number" == typeof e && (e = M(this, e)), fe(e)
      }, lineCount: function() {
        return this.size
      }, firstLine: function() {
        return this.first
      }, lastLine: function() {
        return this.first + this.size - 1
      }, clipPos: function(e) {
        return U(this, e)
      }, getCursor: function(e) {
        var t = this.sel.primary();
        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
      }, listSelections: function() {
        return this.sel.ranges
      }, somethingSelected: function() {
        return this.sel.somethingSelected()
      }, setCursor: hr(function(e, t, n) {
        ci(this, U(this, "number" == typeof e ? P(e, t || 0) : e), null, n)
      }), setSelection: hr(function(e, t, n) {
        ci(this, U(this, e), U(this, t || e), n)
      }), extendSelection: hr(function(e, t, n) {
        si(this, U(this, e), t && U(this, t), n)
      }), extendSelections: hr(function(e, t) {
        li(this, q(this, e), t)
      }), extendSelectionsBy: hr(function(e, t) {
        li(this, q(this, v(this.sel.ranges, e)), t)
      }), setSelections: hr(function(e, t, n) {
        var r = this;
        if (e.length) {
          for (var i = [], o = 0; o < e.length; o++) {
            i[o] = new as(U(r, e[o].anchor), U(r, e[o].head));
          }
          null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), pi(this, Er(i, t), n)
        }
      }), addSelection: hr(function(e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new as(U(this, e), U(this, t || e))), pi(this, Er(r, r.length - 1), n)
      }), getSelection: function(e) {
        for (var t, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) {
          var o = O(n, r[i].from(), r[i].to());
          t = t ? t.concat(o) : o
        }
        return !1 === e ? t : t.join(e || this.lineSeparator())
      }, getSelections: function(e) {
        for (var t = this, n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
          var o = O(t, r[i].from(), r[i].to());
          !1 !== e && (o = o.join(e || t.lineSeparator())), n[i] = o
        }
        return n
      }, replaceSelection: function(e, t, n) {
        for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
          r[i] = e;
        }
        this.replaceSelections(r, t, n || "+input")
      }, replaceSelections: hr(function(e, t, n) {
        for (var r = this, i = [], o = this.sel, a = 0; a < o.ranges.length; a++) {
          var s = o.ranges[a];
          i[a] = {
            from: s.from(),
            to: s.to(),
            text: r.splitLines(e[a]),
            origin: n
          }
        }
        for (var l = t && "end" != t && Fr(this, i, t), u = i.length - 1; u >= 0; u--) {
          Ci(r, i[u]);
        }
        l ? fi(this, l) : this.cm && tr(this.cm)
      }), undo: hr(function() {
        _i(this, "undo")
      }), redo: hr(function() {
        _i(this, "redo")
      }), undoSelection: hr(function() {
        _i(this, "undo", !0)
      }), redoSelection: hr(function() {
        _i(this, "redo", !0)
      }), setExtending: function(e) {
        this.extend = e
      }, getExtending: function() {
        return this.extend
      }, historySize: function() {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
          e.done[r].ranges || ++t;
        }
        for (var i = 0; i < e.undone.length; i++) {
          e.undone[i].ranges || ++n;
        }
        return {undo: t, redo: n}
      }, clearHistory: function() {
        this.history = new Kr(this.history.maxGeneration)
      }, markClean: function() {
        this.cleanGeneration = this.changeGeneration(!0)
      }, changeGeneration: function(e) {
        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
      }, isClean: function(e) {
        return this.history.generation == (e || this.cleanGeneration)
      }, getHistory: function() {
        return {done: oi(this.history.done), undone: oi(this.history.undone)}
      }, setHistory: function(e) {
        var t = this.history = new Kr(this.history.maxGeneration);
        t.done = oi(e.done.slice(0), null, !0), t.undone = oi(e.undone.slice(0), null, !0)
      }, setGutterMarker: hr(function(e, t, n) {
        return Ni(this, e, "gutter", function(e) {
          var r = e.gutterMarkers || (e.gutterMarkers = {});
          return r[t] = n, !n && C(r) && (e.gutterMarkers = null), !0
        })
      }), clearGutter: hr(function(e) {
        var t = this;
        this.iter(function(n) {
          n.gutterMarkers && n.gutterMarkers[e] && Ni(t, n, "gutter", function() {
            return n.gutterMarkers[e] = null, C(n.gutterMarkers) && (n.gutterMarkers = null), !0
          })
        })
      }), lineInfo: function(e) {
        var t;
        if ("number" == typeof e) {
          if (!D(this, e)) {
            return null;
          }
          if (t = e, !(e = M(this, e))) {
            return null
          }
        } else if (null == (t = E(e))) {
          return null;
        }
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets
        }
      }, addLineClass: hr(function(t, n, r) {
        return Ni(this, t, "gutter" == n ? "gutter" : "class", function(t) {
          var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
          if (t[i]) {
            if (e(r).test(t[i])) {
              return !1;
            }
            t[i] += " " + r
          } else {
            t[i] = r;
          }
          return !0
        })
      }), removeLineClass: hr(function(t, n, r) {
        return Ni(this, t, "gutter" == n ? "gutter" : "class", function(t) {
          var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
              o = t[i];
          if (!o) {
            return !1;
          }
          if (null == r) {
            t[i] = null;
          } else {
            var a = o.match(e(r));
            if (!a) {
              return !1;
            }
            var s = a.index + a[0].length;
            t[i] = o.slice(0, a.index) + (a.index && s != o.length ? " " : "") + o.slice(s) || null
          }
          return !0
        })
      }), addLineWidget: hr(function(e, t, n) {
        return zi(this, e, t, n)
      }), removeLineWidget: function(e) {
        e.clear()
      }, markText: function(e, t, n) {
        return Pi(this, U(this, e), U(this, t), n, n && n.type || "range")
      }, setBookmark: function(e, t) {
        var n = {
          replacedWith: t && (null == t.nodeType ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents
        };
        return e = U(this, e), Pi(this, e, e, n, "bookmark")
      }, findMarksAt: function(e) {
        e = U(this, e);
        var t = [], n = M(this, e.line).markedSpans;
        if (n) {
          for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
          }
        }
        return t
      }, findMarks: function(e, t, n) {
        e = U(this, e), t = U(this, t);
        var r = [], i = e.line;
        return this.iter(e.line, t.line + 1, function(o) {
          var a = o.markedSpans;
          if (a) {
            for (var s = 0; s < a.length; s++) {
              var l = a[s];
              null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
            }
          }
          ++i
        }), r
      }, getAllMarks: function() {
        var e = [];
        return this.iter(function(t) {
          var n = t.markedSpans;
          if (n) {
            for (var r = 0; r < n.length; ++r) {
              null != n[r].from && e.push(n[r].marker)
            }
          }
        }), e
      }, posFromIndex: function(e) {
        var t, n = this.first, r = this.lineSeparator().length;
        return this.iter(function(i) {
          var o = i.text.length + r;
          if (o > e) {
            return t = e, !0;
          }
          e -= o, ++n
        }), U(this, P(n, t))
      }, indexFromPos: function(e) {
        e = U(this, e);
        var t = e.ch;
        if (e.line < this.first || e.ch < 0) {
          return 0;
        }
        var n = this.lineSeparator().length;
        return this.iter(this.first, e.line, function(e) {
          t += e.text.length + n
        }), t
      }, copy: function(e) {
        var t = new hs(A(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
      }, linkedDoc: function(e) {
        e || (e = {});
        var t = this.first, n = this.first + this.size;
        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
        var r = new hs(A(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
        return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
          doc: r,
          sharedHist: e.sharedHist
        }), r.linked = [{
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        }], Hi(r, Fi(this)), r
      }, unlinkDoc: function(e) {
        var t = this;
        if (e instanceof Lo && (e = e.doc), this.linked) {
          for (var n = 0; n < this.linked.length; ++n) {
            var r = t.linked[n];
            if (r.doc == e) {
              t.linked.splice(n, 1), e.unlinkDoc(t), Ri(Fi(t));
              break
            }
          }
        }
        if (e.history == this.history) {
          var i = [e.id];
          Ur(e, function(e) {
            return i.push(e.id)
          }, !0), e.history = new Kr(null), e.history.done = oi(this.history.done, i), e.history.undone = oi(this.history.undone, i)
        }
      }, iterLinkedDocs: function(e) {
        Ur(this, e)
      }, getMode: function() {
        return this.mode
      }, getEditor: function() {
        return this.cm
      }, splitLines: function(e) {
        return this.lineSep ? e.split(this.lineSep) : Wa(e)
      }, lineSeparator: function() {
        return this.lineSep || "\n"
      }, setDirection: hr(function(e) {
        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(e) {
          return e.order = null
        }), this.cm && Gr(this.cm))
      })
    }), hs.prototype.eachLine = hs.prototype.iter;
    for (var ms = 0, gs = !1, vs = {
      3: "Enter",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      127: "Delete",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
    }, ys = 0; ys < 10; ys++) {
      vs[ys + 48] = vs[ys + 96] = String(ys);
    }
    for (var bs = 65; bs <= 90; bs++) {
      vs[bs] = String.fromCharCode(bs);
    }
    for (var ws = 1; ws <= 12; ws++) {
      vs[ws + 111] = vs[ws + 63235] = "F" + ws;
    }
    var xs = {};
    xs.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
    }, xs.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
    }, xs.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    }, xs.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"]
    }, xs.default = ca ? xs.macDefault : xs.pcDefault;
    var ks, Cs, Ss = {
      selectAll: xi, singleSelection: function(e) {
        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Sa)
      }, killLine: function(e) {
        return to(e, function(t) {
          if (t.empty()) {
            var n = M(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine() ? {
              from: t.head,
              to: P(t.head.line + 1, 0)
            } : {from: t.head, to: P(t.head.line, n)}
          }
          return {from: t.from(), to: t.to()}
        })
      }, deleteLine: function(e) {
        return to(e, function(t) {
          return {
            from: P(t.from().line, 0),
            to: U(e.doc, P(t.to().line + 1, 0))
          }
        })
      }, delLineLeft: function(e) {
        return to(e, function(e) {
          return {from: P(e.from().line, 0), to: e.from()}
        })
      }, delWrappedLineLeft: function(e) {
        return to(e, function(t) {
          var n = e.charCoords(t.head, "div").top + 5;
          return {from: e.coordsChar({left: 0, top: n}, "div"), to: t.from()}
        })
      }, delWrappedLineRight: function(e) {
        return to(e, function(t) {
          var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({
            left: e.display.lineDiv.offsetWidth + 100,
            top: n
          }, "div");
          return {from: t.from(), to: r}
        })
      }, undo: function(e) {
        return e.undo()
      }, redo: function(e) {
        return e.redo()
      }, undoSelection: function(e) {
        return e.undoSelection()
      }, redoSelection: function(e) {
        return e.redoSelection()
      }, goDocStart: function(e) {
        return e.extendSelection(P(e.firstLine(), 0))
      }, goDocEnd: function(e) {
        return e.extendSelection(P(e.lastLine()))
      }, goLineStart: function(e) {
        return e.extendSelectionsBy(function(t) {
          return no(e, t.head.line)
        }, {origin: "+move", bias: 1})
      }, goLineStartSmart: function(e) {
        return e.extendSelectionsBy(function(t) {
          return io(e, t.head)
        }, {origin: "+move", bias: 1})
      }, goLineEnd: function(e) {
        return e.extendSelectionsBy(function(t) {
          return ro(e, t.head.line)
        }, {origin: "+move", bias: -1})
      }, goLineRight: function(e) {
        return e.extendSelectionsBy(function(t) {
          var n = e.charCoords(t.head, "div").top + 5;
          return e.coordsChar({
            left: e.display.lineDiv.offsetWidth + 100,
            top: n
          }, "div")
        }, Ta)
      }, goLineLeft: function(e) {
        return e.extendSelectionsBy(function(t) {
          var n = e.charCoords(t.head, "div").top + 5;
          return e.coordsChar({left: 0, top: n}, "div")
        }, Ta)
      }, goLineLeftSmart: function(e) {
        return e.extendSelectionsBy(function(t) {
          var n = e.charCoords(t.head, "div").top + 5,
              r = e.coordsChar({left: 0, top: n}, "div");
          return r.ch < e.getLine(r.line).search(/\S/) ? io(e, t.head) : r
        }, Ta)
      }, goLineUp: function(e) {
        return e.moveV(-1, "line")
      }, goLineDown: function(e) {
        return e.moveV(1, "line")
      }, goPageUp: function(e) {
        return e.moveV(-1, "page")
      }, goPageDown: function(e) {
        return e.moveV(1, "page")
      }, goCharLeft: function(e) {
        return e.moveH(-1, "char")
      }, goCharRight: function(e) {
        return e.moveH(1, "char")
      }, goColumnLeft: function(e) {
        return e.moveH(-1, "column")
      }, goColumnRight: function(e) {
        return e.moveH(1, "column")
      }, goWordLeft: function(e) {
        return e.moveH(-1, "word")
      }, goGroupRight: function(e) {
        return e.moveH(1, "group")
      }, goGroupLeft: function(e) {
        return e.moveH(-1, "group")
      }, goWordRight: function(e) {
        return e.moveH(1, "word")
      }, delCharBefore: function(e) {
        return e.deleteH(-1, "char")
      }, delCharAfter: function(e) {
        return e.deleteH(1, "char")
      }, delWordBefore: function(e) {
        return e.deleteH(-1, "word")
      }, delWordAfter: function(e) {
        return e.deleteH(1, "word")
      }, delGroupBefore: function(e) {
        return e.deleteH(-1, "group")
      }, delGroupAfter: function(e) {
        return e.deleteH(1, "group")
      }, indentAuto: function(e) {
        return e.indentSelection("smart")
      }, indentMore: function(e) {
        return e.indentSelection("add")
      }, indentLess: function(e) {
        return e.indentSelection("subtract")
      }, insertTab: function(e) {
        return e.replaceSelection("\t")
      }, insertSoftTab: function(e) {
        for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
          var o = n[i].from(), a = f(e.getLine(o.line), o.ch, r);
          t.push(m(r - a % r))
        }
        e.replaceSelections(t)
      }, defaultTab: function(e) {
        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
      }, transposeChars: function(e) {
        return dr(e, function() {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
            if (t[r].empty()) {
              var i = t[r].head, o = M(e.doc, i.line).text;
              if (o) {
                if (i.ch == o.length && (i = new P(i.line, i.ch - 1)), i.ch > 0) {
                  i = new P(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), P(i.line, i.ch - 2), i, "+transpose");
                } else if (i.line > e.doc.first) {
                  var a = M(e.doc, i.line - 1).text;
                  a && (i = new P(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), P(i.line - 1, a.length - 1), i, "+transpose"))
                }
              }
              n.push(new as(i, i))
            }
          }
          e.setSelections(n)
        })
      }, newlineAndIndent: function(e) {
        return dr(e, function() {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) {
            e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
          }
          t = e.listSelections();
          for (var r = 0; r < t.length; r++) {
            e.indentLine(t[r].from().line, null, !0);
          }
          tr(e)
        })
      }, openLine: function(e) {
        return e.replaceSelection("\n", "start")
      }, toggleOverwrite: function(e) {
        return e.toggleOverwrite()
      }
    }, _s = new ba, Ts = null, Ls = {
      toString: function() {
        return "CodeMirror.Init"
      }
    }, Ms = {}, Os = {};
    Lo.defaults = Ms, Lo.optionHandlers = Os;
    var As = [];
    Lo.defineInitHook = function(e) {
      return As.push(e)
    };
    var Is = null, Es = function(e) {
      this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new ba, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
    };
    Es.prototype.init = function(e) {
      function t(e) {
        if (!Ee(i, e)) {
          if (i.somethingSelected()) {
            Ao({
              lineWise: !1,
              text: i.getSelections()
            }), "cut" == e.type && i.replaceSelection("", null, "cut");
          } else {
            if (!i.options.lineWiseCopyCut) {
              return;
            }
            var t = Do(i);
            Ao({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type && i.operation(function() {
              i.setSelections(t.ranges, 0, Sa), i.replaceSelection("", null, "cut")
            })
          }
          if (e.clipboardData) {
            e.clipboardData.clearData();
            var n = Is.text.join("\n");
            if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) {
              return void e.preventDefault()
            }
          }
          var a = Po(), s = a.firstChild;
          i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild), s.value = Is.text.join("\n");
          var l = document.activeElement;
          ya(s), setTimeout(function() {
            i.display.lineSpace.removeChild(a), l.focus(), l == o && r.showPrimarySelection()
          }, 50)
        }
      }

      var n = this, r = this, i = r.cm, o = r.div = e.lineDiv;
      zo(o, i.options.spellcheck), za(o, "paste", function(e) {
        Ee(i, e) || Eo(e, i) || Qo <= 11 && setTimeout(fr(i, function() {
          return n.updateFromDOM()
        }), 20)
      }), za(o, "compositionstart", function(e) {
        n.composing = {data: e.data, done: !1}
      }), za(o, "compositionupdate", function(e) {
        n.composing || (n.composing = {data: e.data, done: !1})
      }), za(o, "compositionend", function(e) {
        n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0)
      }), za(o, "touchstart", function() {
        return r.forceCompositionEnd()
      }), za(o, "input", function() {
        n.composing || n.readFromDOMSoon()
      }), za(o, "copy", t), za(o, "cut", t)
    }, Es.prototype.prepareSelection = function() {
      var e = Mn(this.cm, !1);
      return e.focus = this.cm.state.focused, e
    }, Es.prototype.showSelection = function(e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
    }, Es.prototype.showPrimarySelection = function() {
      var e = window.getSelection(), t = this.cm.doc.sel.primary(),
          n = Uo(this.cm, e.anchorNode, e.anchorOffset),
          r = Uo(this.cm, e.focusNode, e.focusOffset);
      if (!n || n.bad || !r || r.bad || 0 != W(B(n, r), t.from()) || 0 != W(R(n, r), t.to())) {
        var i = Ho(this.cm, t.from()), o = Ho(this.cm, t.to());
        if (!i && !o) {
          return void e.removeAllRanges();
        }
        var a = this.cm.display.view, s = e.rangeCount && e.getRangeAt(0);
        if (i) {
          if (!o) {
            var l = a[a.length - 1].measure,
                u = l.maps ? l.maps[l.maps.length - 1] : l.map;
            o = {
              node: u[u.length - 1],
              offset: u[u.length - 2] - u[u.length - 3]
            }
          }
        } else {
          i = {node: a[0].measure.map[2], offset: 0};
        }
        var c;
        try {
          c = ha(i.node, i.offset, o.offset, o.node)
        } catch (e) {
        }
        c && (!$o && this.cm.state.focused ? (e.collapse(i.node, i.offset), c.collapsed || (e.removeAllRanges(), e.addRange(c))) : (e.removeAllRanges(), e.addRange(c)), s && null == e.anchorNode ? e.addRange(s) : $o && this.startGracePeriod()), this.rememberSelection()
      }
    }, Es.prototype.startGracePeriod = function() {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
          return e.cm.curOp.selectionChanged = !0
        })
      }, 20)
    }, Es.prototype.showMultipleSelections = function(e) {
      n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection)
    }, Es.prototype.rememberSelection = function() {
      var e = window.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
    }, Es.prototype.selectionInEditor = function() {
      var e = window.getSelection();
      if (!e.rangeCount) {
        return !1;
      }
      var t = e.getRangeAt(0).commonAncestorContainer;
      return a(this.div, t)
    }, Es.prototype.focus = function() {
      "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
    }, Es.prototype.blur = function() {
      this.div.blur()
    }, Es.prototype.getField = function() {
      return this.div
    }, Es.prototype.supportsTouch = function() {
      return !0
    }, Es.prototype.receivedFocus = function() {
      function e() {
        t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
      }

      var t = this;
      this.selectionInEditor() ? this.pollSelection() : dr(this.cm, function() {
        return t.cm.curOp.selectionChanged = !0
      }), this.polling.set(this.cm.options.pollInterval, e)
    }, Es.prototype.selectionChanged = function() {
      var e = window.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
    }, Es.prototype.pollSelection = function() {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
        var e = window.getSelection(), t = this.cm;
        if (la && na && this.cm.options.gutters.length && Ro(e.anchorNode)) {
          return this.cm.triggerOnKeyDown({
            type: "keydown",
            keyCode: 8,
            preventDefault: Math.abs
          }), this.blur(), void this.focus();
        }
        if (!this.composing) {
          this.rememberSelection();
          var n = Uo(t, e.anchorNode, e.anchorOffset),
              r = Uo(t, e.focusNode, e.focusOffset);
          n && r && dr(t, function() {
            pi(t.doc, Nr(n, r), Sa), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
          })
        }
      }
    }, Es.prototype.pollContent = function() {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var e = this.cm, t = e.display, n = e.doc.sel.primary(), r = n.from(),
          i = n.to();
      if (0 == r.ch && r.line > e.firstLine() && (r = P(r.line - 1, M(e.doc, r.line - 1).length)), i.ch == M(e.doc, i.line).text.length && i.line < e.lastLine() && (i = P(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) {
        return !1;
      }
      var o, a, s;
      r.line == t.viewFrom || 0 == (o = Tn(e, r.line)) ? (a = E(t.view[0].line), s = t.view[0].node) : (a = E(t.view[o].line), s = t.view[o - 1].node.nextSibling);
      var l, u, c = Tn(e, i.line);
      if (c == t.view.length - 1 ? (l = t.viewTo - 1, u = t.lineDiv.lastChild) : (l = E(t.view[c + 1].line) - 1, u = t.view[c + 1].node.previousSibling), !s) {
        return !1;
      }
      for (var d = e.doc.splitLines(jo(e, s, u, a, l)), f = O(e.doc, P(a, 0), P(l, M(e.doc, l).text.length)); d.length > 1 && f.length > 1;) {
        if (g(d) == g(f)) {
          d.pop(), f.pop(), l--;
        } else {
          if (d[0] != f[0]) {
            break;
          }
          d.shift(), f.shift(), a++
        }
      }
      for (var p = 0, h = 0, m = d[0], v = f[0], y = Math.min(m.length, v.length); p < y && m.charCodeAt(p) == v.charCodeAt(p);) {
        ++p;
      }
      for (var b = g(d), w = g(f), x = Math.min(b.length - (1 == d.length ? p : 0), w.length - (1 == f.length ? p : 0)); h < x && b.charCodeAt(b.length - h - 1) == w.charCodeAt(w.length - h - 1);) {
        ++h;
      }
      if (1 == d.length && 1 == f.length && a == r.line) {
        for (; p && p > r.ch && b.charCodeAt(b.length - h - 1) == w.charCodeAt(w.length - h - 1);) {
          p--, h++;
        }
      }
      d[d.length - 1] = b.slice(0, b.length - h).replace(/^\u200b+/, ""), d[0] = d[0].slice(p).replace(/\u200b+$/, "");
      var k = P(a, p), C = P(l, f.length ? g(f).length - h : 0);
      return d.length > 1 || d[0] || W(k, C) ? (Oi(e.doc, d, k, C, "+input"), !0) : void 0
    }, Es.prototype.ensurePolled = function() {
      this.forceCompositionEnd()
    }, Es.prototype.reset = function() {
      this.forceCompositionEnd()
    }, Es.prototype.forceCompositionEnd = function() {
      this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
    }, Es.prototype.readFromDOMSoon = function() {
      var e = this;
      null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
        if (e.readDOMTimeout = null, e.composing) {
          if (!e.composing.done) {
            return;
          }
          e.composing = null
        }
        e.updateFromDOM()
      }, 80))
    }, Es.prototype.updateFromDOM = function() {
      var e = this;
      !this.cm.isReadOnly() && this.pollContent() || dr(this.cm, function() {
        return mr(e.cm)
      })
    }, Es.prototype.setUneditable = function(e) {
      e.contentEditable = "false"
    }, Es.prototype.onKeyPress = function(e) {
      0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || fr(this.cm, Io)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
    }, Es.prototype.readOnlyChanged = function(e) {
      this.div.contentEditable = String("nocursor" != e)
    }, Es.prototype.onContextMenu = function() {
    }, Es.prototype.resetPosition = function() {
    }, Es.prototype.needsContentAttribute = !0;
    var Ns = function(e) {
      this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new ba, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
    };
    Ns.prototype.init = function(e) {
      function t(e) {
        if (!Ee(i, e)) {
          if (i.somethingSelected()) {
            Ao({
              lineWise: !1,
              text: i.getSelections()
            }), r.inaccurateSelection && (r.prevInput = "", r.inaccurateSelection = !1, a.value = Is.text.join("\n"), ya(a));
          } else {
            if (!i.options.lineWiseCopyCut) {
              return;
            }
            var t = Do(i);
            Ao({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type ? i.setSelections(t.ranges, null, Sa) : (r.prevInput = "", a.value = t.text.join("\n"), ya(a))
          }
          "cut" == e.type && (i.state.cutIncoming = !0)
        }
      }

      var n = this, r = this, i = this.cm, o = this.wrapper = Po(),
          a = this.textarea = o.firstChild;
      e.wrapper.insertBefore(o, e.wrapper.firstChild), sa && (a.style.width = "0px"), za(a, "input", function() {
        Jo && Qo >= 9 && n.hasSelection && (n.hasSelection = null), r.poll()
      }), za(a, "paste", function(e) {
        Ee(i, e) || Eo(e, i) || (i.state.pasteIncoming = !0, r.fastPoll())
      }), za(a, "cut", t), za(a, "copy", t), za(e.scroller, "paste", function(t) {
        Ht(e, t) || Ee(i, t) || (i.state.pasteIncoming = !0, r.focus())
      }), za(e.lineSpace, "selectstart", function(t) {
        Ht(e, t) || Pe(t)
      }), za(a, "compositionstart", function() {
        var e = i.getCursor("from");
        r.composing && r.composing.range.clear(), r.composing = {
          start: e,
          range: i.markText(e, i.getCursor("to"), {className: "CodeMirror-composing"})
        }
      }), za(a, "compositionend", function() {
        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
      })
    }, Ns.prototype.prepareSelection = function() {
      var e = this.cm, t = e.display, n = e.doc, r = Mn(e);
      if (e.options.moveInputWithCursor) {
        var i = fn(e, n.sel.primary().head, "div"),
            o = t.wrapper.getBoundingClientRect(),
            a = t.lineDiv.getBoundingClientRect();
        r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
      }
      return r
    }, Ns.prototype.showSelection = function(e) {
      var t = this.cm, r = t.display;
      n(r.cursorDiv, e.cursors), n(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
    }, Ns.prototype.reset = function(e) {
      if (!this.contextMenuPending) {
        var t, n, r = this.cm, i = r.doc;
        if (r.somethingSelected()) {
          this.prevInput = "";
          var o = i.sel.primary();
          t = Ha && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);
          var a = t ? "-" : n || r.getSelection();
          this.textarea.value = a, r.state.focused && ya(this.textarea), Jo && Qo >= 9 && (this.hasSelection = a)
        } else {
          e || (this.prevInput = this.textarea.value = "", Jo && Qo >= 9 && (this.hasSelection = null));
        }
        this.inaccurateSelection = t
      }
    }, Ns.prototype.getField = function() {
      return this.textarea
    }, Ns.prototype.supportsTouch = function() {
      return !1
    }, Ns.prototype.focus = function() {
      if ("nocursor" != this.cm.options.readOnly && (!ua || s() != this.textarea)) {
        try {
          this.textarea.focus()
        } catch (e) {
        }
      }
    }, Ns.prototype.blur = function() {
      this.textarea.blur()
    }, Ns.prototype.resetPosition = function() {
      this.wrapper.style.top = this.wrapper.style.left = 0
    }, Ns.prototype.receivedFocus = function() {
      this.slowPoll()
    }, Ns.prototype.slowPoll = function() {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
        e.poll(), e.cm.state.focused && e.slowPoll()
      })
    }, Ns.prototype.fastPoll = function() {
      function e() {
        n.poll() || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
      }

      var t = !1, n = this;
      n.pollingFast = !0, n.polling.set(20, e)
    }, Ns.prototype.poll = function() {
      var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
      if (this.contextMenuPending || !t.state.focused || Fa(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) {
        return !1;
      }
      var i = n.value;
      if (i == r && !t.somethingSelected()) {
        return !1;
      }
      if (Jo && Qo >= 9 && this.hasSelection === i || ca && /[\uf700-\uf7ff]/.test(i)) {
        return t.display.input.reset(), !1;
      }
      if (t.doc.sel == t.display.selForContextMenu) {
        var o = i.charCodeAt(0);
        if (8203 != o || r || (r = "​"), 8666 == o) {
          return this.reset(), this.cm.execCommand("undo")
        }
      }
      for (var a = 0, s = Math.min(r.length, i.length); a < s && r.charCodeAt(a) == i.charCodeAt(a);) {
        ++a;
      }
      return dr(t, function() {
        Io(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
      }), !0
    }, Ns.prototype.ensurePolled = function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1)
    }, Ns.prototype.onKeyPress = function() {
      Jo && Qo >= 9 && (this.hasSelection = null), this.fastPoll()
    }, Ns.prototype.onContextMenu = function(e) {
      function t() {
        if (null != a.selectionStart) {
          var e = i.somethingSelected(), t = "​" + (e ? a.value : "");
          a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel
        }
      }

      function n() {
        if (r.contextMenuPending = !1, r.wrapper.style.cssText = c, a.style.cssText = u, Jo && Qo < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = l), null != a.selectionStart) {
          (!Jo || Jo && Qo < 9) && t();
          var e = 0, n = function t() {
            o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? fr(i, xi)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(t, 500) : (o.selForContextMenu = null, o.input.reset())
          };
          o.detectingSelectAll = setTimeout(n, 200)
        }
      }

      var r = this, i = r.cm, o = i.display, a = r.textarea, s = _n(i, e),
          l = o.scroller.scrollTop;
      if (s && !ra) {
        i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(s) && fr(i, pi)(i.doc, Nr(s), Sa);
        var u = a.style.cssText, c = r.wrapper.style.cssText;
        r.wrapper.style.cssText = "position: absolute";
        var d = r.wrapper.getBoundingClientRect();
        a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + "px;\n      z-index: 1000; background: " + (Jo ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        var f;
        if (ea && (f = window.scrollY), o.input.focus(), ea && window.scrollTo(null, f), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), Jo && Qo >= 9 && t(), ga) {
          He(e);
          var p = function e() {
            Ae(window, "mouseup", e), setTimeout(n, 20)
          };
          za(window, "mouseup", p)
        } else {
          setTimeout(n, 50)
        }
      }
    }, Ns.prototype.readOnlyChanged = function(e) {
      e || this.reset()
    }, Ns.prototype.setUneditable = function() {
    }, Ns.prototype.needsContentAttribute = !1, function(e) {
      function t(t, r, i, o) {
        e.defaults[t] = r, i && (n[t] = o ? function(e, t, n) {
          n != Ls && i(e, t, n)
        } : i)
      }

      var n = e.optionHandlers;
      e.defineOption = t, e.Init = Ls, t("value", "", function(e, t) {
        return e.setValue(t)
      }, !0), t("mode", null, function(e, t) {
        e.doc.modeOption = t, Hr(e)
      }, !0), t("indentUnit", 2, Hr, !0), t("indentWithTabs", !1), t("smartIndent", !0), t("tabSize", 4, function(e) {
        Rr(e), an(e), mr(e)
      }, !0), t("lineSeparator", null, function(e, t) {
        if (e.doc.lineSep = t, t) {
          var n = [], r = e.doc.first;
          e.doc.iter(function(e) {
            for (var i = 0; ;) {
              var o = e.text.indexOf(t, i);
              if (-1 == o) {
                break;
              }
              i = o + t.length, n.push(P(r, o))
            }
            r++
          });
          for (var i = n.length - 1; i >= 0; i--) {
            Oi(e.doc, t, n[i], P(n[i].line, n[i].ch + t.length))
          }
        }
      }), t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Ls && e.refresh()
      }), t("specialCharPlaceholder", pt, function(e) {
        return e.refresh()
      }, !0), t("electricChars", !0), t("inputStyle", ua ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor")
      }, !0), t("spellcheck", !1, function(e, t) {
        return e.getInputField().spellcheck = t
      }, !0), t("rtlMoveVisually", !fa), t("wholeLineUpdateBefore", !0), t("theme", "default", function(e) {
        Co(e), So(e)
      }, !0), t("keyMap", "default", function(e, t, n) {
        var r = eo(t), i = n != Ls && eo(n);
        i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
      }), t("extraKeys", null), t("lineWrapping", !1, To, !0), t("gutters", [], function(e) {
        Ir(e.options), So(e)
      }, !0), t("fixedGutter", !0, function(e, t) {
        e.display.gutters.style.left = t ? kn(e.display) + "px" : "0", e.refresh()
      }, !0), t("coverGutterNextToScrollbar", !1, function(e) {
        return Kn(e)
      }, !0), t("scrollbarStyle", "native", function(e) {
        Xn(e), Kn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
      }, !0), t("lineNumbers", !1, function(e) {
        Ir(e.options), So(e)
      }, !0), t("firstLineNumber", 1, So, !0), t("lineNumberFormatter", function(e) {
        return e
      }, So, !0), t("showCursorWhenSelecting", !1, Ln, !0), t("resetSelectionOnContextMenu", !0), t("lineWiseCopyCut", !0), t("readOnly", !1, function(e, t) {
        "nocursor" == t ? (zn(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1, e.display.input.readOnlyChanged(t)
      }), t("disableInput", !1, function(e, t) {
        t || e.display.input.reset()
      }, !0), t("dragDrop", !0, _o), t("allowDropFileTypes", null), t("cursorBlinkRate", 530), t("cursorScrollMargin", 0), t("cursorHeight", 1, Ln, !0), t("singleCursorHeightPerLine", !0, Ln, !0), t("workTime", 100), t("workDelay", 100), t("flattenSpans", !0, Rr, !0), t("addModeClass", !1, Rr, !0), t("pollInterval", 100), t("undoDepth", 200, function(e, t) {
        return e.doc.history.undoDepth = t
      }), t("historyEventDelay", 1250), t("viewportMargin", 10, function(e) {
        return e.refresh()
      }, !0), t("maxHighlightLength", 1e4, Rr, !0), t("moveInputWithCursor", !0, function(e, t) {
        t || e.display.input.resetPosition()
      }), t("tabindex", null, function(e, t) {
        return e.display.input.getField().tabIndex = t || ""
      }), t("autofocus", null), t("direction", "ltr", function(e, t) {
        return e.doc.setDirection(t)
      }, !0)
    }(Lo), function(e) {
      var t = e.optionHandlers, n = e.helpers = {};
      e.prototype = {
        constructor: e,
        focus: function() {
          window.focus(), this.display.input.focus()
        },
        setOption: function(e, n) {
          var r = this.options, i = r[e];
          r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && fr(this, t[e])(this, n, i), Ie(this, "optionChange", this, e))
        },
        getOption: function(e) {
          return this.options[e]
        },
        getDoc: function() {
          return this.doc
        },
        addKeyMap: function(e, t) {
          this.state.keyMaps[t ? "push" : "unshift"](eo(e))
        },
        removeKeyMap: function(e) {
          for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
            if (t[n] == e || t[n].name == e) {
              return t.splice(n, 1), !0
            }
          }
        },
        addOverlay: pr(function(t, n) {
          var r = t.token ? t : e.getMode(this.options, t);
          if (r.startState) {
            throw new Error("Overlays may not be stateful.");
          }
          y(this.state.overlays, {
            mode: r,
            modeSpec: t,
            opaque: n && n.opaque,
            priority: n && n.priority || 0
          }, function(e) {
            return e.priority
          }), this.state.modeGen++, mr(this)
        }),
        removeOverlay: pr(function(e) {
          for (var t = this, n = this.state.overlays, r = 0; r < n.length; ++r) {
            var i = n[r].modeSpec;
            if (i == e || "string" == typeof e && i.name == e) {
              return n.splice(r, 1), t.state.modeGen++, void mr(t)
            }
          }
        }),
        indentLine: pr(function(e, t, n) {
          "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), D(this.doc, e) && Oo(this, e, t, n)
        }),
        indentSelection: pr(function(e) {
          for (var t = this, n = this.doc.sel.ranges, r = -1, i = 0; i < n.length; i++) {
            var o = n[i];
            if (o.empty()) {
              o.head.line > r && (Oo(t, o.head.line, e, !0), r = o.head.line, i == t.doc.sel.primIndex && tr(t));
            } else {
              var a = o.from(), s = o.to(), l = Math.max(r, a.line);
              r = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
              for (var u = l; u < r; ++u) {
                Oo(t, u, e);
              }
              var c = t.doc.sel.ranges;
              0 == a.ch && n.length == c.length && c[i].from().ch > 0 && ui(t.doc, i, new as(a, c[i].to()), Sa)
            }
          }
        }),
        getTokenAt: function(e, t) {
          return ot(this, e, t)
        },
        getLineTokens: function(e, t) {
          return ot(this, P(e), t, !0)
        },
        getTokenTypeAt: function(e) {
          e = U(this.doc, e);
          var t, n = et(this, M(this.doc, e.line)), r = 0,
              i = (n.length - 1) / 2, o = e.ch;
          if (0 == o) {
            t = n[2];
          } else {
            for (; ;) {
              var a = r + i >> 1;
              if ((a ? n[2 * a - 1] : 0) >= o) {
                i = a;
              } else {
                if (!(n[2 * a + 1] < o)) {
                  t = n[2 * a + 2];
                  break
                }
                r = a + 1
              }
            }
          }
          var s = t ? t.indexOf("overlay ") : -1;
          return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
        },
        getModeAt: function(t) {
          var n = this.doc.mode;
          return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
        },
        getHelper: function(e, t) {
          return this.getHelpers(e, t)[0]
        },
        getHelpers: function(e, t) {
          var r = this, i = [];
          if (!n.hasOwnProperty(t)) {
            return i;
          }
          var o = n[t], a = this.getModeAt(e);
          if ("string" == typeof a[t]) {
            o[a[t]] && i.push(o[a[t]]);
          } else if (a[t]) {
            for (var s = 0; s < a[t].length; s++) {
              var l = o[a[t][s]];
              l && i.push(l)
            }
          } else {
            a.helperType && o[a.helperType] ? i.push(o[a.helperType]) : o[a.name] && i.push(o[a.name]);
          }
          for (var u = 0; u < o._global.length; u++) {
            var c = o._global[u];
            c.pred(a, r) && -1 == p(i, c.val) && i.push(c.val)
          }
          return i
        },
        getStateAfter: function(e, t) {
          var n = this.doc;
          return e = j(n, null == e ? n.first + n.size - 1 : e), tt(this, e + 1, t)
        },
        cursorCoords: function(e, t) {
          var n, r = this.doc.sel.primary();
          return n = null == e ? r.head : "object" == (void 0 === e ? "undefined" : o(e)) ? U(this.doc, e) : e ? r.from() : r.to(), fn(this, n, t || "page")
        },
        charCoords: function(e, t) {
          return dn(this, U(this.doc, e), t || "page")
        },
        coordsChar: function(e, t) {
          return e = cn(this, e, t || "page"), mn(this, e.left, e.top)
        },
        lineAtHeight: function(e, t) {
          return e = cn(this, {
            top: e,
            left: 0
          }, t || "page").top, N(this.doc, e + this.display.viewOffset)
        },
        heightAtLine: function(e, t, n) {
          var r, i = !1;
          if ("number" == typeof e) {
            var o = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = M(this.doc, e)
          } else {
            r = e;
          }
          return un(this, r, {
            top: 0,
            left: 0
          }, t || "page", n || i).top + (i ? this.doc.height - be(r) : 0)
        },
        defaultTextHeight: function() {
          return bn(this.display)
        },
        defaultCharWidth: function() {
          return wn(this.display)
        },
        getViewport: function() {
          return {from: this.display.viewFrom, to: this.display.viewTo}
        },
        addWidget: function(e, t, n, r, i) {
          var o = this.display;
          e = fn(this, U(this.doc, e));
          var a = e.bottom, s = e.left;
          if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) {
            a = e.top;
          } else if ("above" == r || "near" == r) {
            var l = Math.max(o.wrapper.clientHeight, this.doc.height),
                u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
            ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth)
          }
          t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && Jn(this, {
            left: s,
            top: a,
            right: s + t.offsetWidth,
            bottom: a + t.offsetHeight
          })
        },
        triggerOnKeyDown: pr(co),
        triggerOnKeyPress: pr(ho),
        triggerOnKeyUp: po,
        execCommand: function(e) {
          if (Ss.hasOwnProperty(e)) {
            return Ss[e].call(null, this)
          }
        },
        triggerElectric: pr(function(e) {
          No(this, e)
        }),
        findPosH: function(e, t, n, r) {
          var i = this, o = 1;
          t < 0 && (o = -1, t = -t);
          for (var a = U(this.doc, e), s = 0; s < t && (a = Wo(i.doc, a, o, n, r), !a.hitSide); ++s) {
            ;
          }
          return a
        },
        moveH: pr(function(e, t) {
          var n = this;
          this.extendSelectionsBy(function(r) {
            return n.display.shift || n.doc.extend || r.empty() ? Wo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
          }, Ta)
        }),
        deleteH: pr(function(e, t) {
          var n = this.doc.sel, r = this.doc;
          n.somethingSelected() ? r.replaceSelection("", null, "+delete") : to(this, function(n) {
            var i = Wo(r, n.head, e, t, !1);
            return e < 0 ? {from: i, to: n.head} : {from: n.head, to: i}
          })
        }),
        findPosV: function(e, t, n, r) {
          var i = this, o = 1, a = r;
          t < 0 && (o = -1, t = -t);
          for (var s = U(this.doc, e), l = 0; l < t; ++l) {
            var u = fn(i, s, "div");
            if (null == a ? a = u.left : u.left = a, s = Fo(i, u, o, n), s.hitSide) {
              break
            }
          }
          return s
        },
        moveV: pr(function(e, t) {
          var n = this, r = this.doc, i = [],
              o = !this.display.shift && !r.extend && r.sel.somethingSelected();
          if (r.extendSelectionsBy(function(a) {
                if (o) {
                  return e < 0 ? a.from() : a.to();
                }
                var s = fn(n, a.head, "div");
                null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                var l = Fo(n, s, e, t);
                return "page" == t && a == r.sel.primary() && er(n, null, dn(n, l, "div").top - s.top), l
              }, Ta), i.length) {
            for (var a = 0; a < r.sel.ranges.length; a++) {
              r.sel.ranges[a].goalColumn = i[a]
            }
          }
        }),
        findWordAt: function(e) {
          var t = this.doc, n = M(t, e.line).text, r = e.ch, i = e.ch;
          if (n) {
            var o = this.getHelper(e, "wordChars");
            "before" != e.sticky && i != n.length || !r ? ++i : --r;
            for (var a = n.charAt(r), s = k(a, o) ? function(e) {
              return k(e, o)
            } : /\s/.test(a) ? function(e) {
              return /\s/.test(e)
            } : function(e) {
              return !/\s/.test(e) && !k(e)
            }; r > 0 && s(n.charAt(r - 1));) {
              --r;
            }
            for (; i < n.length && s(n.charAt(i));) {
              ++i
            }
          }
          return new as(P(e.line, r), P(e.line, i))
        },
        toggleOverwrite: function(e) {
          null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? l(this.display.cursorDiv, "CodeMirror-overwrite") : va(this.display.cursorDiv, "CodeMirror-overwrite"), Ie(this, "overwriteToggle", this, this.state.overwrite))
        },
        hasFocus: function() {
          return this.display.input.getField() == s()
        },
        isReadOnly: function() {
          return !(!this.options.readOnly && !this.doc.cantEdit)
        },
        scrollTo: pr(function(e, t) {
          null == e && null == t || nr(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t)
        }),
        getScrollInfo: function() {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - Ut(this) - this.display.barHeight,
            width: e.scrollWidth - Ut(this) - this.display.barWidth,
            clientHeight: qt(this),
            clientWidth: Vt(this)
          }
        },
        scrollIntoView: pr(function(e, t) {
          if (null == e ? (e = {
                from: this.doc.sel.primary().head,
                to: null
              }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                from: P(e, 0),
                to: null
              } : null == e.from && (e = {
                from: e,
                to: null
              }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) {
            nr(this), this.curOp.scrollToPos = e;
          } else {
            var n = Qn(this, {
              left: Math.min(e.from.left, e.to.left),
              top: Math.min(e.from.top, e.to.top) - e.margin,
              right: Math.max(e.from.right, e.to.right),
              bottom: Math.max(e.from.bottom, e.to.bottom) + e.margin
            });
            this.scrollTo(n.scrollLeft, n.scrollTop)
          }
        }),
        setSize: pr(function(e, t) {
          var n = this, r = function(e) {
            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
          };
          null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && on(this);
          var i = this.display.viewFrom;
          this.doc.iter(i, this.display.viewTo, function(e) {
            if (e.widgets) {
              for (var t = 0; t < e.widgets.length; t++) {
                if (e.widgets[t].noHScroll) {
                  gr(n, i, "widget");
                  break
                }
              }
            }
            ++i
          }), this.curOp.forceUpdate = !0, Ie(this, "refresh", this)
        }),
        operation: function(e) {
          return dr(this, e)
        },
        refresh: pr(function() {
          var e = this.display.cachedTextHeight;
          mr(this), this.curOp.forceUpdate = !0, an(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), Mr(this), (null == e || Math.abs(e - bn(this.display)) > .5) && Sn(this), Ie(this, "refresh", this)
        }),
        swapDoc: pr(function(e) {
          var t = this.doc;
          return t.cm = null, Vr(this, e), an(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, St(this, "swapDoc", this, t), t
        }),
        getInputField: function() {
          return this.display.input.getField()
        },
        getWrapperElement: function() {
          return this.display.wrapper
        },
        getScrollerElement: function() {
          return this.display.scroller
        },
        getGutterElement: function() {
          return this.display.gutters
        }
      }, ze(e), e.registerHelper = function(t, r, i) {
        n.hasOwnProperty(t) || (n[t] = e[t] = {_global: []}), n[t][r] = i
      }, e.registerGlobalHelper = function(t, r, i, o) {
        e.registerHelper(t, r, o), n[t]._global.push({pred: i, val: o})
      }
    }(Lo);
    var Ds = "iter insert remove copy getEditor constructor".split(" ");
    for (var zs in hs.prototype) {
      hs.prototype.hasOwnProperty(zs) && p(Ds, zs) < 0 && (Lo.prototype[zs] = function(e) {
        return function() {
          return e.apply(this.doc, arguments)
        }
      }(hs.prototype[zs]));
    }
    return ze(hs), Lo.inputStyles = {
      textarea: Ns,
      contenteditable: Es
    }, Lo.defineMode = function(e) {
      Lo.defaults.mode || "null" == e || (Lo.defaults.mode = e), qe.apply(this, arguments)
    }, Lo.defineMIME = Ge, Lo.defineMode("null", function() {
      return {
        token: function(e) {
          return e.skipToEnd()
        }
      }
    }), Lo.defineMIME("text/plain", "null"), Lo.defineExtension = function(e, t) {
      Lo.prototype[e] = t
    }, Lo.defineDocExtension = function(e, t) {
      hs.prototype[e] = t
    }, Lo.fromTextArea = qo, function(e) {
      e.off = Ae, e.on = za, e.wheelEventPixels = Vn, e.Doc = hs, e.splitLines = Wa, e.countColumn = f, e.findColumn = h, e.isWordChar = x, e.Pass = Ca, e.signal = Ie, e.Line = qa, e.changeEnd = Dr, e.scrollbarModel = ns, e.Pos = P, e.cmpPos = W, e.modes = Ba, e.mimeModes = ja, e.resolveMode = Ke, e.getMode = $e, e.modeExtensions = Ua, e.extendMode = Xe, e.copyState = Ye, e.startState = Je, e.innerMode = Ze, e.commands = Ss, e.keyMap = xs, e.keyName = Qi, e.isModifierKey = Ji, e.lookupKey = Zi, e.normalizeKeyMap = Yi, e.StringStream = Va, e.SharedTextMarker = fs, e.TextMarker = ds, e.LineWidget = us, e.e_preventDefault = Pe, e.e_stopPropagation = We, e.e_stop = He, e.addClass = l, e.contains = a, e.rmClass = va, e.keyNames = vs
    }(Lo), Lo.version = "5.25.0", Lo
  })
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {
    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0, get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(8);
  n.d(t, "b", function() {
    return r.a
  });
  var i = n(21);
  n.d(t, "a", function() {
    return i.a
  })
}, function(e, t, n) {
  "use strict";

  function r(e, t, n) {
    ga("send", {
      hitType: "event",
      eventCategory: e,
      eventAction: t,
      eventLabel: n,
      transport: "beacon"
    })
  }

  n.d(t, "c", function() {
    return i
  }), n.d(t, "a", function() {
    return o
  }), n.d(t, "b", function() {
    return a
  }), n.d(t, "d", function() {
    return s
  });
  var i = function(e) {
    r("navigation", "external click", e)
  }, o = function(e) {
    r("navigation", "toolbar click", e)
  }, a = function(e) {
    r("navigation", "welcome click", e)
  }, s = function() {
    r("code", "copy", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
  }
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", function() {
    return r
  });
  var r = {
    MENU: ".mdc-simple-menu",
    TOOLBAR: ".mdc-toolbar",
    WELCOME: ".welcome"
  }
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";

      function t(e) {
        for (var t = {}, n = 0; n < e.length; ++n) {
          t[e[n].toLowerCase()] = !0;
        }
        return t
      }

      function n(e, t) {
        for (var n, r = !1; null != (n = e.next());) {
          if (r && "/" == n) {
            t.tokenize = null;
            break
          }
          r = "*" == n
        }
        return ["comment", "comment"]
      }

      e.defineMode("css", function(t, n) {
        function r(e, t) {
          return m = t, e
        }

        function i(e, t) {
          var n = e.next();
          if (y[n]) {
            var i = y[n](e, t);
            if (!1 !== i) {
              return i
            }
          }
          return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = o(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : "u" == n && e.match(/rl(-prefix)?\(/) || "d" == n && e.match("omain(") || "r" == n && e.match("egexp(") ? (e.backUp(1), t.tokenize = s, r("property", "word")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0
        }

        function o(e) {
          return function(t, n) {
            for (var i, o = !1; null != (i = t.next());) {
              if (i == e && !o) {
                ")" == e && t.backUp(1);
                break
              }
              o = !o && "\\" == i
            }
            return (i == e || !o && ")" != e) && (n.tokenize = null), r("string", "string")
          }
        }

        function s(e, t) {
          return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = o(")"), r(null, "(")
        }

        function l(e, t, n) {
          this.type = e, this.indent = t, this.prev = n
        }

        function u(e, t, n, r) {
          return e.context = new l(n, t.indentation() + (!1 === r ? 0 : v), e.context), n
        }

        function c(e) {
          return e.context.prev && (e.context = e.context.prev), e.context.type
        }

        function d(e, t, n) {
          return E[n.context.type](e, t, n)
        }

        function f(e, t, n, r) {
          for (var i = r || 1; i > 0; i--) {
            n.context = n.context.prev;
          }
          return d(e, t, n)
        }

        function p(e) {
          var t = e.current().toLowerCase();
          g = M.hasOwnProperty(t) ? "atom" : L.hasOwnProperty(t) ? "keyword" : "variable"
        }

        var h = n.inline;
        n.propertyKeywords || (n = e.resolveMode("text/css"));
        var m, g, v = t.indentUnit, y = n.tokenHooks, b = n.documentTypes || {},
            w = n.mediaTypes || {}, x = n.mediaFeatures || {},
            k = n.mediaValueKeywords || {}, C = n.propertyKeywords || {},
            S = n.nonStandardPropertyKeywords || {}, _ = n.fontProperties || {},
            T = n.counterDescriptors || {}, L = n.colorKeywords || {},
            M = n.valueKeywords || {}, O = n.allowNested, A = n.lineComment,
            I = !0 === n.supportsAtComponent, E = {};
        return E.top = function(e, t, n) {
          if ("{" == e) {
            return u(n, t, "block");
          }
          if ("}" == e && n.context.prev) {
            return c(n);
          }
          if (I && /@component/.test(e)) {
            return u(n, t, "atComponentBlock");
          }
          if (/^@(-moz-)?document$/.test(e)) {
            return u(n, t, "documentTypes");
          }
          if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) {
            return u(n, t, "atBlock");
          }
          if (/^@(font-face|counter-style)/.test(e)) {
            return n.stateArg = e, "restricted_atBlock_before";
          }
          if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) {
            return "keyframes";
          }
          if (e && "@" == e.charAt(0)) {
            return u(n, t, "at");
          }
          if ("hash" == e) {
            g = "builtin";
          } else if ("word" == e) {
            g = "tag";
          } else {
            if ("variable-definition" == e) {
              return "maybeprop";
            }
            if ("interpolation" == e) {
              return u(n, t, "interpolation");
            }
            if (":" == e) {
              return "pseudo";
            }
            if (O && "(" == e) {
              return u(n, t, "parens")
            }
          }
          return n.context.type
        }, E.block = function(e, t, n) {
          if ("word" == e) {
            var r = t.current().toLowerCase();
            return C.hasOwnProperty(r) ? (g = "property", "maybeprop") : S.hasOwnProperty(r) ? (g = "string-2", "maybeprop") : O ? (g = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (g += " error", "maybeprop")
          }
          return "meta" == e ? "block" : O || "hash" != e && "qualifier" != e ? E.top(e, t, n) : (g = "error", "block")
        }, E.maybeprop = function(e, t, n) {
          return ":" == e ? u(n, t, "prop") : d(e, t, n)
        }, E.prop = function(e, t, n) {
          if (";" == e) {
            return c(n);
          }
          if ("{" == e && O) {
            return u(n, t, "propBlock");
          }
          if ("}" == e || "{" == e) {
            return f(e, t, n);
          }
          if ("(" == e) {
            return u(n, t, "parens");
          }
          if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
            if ("word" == e) {
              p(t);
            } else if ("interpolation" == e) {
              return u(n, t, "interpolation")
            }
          } else {
            g += " error";
          }
          return "prop"
        }, E.propBlock = function(e, t, n) {
          return "}" == e ? c(n) : "word" == e ? (g = "property", "maybeprop") : n.context.type
        }, E.parens = function(e, t, n) {
          return "{" == e || "}" == e ? f(e, t, n) : ")" == e ? c(n) : "(" == e ? u(n, t, "parens") : "interpolation" == e ? u(n, t, "interpolation") : ("word" == e && p(t), "parens")
        }, E.pseudo = function(e, t, n) {
          return "meta" == e ? "pseudo" : "word" == e ? (g = "variable-3", n.context.type) : d(e, t, n)
        }, E.documentTypes = function(e, t, n) {
          return "word" == e && b.hasOwnProperty(t.current()) ? (g = "tag", n.context.type) : E.atBlock(e, t, n)
        }, E.atBlock = function(e, t, n) {
          if ("(" == e) {
            return u(n, t, "atBlock_parens");
          }
          if ("}" == e || ";" == e) {
            return f(e, t, n);
          }
          if ("{" == e) {
            return c(n) && u(n, t, O ? "block" : "top");
          }
          if ("interpolation" == e) {
            return u(n, t, "interpolation");
          }
          if ("word" == e) {
            var r = t.current().toLowerCase();
            g = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : w.hasOwnProperty(r) ? "attribute" : x.hasOwnProperty(r) ? "property" : k.hasOwnProperty(r) ? "keyword" : C.hasOwnProperty(r) ? "property" : S.hasOwnProperty(r) ? "string-2" : M.hasOwnProperty(r) ? "atom" : L.hasOwnProperty(r) ? "keyword" : "error"
          }
          return n.context.type
        }, E.atComponentBlock = function(e, t, n) {
          return "}" == e ? f(e, t, n) : "{" == e ? c(n) && u(n, t, O ? "block" : "top", !1) : ("word" == e && (g = "error"), n.context.type)
        }, E.atBlock_parens = function(e, t, n) {
          return ")" == e ? c(n) : "{" == e || "}" == e ? f(e, t, n, 2) : E.atBlock(e, t, n)
        }, E.restricted_atBlock_before = function(e, t, n) {
          return "{" == e ? u(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (g = "variable", "restricted_atBlock_before") : d(e, t, n)
        }, E.restricted_atBlock = function(e, t, n) {
          return "}" == e ? (n.stateArg = null, c(n)) : "word" == e ? (g = "@font-face" == n.stateArg && !_.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !T.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
        }, E.keyframes = function(e, t, n) {
          return "word" == e ? (g = "variable", "keyframes") : "{" == e ? u(n, t, "top") : d(e, t, n)
        }, E.at = function(e, t, n) {
          return ";" == e ? c(n) : "{" == e || "}" == e ? f(e, t, n) : ("word" == e ? g = "tag" : "hash" == e && (g = "builtin"), "at")
        }, E.interpolation = function(e, t, n) {
          return "}" == e ? c(n) : "{" == e || ";" == e ? f(e, t, n) : ("word" == e ? g = "variable" : "variable" != e && "(" != e && ")" != e && (g = "error"), "interpolation")
        }, {
          startState: function(e) {
            return {
              tokenize: null,
              state: h ? "block" : "top",
              stateArg: null,
              context: new l(h ? "block" : "top", e || 0, null)
            }
          },
          token: function(e, t) {
            if (!t.tokenize && e.eatSpace()) {
              return null;
            }
            var n = (t.tokenize || i)(e, t);
            return n && "object" == (void 0 === n ? "undefined" : a(n)) && (m = n[1], n = n[0]), g = n, t.state = E[t.state](m, e, t), g
          },
          indent: function(e, t) {
            var n = e.context, r = t && t.charAt(0), i = n.indent;
            return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (i = Math.max(0, n.indent - v), n = n.prev) : (n = n.prev, i = n.indent)), i
          },
          electricChars: "}",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: A,
          fold: "brace"
        }
      });
      var r = ["domain", "regexp", "url", "url-prefix"], i = t(r),
          o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
          s = t(o),
          l = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
          u = t(l),
          c = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
          d = t(c),
          f = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
          p = t(f),
          h = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
          m = t(h),
          g = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
          v = t(g),
          y = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
          b = t(y),
          w = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
          x = t(w),
          k = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
          C = t(k),
          S = r.concat(o).concat(l).concat(c).concat(f).concat(h).concat(w).concat(k);
      e.registerHelper("hintWords", "css", S), e.defineMIME("text/css", {
        documentTypes: i,
        mediaTypes: s,
        mediaFeatures: u,
        mediaValueKeywords: d,
        propertyKeywords: p,
        nonStandardPropertyKeywords: m,
        fontProperties: v,
        counterDescriptors: b,
        colorKeywords: x,
        valueKeywords: C,
        tokenHooks: {
          "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = n, n(e, t))
          }
        },
        name: "css"
      }), e.defineMIME("text/x-scss", {
        mediaTypes: s,
        mediaFeatures: u,
        mediaValueKeywords: d,
        propertyKeywords: p,
        nonStandardPropertyKeywords: m,
        colorKeywords: x,
        valueKeywords: C,
        fontProperties: v,
        allowNested: !0,
        lineComment: "//",
        tokenHooks: {
          "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
          }, ":": function(e) {
            return !!e.match(/\s*\{/) && [null, "{"]
          }, $: function(e) {
            return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
          }, "#": function(e) {
            return !!e.eat("{") && [null, "interpolation"]
          }
        },
        name: "css",
        helperType: "scss"
      }), e.defineMIME("text/x-less", {
        mediaTypes: s,
        mediaFeatures: u,
        mediaValueKeywords: d,
        propertyKeywords: p,
        nonStandardPropertyKeywords: m,
        colorKeywords: x,
        valueKeywords: C,
        fontProperties: v,
        allowNested: !0,
        lineComment: "//",
        tokenHooks: {
          "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
          }, "@": function(e) {
            return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
          }, "&": function() {
            return ["atom", "atom"]
          }
        },
        name: "css",
        helperType: "less"
      }), e.defineMIME("text/x-gss", {
        documentTypes: i,
        mediaTypes: s,
        mediaFeatures: u,
        propertyKeywords: p,
        nonStandardPropertyKeywords: m,
        fontProperties: v,
        counterDescriptors: b,
        colorKeywords: x,
        valueKeywords: C,
        supportsAtComponent: !0,
        tokenHooks: {
          "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = n, n(e, t))
          }
        },
        name: "css",
        helperType: "gss"
      })
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";

      function t(e, t, n) {
        return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
      }

      e.defineMode("javascript", function(n, r) {
        function i(e) {
          for (var t, n = !1, r = !1; null != (t = e.next());) {
            if (!n) {
              if ("/" == t && !r) {
                return;
              }
              "[" == t ? r = !0 : r && "]" == t && (r = !1)
            }
            n = !n && "\\" == t
          }
        }

        function o(e, t, n) {
          return Te = e, Le = n, t
        }

        function s(e, n) {
          var r = e.next();
          if ('"' == r || "'" == r) {
            return n.tokenize = l(r), n.tokenize(e, n);
          }
          if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
            return o("number", "number");
          }
          if ("." == r && e.match("..")) {
            return o("spread", "meta");
          }
          if (/[\[\]{}\(\),;\:\.]/.test(r)) {
            return o(r);
          }
          if ("=" == r && e.eat(">")) {
            return o("=>", "operator");
          }
          if ("0" == r && e.eat(/x/i)) {
            return e.eatWhile(/[\da-f]/i), o("number", "number");
          }
          if ("0" == r && e.eat(/o/i)) {
            return e.eatWhile(/[0-7]/i), o("number", "number");
          }
          if ("0" == r && e.eat(/b/i)) {
            return e.eatWhile(/[01]/i), o("number", "number");
          }
          if (/\d/.test(r)) {
            return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), o("number", "number");
          }
          if ("/" == r) {
            return e.eat("*") ? (n.tokenize = u, u(e, n)) : e.eat("/") ? (e.skipToEnd(), o("comment", "comment")) : t(e, n, 1) ? (i(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), o("regexp", "string-2")) : (e.eatWhile(ze), o("operator", "operator", e.current()));
          }
          if ("`" == r) {
            return n.tokenize = c, c(e, n);
          }
          if ("#" == r) {
            return e.skipToEnd(), o("error", "error");
          }
          if (ze.test(r)) {
            return ">" == r && n.lexical && ">" == n.lexical.type || e.eatWhile(ze), o("operator", "operator", e.current());
          }
          if (Ne.test(r)) {
            e.eatWhile(Ne);
            var a = e.current(), s = De.propertyIsEnumerable(a) && De[a];
            return s && "." != n.lastType ? o(s.type, s.style, a) : o("variable", "variable", a)
          }
        }

        function l(e) {
          return function(t, n) {
            var r, i = !1;
            if (Ae && "@" == t.peek() && t.match(Pe)) {
              return n.tokenize = s, o("jsonld-keyword", "meta");
            }
            for (; null != (r = t.next()) && (r != e || i);) {
              i = !i && "\\" == r;
            }
            return i || (n.tokenize = s), o("string", "string")
          }
        }

        function u(e, t) {
          for (var n, r = !1; n = e.next();) {
            if ("/" == n && r) {
              t.tokenize = s;
              break
            }
            r = "*" == n
          }
          return o("comment", "comment")
        }

        function c(e, t) {
          for (var n, r = !1; null != (n = e.next());) {
            if (!r && ("`" == n || "$" == n && e.eat("{"))) {
              t.tokenize = s;
              break
            }
            r = !r && "\\" == n
          }
          return o("quasi", "string-2", e.current())
        }

        function d(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var n = e.string.indexOf("=>", e.start);
          if (!(n < 0)) {
            if (Ee) {
              var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
              r && (n = r.index)
            }
            for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
              var s = e.string.charAt(a), l = We.indexOf(s);
              if (l >= 0 && l < 3) {
                if (!i) {
                  ++a;
                  break
                }
                if (0 == --i) {
                  "(" == s && (o = !0);
                  break
                }
              } else if (l >= 3 && l < 6) {
                ++i;
              } else if (Ne.test(s)) {
                o = !0;
              } else {
                if (/["'\/]/.test(s)) {
                  return;
                }
                if (o && !i) {
                  ++a;
                  break
                }
              }
            }
            o && !i && (t.fatArrowAt = a)
          }
        }

        function f(e, t, n, r, i, o) {
          this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
        }

        function p(e, t) {
          for (var n = e.localVars; n; n = n.next) {
            if (n.name == t) {
              return !0;
            }
          }
          for (var r = e.context; r; r = r.prev) {
            for (var n = r.vars; n; n = n.next) {
              if (n.name == t) {
                return !0
              }
            }
          }
        }

        function h(e, t, n, r, i) {
          var o = e.cc;
          for (He.state = e, He.stream = i, He.marked = null, He.cc = o, He.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) {
            if ((o.length ? o.pop() : Ie ? S : C)(n, r)) {
              for (; o.length && o[o.length - 1].lex;) {
                o.pop()();
              }
              return He.marked ? He.marked : "variable" == n && p(e, r) ? "variable-2" : t
            }
          }
        }

        function m() {
          for (var e = arguments.length - 1; e >= 0; e--) {
            He.cc.push(arguments[e])
          }
        }

        function g() {
          return m.apply(null, arguments), !0
        }

        function v(e) {
          function t(t) {
            for (var n = t; n; n = n.next) {
              if (n.name == e) {
                return !0;
              }
            }
            return !1
          }

          var n = He.state;
          if (He.marked = "def", n.context) {
            if (t(n.localVars)) {
              return;
            }
            n.localVars = {name: e, next: n.localVars}
          } else {
            if (t(n.globalVars)) {
              return;
            }
            r.globalVars && (n.globalVars = {name: e, next: n.globalVars})
          }
        }

        function y() {
          He.state.context = {
            prev: He.state.context,
            vars: He.state.localVars
          }, He.state.localVars = Re
        }

        function b() {
          He.state.localVars = He.state.context.vars, He.state.context = He.state.context.prev
        }

        function w(e, t) {
          var n = function() {
            var n = He.state, r = n.indented;
            if ("stat" == n.lexical.type) {
              r = n.lexical.indented;
            } else {
              for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) {
                r = i.indented;
              }
            }
            n.lexical = new f(r, He.stream.column(), e, null, n.lexical, t)
          };
          return n.lex = !0, n
        }

        function x() {
          var e = He.state;
          e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
        }

        function k(e) {
          function t(n) {
            return n == e ? g() : ";" == e ? m() : g(t)
          }

          return t
        }

        function C(e, t) {
          return "var" == e ? g(w("vardef", t.length), Q, k(";"), x) : "keyword a" == e ? g(w("form"), T, C, x) : "keyword b" == e ? g(w("form"), C, x) : "{" == e ? g(w("}"), G, x) : ";" == e ? g() : "if" == e ? ("else" == He.state.lexical.info && He.state.cc[He.state.cc.length - 1] == x && He.state.cc.pop()(), g(w("form"), T, C, x, ie)) : "function" == e ? g(ce) : "for" == e ? g(w("form"), oe, C, x) : "variable" == e ? g(w("stat"), H) : "switch" == e ? g(w("form"), T, w("}", "switch"), k("{"), G, x, x) : "case" == e ? g(S, k(":")) : "default" == e ? g(k(":")) : "catch" == e ? g(w("form"), y, k("("), de, k(")"), C, x, b) : "class" == e ? g(w("form"), pe, x) : "export" == e ? g(w("stat"), ve, x) : "import" == e ? g(w("stat"), be, x) : "module" == e ? g(w("form"), ee, w("}"), k("{"), G, x, x) : "type" == e ? g($, k("operator"), $, k(";")) : "async" == e ? g(C) : m(w("stat"), S, k(";"), x)
        }

        function S(e) {
          return L(e, !1)
        }

        function _(e) {
          return L(e, !0)
        }

        function T(e) {
          return "(" != e ? m() : g(w(")"), S, k(")"), x)
        }

        function L(e, t) {
          if (He.state.fatArrowAt == He.stream.start) {
            var n = t ? z : D;
            if ("(" == e) {
              return g(y, w(")"), V(ee, ")"), x, k("=>"), n, b);
            }
            if ("variable" == e) {
              return m(y, ee, k("=>"), n, b)
            }
          }
          var r = t ? I : A;
          return Fe.hasOwnProperty(e) ? g(r) : "function" == e ? g(ce, r) : "class" == e ? g(w("form"), fe, x) : "keyword c" == e || "async" == e ? g(t ? O : M) : "(" == e ? g(w(")"), M, k(")"), x, r) : "operator" == e || "spread" == e ? g(t ? _ : S) : "[" == e ? g(w("]"), Se, x, r) : "{" == e ? q(B, "}", null, r) : "quasi" == e ? m(E, r) : "new" == e ? g(P(t)) : g()
        }

        function M(e) {
          return e.match(/[;\}\)\],]/) ? m() : m(S)
        }

        function O(e) {
          return e.match(/[;\}\)\],]/) ? m() : m(_)
        }

        function A(e, t) {
          return "," == e ? g(S) : I(e, t, !1)
        }

        function I(e, t, n) {
          var r = 0 == n ? A : I, i = 0 == n ? S : _;
          return "=>" == e ? g(y, n ? z : D, b) : "operator" == e ? /\+\+|--/.test(t) ? g(r) : "?" == t ? g(S, k(":"), i) : g(i) : "quasi" == e ? m(E, r) : ";" != e ? "(" == e ? q(_, ")", "call", r) : "." == e ? g(R, r) : "[" == e ? g(w("]"), M, k("]"), x, r) : void 0 : void 0
        }

        function E(e, t) {
          return "quasi" != e ? m() : "${" != t.slice(t.length - 2) ? g(E) : g(S, N)
        }

        function N(e) {
          if ("}" == e) {
            return He.marked = "string-2", He.state.tokenize = c, g(E)
          }
        }

        function D(e) {
          return d(He.stream, He.state), m("{" == e ? C : S)
        }

        function z(e) {
          return d(He.stream, He.state), m("{" == e ? C : _)
        }

        function P(e) {
          return function(t) {
            return "." == t ? g(e ? F : W) : m(e ? _ : S)
          }
        }

        function W(e, t) {
          if ("target" == t) {
            return He.marked = "keyword", g(A)
          }
        }

        function F(e, t) {
          if ("target" == t) {
            return He.marked = "keyword", g(I)
          }
        }

        function H(e) {
          return ":" == e ? g(x, C) : m(A, k(";"), x)
        }

        function R(e) {
          if ("variable" == e) {
            return He.marked = "property", g()
          }
        }

        function B(e, t) {
          return "async" == e ? (He.marked = "property", g(B)) : "variable" == e || "keyword" == He.style ? (He.marked = "property", g("get" == t || "set" == t ? j : U)) : "number" == e || "string" == e ? (He.marked = Ae ? "property" : He.style + " property", g(U)) : "jsonld-keyword" == e ? g(U) : "modifier" == e ? g(B) : "[" == e ? g(S, k("]"), U) : "spread" == e ? g(S) : ":" == e ? m(U) : void 0
        }

        function j(e) {
          return "variable" != e ? m(U) : (He.marked = "property", g(ce))
        }

        function U(e) {
          return ":" == e ? g(_) : "(" == e ? m(ce) : void 0
        }

        function V(e, t, n) {
          function r(i, o) {
            if (n ? n.indexOf(i) > -1 : "," == i) {
              var a = He.state.lexical;
              return "call" == a.info && (a.pos = (a.pos || 0) + 1), g(function(n, r) {
                return n == t || r == t ? m() : m(e)
              }, r)
            }
            return i == t || o == t ? g() : g(k(t))
          }

          return function(n, i) {
            return n == t || i == t ? g() : m(e, r)
          }
        }

        function q(e, t, n) {
          for (var r = 3; r < arguments.length; r++) {
            He.cc.push(arguments[r]);
          }
          return g(w(t, n), V(e, t), x)
        }

        function G(e) {
          return "}" == e ? g() : m(C, G)
        }

        function K(e, t) {
          if (Ee) {
            if (":" == e) {
              return g($);
            }
            if ("?" == t) {
              return g(K)
            }
          }
        }

        function $(e) {
          return "variable" == e ? (He.marked = "variable-3", g(J)) : "string" == e || "number" == e || "atom" == e ? g(J) : "{" == e ? g(w("}"), V(Y, "}", ",;"), x) : "(" == e ? g(V(Z, ")"), X) : void 0
        }

        function X(e) {
          if ("=>" == e) {
            return g($)
          }
        }

        function Y(e, t) {
          return "variable" == e || "keyword" == He.style ? (He.marked = "property", g(Y)) : "?" == t ? g(Y) : ":" == e ? g($) : void 0
        }

        function Z(e) {
          return "variable" == e ? g(Z) : ":" == e ? g($) : void 0
        }

        function J(e, t) {
          return "<" == t ? g(w(">"), V($, ">"), x, J) : "|" == t || "." == e ? g($) : "[" == e ? g(k("]"), J) : void 0
        }

        function Q() {
          return m(ee, K, ne, re)
        }

        function ee(e, t) {
          return "modifier" == e ? g(ee) : "variable" == e ? (v(t), g()) : "spread" == e ? g(ee) : "[" == e ? q(ee, "]") : "{" == e ? q(te, "}") : void 0
        }

        function te(e, t) {
          return "variable" != e || He.stream.match(/^\s*:/, !1) ? ("variable" == e && (He.marked = "property"), "spread" == e ? g(ee) : "}" == e ? m() : g(k(":"), ee, ne)) : (v(t), g(ne))
        }

        function ne(e, t) {
          if ("=" == t) {
            return g(_)
          }
        }

        function re(e) {
          if ("," == e) {
            return g(Q)
          }
        }

        function ie(e, t) {
          if ("keyword b" == e && "else" == t) {
            return g(w("form", "else"), C, x)
          }
        }

        function oe(e) {
          if ("(" == e) {
            return g(w(")"), ae, k(")"), x)
          }
        }

        function ae(e) {
          return "var" == e ? g(Q, k(";"), le) : ";" == e ? g(le) : "variable" == e ? g(se) : m(S, k(";"), le)
        }

        function se(e, t) {
          return "in" == t || "of" == t ? (He.marked = "keyword", g(S)) : g(A, le)
        }

        function le(e, t) {
          return ";" == e ? g(ue) : "in" == t || "of" == t ? (He.marked = "keyword", g(S)) : m(S, k(";"), ue)
        }

        function ue(e) {
          ")" != e && g(S)
        }

        function ce(e, t) {
          return "*" == t ? (He.marked = "keyword", g(ce)) : "variable" == e ? (v(t), g(ce)) : "(" == e ? g(y, w(")"), V(de, ")"), x, K, C, b) : void 0
        }

        function de(e) {
          return "spread" == e ? g(de) : m(ee, K, ne)
        }

        function fe(e, t) {
          return "variable" == e ? pe(e, t) : he(e, t)
        }

        function pe(e, t) {
          if ("variable" == e) {
            return v(t), g(he)
          }
        }

        function he(e, t) {
          return "<" == t ? g(w(">"), V($, ">"), x, he) : "extends" == t || "implements" == t || Ee && "," == e ? g(Ee ? $ : S, he) : "{" == e ? g(w("}"), me, x) : void 0
        }

        function me(e, t) {
          return "variable" == e || "keyword" == He.style ? ("async" == t || "static" == t || "get" == t || "set" == t || Ee && ("public" == t || "private" == t || "protected" == t || "readonly" == t || "abstract" == t)) && He.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (He.marked = "keyword", g(me)) : (He.marked = "property", g(Ee ? ge : ce, me)) : "[" == e ? g(S, k("]"), Ee ? ge : ce, me) : "*" == t ? (He.marked = "keyword", g(me)) : ";" == e ? g(me) : "}" == e ? g() : void 0
        }

        function ge(e, t) {
          return "?" == t ? g(ge) : ":" == e ? g($, ne) : "=" == t ? g(_) : m(ce)
        }

        function ve(e, t) {
          return "*" == t ? (He.marked = "keyword", g(Ce, k(";"))) : "default" == t ? (He.marked = "keyword", g(S, k(";"))) : "{" == e ? g(V(ye, "}"), Ce, k(";")) : m(C)
        }

        function ye(e, t) {
          return "as" == t ? (He.marked = "keyword", g(k("variable"))) : "variable" == e ? m(_, ye) : void 0
        }

        function be(e) {
          return "string" == e ? g() : m(we, xe, Ce)
        }

        function we(e, t) {
          return "{" == e ? q(we, "}") : ("variable" == e && v(t), "*" == t && (He.marked = "keyword"), g(ke))
        }

        function xe(e) {
          if ("," == e) {
            return g(we, xe)
          }
        }

        function ke(e, t) {
          if ("as" == t) {
            return He.marked = "keyword", g(we)
          }
        }

        function Ce(e, t) {
          if ("from" == t) {
            return He.marked = "keyword", g(S)
          }
        }

        function Se(e) {
          return "]" == e ? g() : m(V(_, "]"))
        }

        function _e(e, t) {
          return "operator" == e.lastType || "," == e.lastType || ze.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
        }

        var Te, Le, Me = n.indentUnit, Oe = r.statementIndent, Ae = r.jsonld,
            Ie = r.json || Ae, Ee = r.typescript,
            Ne = r.wordCharacters || /[\w$\xa1-\uffff]/, De = function() {
              function e(e) {
                return {type: e, style: "keyword"}
              }

              var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"),
                  i = e("operator"), o = {type: "atom", style: "atom"}, a = {
                    if: e("if"),
                    while: t,
                    with: t,
                    else: n,
                    do: n,
                    try: n,
                    finally: n,
                    return: r,
                    break: r,
                    continue: r,
                    new: e("new"),
                    delete: r,
                    throw: r,
                    debugger: r,
                    var: e("var"),
                    const: e("var"),
                    let: e("var"),
                    function: e("function"),
                    catch: e("catch"),
                    for: e("for"),
                    switch: e("switch"),
                    case: e("case"),
                    default: e("default"),
                    in: i,
                    typeof: i,
                    instanceof: i,
                    true: o,
                    false: o,
                    null: o,
                    undefined: o,
                    NaN: o,
                    Infinity: o,
                    this: e("this"),
                    class: e("class"),
                    super: e("atom"),
                    yield: r,
                    export: e("export"),
                    import: e("import"),
                    extends: r,
                    await: r,
                    async: e("async")
                  };
              if (Ee) {
                var s = {type: "variable", style: "variable-3"}, l = {
                  interface: e("class"),
                  implements: r,
                  namespace: r,
                  module: e("module"),
                  enum: e("module"),
                  type: e("type"),
                  public: e("modifier"),
                  private: e("modifier"),
                  protected: e("modifier"),
                  abstract: e("modifier"),
                  as: i,
                  string: s,
                  number: s,
                  boolean: s,
                  any: s
                };
                for (var u in l) {
                  a[u] = l[u]
                }
              }
              return a
            }(), ze = /[+\-*&%=<>!?|~^]/,
            Pe = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
            We = "([{}])", Fe = {
              atom: !0,
              number: !0,
              variable: !0,
              string: !0,
              regexp: !0,
              this: !0,
              "jsonld-keyword": !0
            }, He = {state: null, column: null, marked: null, cc: null},
            Re = {name: "this", next: {name: "arguments"}};
        return x.lex = !0, {
          startState: function(e) {
            var t = {
              tokenize: s,
              lastType: "sof",
              cc: [],
              lexical: new f((e || 0) - Me, 0, "block", !1),
              localVars: r.localVars,
              context: r.localVars && {vars: r.localVars},
              indented: e || 0
            };
            return r.globalVars && "object" == a(r.globalVars) && (t.globalVars = r.globalVars), t
          },
          token: function(e, t) {
            if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), d(e, t)), t.tokenize != u && e.eatSpace()) {
              return null;
            }
            var n = t.tokenize(e, t);
            return "comment" == Te ? n : (t.lastType = "operator" != Te || "++" != Le && "--" != Le ? Te : "incdec", h(t, n, Te, Le, e))
          },
          indent: function(t, n) {
            if (t.tokenize == u) {
              return e.Pass;
            }
            if (t.tokenize != s) {
              return 0;
            }
            var i, o = n && n.charAt(0), a = t.lexical;
            if (!/^\s*else\b/.test(n)) {
              for (var l = t.cc.length - 1; l >= 0; --l) {
                var c = t.cc[l];
                if (c == x) {
                  a = a.prev;
                } else if (c != ie) {
                  break
                }
              }
            }
            for (; ("stat" == a.type || "form" == a.type) && ("}" == o || (i = t.cc[t.cc.length - 1]) && (i == A || i == I) && !/^[,\.=+\-*:?[\(]/.test(n));) {
              a = a.prev;
            }
            Oe && ")" == a.type && "stat" == a.prev.type && (a = a.prev);
            var d = a.type, f = o == d;
            return "vardef" == d ? a.indented + ("operator" == t.lastType || "," == t.lastType ? a.info + 1 : 0) : "form" == d && "{" == o ? a.indented : "form" == d ? a.indented + Me : "stat" == d ? a.indented + (_e(t, n) ? Oe || Me : 0) : "switch" != a.info || f || 0 == r.doubleIndentSwitch ? a.align ? a.column + (f ? 0 : 1) : a.indented + (f ? 0 : Me) : a.indented + (/^(?:case|default)\b/.test(n) ? Me : 2 * Me)
          },
          electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
          blockCommentStart: Ie ? null : "/*",
          blockCommentEnd: Ie ? null : "*/",
          lineComment: Ie ? null : "//",
          fold: "brace",
          closeBrackets: "()[]{}''\"\"``",
          helperType: Ie ? "json" : "javascript",
          jsonldMode: Ae,
          jsonMode: Ie,
          expressionAllowed: t,
          skipExpression: function(e) {
            var t = e.cc[e.cc.length - 1];
            t != S && t != _ || e.cc.pop()
          }
        }
      }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
        name: "javascript",
        json: !0
      }), e.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
      }), e.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
      }), e.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
      }), e.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
      })
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";
      var t = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
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
          menuitem: !0
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0
        },
        contextGrabbers: {
          dd: {dd: !0, dt: !0},
          dt: {dd: !0, dt: !0},
          li: {li: !0},
          option: {option: !0, optgroup: !0},
          optgroup: {optgroup: !0},
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
          },
          rp: {rp: !0, rt: !0},
          rt: {rp: !0, rt: !0},
          tbody: {tbody: !0, tfoot: !0},
          td: {td: !0, th: !0},
          tfoot: {tbody: !0},
          th: {td: !0, th: !0},
          thead: {tbody: !0, tfoot: !0},
          tr: {tr: !0}
        },
        doNotIndent: {pre: !0},
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
      }, n = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        caseFold: !1
      };
      e.defineMode("xml", function(r, i) {
        function o(e, t) {
          function n(n) {
            return t.tokenize = n, n(e, t)
          }

          var r = e.next();
          if ("<" == r) {
            return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(l("atom", "]]>")) : null : e.match("--") ? n(l("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(u(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = l("meta", "?>"), "meta") : (T = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket");
          }
          if ("&" == r) {
            var i;
            return i = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), i ? "atom" : "error"
          }
          return e.eatWhile(/[^&<]/), null
        }

        function a(e, t) {
          var n = e.next();
          if (">" == n || "/" == n && e.eat(">")) {
            return t.tokenize = o, T = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
          }
          if ("=" == n) {
            return T = "equals", null;
          }
          if ("<" == n) {
            t.tokenize = o, t.state = p, t.tagName = t.tagStart = null;
            var r = t.tokenize(e, t);
            return r ? r + " tag error" : "tag error"
          }
          return /[\'\"]/.test(n) ? (t.tokenize = s(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
        }

        function s(e) {
          var t = function(t, n) {
            for (; !t.eol();) {
              if (t.next() == e) {
                n.tokenize = a;
                break
              }
            }
            return "string"
          };
          return t.isInAttribute = !0, t
        }

        function l(e, t) {
          return function(n, r) {
            for (; !n.eol();) {
              if (n.match(t)) {
                r.tokenize = o;
                break
              }
              n.next()
            }
            return e
          }
        }

        function u(e) {
          return function(t, n) {
            for (var r; null != (r = t.next());) {
              if ("<" == r) {
                return n.tokenize = u(e + 1), n.tokenize(t, n);
              }
              if (">" == r) {
                if (1 == e) {
                  n.tokenize = o;
                  break
                }
                return n.tokenize = u(e - 1), n.tokenize(t, n)
              }
            }
            return "meta"
          }
        }

        function c(e, t, n) {
          this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (C.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
        }

        function d(e) {
          e.context && (e.context = e.context.prev)
        }

        function f(e, t) {
          for (var n; ;) {
            if (!e.context) {
              return;
            }
            if (n = e.context.tagName, !C.contextGrabbers.hasOwnProperty(n) || !C.contextGrabbers[n].hasOwnProperty(t)) {
              return;
            }
            d(e)
          }
        }

        function p(e, t, n) {
          return "openTag" == e ? (n.tagStart = t.column(), h) : "closeTag" == e ? m : p
        }

        function h(e, t, n) {
          return "word" == e ? (n.tagName = t.current(), L = "tag", y) : (L = "error", h)
        }

        function m(e, t, n) {
          if ("word" == e) {
            var r = t.current();
            return n.context && n.context.tagName != r && C.implicitlyClosed.hasOwnProperty(n.context.tagName) && d(n), n.context && n.context.tagName == r || !1 === C.matchClosing ? (L = "tag", g) : (L = "tag error", v)
          }
          return L = "error", v
        }

        function g(e, t, n) {
          return "endTag" != e ? (L = "error", g) : (d(n), p)
        }

        function v(e, t, n) {
          return L = "error", g(e, t, n)
        }

        function y(e, t, n) {
          if ("word" == e) {
            return L = "attribute", b;
          }
          if ("endTag" == e || "selfcloseTag" == e) {
            var r = n.tagName, i = n.tagStart;
            return n.tagName = n.tagStart = null, "selfcloseTag" == e || C.autoSelfClosers.hasOwnProperty(r) ? f(n, r) : (f(n, r), n.context = new c(n, r, i == n.indented)), p
          }
          return L = "error", y
        }

        function b(e, t, n) {
          return "equals" == e ? w : (C.allowMissing || (L = "error"), y(e, t, n))
        }

        function w(e, t, n) {
          return "string" == e ? x : "word" == e && C.allowUnquoted ? (L = "string", y) : (L = "error", y(e, t, n))
        }

        function x(e, t, n) {
          return "string" == e ? x : y(e, t, n)
        }

        var k = r.indentUnit, C = {}, S = i.htmlMode ? t : n;
        for (var _ in S) {
          C[_] = S[_];
        }
        for (var _ in i) {
          C[_] = i[_];
        }
        var T, L;
        return o.isInText = !0, {
          startState: function(e) {
            var t = {
              tokenize: o,
              state: p,
              indented: e || 0,
              tagName: null,
              tagStart: null,
              context: null
            };
            return null != e && (t.baseIndent = e), t
          },
          token: function(e, t) {
            if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) {
              return null;
            }
            T = null;
            var n = t.tokenize(e, t);
            return (n || T) && "comment" != n && (L = null, t.state = t.state(T || n, e, t), L && (n = "error" == L ? n + " error" : L)), n
          },
          indent: function(t, n, r) {
            var i = t.context;
            if (t.tokenize.isInAttribute) {
              return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + k;
            }
            if (i && i.noIndent) {
              return e.Pass;
            }
            if (t.tokenize != a && t.tokenize != o) {
              return r ? r.match(/^(\s*)/)[0].length : 0;
            }
            if (t.tagName) {
              return !1 !== C.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + k * (C.multilineTagIndentFactor || 1);
            }
            if (C.alignCDATA && /<!\[CDATA\[/.test(n)) {
              return 0;
            }
            var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
            if (s && s[1]) {
              for (; i;) {
                if (i.tagName == s[2]) {
                  i = i.prev;
                  break
                }
                if (!C.implicitlyClosed.hasOwnProperty(i.tagName)) {
                  break;
                }
                i = i.prev
              }
            } else if (s) {
              for (; i;) {
                var l = C.contextGrabbers[i.tagName];
                if (!l || !l.hasOwnProperty(s[2])) {
                  break;
                }
                i = i.prev
              }
            }
            for (; i && i.prev && !i.startOfLine;) {
              i = i.prev;
            }
            return i ? i.indent + k : t.baseIndent || 0
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: "\x3c!--",
          blockCommentEnd: "--\x3e",
          configuration: C.htmlMode ? "html" : "xml",
          helperType: C.htmlMode ? "html" : "xml",
          skipAttribute: function(e) {
            e.state == w && (e.state = y)
          }
        }
      }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
      })
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  var i = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), o = function() {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      r(this, e), this.adapter_ = t
    }

    return i(e, null, [{
      key: "cssClasses", get: function() {
        return {}
      }
    }, {
      key: "strings", get: function() {
        return {}
      }
    }, {
      key: "numbers", get: function() {
        return {}
      }
    }, {
      key: "defaultAdapter", get: function() {
        return {}
      }
    }]), i(e, [{
      key: "init", value: function() {
      }
    }, {
      key: "destroy", value: function() {
      }
    }]), e
  }();
  t.a = o
}, function(e, t, n) {
  "use strict";

  function r(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (void 0 === l || t) {
      var n = e.document.createElement("div"),
          r = "transform" in n.style ? "transform" : "webkitTransform";
      l = r
    }
    return l
  }

  function i(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return Math.min(n, Math.max(t, e))
  }

  function o(e, t, n, r, i) {
    return a(s(e, t, r), n, i)
  }

  function a(e, t, n) {
    if (0 === e || 1 === e) {
      return e;
    }
    var r = e * t, i = t + e * (n - t), o = n + e * (1 - n);
    return r += e * (i - r), i += e * (o - i), r + e * (i - r)
  }

  function s(e, t, n) {
    if (e <= 0) {
      return 0;
    }
    if (e >= 1) {
      return 1;
    }
    for (var r = e, i = 0, o = 1, s = 0, l = 0; l < 8; l++) {
      s = a(r, t, n);
      var u = (a(r + 1e-6, t, n) - s) / 1e-6;
      if (Math.abs(s - e) < 1e-6) {
        return r;
      }
      if (Math.abs(u) < 1e-6) {
        break;
      }
      s < e ? i = r : o = r, r -= (s - e) / u
    }
    for (var c = 0; Math.abs(s - e) > 1e-6 && c < 8; c++) {
      s < e ? (i = r, r = (r + o) / 2) : (o = r, r = (r + i) / 2), s = a(r, t, n);
    }
    return r
  }

  t.a = r, t.b = i, t.c = o;
  var l = void 0
}, function(e, t, n) {
  "use strict";

  function r(e) {
    if (e.CSS && "function" == typeof e.CSS.supports) {
      var t = e.CSS.supports("--css-vars", "yes"),
          n = e.CSS.supports("(--css-vars: yes)") && e.CSS.supports("color", "#00000000");
      return t || n
    }
  }

  function i(e) {
    return ["webkitMatchesSelector", "msMatchesSelector", "matches"].filter(function(t) {
      return t in e
    }).pop()
  }

  function o(e, t, n) {
    var r = t.x, i = t.y, o = r + n.left, a = i + n.top, s = void 0, l = void 0;
    return "touchstart" === e.type ? (s = e.changedTouches[0].pageX - o, l = e.changedTouches[0].pageY - a) : (s = e.pageX - o, l = e.pageY - a), {
      x: s,
      y: l
    }
  }

  t.b = r, t.a = i, t.c = o
}, function(e, t, n) {
  "use strict";

  function r() {
    window.addEventListener("DOMContentLoaded", function() {
      i(window.location.hash)
    }), window.addEventListener("hashchange", function(e) {
      i(window.location.hash) && e.preventDefault()
    })
  }

  function i(e) {
    if ("#" != e[0]) {
      return !1;
    }
    var t = document.querySelector(e);
    if (!t) {
      return !1;
    }
    var n = document.querySelector(o);
    if (!n) {
      return !1;
    }
    var r = t.getBoundingClientRect().top, i = n.offsetHeight;
    return window.scroll(window.pageXOffset, window.pageYOffset + r - i), !0
  }

  t.a = r;
  var o = ".mdc-toolbar"
}, function(e, t, n) {
  "use strict";

  function r() {
    var e = document.querySelector(".feedback-button");
    e && e.addEventListener("click", i)
  }

  function i() {
    window.userfeedback && window.userfeedback.api.startFeedback({
      productId: o,
      bucket: a,
      enableAnonymousFeedback: !0,
      allowNonLoggedInFeedback: !0
    })
  }

  t.a = r;
  var o = "5017785", a = "article"
}, function(e, t, n) {
  "use strict";

  function r() {
    i(l.ARTICLE_HEADLINE), i(l.WELCOME_TITLE)
  }

  function i(e) {
    Array.from(document.querySelectorAll(e)).forEach(function(e) {
      return o(e)
    })
  }

  function o(e) {
    var t = e.textContent.trim();
    e.innerHTML = a(t)
  }

  function a(e) {
    return e.replace(/(\w+)\s/g, function(e, t) {
      return s("dot", t)
    }).replace(/(\w+)$/, function(e, t) {
      return s("return", t)
    })
  }

  function s(e) {
    return '<span class="hidden-mark hidden-mark--' + e + '">' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ") + "&nbsp;</span>"
  }

  t.a = r;
  var l = {
    WELCOME_TITLE: ".welcome__title",
    ARTICLE_HEADLINE: ".article h1:first-of-type"
  }
}, function(e, t, n) {
  "use strict";

  function r() {
    document.addEventListener("click", i)
  }

  function i(e) {
    var t = e.target, r = n.i(u.a)(t);
    r && (r.hostname == window.location.hostname ? o(r) : a(r, e))
  }

  function o(e) {
    d && d.contains(e) ? s.a(e.href) : c && c.contains(e) && s.b(e.href)
  }

  function a(e, t) {
    window.open(e.href), t.preventDefault(), s.c(e.href)
  }

  var s = n(3), l = n(4), u = n(19);
  t.a = r;
  var c = document.querySelector(l.a.WELCOME),
      d = document.querySelector(l.a.TOOLBAR)
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    var r = 0 == e.classList.length ? y : e.classList[0].replace("language-", "");
    r in x || (console.warn(r + " not supported."), r = "text");
    var i = x[r], o = i.mode, s = i.language,
        l = e.parentElement.classList.contains("code-renderer--install"),
        u = a(function(t) {
          e.parentNode.parentNode.replaceChild(t, e.parentNode)
        }, {
          value: e.innerText.trim(),
          mode: o,
          lineNumbers: t || !1,
          readOnly: !0
        });
    return u.on("copy", function(e) {
      n.i(v.d)(l ? "install" : "")
    }), "Shell" === s && function() {
      for (var e = u.display.wrapper.querySelectorAll(".CodeMirror-line > span"), t = 0; t < e.length; t++) {
        var n = e[t];
        if (n.querySelector(".cm-def") && -1 !== n.innerText.indexOf("$")) {
          for (var r = n.childNodes, i = 0; i < r.length && (!r[i].classList || -1 === r[i].classList.contains("cm-def")); i++) {
            var o = document.createElement("span");
            o.classList.add("cm-userpath"), o.innerHTML = r[i].nodeValue, n.replaceChild(o, n.childNodes[i])
          }
        }
      }
    }(), e.parentNode.dataset.highlight && function() {
      for (var t = e.parentNode.dataset.highlight.split(","), n = 0; n < t.length; n++) {
        t[n] = t[n].trim();
        var r = t[n].match(/(\d)-(\d)/);
        if (null !== r) {
          for (var i = parseInt(r[1]) - 1, o = parseInt(r[2]), a = i; a < o; a++) {
            u.getDoc().addLineClass(a, "wrap", "hll");
          }
        } else {
          var s = parseInt(t[n]) - 1;
          u.getDoc().addLineClass(s, "wrap", "hll")
        }
      }
    }(), {language: s, cm: u}
  }

  function i(e, t) {
    function n(e, t) {
      var n = document.getElementById(b), r = "language-radio-" + k++,
          i = n.content.querySelector(".mdc-radio__native-control");
      i.setAttribute("id", r), i.setAttribute("name", e), i.setAttribute("value", t);
      var a = n.content.querySelector(".language-name");
      a.setAttribute("for", r), a.textContent = t;
      var s = document.importNode(n.content, !0),
          l = new g.a(s.querySelector(".mdc-radio"));
      return l.listen("change", function() {
        var e = l.nativeControl_.value;
        if (o.get() == e) {
          return !1;
        }
        o.set(e);
        var t = document.createEvent("HTMLEvents");
        t.initEvent("selectLangChange", !1, !0), document.dispatchEvent(t)
      }), {component: l, element: s}
    }

    var i = ["Swift", "Objective-C"], o = {
      set: function(e) {
        e = -1 !== i.indexOf(e) ? e : i[0], void 0 !== window.sessionStorage ? window.sessionStorage.setItem("selectedLanguage", e) : o._value = e
      }, get: function() {
        return (void 0 !== window.sessionStorage ? window.sessionStorage.getItem("selectedLanguage") : o._value) || i[0]
      }
    }, a = e.querySelectorAll("pre code"), s = [];
    if (Array.from(a).forEach(function(e) {
          var t = 0 == e.classList.length ? "" : e.classList[0].replace("language-", ""),
              n = x[t].language;
          -1 === i.indexOf[n] ? e.parentNode.removeChild(e) : s.push(n)
        }), !a || 0 === a.length) {
      return void e.parentNode.removeChild(e);
    }
    var l = 0, u = document.createElement("form");
    u.classList.add("language");
    var c = {}, d = "MaterialCodeRenderer" + t;
    Array.from(a).forEach(function(e) {
      var t = r(e, !1), i = n(d, t.language), o = i.component, a = i.element;
      u.appendChild(a);
      var s = t.cm.getScrollInfo().clientHeight;
      l = Math.max(l, s), c[t.language] = {codemirror: t.cm, radio: o}
    }), e.insertBefore(u, e.firstChild), u.addEventListener("selectLangChange", function() {
      var t = o.get();
      t = -1 == s.indexOf(t) ? s[0] : t;
      var n = c[t];
      n.radio.checked = !0, e.querySelector(".CodeMirror.active").classList.remove("active"), n.codemirror.getWrapperElement().classList.add("active")
    }), e.style.height = l + u.offsetHeight + "px";
    var f = o.get();
    f = -1 == s.indexOf(f) ? s[0] : f;
    var p = c[f];
    p.radio.checked = !0, p.codemirror.getWrapperElement().classList.add("active")
  }

  function o() {
    for (var e = document.querySelectorAll(".material-code-render"), t = 0; t < e.length; t++) {
      i(e[t], t);
    }
    for (var n = document.querySelectorAll("pre code"), o = 0; o < n.length; o++) {
      r(n[o]);
    }
    document.addEventListener("selectLangChange", function(t) {
      for (var n = 0; n < e.length; n++) {
        var r = new t.constructor(t.type, t);
        e[n].querySelector(".language").dispatchEvent(r)
      }
    }), window.location.hash && (window.location.href = window.location.hash)
  }

  var a = n(0), s = (n.n(a), n(32)), l = (n.n(s), n(5)), u = (n.n(l), n(34)),
      c = (n.n(u), n(33)), d = (n.n(c), n(6)), f = (n.n(d), n(35)),
      p = (n.n(f), n(36)), h = (n.n(p), n(37)), m = (n.n(h), n(7)),
      g = (n.n(m), n(27)), v = n(3);
  t.a = o;
  var y = "swift", b = "language-radio-template",
      w = {language: "JavaScript", mode: "text/javascript"}, x = {
        bash: {language: "Shell", mode: "text/x-sh"},
        css: {language: "CSS", mode: "text/css"},
        html: {language: "HTML", mode: "text/html"},
        groovy: {language: "Groovy", mode: "text/x-groovy"},
        java: {language: "Java", mode: "text/x-java"},
        javascript: w,
        js: w,
        objc: {language: "Objective-C", mode: "text/x-objectivec"},
        ruby: {language: "Ruby", mode: "text/x-ruby"},
        scss: {language: "SCSS", mode: "text/x-less"},
        shell: {language: "Shell", mode: "text/x-sh"},
        swift: {language: "Swift", mode: "text/x-swift"},
        text: {language: "Text", mode: "text/plain"},
        xml: {language: "XML", mode: "text/x-xml"}
      }, k = 0
}, function(e, t, n) {
  "use strict";

  function r() {
    var e = Array.from(document.querySelectorAll(a.a.MENU));
    e.length && e.forEach(function(e) {
      var t = new o.a(e);
      t.listen("MDCSimpleMenu:selected", i), e.parentElement.querySelector("button").addEventListener("click", function() {
        t.show()
      })
    })
  }

  function i(e) {
    var t = e.detail.item.dataset.href;
    l && l.contains(e.detail.item) && n.i(s.a)(t), window.location = t
  }

  var o = n(22), a = n(4), s = n(3);
  t.a = r;
  var l = document.querySelector(a.a.TOOLBAR)
}, function(e, t, n) {
  "use strict";

  function r() {
    document.body.className = "", document.body.classList.add("page"), document.body.classList.add("page--unsupported-browser"), document.body.innerHTML = '\n    <h1>Material Components</h1>\n    <p>\n      Oops! Your browser is not yet supported. Visit\n      <a href="https://github.com/material-components/">GitHub</a> for more information,\n      or upgrade your browser.\n    </p>\n  '
  }

  function i() {
    return !o.msie
  }

  var o = n(31);
  n.n(o);
  t.b = r, t.a = i
}, function(e, t, n) {
  "use strict";

  function r() {
    c && (i(), window.addEventListener("scroll", i), window.addEventListener("resize", i))
  }

  function i() {
    u || (u = !0, window.requestAnimationFrame(function() {
      o(), u = !1
    }))
  }

  function o() {
    a() ? d.classList.add(l.NO_SHADOW) : d.classList.remove(l.NO_SHADOW)
  }

  function a() {
    return c.getBoundingClientRect().bottom > d.getBoundingClientRect().bottom
  }

  var s = n(4);
  t.a = r;
  var l = {NO_SHADOW: "mdc-toolbar--no-shadow"}, u = !1,
      c = document.querySelector(s.a.WELCOME),
      d = document.querySelector(s.a.TOOLBAR)
}, function(e, t, n) {
  "use strict";

  function r(e) {
    do {
      if ("A" == e.tagName) {
        return e
      }
    } while (e = e.parentElement);
    return null
  }

  t.a = r
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0});
  var r = n(13), i = n(17), o = n(11), a = n(15), s = n(12), l = n(16),
      u = n(18), c = n(14);
  n.i(i.a)() ? (n.i(r.a)(), n.i(o.a)(), n.i(a.a)(), n.i(s.a)(), n.i(l.a)(), n.i(u.a)(), n.i(c.a)()) : n.i(i.b)()
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  var i = n(8), o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), a = function() {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      r(this, e), this.root_ = t;
      for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) {
        o[a - 2] = arguments[a];
      }
      this.initialize.apply(this, o), this.foundation_ = void 0 === n ? this.getDefaultFoundation() : n, this.foundation_.init(), this.initialSyncWithDOM()
    }

    return o(e, null, [{
      key: "attachTo", value: function(t) {
        return new e(t, new i.a)
      }
    }]), o(e, [{
      key: "initialize", value: function() {
      }
    }, {
      key: "getDefaultFoundation", value: function() {
        throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
      }
    }, {
      key: "initialSyncWithDOM", value: function() {
      }
    }, {
      key: "destroy", value: function() {
        this.foundation_.destroy()
      }
    }, {
      key: "listen", value: function(e, t) {
        this.root_.addEventListener(e, t)
      }
    }, {
      key: "unlisten", value: function(e, t) {
        this.root_.removeEventListener(e, t)
      }
    }, {
      key: "emit", value: function(e, t) {
        var n = void 0;
        "function" == typeof CustomEvent ? n = new CustomEvent(e, {detail: t}) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(e, !1, !1, t)), this.root_.dispatchEvent(n)
      }
    }]), e
  }();
  t.a = a
}, function(e, t, n) {
  "use strict";
  var r = n(25);
  n.d(t, "a", function() {
    return r.a
  })
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", function() {
    return i
  }), n.d(t, "b", function() {
    return o
  }), n.d(t, "c", function() {
    return a
  });
  var r = "mdc-simple-menu", i = {
    ROOT: r,
    OPEN: r + "--open",
    ANIMATING: r + "--animating",
    TOP_RIGHT: r + "--open-from-top-right",
    BOTTOM_LEFT: r + "--open-from-bottom-left",
    BOTTOM_RIGHT: r + "--open-from-bottom-right"
  }, o = {ITEMS_SELECTOR: "." + r + "__items"}, a = {
    SELECTED_TRIGGER_DELAY: 50,
    TRANSITION_DURATION_MS: 300,
    TRANSITION_SCALE_ADJUSTMENT_X: .5,
    TRANSITION_SCALE_ADJUSTMENT_Y: .2,
    TRANSITION_X1: 0,
    TRANSITION_Y1: 0,
    TRANSITION_X2: .2,
    TRANSITION_Y2: 1
  }
}, function(e, t, n) {
  "use strict";

  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function i(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function o(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function a(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = n(2), l = n(23), u = n(9), c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
    }
    return e
  }, d = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), f = function(e) {
    function t(e) {
      i(this, t);
      var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c(t.defaultAdapter, e)));
      return n.clickHandler_ = function(e) {
        return n.handlePossibleSelected_(e)
      }, n.keydownHandler_ = function(e) {
        return n.handleKeyboardDown_(e)
      }, n.keyupHandler_ = function(e) {
        return n.handleKeyboardUp_(e)
      }, n.documentClickHandler_ = function(e) {
        n.adapter_.notifyCancel(), n.close()
      }, n.isOpen_ = !1, n.startScaleX_ = 0, n.startScaleY_ = 0, n.targetScale_ = 1, n.scaleX_ = 0, n.scaleY_ = 0, n.running_ = !1, n.selectedTriggerTimerId_ = 0, n.animationRequestId_ = 0, n
    }

    return a(t, e), d(t, null, [{
      key: "cssClasses", get: function() {
        return l.a
      }
    }, {
      key: "strings", get: function() {
        return l.b
      }
    }, {
      key: "numbers", get: function() {
        return l.c
      }
    }, {
      key: "defaultAdapter", get: function() {
        return {
          addClass: function() {
          }, removeClass: function() {
          }, hasClass: function() {
          }, hasNecessaryDom: function() {
            return !1
          }, getInnerDimensions: function() {
            return {}
          }, hasAnchor: function() {
            return !1
          }, getAnchorDimensions: function() {
            return {}
          }, getWindowDimensions: function() {
            return {}
          }, setScale: function() {
          }, setInnerScale: function() {
          }, getNumberOfItems: function() {
            return 0
          }, registerInteractionHandler: function() {
          }, deregisterInteractionHandler: function() {
          }, registerDocumentClickHandler: function() {
          }, deregisterDocumentClickHandler: function() {
          }, getYParamsForItemAtIndex: function() {
            return {}
          }, setTransitionDelayForItemAtIndex: function() {
          }, getIndexForEventTarget: function() {
            return 0
          }, notifySelected: function() {
          }, notifyCancel: function() {
          }, saveFocus: function() {
          }, restoreFocus: function() {
          }, isFocused: function() {
            return !1
          }, focus: function() {
          }, getFocusedItemIndex: function() {
            return -1
          }, focusItemAtIndex: function() {
          }, isRtl: function() {
            return !1
          }, setTransformOrigin: function() {
          }, setPosition: function() {
          }, getAccurateTime: function() {
            return 0
          }
        }
      }
    }]), d(t, [{
      key: "init", value: function() {
        var e = t.cssClasses, n = e.ROOT, r = e.OPEN;
        if (!this.adapter_.hasClass(n)) {
          throw new Error(n + " class required in root element.");
        }
        if (!this.adapter_.hasNecessaryDom()) {
          throw new Error("Required DOM nodes missing in " + n + " component.");
        }
        this.adapter_.hasClass(r) && (this.isOpen_ = !0), this.adapter_.registerInteractionHandler("click", this.clickHandler_), this.adapter_.registerInteractionHandler("keyup", this.keyupHandler_), this.adapter_.registerInteractionHandler("keydown", this.keydownHandler_)
      }
    }, {
      key: "destroy", value: function() {
        clearTimeout(this.selectedTriggerTimerId_), cancelAnimationFrame(this.animationRequestId_), this.adapter_.deregisterInteractionHandler("click", this.clickHandler_), this.adapter_.deregisterInteractionHandler("keyup", this.keyupHandler_), this.adapter_.deregisterInteractionHandler("keydown", this.keydownHandler_), this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_)
      }
    }, {
      key: "applyTransitionDelays_", value: function() {
        for (var e = t.cssClasses, n = e.BOTTOM_LEFT, r = e.BOTTOM_RIGHT, i = this.adapter_.getNumberOfItems(), o = this.dimensions_.height, a = t.numbers.TRANSITION_DURATION_MS / 1e3, s = t.numbers.TRANSITION_SCALE_ADJUSTMENT_Y, l = 0; l < i; l++) {
          var u = this.adapter_.getYParamsForItemAtIndex(l), c = u.top,
              d = u.height;
          this.itemHeight_ = d;
          var f = c / o;
          (this.adapter_.hasClass(n) || this.adapter_.hasClass(r)) && (f = (o - c - d) / o);
          var p = (s + f * (1 - s)) * a;
          this.adapter_.setTransitionDelayForItemAtIndex(l, p.toFixed(3) + "s")
        }
      }
    }, {
      key: "removeTransitionDelays_", value: function() {
        for (var e = this.adapter_.getNumberOfItems(), t = 0; t < e; t++) {
          this.adapter_.setTransitionDelayForItemAtIndex(t, null)
        }
      }
    }, {
      key: "animationLoop_", value: function() {
        var e = this, r = this.adapter_.getAccurateTime(), i = t.numbers,
            o = i.TRANSITION_DURATION_MS, a = i.TRANSITION_X1,
            s = i.TRANSITION_Y1, l = i.TRANSITION_X2, c = i.TRANSITION_Y2,
            d = i.TRANSITION_SCALE_ADJUSTMENT_X,
            f = i.TRANSITION_SCALE_ADJUSTMENT_Y,
            p = n.i(u.b)((r - this.startTime_) / o),
            h = n.i(u.b)((p - d) / (1 - d)), m = p, g = this.startScaleY_;
        1 === this.targetScale_ && (this.itemHeight_ && (g = Math.max(this.itemHeight_ / this.dimensions_.height, g)), h = n.i(u.b)(p + d), m = n.i(u.b)((p - f) / (1 - f)));
        var v = n.i(u.c)(h, a, s, l, c), y = n.i(u.c)(m, a, s, l, c);
        this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * v;
        var b = 1 / (0 === this.scaleX_ ? 1 : this.scaleX_);
        this.scaleY_ = g + (this.targetScale_ - g) * y;
        var w = 1 / (0 === this.scaleY_ ? 1 : this.scaleY_);
        this.adapter_.setScale(this.scaleX_, this.scaleY_), this.adapter_.setInnerScale(b, w), p < 1 ? this.animationRequestId_ = requestAnimationFrame(function() {
          return e.animationLoop_()
        }) : (this.animationRequestId_ = 0, this.running_ = !1, this.adapter_.removeClass(t.cssClasses.ANIMATING))
      }
    }, {
      key: "animateMenu_", value: function() {
        var e = this;
        this.startTime_ = this.adapter_.getAccurateTime(), this.startScaleX_ = this.scaleX_, this.startScaleY_ = this.scaleY_, this.targetScale_ = this.isOpen_ ? 1 : 0, this.running_ || (this.running_ = !0, this.animationRequestId_ = requestAnimationFrame(function() {
          return e.animationLoop_()
        }))
      }
    }, {
      key: "focusOnOpen_", value: function(e) {
        null === e ? (this.adapter_.focus(), this.adapter_.isFocused() || this.adapter_.focusItemAtIndex(0)) : this.adapter_.focusItemAtIndex(e)
      }
    }, {
      key: "handleKeyboardDown_", value: function(e) {
        if (e.altKey || e.ctrlKey || e.metaKey) {
          return !0;
        }
        var t = e.keyCode, n = e.key, r = e.shiftKey,
            i = "Tab" === n || 9 === t, o = "ArrowUp" === n || 38 === t,
            a = "ArrowDown" === n || 40 === t, s = "Space" === n || 32 === t,
            l = this.adapter_.getFocusedItemIndex(),
            u = this.adapter_.getNumberOfItems() - 1;
        return r && i && 0 === l ? (this.adapter_.focusItemAtIndex(u), e.preventDefault(), !1) : !r && i && l === u ? (this.adapter_.focusItemAtIndex(0), e.preventDefault(), !1) : ((o || a || s) && e.preventDefault(), o ? 0 === l || this.adapter_.isFocused() ? this.adapter_.focusItemAtIndex(u) : this.adapter_.focusItemAtIndex(l - 1) : a && (l === u || this.adapter_.isFocused() ? this.adapter_.focusItemAtIndex(0) : this.adapter_.focusItemAtIndex(l + 1)), !0)
      }
    }, {
      key: "handleKeyboardUp_", value: function(e) {
        if (e.altKey || e.ctrlKey || e.metaKey) {
          return !0;
        }
        var t = e.keyCode, n = e.key, r = "Enter" === n || 13 === t,
            i = "Space" === n || 32 === t, o = "Escape" === n || 27 === t;
        return (r || i) && this.handlePossibleSelected_(e), o && (this.adapter_.notifyCancel(), this.close()), !0
      }
    }, {
      key: "handlePossibleSelected_", value: function(e) {
        var t = this, n = this.adapter_.getIndexForEventTarget(e.target);
        n < 0 || this.selectedTriggerTimerId_ || (this.selectedTriggerTimerId_ = setTimeout(function() {
          t.selectedTriggerTimerId_ = 0, t.close(), t.adapter_.notifySelected({index: n})
        }, l.c.SELECTED_TRIGGER_DELAY))
      }
    }, {
      key: "autoPosition_", value: function() {
        var e;
        if (this.adapter_.hasAnchor()) {
          var t = "top", n = "left", i = this.adapter_.getAnchorDimensions(),
              o = this.adapter_.getWindowDimensions(),
              a = i.top + this.dimensions_.height - o.height,
              s = this.dimensions_.height - i.bottom;
          a > 0 && s < a && (t = "bottom");
          var l = i.left + this.dimensions_.width - o.width,
              u = this.dimensions_.width - i.right, c = l > 0, d = u > 0;
          this.adapter_.isRtl() ? (n = "right", d && l < u && (n = "left")) : c && u < l && (n = "right");
          var f = (e = {}, r(e, n, "0"), r(e, t, "0"), e);
          this.adapter_.setTransformOrigin(t + " " + n), this.adapter_.setPosition(f)
        }
      }
    }, {
      key: "open", value: function() {
        var e = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = n.focusIndex, i = void 0 === r ? null : r;
        this.adapter_.saveFocus(), this.adapter_.addClass(t.cssClasses.ANIMATING), this.animationRequestId_ = requestAnimationFrame(function() {
          e.dimensions_ = e.adapter_.getInnerDimensions(), e.applyTransitionDelays_(), e.autoPosition_(), e.animateMenu_(), e.adapter_.addClass(t.cssClasses.OPEN), e.focusOnOpen_(i), e.adapter_.registerDocumentClickHandler(e.documentClickHandler_)
        }), this.isOpen_ = !0
      }
    }, {
      key: "close", value: function() {
        var e = this;
        this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_), this.adapter_.addClass(t.cssClasses.ANIMATING), requestAnimationFrame(function() {
          e.removeTransitionDelays_(), e.animateMenu_(), e.adapter_.removeClass(t.cssClasses.OPEN)
        }), this.isOpen_ = !1, this.adapter_.restoreFocus()
      }
    }, {
      key: "isOpen", value: function() {
        return this.isOpen_
      }
    }]), t
  }(s.b);
  t.a = f
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function i(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var a = n(2), s = n(24), l = n(9);
  n.d(t, "a", function() {
    return c
  });
  var u = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), c = function(e) {
    function t() {
      return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }

    return o(t, e), u(t, [{
      key: "show", value: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.focusIndex, n = void 0 === t ? null : t;
        this.foundation_.open({focusIndex: n})
      }
    }, {
      key: "hide", value: function() {
        this.foundation_.close()
      }
    }, {
      key: "getDefaultFoundation", value: function() {
        var e = this;
        return new s.a({
          addClass: function(t) {
            return e.root_.classList.add(t)
          }, removeClass: function(t) {
            return e.root_.classList.remove(t)
          }, hasClass: function(t) {
            return e.root_.classList.contains(t)
          }, hasNecessaryDom: function() {
            return Boolean(e.itemsContainer_)
          }, getInnerDimensions: function() {
            var t = e.itemsContainer_;
            return {width: t.offsetWidth, height: t.offsetHeight}
          }, hasAnchor: function() {
            return e.root_.parentElement && e.root_.parentElement.classList.contains("mdc-menu-anchor")
          }, getAnchorDimensions: function() {
            return e.root_.parentElement.getBoundingClientRect()
          }, getWindowDimensions: function() {
            return {width: window.innerWidth, height: window.innerHeight}
          }, setScale: function(t, r) {
            e.root_.style[n.i(l.a)(window)] = "scale(" + t + ", " + r + ")"
          }, setInnerScale: function(t, r) {
            e.itemsContainer_.style[n.i(l.a)(window)] = "scale(" + t + ", " + r + ")"
          }, getNumberOfItems: function() {
            return e.items.length
          }, registerInteractionHandler: function(t, n) {
            return e.root_.addEventListener(t, n)
          }, deregisterInteractionHandler: function(t, n) {
            return e.root_.removeEventListener(t, n)
          }, registerDocumentClickHandler: function(e) {
            return document.addEventListener("click", e)
          }, deregisterDocumentClickHandler: function(e) {
            return document.removeEventListener("click", e)
          }, getYParamsForItemAtIndex: function(t) {
            var n = e.items[t];
            return {top: n.offsetTop, height: n.offsetHeight}
          }, setTransitionDelayForItemAtIndex: function(t, n) {
            return e.items[t].style.setProperty("transition-delay", n)
          }, getIndexForEventTarget: function(t) {
            return e.items.indexOf(t)
          }, notifySelected: function(t) {
            return e.emit("MDCSimpleMenu:selected", {
              index: t.index,
              item: e.items[t.index]
            })
          }, notifyCancel: function() {
            return e.emit("MDCSimpleMenu:cancel")
          }, saveFocus: function() {
            e.previousFocus_ = document.activeElement
          }, restoreFocus: function() {
            e.previousFocus_ && e.previousFocus_.focus()
          }, isFocused: function() {
            return document.activeElement === e.root_
          }, focus: function() {
            return e.root_.focus()
          }, getFocusedItemIndex: function() {
            return e.items.indexOf(document.activeElement)
          }, focusItemAtIndex: function(t) {
            return e.items[t].focus()
          }, isRtl: function() {
            return "rtl" === getComputedStyle(e.root_).getPropertyValue("direction")
          }, setTransformOrigin: function(t) {
            e.root_.style[n.i(l.a)(window) + "-origin"] = t
          }, setPosition: function(t) {
            e.root_.style.left = "left" in t ? t.left : null, e.root_.style.right = "right" in t ? t.right : null, e.root_.style.top = "top" in t ? t.top : null, e.root_.style.bottom = "bottom" in t ? t.bottom : null
          }, getAccurateTime: function() {
            return window.performance.now()
          }
        })
      }
    }, {
      key: "open", get: function() {
        return this.foundation_.isOpen()
      }, set: function(e) {
        e ? this.foundation_.open() : this.foundation_.close()
      }
    }, {
      key: "itemsContainer_", get: function() {
        return this.root_.querySelector(s.a.strings.ITEMS_SELECTOR)
      }
    }, {
      key: "items", get: function() {
        var e = this.itemsContainer_;
        return [].slice.call(e.querySelectorAll(".mdc-list-item[role]"))
      }
    }], [{
      key: "attachTo", value: function(e) {
        return new t(e)
      }
    }]), t
  }(a.a)
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function i(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var a = n(2), s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), l = "mdc-radio", u = function(e) {
    function t() {
      return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }

    return o(t, e), s(t, [{
      key: "isChecked", value: function() {
        return this.getNativeControl_().checked
      }
    }, {
      key: "setChecked", value: function(e) {
        this.getNativeControl_().checked = e
      }
    }, {
      key: "isDisabled", value: function() {
        return this.getNativeControl_().disabled
      }
    }, {
      key: "setDisabled", value: function(e) {
        var n = t.cssClasses.DISABLED;
        this.getNativeControl_().disabled = e, e ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
      }
    }, {
      key: "getNativeControl_", value: function() {
        return this.adapter_.getNativeControl() || {checked: !1, disabled: !1}
      }
    }], [{
      key: "cssClasses", get: function() {
        return {ROOT: l, DISABLED: l + "--disabled"}
      }
    }, {
      key: "strings", get: function() {
        return {NATIVE_CONTROL_SELECTOR: "." + l + "__native-control"}
      }
    }, {
      key: "defaultAdapter", get: function() {
        return {
          addClass: function() {
          }, removeClass: function() {
          }, getNativeControl: function() {
          }
        }
      }
    }]), t
  }(a.b);
  t.a = u
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function i(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var a = n(2), s = n(30), l = n(26);
  n.d(t, "a", function() {
    return f
  });
  var u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
    }
    return e
  }, c = function e(t, n, r) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);
    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : e(o, n, r)
    }
    if ("value" in i) {
      return i.value;
    }
    var a = i.get;
    if (void 0 !== a) {
      return a.call(r)
    }
  }, d = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), f = function(e) {
    function t() {
      var e;
      r(this, t);
      for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) {
        o[a] = arguments[a];
      }
      var s = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)));
      return s.ripple_ = s.initRipple_(), s
    }

    return o(t, e), d(t, [{
      key: "checked", get: function() {
        return this.foundation_.isChecked()
      }, set: function(e) {
        this.foundation_.setChecked(e)
      }
    }, {
      key: "disabled", get: function() {
        return this.foundation_.isDisabled()
      }, set: function(e) {
        this.foundation_.setDisabled(e)
      }
    }, {
      key: "ripple", get: function() {
        return this.ripple_
      }
    }], [{
      key: "attachTo", value: function(e) {
        return new t(e)
      }
    }]), d(t, [{
      key: "initRipple_", value: function() {
        var e = this, t = u(s.a.createAdapter(this), {
          isUnbounded: function() {
            return !0
          }, isSurfaceActive: function() {
            return !1
          }, registerInteractionHandler: function(t, n) {
            return e.nativeControl_.addEventListener(t, n)
          }, deregisterInteractionHandler: function(t, n) {
            return e.nativeControl_.removeEventListener(t, n)
          }, computeBoundingRect: function() {
            var t = e.root_.getBoundingClientRect(), n = t.left, r = t.top;
            return {
              top: r,
              left: n,
              right: n + 40,
              bottom: r + 40,
              width: 40,
              height: 40
            }
          }
        }), n = new s.b(t);
        return new s.a(this.root_, n)
      }
    }, {
      key: "destroy", value: function() {
        this.ripple_.destroy(), c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
      }
    }, {
      key: "getDefaultFoundation", value: function() {
        var e = this;
        return new l.a({
          addClass: function(t) {
            return e.root_.classList.add(t)
          }, removeClass: function(t) {
            return e.root_.classList.remove(t)
          }, getNativeControl: function() {
            return e.root_.querySelector(l.a.strings.NATIVE_CONTROL_SELECTOR)
          }
        })
      }
    }, {
      key: "nativeControl_", get: function() {
        return this.root_.querySelector(l.a.strings.NATIVE_CONTROL_SELECTOR)
      }
    }]), t
  }(a.a)
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", function() {
    return r
  }), n.d(t, "b", function() {
    return i
  }), n.d(t, "c", function() {
    return o
  });
  var r = {
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded",
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    BG_ACTIVE_FILL: "mdc-ripple-upgraded--background-active-fill",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation"
  }, i = {
    VAR_SURFACE_WIDTH: "--mdc-ripple-surface-width",
    VAR_SURFACE_HEIGHT: "--mdc-ripple-surface-height",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top",
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end"
  }, o = {PADDING: 10, INITIAL_ORIGIN_SCALE: .6, DEACTIVATION_TIMEOUT_MS: 300}
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function i(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var a = n(2), s = n(28), l = n(10), u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
    }
    return e
  }, c = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), d = {
    mouseup: "mousedown",
    pointerup: "pointerdown",
    touchend: "touchstart",
    keyup: "keydown",
    blur: "focus"
  }, f = function(e) {
    function t(e) {
      r(this, t);
      var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u(t.defaultAdapter, e)));
      return n.layoutFrame_ = 0, n.frame_ = {
        width: 0,
        height: 0
      }, n.activationState_ = n.defaultActivationState_(), n.xfDuration_ = 0, n.initialSize_ = 0, n.maxRadius_ = 0, n.listenerInfos_ = [{
        activate: "touchstart",
        deactivate: "touchend"
      }, {
        activate: "pointerdown",
        deactivate: "pointerup"
      }, {activate: "mousedown", deactivate: "mouseup"}, {
        activate: "keydown",
        deactivate: "keyup"
      }, {
        focus: "focus",
        blur: "blur"
      }], n.listeners_ = {
        activate: function(e) {
          return n.activate_(e)
        }, deactivate: function(e) {
          return n.deactivate_(e)
        }, focus: function() {
          return requestAnimationFrame(function() {
            return n.adapter_.addClass(t.cssClasses.BG_FOCUSED)
          })
        }, blur: function() {
          return requestAnimationFrame(function() {
            return n.adapter_.removeClass(t.cssClasses.BG_FOCUSED)
          })
        }
      }, n.resizeHandler_ = function() {
        return n.layout()
      }, n.unboundedCoords_ = {
        left: 0,
        top: 0
      }, n.fgScale_ = 0, n.activationTimer_ = 0, n.activationAnimationHasEnded_ = !1, n.activationTimerCallback_ = function() {
        n.activationAnimationHasEnded_ = !0, n.runDeactivationUXLogicIfReady_()
      }, n
    }

    return o(t, e), c(t, [{
      key: "isSupported_", get: function() {
        return this.adapter_.browserSupportsCssVars()
      }
    }], [{
      key: "cssClasses", get: function() {
        return s.a
      }
    }, {
      key: "strings", get: function() {
        return s.b
      }
    }, {
      key: "numbers", get: function() {
        return s.c
      }
    }, {
      key: "defaultAdapter", get: function() {
        return {
          browserSupportsCssVars: function() {
          }, isUnbounded: function() {
          }, isSurfaceActive: function() {
          }, addClass: function() {
          }, removeClass: function() {
          }, registerInteractionHandler: function() {
          }, deregisterInteractionHandler: function() {
          }, registerResizeHandler: function() {
          }, deregisterResizeHandler: function() {
          }, updateCssVariable: function() {
          }, computeBoundingRect: function() {
          }, getWindowPageOffset: function() {
          }
        }
      }
    }]), c(t, [{
      key: "defaultActivationState_", value: function() {
        return {
          isActivated: !1,
          hasDeactivationUXRun: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
          activationStartTime: 0,
          activationEvent: null,
          isProgrammatic: !1
        }
      }
    }, {
      key: "init", value: function() {
        var e = this;
        if (this.isSupported_) {
          this.addEventListeners_();
          var n = t.cssClasses, r = n.ROOT, i = n.UNBOUNDED;
          requestAnimationFrame(function() {
            e.adapter_.addClass(r), e.adapter_.isUnbounded() && e.adapter_.addClass(i), e.layoutInternal_()
          })
        }
      }
    }, {
      key: "addEventListeners_", value: function() {
        var e = this;
        this.listenerInfos_.forEach(function(t) {
          Object.keys(t).forEach(function(n) {
            e.adapter_.registerInteractionHandler(t[n], e.listeners_[n])
          })
        }), this.adapter_.registerResizeHandler(this.resizeHandler_)
      }
    }, {
      key: "activate_", value: function(e) {
        var t = this, n = this.activationState_;
        n.isActivated || (n.isActivated = !0, n.isProgrammatic = null === e, n.activationEvent = e, n.wasActivatedByPointer = !n.isProgrammatic && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type), n.activationStartTime = Date.now(), requestAnimationFrame(function() {
          n.wasElementMadeActive = !e || "keydown" !== e.type || t.adapter_.isSurfaceActive(), n.wasElementMadeActive ? t.animateActivation_() : t.activationState_ = t.defaultActivationState_()
        }))
      }
    }, {
      key: "activate", value: function() {
        this.activate_(null)
      }
    }, {
      key: "animateActivation_", value: function() {
        var e = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START,
            i = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, a = o.BG_ACTIVE_FILL,
            s = o.FG_DEACTIVATION, l = o.FG_ACTIVATION,
            u = t.numbers.DEACTIVATION_TIMEOUT_MS, c = "", d = "";
        if (!this.adapter_.isUnbounded()) {
          var f = this.getFgTranslationCoordinates_(), p = f.startPoint,
              h = f.endPoint;
          c = p.x + "px, " + p.y + "px", d = h.x + "px, " + h.y + "px"
        }
        this.adapter_.updateCssVariable(r, c), this.adapter_.updateCssVariable(i, d), clearTimeout(this.activationTimer_), this.rmBoundedActivationClasses_(), this.adapter_.removeClass(s), this.adapter_.computeBoundingRect(), this.adapter_.addClass(a), this.adapter_.addClass(l), this.activationTimer_ = setTimeout(function() {
          return e.activationTimerCallback_()
        }, u)
      }
    }, {
      key: "getFgTranslationCoordinates_", value: function() {
        var e = this.activationState_, t = e.activationEvent,
            r = e.wasActivatedByPointer, i = void 0;
        return i = r ? n.i(l.c)(t, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        }, i = {
          x: i.x - this.initialSize_ / 2,
          y: i.y - this.initialSize_ / 2
        }, {
          startPoint: i,
          endPoint: {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
          }
        }
      }
    }, {
      key: "runDeactivationUXLogicIfReady_", value: function() {
        var e = t.cssClasses.FG_DEACTIVATION, n = this.activationState_,
            r = n.hasDeactivationUXRun, i = n.isActivated;
        (r || !i) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(), this.adapter_.addClass(e))
      }
    }, {
      key: "rmBoundedActivationClasses_", value: function() {
        var e = t.cssClasses, n = e.BG_ACTIVE_FILL, r = e.FG_ACTIVATION;
        this.adapter_.removeClass(n), this.adapter_.removeClass(r), this.activationAnimationHasEnded_ = !1, this.adapter_.computeBoundingRect()
      }
    }, {
      key: "deactivate_", value: function(e) {
        var t = this, n = this.activationState_;
        if (n.isActivated) {
          if (n.isProgrammatic) {
            return requestAnimationFrame(function() {
              return t.animateDeactivation_(null, u({}, n))
            }), void(this.activationState_ = this.defaultActivationState_())
          }
          var r = d[e.type], i = n.activationEvent.type, o = r === i, a = o;
          n.wasActivatedByPointer && (a = "mouseup" === e.type);
          var s = u({}, n);
          requestAnimationFrame(function() {
            o && (t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(e, s)), a && (t.activationState_ = t.defaultActivationState_())
          })
        }
      }
    }, {
      key: "deactivate", value: function() {
        this.deactivate_(null)
      }
    }, {
      key: "animateDeactivation_", value: function(e, n) {
        var r = n.wasActivatedByPointer, i = n.wasElementMadeActive,
            o = t.cssClasses.BG_FOCUSED;
        (r || i) && (this.adapter_.removeClass(o), this.runDeactivationUXLogicIfReady_())
      }
    }, {
      key: "destroy", value: function() {
        var e = this;
        if (this.isSupported_) {
          this.removeEventListeners_();
          var n = t.cssClasses, r = n.ROOT, i = n.UNBOUNDED;
          requestAnimationFrame(function() {
            e.adapter_.removeClass(r), e.adapter_.removeClass(i), e.removeCssVars_()
          })
        }
      }
    }, {
      key: "removeEventListeners_", value: function() {
        var e = this;
        this.listenerInfos_.forEach(function(t) {
          Object.keys(t).forEach(function(n) {
            e.adapter_.deregisterInteractionHandler(t[n], e.listeners_[n])
          })
        }), this.adapter_.deregisterResizeHandler(this.resizeHandler_)
      }
    }, {
      key: "removeCssVars_", value: function() {
        var e = this, n = t.strings;
        Object.keys(n).forEach(function(t) {
          0 === t.indexOf("VAR_") && e.adapter_.updateCssVariable(n[t], null)
        })
      }
    }, {
      key: "layout", value: function() {
        var e = this;
        this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
          e.layoutInternal_(), e.layoutFrame_ = 0
        })
      }
    }, {
      key: "layoutInternal_", value: function() {
        this.frame_ = this.adapter_.computeBoundingRect();
        var e = Math.max(this.frame_.height, this.frame_.width),
            n = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
        this.initialSize_ = e * t.numbers.INITIAL_ORIGIN_SCALE, this.maxRadius_ = n + t.numbers.PADDING, this.fgScale_ = this.maxRadius_ / this.initialSize_, this.xfDuration_ = 1e3 * Math.sqrt(this.maxRadius_ / 1024), this.updateLayoutCssVars_()
      }
    }, {
      key: "updateLayoutCssVars_", value: function() {
        var e = t.strings, n = e.VAR_SURFACE_WIDTH, r = e.VAR_SURFACE_HEIGHT,
            i = e.VAR_FG_SIZE, o = e.VAR_LEFT, a = e.VAR_TOP,
            s = e.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(n, this.frame_.width + "px"), this.adapter_.updateCssVariable(r, this.frame_.height + "px"), this.adapter_.updateCssVariable(i, this.initialSize_ + "px"), this.adapter_.updateCssVariable(s, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        }, this.adapter_.updateCssVariable(o, this.unboundedCoords_.left + "px"), this.adapter_.updateCssVariable(a, this.unboundedCoords_.top + "px"))
      }
    }]), t
  }(a.b);
  t.a = f
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function i(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var a = n(2), s = n(29), l = n(10);
  n.d(t, "b", function() {
    return s.a
  }), n.d(t, "a", function() {
    return d
  });
  var u = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(), c = n.i(l.a)(HTMLElement.prototype), d = function(e) {
    function t() {
      return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }

    return o(t, e), u(t, [{
      key: "activate", value: function() {
        this.foundation_.activate()
      }
    }, {
      key: "deactivate", value: function() {
        this.foundation_.deactivate()
      }
    }, {
      key: "getDefaultFoundation", value: function() {
        return new s.a(t.createAdapter(this))
      }
    }, {
      key: "initialSyncWithDOM", value: function() {
        this.unbounded = "mdcRippleIsUnbounded" in this.root_.dataset
      }
    }, {
      key: "unbounded", get: function() {
        return this.unbounded_
      }, set: function(e) {
        var t = s.a.cssClasses.UNBOUNDED;
        this.unbounded_ = Boolean(e), this.unbounded_ ? this.root_.classList.add(t) : this.root_.classList.remove(t)
      }
    }], [{
      key: "attachTo", value: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.isUnbounded, i = void 0 === r ? void 0 : r, o = new t(e);
        return void 0 !== i && (o.unbounded = i), o
      }
    }, {
      key: "createAdapter", value: function(e) {
        return {
          browserSupportsCssVars: function() {
            return n.i(l.b)(window)
          }, isUnbounded: function() {
            return e.unbounded
          }, isSurfaceActive: function() {
            return e.root_[c](":active")
          }, addClass: function(t) {
            return e.root_.classList.add(t)
          }, removeClass: function(t) {
            return e.root_.classList.remove(t)
          }, registerInteractionHandler: function(t, n) {
            return e.root_.addEventListener(t, n)
          }, deregisterInteractionHandler: function(t, n) {
            return e.root_.removeEventListener(t, n)
          }, registerResizeHandler: function(e) {
            return window.addEventListener("resize", e)
          }, deregisterResizeHandler: function(e) {
            return window.removeEventListener("resize", e)
          }, updateCssVariable: function(t, n) {
            return e.root_.style.setProperty(t, n)
          }, computeBoundingRect: function() {
            return e.root_.getBoundingClientRect()
          }, getWindowPageOffset: function() {
            return {x: window.pageXOffset, y: window.pageYOffset}
          }
        }
      }
    }]), t
  }(a.a)
}, function(e, t, n) {/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
  !function(t, r, i) {
    void 0 !== e && e.exports ? e.exports = i() : n(38)("bowser", i)
  }(0, 0, function() {
    function e(e) {
      function t(t) {
        var n = e.match(t);
        return n && n.length > 1 && n[1] || ""
      }

      var n, r = t(/(ipod|iphone|ipad)/i).toLowerCase(),
          i = /like android/i.test(e), o = !i && /android/i.test(e),
          s = /nexus\s*[0-6]\s*/i.test(e), l = !s && /nexus\s*[0-9]+/i.test(e),
          u = /CrOS/.test(e), c = /silk/i.test(e), d = /sailfish/i.test(e),
          f = /tizen/i.test(e), p = /(web|hpw)os/i.test(e),
          h = /windows phone/i.test(e),
          m = (/SamsungBrowser/i.test(e), !h && /windows/i.test(e)),
          g = !r && !c && /macintosh/i.test(e),
          v = !o && !d && !f && !p && /linux/i.test(e),
          y = t(/edge\/(\d+(\.\d+)?)/i), b = t(/version\/(\d+(\.\d+)?)/i),
          w = /tablet/i.test(e), x = !w && /[^-]mobi/i.test(e),
          k = /xbox/i.test(e);
      /opera/i.test(e) ? n = {
        name: "Opera",
        opera: a,
        version: b || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      } : /opr|opios/i.test(e) ? n = {
        name: "Opera",
        opera: a,
        version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
      } : /SamsungBrowser/i.test(e) ? n = {
        name: "Samsung Internet for Android",
        samsungBrowser: a,
        version: b || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      } : /coast/i.test(e) ? n = {
        name: "Opera Coast",
        coast: a,
        version: b || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      } : /yabrowser/i.test(e) ? n = {
        name: "Yandex Browser",
        yandexbrowser: a,
        version: b || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      } : /ucbrowser/i.test(e) ? n = {
        name: "UC Browser",
        ucbrowser: a,
        version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      } : /mxios/i.test(e) ? n = {
        name: "Maxthon",
        maxthon: a,
        version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      } : /epiphany/i.test(e) ? n = {
        name: "Epiphany",
        epiphany: a,
        version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      } : /puffin/i.test(e) ? n = {
        name: "Puffin",
        puffin: a,
        version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      } : /sleipnir/i.test(e) ? n = {
        name: "Sleipnir",
        sleipnir: a,
        version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      } : /k-meleon/i.test(e) ? n = {
        name: "K-Meleon",
        kMeleon: a,
        version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      } : h ? (n = {
        name: "Windows Phone",
        windowsphone: a
      }, y ? (n.msedge = a, n.version = y) : (n.msie = a, n.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? n = {
        name: "Internet Explorer",
        msie: a,
        version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      } : u ? n = {
        name: "Chrome",
        chromeos: a,
        chromeBook: a,
        chrome: a,
        version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      } : /chrome.+? edge/i.test(e) ? n = {
        name: "Microsoft Edge",
        msedge: a,
        version: y
      } : /vivaldi/i.test(e) ? n = {
        name: "Vivaldi",
        vivaldi: a,
        version: t(/vivaldi\/(\d+(\.\d+)?)/i) || b
      } : d ? n = {
        name: "Sailfish",
        sailfish: a,
        version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      } : /seamonkey\//i.test(e) ? n = {
        name: "SeaMonkey",
        seamonkey: a,
        version: t(/seamonkey\/(\d+(\.\d+)?)/i)
      } : /firefox|iceweasel|fxios/i.test(e) ? (n = {
        name: "Firefox",
        firefox: a,
        version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (n.firefoxos = a)) : c ? n = {
        name: "Amazon Silk",
        silk: a,
        version: t(/silk\/(\d+(\.\d+)?)/i)
      } : /phantom/i.test(e) ? n = {
        name: "PhantomJS",
        phantom: a,
        version: t(/phantomjs\/(\d+(\.\d+)?)/i)
      } : /slimerjs/i.test(e) ? n = {
        name: "SlimerJS",
        slimer: a,
        version: t(/slimerjs\/(\d+(\.\d+)?)/i)
      } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? n = {
        name: "BlackBerry",
        blackberry: a,
        version: b || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      } : p ? (n = {
        name: "WebOS",
        webos: a,
        version: b || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      }, /touchpad\//i.test(e) && (n.touchpad = a)) : /bada/i.test(e) ? n = {
        name: "Bada",
        bada: a,
        version: t(/dolfin\/(\d+(\.\d+)?)/i)
      } : f ? n = {
        name: "Tizen",
        tizen: a,
        version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
      } : /qupzilla/i.test(e) ? n = {
        name: "QupZilla",
        qupzilla: a,
        version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
      } : /chromium/i.test(e) ? n = {
        name: "Chromium",
        chromium: a,
        version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
      } : /chrome|crios|crmo/i.test(e) ? n = {
        name: "Chrome",
        chrome: a,
        version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      } : o ? n = {
        name: "Android",
        version: b
      } : /safari|applewebkit/i.test(e) ? (n = {
        name: "Safari",
        safari: a
      }, b && (n.version = b)) : r ? (n = {name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"}, b && (n.version = b)) : n = /googlebot/i.test(e) ? {
        name: "Googlebot",
        googlebot: a,
        version: t(/googlebot\/(\d+(\.\d+))/i) || b
      } : {
        name: t(/^(.*)\/(.*) /), version: function(t) {
          var n = e.match(t);
          return n && n.length > 1 && n[2] || ""
        }(/^(.*)\/(.*) /)
      }, !n.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (n.name = n.name || "Blink", n.blink = a) : (n.name = n.name || "Webkit", n.webkit = a), !n.version && b && (n.version = b)) : !n.opera && /gecko\//i.test(e) && (n.name = n.name || "Gecko", n.gecko = a, n.version = n.version || t(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !o && !n.silk ? n.windowsphone || n.msedge || !r ? g ? n.mac = a : k ? n.xbox = a : m ? n.windows = a : v && (n.linux = a) : (n[r] = a, n.ios = a) : n.android = a;
      var C = "";
      n.windowsphone ? C = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r ? (C = t(/os (\d+([_\s]\d+)*) like mac os x/i), C = C.replace(/[_\s]/g, ".")) : o ? C = t(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? C = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? C = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? C = t(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (C = t(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (n.osversion = C);
      var S = C.split(".")[0];
      return w || l || "ipad" == r || o && (3 == S || S >= 4 && !x) || n.silk ? n.tablet = a : (x || "iphone" == r || "ipod" == r || o || s || n.blackberry || n.webos || n.bada) && (n.mobile = a), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = a : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = a : n.x = a, n
    }

    function t(e) {
      return e.split(".").length
    }

    function n(e, t) {
      var n, r = [];
      if (Array.prototype.map) {
        return Array.prototype.map.call(e, t);
      }
      for (n = 0; n < e.length; n++) {
        r.push(t(e[n]));
      }
      return r
    }

    function r(e) {
      for (var r = Math.max(t(e[0]), t(e[1])), i = n(e, function(e) {
        var i = r - t(e);
        return e += new Array(i + 1).join(".0"), n(e.split("."), function(e) {
          return new Array(20 - e.length).join("0") + e
        }).reverse()
      }); --r >= 0;) {
        if (i[0][r] > i[1][r]) {
          return 1;
        }
        if (i[0][r] !== i[1][r]) {
          return -1;
        }
        if (0 === r) {
          return 0
        }
      }
    }

    function i(t, n, i) {
      var o = s;
      "string" == typeof n && (i = n, n = void 0), void 0 === n && (n = !1), i && (o = e(i));
      var a = "" + o.version;
      for (var l in t) {
        if (t.hasOwnProperty(l) && o[l]) {
          if ("string" != typeof t[l]) {
            throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(t));
          }
          return r([a, t[l]]) < 0
        }
      }
      return n
    }

    function o(e, t, n) {
      return !i(e, t, n)
    }

    var a = !0,
        s = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
    return s.test = function(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        if ("string" == typeof n && n in s) {
          return !0
        }
      }
      return !1
    }, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = o, s._detect = e, s
  })
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";

      function t(e, t, n, r, i, o) {
        this.indented = e, this.column = t, this.type = n, this.info = r, this.align = i, this.prev = o
      }

      function n(e, n, r, i) {
        var o = e.indented;
        return e.context && "statement" == e.context.type && "statement" != r && (o = e.context.indented), e.context = new t(o, n, r, i, null, e.context)
      }

      function r(e) {
        var t = e.context.type;
        return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev
      }

      function i(e, t, n) {
        return "variable" == t.prevToken || "variable-3" == t.prevToken || (!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, n)) || (!(!t.typeAtEndOfLine || e.column() != e.indentation()) || void 0))
      }

      function o(e) {
        for (; ;) {
          if (!e || "top" == e.type) {
            return !0;
          }
          if ("}" == e.type && "namespace" != e.prev.info) {
            return !1;
          }
          e = e.prev
        }
      }

      function a(e) {
        for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) {
          t[n[r]] = !0;
        }
        return t
      }

      function s(e, t) {
        return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t)
      }

      function l(e, t) {
        if (!t.startOfLine) {
          return !1;
        }
        for (var n, r = null; n = e.peek();) {
          if ("\\" == n && e.match(/^.$/)) {
            r = l;
            break
          }
          if ("/" == n && e.match(/^\/[\/\*]/, !1)) {
            break;
          }
          e.next()
        }
        return t.tokenize = r, "meta"
      }

      function u(e, t) {
        return "variable-3" == t.prevToken && "variable-3"
      }

      function c(e) {
        return e.eatWhile(/[\w\.']/), "number"
      }

      function d(e, t) {
        if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
          var n = e.match(/"([^\s\\()]{0,16})\(/);
          return !!n && (t.cpp11RawStringDelim = n[1], t.tokenize = h, h(e, t))
        }
        return e.match(/(u8|u|U|L)/) ? !!e.match(/["']/, !1) && "string" : (e.next(), !1)
      }

      function f(e) {
        var t = /(\w+)::(\w+)$/.exec(e);
        return t && t[1] == t[2]
      }

      function p(e, t) {
        for (var n; null != (n = e.next());) {
          if ('"' == n && !e.eat('"')) {
            t.tokenize = null;
            break
          }
        }
        return "string"
      }

      function h(e, t) {
        var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
        return e.match(new RegExp(".*?\\)" + n + '"')) ? t.tokenize = null : e.skipToEnd(), "string"
      }

      function m(t, n) {
        function r(e) {
          if (e) {
            for (var t in e) {
              e.hasOwnProperty(t) && i.push(t)
            }
          }
        }

        "string" == typeof t && (t = [t]);
        var i = [];
        r(n.keywords), r(n.types), r(n.builtin), r(n.atoms), i.length && (n.helperType = t[0], e.registerHelper("hintWords", t[0], i));
        for (var o = 0; o < t.length; ++o) {
          e.defineMIME(t[o], n)
        }
      }

      function g(e, t) {
        for (var n = !1; !e.eol();) {
          if (!n && e.match('"""')) {
            t.tokenize = null;
            break
          }
          n = "\\" == e.next() && !n
        }
        return "string"
      }

      function v(e) {
        return function(t, n) {
          for (var r, i = !1, o = !1; !t.eol();) {
            if (!e && !i && t.match('"')) {
              o = !0;
              break
            }
            if (e && t.match('"""')) {
              o = !0;
              break
            }
            r = t.next(), !i && "$" == r && t.match("{") && t.skipTo("}"), i = !i && "\\" == r && !e
          }
          return !o && e || (n.tokenize = null), "string"
        }
      }

      function y(e) {
        return function(t, n) {
          for (var r, i = !1, o = !1; !t.eol();) {
            if (!i && t.match('"') && ("single" == e || t.match('""'))) {
              o = !0;
              break
            }
            if (!i && t.match("``")) {
              x = y(e), o = !0;
              break
            }
            r = t.next(), i = "single" == e && !i && "\\" == r
          }
          return o && (n.tokenize = null), "string"
        }
      }

      e.defineMode("clike", function(a, l) {
        function u(e, t) {
          var n = e.next();
          if (S[n]) {
            var r = S[n](e, t);
            if (!1 !== r) {
              return r
            }
          }
          if ('"' == n || "'" == n) {
            return t.tokenize = c(n), t.tokenize(e, t);
          }
          if (O.test(n)) {
            return p = n, null;
          }
          if (A.test(n)) {
            if (e.backUp(1), e.match(I)) {
              return "number";
            }
            e.next()
          }
          if ("/" == n) {
            if (e.eat("*")) {
              return t.tokenize = d, d(e, t);
            }
            if (e.eat("/")) {
              return e.skipToEnd(), "comment"
            }
          }
          if (E.test(n)) {
            for (; !e.match(/^\/[\/*]/, !1) && e.eat(E);) {
              ;
            }
            return "operator"
          }
          if (e.eatWhile(/[\w\$_\xa1-\uffff]/), M) {
            for (; e.match(M);) {
              e.eatWhile(/[\w\$_\xa1-\uffff]/);
            }
          }
          var i = e.current();
          return s(y, i) ? (s(x, i) && (p = "newstatement"), s(k, i) && (h = !0), "keyword") : s(b, i) ? "variable-3" : s(w, i) ? (s(x, i) && (p = "newstatement"), "builtin") : s(C, i) ? "atom" : "variable"
        }

        function c(e) {
          return function(t, n) {
            for (var r, i = !1, o = !1; null != (r = t.next());) {
              if (r == e && !i) {
                o = !0;
                break
              }
              i = !i && "\\" == r
            }
            return (o || !i && !_) && (n.tokenize = null), "string"
          }
        }

        function d(e, t) {
          for (var n, r = !1; n = e.next();) {
            if ("/" == n && r) {
              t.tokenize = null;
              break
            }
            r = "*" == n
          }
          return "comment"
        }

        function f(e, t) {
          l.typeFirstDefinitions && e.eol() && o(t.context) && (t.typeAtEndOfLine = i(e, t, e.pos))
        }

        var p, h, m = a.indentUnit, g = l.statementIndentUnit || m,
            v = l.dontAlignCalls, y = l.keywords || {}, b = l.types || {},
            w = l.builtin || {}, x = l.blockKeywords || {},
            k = l.defKeywords || {}, C = l.atoms || {}, S = l.hooks || {},
            _ = l.multiLineStrings, T = !1 !== l.indentStatements,
            L = !1 !== l.indentSwitch, M = l.namespaceSeparator,
            O = l.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
            A = l.numberStart || /[\d\.]/,
            I = l.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
            E = l.isOperatorChar || /[+\-*&%=<>!?|\/]/;
        return {
          startState: function(e) {
            return {
              tokenize: null,
              context: new t((e || 0) - m, 0, "top", null, !1),
              indented: 0,
              startOfLine: !0,
              prevToken: null
            }
          },
          token: function(e, t) {
            var a = t.context;
            if (e.sol() && (null == a.align && (a.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) {
              return f(e, t), null;
            }
            p = h = null;
            var s = (t.tokenize || u)(e, t);
            if ("comment" == s || "meta" == s) {
              return s;
            }
            if (null == a.align && (a.align = !0), ";" == p || ":" == p || "," == p && e.match(/^\s*(?:\/\/.*)?$/, !1)) {
              for (; "statement" == t.context.type;) {
                r(t);
              }
            } else if ("{" == p) {
              n(t, e.column(), "}");
            } else if ("[" == p) {
              n(t, e.column(), "]");
            } else if ("(" == p) {
              n(t, e.column(), ")");
            } else if ("}" == p) {
              for (; "statement" == a.type;) {
                a = r(t);
              }
              for ("}" == a.type && (a = r(t)); "statement" == a.type;) {
                a = r(t)
              }
            } else {
              p == a.type ? r(t) : T && (("}" == a.type || "top" == a.type) && ";" != p || "statement" == a.type && "newstatement" == p) && n(t, e.column(), "statement", e.current());
            }
            if ("variable" == s && ("def" == t.prevToken || l.typeFirstDefinitions && i(e, t, e.start) && o(t.context) && e.match(/^\s*\(/, !1)) && (s = "def"), S.token) {
              var c = S.token(e, t, s);
              void 0 !== c && (s = c)
            }
            return "def" == s && !1 === l.styleDefs && (s = "variable"), t.startOfLine = !1, t.prevToken = h ? "def" : s || p, f(e, t), s
          },
          indent: function(t, n) {
            if (t.tokenize != u && null != t.tokenize || t.typeAtEndOfLine) {
              return e.Pass;
            }
            var r = t.context, i = n && n.charAt(0);
            if ("statement" == r.type && "}" == i && (r = r.prev), l.dontIndentStatements) {
              for (; "statement" == r.type && l.dontIndentStatements.test(r.info);) {
                r = r.prev;
              }
            }
            if (S.indent) {
              var o = S.indent(t, r, n);
              if ("number" == typeof o) {
                return o
              }
            }
            var a = i == r.type, s = r.prev && "switch" == r.prev.info;
            if (l.allmanIndentation && /[{(]/.test(i)) {
              for (; "top" != r.type && "}" != r.type;) {
                r = r.prev;
              }
              return r.indented
            }
            return "statement" == r.type ? r.indented + ("{" == i ? 0 : g) : !r.align || v && ")" == r.type ? ")" != r.type || a ? r.indented + (a ? 0 : m) + (a || !s || /^(?:case|default)\b/.test(n) ? 0 : m) : r.indented + g : r.column + (a ? 0 : 1)
          },
          electricInput: L ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          lineComment: "//",
          fold: "brace"
        }
      });
      var b = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile",
          w = "int long char short double float unsigned signed void size_t ptrdiff_t";
      m(["text/x-csrc", "text/x-c", "text/x-chdr"], {
        name: "clike",
        keywords: a(b),
        types: a(w + " bool _Complex _Bool float_t double_t intptr_t intmax_t int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t uint32_t uint64_t"),
        blockKeywords: a("case do else for if switch while struct"),
        defKeywords: a("struct"),
        typeFirstDefinitions: !0,
        atoms: a("null true false"),
        hooks: {"#": l, "*": u},
        modeProps: {fold: ["brace", "include"]}
      }), m(["text/x-c++src", "text/x-c++hdr"], {
        name: "clike",
        keywords: a(b + " asm dynamic_cast namespace reinterpret_cast try explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),
        types: a(w + " bool wchar_t"),
        blockKeywords: a("catch class do else finally for if struct switch try while"),
        defKeywords: a("class namespace struct enum union"),
        typeFirstDefinitions: !0,
        atoms: a("true false null"),
        dontIndentStatements: /^template$/,
        hooks: {
          "#": l,
          "*": u,
          u: d,
          U: d,
          L: d,
          R: d,
          0: c,
          1: c,
          2: c,
          3: c,
          4: c,
          5: c,
          6: c,
          7: c,
          8: c,
          9: c,
          token: function(e, t, n) {
            if ("variable" == n && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && f(e.current())) {
              return "def"
            }
          }
        },
        namespaceSeparator: "::",
        modeProps: {fold: ["brace", "include"]}
      }), m("text/x-java", {
        name: "clike",
        keywords: a("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
        types: a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
        blockKeywords: a("catch class do else finally for if switch try while"),
        defKeywords: a("class interface package enum @interface"),
        typeFirstDefinitions: !0,
        atoms: a("true false null"),
        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
        hooks: {
          "@": function(e) {
            return !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta")
          }
        },
        modeProps: {fold: ["brace", "import"]}
      }), m("text/x-csharp", {
        name: "clike",
        keywords: a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
        types: a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
        blockKeywords: a("catch class do else finally for foreach if struct switch try while"),
        defKeywords: a("class interface namespace struct var"),
        typeFirstDefinitions: !0,
        atoms: a("true false null"),
        hooks: {
          "@": function(e, t) {
            return e.eat('"') ? (t.tokenize = p, p(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
          }
        }
      }), m("text/x-scala", {
        name: "clike",
        keywords: a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
        types: a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
        multiLineStrings: !0,
        blockKeywords: a("catch class do else finally for forSome if match switch try while"),
        defKeywords: a("class def object package trait type val var"),
        atoms: a("true false null"),
        indentStatements: !1,
        indentSwitch: !1,
        isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
        hooks: {
          "@": function(e) {
            return e.eatWhile(/[\w\$_]/), "meta"
          }, '"': function(e, t) {
            return !!e.match('""') && (t.tokenize = g, t.tokenize(e, t))
          }, "'": function(e) {
            return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
          }, "=": function(e, n) {
            var r = n.context;
            return !("}" != r.type || !r.align || !e.eat(">")) && (n.context = new t(r.indented, r.column, r.type, r.info, null, r.prev), "operator")
          }
        },
        modeProps: {closeBrackets: {triples: '"'}}
      }), m("text/x-kotlin", {
        name: "clike",
        keywords: a("package as typealias class interface this super val var fun for is in This throw return break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend"),
        types: a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
        intendSwitch: !1,
        indentStatements: !1,
        multiLineStrings: !0,
        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
        blockKeywords: a("catch class do else finally for if where try while enum"),
        defKeywords: a("class val var object package interface fun"),
        atoms: a("true false null this"),
        hooks: {
          '"': function(e, t) {
            return t.tokenize = v(e.match('""')), t.tokenize(e, t)
          }
        },
        modeProps: {closeBrackets: {triples: '"'}}
      }), m(["x-shader/x-vertex", "x-shader/x-fragment"], {
        name: "clike",
        keywords: a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
        types: a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
        blockKeywords: a("for while do if else struct"),
        builtin: a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
        atoms: a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
        indentSwitch: !1,
        hooks: {"#": l},
        modeProps: {fold: ["brace", "include"]}
      }), m("text/x-nesc", {
        name: "clike",
        keywords: a(b + "as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
        types: a(w),
        blockKeywords: a("case do else for if switch while struct"),
        atoms: a("null true false"),
        hooks: {"#": l},
        modeProps: {fold: ["brace", "include"]}
      }), m("text/x-objectivec", {
        name: "clike",
        keywords: a(b + "inline restrict _Bool _Complex _Imaginary BOOL Class bycopy byref id IMP in inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),
        types: a(w),
        atoms: a("YES NO NULL NILL ON OFF true false"),
        hooks: {
          "@": function(e) {
            return e.eatWhile(/[\w\$]/), "keyword"
          }, "#": l, indent: function(e, t, n) {
            if ("statement" == t.type && /^@\w/.test(n)) {
              return t.indented
            }
          }
        },
        modeProps: {fold: "brace"}
      }), m("text/x-squirrel", {
        name: "clike",
        keywords: a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
        types: a(w),
        blockKeywords: a("case catch class else for foreach if switch try while"),
        defKeywords: a("function local class"),
        typeFirstDefinitions: !0,
        atoms: a("true false null"),
        hooks: {"#": l},
        modeProps: {fold: ["brace", "include"]}
      });
      var x = null;
      m("text/x-ceylon", {
        name: "clike",
        keywords: a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
        types: function(e) {
          var t = e.charAt(0);
          return t === t.toUpperCase() && t !== t.toLowerCase()
        },
        blockKeywords: a("case catch class dynamic else finally for function if interface module new object switch try while"),
        defKeywords: a("class dynamic function interface module object package value"),
        builtin: a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
        isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
        isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
        numberStart: /[\d#$]/,
        number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
        multiLineStrings: !0,
        typeFirstDefinitions: !0,
        atoms: a("true false null larger smaller equal empty finished"),
        indentSwitch: !1,
        styleDefs: !1,
        hooks: {
          "@": function(e) {
            return e.eatWhile(/[\w\$_]/), "meta"
          }, '"': function(e, t) {
            return t.tokenize = y(e.match('""') ? "triple" : "single"), t.tokenize(e, t)
          }, "`": function(e, t) {
            return !(!x || !e.match("`")) && (t.tokenize = x, x = null, t.tokenize(e, t))
          }, "'": function(e) {
            return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
          }, token: function(e, t, n) {
            if (("variable" == n || "variable-3" == n) && "." == t.prevToken) {
              return "variable-2"
            }
          }
        },
        modeProps: {fold: ["brace", "import"], closeBrackets: {triples: '"'}}
      })
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";
      e.defineMode("groovy", function(t) {
        function n(e) {
          for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) {
            t[n[r]] = !0;
          }
          return t
        }

        function r(e, t) {
          var n = e.next();
          if ('"' == n || "'" == n) {
            return i(n, e, t);
          }
          if (/[\[\]{}\(\),;\:\.]/.test(n)) {
            return d = n, null;
          }
          if (/\d/.test(n)) {
            return e.eatWhile(/[\w\.]/), e.eat(/eE/) && (e.eat(/\+\-/), e.eatWhile(/\d/)), "number";
          }
          if ("/" == n) {
            if (e.eat("*")) {
              return t.tokenize.push(a), a(e, t);
            }
            if (e.eat("/")) {
              return e.skipToEnd(), "comment";
            }
            if (s(t.lastToken, !1)) {
              return i(n, e, t)
            }
          }
          if ("-" == n && e.eat(">")) {
            return d = "->", null;
          }
          if (/[+\-*&%=<>!?|\/~]/.test(n)) {
            return e.eatWhile(/[+\-*&%=<>|~]/), "operator";
          }
          if (e.eatWhile(/[\w\$_]/), "@" == n) {
            return e.eatWhile(/[\w\$_\.]/), "meta";
          }
          if ("." == t.lastToken) {
            return "property";
          }
          if (e.eat(":")) {
            return d = "proplabel", "property";
          }
          var r = e.current();
          return m.propertyIsEnumerable(r) ? "atom" : f.propertyIsEnumerable(r) ? (p.propertyIsEnumerable(r) ? d = "newstatement" : h.propertyIsEnumerable(r) && (d = "standalone"), "keyword") : "variable"
        }

        function i(e, t, n) {
          function r(t, n) {
            for (var r, a = !1, s = !i; null != (r = t.next());) {
              if (r == e && !a) {
                if (!i) {
                  break;
                }
                if (t.match(e + e)) {
                  s = !0;
                  break
                }
              }
              if ('"' == e && "$" == r && !a && t.eat("{")) {
                return n.tokenize.push(o()), "string";
              }
              a = !a && "\\" == r
            }
            return s && n.tokenize.pop(), "string"
          }

          var i = !1;
          if ("/" != e && t.eat(e)) {
            if (!t.eat(e)) {
              return "string";
            }
            i = !0
          }
          return n.tokenize.push(r), r(t, n)
        }

        function o() {
          function e(e, n) {
            if ("}" == e.peek()) {
              if (0 == --t) {
                return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](e, n)
              }
            } else {
              "{" == e.peek() && t++;
            }
            return r(e, n)
          }

          var t = 1;
          return e.isBase = !0, e
        }

        function a(e, t) {
          for (var n, r = !1; n = e.next();) {
            if ("/" == n && r) {
              t.tokenize.pop();
              break
            }
            r = "*" == n
          }
          return "comment"
        }

        function s(e, t) {
          return !e || "operator" == e || "->" == e || /[\.\[\{\(,;:]/.test(e) || "newstatement" == e || "keyword" == e || "proplabel" == e || "standalone" == e && !t
        }

        function l(e, t, n, r, i) {
          this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = i
        }

        function u(e, t, n) {
          return e.context = new l(e.indented, t, n, null, e.context)
        }

        function c(e) {
          var t = e.context.type;
          return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev
        }

        var d,
            f = n("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws transient try void volatile while"),
            p = n("catch class do else finally for if switch try while enum interface def"),
            h = n("return break continue"), m = n("null true false this");
        return r.isBase = !0, {
          startState: function(e) {
            return {
              tokenize: [r],
              context: new l((e || 0) - t.indentUnit, 0, "top", !1),
              indented: 0,
              startOfLine: !0,
              lastToken: null
            }
          }, token: function(e, t) {
            var n = t.context;
            if (e.sol() && (null == n.align && (n.align = !1), t.indented = e.indentation(), t.startOfLine = !0, "statement" != n.type || s(t.lastToken, !0) || (c(t), n = t.context)), e.eatSpace()) {
              return null;
            }
            d = null;
            var r = t.tokenize[t.tokenize.length - 1](e, t);
            if ("comment" == r) {
              return r;
            }
            if (null == n.align && (n.align = !0), ";" != d && ":" != d || "statement" != n.type) {
              if ("->" == d && "statement" == n.type && "}" == n.prev.type) {
                c(t), t.context.align = !1;
              } else if ("{" == d) {
                u(t, e.column(), "}");
              } else if ("[" == d) {
                u(t, e.column(), "]");
              } else if ("(" == d) {
                u(t, e.column(), ")");
              } else if ("}" == d) {
                for (; "statement" == n.type;) {
                  n = c(t);
                }
                for ("}" == n.type && (n = c(t)); "statement" == n.type;) {
                  n = c(t)
                }
              } else {
                d == n.type ? c(t) : ("}" == n.type || "top" == n.type || "statement" == n.type && "newstatement" == d) && u(t, e.column(), "statement");
              }
            } else {
              c(t);
            }
            return t.startOfLine = !1, t.lastToken = d || r, r
          }, indent: function(n, r) {
            if (!n.tokenize[n.tokenize.length - 1].isBase) {
              return e.Pass;
            }
            var i = r && r.charAt(0), o = n.context;
            "statement" != o.type || s(n.lastToken, !0) || (o = o.prev);
            var a = i == o.type;
            return "statement" == o.type ? o.indented + ("{" == i ? 0 : t.indentUnit) : o.align ? o.column + (a ? 0 : 1) : o.indented + (a ? 0 : t.indentUnit)
          }, electricChars: "{}", closeBrackets: {triples: "'\""}, fold: "brace"
        }
      }), e.defineMIME("text/x-groovy", "groovy")
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0), n(7), n(6), n(5)) : (i = [n(0), n(7), n(6), n(5)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";

      function t(e, t, n) {
        var r = e.current(), i = r.search(t);
        return i > -1 ? e.backUp(r.length - i) : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)), n
      }

      function n(e) {
        var t = l[e];
        return t || (l[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
      }

      function r(e, t) {
        var r = e.match(n(t));
        return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : ""
      }

      function i(e, t) {
        return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i")
      }

      function o(e, t) {
        for (var n in e) {
          for (var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1; o >= 0; o--) {
            r.unshift(i[o])
          }
        }
      }

      function a(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (!i[0] || i[1].test(r(t, i[0]))) {
            return i[2]
          }
        }
      }

      var s = {
        script: [["lang", /(javascript|babel)/i, "javascript"], ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"], ["type", /./, "text/plain"], [null, null, "javascript"]],
        style: [["lang", /^css$/i, "css"], ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"], ["type", /./, "text/plain"], [null, null, "css"]]
      }, l = {};
      e.defineMode("htmlmixed", function(n, r) {
        function l(r, o) {
          var s, d = u.token(r, o.htmlState), f = /\btag\b/.test(d);
          if (f && !/[<>\s\/]/.test(r.current()) && (s = o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) && c.hasOwnProperty(s)) {
            o.inTag = s + " ";
          } else if (o.inTag && f && />$/.test(r.current())) {
            var p = /^([\S]+) (.*)/.exec(o.inTag);
            o.inTag = null;
            var h = ">" == r.current() && a(c[p[1]], p[2]), m = e.getMode(n, h),
                g = i(p[1], !0), v = i(p[1], !1);
            o.token = function(e, n) {
              return e.match(g, !1) ? (n.token = l, n.localState = n.localMode = null, null) : t(e, v, n.localMode.token(e, n.localState))
            }, o.localMode = m, o.localState = e.startState(m, u.indent(o.htmlState, ""))
          } else {
            o.inTag && (o.inTag += r.current(), r.eol() && (o.inTag += " "));
          }
          return d
        }

        var u = e.getMode(n, {
          name: "xml",
          htmlMode: !0,
          multilineTagIndentFactor: r.multilineTagIndentFactor,
          multilineTagIndentPastTag: r.multilineTagIndentPastTag
        }), c = {}, d = r && r.tags, f = r && r.scriptTypes;
        if (o(s, c), d && o(d, c), f) {
          for (var p = f.length - 1; p >= 0; p--) {
            c.script.unshift(["type", f[p].matches, f[p].mode]);
          }
        }
        return {
          startState: function() {
            return {
              token: l,
              inTag: null,
              localMode: null,
              localState: null,
              htmlState: e.startState(u)
            }
          }, copyState: function(t) {
            var n;
            return t.localState && (n = e.copyState(t.localMode, t.localState)), {
              token: t.token,
              inTag: t.inTag,
              localMode: t.localMode,
              localState: n,
              htmlState: e.copyState(u, t.htmlState)
            }
          }, token: function(e, t) {
            return t.token(e, t)
          }, indent: function(t, n) {
            return !t.localMode || /^\s*<\//.test(n) ? u.indent(t.htmlState, n) : t.localMode.indent ? t.localMode.indent(t.localState, n) : e.Pass
          }, innerMode: function(e) {
            return {state: e.localState || e.htmlState, mode: e.localMode || u}
          }
        }
      }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";
      e.defineMode("ruby", function(e) {
        function t(e) {
          for (var t = {}, n = 0, r = e.length; n < r; ++n) {
            t[e[n]] = !0;
          }
          return t
        }

        function n(e, t, n) {
          return n.tokenize.push(e), e(t, n)
        }

        function r(e, t) {
          if (e.sol() && e.match("=begin") && e.eol()) {
            return t.tokenize.push(u), "comment";
          }
          if (e.eatSpace()) {
            return null;
          }
          var r, o = e.next();
          if ("`" == o || "'" == o || '"' == o) {
            return n(s(o, "string", '"' == o || "`" == o), e, t);
          }
          if ("/" == o) {
            return i(e) ? n(s(o, "string-2", !0), e, t) : "operator";
          }
          if ("%" == o) {
            var a = "string", d = !0;
            e.eat("s") ? a = "atom" : e.eat(/[WQ]/) ? a = "string" : e.eat(/[r]/) ? a = "string-2" : e.eat(/[wxq]/) && (a = "string", d = !1);
            var f = e.eat(/[^\w\s=]/);
            return f ? (h.propertyIsEnumerable(f) && (f = h[f]), n(s(f, a, d, !0), e, t)) : "operator"
          }
          if ("#" == o) {
            return e.skipToEnd(), "comment";
          }
          if ("<" == o && (r = e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) {
            return n(l(r[1]), e, t);
          }
          if ("0" == o) {
            return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) : e.eat("b") ? e.eatWhile(/[01]/) : e.eatWhile(/[0-7]/), "number";
          }
          if (/\d/.test(o)) {
            return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
          }
          if ("?" == o) {
            for (; e.match(/^\\[CM]-/);) {
              ;
            }
            return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string"
          }
          if (":" == o) {
            return e.eat("'") ? n(s("'", "atom", !1), e, t) : e.eat('"') ? n(s('"', "atom", !0), e, t) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" : e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), e.eat(/[\?\!\=]/), "atom") : "operator";
          }
          if ("@" == o && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) {
            return e.eat("@"), e.eatWhile(/[\w\xa1-\uffff]/), "variable-2";
          }
          if ("$" == o) {
            return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(), "variable-3";
          }
          if (/[a-zA-Z_\xa1-\uffff]/.test(o)) {
            return e.eatWhile(/[\w\xa1-\uffff]/), e.eat(/[\?\!]/), e.eat(":") ? "atom" : "ident";
          }
          if ("|" != o || !t.varList && "{" != t.lastTok && "do" != t.lastTok) {
            if (/[\(\)\[\]{}\\;]/.test(o)) {
              return c = o, null;
            }
            if ("-" == o && e.eat(">")) {
              return "arrow";
            }
            if (/[=+\-\/*:\.^%<>~|]/.test(o)) {
              var p = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
              return "." != o || p || (c = "."), "operator"
            }
            return null
          }
          return c = "|", null
        }

        function i(e) {
          for (var t, n = e.pos, r = 0, i = !1, o = !1; null != (t = e.next());) {
            if (o) {
              o = !1;
            } else {
              if ("[{(".indexOf(t) > -1) {
                r++;
              } else if ("]})".indexOf(t) > -1) {
                if (--r < 0) {
                  break
                }
              } else if ("/" == t && 0 == r) {
                i = !0;
                break
              }
              o = "\\" == t
            }
          }
          return e.backUp(e.pos - n), i
        }

        function o(e) {
          return e || (e = 1), function(t, n) {
            if ("}" == t.peek()) {
              if (1 == e) {
                return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n);
              }
              n.tokenize[n.tokenize.length - 1] = o(e - 1)
            } else {
              "{" == t.peek() && (n.tokenize[n.tokenize.length - 1] = o(e + 1));
            }
            return r(t, n)
          }
        }

        function a() {
          var e = !1;
          return function(t, n) {
            return e ? (n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n)) : (e = !0, r(t, n))
          }
        }

        function s(e, t, n, r) {
          return function(i, s) {
            var l, u = !1;
            for ("read-quoted-paused" === s.context.type && (s.context = s.context.prev, i.eat("}")); null != (l = i.next());) {
              if (l == e && (r || !u)) {
                s.tokenize.pop();
                break
              }
              if (n && "#" == l && !u) {
                if (i.eat("{")) {
                  "}" == e && (s.context = {
                    prev: s.context,
                    type: "read-quoted-paused"
                  }), s.tokenize.push(o());
                  break
                }
                if (/[@\$]/.test(i.peek())) {
                  s.tokenize.push(a());
                  break
                }
              }
              u = !u && "\\" == l
            }
            return t
          }
        }

        function l(e) {
          return function(t, n) {
            return t.match(e) ? n.tokenize.pop() : t.skipToEnd(), "string"
          }
        }

        function u(e, t) {
          return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), "comment"
        }

        var c,
            d = t(["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"]),
            f = t(["def", "class", "case", "for", "while", "until", "module", "then", "catch", "loop", "proc", "begin"]),
            p = t(["end", "until"]), h = {"[": "]", "{": "}", "(": ")"};
        return {
          startState: function() {
            return {
              tokenize: [r],
              indented: 0,
              context: {type: "top", indented: -e.indentUnit},
              continuedLine: !1,
              lastTok: null,
              varList: !1
            }
          },
          token: function(e, t) {
            c = null, e.sol() && (t.indented = e.indentation());
            var n, r = t.tokenize[t.tokenize.length - 1](e, t), i = c;
            if ("ident" == r) {
              var o = e.current();
              r = "." == t.lastTok ? "property" : d.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(o) ? "tag" : "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" : "variable", "keyword" == r && (i = o, f.propertyIsEnumerable(o) ? n = "indent" : p.propertyIsEnumerable(o) ? n = "dedent" : "if" != o && "unless" != o || e.column() != e.indentation() ? "do" == o && t.context.indented < t.indented && (n = "indent") : n = "indent")
            }
            return (c || r && "comment" != r) && (t.lastTok = i), "|" == c && (t.varList = !t.varList), "indent" == n || /[\(\[\{]/.test(c) ? t.context = {
              prev: t.context,
              type: c || r,
              indented: t.indented
            } : ("dedent" == n || /[\)\]\}]/.test(c)) && t.context.prev && (t.context = t.context.prev), e.eol() && (t.continuedLine = "\\" == c || "operator" == r), r
          },
          indent: function(t, n) {
            if (t.tokenize[t.tokenize.length - 1] != r) {
              return 0;
            }
            var i = n && n.charAt(0), o = t.context,
                a = o.type == h[i] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(n);
            return o.indented + (a ? 0 : e.indentUnit) + (t.continuedLine ? e.indentUnit : 0)
          },
          electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
          lineComment: "#"
        }
      }), e.defineMIME("text/x-ruby", "ruby")
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";
      e.defineMode("shell", function() {
        function e(e, t) {
          for (var n = t.split(" "), r = 0; r < n.length; r++) {
            i[n[r]] = e
          }
        }

        function t(e, t) {
          if (e.eatSpace()) {
            return null;
          }
          var a = e.sol(), s = e.next();
          if ("\\" === s) {
            return e.next(), null;
          }
          if ("'" === s || '"' === s || "`" === s) {
            return t.tokens.unshift(n(s, "`" === s ? "quote" : "string")), r(e, t);
          }
          if ("#" === s) {
            return a && e.eat("!") ? (e.skipToEnd(), "meta") : (e.skipToEnd(), "comment");
          }
          if ("$" === s) {
            return t.tokens.unshift(o), r(e, t);
          }
          if ("+" === s || "=" === s) {
            return "operator";
          }
          if ("-" === s) {
            return e.eat("-"), e.eatWhile(/\w/), "attribute";
          }
          if (/\d/.test(s) && (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek()))) {
            return "number";
          }
          e.eatWhile(/[\w-]/);
          var l = e.current();
          return "=" === e.peek() && /\w+/.test(l) ? "def" : i.hasOwnProperty(l) ? i[l] : null
        }

        function n(e, t) {
          var i = "(" == e ? ")" : e;
          return function(a, s) {
            for (var l, u = !1, c = !1; null != (l = a.next());) {
              if (l === i && !c) {
                u = !0;
                break
              }
              if ("$" === l && !c && "'" !== e) {
                c = !0, a.backUp(1), s.tokens.unshift(o);
                break
              }
              if (!c && "(" === l && "(" === e) {
                return s.tokens.unshift(n(e, t)), r(a, s);
              }
              c = !c && "\\" === l
            }
            return !u && c || s.tokens.shift(), t
          }
        }

        function r(e, n) {
          return (n.tokens[0] || t)(e, n)
        }

        var i = {};
        e("atom", "true false"), e("keyword", "if then do else elif while until for in esac fi fin fil done exit set unset export function"), e("builtin", "ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");
        var o = function(e, t) {
          t.tokens.length > 1 && e.eat("$");
          var i = e.next(), o = /\w/;
          return "{" === i && (o = /[^}]/), /['"(]/.test(i) ? (t.tokens[0] = n(i, "(" == i ? "quote" : "string"), r(e, t)) : (/\d/.test(i) || (e.eatWhile(o), e.eat("}")), t.tokens.shift(), "def")
        };
        return {
          startState: function() {
            return {tokens: []}
          }, token: function(e, t) {
            return r(e, t)
          }, closeBrackets: "()[]{}''\"\"``", lineComment: "#", fold: "brace"
        }
      }), e.defineMIME("text/x-sh", "shell")
    })
  }).call(t, n(1)(e))
}, function(e, t, n) {
  (function(e) {
    var r, i, o,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    !function(s) {
      "object" == a(t) && "object" == a(e) ? s(n(0)) : (i = [n(0)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o))
    }(function(e) {
      "use strict";

      function t(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          t[e[n]] = !0;
        }
        return t
      }

      function n(e, t, n) {
        if (e.sol() && (t.indented = e.indentation()), e.eatSpace()) {
          return null;
        }
        var r = e.peek();
        if ("/" == r) {
          if (e.match("//")) {
            return e.skipToEnd(), "comment";
          }
          if (e.match("/*")) {
            return t.tokenize.push(o), o(e, t)
          }
        }
        if (e.match(x)) {
          return "builtin";
        }
        if (e.match(k)) {
          return "attribute";
        }
        if (e.match(m)) {
          return "number";
        }
        if (e.match(g)) {
          return "number";
        }
        if (e.match(v)) {
          return "number";
        }
        if (e.match(y)) {
          return "number";
        }
        if (e.match(w)) {
          return "property";
        }
        if (p.indexOf(r) > -1) {
          return e.next(), "operator";
        }
        if (h.indexOf(r) > -1) {
          return e.next(), e.match(".."), "punctuation";
        }
        if ('"' == r || "'" == r) {
          e.next();
          var a = i(r);
          return t.tokenize.push(a), a(e, t)
        }
        if (e.match(b)) {
          var s = e.current();
          return f.hasOwnProperty(s) ? "variable-2" : d.hasOwnProperty(s) ? "atom" : u.hasOwnProperty(s) ? (c.hasOwnProperty(s) && (t.prev = "define"), "keyword") : "define" == n ? "def" : "variable"
        }
        return e.next(), null
      }

      function r() {
        var e = 0;
        return function(t, r, i) {
          var o = n(t, r, i);
          if ("punctuation" == o) {
            if ("(" == t.current()) {
              ++e;
            } else if (")" == t.current()) {
              if (0 == e) {
                return t.backUp(1), r.tokenize.pop(), r.tokenize[r.tokenize.length - 1](t, r);
              }
              --e
            }
          }
          return o
        }
      }

      function i(e) {
        return function(t, n) {
          for (var i, o = !1; i = t.next();) {
            if (o) {
              if ("(" == i) {
                return n.tokenize.push(r()), "string";
              }
              o = !1
            } else {
              if (i == e) {
                break;
              }
              o = "\\" == i
            }
          }
          return n.tokenize.pop(), "string"
        }
      }

      function o(e, t) {
        return e.match(/^(?:[^*]|\*(?!\/))*/), e.match("*/") && t.tokenize.pop(), "comment"
      }

      function a(e, t, n) {
        this.prev = e, this.align = t, this.indented = n
      }

      function s(e, t) {
        var n = t.match(/^\s*($|\/[\/\*])/, !1) ? null : t.column() + 1;
        e.context = new a(e.context, n, e.indented)
      }

      function l(e) {
        e.context && (e.indented = e.context.indented, e.context = e.context.prev)
      }

      var u = t(["_", "var", "let", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "open", "public", "internal", "fileprivate", "private", "deinit", "init", "new", "override", "self", "subscript", "super", "convenience", "dynamic", "final", "indirect", "lazy", "required", "static", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "as", "is", "break", "case", "continue", "default", "else", "fallthrough", "for", "guard", "if", "in", "repeat", "switch", "where", "while", "defer", "return", "inout", "mutating", "nonmutating", "catch", "do", "rethrows", "throw", "throws", "try", "didSet", "get", "set", "willSet", "assignment", "associativity", "infix", "left", "none", "operator", "postfix", "precedence", "precedencegroup", "prefix", "right", "Any", "AnyObject", "Type", "dynamicType", "Self", "Protocol", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__"]),
          c = t(["var", "let", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for"]),
          d = t(["true", "false", "nil", "self", "super", "_"]),
          f = t(["Array", "Bool", "Character", "Dictionary", "Double", "Float", "Int", "Int8", "Int16", "Int32", "Int64", "Never", "Optional", "Set", "String", "UInt8", "UInt16", "UInt32", "UInt64", "Void"]),
          p = "+-/*%=|&<>~^?!", h = ":;,.(){}[]", m = /^\-?0b[01][01_]*/,
          g = /^\-?0o[0-7][0-7_]*/,
          v = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,
          y = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,
          b = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,
          w = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, x = /^\#[A-Za-z]+/,
          k = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
      e.defineMode("swift", function(e) {
        return {
          startState: function() {
            return {prev: null, context: null, indented: 0, tokenize: []}
          },
          token: function(e, t) {
            var r = t.prev;
            t.prev = null;
            var i = t.tokenize[t.tokenize.length - 1] || n, o = i(e, t, r);
            if (o && "comment" != o ? t.prev || (t.prev = o) : t.prev = r, "punctuation" == o) {
              var a = /[\(\[\{]|([\]\)\}])/.exec(e.current());
              a && (a[1] ? l : s)(t, e)
            }
            return o
          },
          indent: function(t, n) {
            var r = t.context;
            if (!r) {
              return 0;
            }
            var i = /^[\]\}\)]/.test(n);
            return null != r.align ? r.align - (i ? 1 : 0) : r.indented + (i ? 0 : e.indentUnit)
          },
          electricInput: /^\s*[\)\}\]]$/,
          lineComment: "//",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          fold: "brace",
          closeBrackets: "()[]{}''\"\"``"
        }
      }), e.defineMIME("text/x-swift", "swift")
    })
  }).call(t, n(1)(e))
}, function(e, t) {
  e.exports = function() {
    throw new Error("define cannot be used indirect")
  }
}]);
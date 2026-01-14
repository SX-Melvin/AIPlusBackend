csui.define("csui/lib/ally", [], function () {
  var r,
    y,
    v,
    m = (function () {
      function n(e, a, c) {
        function o(s, l) {
          if (!a[s]) {
            if (!e[s]) {
              var g = typeof require == "function" && require;
              if (!l && g) return g(s, !0);
              if (t) return t(s, !0);
              var f = new Error("Cannot find module '" + s + "'");
              throw ((f.code = "MODULE_NOT_FOUND"), f);
            }
            var u = (a[s] = { exports: {} });
            e[s][0].call(
              u.exports,
              function (p) {
                var x = e[s][1][p];
                return o(x || p);
              },
              u,
              u.exports,
              n,
              e,
              a,
              c
            );
          }
          return a[s].exports;
        }
        for (
          var t = typeof require == "function" && require, i = 0;
          i < c.length;
          i++
        )
          o(c[i]);
        return o;
      }
      return n;
    })()(
      {
        1: [
          function (n, e, a) {
            "use strict";
            var c = (function () {
                function I(w, P) {
                  for (var O = 0; O < P.length; O++) {
                    var D = P[O];
                    (D.enumerable = D.enumerable || !1),
                      (D.configurable = !0),
                      "value" in D && (D.writable = !0),
                      Object.defineProperty(w, D.key, D);
                  }
                }
                return function (w, P, O) {
                  return P && I(w.prototype, P), O && I(w, O), w;
                };
              })(),
              o =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (I) {
                      return typeof I;
                    }
                  : function (I) {
                      return I &&
                        typeof Symbol == "function" &&
                        I.constructor === Symbol &&
                        I !== Symbol.prototype
                        ? "symbol"
                        : typeof I;
                    };
            function t(I, w) {
              if (!(I instanceof w))
                throw new TypeError("Cannot call a class as a function");
            }
            function i(I) {
              return I &&
                (typeof I > "u" ? "undefined" : o(I)) === "object" &&
                "default" in I
                ? I.default
                : I;
            }
            var s = i(n("platform")),
              l = i(n("css.escape")),
              g = function (w) {
                return w
                  ? w.nodeType === Node.DOCUMENT_NODE
                    ? w
                    : w.ownerDocument || document
                  : document;
              },
              f = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = g(P),
                  D = void 0;
                try {
                  D = O.activeElement;
                } catch {}
                return (
                  (!D || !D.nodeType) && (D = O.body || O.documentElement), D
                );
              },
              u = function (w) {
                if (!w) return [];
                if (Array.isArray(w)) return w;
                if (w.nodeType !== void 0) return [w];
                if (
                  (typeof w == "string" && (w = document.querySelectorAll(w)),
                  w.length !== void 0)
                )
                  return [].slice.call(w, 0);
                throw new TypeError("unexpected input " + String(w));
              },
              p = function (w) {
                var P = w.context,
                  O = w.label,
                  D = O === void 0 ? "context-to-element" : O,
                  H = w.resolveDocument,
                  ie = w.defaultToDocument,
                  Y = u(P)[0];
                if (
                  (H &&
                    Y &&
                    Y.nodeType === Node.DOCUMENT_NODE &&
                    (Y = Y.documentElement),
                  !Y && ie)
                )
                  return document.documentElement;
                if (!Y)
                  throw new TypeError(D + " requires valid options.context");
                if (
                  Y.nodeType !== Node.ELEMENT_NODE &&
                  Y.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
                )
                  throw new TypeError(
                    D + " requires options.context to be an Element"
                  );
                return Y;
              },
              x = function () {
                for (
                  var w =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    P = w.context,
                    O = p({ label: "get/shadow-host", context: P }),
                    D = null;
                  O;

                )
                  (D = O), (O = O.parentNode);
                return D.nodeType === D.DOCUMENT_FRAGMENT_NODE && D.host
                  ? D.host
                  : null;
              },
              S = function (w) {
                var P = p({
                  label: "is/shadowed",
                  resolveDocument: !0,
                  context: w,
                });
                return !!x({ context: P });
              },
              T = function () {
                for (
                  var w =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    P = w.context,
                    O = [],
                    D = p({ label: "get/shadow-host-parents", context: P });
                  D && ((D = x({ context: D })), !!D);

                )
                  O.push(D);
                return O;
              };
            function k() {
              for (var I = [document.activeElement]; I[0] && I[0].shadowRoot; )
                I.unshift(I[0].shadowRoot.activeElement);
              return I;
            }
            function A() {
              var I = T({ context: document.activeElement });
              return [document.activeElement].concat(I);
            }
            var M = function () {
                return (
                  document.activeElement === null && document.body.focus(),
                  S(document.activeElement) ? A() : k()
                );
              },
              N = function () {
                for (
                  var w =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                    P = w.context,
                    O = [],
                    D = p({ label: "get/parents", context: P });
                  D;

                )
                  O.push(D),
                    (D = D.parentNode),
                    D && D.nodeType !== Node.ELEMENT_NODE && (D = null);
                return O;
              },
              R = [
                "matches",
                "webkitMatchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
              ],
              K = null;
            function G(I) {
              R.some(function (w) {
                return I[w] ? ((K = w), !0) : !1;
              });
            }
            function $(I, w) {
              return K || G(I), I[K](w);
            }
            var z = JSON.parse(JSON.stringify(s)),
              ue = z.os.family || "",
              J = ue === "Android",
              ae = ue.slice(0, 7) === "Windows",
              q = ue === "OS X",
              Q = ue === "iOS",
              ne = z.layout === "Blink",
              oe = z.layout === "Gecko",
              d = z.layout === "Trident",
              h = z.layout === "EdgeHTML",
              b = z.layout === "WebKit",
              _ = parseFloat(z.version),
              C = Math.floor(_);
            (z.majorVersion = C),
              (z.is = {
                ANDROID: J,
                WINDOWS: ae,
                OSX: q,
                IOS: Q,
                BLINK: ne,
                GECKO: oe,
                TRIDENT: d,
                EDGE: h,
                WEBKIT: b,
                IE9: d && C === 9,
                IE10: d && C === 10,
                IE11: d && C === 11,
              });
            function E() {
              var I = {
                  activeElement: document.activeElement,
                  windowScrollTop: window.scrollTop,
                  windowScrollLeft: window.scrollLeft,
                  bodyScrollTop: document.body.scrollTop,
                  bodyScrollLeft: document.body.scrollLeft,
                },
                w = document.createElement("iframe");
              w.setAttribute(
                "style",
                "position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;"
              ),
                w.setAttribute("aria-live", "off"),
                w.setAttribute("aria-busy", "true"),
                w.setAttribute("aria-hidden", "true"),
                document.body.appendChild(w);
              var P = w.contentWindow,
                O = P.document;
              O.open(), O.close();
              var D = O.createElement("div");
              return (
                O.body.appendChild(D),
                (I.iframe = w),
                (I.wrapper = D),
                (I.window = P),
                (I.document = O),
                I
              );
            }
            function F(I, w) {
              I.wrapper.innerHTML = "";
              var P =
                  typeof w.element == "string"
                    ? I.document.createElement(w.element)
                    : w.element(I.wrapper, I.document),
                O = w.mutate && w.mutate(P, I.wrapper, I.document);
              return (
                !O && O !== !1 && (O = P),
                !P.parentNode && I.wrapper.appendChild(P),
                O && O.focus && O.focus(),
                w.validate
                  ? w.validate(P, O, I.document)
                  : I.document.activeElement === O
              );
            }
            function L(I) {
              I.activeElement === document.body
                ? (document.activeElement &&
                    document.activeElement.blur &&
                    document.activeElement.blur(),
                  z.is.IE10 && document.body.focus())
                : I.activeElement &&
                  I.activeElement.focus &&
                  I.activeElement.focus(),
                document.body.removeChild(I.iframe),
                (window.scrollTop = I.windowScrollTop),
                (window.scrollLeft = I.windowScrollLeft),
                (document.body.scrollTop = I.bodyScrollTop),
                (document.body.scrollLeft = I.bodyScrollLeft);
            }
            var j = function (w) {
                var P = E(),
                  O = {};
                return (
                  Object.keys(w).map(function (D) {
                    O[D] = F(P, w[D]);
                  }),
                  L(P),
                  O
                );
              },
              V = "1.4.1";
            function W(I) {
              var w = void 0;
              try {
                (w = window.localStorage && window.localStorage.getItem(I)),
                  (w = w ? JSON.parse(w) : {});
              } catch {
                w = {};
              }
              return w;
            }
            function Z(I, w) {
              if (!document.hasFocus()) {
                try {
                  window.localStorage && window.localStorage.removeItem(I);
                } catch {}
                return;
              }
              try {
                window.localStorage &&
                  window.localStorage.setItem(I, JSON.stringify(w));
              } catch {}
            }
            var U = (typeof window < "u" && window.navigator.userAgent) || "",
              te = "ally-supports-cache",
              re = W(te);
            (re.userAgent !== U || re.version !== V) && (re = {}),
              (re.userAgent = U),
              (re.version = V);
            var B = {
                get: function () {
                  return re;
                },
                set: function (w) {
                  Object.keys(w).forEach(function (P) {
                    re[P] = w[P];
                  }),
                    (re.time = new Date().toISOString()),
                    Z(te, re);
                },
              },
              de = function () {
                var w = void 0;
                try {
                  document.querySelector("html >>> :first-child"), (w = ">>>");
                } catch {
                  try {
                    document.querySelector("html /deep/ :first-child"),
                      (w = "/deep/");
                  } catch {
                    w = "";
                  }
                }
                return w;
              },
              le =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              ge = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="image-map-tabindex-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' +
                      le +
                      '">'),
                    w.querySelector("area")
                  );
                },
              },
              fe = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="image-map-tabindex-test"><area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" alt="" src="' +
                      le +
                      '">'),
                    !1
                  );
                },
                validate: function (w, P, O) {
                  if (z.is.GECKO) return !0;
                  var D = w.querySelector("area");
                  return D.focus(), O.activeElement === D;
                },
              },
              se = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="image-map-area-href-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-area-href-test" alt="" src="' +
                      le +
                      '">'),
                    w.querySelector("area")
                  );
                },
                validate: function (w, P, O) {
                  return z.is.GECKO ? !0 : O.activeElement === P;
                },
              },
              Te = {
                name: "can-focus-audio-without-controls",
                element: "audio",
                mutate: function (w) {
                  try {
                    w.setAttribute("src", le);
                  } catch {}
                },
              },
              pe =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
              X = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#broken-image-map-test" alt="" src="' +
                      pe +
                      '">'),
                    w.querySelector("area")
                  );
                },
              },
              he = {
                element: "div",
                mutate: function (w) {
                  return (
                    w.setAttribute("tabindex", "-1"),
                    w.setAttribute(
                      "style",
                      "display: -webkit-flex; display: -ms-flexbox; display: flex;"
                    ),
                    (w.innerHTML =
                      '<span style="display: block;">hello</span>'),
                    w.querySelector("span")
                  );
                },
              },
              Ce = {
                element: "fieldset",
                mutate: function (w) {
                  w.setAttribute("tabindex", 0),
                    w.setAttribute("disabled", "disabled");
                },
              },
              ee = {
                element: "fieldset",
                mutate: function (w) {
                  w.innerHTML = "<legend>legend</legend><p>content</p>";
                },
              },
              at = {
                element: "span",
                mutate: function (w) {
                  w.setAttribute(
                    "style",
                    "display: -webkit-flex; display: -ms-flexbox; display: flex;"
                  ),
                    (w.innerHTML =
                      '<span style="display: block;">hello</span>');
                },
              },
              ct = {
                element: "form",
                mutate: function (w) {
                  w.setAttribute("tabindex", 0),
                    w.setAttribute("disabled", "disabled");
                },
              },
              ut = {
                element: "a",
                mutate: function (w) {
                  return (
                    (w.href = "#void"),
                    (w.innerHTML = '<img ismap src="' + le + '" alt="">'),
                    w.querySelector("img")
                  );
                },
              },
              dt = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' +
                      le +
                      '">'),
                    w.querySelector("img")
                  );
                },
              },
              Xe = {
                element: function (w, P) {
                  var O = P.createElement("iframe");
                  w.appendChild(O);
                  var D = O.contentWindow.document;
                  return D.open(), D.close(), O;
                },
                mutate: function (w) {
                  w.style.visibility = "hidden";
                  var P = w.contentWindow.document,
                    O = P.createElement("input");
                  return P.body.appendChild(O), O;
                },
                validate: function (w) {
                  var P = w.contentWindow.document,
                    O = P.querySelector("input");
                  return P.activeElement === O;
                },
              },
              ft = !z.is.WEBKIT,
              ht = function () {
                return ft;
              },
              we = {
                element: "div",
                mutate: function (w) {
                  w.setAttribute("tabindex", "invalid-value");
                },
              },
              xe = {
                element: "label",
                mutate: function (w) {
                  w.setAttribute("tabindex", "-1");
                },
                validate: function (w, P, O) {
                  var D = w.offsetHeight;
                  return w.focus(), O.activeElement === w;
                },
              },
              be =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJzdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==",
              me = {
                element: "object",
                mutate: function (w) {
                  w.setAttribute("type", "image/svg+xml"),
                    w.setAttribute("data", be),
                    w.setAttribute("width", "200"),
                    w.setAttribute("height", "50"),
                    (w.style.visibility = "hidden");
                },
              },
              ke = {
                name: "can-focus-object-svg",
                element: "object",
                mutate: function (w) {
                  w.setAttribute("type", "image/svg+xml"),
                    w.setAttribute("data", be),
                    w.setAttribute("width", "200"),
                    w.setAttribute("height", "50");
                },
                validate: function (w, P, O) {
                  return z.is.GECKO ? !0 : O.activeElement === w;
                },
              },
              jt = !z.is.IE9,
              qt = function () {
                return jt;
              },
              Ht = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#focus-redirect-img-usemap" alt="" src="' +
                      le +
                      '">'),
                    w.querySelector("img")
                  );
                },
                validate: function (w, P, O) {
                  var D = w.querySelector("area");
                  return O.activeElement === D;
                },
              },
              Wt = {
                element: "fieldset",
                mutate: function (w) {
                  return (
                    (w.innerHTML =
                      '<legend>legend</legend><input tabindex="-1"><input tabindex="0">'),
                    !1
                  );
                },
                validate: function (w, P, O) {
                  var D = w.querySelector('input[tabindex="-1"]'),
                    H = w.querySelector('input[tabindex="0"]');
                  return (
                    w.focus(),
                    w.querySelector("legend").focus(),
                    (O.activeElement === D && "focusable") ||
                      (O.activeElement === H && "tabbable") ||
                      ""
                  );
                },
              },
              zt = {
                element: "div",
                mutate: function (w) {
                  return (
                    w.setAttribute(
                      "style",
                      "width: 100px; height: 50px; overflow: auto;"
                    ),
                    (w.innerHTML =
                      '<div style="width: 500px; height: 40px;">scrollable content</div>'),
                    w.querySelector("div")
                  );
                },
              },
              Kt = {
                element: "div",
                mutate: function (w) {
                  w.setAttribute("style", "width: 100px; height: 50px;"),
                    (w.innerHTML =
                      '<div style="width: 500px; height: 40px;">scrollable content</div>');
                },
              },
              Ut = {
                element: "div",
                mutate: function (w) {
                  w.setAttribute(
                    "style",
                    "width: 100px; height: 50px; overflow: auto;"
                  ),
                    (w.innerHTML =
                      '<div style="width: 500px; height: 40px;">scrollable content</div>');
                },
              },
              $t = {
                element: "details",
                mutate: function (w) {
                  return (
                    (w.innerHTML = "<summary>foo</summary><p>content</p>"),
                    w.firstElementChild
                  );
                },
              };
            function Gt() {
              var I = document.createElement("div");
              return (
                (I.innerHTML = `<svg><foreignObject width="30" height="30">
      <input type="text"/>
  </foreignObject></svg>`),
                I.firstChild.firstChild
              );
            }
            var Qt = function (w) {
              var P = w.ownerSVGElement || w.nodeName.toLowerCase() === "svg";
              if (!P) return !1;
              var O = Gt();
              w.appendChild(O);
              var D = O.querySelector("input");
              return D.focus(), (D.disabled = !0), w.removeChild(O), !0;
            };
            function Fe(I) {
              return (
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                I +
                "</svg>"
              );
            }
            function Zt(I) {
              if (!I.focus)
                try {
                  HTMLElement.prototype.focus.call(I);
                } catch {
                  Qt(I);
                }
            }
            function De(I, w, P) {
              return Zt(w), P.activeElement === w;
            }
            var Yt = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML = Fe('<text focusable="true">a</text>')),
                    w.querySelector("text")
                  );
                },
                validate: De,
              },
              Jt = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML = Fe('<text tabindex="0">a</text>')),
                    w.querySelector("text")
                  );
                },
                validate: De,
              },
              Xt = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML = Fe('<text tabindex="-1">a</text>')),
                    w.querySelector("text")
                  );
                },
                validate: De,
              },
              ei = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML = Fe(
                      [
                        '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
                        '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />',
                      ].join("")
                    )),
                    w.querySelector("use")
                  );
                },
                validate: De,
              },
              ti = {
                element: "div",
                mutate: function (w) {
                  return (
                    (w.innerHTML = Fe(
                      '<foreignObject tabindex="-1"><input type="text" /></foreignObject>'
                    )),
                    w.querySelector("foreignObject") ||
                      w.getElementsByTagName("foreignObject")[0]
                  );
                },
                validate: De,
              },
              ii = !!(
                z.is.GECKO &&
                typeof SVGElement < "u" &&
                SVGElement.prototype.focus
              ),
              ni = function () {
                return ii;
              },
              si = {
                element: "div",
                mutate: function (w) {
                  return (w.innerHTML = Fe("")), w.firstChild;
                },
                validate: De,
              },
              oi = {
                element: "div",
                mutate: function (w) {
                  w.setAttribute("tabindex", "3x");
                },
              },
              ri = {
                element: "table",
                mutate: function (w, P, O) {
                  var D = O.createDocumentFragment();
                  (D.innerHTML = "<tr><td>cell</td></tr>"), w.appendChild(D);
                },
              },
              li = {
                element: "video",
                mutate: function (w) {
                  try {
                    w.setAttribute("src", le);
                  } catch {}
                },
              },
              ai = z.is.GECKO || z.is.TRIDENT || z.is.EDGE,
              ci = function () {
                return ai;
              },
              St = {
                cssShadowPiercingDeepCombinator: de,
                focusInZeroDimensionObject: ht,
                focusObjectSwf: qt,
                focusSvgInIframe: ni,
                tabsequenceAreaAtImgPosition: ci,
              },
              ui = {
                focusAreaImgTabindex: ge,
                focusAreaTabindex: fe,
                focusAreaWithoutHref: se,
                focusAudioWithoutControls: Te,
                focusBrokenImageMap: X,
                focusChildrenOfFocusableFlexbox: he,
                focusFieldsetDisabled: Ce,
                focusFieldset: ee,
                focusFlexboxContainer: at,
                focusFormDisabled: ct,
                focusImgIsmap: ut,
                focusImgUsemapTabindex: dt,
                focusInHiddenIframe: Xe,
                focusInvalidTabindex: we,
                focusLabelTabindex: xe,
                focusObjectSvg: ke,
                focusObjectSvgHidden: me,
                focusRedirectImgUsemap: Ht,
                focusRedirectLegend: Wt,
                focusScrollBody: zt,
                focusScrollContainerWithoutOverflow: Kt,
                focusScrollContainer: Ut,
                focusSummary: $t,
                focusSvgFocusableAttribute: Yt,
                focusSvgTabindexAttribute: Jt,
                focusSvgNegativeTabindexAttribute: Xt,
                focusSvgUseTabindex: ei,
                focusSvgForeignobjectTabindex: ti,
                focusSvg: si,
                focusTabindexTrailingCharacters: oi,
                focusTable: ri,
                focusVideoWithoutControls: li,
              };
            function di() {
              var I = j(ui);
              return (
                Object.keys(St).forEach(function (w) {
                  I[w] = St[w]();
                }),
                I
              );
            }
            var Ne = null,
              Se = function () {
                return (
                  Ne ||
                  ((Ne = B.get()), Ne.time || (B.set(di()), (Ne = B.get())), Ne)
                );
              },
              je = void 0,
              fi = /^\s*(-|\+)?[0-9]+\s*$/,
              hi = /^\s*(-|\+)?[0-9]+.*$/,
              mt = function (w) {
                je || (je = Se());
                var P = je.focusTabindexTrailingCharacters ? hi : fi,
                  O = p({
                    label: "is/valid-tabindex",
                    resolveDocument: !0,
                    context: w,
                  }),
                  D = O.hasAttribute("tabindex"),
                  H = O.hasAttribute("tabIndex");
                if (!D && !H) return !1;
                var ie =
                  O.ownerSVGElement || O.nodeName.toLowerCase() === "svg";
                if (ie && !je.focusSvgTabindexAttribute) return !1;
                if (je.focusInvalidTabindex) return !0;
                var Y = O.getAttribute(D ? "tabindex" : "tabIndex");
                return Y === "-32768" ? !1 : !!(Y && P.test(Y));
              },
              Ee = function (w) {
                if (!mt(w)) return null;
                var P = w.hasAttribute("tabindex"),
                  O = P ? "tabindex" : "tabIndex",
                  D = parseInt(w.getAttribute(O), 10);
                return isNaN(D) ? -1 : D;
              };
            function pt(I) {
              var w = I.webkitUserModify || "";
              return !!(w && w.indexOf("write") !== -1);
            }
            function gt(I) {
              return [
                I.getPropertyValue("overflow"),
                I.getPropertyValue("overflow-x"),
                I.getPropertyValue("overflow-y"),
              ].some(function (w) {
                return w === "auto" || w === "scroll";
              });
            }
            function et(I) {
              return I.display.indexOf("flex") > -1;
            }
            function tt(I, w, P, O) {
              return (w !== "div" && w !== "span") ||
                (P && P !== "div" && P !== "span" && !gt(O))
                ? !1
                : I.offsetHeight < I.scrollHeight ||
                    I.offsetWidth < I.scrollWidth;
            }
            var ye = void 0;
            function it() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.except,
                O =
                  P === void 0
                    ? { flexbox: !1, scrollable: !1, shadow: !1 }
                    : P;
              ye || (ye = Se());
              var D = p({
                label: "is/focus-relevant",
                resolveDocument: !0,
                context: w,
              });
              if (!O.shadow && D.shadowRoot) return !0;
              var H = D.nodeName.toLowerCase();
              if (H === "input" && D.type === "hidden") return !1;
              if (
                H === "input" ||
                H === "select" ||
                H === "button" ||
                H === "textarea" ||
                (H === "legend" && ye.focusRedirectLegend) ||
                H === "label" ||
                H === "area" ||
                (H === "a" && D.hasAttribute("href"))
              )
                return !0;
              if (H === "object" && D.hasAttribute("usemap")) return !1;
              if (H === "object") {
                var ie = D.getAttribute("type");
                if (!ye.focusObjectSvg && ie === "image/svg+xml") return !1;
                if (
                  !ye.focusObjectSwf &&
                  ie === "application/x-shockwave-flash"
                )
                  return !1;
              }
              if (
                H === "iframe" ||
                H === "object" ||
                H === "embed" ||
                H === "keygen" ||
                D.hasAttribute("contenteditable") ||
                (H === "audio" &&
                  (ye.focusAudioWithoutControls ||
                    D.hasAttribute("controls"))) ||
                (H === "video" &&
                  (ye.focusVideoWithoutControls ||
                    D.hasAttribute("controls"))) ||
                (ye.focusSummary && H === "summary")
              )
                return !0;
              var Y = mt(D);
              if (H === "img" && D.hasAttribute("usemap"))
                return (
                  (Y && ye.focusImgUsemapTabindex) || ye.focusRedirectImgUsemap
                );
              if (
                (ye.focusTable && (H === "table" || H === "td")) ||
                (ye.focusFieldset && H === "fieldset")
              )
                return !0;
              var ce = H === "svg",
                ve = D.ownerSVGElement,
                _e = D.getAttribute("focusable"),
                Ie = Ee(D);
              if (H === "use" && Ie !== null && !ye.focusSvgUseTabindex)
                return !1;
              if (H === "foreignobject")
                return Ie !== null && ye.focusSvgForeignobjectTabindex;
              if ($(D, "svg a") && D.hasAttribute("xlink:href")) return !0;
              if (
                (ce || ve) &&
                D.focus &&
                !ye.focusSvgNegativeTabindexAttribute &&
                Ie < 0
              )
                return !1;
              if (ce)
                return (
                  Y ||
                  ye.focusSvg ||
                  ye.focusSvgInIframe ||
                  !!(ye.focusSvgFocusableAttribute && _e && _e === "true")
                );
              if (ve) {
                if (ye.focusSvgTabindexAttribute && Y) return !0;
                if (ye.focusSvgFocusableAttribute) return _e === "true";
              }
              if (Y) return !0;
              var Oe = window.getComputedStyle(D, null);
              if (pt(Oe)) return !0;
              if (ye.focusImgIsmap && H === "img" && D.hasAttribute("ismap")) {
                var Ze = N({ context: D }).some(function (Je) {
                  return (
                    Je.nodeName.toLowerCase() === "a" && Je.hasAttribute("href")
                  );
                });
                if (Ze) return !0;
              }
              if (!O.scrollable && ye.focusScrollContainer) {
                if (ye.focusScrollContainerWithoutOverflow) {
                  if (tt(D, H)) return !0;
                } else if (gt(Oe)) return !0;
              }
              if (!O.flexbox && ye.focusFlexboxContainer && et(Oe)) return !0;
              var Be = D.parentElement;
              if (!O.scrollable && Be) {
                var Tt = Be.nodeName.toLowerCase(),
                  Ye = window.getComputedStyle(Be, null);
                if (
                  (ye.focusScrollBody && tt(Be, H, Tt, Ye)) ||
                  (ye.focusChildrenOfFocusableFlexbox && et(Ye))
                )
                  return !0;
              }
              return !1;
            }
            it.except = function () {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = function (O) {
                  return it({ context: O, except: I });
                };
              return (w.rules = it), w;
            };
            var qe = it.except({});
            function He(I, w) {
              if (I.findIndex) return I.findIndex(w);
              var P = I.length;
              if (P === 0) return -1;
              for (var O = 0; O < P; O++) if (w(I[O], O, I)) return O;
              return -1;
            }
            var mi = function (w) {
                try {
                  return (
                    w.contentDocument ||
                    (w.contentWindow && w.contentWindow.document) ||
                    (w.getSVGDocument && w.getSVGDocument()) ||
                    null
                  );
                } catch {
                  return null;
                }
              },
              pi = function (w) {
                var P = g(w);
                return P.defaultView || window;
              },
              We = void 0,
              It = function (w) {
                if (typeof We != "string") {
                  var P = de();
                  P && (We = ", html " + P + " ");
                }
                return We
                  ? w +
                      We +
                      w
                        .replace(/\s*,\s*/g, ",")
                        .split(",")
                        .join(We)
                  : w;
              },
              vt = void 0;
            function gi(I) {
              if (
                (vt || (vt = It("object, iframe")), I._frameElement !== void 0)
              )
                return I._frameElement;
              I._frameElement = null;
              var w = I.parent.document.querySelectorAll(vt);
              return (
                [].some.call(w, function (P) {
                  var O = mi(P);
                  return O !== I.document ? !1 : ((I._frameElement = P), !0);
                }),
                I._frameElement
              );
            }
            function nt(I) {
              var w = pi(I);
              if (!w.parent || w.parent === w) return null;
              try {
                return w.frameElement || gi(w);
              } catch {
                return null;
              }
            }
            var vi = /^(area)$/;
            function bt(I, w) {
              return window.getComputedStyle(I, null).getPropertyValue(w);
            }
            function bi(I) {
              return I.some(function (w) {
                return bt(w, "display") === "none";
              });
            }
            function yi(I) {
              var w = He(I, function (O) {
                var D = bt(O, "visibility");
                return D === "hidden" || D === "collapse";
              });
              if (w === -1) return !1;
              var P = He(I, function (O) {
                return bt(O, "visibility") === "visible";
              });
              return P === -1 || w < P;
            }
            function wi(I) {
              var w = 1;
              return (
                I[0].nodeName.toLowerCase() === "summary" && (w = 2),
                I.slice(w).some(function (P) {
                  return (
                    P.nodeName.toLowerCase() === "details" && P.open === !1
                  );
                })
              );
            }
            function ze() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.except,
                O =
                  P === void 0
                    ? {
                        notRendered: !1,
                        cssDisplay: !1,
                        cssVisibility: !1,
                        detailsElement: !1,
                        browsingContext: !1,
                      }
                    : P,
                D = p({ label: "is/visible", resolveDocument: !0, context: w }),
                H = D.nodeName.toLowerCase();
              if (!O.notRendered && vi.test(H)) return !0;
              var ie = N({ context: D }),
                Y = H === "audio" && !D.hasAttribute("controls");
              if (
                (!O.cssDisplay && bi(Y ? ie.slice(1) : ie)) ||
                (!O.cssVisibility && yi(ie)) ||
                (!O.detailsElement && wi(ie))
              )
                return !1;
              if (!O.browsingContext) {
                var ce = nt(D),
                  ve = ze.except(O);
                if (ce && !ve(ce)) return !1;
              }
              return !0;
            }
            ze.except = function () {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = function (O) {
                  return ze({ context: O, except: I });
                };
              return (w.rules = ze), w;
            };
            var Ke = ze.except({});
            function Et(I, w) {
              var P = w.querySelector('map[name="' + l(I) + '"]');
              return P || null;
            }
            function xi(I) {
              var w = I.getAttribute("usemap");
              if (!w) return null;
              var P = g(I);
              return Et(w.slice(1), P);
            }
            function At(I) {
              var w = I.parentElement;
              if (!w.name || w.nodeName.toLowerCase() !== "map") return null;
              var P = g(I);
              return (
                P.querySelector('img[usemap="#' + l(w.name) + '"]') || null
              );
            }
            var Pe = void 0,
              Ot = function (w) {
                Pe || (Pe = Se());
                var P = p({ label: "is/valid-area", context: w }),
                  O = P.nodeName.toLowerCase();
                if (O !== "area") return !1;
                var D = P.hasAttribute("tabindex");
                if (!Pe.focusAreaTabindex && D) return !1;
                var H = At(P);
                if (
                  !H ||
                  !Ke(H) ||
                  (!Pe.focusBrokenImageMap &&
                    (!H.complete ||
                      !H.naturalHeight ||
                      H.offsetWidth <= 0 ||
                      H.offsetHeight <= 0))
                )
                  return !1;
                if (!Pe.focusAreaWithoutHref && !P.href)
                  return (
                    (Pe.focusAreaTabindex && D) ||
                    (Pe.focusAreaImgTabindex && H.hasAttribute("tabindex"))
                  );
                var ie = N({ context: H })
                  .slice(1)
                  .some(function (Y) {
                    var ce = Y.nodeName.toLowerCase();
                    return ce === "button" || ce === "a";
                  });
                return !ie;
              },
              st = void 0,
              Pt = void 0,
              yt = {
                input: !0,
                select: !0,
                textarea: !0,
                button: !0,
                fieldset: !0,
                form: !0,
              },
              Ci = function (w) {
                st ||
                  ((st = Se()),
                  st.focusFieldsetDisabled && delete yt.fieldset,
                  st.focusFormDisabled && delete yt.form,
                  (Pt = new RegExp("^(" + Object.keys(yt).join("|") + ")$")));
                var P = p({
                    label: "is/native-disabled-supported",
                    context: w,
                  }),
                  O = P.nodeName.toLowerCase();
                return !!Pt.test(O);
              },
              wt = void 0;
            function ki(I) {
              var w = I.nodeName.toLowerCase();
              return w === "fieldset" && I.disabled;
            }
            function _i(I) {
              var w = I.nodeName.toLowerCase();
              return w === "form" && I.disabled;
            }
            var Mt = function (w) {
              wt || (wt = Se());
              var P = p({ label: "is/disabled", context: w });
              if (P.hasAttribute("data-ally-disabled")) return !0;
              if (!Ci(P)) return !1;
              if (P.disabled) return !0;
              var O = N({ context: P });
              return !!(O.some(ki) || (!wt.focusFormDisabled && O.some(_i)));
            };
            function ot() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.except,
                O =
                  P === void 0
                    ? { onlyFocusableBrowsingContext: !1, visible: !1 }
                    : P,
                D = p({
                  label: "is/only-tabbable",
                  resolveDocument: !0,
                  context: w,
                });
              if (!O.visible && !Ke(D)) return !1;
              if (
                !O.onlyFocusableBrowsingContext &&
                (z.is.GECKO || z.is.TRIDENT || z.is.EDGE)
              ) {
                var H = nt(D);
                if (H && Ee(H) < 0) return !1;
              }
              var ie = D.nodeName.toLowerCase(),
                Y = Ee(D);
              return ie === "label" && z.is.GECKO
                ? Y !== null && Y >= 0
                : !!(
                    z.is.GECKO &&
                    D.ownerSVGElement &&
                    !D.focus &&
                    ie === "a" &&
                    D.hasAttribute("xlink:href") &&
                    z.is.GECKO
                  );
            }
            ot.except = function () {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = function (O) {
                  return ot({ context: O, except: I });
                };
              return (w.rules = ot), w;
            };
            var Ft = ot.except({}),
              Ae = void 0;
            function Ti(I) {
              var w = I.nodeName.toLowerCase();
              if (w === "embed" || w === "keygen") return !0;
              var P = Ee(I);
              if (I.shadowRoot && P === null) return !0;
              if (w === "label") return !Ae.focusLabelTabindex || P === null;
              if (w === "legend") return P === null;
              if (
                Ae.focusSvgFocusableAttribute &&
                (I.ownerSVGElement || w === "svg")
              ) {
                var O = I.getAttribute("focusable");
                return O && O === "false";
              }
              return w === "img" && I.hasAttribute("usemap")
                ? P === null || !Ae.focusImgUsemapTabindex
                : w === "area"
                ? !Ot(I)
                : !1;
            }
            function rt() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.except,
                O =
                  P === void 0
                    ? { disabled: !1, visible: !1, onlyTabbable: !1 }
                    : P;
              Ae || (Ae = Se());
              var D = Ft.rules.except({
                  onlyFocusableBrowsingContext: !0,
                  visible: O.visible,
                }),
                H = p({
                  label: "is/focusable",
                  resolveDocument: !0,
                  context: w,
                }),
                ie = qe.rules({ context: H, except: O });
              if (
                !ie ||
                Ti(H) ||
                (!O.disabled && Mt(H)) ||
                (!O.onlyTabbable && D(H))
              )
                return !1;
              if (!O.visible) {
                var Y = { context: H, except: {} };
                if (
                  (Ae.focusInHiddenIframe && (Y.except.browsingContext = !0),
                  Ae.focusObjectSvgHidden)
                ) {
                  var ce = H.nodeName.toLowerCase();
                  ce === "object" && (Y.except.cssVisibility = !0);
                }
                if (!Ke.rules(Y)) return !1;
              }
              var ve = nt(H);
              if (ve) {
                var _e = ve.nodeName.toLowerCase();
                if (
                  _e === "object" &&
                  !Ae.focusInZeroDimensionObject &&
                  (!ve.offsetWidth || !ve.offsetHeight)
                )
                  return !1;
              }
              var Ie = H.nodeName.toLowerCase();
              return !(
                Ie === "svg" &&
                Ae.focusSvgInIframe &&
                !ve &&
                H.getAttribute("tabindex") === null
              );
            }
            rt.except = function () {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = function (O) {
                  return rt({ context: O, except: I });
                };
              return (w.rules = rt), w;
            };
            var Ve = rt.except({});
            function Dt(I) {
              var w = function (O) {
                return O.shadowRoot || I(O)
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
              };
              return (w.acceptNode = w), w;
            }
            var Si = Dt(qe);
            function Nt() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.includeContext,
                O = I.includeOnlyTabbable,
                D = I.strategy;
              w || (w = document.documentElement);
              for (
                var H = Ve.rules.except({ onlyTabbable: O }),
                  ie = g(w),
                  Y = ie.createTreeWalker(
                    w,
                    NodeFilter.SHOW_ELEMENT,
                    D === "all" ? Si : Dt(H),
                    !1
                  ),
                  ce = [];
                Y.nextNode();

              )
                Y.currentNode.shadowRoot
                  ? (H(Y.currentNode) && ce.push(Y.currentNode),
                    (ce = ce.concat(
                      Nt({
                        context: Y.currentNode.shadowRoot,
                        includeOnlyTabbable: O,
                        strategy: D,
                      })
                    )))
                  : ce.push(Y.currentNode);
              return (
                P &&
                  (D === "all"
                    ? qe(w) && ce.unshift(w)
                    : H(w) && ce.unshift(w)),
                ce
              );
            }
            var Me = void 0,
              Re = void 0,
              Ii = function () {
                return (
                  Me || (Me = Se()),
                  typeof Re == "string" ||
                    ((Re =
                      (Me.focusTable ? "table, td," : "") +
                      (Me.focusFieldset ? "fieldset," : "") +
                      "svg a,a[href],area[href],input, select, textarea, button,iframe, object, embed,keygen," +
                      (Me.focusAudioWithoutControls
                        ? "audio,"
                        : "audio[controls],") +
                      (Me.focusVideoWithoutControls
                        ? "video,"
                        : "video[controls],") +
                      (Me.focusSummary ? "summary," : "") +
                      "[tabindex],[contenteditable]"),
                    (Re = It(Re))),
                  Re
                );
              };
            function Ei() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.includeContext,
                O = I.includeOnlyTabbable,
                D = Ii(),
                H = w.querySelectorAll(D),
                ie = Ve.rules.except({ onlyTabbable: O }),
                Y = [].filter.call(H, ie);
              return P && ie(w) && Y.unshift(w), Y;
            }
            var xt = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.includeContext,
                  D = w.includeOnlyTabbable,
                  H = w.strategy,
                  ie = H === void 0 ? "quick" : H,
                  Y = p({
                    label: "query/focusable",
                    resolveDocument: !0,
                    defaultToDocument: !0,
                    context: P,
                  }),
                  ce = {
                    context: Y,
                    includeContext: O,
                    includeOnlyTabbable: D,
                    strategy: ie,
                  };
                if (ie === "quick") return Ei(ce);
                if (ie === "strict" || ie === "all") return Nt(ce);
                throw new TypeError(
                  'query/focusable requires option.strategy to be one of ["quick", "strict", "all"]'
                );
              },
              Le = void 0,
              Ai = /^(fieldset|table|td|body)$/;
            function Ue() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = I.except,
                O =
                  P === void 0
                    ? {
                        flexbox: !1,
                        scrollable: !1,
                        shadow: !1,
                        visible: !1,
                        onlyTabbable: !1,
                      }
                    : P;
              Le || (Le = Se());
              var D = p({
                label: "is/tabbable",
                resolveDocument: !0,
                context: w,
              });
              if (z.is.BLINK && z.is.ANDROID && z.majorVersion > 42) return !1;
              var H = nt(D);
              if (H) {
                if (
                  (z.is.WEBKIT && z.is.IOS) ||
                  Ee(H) < 0 ||
                  (!O.visible && (z.is.BLINK || z.is.WEBKIT) && !Ke(H))
                )
                  return !1;
                var ie = H.nodeName.toLowerCase();
                if (ie === "object") {
                  var Y =
                    (z.name === "Chrome" && z.majorVersion >= 54) ||
                    (z.name === "Opera" && z.majorVersion >= 41);
                  if (z.is.WEBKIT || (z.is.BLINK && !Y)) return !1;
                }
              }
              var ce = D.nodeName.toLowerCase(),
                ve = Ee(D),
                _e = ve === null ? null : ve >= 0;
              if (
                z.is.EDGE &&
                z.majorVersion >= 14 &&
                H &&
                D.ownerSVGElement &&
                ve < 0
              )
                return !0;
              var Ie = _e !== !1,
                Oe = ve !== null && ve >= 0;
              if (D.hasAttribute("contenteditable")) return Ie;
              if (Ai.test(ce) && _e !== !0) return !1;
              if (z.is.WEBKIT && z.is.IOS) {
                var Ze =
                  (ce === "input" && D.type === "text") ||
                  D.type === "password" ||
                  ce === "select" ||
                  ce === "textarea" ||
                  D.hasAttribute("contenteditable");
                if (!Ze) {
                  var Be = window.getComputedStyle(D, null);
                  Ze = pt(Be);
                }
                if (!Ze) return !1;
              }
              if (
                (ce === "use" &&
                  ve !== null &&
                  (z.is.BLINK || (z.is.WEBKIT && z.majorVersion === 9))) ||
                ($(D, "svg a") &&
                  D.hasAttribute("xlink:href") &&
                  (Ie || (D.focus && !Le.focusSvgNegativeTabindexAttribute))) ||
                (ce === "svg" && Le.focusSvgInIframe && Ie)
              )
                return !0;
              if (z.is.TRIDENT || z.is.EDGE) {
                if (ce === "svg")
                  return Le.focusSvg ? !0 : D.hasAttribute("focusable") || Oe;
                if (D.ownerSVGElement)
                  return Le.focusSvgTabindexAttribute && Oe
                    ? !0
                    : D.hasAttribute("focusable");
              }
              if (D.tabIndex === void 0) return !!O.onlyTabbable;
              if (ce === "audio")
                if (D.hasAttribute("controls")) {
                  if (z.is.BLINK) return !0;
                } else return !1;
              if (ce === "video") {
                if (D.hasAttribute("controls")) {
                  if (z.is.BLINK || z.is.GECKO) return !0;
                } else if (z.is.TRIDENT || z.is.EDGE) return !1;
              }
              if (
                (ce === "object" && (z.is.BLINK || z.is.WEBKIT)) ||
                ce === "iframe"
              )
                return !1;
              if (!O.scrollable && z.is.GECKO) {
                var Tt = window.getComputedStyle(D, null);
                if (gt(Tt)) return Ie;
              }
              if (z.is.TRIDENT || z.is.EDGE) {
                if (ce === "area") {
                  var Ye = At(D);
                  if (Ye && Ee(Ye) < 0) return !1;
                }
                var Je = window.getComputedStyle(D, null);
                if (pt(Je)) return D.tabIndex >= 0;
                if (!O.flexbox && et(Je))
                  return ve !== null ? Oe : Oi(D) && Pi(D);
                if (tt(D, ce)) return !1;
                var lt = D.parentElement;
                if (lt) {
                  var un = lt.nodeName.toLowerCase(),
                    Bt = window.getComputedStyle(lt, null);
                  if (tt(lt, ce, un, Bt)) return !1;
                  if (et(Bt)) return Oe;
                }
              }
              return D.tabIndex >= 0;
            }
            Ue.except = function () {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = function (O) {
                  return Ue({ context: O, except: I });
                };
              return (w.rules = Ue), w;
            };
            var Oi = qe.rules.except({ flexbox: !0 }),
              Pi = Ue.except({ flexbox: !0 }),
              Vt = Ue.except({}),
              $e = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.includeContext,
                  D = w.includeOnlyTabbable,
                  H = w.strategy,
                  ie = Vt.rules.except({ onlyTabbable: D });
                return xt({
                  context: P,
                  includeContext: O,
                  includeOnlyTabbable: D,
                  strategy: H,
                }).filter(ie);
              };
            function Mi(I, w) {
              return I.compareDocumentPosition(w) &
                Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 1;
            }
            var Fi = function (w) {
              return w.sort(Mi);
            };
            function Di(I, w) {
              return He(I, function (P) {
                return (
                  w.compareDocumentPosition(P) &
                  Node.DOCUMENT_POSITION_FOLLOWING
                );
              });
            }
            function Ni(I, w, P) {
              var O = [];
              return (
                w.forEach(function (D) {
                  var H = !0,
                    ie = I.indexOf(D);
                  ie === -1 && ((ie = Di(I, D)), (H = !1)),
                    ie === -1 && (ie = I.length);
                  var Y = u(P ? P(D) : D);
                  Y.length && O.push({ offset: ie, replace: H, elements: Y });
                }),
                O
              );
            }
            function Vi(I, w) {
              var P = 0;
              w.sort(function (O, D) {
                return O.offset - D.offset;
              }),
                w.forEach(function (O) {
                  var D = O.replace ? 1 : 0,
                    H = [O.offset + P, D].concat(O.elements);
                  I.splice.apply(I, H), (P += O.elements.length - D);
                });
            }
            var Ge = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.list,
                  O = w.elements,
                  D = w.resolveElement,
                  H = P.slice(0),
                  ie = u(O).slice(0);
                Fi(ie);
                var Y = Ni(H, ie, D);
                return Vi(H, Y), H;
              },
              Qe = void 0;
            function Ri(I) {
              var w = I.nodeName.toLowerCase();
              return (
                w === "input" ||
                w === "textarea" ||
                w === "select" ||
                w === "button"
              );
            }
            function Li(I, w) {
              var P = I.getAttribute("for");
              return P
                ? w.getElementById(P)
                : I.querySelector("input, select, textarea");
            }
            function Bi(I) {
              var w = I.parentNode,
                P = xt({ context: w, strategy: "strict" });
              return P.filter(Ri)[0] || null;
            }
            function ji(I, w) {
              var P = $e({ context: w.body, strategy: "strict" });
              if (!P.length) return null;
              var O = Ge({ list: P, elements: [I] }),
                D = O.indexOf(I);
              return D === O.length - 1 ? null : O[D + 1];
            }
            function qi(I, w) {
              if (!Qe.focusRedirectLegend) return null;
              var P = I.parentNode;
              return P.nodeName.toLowerCase() !== "fieldset"
                ? null
                : Qe.focusRedirectLegend === "tabbable"
                ? ji(I, w)
                : Bi(I, w);
            }
            function Hi(I) {
              if (!Qe.focusRedirectImgUsemap) return null;
              var w = xi(I);
              return (w && w.querySelector("area")) || null;
            }
            var Rt = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.skipFocusable;
                Qe || (Qe = Se());
                var D = p({ label: "get/focus-redirect-target", context: P });
                if (!O && Ve(D)) return null;
                var H = D.nodeName.toLowerCase(),
                  ie = g(D);
                return H === "label"
                  ? Li(D, ie)
                  : H === "legend"
                  ? qi(D, ie)
                  : H === "img"
                  ? Hi(D, ie)
                  : null;
              },
              Wi = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.except,
                  D = p({ label: "get/focus-target", context: P }),
                  H = null,
                  ie = function (ce) {
                    var ve = Ve.rules({ context: ce, except: O });
                    return ve
                      ? ((H = ce), !0)
                      : ((H = Rt({ context: ce, skipFocusable: !0 })), !!H);
                  };
                return ie(D) || N({ context: D }).slice(1).some(ie), H;
              };
            function zi() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.parent,
                P = I.element,
                O = I.includeSelf;
              if (w)
                return function (H) {
                  return !!(
                    (O && H === w) ||
                    w.compareDocumentPosition(H) &
                      Node.DOCUMENT_POSITION_CONTAINED_BY
                  );
                };
              if (P)
                return function (H) {
                  return !!(
                    (O && P === H) ||
                    H.compareDocumentPosition(P) &
                      Node.DOCUMENT_POSITION_CONTAINED_BY
                  );
                };
              throw new TypeError(
                "util/compare-position#getParentComparator required either options.parent or options.element"
              );
            }
            function Ki(I) {
              var w = I.context,
                P = I.filter,
                O = function (ve) {
                  var _e = zi({ parent: ve });
                  return P.some(_e);
                },
                D = [],
                H = function (ve) {
                  return P.some(function (_e) {
                    return ve === _e;
                  })
                    ? NodeFilter.FILTER_REJECT
                    : O(ve)
                    ? NodeFilter.FILTER_ACCEPT
                    : (D.push(ve), NodeFilter.FILTER_REJECT);
                };
              H.acceptNode = H;
              for (
                var ie = g(w),
                  Y = ie.createTreeWalker(w, NodeFilter.SHOW_ELEMENT, H, !1);
                Y.nextNode();

              );
              return D;
            }
            var Ui = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.filter;
                if (
                  ((P = p({
                    label: "get/insignificant-branches",
                    defaultToDocument: !0,
                    context: P,
                  })),
                  (O = u(O)),
                  !O.length)
                )
                  throw new TypeError(
                    "get/insignificant-branches requires valid options.filter"
                  );
                return Ki({ context: P, filter: O });
              },
              $i = {
                activeElement: f,
                activeElements: M,
                focusRedirectTarget: Rt,
                focusTarget: Wi,
                insignificantBranches: Ui,
                parents: N,
                shadowHostParents: T,
                shadowHost: x,
              },
              Gi = function (w) {
                var P = p({
                    label: "is/active-element",
                    resolveDocument: !0,
                    context: w,
                  }),
                  O = g(P);
                if (O.activeElement === P) return !0;
                var D = x({ context: P });
                return !!(D && D.shadowRoot.activeElement === P);
              },
              Qi = {
                activeElement: Gi,
                disabled: Mt,
                focusRelevant: qe,
                focusable: Ve,
                onlyTabbable: Ft,
                shadowed: S,
                tabbable: Vt,
                validArea: Ot,
                validTabindex: mt,
                visible: Ke,
              };
            function Zi(I) {
              return I.hasAttribute("autofocus");
            }
            function Yi(I) {
              return I.tabIndex <= 0;
            }
            var Ji = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.sequence,
                  D = w.strategy,
                  H = w.ignoreAutofocus,
                  ie = w.defaultToContext,
                  Y = w.includeOnlyTabbable,
                  ce = -1;
                O ||
                  ((P = u(P || document.body)[0]),
                  (O = $e({
                    context: P,
                    includeOnlyTabbable: Y,
                    strategy: D,
                  }))),
                  O.length && !H && (ce = He(O, Zi)),
                  O.length && ce === -1 && (ce = He(O, Yi));
                var ve = Ve.rules.except({ onlyTabbable: Y });
                return ce === -1 && ie && P && ve(P) ? P : O[ce] || null;
              },
              Ct = function (w) {
                return w.shadowRoot
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
              };
            Ct.acceptNode = Ct;
            function kt() {
              var I =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                w = I.context,
                P = p({
                  label: "query/shadow-hosts",
                  resolveDocument: !0,
                  defaultToDocument: !0,
                  context: w,
                }),
                O = g(w),
                D = O.createTreeWalker(P, NodeFilter.SHOW_ELEMENT, Ct, !1),
                H = [];
              for (
                P.shadowRoot &&
                (H.push(P), (H = H.concat(kt({ context: P.shadowRoot }))));
                D.nextNode();

              )
                H.push(D.currentNode),
                  (H = H.concat(kt({ context: D.currentNode.shadowRoot })));
              return H;
            }
            var Xi = (function () {
                function I(w) {
                  t(this, I), (this._document = g(w)), (this.maps = {});
                }
                return (
                  c(I, [
                    {
                      key: "getAreasFor",
                      value: function (P) {
                        return (
                          this.maps[P] || this.addMapByName(P), this.maps[P]
                        );
                      },
                    },
                    {
                      key: "addMapByName",
                      value: function (P) {
                        var O = Et(P, this._document);
                        O && (this.maps[O.name] = $e({ context: O }));
                      },
                    },
                    {
                      key: "extractAreasFromList",
                      value: function (P) {
                        return P.filter(function (O) {
                          var D = O.nodeName.toLowerCase();
                          if (D !== "area") return !0;
                          var H = O.parentNode;
                          return (
                            this.maps[H.name] || (this.maps[H.name] = []),
                            this.maps[H.name].push(O),
                            !1
                          );
                        }, this);
                      },
                    },
                  ]),
                  I
                );
              })(),
              en = function (w, P) {
                var O = P.querySelectorAll("img[usemap]"),
                  D = new Xi(P),
                  H = D.extractAreasFromList(w);
                return O.length
                  ? Ge({
                      list: H,
                      elements: O,
                      resolveElement: function (Y) {
                        var ce = Y.getAttribute("usemap").slice(1);
                        return D.getAreasFor(ce);
                      },
                    })
                  : H;
              },
              tn = (function () {
                function I(w, P) {
                  t(this, I),
                    (this.context = w),
                    (this.sortElements = P),
                    (this.hostCounter = 1),
                    (this.inHost = {}),
                    (this.inDocument = []),
                    (this.hosts = {}),
                    (this.elements = {});
                }
                return (
                  c(I, [
                    {
                      key: "_registerHost",
                      value: function (P) {
                        if (!P._sortingId) {
                          (P._sortingId = "shadow-" + this.hostCounter++),
                            (this.hosts[P._sortingId] = P);
                          var O = x({ context: P });
                          O
                            ? (this._registerHost(O),
                              this._registerHostParent(P, O))
                            : this.inDocument.push(P);
                        }
                      },
                    },
                    {
                      key: "_registerHostParent",
                      value: function (P, O) {
                        this.inHost[O._sortingId] ||
                          (this.inHost[O._sortingId] = []),
                          this.inHost[O._sortingId].push(P);
                      },
                    },
                    {
                      key: "_registerElement",
                      value: function (P, O) {
                        this.elements[O._sortingId] ||
                          (this.elements[O._sortingId] = []),
                          this.elements[O._sortingId].push(P);
                      },
                    },
                    {
                      key: "extractElements",
                      value: function (P) {
                        return P.filter(function (O) {
                          var D = x({ context: O });
                          return D
                            ? (this._registerHost(D),
                              this._registerElement(O, D),
                              !1)
                            : !0;
                        }, this);
                      },
                    },
                    {
                      key: "sort",
                      value: function (P) {
                        var O = this._injectHosts(P);
                        return (O = this._replaceHosts(O)), this._cleanup(), O;
                      },
                    },
                    {
                      key: "_injectHosts",
                      value: function (P) {
                        return (
                          Object.keys(this.hosts).forEach(function (O) {
                            var D = this.elements[O],
                              H = this.inHost[O],
                              ie = this.hosts[O].shadowRoot;
                            this.elements[O] = this._merge(D, H, ie);
                          }, this),
                          this._merge(P, this.inDocument, this.context)
                        );
                      },
                    },
                    {
                      key: "_merge",
                      value: function (P, O, D) {
                        var H = Ge({ list: P, elements: O });
                        return this.sortElements(H, D);
                      },
                    },
                    {
                      key: "_replaceHosts",
                      value: function (P) {
                        return Ge({
                          list: P,
                          elements: this.inDocument,
                          resolveElement: this._resolveHostElement.bind(this),
                        });
                      },
                    },
                    {
                      key: "_resolveHostElement",
                      value: function (P) {
                        var O = Ge({
                            list: this.elements[P._sortingId],
                            elements: this.inHost[P._sortingId],
                            resolveElement: this._resolveHostElement.bind(this),
                          }),
                          D = Ee(P);
                        return D !== null && D > -1 ? [P].concat(O) : O;
                      },
                    },
                    {
                      key: "_cleanup",
                      value: function () {
                        Object.keys(this.hosts).forEach(function (P) {
                          delete this.hosts[P]._sortingId;
                        }, this);
                      },
                    },
                  ]),
                  I
                );
              })(),
              nn = function (w, P, O) {
                var D = new tn(P, O),
                  H = D.extractElements(w);
                return H.length === w.length ? O(w) : D.sort(H);
              },
              sn = function (w) {
                var P = {},
                  O = [],
                  D = w.filter(function (ie) {
                    var Y = ie.tabIndex;
                    return (
                      Y === void 0 && (Y = Ee(ie)),
                      Y <= 0 || Y === null || Y === void 0
                        ? !0
                        : (P[Y] || ((P[Y] = []), O.push(Y)), P[Y].push(ie), !1)
                    );
                  }),
                  H = O.sort()
                    .map(function (ie) {
                      return P[ie];
                    })
                    .reduceRight(function (ie, Y) {
                      return Y.concat(ie);
                    }, D);
                return H;
              },
              _t = void 0;
            function on(I, w) {
              var P = I.indexOf(w);
              if (P > 0) {
                var O = I.splice(P, 1);
                return O.concat(I);
              }
              return I;
            }
            function Lt(I, w) {
              return (
                _t.tabsequenceAreaAtImgPosition && (I = en(I, w)),
                (I = sn(I)),
                I
              );
            }
            var rn = function () {
                var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  P = w.context,
                  O = w.includeContext,
                  D = w.includeOnlyTabbable,
                  H = w.strategy;
                _t || (_t = Se());
                var ie = u(P)[0] || document.documentElement,
                  Y = $e({
                    context: ie,
                    includeContext: O,
                    includeOnlyTabbable: D,
                    strategy: H,
                  });
                return (
                  document.body.createShadowRoot && z.is.BLINK
                    ? (Y = nn(Y, ie, Lt))
                    : (Y = Lt(Y, ie)),
                  O && (Y = on(Y, ie)),
                  Y
                );
              },
              ln = {
                firstTabbable: Ji,
                focusable: xt,
                shadowHosts: kt,
                tabbable: $e,
                tabsequence: rn,
              },
              an = typeof window < "u" && window.ally,
              cn = {
                get: $i,
                is: Qi,
                query: ln,
                noConflict: function () {
                  return (
                    typeof window < "u" &&
                      window.ally === this &&
                      (window.ally = an),
                    this
                  );
                },
              };
            e.exports = cn;
          },
          { "css.escape": 2, platform: 3 },
        ],
        2: [
          function (n, e, a) {
            (function (c) {
              (function (o, t) {
                typeof a == "object"
                  ? (e.exports = t(o))
                  : typeof r == "function" && r.amd
                  ? r([], t.bind(o, o))
                  : t(o);
              })(typeof c < "u" ? c : this, function (o) {
                if (o.CSS && o.CSS.escape) return o.CSS.escape;
                var t = function (i) {
                  if (arguments.length == 0)
                    throw new TypeError("`CSS.escape` requires an argument.");
                  for (
                    var s = String(i),
                      l = s.length,
                      g = -1,
                      f,
                      u = "",
                      p = s.charCodeAt(0);
                    ++g < l;

                  ) {
                    if (((f = s.charCodeAt(g)), f == 0)) {
                      u += "\uFFFD";
                      continue;
                    }
                    if (
                      (f >= 1 && f <= 31) ||
                      f == 127 ||
                      (g == 0 && f >= 48 && f <= 57) ||
                      (g == 1 && f >= 48 && f <= 57 && p == 45)
                    ) {
                      u += "\\" + f.toString(16) + " ";
                      continue;
                    }
                    if (g == 0 && l == 1 && f == 45) {
                      u += "\\" + s.charAt(g);
                      continue;
                    }
                    if (
                      f >= 128 ||
                      f == 45 ||
                      f == 95 ||
                      (f >= 48 && f <= 57) ||
                      (f >= 65 && f <= 90) ||
                      (f >= 97 && f <= 122)
                    ) {
                      u += s.charAt(g);
                      continue;
                    }
                    u += "\\" + s.charAt(g);
                  }
                  return u;
                };
                return o.CSS || (o.CSS = {}), (o.CSS.escape = t), t;
              });
            }).call(
              this,
              typeof global < "u"
                ? global
                : typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : {}
            );
          },
          {},
        ],
        3: [
          function (n, e, a) {
            (function (c) {
              (function () {
                "use strict";
                var o = { function: !0, object: !0 },
                  t = (o[typeof window] && window) || this,
                  i = t,
                  s = o[typeof a] && a,
                  l = o[typeof e] && e && !e.nodeType && e,
                  g = s && l && typeof c == "object" && c;
                g &&
                  (g.global === g || g.window === g || g.self === g) &&
                  (t = g);
                var f = Math.pow(2, 53) - 1,
                  u = /\bOpera/,
                  p = this,
                  x = Object.prototype,
                  S = x.hasOwnProperty,
                  T = x.toString;
                function k(q) {
                  return (
                    (q = String(q)), q.charAt(0).toUpperCase() + q.slice(1)
                  );
                }
                function A(q, Q, ne) {
                  var oe = {
                    "10.0": "10",
                    6.4: "10 Technical Preview",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    5.2: "Server 2003 / XP 64-bit",
                    5.1: "XP",
                    5.01: "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME",
                  };
                  return (
                    Q &&
                      ne &&
                      /^Win/i.test(q) &&
                      !/^Windows Phone /i.test(q) &&
                      (oe = oe[/[\d.]+$/.exec(q)]) &&
                      (q = "Windows " + oe),
                    (q = String(q)),
                    Q && ne && (q = q.replace(RegExp(Q, "i"), ne)),
                    (q = N(
                      q
                        .replace(/ ce$/i, " CE")
                        .replace(/\bhpw/i, "web")
                        .replace(/\bMacintosh\b/, "Mac OS")
                        .replace(/_PowerPC\b/i, " OS")
                        .replace(/\b(OS X) [^ \d]+/i, "$1")
                        .replace(/\bMac (OS X)\b/, "$1")
                        .replace(/\/(\d)/, " $1")
                        .replace(/_/g, ".")
                        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                        .replace(/\bx86\.64\b/gi, "x86_64")
                        .replace(/\b(Windows Phone) OS\b/, "$1")
                        .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                        .split(" on ")[0]
                    )),
                    q
                  );
                }
                function M(q, Q) {
                  var ne = -1,
                    oe = q ? q.length : 0;
                  if (typeof oe == "number" && oe > -1 && oe <= f)
                    for (; ++ne < oe; ) Q(q[ne], ne, q);
                  else R(q, Q);
                }
                function N(q) {
                  return (q = ue(q)), /^(?:webOS|i(?:OS|P))/.test(q) ? q : k(q);
                }
                function R(q, Q) {
                  for (var ne in q) S.call(q, ne) && Q(q[ne], ne, q);
                }
                function K(q) {
                  return q == null ? k(q) : T.call(q).slice(8, -1);
                }
                function G(q, Q) {
                  var ne = q != null ? typeof q[Q] : "number";
                  return (
                    !/^(?:boolean|number|string|undefined)$/.test(ne) &&
                    (ne == "object" ? !!q[Q] : !0)
                  );
                }
                function $(q) {
                  return String(q).replace(/([ -])(?!$)/g, "$1?");
                }
                function z(q, Q) {
                  var ne = null;
                  return (
                    M(q, function (oe, d) {
                      ne = Q(ne, oe, d, q);
                    }),
                    ne
                  );
                }
                function ue(q) {
                  return String(q).replace(/^ +| +$/g, "");
                }
                function J(q) {
                  var Q = t,
                    ne = q && typeof q == "object" && K(q) != "String";
                  ne && ((Q = q), (q = null));
                  var oe = Q.navigator || {},
                    d = oe.userAgent || "";
                  q || (q = d);
                  var h = ne || p == i,
                    b = ne
                      ? !!oe.likeChrome
                      : /\bChrome\b/.test(q) &&
                        !/internal|\n/i.test(T.toString()),
                    _ = "Object",
                    C = ne ? _ : "ScriptBridgingProxyObject",
                    E = ne ? _ : "Environment",
                    F = ne && Q.java ? "JavaPackage" : K(Q.java),
                    L = ne ? _ : "RuntimeObject",
                    j = /\bJava/.test(F) && Q.java,
                    V = j && K(Q.environment) == E,
                    W = j ? "a" : "\u03B1",
                    Z = j ? "b" : "\u03B2",
                    U = Q.document || {},
                    te = Q.operamini || Q.opera,
                    re = u.test((re = ne && te ? te["[[Class]]"] : K(te)))
                      ? re
                      : (te = null),
                    B,
                    de = q,
                    le = [],
                    ge = null,
                    fe = q == d,
                    se =
                      fe &&
                      te &&
                      typeof te.version == "function" &&
                      te.version(),
                    Te,
                    pe = at([
                      { label: "EdgeHTML", pattern: "Edge" },
                      "Trident",
                      { label: "WebKit", pattern: "AppleWebKit" },
                      "iCab",
                      "Presto",
                      "NetFront",
                      "Tasman",
                      "KHTML",
                      "Gecko",
                    ]),
                    X = ut([
                      "Adobe AIR",
                      "Arora",
                      "Avant Browser",
                      "Breach",
                      "Camino",
                      "Epiphany",
                      "Fennec",
                      "Flock",
                      "Galeon",
                      "GreenBrowser",
                      "iCab",
                      "Iceweasel",
                      "K-Meleon",
                      "Konqueror",
                      "Lunascape",
                      "Maxthon",
                      { label: "Microsoft Edge", pattern: "Edge" },
                      "Midori",
                      "Nook Browser",
                      "PaleMoon",
                      "PhantomJS",
                      "Raven",
                      "Rekonq",
                      "RockMelt",
                      "SeaMonkey",
                      { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                      "Sleipnir",
                      "SlimBrowser",
                      { label: "SRWare Iron", pattern: "Iron" },
                      "Sunrise",
                      "Swiftfox",
                      "WebPositive",
                      "Opera Mini",
                      { label: "Opera Mini", pattern: "OPiOS" },
                      "Opera",
                      { label: "Opera", pattern: "OPR" },
                      "Chrome",
                      { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                      { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                      { label: "Firefox for iOS", pattern: "FxiOS" },
                      { label: "IE", pattern: "IEMobile" },
                      { label: "IE", pattern: "MSIE" },
                      "Safari",
                    ]),
                    he = Xe([
                      { label: "BlackBerry", pattern: "BB10" },
                      "BlackBerry",
                      { label: "Galaxy S", pattern: "GT-I9000" },
                      { label: "Galaxy S2", pattern: "GT-I9100" },
                      { label: "Galaxy S3", pattern: "GT-I9300" },
                      { label: "Galaxy S4", pattern: "GT-I9500" },
                      "Google TV",
                      "Lumia",
                      "iPad",
                      "iPod",
                      "iPhone",
                      "Kindle",
                      {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)",
                      },
                      "Nexus",
                      "Nook",
                      "PlayBook",
                      "PlayStation 3",
                      "PlayStation 4",
                      "PlayStation Vita",
                      "TouchPad",
                      "Transformer",
                      { label: "Wii U", pattern: "WiiU" },
                      "Wii",
                      "Xbox One",
                      { label: "Xbox 360", pattern: "Xbox" },
                      "Xoom",
                    ]),
                    Ce = ct({
                      Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                      Archos: {},
                      Amazon: { Kindle: 1, "Kindle Fire": 1 },
                      Asus: { Transformer: 1 },
                      "Barnes & Noble": { Nook: 1 },
                      BlackBerry: { PlayBook: 1 },
                      Google: { "Google TV": 1, Nexus: 1 },
                      HP: { TouchPad: 1 },
                      HTC: {},
                      LG: {},
                      Microsoft: { Xbox: 1, "Xbox One": 1 },
                      Motorola: { Xoom: 1 },
                      Nintendo: { "Wii U": 1, Wii: 1 },
                      Nokia: { Lumia: 1 },
                      Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1,
                      },
                      Sony: {
                        "PlayStation 4": 1,
                        "PlayStation 3": 1,
                        "PlayStation Vita": 1,
                      },
                    }),
                    ee = dt([
                      "Windows Phone",
                      "Android",
                      "CentOS",
                      { label: "Chrome OS", pattern: "CrOS" },
                      "Debian",
                      "Fedora",
                      "FreeBSD",
                      "Gentoo",
                      "Haiku",
                      "Kubuntu",
                      "Linux Mint",
                      "OpenBSD",
                      "Red Hat",
                      "SuSE",
                      "Ubuntu",
                      "Xubuntu",
                      "Cygwin",
                      "Symbian OS",
                      "hpwOS",
                      "webOS ",
                      "webOS",
                      "Tablet OS",
                      "Linux",
                      "Mac OS X",
                      "Macintosh",
                      "Mac",
                      "Windows 98;",
                      "Windows ",
                    ]);
                  function at(xe) {
                    return z(xe, function (be, me) {
                      return (
                        be ||
                        (RegExp(
                          "\\b" + (me.pattern || $(me)) + "\\b",
                          "i"
                        ).exec(q) &&
                          (me.label || me))
                      );
                    });
                  }
                  function ct(xe) {
                    return z(xe, function (be, me, ke) {
                      return (
                        be ||
                        ((me[he] ||
                          me[/^[a-z]+(?: +[a-z]+\b)*/i.exec(he)] ||
                          RegExp("\\b" + $(ke) + "(?:\\b|\\w*\\d)", "i").exec(
                            q
                          )) &&
                          ke)
                      );
                    });
                  }
                  function ut(xe) {
                    return z(xe, function (be, me) {
                      return (
                        be ||
                        (RegExp(
                          "\\b" + (me.pattern || $(me)) + "\\b",
                          "i"
                        ).exec(q) &&
                          (me.label || me))
                      );
                    });
                  }
                  function dt(xe) {
                    return z(xe, function (be, me) {
                      var ke = me.pattern || $(me);
                      return (
                        !be &&
                          (be = RegExp(
                            "\\b" + ke + "(?:/[\\d.]+|[ \\w.]*)",
                            "i"
                          ).exec(q)) &&
                          (be = A(be, ke, me.label || me)),
                        be
                      );
                    });
                  }
                  function Xe(xe) {
                    return z(xe, function (be, me) {
                      var ke = me.pattern || $(me);
                      return (
                        !be &&
                          (be =
                            RegExp("\\b" + ke + " *\\d+[.\\w_]*", "i").exec(
                              q
                            ) ||
                            RegExp(
                              "\\b" +
                                ke +
                                "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                              "i"
                            ).exec(q)) &&
                          ((be = String(
                            me.label && !RegExp(ke, "i").test(me.label)
                              ? me.label
                              : be
                          ).split("/"))[1] &&
                            !/[\d.]+/.test(be[0]) &&
                            (be[0] += " " + be[1]),
                          (me = me.label || me),
                          (be = N(
                            be[0]
                              .replace(RegExp(ke, "i"), me)
                              .replace(
                                RegExp("; *(?:" + me + "[_-])?", "i"),
                                " "
                              )
                              .replace(
                                RegExp("(" + me + ")[-_.]?(\\w)", "i"),
                                "$1 $2"
                              )
                          ))),
                        be
                      );
                    });
                  }
                  function ft(xe) {
                    return z(xe, function (be, me) {
                      return (
                        be ||
                        (RegExp(
                          me +
                            "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
                          "i"
                        ).exec(q) || 0)[1] ||
                        null
                      );
                    });
                  }
                  function ht() {
                    return this.description || "";
                  }
                  if (
                    (pe && (pe = [pe]),
                    Ce && !he && (he = Xe([Ce])),
                    (B = /\bGoogle TV\b/.exec(he)) && (he = B[0]),
                    /\bSimulator\b/i.test(q) &&
                      (he = (he ? he + " " : "") + "Simulator"),
                    X == "Opera Mini" &&
                      /\bOPiOS\b/.test(q) &&
                      le.push("running in Turbo/Uncompressed mode"),
                    X == "IE" && /\blike iPhone OS\b/.test(q)
                      ? ((B = J(q.replace(/like iPhone OS/, ""))),
                        (Ce = B.manufacturer),
                        (he = B.product))
                      : /^iP/.test(he)
                      ? (X || (X = "Safari"),
                        (ee =
                          "iOS" +
                          ((B = / OS ([\d_]+)/i.exec(q))
                            ? " " + B[1].replace(/_/g, ".")
                            : "")))
                      : X == "Konqueror" && !/buntu/i.test(ee)
                      ? (ee = "Kubuntu")
                      : (Ce &&
                          Ce != "Google" &&
                          ((/Chrome/.test(X) &&
                            !/\bMobile Safari\b/i.test(q)) ||
                            /\bVita\b/.test(he))) ||
                        (/\bAndroid\b/.test(ee) &&
                          /^Chrome/.test(X) &&
                          /\bVersion\//i.test(q))
                      ? ((X = "Android Browser"),
                        (ee = /\bAndroid\b/.test(ee) ? ee : "Android"))
                      : X == "Silk"
                      ? (/\bMobi/i.test(q) ||
                          ((ee = "Android"), le.unshift("desktop mode")),
                        /Accelerated *= *true/i.test(q) &&
                          le.unshift("accelerated"))
                      : X == "PaleMoon" && (B = /\bFirefox\/([\d.]+)\b/.exec(q))
                      ? le.push("identifying as Firefox " + B[1])
                      : X == "Firefox" &&
                        (B = /\b(Mobile|Tablet|TV)\b/i.exec(q))
                      ? (ee || (ee = "Firefox OS"), he || (he = B[1]))
                      : (!X ||
                          (B =
                            !/\bMinefield\b/i.test(q) &&
                            /\b(?:Firefox|Safari)\b/.exec(X))) &&
                        (X &&
                          !he &&
                          /[\/,]|^[^(]+?\)/.test(
                            q.slice(q.indexOf(B + "/") + 8)
                          ) &&
                          (X = null),
                        (B = he || Ce || ee) &&
                          (he ||
                            Ce ||
                            /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(
                              ee
                            )) &&
                          (X =
                            /[a-z]+(?: Hat)?/i.exec(
                              /\bAndroid\b/.test(ee) ? ee : B
                            ) + " Browser")),
                    se ||
                      (se = ft([
                        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))",
                        "Version",
                        $(X),
                        "(?:Firefox|Minefield|NetFront)",
                      ])),
                    (B =
                      (pe == "iCab" && parseFloat(se) > 3 && "WebKit") ||
                      (/\bOpera\b/.test(X) &&
                        (/\bOPR\b/.test(q) ? "Blink" : "Presto")) ||
                      (/\b(?:Midori|Nook|Safari)\b/i.test(q) &&
                        !/^(?:Trident|EdgeHTML)$/.test(pe) &&
                        "WebKit") ||
                      (!pe &&
                        /\bMSIE\b/i.test(q) &&
                        (ee == "Mac OS" ? "Tasman" : "Trident")) ||
                      (pe == "WebKit" &&
                        /\bPlayStation\b(?! Vita\b)/i.test(X) &&
                        "NetFront")) && (pe = [B]),
                    X == "IE" &&
                    (B = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(q) || 0)[1])
                      ? ((X += " Mobile"),
                        (ee =
                          "Windows Phone " + (/\+$/.test(B) ? B : B + ".x")),
                        le.unshift("desktop mode"))
                      : /\bWPDesktop\b/i.test(q)
                      ? ((X = "IE Mobile"),
                        (ee = "Windows Phone 8.x"),
                        le.unshift("desktop mode"),
                        se || (se = (/\brv:([\d.]+)/.exec(q) || 0)[1]))
                      : X != "IE" &&
                        pe == "Trident" &&
                        (B = /\brv:([\d.]+)/.exec(q)) &&
                        (X &&
                          le.push("identifying as " + X + (se ? " " + se : "")),
                        (X = "IE"),
                        (se = B[1])),
                    fe)
                  ) {
                    if (G(Q, "global"))
                      if (
                        (j &&
                          ((B = j.lang.System),
                          (de = B.getProperty("os.arch")),
                          (ee =
                            ee ||
                            B.getProperty("os.name") +
                              " " +
                              B.getProperty("os.version"))),
                        h && G(Q, "system") && (B = [Q.system])[0])
                      ) {
                        ee || (ee = B[0].os || null);
                        try {
                          (B[1] = Q.require("ringo/engine").version),
                            (se = B[1].join(".")),
                            (X = "RingoJS");
                        } catch {
                          B[0].global.system == Q.system && (X = "Narwhal");
                        }
                      } else
                        typeof Q.process == "object" &&
                        !Q.process.browser &&
                        (B = Q.process)
                          ? ((X = "Node.js"),
                            (de = B.arch),
                            (ee = B.platform),
                            (se = /[\d.]+/.exec(B.version)[0]))
                          : V && (X = "Rhino");
                    else
                      K((B = Q.runtime)) == C
                        ? ((X = "Adobe AIR"),
                          (ee = B.flash.system.Capabilities.os))
                        : K((B = Q.phantom)) == L
                        ? ((X = "PhantomJS"),
                          (se =
                            (B = B.version || null) &&
                            B.major + "." + B.minor + "." + B.patch))
                        : typeof U.documentMode == "number" &&
                          (B = /\bTrident\/(\d+)/i.exec(q)) &&
                          ((se = [se, U.documentMode]),
                          (B = +B[1] + 4) != se[1] &&
                            (le.push("IE " + se[1] + " mode"),
                            pe && (pe[1] = ""),
                            (se[1] = B)),
                          (se = X == "IE" ? String(se[1].toFixed(1)) : se[0]));
                    ee = ee && N(ee);
                  }
                  se &&
                    (B =
                      /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(se) ||
                      /(?:alpha|beta)(?: ?\d)?/i.exec(
                        q + ";" + (fe && oe.appMinorVersion)
                      ) ||
                      (/\bMinefield\b/i.test(q) && "a")) &&
                    ((ge = /b/i.test(B) ? "beta" : "alpha"),
                    (se =
                      se.replace(RegExp(B + "\\+?$"), "") +
                      (ge == "beta" ? Z : W) +
                      (/\d+\+?/.exec(B) || ""))),
                    X == "Fennec" ||
                    (X == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(ee))
                      ? (X = "Firefox Mobile")
                      : X == "Maxthon" && se
                      ? (se = se.replace(/\.[\d.]+/, ".x"))
                      : /\bXbox\b/i.test(he)
                      ? ((ee = null),
                        he == "Xbox 360" &&
                          /\bIEMobile\b/.test(q) &&
                          le.unshift("mobile mode"))
                      : (/^(?:Chrome|IE|Opera)$/.test(X) ||
                          (X && !he && !/Browser|Mobi/.test(X))) &&
                        (ee == "Windows CE" || /Mobi/i.test(q))
                      ? (X += " Mobile")
                      : X == "IE" && fe && Q.external === null
                      ? le.unshift("platform preview")
                      : (/\bBlackBerry\b/.test(he) || /\bBB10\b/.test(q)) &&
                        (B =
                          (RegExp(
                            he.replace(/ +/g, " *") + "/([.\\d]+)",
                            "i"
                          ).exec(q) || 0)[1] || se)
                      ? ((B = [B, /BB10/.test(q)]),
                        (ee =
                          (B[1]
                            ? ((he = null), (Ce = "BlackBerry"))
                            : "Device Software") +
                          " " +
                          B[0]),
                        (se = null))
                      : this != R &&
                        he != "Wii" &&
                        ((fe && te) ||
                          (/Opera/.test(X) &&
                            /\b(?:MSIE|Firefox)\b/i.test(q)) ||
                          (X == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(ee)) ||
                          (X == "IE" &&
                            ((ee && !/^Win/.test(ee) && se > 5.5) ||
                              (/\bWindows XP\b/.test(ee) && se > 8) ||
                              (se == 8 && !/\bTrident\b/.test(q))))) &&
                        !u.test((B = J.call(R, q.replace(u, "") + ";"))) &&
                        B.name &&
                        ((B =
                          "ing as " +
                          B.name +
                          ((B = B.version) ? " " + B : "")),
                        u.test(X)
                          ? (/\bIE\b/.test(B) && ee == "Mac OS" && (ee = null),
                            (B = "identify" + B))
                          : ((B = "mask" + B),
                            re
                              ? (X = N(re.replace(/([a-z])([A-Z])/g, "$1 $2")))
                              : (X = "Opera"),
                            /\bIE\b/.test(B) && (ee = null),
                            fe || (se = null)),
                        (pe = ["Presto"]),
                        le.push(B)),
                    (B = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(q) || 0)[1]) &&
                      ((B = [parseFloat(B.replace(/\.(\d)$/, ".0$1")), B]),
                      X == "Safari" && B[1].slice(-1) == "+"
                        ? ((X = "WebKit Nightly"),
                          (ge = "alpha"),
                          (se = B[1].slice(0, -1)))
                        : (se == B[1] ||
                            se ==
                              (B[2] = (/\bSafari\/([\d.]+\+?)/i.exec(q) ||
                                0)[1])) &&
                          (se = null),
                      (B[1] = (/\bChrome\/([\d.]+)/i.exec(q) || 0)[1]),
                      B[0] == 537.36 &&
                        B[2] == 537.36 &&
                        parseFloat(B[1]) >= 28 &&
                        pe == "WebKit" &&
                        (pe = ["Blink"]),
                      !fe || (!b && !B[1])
                        ? (pe && (pe[1] = "like Safari"),
                          (B =
                            ((B = B[0]),
                            B < 400
                              ? 1
                              : B < 500
                              ? 2
                              : B < 526
                              ? 3
                              : B < 533
                              ? 4
                              : B < 534
                              ? "4+"
                              : B < 535
                              ? 5
                              : B < 537
                              ? 6
                              : B < 538
                              ? 7
                              : B < 601
                              ? 8
                              : "8")))
                        : (pe && (pe[1] = "like Chrome"),
                          (B =
                            B[1] ||
                            ((B = B[0]),
                            B < 530
                              ? 1
                              : B < 532
                              ? 2
                              : B < 532.05
                              ? 3
                              : B < 533
                              ? 4
                              : B < 534.03
                              ? 5
                              : B < 534.07
                              ? 6
                              : B < 534.1
                              ? 7
                              : B < 534.13
                              ? 8
                              : B < 534.16
                              ? 9
                              : B < 534.24
                              ? 10
                              : B < 534.3
                              ? 11
                              : B < 535.01
                              ? 12
                              : B < 535.02
                              ? "13+"
                              : B < 535.07
                              ? 15
                              : B < 535.11
                              ? 16
                              : B < 535.19
                              ? 17
                              : B < 536.05
                              ? 18
                              : B < 536.1
                              ? 19
                              : B < 537.01
                              ? 20
                              : B < 537.11
                              ? "21+"
                              : B < 537.13
                              ? 23
                              : B < 537.18
                              ? 24
                              : B < 537.24
                              ? 25
                              : B < 537.36
                              ? 26
                              : pe != "Blink"
                              ? "27"
                              : "28"))),
                      pe &&
                        (pe[1] +=
                          " " +
                          (B +=
                            typeof B == "number"
                              ? ".x"
                              : /[.+]/.test(B)
                              ? ""
                              : "+")),
                      X == "Safari" && (!se || parseInt(se) > 45) && (se = B)),
                    X == "Opera" && (B = /\bzbov|zvav$/.exec(ee))
                      ? ((X += " "),
                        le.unshift("desktop mode"),
                        B == "zvav"
                          ? ((X += "Mini"), (se = null))
                          : (X += "Mobile"),
                        (ee = ee.replace(RegExp(" *" + B + "$"), "")))
                      : X == "Safari" &&
                        /\bChrome\b/.exec(pe && pe[1]) &&
                        (le.unshift("desktop mode"),
                        (X = "Chrome Mobile"),
                        (se = null),
                        /\bOS X\b/.test(ee)
                          ? ((Ce = "Apple"), (ee = "iOS 4.3+"))
                          : (ee = null)),
                    se &&
                      se.indexOf((B = /[\d.]+$/.exec(ee))) == 0 &&
                      q.indexOf("/" + B + "-") > -1 &&
                      (ee = ue(ee.replace(B, ""))),
                    pe &&
                      !/\b(?:Avant|Nook)\b/.test(X) &&
                      (/Browser|Lunascape|Maxthon/.test(X) ||
                        (X != "Safari" &&
                          /^iOS/.test(ee) &&
                          /\bSafari\b/.test(pe[1])) ||
                        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(
                          X
                        ) &&
                          pe[1])) &&
                      (B = pe[pe.length - 1]) &&
                      le.push(B),
                    le.length && (le = ["(" + le.join("; ") + ")"]),
                    Ce && he && he.indexOf(Ce) < 0 && le.push("on " + Ce),
                    he &&
                      le.push(
                        (/^on /.test(le[le.length - 1]) ? "" : "on ") + he
                      ),
                    ee &&
                      ((B = / ([\d.+]+)$/.exec(ee)),
                      (Te = B && ee.charAt(ee.length - B[0].length - 1) == "/"),
                      (ee = {
                        architecture: 32,
                        family: B && !Te ? ee.replace(B[0], "") : ee,
                        version: B ? B[1] : null,
                        toString: function () {
                          var xe = this.version;
                          return (
                            this.family +
                            (xe && !Te ? " " + xe : "") +
                            (this.architecture == 64 ? " 64-bit" : "")
                          );
                        },
                      })),
                    (B = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(de)) &&
                    !/\bi686\b/i.test(de)
                      ? (ee &&
                          ((ee.architecture = 64),
                          (ee.family = ee.family.replace(
                            RegExp(" *" + B),
                            ""
                          ))),
                        X &&
                          (/\bWOW64\b/i.test(q) ||
                            (fe &&
                              /\w(?:86|32)$/.test(oe.cpuClass || oe.platform) &&
                              !/\bWin64; x64\b/i.test(q))) &&
                          le.unshift("32-bit"))
                      : ee &&
                        /^OS X/.test(ee.family) &&
                        X == "Chrome" &&
                        parseFloat(se) >= 39 &&
                        (ee.architecture = 64),
                    q || (q = null);
                  var we = {};
                  return (
                    (we.description = q),
                    (we.layout = pe && pe[0]),
                    (we.manufacturer = Ce),
                    (we.name = X),
                    (we.prerelease = ge),
                    (we.product = he),
                    (we.ua = q),
                    (we.version = X && se),
                    (we.os = ee || {
                      architecture: null,
                      family: null,
                      version: null,
                      toString: function () {
                        return "null";
                      },
                    }),
                    (we.parse = J),
                    (we.toString = ht),
                    we.version && le.unshift(se),
                    we.name && le.unshift(X),
                    ee &&
                      X &&
                      !(
                        ee == String(ee).split(" ")[0] &&
                        (ee == X.split(" ")[0] || he)
                      ) &&
                      le.push(he ? "(" + ee + ")" : "on " + ee),
                    le.length && (we.description = le.join(" ")),
                    we
                  );
                }
                var ae = J();
                typeof r == "function" && typeof r.amd == "object" && r.amd
                  ? ((t.platform = ae),
                    r(function () {
                      return ae;
                    }))
                  : s && l
                  ? R(ae, function (q, Q) {
                      s[Q] = q;
                    })
                  : (t.platform = ae);
              }).call(this);
            }).call(
              this,
              typeof global < "u"
                ? global
                : typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : {}
            );
          },
          {},
        ],
      },
      {},
      [1]
    )(1);
  return delete m.noConflict, m;
});
csui.define(
  "csui/lib/bootstrap3-typeahead",
  ["csui/lib/jquery", "csui/utils/log"],
  function (r, y) {
    "use strict";
    var v = function (u, p) {
      (this.$element = r(u)),
        (this.scrollContainerHeight = !!p.scrollContainerHeight),
        (this.options = r.extend({}, r.fn.typeahead.defaults, p)),
        (this.matcher = this.options.matcher || this.matcher),
        (this.sorter = this.options.sorter || this.sorter),
        (this.select = this.options.select || this.select),
        (this.autoSelect =
          typeof this.options.autoSelect == "boolean"
            ? this.options.autoSelect
            : !0),
        (this.highlighter = this.options.highlighter || this.highlighter),
        (this.render = this.options.render || this.render),
        (this.updater = this.options.updater || this.updater),
        (this.displayText = this.options.displayText || this.displayText),
        (this.source = this.options.source),
        (this.delay = this.options.delay),
        (this.$menu = r(this.options.menu)),
        this.options.pickerListId && this.$menu.attr("id", p.pickerListId),
        this.options.pickerListClass &&
          this.$menu.addClass(this.options.pickerListClass),
        (this.$appendTo = this.options.appendTo
          ? r(this.options.appendTo)
          : null),
        (this.shown = !1),
        (this.blur = this.options.blur || this.blur),
        (this.focus = this.options.focus || this.focus),
        this.listen(),
        (this.showHintOnFocus =
          typeof this.options.showHintOnFocus == "boolean" ||
          this.options.showHintOnFocus === "all"
            ? this.options.showHintOnFocus
            : !1),
        (this.afterSelect = this.options.afterSelect),
        (this.currentHighlighter = this.options.currentHighlighter),
        (this.nextHighlighter = this.options.nextHighlighter),
        (this.accessibility = this.options.accessibility),
        (this.addItem = !1),
        (this.prettyScrolling =
          r.isFunction(r.fn.perfectScrollbar) && this.options.prettyScrolling),
        this.prettyScrolling &&
          (y.warn("perfect scrollbar is depricated hence ignoring this option"),
          (this.prettyScrolling = !1)),
        (this.$scrollContainer = this.options.scrollContainer
          ? r(this.options.scrollContainer)
          : this.$menu),
        (this.handleNoResults = !!this.options.handleNoResults),
        (this.emptyTemplate =
          this.handleNoResults && this.options.emptyTemplate
            ? this.options.emptyTemplate
            : ""),
        this.handleNoResults && (this.dataFound = !1),
        this.options.showMore && (this.options.rollOver = !1);
    };
    v.prototype = {
      constructor: v,
      select: function () {
        var u = this.$menu.find(".binf-active").data("value");
        if ((this.$element.data("active", u), this.autoSelect || u)) {
          var p = this.updater(u);
          this.$element.val(this.displayText(p) || p).trigger("change"),
            this.afterSelect(p);
        }
        return this.hide();
      },
      updater: function (u) {
        return u;
      },
      setSource: function (u) {
        this.source = u;
      },
      show: function () {
        var u = r.extend({}, this.$element.position(), {
            height: this.$element.outerHeight(),
          }),
          p;
        (p =
          typeof this.options.scrollHeight == "function"
            ? this.options.scrollHeight.call()
            : this.options.scrollHeight),
          (this.$appendTo = this.$appendTo
            ? this.$scrollContainer.appendTo(this.$appendTo)
            : this.$scrollContainer.insertAfter(this.$element)),
          this.options.beforeShow && this.options.beforeShow(this),
          (this.$appendTo
            ? this.$menu.appendTo(this.$appendTo)
            : this.$menu.insertAfter(this.$element)
          )
            .css({ top: u.top + u.height + p, left: u.left })
            .show(),
          this.$scrollContainer[0] !== this.$menu[0] &&
            this.$scrollContainer.show();
        var x,
          S,
          T,
          k = [],
          A;
        this.options.showMore &&
          this.allItems &&
          (this.$scrollContainer.css("height", "auto"),
          (this.scrollItemsHeight = this.$scrollContainer.outerHeight()),
          this.$menu.html(this.allItems),
          delete this.allItems),
          this.scrollItemsHeight && k.push(this.scrollItemsHeight),
          (this.scrollContainerHeight ||
            !(this.options.showMore && this.options.items > 0)) &&
            ((x = isNaN(this.options.scrollContainerHeight)
              ? void 0
              : this.options.scrollContainerHeight - 0),
            x
              ? k.push(x)
              : this.options.scrollContainerHeight !== "auto" &&
                (this.$scrollContainer.css(
                  "height",
                  this.options.scrollContainerHeight
                ),
                (A = this.$scrollContainer.outerHeight()))),
          (k.length > 0 || A) &&
            ((S =
              this.$scrollContainer.outerHeight() -
              this.$scrollContainer.height()),
            (T = c.call(this)),
            k.push(T + S),
            (x = k.length === 1 ? k[0] : Math.min.apply(Math, k)),
            (!A || x < A) && this.$scrollContainer.css("height", x));
        var M = 0;
        return (
          this.options.showMore &&
            !this.processMore &&
            this.$scrollContainer.scrollTop(0),
          (this.shown = !0),
          this.options.afterShow && this.options.afterShow(this),
          this.options.showMore &&
            ((T = c.call(this)),
            (x = this.$scrollContainer.outerHeight()),
            (S = x - this.$scrollContainer.height()),
            x - S + M >= T &&
              this.options.showMore &&
              this.options.showMore() &&
              r('<li class="typeahead-force-scrollbar"></li>')
                .appendTo(this.$menu)
                .css({ "background-color": "transparent", height: M + 1 })),
          this
        );
      },
      hide: function () {
        return (
          this.$scrollContainer.hide(),
          this.$scrollContainer[0] !== this.$menu[0] && this.$menu.hide(),
          (this.shown = !1),
          this
        );
      },
      lookup: function (u) {
        if (
          (typeof u < "u" && u !== null
            ? (this.query = u)
            : (this.query = this.$element.val() || ""),
          this.query.length < this.options.minLength)
        )
          return this.shown ? this.hide() : this;
        var p = r.proxy(function () {
          var x = this;
          this.query.length < this.options.minLength ||
            (r.isFunction(this.source)
              ? r
                  .when(this.source(this.query, r.proxy(this.process, this)))
                  .done(function (S) {
                    x.process(S);
                  })
              : this.source && this.process(this.source));
        }, this);
        clearTimeout(this.lookupWorker),
          (this.lookupWorker = setTimeout(p, this.delay));
      },
      process: function (u) {
        this.dataFound = !0;
        var p = this;
        return (
          (u = r.grep(u, function (x) {
            return p.matcher(x);
          })),
          u.length === 0 && this.handleNoResults
            ? ((this.dataFound = !1), this.renderNoResults().show())
            : ((u = this.sorter(u)),
              !u.length && !this.options.addItem
                ? this.shown
                  ? this.hide()
                  : this
                : (u.length > 0
                    ? this.$element.data("active", u[0])
                    : this.$element.data("active", null),
                  this.options.addItem && u.push(this.options.addItem),
                  this.options.items == "all" || this.options.showMore
                    ? this.render(u).show()
                    : this.render(u.slice(0, this.options.items)).show()))
        );
      },
      matcher: function (u) {
        var p = this.displayText(u);
        return ~p.toLowerCase().indexOf(this.query.toLowerCase());
      },
      sorter: function (u) {
        for (var p = [], x = [], S = [], T; (T = u.shift()); ) {
          var k = this.displayText(T);
          k.toLowerCase().indexOf(this.query.toLowerCase())
            ? ~k.indexOf(this.query)
              ? x.push(T)
              : S.push(T)
            : p.push(T);
        }
        return p.concat(x, S);
      },
      highlighter: function (u) {
        var p = r("<div></div>"),
          x = this.query,
          S = u.toLowerCase().indexOf(x.toLowerCase()),
          T,
          k,
          A,
          M,
          N;
        if (((T = x.length), T === 0)) return p.text(u).html();
        for (; S > -1; )
          (k = u.substr(0, S)),
            (A = u.substr(S, T)),
            (M = u.substr(S + T)),
            (N = r("<strong></strong>").text(A)),
            p.append(document.createTextNode(k)).append(N),
            (u = M),
            (S = u.toLowerCase().indexOf(x.toLowerCase()));
        return p.append(document.createTextNode(u)).html();
      },
      render: function (u) {
        var p = this,
          x = this,
          S = !1,
          T = [];
        return (
          (u = r(u).map(function (k, A) {
            function M() {
              (k = r(p.options.item).data("value", A)),
                k.find("a").html(p.highlighter(N, A)),
                k.attr("id", "user-item" + A.cid),
                N == x.$element.val() &&
                  (k.addClass("binf-active"),
                  x.$element.data("active", A),
                  (S = !0));
            }
            var N = x.displayText(A);
            return (
              M(),
              x.options.showMore &&
                !x.scrollItemsHeight &&
                x.options.items > 0 &&
                T.length < x.options.items &&
                (T.push(k[0]), M()),
              k[0]
            );
          })),
          this.autoSelect &&
            !S &&
            (u.first().addClass("binf-active"),
            this.$element.data("active", u.first().data("value"))),
          this.options.items > 0 && T.length === this.options.items
            ? ((this.allItems = u), this.$menu.html(T))
            : (delete this.allItems, this.$menu.html(u)),
          this.nextHighlighter(u.first()),
          this
        );
      },
      renderNoResults: function () {
        return (
          this.$menu
            .html(this.emptyTemplate)
            .addClass("csui-no-results-wrapper"),
          this
        );
      },
      displayText: function (u) {
        return u.name || u;
      },
      next: function (u) {
        var p = this.$menu.find(".binf-active"),
          x = p.next("li:not(.typeahead-force-scrollbar)");
        if (!x.length) {
          if (p.length && !this.options.rollOver && this.shown) return;
          x = r(this.$menu.find("li:not(.typeahead-force-scrollbar)")[0]);
        }
        g.call(this, x, u);
      },
      prev: function (u) {
        var p = this.$menu.find(".binf-active"),
          x = p.prev("li:not(.typeahead-force-scrollbar)");
        if (!x.length) {
          if (!this.options.rollOver) return;
          x = this.$menu.find("li:not(.typeahead-force-scrollbar)").last();
        }
        g.call(this, x, u);
      },
      forward: function (u) {
        function p(T, k) {
          if (!(k >= T.length - 1)) {
            for (
              var A = m(T, k), M = this.$scrollContainer.height(), N = k + 1;
              N < T.length;
              N++
            ) {
              var R = n(T, N);
              if (R - A > M) {
                N--;
                break;
              } else {
                if (R - A === M) break;
                if (N + 1 >= T.length) return;
              }
            }
            if ((N <= k && (N = k + 1), N < T.length)) return N;
          }
        }
        function x(T, k) {
          var A = m(T, k >= 0 ? k : 0),
            M = n(T, T.length - 1);
          return M - A + a(r(T[T.length - 1])) < this.$scrollContainer.height();
        }
        function S(T) {
          var k = this.$menu.find("li:not(.typeahead-force-scrollbar)"),
            A = p.call(this, k, T >= 0 ? T : 0);
          if (
            A == null &&
            this.options.showMore &&
            x.call(this, k, T) &&
            this.options.showMore()
          ) {
            l.call(this, S, T);
            return;
          }
          g.call(this, r(k[A >= 0 ? A : k.length - 1]), u);
        }
        S.call(
          this,
          this.$menu
            .find("li:not(.typeahead-force-scrollbar)")
            .index(this.$menu.find(".binf-active"))
        );
      },
      backward: function (u) {
        function p(k, A) {
          if (!(A <= 0)) {
            for (
              var M = n(k, A), N = this.$scrollContainer.height(), R = A - 1;
              R >= 0;
              R--
            ) {
              var K = m(k, R);
              if (M - K > N) {
                R++;
                break;
              } else if (M - K === N) break;
            }
            if ((R >= A && (R = A - 1), R >= 0)) return R;
          }
        }
        var x = this.$menu.find("li:not(.typeahead-force-scrollbar)"),
          S = x.index(this.$menu.find(".binf-active")),
          T = p.call(this, x, S >= 0 ? S : 0);
        g.call(this, r(x[T >= 0 ? T : 0]), u);
      },
      first: function (u) {
        g.call(
          this,
          this.$menu.find("li:not(.typeahead-force-scrollbar)").first(),
          u
        );
      },
      last: function (u) {
        g.call(
          this,
          this.$menu.find("li:not(.typeahead-force-scrollbar)").last(),
          u
        );
      },
      listen: function () {
        this.$element
          .on("focus", r.proxy(this.focus, this))
          .on("blur", r.proxy(this.blur, this))
          .on("keypress", r.proxy(this.keypress, this))
          .on("keyup", r.proxy(this.keyup, this)),
          this.eventSupported("keydown") &&
            this.$element.on("keydown", r.proxy(this.keydown, this)),
          this.$menu
            .on("click", r.proxy(this.click, this))
            .on("mouseenter", "li", r.proxy(this.mouseenter, this))
            .on("mouseleave", "li", r.proxy(this.mouseleave, this));
      },
      destroy: function () {
        this.$element.data("typeahead", null),
          this.$element.data("active", null),
          this.$element.off("focus").off("blur").off("keypress").off("keyup"),
          this.eventSupported("keydown") && this.$element.off("keydown"),
          this.$menu.remove();
      },
      eventSupported: function (u) {
        var p = u in this.$element;
        return (
          p ||
            (this.$element.setAttribute(u, "return;"),
            (p = typeof this.$element[u] == "function")),
          p
        );
      },
      move: function (u) {
        function p() {
          if (this.shown && !u.shiftKey) return u.preventDefault(), !0;
        }
        switch (u.keyCode) {
          case 9:
          case 13:
          case 27:
            this.shown && u.preventDefault();
            break;
          case 33:
            p.call(this) && this.backward(u);
            break;
          case 34:
            p.call(this) && this.forward(u);
            break;
          case 35:
            u.ctrlKey &&
              (!this.shown && u.preventDefault(), p.call(this) && this.last(u));
            break;
          case 36:
            u.ctrlKey &&
              (!this.shown && u.preventDefault(),
              p.call(this) && this.first(u));
            break;
          case 38:
            p.call(this) && this.prev(u);
            break;
          case 40:
            p.call(this) && this.next(u);
            break;
        }
      },
      keydown: function (u) {
        (this.suppressKeyPressRepeat = ~r.inArray(
          u.keyCode,
          [40, 38, 33, 34, 35, 36, 9, 13, 27]
        )),
          !this.shown && u.keyCode == 40 ? this.lookup() : this.move(u);
      },
      keypress: function (u) {
        this.suppressKeyPressRepeat || this.move(u);
      },
      keyup: function (u) {
        switch (u.keyCode) {
          case 40:
          case 39:
          case 38:
          case 37:
          case 36:
          case 35:
          case 34:
          case 33:
          case 16:
          case 17:
          case 18:
          case 44:
            break;
          case 9:
          case 13:
            if (!this.shown || (this.handleNoResults && !this.dataFound))
              return;
            this.select();
            break;
          case 27:
            if (!this.shown) return;
            this.hide();
            break;
          case 116:
          case 113:
            return;
          case 8:
          case 46:
            if (this.options.collection.filters?.name === this.$element.val())
              break;
          default:
            this.lookup();
        }
        u.preventDefault();
      },
      focus: function (u) {
        this.focused ||
          ((this.focused = !0),
          this.options.showHintOnFocus &&
            this.skipShowHintOnFocus !== !0 &&
            (this.options.showHintOnFocus === "all"
              ? this.lookup("")
              : this.lookup())),
          this.skipShowHintOnFocus && (this.skipShowHintOnFocus = !1);
      },
      blur: function (u) {
        (this.focused = !1), !this.mousedover && this.shown && this.hide();
      },
      click: function (u) {
        if ((u.preventDefault(), this.dataFound)) {
          var p =
            u.target && u.target.nodeName === "LI"
              ? u.target
              : r(u.target).parentsUntil(this.$menu, "li")[0];
          p &&
            (this.currentHighlighter(this.$menu.find(".binf-active")),
            this.$menu.find(".binf-active").removeClass("binf-active"),
            r(p).addClass("binf-active"),
            this.nextHighlighter(this.$menu.find(".binf-active"))),
            (this.skipShowHintOnFocus = !0),
            this.select(),
            this.$element[0].focus();
        } else this.hide();
      },
      mouseenter: function (u) {
        (this.mousedover = !0),
          this.scrollByKey
            ? delete this.scrollByKey
            : (this.currentHighlighter(this.$menu.find(".binf-active")),
              this.$menu.find(".binf-active").removeClass("binf-active"),
              r(u.currentTarget).addClass("binf-active"),
              this.nextHighlighter(this.$menu.find(".binf-active")));
      },
      mouseleave: function (u) {
        (this.mousedover = !1), !this.focused && this.shown && this.hide();
      },
      scrollIntoView: function (u, p) {
        var x = this.$menu.find(u),
          S = this.$scrollContainer,
          T = x.outerHeight(!0),
          k = i(x) - t(S),
          A = S.scrollTop(),
          M = S.height();
        if (p) {
          var N = (this.scrollByKey = { keyEvent: p });
          setTimeout(
            function () {
              this.scrollByKey &&
                this.scrollByKey === N &&
                delete this.scrollByKey;
            }.bind(this),
            30
          );
        }
        var R = x.next("li:not(.typeahead-force-scrollbar)"),
          K = R.length === 0 ? 0 : e(R.height(), R.outerHeight(!0));
        k < 0
          ? S.scrollTop(A + k)
          : k + T + K > M && S.scrollTop(A + k + K + T - M);
      },
    };
    function m(u, p) {
      var x = r(u[p]),
        S = s(x) - e(x.height(), x.outerHeight(!0));
      return S;
    }
    function n(u, p) {
      var x = r(u[p]),
        S = s(x);
      return (
        p + 1 < u.length &&
          ((x = r(u[p + 1])), (S += e(x.height(), x.outerHeight(!0)))),
        S
      );
    }
    function e(u, p) {
      return Math.min(Math.max(2 * u - p, 0.4 * p), 32);
    }
    function a(u) {
      var p = o(u, "font-size"),
        x = p + u.outerHeight(!0) - u.height();
      return x + e(p, x);
    }
    function c() {
      var u;
      return (
        this.$scrollContainer[0] === this.$menu[0]
          ? ((u = 0),
            this.$menu
              .find("li:not(.typeahead-force-scrollbar)")
              .each(function (p, x) {
                u += r(x).outerHeight(!0);
              }))
          : (u =
              this.$menu.outerHeight(!0) -
              (this.$menu
                .find("li.typeahead-force-scrollbar")
                .outerHeight(!0) || 0)),
        u
      );
    }
    function o(u, p) {
      return parseFloat(u.css(p).replace("px", "")) || 0;
    }
    function t(u) {
      return u.offset().top + o(u, "border-top-width") + o(u, "padding-top");
    }
    function i(u) {
      return u.offset().top - o(u, "margin-top");
    }
    function s(u) {
      return i(u) + u.outerHeight(!0);
    }
    function l(u, p) {
      r.isFunction(this.source)
        ? this.source(this.query, r.proxy(x, this, p), { more: !0 }).then(
            function (S) {
              x.call(this, p, S);
            }.bind(this)
          )
        : this.source && x.call(this, p, this.source);
      function x(S, T) {
        (this.processMore = !0),
          this.process(T),
          delete this.processMore,
          u && u.call(this, S);
      }
    }
    function g(u, p) {
      var x = this.$menu.find(".binf-active");
      x.removeClass("binf-active"),
        this.currentHighlighter(x),
        this.accessibility && this.accessibility(u),
        u.addClass("binf-active"),
        this.scrollIntoView(u[0], p),
        this.nextHighlighter(u);
      var S = u.next("li:not(.typeahead-force-scrollbar)");
      if (S.length === 0 && this.options.showMore && this.options.showMore()) {
        var T = this.$menu.find("li:not(.typeahead-force-scrollbar)").index(u);
        l.call(
          this,
          function (k) {
            g.call(
              this,
              r(this.$menu.find("li:not(.typeahead-force-scrollbar)")[k]),
              p
            );
          },
          T
        );
      }
    }
    var f = r.fn.typeahead;
    (r.fn.typeahead = function (u) {
      var p = arguments;
      return typeof u == "string" && u == "getActive"
        ? this.data("active")
        : this.each(function () {
            var x = r(this),
              S = x.data("typeahead"),
              T = typeof u == "object" && u;
            S || x.data("typeahead", (S = new v(this, T))),
              typeof u == "string" &&
                (p.length > 1
                  ? S[u].apply(S, Array.prototype.slice.call(p, 1))
                  : S[u]());
          });
    }),
      (r.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead binf-dropdown-menu" role="listbox" id="user-picker-ul"></ul>',
        item: '<li role="option"><a href="#"></a></li>',
        minLength: 1,
        scrollHeight: 0,
        autoSelect: !0,
        afterSelect: r.noop,
        currentHighlighter: r.noop,
        nextHighlighter: r.noop,
        addItem: !1,
        delay: 0,
        prettyScrolling: !1,
        scrollContainer:
          '<div class="typeahead scroll-container csui-normal-scrolling csui-no-scroll-x"></div>',
        scrollContainerHeight: 320,
        rollOver: !0,
      }),
      (r.fn.typeahead.Constructor = v),
      (r.fn.typeahead.noConflict = function () {
        return (r.fn.typeahead = f), this;
      }),
      r(document).on(
        "focus.typeahead.data-api",
        '[data-provide="typeahead"]',
        function (u) {
          var p = r(this);
          p.data("typeahead") || p.typeahead(p.data());
        }
      );
  }
);
csui.define("csui/lib/jquery.mousehover", ["csui/lib/jquery"], function (r) {
  "use strict";
  var y = r.fn.mousehover,
    v;
  function m(n, e, a) {
    var c;
    if (typeof n == "object") return n;
    if (!n) throw new Error("Missing event handler or method.");
    if (
      (a || (a = typeof e == "object" ? e : {}),
      (c = a.namespace),
      (c = c ? "." + c : ""),
      typeof n == "string")
    ) {
      if (n !== "off") throw new Error("Unsupported method.");
      return { namespace: c };
    }
    return {
      handlerIn: n,
      handlerOut: typeof e == "function" ? e : n,
      namespace: c,
    };
  }
  return (
    navigator.userAgent.indexOf("iPad") > 0 ||
    navigator.userAgent.indexOf("iPhone") > 0
      ? (r.fn.mousehover = function (n, e, a) {
          return this;
        })
      : "onpointerenter" in window && navigator.pointerEnabled !== !1
      ? (r.fn.mousehover = function (n, e, a) {
          var c = m(n, e, a),
            o = c.namespace;
          return (
            (n = c.handlerIn),
            n
              ? ((e = c.handlerOut),
                this.on("pointerenter" + o, function (t) {
                  t.originalEvent.pointerType === "mouse" && n.call(this, t);
                }).on("pointerleave" + o, function (t) {
                  t.originalEvent.pointerType === "mouse" && e.call(this, t);
                }))
              : this.off("pointerenter" + o + " pointerleave" + o)
          );
        })
      : "ontouchstart" in window
      ? ((v = "mousehover-start"),
        (r.fn.mousehover = function (n, e, a) {
          var c = m(n, e, a),
            o = c.namespace;
          return (
            (n = c.handlerIn),
            n
              ? ((e = c.handlerOut),
                this.on("touchend" + o, function () {
                  r(this).data(v, new Date().getTime());
                })
                  .on("mouseenter" + o, function (t) {
                    var i = r(this),
                      s = i.data(v),
                      l;
                    if (s && ((l = new Date().getTime()), l - s < 50))
                      return r(this).removeData(v);
                    r(this).data(v, !0), n.call(this, t);
                  })
                  .on("mouseleave" + o, function (t) {
                    var i = r(this);
                    i.data(v) && (i.removeData(v), e.call(this, t));
                  }))
              : this.off("touchend" + o + " mouseenter" + o + " mouseleave" + o)
          );
        }))
      : (r.fn.mousehover = function (n, e, a) {
          var c = m(n, e, a),
            o = c.namespace;
          return (
            (n = c.handlerIn),
            n
              ? ((e = c.handlerOut),
                this.on("mouseenter" + o, n).on("mouseleave" + o, e))
              : this.off("mouseenter" + o + " mouseleave" + o)
          );
        }),
    (r.fn.mousehover.noConflict = function () {
      return (r.fn.mousehover = y), this;
    }),
    r.fn.mousehover
  );
});
csui.define(
  "csui/lib/fancytree/jquery.fancytree",
  ["csui/lib/jquery", "csui/lib/jquery.ui/js/jquery-ui"],
  function (r) {
    "use strict";
    if (r.ui && r.ui.fancytree) {
      r.ui.fancytree.warn("Fancytree: ignored duplicate include");
      return;
    }
    var y,
      v,
      m = null,
      n = new RegExp(/\.|\//),
      e = /[&<>"'\/]/g,
      a = /[<>"'\/]/g,
      c = "$recursive_request",
      o = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      },
      t = { 16: !0, 17: !0, 18: !0 },
      i = {
        8: "backspace",
        9: "tab",
        10: "return",
        13: "return",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        59: ";",
        61: "=",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
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
      },
      s = { 16: "shift", 17: "ctrl", 18: "alt", 91: "meta", 93: "meta" },
      l = { 0: "", 1: "left", 2: "middle", 3: "right" },
      g =
        "active expanded focus folder lazy radiogroup selected unselectable unselectableIgnore".split(
          " "
        ),
      f = {},
      u = "columns types".split(" "),
      p =
        "checkbox expanded extraClasses folder icon iconTooltip key lazy partsel radiogroup refKey selected statusNodeType title tooltip type unselectable unselectableIgnore unselectableStatus".split(
          " "
        ),
      x = {},
      S = {},
      T = { active: !0, children: !0, data: !0, focus: !0 };
    for (y = 0; y < g.length; y++) f[g[y]] = !0;
    for (y = 0; y < p.length; y++)
      (v = p[y]),
        (x[v] = !0),
        v !== v.toLowerCase() && (S[v.toLowerCase()] = v);
    function k(d, h) {
      d || ((h = h ? ": " + h : ""), r.error("Fancytree assertion failed" + h));
    }
    k(r.ui, "Fancytree requires jQuery UI (http://jqueryui.com)");
    function A(d, h) {
      var b,
        _,
        C = window.console ? window.console[d] : null;
      if (C)
        try {
          C.apply(window.console, h);
        } catch {
          for (_ = "", b = 0; b < h.length; b++) _ += h[b];
          C(_);
        }
    }
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      });
    function M(d) {
      return !!(d.tree && d.statusNodeType !== void 0);
    }
    function N(d, h, b, _) {
      var C,
        E,
        F,
        L = r.map(r.trim(d).split("."), function (V) {
          return parseInt(V, 10);
        }),
        j = r.map(Array.prototype.slice.call(arguments, 1), function (V) {
          return parseInt(V, 10);
        });
      for (C = 0; C < j.length; C++)
        if (((E = L[C] || 0), (F = j[C] || 0), E !== F)) return E > F;
      return !0;
    }
    function R() {
      var d,
        h,
        b,
        _,
        C,
        E = arguments[0] || {},
        F = 1,
        L = arguments.length;
      if ((typeof E != "object" && !r.isFunction(E) && (E = {}), F === L))
        throw "need at least two args";
      for (; F < L; F++)
        if ((d = arguments[F]) != null)
          for (h in d)
            (b = E[h]),
              (_ = d[h]),
              E !== _ &&
                (_ && r.isPlainObject(_)
                  ? ((C = b && r.isPlainObject(b) ? b : {}), (E[h] = R(C, _)))
                  : _ !== void 0 && (E[h] = _));
      return E;
    }
    function K(d, h, b, _, C) {
      var E = (function () {
        var F = h[d],
          L = _[d],
          j = h.ext[C],
          V = function () {
            return F.apply(h, arguments);
          },
          W = function (Z) {
            return F.apply(h, Z);
          };
        return function () {
          var Z = h._local,
            U = h._super,
            te = h._superApply;
          try {
            return (
              (h._local = j),
              (h._super = V),
              (h._superApply = W),
              L.apply(h, arguments)
            );
          } finally {
            (h._local = Z), (h._super = U), (h._superApply = te);
          }
        };
      })();
      return E;
    }
    function G(d, h, b, _) {
      for (var C in b)
        typeof b[C] == "function"
          ? typeof d[C] == "function"
            ? (d[C] = K(C, d, h, b, _))
            : C.charAt(0) === "_"
            ? (d.ext[_][C] = K(C, d, h, b, _))
            : r.error(
                "Could not override tree." +
                  C +
                  ". Use prefix '_' to create tree." +
                  _ +
                  "._" +
                  C
              )
          : C !== "options" && (d.ext[_][C] = b[C]);
    }
    function $(d, h) {
      return d === void 0
        ? r
            .Deferred(function () {
              this.resolve();
            })
            .promise()
        : r
            .Deferred(function () {
              this.resolveWith(d, h);
            })
            .promise();
    }
    function z(d, h) {
      return d === void 0
        ? r
            .Deferred(function () {
              this.reject();
            })
            .promise()
        : r
            .Deferred(function () {
              this.rejectWith(d, h);
            })
            .promise();
    }
    function ue(d, h) {
      return function () {
        d.resolveWith(h);
      };
    }
    function J(d) {
      var h = r.extend({}, d.data()),
        b = h.json;
      return (
        delete h.fancytree,
        delete h.uiFancytree,
        b && (delete h.json, (h = r.extend(h, b))),
        h
      );
    }
    function ae(d) {
      return ("" + d).replace(a, function (h) {
        return o[h];
      });
    }
    function q(d) {
      return (
        (d = d.toLowerCase()),
        function (h) {
          return h.title.toLowerCase().indexOf(d) >= 0;
        }
      );
    }
    function Q(d) {
      var h = new RegExp("^" + d, "i");
      return function (b) {
        return h.test(b.title);
      };
    }
    function ne(d, h) {
      var b, _, C, E;
      for (
        this.parent = d,
          this.tree = d.tree,
          this.ul = null,
          this.li = null,
          this.statusNodeType = null,
          this._isLoading = !1,
          this._error = null,
          this.data = {},
          b = 0,
          _ = p.length;
        b < _;
        b++
      )
        (C = p[b]), (this[C] = h[C]);
      (this.unselectableIgnore != null || this.unselectableStatus != null) &&
        (this.unselectable = !0),
        h.hideCheckbox &&
          r.error(
            "'hideCheckbox' node option was removed in v2.23.0: use 'checkbox: false'"
          ),
        h.data && r.extend(this.data, h.data);
      for (C in h)
        !x[C] && !r.isFunction(h[C]) && !T[C] && (this.data[C] = h[C]);
      this.key == null
        ? this.tree.options.defaultKey
          ? ((this.key = this.tree.options.defaultKey(this)),
            k(this.key, "defaultKey() must return a unique key"))
          : (this.key = "_" + m._nextNodeKey++)
        : (this.key = "" + this.key),
        h.active &&
          (k(this.tree.activeNode === null, "only one active node allowed"),
          (this.tree.activeNode = this)),
        h.selected && (this.tree.lastSelectedNode = this),
        (E = h.children),
        E
          ? E.length
            ? this._setChildren(E)
            : (this.children = this.lazy ? [] : null)
          : (this.children = null),
        this.tree._callHook("treeRegisterNode", this.tree, !0, this);
    }
    ne.prototype = {
      _findDirectChild: function (d) {
        var h,
          b,
          _ = this.children;
        if (_)
          if (typeof d == "string") {
            for (h = 0, b = _.length; h < b; h++)
              if (_[h].key === d) return _[h];
          } else {
            if (typeof d == "number") return this.children[d];
            if (d.parent === this) return d;
          }
        return null;
      },
      _setChildren: function (d) {
        k(
          d && (!this.children || this.children.length === 0),
          "only init supported"
        ),
          (this.children = []);
        for (var h = 0, b = d.length; h < b; h++)
          this.children.push(new ne(this, d[h]));
      },
      addChildren: function (d, h) {
        var b,
          _,
          C,
          E = this.getFirstChild(),
          F = this.getLastChild(),
          L = null,
          j = [];
        for (
          r.isPlainObject(d) && (d = [d]),
            this.children || (this.children = []),
            b = 0,
            _ = d.length;
          b < _;
          b++
        )
          j.push(new ne(this, d[b]));
        if (
          ((L = j[0]),
          h == null
            ? (this.children = this.children.concat(j))
            : ((h = this._findDirectChild(h)),
              (C = r.inArray(h, this.children)),
              k(C >= 0, "insertBefore must be an existing child"),
              this.children.splice.apply(this.children, [C, 0].concat(j))),
          E && !h)
        ) {
          for (b = 0, _ = j.length; b < _; b++) j[b].render();
          E !== this.getFirstChild() && E.renderStatus(),
            F !== this.getLastChild() && F.renderStatus();
        } else (!this.parent || this.parent.ul || this.tr) && this.render();
        return (
          this.tree.options.selectMode === 3 &&
            this.fixSelection3FromEndNodes(),
          this.triggerModifyChild("add", j.length === 1 ? j[0] : null),
          L
        );
      },
      addClass: function (d) {
        return this.toggleClass(d, !0);
      },
      addNode: function (d, h) {
        switch (((h === void 0 || h === "over") && (h = "child"), h)) {
          case "after":
            return this.getParent().addChildren(d, this.getNextSibling());
          case "before":
            return this.getParent().addChildren(d, this);
          case "firstChild":
            var b = this.children ? this.children[0] : null;
            return this.addChildren(d, b);
          case "child":
          case "over":
            return this.addChildren(d);
        }
        k(!1, "Invalid mode: " + h);
      },
      addPagingNode: function (d, h) {
        var b, _;
        if (((h = h || "child"), d === !1)) {
          for (b = this.children.length - 1; b >= 0; b--)
            (_ = this.children[b]),
              _.statusNodeType === "paging" && this.removeChild(_);
          this.partload = !1;
          return;
        }
        return (
          (d = r.extend(
            {
              title: this.tree.options.strings.moreData,
              statusNodeType: "paging",
              icon: !1,
            },
            d
          )),
          (this.partload = !0),
          this.addNode(d, h)
        );
      },
      appendSibling: function (d) {
        return this.addNode(d, "after");
      },
      applyPatch: function (d) {
        if (d === null) return this.remove(), $(this);
        var h,
          b,
          _,
          C = { children: !0, expanded: !0, parent: !0 };
        for (h in d)
          (_ = d[h]),
            !C[h] &&
              !r.isFunction(_) &&
              (x[h] ? (this[h] = _) : (this.data[h] = _));
        return (
          d.hasOwnProperty("children") &&
            (this.removeChildren(),
            d.children && this._setChildren(d.children)),
          this.isVisible() && (this.renderTitle(), this.renderStatus()),
          d.hasOwnProperty("expanded")
            ? (b = this.setExpanded(d.expanded))
            : (b = $(this)),
          b
        );
      },
      collapseSiblings: function () {
        return this.tree._callHook("nodeCollapseSiblings", this);
      },
      copyTo: function (d, h, b) {
        return d.addNode(this.toDict(!0, b), h);
      },
      countChildren: function (d) {
        var h = this.children,
          b,
          _,
          C;
        if (!h) return 0;
        if (((C = h.length), d !== !1))
          for (b = 0, _ = C; b < _; b++) C += h[b].countChildren();
        return C;
      },
      debug: function (d) {
        this.tree.options.debugLevel >= 4 &&
          (Array.prototype.unshift.call(arguments, this.toString()),
          A("log", arguments));
      },
      discard: function () {
        return (
          this.warn(
            "FancytreeNode.discard() is deprecated since 2014-02-16. Use .resetLazy() instead."
          ),
          this.resetLazy()
        );
      },
      discardMarkup: function (d) {
        var h = d ? "nodeRemoveMarkup" : "nodeRemoveChildMarkup";
        this.tree._callHook(h, this);
      },
      error: function (d) {
        this.options.debugLevel >= 1 &&
          (Array.prototype.unshift.call(arguments, this.toString()),
          A("error", arguments));
      },
      findAll: function (d) {
        d = r.isFunction(d) ? d : q(d);
        var h = [];
        return (
          this.visit(function (b) {
            d(b) && h.push(b);
          }),
          h
        );
      },
      findFirst: function (d) {
        d = r.isFunction(d) ? d : q(d);
        var h = null;
        return (
          this.visit(function (b) {
            if (d(b)) return (h = b), !1;
          }),
          h
        );
      },
      _changeSelectStatusAttrs: function (d) {
        var h = !1,
          b = this.tree.options,
          _ = m.evalOption("unselectable", this, this, b, !1),
          C = m.evalOption("unselectableStatus", this, this, b, void 0);
        switch ((_ && C != null && (d = C), d)) {
          case !1:
            (h = this.selected || this.partsel),
              (this.selected = !1),
              (this.partsel = !1);
            break;
          case !0:
            (h = !this.selected || !this.partsel),
              (this.selected = !0),
              (this.partsel = !0);
            break;
          case void 0:
            (h = this.selected || !this.partsel),
              (this.selected = !1),
              (this.partsel = !0);
            break;
          default:
            k(!1, "invalid state: " + d);
        }
        return h && this.renderStatus(), h;
      },
      fixSelection3AfterClick: function (d) {
        var h = this.isSelected();
        this.visit(function (b) {
          b._changeSelectStatusAttrs(h);
        }),
          this.fixSelection3FromEndNodes(d);
      },
      fixSelection3FromEndNodes: function (d) {
        var h = this.tree.options;
        k(h.selectMode === 3, "expected selectMode 3");
        function b(_) {
          var C,
            E,
            F,
            L,
            j,
            V,
            W,
            Z,
            U,
            te = _.children;
          if (te && te.length) {
            for (V = !0, W = !1, C = 0, E = te.length; C < E; C++)
              (F = te[C]),
                (L = b(F)),
                (Z = m.evalOption("unselectableIgnore", F, F, h, !1)),
                Z || (L !== !1 && (W = !0), L !== !0 && (V = !1));
            j = V ? !0 : W ? void 0 : !1;
          } else
            (U = m.evalOption("unselectableStatus", _, _, h, void 0)),
              (j = U == null ? !!_.selected : !!U);
          return _._changeSelectStatusAttrs(j), j;
        }
        b(this),
          this.visitParents(function (_) {
            var C,
              E,
              F,
              L,
              j,
              V,
              W = _.children,
              Z = !0,
              U = !1;
            for (C = 0, E = W.length; C < E; C++)
              (F = W[C]),
                (j = m.evalOption("unselectableIgnore", F, F, h, !1)),
                j ||
                  ((V = m.evalOption("unselectableStatus", F, F, h, void 0)),
                  (L = V == null ? !!F.selected : !!V),
                  (L || F.partsel) && (U = !0),
                  L || (Z = !1));
            (L = Z ? !0 : U ? void 0 : !1), _._changeSelectStatusAttrs(L);
          });
      },
      fromDict: function (d) {
        for (var h in d)
          x[h]
            ? (this[h] = d[h])
            : h === "data"
            ? r.extend(this.data, d.data)
            : !r.isFunction(d[h]) && !T[h] && (this.data[h] = d[h]);
        d.children && (this.removeChildren(), this.addChildren(d.children)),
          this.renderTitle();
      },
      getChildren: function () {
        if (this.hasChildren() !== void 0) return this.children;
      },
      getFirstChild: function () {
        return this.children ? this.children[0] : null;
      },
      getIndex: function () {
        return r.inArray(this, this.parent.children);
      },
      getIndexHier: function (d, h) {
        d = d || ".";
        var b,
          _ = [];
        return (
          r.each(this.getParentList(!1, !0), function (C, E) {
            (b = "" + (E.getIndex() + 1)),
              h && (b = ("0000000" + b).substr(-h)),
              _.push(b);
          }),
          _.join(d)
        );
      },
      getKeyPath: function (d) {
        var h = [],
          b = this.tree.options.keyPathSeparator;
        return (
          this.visitParents(function (_) {
            _.parent && h.unshift(_.key);
          }, !d),
          b + h.join(b)
        );
      },
      getLastChild: function () {
        return this.children ? this.children[this.children.length - 1] : null;
      },
      getLevel: function () {
        for (var d = 0, h = this.parent; h; ) d++, (h = h.parent);
        return d;
      },
      getNextSibling: function () {
        if (this.parent) {
          var d,
            h,
            b = this.parent.children;
          for (d = 0, h = b.length - 1; d < h; d++)
            if (b[d] === this) return b[d + 1];
        }
        return null;
      },
      getParent: function () {
        return this.parent;
      },
      getParentList: function (d, h) {
        for (var b = [], _ = h ? this : this.parent; _; )
          (d || _.parent) && b.unshift(_), (_ = _.parent);
        return b;
      },
      getPrevSibling: function () {
        if (this.parent) {
          var d,
            h,
            b = this.parent.children;
          for (d = 1, h = b.length; d < h; d++)
            if (b[d] === this) return b[d - 1];
        }
        return null;
      },
      getSelectedNodes: function (d) {
        var h = [];
        return (
          this.visit(function (b) {
            if (b.selected && (h.push(b), d === !0)) return "skip";
          }),
          h
        );
      },
      hasChildren: function () {
        return this.lazy
          ? this.children == null
            ? void 0
            : this.children.length === 0
            ? !1
            : this.children.length === 1 && this.children[0].isStatusNode()
            ? void 0
            : !0
          : !!(this.children && this.children.length);
      },
      hasFocus: function () {
        return this.tree.hasFocus() && this.tree.focusNode === this;
      },
      info: function (d) {
        this.tree.options.debugLevel >= 3 &&
          (Array.prototype.unshift.call(arguments, this.toString()),
          A("info", arguments));
      },
      isActive: function () {
        return this.tree.activeNode === this;
      },
      isBelowOf: function (d) {
        return this.getIndexHier(".", 5) > d.getIndexHier(".", 5);
      },
      isChildOf: function (d) {
        return this.parent && this.parent === d;
      },
      isDescendantOf: function (d) {
        if (!d || d.tree !== this.tree) return !1;
        for (var h = this.parent; h; ) {
          if (h === d) return !0;
          h === h.parent && r.error("Recursive parent link: " + h),
            (h = h.parent);
        }
        return !1;
      },
      isExpanded: function () {
        return !!this.expanded;
      },
      isFirstSibling: function () {
        var d = this.parent;
        return !d || d.children[0] === this;
      },
      isFolder: function () {
        return !!this.folder;
      },
      isLastSibling: function () {
        var d = this.parent;
        return !d || d.children[d.children.length - 1] === this;
      },
      isLazy: function () {
        return !!this.lazy;
      },
      isLoaded: function () {
        return !this.lazy || this.hasChildren() !== void 0;
      },
      isLoading: function () {
        return !!this._isLoading;
      },
      isRoot: function () {
        return this.isRootNode();
      },
      isPartsel: function () {
        return !this.selected && !!this.partsel;
      },
      isPartload: function () {
        return !!this.partload;
      },
      isRootNode: function () {
        return this.tree.rootNode === this;
      },
      isSelected: function () {
        return !!this.selected;
      },
      isStatusNode: function () {
        return !!this.statusNodeType;
      },
      isPagingNode: function () {
        return this.statusNodeType === "paging";
      },
      isTopLevel: function () {
        return this.tree.rootNode === this.parent;
      },
      isUndefined: function () {
        return this.hasChildren() === void 0;
      },
      isVisible: function () {
        var d,
          h,
          b = this.getParentList(!1, !1);
        for (d = 0, h = b.length; d < h; d++) if (!b[d].expanded) return !1;
        return !0;
      },
      lazyLoad: function (d) {
        return (
          this.warn(
            "FancytreeNode.lazyLoad() is deprecated since 2014-02-16. Use .load() instead."
          ),
          this.load(d)
        );
      },
      load: function (d) {
        var h,
          b,
          _ = this,
          C = this.isExpanded();
        return (
          k(this.isLazy(), "load() requires a lazy node"),
          !d && !this.isUndefined()
            ? $(this)
            : (this.isLoaded() && this.resetLazy(),
              (b = this.tree._triggerNodeEvent("lazyLoad", this)),
              b === !1
                ? $(this)
                : (k(
                    typeof b != "boolean",
                    "lazyLoad event must return source in data.result"
                  ),
                  (h = this.tree._callHook("nodeLoadChildren", this, b)),
                  C
                    ? ((this.expanded = !0),
                      h.always(function () {
                        _.render();
                      }))
                    : h.always(function () {
                        _.renderStatus();
                      }),
                  h))
        );
      },
      makeVisible: function (d) {
        var h,
          b = this,
          _ = [],
          C = new r.Deferred(),
          E = this.getParentList(!1, !1),
          F = E.length,
          L = !(d && d.noAnimation === !0),
          j = !(d && d.scrollIntoView === !1);
        for (h = F - 1; h >= 0; h--) _.push(E[h].setExpanded(!0, d));
        return (
          r.when.apply(r, _).done(function () {
            j
              ? b.scrollIntoView(L).done(function () {
                  C.resolve();
                })
              : C.resolve();
          }),
          C.promise()
        );
      },
      moveTo: function (d, h, b) {
        h === void 0 || h === "over"
          ? (h = "child")
          : h === "firstChild" &&
            (d.children && d.children.length
              ? ((h = "before"), (d = d.children[0]))
              : (h = "child"));
        var _,
          C = this.parent,
          E = h === "child" ? d : d.parent;
        if (this !== d) {
          if (
            (this.parent
              ? E.isDescendantOf(this) &&
                r.error("Cannot move a node to its own descendant")
              : r.error("Cannot move system root"),
            E !== C && C.triggerModifyChild("remove", this),
            this.parent.children.length === 1)
          ) {
            if (this.parent === E) return;
            (this.parent.children = this.parent.lazy ? [] : null),
              (this.parent.expanded = !1);
          } else
            (_ = r.inArray(this, this.parent.children)),
              k(_ >= 0, "invalid source parent"),
              this.parent.children.splice(_, 1);
          if (((this.parent = E), E.hasChildren()))
            switch (h) {
              case "child":
                E.children.push(this);
                break;
              case "before":
                (_ = r.inArray(d, E.children)),
                  k(_ >= 0, "invalid target parent"),
                  E.children.splice(_, 0, this);
                break;
              case "after":
                (_ = r.inArray(d, E.children)),
                  k(_ >= 0, "invalid target parent"),
                  E.children.splice(_ + 1, 0, this);
                break;
              default:
                r.error("Invalid mode " + h);
            }
          else E.children = [this];
          b && d.visit(b, !0),
            E === C
              ? E.triggerModifyChild("move", this)
              : E.triggerModifyChild("add", this),
            this.tree !== d.tree &&
              (this.warn("Cross-tree moveTo is experimantal!"),
              this.visit(function (F) {
                F.tree = d.tree;
              }, !0)),
            C.isDescendantOf(E) || C.render(),
            !E.isDescendantOf(C) && E !== C && E.render();
        }
      },
      navigate: function (d, h) {
        var b,
          _,
          C,
          E = !0,
          F = r.ui.keyCode,
          L = null;
        function j(V) {
          if (V) {
            try {
              V.makeVisible({ scrollIntoView: !1 });
            } catch {}
            if (!r(V.span).is(":visible")) {
              V.debug("Navigate: skipping hidden node"), V.navigate(d, h);
              return;
            }
            return h === !1 ? V.setFocus() : V.setActive();
          }
        }
        switch (d) {
          case F.BACKSPACE:
            this.parent && this.parent.parent && (C = j(this.parent));
            break;
          case F.HOME:
            this.tree.visit(function (V) {
              if (r(V.span).is(":visible")) return (C = j(V)), !1;
            });
            break;
          case F.END:
            this.tree.visit(function (V) {
              r(V.span).is(":visible") && (C = V);
            }),
              C && (C = j(C));
            break;
          case F.LEFT:
            this.expanded
              ? (this.setExpanded(!1), (C = j(this)))
              : this.parent && this.parent.parent && (C = j(this.parent));
            break;
          case F.RIGHT:
            !this.expanded && (this.children || this.lazy)
              ? (this.setExpanded(), (C = j(this)))
              : this.children &&
                this.children.length &&
                (C = j(this.children[0]));
            break;
          case F.UP:
            for (L = this.getPrevSibling(); L && !r(L.span).is(":visible"); )
              L = L.getPrevSibling();
            for (; L && L.expanded && L.children && L.children.length; )
              L = L.children[L.children.length - 1];
            !L && this.parent && this.parent.parent && (L = this.parent),
              (C = j(L));
            break;
          case F.DOWN:
            if (this.expanded && this.children && this.children.length)
              L = this.children[0];
            else
              for (
                _ = this.getParentList(!1, !0), b = _.length - 1;
                b >= 0;
                b--
              ) {
                for (
                  L = _[b].getNextSibling();
                  L && !r(L.span).is(":visible");

                )
                  L = L.getNextSibling();
                if (L) break;
              }
            C = j(L);
            break;
          default:
            E = !1;
        }
        return C || $();
      },
      remove: function () {
        return this.parent.removeChild(this);
      },
      removeChild: function (d) {
        return this.tree._callHook("nodeRemoveChild", this, d);
      },
      removeChildren: function () {
        return this.tree._callHook("nodeRemoveChildren", this);
      },
      removeClass: function (d) {
        return this.toggleClass(d, !1);
      },
      render: function (d, h) {
        return this.tree._callHook("nodeRender", this, d, h);
      },
      renderTitle: function () {
        return this.tree._callHook("nodeRenderTitle", this);
      },
      renderStatus: function () {
        return this.tree._callHook("nodeRenderStatus", this);
      },
      replaceWith: function (d) {
        var h,
          b = this.parent,
          _ = r.inArray(this, b.children),
          C = this;
        return (
          k(
            this.isPagingNode(),
            "replaceWith() currently requires a paging status node"
          ),
          (h = this.tree._callHook("nodeLoadChildren", this, d)),
          h
            .done(function (E) {
              var F = C.children;
              for (y = 0; y < F.length; y++) F[y].parent = b;
              b.children.splice.apply(b.children, [_ + 1, 0].concat(F)),
                (C.children = null),
                C.remove(),
                b.render();
            })
            .fail(function () {
              C.setExpanded();
            }),
          h
        );
      },
      resetLazy: function () {
        this.removeChildren(),
          (this.expanded = !1),
          (this.lazy = !0),
          (this.children = void 0),
          this.renderStatus();
      },
      scheduleAction: function (d, h) {
        this.tree.timer &&
          (clearTimeout(this.tree.timer),
          this.tree.debug("clearTimeout(%o)", this.tree.timer)),
          (this.tree.timer = null);
        var b = this;
        switch (d) {
          case "cancel":
            break;
          case "expand":
            this.tree.timer = setTimeout(function () {
              b.tree.debug("setTimeout: trigger expand"), b.setExpanded(!0);
            }, h);
            break;
          case "activate":
            this.tree.timer = setTimeout(function () {
              b.tree.debug("setTimeout: trigger activate"), b.setActive(!0);
            }, h);
            break;
          default:
            r.error("Invalid mode " + d);
        }
      },
      scrollIntoView: function (d, h) {
        if (h !== void 0 && M(h))
          throw "scrollIntoView() with 'topNode' option is deprecated since 2014-05-08. Use 'options.topNode' instead.";
        var b = r.extend(
            {
              effects: d === !0 ? { duration: 200, queue: !1 } : d,
              scrollOfs: this.tree.options.scrollOfs,
              scrollParent: this.tree.options.scrollParent,
              topNode: null,
            },
            h
          ),
          _ = b.scrollParent,
          C = this.tree.$container,
          E = C.css("overflow-y");
        _
          ? _.jquery || (_ = r(_))
          : this.tree.tbody
          ? (_ = C.scrollParent())
          : E === "scroll" || E === "auto"
          ? (_ = C)
          : (_ = C.scrollParent()),
          (_[0] === document || _[0] === document.body) &&
            (this.debug(
              "scrollIntoView(): normalizing scrollParent to 'window':",
              _[0]
            ),
            (_ = r(window)));
        var F,
          L,
          j,
          V,
          W = new r.Deferred(),
          Z = this,
          U = r(this.span).height(),
          te = b.scrollOfs.top || 0,
          re = b.scrollOfs.bottom || 0,
          B = _.height(),
          de = _.scrollTop(),
          le = _,
          ge = _[0] === window,
          fe = b.topNode || null,
          se = null;
        return r(this.span).is(":visible")
          ? (ge
              ? ((L = r(this.span).offset().top),
                (F = fe && fe.span ? r(fe.span).offset().top : 0),
                (le = r("html,body")))
              : (k(
                  _[0] !== document && _[0] !== document.body,
                  "scrollParent should be a simple element or `window`, not document or body."
                ),
                (V = _.offset().top),
                (L = r(this.span).offset().top - V + de),
                (F = fe ? r(fe.span).offset().top - V + de : 0),
                (j = Math.max(0, _.innerHeight() - _[0].clientHeight)),
                (B -= j)),
            L < de + te
              ? (se = L - te)
              : L + U > de + B - re &&
                ((se = L + U - B + re),
                fe &&
                  (k(
                    fe.isRootNode() || r(fe.span).is(":visible"),
                    "topNode must be visible"
                  ),
                  F < se && (se = F - te))),
            se !== null
              ? b.effects
                ? ((b.effects.complete = function () {
                    W.resolveWith(Z);
                  }),
                  le.stop(!0).animate({ scrollTop: se }, b.effects))
                : ((le[0].scrollTop = se), W.resolveWith(this))
              : W.resolveWith(this),
            W.promise())
          : (this.warn("scrollIntoView(): node is invisible."), $());
      },
      setActive: function (d, h) {
        return this.tree._callHook("nodeSetActive", this, d, h);
      },
      setExpanded: function (d, h) {
        return this.tree._callHook("nodeSetExpanded", this, d, h);
      },
      setFocus: function (d) {
        return this.tree._callHook("nodeSetFocus", this, d);
      },
      setSelected: function (d, h) {
        return this.tree._callHook("nodeSetSelected", this, d, h);
      },
      setStatus: function (d, h, b) {
        return this.tree._callHook("nodeSetStatus", this, d, h, b);
      },
      setTitle: function (d) {
        (this.title = d), this.renderTitle(), this.triggerModify("rename");
      },
      sortChildren: function (d, h) {
        var b,
          _,
          C = this.children;
        if (C) {
          if (
            ((d =
              d ||
              function (E, F) {
                var L = E.title.toLowerCase(),
                  j = F.title.toLowerCase();
                return L === j ? 0 : L > j ? 1 : -1;
              }),
            C.sort(d),
            h)
          )
            for (b = 0, _ = C.length; b < _; b++)
              C[b].children && C[b].sortChildren(d, "$norender$");
          h !== "$norender$" && this.render(), this.triggerModifyChild("sort");
        }
      },
      toDict: function (d, h) {
        var b,
          _,
          C,
          E = {},
          F = this;
        if (
          (r.each(p, function (L, j) {
            (F[j] || F[j] === !1) && (E[j] = F[j]);
          }),
          r.isEmptyObject(this.data) ||
            ((E.data = r.extend({}, this.data)),
            r.isEmptyObject(E.data) && delete E.data),
          h && h(E, F),
          d && this.hasChildren())
        )
          for (E.children = [], b = 0, _ = this.children.length; b < _; b++)
            (C = this.children[b]),
              C.isStatusNode() || E.children.push(C.toDict(!0, h));
        return E;
      },
      toggleClass: function (d, h) {
        var b,
          _,
          C = /\S+/g,
          E = d.match(C) || [],
          F = 0,
          L = !1,
          j = this[this.tree.statusClassPropName],
          V = " " + (this.extraClasses || "") + " ";
        for (j && r(j).toggleClass(d, h); (b = E[F++]); )
          if (
            ((_ = V.indexOf(" " + b + " ") >= 0),
            (h = h === void 0 ? !_ : !!h),
            h)
          )
            _ || ((V += b + " "), (L = !0));
          else
            for (; V.indexOf(" " + b + " ") > -1; )
              V = V.replace(" " + b + " ", " ");
        return (this.extraClasses = r.trim(V)), L;
      },
      toggleExpanded: function () {
        return this.tree._callHook("nodeToggleExpanded", this);
      },
      toggleSelected: function () {
        return this.tree._callHook("nodeToggleSelected", this);
      },
      toString: function () {
        return "FancytreeNode@" + this.key + "[title='" + this.title + "']";
      },
      triggerModifyChild: function (d, h, b) {
        var _,
          C = this.tree.options.modifyChild;
        C &&
          (h &&
            h.parent !== this &&
            r.error("childNode " + h + " is not a child of " + this),
          (_ = {
            node: this,
            tree: this.tree,
            operation: d,
            childNode: h || null,
          }),
          b && r.extend(_, b),
          C({ type: "modifyChild" }, _));
      },
      triggerModify: function (d, h) {
        this.parent.triggerModifyChild(d, this, h);
      },
      visit: function (d, h) {
        var b,
          _,
          C = !0,
          E = this.children;
        if (h === !0 && ((C = d(this)), C === !1 || C === "skip")) return C;
        if (E)
          for (
            b = 0, _ = E.length;
            b < _ && ((C = E[b].visit(d, !0)), C !== !1);
            b++
          );
        return C;
      },
      visitAndLoad: function (d, h, b) {
        var _,
          C,
          E,
          F = this;
        return d && h === !0 && ((C = d(F)), C === !1 || C === "skip")
          ? b
            ? C
            : $()
          : !F.children && !F.lazy
          ? $()
          : ((_ = new r.Deferred()),
            (E = []),
            F.load().done(function () {
              for (var L = 0, j = F.children.length; L < j; L++)
                if (((C = F.children[L].visitAndLoad(d, !0, !0)), C === !1)) {
                  _.reject();
                  break;
                } else C !== "skip" && E.push(C);
              r.when.apply(this, E).then(function () {
                _.resolve();
              });
            }),
            _.promise());
      },
      visitParents: function (d, h) {
        if (h && d(this) === !1) return !1;
        for (var b = this.parent; b; ) {
          if (d(b) === !1) return !1;
          b = b.parent;
        }
        return !0;
      },
      visitSiblings: function (d, h) {
        var b,
          _,
          C,
          E = this.parent.children;
        for (b = 0, _ = E.length; b < _; b++)
          if (((C = E[b]), (h || C !== this) && d(C) === !1)) return !1;
        return !0;
      },
      warn: function (d) {
        this.tree.options.debugLevel >= 2 &&
          (Array.prototype.unshift.call(arguments, this.toString()),
          A("warn", arguments));
      },
    };
    function oe(d) {
      (this.widget = d),
        (this.$div = d.element),
        (this.options = d.options),
        this.options &&
          (r.isFunction(this.options.lazyload) &&
            !r.isFunction(this.options.lazyLoad) &&
            (this.options.lazyLoad = function () {
              return (
                m.warn(
                  "The 'lazyload' event is deprecated since 2014-02-25. Use 'lazyLoad' (with uppercase L) instead."
                ),
                d.options.lazyload.apply(this, arguments)
              );
            }),
          r.isFunction(this.options.loaderror) &&
            r.error(
              "The 'loaderror' event was renamed since 2014-07-03. Use 'loadError' (with uppercase E) instead."
            ),
          this.options.fx !== void 0 &&
            m.warn(
              "The 'fx' option was replaced by 'toggleEffect' since 2014-11-30."
            ),
          this.options.removeNode !== void 0 &&
            r.error(
              "The 'removeNode' event was replaced by 'modifyChild' since 2.20 (2016-09-10)."
            )),
        (this.ext = {}),
        (this.types = {}),
        (this.columns = {}),
        (this.data = J(this.$div)),
        (this._id = r.ui.fancytree._nextId++),
        (this._ns = ".fancytree-" + this._id),
        (this.activeNode = null),
        (this.focusNode = null),
        (this._hasFocus = null),
        (this._tempCache = {}),
        (this._lastMousedownNode = null),
        (this._enableUpdate = !0),
        (this.lastSelectedNode = null),
        (this.systemFocusElement = null),
        (this.lastQuicksearchTerm = ""),
        (this.lastQuicksearchTime = 0),
        (this.statusClassPropName = "span"),
        (this.ariaPropName = "li"),
        (this.nodeContainerAttrName = "li"),
        this.$div.find(">ul.fancytree-container").remove();
      var h = { tree: this },
        b;
      (this.rootNode = new ne(h, {
        title: "root",
        key: "root_" + this._id,
        children: null,
        expanded: !0,
      })),
        (this.rootNode.parent = null),
        (b = r("<ul>", {
          class: "ui-fancytree fancytree-container fancytree-plain",
        }).appendTo(this.$div)),
        (this.$container = b),
        (this.rootNode.ul = b[0]),
        this.options.debugLevel == null &&
          (this.options.debugLevel = m.debugLevel);
    }
    return (
      (oe.prototype = {
        _makeHookContext: function (d, h, b) {
          var _, C;
          return (
            d.node !== void 0
              ? (h && d.originalEvent !== h && r.error("invalid args"), (_ = d))
              : d.tree
              ? ((C = d.tree),
                (_ = {
                  node: d,
                  tree: C,
                  widget: C.widget,
                  options: C.widget.options,
                  originalEvent: h,
                  typeInfo: C.types[d.type] || {},
                }))
              : d.widget
              ? (_ = {
                  node: null,
                  tree: d,
                  widget: d.widget,
                  options: d.widget.options,
                  originalEvent: h,
                })
              : r.error("invalid args"),
            b && r.extend(_, b),
            _
          );
        },
        _callHook: function (d, h, b) {
          var _ = this._makeHookContext(h),
            C = this[d],
            E = Array.prototype.slice.call(arguments, 2);
          return (
            r.isFunction(C) ||
              r.error("_callHook('" + d + "') is not a function"),
            E.unshift(_),
            C.apply(this, E)
          );
        },
        _setExpiringValue: function (d, h, b) {
          this._tempCache[d] = { value: h, expire: Date.now() + (+b || 50) };
        },
        _getExpiringValue: function (d) {
          var h = this._tempCache[d];
          return h && h.expire > Date.now()
            ? h.value
            : (delete this._tempCache[d], null);
        },
        _requireExtension: function (d, h, b, _) {
          b != null && (b = !!b);
          var C = this._local.name,
            E = this.options.extensions,
            F = r.inArray(d, E) < r.inArray(C, E),
            L = h && this.ext[d] == null,
            j = !L && b != null && b !== F;
          return (
            k(C && C !== d, "invalid or same name"),
            L || j
              ? (_ ||
                  (L || h
                    ? ((_ = "'" + C + "' extension requires '" + d + "'"),
                      j &&
                        (_ +=
                          " to be registered " +
                          (b ? "before" : "after") +
                          " itself"))
                    : (_ =
                        "If used together, `" +
                        d +
                        "` must be registered " +
                        (b ? "before" : "after") +
                        " `" +
                        C +
                        "`")),
                r.error(_),
                !1)
              : !0
          );
        },
        activateKey: function (d, h) {
          var b = this.getNodeByKey(d);
          return (
            b
              ? b.setActive(!0, h)
              : this.activeNode && this.activeNode.setActive(!1, h),
            b
          );
        },
        addPagingNode: function (d, h) {
          return this.rootNode.addPagingNode(d, h);
        },
        applyPatch: function (d) {
          var h,
            b,
            _,
            C,
            E,
            F,
            L = d.length,
            j = [];
          for (b = 0; b < L; b++)
            (_ = d[b]),
              k(
                _.length === 2,
                "patchList must be an array of length-2-arrays"
              ),
              (C = _[0]),
              (E = _[1]),
              (F = C === null ? this.rootNode : this.getNodeByKey(C)),
              F
                ? ((h = new r.Deferred()),
                  j.push(h),
                  F.applyPatch(E).always(ue(h, F)))
                : this.warn("could not find node with key '" + C + "'");
          return r.when.apply(r, j).promise();
        },
        clear: function (d) {
          this._callHook("treeClear", this);
        },
        count: function () {
          return this.rootNode.countChildren();
        },
        debug: function (d) {
          this.options.debugLevel >= 4 &&
            (Array.prototype.unshift.call(arguments, this.toString()),
            A("log", arguments));
        },
        enable: function (d) {
          d === !1 ? this.widget.disable() : this.widget.enable();
        },
        enableUpdate: function (d) {
          return (
            (d = d !== !1),
            !!this._enableUpdate == !!d
              ? d
              : ((this._enableUpdate = d),
                d
                  ? (this.debug("enableUpdate(true): redraw "), this.render())
                  : this.debug("enableUpdate(false)..."),
                !d)
          );
        },
        expandAll: function (d, h) {
          (d = d !== !1),
            this.visit(function (b) {
              b.hasChildren() !== !1 &&
                b.isExpanded() !== d &&
                b.setExpanded(d, h);
            });
        },
        findAll: function (d) {
          return this.rootNode.findAll(d);
        },
        findFirst: function (d) {
          return this.rootNode.findFirst(d);
        },
        findNextNode: function (d, h, b) {
          (d = typeof d == "string" ? Q(d) : d),
            (h = h || this.getFirstChild());
          var _ = null,
            C = h.parent.children,
            E = null,
            F = function (L, j, V) {
              var W,
                Z,
                U = L.children,
                te = U.length,
                re = U[j];
              if (
                (re && V(re) === !1) ||
                (re && re.children && re.expanded && F(re, 0, V) === !1)
              )
                return !1;
              for (W = j + 1; W < te; W++) if (F(L, W, V) === !1) return !1;
              return (
                (Z = L.parent),
                Z ? F(Z, Z.children.indexOf(L) + 1, V) : F(L, 0, V)
              );
            };
          return (
            F(h.parent, C.indexOf(h), function (L) {
              if (L === _) return !1;
              if (((_ = _ || L), !r(L.span).is(":visible"))) {
                L.debug("quicksearch: skipping hidden node");
                return;
              }
              if (d(L) && ((E = L), E !== h)) return !1;
            }),
            E
          );
        },
        generateFormElements: function (d, h, b) {
          b = b || {};
          var _,
            C = typeof d == "string" ? d : "ft_" + this._id + "[]",
            E = typeof h == "string" ? h : "ft_" + this._id + "_active",
            F = "fancytree_result_" + this._id,
            L = r("#" + F),
            j = this.options.selectMode === 3 && b.stopOnParents !== !1;
          L.length
            ? L.empty()
            : (L = r("<div>", { id: F }).hide().insertAfter(this.$container)),
            h !== !1 &&
              this.activeNode &&
              L.append(
                r("<input>", {
                  type: "radio",
                  name: E,
                  value: this.activeNode.key,
                  checked: !0,
                })
              );
          function V(W) {
            L.append(
              r("<input>", {
                type: "checkbox",
                name: C,
                value: W.key,
                checked: !0,
              })
            );
          }
          b.filter
            ? this.visit(function (W) {
                var Z = b.filter(W);
                if (Z === "skip") return Z;
                Z !== !1 && V(W);
              })
            : d !== !1 &&
              ((_ = this.getSelectedNodes(j)),
              r.each(_, function (W, Z) {
                V(Z);
              }));
        },
        getActiveNode: function () {
          return this.activeNode;
        },
        getFirstChild: function () {
          return this.rootNode.getFirstChild();
        },
        getFocusNode: function () {
          return this.focusNode;
        },
        getOption: function (d) {
          return this.widget.option(d);
        },
        getNodeByKey: function (d, h) {
          var b, _;
          return !h &&
            ((b = document.getElementById(this.options.idPrefix + d)), b)
            ? b.ftnode
              ? b.ftnode
              : null
            : ((h = h || this.rootNode),
              (_ = null),
              h.visit(function (C) {
                if (C.key === d) return (_ = C), !1;
              }, !0),
              _);
        },
        getRootNode: function () {
          return this.rootNode;
        },
        getSelectedNodes: function (d) {
          return this.rootNode.getSelectedNodes(d);
        },
        hasFocus: function () {
          return !!this._hasFocus;
        },
        info: function (d) {
          this.options.debugLevel >= 3 &&
            (Array.prototype.unshift.call(arguments, this.toString()),
            A("info", arguments));
        },
        loadKeyPath: function (d, h) {
          var b,
            _,
            C,
            E = this,
            F = new r.Deferred(),
            L = this.getRootNode(),
            j = this.options.keyPathSeparator,
            V = [],
            W = r.extend({}, h);
          for (
            typeof h == "function"
              ? (b = h)
              : h && h.callback && (b = h.callback),
              W.callback = function (Z, U, te) {
                b && b.call(Z, U, te),
                  F.notifyWith(Z, [{ node: U, status: te }]);
              },
              W.matchKey == null &&
                (W.matchKey = function (Z, U) {
                  return Z.key === U;
                }),
              r.isArray(d) || (d = [d]),
              _ = 0;
            _ < d.length;
            _++
          )
            (C = d[_]),
              C.charAt(0) === j && (C = C.substr(1)),
              V.push(C.split(j));
          return (
            setTimeout(function () {
              E._loadKeyPathImpl(F, W, L, V).done(function () {
                F.resolve();
              });
            }, 0),
            F.promise()
          );
        },
        _loadKeyPathImpl: function (d, h, b, _) {
          var C,
            E,
            F,
            L,
            j,
            V,
            W,
            Z,
            U = this;
          function te(le, ge) {
            var fe,
              se,
              Te = le.children;
            if (Te) {
              for (fe = 0, se = Te.length; fe < se; fe++)
                if (h.matchKey(Te[fe], ge)) return Te[fe];
            }
            return null;
          }
          for (j = {}, E = 0; E < _.length; E++)
            for (W = _[E], V = b; W.length; )
              if (((F = W.shift()), (L = te(V, F)), L))
                if (W.length === 0) {
                  h.callback(this, L, "ok");
                  break;
                } else if (!L.lazy || L.hasChildren() !== void 0)
                  h.callback(this, L, "loaded"), (V = L);
                else {
                  h.callback(this, L, "loaded"),
                    (F = L.key),
                    j[F]
                      ? j[F].pathSegList.push(W)
                      : (j[F] = { parent: L, pathSegList: [W] });
                  break;
                }
              else {
                this.warn(
                  "loadKeyPath: key not found: " + F + " (parent: " + V + ")"
                ),
                  h.callback(this, F, "error");
                break;
              }
          C = [];
          function re(le, ge, fe) {
            h.callback(U, ge, "loading"),
              ge
                .load()
                .done(function () {
                  U._loadKeyPathImpl.call(U, le, h, ge, fe).always(ue(le, U));
                })
                .fail(function (se) {
                  U.warn("loadKeyPath: error loading lazy " + ge),
                    h.callback(U, L, "error"),
                    le.rejectWith(U);
                });
          }
          for (var B in j) {
            var de = j[B];
            (Z = new r.Deferred()), C.push(Z), re(Z, de.parent, de.pathSegList);
          }
          return r.when.apply(r, C).promise();
        },
        reactivate: function (d) {
          var h,
            b = this.activeNode;
          return b
            ? ((this.activeNode = null),
              (h = b.setActive(!0, { noFocus: !0 })),
              d && b.setFocus(),
              h)
            : $();
        },
        reload: function (d) {
          return (
            this._callHook("treeClear", this),
            this._callHook("treeLoad", this, d)
          );
        },
        render: function (d, h) {
          return this.rootNode.render(d, h);
        },
        selectAll: function (d) {
          this.visit(function (h) {
            h.setSelected(d);
          });
        },
        setFocus: function (d) {
          return this._callHook("treeSetFocus", this, d);
        },
        setOption: function (d, h) {
          return this.widget.option(d, h);
        },
        toDict: function (d, h) {
          var b = this.rootNode.toDict(!0, h);
          return d ? b : b.children;
        },
        toString: function () {
          return "Fancytree@" + this._id;
        },
        _triggerNodeEvent: function (d, h, b, _) {
          var C = this._makeHookContext(h, b, _),
            E = this.widget._trigger(d, b, C);
          return E !== !1 && C.result !== void 0 ? C.result : E;
        },
        _triggerTreeEvent: function (d, h, b) {
          var _ = this._makeHookContext(this, h, b),
            C = this.widget._trigger(d, h, _);
          return C !== !1 && _.result !== void 0 ? _.result : C;
        },
        visit: function (d) {
          return this.rootNode.visit(d, !1);
        },
        visitRows: function (d, h) {
          if (h && h.reverse) return delete h.reverse, this._visitRowsUp(d, h);
          var b,
            _,
            C,
            E,
            F,
            L = 0,
            j = h.includeSelf === !1,
            V = !!h.includeHidden,
            W = h.start || this.rootNode.children[0];
          for (C = W.parent; C; ) {
            for (F = C.children, _ = F.indexOf(W) + L, b = _; b < F.length; b++)
              if (
                ((W = F[b]),
                (!j && d(W) === !1) ||
                  ((j = !1),
                  W.children &&
                    W.children.length &&
                    (V || W.expanded) &&
                    ((E = W.visit(function (Z) {
                      if (d(Z) === !1) return !1;
                      if (!V && Z.children && !Z.expanded) return "skip";
                    }, !1)),
                    E === !1)))
              )
                return !1;
            (W = C), (C = C.parent), (L = 1);
          }
          return !0;
        },
        _visitRowsUp: function (d, h) {
          for (
            var b,
              _,
              C,
              E = !!h.includeHidden,
              F = h.start || this.rootNode.children[0];
            ;

          ) {
            if (((C = F.parent), (b = C.children), b[0] === F))
              (F = C), (b = C.children);
            else
              for (
                _ = b.indexOf(F), F = b[_ - 1];
                (E || F.expanded) && F.children && F.children.length;

              )
                (b = F.children), (C = F), (F = b[b.length - 1]);
            if (!(!E && !r(F.span).is(":visible")) && d(F) === !1) return !1;
          }
        },
        warn: function (d) {
          this.options.debugLevel >= 2 &&
            (Array.prototype.unshift.call(arguments, this.toString()),
            A("warn", arguments));
        },
      }),
      r.extend(oe.prototype, {
        nodeClick: function (d) {
          var h,
            b,
            _ = d.targetType,
            C = d.node;
          if (_ === "expander") {
            if (C.isLoading()) {
              C.debug("Got 2nd click while loading: ignored");
              return;
            }
            this._callHook("nodeToggleExpanded", d);
          } else if (_ === "checkbox")
            this._callHook("nodeToggleSelected", d),
              d.options.focusOnSelect && this._callHook("nodeSetFocus", d, !0);
          else {
            if (((b = !1), (h = !0), C.folder))
              switch (d.options.clickFolderMode) {
                case 2:
                  (b = !0), (h = !1);
                  break;
                case 3:
                  (h = !0), (b = !0);
                  break;
              }
            h && (this.nodeSetFocus(d), this._callHook("nodeSetActive", d, !0)),
              b && this._callHook("nodeToggleExpanded", d);
          }
        },
        nodeCollapseSiblings: function (d, h) {
          var b,
            _,
            C,
            E = d.node;
          if (E.parent)
            for (b = E.parent.children, _ = 0, C = b.length; _ < C; _++)
              b[_] !== E &&
                b[_].expanded &&
                this._callHook("nodeSetExpanded", b[_], !1, h);
        },
        nodeDblclick: function (d) {
          d.targetType === "title" &&
            d.options.clickFolderMode === 4 &&
            this._callHook("nodeToggleExpanded", d),
            d.targetType === "title" && d.originalEvent.preventDefault();
        },
        nodeKeydown: function (d) {
          var h,
            b,
            _,
            C,
            E = d.originalEvent,
            F = d.node,
            L = d.tree,
            j = d.options,
            V = E.which,
            W = E.key || String.fromCharCode(V),
            Z = !!(E.altKey || E.ctrlKey || E.metaKey),
            U = !s[V] && !i[V] && !Z,
            te = r(E.target),
            re = !0,
            B = !(E.ctrlKey || !j.autoActivate);
          if (
            (F ||
              ((C = this.getActiveNode() || this.getFirstChild()),
              C &&
                (C.setFocus(),
                (F = d.node = this.focusNode),
                F.debug("Keydown force focus on active node"))),
            j.quicksearch && U && !te.is(":input:enabled"))
          ) {
            (b = Date.now()),
              b - L.lastQuicksearchTime > 500 && (L.lastQuicksearchTerm = ""),
              (L.lastQuicksearchTime = b),
              (L.lastQuicksearchTerm += W),
              (h = L.findNextNode(L.lastQuicksearchTerm, L.getActiveNode())),
              h && h.setActive(),
              E.preventDefault();
            return;
          }
          switch (m.eventToString(E)) {
            case "+":
            case "=":
              L.nodeSetExpanded(d, !0);
              break;
            case "-":
              L.nodeSetExpanded(d, !1);
              break;
            case "space":
              F.isPagingNode()
                ? L._triggerNodeEvent("clickPaging", d, E)
                : m.evalOption("checkbox", F, F, j, !1)
                ? L.nodeToggleSelected(d)
                : L.nodeSetActive(d, !0);
              break;
            case "return":
              L.nodeSetActive(d, !0);
              break;
            case "home":
            case "end":
            case "backspace":
            case "left":
            case "right":
            case "up":
            case "down":
              _ = F.navigate(E.which, B);
              break;
            default:
              re = !1;
          }
          re && E.preventDefault();
        },
        nodeLoadChildren: function (d, h) {
          var b,
            _,
            C,
            E = d.tree,
            F = d.node,
            L = Date.now();
          if (
            (r.isFunction(h) &&
              ((h = h.call(E, { type: "source" }, d)),
              k(
                !r.isFunction(h),
                "source callback must not return another function"
              )),
            h.url &&
              (F._requestId &&
                F.warn(
                  "Recursive load request #" +
                    L +
                    " while #" +
                    F._requestId +
                    " is pending."
                ),
              (b = r.extend({}, d.options.ajax, h)),
              (F._requestId = L),
              b.debugDelay
                ? ((_ = b.debugDelay),
                  delete b.debugDelay,
                  r.isArray(_) && (_ = _[0] + Math.random() * (_[1] - _[0])),
                  F.warn(
                    "nodeLoadChildren waiting debugDelay " +
                      Math.round(_) +
                      " ms ..."
                  ),
                  (C = r.Deferred(function (V) {
                    setTimeout(function () {
                      r.ajax(b)
                        .done(function () {
                          V.resolveWith(this, arguments);
                        })
                        .fail(function () {
                          V.rejectWith(this, arguments);
                        });
                    }, _);
                  })))
                : (C = r.ajax(b)),
              (h = new r.Deferred()),
              C.done(function (V, W, Z) {
                var U, te;
                if (
                  ((this.dataType === "json" || this.dataType === "jsonp") &&
                    typeof V == "string" &&
                    r.error(
                      "Ajax request returned a string (did you get the JSON dataType wrong?)."
                    ),
                  F._requestId && F._requestId > L)
                ) {
                  h.rejectWith(this, [c]);
                  return;
                }
                if (d.options.postProcess) {
                  try {
                    te = E._triggerNodeEvent(
                      "postProcess",
                      d,
                      d.originalEvent,
                      { response: V, error: null, dataType: this.dataType }
                    );
                  } catch (re) {
                    te = {
                      error: re,
                      message: "" + re,
                      details: "postProcess failed",
                    };
                  }
                  if (te.error) {
                    (U = r.isPlainObject(te.error)
                      ? te.error
                      : { message: te.error }),
                      (U = E._makeHookContext(F, null, U)),
                      h.rejectWith(this, [U]);
                    return;
                  }
                  (r.isArray(te) ||
                    (r.isPlainObject(te) && r.isArray(te.children))) &&
                    (V = te);
                } else V && V.hasOwnProperty("d") && d.options.enableAspx && (V = typeof V.d == "string" ? r.parseJSON(V.d) : V.d);
                h.resolveWith(this, [V]);
              }).fail(function (V, W, Z) {
                var U = E._makeHookContext(F, null, {
                  error: V,
                  args: Array.prototype.slice.call(arguments),
                  message: Z,
                  details: V.status + ": " + Z,
                });
                h.rejectWith(this, [U]);
              })),
            r.isFunction(h.then) &&
              r.isFunction(h.catch) &&
              ((C = h),
              (h = new r.Deferred()),
              C.then(
                function (V) {
                  h.resolve(V);
                },
                function (V) {
                  h.reject(V);
                }
              )),
            r.isFunction(h.promise))
          )
            E.nodeSetStatus(d, "loading"),
              h
                .done(function (V) {
                  E.nodeSetStatus(d, "ok"), (F._requestId = null);
                })
                .fail(function (V) {
                  var W;
                  if (V === c) {
                    F.warn(
                      "Ignored response for obsolete load request #" +
                        L +
                        " (expected #" +
                        F._requestId +
                        ")"
                    );
                    return;
                  } else V.node && V.error && V.message ? (W = V) : ((W = E._makeHookContext(F, null, { error: V, args: Array.prototype.slice.call(arguments), message: V ? V.message || V.toString() : "" })), W.message === "[object Object]" && (W.message = ""));
                  F.warn("Load children failed (" + W.message + ")", W),
                    E._triggerNodeEvent("loadError", W, null) !== !1 &&
                      E.nodeSetStatus(d, "error", W.message, W.details);
                });
          else if (d.options.postProcess) {
            var j = E._triggerNodeEvent("postProcess", d, d.originalEvent, {
              response: h,
              error: null,
              dataType: typeof h,
            });
            (r.isArray(j) || (r.isPlainObject(j) && r.isArray(j.children))) &&
              (h = j);
          }
          return r.when(h).done(function (V) {
            var W, Z;
            r.isPlainObject(V) &&
              (k(
                F.isRootNode(),
                "source may only be an object for root nodes (expecting an array of child objects otherwise)"
              ),
              k(
                r.isArray(V.children),
                "if an object is passed as source, it must contain a 'children' array (all other properties are added to 'tree.data')"
              ),
              (W = V),
              (V = V.children),
              delete W.children,
              r.each(u, function (U, te) {
                W[te] !== void 0 && ((E[te] = W[te]), delete W[te]);
              }),
              r.extend(E.data, W)),
              k(r.isArray(V), "expected array of children"),
              F._setChildren(V),
              E.options.nodata &&
                V.length === 0 &&
                (r.isFunction(E.options.nodata)
                  ? (Z = E.options.nodata.call(E, { type: "nodata" }, d))
                  : E.options.nodata === !0 && F.isRootNode()
                  ? (Z = E.options.strings.nodata)
                  : typeof E.options.nodata == "string" &&
                    F.isRootNode() &&
                    (Z = E.options.nodata),
                Z && F.setStatus("nodata", Z)),
              E._triggerNodeEvent("loadChildren", F);
          });
        },
        nodeLoadKeyPath: function (d, h) {},
        nodeRemoveChild: function (d, h) {
          var b,
            _ = d.node,
            C = r.extend({}, d, { node: h }),
            E = _.children;
          if (E.length === 1)
            return (
              k(h === E[0], "invalid single child"), this.nodeRemoveChildren(d)
            );
          this.activeNode &&
            (h === this.activeNode || this.activeNode.isDescendantOf(h)) &&
            this.activeNode.setActive(!1),
            this.focusNode &&
              (h === this.focusNode || this.focusNode.isDescendantOf(h)) &&
              (this.focusNode = null),
            this.nodeRemoveMarkup(C),
            this.nodeRemoveChildren(C),
            (b = r.inArray(h, E)),
            k(b >= 0, "invalid child"),
            _.triggerModifyChild("remove", h),
            h.visit(function (F) {
              F.parent = null;
            }, !0),
            this._callHook("treeRegisterNode", this, !1, h),
            E.splice(b, 1);
        },
        nodeRemoveChildMarkup: function (d) {
          var h = d.node;
          h.ul &&
            (h.isRootNode()
              ? r(h.ul).empty()
              : (r(h.ul).remove(), (h.ul = null)),
            h.visit(function (b) {
              b.li = b.ul = null;
            }));
        },
        nodeRemoveChildren: function (d) {
          var h,
            b = d.tree,
            _ = d.node,
            C = _.children;
          C &&
            (this.activeNode &&
              this.activeNode.isDescendantOf(_) &&
              this.activeNode.setActive(!1),
            this.focusNode &&
              this.focusNode.isDescendantOf(_) &&
              (this.focusNode = null),
            this.nodeRemoveChildMarkup(d),
            (h = r.extend({}, d)),
            _.triggerModifyChild("remove", null),
            _.visit(function (E) {
              (E.parent = null), b._callHook("treeRegisterNode", b, !1, E);
            }),
            _.lazy ? (_.children = []) : (_.children = null),
            _.isRootNode() || (_.expanded = !1),
            this.nodeRenderStatus(d));
        },
        nodeRemoveMarkup: function (d) {
          var h = d.node;
          h.li && (r(h.li).remove(), (h.li = null)),
            this.nodeRemoveChildMarkup(d);
        },
        nodeRender: function (d, h, b, _, C) {
          var E,
            F,
            L,
            j,
            V,
            W,
            Z,
            U = d.node,
            te = d.tree,
            re = d.options,
            B = re.aria,
            de = !1,
            le = U.parent,
            ge = !le,
            fe = U.children,
            se = null;
          if (te._enableUpdate !== !1 && !(!ge && !le.ul)) {
            if (
              (k(ge || le.ul, "parent UL must exist"),
              ge ||
                (U.li &&
                  (h || U.li.parentNode !== U.parent.ul) &&
                  (U.li.parentNode === U.parent.ul
                    ? (se = U.li.nextSibling)
                    : this.debug(
                        "Unlinking " +
                          U +
                          " (must be child of " +
                          U.parent +
                          ")"
                      ),
                  this.nodeRemoveMarkup(d)),
                U.li
                  ? this.nodeRenderStatus(d)
                  : ((de = !0),
                    (U.li = document.createElement("li")),
                    (U.li.ftnode = U),
                    U.key && re.generateIds && (U.li.id = re.idPrefix + U.key),
                    (U.span = document.createElement("span")),
                    (U.span.className = "fancytree-node"),
                    B && !U.tr && r(U.li).attr("role", "treeitem"),
                    U.li.appendChild(U.span),
                    this.nodeRenderTitle(d),
                    re.createNode &&
                      re.createNode.call(te, { type: "createNode" }, d)),
                re.renderNode &&
                  re.renderNode.call(te, { type: "renderNode" }, d)),
              fe)
            ) {
              if (ge || U.expanded || b === !0) {
                for (
                  U.ul ||
                    ((U.ul = document.createElement("ul")),
                    ((_ === !0 && !C) || !U.expanded) &&
                      (U.ul.style.display = "none"),
                    B && r(U.ul).attr("role", "group"),
                    U.li ? U.li.appendChild(U.ul) : U.tree.$div.append(U.ul)),
                    j = 0,
                    V = fe.length;
                  j < V;
                  j++
                )
                  (Z = r.extend({}, d, { node: fe[j] })),
                    this.nodeRender(Z, h, b, !1, !0);
                for (E = U.ul.firstChild; E; )
                  (L = E.ftnode),
                    L && L.parent !== U
                      ? (U.debug("_fixParent: remove missing " + L, E),
                        (W = E.nextSibling),
                        E.parentNode.removeChild(E),
                        (E = W))
                      : (E = E.nextSibling);
                for (E = U.ul.firstChild, j = 0, V = fe.length - 1; j < V; j++)
                  (F = fe[j]),
                    (L = E.ftnode),
                    F !== L
                      ? U.ul.insertBefore(F.li, L.li)
                      : (E = E.nextSibling);
              }
            } else
              U.ul &&
                (this.warn("remove child markup for " + U),
                this.nodeRemoveChildMarkup(d));
            ge || (de && le.ul.insertBefore(U.li, se));
          }
        },
        nodeRenderTitle: function (d, h) {
          var b,
            _,
            C,
            E,
            F,
            L,
            j,
            V,
            W = d.node,
            Z = d.tree,
            U = d.options,
            te = U.aria,
            re = W.getLevel(),
            B = [];
          h !== void 0 && (W.title = h),
            !(!W.span || Z._enableUpdate === !1) &&
              ((F = te && W.hasChildren() !== !1 ? " role='button'" : ""),
              re < U.minExpandLevel
                ? (W.lazy || (W.expanded = !0),
                  re > 1 &&
                    B.push(
                      "<span " +
                        F +
                        " class='fancytree-expander fancytree-expander-fixed'></span>"
                    ))
                : B.push("<span " + F + " class='fancytree-expander'></span>"),
              (b = m.evalOption("checkbox", W, W, U, !1)),
              b &&
                !W.isStatusNode() &&
                ((F = te ? " role='checkbox'" : ""),
                (_ = "fancytree-checkbox"),
                (b === "radio" || (W.parent && W.parent.radiogroup)) &&
                  (_ += " fancytree-radio"),
                B.push("<span " + F + " class='" + _ + "'></span>")),
              W.data.iconClass !== void 0 &&
                (W.icon
                  ? r.error(
                      "'iconClass' node option is deprecated since v2.14.0: use 'icon' only instead"
                    )
                  : (W.warn(
                      "'iconClass' node option is deprecated since v2.14.0: use 'icon' instead"
                    ),
                    (W.icon = W.data.iconClass))),
              (C = m.evalOption("icon", W, W, U, !0)),
              C !== !1 &&
                ((F = te ? " role='presentation'" : ""),
                (V = m.evalOption("iconTooltip", W, W, U, null)),
                (V = V ? " title='" + ae(V) + "'" : ""),
                typeof C == "string"
                  ? n.test(C)
                    ? ((C = C.charAt(0) === "/" ? C : (U.imagePath || "") + C),
                      B.push(
                        "<img src='" +
                          C +
                          "' class='fancytree-icon'" +
                          V +
                          " alt='' />"
                      ))
                    : B.push(
                        "<span " +
                          F +
                          " class='fancytree-custom-icon " +
                          C +
                          "'" +
                          V +
                          "></span>"
                      )
                  : C.text
                  ? B.push(
                      "<span " +
                        F +
                        " class='fancytree-custom-icon " +
                        (C.addClass || "") +
                        "'" +
                        V +
                        ">" +
                        m.escapeHtml(C.text) +
                        "</span>"
                    )
                  : C.html
                  ? B.push(
                      "<span " +
                        F +
                        " class='fancytree-custom-icon " +
                        (C.addClass || "") +
                        "'" +
                        V +
                        ">" +
                        C.html +
                        "</span>"
                    )
                  : B.push(
                      "<span " + F + " class='fancytree-icon'" + V + "></span>"
                    )),
              (E = ""),
              U.renderTitle &&
                (E = U.renderTitle.call(Z, { type: "renderTitle" }, d) || ""),
              E ||
                ((j = m.evalOption("tooltip", W, W, U, null)),
                j === !0 && (j = W.title),
                (j = j ? " title='" + ae(j) + "'" : ""),
                (L = U.titlesTabbable ? " tabindex='0'" : ""),
                (E =
                  "<span class='fancytree-title'" +
                  j +
                  L +
                  ">" +
                  (U.escapeTitles ? m.escapeHtml(W.title) : W.title) +
                  "</span>")),
              B.push(E),
              (W.span.innerHTML = B.join("")),
              this.nodeRenderStatus(d),
              U.enhanceTitle &&
                ((d.$title = r(">span.fancytree-title", W.span)),
                (E =
                  U.enhanceTitle.call(Z, { type: "enhanceTitle" }, d) || "")));
        },
        nodeRenderStatus: function (d) {
          var h,
            b = d.node,
            _ = d.tree,
            C = d.options,
            E = b.hasChildren(),
            F = b.isLastSibling(),
            L = C.aria,
            j = C._classNames,
            V = [],
            W = b[_.statusClassPropName];
          !W ||
            _._enableUpdate === !1 ||
            (L && (h = r(b.tr || b.li)),
            V.push(j.node),
            _.activeNode === b && V.push(j.active),
            _.focusNode === b && V.push(j.focused),
            b.expanded && V.push(j.expanded),
            L &&
              (E !== !1
                ? h.attr("aria-expanded", !!b.expanded)
                : h.removeAttr("aria-expanded")),
            b.folder && V.push(j.folder),
            E !== !1 && V.push(j.hasChildren),
            F && V.push(j.lastsib),
            b.lazy && b.children == null && V.push(j.lazy),
            b.partload && V.push(j.partload),
            b.partsel && V.push(j.partsel),
            m.evalOption("unselectable", b, b, C, !1) && V.push(j.unselectable),
            b._isLoading && V.push(j.loading),
            b._error && V.push(j.error),
            b.statusNodeType && V.push(j.statusNodePrefix + b.statusNodeType),
            b.selected
              ? (V.push(j.selected), L && h.attr("aria-selected", !0))
              : L && h.attr("aria-selected", !1),
            b.extraClasses && V.push(b.extraClasses),
            E === !1
              ? V.push(j.combinedExpanderPrefix + "n" + (F ? "l" : ""))
              : V.push(
                  j.combinedExpanderPrefix +
                    (b.expanded ? "e" : "c") +
                    (b.lazy && b.children == null ? "d" : "") +
                    (F ? "l" : "")
                ),
            V.push(
              j.combinedIconPrefix +
                (b.expanded ? "e" : "c") +
                (b.folder ? "f" : "")
            ),
            (W.className = V.join(" ")),
            b.li && r(b.li).toggleClass(j.lastsib, F));
        },
        nodeSetActive: function (d, h, b) {
          b = b || {};
          var _,
            C = d.node,
            E = d.tree,
            F = d.options,
            L = b.noEvents === !0,
            j = b.noFocus === !0,
            V = b.scrollIntoView !== !1,
            W = C === E.activeNode;
          return (
            (h = h !== !1),
            W === h
              ? $(C)
              : h &&
                !L &&
                this._triggerNodeEvent("beforeActivate", C, d.originalEvent) ===
                  !1
              ? z(C, ["rejected"])
              : (h
                  ? (E.activeNode &&
                      (k(E.activeNode !== C, "node was active (inconsistency)"),
                      (_ = r.extend({}, d, { node: E.activeNode })),
                      E.nodeSetActive(_, !1),
                      k(E.activeNode === null, "deactivate was out of sync?")),
                    F.activeVisible && C.makeVisible({ scrollIntoView: V }),
                    (E.activeNode = C),
                    E.nodeRenderStatus(d),
                    j || E.nodeSetFocus(d),
                    L || E._triggerNodeEvent("activate", C, d.originalEvent))
                  : (k(
                      E.activeNode === C,
                      "node was not active (inconsistency)"
                    ),
                    (E.activeNode = null),
                    this.nodeRenderStatus(d),
                    L ||
                      d.tree._triggerNodeEvent(
                        "deactivate",
                        C,
                        d.originalEvent
                      )),
                $(C))
          );
        },
        nodeSetExpanded: function (d, h, b) {
          b = b || {};
          var _,
            C,
            E,
            F,
            L,
            j,
            V = d.node,
            W = d.tree,
            Z = d.options,
            U = b.noAnimation === !0,
            te = b.noEvents === !0;
          if (((h = h !== !1), (V.expanded && h) || (!V.expanded && !h)))
            return $(V);
          if (h && !V.lazy && !V.hasChildren()) return $(V);
          if (!h && V.getLevel() < Z.minExpandLevel) return z(V, ["locked"]);
          if (
            !te &&
            this._triggerNodeEvent("beforeExpand", V, d.originalEvent) === !1
          )
            return z(V, ["rejected"]);
          if (
            (!U && !V.isVisible() && (U = b.noAnimation = !0),
            (C = new r.Deferred()),
            h && !V.expanded && Z.autoCollapse)
          ) {
            (L = V.getParentList(!1, !0)), (j = Z.autoCollapse);
            try {
              for (Z.autoCollapse = !1, E = 0, F = L.length; E < F; E++)
                this._callHook("nodeCollapseSiblings", L[E], b);
            } finally {
              Z.autoCollapse = j;
            }
          }
          return (
            C.done(function () {
              var re = V.getLastChild();
              h && Z.autoScroll && !U && re
                ? re.scrollIntoView(!0, { topNode: V }).always(function () {
                    te ||
                      d.tree._triggerNodeEvent(h ? "expand" : "collapse", d);
                  })
                : te || d.tree._triggerNodeEvent(h ? "expand" : "collapse", d);
            }),
            (_ = function (re) {
              var B = Z._classNames,
                de,
                le,
                ge = Z.toggleEffect;
              if (
                ((V.expanded = h),
                W._callHook("nodeRender", d, !1, !1, !0),
                V.ul)
              )
                if (
                  ((de = V.ul.style.display !== "none"),
                  (le = !!V.expanded),
                  de === le)
                )
                  V.warn("nodeSetExpanded: UL.style.display already set");
                else if (!ge || U)
                  V.ul.style.display = V.expanded || !parent ? "" : "none";
                else {
                  r(V.li).addClass(B.animating),
                    r.isFunction(r(V.ul)[ge.effect])
                      ? (W.debug("use jquery." + ge.effect + " method"),
                        r(V.ul)[ge.effect]({
                          duration: ge.duration,
                          always: function () {
                            r(this).removeClass(B.animating),
                              r(V.li).removeClass(B.animating),
                              re();
                          },
                        }))
                      : (r(V.ul).stop(!0, !0),
                        r(V.ul)
                          .parent()
                          .find(".ui-effects-placeholder")
                          .remove(),
                        r(V.ul).toggle(
                          ge.effect,
                          ge.options,
                          ge.duration,
                          function () {
                            r(this).removeClass(B.animating),
                              r(V.li).removeClass(B.animating),
                              re();
                          }
                        ));
                  return;
                }
              re();
            }),
            h && V.lazy && V.hasChildren() === void 0
              ? V.load()
                  .done(function () {
                    C.notifyWith && C.notifyWith(V, ["loaded"]),
                      _(function () {
                        C.resolveWith(V);
                      });
                  })
                  .fail(function (re) {
                    _(function () {
                      C.rejectWith(V, ["load failed (" + re + ")"]);
                    });
                  })
              : _(function () {
                  C.resolveWith(V);
                }),
            C.promise()
          );
        },
        nodeSetFocus: function (d, h) {
          var b,
            _ = d.tree,
            C = d.node,
            E = _.options,
            F = d.originalEvent ? r(d.originalEvent.target).is(":input") : !1;
          if (((h = h !== !1), _.focusNode)) {
            if (_.focusNode === C && h) return;
            (b = r.extend({}, d, { node: _.focusNode })),
              (_.focusNode = null),
              this._triggerNodeEvent("blur", b),
              this._callHook("nodeRenderStatus", b);
          }
          h &&
            (this.hasFocus() ||
              (C.debug("nodeSetFocus: forcing container focus"),
              this._callHook("treeSetFocus", d, !0, { calledByNode: !0 })),
            C.makeVisible({ scrollIntoView: !1 }),
            (_.focusNode = C),
            E.titlesTabbable
              ? F || r(C.span).find(".fancytree-title").trigger("focus")
              : r(document.activeElement).closest(".fancytree-container")
                  .length === 0 && r(_.$container).trigger("focus"),
            E.aria &&
              r(_.$container).attr(
                "aria-activedescendant",
                r(C.tr || C.li)
                  .uniqueId()
                  .attr("id")
              ),
            this._triggerNodeEvent("focus", d),
            E.autoScroll && C.scrollIntoView(),
            this._callHook("nodeRenderStatus", d));
        },
        nodeSetSelected: function (d, h, b) {
          b = b || {};
          var _ = d.node,
            C = d.tree,
            E = d.options,
            F = b.noEvents === !0,
            L = _.parent;
          if (((h = h !== !1), !m.evalOption("unselectable", _, _, E, !1))) {
            if (
              ((_._lastSelectIntent = h),
              !!_.selected === h && !(E.selectMode === 3 && _.partsel && !h))
            )
              return h;
            if (
              !F &&
              this._triggerNodeEvent("beforeSelect", _, d.originalEvent) === !1
            )
              return !!_.selected;
            h && E.selectMode === 1
              ? (C.lastSelectedNode && C.lastSelectedNode.setSelected(!1),
                (_.selected = h))
              : E.selectMode === 3 && L && !L.radiogroup && !_.radiogroup
              ? ((_.selected = h), _.fixSelection3AfterClick(b))
              : L && L.radiogroup
              ? _.visitSiblings(function (j) {
                  j._changeSelectStatusAttrs(h && j === _);
                }, !0)
              : (_.selected = h),
              this.nodeRenderStatus(d),
              (C.lastSelectedNode = h ? _ : null),
              F || C._triggerNodeEvent("select", d);
          }
        },
        nodeSetStatus: function (d, h, b, _) {
          var C = d.node,
            E = d.tree;
          function F() {
            var j = C.children ? C.children[0] : null;
            if (j && j.isStatusNode()) {
              try {
                C.ul && (C.ul.removeChild(j.li), (j.li = null));
              } catch {}
              C.children.length === 1 ? (C.children = []) : C.children.shift();
            }
          }
          function L(j, V) {
            var W = C.children ? C.children[0] : null;
            return (
              W && W.isStatusNode()
                ? (r.extend(W, j),
                  (W.statusNodeType = V),
                  E._callHook("nodeRenderTitle", W))
                : (C._setChildren([j]),
                  (C.children[0].statusNodeType = V),
                  E.render()),
              C.children[0]
            );
          }
          switch (h) {
            case "ok":
              F(), (C._isLoading = !1), (C._error = null), C.renderStatus();
              break;
            case "loading":
              C.parent ||
                L(
                  {
                    title:
                      E.options.strings.loading + (b ? " (" + b + ")" : ""),
                    checkbox: !1,
                    tooltip: _,
                  },
                  h
                ),
                (C._isLoading = !0),
                (C._error = null),
                C.renderStatus();
              break;
            case "error":
              L(
                {
                  title:
                    E.options.strings.loadError + (b ? " (" + b + ")" : ""),
                  checkbox: !1,
                  tooltip: _,
                },
                h
              ),
                (C._isLoading = !1),
                (C._error = { message: b, details: _ }),
                C.renderStatus();
              break;
            case "nodata":
              L(
                {
                  title: b || E.options.strings.noData,
                  checkbox: !1,
                  tooltip: _,
                },
                h
              ),
                (C._isLoading = !1),
                (C._error = null),
                C.renderStatus();
              break;
            default:
              r.error("invalid node status " + h);
          }
        },
        nodeToggleExpanded: function (d) {
          return this.nodeSetExpanded(d, !d.node.expanded);
        },
        nodeToggleSelected: function (d) {
          var h = d.node,
            b = !h.selected;
          return (
            h.partsel &&
              !h.selected &&
              h._lastSelectIntent === !0 &&
              ((b = !1), (h.selected = !0)),
            (h._lastSelectIntent = b),
            this.nodeSetSelected(d, b)
          );
        },
        treeClear: function (d) {
          var h = d.tree;
          (h.activeNode = null),
            (h.focusNode = null),
            h.$div.find(">ul.fancytree-container").empty(),
            (h.rootNode.children = null);
        },
        treeCreate: function (d) {},
        treeDestroy: function (d) {
          this.$div.find(">ul.fancytree-container").remove(),
            this.$source && this.$source.removeClass("fancytree-helper-hidden");
        },
        treeInit: function (d) {
          var h = d.tree,
            b = h.options;
          h.$container.attr("tabindex", b.tabindex),
            r.each(u, function (_, C) {
              b[C] !== void 0 &&
                (h.info("Move option " + C + " to tree"),
                (h[C] = b[C]),
                delete b[C]);
            }),
            b.rtl
              ? h.$container.attr("DIR", "RTL").addClass("fancytree-rtl")
              : h.$container.removeAttr("DIR").removeClass("fancytree-rtl"),
            b.aria &&
              (h.$container.attr("role", "tree"),
              b.selectMode !== 1 &&
                h.$container.attr("aria-multiselectable", !0)),
            this.treeLoad(d);
        },
        treeLoad: function (d, h) {
          var b,
            _,
            C,
            E = d.tree,
            F = d.widget.element,
            L,
            j = r.extend({}, d, { node: this.rootNode });
          if (
            (E.rootNode.children && this.treeClear(d),
            (h = h || this.options.source),
            h)
          )
            typeof h == "string" && r.error("Not implemented");
          else
            switch (((_ = F.data("type") || "html"), _)) {
              case "html":
                (C = F.find(">ul:first")),
                  C.addClass("ui-fancytree-source fancytree-helper-hidden"),
                  (h = r.ui.fancytree.parseHtml(C)),
                  (this.data = r.extend(this.data, J(C)));
                break;
              case "json":
                (h = r.parseJSON(F.text())),
                  F.contents()
                    .filter(function () {
                      return this.nodeType === 3;
                    })
                    .remove(),
                  r.isPlainObject(h) &&
                    (k(
                      r.isArray(h.children),
                      "if an object is passed as source, it must contain a 'children' array (all other properties are added to 'tree.data')"
                    ),
                    (b = h),
                    (h = h.children),
                    delete b.children,
                    r.each(u, function (V, W) {
                      b[W] !== void 0 && ((E[W] = b[W]), delete b[W]);
                    }),
                    r.extend(E.data, b));
                break;
              default:
                r.error("Invalid data-type: " + _);
            }
          return (
            (L = this.nodeLoadChildren(j, h)
              .done(function () {
                E.render(),
                  d.options.selectMode === 3 &&
                    E.rootNode.fixSelection3FromEndNodes(),
                  E.activeNode &&
                    E.options.activeVisible &&
                    E.activeNode.makeVisible(),
                  E._triggerTreeEvent("init", null, { status: !0 });
              })
              .fail(function () {
                E.render(), E._triggerTreeEvent("init", null, { status: !1 });
              })),
            L
          );
        },
        treeRegisterNode: function (d, h, b) {},
        treeSetFocus: function (d, h, b) {
          var _;
          (h = h !== !1),
            h !== this.hasFocus() &&
              ((this._hasFocus = h),
              !h && this.focusNode
                ? this.focusNode.setFocus(!1)
                : h &&
                  (!b || !b.calledByNode) &&
                  r(this.$container).trigger("focus"),
              this.$container.toggleClass("fancytree-treefocus", h),
              this._triggerTreeEvent(h ? "focusTree" : "blurTree"),
              h &&
                !this.activeNode &&
                ((_ = this._lastMousedownNode || this.getFirstChild()),
                _ && _.setFocus()));
        },
        treeSetOption: function (d, h, b) {
          var _ = d.tree,
            C = !0,
            E = !1,
            F = !1;
          switch (h) {
            case "aria":
            case "checkbox":
            case "icon":
            case "minExpandLevel":
            case "tabindex":
              (E = !0), (F = !0);
              break;
            case "escapeTitles":
            case "tooltip":
              F = !0;
              break;
            case "rtl":
              b === !1
                ? _.$container.removeAttr("DIR").removeClass("fancytree-rtl")
                : _.$container.attr("DIR", "RTL").addClass("fancytree-rtl"),
                (F = !0);
              break;
            case "source":
              (C = !1), _._callHook("treeLoad", _, b), (F = !0);
              break;
          }
          _.debug("set option " + h + "=" + b + " <" + typeof b + ">"),
            C &&
              (this.widget._super
                ? this.widget._super.call(this.widget, h, b)
                : r.Widget.prototype._setOption.call(this.widget, h, b)),
            E && _._callHook("treeCreate", _),
            F && _.render(!0, !1);
        },
      }),
      r.widget("ui.fancytree", {
        options: {
          activeVisible: !0,
          ajax: { type: "GET", cache: !1, dataType: "json" },
          aria: !0,
          autoActivate: !0,
          autoCollapse: !1,
          autoScroll: !1,
          checkbox: !1,
          clickFolderMode: 4,
          debugLevel: null,
          disabled: !1,
          enableAspx: !0,
          escapeTitles: !1,
          extensions: [],
          toggleEffect: { effect: "slideToggle", duration: 200 },
          generateIds: !1,
          icon: !0,
          idPrefix: "ft_",
          focusOnSelect: !1,
          keyboard: !0,
          keyPathSeparator: "/",
          minExpandLevel: 1,
          nodata: !0,
          quicksearch: !1,
          rtl: !1,
          scrollOfs: { top: 0, bottom: 0 },
          scrollParent: null,
          selectMode: 2,
          strings: {
            loading: "Loading...",
            loadError: "Load error!",
            moreData: "More...",
            noData: "No data.",
          },
          tabindex: "0",
          titlesTabbable: !1,
          tooltip: !1,
          _classNames: {
            node: "fancytree-node",
            folder: "fancytree-folder",
            animating: "fancytree-animating",
            combinedExpanderPrefix: "fancytree-exp-",
            combinedIconPrefix: "fancytree-ico-",
            hasChildren: "fancytree-has-children",
            active: "fancytree-active",
            selected: "fancytree-selected",
            expanded: "fancytree-expanded",
            lazy: "fancytree-lazy",
            focused: "fancytree-focused",
            partload: "fancytree-partload",
            partsel: "fancytree-partsel",
            radio: "fancytree-radio",
            unselectable: "fancytree-unselectable",
            lastsib: "fancytree-lastsib",
            loading: "fancytree-loading",
            error: "fancytree-error",
            statusNodePrefix: "fancytree-statusnode-",
          },
          lazyLoad: null,
          postProcess: null,
        },
        _create: function () {
          (this.tree = new oe(this)),
            (this.$source =
              this.source || this.element.data("type") === "json"
                ? this.element
                : this.element.find(">ul:first"));
          var d,
            h,
            b,
            _ = this.options,
            C = _.extensions,
            E = this.tree;
          for (b = 0; b < C.length; b++)
            (h = C[b]),
              (d = r.ui.fancytree._extensions[h]),
              d ||
                r.error(
                  "Could not apply extension '" +
                    h +
                    "' (it is not registered, did you forget to include it?)"
                ),
              (this.tree.options[h] = R({}, d.options, this.tree.options[h])),
              k(
                this.tree.ext[h] === void 0,
                "Extension name must not exist as Fancytree.ext attribute: '" +
                  h +
                  "'"
              ),
              (this.tree.ext[h] = {}),
              G(this.tree, E, d, h),
              (E = d);
          _.icons !== void 0 &&
            (_.icon !== !0
              ? r.error(
                  "'icons' tree option is deprecated since v2.14.0: use 'icon' only instead"
                )
              : (this.tree.warn(
                  "'icons' tree option is deprecated since v2.14.0: use 'icon' instead"
                ),
                (_.icon = _.icons))),
            _.iconClass !== void 0 &&
              (_.icon
                ? r.error(
                    "'iconClass' tree option is deprecated since v2.14.0: use 'icon' only instead"
                  )
                : (this.tree.warn(
                    "'iconClass' tree option is deprecated since v2.14.0: use 'icon' instead"
                  ),
                  (_.icon = _.iconClass))),
            _.tabbable !== void 0 &&
              ((_.tabindex = _.tabbable ? "0" : "-1"),
              this.tree.warn(
                "'tabbable' tree option is deprecated since v2.17.0: use 'tabindex='" +
                  _.tabindex +
                  "' instead"
              )),
            this.tree._callHook("treeCreate", this.tree);
        },
        _init: function () {
          this.tree._callHook("treeInit", this.tree), this._bind();
        },
        _setOption: function (d, h) {
          return this.tree._callHook("treeSetOption", this.tree, d, h);
        },
        destroy: function () {
          this._unbind(),
            this.tree._callHook("treeDestroy", this.tree),
            r.Widget.prototype.destroy.call(this);
        },
        _unbind: function () {
          var d = this.tree._ns;
          this.element.off(d), this.tree.$container.off(d), r(document).off(d);
        },
        _bind: function () {
          var d = this,
            h = this.options,
            b = this.tree,
            _ = b._ns;
          this._unbind(),
            b.$container
              .on("focusin" + _ + " focusout" + _, function (C) {
                var E = m.getNode(C),
                  F = C.type === "focusin";
                if (!F && E && r(C.target).is("a")) {
                  E.debug("Ignored focusout on embedded <a> element.");
                  return;
                }
                if (F) {
                  if (b._getExpiringValue("focusin")) {
                    b.debug("Ignored double focusin.");
                    return;
                  }
                  b._setExpiringValue("focusin", !0, 50),
                    E ||
                      ((E = b._getExpiringValue("mouseDownNode")),
                      E &&
                        b.debug(
                          "Reconstruct mouse target for focusin from recent event."
                        ));
                }
                E
                  ? b._callHook("nodeSetFocus", b._makeHookContext(E, C), F)
                  : b.tbody &&
                    r(C.target).parents("table.fancytree-container > thead")
                      .length
                  ? b.debug("Ignore focus event outside table body.", C)
                  : b._callHook("treeSetFocus", b, F);
              })
              .on("selectstart" + _, "span.fancytree-title", function (C) {
                C.preventDefault();
              })
              .on("keydown" + _, function (C) {
                if (h.disabled || h.keyboard === !1) return !0;
                var E,
                  F = b.focusNode,
                  L = b._makeHookContext(F || b, C),
                  j = b.phase;
                try {
                  return (
                    (b.phase = "userEvent"),
                    F
                      ? (E = b._triggerNodeEvent("keydown", F, C))
                      : (E = b._triggerTreeEvent("keydown", C)),
                    E === "preventNav"
                      ? (E = !0)
                      : E !== !1 && (E = b._callHook("nodeKeydown", L)),
                    E
                  );
                } finally {
                  b.phase = j;
                }
              })
              .on("mousedown" + _, function (C) {
                var E = m.getEventTarget(C);
                (b._lastMousedownNode = E ? E.node : null),
                  b._setExpiringValue("mouseDownNode", b._lastMousedownNode);
              })
              .on("click" + _ + " dblclick" + _, function (C) {
                if (h.disabled) return !0;
                var E,
                  F = m.getEventTarget(C),
                  L = F.node,
                  j = d.tree,
                  V = j.phase;
                if (!L) return !0;
                E = j._makeHookContext(L, C);
                try {
                  switch (((j.phase = "userEvent"), C.type)) {
                    case "click":
                      return (
                        (E.targetType = F.type),
                        L.isPagingNode()
                          ? j._triggerNodeEvent("clickPaging", E, C) === !0
                          : j._triggerNodeEvent("click", E, C) === !1
                          ? !1
                          : j._callHook("nodeClick", E)
                      );
                    case "dblclick":
                      return (
                        (E.targetType = F.type),
                        j._triggerNodeEvent("dblclick", E, C) === !1
                          ? !1
                          : j._callHook("nodeDblclick", E)
                      );
                  }
                } finally {
                  j.phase = V;
                }
              });
        },
        getActiveNode: function () {
          return this.tree.activeNode;
        },
        getNodeByKey: function (d) {
          return this.tree.getNodeByKey(d);
        },
        getRootNode: function () {
          return this.tree.rootNode;
        },
        getTree: function () {
          return this.tree;
        },
      }),
      (m = r.ui.fancytree),
      r.extend(r.ui.fancytree, {
        version: "2.30.2",
        buildType: "production",
        debugLevel: 3,
        _nextId: 1,
        _nextNodeKey: 1,
        _extensions: {},
        _FancytreeClass: oe,
        _FancytreeNodeClass: ne,
        jquerySupports: { positionMyOfs: N(r.ui.version, 1, 9) },
        assert: function (d, h) {
          return k(d, h);
        },
        createTree: function (d, h) {
          var b = r(d).fancytree(h).fancytree("getTree");
          return b;
        },
        debounce: function (d, h, b, _) {
          var C;
          return (
            arguments.length === 3 &&
              typeof b != "boolean" &&
              ((_ = b), (b = !1)),
            function () {
              var E = arguments;
              (_ = _ || this),
                b && !C && h.apply(_, E),
                clearTimeout(C),
                (C = setTimeout(function () {
                  b || h.apply(_, E), (C = null);
                }, d));
            }
          );
        },
        debug: function (d) {
          r.ui.fancytree.debugLevel >= 4 && A("log", arguments);
        },
        error: function (d) {
          r.ui.fancytree.debugLevel >= 1 && A("error", arguments);
        },
        escapeHtml: function (d) {
          return ("" + d).replace(e, function (h) {
            return o[h];
          });
        },
        fixPositionOptions: function (d) {
          if (
            ((d.offset || ("" + d.my + d.at).indexOf("%") >= 0) &&
              r.error(
                "expected new position syntax (but '%' is not supported)"
              ),
            !r.ui.fancytree.jquerySupports.positionMyOfs)
          ) {
            var h = /(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(d.my),
              b = /(\w+)([+-]?\d+)?\s+(\w+)([+-]?\d+)?/.exec(d.at),
              _ = (h[2] ? +h[2] : 0) + (b[2] ? +b[2] : 0),
              C = (h[4] ? +h[4] : 0) + (b[4] ? +b[4] : 0);
            (d = r.extend({}, d, {
              my: h[1] + " " + h[3],
              at: b[1] + " " + b[3],
            })),
              (_ || C) && (d.offset = "" + _ + " " + C);
          }
          return d;
        },
        getEventTarget: function (d) {
          var h,
            b,
            _ = d && d.target ? d.target.className : "",
            C = { node: this.getNode(d.target), type: void 0 };
          return (
            /\bfancytree-title\b/.test(_)
              ? (C.type = "title")
              : /\bfancytree-expander\b/.test(_)
              ? (C.type = C.node.hasChildren() === !1 ? "prefix" : "expander")
              : /\bfancytree-checkbox\b/.test(_)
              ? (C.type = "checkbox")
              : /\bfancytree(-custom)?-icon\b/.test(_)
              ? (C.type = "icon")
              : /\bfancytree-node\b/.test(_)
              ? (C.type = "title")
              : d &&
                d.target &&
                ((h = r(d.target)),
                h.is("ul[role=group]")
                  ? ((b = C.node && C.node.tree),
                    (b || m).debug("Ignoring click on outer UL."),
                    (C.node = null))
                  : h.closest(".fancytree-title").length
                  ? (C.type = "title")
                  : h.closest(".fancytree-checkbox").length
                  ? (C.type = "checkbox")
                  : h.closest(".fancytree-expander").length &&
                    (C.type = "expander")),
            C
          );
        },
        getEventTargetType: function (d) {
          return this.getEventTarget(d).type;
        },
        getNode: function (d) {
          if (d instanceof ne) return d;
          for (
            d instanceof r
              ? (d = d[0])
              : d.originalEvent !== void 0 && (d = d.target);
            d;

          ) {
            if (d.ftnode) return d.ftnode;
            d = d.parentNode;
          }
          return null;
        },
        getTree: function (d) {
          var h;
          return d instanceof oe
            ? d
            : (d === void 0 && (d = 0),
              typeof d == "number"
                ? (d = r(".fancytree-container").eq(d))
                : typeof d == "string"
                ? (d = r(d).eq(0))
                : d instanceof r
                ? (d = d.eq(0))
                : d.originalEvent !== void 0 && (d = r(d.target)),
              (d = d.closest(":ui-fancytree")),
              (h = d.data("ui-fancytree") || d.data("fancytree")),
              h ? h.tree : null);
        },
        evalOption: function (d, h, b, _, C) {
          var E,
            F,
            L = h.tree,
            j = _[d],
            V = b[d];
          return (
            r.isFunction(j)
              ? ((E = {
                  node: h,
                  tree: L,
                  widget: L.widget,
                  options: L.widget.options,
                  typeInfo: L.types[h.type] || {},
                }),
                (F = j.call(L, { type: d }, E)),
                F == null && (F = V))
              : (F = V ?? j),
            F == null && (F = C),
            F
          );
        },
        setSpanIcon: function (d, h, b) {
          var _ = r(d);
          typeof b == "string"
            ? _.attr("class", h + " " + b)
            : (b.text ? _.text("" + b.text) : b.html && (d.innerHTML = b.html),
              _.attr("class", h + " " + (b.addClass || "")));
        },
        eventToString: function (d) {
          var h = d.which,
            b = d.type,
            _ = [];
          return (
            d.altKey && _.push("alt"),
            d.ctrlKey && _.push("ctrl"),
            d.metaKey && _.push("meta"),
            d.shiftKey && _.push("shift"),
            b === "click" || b === "dblclick"
              ? _.push(l[d.button] + b)
              : t[h] || _.push(i[h] || String.fromCharCode(h).toLowerCase()),
            _.join("+")
          );
        },
        info: function (d) {
          r.ui.fancytree.debugLevel >= 3 && A("info", arguments);
        },
        keyEventToString: function (d) {
          return (
            this.warn("keyEventToString() is deprecated: use eventToString()"),
            this.eventToString(d)
          );
        },
        overrideMethod: function (d, h, b, _) {
          var C,
            E = d[h] || r.noop;
          d[h] = function () {
            var F = _ || this;
            try {
              return (C = F._super), (F._super = E), b.apply(F, arguments);
            } finally {
              F._super = C;
            }
          };
        },
        parseHtml: function (d) {
          var h,
            b,
            _,
            C,
            E,
            F,
            L,
            j,
            V = d.find(">li"),
            W = [];
          return (
            V.each(function () {
              var Z,
                U,
                te = r(this),
                re = te.find(">span:first", this),
                B = re.length ? null : te.find(">a:first"),
                de = { tooltip: null, data: {} };
              for (
                re.length
                  ? (de.title = re.html())
                  : B && B.length
                  ? ((de.title = B.html()),
                    (de.data.href = B.attr("href")),
                    (de.data.target = B.attr("target")),
                    (de.tooltip = B.attr("title")))
                  : ((de.title = te.html()),
                    (E = de.title.search(/<ul/i)),
                    E >= 0 && (de.title = de.title.substring(0, E))),
                  de.title = r.trim(de.title),
                  C = 0,
                  F = g.length;
                C < F;
                C++
              )
                de[g[C]] = void 0;
              for (
                h = this.className.split(" "), _ = [], C = 0, F = h.length;
                C < F;
                C++
              )
                (b = h[C]), f[b] ? (de[b] = !0) : _.push(b);
              if (
                ((de.extraClasses = _.join(" ")),
                (L = te.attr("title")),
                L && (de.tooltip = L),
                (L = te.attr("id")),
                L && (de.key = L),
                te.attr("hideCheckbox") && (de.checkbox = !1),
                (Z = J(te)),
                Z && !r.isEmptyObject(Z))
              ) {
                for (U in S)
                  Z.hasOwnProperty(U) && ((Z[S[U]] = Z[U]), delete Z[U]);
                for (C = 0, F = p.length; C < F; C++)
                  (L = p[C]),
                    (j = Z[L]),
                    j != null && (delete Z[L], (de[L] = j));
                r.extend(de.data, Z);
              }
              (d = te.find(">ul:first")),
                d.length
                  ? (de.children = r.ui.fancytree.parseHtml(d))
                  : (de.children = de.lazy ? void 0 : null),
                W.push(de);
            }),
            W
          );
        },
        registerExtension: function (d) {
          k(d.name != null, "extensions must have a `name` property."),
            k(d.version != null, "extensions must have a `version` property."),
            (r.ui.fancytree._extensions[d.name] = d);
        },
        unescapeHtml: function (d) {
          var h = document.createElement("div");
          return (
            (h.innerHTML = d),
            h.childNodes.length === 0 ? "" : h.childNodes[0].nodeValue
          );
        },
        warn: function (d) {
          r.ui.fancytree.debugLevel >= 2 && A("warn", arguments);
        },
      }),
      r.ui.fancytree
    );
  }
);
csui.define(
  "csui/lib/fancytree/jquery.fancytree.filter",
  ["csui/lib/jquery", "csui/lib/fancytree/jquery.fancytree"],
  function (r) {
    "use strict";
    var y = "__not_found__",
      v = r.ui.fancytree.escapeHtml;
    function m(e) {
      return (e + "").replace(/([.?*+\^\$\[\]\\(){}|-])/g, "\\$1");
    }
    function n(e) {
      return e.indexOf(">") >= 0 ? r("<div/>").html(e).text() : e;
    }
    return (
      (r.ui.fancytree._FancytreeClass.prototype._applyFilterImpl = function (
        e,
        a,
        c
      ) {
        var o,
          t,
          i,
          s,
          l,
          g = 0,
          f = this.options,
          u = f.escapeTitles,
          p = f.autoCollapse,
          x = r.extend({}, f.filter, c),
          S = x.mode === "hide",
          T = !!x.leavesOnly && !a;
        if (typeof e == "string") {
          if (e === "") {
            this.warn(
              "Fancytree passing an empty string as a filter is handled as clearFilter()."
            ),
              this.clearFilter();
            return;
          }
          x.fuzzy
            ? (o = e.split("").reduce(function (k, A) {
                return k + "[^" + A + "]*" + A;
              }))
            : (o = m(e)),
            (i = new RegExp(".*" + o + ".*", "i")),
            (s = new RegExp(m(e), "gi")),
            (e = function (k) {
              if (!k.title) return !1;
              var A = u ? k.title : n(k.title),
                M = !!i.test(A);
              return (
                M &&
                  x.highlight &&
                  (u
                    ? ((l = A.replace(s, function (N) {
                        return "\uFFF7" + N + "\uFFF8";
                      })),
                      (k.titleWithHighlight = v(l)
                        .replace(/\uFFF7/g, "<mark>")
                        .replace(/\uFFF8/g, "</mark>")))
                    : (k.titleWithHighlight = A.replace(s, function (N) {
                        return "<mark>" + N + "</mark>";
                      }))),
                M
              );
            });
        }
        return (
          (this.enableFilter = !0),
          (this.lastFilterArgs = arguments),
          this.$div.addClass("fancytree-ext-filter"),
          S
            ? this.$div.addClass("fancytree-ext-filter-hide")
            : this.$div.addClass("fancytree-ext-filter-dimm"),
          this.$div.toggleClass(
            "fancytree-ext-filter-hide-expanders",
            !!x.hideExpanders
          ),
          this.visit(function (k) {
            delete k.match, delete k.titleWithHighlight, (k.subMatchCount = 0);
          }),
          (t = this.getRootNode()._findDirectChild(y)),
          t && t.remove(),
          (f.autoCollapse = !1),
          this.visit(function (k) {
            if (!(T && k.children != null)) {
              var A = e(k),
                M = !1;
              if (A === "skip")
                return (
                  k.visit(function (N) {
                    N.match = !1;
                  }, !0),
                  "skip"
                );
              !A &&
                (a || A === "branch") &&
                k.parent.match &&
                ((A = !0), (M = !0)),
                A &&
                  (g++,
                  (k.match = !0),
                  k.visitParents(function (N) {
                    (N.subMatchCount += 1),
                      x.autoExpand &&
                        !M &&
                        !N.expanded &&
                        (N.setExpanded(!0, {
                          noAnimation: !0,
                          noEvents: !0,
                          scrollIntoView: !1,
                        }),
                        (N._filterAutoExpanded = !0));
                  }));
            }
          }),
          (f.autoCollapse = p),
          g === 0 &&
            x.nodata &&
            S &&
            ((t = x.nodata),
            r.isFunction(t) && (t = t()),
            t === !0 ? (t = {}) : typeof t == "string" && (t = { title: t }),
            (t = r.extend(
              {
                statusNodeType: "nodata",
                key: y,
                title: this.options.strings.noData,
              },
              t
            )),
            (this.getRootNode().addNode(t).match = !0)),
          this.render(),
          g
        );
      }),
      (r.ui.fancytree._FancytreeClass.prototype.filterNodes = function (e, a) {
        return (
          typeof a == "boolean" &&
            ((a = { leavesOnly: a }),
            this.warn(
              "Fancytree.filterNodes() leavesOnly option is deprecated since 2.9.0 / 2015-04-19. Use opts.leavesOnly instead."
            )),
          this._applyFilterImpl(e, !1, a)
        );
      }),
      (r.ui.fancytree._FancytreeClass.prototype.applyFilter = function (e) {
        return (
          this.warn(
            "Fancytree.applyFilter() is deprecated since 2.1.0 / 2014-05-29. Use .filterNodes() instead."
          ),
          this.filterNodes.apply(this, arguments)
        );
      }),
      (r.ui.fancytree._FancytreeClass.prototype.filterBranches = function (
        e,
        a
      ) {
        return this._applyFilterImpl(e, !0, a);
      }),
      (r.ui.fancytree._FancytreeClass.prototype.clearFilter = function () {
        var e,
          a = this.getRootNode()._findDirectChild(y),
          c = this.options.escapeTitles,
          o = this.options.enhanceTitle;
        a && a.remove(),
          this.visit(function (t) {
            t.match &&
              t.span &&
              ((e = r(t.span).find(">span.fancytree-title")),
              c ? e.text(t.title) : e.html(t.title),
              o && o({ type: "enhanceTitle" }, { node: t, $title: e })),
              delete t.match,
              delete t.subMatchCount,
              delete t.titleWithHighlight,
              t.$subMatchBadge &&
                (t.$subMatchBadge.remove(), delete t.$subMatchBadge),
              t._filterAutoExpanded &&
                t.expanded &&
                t.setExpanded(!1, {
                  noAnimation: !0,
                  noEvents: !0,
                  scrollIntoView: !1,
                }),
              delete t._filterAutoExpanded;
          }),
          (this.enableFilter = !1),
          (this.lastFilterArgs = null),
          this.$div.removeClass(
            "fancytree-ext-filter fancytree-ext-filter-dimm fancytree-ext-filter-hide"
          ),
          this.render();
      }),
      (r.ui.fancytree._FancytreeClass.prototype.isFilterActive = function () {
        return !!this.enableFilter;
      }),
      (r.ui.fancytree._FancytreeNodeClass.prototype.isMatched = function () {
        return !(this.tree.enableFilter && !this.match);
      }),
      r.ui.fancytree.registerExtension({
        name: "filter",
        version: "2.30.2",
        options: {
          autoApply: !0,
          autoExpand: !1,
          counter: !0,
          fuzzy: !1,
          hideExpandedCounter: !0,
          hideExpanders: !1,
          highlight: !0,
          leavesOnly: !1,
          nodata: !0,
          mode: "dimm",
        },
        nodeLoadChildren: function (e, a) {
          return this._superApply(arguments).done(function () {
            e.tree.enableFilter &&
              e.tree.lastFilterArgs &&
              e.options.filter.autoApply &&
              e.tree._applyFilterImpl.apply(e.tree, e.tree.lastFilterArgs);
          });
        },
        nodeSetExpanded: function (e, a, c) {
          return (
            delete e.node._filterAutoExpanded,
            !a &&
              e.options.filter.hideExpandedCounter &&
              e.node.$subMatchBadge &&
              e.node.$subMatchBadge.show(),
            this._superApply(arguments)
          );
        },
        nodeRenderStatus: function (e) {
          var a,
            c = e.node,
            o = e.tree,
            t = e.options.filter,
            i = r(c.span).find("span.fancytree-title"),
            s = r(c[o.statusClassPropName]),
            l = e.options.enhanceTitle,
            g = e.options.escapeTitles;
          return (
            (a = this._super(e)),
            !s.length ||
              !o.enableFilter ||
              (s
                .toggleClass("fancytree-match", !!c.match)
                .toggleClass("fancytree-submatch", !!c.subMatchCount)
                .toggleClass("fancytree-hide", !(c.match || c.subMatchCount)),
              t.counter &&
              c.subMatchCount &&
              (!c.isExpanded() || !t.hideExpandedCounter)
                ? (c.$subMatchBadge ||
                    ((c.$subMatchBadge = r(
                      "<span class='fancytree-childcounter'/>"
                    )),
                    r(
                      "span.fancytree-icon, span.fancytree-custom-icon",
                      c.span
                    ).append(c.$subMatchBadge)),
                  c.$subMatchBadge.show().text(c.subMatchCount))
                : c.$subMatchBadge && c.$subMatchBadge.hide(),
              c.span &&
                (!c.isEditing || !c.isEditing.call(c)) &&
                (c.titleWithHighlight
                  ? i.html(c.titleWithHighlight)
                  : g
                  ? i.text(c.title)
                  : i.html(c.title),
                l && l({ type: "enhanceTitle" }, { node: c, $title: i }))),
            a
          );
        },
      }),
      r.ui.fancytree
    );
  }
),
  csui.define(
    "csui/behaviors/collection.error/collection.error.behavior",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/controls/error/error.view",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = v.Behavior.extend({
        constructor: function (c, o) {
          v.Behavior.prototype.constructor.apply(this, arguments),
            (this.view = o);
          var t =
              e.call(this, "collection") ||
              o.collection ||
              o.options.collection,
            i = o.getEmptyView;
          o.getEmptyView = function () {
            return t.error ? m : i.apply(o, arguments);
          };
          var s = o.emptyViewOptions;
          (o.emptyViewOptions = function () {
            var l = t.error;
            return l
              ? { model: new y.Model({ message: l.message }) }
              : r.isFunction(s)
              ? s.apply(o, arguments)
              : s;
          }),
            this.listenTo(t, "error", function () {
              o.collection.reset();
            });
        },
      });
      function e(a) {
        var c = this.getOption(a);
        return r.isFunction(c) ? c.call(this.view) : c;
      }
      return n;
    }
  ),
  csui.define(
    "hbs!csui/behaviors/collection.state/impl/collection.state",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "<p>" +
            n.escapeExpression(
              ((t =
                (t = i(a, "message") || (e != null ? i(e, "message") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "message",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 3 },
                      end: { line: 1, column: 14 },
                    },
                  })
                : t)
            ) +
            "</p>"
          );
        },
      });
      return (
        v.registerPartial(
          "csui_behaviors_collection.state_impl_collection.state",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "csui/behaviors/collection.state/collection.state.view",
    [
      "csui/lib/underscore",
      "csui/lib/marionette",
      "hbs!csui/behaviors/collection.state/impl/collection.state",
    ],
    function (r, y, v) {
      "use strict";
      var m = y.ItemView.extend({
        className: "csui-collection-state",
        template: v,
        constructor: function () {
          y.ItemView.prototype.constructor.apply(this, arguments),
            this.listenTo(this.model, "change:state", this.render).listenTo(
              this,
              "render",
              this._updateClasses
            );
        },
        serializeData: function () {
          return r.extend(this.model.toJSON(), {
            message: this.options.stateMessages[this.model.get("state")],
          });
        },
        _updateClasses: function () {
          this.$el
            .removeClass(
              "csui-state-empty csui-state-loading csui-state-failed"
            )
            .addClass("csui-state-" + this.model.get("state"));
        },
      });
      return m;
    }
  ),
  csui.define(
    "csui/behaviors/collection.state/collection.state.behavior",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/behaviors/collection.state/collection.state.view",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = v.Behavior.extend({
        constructor: function (c, o) {
          v.Behavior.prototype.constructor.apply(this, arguments),
            (this.view = o);
          var t = o.collection || o.options.collection,
            i = e.call(this, "collection") || t;
          this.listenTo(i, "request", this._fetchingCollectionStarted)
            .listenTo(i, "sync", this._fetchingCollectionSucceeded)
            .listenTo(i, "error", this._fetchingCollectionFailed)
            .listenTo(t, "reset", this._collectionReset),
            (this.collectionState = new y.Model({
              state: i.fetching
                ? "loading"
                : i.error
                ? "failed"
                : i.length
                ? "full"
                : "empty",
            }));
          var s = this.getOption("stateView");
          r.isFunction(s) &&
            !(s.prototype instanceof y.View) &&
            (s = s.call(o)),
            (o.emptyView = s || m);
          var l = this;
          o.emptyViewOptions = function () {
            return r.extend(
              {
                model: l.collectionState,
                stateMessages: e.call(l, "stateMessages") || {},
              },
              e.call(l, "stateViewOptions")
            );
          };
        },
        _collectionReset: function (a) {
          var c = this.collectionState.get("state");
          c !== "loading" &&
            c !== "error" &&
            this.collectionState.set("state", a.length ? "full" : "empty");
        },
        _fetchingCollectionStarted: function () {
          this.view.collection.length === 0 &&
            (this.collectionState.set("state", "loading"),
            this.view.collection.reset(),
            this.view.blockWithoutIndicator &&
              this.view.blockWithoutIndicator());
        },
        _fetchingCollectionSucceeded: function () {
          this.collectionState.set(
            "state",
            this.view.collection.length ? "full" : "empty"
          ),
            this.view.unblockActions && this.view.unblockActions();
        },
        _fetchingCollectionFailed: function () {
          this.collectionState.set("state", "failed"),
            this.view.unblockActions && this.view.unblockActions();
        },
      });
      function e(a) {
        var c = this.getOption(a);
        return r.isFunction(c) ? c.call(this.view) : c;
      }
      return n;
    }
  ),
  csui.define(
    "hbs!csui/controls/toolbar/toolitem",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          return "";
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "hasIcon") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(4, o, 0),
              inverse: n.program(27, o, 0),
              loc: {
                start: { line: 3, column: 2 },
                end: { line: 55, column: 9 },
              },
            }
          )) != null
            ? t
            : "";
        },
        4: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "renderIconAndText") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(5, o, 0),
              inverse: n.program(12, o, 0),
              loc: {
                start: { line: 4, column: 4 },
                end: { line: 39, column: 11 },
              },
            }
          )) != null
            ? t
            : "";
        },
        5: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '      <a title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 5, column: 16 },
                      end: { line: 5, column: 25 },
                    },
                  })
                : i)
            ) +
            `" href="#"
                         ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(6, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 6, column: 25 },
                  end: { line: 6, column: 69 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                         class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 46 },
                      end: { line: 7, column: 63 },
                    },
                  })
                : i)
            ) +
            ` csui-toolitem-icon-text" data-cstabindex="-1">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "iconName") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(8, o, 0),
                inverse: n.program(10, o, 0),
                loc: {
                  start: { line: 8, column: 8 },
                  end: { line: 12, column: 15 },
                },
              }
            )) != null
              ? t
              : "") +
            `      </a>
`
          );
        },
        6: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            ' role="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "linkRole") || (e != null ? i(e, "linkRole") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "linkRole",
                    hash: {},
                    loc: {
                      start: { line: 6, column: 48 },
                      end: { line: 6, column: 60 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        8: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            "          " +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: {
                on: e != null ? s(e, "iconStateIsOn") : e,
                states: "true",
                theme: e != null ? s(e, "iconTheme") : e,
                iconName: e != null ? s(e, "iconName") : e,
              },
              loc: {
                start: { line: 9, column: 10 },
                end: { line: 9, column: 88 },
              },
            })) != null
              ? t
              : "") +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 9, column: 88 },
                      end: { line: 9, column: 96 },
                    },
                  })
                : i)
            ) +
            `
`
          );
        },
        10: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '          <span class="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 11, column: 23 },
                      end: { line: 11, column: 31 },
                    },
                  })
                : t)
            ) +
            '"></span>' +
            n.escapeExpression(
              ((t =
                (t = i(a, "name") || (e != null ? i(e, "name") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 11, column: 40 },
                      end: { line: 11, column: 48 },
                    },
                  })
                : t)
            ) +
            `
`
          );
        },
        12: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "renderTextOnly") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(13, o, 0),
              inverse: n.program(16, o, 0),
              loc: {
                start: { line: 15, column: 6 },
                end: { line: 38, column: 13 },
              },
            }
          )) != null
            ? t
            : "";
        },
        13: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `        <a  href="#"
                          ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(6, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 17, column: 26 },
                  end: { line: 17, column: 70 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                          class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 18, column: 47 },
                      end: { line: 18, column: 64 },
                    },
                  })
                : i)
            ) +
            ` csui-toolitem-textonly"
                          data-cstabindex="-1">` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 19, column: 47 },
                      end: { line: 19, column: 55 },
                    },
                  })
                : i)
            ) +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "menuWithMoreOptions") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(14, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 20, column: 10 },
                  end: { line: 22, column: 17 },
                },
              }
            )) != null
              ? t
              : "") +
            `        </a>
`
          );
        },
        14: function (n, e, a, c, o) {
          return `            <span class="csui-button-icon csui-icon-rightArrow icon-expandArrowUp"></span>
`;
        },
        16: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '        <a href="#" title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 25, column: 27 },
                      end: { line: 25, column: 36 },
                    },
                  })
                : i)
            ) +
            `"
                    ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(6, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 26, column: 20 },
                  end: { line: 26, column: 64 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                    class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 27, column: 41 },
                      end: { line: 27, column: 58 },
                    },
                  })
                : i)
            ) +
            ` csui-acc-focusable csui-toolitem-icononly"
                    data-cstabindex="-1" ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "toolItemAria") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(17, o, 0),
                inverse: n.program(19, o, 0),
                loc: {
                  start: { line: 28, column: 41 },
                  end: { line: 30, column: 57 },
                },
              }
            )) != null
              ? t
              : "") +
            `
          ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "hasToolItemAriaExpand") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(21, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 31, column: 10 },
                  end: { line: 31, column: 85 },
                },
              }
            )) != null
              ? t
              : "") +
            `>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "iconName") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(23, o, 0),
                inverse: n.program(25, o, 0),
                loc: {
                  start: { line: 32, column: 10 },
                  end: { line: 36, column: 17 },
                },
              }
            )) != null
              ? t
              : "") +
            `        </a>
`
          );
        },
        17: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "toolItemAria") ||
                  (e != null ? i(e, "toolItemAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "toolItemAria",
                    hash: {},
                    loc: {
                      start: { line: 29, column: 38 },
                      end: { line: 29, column: 54 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        19: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `
                           aria-label="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 30, column: 39 },
                      end: { line: 30, column: 48 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        21: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'aria-expanded="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "toolItemAriaExpand") ||
                  (e != null ? i(e, "toolItemAriaExpand") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "toolItemAriaExpand",
                    hash: {},
                    loc: {
                      start: { line: 31, column: 54 },
                      end: { line: 31, column: 76 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        23: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "            " +
            ((t = (
              i(a, "icon-v2") ||
              (e && i(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: {
                on: e != null ? i(e, "iconStateIsOn") : e,
                states: "true",
                theme: e != null ? i(e, "iconTheme") : e,
                iconName: e != null ? i(e, "iconName") : e,
              },
              loc: {
                start: { line: 33, column: 12 },
                end: { line: 33, column: 90 },
              },
            })) != null
              ? t
              : "") +
            `
`
          );
        },
        25: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '            <span class="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 35, column: 25 },
                      end: { line: 35, column: 33 },
                    },
                  })
                : t)
            ) +
            `"></span>
`
          );
        },
        27: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "isLabel") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(28, o, 0),
              inverse: n.program(30, o, 0),
              loc: {
                start: { line: 41, column: 6 },
                end: { line: 54, column: 13 },
              },
            }
          )) != null
            ? t
            : "";
        },
        28: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `          <div
             class="csui-toolitem-textonly csui-label">` +
            n.escapeExpression(
              ((t =
                (t = i(a, "name") || (e != null ? i(e, "name") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 43, column: 55 },
                      end: { line: 43, column: 63 },
                    },
                  })
                : t)
            ) +
            `
          </div>
`
          );
        },
        30: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `          <a href="#"
              ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(6, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 47, column: 14 },
                  end: { line: 47, column: 58 },
                },
              }
            )) != null
              ? t
              : "") +
            `
             class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 48, column: 34 },
                      end: { line: 48, column: 51 },
                    },
                  })
                : i)
            ) +
            " csui-toolitem-textonly " +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "isSubItem") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(31, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 48, column: 75 },
                  end: { line: 48, column: 111 },
                },
              }
            )) != null
              ? t
              : "") +
            `"
             data-cstabindex="-1">` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 49, column: 34 },
                      end: { line: 49, column: 42 },
                    },
                  })
                : i)
            ) +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "menuWithMoreOptions") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(33, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 50, column: 14 },
                  end: { line: 52, column: 21 },
                },
              }
            )) != null
              ? t
              : "") +
            `          </a>
`
          );
        },
        31: function (n, e, a, c, o) {
          return "csui-subitem";
        },
        33: function (n, e, a, c, o) {
          return `                  <span class="csui-button-icon csui-icon-rightArrow icon-expandArrowUp"></span>
`;
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "isSeparator") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.program(3, o, 0),
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 56, column: 7 },
              },
            }
          )) != null
            ? t
            : "";
        },
      });
      return v.registerPartial("csui_controls_toolbar_toolitem", m), m;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitem.view",
    [
      "require",
      "i18n",
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/controls/mixins/view.state/toolitems.state.mixin",
      "csui/behaviors/keyboard.navigation/tabable.region.behavior",
      "hbs!csui/controls/toolbar/toolitem",
      "csui/controls/icons.v2",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v, m, n, e, a, c, o, t) {
      "use strict";
      var i = e.ItemView.extend(
        {
          tagName: "li",
          className: function () {
            var s = this.model.get("className") || "";
            return this.model.isSeparator() && (s += " binf-divider"), s;
          },
          attributes: function () {
            var s = {};
            if (this.model.isSeparator()) s["aria-hidden"] = "true";
            else {
              var l = this.model.get("signature") || "";
              (s["data-csui-command"] = l.toLowerCase()),
                l.toLowerCase() === "add" &&
                  (s["data-csui-addtype"] = this.model.get("commandData").type),
                this.options.role
                  ? (s.role = this.options.role)
                  : (s.role = "none");
            }
            return s;
          },
          ui: { link: "a" },
          template: o,
          templateHelpers: function () {
            var s = this.model.get("toolItemRole"),
              l = s || (this.model.isSeparator() ? "none" : void 0);
            l || (l = this.options.noMenuRoles ? void 0 : "menuitem");
            var g = {
                renderIconAndText: this.options.renderIconAndText === !0,
                renderTextOnly: this.options.renderTextOnly === !0,
                isSeparator: this.model.isSeparator(),
                isLabel: this.model.get("isLabel"),
                isSubItem: this.model.get("isSubItem"),
                toolItemAria: this.model.get("toolItemAria"),
                hasToolItemAriaExpand:
                  this.model.get("toolItemAriaExpand") !== void 0,
                toolItemAriaExpand: this.model.get("toolItemAriaExpand"),
                linkRole: l,
                hasIcon: this._hasIcon(),
                icon: this._icon,
                iconName: this._iconName,
                iconStateIsOn: this._stateIsOn,
                iconTheme: this.options.useIconsForDarkBackground ? "dark" : "",
              },
              f = this.options.command;
            return (
              (g.disabledClass =
                f && f.get("selfBlockOnly") && f.get("isExecuting")
                  ? "binf-disabled"
                  : ""),
              (g.title = this.model.get("title")
                ? this.model.get("title")
                : this.model.get("name")),
              g
            );
          },
          events: { "click a": "_handleClick", keydown: "onKeyInView" },
          constructor: function (l) {
            (this.options = l || {}),
              e.ItemView.prototype.constructor.apply(this, arguments),
              this._calculateIconName(),
              this.listenTo(this.model, "change:stateIsOn", function () {
                this._calculateIconName(),
                  this._renderState ? this.renderTextOnly() : this.render(),
                  this.makeFocusable();
              });
          },
          onKeyInView: function (s) {
            var l = v(s.target);
            if (s.keyCode === 32 || s.keyCode === 13)
              return this._handleClick(s, !0), !1;
          },
          saveRenderState: function () {
            (this._renderState = {}),
              m.each(
                i.STATE_PARAMS,
                function (s) {
                  this._renderState[s] = this.options[s];
                },
                this
              );
          },
          restoreRenderState: function () {
            this._renderState &&
              (m.each(
                i.STATE_PARAMS,
                function (s) {
                  this.options[s] = this._renderState[s];
                },
                this
              ),
              this.render(),
              delete this._renderState);
          },
          onBeforeRender: function () {
            var s = this.$("a:focus:visible");
            this.itemHadFocus = s.length === 1;
          },
          onRender: function () {
            if (this.itemHadFocus) {
              var s = this.$("a:visible");
              s.attr("tabindex", 0),
                s.addClass([
                  c.accessibilityFocusableClass,
                  c.accessibilityActiveElementClass,
                ]),
                s[0].focus(),
                (this.itemHadFocus = !1);
            }
          },
        },
        { STATE_PARAMS: ["renderIconAndText", "renderTextOnly"] }
      );
      return m.extend(i.prototype, a), i;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitem.model",
    ["csui/lib/underscore", "csui/lib/backbone"],
    function (r, y) {
      "use strict";
      var v = y.Model.extend({
        idAttribute: null,
        isSeparator: function () {
          return this.get("signature") == v.separator_signature;
        },
      });
      return (
        (v.createSeparator = function () {
          return new v({ signature: v.separator_signature });
        }),
        (v.separator_signature = "-"),
        v
      );
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitems.factory",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/toolbar/toolitem.model",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = v.Object.extend(
        {
          constructor: function c(o, t) {
            (this.collection = new y.Collection([], { model: n })),
              (this.runsInTouchBrowser =
                t && t.runsInTouchBrowser !== void 0
                  ? t.runsInTouchBrowser
                  : m.isTouchBrowser()),
              o instanceof c
                ? this.collection.reset(o.collection.toJSON())
                : this.set(o),
              v.Object.prototype.constructor.call(this, t),
              this.storeSnapshot();
          },
          clone: function () {
            const c = new e(this, this.options);
            return this._originalCollection && c.storeSnapshot(), c;
          },
          storeSnapshot() {
            a(this) && (this._originalCollection = this.collection.clone());
          },
          restoreSnapshot(c) {
            a(this) &&
              this.collection.reset(this._originalCollection.models, c);
          },
          set: function (c) {
            r.isArray(c)
              ? r.each(
                  c,
                  function (o) {
                    this._setToolItemDefinition(o);
                  },
                  this
                )
              : this._setToolItemDefinition(c);
          },
          hasItem(c) {
            return !!this.collection.find((o) => o.get("signature") === c);
          },
          addItem: function (c, o = {}) {
            var t = c.get("group"),
              i = !1,
              s;
            if (c.get("onlyInTouchBrowser") && this.runsInTouchBrowser) return;
            this.collection.find(function (g, f) {
              if (g.get("group") === t) i = !0;
              else if (i) return (s = f), !0;
            });
            const l = o.silent;
            i && s
              ? this.collection.add(c, { at: s, silent: l })
              : o.index > -1
              ? this.collection.add(c, { at: o.index, silent: l })
              : this.collection.add(c, { silent: l });
          },
          reset: function (c) {
            this.collection.reset(c);
          },
          getCollection: function () {
            return this.collection;
          },
          _setToolItemDefinition: function (c) {
            var o = this.runsInTouchBrowser;
            if (this.collection.length === 0) {
              var t = [];
              r.each(c, function (i, s) {
                t.push({ signature: "disabled", group: s }),
                  r.each(i, function (l) {
                    (!l.onlyInTouchBrowser || o) &&
                      (l.group || r.extend(l, { group: s }), t.push(l));
                  });
              }),
                this.collection.reset(t);
            }
          },
        },
        {
          cloneToolbarItems(c) {
            return Object.keys(c).reduce((o, t) => {
              const i = c[t];
              return i instanceof e && (o[t] = i.clone()), o;
            }, {});
          },
          storeToolbarItemsSnapshots(c) {
            for (const o in c) c[o] instanceof e && c[o].storeSnapshot();
          },
        }
      );
      function a(c) {
        const { _originalCollection: o } = c;
        return !o || o.length === c.collection.length;
      }
      return e;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitems.filtered.model",
    [
      "module",
      "require",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/controls/toolbar/toolitem.model",
      "csui/controls/toolbar/toolitems.factory",
      "csui/utils/commands",
      "csui/utils/log",
    ],
    function (r, y, v, m, n, e, a, c, o) {
      "use strict";
      o = o(r.id);
      var t = n.Collection.extend({
        constructor: function (l, g) {
          if (v.isArray(l)) this.unfilteredModels = l;
          else if (l instanceof a) {
            var f = l.getCollection();
            (this.unfilteredModels = f.models),
              this.listenTo(f, "reset update", () => {
                (this.unfilteredModels = f.models), this.refilter();
              });
          } else
            l instanceof n.Collection &&
              l.model instanceof e &&
              (this.unfilteredModels = l.models);
          g || (g = {}),
            (this.commands = g.commands || c),
            (this.addTrailingDivider = l.options
              ? l.options.addTrailingDivider
              : g.addTrailingDivider),
            (this.addGroupSeparators = l.options
              ? l.options.addGroupSeparators !== !1
              : g.addGroupSeparators !== !1),
            (this.suppressGroupSeparators = l.options
              ? l.options.suppressGroupSeparators
              : g.suppressGroupSeparators),
            this.setStatus(g.status),
            (this.delayedActions = g.delayedActions),
            (this.mask = g.mask),
            (this._filtering = 0),
            n.Collection.prototype.constructor.call(
              this,
              this.unfilteredModels,
              g
            ),
            this.delayedActions &&
              this.listenTo(
                this.delayedActions,
                "sync",
                this.refilter
              ).listenTo(this.delayedActions, "error", this.refilter),
            this.mask && this.listenTo(this.mask, "update", this.refilter);
        },
        sort: function (s) {
          s || (s = {});
          var l = this.models,
            g = function (f, u) {
              var p = !!l[f].get("csuiNonPromotedItem"),
                x = !!l[u].get("csuiNonPromotedItem");
              return !p && x ? -1 : p && !x ? 1 : f - u;
            };
          return (
            (this.models = l
              .map(function (f, u) {
                return u;
              })
              .sort(g)
              .map(function (f) {
                return l[f];
              })),
            s.silent || this.trigger("sort", this, s),
            this
          );
        },
        destroy: function () {
          this.stopListening();
        },
        refilter: function () {
          if (this._isActive === !1) return;
          if (!this._filtering) {
            ++this._filtering;
            var s = this._resolveCustomViews();
            s ? s.always(l.bind(this)) : l.call(this);
          }
          function l() {
            var g = this.filterModels(this.unfilteredModels),
              f = this.length !== g.length || this._forceResetOnNextRefilter;
            if (
              (f ||
                (f = this.some(function (p, x) {
                  var S = g[x];
                  return (
                    !v.isEqual(p.attributes, S.attributes) ||
                    !v.isEqual(p.toolItems, S.toolItems)
                  );
                })),
              f)
            ) {
              this.trigger("before:reset", this, { models: g });
              var u =
                this.silentFetch && !this._forceResetOnNextRefilter
                  ? { silent: !0 }
                  : void 0;
              this.reset(g, u), delete this._forceResetOnNextRefilter;
            } else this.trigger("remain", this);
            (this.silentFetch = !1), --this._filtering;
          }
        },
        set: function (s, l) {
          return (
            this._filtering || (s = this.filterModels(s)),
            n.Collection.prototype.set.call(this, s, l)
          );
        },
        setStatus: function (s) {
          if (s) {
            if (
              (this.status &&
                (this.status.nodes &&
                  (this.status.nodes.remove(this.status.container),
                  this.stopListening(this.status.nodes)),
                this.status.container &&
                  this.stopListening(this.status.container)),
              (this.status = s),
              s.nodes)
            ) {
              var l = ["change", "reset"];
              l = v.union(l, s.listenEvents);
              var g = l.join(" ");
              this.listenTo(s.nodes, g, this.refilter);
            }
            s.container && this.listenTo(s.container, "change", this.refilter);
          }
        },
        updateStatus: function (s) {
          this.status = v.extend({}, this.status, s);
        },
        setActive: function (s) {
          this._isActive === !1 &&
            this._isActive !== s &&
            (this._forceResetOnNextRefilter = !0),
            (this._isActive = s);
        },
        filterModels: function (s) {
          ++this._filtering;
          var l = this._filterToolItems(s);
          return (
            (l = v.reject(
              l,
              function (f) {
                if (f.toolItems) {
                  var u = this._makeSubItems(f.toolItems);
                  if (u.length)
                    (u = g.call(this, u)), f.toolItems.set(u, { silent: !0 });
                  else return this._checkCommandEnableOrDisable(f);
                }
              },
              this
            )),
            (l = g.call(this, l)),
            --this._filtering,
            l
          );
          function g(f) {
            var u,
              p = v.reject(
                f,
                function (x) {
                  if (x.isSeparator()) {
                    if (u) return !0;
                    u = !0;
                  } else u = !1;
                },
                this
              );
            return p.length && p[p.length - 1].isSeparator() && p.pop(), p;
          }
        },
        _checkCommandEnableOrDisable: function (s) {
          var l = s.get("signature"),
            g = l && this.commands.get(l);
          if (g) {
            var f = v.extend({}, this.status.data, s.get("commandData")),
              u = v.defaults({ toolItem: s, data: f }, this.status);
            return i(s, g, u);
          } else return !0;
        },
        _makeSubItems: function (s) {
          var l = v.reject(
            s.models,
            function (f) {
              if (f.get("subItemOf")) {
                var u = s.find({ signature: f.get("subItemOf") });
                if (u !== void 0) return u.toolItems.push(f), !0;
              }
            },
            this
          );
          return g.call(this, l);
          function g(f) {
            return v.reject(
              f,
              function (u) {
                if (!u.toolItems || (u.toolItems && u.toolItems.length === 0)) {
                  if (!u.isSeparator())
                    return this._checkCommandEnableOrDisable(u);
                } else {
                  var p = g.call(this, u.toolItems.models);
                  if (
                    (p.length && p[0].isSeparator() && p.shift(),
                    p.length && p[p.length - 1].isSeparator() && p.pop(),
                    p.length)
                  )
                    u.toolItems.set(p, { silent: !0 });
                  else return !0;
                }
              },
              this
            );
          }
        },
        _filterToolItems: function (s) {
          var l = new n.Collection(void 0, { model: e }),
            g = "",
            f = "",
            u = "";
          return (
            v.each(
              s,
              function (p) {
                if (!(this.mask && !this.mask.passItem(p))) {
                  p = p.clone();
                  var x = p.get("flyout"),
                    S = l;
                  if (x) {
                    var T = l.findWhere({ flyout: x });
                    T && (S = T.toolItems),
                      (p.toolItems = new n.Collection(void 0, { model: e }));
                  }
                  var k = this.commands.get(p.get("signature")),
                    A = p.get("enabled");
                  if (k) {
                    var M = v.extend(
                        {},
                        this.status.data,
                        p.get("commandData")
                      ),
                      N = v.defaults({ toolItem: p, data: M }, this.status);
                    k.isNonPromoted &&
                      k.isNonPromoted(N) &&
                      p.set("csuiNonPromotedItem", !0);
                    var R = i(p, k, N),
                      K = k.get("signature");
                    if (
                      (R ? (g += ' "' + K + '"') : (f += ' "' + K + '"'),
                      R && !A)
                    )
                      p = null;
                    else if (x) {
                      var G = p.get("actions");
                      G &&
                        ((G = new n.Collection(G, { model: e })),
                        (G = this._filterToolItems(G.models)),
                        p.toolItems.reset(G));
                    }
                  } else !p.toolItems && !A && (p = null);
                  if (p) {
                    u += ' "' + p.get("signature") + '"';
                    var $ = p.get("group"),
                      z = p.get("subItemOf"),
                      ue = S.findLastIndex((Q) =>
                        !Q.get("group") && Q.get("signature") === "-"
                          ? !1
                          : Q.get("group") === $
                      );
                    if (ue < 0) {
                      if (
                        S.length > 0 &&
                        this.addGroupSeparators &&
                        !this.suppressGroupSeparators
                      ) {
                        var J = e.createSeparator();
                        z && J.set({ subItemOf: z, silent: !0 }), S.push(J);
                      }
                      S.push(p);
                    } else {
                      var ae = 0;
                      if (this.stgmore && p.get("name") === "Copy link") {
                        var q;
                        (q = p.clone()),
                          q.set("name", p.get("name") + " 2"),
                          q.set("signature", p.get("signature") + " 2"),
                          S.add(q, { at: ue + 1 + ae++ }),
                          (q.status = this.status),
                          (q = p.clone()),
                          q.set("name", p.get("name") + " 3"),
                          q.set("signature", p.get("signature") + " 3"),
                          S.add(q, { at: ue + 1 + ae++ }),
                          (q.status = this.status);
                      }
                      S.add(p, { at: ue + 1 + ae });
                    }
                    p.status = this.status;
                  }
                }
              },
              this
            ),
            g &&
              o.debug("filter toolitems, disabled: {0}", g) &&
              console.log(o.last),
            f &&
              o.debug("filter toolitems, enabled: {0}", f) &&
              console.log(o.last),
            u &&
              o.debug("filter toolitems, added: {0}", u) &&
              console.log(o.last),
            l.models
          );
        },
        _resolveCustomViews: function () {
          var s = this.unfilteredModels.filter(function (f) {
            return typeof f.get("customView") == "string";
          });
          if (s.length) {
            var l = s.map(function (f) {
                return f.get("customView");
              }),
              g = m.Deferred();
            return (
              y(
                l,
                function () {
                  for (var f = 0, u = l.length; f < u; ++f)
                    s[f].set("customView", arguments[f]);
                  g.resolve();
                },
                function (f) {
                  for (var u = 0, p = l.length; u < p; ++u)
                    s[u].set("customView", f);
                  g.reject(f);
                }
              ),
              g.promise()
            );
          }
        },
      });
      function i(s, l, g) {
        try {
          return l.enabled && !l.enabled(g, { data: s.get("commandData") });
        } catch (f) {
          return (
            o.warn(
              `Evaluating the command "{0}" failed.
{1}`,
              l.get("signature"),
              f.stack
            ) && console.warn(o.last),
            !0
          );
        }
      }
      return t;
    }
  ),
  csui.define(
    "hbs!csui/controls/toolbar/impl/toolbar.state",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "<p>" +
            n.escapeExpression(
              ((t =
                (t = i(a, "message") || (e != null ? i(e, "message") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "message",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 3 },
                      end: { line: 1, column: 14 },
                    },
                  })
                : t)
            ) +
            `</p>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_toolbar_impl_toolbar.state", m), m
      );
    }
  ),
  csui.define("csui/controls/toolbar/impl/nls/localized.strings", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/toolbar/impl/nls/root/localized.strings", {
    loadingActionsMessage: "Loading actions...",
    failedActionsMessage: "Loading actions failed.",
    showMoreLabel: "show more actions",
  }),
  csui.define(
    "csui/controls/toolbar/toolbar.state.view",
    [
      "csui/lib/underscore",
      "csui/lib/marionette",
      "hbs!csui/controls/toolbar/impl/toolbar.state",
      "i18n!csui/controls/toolbar/impl/nls/localized.strings",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = y.ItemView.extend({
        tagName: "li",
        className: "csui-toolbar-state",
        template: v,
        constructor: function () {
          y.ItemView.prototype.constructor.apply(this, arguments),
            this.listenTo(this.model, "change", function () {
              this.isDestroyed || this.render();
            }),
            (this.statusMessages = {
              loading: m.loadingActionsMessage,
              failed: m.failedActionsMessage,
            });
        },
        serializeData: function () {
          var e = this.model.get("showMessage")
            ? this.statusMessages[this.model.get("state")]
            : void 0;
          return r.extend(this.model.toJSON(), { message: e });
        },
      });
      return n;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolbar.state.behavior",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/controls/toolbar/toolbar.state.view",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = v.Behavior.extend({
        constructor: function (a, c) {
          v.Behavior.prototype.constructor.apply(this, arguments),
            (this.view = c);
          var o = c.collection || c.options.collection,
            t = this.getOption("delayedActions");
          r.isFunction(t) && !(t instanceof y.Collection) && (t = t.call(c)),
            !t && o && (t = o.delayedActions),
            t &&
              this.listenTo(t, "request", this._fetchingActionsStarted)
                .listenTo(t, "sync", this._fetchingActionsSucceeded)
                .listenTo(t, "error", this._fetchingActionsFailed),
            this.listenTo(o, "reset change", this._fetchingActionsSucceeded),
            (c.actionState = new y.Model({
              state:
                t &&
                (t.fetching
                  ? "loading"
                  : t.error
                  ? "failed"
                  : o.length
                  ? "full"
                  : "empty"),
              showMessage: !0,
            })),
            (c.emptyView = m),
            (c.emptyViewOptions = { model: c.actionState, toolbarView: c }),
            this.listenTo(c, "render", this._updateClasses);
        },
        _fetchingActionsStarted: function () {
          this.view.actionState.set("state", "loading"), this._updateClasses();
        },
        _fetchingActionsSucceeded: function (e) {
          this.view.actionState.set("state", e.length ? "" : "emptyfull"),
            this._updateClasses();
        },
        _fetchingActionsFailed: function () {
          this.view.actionState.set("state", "failed"), this._updateClasses();
        },
        _updateClasses: function () {
          this.view.$el
            .removeClass(
              "csui-state-empty csui-state-loading csui-state-failed"
            )
            .addClass("csui-state-" + this.view.actionState.get("state"));
        },
      });
      return n;
    }
  ),
  csui.define(
    "hbs!csui/controls/toolbar/impl/flyout.toolitem",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "renderIconAndText") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(2, o, 0),
              inverse: n.program(9, o, 0),
              loc: {
                start: { line: 2, column: 0 },
                end: { line: 36, column: 7 },
              },
            }
          )) != null
            ? t
            : "";
        },
        2: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '  <a aria-haspopup="true" title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 33 },
                      end: { line: 3, column: 42 },
                    },
                  })
                : i)
            ) +
            '" href="#" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 3, column: 53 },
                  end: { line: 3, column: 96 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                     class="csui-toolitem csui-toolitem-icon-text" data-cstabindex="-1">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "iconName") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.program(7, o, 0),
                loc: {
                  start: { line: 5, column: 4 },
                  end: { line: 9, column: 11 },
                },
              }
            )) != null
              ? t
              : "") +
            `     <span class="csui-caret"></span>
  </a>
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'role="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "linkRole") || (e != null ? i(e, "linkRole") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "linkRole",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 75 },
                      end: { line: 3, column: 87 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        5: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            "      " +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: {
                on: e != null ? s(e, "iconStateIsOn") : e,
                states: "true",
                theme: e != null ? s(e, "iconTheme") : e,
                iconName: e != null ? s(e, "iconName") : e,
              },
              loc: {
                start: { line: 6, column: 6 },
                end: { line: 6, column: 84 },
              },
            })) != null
              ? t
              : "") +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 6, column: 84 },
                      end: { line: 6, column: 92 },
                    },
                  })
                : i)
            ) +
            `
`
          );
        },
        7: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '      <span class="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 8, column: 19 },
                      end: { line: 8, column: 27 },
                    },
                  })
                : t)
            ) +
            '"></span>' +
            n.escapeExpression(
              ((t =
                (t = i(a, "name") || (e != null ? i(e, "name") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 8, column: 36 },
                      end: { line: 8, column: 44 },
                    },
                  })
                : t)
            ) +
            `
`
          );
        },
        9: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "renderTextOnly") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(10, o, 0),
              inverse: n.program(13, o, 0),
              loc: {
                start: { line: 13, column: 2 },
                end: { line: 35, column: 9 },
              },
            }
          )) != null
            ? t
            : "";
        },
        10: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '    <a aria-haspopup="true" href="#" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 14, column: 37 },
                  end: { line: 14, column: 80 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                      class="csui-toolitem csui-toolitem-textonly"
                      data-cstabindex="-1" aria-label="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 16, column: 55 },
                      end: { line: 16, column: 64 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 16, column: 66 },
                      end: { line: 16, column: 74 },
                    },
                  })
                : i)
            ) +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "menuWithMoreOptions") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(11, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 17, column: 6 },
                  end: { line: 19, column: 13 },
                },
              }
            )) != null
              ? t
              : "") +
            `      <span class="csui-caret"></span>
    </a>
`
          );
        },
        11: function (n, e, a, c, o) {
          return `        <span class="csui-button-icon csui-icon-rightArrow icon-expandArrowUp"></span>
`;
        },
        13: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '    <a aria-haspopup="true" href="#" title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 23, column: 44 },
                      end: { line: 23, column: 53 },
                    },
                  })
                : i)
            ) +
            '" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 23, column: 55 },
                  end: { line: 23, column: 98 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                       class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 24, column: 44 },
                      end: { line: 24, column: 61 },
                    },
                  })
                : i)
            ) +
            ` csui-toolitem-icononly"
                       data-cstabindex="-1" ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "toolItemAria") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(14, o, 0),
                inverse: n.program(16, o, 0),
                loc: {
                  start: { line: 25, column: 44 },
                  end: { line: 27, column: 53 },
                },
              }
            )) != null
              ? t
              : "") +
            `
      ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "hasToolItemAriaExpand") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(18, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 28, column: 6 },
                  end: { line: 28, column: 81 },
                },
              }
            )) != null
              ? t
              : "") +
            `>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "iconName") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(20, o, 0),
                inverse: n.program(22, o, 0),
                loc: {
                  start: { line: 29, column: 6 },
                  end: { line: 33, column: 13 },
                },
              }
            )) != null
              ? t
              : "") +
            `    </a>
`
          );
        },
        14: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "toolItemAria") ||
                  (e != null ? i(e, "toolItemAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "toolItemAria",
                    hash: {},
                    loc: {
                      start: { line: 26, column: 34 },
                      end: { line: 26, column: 50 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        16: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `
                       aria-label="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 27, column: 35 },
                      end: { line: 27, column: 44 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        18: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'aria-expanded="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "toolItemAriaExpand") ||
                  (e != null ? i(e, "toolItemAriaExpand") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "toolItemAriaExpand",
                    hash: {},
                    loc: {
                      start: { line: 28, column: 50 },
                      end: { line: 28, column: 72 },
                    },
                  })
                : t)
            ) +
            '" '
          );
        },
        20: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "        " +
            ((t = (
              i(a, "icon-v2") ||
              (e && i(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: {
                on: e != null ? i(e, "iconStateIsOn") : e,
                states: "true",
                theme: e != null ? i(e, "iconTheme") : e,
                iconName: e != null ? i(e, "iconName") : e,
              },
              loc: {
                start: { line: 30, column: 8 },
                end: { line: 30, column: 86 },
              },
            })) != null
              ? t
              : "") +
            `
`
          );
        },
        22: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '        <span class="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 32, column: 21 },
                      end: { line: 32, column: 29 },
                    },
                  })
                : t)
            ) +
            `"></span>
`
          );
        },
        24: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '<a  aria-haspopup="true" href="#" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "linkRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 38, column: 34 },
                  end: { line: 38, column: 77 },
                },
              }
            )) != null
              ? t
              : "") +
            `
                   class="csui-toolitem ` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "disabledClass") ||
                  (e != null ? s(e, "disabledClass") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabledClass",
                    hash: {},
                    loc: {
                      start: { line: 39, column: 40 },
                      end: { line: 39, column: 57 },
                    },
                  })
                : i)
            ) +
            ` csui-toolitem-textonly"
                   data-cstabindex="-1" aria-label="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 40, column: 52 },
                      end: { line: 40, column: 61 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 40, column: 63 },
                      end: { line: 40, column: 71 },
                    },
                  })
                : i)
            ) +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "menuWithMoreOptions") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(25, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 41, column: 2 },
                  end: { line: 43, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `   <span class="csui-caret"></span>
</a>
`
          );
        },
        25: function (n, e, a, c, o) {
          return `    <span class="csui-button-icon csui-icon-rightArrow icon-expandArrowUp"></span>
`;
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "hasIcon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.program(24, o, 0),
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 46, column: 7 },
                },
              }
            )) != null
              ? t
              : "") +
            `<ul class="binf-dropdown-menu" role="menu"></ul>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_toolbar_impl_flyout.toolitem", m), m
      );
    }
  ),
  csui.define(
    "csui/controls/toolbar/flyout.toolitem.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/controls/toolbar/toolitem.view",
      "csui/utils/base",
      "csui/controls/mixins/view.state/toolitems.state.mixin",
      "hbs!csui/controls/toolbar/impl/flyout.toolitem",
      "i18n!csui/controls/toolbar/impl/nls/localized.strings",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      var o = v.CompositeView.extend(
        {
          tagName: "li",
          className: "csui-flyout binf-dropdown-submenu binf-pull-down",
          attributes: function () {
            var t = this.model.get("signature") || "",
              i = {};
            return (
              this.model.isSeparator()
                ? (i["aria-hidden"] = "true")
                : ((i["data-csui-command"] = t.toLowerCase()),
                  this.options.role
                    ? (i.role = this.options.role)
                    : (i.role = "none")),
              i
            );
          },
          onDomRefresh: function () {
            this.$el.parent(
              ".csui-toolbar, .csui-table-actionbar > ul.binf-nav"
            ).length
              ? this.$el.addClass("binf-pull-down")
              : this.$el.removeClass("binf-pull-down"),
              this.$el.hasClass("binf-open") && this.$el.trigger("click");
          },
          template: a,
          templateHelpers: function () {
            var t = this.options.command;
            return {
              name: this.model.get("name"),
              renderIconAndText: this.options.renderIconAndText === !0,
              renderTextOnly: this.options.renderTextOnly === !0,
              expandTitle: c.showMoreLabel,
              toolItemAria: this.model.get("toolItemAria"),
              hasToolItemAriaExpand:
                this.model.get("toolItemAriaExpand") !== void 0,
              toolItemAriaExpand: this.model.get("toolItemAriaExpand"),
              hasIcon: this._hasIcon(),
              icon: this._icon,
              iconName: this._iconName,
              iconStateIsOn: this._stateIsOn,
              iconTheme: this.options.useIconsForDarkBackground ? "dark" : "",
              disabledClass:
                t && t.get("selfBlockOnly") && t.get("isExecuting")
                  ? "binf-disabled"
                  : "",
              title: this.model.get("title")
                ? this.model.get("title")
                : this.model.get("name"),
              linkRole: this.options.noMenuRoles ? void 0 : "menuitem",
            };
          },
          childViewContainer: ".binf-dropdown-menu",
          getChildView: function (t) {
            return t.toolItems && t.toolItems.length ? o : m;
          },
          childViewOptions: function () {
            return { renderTextOnly: !0 };
          },
          childEvents: {
            "toolitem:action": function (t, i) {
              this.triggerMethod("toolitem:action", i),
                this.$el.data("binf.dropdown.submenu") &&
                  this.$el.data("binf.dropdown.submenu").hide();
            },
          },
          ui: { link: "a.csui-toolitem" },
          events: { "click @ui.link": "activeSubmenu" },
          onRender: function () {
            this.$el.binf_dropdown_submenu(),
              this.$el
                .off("dom:refresh")
                .on("dom:refresh", r.bind(this.onDomRefresh, this)),
              this.$el.off("binf.dropdown.submenu.after.show").on(
                "binf.dropdown.submenu.after.show",
                r.bind(function (t) {
                  if (
                    this.$el.parent().hasClass("csui-toolbar") ||
                    !this.$el.hasClass("binf-pull-down")
                  ) {
                    var i = this.$el.children().last();
                    n.alignDropDownSubMenus({
                      targetEl: this.$el,
                      dropdownMenu: i,
                    });
                  }
                }, this)
              );
          },
          constructor: function (i) {
            (this.options = i || {}),
              (this.collection =
                i.collection || (i.model && i.model.toolItems)),
              (this.model = this.options.model),
              this._calculateIconName(),
              v.CompositeView.prototype.constructor.apply(this, arguments),
              this.listenTo(this.collection, "add change reset", function (s) {
                (this.el &&
                  this.el.offsetWidth > 0 &&
                  this.el.offsetHeight > 0) ||
                  (this._calculateIconName(), this.render());
              });
          },
          onKeyInView: function (t) {
            var i = y(t.target);
            if (t.keyCode === 13) return this._handleClick(t), !1;
          },
          activeSubmenu: function (t) {
            if (n.isAppleMobile() || n.isMacintosh()) {
              var i = y(t.target).attr("aria-expanded") === "true",
                s = this.$el.parent("ul.binf-dropdown-menu");
              i
                ? s.removeClass("csui-submenu-active")
                : s.addClass("csui-submenu-active");
            }
          },
          saveRenderState: function () {
            (this._renderState = {}),
              r.each(
                o.STATE_PARAMS,
                function (t) {
                  this._renderState[t] = this.options[t];
                },
                this
              );
          },
          restoreRenderState: function () {
            this._renderState &&
              (r.each(
                o.STATE_PARAMS,
                function (t) {
                  this.options[t] = this._renderState[t];
                },
                this
              ),
              this.render(),
              delete this._renderState);
          },
        },
        { STATE_PARAMS: ["renderIconAndText", "renderTextOnly"] }
      );
      return r.extend(o.prototype, e), o;
    }
  ),
  csui.define("csui/utils/high.contrast/detector", [], function () {
    "use strict";
    var r;
    function y() {
      var m = "rgb(127, 127, 127)",
        n = document.createElement("div"),
        e = n.style;
      (e.backgroundColor = m),
        (e.borderWidth = "1px"),
        (e.borderStyle = "solid"),
        (e.borderTopColor = "#ff0000"),
        (e.borderRightColor = "#00ffff"),
        (e.position = "absolute"),
        (e.left = "-9999px"),
        (e.width = n.style.height = "2px");
      var a = document.body;
      a.appendChild(n), (e = window.getComputedStyle(n));
      var c = e.backgroundColor;
      c === m ? (r = 0) : (r = v(c)), a.removeChild(n);
      var o = r ? "add" : "remove",
        t = "csui-highcontrast-light-on-dark";
      r === 2 && (t = "csui-highcontrast-dark-on-light"),
        document.documentElement.classList[o]("csui-highcontrast"),
        document.documentElement.classList[o](t);
    }
    function v(m) {
      let n = m.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/),
        e = parseInt(n[1]),
        a = parseInt(n[2]),
        c = parseInt(n[3]);
      return Math.sqrt(0.299 * (e * e) + 0.587 * (a * a) + 0.114 * (c * c)) >
        127.5
        ? 2
        : 1;
    }
    return {
      load: function (m, n, e, a) {
        function c() {
          if (document.readyState === "complete")
            return r === void 0 && y(), e(r), !0;
        }
        a.isBuild
          ? e(null)
          : c() || document.addEventListener("readystatechange", c);
      },
    };
  }),
  csui.define(
    "hbs!csui/controls/tableactionbar/impl/tableactionbar",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<ul class="tile-nav binf-nav binf-nav-pills" role="menu"></ul>
`;
        },
      });
      return (
        v.registerPartial(
          "csui_controls_tableactionbar_impl_tableactionbar",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "hbs!csui/controls/tableactionbar/impl/lazy.loading.template",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<li role="menuitem" class="csui-loading-parent-wrapper binf-disabled">
  <span class="csui-loading-dots-wrapper">
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
  </span>
</li>`;
        },
      });
      return (
        v.registerPartial(
          "csui_controls_tableactionbar_impl_lazy.loading.template",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "csui/controls/mixins/dynamic.toolitems/reopening.toolbar.mixin",
    ["module", "csui/lib/jquery", "nuc/lib/underscore", "nuc/utils/log"],
    function (r, y, v, m) {
      "use strict";
      m = m(r.id);
      var n = {
        mixin: function (e) {
          return v.extend(e, {
            makeReopeningToolbar: function (a) {
              this.listenTo(
                this.collection,
                "before:reset remain",
                this._initReopenAfterAdjust
              );
            },
            _initReopenAfterAdjust: function (a, { models: c } = {}) {
              var o,
                t,
                i = this.options.afterAdjustEvent || "after:adjust";
              c &&
                c.length > 0 &&
                (this.children.find((l) => {
                  if (
                    l.model.get("name") &&
                    l.el.matches(".binf-dropdown-submenu.binf-open")
                  )
                    return (o = l.model.pick("name")), !0;
                }),
                (t = this.el.querySelector("ul > li.binf-dropdown")),
                t &&
                  t.classList.contains("binf-open") &&
                  ((o = o || {}), (o.dropdown = !0)),
                o && this.listenToOnce(this, i, s));
              function s() {
                this.stopListening(this, i, s);
                var l =
                    o.name &&
                    this.children.find(
                      (u) =>
                        u.model.get("name") === o.name &&
                        u.el.classList.contains("binf-dropdown-submenu")
                    ),
                  g = this.el.querySelector("ul > li.binf-dropdown");
                if (
                  g &&
                  !g.classList.contains("binf-open") &&
                  (l ? g.contains(l.el) : o.dropdown)
                ) {
                  var f = this.$el.find(
                    "li.binf-dropdown > a.binf-dropdown-toggle"
                  );
                  f.trigger("binf.dropdown.before.show"),
                    g.classList.add("binf-open"),
                    f.attr("aria-expanded", "true"),
                    f.trigger("binf.dropdown.after.show");
                }
                l &&
                  !l.el.classList.contains("binf-open") &&
                  l.$el
                    .binf_dropdown_submenu()
                    .data("binf.dropdown.submenu")
                    .show(y.Event("click", { which: 1 }));
              }
            },
          });
        },
      };
      return n;
    }
  ),
  csui.define(
    "css!csui/controls/tableactionbar/impl/tableactionbar",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/tableactionbar/tableactionbar.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/utils/log",
      "csui/utils/base",
      "csui/controls/toolbar/toolitem.view",
      "csui/models/nodes",
      "csui/controls/toolbar/toolitems.filtered.model",
      "csui/controls/toolbar/toolbar.state.behavior",
      "csui/controls/toolbar/flyout.toolitem.view",
      "csui/utils/commandhelper",
      "csui/utils/commands",
      "csui/behaviors/dropdown.menu/dropdown.menu.behavior",
      "csui/utils/high.contrast/detector!",
      "hbs!csui/controls/tableactionbar/impl/tableactionbar",
      "hbs!csui/controls/tableactionbar/impl/lazy.loading.template",
      "csui/controls/icons.v2",
      "csui/controls/mixins/dynamic.toolitems/reopening.toolbar.mixin",
      "csui/controls/mixins/dynamic.toolitems/dynamic.toolitems.mixin",
      "csui-ext!csui/controls/tableactionbar/tableactionbar.view",
      "css!csui/controls/tableactionbar/impl/tableactionbar",
    ],
    function (
      r,
      y,
      v,
      m,
      n,
      e,
      a,
      c,
      o,
      t,
      i,
      s,
      l,
      g,
      f,
      u,
      p,
      x,
      S,
      T,
      k,
      A
    ) {
      "use strict";
      e = e(r.id);
      var M = n.CompositeView.extend(
        {
          className: "csui-table-actionbar",
          template: p,
          getChildView: function (N) {
            return N.get("flyout") ? s : c;
          },
          childViewOptions: function (N) {
            return {
              model: N,
              command:
                this.commands &&
                this.commands.findWhere({ signature: N.get("signature") }),
              useIconsForDarkBackground: this._useIconsForDarkBackground,
            };
          },
          childViewContainer: "ul",
          behaviors: {
            ToolbarState: { behaviorClass: i },
            DropdownMenuBehavior: {
              behaviorClass: f,
              dropdownSelector: "li.binf-dropdown",
              refilterOnShow: !1,
            },
          },
          constructor: function (R) {
            (this.container = R.container),
              (this.containerCollection = R.containerCollection),
              (this.originatingView = R.originatingView),
              (this.commandExecutionOptions = R.commandExecutionOptions),
              (this.minimalItemsRequiredForDisplay = 1),
              (this._useIconsForDarkBackground =
                (R.useIconsForDarkBackground && u !== 2) || u === 1),
              (this.notOccupiedSpace =
                R.notOccupiedSpace === void 0 ? 150 : R.notOccupiedSpace),
              R.status || (R.status = {});
            var K = y.defaults(R.status, {
              nodes: new o([R.model]),
              container: this.container,
              context: this.originatingView?.context,
            });
            this.commands = R.commands || g;
            var G = R.collection;
            (R.collection = new t(R.collection, {
              status: K,
              commands: this.commands,
              delayedActions: R.delayedActions,
              mask: R.toolItemsMask,
            })),
              (this.renderLazyActions = R.hasOwnProperty("lazyActions")
                ? !!R.lazyActions
                : !0),
              n.CompositeView.prototype.constructor.apply(this, arguments),
              this.model.nonPromotedActionCommands &&
                this.model.nonPromotedActionCommands.length &&
                R.collection.length === 0 &&
                this.actionState.set("state", "loading"),
              R.el && v(R.el).addClass(y.result(this, "className")),
              (this.options.afterAdjustEvent = "render:collection"),
              this.makeReopeningToolbar(),
              A && A.forEach(($) => $(this)),
              this.makeDynamicToolItems({
                model: this.model,
                toolbarItems: { inlineActionbar: G },
                toolbarNames: ["inlineActionbar"],
                eventArgs: {
                  context: this.options.context,
                  container: this.container,
                  model: this.model,
                  originatingView: this.options.originatingView,
                },
              });
          },
          isEmpty: function (N) {
            return this.collection.length === 0;
          },
          onBeforeDestroy: function () {
            (this.originatingView = null), this.collection.stopListening();
          },
          onBeforeRenderCollection: function () {
            this.destroyChildren(),
              this.$childViewContainer && this.$childViewContainer.empty();
          },
          onRenderCollection: function () {
            (this._adjusted = !1),
              a.isVisibleInWindowViewport(this.$el) && this._layoutButtons();
          },
          onRender: function () {
            this.options.inlineBarStyle &&
              this.$el.addClass(this.options.inlineBarStyle),
              this._isBlocked && this.$el.addClass("binf-disabled");
          },
          onShow: function () {
            this._layoutButtons();
          },
          toggleDropdownMenu: function (N) {
            var R = this.$el.find("li.binf-dropdown"),
              K = this.$el.find("li.binf-dropdown > a.binf-dropdown-toggle");
            N || !R.hasClass("binf-open")
              ? (K.trigger("binf.dropdown.before.show"),
                R.addClass("binf-open"),
                K.attr("aria-expanded", "true"),
                K.trigger("binf.dropdown.after.show"))
              : (R.removeClass("binf-open"), K.attr("aria-expanded", "false"));
          },
          closeDropdownMenuIfOpen: function () {
            var N = this.$el.find("li.binf-dropdown");
            return N.hasClass("binf-open")
              ? (N.removeClass("binf-open"),
                this.$el
                  .find("li.binf-dropdown > a.binf-dropdown-toggle")
                  .attr("aria-expanded", "false"),
                !0)
              : !1;
          },
          _layoutButtons: function () {
            var N = this.options.delayedActions;
            if (!(N && (N.fetching || N.error))) {
              if (this._adjusted) return !0;
              this._adjusting = !0;
              var R = this.model,
                K = !!R && !!R.get("csuiLazyActionsRetrieved"),
                G = !!R.isLocallyCreated,
                $ = this.children.filter(function (ne) {
                  return ne instanceof c || ne instanceof s;
                });
              (this.actionbarOptions = {
                toolItemCounter: 0,
                cntItemsFit: 0,
                index: 0,
                dropDownMenuEl: void 0,
                separatorView: void 0,
              }),
                (this.enabledNonPomotedCommands =
                  R.collection.enableNonPromotedCommands === !1
                    ? R.collection.enableNonPromotedCommands
                    : !0);
              var z = this.options.maxItemsShown;
              if ($.length > 0) {
                var ue = this.$el.parent();
                if (((ue = ue.offsetParent()), ue.length > 0)) {
                  var J = ue[0].clientWidth - this.notOccupiedSpace;
                  if (J < 0) z = 0;
                  else {
                    var ae = this.$el.find(">ul");
                    if (ae.length > 0) {
                      var q = 13,
                        Q = M.estimateIconWidth(q);
                      (z = Math.round(J / Q)), z > $.length && (z = $.length);
                    }
                  }
                }
                if (
                  (z > this.options.maxItemsShown &&
                    (z = this.options.maxItemsShown),
                  z < this.minimalItemsRequiredForDisplay)
                ) {
                  this.destroy();
                  return;
                }
                y.each(
                  $,
                  y.bind(function (ne, oe) {
                    (this.actionbarOptions.index = oe),
                      this._wrapToolItemView(ne, z);
                  }, this)
                ),
                  R &&
                  !K &&
                  R.nonPromotedActionCommands &&
                  this.enabledNonPomotedCommands &&
                  this.renderLazyActions &&
                  R.nonPromotedActionCommands.length &&
                  !G
                    ? this.$childViewContainer.find(".binf-dropdown").length
                      ? this.$childViewContainer
                          .find(".binf-dropdown ul")
                          .first()
                          .append(x)
                      : (this.actionbarOptions.toolItemCounter === z &&
                          this.$childViewContainer.find("li:last").length > 0 &&
                          this.$childViewContainer
                            .find("li:last")
                            .addClass("csui-actionbar-hide-child"),
                        this.$childViewContainer.append(x),
                        this._renderLazyActions(z).always(
                          y.bind(function () {
                            this._checkInlineActionBarShouldAlive();
                          }, this)
                        ))
                    : this._checkInlineActionBarShouldAlive();
                    
                    // AVIATOR START
                    if(this.model) {
                      var that = this;

                      if(this.model.attributes.type == 144 || this.model.attributes.type == 749) {
                        const li = document.createElement("li");
                        li.style.width = "32px";
                        li.style.height = "32px";
                        li.setAttribute("data-csui-command", "none");
                        li.setAttribute("role", "none");

                        const a = document.createElement("a");

                        a.setAttribute("title", "Ask AI+");
                        a.setAttribute("role", "menuitem");
                        a.setAttribute("class", "icon-toolbar-aviator csui-toolitem csui-acc-focusable csui-toolitem-icononly");
                        a.setAttribute("data-cstabindex", "-1");
                        a.setAttribute("aria-label", "Ask AI+");
                        a.style.display = "flex";
                        a.style.justifyContent = "center";
                        a.style.marginLeft = "4px";
                        a.style.alignItems = "center";
                        a.setAttribute("id", "aviator-workflow");
                        a.onclick = () => window.aiPlusSendFilesToChatbot([this.model]);

                        a.innerHTML = `<img height="18" width="18" src="/img/csui/themes/carbonfiber/image/icons/aiplus/aiplus_black.svg" />`;

                        li.appendChild(a);

                        that.$el.find(">ul").prepend(li);
                      }
                    }
                    // AVIATOR END
              } else
                R &&
                !K &&
                R.nonPromotedActionCommands &&
                R.nonPromotedActionCommands.length &&
                !G &&
                this.enabledNonPomotedCommands &&
                this.renderLazyActions
                  ? this._renderLazyActions(z).always(
                      y.bind(function () {
                        this._checkInlineActionBarShouldAlive();
                      }, this)
                    )
                  : this._checkInlineActionBarShouldAlive();
              (this._adjusting = !1), (this._adjusted = !0);
            }
          },
          _checkInlineActionBarShouldAlive: function () {
            this.actionbarOptions.cntItemsFit <
              this.minimalItemsRequiredForDisplay &&
              this.options.maxItemsShown !== 1 &&
              this.destroy();
          },
          _wrapToolItemView: function (N, R) {
            if (N instanceof c || N instanceof s) {
              var K = N.model.isSeparator();
              K || this.actionbarOptions.toolItemCounter++,
                this.actionbarOptions.dropDownMenuEl
                  ? (K &&
                      this.actionbarOptions.index + 1 ===
                        this.children.length) ||
                    (N.renderTextOnly(),
                    N.$el.attr("role", "none"),
                    this.actionbarOptions.dropDownMenuEl.append(N.$el),
                    N.triggerMethod("dom:refresh"),
                    (this.actionbarOptions.prevToolItemView = N))
                  : K
                  ? this.actionbarOptions.toolItemCounter >= R
                    ? (this.actionbarOptions.separatorView = N)
                    : N.$el.addClass("binf-hidden")
                  : (this.actionbarOptions.toolItemCounter > R
                      ? this.actionbarOptions.prevToolItemView
                        ? (this.actionbarOptions.prevToolItemView.$el.attr(
                            "role",
                            "none"
                          ),
                          (this.actionbarOptions.dropDownMenuEl =
                            this._wrapWithDropDown(
                              this.actionbarOptions.prevToolItemView,
                              N,
                              this.actionbarOptions.separatorView
                            )))
                        : (this.actionbarOptions.dropDownMenuEl =
                            this._wrapWithDropDown(N.$el, N))
                      : (this.$el
                          .find(".binf-dropdown-submenu")
                          .off("binf.dropdown.submenu.after.show")
                          .on(
                            "binf.dropdown.submenu.after.show",
                            y.bind(function (G) {
                              var $ = this.$el.find(
                                ".binf-dropdown-submenu .binf-dropdown-menu"
                              );
                              if ($.length) {
                                var z = this.$el.find(G.target),
                                  ue = this.model,
                                  J = !!ue.get("csuiLazyActionsRetrieved"),
                                  ae = !!ue.isLocallyCreated;
                                if (
                                  !this.model.get("csuiLazyActionsRetrieved")
                                ) {
                                  var q = this.$el.find(
                                    ".csui-loading-parent-wrapper"
                                  );
                                  q.length && q.remove(),
                                    ue &&
                                      !J &&
                                      ue.nonPromotedActionCommands &&
                                      ue.nonPromotedActionCommands.length &&
                                      !ae &&
                                      this.enabledNonPomotedCommands &&
                                      this.renderLazyActions &&
                                      ($.first().append(x),
                                      this._renderLazyActions(R).done(
                                        function () {
                                          a.alignDropDownSubMenus({
                                            targetEl: z,
                                            dropdownMenu: z.children().last(),
                                          });
                                        }
                                      ));
                                }
                                a.alignDropDownSubMenus({
                                  targetEl: z,
                                  dropdownMenu: z.children().last(),
                                });
                              }
                            }, this)
                          ),
                        this.actionbarOptions.cntItemsFit++),
                    (this.actionbarOptions.prevToolItemView = N));
            }
          },
          _renderLazyActions: function (N) {
            var R = this,
              K = this.model,
              G = v.Deferred();
            return (
              K &&
                K.setEnabledLazyActionCommands(!0)
                  .done(
                    y.bind(function () {
                      function $() {
                        R.isDestroyed === !0 ||
                          R._isDestroyed ||
                          (R.collection.refilter(), G.resolve());
                      }
                      var z = R.$childViewContainer.find(
                        ".csui-loading-parent-wrapper"
                      );
                      z.length
                        ? z.animate("width: 0", 300, function () {
                            z.addClass("binf-hidden"), $();
                          })
                        : $();
                    }),
                    R
                  )
                  .fail(function () {
                    R.$childViewContainer
                      .find(".csui-loading-parent-wrapper")
                      .remove(),
                      R.$childViewContainer
                        .find(".csui-actionbar-hide-child")
                        .removeClass("csui-actionbar-hide-child"),
                      G.reject();
                  }),
              G.promise()
            );
          },
          _wrapWithDropDown: function (N, R, K, G) {
            N.renderTextOnly(),
              N.$el.wrap(
                '<li class="binf-dropdown"><ul class="binf-dropdown-menu csui-normal-scrolling" role="menu"></ul></li>'
              );
            var $ = this._makeDropDown();
            this.$el.find("li.binf-dropdown").prepend($);
            var z = this.$el.find("li.binf-dropdown > a.binf-dropdown-toggle");
            z.binf_dropdown(),
              N.triggerMethod("dom:refresh"),
              z.on(
                "binf.dropdown.before.show",
                y.bind(function () {
                  v(this.nextElementSibling).addClass("binf-invisible");
                  var q = this.model,
                    Q = !!q.get("csuiLazyActionsRetrieved"),
                    ne = !!q.isLocallyCreated;
                  q &&
                    !Q &&
                    q.nonPromotedActionCommands &&
                    q.nonPromotedActionCommands.length &&
                    !ne &&
                    this.enabledNonPomotedCommands &&
                    this.renderLazyActions &&
                    this._renderLazyActions(G),
                    a.alignDropDownMenu({ targetEl: z });
                }, this)
              );
            var ue = R._parent;
            ue.listenTo(ue, "destroy", function () {
              v(".csui-zero-zindex").removeClass("csui-zero-zindex");
            });
            var J = this;
            z.on("binf.dropdown.after.show", function () {
              var q = ".csui-normal-scrolling",
                Q = v(this).closest(q),
                ne = v(this).nextAll(".binf-dropdown-menu"),
                oe = {};
              if (
                ne.is(
                  ".binf-dropdown-align-left-top, .binf-dropdown-align-right-top"
                )
              ) {
                if (
                  ((oe.maxHeight =
                    Math.floor(
                      window.innerHeight -
                        (window.innerHeight -
                          ne
                            .closest(".binf-dropdown")[0]
                            .getBoundingClientRect().top)
                    ) - 3),
                  J.model.get("csuiDelayedActionsRetrieved") &&
                    J.renderLazyActions &&
                    !J.model.get("csuiLazyActionsRetrieved") &&
                    J.model.nonPromotedActionCommands &&
                    J.model.nonPromotedActionCommands.length &&
                    J.enabledNonPomotedCommands)
                ) {
                  var d = ne.closest(".binf-dropdown"),
                    h = v(d).find(".csui-loading-parent-wrapper");
                  h.length && h.remove(),
                    d.addClass("csui-actionbar-hide-child"),
                    ne.closest(".csui-table-actionbar .binf-nav").append(x);
                }
                ne.closest(".cs-perspective-panel").length &&
                  v(
                    "#breadcrumb-wrap , .csui-search-tool-container, .csui-navbar.binf-navbar.binf-navbar-default, .smart-app-header-wrapper otc-header-bar"
                  ).addClass("csui-zero-zindex");
              } else (oe.maxHeight = Math.floor(window.innerHeight - ne.closest(".binf-dropdown")[0].getBoundingClientRect().top) - ne.closest(".binf-dropdown").height() - 3), ne.closest(".cs-perspective-panel").length && v("#breadcrumb-wrap , .csui-search-tool-container, .csui-navbar.binf-navbar.binf-navbar-default, .smart-app-header-wrapper otc-header-bar").removeClass("csui-zero-zindex");
              ne.css(oe);
              var b;
              (b = ne.closest(".binf-dropdown").scrollParent()),
                setTimeout(function () {
                  b.on("scroll.csui.inline.actions", function (_) {
                    !ne.is(":hidden") && ne.binf_dropdown("toggle"),
                      v(_.target).off("scroll.csui.inline.actions");
                  });
                });
            });
            var ae = this.$el.find("li.binf-dropdown>ul.binf-dropdown-menu");
            return (
              K && ae.append(K.$el),
              R.renderTextOnly(),
              R.$el.attr("role", "none"),
              ae.append(R.$el),
              R.triggerMethod("dom:refresh"),
              this.triggerMethod("refresh:dropdown"),
              ae
            );
          },
          _makeDropDown: function () {
            var N = "binf-dropdown-toggle",
              R =
                '<a role="button" href="#" tabindex="-1" class="' +
                N +
                '" data-binf-toggle="dropdown" aria-expanded="false"';
            return (
              this.options.dropDownText
                ? (R +=
                    ' title="' +
                    this.options.dropDownText +
                    '" aria-label="' +
                    this.options.dropDownText +
                    '">')
                : (R += ">"),
              this.options.dropDownIconName
                ? (R += S.getIconByNameWithOptions({
                    iconName: this.options.dropDownIconName,
                    theme: this._useIconsForDarkBackground ? "dark" : "",
                    states: !0,
                  }))
                : this.options.dropDownIcon
                ? (R +=
                    '<span class="' + this.options.dropDownIcon + '"></span>')
                : this.options.dropDownText && (R += this.options.dropDownText),
              (R += "</a>"),
              R
            );
          },
          _setBlocked: function (N, R) {
            var K = this;
            (this._blockedTimer = setTimeout(function () {
              K._isBlocked === !1 && K.$el.removeClass("binf-disabled"),
                (K._blockedTimer = void 0);
            }, 500)),
              (this._isBlocked = !0),
              N.get("selfBlockOnly")
                ? R.$el.find("a").addClass("binf-disabled")
                : this.$el.addClass("binf-disabled");
          },
          _setUnblocked: function (N, R) {
            (this._isBlocked = !1),
              this._blockedTimer ||
                (N.get("selfBlockOnly")
                  ? R.$el.find("a").removeClass("binf-disabled")
                  : this.$el.removeClass("binf-disabled"));
          },
          onChildviewToolitemAction: function (N, R) {
            var K = this,
              G = R.toolItem,
              $ = G.get("signature"),
              z = this.commands.get($),
              ue = y.defaults(this.options.status, {
                nodes: new o([this.model]),
                container: this.container,
                originatingView: this.originatingView,
                context: this.originatingView.context,
              });
            (ue.collection = this.containerCollection),
              (ue = y.defaults(
                { toolItem: G, data: G.get("commandData") || {} },
                ue
              ));
            var J = { status: ue, commandSignature: $ };
            if (
              (this.originatingView.trigger("click:actionbar:command", J),
              G.get("execute") === !1 || !z.execute)
            )
              return (
                (J.execute = !1),
                (J.toolItem = G),
                this.trigger("before:execute:command", J),
                this.trigger("click:toolitem:action", J),
                this.trigger("after:execute:command", J)
              );
            this.trigger("before:execute:command", J),
              this._setBlocked(z, N),
              m.trigger("closeToggleAction");
            var ae;
            try {
              if (!z) throw new Error('Command "' + $ + '" not found.');
              ae = z.execute(ue, this.commandExecutionOptions);
            } catch (q) {
              return (
                K._setUnblocked(z, N),
                e.warn(
                  `Executing the command "{0}" failed.
{1}`,
                  z.get("signature"),
                  q.stack
                ) && console.warn(e.last),
                (J.error = q),
                this.trigger("after:execute:command", J)
              );
            }
            if (!ae)
              return (
                K._setUnblocked(z, N), this.trigger("after:execute:command", J)
              );
            l.handleExecutionResults(ae, {
              command: z,
              suppressSuccessMessage: ue.suppressSuccessMessage,
              suppressFailMessage: ue.suppressFailMessage,
              customError: this.options.customError,
            })
              .done(function (q) {
                if (
                  z.allowCollectionRefetch &&
                  K.options.originatingView.collection.totalCount >=
                    K.options.originatingView.collection.topCount
                ) {
                  var Q = K.options.originatingView.collection;
                  Q.skipCount !== 0 &&
                    Q.totalCount === Q.skipCount &&
                    Q.setLimit(Q.skipCount - Q.topCount, Q.topCount, !1),
                    K.options.originatingView.collection.fetch();
                }
              })
              .always(function () {
                K._setUnblocked(z, N), K.trigger("after:execute:command", J);
              });
          },
        },
        {
          estimateWidthForToolbarItems: function (N, R) {
            var K = 0.1875 * R,
              G = K,
              $ = (R * 4 - 36) / 2,
              z = $,
              ue = 2,
              J = $ + K + N * this.estimateIconWidth(R) + (N - 1) * ue + G + z;
            return J;
          },
          estimateIconWidth: function (N) {
            var R = N * 2 + 4,
              K = N * 0.1;
            return R + K;
          },
        }
      );
      return T.mixin(M.prototype), k.mixin(M.prototype), M;
    }
  ),
  csui.define(
    "csui/controls/dialog/dialog.view",
    [
      "smart/controls/dialog/dialog.view",
      "csui/behaviors/keyboard.navigation/tabables.behavior",
      "csui/behaviors/keyboard.navigation/tabable.region.behavior",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v) {
      var m = r.extend({
        constructor: function (e = {}) {
          !e.notabablesBehavior &&
            !this.noTabablesBehavior &&
            (this.tabablesBehavior = {
              behaviorClass: y,
              recursiveNavigation: !0,
              containTabFocus: !0,
            }),
            (e.headerTabableRegionBehavior = { behaviorClass: v }),
            (e.footerTabableRegionBehavior = { behaviorClass: v }),
            r.prototype.constructor.call(this, e);
        },
      });
      return m;
    }
  ),
  csui.define(
    "csui/controls/dialog/impl/header.view",
    [
      "smart/controls/dialog/header.view",
      "csui/behaviors/keyboard.navigation/tabable.region.behavior",
    ],
    function (r, y) {
      var v = r.extend({
        constructor: function (n) {
          (n.headerTabableRegionBehavior = { behaviorClass: y }),
            r.prototype.constructor.call(this, n);
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/controls/dialog/footer.view",
    [
      "smart/controls/dialog/footer.view",
      "csui/behaviors/keyboard.navigation/tabable.region.behavior",
    ],
    function (r, y) {
      var v = r.extend({
        constructor: function (n = {}) {
          (n.footerTabableRegionBehavior = { behaviorClass: y }),
            r.prototype.constructor.call(this, n);
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/controls/facet.bar/facet.bar.items.view",
    ["nuc/lib/underscore", "smart/controls/facet.bar/facet.bar.view"],
    function (r, y) {
      var v = y.extend({
        constructor: function (n) {
          this.listenTo(this, "remove:all", this.clearAllFilters)
            .listenTo(this, "remove:filter", this.removeFilter)
            .listenTo(this, "filters:updated", this.filtersUpdated),
            y.prototype.constructor.call(this, n);
        },
        clearAllFilters: function () {
          this.triggerMethod("clear:all:filters");
        },
        removeFilter: function (m) {
          (this.removeFilter = m),
            this.triggerMethod("remove:facet:filter", this.removeFilter);
        },
        filtersUpdated: function () {
          this.triggerMethod("facet:filters:updated");
        },
      });
      return v;
    }
  ),
  csui.define(
    "hbs!csui/controls/facet.bar/impl/facet.bar",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          return "with-saveas-btn";
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `<button class="binf-btn binf-btn-primary csui-filter-save binf-hidden"
        aria-label="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "saveAsAria") || (e != null ? i(e, "saveAsAria") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "saveAsAria",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 20 },
                      end: { line: 4, column: 34 },
                    },
                  })
                : t)
            ) +
            '">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "saveas") || (e != null ? i(e, "saveas") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "saveas",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 36 },
                      end: { line: 4, column: 46 },
                    },
                  })
                : t)
            ) +
            `</button>
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<div class="csui-facet-bar-container ' +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "showSaveFilter") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 1, column: 37 },
                  end: { line: 1, column: 81 },
                },
              }
            )) != null
              ? t
              : "") +
            `"></div>
` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "showSaveFilter") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 0 },
                  end: { line: 5, column: 7 },
                },
              }
            )) != null
              ? t
              : "")
          );
        },
      });
      return v.registerPartial("csui_controls_facet.bar_impl_facet.bar", m), m;
    }
  ),
  csui.define("csui/controls/facet.bar/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/facet.bar/impl/nls/root/lang", {
    saveAs: "Save As",
    saveAsAria: "Save as Virtual Folder",
  }),
  csui.define(
    "csui/controls/facet.bar/savefilter.unsupported.list.ids",
    [
      "nuc/lib/underscore",
      "csui-ext!csui/controls/facet.bar/savefilter.unsupported.list.ids",
    ],
    function (r, y) {
      "use strict";
      return r.flatten(y);
    }
  ),
  csui.define(
    "css!csui/controls/facet.bar/impl/facet.view",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/facet.bar/facet.bar.view",
    [
      "nuc/lib/jquery",
      "nuc/lib/underscore",
      "nuc/lib/backbone",
      "nuc/lib/marionette",
      "csui/controls/facet.bar/facet.bar.items.view",
      "hbs!csui/controls/facet.bar/impl/facet.bar",
      "i18n!csui/controls/facet.bar/impl/nls/lang",
      "csui/utils/commands",
      "csui/controls/facet.bar/savefilter.unsupported.list.ids",
      "css!csui/controls/facet.bar/impl/facet.view",
    ],
    function (r, y, v, m, n, e, a, c, o) {
      "use strict";
      var t = m.LayoutView.extend({
        template: e,
        className: "csui-facet-bar-container-layout",
        ui: { saveFilter: ".csui-filter-save" },
        regions: {
          facetBarContainerRegion: ".csui-facet-bar-container",
          facetSaveBtnRegion: ".csui-filter-save",
        },
        childView: n,
        childEvents: {
          "clear:all:filters": "onClearAllFilters",
          "remove:facet:filter": "onRemoveFacetFilter",
          "facet:filters:updated": "onFiltersUpdate",
        },
        events: {
          "click @ui.saveFilter": "onClickSaveFilter",
          "keydown @ui.saveFilter": "onClickSaveFilter",
        },
        templateHelpers: function () {
          return (
            (this.showSaveFilter = this.showOrHideSaveFilterButton()),
            {
              saveas: a.saveAs,
              saveAsAria: a.saveAsAria,
              showSaveFilter: this.showSaveFilter,
            }
          );
        },
        constructor: function (s) {
          (this.options = s),
            m.LayoutView.prototype.constructor.apply(this, arguments);
        },
        onRender: function () {
          (this.facetBarView = !this.facetBarView && new n(this.options)),
            this.facetBarContainerRegion.show(this.facetBarView);
        },
        onFiltersUpdate: function () {
          this.showSaveFilter &&
          this.facetBarView?.allTopicsCollection?.length > 0
            ? (this.ui?.saveFilter[0]?.classList?.remove("binf-hidden"),
              this.facetBarContainerRegion?.el?.classList?.add(
                "with-saveas-btn"
              ))
            : (this.ui?.saveFilter[0]?.classList?.add("binf-hidden"),
              this.facetBarContainerRegion?.el?.classList?.remove(
                "with-saveas-btn"
              ));
        },
        onClearAllFilters: function () {
          this.ui.saveFilter &&
            this.ui.saveFilter.length > 0 &&
            (this.ui.saveFilter.addClass("binf-hidden"),
            this.facetBarContainerRegion?.el?.classList?.remove(
              "with-saveas-btn"
            )),
            this.trigger("remove:all");
        },
        onRemoveFacetFilter: function (i) {
          this.trigger("remove:filter", i.removeFilter);
        },
        showOrHideSaveFilterButton: function () {
          var i = this;
          if (o.length > 0) {
            var s = y.some(o, function (g) {
              var f =
                  typeof g.saveFilterUnsupportedList == "function"
                    ? g.saveFilterUnsupportedList(i.options)
                    : g.saveFilterUnsupportedList,
                u = i.options.context.getModel("node").attributes.type;
              if (y.isArray(f) || y.isNumber(f))
                return y.isArray(f) ? y.contains(f, u) : f === u;
              throw new Error("Unsupported object type");
            });
            return !s;
          } else {
            if (y.has(this.options, "showSaveFilter"))
              return this.options.showSaveFilter;
            var l =
              this.options.context &&
              this.options.context._factories.objecttypes &&
              y.has(
                this.options.context._factories.objecttypes.property.attributes,
                "objecttypes"
              ) &&
              this.options.context._factories.objecttypes.property.attributes
                .objecttypes;
            return !!y.find(l, function (g) {
              return g.type === 899;
            });
          }
        },
        onClickSaveFilter: function (i) {
          if (
            i.type === "click" ||
            (i.type === "keydown" && i.keyCode === 13)
          ) {
            i.preventDefault(), i.stopPropagation();
            var s = this.options.context,
              l = this.collection.connector,
              g = this.collection.node,
              f = this.collection,
              u = c.get("SaveFilter"),
              p = u.execute({
                context: s,
                nodes: new v.Collection(g),
                facets: f,
                container: g,
                connector: l,
                isKeyEvent: i?.type === "keydown",
              });
            const x = this;
            p.always(function (S) {
              S.cancelled && x.ui.saveFilter.focus();
            });
          }
        },
      });
      return t;
    }
  ),
  csui.define("csui/models/facettopic", ["csui/lib/backbone"], function (r) {
    "use strict";
    var y = r.Model.extend({
      idAttribute: "value",
      constructor: function () {
        r.Model.prototype.constructor.apply(this, arguments);
      },
    });
    return y;
  }),
  csui.define(
    "csui/models/facettopics",
    ["csui/lib/backbone", "csui/models/facettopic"],
    function (r, y) {
      "use strict";
      var v = r.Collection.extend({
        model: y,
        constructor: function (n, e) {
          r.Collection.prototype.constructor.apply(this, arguments);
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/models/facet",
    ["csui/lib/backbone", "csui/models/facettopics"],
    function (r, y) {
      "use strict";
      var v = r.Model.extend({
        constructor: function (n) {
          r.Model.prototype.constructor.apply(this, arguments),
            (this.topics = new y(n && n.topics));
        },
        parse: function (m, n) {
          return this.topics && this.topics.reset(m.topics), m;
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/models/facets",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/models/facet",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v) {
      "use strict";
      var m = y.Collection.extend({
        model: v,
        constructor: function (c, o) {
          y.Collection.prototype.constructor.apply(this, arguments),
            o || (o = {}),
            (this.filters = o.filters || []),
            (this.itemsToShow = o.itemsToShow),
            (this.facetIds = o.facetIds || []);
        },
        clone: function () {
          return new this.constructor(this.models, {
            filters: r.deepClone(this.filters),
          });
        },
        setFilter: function (a, c, o) {
          if (!r.isEqual(this.filters, a))
            return (this.filters = a), c !== !1 && n(this) && this.fetch(o), !0;
        },
        addFilter: function (a, c, o) {
          var t = this.filters,
            i = [],
            s;
          if (
            (Array.isArray(a) || (a = [a]),
            a.forEach(function (l) {
              var g = r.findWhere(t, { id: l.id });
              if (g) {
                var f = g.values,
                  u = l.values.filter(function (p) {
                    return !r.findWhere(f, { id: p.id });
                  });
                u.length && (f.push.apply(f, u), (s = !0));
              } else l.values.length && i.push(l);
            }),
            i.length && (t.push.apply(t, i), (s = !0)),
            s)
          )
            return c !== !1 && n(this) && this.fetch(o), !0;
        },
        removeFilter: function (a, c, o) {
          var t;
          if (
            (Array.isArray(a) || (a = [a]),
            (this.filters = this.filters.facet
              ? this.filters.facet
              : this.filters),
            (this.filters = r.reject(this.filters, function (i) {
              var s = r.findWhere(a, { id: i.id });
              if (s) {
                var l = s.values,
                  g = r.reject(i.values, function (f) {
                    if (r.findWhere(l, { id: f.id })) return (t = !0), !0;
                  });
                if (!g.length) return (t = !0), !0;
                i.values = g;
              }
            })),
            t)
          )
            return c !== !1 && n(this) && this.fetch(o), !0;
        },
        clearFilter: function (a, c) {
          if (this.filters.length > 0)
            return (
              (this.filters = []), a !== !1 && n(this) && this.fetch(c), !0
            );
        },
        getAvailableFacets: function () {
          return e(this, !1);
        },
        getSelectedFacets: function () {
          return e(this, !0);
        },
      });
      function n(a) {
        return a.isFetchable && a.isFetchable();
      }
      function e(a, c) {
        return (
          (c = !!c),
          a
            .filter(function (o) {
              return o.topics.some(function (t) {
                var i = !!t.get("selected");
                return c === i;
              });
            })
            .map(function (o) {
              return (
                (o = o.toJSON()),
                (o.topics = o.topics.filter(function (t) {
                  var i = !!t.selected;
                  return c === i;
                })),
                o
              );
            })
        );
      }
      return m;
    }
  ),
  csui.define(
    "csui/models/node.facets2/facet.query.mixin",
    ["csui/lib/underscore", "csui/lib/jquery"],
    function (r, y) {
      "use strict";
      var v = {
        mixin: function (c) {
          return r.extend(c, {
            makeFacetQuery: function (o) {
              return this;
            },
            getFilterQuery: function (o) {
              return m(o || this.filters, this.filterQueryParameterName);
            },
            getFilterQueryValue: function (o) {
              return n(o || this.filters);
            },
            getFacetIdQuery: function (o) {
              return a(o || this.facetIds, this.facetIdQueryParameterName);
            },
          });
        },
      };
      function m(c, o) {
        var t = n(c);
        if (t.length) {
          var i = {};
          return (i[o] = t), y.param(i, !0);
        }
        return "";
      }
      function n(c) {
        return (c && r.map(c, e)) || [];
      }
      function e(c) {
        return (
          c.id +
          ":" +
          r.reduce(
            c.values,
            function (o, t) {
              return o && (o += "|"), o + t.id.toString();
            },
            ""
          )
        );
      }
      function a(c, o) {
        if (c.length) {
          var t = {};
          return (t[o] = c), y.param(t, !0);
        }
        return "";
      }
      return v;
    }
  ),
  csui.define(
    "csui/models/node.facets2/server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/url",
      "csui/models/node.facets2/facet.query.mixin",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = {
        mixin: function (o) {
          var t = o.fetch;
          return (
            m.mixin(o),
            r.extend(o, {
              filterQueryParameterName: "where_facet",
              facetIdQueryParameterName: "facet_id",
              makeServerAdaptor: function (i) {
                return this.makeFacetQuery(i);
              },
              isFetchable: function () {
                var i = this.node,
                  s = i.get("type"),
                  l = i.get("location_id");
                return !(s === 899 && l === 0);
              },
              url: function () {
                var i = this.node.get(
                    this.node.get("type") === 899 ? "location_id" : "id"
                  ),
                  s = r.union(c(this.node), this.filters),
                  l = this.getFilterQuery(s),
                  g = this.getFacetIdQuery(),
                  f = new v(this.connector.connection.url).getApiBase("v2"),
                  u = v.combine(f, "/facets/", i);
                return (
                  this.itemsToShow &&
                    (u = v.appendQuery(
                      u,
                      "top_values_limit=" + this.itemsToShow
                    )),
                  l && (u = v.appendQuery(u, l)),
                  g && (u = v.appendQuery(u, g)),
                  u
                );
              },
              parse: function (i, s) {
                var l = i.results.data || {},
                  g = l.facets || {},
                  f = l.values.selected || [],
                  u = l.values.available || [];
                if (
                  (f.forEach(e.bind(null, !0)),
                  u.forEach(e.bind(null, !1)),
                  this.node.get("type") === 899)
                ) {
                  var p = this.node.get("selected_facets") || [];
                  (p = p.map(function (x) {
                    return x[0];
                  })),
                    (f = f.filter(function (x) {
                      var S = r.keys(x)[0];
                      return !r.contains(p, S);
                    }));
                }
                return f.concat(u).map(a.bind(this, g));
              },
            })
          );
        },
      };
      function e(o, t) {
        var i = r.keys(t)[0],
          s = t[i];
        r.each(s, function (l) {
          (l.value = l.value.toString()), (l.selected = o);
        });
      }
      function a(o, t) {
        var i = r.keys(t)[0],
          s = t[i],
          l = o[i] || {};
        return r.extend(
          {
            nodeFacetsCollection: this,
            items_to_show: this.itemsToShow,
            select_multiple: !0,
            topics: s,
          },
          l,
          { id: i.toString() }
        );
      }
      function c(o) {
        var t = [];
        if (o.get("type") === 899) {
          var i = o.get("selected_facets");
          t = r.map(i, function (s) {
            var l = { id: s[0], values: [] };
            return (
              s[1].forEach(function (g) {
                l.values.push({ id: g });
              }),
              l
            );
          });
        }
        return t;
      }
      return n;
    }
  ),
  csui.define(
    "csui/models/nodefacets2",
    [
      "csui/lib/underscore",
      "csui/models/facets",
      "csui/models/mixins/node.resource/node.resource.mixin",
      "csui/models/node.facets2/server.adaptor.mixin",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = y.extend({
        constructor: function (a, c) {
          y.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(c).makeServerAdaptor(c);
        },
        isFetchable: function () {
          return this.areFacetsFetchable(this);
        },
        clone: function () {
          return new this.constructor(this.models, {
            node: this.node,
            itemsToShow: this.itemsToShow,
            facetIds: this.facetIds,
            filters: r.deepClone(this.filters),
          });
        },
      });
      return v.mixin(n.prototype), m.mixin(n.prototype), n;
    }
  ),
  csui.define("csui/controls/facet.panel/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/facet.panel/impl/nls/root/lang", {
    emptyFacetMessage: "No filters available.",
    emptyFilteredFacetMessage: "No more filters available.",
    loadingFacetMessage: "Loading filters...",
    failedFacetMessage: "Loading filters failed.",
  }),
  csui.define(
    "csui/controls/facet.panel/facet.panel.view",
    [
      "nuc/lib/underscore",
      "nuc/lib/jquery",
      "nuc/utils/base",
      "csui/models/facets",
      "csui/models/facettopics",
      "csui/models/nodefacets2",
      "smart/controls/facet.panel/facet.panel.view",
      "i18n!csui/controls/facet.panel/impl/nls/lang",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      var o = a.extend({
        behaviors: function () {
          return r.extend(a.behaviors || {}, {});
        },
        constructor: function (i = {}) {
          (this.facets = i.collection),
            (i.collection = this._getAvailableFacets()),
            (i.displayCountProps = i.displayCountProps),
            (i.maxFacetSelection = i.maxFacetSelection ?? 20),
            a.prototype.constructor.call(this, i),
            this.listenTo(
              this,
              "fetch:more:facets",
              r.bind(this.fetchMoreFacets, this)
            );
        },
        onRender: function () {
          this._toggleCollectionStateView();
        },
        _toggleCollectionStateView: function () {
          this.collection.length === 0 &&
            this.$el.find(".csui-collection-state").addClass("binf-hidden");
        },
        fetchMoreFacets: function (t) {
          var i = this,
            s = y.Deferred();
          this.nodeFacetsCollection = t.model.get("nodeFacetsCollection");
          var l = t.model.get("id"),
            g = {
              filters: this.nodeFacetsCollection.filters,
              facetIds: [l],
              node: this.nodeFacetsCollection.node,
            },
            f = new e(null, g);
          return (
            this.blockActions && this.blockActions(),
            f
              .fetch()
              .always(function () {
                i.unblockActions && i.unblockActions();
              })
              .done(function () {
                t.model.topics.reset(f.get(l).topics.models, { silent: !0 }),
                  t.collection.reset(t.model.topics.models),
                  s.resolve(),
                  t.collection.trigger("more:facets:fecthed");
              })
              .fail(function (u) {
                var p = new v.Error(u);
                t.collection.trigger("more:facets:fetch:failed", p),
                  s.reject(p);
              }),
            s.promise()
          );
        },
        _getAvailableFacets: function () {
          var t = this.facets.getAvailableFacets();
          this.listenTo(this.facets, "reset", function () {
            var s = this.facets.getAvailableFacets();
            this.collection.reset(s);
          });
          var i = this;
          return (
            this.listenTo(this.facets, "request", function () {
              i.originatingView && i.originatingView.blockActions();
            }),
            this.listenTo(this.facets, "sync", function () {
              i.originatingView && i.originatingView.unblockActions(),
                i?.originatingView?.filterToolItemModel?.get("isKeyEvent") &&
                  y(i.$el.find(".csui-facet")[0]).trigger("focus"),
                this._toggleCollectionStateView();
            }),
            this.listenTo(this.facets, "destroy", function () {
              i.originatingView && i.originatingView.unblockActions();
            }),
            this.listenTo(this, "destroy", function () {
              i.originatingView && i.originatingView.unblockActions();
            }),
            this.listenTo(this.facets, "error", function () {
              i.originatingView && i.originatingView.unblockActions();
            }),
            this.listenTo(this, "error", function () {
              i.originatingView && i.originatingView.unblockActions();
            }),
            new m(t)
          );
        },
      });
      return o;
    }
  ),
  csui.define(
    "csui/controls/list/behaviors/list.view.keyboard.behavior",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/log",
      "csui/lib/marionette",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = {
        none: -1,
        search: 0,
        open_perspective: 1,
        close_search: 1,
        list: 2,
        footer: 3,
      };
      function a(c) {
        c.preventDefault(), c.stopPropagation();
      }
      return n.Behavior.extend({
        constructor: function (o, t) {
          n.Behavior.prototype.constructor.apply(this, arguments),
            (t.keyboardBehavior = this),
            (this.tabableElements = []);
          var i = this;
          this.listenTo(t, "show", function () {
            i.refreshTabableElements(t);
          }),
            this.listenTo(
              t,
              "childview:click:item childview:click:tree:header",
              function (s) {
                var l = t.selectedIndex,
                  g = t.getElementByIndex(l);
                g && g.prop("tabindex", "-1"),
                  (t.currentTabPosition = e.list),
                  (t.selectedIndex = t.collection.indexOf(s.model)),
                  (g = t.getElementByIndex(t.selectedIndex)),
                  g && g.prop("tabindex", "0");
              }
            ),
            this.listenTo(t, "change:filterValue", function () {
              i.refreshTabableElements(t);
            }),
            this.listenTo(t, "before:collection:scroll:fetch", function () {
              t._beforeCollectionScrollFetch();
            }),
            this.listenTo(t, "collection:scroll:fetch", function () {
              t._afterCollectionScrollFetch();
            }),
            y.extend(t, {
              _focusSearchButton: function (s) {
                this.currentTabPosition = e.search;
                var l = s && s.shiftKey;
                return l
                  ? v(this.ui.searchButton)
                  : this._isSearchInputVisible()
                  ? v(this.ui.searchInput)
                  : v(this.ui.searchButton);
              },
              _isSearchInputVisible: function () {
                return (
                  this.ui.searchInput.css &&
                  this.ui.searchInput.css("display") !== "none"
                );
              },
              _isOpenPerspectiveButtonFocusable: function () {
                return (
                  this.ui.openPerspectiveButton.css &&
                  this.ui.openPerspectiveButton.hasClass(
                    "cs-open-perspective-button"
                  ) &&
                  this.ui.openPerspectiveButton.css("display") !== "none"
                );
              },
              _focusOpenPerspectiveButton: function () {
                return (
                  (this.currentTabPosition = e.open_perspective),
                  v(this.ui.openPerspectiveButton)
                );
              },
              _focusCloseSearchButton: function () {
                return (
                  (this.currentTabPosition = e.close_search),
                  v(this.ui.searchCloseButton)
                );
              },
              _focusList: function (s) {
                return (
                  (this.currentTabPosition = e.list),
                  (this.selectedIndex < 0 ||
                    this.selectedIndex > this.collection.length - 1) &&
                    (this.selectedIndex = 0),
                  this.getElementByIndex(this.selectedIndex, s)
                );
              },
              _focusFooter: function () {
                return (
                  (this.currentTabPosition = e.footer), v(this.ui.tileExpand)
                );
              },
              currentlyFocusedElement: function (s) {
                if (this.isDestroyed) return this.$el;
                var l = this._getCurrentTabPosition();
                return (
                  (y.isUndefined(l) || l === e.none) &&
                    (s && s.shiftTab
                      ? this._isFooterVisible()
                        ? (l = e.footer)
                        : (l = e.list)
                      : this.hideSearch
                      ? this._enableOpenPerspective
                        ? (l = e.open_perspective)
                        : (l = e.list)
                      : (l = e.search)),
                  this._setFocusAtTabPosition(l)
                );
              },
              _setFocusAtTabPosition: function (s) {
                switch (s) {
                  case e.search:
                    return this._focusSearchButton();
                  case e.open_perspective:
                  case e.close_search:
                    return this._isSearchInputVisible()
                      ? this._focusCloseSearchButton()
                      : this._focusOpenPerspectiveButton();
                  case e.list:
                    return this._focusList();
                  case e.footer:
                    return this._focusFooter();
                }
              },
              _isFooterInFocus: function () {
                return (
                  this.currentTabPosition === e.footer ||
                  this.ui.tileExpand.is(":focus")
                );
              },
              _isFooterVisible: function () {
                return (
                  this.ui.tileExpand.css &&
                  this.ui.tileExpand.css("display") !== "none" &&
                  !this.ui.tileExpand.hasClass("binf-hidden") &&
                  this.ui.tileExpand.hasClass("tile-expand")
                );
              },
              _isFooterFocusable: function () {
                return this._isFooterVisible();
              },
              isMoreActionsDropdownOpen: function () {
                return this.$el
                  .find(
                    ".csui-table-cell-name-appendix .csui-table-actionbar .binf-dropdown-menu"
                  )
                  .is(":visible");
              },
              _isSearchInFocus: function () {
                return (
                  this.currentTabPosition === e.search ||
                  this.ui.searchButton.is(":focus") ||
                  this.ui.searchInput.is(":focus") ||
                  this.ui.clearer.is(":focus")
                );
              },
              _isCloseSearchInFocus: function () {
                return (
                  (this._isSearchInputVisible() &&
                    this.currentTabPosition === e.close_search) ||
                  this.ui.searchCloseButton.is(":focus")
                );
              },
              _isOpenPerspectiveButtonInFocus: function () {
                return (
                  this.currentTabPosition === e.title ||
                  this.ui.headerTitle.is(":focus")
                );
              },
              _isSearchButtonVisible: function () {
                return (
                  this.ui.searchButton.is(":visible") ||
                  (this.ui.searchButton.hasClass &&
                    !this.ui.searchButton.hasClass("binf-hidden"))
                );
              },
              _isCloseSearchVisible: function () {
                return (
                  this.ui.searchCloseButton.is(":visible") ||
                  (this.ui.searchCloseButton.hasClass &&
                    !this.ui.searchCloseButton.hasClass("binf-hidden"))
                );
              },
              _isSearchButtonFocusable: function () {
                return this._isSearchButtonVisible();
              },
              _isCloseSearchFocusable: function () {
                return this._isCloseSearchVisible();
              },
              _beforeCollectionScrollFetch: function () {
                if (
                  ((this.selectedIndexInFocus = !1),
                  this.selectedIndex >= 0 &&
                    this.selectedIndex < this.collection.length)
                ) {
                  var s = this.getElementByIndex(this.selectedIndex);
                  s &&
                    s.is(":focus") &&
                    (s.prop("tabindex", "-1"),
                    (this.selectedIndexInFocus = !0));
                }
              },
              _afterCollectionScrollFetch: function () {
                this.selectedIndexInFocus === !0 &&
                  this.selectedIndex >= 0 &&
                  this.selectedIndex < this.collection.length &&
                  setTimeout(
                    this._setFocusToListElement.bind(this, this.selectedIndex),
                    100
                  );
              },
              _setFocusToListElement: function (s) {
                var l = this.getElementByIndex(s);
                l && (l.prop("tabindex", "0"), l.focus());
              },
              _onKeyInSearchArea: function (s) {
                this.ui.searchButton.is(":focus") ||
                this.ui.searchCloseButton.is(":focus") ||
                this.ui.clearer.is(":focus")
                  ? (a(s), v(s.target).trigger("click"))
                  : this.ui.searchInput.is(":focus") &&
                    s.keyCode === 13 &&
                    (a(s), this.filterChanged(s));
              },
              _moveTo: function (s, l, g) {
                a(s),
                  this.trigger("before:keyboard:change:focus"),
                  g && g.prop("tabindex", "-1"),
                  l && l.prop("tabindex", "0"),
                  l && l.trigger("focus"),
                  this.trigger("changed:focus"),
                  this.trigger("after:keyboard:change:focus");
              },
              onKeyInView: function (s) {
                s.keyCode === 9
                  ? this._onTabKey(s)
                  : s.keyCode === 32 || s.keyCode === 13
                  ? this._onEnterOrSpace(s)
                  : s.keyCode === 27 && this._onEscape(s);
              },
              _onTabKey: function (s) {
                (this._isSearchInFocus() &&
                  !this.ui.searchButton.is(":focus") &&
                  !this.ui.searchCloseButton.is(":focus")) ||
                  this._moveToTabPosition(s, this._getNextTabPosition(s));
              },
              _isListFocusable: function () {
                return this.collection.length > 0;
              },
              _getCurrentTabPosition: function () {
                var s = this.currentTabPosition;
                return (
                  this._isSearchInFocus() &&
                  !this.ui.searchCloseButton.is(":focus")
                    ? (s = e.search)
                    : this._isOpenPerspectiveButtonInFocus()
                    ? (s = e.open_perspective)
                    : this._isFooterInFocus()
                    ? (s = e.footer)
                    : this._isCloseSearchInFocus() && (s = e.close_search),
                  s
                );
              },
              _isTabPositionFocusable: function (s) {
                switch (s) {
                  case e.footer:
                    return this._isFooterFocusable();
                  case e.list:
                    return this._isListFocusable();
                  case e.open_perspective:
                  case e.close_search:
                    return this._isSearchInputVisible()
                      ? this._isCloseSearchFocusable()
                      : this._isOpenPerspectiveButtonFocusable();
                  case e.search:
                    return this._isSearchButtonFocusable();
                }
                return !1;
              },
              _getFirstTabPosition: function () {
                return e.search;
              },
              _getLastTabPosition: function () {
                return e.footer;
              },
              _getValidTabPosition: function (s, l) {
                var g,
                  f = this._getFirstTabPosition(),
                  u = this._getLastTabPosition();
                if (l)
                  for (g = u; g >= f; g--)
                    s === g && !this._isTabPositionFocusable(g) && s--;
                else
                  for (g = f; g <= u; g++)
                    s === g && !this._isTabPositionFocusable(g) && s++;
                return s < f || s > u ? e.none : s;
              },
              _getNextTabPosition: function (s) {
                var l = this._getCurrentTabPosition(),
                  g = s.shiftKey;
                if (l !== e.none)
                  return g ? l-- : l++, this._getValidTabPosition(l, g);
              },
              _moveToTabPosition: function (s, l) {
                var g;
                switch (l) {
                  case e.search:
                    g = this._focusSearchButton;
                    break;
                  case e.open_perspective:
                  case e.close_search:
                    g = this._isSearchInputVisible()
                      ? this._focusSearchButton
                      : this._focusOpenPerspectiveButton;
                    break;
                  case e.list:
                    g = this._focusList;
                    break;
                  case e.footer:
                    g = this._focusFooter;
                    break;
                }
                if (g) {
                  var f = g.apply(this, s);
                  if (f && f.length > 0) return this._moveTo(s, f);
                }
              },
              _onEnterOrSpace: function (s) {
                this._isSearchInFocus() || this._isCloseSearchInFocus()
                  ? ((this.currentTabPosition = e.search),
                    this._onKeyInSearchArea(s))
                  : (a(s), v(s.target).trigger("click"));
              },
              _onEscape: function (s) {
                if (this.isMoreActionsDropdownOpen()) return !1;
                if (this._isSearchInFocus() || this._isCloseSearchInFocus()) {
                  var l = this.ui.searchInput.is(":visible");
                  l &&
                    (a(s),
                    this.closeSearchClicked(s),
                    setTimeout(
                      y.bind(function () {
                        this.ui.searchButton.prop("tabindex", "0"),
                          this.ui.searchButton.focus();
                      }, this),
                      250
                    ));
                }
              },
              onKeyDown: function (s) {
                if (
                  this._isSearchInFocus() ||
                  this._isFooterInFocus() ||
                  this._isCloseSearchInFocus()
                ) {
                  this.onKeyInView(s);
                  return;
                }
                var l;
                switch (s.which) {
                  case 33:
                  case 36:
                    (l = this.getElementByIndex(this.selectedIndex)),
                      this._moveTo(s, this._selectFirstListElement(), l);
                    break;
                  case 34:
                  case 35:
                    (l = this.getElementByIndex(this.selectedIndex)),
                      this._moveTo(s, this._selectLastListElement(s), l);
                    break;
                  case 38:
                    this.selectedIndex > 0
                      ? ((l = this.getElementByIndex(this.selectedIndex)),
                        this._moveTo(s, this._selectPreviousListElement(s), l))
                      : a(s);
                    break;
                  case 40:
                    this.selectedIndex < this.collection.length - 1
                      ? ((l = this.getElementByIndex(this.selectedIndex)),
                        this._moveTo(s, this._selectNextListElement(), l))
                      : a(s);
                    break;
                  default:
                    this.onKeyInView(s);
                    return;
                }
              },
              _selectFirstListElement: function () {
                return (
                  (this.selectedIndex = 0),
                  this.getElementByIndex(this.selectedIndex)
                );
              },
              _selectLastListElement: function (s) {
                var l,
                  g = this.selectedIndex;
                (g < 0 || g >= this.collection.length) && (g = 0);
                for (var f = this.collection.length; f > g && !l; )
                  f--, (l = this.getElementByIndex(f, s));
                return l
                  ? ((this.selectedIndex = f), l)
                  : this.getElementByIndex(this.selectedIndex);
              },
              _selectNextListElement: function () {
                var s,
                  l = this.selectedIndex;
                for (
                  (l < 0 || l >= this.collection.length) && (l = -1);
                  l < this.collection.length - 1 && !s;

                )
                  l++, (s = this.getElementByIndex(l));
                return s
                  ? ((this.selectedIndex = l), s)
                  : this.getElementByIndex(this.selectedIndex);
              },
              _selectPreviousListElement: function (s) {
                return (
                  this.selectedIndex > 0 && this.selectedIndex--,
                  this.getElementByIndex(this.selectedIndex, s)
                );
              },
            });
        },
        refreshTabableElements: function (c) {
          m.debug(
            "ListViewKeyboardBehavior::refreshTabableElements " +
              c.constructor.name
          ) && console.log(m.last),
            (this.view.currentTabPosition = e.none),
            (this.view.selectedIndex = -1);
        },
      });
    }
  ),
  csui.define(
    "csui/controls/list/emptylist.view",
    ["smart/controls/emptylist/emptylist.view"],
    function (r) {
      var y = r.extend({
        constructor: function (m) {
          r.prototype.constructor.call(this, m);
        },
      });
      return y;
    }
  ),
  csui.define(
    "hbs!csui/controls/list/impl/list",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `    <div class="tile-type-icon">
      <span class="icon ` +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 5, column: 24 },
                      end: { line: 5, column: 32 },
                    },
                  })
                : t)
            ) +
            `"></span>
    </div>
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "imageUrl") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(4, o, 0),
              inverse: n.noop,
              loc: {
                start: { line: 8, column: 4 },
                end: { line: 13, column: 11 },
              },
            }
          )) != null
            ? t
            : "";
        },
        4: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '      <div class="tile-type-image ' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "imageClass") || (e != null ? i(e, "imageClass") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "imageClass",
                    hash: {},
                    loc: {
                      start: { line: 9, column: 34 },
                      end: { line: 9, column: 48 },
                    },
                  })
                : t)
            ) +
            `">
      <span class="tile-type-icon tile-type-icon-img"><img src="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "imageUrl") || (e != null ? i(e, "imageUrl") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "imageUrl",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 64 },
                      end: { line: 10, column: 76 },
                    },
                  })
                : t)
            ) +
            `"
                                                           alt="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "expandAria") || (e != null ? i(e, "expandAria") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "expandAria",
                    hash: {},
                    loc: {
                      start: { line: 11, column: 64 },
                      end: { line: 11, column: 78 },
                    },
                  })
                : t)
            ) +
            `"></span>
      </div>
`
          );
        },
        6: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '        <span class="icon-search-placeholder">' +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { iconName: "csui_action_search32" },
              loc: {
                start: { line: 23, column: 46 },
                end: { line: 23, column: 91 },
              },
            })) != null
              ? t
              : "") +
            `</span>
        <input class="search" type="search" placeholder="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchPlaceholder") ||
                  (e != null ? s(e, "searchPlaceholder") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchPlaceholder",
                    hash: {},
                    loc: {
                      start: { line: 24, column: 57 },
                      end: { line: 24, column: 78 },
                    },
                  })
                : i)
            ) +
            `"
               title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchTitle") ||
                  (e != null ? s(e, "searchTitle") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchTitle",
                    hash: {},
                    loc: {
                      start: { line: 25, column: 22 },
                      end: { line: 25, column: 37 },
                    },
                  })
                : i)
            ) +
            `">
        <span class="clearer csui-icon formfield_clear" title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "clearAll") || (e != null ? s(e, "clearAll") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "clearAll",
                    hash: {},
                    loc: {
                      start: { line: 26, column: 63 },
                      end: { line: 26, column: 75 },
                    },
                  })
                : i)
            ) +
            `"
              aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "clearAllAria") ||
                  (e != null ? s(e, "clearAllAria") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "clearAllAria",
                    hash: {},
                    loc: {
                      start: { line: 27, column: 26 },
                      end: { line: 27, column: 42 },
                    },
                  })
                : i)
            ) +
            `" role="button"></span>
        <span class="fadeout csui-icon" title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchTitle") ||
                  (e != null ? s(e, "searchTitle") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchTitle",
                    hash: {},
                    loc: {
                      start: { line: 28, column: 47 },
                      end: { line: 28, column: 62 },
                    },
                  })
                : i)
            ) +
            `"></span>
`
          );
        },
        8: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '        <div title="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchTooltip") ||
                  (e != null ? s(e, "searchTooltip") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchTooltip",
                    hash: {},
                    loc: {
                      start: { line: 34, column: 20 },
                      end: { line: 34, column: 37 },
                    },
                  })
                : i)
            ) +
            `" class="cs-icon-container cs-search-button"
             role="button" aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchAria") || (e != null ? s(e, "searchAria") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchAria",
                    hash: {},
                    loc: {
                      start: { line: 35, column: 39 },
                      end: { line: 35, column: 53 },
                    },
                  })
                : i)
            ) +
            `" aria-expanded="false">
          ` +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { states: "true", iconName: "csui_action_search32" },
              loc: {
                start: { line: 36, column: 10 },
                end: { line: 36, column: 69 },
              },
            })) != null
              ? t
              : "") +
            `
        </div>
`
          );
        },
        10: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '        <div title="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "openPerspectiveAria") ||
                  (e != null ? s(e, "openPerspectiveAria") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "openPerspectiveAria",
                    hash: {},
                    loc: {
                      start: { line: 40, column: 20 },
                      end: { line: 40, column: 43 },
                    },
                  })
                : i)
            ) +
            `" class="cs-icon-container cs-open-perspective-button"
             role="button" aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "openPerspectiveAria") ||
                  (e != null ? s(e, "openPerspectiveAria") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "openPerspectiveAria",
                    hash: {},
                    loc: {
                      start: { line: 41, column: 39 },
                      end: { line: 41, column: 62 },
                    },
                  })
                : i)
            ) +
            `">
          ` +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { states: "true", iconName: "csui_action_expand32" },
              loc: {
                start: { line: 42, column: 10 },
                end: { line: 42, column: 69 },
              },
            })) != null
              ? t
              : "") +
            `
        </div>
`
          );
        },
        12: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '        <div title="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchCloseTooltip") ||
                  (e != null ? s(e, "searchCloseTooltip") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchCloseTooltip",
                    hash: {},
                    loc: {
                      start: { line: 49, column: 20 },
                      end: { line: 49, column: 42 },
                    },
                  })
                : i)
            ) +
            `" class="cs-icon-container cs-search-close-button"
             role="button" aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "searchCloseAria") ||
                  (e != null ? s(e, "searchCloseAria") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "searchCloseAria",
                    hash: {},
                    loc: {
                      start: { line: 50, column: 39 },
                      end: { line: 50, column: 58 },
                    },
                  })
                : i)
            ) +
            `" aria-expanded="true">
          ` +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { states: "true", iconName: "csui_action_close_mid" },
              loc: {
                start: { line: 51, column: 10 },
                end: { line: 51, column: 70 },
              },
            })) != null
              ? t
              : "") +
            `
        </div>
`
          );
        },
        14: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `  <div class="tile-footer">
    <div class="cs-more tile-expand" title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "expandTitle") ||
                  (e != null ? s(e, "expandTitle") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "expandTitle",
                    hash: {},
                    loc: {
                      start: { line: 66, column: 44 },
                      end: { line: 66, column: 59 },
                    },
                  })
                : i)
            ) +
            '" aria-label="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "expandAria") || (e != null ? s(e, "expandAria") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "expandAria",
                    hash: {},
                    loc: {
                      start: { line: 66, column: 73 },
                      end: { line: 66, column: 87 },
                    },
                  })
                : i)
            ) +
            `"
         role="button">
      ` +
            ((t = (
              s(a, "icon-v2") ||
              (e && s(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { states: "true", iconName: "csui_action_expand32" },
              loc: {
                start: { line: 68, column: 6 },
                end: { line: 68, column: 65 },
              },
            })) != null
              ? t
              : "") +
            `
    </div>
  </div>
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `<div class="tile-header">

` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "icon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.program(3, o, 0),
                loc: {
                  start: { line: 3, column: 2 },
                  end: { line: 14, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  <div class="tile-title" title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 16, column: 33 },
                      end: { line: 16, column: 42 },
                    },
                  })
                : i)
            ) +
            `">
    <h2 class="csui-heading">` +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 17, column: 29 },
                      end: { line: 17, column: 38 },
                    },
                  })
                : i)
            ) +
            `</h2>
  </div>

  <div class="tile-controls">
      <div class="search-box">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "hideSearch") : e,
              {
                name: "if",
                hash: {},
                fn: n.noop,
                inverse: n.program(6, o, 0),
                loc: {
                  start: { line: 22, column: 7 },
                  end: { line: 29, column: 15 },
                },
              }
            )) != null
              ? t
              : "") +
            `      </div>

    <div class="tile-icons">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "hideSearch") : e,
              {
                name: "if",
                hash: {},
                fn: n.noop,
                inverse: n.program(8, o, 0),
                loc: {
                  start: { line: 33, column: 6 },
                  end: { line: 38, column: 13 },
                },
              }
            )) != null
              ? t
              : "") +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "enableOpenPerspective") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(10, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 39, column: 6 },
                  end: { line: 44, column: 13 },
                },
              }
            )) != null
              ? t
              : "") +
            `    </div>

    <div class="close-search-icon">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "hideSearch") : e,
              {
                name: "if",
                hash: {},
                fn: n.noop,
                inverse: n.program(12, o, 0),
                loc: {
                  start: { line: 48, column: 6 },
                  end: { line: 53, column: 13 },
                },
              }
            )) != null
              ? t
              : "") +
            `    </div>
  </div>

</div>

<div class="tile-content csui-normal-scrolling">
  <div class="binf-list-group" role="listbox"></div>
  <div class="binf-sr-only" aria-live="off"></div>
</div>

` +
            ((t = s(a, "unless").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "enableOpenPerspective") : e,
              {
                name: "unless",
                hash: {},
                fn: n.program(14, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 64, column: 0 },
                  end: { line: 71, column: 11 },
                },
              }
            )) != null
              ? t
              : "") +
            `
`
          );
        },
      });
      return v.registerPartial("csui_controls_list_impl_list", m), m;
    }
  ),
  csui.define("csui/controls/list/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/list/impl/nls/root/lang", {
    goBackTooltip: "Go back",
    goBackAria: "Go back to {0}",
    goBackTitleForEmptyTitle: "Back",
    emptyViewDefaultText: "No items.",
    clearAll: "Clear",
    clearAllAria: "Clear search",
    expandView: "Expand",
    expandAria: "Expand {0} widget",
    searchView: "Search",
    searchAria: "Search {0} widget",
    collapseSearch: "Close search",
    collapseAria: "Clear all and close search",
    elementsVisibleAria: "{0} Elements are visible in {1}",
    nameTitleAria: "{0} of type {1}",
    openPerspective: "Open Perspective",
    openPerspectiveTooltip: "Open Perspective",
  }),
  csui.define("css!csui/controls/list/impl/list", [], function () {}),
  csui.define(
    "csui/controls/list/list.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/list/emptylist.view",
      "i18n",
      "hbs!csui/controls/list/impl/list",
      "i18n!csui/controls/list/impl/nls/lang",
      "css!csui/controls/list/impl/list",
      "csui/lib/jquery.ui/js/jquery-ui",
    ],
    function (r, y, v, m, n, e, a, c) {
      var o = v.ItemView.extend({
          constructor: function () {
            v.ItemView.prototype.constructor.apply(this, arguments);
          },
        }),
        t = v.CompositeView.extend({
          direction: e.settings.rtl ? "right" : "left",
          constructor: function (s) {
            s || (s = {}),
              r.defaults(s, { filterValue: "" }),
              v.CompositeView.prototype.constructor.call(this, s);
            var l = this.templateHelpers(),
              g =
                l && l.title
                  ? l.title.toLowerCase()
                  : s && s.data && s.data.title
                  ? s.data.title
                  : "",
              f = {
                title: g,
                expandTitle: c.expandView,
                expandAria: r.str.sformat(c.expandAria, g),
                searchTooltip: c.searchView,
                searchCloseTooltip: c.collapseSearch,
                searchAria: r.str.sformat(c.searchAria, g),
                searchCloseAria: c.collapseAria,
                collapseSearchTooltip: c.collapseSearch,
                openPerspectiveAria: c.openPerspective,
                openPerspectiveTooltip: c.openPerspectiveTooltip,
              };
            (this.templateHelpers = r.defaults(l, f, c)),
              this.listenToOnce(this.collection, "sync", function () {
                this.$el.removeClass("initialLoading");
              }),
              this.listenTo(this.completeCollection, "sync", function () {
                var u = !!this.completeCollection.favorites,
                  p = u
                    ? !this.completeCollection.favorites.length
                    : !this.completeCollection.length;
                p && this.ui.tileContent.removeAttr("role");
              }),
              this.listenToOnce(
                this.collection,
                "error",
                r.bind(this.handleError, this)
              ),
              this.listenToOnce(
                this.completeCollection,
                "error",
                r.bind(this.handleError, this)
              ),
              this.listenTo(
                this,
                "doc:preview:generic:actions",
                this._highlightRow
              );
          },
          handleError: function () {
            (this.errorExists = !0),
              this.$el.addClass("csui-list-view-error"),
              this.ui.tileContent.removeAttr("role");
          },
          templateHelpers: function () {},
          setValidator: function () {
            this.validator = setInterval(r.bind(this.validateInput, this), 10);
          },
          unsetValidator: function () {
            clearInterval(this.validator);
          },
          className: "cs-list tile content-tile initialLoading",
          template: a,
          childViewContainer: ".binf-list-group",
          childView: o,
          childViewOptions: function () {
            return { template: this.options.childViewTemplate };
          },
          emptyView: n,
          ui: {
            placeholderSearchIcon: ".icon-search-placeholder",
            headerTitle: ".tile-title",
            tileIcon: ".tile-icons",
            searchIcon: ".cs-search-icon",
            searchButton: ".cs-search-button",
            searchCloseButton: ".cs-search-close-button",
            searchBox: ".search-box",
            searchInput: ".search",
            clearer: ".clearer",
            tileExpand: ".tile-expand",
            fadeout: ".fadeout",
            tileHeader: ".tile-header",
            openPerspectiveButton: ".cs-open-perspective-button",
            openPerspectiveIcon: ".icon-perspective-open",
            tileControls: ".tile-controls",
            tileContent: ".tile-content",
          },
          events: { keydown: "onKeyDown" },
          triggers: {
            "click .tile-header": "before:click:header",
            "click @ui.openPerspectiveButton": "click:open:perspective",
          },
          _highlightRow: function (i, s) {
            y("." + s).removeClass(s);
            var l = r.findIndex(this.collection.models, function (p) {
              return p.get("id") === i.get("id");
            });
            if (l !== -1) {
              var g = this.$childViewContainer,
                f = g && g.children(),
                u = f && f.eq(l);
              u && u.addClass(s);
            }
          },
          onKeyDown: function (i) {},
          onBeforeClickHeader: function () {
            this.errorExists || this.triggerMethod("click:header");
          },
          onRender: function () {
            this.ui.placeholderSearchIcon.hide(),
              this.ui.searchInput.hide(),
              this.ui.clearer.toggle(!1),
              this.ui.placeholderSearchIcon.on(
                "click",
                r.bind(this.placeholderSearchIconClicked, this)
              ),
              this.ui.searchButton.on(
                "click",
                r.bind(this.searchClicked, this)
              ),
              this.ui.searchCloseButton.on(
                "click",
                r.bind(this.closeSearchClicked, this)
              ),
              this.ui.searchBox.on(
                "click",
                r.bind(this.searchBoxClicked, this)
              ),
              this.ui.clearer.on(
                "click",
                r.bind(this.searchFieldClearerClicked, this)
              ),
              this.ui.searchInput.on("input", r.bind(this.searchInput, this)),
              (this.srOnly = this.$el.find(".tile-content .binf-sr-only")),
              (this.tileHeader = this.$el.find(".tile-header")),
              (this.titleId = r.uniqueId("dlgTitle")),
              this.$(this.ui.headerTitle)
                .find(".csui-heading")
                .attr("id", this.titleId),
              this.$(this.tileHeader)
                .parent()
                .attr("role", "region")
                .attr("aria-labelledby", this.titleId),
              this.$el
                .find(".tile-content .binf-list-group")
                .attr("aria-labelledby", this.titleId),
              this.$el.on("focusin", r.bind(this.focusinAria, this)),
              this.$el.on("focusout", r.bind(this.focusoutAria, this)),
              m.isAppleMobile() === !1 &&
                this._enableOpenPerspective &&
                this._addActivationEventHandlers();
          },
          _addActivationEventHandlers: function () {
            var i = this.$el;
            i.addClass("cs-no-expanding"),
              i
                .on("mouseover", function () {
                  i.addClass("cs-hover");
                })
                .on("mouseleave", function () {
                  i.removeClass("cs-hover cs-mousedown");
                })
                .on("mousedown", function () {
                  i.addClass("cs-mousedown");
                })
                .on("mouseup", function () {
                  i.removeClass("cs-mousedown");
                })
                .on("focusin", function () {
                  i.addClass("cs-has-focus");
                })
                .on("focusout", function () {
                  i.removeClass("cs-has-focus");
                }),
              this.ui.tileHeader
                .on("mouseover", function () {
                  i.addClass("cs-tile-header-hover");
                })
                .on("mouseleave", function () {
                  i.removeClass("cs-tile-header-hover");
                });
          },
          focusOutHandle: void 0,
          focusinAria: function () {
            this.focusOutHandle
              ? (clearTimeout(this.focusOutHandle.handle),
                (this.focusOutHandle = void 0))
              : (this.srOnly.attr("aria-live", "polite"),
                this.setElementsVisibleAria());
          },
          focusoutAria: function () {
            var i = this;
            this.focusOutHandle = setTimeout(function () {
              i.srOnly.attr("aria-live", "off"),
                i.srOnly.html(""),
                (i.focusOutHandle = void 0);
            }, 25);
          },
          searchBoxClicked: function (i) {
            i.stopPropagation();
          },
          searchFieldClearerClicked: function () {
            this.ui.searchInput.val(""),
              this.filterChanged(),
              this.ui.searchInput.trigger("focus");
          },
          placeholderSearchIconClicked: function () {
            this.ui.searchInput.trigger("focus");
          },
          isSearchOpen: function () {
            return this.ui.searchInput.is && this.ui.searchInput.is(":visible");
          },
          searchClicked: function (i) {
            this.ui.searchInput.val(""),
              this.ui.clearer.toggle(!1),
              this.ui.headerTitle.hide(),
              this.ui.searchInput.show(
                "blind",
                { direction: this.direction },
                200,
                r.bind(function () {
                  this.ui.searchInput.prop("tabindex", "0"),
                    this.ui.searchInput.trigger("focus");
                }, this)
              ),
              this.setValidator(),
              this.ui.placeholderSearchIcon.show("fast"),
              this.$(this.ui.searchIcon).addClass("icon-search-hide"),
              this.$(this.ui.searchCloseButton).addClass("icon-search-hide"),
              this.ui.tileIcon.fadeOut(),
              this.ui.tileControls.addClass("search-enabled"),
              this.ui.searchCloseButton.fadeIn(),
              this.ui.searchCloseButton.prop("tabindex", "0"),
              this.ui.fadeout.show(
                250,
                r.bind(function () {
                  this._resetFilter();
                }, this)
              ),
              i && i.stopPropagation();
          },
          closeSearchClicked: function (i) {
            this.ui.searchInput.val(""),
              this.ui.clearer.toggle(!1),
              this.ui.fadeout.hide(),
              this.ui.placeholderSearchIcon.hide(),
              this.ui.searchCloseButton.fadeOut(
                r.bind(function () {
                  this.ui.tileIcon.fadeIn(),
                    this.ui.headerTitle.show(
                      "fade",
                      r.bind(function () {
                        this.ui.searchButton.prop("tabindex", "0"),
                          this.ui.searchButton.trigger("focus"),
                          this._resetFilter();
                      }, this)
                    );
                }, this)
              ),
              this.ui.tileControls.removeClass("search-enabled"),
              this.unsetValidator(),
              this.$(this.ui.searchIcon).removeClass("icon-search-hide"),
              this.$(this.ui.searchCloseButton).removeClass("icon-search-hide"),
              this.ui.searchInput.hide(
                "blind",
                { direction: this.direction },
                200
              ),
              i && i.stopPropagation();
          },
          validateInput: function () {
            if (this.ui.searchInput.val) {
              var i =
                this.ui.searchInput.val && !!this.ui.searchInput.val().length;
              this.ui.clearer.toggle(i),
                this.ui.clearer.prop("tabindex", i ? "0" : "-1");
            }
          },
          searchInput: function (i) {
            this.keyInputTimer && clearTimeout(this.keyInputTimer),
              (this.keyInputTimer = setTimeout(
                r.bind(function () {
                  (this.keyInputTimer = void 0), this.filterChanged();
                }, this),
                300
              ));
          },
          filterChanged: function () {
            (this.options.filterValue = this.ui.searchInput.val()),
              this.trigger("change:filterValue"),
              this.setElementsVisibleAria();
          },
          setElementsVisibleAria: function () {
            var i = this.collection ? this.collection.size() : "0";
            this.srOnly.text(
              r.str.sformat(
                c.elementsVisibleAria,
                i,
                this.templateHelpers.title
              )
            );
          },
          _resetFilter: function () {
            this.ui.searchInput.val(""), this.filterChanged();
          },
          getElementByIndex: function (i) {
            if (isNaN(i) || i < 0) return null;
            var s = this.showInlineActionBar
                ? "div.csui-item-standard:nth-child({0})"
                : "div a:nth-child({0})",
              l = r.str.sformat(s, i + 1),
              g = this.$(l);
            if (
              (g.length === 0 &&
                (g = this._lookForElementToTabTo(i, [
                  '[role="option"] > div:not(.binf-hidden)',
                  '[role="option"]',
                ])),
              g)
            )
              return y(g[0]);
          },
          _lookForElementToTabTo: function (i, s) {
            var l,
              g = this.el;
            return (
              s &&
                s.some(function (f) {
                  var u = g.querySelectorAll(f);
                  if (u && u.length > i) return (l = y(u[i]));
                }),
              l
            );
          },
        });
      return t;
    }
  ),
  csui.define(
    "hbs!csui/controls/list/impl/emptylist",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `<div class="cs-emptylist-placeholder"></div>
<div class="cs-emptylist-text"><p class="csui-no-result-message" title="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "text") || (e != null ? i(e, "text") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "text",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 72 },
                      end: { line: 2, column: 80 },
                    },
                  })
                : t)
            ) +
            '" role="status">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "text") || (e != null ? i(e, "text") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "text",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 96 },
                      end: { line: 2, column: 104 },
                    },
                  })
                : t)
            ) +
            `</p></div>
<div class="cs-emptylist-placeholder"></div>
`
          );
        },
      });
      return v.registerPartial("csui_controls_list_impl_emptylist", m), m;
    }
  ),
  csui.define(
    "csui/controls/list/list.state.view",
    [
      "csui/behaviors/collection.state/collection.state.view",
      "hbs!csui/controls/list/impl/emptylist",
    ],
    function (r, y) {
      "use strict";
      var v = r.extend({
        constructor: function () {
          r.prototype.constructor.apply(this, arguments);
        },
        className: "cs-emptylist-container " + r.prototype.className,
        template: y,
        serializeData: function () {
          var m = r.prototype.serializeData.apply(this, arguments);
          return { text: m.state === "loading" ? "" : m.message };
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/models/node.children2.lite/server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/utils/url",
      "csui/models/browsable/v1.request.mixin",
      "csui/models/browsable/v2.response.mixin",
      "csui/models/mixins/appcontainer/appcontainer.mixin",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = {
        mixin: function (a) {
          return (
            m.mixin(a),
            v.mixin(a),
            n.mixin(a),
            r.extend(a, {
              makeServerAdaptor: function (c) {
                return (
                  (this.useSpecialPaging = c.useSpecialPaging),
                  this.makeBrowsableV1Request(c)
                    .makeBrowsableV2Response(c)
                    .makeAppContainer(c),
                  this
                );
              },
              url: function () {
                var c,
                  o = new y(this.node.connector.connection.url).getApiBase(2),
                  t;
                if (this.useSpecialPaging) {
                  c = y.combine(
                    o,
                    "app/container",
                    this.node.get("id"),
                    "page"
                  );
                  var i = {
                    fields: r.without(
                      this.getResourceFieldsUrlQuery().fields,
                      "properties"
                    ),
                  };
                  t = y.combineQueryString(this.getBrowsableUrlQuery(), i);
                } else
                  (c = y.combine(o, "nodes", this.node.get("id"), "nodes")),
                    (t = y.combineQueryString(
                      this.getBrowsableUrlQuery(),
                      this.getResourceFieldsUrlQuery(),
                      this.getExpandableResourcesUrlQuery(),
                      this.getStateEnablingUrlQuery(),
                      this.getAdditionalResourcesUrlQuery(),
                      this.getRequestedCommandsUrlQuery()
                    ));
                return y.appendQuery(c, t);
              },
              parse: function (c, o) {
                if (this.useSpecialPaging) {
                  var t = this;
                  c.results = c.results.map(function (i) {
                    return t.massageResponse(i);
                  });
                }
                return (
                  this.parseBrowsedState(c, o), this.parseBrowsedItems(c, o)
                );
              },
            })
          );
        },
      };
      return e;
    }
  ),
  csui.define(
    "csui/models/node.children2.lite/node.children2.lite",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/models/node/node.model",
      "csui/models/node.children2/node.children2",
      "csui/models/node.children2.lite/server.adaptor.mixin",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      var a = r.config();
      y.defaults(a, { defaultPageSize: 10 });
      var c = n.extend({
        model: m,
        constructor: function (t, i) {
          (i = y.defaults({}, i, { top: a.defaultPageSize }, i)),
            n.prototype.constructor.call(this, t, i);
        },
      });
      return e.mixin(c.prototype), c;
    }
  ),
  csui.define(
    "hbs!csui/controls/treebrowse/impl/tree.node.error",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `<span class="csui-icon-group csui-tree-error-node-icon">
  ` +
            ((t = (
              i(a, "icon-v2") ||
              (e && i(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { size: "xsmall", iconName: "csui_action_close32" },
              loc: {
                start: { line: 2, column: 2 },
                end: { line: 2, column: 60 },
              },
            })) != null
              ? t
              : "") +
            `
</span>`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_treebrowse_impl_tree.node.error", m), m
      );
    }
  ),
  csui.define(
    "csui/controls/treebrowse/impl/tree.node.error.view",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "hbs!csui/controls/treebrowse/impl/tree.node.error",
    ],
    function (r, y, v, m) {
      "use strict";
      return v.ItemView.extend({
        tagName: "span",
        className: "csui-tree-error-node-icon-container",
        template: m,
        constructor: function (e) {
          (e = e || {}), v.ItemView.prototype.constructor.call(this, e);
        },
      });
    }
  ),
  csui.define("csui/controls/treebrowse/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/treebrowse/impl/nls/root/lang", {
    ShowMore: "Show more",
    ShowLess: "Show less",
    tooltipTreeNodeExpand: "Expand",
    tooltipTreeNodeCollapse: "Collapse",
    expandNetworkError:
      'Unable to open the "{0}" node as the connection is lost.',
    showMoreNetworkError: "Unable to open the link as the connection is lost.",
    nodeDoesNotExistMsg: "Node does not exist.",
  }),
  csui.define(
    "csui/controls/treebrowse/impl/fancytree.overrides",
    [
      "csui/lib/jquery",
      "i18n!csui/controls/treebrowse/impl/nls/lang",
      "csui/lib/fancytree/jquery.fancytree",
    ],
    function (r, y) {
      "use strict";
      return (
        r.ui.fancytree.registerExtension({
          name: "csui-overrides",
          version: "1.0.0",
          options: { rootIndent: 0, levelIndent: 12 },
          nodeRenderStatus: function (v) {
            var m,
              n = v.node,
              e = r(n.span),
              a = n.getLevel(),
              c = n.isExpanded(),
              o = v.options["csui-overrides"],
              t = r(n[v.tree.statusClassPropName]),
              i = r(n.tr || n.li),
              s = e.find(".fancytree-expander");
            return (
              (m = this._super(v)),
              s.attr(
                "title",
                c ? y.tooltipTreeNodeCollapse : y.tooltipTreeNodeExpand
              ),
              n.data.disabled === !0
                ? (t.addClass("fancytree-disabled"),
                  v.options.aria && i.attr("aria-disabled", !0))
                : v.options.aria && i.attr("aria-disabled", !1),
              i.addClass("fancytree-level-" + a),
              v.tree.options.rtl
                ? e.css({
                    paddingRight: (a - 1) * o.levelIndent + o.rootIndent,
                  })
                : e.css({
                    paddingLeft: (a - 1) * o.levelIndent + o.rootIndent,
                  }),
              n.isPagingNode() &&
                e
                  .find(".fancytree-title:not(:has(.fancytree-paging-icon))")
                  .append(
                    '<span class="fancytree-paging-icon ' +
                      (n.data.showMore ? "show-more" : "show-less") +
                      '">'
                  ),
              n._isLoading === !0
                ? e
                    .find(".fancytree-expander")
                    .append('<div class="fancytree-loader"></div>')
                : e.find(".fancytree-expander").empty(),
              n.data.isErrorNode === !0
                ? e.addClass("fancytree-node-error")
                : n.hasError === !0 && e.addClass("fancytree-error"),
              m
            );
          },
          nodeSetActive: function (v, m, n) {
            if (v.node.data.disabled === !0)
              return r
                .Deferred(function () {
                  this.resolveWith(v);
                })
                .promise();
            this._super(v, m, n);
          },
          treeSetFocus: function (v, m, n) {
            m === !1 &&
              this.focusNode &&
              (this._lastFocusNode = this.focusNode);
            var e = this._super(v, m, n);
            return (
              m &&
                (!n || !n.calledByNode) &&
                !this.focusNode &&
                this._lastFocusNode &&
                this._lastFocusNode.setFocus(),
              e
            );
          },
        }),
        r.ui.fancytree
      );
    }
  ),
  csui.define("css!csui/controls/treebrowse/impl/tree", [], function () {}),
  csui.define(
    "csui/controls/treebrowse/tree.view",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/models/node/node.model",
      "csui/controls/node-type.icon/node-type.icon.view",
      "csui/controls/treebrowse/impl/tree.node.error.view",
      "csui/lib/fancytree/jquery.fancytree",
      "csui/controls/treebrowse/impl/fancytree.overrides",
      "css!csui/controls/treebrowse/impl/tree",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      return v.ItemView.extend({
        template: !1,
        className: "csui-tree-browse",
        constructor: function (c) {
          c = c || {};
          var o = [
              "activate",
              "beforeActivate",
              "click",
              "clickPaging",
              "collapse",
              "dblclick",
              "expand",
              "focus",
              "init",
              "keydown",
              "lazyLoad",
              "source",
              "rtl",
            ],
            t = this;
          (this.treeOptions = y.extend(y.pick(c, o), {
            extensions: ["csui-overrides"],
            "csui-overrides": { rootIndent: 4, levelIndent: 24 },
            escapeTitles: !0,
            autoActivate: !1,
            icon: function (i, s) {
              var l = s.node;
              if (l.data.isErrorNode === !0) {
                var g = new e();
                return { html: g.render().el.outerHTML };
              }
              if (y.isEmpty(l.data) || l.data.showMore != null) return;
              var f = l.data.origNode;
              f || (f = new m({ id: l.key })),
                t.listenTo(f, "change:image_url", function (x) {
                  const S = {
                      node: x,
                      size: "xsmall",
                      states: "true",
                      colorTheme: "tree",
                    },
                    T = new n(S);
                  T.render();
                  const k = x.get("id");
                  T.$el.find("img").on("load", function () {
                    r(`.node_${k} img`).on("load", function () {
                      T.destroy();
                    }),
                      r(`.node_${k} img`).attr(
                        "src",
                        T.$el.find("img").attr("src")
                      );
                  });
                });
              const u = {
                  node: f,
                  size: "xsmall",
                  states: "true",
                  colorTheme: "tree",
                },
                p = new n(u);
              return (
                p.$el.addClass("node_" + f.get("id")),
                { html: p.render().el.outerHTML }
              );
            },
          })),
            (c = y.omit(c, o)),
            v.ItemView.prototype.constructor.call(this, c);
        },
        onBeforeRender: function () {
          this.tree = r.ui.fancytree.getTree(
            this.$el.fancytree(this.treeOptions)
          );
        },
        onBeforeDestroy: function () {
          this.tree && this.tree.widget && this.tree.widget.destroy();
        },
      });
    }
  ),
  csui.define(
    "hbs!csui/controls/treebrowse/impl/node.tree",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return '<div class="csui-tree-browse-container"></div>';
        },
      });
      return v.registerPartial("csui_controls_treebrowse_impl_node.tree", m), m;
    }
  ),
  csui.define(
    "css!csui/controls/treebrowse/impl/node.tree",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/treebrowse/node.tree.view",
    [
      "module",
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/utils/contexts/factories/next.node",
      "csui/utils/contexts/factories/node",
      "csui/utils/contexts/factories/ancestors",
      "csui/controls/globalmessage/globalmessage",
      "csui/utils/log",
      "csui/models/node.children2.lite/node.children2.lite",
      "csui/controls/treebrowse/tree.view",
      "i18n",
      "hbs!csui/controls/treebrowse/impl/node.tree",
      "i18n!csui/controls/treebrowse/impl/nls/lang",
      "css!csui/controls/treebrowse/impl/node.tree",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l, g) {
      "use strict";
      o = o(r.id);
      var f = 10;
      return m.LayoutView.extend({
        className: "csui-tree-browse-panel csui-normal-scrolling",
        template: l,
        regions: { treeRegion: ".csui-tree-browse-container" },
        constructor: function (p) {
          if (!p || !p.originatingView)
            throw new Error("originatingView option is mandatory");
          v.defaults(p, { lazyTree: !0 }),
            (this.context = p.originatingView.context),
            (this.connector = p.originatingView.connector),
            (this.originatingView = p.originatingView),
            (this.showItemsBlockSize = p.showItemsBlockSize || f),
            (this.rootNodes = p.rootNodes || p.originatingView.rootNodes),
            (this.lazyLoading = p.lazyTree),
            (this.ancestors = this.context.getCollection(a)),
            m.LayoutView.prototype.constructor.call(this, p),
            this.listenTo(
              this.originatingView.collection,
              "add",
              this._modelAdded,
              this
            ),
            this.listenTo(
              this.originatingView.collection,
              "remove",
              this._modelRemoved,
              this
            ),
            this.listenTo(
              this.originatingView.collection,
              "change:name sync",
              this._modelRenamed,
              this
            ),
            this.listenTo(
              this.originatingView.container,
              "change:name",
              this._modelRenamed,
              this
            ),
            this.listenTo(
              this.originatingView.container,
              "delete",
              this._modelRemoved,
              this
            ),
            this.rootNodes &&
              this.rootNodes.forEach(
                function (x) {
                  this.listenTo(
                    x,
                    "change:id",
                    function (S) {
                      x.get("id") && this.render();
                    },
                    this
                  ),
                    this.listenTo(
                      x,
                      "change:name",
                      function (S) {
                        x.get("id") && this._modelRenamed(S);
                      },
                      this
                    );
                }.bind(this)
              );
        },
        is: "NodeTreeView",
        onRender: function () {
          this.treeView && this.treeView.destroy(),
            (this.treeView = new i(this._buildTreeOptions())),
            this.treeRegion.show(this.treeView);
        },
        updateNodes: function () {
          var u = this,
            p = this.treeView.tree.activeNode;
          if (p) {
            var x = this.getUpdatedAncestors(this.ancestors),
              S = p.getParentList(!1, !0),
              T = 0;
            if (
              (S.forEach(function (M) {
                x[T] &&
                  M?.key === x[T]?.id &&
                  M.title !== x[T].name &&
                  u._updateNodeTitle(M, x[T].name),
                  T++;
              }),
              p.isExpanded())
            ) {
              var k = this.originatingView.collection.filter(function (M) {
                  return M.get("container") === !0;
                }),
                A = p.getChildren();
              k.forEach(function (M) {
                var N = v.find(A, function (R) {
                  return M.get("id").toString() === R.key;
                });
                N &&
                  N.key !== M.get(name) &&
                  u._updateNodeTitle(N, M.get("name"));
              });
            }
          }
        },
        getUpdatedAncestors: function (u) {
          if (this.updateAncestors) {
            var p = [],
              x = !1;
            return (
              u.each(function (S) {
                x
                  ? p.push({ id: S.get("id").toString(), name: S.get("name") })
                  : this.rootNodes.some(function (T) {
                      return T.get("id") === S.get("id")
                        ? ((x = !0),
                          p.push({
                            id: S.get("id").toString(),
                            name: S.get("name"),
                          }),
                          !0)
                        : !1;
                    });
              }, this),
              p
            );
          } else
            return u.map(function (S) {
              return { id: S.get("id").toString(), name: S.get("name") };
            });
        },
        onDomRefresh: function () {
          this._clearTabIndexes();
        },
        _clearTabIndexes: function () {
          var u = ".ps-scrollbar-x[tabindex], .ps-scrollbar-y[tabindex]",
            p = this.el.querySelectorAll(u);
          if (p.length)
            for (var x = 0; x < p.length; x++)
              p[x].setAttribute("tabindex", -1);
        },
        _buildTreeOptions: function () {
          var u = this.context.getModel(n),
            p = this.context.getModel(e),
            x = this.context.getCollection(a),
            S = v.extend(
              {
                rtl: !!(s && s.settings.rtl),
                source: function () {
                  var k = [];
                  return (
                    this.rootNodes && this.rootNodes.length > 0
                      ? (v.each(this.rootNodes, function (A) {
                          k.push(A);
                        }),
                        (this.updateAncestors = !0))
                      : k.push(x.first()),
                    v.map(k, this._createTreeNode)
                  );
                },
                init: function (k, A) {
                  var M = this;
                  function N(R) {
                    M._activateNode(
                      A.tree,
                      M.getUpdatedAncestors(x),
                      void 0,
                      R
                    ),
                      !R && M.updateNodes();
                  }
                  this.treeView.listenTo(x, "update reset", function () {
                    N(A.tree.data.firstLoad);
                  }),
                    (A.tree.data.firstLoad = !0),
                    x.fetched && N(!0);
                },
                lazyLoad: function (k, A) {
                  var M = y.Deferred(),
                    N = A.node;
                  this._fetchNodeChildren(N, 0, this._getInitialFetchLimit(N))
                    .done(
                      v.bind(function (R) {
                        if (N.parent !== null) {
                          N.hasError = !1;
                          var K = this._getInitialShowLimit(N),
                            G = v.map(R.models, this._createTreeNode),
                            $ = v.clone(G);
                          (N.data.totalCount = R.totalCount),
                            (N.data.allChildren = $),
                            N.data.totalCount > K &&
                              (G.splice(K),
                              this._addPagingNode(G, $, N.data.totalCount, K)),
                            M.resolve(G);
                        }
                      }, this)
                    )
                    .fail(
                      function (R) {
                        N.setStatus("ok"),
                          R.status === 404
                            ? ((N.hasError = !0), this._makeErrorNode(N))
                            : c.showMessage(
                                "error",
                                v.str.sformat(g.expandNetworkError, N.title)
                              );
                      }.bind(this)
                    ),
                    (A.result = M.promise());
                },
                focus: function (k, A) {
                  A.node.scrollIntoView(!0);
                },
                collapse: function (k, A) {
                  A.node.resetLazy();
                },
                click: function (k, A) {
                  if (
                    v.isEmpty(A.node.data) ||
                    A.node.hasError ||
                    A.node.data.isErrorNode
                  )
                    return k.preventDefault(), k.stopPropagation(), !1;
                  A.tree.activateKey(!1, { noEvents: !0 });
                },
                dblclick: function () {
                  return !1;
                },
                keydown: function (k, A) {
                  if (k.which === 13 || k.which === 32) {
                    if (A.node.hasError || A.node.data.isErrorNode) return !1;
                    A.tree.activateKey(!1, { noEvents: !0 });
                  }
                },
                clickPaging: function (k, A) {
                  this._clickPagingNode(A.node);
                },
                beforeActivate: function (k, A) {
                  return A.node.isPagingNode()
                    ? (A.tree.options.clickPaging.apply(this, arguments), !1)
                    : !0;
                },
                activate: function (k, A) {
                  var M = p.get("id").toString();
                  M != A.node.key &&
                    (u.trigger("before:change:id", A.node.data.origNode, this),
                    u.set({ id: +A.node.key || 0 })),
                    M === A.node.key &&
                      !A.tree.data.firstLoad &&
                      this.originatingView.collection.fetch({ reload: !0 }),
                    (A.tree._currActiveNodeKey = A.node.key);
                },
              },
              this.options
            );
          for (var T in S) v.isFunction(S[T]) && (S[T] = S[T].bind(this));
          return S;
        },
        _clickPagingNode: function (u) {
          var p = y.Deferred();
          return (
            this.lazyLoading
              ? this._clickPagingNodeLazy(u).done(p.resolve)
              : this._clickPagingNodePrefetch(u).done(p.resolve),
            p.promise()
          );
        },
        _makeErrorNode: function (u) {
          var p = u.addNode({ title: g.nodeDoesNotExistMsg, isErrorNode: !0 });
          u.setExpanded(!0, { noEvents: !0 });
        },
        _getInitialFetchLimit: function (u) {
          var p;
          return (
            this.lazyLoading
              ? (p = this.showItemsBlockSize)
              : (p = 2 * this.showItemsBlockSize),
            p
          );
        },
        _getInitialShowLimit: function (u) {
          return this.showItemsBlockSize;
        },
        _createTreeNode: function (u) {
          var p = !!u.get("container");
          return {
            key: u.get("id"),
            origNode: u,
            title: u.get("name"),
            tooltip: u.get("name"),
            folder: p,
            lazy: p,
          };
        },
        _fetchNodeChildren: function (u, p, x) {
          var S = y.Deferred(),
            T = new t(
              [],
              v.defaults(
                { autoreset: !0, fields: { properties: [] } },
                { node: u.data.origNode }
              )
            );
          return (
            T.setFilter(-1, "type", { fetch: !1 }),
            this._setCollectionOptions(T, u.data.origNode, p, x),
            T.fetch()
              .done(function () {
                S.resolve(T);
              })
              .fail(S.reject),
            S.promise()
          );
        },
        _activateNode: function (u, p, x, S) {
          var T = this,
            k,
            A;
          if (p.length > 0) {
            if (((k = p[0].id), !x)) {
              var M = u.rootNode.getChildren();
              A = v.find(M, { key: k });
            }
            if (!A) {
              var N = x || u.activeNode;
              A =
                N &&
                v.find(N.getChildren(), function (K) {
                  return K.key === k;
                });
            }
            if ((A || (A = u.getNodeByKey(k)), A))
              p.length === 1
                ? S === !0
                  ? (A.setExpanded(!0).done(function () {
                      A.setActive(!0);
                    }),
                    (u.data.firstLoad = !1))
                  : A.setActive(!0)
                : A.setExpanded(!0).done(function () {
                    p.splice(0, 1), T._activateNode(u, p, A, S);
                  });
            else {
              if (x) {
                var R = x.getLastChild();
                if (R && R.statusNodeType === "paging" && R.data.showMore) {
                  T._clickPagingNode(R).done(function () {
                    T._activateNode(u, p, x, S);
                  });
                  return;
                }
              }
              o.error(
                "Ancestor " +
                  k +
                  " not found in the tree, while trying to activate the node"
              ) && console.error(o.last);
            }
          }
        },
        _addPagingNode: function (u, p, x, S) {
          var T = S < x;
          u.push({
            statusNodeType: "paging",
            title: T ? g.ShowMore : g.ShowLess,
            data: { allChildren: p, currPageListSize: S, showMore: T },
          });
        },
        _displayLoader: function (u) {
          var p = y(u.span),
            x = parseFloat(p.css("padding-left")),
            S = p.width();
          this.treeView.tree.nodeSetStatus({ node: u }, "loading"),
            p.find(".fancytree-title").addClass("binf-hidden"),
            s && s.settings.rtl
              ? p.css({ paddingRight: x + S / 2 })
              : p.css({ paddingLeft: x + S / 2 });
        },
        _clickPagingNodeLazy: function (u, p) {
          var x = this,
            S = y.Deferred(),
            T = u.getParent(),
            k = u.data.allChildren,
            A = T.data.totalCount,
            M = u.getIndex(),
            N = u.data.showMore && p !== !0,
            R,
            K;
          if (N)
            (R = M + this.showItemsBlockSize),
              u.data.removeNode &&
                ((M = u.data.currPageListSize), (u.data.removeNode = !1)),
              x._displayLoader(u),
              x
                ._fetchNodeChildren(T, M, x.showItemsBlockSize)
                .done(function ($) {
                  (K = v.map($.models, x._createTreeNode)),
                    A > k.length && k.push.apply(k, K),
                    x.treeView.tree.nodeSetStatus({ node: u }, "ok"),
                    x._addPagingNode(K, k, A, R),
                    x
                      ._replacePagingNodeWithChildren(u, K, N, p)
                      .done(S.resolve);
                })
                .fail(function ($) {
                  x.treeView.tree.nodeSetStatus({ node: u }, "ok"),
                    c.showMessage(
                      "error",
                      v.str.sformat(g.showMoreNetworkError)
                    );
                });
          else {
            (K = []),
              (R = x._getInitialShowLimit(u.parent)),
              x._addPagingNode(K, k, A, R);
            for (var G = T.children.length - 2; G >= R; G--)
              T.removeChild(T.children[G]);
            x._replacePagingNodeWithChildren(u, K, N, p).done(S.resolve);
          }
          return S.promise();
        },
        _clickPagingNodePrefetch: function (u, p) {
          var x = this,
            S = y.Deferred(),
            T = u.getParent(),
            k = u.data.allChildren,
            A = T.data.totalCount,
            M = u.getIndex(),
            N = u.data.showMore && p !== !0,
            R = T.data.promise,
            K,
            G;
          if (N)
            (K = M + x.showItemsBlockSize),
              !R || R.finish
                ? ((G = k.slice(M, K)),
                  (K = k.length < K ? k.length : K),
                  z(),
                  x._addPagingNode(G, k, A, K),
                  x._replacePagingNodeWithChildren(u, G, N, p).done(S.resolve))
                : !R.finish && !R.rejected
                ? (x._displayLoader(u),
                  R.done(function () {
                    x.treeView.tree.nodeSetStatus({ node: u }, "ok"),
                      (G = k.slice(M, K)),
                      z(),
                      x._addPagingNode(G, k, A, K),
                      x
                        ._replacePagingNodeWithChildren(u, G, N, p)
                        .done(S.resolve);
                  }).fail(function () {
                    console.error("Network issue fetching show more results");
                  }))
                : R.rejected
                ? c.showMessage("error", v.str.sformat(g.showMoreNetworkError))
                : console.error("Network issue fetching show more results");
          else {
            (G = []),
              (K = x._getInitialShowLimit(u.parent)),
              x._addPagingNode(G, k, A, K);
            for (var $ = T.children.length - 2; $ >= K; $--)
              T.removeChild(T.children[$]);
            x._replacePagingNodeWithChildren(u, G, N, p).done(S.resolve);
          }
          function z() {
            var ue = k.length;
            A > k.length &&
              ((R = x._fetchNodeChildren(T, ue, x.showItemsBlockSize)),
              (T.data.promise = R),
              R.done(function (J) {
                var ae = v.map(J.models, x._createTreeNode);
                (R.finish = !0), k.push.apply(k, ae);
              }).fail(function () {
                R.rejected = !0;
              }));
          }
          return S.promise();
        },
        _replacePagingNodeWithChildren: function (u, p, x, S) {
          var T = u.getParent(),
            k = u.getIndex(),
            A = y.Deferred();
          return (
            u
              .replaceWith(p)
              .done(
                function () {
                  x &&
                    u.tree._currActiveNodeKey &&
                    v.any(p, { key: u.tree._currActiveNodeKey }) &&
                    this._getActiveNode().setActive(!0, {
                      noFocus: !0,
                      noEvents: !0,
                    }),
                    S !== !0 && T.children[k].setFocus(!0),
                    A.resolve();
                }.bind(this)
              )
              .fail(A.reject),
            A.promise()
          );
        },
        _setCollectionOptions: function (u, p, x, S) {
          (u.node = p), (u.skipCount = x), (u.topCount = S);
        },
        _getActiveNode: function () {
          var u = this.treeView.tree;
          return u.getNodeByKey(u._currActiveNodeKey);
        },
        _addNewNode: function (u, p) {
          var x = u.getLastChild(),
            S,
            T,
            k = x && x.statusNodeType === "paging",
            A = k ? x.data.allChildren : u.getChildren(),
            M = v.map(A, function (N) {
              return { key: N.key, title: N.title };
            });
          M.push(p),
            (M = v.sortBy(M, function (N) {
              return N.title.toLowerCase();
            })),
            v.find(M, function (N, R) {
              if (N.key === p.key) return (S = R), !0;
            }),
            S < u.getChildren().length
              ? (u.addChildren([p], S === -1 ? null : S), (T = !0))
              : S === u.getChildren().length &&
                !k &&
                (u.addChildren([p]), (T = !0)),
            k &&
              (x.data.allChildren.splice(S, 0, p),
              T && (x.data.currPageListSize = x.data.currPageListSize + 1));
        },
        _removeNode: function (u, p) {
          var x = v.find(u.getChildren(), { key: p.toString() });
          x && x.remove();
          var S = u.getLastChild();
          S &&
            S.statusNodeType === "paging" &&
            ((S.data.allChildren = v.reject(S.data.allChildren, { key: p })),
            x && (S.data.removeNode = !0),
            S.data.allChildren.length === S.data.currPageListSize &&
              !S.data.showMore &&
              u.removeChild(S));
        },
        _modelAdded: function (u) {
          var p = this,
            x = function (S) {
              var T = p._getActiveNode(),
                k = T.key,
                A = p.treeView.tree.findAll(function (M) {
                  return M.isLoaded() && k === M.key;
                });
              v.each(A, function (M) {
                p._addNewNode(M, p._createTreeNode(S));
              });
            };
          u.get("container") &&
            (u.get("id")
              ? x(u)
              : p.listenToOnce(u, "sync", function () {
                  x(u);
                }));
        },
        _modelRemoved: function (u) {
          var p = this;
          if (u.get("container")) {
            var x = u.get("id"),
              S = p.treeView.tree.findAll(function (T) {
                if (T.isLoaded() && T.hasChildren()) {
                  if (v.any(T.getChildren(), { key: x.toString() })) return !0;
                  var k = T.getLastChild();
                  if (k.statusNodeType === "paging")
                    return v.any(k.data.allChildren, { key: x });
                }
                return !1;
              });
            v.each(S, function (T) {
              p._removeNode(T, x);
            });
          }
        },
        _modelRenamed: function (u) {
          var p = this;
          if (u.get("container") && u.changed.name) {
            var x = u.get("id"),
              S = p.treeView.tree.findAll(function (T) {
                return T.statusNodeType === "paging"
                  ? (v.each(T.data.allChildren, function (k) {
                      k.key === x && (k.title = u.get("name"));
                    }),
                    !1)
                  : x.toString() === T.key;
              });
            v.each(S, function (T) {
              p._updateNodeTitle(T, u.get("name"));
            });
          }
        },
        _updateNodeTitle: function (u, p) {
          (u.tooltip = p), u.setTitle(p);
        },
      });
    }
  ),
  csui.define(
    "csui/controls/list/behaviors/list.item.keyboard.behavior",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/log",
      "csui/lib/marionette",
    ],
    function (r, y, v, m, n) {
      "use strict";
      function e(a) {
        a.preventDefault(), a.stopPropagation();
      }
      return n.Behavior.extend({
        ui: {
          titleName: ".list-item-title",
          moreActions: ".csui-tileview-more-btn",
        },
        events: function () {
          var a = { "keydown @ui.titleName": "_doDefaultAction" };
          return (
            this.view.showInlineActionBar
              ? (a = y.extend(a, { keydown: "_handleInlineKeyDown" }))
              : (a = y.extend(a, { keydown: "_doDefaultAction" })),
            a
          );
        },
        constructor: function (c, o) {
          n.Behavior.prototype.constructor.apply(this, arguments);
        },
        _doDefaultAction: function (a) {
          (a.keyCode == 13 || a.keyCode == 32) &&
            (a.stopPropagation(),
            this.view.trigger("click:item", { target: this.view.model }));
        },
        _handleInlineKeyDown: function (a) {
          var c = v(a.target);
          switch (a.keyCode) {
            case 13:
              this.view.onShowInlineMenu(a),
                this.ui.titleName.prop("tabindex", -1).trigger("focus"),
                e(a);
              break;
            case 27:
              var o = this.view.onHideInlineMenu();
              o && (this.$el.trigger("focus"), e(a));
              break;
            case 37:
              this.ui.moreActions.is(c) || this.ui.moreActions.has(c).length
                ? (this.ui.titleName.prop("tabindex", -1).trigger("focus"),
                  e(a))
                : this.ui.titleName.is(c) && e(a);
              break;
            case 39:
              this.ui.titleName.is(c) &&
                (this.view._inlineMenuView.acquireFocus(), e(a));
              break;
            default:
              (this.ui.moreActions.is(c) ||
                this.ui.moreActions.has(c).length ||
                this.ui.titleName.is(c)) &&
                a.keyCode >= 33 &&
                a.keyCode <= 40 &&
                e(a);
          }
        },
      });
    }
  ),
  csui.define(
    "csui/dialogs/members.picker/behaviors/member.list.keyboard.behavior",
    [
      "csui/lib/jquery",
      "csui/controls/list/behaviors/list.item.keyboard.behavior",
    ],
    function (r, y) {
      "use strict";
      function v(m) {
        m.preventDefault(), m.stopPropagation();
      }
      return y.extend({
        ui: {
          memberName: ".user-profile-info",
          inlineActionButton: ".csui-list-inlineactions-btn",
        },
        events: function () {
          var m = {
            "keydown @ui.memberName": "_doDefaultAction",
            focus: "_onFocusInTableCell",
            blur: "_onFocusOutTableCell",
            keydown: "_handleInlineKeyDown",
          };
          return m;
        },
        constructor: function (n, e) {
          y.prototype.constructor.apply(this, arguments);
        },
        _onFocusInTableCell: function (m) {
          this.view?.options.isMemberListItem &&
            (this.view.onShowInlineMenu(m), v(m));
        },
        _onFocusOutTableCell: function (m) {
          this.view?.options.isMemberListItem &&
            m.relatedTarget &&
            !m.currentTarget.contains(m.relatedTarget) &&
            (this.view.onHideInlineMenu(m), v(m));
        },
        _handleInlineKeyDown: function (m) {
          var n = r(m.target);
          switch (m.key) {
            case "Enter":
              this.ui.memberName.length &&
                (this.ui.memberName.prop("tabindex", -1).trigger("focus"),
                v(m));
              break;
            case "Escape":
              if (!m.target.classList.contains("csui-item-standard")) {
                var e = this.view.onHideInlineMenu();
                e && (this.$el.trigger("focus"), v(m));
              }
              break;
            case "ArrowLeft":
              this.ui.inlineActionButton.is(n) ||
              this.ui.inlineActionButton.has(n).length
                ? (this.ui.memberName.prop("tabindex", -1).trigger("focus"),
                  v(m))
                : this.ui.memberName.is(n) && v(m);
              break;
            case "ArrowRight":
              this.ui.memberName.is(n) &&
                (this.view.inlineMenuBarView.$el
                  ?.find("a")
                  .attr("tabindex", -1)
                  .trigger("focus"),
                v(m));
              break;
            default:
              (this.ui.inlineActionButton.is(n) ||
                this.ui.inlineActionButton.has(n).length ||
                this.ui.memberName.is(n)) &&
                m.keyCode >= 33 &&
                m.keyCode <= 40 &&
                v(m);
          }
        },
      });
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/inline.menu/inline.menu",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `
      title="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "dropDownText") ||
                  (e != null ? i(e, "dropDownText") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "dropDownText",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 13 },
                      end: { line: 2, column: 29 },
                    },
                  })
                : t)
            ) +
            '" aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "dropDownText") ||
                  (e != null ? i(e, "dropDownText") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "dropDownText",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 43 },
                      end: { line: 2, column: 59 },
                    },
                  })
                : t)
            ) +
            '" tabindex="-1"'
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<span class="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "dropDownIcon") ||
                  (e != null ? i(e, "dropDownIcon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "dropDownIcon",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 35 },
                      end: { line: 3, column: 51 },
                    },
                  })
                : t)
            ) +
            '"></span>'
          );
        },
        5: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = (
            i(a, "icon-v2") ||
            (e && i(e, "icon-v2")) ||
            n.hooks.helperMissing
          ).call(e ?? (n.nullContext || {}), {
            name: "icon-v2",
            hash: {
              states: "true",
              iconName: e != null ? i(e, "dropDownIconName") : e,
            },
            loc: {
              start: { line: 4, column: 26 },
              end: { line: 4, column: 79 },
            },
          })) != null
            ? t
            : "";
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '<div class="csui-icon-group csui-menu-btn" role="button" aria-expanded="false" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "dropDownText") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 1, column: 79 },
                  end: { line: 2, column: 81 },
                },
              }
            )) != null
              ? t
              : "") +
            `>
  ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "dropDownIcon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 3, column: 2 },
                  end: { line: 3, column: 67 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "dropDownIconName") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 4, column: 2 },
                  end: { line: 4, column: 86 },
                },
              }
            )) != null
              ? t
              : "") +
            `
</div>
<div class="csui-icon-group csui-loading-parent-wrapper binf-disabled binf-hidden"
      title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "loadingTitle") ||
                  (e != null ? s(e, "loadingTitle") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "loadingTitle",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 13 },
                      end: { line: 7, column: 29 },
                    },
                  })
                : i)
            ) +
            `" role="presentation" tabindex="-1">
  <div class="csui-loading-dots-wrapper">
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
  </div>
</div>
<div class="csui-menu-btn-region binf-hidden"></div>`
          );
        },
      });
      return (
        v.registerPartial(
          "csui_controls_listitem_impl_inline.menu_inline.menu",
          m
        ),
        m
      );
    }
  ),
  csui.define("csui/controls/listitem/impl/inline.menu/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/listitem/impl/inline.menu/nls/root/lang", {
    loadingActions: "Loading {0}",
  }),
  csui.define(
    "css!csui/controls/listitem/impl/inline.menu/inline.menu",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/listitem/impl/inline.menu/inline.menu.view",
    [
      "require",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/globalmessage/globalmessage",
      "hbs!csui/controls/listitem/impl/inline.menu/inline.menu",
      "i18n!csui/controls/listitem/impl/inline.menu/nls/lang",
      "css!csui/controls/listitem/impl/inline.menu/inline.menu",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      var o = m.ItemView.extend({
        tagName: "div",
        className: "csui-inline-menu",
        template: a,
        templateHelpers: function () {
          return {
            dropDownText: this.inlineActionbarOptions.dropDownText,
            dropDownIconName: this.inlineActionbarOptions.dropDownIconName,
            loadingTitle: y.str.sformat(
              c.loadingActions,
              this.inlineActionbarOptions.dropDownText
            ),
            dropDownIcon: this.inlineActionbarOptions.dropDownIcon,
          };
        },
        ui: {
          moreToggle: ".csui-menu-btn",
          toolbarContainer: ".csui-menu-btn-region",
          dropdownToggle:
            ".csui-menu-btn-region .binf-dropdown .binf-dropdown-toggle",
          loadingContainer: ".csui-loading-parent-wrapper",
        },
        events: {
          "click @ui.moreToggle": "onClickMenuButton",
          "click @ui.dropdownToggle": "onClickMenuButton",
          "keydown @ui.moreToggle": "onKeydownMenu",
          "keydown @ui.dropdownToggle": "onKeydownMenu",
          click: "_onClickInlineMenu",
        },
        constructor: function (i) {
          i || (i = {}),
            (this.tileViewToolbarItems = i.tileViewToolbarItems || {}),
            (this.inlineActionbar = this.tileViewToolbarItems.inlineActionbar),
            (this.inlineActionbarOptions =
              (this.inlineActionbar && this.inlineActionbar.options) || {}),
            m.ItemView.call(this, i);
        },
        onBeforeDestroy: function () {
          this._destroyInlineMenu();
        },
        _onClickInlineMenu: function (t) {
          t.stopPropagation(), t.preventDefault();
        },
        onClickMenuButton: function (t) {
          t.preventDefault(), t.stopPropagation();
          var i = !!this.model.get("csuiLazyActionsRetrieved"),
            s = this.model.nonPromotedActionCommands;
          if (!i && s && s.length) {
            var l = this;
            this._toggleLoadingIcon(!0),
              this.ui.loadingContainer.trigger("focus"),
              this.model
                .setEnabledLazyActionCommands(!0)
                .done(function () {
                  setTimeout(function () {
                    l._showInlineMenu(t);
                  }, 300);
                })
                .fail(function (g) {
                  l._toggleLoadingIcon(!1);
                  var f = new n.Error(g);
                  e.showMessage("error", f.message);
                });
          } else this._showInlineMenu(t);
        },
        onKeydownMenu: function (t) {
          switch (t.which) {
            case 13:
            case 32:
            case 40:
              return this.onClickMenuButton(t), !1;
          }
        },
        acquireFocus: function () {
          this.$el.find("*[tabindex]:visible").first().trigger("focus");
        },
        _toggleLoadingIcon: function (t) {
          this.$el.attr("aria-busy", !!t),
            t
              ? (this.ui.moreToggle.addClass("binf-hidden"),
                this.ui.loadingContainer.removeClass("binf-hidden"))
              : (this.ui.moreToggle.removeClass("binf-hidden"),
                this.ui.loadingContainer.addClass("binf-hidden"));
        },
        _toggleMenuButton: function () {
          this.ui.moreToggle.addClass("binf-hidden"),
            this.ui.loadingContainer.addClass("binf-hidden"),
            this.ui.toolbarContainer.removeClass("binf-hidden");
        },
        _focusFirstItem: function (t) {
          t.type == "keydown" &&
            this.$el.find(".binf-dropdown-menu li:first a").trigger("focus");
        },
        closeDropdownMenuIfOpen: function () {
          this.inlineMenuBarView &&
            this.inlineMenuBarView.closeDropdownMenuIfOpen() &&
            this._removeContainerShowingInlineMenuClass();
        },
        _addContainerShowingInlineMenuClass: function () {
          this.$el.closest(".tile-content").addClass("showing-inline-menu"),
            n.isEdge() &&
              this.inlineMenuBarView.$el
                .find("li.binf-dropdown a")
                .each(function () {
                  var t = v(this).attr("title");
                  t && v(this).data("title", t).removeAttr("title");
                });
        },
        _removeContainerShowingInlineMenuClass: function () {
          this.$el.closest(".tile-content").removeClass("showing-inline-menu"),
            n.isEdge() &&
              this.inlineMenuBarView.$el
                .find("li.binf-dropdown a")
                .each(function () {
                  v(this).attr("title", v(this).data("title"));
                });
        },
        _showInlineMenu: function (t) {
          if (!this.isDestroyed) {
            if (this.inlineMenuBarView) {
              this._addContainerShowingInlineMenuClass(),
                this.inlineMenuBarView.toggleDropdownMenu(),
                this._focusFirstItem(t);
              return;
            }
            var i = ["csui/controls/tableactionbar/tableactionbar.view"];
            r(
              i,
              y.bind(function (s) {
                (this.inlineMenuBarView = new s(
                  y.extend(
                    {
                      context: this.options.context,
                      originatingView: this.options.originatingView,
                      commands: this.options.commands,
                      model: this.model,
                      collection: this.inlineActionbar,
                      containerCollection: this.model.collection,
                      status: { originatingView: this.options.originatingView },
                    },
                    this.inlineActionbarOptions
                  )
                )),
                  this._toggleMenuButton();
                var l = this.$el.find(".csui-menu-btn-region"),
                  g = new m.Region({ el: l });
                g.show(this.inlineMenuBarView),
                  this.listenTo(
                    this.inlineMenuBarView,
                    "before:execute:command",
                    function (u) {
                      this.trigger("before:execute:command", u);
                    }
                  ),
                  this.listenTo(
                    this.inlineMenuBarView,
                    "after:execute:command",
                    function (u) {
                      this.trigger("after:execute:command", u);
                    }
                  ),
                  this.listenTo(
                    this.inlineMenuBarView,
                    "destroy",
                    function (u) {
                      v(document).off("scroll.inline.menu"),
                        this._removeContainerShowingInlineMenuClass();
                    }
                  );
                var f = this.inlineMenuBarView.$el.find("li.binf-dropdown");
                v(window).on("resize", this.closeDropdownMenuIfOpen.bind(this)),
                  f.on(
                    "show.binf.dropdown",
                    y.bind(function () {
                      this._addContainerShowingInlineMenuClass();
                    }, this)
                  ),
                  f.on(
                    "hide.binf.dropdown",
                    y.bind(function () {
                      this._removeContainerShowingInlineMenuClass();
                    }, this)
                  ),
                  v(document).on(
                    "scroll.inline.menu",
                    this.closeDropdownMenuIfOpen.bind(this)
                  ),
                  this._addContainerShowingInlineMenuClass(),
                  this.inlineMenuBarView.toggleDropdownMenu(!0),
                  this._focusFirstItem(t);
              }, this)
            );
          }
        },
        _destroyInlineMenu: function () {
          this.inlineMenuBarView && this.inlineMenuBarView.destroy();
        },
      });
      return o;
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/listitemstandard",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          return '<a class="csui-tileview-contains-more-btn" tabindex="-1"> ';
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<div class="csui-type-icon ' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 45 },
                      end: { line: 2, column: 53 },
                    },
                  })
                : t)
            ) +
            '"></div>'
          );
        },
        5: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<div class="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "end-icon-class") ||
                  (e != null ? i(e, "end-icon-class") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "end-icon-class",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 28 },
                      end: { line: 4, column: 46 },
                    },
                  })
                : t)
            ) +
            '"></div>'
          );
        },
        7: function (n, e, a, c, o) {
          return '<div class="csui-tileview-more-btn"></div>';
        },
        9: function (n, e, a, c, o) {
          return "</a>";
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "showInlineActionBar") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 1, column: 92 },
                },
              }
            )) != null
              ? t
              : "") +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "enableIcon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 0 },
                  end: { line: 2, column: 68 },
                },
              }
            )) != null
              ? t
              : "") +
            `
<div title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 12 },
                      end: { line: 3, column: 20 },
                    },
                  })
                : i)
            ) +
            '" class="list-item-title" role="link" aria-label="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "itemLabel") || (e != null ? s(e, "itemLabel") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "itemLabel",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 70 },
                      end: { line: 3, column: 83 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 85 },
                      end: { line: 3, column: 93 },
                    },
                  })
                : i)
            ) +
            `</div>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "end-icon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 4, column: 0 },
                  end: { line: 4, column: 61 },
                },
              }
            )) != null
              ? t
              : "") +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "showInlineActionBar") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(7, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 5, column: 0 },
                  end: { line: 5, column: 76 },
                },
              }
            )) != null
              ? t
              : "") +
            `
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "showInlineActionBar") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(9, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 6, column: 0 },
                  end: { line: 6, column: 38 },
                },
              }
            )) != null
              ? t
              : "") +
            `
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_listitem_impl_listitemstandard", m), m
      );
    }
  ),
  csui.define(
    "css!csui/controls/listitem/impl/listitemstandard",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/listitem/listitemstandard.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/behaviors/default.action/default.action.behavior",
      "csui/controls/list/behaviors/list.item.keyboard.behavior",
      "csui/dialogs/members.picker/behaviors/member.list.keyboard.behavior",
      "csui/utils/node.links/node.links",
      "csui/controls/tableactionbar/tableactionbar.view",
      "csui/controls/listitem/impl/inline.menu/inline.menu.view",
      "csui/utils/accessibility",
      "hbs!csui/controls/listitem/impl/listitemstandard",
      "css!csui/controls/listitem/impl/listitemstandard",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s) {
      "use strict";
      var l = i.isAccessibleTable(),
        g = v.ItemView.extend({
          tagName: function () {
            return this.showInlineActionBar ? "div" : "a";
          },
          className: "csui-item-standard binf-list-group-item",
          behaviors: {
            DefaultAction: { behaviorClass: n },
            ListItemKeyboardBehavior: { behaviorClass: e },
            MemberListKeyboardBehaviour: { behaviorClass: a },
          },
          template: s,
          templateHelpers: function () {
            return r.reduce(
              this.options,
              function (f, u, p) {
                if (typeof u == "string") {
                  var x = this._getValue(u);
                  p === "icon" && ((x = "csui-icon " + x), (f.enableIcon = !0)),
                    (f[p] = x);
                }
                return f;
              },
              {},
              this
            );
          },
          constructor: function (u) {
            u || (u = {}),
              u.toolbarData && this._setInlineActions(u),
              (this.context = u.context),
              v.ItemView.call(this, u),
              this.listenTo(
                this,
                "doc:preview:generic:actions",
                this._highlightRow
              ),
              this.$el.on(
                "click",
                r.bind(function (p) {
                  this.isControlClick(p) ||
                    (p.preventDefault(),
                    p.stopPropagation(),
                    this.triggerMethod("click:item"));
                }, this)
              );
          },
          _highlightRow: function (f, u) {
            y("." + u).removeClass(u), this.$el.addClass(u);
          },
          _setInlineActions: function (f) {
            (this.showInlineActionBar = !0),
              (this.tileViewToolbarItems = f.toolbarData.toolbaritems),
              (this.ui = r.extend({}, this.ui, {
                titleName: ".list-item-title",
                icon: ".csui-icon-group",
              })),
              l ||
                (this.events = {
                  mouseenter: "onShowInlineMenu",
                  mouseleave: "onHideInlineMenu",
                  wheel: "onWheelEvent",
                });
          },
          cascadeDestroy: function () {
            return !1;
          },
          setElementData: function () {
            var f;
            return (
              this.showInlineActionBar
                ? (f = this.$el.find("a"))
                : ((f = this.$el), f.prop("tabindex", "-1")),
              f
            );
          },
          onRender: function () {
            var f = this.model && this.model.get("id");
            if (
              ((this.eleData = this.setElementData()),
              f != null && this.eleData.attr("href", c.getUrl(this.model)),
              this.options.refetchNodeActions &&
                this.model &&
                (this.model.refetchNodeActions = !0),
              this.model && this.options && this.options.checkDefaultAction)
            ) {
              var u =
                this.model.fetched === !1 ||
                !this.defaultActionController.hasAction(this.model);
              this.$el[u ? "addClass" : "removeClass"]("inactive");
            }
            this.$el.attr("role", "option"),
              m.isHybrid() && this.onShowInlineMenu();
          },
          _getValue: function (f) {
            if (f.indexOf("{") === 0) {
              var u = f.substring(1, f.length - 1).split("."),
                p = this.model.attributes;
              return (
                r.find(u, function (x) {
                  if (((p = p[x]), p === void 0)) return !0;
                }),
                p
              );
            }
            return f;
          },
          onShowInlineMenu: function (f) {
            var u =
              this.$el.find(".csui-tileview-more-btn").length === 0
                ? this.$el.find(".csui-list-inlineactions-btn")
                : this.$el.find(".csui-tileview-more-btn");
            if (m.isHybrid() && (f || !u.length)) return;
            f && f.preventDefault(), f && f.stopPropagation();
            const p = {
              context: this.options.context,
              originatingView: this._parent ?? this,
              commands: this.defaultActionController.commands,
              model: this.model,
            };
            if (r.isEmpty(this.tileViewToolbarItems.inlineActionbar.options)) {
              this.$el.addClass("csui-row-with-inlineactions-btn");
              const S = r.extend(
                {
                  collection: this.tileViewToolbarItems.inlineActionbar,
                  containerCollection: this.model.collection,
                  status: { originatingView: this._parent },
                },
                p
              );
              (this.inlineMenuBarView = new o(S)),
                new v.Region({ el: u }).show(this.inlineMenuBarView),
                this.listenTo(
                  this.inlineMenuBarView,
                  "before:execute:command",
                  function (k) {
                    this.trigger("before:execute:command", k);
                  }
                ),
                this.listenTo(
                  this.inlineMenuBarView,
                  "after:execute:command",
                  function (k) {
                    this.trigger("after:execute:command", k);
                  }
                );
            } else {
              this.$el.addClass("csui-tile-with-more-btn");
              const S = r.extend(
                { tileViewToolbarItems: this.tileViewToolbarItems },
                p
              );
              this._inlineMenuView = new t(S);
              var x = new v.Region({ el: u });
              x.show(this._inlineMenuView),
                this.listenTo(
                  this._inlineMenuView,
                  "before:execute:command",
                  function (T) {
                    this.trigger("before:execute:command", T);
                  }
                ),
                this.listenTo(
                  this._inlineMenuView,
                  "after:execute:command",
                  function () {
                    m.isHybrid() || this.onHideInlineMenu();
                  }
                );
            }
          },
          onHideInlineMenu: function (f) {
            if (f && m.isHybrid()) {
              this._inlineMenuView &&
                this._inlineMenuView.inlineMenuBarView &&
                this._inlineMenuView.inlineMenuBarView.closeDropdownMenuIfOpen();
              return;
            }
            return (
              this.$el.removeClass("csui-tile-with-more-btn"),
              this._inlineMenuView
                ? this._destroyInlineMenu(this._inlineMenuView)
                : this.inlineMenuBarView &&
                  this._destroyInlineMenu(this.inlineMenuBarView),
              !0
            );
          },
          _destroyInlineMenu: function (f) {
            f.destroy(), (f = void 0);
          },
          onWheelEvent: function (f) {
            this._inlineMenuView &&
              this._inlineMenuView.closeDropdownMenuIfOpen();
          },
          isControlClick: function (f) {
            return m.isControlClick(f);
          },
        });
      return g;
    }
  ),
  csui.define(
    "hbs!csui/controls/list/impl/simplelist",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '  <div class="cs-header binf-panel-heading cs-header-with-go-back" tabindex="0" role="link" aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "goBackAria") || (e != null ? i(e, "goBackAria") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "goBackAria",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 104 },
                      end: { line: 2, column: 118 },
                    },
                  })
                : t)
            ) +
            `">
    <span class="icon circular arrow_back cs-go-back" title="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "goBackTooltip") ||
                  (e != null ? i(e, "goBackTooltip") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "goBackTooltip",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 61 },
                      end: { line: 3, column: 78 },
                    },
                  })
                : t)
            ) +
            `"></span>
    <span class="cs-title cs-title-with-go-back" title="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 56 },
                      end: { line: 4, column: 65 },
                    },
                  })
                : t)
            ) +
            '">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 67 },
                      end: { line: 4, column: 76 },
                    },
                  })
                : t)
            ) +
            `</span>
  </div>
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "title") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(4, o, 0),
              inverse: n.noop,
              loc: {
                start: { line: 6, column: 0 },
                end: { line: 10, column: 0 },
              },
            }
          )) != null
            ? t
            : "";
        },
        4: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `  <div class="cs-header binf-panel-heading" tabindex="0">
    <span class="cs-title" title="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 8, column: 34 },
                      end: { line: 8, column: 43 },
                    },
                  })
                : t)
            ) +
            '">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 8, column: 45 },
                      end: { line: 8, column: 54 },
                    },
                  })
                : t)
            ) +
            `</span>
  </div>
`
          );
        },
        6: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            ' role="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "listRole") || (e != null ? i(e, "listRole") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "listRole",
                    hash: {},
                    loc: {
                      start: { line: 13, column: 51 },
                      end: { line: 13, column: 63 },
                    },
                  })
                : t)
            ) +
            '"'
          );
        },
        8: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            ' aria-label="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "listAria") || (e != null ? i(e, "listAria") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "listAria",
                    hash: {},
                    loc: {
                      start: { line: 13, column: 100 },
                      end: { line: 13, column: 112 },
                    },
                  })
                : t)
            ) +
            '"'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "back_button") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.program(3, o, 0),
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 10, column: 7 },
                },
              }
            )) != null
              ? t
              : "") +
            `
<div class="cs-content csui-normal-scrolling">
  <div class="cs-list-group"` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "listRole") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(6, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 13, column: 28 },
                  end: { line: 13, column: 71 },
                },
              }
            )) != null
              ? t
              : "") +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "listAria") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(8, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 13, column: 71 },
                  end: { line: 13, column: 120 },
                },
              }
            )) != null
              ? t
              : "") +
            `></div>
</div>
`
          );
        },
      });
      return v.registerPartial("csui_controls_list_impl_simplelist", m), m;
    }
  ),
  csui.define(
    "hbs!csui/controls/list/impl/simplelistitem",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "nameTitleAria") ||
                  (e != null ? i(e, "nameTitleAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "nameTitleAria",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 84 },
                      end: { line: 1, column: 101 },
                    },
                  })
                : t)
            ) +
            '"'
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<span class="csui-type-icon ' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 46 },
                      end: { line: 2, column: 54 },
                    },
                  })
                : t)
            ) +
            '"></span>'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '<div class="binf-list-group-item" title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 41 },
                      end: { line: 1, column: 49 },
                    },
                  })
                : i)
            ) +
            '" ' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "nameTitleAria") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 1, column: 51 },
                  end: { line: 1, column: 109 },
                },
              }
            )) != null
              ? t
              : "") +
            `>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "enableIcon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 0 },
                  end: { line: 2, column: 70 },
                },
              }
            )) != null
              ? t
              : "") +
            `
<div title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 12 },
                      end: { line: 3, column: 20 },
                    },
                  })
                : i)
            ) +
            '" class="list-item-title">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 46 },
                      end: { line: 3, column: 54 },
                    },
                  })
                : i)
            ) +
            `</div>
</div>
`
          );
        },
      });
      return v.registerPartial("csui_controls_list_impl_simplelistitem", m), m;
    }
  ),
  csui.define("css!csui/controls/list/impl/simplelist", [], function () {}),
  csui.define(
    "csui/controls/list/simplelist.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/listitem/listitemstandard.view",
      "csui/utils/node.links/node.links",
      "hbs!csui/controls/list/impl/simplelist",
      "hbs!csui/controls/list/impl/simplelistitem",
      "csui/utils/nodesprites",
      "i18n!csui/controls/list/impl/nls/lang",
      "css!csui/controls/list/impl/simplelist",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i) {
      "use strict";
      var s = m.ItemView.extend({
          constructor: function () {
            m.ItemView.prototype.constructor.apply(this, arguments);
          },
          tagName: "a",
          template: o,
          events: { click: "onClickItem" },
          serializeData: function () {
            var g = m.ItemView.prototype.serializeData.apply(this, arguments);
            if (g) {
              var f = g.icon;
              f && (g.icon = "csui-icon " + f);
            }
            return g;
          },
          onRender: function () {
            var g = this.model && this.model.get("id");
            g != null && this.$el.attr("href", a.getUrl(this.model));
            var f = t.findByNode(this.model) || {},
              u;
            f.attributes && (u = f.get("mimeType"));
            var p = u || this.model.get("type_name") || this.model.get("type");
            if (this.model.get("name") && p) {
              var x = r.str.sformat(i.nameTitleAria, this.model.get("name"), p);
              this.$el.attr("aria-label", x);
            }
            this.$el.attr("role", this.options.childRole);
          },
          onClickItem: function (g) {
            n.isControlClick(g) ||
              (g.preventDefault(),
              g.stopPropagation(),
              this.trigger("click:item"));
          },
          modelEvents: { change: "render" },
        }),
        l = m.CompositeView.extend({
          constructor: function (f) {
            if (
              (f || (f = {}),
              f.data || (f.data = {}),
              m.CompositeView.call(this, f),
              this.options.data && this.options.data.items)
            ) {
              if (!this.collection) {
                var u = v.Collection.extend({
                  model: v.Model.extend({ idAttribute: null }),
                });
                this.collection = new u();
              }
              this.collection.add(this.options.data.items);
            }
          },
          ui: {
            header: ".cs-header",
            headerGoBack: ".cs-header-with-go-back",
            back: ".cs-go-back",
            backTitle: ".cs-title-with-go-back",
          },
          events: {
            "click @ui.back": "onClickBack",
            "click @ui.backTitle": "onClickBack",
            "click @ui.headerGoBack": "onClickBack",
          },
          childEvents: {
            "click:item": "onClickItem",
            render: "_onChildRender",
          },
          className: "cs-simplelist binf-panel binf-panel-default",
          template: c,
          templateHelpers: function () {
            var g = this.options.data.back_button,
              f = this.options.data.title;
            return (
              g &&
                (f === void 0 || f.length === 0) &&
                (f = i.goBackTitleForEmptyTitle),
              {
                back_button: g,
                goBackTooltip: i.goBackTooltip,
                goBackAria: r.str.sformat(i.goBackAria, f),
                title: f,
                listAria: this.options.data.listAria,
                listRole: this.options.data.listRole,
              }
            );
          },
          childViewContainer: ".cs-list-group",
          childView: s,
          childViewOptions: function () {
            return {
              template: this.options.childViewTemplate,
              childRole: this.options.data.childRole,
            };
          },
          _onChildRender: function (g) {
            var f = g.$el;
            f.is("[data-csui-active]") &&
              f.addClass("binf-active").attr("aria-current", "page");
          },
          onDomRefresh: function () {
            var g = this.getSelectedItem();
            g &&
              !this._isScrolledIntoView(g.$el) &&
              this.setSelectedIndex(this.getSelectedIndex());
          },
          getSelectedItem: function () {
            var g = this.getSelectedIndex(),
              f = this.children.findByIndex(g);
            return f;
          },
          getSelectedIndex: function () {
            var g = this.$el.find("[data-csui-active]"),
              f = this.$el.find(".cs-list-group>a").index(g);
            return f;
          },
          setSelectedIndex: function (g) {
            if (!(isNaN(g) || g < 0)) {
              var f = r.str.sformat("div a:nth-child({0})", g + 1),
                u = this.$(f);
              this._setCssItemSelected(u), u.first().trigger("focus");
              var p = this.$(".cs-content");
              if (!this._isScrolledIntoView(u)) {
                var x = u.position().top,
                  S = x > 0 ? u.height() - p.height() + x : x;
                p.animate({ scrollTop: p.scrollTop() + S }, 500);
              }
            }
          },
          setSelectedElement: function (g) {
            var f = this.getItemIndex(g);
            f !== -1 && this.setSelectedIndex(f);
          },
          getItemIndex: function (g) {
            var f = -1;
            return (
              this.children.some(function (u, p) {
                if (u === g) return (f = p), !0;
              }),
              f
            );
          },
          selectedIndexElem: function (g) {
            if (isNaN(g) || g < 0) return null;
            var f = r.str.sformat("div a:nth-child({0})", g + 1),
              u = this.$(f);
            return y(u[0]);
          },
          selectNext: function () {
            var g = this.getSelectedIndex(),
              f = Math.min(g + 1, this.collection.models.length);
            this.setSelectedIndex(f);
          },
          selectPrevious: function () {
            var g = this.getSelectedIndex(),
              f = Math.max(g - 1, 0);
            this.setSelectedIndex(f);
          },
          onClickItem: function (g) {
            (g.cancelClick = !1),
              this.trigger("click:item", g),
              g.cancelClick === !1 && this._setCssItemSelected(g.$el);
          },
          onClickBack: function (g) {
            g.preventDefault(), g.stopPropagation(), this.clickBack();
          },
          clickBack: function () {
            this.trigger("click:back");
          },
          _setCssItemSelected: function (g) {
            if (g instanceof y) {
              var f = g.siblings("[data-csui-active]");
              f
                .removeClass("binf-active")
                .removeAttr("data-csui-active")
                .removeAttr("aria-current"),
                g
                  .addClass("binf-active")
                  .attr("data-csui-active", "")
                  .attr("aria-current", "page"),
                g.siblings().prop("tabindex", "-1");
            }
          },
          _isScrolledIntoView: function (g) {
            var f = this.$(".cs-content"),
              u = g.position().top,
              p = u + g.height();
            return u >= 0 && p <= f.height();
          },
        });
      return l;
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/simpletreelistitem",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '    <span class="csui-button-icon container-icon ' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 49 },
                      end: { line: 3, column: 57 },
                    },
                  })
                : t)
            ) +
            `"></span>
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return n.escapeExpression(
            ((t =
              (t = i(a, "tooltip") || (e != null ? i(e, "tooltip") : e)) != null
                ? t
                : n.hooks.helperMissing),
            typeof t == "function"
              ? t.call(e ?? (n.nullContext || {}), {
                  name: "tooltip",
                  hash: {},
                  loc: {
                    start: { line: 5, column: 46 },
                    end: { line: 5, column: 57 },
                  },
                })
              : t)
          );
        },
        5: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return n.escapeExpression(
            ((t =
              (t = i(a, "name") || (e != null ? i(e, "name") : e)) != null
                ? t
                : n.hooks.helperMissing),
            typeof t == "function"
              ? t.call(e ?? (n.nullContext || {}), {
                  name: "name",
                  hash: {},
                  loc: {
                    start: { line: 5, column: 65 },
                    end: { line: 5, column: 73 },
                  },
                })
              : t)
          );
        },
        7: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '    <span class="csui-button-icon dropdown-icon icon-expandArrowUp" title="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "collapseLabel") ||
                  (e != null ? i(e, "collapseLabel") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "collapseLabel",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 75 },
                      end: { line: 7, column: 92 },
                    },
                  })
                : t)
            ) +
            `"></span>
`
          );
        },
        9: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '    <span class="csui-button-icon dropdown-icon icon-expandArrowDown" title="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "expandLabel") ||
                  (e != null ? i(e, "expandLabel") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "expandLabel",
                    hash: {},
                    loc: {
                      start: { line: 9, column: 77 },
                      end: { line: 9, column: 92 },
                    },
                  })
                : t)
            ) +
            `"></span>
`
          );
        },
        11: function (n, e, a, c, o) {
          return " binf-hidden";
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '<div class="cs-header binf-panel-heading" tabindex="-1" aria-label="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "ariaName") || (e != null ? s(e, "ariaName") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "ariaName",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 68 },
                      end: { line: 1, column: 80 },
                    },
                  })
                : i)
            ) +
            `">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "icon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 2 },
                  end: { line: 4, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            '  <div class="cs-title" title="' +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "tooltip") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.program(5, o, 0),
                loc: {
                  start: { line: 5, column: 31 },
                  end: { line: 5, column: 80 },
                },
              }
            )) != null
              ? t
              : "") +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 5, column: 82 },
                      end: { line: 5, column: 90 },
                    },
                  })
                : i)
            ) +
            `</div>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "expand") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(7, o, 0),
                inverse: n.program(9, o, 0),
                loc: {
                  start: { line: 6, column: 2 },
                  end: { line: 10, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `</div>

<div class="cs-content csui-normal-scrolling ` +
            ((t = s(a, "unless").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "expand") : e,
              {
                name: "unless",
                hash: {},
                fn: n.program(11, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 13, column: 45 },
                  end: { line: 13, column: 86 },
                },
              }
            )) != null
              ? t
              : "") +
            " " +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "flatten") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(11, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 13, column: 87 },
                  end: { line: 13, column: 121 },
                },
              }
            )) != null
              ? t
              : "") +
            `">
  <div role="group" class="cs-list-group"></div>
</div>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_listitem_impl_simpletreelistitem", m),
        m
      );
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/simpletreelistleaf",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return n.escapeExpression(
            ((t =
              (t = i(a, "tooltip") || (e != null ? i(e, "tooltip") : e)) != null
                ? t
                : n.hooks.helperMissing),
            typeof t == "function"
              ? t.call(e ?? (n.nullContext || {}), {
                  name: "tooltip",
                  hash: {},
                  loc: {
                    start: { line: 3, column: 41 },
                    end: { line: 3, column: 52 },
                  },
                })
              : t)
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return n.escapeExpression(
            ((t =
              (t = i(a, "name") || (e != null ? i(e, "name") : e)) != null
                ? t
                : n.hooks.helperMissing),
            typeof t == "function"
              ? t.call(e ?? (n.nullContext || {}), {
                  name: "name",
                  hash: {},
                  loc: {
                    start: { line: 3, column: 60 },
                    end: { line: 3, column: 68 },
                  },
                })
              : t)
          );
        },
        5: function (n, e, a, c, o) {
          return '<div class="csui-tileview-more-btn"></div>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `<div class="binf-list-group-item">
  <span class="csui-type-icon ` +
            n.escapeExpression(
              ((i =
                (i = s(a, "icon") || (e != null ? s(e, "icon") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 30 },
                      end: { line: 2, column: 38 },
                    },
                  })
                : i)
            ) +
            `"></span>
  <div role="link" title="` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "tooltip") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.program(3, o, 0),
                loc: {
                  start: { line: 3, column: 26 },
                  end: { line: 3, column: 75 },
                },
              }
            )) != null
              ? t
              : "") +
            `"
        class="list-item-title" aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "itemLabel") || (e != null ? s(e, "itemLabel") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "itemLabel",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 44 },
                      end: { line: 4, column: 57 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 59 },
                      end: { line: 4, column: 67 },
                    },
                  })
                : i)
            ) +
            `</div>
  ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "showInlineActionBar") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 5, column: 2 },
                  end: { line: 5, column: 78 },
                },
              }
            )) != null
              ? t
              : "") +
            `
</div>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_listitem_impl_simpletreelistleaf", m),
        m
      );
    }
  ),
  csui.define("csui/controls/listitem/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/listitem/impl/nls/root/lang", {
    treeListExpandTooltip: "Expand",
    treeListCollapseTooltip: "Collapse",
    itemTitleLabel:
      "{0}, Press enter to open or right arrow to access other actions",
    typeAndNameAria: "{0} {1}",
  }),
  csui.define(
    "css!csui/controls/listitem/impl/simpletreelistitem",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/listitem/simpletreelistitem.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/list/emptylist.view",
      "csui/controls/node-type.icon/node-type.icon.view",
      "csui/utils/node.links/node.links",
      "csui/behaviors/default.action/default.action.behavior",
      "csui/controls/listitem/impl/inline.menu/inline.menu.view",
      "csui/controls/list/behaviors/list.item.keyboard.behavior",
      "csui/utils/accessibility",
      "hbs!csui/controls/listitem/impl/simpletreelistitem",
      "hbs!csui/controls/listitem/impl/simpletreelistleaf",
      "i18n!csui/controls/listitem/impl/nls/lang",
      "css!csui/controls/listitem/impl/simpletreelistitem",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l, g, f) {
      "use strict";
      var u = s.isAccessibleTable(),
        p = { none: -1, header: 0, list: 1 },
        x = m.ItemView.extend({
          tagName: "a",
          attributes: function () {
            return { role: "treeitem", tabindex: "-1" };
          },
          template: g,
          modelEvents: { change: "render" },
          ui: {
            titleName: ".list-item-title",
            moreActions: ".csui-tileview-more-btn",
          },
          events: function () {
            var T = { click: "onExecuteClick" };
            return (
              this.options.toolbarData &&
                !u &&
                (T = r.extend(T, {
                  mouseenter: "onShowInlineMenu",
                  mouseleave: "onHideInlineMenu",
                  wheel: "onWheelEvent",
                })),
              T
            );
          },
          behaviors: {
            DefaultAction: { behaviorClass: o },
            ListItemKeyboardBehavior: { behaviorClass: i },
          },
          onExecuteClick: function (T) {
            n.isControlClick(T) ||
              (T.stopPropagation(),
              T.preventDefault(),
              this.triggerMethod("click:item", { target: this.model }));
          },
          constructor: function (k) {
            k || (k = {}),
              (this.showInlineActionBar = !!k.toolbarData),
              this.showInlineActionBar &&
                ((this.triggers = {}),
                (this.tileViewToolbarItems = k.toolbarData.toolbaritems)),
              m.ItemView.prototype.constructor.apply(this, arguments),
              (this.context = k.context),
              this.listenTo(
                this,
                "doc:preview:generic:actions",
                this._highlightRow
              );
          },
          _highlightRow: function (T, k) {
            y("." + k).removeClass(k), this.$el.addClass(k);
          },
          cascadeDestroy: function () {
            return !1;
          },
          onShowInlineMenu: function (T) {
            var k = this.$el.find(".csui-tileview-more-btn");
            if (!(n.isHybrid() && (T || !k.length))) {
              T && T.preventDefault(),
                T && T.stopPropagation(),
                this.$el.addClass("csui-tile-with-more-btn"),
                (this._inlineMenuView = new t({
                  context: this.options.context,
                  originatingView: this._parent?._parent ?? this,
                  commands: this.defaultActionController.commands,
                  model: this.model,
                  tileViewToolbarItems: this.tileViewToolbarItems,
                }));
              var A = new m.Region({ el: k });
              A.show(this._inlineMenuView),
                this.listenTo(
                  this._inlineMenuView,
                  "before:execute:command",
                  function (M) {
                    this.trigger("before:execute:command", M);
                  }
                ),
                this.listenTo(
                  this._inlineMenuView,
                  "after:execute:command",
                  function () {
                    n.isHybrid() || this.onHideInlineMenu();
                  }
                );
            }
          },
          onHideInlineMenu: function (T) {
            if (T && n.isHybrid()) {
              this._inlineMenuView &&
                this._inlineMenuView.inlineMenuBarView &&
                this._inlineMenuView.inlineMenuBarView.closeDropdownMenuIfOpen();
              return;
            }
            if (
              (this.$el.removeClass("csui-tile-with-more-btn"),
              this._inlineMenuView)
            )
              return (
                this._inlineMenuView.destroy(),
                (this._inlineMenuView = void 0),
                !0
              );
          },
          onWheelEvent: function (T) {
            this._inlineMenuView &&
              this._inlineMenuView.closeDropdownMenuIfOpen();
          },
          onRender: function () {
            var T = this.model && this.model.get("id");
            if (
              (T != null && this.$el.attr("href", c.getUrl(this.model)),
              this.options.refetchNodeActions &&
                this.model &&
                (this.model.refetchNodeActions = !0),
              this._nodeIconView && this._nodeIconView.destroy(),
              (this._nodeIconView = new a({
                el: this.$(".csui-type-icon").get(0),
                node: this.model,
                size: this.options.iconSize,
              })),
              this.$el.attr(
                "aria-label",
                r.str.sformat(
                  f.typeAndNameAria,
                  this._nodeIconView.model.get("title"),
                  this.model.get("name")
                )
              ),
              this._nodeIconView.render(),
              this.model && this.options && this.options.checkDefaultAction)
            ) {
              var k =
                this.model.fetched === !1 ||
                !this.defaultActionController.hasAction(this.model);
              this.$el[k ? "addClass" : "removeClass"]("inactive");
            }
            n.isHybrid() && this.onShowInlineMenu();
          },
          onBeforeDestroy: function () {
            this._nodeIconView && this._nodeIconView.destroy(),
              this._inlineMenuView && this._inlineMenuView.destroy();
          },
        }),
        S = m.CompositeView.extend({
          className: "cs-simpletreelistitem binf-panel binf-panel-default",
          attributes: function () {
            return { role: "treeitem" };
          },
          template: l,
          templateHelpers: function () {
            return this._baseTemplateHelpers();
          },
          _baseTemplateHelpers: function () {
            return {
              icon: this.options.model && this.options.model.get("icon"),
              name: this.options.model && this.options.model.get("name"),
              expandLabel: f.treeListExpandTooltip,
              collapseLabel: f.treeListCollapseTooltip,
            };
          },
          ui: {
            header: ".cs-header",
            headerDropdownIcon: ".cs-header .dropdown-icon",
            content: "> .cs-content",
            contentList: "> .cs-content > .cs-list-group",
          },
          events: { keydown: "onKeyInView" },
          childEvents: {
            "click:item": "onClickItem",
            render: "_onChildRender",
            "before:execute:command": "onBeforeCommandExecution",
          },
          childViewContainer: ".cs-list-group",
          childView: x,
          childViewOptions: function () {
            return {
              text: this.options.emptyViewDefaultText,
              checkDefaultAction: this.options.checkDefaultAction,
              template: this.options.childViewTemplate,
              templateHelpers: this.options.childViewTemplateHelpers,
              toolbarData: this.options.toolbarData,
              context: this.options.context,
              iconSize: this.options.iconSize,
              refetchNodeActions: this.options.refetchNodeActions,
            };
          },
          emptyView: e,
          _onChildRender: function (T) {
            var k = T.$el;
            k.is("[data-csui-active]") && k.addClass("binf-active");
          },
          onBeforeCommandExecution: function (T) {
            this.trigger("before:execute:command", T);
          },
          constructor: function (k) {
            if (
              (k || (k = {}),
              k.model && k.model.childrenCollection
                ? (k.collection = k.model.childrenCollection)
                : (k.collection = new v.Collection()),
              k.templateHelpers)
            ) {
              var A = this,
                M = k.templateHelpers;
              k.templateHelpers = function () {
                return r.isFunction(M)
                  ? r.extend(A._baseTemplateHelpers(), M.call(A))
                  : r.extend(A._baseTemplateHelpers(), M);
              };
            }
            m.CompositeView.call(this, k);
          },
          onRender: function () {
            this.model &&
              this.model.get("flatten") === !0 &&
              (this.$el.addClass("flatten-tree"),
              this.ui.header.addClass("binf-hidden"),
              this.collection.length > 0 &&
                this.ui.content.removeClass("binf-hidden"),
              this.$el.removeAttr("role"),
              this.ui.contentList.removeAttr("role")),
              this.ui.header.on("click", r.bind(this.onClickHeader, this)),
              this._setDropdownIconClass(),
              (this.tabPosition = p.none),
              (this.selectedIndex = -1);
          },
          onClickHeader: function (T) {
            T.preventDefault(),
              T.stopPropagation(),
              this.ui.content.toggleClass("binf-hidden"),
              this._setDropdownIconClass(),
              this.$el.trigger("focus"),
              (this.tabPosition = p.header),
              (this.selectedIndex = -1),
              this.triggerMethod("click:tree:header", this);
          },
          _setDropdownIconClass: function () {
            this.ui.content.hasClass("binf-hidden")
              ? (this.ui.headerDropdownIcon.removeClass("icon-expandArrowUp"),
                this.ui.headerDropdownIcon.addClass("icon-expandArrowDown"),
                this.ui.headerDropdownIcon.attr(
                  "title",
                  f.treeListExpandTooltip
                ),
                this.model &&
                  this.model.get("flatten") !== !0 &&
                  this.$el.attr("aria-expanded", "false"))
              : (this.ui.headerDropdownIcon.addClass("icon-expandArrowUp"),
                this.ui.headerDropdownIcon.removeClass("icon-expandArrowDown"),
                this.ui.headerDropdownIcon.attr(
                  "title",
                  f.treeListCollapseTooltip
                ),
                this.model &&
                  this.model.get("flatten") !== !0 &&
                  this.$el.attr("aria-expanded", "true"));
          },
          onClickItem: function (T) {
            (T.cancelClick = !1),
              this.triggerMethod("click:tree:item", T),
              T.cancelClick === !1 &&
                (this._setCssItemSelected(T.$el), T.$el.trigger("focus")),
              (this.tabPosition = p.list),
              (this.selectedIndex = T._index ? T._index : -1);
          },
          _setCssItemSelected: function (T) {
            if (T instanceof y) {
              var k = T.siblings("[data-csui-active]");
              k.removeClass("binf-active").removeAttr("data-csui-active"),
                T.addClass("binf-active").attr("data-csui-active", ""),
                T.siblings().prop("tabindex", "-1");
            }
          },
          currentlyFocusedElement: function (T) {
            var k;
            if (
              T &&
              !this.ui.content.hasClass("binf-hidden") &&
              (T.keyCode === 34 ||
                T.keyCode === 35 ||
                T.keyCode === 38 ||
                (T.keyCode === 9 && T.shiftKey))
            ) {
              var A = this.collection.length - 1;
              if (((k = this.getElementByIndex(A)), k))
                return (this.tabPosition = p.list), (this.selectedIndex = A), k;
            }
            if (this.model && this.model.get("flatten") === !0) {
              if (this.collection.length > 0) {
                var M = this.selectedIndex > 0 ? this.selectedIndex : 0;
                if (
                  (T && T.keyCode === 38 && (M = this.collection.length - 1),
                  (k = this.getElementByIndex(M)),
                  k)
                )
                  return (
                    (this.tabPosition = p.list), (this.selectedIndex = M), k
                  );
              }
            } else if (
              !this.ui.content.hasClass("binf-hidden") &&
              this.selectedIndex >= 0 &&
              this.collection.length > 0
            ) {
              var N = this.selectedIndex;
              if (((k = this.getElementByIndex(N)), k))
                return (this.tabPosition = p.list), (this.selectedIndex = N), k;
            } else
              return (
                (this.tabPosition = p.header),
                (this.selectedIndex = -1),
                this.$el
              );
            (this.tabPosition = p.none), (this.selectedIndex = -1);
          },
          _moveTo: function (T, k, A) {
            T.preventDefault(),
              T.stopPropagation(),
              this.trigger("before:keyboard:change:focus"),
              A && A.prop("tabindex", "-1"),
              k.prop("tabindex", "0"),
              k.trigger("focus"),
              this.trigger("changed:focus"),
              this.trigger("after:keyboard:change:focus");
          },
          onKeyInView: function (T) {
            var k;
            switch (T.keyCode) {
              case 38:
                this.tabPosition === p.list && this.selectedIndex === 0
                  ? this.model && this.model.get("flatten") === !0
                    ? ((this.tabPosition = p.none), (this.selectedIndex = -1))
                    : ((k = this.getElementByIndex(this.selectedIndex)),
                      (this.tabPosition = p.header),
                      (this.selectedIndex = -1),
                      this._moveTo(T, this.$el, k))
                  : this.tabPosition === p.list &&
                    this.selectedIndex > 0 &&
                    ((k = this.getElementByIndex(this.selectedIndex)),
                    this._moveTo(T, this._selectPrevious(), k));
                break;
              case 40:
                this.ui.content.hasClass("binf-hidden") ||
                  (this.selectedIndex < this.collection.length - 1 &&
                    ((this.tabPosition = p.list),
                    (k = this.getElementByIndex(this.selectedIndex)),
                    this._moveTo(T, this._selectNext(), k)));
                break;
              case 33:
              case 34:
                (this.tabPosition = p.none), (this.selectedIndex = -1);
                break;
              case 13:
              case 32:
                this._clickTargetByKeyboard(T);
                break;
              case 37:
                if (
                  this.tabPosition === p.header &&
                  !this.ui.content.hasClass("binf-hidden")
                )
                  this._clickTargetByKeyboard(T);
                else if (this.tabPosition === p.list) {
                  var A = this.model && this.model.get("flatten");
                  A ||
                    ((k = this.getElementByIndex(this.selectedIndex)),
                    (this.tabPosition = p.header),
                    (this.selectedIndex = -1),
                    this._moveTo(T, this.$el, k));
                }
                break;
              case 39:
                this.tabPosition === p.header &&
                  (this.ui.content.hasClass("binf-hidden")
                    ? this._clickTargetByKeyboard(T)
                    : this.collection.length > 0 &&
                      ((this.tabPosition = p.list),
                      (this.selectedIndex = 0),
                      this._moveTo(
                        T,
                        this.getElementByIndex(this.selectedIndex),
                        this.$el
                      )));
                break;
            }
            return !0;
          },
          _clickTargetByKeyboard: function (T) {
            T.preventDefault(),
              T.stopPropagation(),
              y(T.target).find(".cs-header").trigger("click");
          },
          _selectNext: function () {
            return (
              this.selectedIndex < this.collection.length - 1 &&
                this.selectedIndex++,
              this.getElementByIndex(this.selectedIndex)
            );
          },
          _selectPrevious: function () {
            return (
              this.selectedIndex > 0 && this.selectedIndex--,
              this.getElementByIndex(this.selectedIndex)
            );
          },
          getElementByIndex: function (T) {
            if (isNaN(T) || T < 0) return null;
            var k = r.str.sformat("div a:nth-child({0})", T + 1),
              A = this.$(k);
            return y(A[0]);
          },
        });
      return S;
    }
  ),
  csui.define(
    "hbs!csui/controls/list/impl/simpletreelist",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<div class="cs-list-group"></div>
`;
        },
      });
      return v.registerPartial("csui_controls_list_impl_simpletreelist", m), m;
    }
  ),
  csui.define("css!csui/controls/list/impl/simpletreelist", [], function () {}),
  csui.define(
    "csui/controls/list/simpletreelist.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/utils/base",
      "csui/controls/listitem/simpletreelistitem.view",
      "csui/behaviors/default.action/default.action.behavior",
      "hbs!csui/controls/list/impl/simpletreelist",
      "css!csui/controls/list/impl/simpletreelist",
    ],
    function (r, y, v, m, n, e, a, c) {
      var o = m.CollectionView.extend({
        constructor: function (i) {
          i || (i = {}), m.CollectionView.call(this, i);
        },
        ui: {},
        events: {},
        childEvents: { "click:item": "onClickItem", render: "_onChildRender" },
        className: "cs-simpletreelist binf-panel binf-panel-default",
        template: c,
        childViewContainer: ".cs-list-group",
        childView: e,
        childViewOptions: function () {
          return { template: this.options.childViewTemplate };
        },
        _onChildRender: function (t) {
          var i = t.$el;
          i.is("[data-csui-active]") && i.addClass("binf-active");
        },
        onClickItem: function (t) {
          (t.cancelClick = !1),
            this.trigger("click:item", t),
            t.cancelClick === !1 && this._setCssItemSelected(t.$el);
        },
        _setCssItemSelected: function (t) {
          if (t instanceof y) {
            var i = t.siblings("[data-csui-active]");
            i.removeClass("binf-active").removeAttr("data-csui-active"),
              t.addClass("binf-active").attr("data-csui-active", "");
          }
        },
      });
      return o;
    }
  ),
  csui.define(
    "csui/controls/listitem/inline.menu.view",
    [
      "module",
      "csui/controls/listitem/impl/inline.menu/inline.menu.view",
      "css!csui/controls/listitem/impl/inline.menu/inline.menu",
    ],
    function (r, y) {
      var v = y.extend({
        constructor: function (n) {
          y.prototype.constructor.apply(this, arguments);
        },
      });
      return v;
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/listitemobject",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '  <img class="cs-icon" src="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 28 },
                      end: { line: 2, column: 36 },
                    },
                  })
                : t)
            ) +
            `" alt="">
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '    <div class="cs-key">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "key") || (e != null ? i(e, "key") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "key",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 24 },
                      end: { line: 7, column: 31 },
                    },
                  })
                : t)
            ) +
            `</div>
`
          );
        },
        5: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '      <span class="cs-size"> (' +
            n.escapeExpression(
              ((t =
                (t = i(a, "size") || (e != null ? i(e, "size") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "size",
                    hash: {},
                    loc: {
                      start: { line: 12, column: 30 },
                      end: { line: 12, column: 38 },
                    },
                  })
                : t)
            ) +
            `)</span>
`
          );
        },
        7: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `    <div class="cs-stage">
      <span class="cs-label">` +
            n.escapeExpression(
              (
                i(a, "csui-l10n") ||
                (e && i(e, "csui-l10n")) ||
                n.hooks.helperMissing
              ).call(
                e ?? (n.nullContext || {}),
                (t = e != null ? i(e, "stage") : e) != null ? i(t, "label") : t,
                {
                  name: "csui-l10n",
                  hash: {},
                  loc: {
                    start: { line: 17, column: 29 },
                    end: { line: 17, column: 54 },
                  },
                }
              )
            ) +
            `</span>
      <span class="cs-value">` +
            n.escapeExpression(
              n.lambda(
                (t = e != null ? i(e, "stage") : e) != null ? i(t, "value") : t,
                e
              )
            ) +
            `</span>
    </div>
`
          );
        },
        9: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '    <div class="cs-price ' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "priceClass") || (e != null ? i(e, "priceClass") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "priceClass",
                    hash: {},
                    loc: {
                      start: { line: 25, column: 25 },
                      end: { line: 25, column: 39 },
                    },
                  })
                : t)
            ) +
            '">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "price") || (e != null ? i(e, "price") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "price",
                    hash: {},
                    loc: {
                      start: { line: 25, column: 41 },
                      end: { line: 25, column: 50 },
                    },
                  })
                : t)
            ) +
            `</div>
    <div class="cs-currency">` +
            n.escapeExpression(
              (
                i(a, "csui-l10n") ||
                (e && i(e, "csui-l10n")) ||
                n.hooks.helperMissing
              ).call(
                e ?? (n.nullContext || {}),
                e != null ? i(e, "currency") : e,
                {
                  name: "csui-l10n",
                  hash: {},
                  loc: {
                    start: { line: 26, column: 29 },
                    end: { line: 26, column: 51 },
                  },
                }
              )
            ) +
            `</div>
`
          );
        },
        11: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `    <div class="cs-date">
      <div class="cs-label">` +
            n.escapeExpression(
              (
                i(a, "csui-l10n") ||
                (e && i(e, "csui-l10n")) ||
                n.hooks.helperMissing
              ).call(
                e ?? (n.nullContext || {}),
                (t = e != null ? i(e, "date") : e) != null ? i(t, "label") : t,
                {
                  name: "csui-l10n",
                  hash: {},
                  loc: {
                    start: { line: 30, column: 28 },
                    end: { line: 30, column: 52 },
                  },
                }
              )
            ) +
            `</div>
      <div class="cs-value ` +
            n.escapeExpression(
              n.lambda(
                (t = e != null ? i(e, "date") : e) != null ? i(t, "class") : t,
                e
              )
            ) +
            '">' +
            n.escapeExpression(
              n.lambda(
                (t = e != null ? i(e, "date") : e) != null ? i(t, "value") : t,
                e
              )
            ) +
            `</div>
    </div>
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "icon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 3, column: 7 },
                },
              }
            )) != null
              ? t
              : "") +
            `
<div class="cs-left">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "key") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 6, column: 2 },
                  end: { line: 8, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `  <div class="cs-title">
    <span class="cs-name">` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 26 },
                      end: { line: 10, column: 34 },
                    },
                  })
                : i)
            ) +
            `</span>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "size") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 11, column: 4 },
                  end: { line: 13, column: 11 },
                },
              }
            )) != null
              ? t
              : "") +
            `  </div>
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              (t = e != null ? s(e, "stage") : e) != null ? s(t, "value") : t,
              {
                name: "if",
                hash: {},
                fn: n.program(7, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 15, column: 2 },
                  end: { line: 20, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `</div>

<div class="cs-right">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "price") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(9, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 24, column: 2 },
                  end: { line: 27, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              (t = e != null ? s(e, "date") : e) != null ? s(t, "value") : t,
              {
                name: "if",
                hash: {},
                fn: n.program(11, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 28, column: 2 },
                  end: { line: 33, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            `</div>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_listitem_impl_listitemobject", m), m
      );
    }
  ),
  csui.define(
    "css!csui/controls/listitem/impl/listitemobject",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/listitem/listitemobject.view",
    [
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/lib/numeral",
      "csui/lib/moment",
      "csui/lib/handlebars",
      "csui/utils/base",
      "hbs!csui/controls/listitem/impl/listitemobject",
      "csui/utils/handlebars/l10n",
      "css!csui/controls/listitem/impl/listitemobject",
    ],
    function (r, y, v, m, n, e, a) {
      var c = y.ItemView.extend({
        constructor: function () {
          y.ItemView.apply(this, arguments),
            this.$el.on(
              "click",
              r.bind(function (t) {
                e.isControlClick(t) ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  this.triggerMethod("click:item"));
              }, this)
            );
        },
        className: "cs-item-object list-group-item binf-clearfix",
        template: a,
        templateHelpers: function () {
          return this._getObject(this.options.data || {});
        },
        _getObject: function (o) {
          return r.reduce(
            o,
            function (t, i, s) {
              return (
                typeof i == "string"
                  ? (i = this._getValue(i))
                  : typeof i == "object" &&
                    (i.expression !== void 0
                      ? (i = this._getValue(i))
                      : (i = this._getObject(i))),
                (t[s] = i),
                t
              );
            },
            {},
            this
          );
        },
        _getValue: function (o) {
          var t;
          return (
            typeof o != "string" && ((t = o), (o = o.expression)),
            (o = this._replacePlaceholders(o)),
            t &&
              ((o = this._applyValueRanges(o, t)),
              (o = this._applyValueMap(o, t))),
            o
          );
        },
        _replacePlaceholders: function (o) {
          for (var t = /{([^}]+)}/g, i, s, l; (i = t.exec(o)); )
            (s = i[1].split(".")),
              (l = this.model.attributes),
              r.find(s, function (g) {
                if (((l = l[g]), l == null)) return (l = ""), !0;
              }),
              (o =
                o.substring(0, i.index) +
                l +
                o.substring(i.index + i[0].length));
          return o;
        },
        _applyValueMap: function (o, t) {
          var i = t.valueMap;
          return i && ((o = i[o]), o == null && (o = i["*"])), o;
        },
        _applyValueRanges: function (o, t) {
          var i = t.valueRanges;
          if (i) {
            var s;
            t.type === "Date"
              ? (s = function (g) {
                  return e.parseDate(g);
                })
              : (s = function (g) {
                  return v(g).value();
                }),
              (o = s(o)),
              r.find(i, function (l) {
                var g = l.greaterOrEqual;
                if (g !== void 0 && ((g = s(g)), g > o)) return !1;
                var f = l.lessThan;
                return f !== void 0 && ((f = s(f)), f <= o)
                  ? !1
                  : ((o = l.value), !0);
              });
          }
          return o;
        },
      });
      return c;
    }
  ),
  csui.define(
    "hbs!csui/controls/listitem/impl/listitemstateful",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<span class="csui-type-icon ' +
            n.escapeExpression(
              ((t =
                (t = i(a, "icon") || (e != null ? i(e, "icon") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "icon",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 52 },
                      end: { line: 2, column: 60 },
                    },
                  })
                : t)
            ) +
            '"></span>'
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `<div class="SLIIcon">
      ` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "enableIcon") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 6 },
                  end: { line: 2, column: 76 },
                },
              }
            )) != null
              ? t
              : "") +
            `
</div>
<div class="SLIRightDiv">
  <div class="SLITitleDiv">
    <div class="SLITitle">
      <span title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 19 },
                      end: { line: 7, column: 27 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "name") || (e != null ? s(e, "name") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "name",
                    hash: {},
                    loc: {
                      start: { line: 7, column: 29 },
                      end: { line: 7, column: 37 },
                    },
                  })
                : i)
            ) +
            `</span>
    </div>
    <div class="SLIDescription">
      <span title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "description") ||
                  (e != null ? s(e, "description") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "description",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 19 },
                      end: { line: 10, column: 34 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "description") ||
                  (e != null ? s(e, "description") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "description",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 36 },
                      end: { line: 10, column: 51 },
                    },
                  })
                : i)
            ) +
            `</span>
    </div>
  </div>
  <div class="SLIInfo SLIInfo` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "infoState") || (e != null ? s(e, "infoState") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "infoState",
                    hash: {},
                    loc: {
                      start: { line: 13, column: 29 },
                      end: { line: 13, column: 42 },
                    },
                  })
                : i)
            ) +
            `">
    <span title="` +
            n.escapeExpression(
              ((i =
                (i = s(a, "info") || (e != null ? s(e, "info") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "info",
                    hash: {},
                    loc: {
                      start: { line: 14, column: 17 },
                      end: { line: 14, column: 25 },
                    },
                  })
                : i)
            ) +
            '">' +
            n.escapeExpression(
              ((i =
                (i = s(a, "info") || (e != null ? s(e, "info") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "info",
                    hash: {},
                    loc: {
                      start: { line: 14, column: 27 },
                      end: { line: 14, column: 35 },
                    },
                  })
                : i)
            ) +
            `</span>
  </div>
</div>
`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_listitem_impl_listitemstateful", m), m
      );
    }
  ),
  csui.define(
    "css!csui/controls/listitem/impl/listitemstateful",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/listitem/listitemstateful.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/controls/listitem/listitemstandard.view",
      "hbs!csui/controls/listitem/impl/listitemstateful",
      "css!csui/controls/listitem/impl/listitemstateful",
    ],
    function (r, y, v, m, n) {
      var e = m.extend({
        className: "SLI binf-list-group-item",
        template: n,
        constructor: function () {
          m.apply(this, arguments);
        },
      });
      return e;
    }
  ),
  csui.define(
    "hbs!csui/controls/table/cells/search/search.cell/impl/search.cell.item",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<div class="csui-search-cell-value" role="listitem" title="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "value") || (e != null ? i(e, "value") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "value",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 59 },
                      end: { line: 1, column: 68 },
                    },
                  })
                : t)
            ) +
            '" aria-label="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "value") || (e != null ? i(e, "value") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "value",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 82 },
                      end: { line: 1, column: 91 },
                    },
                  })
                : t)
            ) +
            '">' +
            n.escapeExpression(
              ((t =
                (t = i(a, "value") || (e != null ? i(e, "value") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "value",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 93 },
                      end: { line: 1, column: 102 },
                    },
                  })
                : t)
            ) +
            "</div>"
          );
        },
      });
      return (
        v.registerPartial(
          "csui_controls_table_cells_search_search.cell_impl_search.cell.item",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "csui/controls/table/cells/search/search.cell/search.cell.popover.item.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "hbs!csui/controls/table/cells/search/search.cell/impl/search.cell.item",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = v.ItemView.extend({
        className: "csui-search-cell-item",
        tagName: "li",
        template: m,
        templateHelpers: function () {
          return {
            value:
              this.model &&
              this.model.has("value_formatted") &&
              this.model.get("value_formatted"),
          };
        },
        attributes: { role: "none" },
        events: { "keydown .csui-search-cell-value": "accessibility" },
        constructor: function (a) {
          a || (a = {}),
            (this.options = a),
            v.ItemView.prototype.constructor.call(this, a);
        },
        accessibility: function (e) {
          var a;
          switch (
            (e.preventDefault(),
            e.stopPropagation(),
            this.$el.find(".csui-search-cell-value").prop("tabindex", -1),
            e.keyCode)
          ) {
            case 38:
              this.$el.prev().length
                ? this.$el
                    .prev()
                    .find(".csui-search-cell-value")
                    .prop("tabindex", 0)
                    .trigger("focus")
                : ((a = this.options.parentView.$el.find(
                    ".csui-search-cell-value"
                  )),
                  y(a[a.length - 1])
                    .prop("tabindex", 0)
                    .trigger("focus"));
              break;
            case 40:
              this.$el.next().length
                ? this.$el
                    .next()
                    .find(".csui-search-cell-value")
                    .prop("tabindex", 0)
                    .trigger("focus")
                : ((a = this.options.parentView.$el.find(
                    ".csui-search-cell-value"
                  )),
                  y(a[0]).prop("tabindex", 0).trigger("focus"));
              break;
            case 27:
              var c = this.options.originatingView.popoverEl.closest(
                ".csui-search-metadata-value"
              );
              c.length
                ? c.trigger("focus")
                : this.options.originatingView.$el.trigger("focus"),
                this.options.originatingView.closePopover();
              break;
          }
        },
      });
      return n;
    }
  ),
  csui.define(
    "hbs!csui/controls/table/cells/search/search.cell/impl/search.cell.list",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return '<ul class="csui-search-cell-list csui-normal-scrolling" role="list"></ul>';
        },
      });
      return (
        v.registerPartial(
          "csui_controls_table_cells_search_search.cell_impl_search.cell.list",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "csui/controls/table/cells/search/search.cell/search.cell.popover.list.view",
    [
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/controls/table/cells/search/search.cell/search.cell.popover.item.view",
      "hbs!csui/controls/table/cells/search/search.cell/impl/search.cell.list",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = y.CompositeView.extend({
        className: "csui-search-cell-collection",
        template: m,
        childViewContainer: ".csui-search-cell-list",
        childView: v,
        childViewOptions: function () {
          return {
            collection: this.options.collection,
            originatingView: this.options.originatingView,
            parentView: this,
          };
        },
        constructor: function (a) {
          a || (a = {}),
            (this.options = a),
            (this.collection = a.collection),
            (this.originatingView = a.originatingView),
            y.CompositeView.prototype.constructor.apply(this, arguments);
        },
      });
      return n;
    }
  ),
  csui.define(
    "hbs!csui/controls/toolbar/impl/toolitem.custom",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<div class='custom-view-region'></div>
`;
        },
      });
      return (
        v.registerPartial("csui_controls_toolbar_impl_toolitem.custom", m), m
      );
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitem.custom.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/utils/commandhelper",
      "csui/controls/mixins/layoutview.events.propagation/layoutview.events.propagation.mixin",
      "hbs!csui/controls/toolbar/impl/toolitem.custom",
      "csui/utils/log",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v, m, n, e, a) {
      "use strict";
      a = a(r.id);
      var c = v.LayoutView.extend({
        tagName: "li",
        attributes: function () {
          var o = { id: y.uniqueId(this.model.get("signature")) };
          return (
            this.options.role
              ? (o.role = this.options.role)
              : (o.role = "none"),
            o
          );
        },
        template: e,
        regions: { customViewRegion: ".custom-view-region" },
        ui: { customViewDiv: ".custom-view-region" },
        events: { keydown: "onKeyInView", click: "_clickToolItem" },
        destroy: function () {
          return (
            (!this.customViewRegion || !this.customViewRegion.currentView) &&
              this.customView &&
              this.customView.destroy(),
            v.LayoutView.prototype.destroy.apply(this, arguments)
          );
        },
        constructor: function (t) {
          t || (t = {}),
            v.LayoutView.prototype.constructor.apply(this, arguments),
            this.propagateEventsToRegions();
        },
        className: function () {
          var o = this.model.get("className") || "";
          return o;
        },
        _disable: function () {
          (this._wasFocusable =
            this._wasFocusable ||
            this.ui.customViewDiv.hasClass("csui-acc-focusable")),
            this.$el.addClass("binf-hidden"),
            this.ui.customViewDiv.removeClass("csui-acc-focusable");
        },
        _enable: function () {
          this.$el.removeClass("binf-hidden"),
            this._wasFocusable &&
              this.ui.customViewDiv.addClass("csui-acc-focusable");
        },
        onRender: function () {
          var o = this.model.get("viewClass");
          if (o) {
            var t,
              i = this.model.status,
              s = this.model.get("commandData");
            s && s.useContainer === !0
              ? (t = i && i.container)
              : (t = i && m.getJustOneNode(i));
            var l = this.options.context || (i && i.context),
              g = {
                model: t,
                context: l,
                status: i,
                toolbarCommandController: this.options.toolbarCommandController,
                toolbarItemsMask: this.options.toolbarItemsMask,
                originatingView: this.options.originatingView,
                blockingParentView: this.options.blockingParentView,
                useIconsForDarkBackground:
                  this.options.useIconsForDarkBackground,
              };
            if (
              (s && s.viewOptions && y.extend(g, s.viewOptions),
              (this.customView = new o(g)),
              this.customView.enabled)
            )
              try {
                this.customView.enabled()
                  ? this.customViewRegion.show(this.customView)
                  : this._disable();
              } catch (f) {
                a.warn(
                  `Rendering an custom toolitem view failed.
{0}`,
                  f.stack
                ) && console.warn(a.last);
              }
            else this.customViewRegion.show(this.customView);
          } else this._disable();
        },
        onShow: function () {
          y.each(this.regionManager._regions, function (o) {
            o.currentView && o.currentView.triggerMethod("show");
          });
        },
        onAfterShow: function () {
          y.each(this.regionManager._regions, function (o) {
            o.currentView && o.currentView.triggerMethod("after:show");
          });
        },
        _clickToolItem: function (o) {
          this.customView.options.customClickHandler ||
            (o.preventDefault(),
            this.ui.customViewDiv.prop("tabindex", "0"),
            this.ui.customViewDiv.trigger("focus"),
            this._closeDropdownToggleOnClick(),
            this.customView.el !== o.target &&
              this.customView.$el.find(o.target).length === 0 &&
              this.customView.$el.trigger("click"));
        },
        _closeDropdownToggleOnClick: function () {
          var o = this.$el.closest("li.binf-dropdown.binf-open"),
            t = o.find(".binf-dropdown-toggle");
          t.binf_dropdown("toggle");
        },
        onKeyInView: function (o) {
          (o.keyCode === 32 || o.keyCode === 13) && this._clickToolItem(o);
        },
        onUpdateEnabled: function () {
          var o = this.model.get("viewClass");
          o &&
            this.customView.enabled &&
            (this.customView.enabled()
              ? (this._enable(),
                this.customViewRegion.currentView ||
                  this.customViewRegion.show(this.customView))
              : this._disable());
        },
      });
      return y.extend(c.prototype, n), c;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitems.view",
    [
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/controls/toolbar/toolitem.view",
      "csui/controls/toolbar/flyout.toolitem.view",
      "csui/controls/toolbar/toolitem.custom.view",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = y.CollectionView.extend({
        tagName: "ul",
        attributes: function () {
          var a = {};
          return (
            this.options.role
              ? (a.role = this.options.role)
              : this.options.noMenuRoles
              ? (a.role = "none")
              : (a.role = "menu"),
            a
          );
        },
        getChildView: function (a) {
          var c = a.get("customView"),
            o = a.get("viewClass");
          if (c === !0 && o && o.prototype instanceof r.View) return n;
          if (c) {
            if (c === !0) return a.get("commandData").customView || v;
            if (c.prototype instanceof r.View) return c;
          }
          return a.get("flyout") ? m : v;
        },
        childViewOptions: function (a) {
          return {
            toolbarCommandController: this.options.toolbarCommandController,
            toolbarItemsMask: this.options.toolbarItemsMask,
            originatingView: this.options.originatingView,
            blockingParentView: this.options.blockingParentView,
            noMenuRoles: this.options.noMenuRoles,
            useIconsForDarkBackground: this.options.useIconsForDarkBackground,
          };
        },
        collectionEvents: { remain: "_updateCustomViews" },
        constructor: function (c) {
          y.CollectionView.prototype.constructor.apply(this, arguments);
        },
        _updateCustomViews: function () {
          this.children
            .filter(function (a) {
              return a instanceof n;
            })
            .forEach(function (a) {
              a.triggerMethod("update:enabled");
            });
        },
      });
      return e;
    }
  ),
  csui.define(
    "hbs!csui/controls/toolbar/impl/lazy.loading.template",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<li role="none" class="csui-loading-parent-wrapper binf-disabled">
  <span class="csui-loading-dots-wrapper">
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
    <span class="csui-loading-dot"></span>
  </span>
</li>`;
        },
      });
      return (
        v.registerPartial(
          "csui_controls_toolbar_impl_lazy.loading.template",
          m
        ),
        m
      );
    }
  ),
  csui.define("css!csui/controls/toolbar/impl/toolbar", [], function () {}),
  csui.define(
    "csui/controls/toolbar/toolbar.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/controls/toolbar/toolitem.view",
      "csui/controls/toolbar/flyout.toolitem.view",
      "csui/controls/toolbar/toolitems.view",
      "csui/models/nodes",
      "hbs!csui/controls/toolbar/impl/lazy.loading.template",
      "csui/utils/base",
      "csui/utils/high.contrast/detector!",
      "csui/controls/mixins/dynamic.toolitems/reopening.toolbar.mixin",
      "csui/controls/globalmessage/globalmessage",
      "csui/controls/icons.v2",
      "css!csui/controls/toolbar/impl/toolbar",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l) {
      "use strict";
      var g = e.extend({
        parentScrollElement: ".csui-metadata-myattachments",
        className: function () {
          var f = "binf-nav binf-nav-pills ",
            u = "csui-align-left";
          return (
            this.options.hAlign &&
              (this.options.hAlign === "right"
                ? (u = "csui-align-right")
                : this.options.hAlign === "none" && (u = "")),
            "csui-toolbar " + f + u
          );
        },
        events: { keydown: "onKeyInView" },
        childViewOptions: function (f) {
          return r.extend(e.prototype.childViewOptions.call(this, f), {
            collection: f.toolItems,
            command:
              this.collection.commands &&
              this.collection.commands.findWhere({
                signature: f.get("signature"),
              }),
            useIconsForDarkBackground: this._useIconsForDarkBackground,
          });
        },
        constructor: function f(u) {
          u || (u = {}),
            (this.parentScrollElement =
              u.parentScrollElement || this.parentScrollElement),
            f.__super__.constructor.apply(this, arguments),
            this.options.onRefilterReopen && this.makeReopeningToolbar(),
            u.el && y(u.el).addClass(r.result(this, "className")),
            (this._useIconsForDarkBackground =
              (u.useIconsForDarkBackground && t !== 2) || t === 1),
            this.listenTo(this, "dom:refresh", this._onDomRefresh)
              .listenTo(this, "before:execute:command", this._setBlocked)
              .listenTo(this, "after:execute:command", this._setUnblocked),
            u.keyboardNavigationEnabled &&
              ((this._keyboardNavigationEnabled = !0),
              this.listenTo(this.collection, "remove", function () {
                this._accFocusedToolbarItemIndex > this.collection.length - 1 &&
                  (this._accFocusedToolbarItemIndex =
                    this.collection.length - 1);
              }),
              this.listenTo(this.collection, "reset", function () {
                this._accFocusedToolbarItemIndex =
                  this.collection.length > 0 ? 0 : -1;
              }),
              (this._accFocusedToolbarItemIndex =
                this.collection.length > 0 ? 0 : -1)),
            (this.fetchingNonPromotedActions = !1),
            y(window).on(
              "resize." + this.cid,
              this._handleWindowResize.bind(this)
            );
        },
        filter: function (f) {
          return f;
        },
        _onDomRefresh: function () {
          this._adjusting || this._adjustToFit();
        },
        onBeforeRender: function () {
          this._unwrapDropDown();
        },
        onRender: function () {
          this._toolbarBlocked &&
            !this._isSingleCommandBlocked &&
            this.$el.addClass("binf-disabled");
        },
        onDestroy: function () {
          y(window).off("resize." + this.cid);
        },
        _getFocusedElementByIndex: function (f) {
          var u = f + 1,
            p = this.$el.find(">li:nth-child(" + u + ")>a.csui-acc-focusable");
          return p;
        },
        getVisibleToolitemsCount: function () {
          var f = this.$el.find(">li>a.csui-acc-focusable");
          return f.length;
        },
        currentlyFocusedElement: function () {
          return this._keyboardNavigationEnabled &&
            this._accFocusedToolbarItemIndex >= 0
            ? this._getFocusedElementByIndex(this._accFocusedToolbarItemIndex)
            : y();
        },
        setFocusByIndex: function (f) {
          this._getFocusedElementByIndex(f).trigger("focus");
        },
        letRightmostItemGetFocus: function () {
          this._accFocusedToolbarItemIndex = this.collection.length - 1;
        },
        closeDropdown: function () {
          this.children.call("closeDropdown");
        },
        closeSubMenu: function () {
          this.children.call("closeSubMenu");
        },
        onKeyInView: function (f) {
          if (this._keyboardNavigationEnabled && this.collection.length !== 0)
            switch (f.keyCode) {
              case 37:
                f.stopPropagation(),
                  this._accFocusedToolbarItemIndex > 0
                    ? ((this._accFocusedToolbarItemIndex =
                        this._accFocusedToolbarItemIndex - 1),
                      this.triggerMethod("changed:focus"))
                    : ((this._accFocusedToolbarItemIndex = 0),
                      this.triggerMethod("focusout", { direction: "left" }));
                break;
              case 39:
                f.stopPropagation(),
                  this._accFocusedToolbarItemIndex < this.collection.length - 1
                    ? ((this._accFocusedToolbarItemIndex =
                        this._accFocusedToolbarItemIndex + 1),
                      this.triggerMethod("changed:focus"))
                    : ((this._accFocusedToolbarItemIndex =
                        this.collection.length - 1),
                      this.triggerMethod("focusout", { direction: "right" }));
                break;
            }
        },
        _handleWindowResize: function () {
          if (
            (this._handleWindowResizeTimeout &&
              clearTimeout(this._handleWindowResizeTimeout),
            !this.isDestroyed)
          ) {
            var f = this;
            (this._handleWindowResizeTimeout = setTimeout(function () {
              f._handleWindowResizeTimeout = void 0;
              var u =
                f.options.originatingView === void 0
                  ? !0
                  : f.options.originatingView.isDisplayed;
              !f.isDestroyed && u && f.render();
            }, 100)),
              this._adjustToFit();
          }
        },
        _setBlocked: function (f) {
          var u = this,
            p = f.command,
            x = f.status && f.status.toolItemView,
            S = p && p.get("selfBlockOnly") && x ? x.$el.find("a") : this.$el;
          p.get("allowMultipleInstances") ||
            ((this._blockedTimer = setTimeout(function () {
              u._toolbarBlocked === !1 && S.removeClass("binf-disabled"),
                (u._blockedTimer = void 0);
            }, 500)),
            (this._toolbarBlocked = !0),
            (this._isSingleCommandBlocked = !S.is(this.$el)),
            S.addClass("binf-disabled"));
        },
        _setUnblocked: function (f) {
          this._toolbarBlocked = !1;
          var u = f.command,
            p = f.status && f.status.toolItemView,
            x = u && u.get("selfBlockOnly") && p ? p.$el.find("a") : this.$el;
          if (
            !this._blockedTimer &&
            (x.removeClass("binf-disabled"), f && f.cancelled)
          ) {
            var S = this.$el.find(
                "[data-csui-command=" + f.commandSignature.toLowerCase() + "] a"
              ),
              T = S.length ? S.closest("ul.csui-more-dropdown-menu") : {};
            T.length
              ? T.siblings("a.binf-dropdown-toggle").trigger("focus")
              : S.trigger("focus");
          }
        },
        _adjustToFit: function () {
          if (this._isActive !== !1) {
            this.trigger("before:adjust");
            var f = r.filter(
              this.children.toArray(),
              (u) => u instanceof m || u instanceof n
            );
            (f = r.sortBy(f, "cid")),
              r.isUndefined(this.options.maxItemsShown)
                ? this._makeItemsFocusable(f)
                : (this._unwrapDropDown(),
                  (this._adjusting = !0),
                  this.el.classList.add("csui-measuring"),
                  this.children.length > 0 &&
                    (this._doAdjustToFit(f),
                    this.options.lazyActions && this._loadLazyActions()),
                  this.el.classList.remove("csui-measuring"),
                  (this._adjusting = !1)),
              this.trigger("after:adjust");
          }
        },
        _makeItemsFocusable: function (f) {
          r.each(
            f,
            function (u, p) {
              r.isFunction(u.makeFocusable) && u.makeFocusable();
            },
            this
          );
        },
        _doAdjustToFit: function (f) {
          var u = Math.round(this.$el.offset().top),
            p = Math.round(
              this.el.getBoundingClientRect()
                ? this.el.getBoundingClientRect().width
                : this.$el.width()
            ),
            x = this.$el.parents(".csui-table-rowselection-toolbar-view")
              ? this.$el
                  .parents(".csui-table-rowselection-toolbar-view")
                  .find(".csui-condensed-header-toggle-container")
                  .width()
              : 0;
          (p = o.isIE11() ? p - x : p),
            (this.options.toolbarItemViewOptions = {
              toolItemCounter: 0,
              pEl: void 0,
              pIsSeparator: void 0,
              ppEl: void 0,
              dropDownMenuEl: void 0,
              currentRight: 0,
              rightMost: p,
              firstOffsetY: u,
              index: 0,
              separatorView: void 0,
            }),
            f.length > 1 || this.options.maxItemsShown === 0
              ? r.each(
                  f,
                  function (S, T) {
                    (this.options.toolbarItemViewOptions.index = T),
                      this._wrapToolItemView(S);
                  },
                  this
                )
              : this._makeItemsFocusable(f);
        },
        _loadLazyActions: function () {
          var f = !0,
            u = !0,
            p = [],
            x;
          if (
            (this.collection.status.nodes instanceof a
              ? (x = this.collection.status.nodes)
              : this.collection.status.nodes instanceof v.Collection
              ? (x = new a(this.collection.status.nodes.models))
              : r.isArray(this.collection.status.nodes)
              ? (x = new a(this.collection.status.nodes))
              : (x = new a()),
            x.connector ||
              (x.connector = this.collection.status.collection.connector),
            x.each(function (k) {
              (f = f && k.get("csuiLazyActionsRetrieved")),
                (u = u && k.isLocallyCreated),
                (p = p.length ? p : k.nonPromotedActionCommands);
            }),
            (x.nonPromotedActionCommands = p),
            (x.lazyActionsRetrieved = f),
            !f &&
              !u &&
              p.length &&
              (this.fetchingNonPromotedActions || this._renderLazyActions(x),
              !this.$el.find(".csui-loading-parent-wrapper").length &&
                this.fetchingNonPromotedActions))
          ) {
            if (this.$el.find(".csui-more-dropdown-menu").length)
              this.$el
                .find(".binf-dropdown.csui-more-dropdown-wrapper")
                .addClass("csui-toolbar-hide-child");
            else if (this.options.toolbarItemViewOptions) {
              var S = 46,
                T = this.options.toolbarItemViewOptions.currentRight + 10 + S;
              (this.options.toolbarItemViewOptions.toolItemCounter ===
                this.options.maxItemsShown ||
                T > this.options.toolbarItemViewOptions.rightMost) &&
                this.$el.find("li:last").addClass("csui-toolbar-hide-child");
            }
            this.$el.append(c);
          }
        },
        _wrapToolItemView: function (f) {
          var u = f.model.isSeparator();
          if (
            (u || this.options.toolbarItemViewOptions.toolItemCounter++,
            this.options.toolbarItemViewOptions.dropDownMenuEl)
          )
            (u &&
              this.options.toolbarItemViewOptions.index + 1 ===
                this.children.length) ||
              (f.$el.attr("role", "none"),
              f.$el
                .find(
                  ".csui-flyout-arrow .csui-button-icon.icon-expandArrowDown"
                )
                .addClass("binf-hidden"),
              f.$el
                .find(".csui-toolitem.csui-flyout-arrow")
                .removeClass("csui-flyout-arrow"),
              r.isFunction(f.renderTextOnly) && f.renderTextOnly(!0),
              this.options.toolbarItemViewOptions.dropDownMenuEl.append(f.$el),
              f.triggerMethod("dom:refresh"));
          else {
            if (u) this.options.toolbarItemViewOptions.separatorView = f;
            else {
              var p = Math.round(o.getOffset(f.$el).top),
                x = Math.round(
                  f.$el[0].getBoundingClientRect()
                    ? f.$el[0].getBoundingClientRect().width
                    : f.$el.width()
                );
              (this.options.toolbarItemViewOptions.currentRight =
                this.options.toolbarItemViewOptions.currentRight +
                parseInt(x, 10)),
                p !== this.options.toolbarItemViewOptions.firstOffsetY ||
                this.options.toolbarItemViewOptions.currentRight >
                  this.options.toolbarItemViewOptions.rightMost ||
                this.options.toolbarItemViewOptions.toolItemCounter >
                  this.options.maxItemsShown
                  ? this.options.toolbarItemViewOptions.pIsSeparator
                    ? this.options.toolbarItemViewOptions.ppEl &&
                      (this.options.toolbarItemViewOptions.ppEl.$el.attr(
                        "role",
                        "none"
                      ),
                      (this.options.toolbarItemViewOptions.dropDownMenuEl =
                        this._wrapWithDropDown(
                          this.options.toolbarItemViewOptions.ppEl,
                          f
                        )),
                      this.options.toolbarItemViewOptions.dropDownMenuEl
                        .children()
                        .first()
                        .after(this.options.toolbarItemViewOptions.pEl.$el))
                    : this.options.toolbarItemViewOptions.pEl
                    ? (this.options.toolbarItemViewOptions.pEl.$el.attr(
                        "role",
                        "none"
                      ),
                      (this.options.toolbarItemViewOptions.dropDownMenuEl =
                        this._wrapWithDropDown(
                          this.options.toolbarItemViewOptions.pEl,
                          f
                        )))
                    : (this.options.toolbarItemViewOptions.dropDownMenuEl =
                        this._wrapWithDropDown(f, f))
                  : r.isFunction(f.makeFocusable) && f.makeFocusable();
            }
            (this.options.toolbarItemViewOptions.ppEl =
              this.options.toolbarItemViewOptions.pEl),
              (this.options.toolbarItemViewOptions.pEl = f),
              (this.options.toolbarItemViewOptions.pIsSeparator = u);
          }
        },
        _wrapWithDropDown: function (f, u) {
          r.isFunction(f.renderTextOnly) && f.renderTextOnly(!0);
          var p = f.$el;
          p.wrap(
            '<li role="none" class="binf-dropdown csui-wrapper csui-more-dropdown-wrapper"><ul class="binf-dropdown-menu csui-more-dropdown-menu" role="menu"></ul></li>'
          );
          var x = this._makeDropDown(),
            S = this.$("li.csui-wrapper");
          S.appendTo(S.parent()), S.prepend(x);
          var T = S.find("> ul.binf-dropdown-menu");
          this.options.dropDownTarget &&
            (y(this.options.dropDownTarget).empty().append(T),
            T.on("click", () => {
              T.parent().hasClass("binf-open") &&
                S.find("> a.binf-dropdown-toggle").trigger("focus");
            }),
            T.on("keydown", (A) => {
              A.which === 9 &&
                T.parent().hasClass("binf-open") &&
                S.find("> a.binf-dropdown-toggle").trigger("click");
            })),
            p
              .find(".csui-flyout-arrow .csui-button-icon.icon-expandArrowDown")
              .addClass("binf-hidden"),
            p
              .find(".csui-toolitem.csui-flyout-arrow.csui-acc-focusable")
              .removeClass("csui-flyout-arrow"),
            r.isFunction(u.renderTextOnly) && u.renderTextOnly(!0),
            u.$el
              .find(".csui-flyout-arrow .csui-button-icon.icon-expandArrowDown")
              .addClass("binf-hidden"),
            u.$el
              .find(".csui-toolitem.csui-flyout-arrow")
              .removeClass("csui-flyout-arrow"),
            T.append(u.$el),
            u.triggerMethod("dom:refresh"),
            p.trigger("dom:refresh");
          var k = this;
          return (
            this.$el.off("show.binf.dropdown." + this.cid).on(
              "show.binf.dropdown." + this.cid,
              r.bind(function () {
                var A = T.closest(k.parentScrollElement);
                if (A && A.length > 0) {
                  var M = A.height(),
                    N =
                      parseInt(A.css("margin-top")) +
                      parseInt(A.css("margin-bottom"));
                  if (T.height() + N > M) {
                    var R = M - N;
                    T.css({
                      overflow: "hidden",
                      padding: "0",
                      "max-height": R + "px",
                    });
                  }
                }
              }, k)
            ),
            this.$el
              .off("binf.dropdown.after.show." + this.cid)
              .on("binf.dropdown.after.show." + this.cid, function (A) {
                T.addClass("csui-normal-scrolling"),
                  o.alignDropDownMenu({
                    targetEl: y(A.target),
                    dropdownMenu: T,
                  }),
                  k.trigger("toolbar.show"),
                  k.el.querySelector(
                    ".binf-dropdown-menu.csui-more-dropdown-menu"
                  ) &&
                    document
                      .querySelector(
                        ".csui-navbar.binf-navbar.binf-navbar-default, .smart-app-header-wrapper otc-header-bar"
                      )
                      ?.classList.add("csui-zero-zindex"),
                  (o.isAppleMobile() ||
                    (o.isMacintosh() && T.hasClass("csui-submenu-active"))) &&
                    T.removeClass("csui-submenu-active");
              }),
            this.$el
              .off("hidden.binf.dropdown." + this.cid)
              .on("hidden.binf.dropdown." + this.cid, function () {
                document
                  .querySelector(
                    ".csui-navbar.binf-navbar.binf-navbar-default, .smart-app-header-wrapper otc-header-bar"
                  )
                  ?.classList.remove("csui-zero-zindex");
              }),
            T
          );
        },
        _unwrapDropDown: function () {
          var f = this.$("li.csui-wrapper"),
            u = (
              this.options.dropDownTarget ? y(this.options.dropDownTarget) : f
            ).find("> ul.binf-dropdown-menu"),
            p = this.$el.find(".csui-loading-parent-wrapper"),
            x = document.querySelector(
              ".csui-navbar.binf-navbar.binf-navbar-default, .smart-app-header-wrapper otc-header-bar"
            );
          if (
            (x?.classList.contains("csui-zero-zindex") &&
              x.classList.remove("csui-zero-zindex"),
            p && p.remove(),
            u.length > 0)
          ) {
            var S = u.children("li");
            S.each(function (k, A) {
              f.before(A), y(A).trigger("dom:refresh");
            }),
              f.remove(),
              this.options.dropDownTarget &&
                y(this.options.dropDownTarget).empty().removeClass("binf-open");
          }
          var T = this.$el.find(".csui-flyout.binf-dropdown");
          T.length &&
            r.each(T, function (k) {
              var A = y(k).find("ul li");
              A.length >= 1 &&
                (y(k).find("> .csui-toolitem").addClass("csui-flyout-arrow"),
                y(k)
                  .find(
                    ".csui-flyout-arrow .csui-button-icon.icon-expandArrowDown"
                  )
                  .removeClass("binf-hidden"));
            }),
            this.children.forEach(function (k) {
              r.isFunction(k.restoreRenderState) && k.restoreRenderState();
            });
        },
        _makeDropDown: function () {
          var f = "binf-dropdown-toggle csui-acc-focusable",
            u =
              '<a href="#" role=' +
              (this.options.noMenuRoles ? '"button"' : '"menuitem"') +
              ' class="' +
              f +
              ' " data-binf-toggle="dropdown" aria-expanded="false" aria-haspopup="true" ondragstart="return false;"';
          return (
            this.options.dropDownTarget &&
              (u += ` data-binf-target="${this.options.dropDownTarget}"`),
            this.options.dropDownText
              ? (u +=
                  ' title="' +
                  this.options.dropDownText +
                  '" aria-label="' +
                  this.options.dropDownAria +
                  '">')
              : (u += ">"),
            this.options.dropDownIconName
              ? (u += l.getIconByNameWithOptions({
                  iconName: this.options.dropDownIconName,
                  theme: this._useIconsForDarkBackground ? "dark" : "",
                  states: !0,
                }))
              : this.options.dropDownIcon
              ? (u += '<span class="' + this.options.dropDownIcon + '"></span>')
              : this.options.dropDownText && (u += this.options.dropDownText),
            (u += "</a>"),
            u
          );
        },
        appendLazyActions: function () {
          var f = this,
            u = r.sortBy(f.children.toArray(), "cid"),
            p = 0,
            x = r.filter(f.collection.models, function (S) {
              return S;
            });
          r.each(x, function (S) {
            var T = u[p],
              k = S.get("name");
            if (T && T.model.get("name") === k)
              S.get("flyout") &&
                S.toolItems.length !== T.model.toolItems.length &&
                T.collection.reset(S.toolItems.models),
                p++;
            else if (f.options.toolbarItemViewOptions) {
              f.options.toolbarItemViewOptions.index++;
              var A = S.get("flyout") ? n : m,
                M = f.addChild(S, A, f.options.toolbarItemViewOptions.index);
              f._wrapToolItemView(M), T && f.removeChildView(T), p++;
            }
          });
        },
        startLazyLoading: function () {
          this.options.toolbarItemViewOptions.dropDownMenuEl.append(c);
        },
        stopLazyLoading: function () {
          var f = this.$el.find(".csui-loading-parent-wrapper");
          f.remove();
        },
        _renderLazyActions: function (f) {
          if (!f.lazyActionsRetrieved) {
            var u = this;
            (this.fetchingNonPromotedActions = !0),
              f
                .setEnabledLazyActionCommands(!0)
                .done(
                  r.bind(function () {
                    u.fetchingNonPromotedActions = !1;
                    var p = u.$el.find(".csui-loading-parent-wrapper");
                    p.animate("width: 0", 300, function () {
                      p.remove(),
                        u.$el
                          .find(".csui-toolbar-hide-child")
                          .removeClass("csui-toolbar-hide-child"),
                        (u.collection.silentFetch = !0),
                        u.collection.refilter(),
                        u.appendLazyActions(),
                        u.triggerMethod("dom:refresh"),
                        u.trigger("render:lazy:actions");
                    });
                  }),
                  this
                )
                .fail(function (p) {
                  u.fetchingNonPromotedActions = !1;
                  var x = u.$el.find(".csui-loading-parent-wrapper"),
                    S = new o.Error(p);
                  x.length && x.remove(), s.showMessage("error", S.message);
                });
          }
        },
        setActive: function (f) {
          this._isActive = f;
        },
      });
      return i.mixin(g.prototype), g;
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolbar.command.controller",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/utils/commandhelper",
      "csui/utils/commands",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      m = m(r.id);
      function a(c) {
        c || (c = {}),
          (this.commands = c.commands || e),
          (this.nameAttribute = c.nameAttribute);
      }
      return (
        y.extend(a.prototype, v.Events, {
          toolitemClicked: function (c, o) {
            var t = c.get("signature"),
              i = this.commands.get(t),
              s = c.get("name"),
              l = c.get("type"),
              g = y.extend({}, o.data, c.get("commandData"));
            o = y.defaults({ toolItem: c, data: g }, o);
            var f = {
              status: o,
              commandSignature: t,
              addableType: l,
              addableTypeName: s,
              command: i,
            };
            if (c.get("execute") === !1 || !i.execute)
              return (
                (f.execute = !1),
                (f.toolItem = c),
                this.trigger("before:execute:command", f),
                this.trigger("click:toolitem:action", f),
                this.trigger("after:execute:command", f)
              );
            this.trigger("before:execute:command", f),
              v.trigger("closeToggleAction");
            var u = this;
            u.commandSignature = t;
            var p = {
                context: o.context,
                addableType: l,
                addableTypeName: s,
                nameAttribute: u.nameAttribute,
              },
              x;
            try {
              if (!i) throw new Error('Command "' + t + '" not found.');
              x = i.execute(o, p);
            } catch (S) {
              return (
                m.warn(
                  `Executing the command "{0}" failed.
{1}`,
                  i.get("signature"),
                  S.stack
                ) && console.warn(m.last),
                (f.error = S),
                this.trigger("after:execute:command", f)
              );
            }
            return x
              ? n
                  .handleExecutionResults(x, {
                    command: i,
                    suppressSuccessMessage:
                      o.forwardToTable || o.suppressSuccessMessage,
                    suppressFailMessage: o.suppressFailMessage,
                  })
                  .done(function (S) {
                    S &&
                      !S[0].cancelled &&
                      ((f.newNodes = S), u.trigger("after:execute:command", f));
                  })
                  .fail(function (S) {
                    S === void 0 &&
                      (S = {
                        cancelled: !0,
                        command: i,
                        status: o,
                        commandSignature: u.commandSignature,
                      }),
                      u.trigger("after:execute:command", S);
                  })
              : this.trigger("after:execute:command", f);
          },
        }),
        (a.extend = v.View.extend),
        a
      );
    }
  ),
  csui.define(
    "csui/controls/toolbar/toolitems.mask",
    ["csui/lib/underscore", "csui/lib/backbone"],
    function (r, y) {
      "use strict";
      function v(m, n) {
        n || (n = {}),
          (m =
            n.normalize !== !1 ? this._normalizeMask(m) : this._cloneMask(m)),
          (this.blacklist = m.blacklist),
          (this.whitelist = m.whitelist),
          this.storeMask();
      }
      return (
        r.extend(v.prototype, y.Events, {
          toJSON: function () {
            return {
              blacklist: r.clone(this.blacklist),
              whitelist: r.clone(this.whitelist),
            };
          },
          clone: function () {
            return new this.constructor(this);
          },
          clearMask: function (m) {
            var n = this.blacklist.length || this.whitelist.length;
            return (
              this.blacklist.splice(0),
              this.whitelist.splice(0),
              n && !(m && m.silent) && this.trigger("update", this),
              n
            );
          },
          extendMask: function (m, n) {
            n || (n = {}), n.normalize !== !1 && (m = this._normalizeMask(m));
            var e = this._extendList(this.blacklist, m.blacklist);
            return (
              (e = this._extendList(this.whitelist, m.whitelist) || e),
              e && !n.silent && this.trigger("update", this),
              e
            );
          },
          resetMask: function (m, n) {
            n || (n = {}), n.normalize !== !1 && (m = this._normalizeMask(m));
            var e = this._replaceList(this.blacklist, m.blacklist);
            return (
              (e = this._replaceList(this.whitelist, m.whitelist) || e),
              e && !n.silent && this.trigger("update", this),
              e
            );
          },
          storeMask: function () {
            (this.originalBlacklist = r.clone(this.blacklist)),
              (this.originalWhitelist = r.clone(this.whitelist));
          },
          restoreMask: function (m) {
            return (
              m || (m = {}),
              this.resetMask(
                {
                  blacklist: this.originalBlacklist,
                  whitelist: this.originalWhitelist,
                },
                { silent: m.silent, normalize: !1 }
              )
            );
          },
          restoreAndResetMask: function (m, n) {
            n || (n = {}), n.normalize !== !1 && (m = this._normalizeMask(m));
            var e = this.restoreMask({ silent: !0 });
            return (
              (e = this.extendMask(m, { silent: !0, normalize: !1 }) || e),
              e && !n.silent && this.trigger("update", this),
              e
            );
          },
          maskItems: function (m) {
            return (
              m instanceof y.Collection && (m = m.models),
              r.filter(m, this.passItem, this)
            );
          },
          passItem: function (m) {
            return (
              m instanceof y.Model && (m = m.attributes),
              !this._containsRule(m, this.blacklist) &&
                (!this.whitelist.length ||
                  this._containsRule(m, this.whitelist))
            );
          },
          _containsRule: function (m, n) {
            return r.any(n, r.bind(this._matchesRule, this, m));
          },
          _matchesRule: function (m, n) {
            if (m.signature != n.signature) return !1;
            var e = m.commandData || {};
            return r.all(n.commandData, function (a, c) {
              return a == e[c];
            });
          },
          _extendList: function (m, n) {
            return r.reduce(
              n,
              function (e, a) {
                return (
                  r.any(m, function (c) {
                    return r.isEqual(a, c);
                  }) || (m.push(a), (e = !0)),
                  e
                );
              },
              !1
            );
          },
          _reduceList: function (m, n) {
            var e = r
              .chain(m)
              .map(function (a, c) {
                return (
                  !r.any(n, function (o) {
                    return r.isEqual(a, o);
                  }) && c + 1
                );
              })
              .compact()
              .value();
            return (
              r.each(e, function (a, c) {
                m.splice(a - c - 1, 1);
              }),
              !!e.length
            );
          },
          _replaceList: function (m, n) {
            var e = this._reduceList(m, n);
            return this._extendList(m, n) || e;
          },
          _normalizeMask: function (m) {
            return (
              m || (m = {}),
              {
                blacklist: this._normalizeList(m.blacklist),
                whitelist: this._normalizeList(m.whitelist),
              }
            );
          },
          _normalizeList: function (m) {
            return m ? r.map(m, this._normalizeRule, this) : [];
          },
          _cloneMask: function (m) {
            return (
              m || (m = {}),
              {
                blacklist: this._cloneList(m.blacklist),
                whitelist: this._cloneList(m.whitelist),
              }
            );
          },
          _cloneList: function (m) {
            return m ? m.slice() : [];
          },
          _normalizeRule: function (m) {
            return r.isObject(m) ? m : { signature: m };
          },
        }),
        (v.extend = y.Model.extend),
        v
      );
    }
  ),
  csui.define(
    "csui/controls/toolbar/delayed.toolbar.view",
    [
      "csui/controls/toolbar/toolbar.view",
      "csui/controls/toolbar/toolbar.state.behavior",
    ],
    function (r, y) {
      "use strict";
      var v = r.extend({
        behaviors: {
          ToolbarState: {
            behaviorClass: y,
            delayedActions: function () {
              return this.options.delayedActions;
            },
          },
        },
        constructor: function (n) {
          r.prototype.constructor.apply(this, arguments);
        },
      });
      return v;
    }
  ),
  csui.define("csui/controls/fileupload/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/fileupload/impl/nls/root/lang", {
    uploadCounts: "Uploading {0} files",
    uploadCountsItems: "Uploading {0} items",
    uploadCount: "Uploading 1 file",
    uploadCountFolder: "Uploading 1 folder",
    OneFileSuccessfullyUploaded: "{0} file was successfully uploaded.",
    AllFilesSuccessfullyUploaded: "{0} files were successfully uploaded.",
    over500Items: "Cannot add more than 500 items.",
    invalidFileList: "Invalid file list",
    fileNameQueryFailed: "File name query failed - reason unknown.",
    MessageVersionAdded: "Version added",
    pageLeavingWarning:
      "If you leave the page now, pending files will not be uploaded.",
    InvalidFile:
      "{0} was rejected: the file type is not supported or the file size is zero bytes.",
    warnTitle: "Add version",
    warnMessage:
      "{0} added the latest version on {1}. Make sure you upload the version with the latest changes.",
    warnMessageRecent:
      "{0} added the latest version {1}. Make sure you upload the version with the latest changes.",
    AddButtonLabel: "Add",
    cancelButtonLabel: "Cancel",
    CommandTitleUpload: "Upload documents",
    UploadNotAllowed:
      "Unable to upload. Please try again when the current operation is finished",
    uploadErrorMsg: "The file size is too large [ max size: {0} MB ]",
  }),
  csui.define(
    "csui/controls/fileupload/impl/upload.controller",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/utils/base",
      "csui/utils/taskqueue",
      "csui/utils/contexts/factories/task.queue.factory",
      "csui/utils/contexts/factories/connector",
      "csui/models/version",
      "csui/utils/url",
      "csui/utils/commandhelper",
      "i18n!csui/controls/fileupload/impl/nls/lang",
      "csui/lib/underscore.deepExtend",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s) {
      "use strict";
      var l = r.config();
      y.defaults(l, { parallelism: 3 });
      function g(f) {
        f || (f = {}), (this.options = f);
        var u = this.options.context;
        (this.connector = u.getObject(c)),
          (this.container = f.container ? f.container.clone() : null),
          (this.originatingView = f.originatingView ? f.originatingView : null),
          f.context
            ? (this.queue = f.context.getCollection(a, {
                options: {
                  parallelism: f.parallelism || l.parallelism,
                  permanent: !0,
                },
              }))
            : (this.queue = new e({
                parallelism: f.parallelism || l.parallelism,
              })),
          (this.chunkQueue = new e({
            parallelism: f.parallelism || l.parallelism,
          }));
      }
      return (
        y.extend(g.prototype, m.Events, {
          scheduleFileForUpload: function (f) {
            this.queue.pending.add({
              worker: y.bind(this._uploadFile, this, f),
            });
          },
          _uploadFile: function (f) {
            var u = f.container || this.container,
              p,
              x = f.deferred,
              S = f.node,
              T = f.version || f.get("newVersion"),
              k = f.get("file"),
              A = f.get("extended_data"),
              M;
            if (
              (y.isArray(S.get("versions")) &&
                S.attributes &&
                S.attributes.versions &&
                S.attributes.versions.push(T.attributes),
              T)
            )
              S.has("id") || S.set("id", f.get("id")),
                T instanceof o || (T = new o({ id: S.get("id") })),
                (M = {}),
                f.get("add_major_version") &&
                  (M.add_major_version = f.get("add_major_version")),
                f.get("description") && (M.description = f.get("description"));
            else {
              if (!u) throw new Error("Container node is missing.");
              M = {
                name: f.get("newName") || k.name,
                type:
                  S.get("type") !== void 0
                    ? S.get("type")
                    : f.get("type") !== void 0
                    ? f.get("type")
                    : 144,
                parent_id: u.get("id"),
                advanced_versioning: !!u.get("versions_control_advanced"),
              };
            }
            var N = n.getMetadataLanguageInfo().enabled;
            if (
              (N &&
                f.get("multilingual_provided") &&
                y.extend(M, { name_multilingual: f.get("name_multilingual") }),
              A && y.deepExtend(M, A),
              u &&
                u.get("type") === 136 &&
                f.get("order_new") &&
                (M.order_new = f.get("order_new")),
              (M.type === 144 || T) &&
                ((M.external_modify_date = f.get("file").lastModifiedDate),
                M.external_modify_date === void 0 &&
                  (M.external_modify_date = new Date(
                    f.get("file").lastModified
                  ))),
              !S.connector)
            ) {
              if (!u)
                throw new Error(
                  "Either node or container have to be connected."
                );
              u.connector.assignTo(S);
            }
            T && !T.connector && S.connector.assignTo(T);
            var R = this;
            if (
              ((l.largeFileSettings =
                this.originatingView &&
                this.originatingView.largeFileSettingsModel &&
                this.originatingView.largeFileSettingsModel.get(
                  "largeFileSettings"
                )),
              k.skipUpload)
            ) {
              const J = `{"error": "${k.errorMessage}" }`,
                ae = new n.RequestErrorMessage({
                  status: 400,
                  statusText: "Bad Request",
                  responseText: J,
                });
              return x.reject(f, ae), f.promise();
            }
            if (
              l.largeFileSettings &&
              l.largeFileSettings.is_enabled &&
              k.size > l.largeFileSettings.min_size
            )
              if (k.size < l.largeFileSettings.max_size)
                (p = this.getUploadId(k)
                  .done(function (J) {
                    var ae = f.get("state");
                    ae !== "aborted" && ae !== "stopped"
                      ? R.uploadAllParts(J, k, f)
                          .done(function () {
                            var q = f.get("state");
                            q !== "aborted" && q !== "stopped"
                              ? R.completeUpload(f)
                                  .done(function () {
                                    var Q = f.get("state");
                                    if (Q !== "aborted" && Q !== "stopped")
                                      if (S.get("id")) {
                                        var ne = S.get("id");
                                        R.createVersion(ne, f)
                                          .done(function (oe) {
                                            var d =
                                                oe.results.data.versions
                                                  .file_size,
                                              h = n.formatFileSize(d);
                                            T.set("file_size_formatted", h),
                                              (T.isLocallyCreated = !0),
                                              oe.results &&
                                                oe.results.data &&
                                                oe.results.data.properties &&
                                                oe.results.data.versions &&
                                                y.extend(
                                                  T.attributes,
                                                  oe.results.data.properties,
                                                  oe.results.data.versions
                                                ),
                                              R.fetchNode(oe, S)
                                                .done(function () {
                                                  return (
                                                    x.resolve(f), x.promise()
                                                  );
                                                })
                                                .catch(function (b) {
                                                  var _ =
                                                    new n.RequestErrorMessage(
                                                      b
                                                    );
                                                  x.reject(f, _);
                                                });
                                          })
                                          .catch(function (oe) {
                                            R.handleCatch(oe, f);
                                          });
                                      } else
                                        R.createNode(k, f, M)
                                          .done(function (oe) {
                                            R.fetchNode(oe, S)
                                              .done(function () {
                                                return (
                                                  x.resolve(f), x.promise()
                                                );
                                              })
                                              .catch(function (d) {
                                                var h =
                                                  new n.RequestErrorMessage(d);
                                                x.reject(f, h);
                                              });
                                          })
                                          .catch(function (oe) {
                                            R.handleCatch(oe, f);
                                          });
                                    else x.reject(f);
                                  })
                                  .catch(function (Q) {
                                    R.handleCatch(Q, f);
                                  })
                              : x.reject(f);
                          })
                          .catch(function (q) {
                            for (var Q, ne = 0; ne < q.length; ne++)
                              q[ne].length > 1 && (Q = q[ne][1]);
                            R.handleCatch(Q, f);
                          })
                      : x.reject(f);
                  })
                  .fail(function (J) {
                    R.handleCatch(J, f);
                  })),
                  x.fail(function (J, ae) {
                    ae || p.abort();
                  });
              else {
                var K = 1048576,
                  G = Math.floor(l.largeFileSettings.max_size / K),
                  $ = y.str.sformat(s.uploadErrorMsg, G),
                  z = '{"error":"' + $ + '"}',
                  ue = new n.RequestErrorMessage({
                    status: 400,
                    statusText: "Bad Request",
                    responseText: z,
                  });
                x.reject(f, ue);
              }
            else
              (p = (T || S).save(M, { data: M, files: { file: k } })),
                p
                  .progress(function (J, ae) {
                    x.notify(f, J);
                  })
                  .then(function (J, ae, q) {
                    if (S)
                      return (
                        (S = R.checkAndGetIfExistingNode(S)),
                        S.get("parent_id") === f?.uploadContainer?.get("id") ||
                        T instanceof o
                          ? (S.has("csuiThumbnailImageUrl") &&
                              S.unset("csuiThumbnailImageUrl", { silent: !0 }),
                            S.fetch({
                              collection: S.collection,
                              refreshCache: !0,
                            }))
                          : x.resolve(f)
                      );
                  })
                  .done(function (J, ae, q) {
                    //CSCCustom-start CSUI0002: send request to server to update category, if this is a version update
                    var fileUpload = f;
                    var container = fileUpload.container || this.container;
                    // let fileName = fileUpload.attributes.name;
                    // let fileNameFormatted = fileName.replace(/[^0-9a-zA-Z]/g, '_');
                    console.log('fileUpload',fileUpload);
                    console.log('container',container);
                    if(container && container.attributes && container.attributes.securityInformation)
                    { 
                      let info = container.attributes.securityInformation.filter(function(obj) {
                        // return obj.name == fileNameFormatted || obj.name == fileUpload.attributes.name;
                        return obj.name == fileUpload.attributes.name; 
                      }); 
                      info = info[0]; //needed when using filter instead of find (find is not supported on IE)
                      let xhr = new XMLHttpRequest();
                      let queryString = 'id='+fileUpload.node.attributes.id
                          +'&SecurityClassification='+encodeURIComponent(info.securityClassification)
                          +'&SensitivityRating='+encodeURIComponent(info.sensitivityRating)
                          +'&userName='+'Admin';
                      let queryBaseUrl = '/otcsdocs/node/securityinformation';
                      let queryUrl = queryBaseUrl+"?"+queryString;
                      xhr.open("POST", queryUrl, false); // "false" makes the request synchronous
                      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                      xhr.send(null);
  
                      //update password protection file node id
                      if(info.bufferID) {
                          let xhr2 = new XMLHttpRequest();
                          let queryUrl2 = '/otcsdocs/node/securityinformation/updatebuffer';
                          xhr2.open("POST", queryUrl2, false); // "false" makes the request synchronous
                          //xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                          xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                          xhr2.send(JSON.stringify({
                              CSID : fileUpload.node.attributes.id,
                              UserID : fileUpload.node.attributes.owner_user_id,
                              Version: fileUpload.node.attributes.version_number,
                              BufferID: info.bufferID
  
                          }));
                      }
                    }
                    //CSCCustom end
                    x.resolve(f);
                  })
                  .fail(function (J, ae, q) {
                    var Q = new n.RequestErrorMessage(J);
                    x.reject(f, Q);
                  }),
                x.fail(function (J, ae) {
                  ae || (p.abort(), x.reject(f));
                });
            return f.promise();
          },
          checkAndGetIfExistingNode: function (f) {
            var u = f.get("id");
            if (!u) return f;
            var p = f.collection && f.collection.findWhere({ id: u });
            return p || f;
          },
          getUploadId: function (f) {
            var u = this.connector.getConnectionUrl().getApiBase("v2"),
              p = { file_size: f.size, file_name: f.name, mime_type: f.type },
              x = {
                url: t.combine(u, "multipart"),
                type: "POST",
                data: p,
                contentType: "application/x-www-form-urlencoded",
              };
            return this.connector.makeAjaxCall(x);
          },
          uploadAllParts: function (f, u, p) {
            var x = f.results.data,
              S = this,
              T = x.part_size,
              k = p.get("largeFile");
            if (
              ((k.uploadKey = x.upload_key),
              (k.maxRetries = x.max_retries),
              (k.fileChunks.total = x.num_parts),
              p.set({ state: "processing" }),
              (k.state = "processing"),
              !k.slicedFiles)
            )
              for (var A = 0; A < x.num_parts; A++)
                k.fileChunks.slicedFiles[A] = u.slice(
                  A * T,
                  (A + 1) * T,
                  "application/octet-stream"
                );
            p.set("largeFile", k), (p.attributes.upload_key = x.upload_key);
            var M = S.uploadChunk(p);
            return v.whenAll.apply(v, M);
          },
          uploadChunk: function (f) {
            var u = f.get("largeFile"),
              p = this,
              x =
                this.connector.getConnectionUrl().getApiBase("v2") +
                "multipart/" +
                u.uploadKey,
              S = u.fileChunks.slicedFiles.map(function (T, k) {
                var A = new FormData(),
                  M = v.Deferred();
                A.append("part_content", T);
                var N = x + "/" + (k + 1),
                  R = {
                    url: N,
                    method: "POST",
                    data: A,
                    processData: !1,
                    contentType: !1,
                  };
                return (
                  p.chunkQueue.pending.add({
                    worker: y.bind(
                      function () {
                        var K = p.connector
                            .makeAjaxCall(R)
                            .done(function () {
                              var $ = f.get("count");
                              (u = f.get("largeFile", u)),
                                f.set({ count: T.size + $ }),
                                f.set("largeFile", u),
                                M.resolve(T);
                            })
                            .catch(function ($) {
                              M.reject(T, $);
                            }),
                          G = f.get("state");
                        if (G !== "aborted" && G !== "stopped")
                          return M.promise();
                        M.reject(f);
                      },
                      p,
                      R
                    ),
                  }),
                  M.promise(S)
                );
              });
            return S;
          },
          completeUpload: function (f) {
            var u = f.get("largeFile"),
              p =
                this.connector.getConnectionUrl().getApiBase("v2") +
                "multipart/" +
                u.uploadKey,
              x = {
                url: p,
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
              };
            return this.connector.makeAjaxCall(x);
          },
          flattenObject: function (f, u, p) {
            for (const [x, S] of Object.entries(f))
              Array.isArray(S) && S.every((T) => T && typeof T == "object")
                ? S.forEach((T, k) => {
                    p.push(x + "_" + (k + 1));
                    for (const [A, M] of Object.entries(T)) {
                      let N = A.replace("x", k + 1);
                      u[N] = M;
                    }
                  })
                : S &&
                  typeof S == "object" &&
                  Object.keys(S).every((T) => T.includes(x))
                ? this.flattenObject(S, u, p)
                : (u[x] = S);
            return u;
          },
          createNode: function (f, u, p) {
            var x = u.get("largeFile"),
              S = this.connector.getConnectionUrl().getApiBase("v2") + "nodes";
            p.upload_key = x.uploadKey;
            let T = {},
              k = [];
            if (p.roles?.categories) {
              let M = this.flattenObject(p.roles.categories, T, k);
              p.roles.categories = Object.fromEntries(
                Object.entries(M).filter(([N]) => !k.includes(N))
              );
            }
            var A = {
              url: S,
              type: "POST",
              data: p,
              contentType: "application/x-www-form-urlencoded",
            };
            return this.connector.makeAjaxCall(A);
          },
          createVersion: function (f, u) {
            var p = u.get("largeFile"),
              x =
                this.connector.getConnectionUrl().getApiBase("v2") +
                "nodes/" +
                f +
                "/versions",
              S = { upload_key: p.uploadKey },
              T = {
                url: x,
                type: "POST",
                data: S,
                contentType: "application/x-www-form-urlencoded",
              };
            return this.connector.makeAjaxCall(T);
          },
          fetchNode: function (f, u) {
            if (u)
              return (
                (u = this.checkAndGetIfExistingNode(u)),
                (u.attributes = f.results.data.properties),
                f.results.data.versions &&
                  u.set("versions", f.results.data.versions),
                u.fetch({ collection: u.collection, refreshCache: !0 })
              );
          },
          handleCatch: function (f, u) {
            var p = u.deferred;
            if (f.status >= 400) {
              var x = new n.RequestErrorMessage(f);
              p.reject(u, x);
            } else (this.isRetry = !0), this.retryUpload(u);
          },
          retryUpload: function (f) {
            var u = f.deferred,
              p = navigator.onLine,
              x = this;
            if (p) {
              this.isRetry &&
                ((this.isRetry = !1),
                (this.queue = new e({
                  parallelism: this.options.parallelism || l.parallelism,
                })));
              var T = f.get("file"),
                k = T.size,
                A = f.get("largeFile"),
                M = {
                  size: k,
                  uploadKey: "",
                  state: "pending",
                  fileChunks: { slicedFiles: [], total: 0 },
                };
              (M.retryCount = A.retryCount),
                (M.maxRetries = A.maxRetries),
                f.set({ count: 0 }),
                (f.attributes.upload_key = ""),
                f.set("largeFile", M);
              var N = f.get("state");
              (!M.maxRetries && N === "pending") ||
              (N !== "aborted" &&
                N !== "stopped" &&
                M.retryCount < M.maxRetries)
                ? ((M.retryCount = M.retryCount + 1),
                  f.set("largeFile", M),
                  this.scheduleFileForUpload(f))
                : u.reject(f);
            } else
              var S = setInterval(function () {
                navigator.onLine && (clearInterval(S), x.retryUpload(f));
              }, 2e3);
          },
        }),
        (g.extend = m.View.extend),
        g
      );
    }
  ),
  csui.define("csui/controls/checkbox/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/checkbox/impl/nls/root/lang", {
    ariaLabel: "Item selection",
    title: "Item selection",
  }),
  csui.define(
    "hbs!csui/controls/checkbox/impl/checkbox.view",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          return ' disabled="" ';
        },
        3: function (n, e, a, c, o) {
          return ' checked="" ';
        },
        5: function (n, e, a, c, o) {
          return ' indeterminate="" ';
        },
        7: function (n, e, a, c, o) {
          return ' interactiveOnly="" ';
        },
        9: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            'title="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 6, column: 22 },
                      end: { line: 6, column: 31 },
                    },
                  })
                : t)
            ) +
            '"'
          );
        },
        11: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return n.escapeExpression(
            ((t =
              (t = i(a, "label") || (e != null ? i(e, "label") : e)) != null
                ? t
                : n.hooks.helperMissing),
            typeof t == "function"
              ? t.call(e ?? (n.nullContext || {}), {
                  name: "label",
                  hash: {},
                  loc: {
                    start: { line: 7, column: 17 },
                    end: { line: 7, column: 26 },
                  },
                })
              : t)
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `<otc-checkbox class="csui-control csui-checkbox"
  ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "disabled") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 2, column: 2 },
                  end: { line: 2, column: 38 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "checked") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(3, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 3, column: 2 },
                  end: { line: 3, column: 36 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "indeterminate") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(5, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 4, column: 2 },
                  end: { line: 4, column: 48 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "interactiveOnly") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(7, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 5, column: 2 },
                  end: { line: 5, column: 52 },
                },
              }
            )) != null
              ? t
              : "") +
            `
  ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "title") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(9, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 6, column: 2 },
                  end: { line: 6, column: 39 },
                },
              }
            )) != null
              ? t
              : "") +
            ` >
    ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "label") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(11, o, 0),
                inverse: n.noop,
                loc: {
                  start: { line: 7, column: 4 },
                  end: { line: 7, column: 33 },
                },
              }
            )) != null
              ? t
              : "") +
            `
</otc-checkbox>`
          );
        },
      });
      return (
        v.registerPartial("csui_controls_checkbox_impl_checkbox.view", m), m
      );
    }
  ),
  csui.define("css!csui/controls/control/impl/control", [], function () {}),
  csui.define(
    "css!csui/controls/checkbox/impl/checkbox.view",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/checkbox/checkbox.view",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "i18n!csui/controls/checkbox/impl/nls/lang",
      "hbs!csui/controls/checkbox/impl/checkbox.view",
      "css!csui/controls/control/impl/control",
      "css!csui/controls/checkbox/impl/checkbox.view",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      return m.ItemView.extend({
        className: "csui-control-view csui-checkbox-view",
        template: e,
        templateHelpers: function () {
          const a = this.model.get("disabled") ? "disabled" : "",
            c = this.model.get("checked") === "true" ? "checked" : "",
            o = this.model.get("checked") === "mixed" ? "indeterminate" : "",
            t = !this.label,
            i = t ? "interactiveonly" : "",
            s = this.title ? this.title : "",
            l = t ? (this.ariaLabel ? this.ariaLabel : s) : this.label;
          return {
            disabled: a,
            checked: c,
            indeterminate: o,
            interactiveOnly: i,
            title: s,
            label: l,
          };
        },
        ui: { cb: "otc-checkbox.csui-control.csui-checkbox" },
        constructor: function (c) {
          c || (c = {}),
            (this.label = c.label),
            (this.ariaLabel = c.ariaLabel),
            (this.title = c.title),
            c.model ||
              (c.model = new v.Model({
                disabled: c.disabled === void 0 ? !1 : c.disabled,
              })),
            m.ItemView.prototype.constructor.call(this, c),
            this._setChecked(c.checked, { silent: !0 }),
            this._undelegateModelAndCollectionEvents(),
            this.listenTo(
              this.model,
              "change:disabled",
              this._handleDisableChanged
            ),
            this.listenTo(
              this.model,
              "change:checked",
              this._handleCheckedChanged
            );
        },
        onRender: function () {
          this.ui.cb[0].addEventListener("change", () => this._toggleChecked());
        },
        setChecked: function (a) {
          var c = { silent: !1 };
          this.model.get("disabled") && (c.silent = !0), this._setChecked(a, c);
        },
        setDisabled: function (a) {
          this.model.set("disabled", !!a);
        },
        _handleDisableChanged: function () {
          var a = this.model.get("disabled");
          this.ui.cb.prop("disabled", a);
        },
        _handleCheckedChanged: function () {
          var a = this.model.get("checked");
          if (this.model.get("schema")?.type === "checkboxV2") {
            let o = {
              fieldvalue: a === "true",
              fieldid: this.options.dataId,
              fieldpath: this.options.path,
              targetfieldpath: this.options.path,
              fieldView: this,
            };
            const t = r.Event("field:changed");
            y.extend(t, o), this.$el.trigger(t);
          }
          this.ui.cb.prop("checked", a === "true"),
            a === "mixed"
              ? this.ui.cb.attr("indeterminate", "")
              : this.ui.cb.removeAttr("indeterminate");
        },
        _setChecked: function (a, c) {
          switch (a) {
            case "true":
            case !0:
              this.model.set("checked", "true", c);
              break;
            case "mixed":
              this.model.set("checked", "mixed", c);
              break;
            default:
              this.model.set("checked", "false", c);
              break;
          }
        },
        _toggleChecked: function () {
          if (!this.model.get("disabled")) {
            var a = this.model.get("checked"),
              c = { sender: this, model: this.model };
            this.triggerMethod("clicked", c),
              c.cancel ||
                (!a || a === "false" || a === "mixed"
                  ? this.model.set("checked", "true")
                  : this.model.set("checked", "false"));
          }
        },
      });
    }
  ),
  csui.define("csui/controls/disclosure/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/disclosure/impl/nls/root/lang", {
    ariaLabel: "Information disclosure",
    titleDisclosed: "See all",
    titleExpanded: "See less",
  }),
  csui.define(
    "hbs!csui/controls/disclosure/impl/disclosure.view",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "    " +
            ((t = (
              i(a, "icon-v2") ||
              (e && i(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { size: "xsmall", iconName: "csui_caret_up" },
              loc: {
                start: { line: 4, column: 4 },
                end: { line: 4, column: 56 },
              },
            })) != null
              ? t
              : "") +
            `
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "    " +
            ((t = (
              i(a, "icon-v2") ||
              (e && i(e, "icon-v2")) ||
              n.hooks.helperMissing
            ).call(e ?? (n.nullContext || {}), {
              name: "icon-v2",
              hash: { size: "xsmall", iconName: "csui_caret_down" },
              loc: {
                start: { line: 6, column: 4 },
                end: { line: 6, column: 58 },
              },
            })) != null
              ? t
              : "") +
            `
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            '<button class="csui-control csui-disclosure" aria-expanded="' +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "ariaExpanded") ||
                  (e != null ? s(e, "ariaExpanded") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "ariaExpanded",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 60 },
                      end: { line: 1, column: 76 },
                    },
                  })
                : i)
            ) +
            `"
        aria-label="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "ariaLabel") || (e != null ? s(e, "ariaLabel") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "ariaLabel",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 20 },
                      end: { line: 2, column: 33 },
                    },
                  })
                : i)
            ) +
            '" ' +
            n.escapeExpression(
              ((i =
                (i = s(a, "disabled") || (e != null ? s(e, "disabled") : e)) !=
                null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "disabled",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 35 },
                      end: { line: 2, column: 47 },
                    },
                  })
                : i)
            ) +
            ' title="' +
            n.escapeExpression(
              ((i =
                (i = s(a, "title") || (e != null ? s(e, "title") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 55 },
                      end: { line: 2, column: 64 },
                    },
                  })
                : i)
            ) +
            `">
` +
            ((t = s(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "ariaExpanded") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.program(3, o, 0),
                loc: {
                  start: { line: 3, column: 2 },
                  end: { line: 7, column: 9 },
                },
              }
            )) != null
              ? t
              : "") +
            "</button>"
          );
        },
      });
      return (
        v.registerPartial("csui_controls_disclosure_impl_disclosure.view", m), m
      );
    }
  ),
  csui.define(
    "csui/controls/disclosure/disclosure.icons.v2",
    ["csui/controls/icons.v2"],
    function (r) {
      r.registerIcons({
        csui_caret_up:
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="csui-icon-v2 csui-impl-icon-v2__caret_up" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" xml:space="preserve"> <polyline fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="4,12 9,7 14,12 "/></svg>',
        csui_caret_down:
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="csui-icon-v2 csui-impl-icon-v2__caret_down" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" xml:space="preserve"> <polyline fill="none" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="14,7 9,12 4,7 "/></svg>',
      });
    }
  ),
  csui.define(
    "css!csui/controls/disclosure/impl/disclosure.view",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/disclosure/disclosure.view",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "csui/behaviors/keyboard.navigation/retainfocus.behavior",
      "i18n!csui/controls/disclosure/impl/nls/lang",
      "hbs!csui/controls/disclosure/impl/disclosure.view",
      "csui/controls/disclosure/disclosure.icons.v2",
      "css!csui/controls/control/impl/control",
      "css!csui/controls/disclosure/impl/disclosure.view",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      return m.ItemView.extend({
        className: "csui-control-view csui-disclosure-view",
        template: a,
        templateHelpers: function () {
          var o = this.model.get("expanded");
          return {
            disabled: this.model.get("disabled") ? "disabled" : "",
            ariaExpanded: o,
            title: o
              ? this.titleExpanded
                ? this.titleExpanded
                : e.titleExpanded
              : this.titleDisclosed
              ? this.titleDisclosed
              : e.titleDisclosed,
            ariaLabel: o
              ? this.ariaLabelExpanded
                ? this.ariaLabelExpanded
                : e.ariaLabel
              : this.ariaLabelDisclosed
              ? this.ariaLabelDisclosed
              : e.ariaLabel,
          };
        },
        modelEvents: {
          "change:disabled": "render",
          "change:expanded": "render",
        },
        events: { click: "_toggleExpanded" },
        behaviors: { RetainFocusBehavior: { behaviorClass: n } },
        constructor: function (t) {
          t || (t = {}),
            (this.ariaLabelDisclosed = t.ariaLabelDisclosed),
            (this.ariaLabelExpanded = t.ariaLabelExpanded),
            (this.titleDisclosed = t.titleDisclosed),
            (this.titleExpanded = t.titleExpanded),
            t.model ||
              (t.model = new v.Model({
                disabled: t.disabled === void 0 ? !1 : t.disabled,
              })),
            m.ItemView.prototype.constructor.call(this, t),
            this.setExpanded(t.expanded);
        },
        setDisabled: function (o) {
          this.model.set("disabled", !!o);
        },
        setExpanded: function (o) {
          var t = { silent: !1 };
          switch ((this.model.get("disabled") && (t.silent = !0), o)) {
            case "true":
            case !0:
              this.model.set("expanded", !0, t);
              break;
            default:
              this.model.set("expanded", !1, t);
              break;
          }
        },
        _toggleExpanded: function () {
          if (!this.model.get("disabled")) {
            var o = this.model.get("expanded"),
              t = { sender: this, model: this.model };
            this.triggerMethod("clicked", t),
              t.cancel || this.model.set("expanded", !o);
          }
        },
      });
    }
  ),
  csui.define(
    "csui/models/appliedcategory",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/models/mixins/connectable/connectable.mixin",
      "csui/models/mixins/uploadable/uploadable.mixin",
    ],
    function (r, y, v, m) {
      var n = y.Model.extend({
        constructor: function (a, c) {
          y.Model.prototype.constructor.apply(this, arguments),
            this.makeConnectable(c).makeUploadable(c);
        },
        isNew: function () {
          return !!this.get("category_id");
        },
        parse: function (e, a) {
          var c = this.attributes;
          return (
            c.category_id && ((e.id = c.category_id), delete c.category_id), e
          );
        },
      });
      return m.mixin(n.prototype), v.mixin(n.prototype), n;
    }
  ),
  csui.define(
    "csui/models/appliedcategories/server.adaptor.mixin",
    ["csui/lib/jquery", "csui/lib/underscore", "csui/utils/url"],
    function (r, y, v) {
      "use strict";
      var m = {
        mixin: function (n) {
          return y.extend(n, {
            makeServerAdaptor: function (e) {
              return this;
            },
            url: function () {
              return v.combine(this.node.urlBase(), "categories");
            },
            parse: function (e, a) {
              return this.sortInitially(e.data);
            },
            sortInitially: function (e) {
              return y.isArray(e)
                ? y.sortBy(e, function (a) {
                    return a.name.toLowerCase();
                  })
                : e;
            },
          });
        },
      };
      return m;
    }
  ),
  csui.define(
    "csui/models/appliedcategories",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/url",
      "csui/models/mixins/node.resource/node.resource.mixin",
      "csui/models/appliedcategory",
      "csui/models/appliedcategories/server.adaptor.mixin",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      var a = y.Collection.extend({
        model: n,
        constructor: function (o, t) {
          (this.sortInitially = t.sortInitially
            ? t.sortInitially
            : this.sortInitially),
            y.Collection.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(t);
        },
        clone: function () {
          return new this.constructor(this.models, { node: this.node });
        },
      });
      return m.mixin(a.prototype), e.mixin(a.prototype), a;
    }
  ),
  csui.define(
    "csui/models/fileupload",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/models/node/node.model",
      "csui/models/version",
    ],
    function (r, y, v, m, n, e, a) {
      "use strict";
      var c = y.extend({ idAttribute: null }, r.config()),
        o = m.Model.extend({
          defaults: {
            state: "pending",
            count: 0,
            total: 0,
            errorMessage: "",
            sequence: 0,
          },
          idAttribute: c.idAttribute,
          constructor: function (i, s) {
            m.Model.prototype.constructor.apply(this, arguments),
              s || (s = {}),
              (this.node = s.node),
              this.node ? this.setVersion(s) : this.setNode(s),
              (this.deferred = v.Deferred()),
              this.deferred
                .progress(y.bind(this.onStateChange, this))
                .done(y.bind(this.onStateChange, this))
                .fail(y.bind(this.onStateChange, this)),
              this._updateFileAttributes(!0),
              this.listenTo(
                this,
                "change:file",
                y.bind(this._updateFileAttributes, this, !1)
              );
          },
          setVersion: function (t) {
            this.set("newVersion", !0, { silent: !0 }),
              (this.version = new a(
                { id: this.node.get("id") },
                { connector: t.connector || this.node.connector }
              ));
          },
          setNode: function (t) {
            (this.container = t.container),
              (this.node = new e(
                void 0,
                y.extend(
                  {
                    connector:
                      t.connector ||
                      (this.container && this.container.connector),
                  },
                  t,
                  { collection: this.get("collection") }
                )
              ));
          },
          abort: function (t) {
            this.deferred.reject(this, t);
          },
          promise: function () {
            return this.deferred.promise();
          },
          onStateChange: function (t, i) {
            var s = this.deferred.state();
            s == "pending"
              ? (s = "processing")
              : s === "rejected" &&
                (t &&
                  t.get("file") &&
                  this.set({ count: t.get("file").size, silent: !0 }),
                i && i.message
                  ? (this.set("errorMessage", i.message),
                    i.statusCode >= 500 && this.set({ serverFailure: !0 }))
                  : i && i.state
                  ? (s = i.state)
                  : (s = "aborted"));
            var l = { state: s };
            if (i && i.type === "progress") {
              var g = i.loaded,
                f = this.get("total");
              i.lengthComputable &&
                i.total > f &&
                ((f = i.total), (l.total = f)),
                this.get("count") < g && g <= f && (l.count = g);
            }
            this.set(l);
          },
          _updateFileAttributes: function (t) {
            var i = this.get("file");
            i &&
              this.set(
                { name: i.name, total: i.size },
                t ? { silent: !0 } : {}
              );
          },
        });
      return o;
    }
  ),
  csui.define(
    "csui/models/fileuploads",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/models/fileupload",
    ],
    function (r, y, v, m, n, e) {
      var a = m.Collection.extend({
        model: e,
        constructor: function (o, t) {
          m.Collection.prototype.constructor.apply(this, arguments);
        },
        state: function () {
          var c = !1,
            o = !1,
            t = this.all(function (i) {
              var s = i.get("state"),
                l = s == "rejected";
              return (
                (c = c || l), (o = o || s == "processing"), l || s == "resolved"
              );
            });
          return t
            ? c
              ? "rejected"
              : "resolved"
            : o
            ? "processing"
            : "pending";
        },
        abort: function (c) {
          this.forEach(function (o) {
            var t = o.get("abortState");
            t && (o.abort(), o.set("state", c));
          });
        },
      });
      return (a.version = "1.0"), a;
    }
  ),
  csui.define(
    "csui/models/namequery/server.adaptor.mixin",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/utils/url",
      "csui/models/fileupload",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = {
        mixin: function (e) {
          return y.extend(e, {
            makeServerAdaptor: function (a) {
              return this;
            },
            url: function () {
              return v.combine(
                this.connector.connection.url,
                "validation/nodes"
              );
            },
            queryNames: function (a) {
              var c = this.get("containerId"),
                o = r.Deferred();
              return (
                (this.fileGroups = this._getFileNameGroups(a)),
                this.fileGroups.length === 0
                  ? o.reject()
                  : this._runQuery(0, c, o),
                o.promise()
              );
            },
            runQuery: function (a, c) {
              var o = { parent_id: a, names: c };
              return this._jqxhr(o);
            },
            _jqxhr: function (a) {
              var c = r.Deferred();
              return (
                this.save(a, { data: a }).done(c.resolve).fail(c.reject),
                c.promise()
              );
            },
            _runQuery: function (a, c, o) {
              var t = this,
                i = this.fileGroups;
              if (i && i[a]) {
                var s = { parent_id: c, names: this._getFileNames(i[a]) };
                this._jqxhr(s)
                  .done(function (l, g, f) {
                    t._addResults(l, i[a]),
                      i[++a]
                        ? t._runQuery(a, c, o)
                        : o.resolve(t.cleanFiles, t.conflictFiles);
                  })
                  .fail(function (l, g, f) {
                    o.reject(l);
                  });
              }
            },
            _addResults: function (a, c) {
              y.each(
                c,
                function (t) {
                  var i =
                      t.newName || t.name || t.get("newName") || t.get("name"),
                    s =
                      y.find(a.results, function (g) {
                        return g.name === i;
                      }) || {};
                  if (t instanceof m) {
                    var l = t.get("subType");
                    l === 0 && (s.type = 0);
                  } else t.type === 0 && (s.type = 0);
                  o.call(this, t, s),
                    s.id ? this.conflictFiles.push(t) : this.cleanFiles.push(t);
                },
                this
              );
              function o(t, i) {
                t instanceof m
                  ? (t.set({
                      type:
                        i.type !== void 0 && i.type !== null
                          ? i.type
                          : t.get("subType"),
                      versioned: i.versioned,
                    }),
                    i.id && t.set("id", i.id))
                  : y.extend(t, {
                      id: i.id,
                      type: i.type,
                      versioned: i.versioned,
                    });
              }
            },
            _getFileNames: function (a) {
              var c = [];
              return (
                y.each(a, function (o) {
                  var t = "";
                  o instanceof m
                    ? (t = o.get("newName") || o.get("name"))
                    : (t = o.newName || o.name),
                    c.push(t);
                }),
                c
              );
            },
            _getFileNameGroups: function (a) {
              for (
                var c = r.isArray(a) ? a : a.models,
                  o = 0,
                  t = 1,
                  i = c.length,
                  s = [];
                o < i;

              ) {
                for (
                  var l = [], g = this.config.filesPerQuery * t++;
                  o < i && o < g;
                  o++
                )
                  (c[o].index = o), l.push(c[o]);
                s.push(l);
              }
              return s;
            },
          });
        },
      };
      return n;
    }
  ),
  csui.define(
    "csui/models/namequery",
    [
      "module",
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/models/mixins/connectable/connectable.mixin",
      "csui/models/mixins/uploadable/uploadable.mixin",
      "csui/models/namequery/server.adaptor.mixin",
    ],
    function (r, y, v, m, n, e, a) {
      "use strict";
      var c = r.config();
      v.defaults(c, { filesPerQuery: 10 });
      var o = m.Model.extend({
        constructor: function (i, s) {
          m.Model.prototype.constructor.apply(this, arguments),
            (this.conflictFiles = []),
            (this.cleanFiles = []),
            (this.config = c),
            this.makeConnectable(s).makeUploadable(s);
        },
      });
      return (
        e.mixin(o.prototype), n.mixin(o.prototype), a.mixin(o.prototype), o
      );
    }
  ),
  csui.define(
    "csui/models/versions",
    ["module", "csui/lib/backbone", "csui/utils/log", "csui/models/version"],
    function (r, y, v, m) {
      "use strict";
      var n = y.Collection.extend({
        model: m,
        constructor: function (a, c) {
          y.Collection.prototype.constructor.apply(this, arguments),
            (this.options = c || {}),
            this.options.connector && this.options.connector.assignTo(this);
        },
        setOrder: function (e, a) {
          if (this.orderBy !== e) return (this.orderBy = e), !0;
        },
        resetOrder: function (e) {
          if (this.orderBy)
            return (this.orderBy = void 0), e !== !1 && this.fetch(), !0;
        },
        setLimit: function (e, a, c) {
          if (this.skipCount !== e || this.topCount !== a)
            return (
              (this.skipCount = e),
              (this.topCount = a),
              c !== !1 && this.fetch(),
              !0
            );
        },
        resetLimit: function (e) {
          if (this.skipCount)
            return (this.skipCount = 0), e !== !1 && this.fetch(), !0;
        },
      });
      return (n.version = "1.0"), n;
    }
  ),
  csui.define(
    "csui/models/server.adaptors/nodeversions.mixin",
    ["csui/lib/underscore", "csui/utils/url"],
    function (r, y) {
      "use strict";
      var v = {
        mixin: function (o) {
          return r.extend(o, {
            makeServerAdaptor: function (t) {
              return this;
            },
            url: function () {
              return this.options.useV2RestApi ? m.call(this) : n.call(this);
            },
            parse: function (t) {
              return this.options.useV2RestApi
                ? a.call(this, t)
                : e.call(this, t);
            },
            getColumnModels: function (t, i) {
              var s = r.reduce(
                t,
                function (l, g) {
                  if (g.indexOf("_formatted") >= 0) {
                    var f = g.replace(/_formatted$/, "");
                    if (i[f]) return l;
                  } else {
                    var u = i[g];
                    if (!u.definitions_order) {
                      var p = i[g + "_formatted"];
                      p &&
                        p.definitions_order &&
                        (u.definitions_order = p.definitions_order);
                    }
                  }
                  var x = i[g];
                  switch (g) {
                    case "name":
                      x = r.extend(x, {
                        default_action: !0,
                        contextual_menu: !1,
                        editable: !0,
                        filter_key: "name",
                      });
                      break;
                  }
                  return (
                    (x.sort = !0), l.push(r.extend({ column_key: g }, x)), l
                  );
                },
                []
              );
              return s;
            },
          });
        },
      };
      function m() {
        return y.combine(
          this.connector.getConnectionUrl().getApiBase("v2"),
          "/nodes/" + this.node.get("id"),
          "/versions?expand=" +
            encodeURIComponent("versions{owner_id,locked_user_id}") +
            "&metadata&" +
            y.combineQueryString(this.getRequestedCommandsUrlQuery())
        );
      }
      function n() {
        var o = y.combineQueryString(this.getExpandableResourcesUrlQuery(), {
          extra: !1,
          commands: this.options.commands || [],
        });
        return y.combine(this.node.urlBase(), "/versions?" + o);
      }
      function e(o) {
        var t = o.definitions,
          i = r.keys(t);
        if (!this.options.onlyClientSideDefinedColumns && o.definitions_order)
          for (var s = 0; s < o.definitions_order.length; s++) {
            var l = o.definitions_order[s];
            t[l].definitions_order = 500 + s;
          }
        return (
          this.columns.reset(this.getColumnModels(i, t)),
          o.data &&
            r.each(
              o.data,
              function (g) {
                (g.id_expand = {}), (g.id_expand.type = this.node.get("type"));
              },
              this
            ),
          o.data
        );
      }
      function a(o) {
        var t = o.results[0].metadata.versions,
          i = [];
        t.reserved = { key: "reserved", name: "reserve" };
        var s = r.keys(t);
        return (
          this.columns.reset(this.getColumnModels(s, t)),
          o.results &&
            r.each(
              o.results,
              function (l) {
                l?.data?.versions &&
                  ((l.data.versions.id_expand = {}),
                  (l.data.versions.id_expand.type = this.node.get("type")),
                  c(l.actions, l.data.versions),
                  i.push(l.data.versions));
              },
              this
            ),
          i
        );
      }
      function c(o, t) {
        t.actions = r
          .chain(o.data)
          .keys()
          .map(function (i) {
            var s = o.data[i];
            return (s.signature = i), s;
          })
          .value();
      }
      return v;
    }
  ),
  csui.define(
    "csui/models/nodeversions",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/base",
      "csui/utils/log",
      "csui/utils/url",
      "csui/models/versions",
      "csui/models/actions",
      "csui/models/columns",
      "csui/models/mixins/node.resource/node.resource.mixin",
      "csui/models/mixins/expandable/expandable.mixin",
      "csui/models/browsable/client-side.mixin",
      "csui/models/mixins/v2.commandable/v2.commandable.mixin",
      "csui/models/server.adaptors/nodeversions.mixin",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l, g) {
      "use strict";
      var f = a.extend({
        constructor: function (x, S) {
          a.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(S)
              .makeExpandable(S)
              .makeClientSideBrowsable(S)
              .makeCommandableV2(S)
              .makeServerAdaptor(S),
            (this.columns = new o());
        },
        _prepareModel: function (p, x) {
          return (
            x || (x = {}),
            (x.commands = this.commands),
            v.Collection.prototype._prepareModel.call(this, p, x)
          );
        },
        clone: function () {
          return new this.constructor(this.models, {
            node: this.node,
            skip: this.skipCount,
            top: this.topCount,
            filter: y.deepClone(this.filters),
            orderBy: y.clone(this.orderBy),
            expand: y.clone(this.expand),
            commands: y.clone(this.options.commands),
          });
        },
      });
      s.mixin(f.prototype),
        i.mixin(f.prototype),
        t.mixin(f.prototype),
        g.mixin(f.prototype),
        l.mixin(f.prototype);
      var u = f.prototype.setOrder;
      return (
        (f.prototype.setOrder = function (p, x) {
          return u.call(this, p, x);
        }),
        f
      );
    }
  ),
  csui.define(
    "csui/models/node.facets/facet.query.mixin",
    ["csui/lib/underscore", "csui/lib/jquery"],
    function (r, y) {
      "use strict";
      var v = {
        mixin: function (c) {
          return r.extend(c, {
            makeFacetQuery: function (o) {
              return this;
            },
            getFilterParam: function (o) {
              return m(o || this.filters, this.filterQueryParameterName);
            },
            getFilterQuery: function (o) {
              return n(o || this.filters, this.filterQueryParameterName);
            },
            getFilterQueryValue: function (o) {
              return e(o || this.filters);
            },
          });
        },
      };
      function m(c, o) {
        var t = e(c),
          i = {};
        return t.length && (i[o] = t), i;
      }
      function n(c, o) {
        var t = m(c, o);
        return y.param(t, !0);
      }
      function e(c) {
        return (c && r.map(c, a)) || [];
      }
      function a(c) {
        return (
          c.id +
          ":" +
          r.reduce(
            c.values,
            function (o, t) {
              return o && (o += "|"), o + t.id.toString();
            },
            ""
          )
        );
      }
      return v;
    }
  ),
  csui.define(
    "csui/models/widget/search.results/search.facet.query.mixin",
    ["csui/lib/underscore", "csui/lib/jquery"],
    function (r, y) {
      "use strict";
      var v = {
        mixin: function (t) {
          return r.extend(t, {
            makeFacetQuery: function (i) {
              return this;
            },
            getFilterParam: function (i) {
              return m(i || this.filters, this.filterQueryParameterName);
            },
            getFilterQuery: function (i) {
              return n(i || this.filters, this.filterQueryParameterName);
            },
            getFilterQueryValue: function (i) {
              return e(i || this.filters);
            },
            getStateFilterQueryValue: function (i) {
              return c(i || this.filters);
            },
          });
        },
      };
      function m(t, i) {
        var s = e(t),
          l = {};
        return s.length && (l[i] = s), l;
      }
      function n(t, i) {
        var s = m(t, i);
        return y.param(s, !0);
      }
      function e(t) {
        return (t && r.map(t, a)) || [];
      }
      function a(t) {
        return (
          t.id +
          ":{" +
          r.reduce(
            t.values,
            function (i, s) {
              return i && (i += "|"), i + s.id.toString();
            },
            ""
          ) +
          "}"
        );
      }
      function c(t) {
        return (t && r.map(t, o)) || [];
      }
      function o(t) {
        return (
          t.id +
          ":" +
          r.reduce(
            t.values,
            function (i, s) {
              return i && (i += "|"), i + s.id.toString();
            },
            ""
          )
        );
      }
      return v;
    }
  ),
  csui.define(
    "csui/models/node.facets/server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/url",
      "csui/models/node.facets/facet.query.mixin",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = {
        mixin: function (o) {
          var t = o.fetch;
          return (
            m.mixin(o),
            r.extend(o, {
              filterQueryParameterName: "where_facet",
              makeServerAdaptor: function (i) {
                return this.makeFacetQuery(i);
              },
              isFetchable: function () {
                var i = this.node,
                  s = i.get("type"),
                  l = i.get("location_id");
                return !(s === 899 && l === 0);
              },
              url: function () {
                var i = this.node.get(
                    this.node.get("type") === 899 ? "location_id" : "id"
                  ),
                  s = r.union(c(this.node), this.filters),
                  l = this.getFilterQuery(s),
                  g = v.combine(
                    this.connector.connection.url,
                    "nodes",
                    i,
                    "/facets"
                  );
                return l && (g += "?" + l), g;
              },
              parse: function (i, s) {
                var l = i.facets || {},
                  g = l.properties || {},
                  f = l.selected_values || [],
                  u = l.available_values || [];
                if (
                  (f.forEach(e.bind(null, !0)),
                  u.forEach(e.bind(null, !1)),
                  this.node.get("type") === 899)
                ) {
                  var p = this.node.get("selected_facets") || [];
                  (p = p.map(function (x) {
                    return x[0];
                  })),
                    (f = f.filter(function (x) {
                      var S = r.keys(x)[0];
                      return !r.contains(p, S);
                    }));
                }
                return f.concat(u).map(a.bind(null, g));
              },
            })
          );
        },
      };
      function e(o, t) {
        var i = r.keys(t)[0],
          s = t[i];
        r.each(s, function (l) {
          (l.value = l.value.toString()), (l.selected = o);
        });
      }
      function a(o, t) {
        var i = r.keys(t)[0],
          s = t[i],
          l = o[i] || {};
        return r.extend(
          { items_to_show: 5, select_multiple: !0, topics: s },
          l,
          { id: i.toString() }
        );
      }
      function c(o) {
        var t = [];
        if (o.get("type") === 899) {
          var i = o.get("selected_facets");
          t = r.map(i, function (s) {
            var l = { id: s[0], values: [] };
            return (
              s[1].forEach(function (g) {
                l.values.push({ id: g });
              }),
              l
            );
          });
        }
        return t;
      }
      return n;
    }
  ),
  csui.define(
    "csui/models/nodefacets",
    [
      "csui/lib/underscore",
      "csui/models/facets",
      "csui/models/mixins/node.resource/node.resource.mixin",
      "csui/models/node.facets/server.adaptor.mixin",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = y.extend({
        constructor: function (a, c) {
          y.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(c).makeServerAdaptor(c);
        },
        clone: function () {
          return new this.constructor(this.models, {
            node: this.node,
            filters: r.deepClone(this.filters),
          });
        },
      });
      return v.mixin(n.prototype), m.mixin(n.prototype), n;
    }
  ),
  csui.define(
    "csui/models/node/node.facet.factory",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/contexts/factories/factory",
      "csui/utils/contexts/factories/node",
      "csui/models/nodefacets",
    ],
    function (r, y, v, m, n, e) {
      var a = m.extend({
        propertyPrefix: "facets",
        constructor: function (o, t) {
          m.prototype.constructor.apply(this, arguments);
          var i = this.options.facets || {};
          if (!(i instanceof v.Collection)) {
            var s = (i.options && i.options.node) || o.getModel(n, t),
              l = r.config();
            i = new e(
              i.models,
              y.defaults(l.options, i.options, { autoreset: !0 }, { node: s })
            );
          }
          this.property = i;
        },
        fetch: function (c) {
          return this.property.fetch(c);
        },
      });
      return a;
    }
  ),
  csui.define(
    "csui/models/node/node.facet2.factory",
    [
      "module",
      "nuc/lib/underscore",
      "nuc/lib/backbone",
      "csui/utils/contexts/mixins/clone.and.fetch.mixin",
      "csui/utils/contexts/factories/factory",
      "csui/utils/contexts/factories/node",
      "csui/models/nodefacets2",
    ],
    function (r, y, v, m, n, e, a) {
      var c = n.extend({
        propertyPrefix: "facets2",
        constructor: function (t, i) {
          n.prototype.constructor.apply(this, arguments);
          var s = this.options.facets2 || {};
          if (!(s instanceof v.Collection)) {
            var l = (s.options && s.options.node) || t.getModel(e, i),
              g = r.config();
            s = new a(
              s.models,
              y.defaults(g.options, s.options, { autoreset: !0 }, { node: l })
            );
          }
          (this.property = s), this.makeCloneAndFetch(i);
        },
        isFetchable: function () {
          return this.property.isFetchable();
        },
        fetch: function (o) {
          return this.property.fetch(o);
        },
      });
      return m.mixin(c.prototype), c;
    }
  ),
  csui.define("csui/widgets/recycle.items.table/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/widgets/recycle.items.table/impl/nls/root/lang", {
    dialogTitle: "Recycle bin",
    tableAria: "Recycle bin items",
    LblPurge: "Delete",
    LblRestore: "Restore",
    ToolbarItemMore: "More actions",
    backTitle: "Back",
    filterName: "Show filters",
    filterToolItemAria: "Show filter panel",
    deletedItems: "Deleted items",
    myItems: "My items",
    myItemsToday: "My items today",
    allItemsToday: "All items today",
  }),
  csui.define(
    "csui/models/widget/recycle.items/facet.server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/models/node.facets/facet.query.mixin",
      "csui/utils/contexts/factories/recycle.bin",
      "i18n!csui/widgets/recycle.items.table/impl/nls/lang",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = {
        mixin: function (a) {
          y.mixin(a);
          var c = a.sync;
          return r.extend(a, {
            filterQueryParameterName: "filter",
            makeServerAdaptor: function (o) {
              return this;
            },
            url: function () {},
            sync: function (o, t, i) {
              return c.apply(this, arguments);
            },
            parse: function (o, t) {},
            _parseFacets: function (o) {
              let t;
              o && (t = e(o.selected, !0).concat(e(o.available, !1))),
                this.reset(t);
            },
            _setFacets: function (o) {
              let t = this.options.context.getModel(v).get("modes_available");
              t = t.slice(0, -1);
              const i = {
                  user_deleted_today: m.myItemsToday,
                  user_deleted: m.myItems,
                  anyone_deleted_today: m.allItemsToday,
                },
                s = t.map((g) => ({ value: g, display_name: i[g] }));
              return {
                available: [
                  {
                    count_exceeded: !1,
                    display_name: m.deletedItems,
                    facet_items: s,
                    name: "recyclebin",
                  },
                ],
              };
            },
          });
        },
      };
      function e(a, c) {
        return r.map(a, function (o) {
          let t = r.map(o.facet_items, function (i) {
            return {
              name: i.display_name,
              total: i.count,
              value: i.value,
              selected: c,
              select_multiple: !1,
              multiselect: !1,
            };
          });
          return {
            id: o.name,
            name: o.display_name,
            type: o.type,
            topics: t,
            items_to_show: 5,
          };
        });
      }
      return n;
    }
  ),
  csui.define(
    "csui/models/widget/recycle.items/recycle.items.facets",
    [
      "csui/lib/underscore",
      "csui/models/facets",
      "csui/models/mixins/connectable/connectable.mixin",
      "csui/models/mixins/fetchable/fetchable.mixin",
      "csui/models/browsable/v1.request.mixin",
      "csui/models/browsable/v2.response.mixin",
      "csui/models/widget/recycle.items/facet.server.adaptor.mixin",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v, m, n, e, a) {
      "use strict";
      var c = y.extend({
        constructor: function (t, i) {
          (this.options = i || (i = {})),
            y.prototype.constructor.apply(this, arguments),
            this.makeConnectable(i)
              .makeFetchable(i)
              .makeBrowsableV1Request(i)
              .makeBrowsableV2Response(i)
              .makeServerAdaptor(i);
        },
        clone: function () {
          return new this.constructor(this.models, {
            connector: this.connector,
            skip: this.skipCount,
            top: this.topCount,
            filters: r.deepClone(this.filters),
          });
        },
        fetch: function () {
          let o = this._setFacets();
          this._parseFacets(o);
        },
        isFetchable: function () {
          return !0;
        },
      });
      return (
        n.mixin(c.prototype),
        e.mixin(c.prototype),
        v.mixin(c.prototype),
        m.mixin(c.prototype),
        a.mixin(c.prototype),
        c
      );
    }
  ),
  csui.define(
    "csui/models/widget/recycle.items/recycle.items.facets.factory",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/contexts/factories/factory",
      "csui/utils/contexts/factories/connector",
      "csui/models/widget/recycle.items/recycle.items.facets",
    ],
    function (r, y, v, m, n, e) {
      var a = m.extend({
        propertyPrefix: "recycleItemsFacets",
        constructor: function (o, t) {
          m.prototype.constructor.apply(this, arguments);
          var i = this.options.recycleItemsFacets || {};
          if (!(i instanceof v.Collection)) {
            var s = o.getObject(n, t),
              l = i.options.query,
              g = r.config();
            i = new e(
              i.models,
              y.extend(
                { connector: s, context: o, query: l, stateEnabled: !0 },
                i.options,
                g.options,
                { autofetch: !0, autoreset: !0 }
              )
            );
          }
          this.property = i;
        },
        isFetchable: function () {
          return this.property.isFetchable();
        },
        fetch: function (c) {
          return this.property.fetch(c);
        },
      });
      return a;
    }
  ),
  csui.define(
    "csui/models/widget/search.results/search.response.mixin",
    [
      "csui/lib/underscore",
      "csui/utils/base",
      "csui/utils/accessibility",
      "csui/models/ancestor",
      "csui/models/node/node.model",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = v.isAccessibleTable(),
        a = {
          mixin: function (c) {
            return r.extend(c, {
              makeSearchResponse: function (o) {
                return this;
              },
              parseSearchResponse: function (o, t) {
                var i = o.collection.sorting;
                i && (this.previousQuery = this.options.query.attributes.where),
                  (this.orderBy = this.orderBy
                    ? this.orderBy
                    : i && i.sort && i.sort[0]),
                  (this.previousOrderBy = this.orderBy),
                  this.excludeSelectedAndInvalidFacets(o);
                var s = o.results;
                if (s) {
                  for (var l in s)
                    if (s.hasOwnProperty(l)) {
                      if (s[l].data && s[l].data.properties) {
                        if (
                          (s[l].bestbet &&
                            (s[l].data.properties.bestbet = s[l].bestbet),
                          s[l].nickname &&
                            (s[l].data.properties.nickname = s[l].nickname),
                          s[l].data.versions &&
                            s[l].data.versions.file_size &&
                            (s[l].data.properties.size =
                              s[l].data.versions.file_size),
                          s[l].data.versions &&
                            s[l].data.versions.version_id &&
                            (s[l].data.properties.version_id =
                              s[l].data.versions.version_id),
                          s[l].data.properties &&
                            s[l].data.properties.container &&
                            s[l].data.properties.container &&
                            (s[l].data.properties.size =
                              s[l].data.properties.container_size),
                          s[l].data.properties.summary)
                        ) {
                          var g = s[l].data.properties.summary;
                          (s[l].data.properties.stringifiedSummary =
                            this.jsonToStringTokenizer(g)),
                            e
                              ? (s[l].data.properties.summary =
                                  s[l].data.properties.stringifiedSummary)
                              : (s[l].data.properties.summary =
                                  (Array.isArray(g) && g.length > 1) ||
                                  (g.length === 1 && g[0].length)
                                    ? g
                                    : void 0);
                        }
                        s[l].data.properties.reserved_user_id_expand &&
                          (s[l].data.properties.reserved_user_id =
                            s[l].data.properties.reserved_user_id_expand);
                      }
                      if (s[l].links && s[l].links.ancestors) {
                        var f = [],
                          u = s[l].links.ancestors,
                          p = [];
                        if (u) {
                          for (var x in u)
                            if (u.hasOwnProperty(x)) {
                              var S = new m(),
                                T = parseInt(x, 10),
                                k = {},
                                A = u[T];
                              (k.id = A.href.substring(
                                A.href.lastIndexOf("/") + 1,
                                A.href.length
                              )),
                                (k.volume_id = T === 0 ? k.id : p[0]),
                                (k.parent_id = T === 0 ? "-1" : p[T - 1]),
                                n.usesIntegerId &&
                                  ((k.id = parseInt(k.id)),
                                  (k.volume_id = parseInt(k.volume_id)),
                                  (k.parent_id = parseInt(k.parent_id))),
                                p.push(k.id),
                                (k.name = A.name),
                                (k.showAsLink = !0),
                                (S.attributes = k),
                                f.push(S);
                            }
                        }
                        s[l].data.properties.ancestors = f;
                      }
                      for (var M in s[l].data.regions)
                        s[l].data.regions.hasOwnProperty(M) &&
                          (s[l].data.properties[M] = s[l].data.regions[M]);
                      s[l].search_result_metadata &&
                        (s[l].data.properties.search_result_metadata =
                          s[l].search_result_metadata);
                    }
                }
              },
              jsonToStringTokenizer: function (o) {
                var t = "";
                for (var i in o)
                  o.hasOwnProperty(i) && (t += o[i].type ? o[i].text : o[i]);
                return t;
              },
              parseBrowsedItems: function (o, t) {
                return o.results;
              },
              excludeSelectedAndInvalidFacets: function (o) {
                var t = o.collection.searching;
                if (t && t.facets && t.facets.available) {
                  var i = t.facets.available;
                  if (t.facets.selected)
                    for (
                      var s = t.facets.selected, l = s.length, g = 0;
                      g < l;
                      g++
                    )
                      for (var f = i.length, u = 0; u < f; u++) {
                        var p = i[u].name;
                        if (p === s[g].name)
                          for (
                            var x = s[g].facet_items.length, S = 0;
                            S < x;
                            S++
                          )
                            for (
                              var T = i[u].facet_items.length, k = 0;
                              k < T;
                              k++
                            )
                              i[u].facet_items[k].display_name ===
                                s[g].facet_items[S].display_name &&
                                (i[u].facet_items.splice(k, 1),
                                k--,
                                (T = i[u].facet_items.length));
                        else
                          i[u].facet_items.length === 0 &&
                            (i.splice(u, 1), (f = i.length), u--);
                      }
                }
              },
            });
          },
        };
      return a;
    }
  ),
  csui.define(
    "csui/models/widget/search.results/server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/url",
      "csui/models/widget/search.results/search.facet.query.mixin",
      "csui/models/node.columns2",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = {
        mixin: function (c) {
          m.mixin(c);
          var o = c.sync;
          return r.extend(c, {
            filterQueryParameterName: "filter",
            makeServerAdaptor: function (t) {
              return this.makeFacetQuery(t);
            },
            cacheId: "",
            url: function () {
              var t = this.connector.getConnectionUrl().getApiBase("v2");
              return v.combine(t, "search");
            },
            sync: function (t, i, s) {
              var l = this.options.query.toJSON(),
                g = this.options.urlOptions || ["'highlight_summaries'"];
              return (
                s.fetchFacets !== void 0 && (this.fetchFacets = s.fetchFacets),
                this.fetchFacets && g.push("'facets'"),
                this.options.query.resetDefaults &&
                  ((this.skipCount = 0),
                  (this.options.query.resetDefaults = !1)),
                this.searchFacets &&
                  (!this.searchFacets.filters ||
                    this.searchFacets.filters.length === 0) &&
                  g.push("'featured'"),
                this.searchFacets &&
                  r.extend(l, this.getFilterParam(this.searchFacets.filters)),
                r.extend(l, this._getBrowsableParams()),
                r.extend(l, this.getStateEnablingUrlQuery()),
                r.extend(l, this.getResourceFieldsUrlQuery()),
                r.extend(l, this.getRequestedCommandsUrlQuery()),
                (l.options = "{" + g.toString() + "}"),
                (l.expand = [
                  "properties{original_id,owner_user_id,create_user_id,owner_id,reserved_user_id,parent_id,locked_user_id}",
                  "versions{locked_user_id}",
                ]),
                (l.lookfor = this.options.query.get("lookfor")),
                (l.modifier = this.options.query.get("modifier")),
                (this.orderBy ||
                  this.pagination ||
                  this.options.query.viewStateCacheId) &&
                  this.cacheId &&
                  ((l.cache_id = this.cacheId), (this.pagination = !1)),
                r.extend(s, {
                  type: "POST",
                  contentType: "application/x-www-form-urlencoded",
                  data: l,
                  traditional: !0,
                }),
                o.apply(this, arguments)
              );
            },
            _getBrowsableParams: function () {
              var t = this.getBrowsableParams();
              return (
                t &&
                  t.sort &&
                  (t.sort.search("asc_desc_") === 0 ||
                    t.sort.search("asc_asc_") === 0) &&
                  (t.sort = t.sort.replace("asc_", "")),
                t
              );
            },
            parse: function (t, i) {
              if (
                (t.featured &&
                  (t.featured = r.filter(t.featured, function (A) {
                    return !!A.bestbet || !!A.nickname;
                  })),
                this.addRegionsToPromotedList(t.featured),
                t.collection.searching)
              ) {
                var s = new n(),
                  l = r.clone(t.collection.searching.regions_metadata),
                  g = r.clone(r.uniq(t.collection.searching.regions_order)),
                  f = [];
                r.each(l, function (M, N) {
                  var R = 500 + g.indexOf(N);
                  (M.definitions_order = R),
                    (M.key = N),
                    (M.sortable = !1),
                    (M.column_key = N),
                    (M.column_name = N),
                    (M.default_action =
                      ["OTLocation", "OTName", "OTMIMEType"].indexOf(N) >= 0),
                    (M.default =
                      ["OTLocation", "OTName", "OTMIMEType"].indexOf(N) >= 0),
                    (M.completeName = M.name),
                    (M.titleAttr = M.name.replace(/:([^\s])/, ": $1")),
                    (M.name = M.name && M.name.replace(/^[^:]*:\s*/, "")),
                    f.push(M);
                }),
                  f.push({
                    key: "favorite",
                    column_key: "favorite",
                    default: !0,
                  }),
                  f.push({
                    key: "reserved",
                    column_key: "reserved",
                    default: !0,
                  });
                var u = r.pluck(t.results, "search_result_metadata"),
                  p = r.where(u, { current_version: !1 });
                p = p.length ? p : r.where(u, { version_type: "minor" });
                const A = t.results.filter((M) =>
                  M.data?.properties?.hasOwnProperty("wnd_comments")
                );
                p &&
                  p.length > 0 &&
                  f.push({ key: "version_id", column_key: "version_id" }),
                  A.length > 0 &&
                    f.push({ key: "wnd_comments", column_key: "wnd_comments" }),
                  s.reset(f),
                  (t.collection.searching.sortedColumns = s),
                  r.each(t.results, function (M) {
                    M.data.versions &&
                      M.search_result_metadata &&
                      (M.search_result_metadata.current_version === !1 ||
                        M.search_result_metadata.version_type === "minor") &&
                      (M.data.versions.current_version = !1);
                  });
              }
              var x = t.collection.sorting.links;
              for (var S in x)
                if (S.search("asc_") === 0) {
                  var T = x[S].display_name
                    ? x[S].display_name
                    : this.trimSortOptionName(x[S].name);
                  T = T.trim();
                  var k = t.collection.searching.sortedColumns.where({
                    completeName: T,
                  });
                  k && k.length > 0 && k[0].set("sort", !0);
                }
              return (
                (t.results =
                  t.featured &&
                  t.collection.sorting &&
                  t.collection.sorting.sort[0] === "relevance"
                    ? t.featured.concat(t.results)
                    : t.results),
                this.parseBrowsedState(t.collection, i),
                this.parseSearchResponse(t, i),
                i.fetchFacets &&
                  this._parseFacets(t.collection.searching.facets),
                (t.results.sorting = t.collection.sorting),
                (this.cacheId =
                  t.collection &&
                  t.collection.searching &&
                  t.collection.searching.cache_id
                    ? t.collection.searching.cache_id
                    : ""),
                (this.searchResultHeader =
                  t.collection?.paging?.result_header_string),
                this.parseBrowsedItems(t, i)
              );
            },
            trimSortOptionName: function (t) {
              return t.replace(
                /\(*\s([;\s\w\W\"\=\,\:\.\/\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\)/g,
                ""
              );
            },
            addRegionsToPromotedList: function (t) {
              r.each(t, function (i, s) {
                i.data.regions = {
                  OTMIMEType: i.data.properties.mime_type,
                  OTName: i.data.properties.name,
                  OTLocation: i.data.properties.parent_id,
                  OTObjectDate: i.data.properties.create_date,
                  OTModifyDate: i.data.properties.modify_date,
                  OTObjectSize: i.data.properties.size,
                };
              });
            },
            _parseFacets: function (t) {
              var i;
              t && (i = a(t.selected, !0).concat(a(t.available, !1))),
                this.searchFacets.reset(i);
            },
          });
        },
      };
      function a(c, o) {
        return r.map(c, function (t) {
          var i = r.map(t.facet_items, function (s) {
            return {
              name: s.display_name,
              total: s.count,
              value: s.value,
              selected: o,
            };
          });
          return {
            id: t.name,
            name: t.display_name,
            type: t.type,
            topics: i,
            items_to_show: 5,
            select_multiple: !0,
          };
        });
      }
      return e;
    }
  ),
  csui.define(
    "csui/models/widget/search.results/search.results.model",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/models/node/node.model",
      "csui/models/mixins/connectable/connectable.mixin",
      "csui/models/mixins/fetchable/fetchable.mixin",
      "csui/models/browsable/browsable.mixin",
      "csui/models/browsable/v1.request.mixin",
      "csui/models/browsable/v2.response.mixin",
      "csui/models/mixins/state.requestor/state.requestor.mixin",
      "csui/models/mixins/v2.delayed.commandable/v2.delayed.commandable.mixin",
      "csui/models/mixins/v2.additional.resources/v2.additional.resources.mixin",
      "csui/models/mixins/v2.fields/v2.fields.mixin",
      "csui/models/mixins/v2.expandable/v2.expandable.mixin",
      "csui/models/widget/search.results/search.response.mixin",
      "csui/models/widget/search.results/server.adaptor.mixin",
      "csui/utils/contexts/perspective/plugins/node/node.extra.data",
      "csui/utils/contexts/perspective/plugins/node/utils/merge.extra.data",
      "i18n!csui/models/widget/nls/lang",
      "csui/utils/deepClone/deepClone",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l, g, f, u, p, x, S) {
      "use strict";
      var T = v.Collection.extend({
        model: m,
        constructor: function (A, M) {
          (this.options = M || (M = {})),
            v.Collection.prototype.constructor.call(this, A, M),
            (this.title = S.searchResults),
            M.fields || (M.fields = p.getModelFields()),
            M.expand ||
              (M.expand = x(p.getModelExpand(), {
                properties: [
                  "reserved_user_id",
                  "original_id",
                  "owner_user_id",
                  "create_user_id",
                  "owner_id",
                  "reserved_user_id",
                  "parent_id",
                ],
              })),
            this.makeConnectable(M)
              .makeFetchable(M)
              .makeAdditionalResourcesV2Mixin(M)
              .makeBrowsable(M)
              .makeBrowsableV1Request(M)
              .makeFieldsV2(M)
              .makeExpandableV2(M)
              .makeBrowsableV2Response(M)
              .makeStateRequestor(M)
              .makeDelayedCommandableV2(M)
              .makeSearchResponse(M)
              .makeServerAdaptor(M);
        },
        clone: function () {
          return new this.constructor(this.models, {
            connector: this.connector,
            skip: this.skipCount,
            top: this.topCount,
            filter: r.deepClone(this.filters),
            orderBy: r.clone(this.orderBy),
            expand: r.clone(this.expand),
            includeActions: this.includeActions,
            commands: r.clone(this.commands),
            defaultActionCommands: r.clone(this.defaultActionCommands),
            delayRestCommands: this.delayRestCommands,
            query: this.options.query,
          });
        },
        isFetchable: function () {
          return (
            !!this.options.query.get("where") ||
            !!this.options.query.get("query_id")
          );
        },
        setDefaultPageNum: function () {
          this.skipCount = 0;
        },
        setCacheId: function (k) {
          this.cacheId = k;
        },
        setPreviousOrder: function (k, A) {
          if (this.previousOrderBy != k)
            return (
              (this.previousOrderBy = k),
              A !== !1 && this.fetch({ skipSort: !1 }),
              !0
            );
        },
        getResourceScope: function () {
          return r.deepClone({
            includeResources: this._additionalResources,
            commands: this.commands,
            defaultActionCommands: this.defaultActionCommands,
          });
        },
        setResourceScope: function (k) {
          this.excludeResources(),
            k.includeResources && this.includeResources(k.includeResources),
            this.resetCommands(),
            k.commands && this.setCommands(k.commands),
            this.resetDefaultActionCommands(),
            k.defaultActionCommands &&
              this.setDefaultActionCommands(k.defaultActionCommands);
        },
      });
      return (
        a.mixin(T.prototype),
        c.mixin(T.prototype),
        o.mixin(T.prototype),
        l.mixin(T.prototype),
        g.mixin(T.prototype),
        n.mixin(T.prototype),
        e.mixin(T.prototype),
        t.mixin(T.prototype),
        s.mixin(T.prototype),
        f.mixin(T.prototype),
        u.mixin(T.prototype),
        i.mixin(T.prototype),
        T
      );
    }
  ),
  csui.define(
    "csui/models/permission/permission.table.columns.model",
    ["csui/lib/underscore", "csui/lib/backbone"],
    function (r, y, v, m) {
      var n = y.Model.extend({
        idAttribute: "key",
        defaults: { key: null, sequence: 0 },
      });
      return n;
    }
  ),
  csui.define(
    "hbs!csui/controls/full.page.modal/full.page.modal",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<div class="binf-modal-dialog">
  <div class="binf-modal-content">
  </div>
</div>
`;
        },
      });
      return (
        v.registerPartial("csui_controls_full.page.modal_full.page.modal", m), m
      );
    }
  ),
  csui.define(
    "css!csui/controls/full.page.modal//full.page.modal",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/full.page.modal/full.page.modal.view",
    [
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/non-emptying.region/non-emptying.region",
      "hbs!csui/controls/full.page.modal/full.page.modal",
      "css!csui/controls/full.page.modal//full.page.modal",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = y.LayoutView.extend({
        className: "csui-full-page-modal binf-modal binf-fade",
        template: m,
        regions: { content: ".binf-modal-content" },
        events: {
          "shown.binf.modal": "_refresh",
          "hidden.binf.modal": "destroy",
        },
        constructor: function (a) {
          y.LayoutView.prototype.constructor.apply(this, arguments),
            (this.view = this.options.view);
        },
        show: function () {
          var e = r.fn.binf_modal.getDefaultContainer(),
            a = new v({ el: e });
          return a.show(this), this;
        },
        onRender: function () {
          this.listenTo(this.view, "destroy", function () {
            this.$el.binf_modal("hide");
          }),
            r(window).scrollTop(0),
            this.$el.binf_modal({ backdrop: "static", keyboard: !1 });
        },
        _refresh: function () {
          this.content.show(this.options.view),
            this.view.triggerMethod("dom:refresh");
        },
      });
      return n;
    }
  ),
  csui.define(
    "csui/utils/commands/impl/full.page.modal/full.page.modal.view",
    ["csui/controls/full.page.modal/full.page.modal.view"],
    function (r) {
      return r;
    }
  ),
  csui.define(
    "csui/utils/thumbnail/server.adaptor.mixin",
    [
      "csui/lib/underscore",
      "csui/utils/thumbnail/thumbnail.object",
      "csui/utils/url",
    ],
    function (r, y, v) {
      "use strict";
      var m = {
        mixin: function (n) {
          return r.extend(n, {
            makeServerAdaptor: function (e) {
              return this;
            },
            url: function () {
              var e = this.options.node,
                a = e.get("id"),
                c = e.get("version_number"),
                o = c ? "&version_number=" + c : "";
              return v.combine(
                e.connector.connection.url,
                "/nodes",
                a,
                "/thumbnails/medium/content?suppress_response_codes" + o
              );
            },
            available: function () {
              var e = [144, 145, 736, 749];
              return r.contains(e, this.options.node.get("type"));
            },
            getPhotOptions: function (e) {
              e = e || this.options.node;
              var a = e && e.get("id"),
                c = v.combine(
                  e.connector.connection.url,
                  "/nodes",
                  a,
                  "/content?suppress_response_codes"
                );
              return { url: c, dataType: "binary" };
            },
            getContentUrl: function (e) {
              return URL.createObjectURL(e);
            },
          });
        },
      };
      return m;
    }
  ),
  csui.define(
    "csui/utils/thumbnail/thumbnail.object",
    [
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/url",
      "csui/utils/base",
      "csui/utils/thumbnail/server.adaptor.mixin",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = y.Object.extend({
        constructor: function (c) {
          y.Object.prototype.constructor.apply(this, arguments),
            (this.node = this.options.node),
            this.listenTo(this.node, "change:id", this.loadUrl).listenTo(
              this,
              "destroy",
              this.release
            ),
            this.makeServerAdaptor(c);
        },
        loadUrl: function () {
          if (!this.node.get("csuiThumbnailImageUrl")) {
            var a = this.url(),
              c = this;
            return (
              this.release(),
              this.node.connector
                .makeAjaxCall({ url: a, dataType: "binary" })
                .then(
                  function (o) {
                    c.load(o);
                  },
                  function (o) {
                    c._failureHandler(o);
                  }
                )
            );
          }
        },
        load: function (a) {
          var c = this;
          if (a.type && a.type.match(/application\/json/i)) {
            var o = new window.FileReader();
            o.readAsText(a),
              (o.onload = function (t) {
                var i = JSON.parse(t.target.result);
                i.statusCode === 404 && c._failureHandler(i.error);
              });
          } else
            (c.imgUrl = URL.createObjectURL(a)),
              c.options.node.set("csuiThumbnailImageUrl", c.imgUrl, {
                silent: !0,
              }),
              c.triggerMethod("loadUrl", c, c.imgUrl);
        },
        release: function () {
          this.imgUrl &&
            (URL.revokeObjectURL(this.imgUrl),
            delete this.imgUrl,
            this.options.node.unset("csuiThumbnailImageUrl", { silent: !0 }));
        },
        _failureHandler: function (a) {
          var c = new m.Error(new Error(a));
          return (
            this.triggerMethod("error", this, c),
            r.Deferred().reject(c).promise()
          );
        },
      });
      return n.mixin(e.prototype), e;
    }
  ),
  csui.define(
    "hbs!csui/utils/thumbnail/loading.thumbnail",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "<p>" +
            n.escapeExpression(
              ((t =
                (t = i(a, "loading") || (e != null ? i(e, "loading") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "loading",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 3 },
                      end: { line: 1, column: 14 },
                    },
                  })
                : t)
            ) +
            `</p>
`
          );
        },
      });
      return v.registerPartial("csui_utils_thumbnail_loading.thumbnail", m), m;
    }
  ),
  csui.define(
    "hbs!csui/utils/thumbnail/no.thumbnail",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            "<p>" +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "notAvailable") ||
                  (e != null ? i(e, "notAvailable") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "notAvailable",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 3 },
                      end: { line: 1, column: 19 },
                    },
                  })
                : t)
            ) +
            `</p>
`
          );
        },
      });
      return v.registerPartial("csui_utils_thumbnail_no.thumbnail", m), m;
    }
  ),
  csui.define(
    "hbs!csui/utils/thumbnail/thumbnail",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '<img src="' +
            n.escapeExpression(
              ((t =
                (t = i(a, "url") || (e != null ? i(e, "url") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "url",
                    hash: {},
                    loc: {
                      start: { line: 1, column: 10 },
                      end: { line: 1, column: 17 },
                    },
                  })
                : t)
            ) +
            `" alt="">
`
          );
        },
      });
      return v.registerPartial("csui_utils_thumbnail_thumbnail", m), m;
    }
  ),
  csui.define("css!csui/utils/thumbnail/thumbnail", [], function () {}),
  csui.define(
    "csui/utils/thumbnail/thumbnail.view",
    [
      "csui/lib/marionette",
      "csui/utils/thumbnail/thumbnail.object",
      "hbs!csui/utils/thumbnail/loading.thumbnail",
      "hbs!csui/utils/thumbnail/no.thumbnail",
      "hbs!csui/utils/thumbnail/thumbnail",
      "i18n!csui/utils/impl/nls/lang",
      "css!csui/utils/thumbnail/thumbnail",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      var a = r.ItemView.extend({
        className: "csui-thumbnail",
        getTemplate: function () {
          var c = this.thumbnail.imgUrl;
          return c === void 0
            ? v({ loading: e.Loading })
            : c
            ? n
            : m({ notAvailable: e.NotAvailable });
        },
        constructor: function (o) {
          r.ItemView.prototype.constructor.apply(this, arguments),
            (this.thumbnail =
              this.options.thumbnail || new y({ node: this.options.node })),
            this.listenTo(this.thumbnail, "loadUrl", this.render),
            this.listenTo(this.thumbnail, "error", this.render),
            this.listenTo(this, "render", function () {
              this.thumbnail.imgUrl === void 0 && this.thumbnail.loadUrl();
            }),
            this.listenTo(this, "destroy", function () {
              this.thumbnail.destroy();
            });
        },
        serializeData: function () {
          return { imgUrl: this.thumbnail.imgUrl };
        },
      });
      return a;
    }
  ),
  csui.define(
    "hbs!csui/utils/expiration.warning/impl/expiration.warning",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '  <div class="div-inline csui-expiration-warning-dialog-text">' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "warningText") ||
                  (e != null ? i(e, "warningText") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "warningText",
                    hash: {},
                    loc: {
                      start: { line: 2, column: 62 },
                      end: { line: 2, column: 77 },
                    },
                  })
                : t)
            ) +
            `</div><BR>
  <div class="div-inline csui-expiration-warning-dialog-timevalue">
    <span class="csui-time-value-min"></span>:<span class="csui-time-value-sec"></span>
  </div>

  <p id="csui-expiration-timer-live" aria-live="assertive" aria-atomic="true"></p>  
`
          );
        },
        3: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            '  <div class="div-inline csui-expiration-warning-dialog-text">' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "warningText") ||
                  (e != null ? i(e, "warningText") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "warningText",
                    hash: {},
                    loc: {
                      start: { line: 9, column: 62 },
                      end: { line: 9, column: 77 },
                    },
                  })
                : t)
            ) +
            `</div>  
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "isExpirationWarningContent") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.program(3, o, 0),
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 10, column: 7 },
              },
            }
          )) != null
            ? t
            : "";
        },
      });
      return (
        v.registerPartial(
          "csui_utils_expiration.warning_impl_expiration.warning",
          m
        ),
        m
      );
    }
  ),
  csui.define("csui/utils/expiration.warning/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/utils/expiration.warning/impl/nls/root/lang", {
    dialogExpirationWarningTitle: "Session timeout warning",
    dialogExpirationWarningText: "Your session will expire automatically in",
    dialogExpirationWarningButtonContinueSession: "Continue session",
    dialogExpirationWarningButtonContinueSessionTooltip:
      "Refresh session and continue work",
    dialogExpirationWarningButtonContinueSessionAria:
      "Refresh session and continue work",
    dialogExpirationWarningButtonTerminateSession: "End session now",
    dialogExpirationWarningButtonTerminateSessionTooltip: "Trigger logout now",
    dialogExpirationWarningButtonTerminateSessionAria: "Trigger logout now",
    dialogExpirationWarningLoggedOutText: "Performing sign out...",
    dialogExpirationWarningButtonLeave: "Close",
    dialogExpirationWarningButtonLeaveTooltip:
      "Close the dialog and redirect to target page",
    dialogExpirationWarningButtonLeaveAria:
      "Close the dialog and redirect to target page",
    dialogExpirationWarningAriaTime:
      "The session expires in {{overallSeconds}} seconds",
    dialogExpirationWarningAriaSessionExpired: "The session has expired",
  }),
  csui.define(
    "csui/utils/expiration.warning/impl/minutes.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/utils/log",
      "csui/lib/handlebars",
    ],
    function (r, y, v, m, n) {
      "use strict";
      m = m(r.id);
      var e = v.ItemView.extend({
        className: "csui-time-value-min-value",
        tagName: "span",
        modelEvents: { change: "render" },
        template: n.compile("{{timeValueMinutes}}"),
        templateHelpers: function () {
          return { timeValueMinutes: this.model.get("minutes") };
        },
        constructor: function (c) {
          c || (c = {}), v.ItemView.prototype.constructor.call(this, c);
        },
      });
      return e;
    }
  ),
  csui.define(
    "csui/utils/expiration.warning/impl/seconds.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/marionette",
      "csui/utils/log",
      "csui/lib/handlebars",
    ],
    function (r, y, v, m, n) {
      "use strict";
      m = m(r.id);
      var e = v.ItemView.extend({
        className: "csui-time-value-sec-value",
        tagName: "span",
        modelEvents: { change: "render" },
        template: n.compile("{{timeValueSeconds}}"),
        templateHelpers: function () {
          return { timeValueSeconds: this.model.get("seconds") };
        },
        constructor: function (c) {
          c || (c = {}), v.ItemView.prototype.constructor.call(this, c);
        },
      });
      return e;
    }
  ),
  csui.define(
    "css!csui/utils/expiration.warning/impl/expiration.warning",
    [],
    function () {}
  ),
  csui.define(
    "csui/utils/expiration.warning/impl/expiration.warning.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/lib/backbone",
      "csui/utils/base",
      "hbs!csui/utils/expiration.warning/impl/expiration.warning",
      "i18n!csui/utils/expiration.warning/impl/nls/lang",
      "csui/utils/log",
      "csui/utils/expiration.warning/impl/minutes.view",
      "csui/utils/expiration.warning/impl/seconds.view",
      "csui/lib/handlebars",
      "css!csui/utils/expiration.warning/impl/expiration.warning",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s) {
      "use strict";
      o = o(r.id);
      var l = n.Model.extend({
          defaults: { initTime: Date.now(), timer: -1, minutes: 0, seconds: 0 },
        }),
        g = m.LayoutView.extend({
          className: "csui-expiration-warning",
          template: a,
          templateHelpers: function () {
            return {
              isExpirationWarningContent: !0,
              warningText: c.dialogExpirationWarningText,
              msgId: y.uniqueId("msg"),
            };
          },
          regions: {
            timeValueMinRegion: "span.csui-time-value-min",
            timeValueSecRegion: "span.csui-time-value-sec",
          },
          constructor: function (u) {
            if (
              (u || (u = {}),
              (this.authenticator = u.authenticator),
              (this.shouldDisplayExpirationTimer = u.startWithWarningContent),
              (this.UserSession = u.userSession),
              (this.startTime = u.startTime),
              (this.timerId = void 0),
              (this.isFinished = !1),
              (this.timeAriaTemplate = s.compile(
                c.dialogExpirationWarningAriaTime
              )),
              (this.cbReportExpired = u.cbReportExpired),
              (u.model = this._createModel()),
              m.LayoutView.prototype.constructor.call(this, u),
              e.isIE11())
            ) {
              var p = this,
                x = function () {
                  p.render();
                };
              v(window).on("resize", x),
                this.once("before:destroy", function () {
                  v(window).off("resize", x);
                });
            }
            this._createTimer();
          },
          _createModel: function () {
            var f = this._getReactionDuration(),
              u = this._getMinutesSeconds(f),
              p = new l({ timer: f, minutes: u.minutes, seconds: u.seconds });
            return p;
          },
          _updateAriaTimeLabel: function (f) {
            var u;
            f <= 0
              ? ((u = c.dialogExpirationWarningAriaSessionExpired),
                document
                  .getElementById("csui-expiration-timer-live")
                  .setAttribute("aria-label", u))
              : f % 10 == 0 &&
                ((u = this.timeAriaTemplate({ overallSeconds: f })),
                document
                  .getElementById("csui-expiration-timer-live")
                  .setAttribute("aria-label", u));
          },
          _createTimer: function () {
            var f = this.model.get("timer"),
              u = this;
            u.model.set({ initTime: Date.now() }, { silent: !0 });
            var p = u.model.get("initTime") + f * 1e3;
            (this.isFinished = !1),
              o.info(
                "expiration.warning.view: _createTimer: used sessionReactionTime: " +
                  u._getReactionDuration() +
                  " (Date: " +
                  u.UserSession.currentDateUTC() +
                  ")."
              ) && console.log(o.last),
              (this.timerId = setInterval(function () {
                var x = u.model.get("timer");
                if (--x < 1) {
                  (x = 0),
                    o.info(
                      "expiration.warning.view: _createTimer: Setting timer in model to " +
                        x
                    ) && console.log(o.last);
                  var S = u._getMinutesSeconds(x);
                  u.model.set({
                    timer: x,
                    minutes: S.minutes,
                    seconds: S.seconds,
                  }),
                    o.info(
                      "expiration.warning.view: _createTimer: Clearing warning timer"
                    ) && console.log(o.last),
                    u._clearWarningTimer(),
                    o.info(
                      "expiration.warning.view: _createTimer: Expiration warning timer has reached 0 (Date: " +
                        u.UserSession.currentDateUTC() +
                        ")."
                    ) && console.log(o.last),
                    u._updateAriaTimeLabel(x),
                    o.debug(
                      "expiration.warning.view: _createTimer: Trying to call cbReportExpired..."
                    ) && console.log(o.last),
                    u.cbReportExpired &&
                      (o.info(
                        "expiration.warning.view: _createTimer: Calling cbReportExpired..."
                      ) && console.log(o.last),
                      u.cbReportExpired()),
                    (u.isFinished = !0);
                }
                if (!u.isFinished) {
                  var T = Date.now(),
                    k = Math.floor((p - T + 500) / 1e3);
                  k < x &&
                    (k > 0
                      ? (o.info(
                          "expiration.warning.view: _createTimer: Adjusting timer value to actual time, using: " +
                            k +
                            " (currentTimer was: " +
                            x +
                            ")"
                        ) && console.log(o.last),
                        (x = k))
                      : (o.info(
                          "expiration.warning.view: _createTimer: Adjusting timer value to 0, diff was: " +
                            k +
                            " (currentTimer was: " +
                            x +
                            ")"
                        ) && console.log(o.last),
                        (x = 0))),
                    o.debug(
                      "expiration.warning.view: _createTimer: Setting timer in model to " +
                        x
                    ) && console.log(o.last);
                  var S = u._getMinutesSeconds(x);
                  u.model.set({
                    timer: x,
                    minutes: S.minutes,
                    seconds: S.seconds,
                  }),
                    u._updateAriaTimeLabel(x),
                    o.debug(
                      "expiration.warning.view: _createTimer: Expected end time in ms: " +
                        p +
                        " (current: " +
                        T +
                        ", diff: " +
                        (p - T) +
                        ")"
                    ) && console.log(o.last);
                }
              }, 1e3)),
              o.info(
                "expiration.warning.view: _createTimer: created timerId is '" +
                  this.timerId +
                  "'."
              ) && console.log(o.last);
          },
          onClearTimer: function () {
            o.debug(
              "expiration.warning.view: onClearTimer: clearing view timer..."
            ) && console.log(o.last),
              this._clearWarningTimer();
          },
          onBeforeDestroy: function () {
            this._clearWarningTimer();
          },
          _clearWarningTimer: function () {
            o.info(
              "expiration.warning.view: _clearWarningTimer: clearing timer with id '" +
                this.timerId +
                "'"
            ) && console.log(o.last),
              this.timerId &&
                (clearInterval(this.timerId), (this.timerId = void 0));
          },
          _getReactionDuration: function () {
            var f =
              this.startTime !== void 0
                ? this.startTime
                : this.UserSession.getSessionReactionTime() / 1e3 - 1;
            return f < 0 && (f = 0), f;
          },
          _getMinutesSeconds: function (f) {
            var u, p;
            return (
              (u = parseInt(f / 60, 10)),
              (p = parseInt(f % 60, 10)),
              (u = u < 10 ? "0" + u : u),
              (p = p < 10 ? "0" + p : p),
              { minutes: u, seconds: p }
            );
          },
          onRender: function () {
            if (!this.isFinished && this.shouldDisplayExpirationTimer) {
              o.debug(
                "expiration.warning.view: onRender: rendering time views ..."
              ) && console.log(o.last);
              var f = new t({ model: this.model }),
                u = new i({ model: this.model });
              this.showChildView("timeValueMinRegion", f),
                this.showChildView("timeValueSecRegion", u);
            }
          },
          onKeyInView: function (f) {
            (f.keyCode === 32 || f.keyCode === 13) &&
              (f.preventDefault(),
              f.stopPropagation(),
              v(f.target).trigger("click"));
          },
        });
      return g;
    }
  ),
  csui.define(
    "csui/utils/expiration.warning/impl/expiration.warning.dialog",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/utils/expiration.warning/impl/expiration.warning.view",
      "csui/dialogs/modal.alert/modal.alert",
      "i18n!csui/utils/expiration.warning/impl/nls/lang",
      "csui/utils/log",
      "css!csui/utils/expiration.warning/impl/expiration.warning",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      c = c(r.id);
      var o = "md",
        t = !1,
        i,
        s,
        l = void 0;
      function g(A) {
        var M = [];
        A.startWithWarningContent === !0
          ? (M.push({
              showYes: !0,
              labelYes: a.dialogExpirationWarningButtonContinueSession,
              tooltipYes: a.dialogExpirationWarningButtonContinueSessionTooltip,
              ariaYes: a.dialogExpirationWarningButtonContinueSessionAria,
              clickYes: function (G) {
                var $ = y.extend({ dialogOptions: A }, { dialog: G });
                $.dialogOptions.authenticator.isAuthenticated() === !0 &&
                  $.dialogOptions.cbClearExpirationTimer(),
                  $.dialog &&
                    !$.dialog.isDestroyed &&
                    $.dialog.updateButtons({ disableYes: !0, disableNo: !0 }),
                  $.dialogOptions.cbDestroyDialog(),
                  c.info(
                    "expiration.warning: User continued session, performing REST-call (Date: " +
                      $.dialogOptions.userSession.currentDateUTC() +
                      ")."
                  ) && console.log(c.last),
                  $.dialogOptions.userSession.continueSession(
                    $.dialogOptions.authenticator
                  );
              },
            }),
            M.push({
              showNo: !0,
              labelNo: a.dialogExpirationWarningButtonTerminateSession,
              tooltipNo: a.dialogExpirationWarningButtonTerminateSessionTooltip,
              ariaNo: a.dialogExpirationWarningButtonTerminateSessionAria,
              clickNo: function (G) {
                var $ = y.extend({ dialogOptions: A }, { dialog: G });
                $.dialogOptions.cbClearExpirationTimer(),
                  $.dialog &&
                    !$.dialog.isDestroyed &&
                    $.dialog.updateButtons({ disableNo: !0, disableYes: !0 }),
                  $.dialogOptions.cbDestroyDialog(),
                  c.info(
                    "expiration.warning: User terminated session, performing signOut (Date: " +
                      $.dialogOptions.userSession.currentDateUTC() +
                      ")."
                  ) && console.log(c.last),
                  $.dialogOptions.userSession.signOut(
                    $.dialogOptions.authenticator
                  );
              },
            }))
          : M.push({
              showYes: !0,
              labelYes: a.dialogExpirationWarningButtonLeave,
              tooltipYes: a.dialogExpirationWarningButtonLeaveTooltip,
              ariaYes: a.dialogExpirationWarningButtonLeaveAria,
              clickYes: function (G) {
                var $ = y.extend({ dialogOptions: A }, { dialog: G });
                $.dialogOptions.cbClearExpirationTimer(),
                  $.dialog &&
                    !$.dialog.isDestroyed &&
                    $.dialog.updateButtons({ disableYes: !0 }),
                  c.info(
                    "expiration.warning: Redirecting to target page...'"
                  ) && console.log(c.last),
                  $.dialogOptions.userSession.redirectToTargetPage(
                    $.dialogOptions.authenticator
                  );
              },
            });
        var N,
          R = M.length,
          K = { showYes: !1, showNo: !1, showCancel: !1 };
        for (N = 0; N < R; N++) K = y.extend(K, M[N]);
        return K;
      }
      function f(A) {
        A || (A = {});
        var M = A.userSession,
          N = A.authenticator;
        N ||
          (c.error(
            "expiration.warning: createExpirationWarningDialog: Given authenticator is 'undefined'!"
          ) &&
            console.error(c.last));
        var R = !!(
            A.startWithWarningContent && A.startWithWarningContent === !0
          ),
          K = A.clearExpirationTimer,
          G = A.closeDialog,
          $ = A.startTime;
        return (
          (t = !1),
          (i = {
            userSession: M,
            authenticator: N,
            startWithWarningContent: R,
            startTime: $,
            cbClearExpirationTimer: K,
            cbDestroyDialog: G,
          }),
          (s = g(i)),
          (i = y.extend(i, { buttonsData: s })),
          (l = new e(
            y.defaults(
              { dialogSize: o },
              {
                bodyView: n,
                bodyViewOptions: {
                  userSession: M,
                  authenticator: N,
                  startTime: $,
                  startWithWarningContent: R,
                  cbReportExpired: function () {
                    l &&
                      !l.isDestroyed &&
                      l.updateButtons({ disableNo: !0, disableYes: !0 }),
                      c.debug(
                        "expiration.warning: Timeout warning dialog reported that it has reached 0 (Date: " +
                          M.currentDateUTC() +
                          ")."
                      ) && console.log(c.last);
                  },
                },
                title: a.dialogExpirationWarningTitle,
                showTitleCloseButton: !1,
                staticBackdrop: !0,
                closeWithEsc: !1,
                buttons: s,
              },
              e.defaultOptions.Warning
            )
          )),
          l
        );
      }
      function u(A) {
        var M = v.Deferred();
        return (
          c.debug(
            "expiration.warning: _showExpirationWarningDialog: setting displayed to true."
          ) && console.log(c.last),
          (t = !0),
          A.show()
            .then(
              function (R) {
                s.clickYes(A), M.resolve(R);
              },
              function (R) {
                R === !1 && s.clickNo(A), M.reject(R);
              }
            )
            .always(function () {
              c.debug(
                "expiration.warning: _showExpirationWarningDialog: setting displayed to false."
              ) && console.log(c.last),
                (t = !1);
            }),
          M.promise()
        );
      }
      function p(A) {
        var M = f(A);
        return { promise: u(M), expWarnDlg: M };
      }
      function x() {
        return t;
      }
      function S(A) {
        c.debug("expiration.warning: destroyDialog: called...") &&
          console.log(c.last),
          A &&
            (c.info("expiration.warning: destroyDialog: destroying dialog") &&
              console.log(c.last),
            A.destroy()),
          (t = !1),
          (A = void 0);
      }
      function T(A, M) {
        if (
          (c.info(
            "expiration.warning: resetStartTime: setting start time to '" +
              M.startTime +
              "' secs."
          ) && console.log(c.last),
          A)
        ) {
          c.debug(
            "expiration.warning: resetStartTime: creating new view and showing in 'bodyRegion'..."
          ) && console.log(c.last);
          var N = new n(M);
          A.showChildView("bodyRegion", N),
            A.updateButtons({ disableNo: !1, disableYes: !1 });
        }
      }
      function k(A) {
        A
          ? (c.debug(
              "expiration.warning: triggerClearTimer: Sending event 'clear:timer' to expiration warning dialog..."
            ) && console.log(c.last),
            A.triggerMethod("clear:timer", "someValue"))
          : c.debug(
              "expiration.warning: triggerClearTimer: Skipping sending event 'clear:timer' to expiration warning dialog, because dialog is already destroyed."
            ) && console.log(c.last);
      }
      return {
        showExpirationWarningDialog: p,
        isDisplayed: x,
        destroyDialog: S,
        triggerClearTimer: k,
        resetStartTime: T,
      };
    }
  ),
  csui.define(
    "csui/utils/expiration.warning/expiration.warning.dialog",
    [
      "module",
      "csui/lib/underscore",
      "csui/utils/expiration.warning/impl/expiration.warning.dialog",
      "csui/utils/log",
    ],
    function (r, y, v, m) {
      "use strict";
      m = m(r.id);
      var n = function () {
        var e, a;
        function c() {
          (e = void 0), (a = void 0);
        }
        function o() {
          return !!(e && v.isDisplayed());
        }
        function t(g) {
          e &&
            v &&
            (y.extend(a, { startTime: g }), v.resetStartTime(e.expWarnDlg, a));
        }
        function i() {
          e &&
            o() &&
            (m.info("expiration.warning.dialog: close dialog...") &&
              console.log(m.last),
            v.destroyDialog(e.expWarnDlg)),
            c();
        }
        function s() {
          e &&
            o() &&
            (m.info(
              "expiration.warning.dialog: triggering 'clear:timer' event on dialog..."
            ) && console.log(m.last),
            v.triggerClearTimer(e.expWarnDlg));
        }
        function l(g) {
          return (
            (!e || !e.expWarnDlg) &&
              ((a = g), (e = v.showExpirationWarningDialog(g))),
            e.promise
          );
        }
        return (
          c(),
          {
            showExpirationWarningDialog: l,
            isDisplayed: o,
            resetStartTime: t,
            triggerClearTimer: s,
            closeDialog: i,
          }
        );
      };
      return n();
    }
  ),
  csui.define(
    "csui/utils/commands/open.plugins/impl/browser.plugin",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/base",
      "json!csui/utils/commands/open.types.json",
      "csui/utils/content.helper",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e =
          window.csui.requirejs.s.contexts._.config.config[
            "csui/utils/commands/open"
          ] || {},
        a = r
          .chain(navigator.plugins || [])
          .map(function (t) {
            return r
              .chain(t)
              .map(function (i) {
                return i.type;
              })
              .value();
          })
          .flatten()
          .compact()
          .invoke("toLowerCase")
          .value();
      (e = r.extend(
        {
          mimeTypesForOpen: m.mimeTypesForOpen,
          officeMimeTypes: m.officeMimeTypes,
          forceDownloadForMimeTypes: [],
          forceDownloadForAll: !1,
        },
        e
      )),
        (e.mimeTypesForOpen = r.invoke(e.mimeTypesForOpen, "toLowerCase")),
        (e.officeMimeTypes = r.invoke(e.officeMimeTypes, "toLowerCase")),
        (e.forceDownloadForMimeTypes = r.invoke(
          e.forceDownloadForMimeTypes,
          "toLowerCase"
        )),
        (e.mimeTypesForOpen = r
          .chain(e.mimeTypesForOpen)
          .concat(a)
          .unique()
          .invoke("toLowerCase")
          .value());
      function c() {}
      (c.prototype.getUrl = function (t) {
        return o(t);
      }),
        (c.isSupported = function (t) {
          var i = t.get("mime_type");
          if (i) {
            let s =
              e.forceDownloadForMimeTypes.indexOf(i) === -1 &&
              !e.forceDownloadForAll;
            return t.get("rendition_type") && s
              ? !0
              : ((i = i.toLowerCase()),
                v.isAppleMobile() || (e.mimeTypesForOpen.indexOf(i) >= 0 && s));
          }
        }),
        (c.prototype.needsAuthentication = function (t) {
          return !0;
        });
      function o(t) {
        var i,
          s = (t.get("mime_type") || "").toLowerCase();
        !v.isAppleMobile() &&
          e.officeMimeTypes.indexOf(s) >= 0 &&
          !t.get("rendition_type") &&
          (i = !0);
        var l = n.getContentPageUrl(t, { download: !!i });
        return y.Deferred().resolve(l).promise();
      }
      return c;
    }
  ),
  csui.define(
    "csui/utils/commands/open.plugins/impl/core.open.plugins",
    [
      "csui/utils/commands/open.plugins/impl/brava.plugin",
      "csui/utils/commands/open.plugins/impl/browser.plugin",
    ],
    function (r, y) {
      "use strict";
      return [
        { sequence: 200, plugin: r, decides: r.isSupported },
        { sequence: 600, plugin: y, decides: y.isSupported },
      ];
    }
  ),
  csui.define(
    "csui/utils/contexts/factories/search.results.factory",
    [
      "require",
      "module",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/contexts/factories/factory",
      "csui/utils/contexts/factories/connector",
      "csui/utils/contexts/factories/search.query.factory",
      "csui/models/widget/search.results/search.results.model",
      "csui/utils/commands",
      "csui/utils/base",
    ],
    function (r, y, v, m, n, e, a, c, o, t) {
      var i = n.extend(
        {
          propertyPrefix: "searchResults",
          constructor: function (l, g) {
            n.prototype.constructor.apply(this, arguments);
            var f = this.options.searchResults || {};
            if (!(f instanceof m.Collection)) {
              var u = l.getObject(e, g),
                p = g.searchResults.query,
                x = y.config();
              f = new c(
                f.models,
                v.extend(
                  {
                    connector: u,
                    query: p,
                    stateEnabled: !0,
                    commands: o.getAllSignatures(),
                  },
                  f.options,
                  x.options,
                  { autofetch: !0, autoreset: !0 }
                )
              );
            }
            this.property = f;
          },
          isFetchable: function () {
            return this.property.isFetchable();
          },
          fetch: function (s) {
            !this.property.fetched &&
              this.property.fetch({
                success: v.bind(this._onSearchResultsFetched, this, s),
                error: v.bind(this._onSearchResultsFailed, this, s),
              });
          },
          _onSearchResultsFetched: function (s) {
            return !0;
          },
          _onSearchResultsFailed: function (s, l, g) {
            var f = new t.RequestErrorMessage(g);
            csui.require(
              ["csui/dialogs/modal.alert/modal.alert"],
              function (u) {
                u.showError(f.toString());
              }
            );
          },
        },
        {
          getDefaultResourceScope: function () {
            return v.deepClone({ commands: o.getAllSignatures() });
          },
        }
      );
      return i;
    }
  ),
  csui.define(
    "hbs!csui/controls/signin/impl/signin",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `<div class="login-container">
  <div class="login-controls">
    <div class="branding"><span role="presentation" class="ot-logo">&nbsp;</span></div>
    <div class="login-error" id="loginError"></div>
    <div class="login-form-wrapper">
      <form>
        <div class="binf-form-group binf-has-feedback">
          <div class="col-md-20">
            <input id="inputUsername" type="text" class="binf-form-control binf-input-lg textbox hasclear"
                   placeholder="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "placeholderusername") ||
                  (e != null ? i(e, "placeholderusername") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "placeholderusername",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 32 },
                      end: { line: 10, column: 55 },
                    },
                  })
                : t)
            ) +
            '" aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "userNameAria") ||
                  (e != null ? i(e, "userNameAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "userNameAria",
                    hash: {},
                    loc: {
                      start: { line: 10, column: 69 },
                      end: { line: 10, column: 85 },
                    },
                  })
                : t)
            ) +
            `">
              <span id="usernameclearer" class="clearer clear-icon binf-form-control-feedback"></span>

          </div>
        </div>
        <div class="binf-form-group binf-has-feedback">
          <div class="col-md-20">
            <input id="inputPassword" type="password"
                   class="binf-form-control binf-input-lg textbox hasclear"
                   placeholder="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "placeholderpassword") ||
                  (e != null ? i(e, "placeholderpassword") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "placeholderpassword",
                    hash: {},
                    loc: {
                      start: { line: 19, column: 32 },
                      end: { line: 19, column: 55 },
                    },
                  })
                : t)
            ) +
            '" aria-label="' +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "passwordAria") ||
                  (e != null ? i(e, "passwordAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "passwordAria",
                    hash: {},
                    loc: {
                      start: { line: 19, column: 69 },
                      end: { line: 19, column: 85 },
                    },
                  })
                : t)
            ) +
            `">
              <span id="passwordclearer" class="clearer clear-icon binf-form-control-feedback"></span>
          </div>
        </div>
        <button id="buttonSubmit" type="button" class="login-btn">` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "buttontext") || (e != null ? i(e, "buttontext") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "buttontext",
                    hash: {},
                    loc: {
                      start: { line: 23, column: 66 },
                      end: { line: 23, column: 80 },
                    },
                  })
                : t)
            ) +
            `</button>
      </form>
    </div>
  </div>
</div>
`
          );
        },
      });
      return v.registerPartial("csui_controls_signin_impl_signin", m), m;
    }
  ),
  csui.define("csui/controls/signin/impl/nls/localized.strings", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/signin/impl/nls/root/localized.strings", {
    signinButtonText: "Sign in",
    signinForgotPassword: "Forgot password?",
    signinPlaceholderUsername: "User name",
    usernameAria: "Enter user name",
    signinPlaceholderPassword: "Password",
    passwordAria: "Enter password",
    signinInvalidUsernameOrPassword:
      "You have entered an invalid user name or password. Please try again.",
  }),
  csui.define("css!csui/controls/signin/impl/css/signin", [], function () {}),
  csui.define(
    "csui/controls/signin/signin.view",
    [
      "module",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/authenticators/basic.authenticator",
      "csui/utils/authenticators/credentials.authenticator",
      "csui/utils/contexts/page/page.context",
      "csui/utils/connector",
      "csui/utils/contexts/factories/connector",
      "csui/lib/marionette",
      "hbs!csui/controls/signin/impl/signin",
      "i18n!csui/controls/signin/impl/nls/localized.strings",
      "css!csui/controls/signin/impl/css/signin",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i) {
      "use strict";
      var s = y.extend({ useBasicAuthentication: !1 }, r.config()),
        l = o.ItemView.extend({
          constructor: function () {
            o.ItemView.apply(this, arguments);
          },
          className: "cs-signin",
          template: t,
          triggers: {
            "click button": "click:button",
            "mousedown @ui.usernameclearer": "click:usernameclearer",
            "mousedown @ui.passwordclearer": "click:passwordclearer",
            "focus @ui.username": "focus:username",
            "focus @ui.password": "focus:password",
            "change @ui.password": "change:password",
            "change @ui.username": "change:username",
          },
          ui: {
            username: "#inputUsername",
            password: "#inputPassword",
            button: "#buttonSubmit",
            passwordclearer: "#passwordclearer",
            usernameclearer: "#usernameclearer",
            loginerror: "#loginError",
          },
          onRender: function () {
            this.ui.usernameclearer.toggle(!1),
              this.ui.passwordclearer.toggle(!1),
              this.ui.username.prop("autofocus", !0);
          },
          onClickPasswordclearer: function (g) {
            this.ui.password.val("").trigger("focus"),
              this._unsetErrorStyle(),
              this.ui.passwordclearer.hide();
          },
          onClickUsernameclearer: function (g) {
            this.ui.username.val("").trigger("focus"),
              this._unsetErrorStyle(),
              this.ui.usernameclearer.hide();
          },
          onFocusUsername: function () {
            this.validate();
          },
          onFocusPassword: function () {
            this.validate();
          },
          onChangeUsername: function () {
            this.validate();
          },
          onChangePassword: function () {
            this.validate();
          },
          templateHelpers: function () {
            return {
              buttontext: i.signinButtonText,
              copyright: i.signinCopyright,
              forgotpassword: i.signinForgotPassword,
              placeholderusername: i.signinPlaceholderUsername,
              usernameAria: i.usernameAria,
              placeholderpassword: i.signinPlaceholderPassword,
              passwordAria: i.passwordAria,
            };
          },
          events: {
            "keyup .binf-form-control": "validate",
            "keydown button": "onKeyPress",
          },
          onKeyPress: function (g) {
            var f = this.ui.button.prop("disabled");
            !f &&
              g.which === 13 &&
              this.ui.button.toggleClass("login-btn-enabled");
          },
          validate: function (g) {
            this._unsetErrorStyle();
            var f = !!this.ui.username.val().length,
              u = !0,
              p = f && u,
              x = v(document.activeElement).is(this.ui.username),
              S = v(document.activeElement).is(this.ui.password);
            this.ui.usernameclearer.toggle(f && x),
              this.ui.passwordclearer.toggle(u && S),
              this.ui.button.prop("disabled", !p),
              this.ui.button.toggleClass("login-btn-enabled", p),
              p &&
                g &&
                g.which === 13 &&
                (g.preventDefault(), this.ui.button.trigger("click"));
          },
          onClickButton: function () {
            this.ui.button.toggleClass("login-btn-enabled", !1);
            var g = {
                username: this.ui.username.val(),
                password: this.ui.password.val(),
              },
              f = s.useBasicAuthentication;
            if (!this.authenticator) {
              var u = y.defaults({ credentials: g }, this.options.connection),
                p = f ? m : n,
                x = new p({ connection: u }).on(
                  "loggedIn",
                  y.bind(function () {
                    this.ui.button.toggleClass("login-btn-enabled", !0),
                      this.trigger("success", {
                        username: g.username,
                        session: u.session,
                      });
                  }, this)
                );
              this.authenticator = x;
            }
            var S = y.bind(function () {
                var k = new e(),
                  A = k.getObject(c),
                  M = this.authenticator.connection.session;
                A.authenticator.updateAuthenticatedSession(M);
              }, this),
              T = y.bind(function (k, A) {
                this.ui.button.toggleClass("login-btn-enabled", !0),
                  this._setErrorStyle(),
                  this.trigger("failure", { username: g.username, error: k });
              }, this);
            f
              ? this.authenticator.check({ credentials: g }, S, T)
              : this.authenticator.login({ data: g }, S, T);
          },
          _setErrorStyle: function () {
            this.ui.username.trigger("focus").trigger("select"),
              this.ui.password.val(""),
              this.ui.usernameclearer.toggle(!0),
              this.ui.passwordclearer.toggle(!0),
              this.ui.loginerror.html(i.signinInvalidUsernameOrPassword),
              this.$(".binf-form-group").addClass("binf-has-error"),
              this.$(".clearer")
                .removeClass("clear-icon")
                .addClass("error-icon");
          },
          _unsetErrorStyle: function () {
            this.ui.loginerror.html(""),
              this.$(".binf-form-group").removeClass("binf-has-error"),
              this.$(".clearer")
                .removeClass("error-icon")
                .addClass("clear-icon");
          },
        });
      return l;
    }
  ),
  csui.define(
    "hbs!csui/utils/impl/signin.dialog/signin",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          return `<div class="csui-signin binf-modal">
  <div class="binf-modal-dialog">
    <div class="binf-modal-content"></div>
  </div>
</div>`;
        },
      });
      return v.registerPartial("csui_utils_impl_signin.dialog_signin", m), m;
    }
  ),
  csui.define("css!csui/utils/impl/signin.dialog/signin", [], function () {}),
  csui.define(
    "csui/utils/impl/signin.dialog/signin.dialog",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/marionette",
      "csui/controls/signin/signin.view",
      "hbs!csui/utils/impl/signin.dialog/signin",
      "css!csui/utils/impl/signin.dialog/signin",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v, m, n) {
      "use strict";
      function e(a) {
        this.connection = a.connection;
      }
      return (
        r.extend(e.prototype, {
          show: function () {
            var a = y.Deferred(),
              c = y.fn.binf_modal.getDefaultContainer(),
              o = y(n()).appendTo(c),
              t = new v.Region({ el: o.find(".binf-modal-content")[0] }),
              i = new m({ connection: this.connection });
            return (
              i.on("success", function (s) {
                o.binf_modal("hide"), a.resolve(s);
              }),
              t.show(i),
              o
                .on("shown.binf.modal", function () {
                  i.triggerMethod("dom:refresh");
                })
                .on("hidden.binf.modal", function () {
                  i.destroy();
                })
                .binf_modal({ backdrop: "static", keyboard: !1 }),
              a.promise()
            );
          },
        }),
        e
      );
    }
  ),
  csui.define(
    "csui/utils/toolitem.masks/global.toolitems.mask",
    ["module", "csui/lib/underscore", "csui/controls/toolbar/toolitems.mask"],
    function (r, y, v) {
      "use strict";
      var m = v.extend({
        constructor: function () {
          v.prototype.constructor.apply(this);
          var e = r.config();
          y.each(
            e,
            function (a, c) {
              this.extendMask(a);
            },
            this
          ),
            this.storeMask();
        },
      });
      return m;
    }
  ),
  csui.define("csui/utils/responsivecontainer", ["module"], function (r) {
    "use strict";
    var y = r.config().enabled || !1,
      v = r.config().isResponsiveContainerModeOn || !1,
      m = r.config().isResponsiveContainerMessageModeOn || !1,
      n = {
        isResponsiveContainerModeEnabled: function () {
          return y;
        },
        isResponsiveContainerOn: function () {
          return v;
        },
        isResponsiveContainerMessageModeOn: function () {
          return m;
        },
        setCurrentView: function (e) {
          this._currentView && (this._prevView = this._currentView),
            (this._currentView = e);
        },
        getCurrentView: function () {
          return this._currentView;
        },
        getPrevView: function () {
          return this._prevView ? this._prevView : null;
        },
      };
    return n;
  }),
  csui.define("csui/utils/proxy", ["module"], function (r) {
    "use strict";
    var y = r.config().enabled || !1,
      v = r.config().limitPerUser || 15,
      m = {
        enabled: function () {
          return y;
        },
        limitPerUser: function () {
          return v;
        },
      };
    return m;
  }),
  csui.define("css!csui/controls/form/impl/form", [], function () {}),
  csui.define(
    "csui/models/form",
    ["csui/lib/underscore", "csui/lib/backbone", "csui/lib/jsonpath"],
    function (r, y, v) {
      "use strict";
      var m = y.Model.extend(
        {
          constructor: function (e, a) {
            (this.options = a || (a = {})),
              y.Model.prototype.constructor.call(this, e, a);
          },
          getValue: function (n) {
            var e = this.get("data");
            return e && n ? (e = m.getValueOnPath(e, n)) : (e = null), e;
          },
          setValue: function (n, e) {
            var a = this.get("data");
            return a && n ? (a = m.setValueOnPath(a, n, e)) : (a = null), a;
          },
        },
        {
          getValueOnPath: function (n, e) {
            return (
              e &&
                ((e = e.replace(/^\//, "$.").replace(/\//, ".")),
                (n = v(n, e)),
                (n = n ? n[0] : null)),
              n
            );
          },
          setValueOnPath: function (n, e, a) {
            if (e) {
              var c = e.replace(/^.*\/([^\/]+)$/, "$1"),
                o =
                  c.indexOf("[") > 0
                    ? c.replace(/^.*\[(\d+)\]$/, "$1")
                    : void 0;
              o !== void 0
                ? ((e = e
                    .replace(/^(.*)\[[^\]].*\]+$/, "$1")
                    .replace(/^\//, "$.")
                    .replace(/\//, ".")),
                  (n = v(n, e)),
                  n ? ((n = n[0]), (n[parseInt(o, 10)] = a)) : (n = null))
                : ((e = e
                    .replace(/^(.*)\/[^\/]+$/, "$1")
                    .replace(/^\//, "$.")
                    .replace(/\//, ".")),
                  e && e !== "/" && ((n = v(n, e)), n && (n = n[0])),
                  n ? (n[c] = a) : (n = null));
            }
            return n;
          },
          pluckPrimitiveFields: function (n) {
            function e(c, o) {
              return r.reduce(
                r.keys(c),
                function (t, i) {
                  var s = c[i];
                  return (
                    r.isArray(s)
                      ? (t[i] = a(s))
                      : r.isObject(s)
                      ? (t = e(s, t))
                      : (t[i] = s),
                    t
                  );
                },
                o || {},
                this
              );
            }
            function a(c) {
              return r.map(c, function (o) {
                return r.isArray(o) ? a(o) : r.isObject(o) ? e(o) : o;
              });
            }
            return e(n);
          },
        }
      );
      return m;
    }
  ),
  csui.define(
    "csui/models/appliedcategoryform",
    [
      "csui/lib/underscore",
      "csui/utils/url",
      "csui/models/form",
      "csui/models/mixins/node.connectable/node.connectable.mixin",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = v.extend(
        {
          constructor: function (a, c) {
            v.prototype.constructor.call(this, a, c),
              this.makeNodeConnectable(c),
              c &&
                ((this.action = this.options.action),
                (this.categoryId = this.options.categoryId));
          },
          clone: function () {
            return new this.constructor(this.attributes, {
              node: this.node,
              action: this.action,
              categoryId: this.categoryId,
            });
          },
          url: function () {
            var e = r.str.sformat(
              "forms/nodes/categories/{0}?id={1}&category_id={2}",
              this.action,
              this.node.get("id"),
              this.categoryId
            );
            return y.combine(this.connector.connection.url, e);
          },
          parse: function (e, a) {
            var c = r.extend(
                { data: {}, schema: {}, options: {} },
                e.form || (e.forms && e.forms[0]) || e
              ),
              o = c.title || this.get("title");
            (c.options = r.omit(c.options, "form")),
              c.schema.title === void 0 && (c.schema.title = o),
              c.title || (c.title = o),
              c.role_name === void 0 && (c.role_name = "categories");
            var t = c.categoryId || (a && a.categoryId) || this.categoryId;
            return t && n.updateInternalProperties(t, c), c;
          },
        },
        {
          updateInternalProperties: function (e, a) {
            var c = a.data,
              o = a.schema,
              t = a.options,
              i = e + "_1",
              s = c[i] || {},
              l = Object.keys(s),
              g = o.properties && o.properties[i];
            g &&
              ((g.readonly = !1),
              (g = g.properties || (g.properties = {})),
              Object.keys(g).forEach(function (u) {
                g[u].readonly = u !== "metadata_token";
              }),
              l.forEach(function (u) {
                g[u] || (g[u] = { readonly: u !== "metadata_token" });
              }));
            var f = t.fields && t.fields[i];
            f &&
              ((f.hidden = !0),
              (f = f.fields || (f.fields = {})),
              Object.keys(f).forEach(function (u) {
                f[u].hidden = !0;
              }),
              l.forEach(function (u) {
                f[u] || (f[u] = { hidden: !0 });
              }));
          },
        }
      );
      return m.mixin(n.prototype), n;
    }
  ),
  csui.define("csui/widgets/metadata/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/widgets/metadata/impl/nls/root/lang", {
    metadataRegionAria: "Metadata content",
    properties: "Properties",
    versions: "Versions",
    general: "General",
    audit: "Audit",
    MenuItemRename: "Rename",
    MenuItemEdit: "Edit",
    MenuItemCopy: "Copy",
    MenuItemMove: "Move",
    MenuItemDownload: "Download",
    MenuItemReserve: "Reserve",
    MenuItemUnreserve: "Unreserve",
    MenuItemAddVersion: "Add version",
    MenuItemDelete: "Delete",
    addItemMetadataDialogButtonAddTitle: "Add",
    addItemMetadataDialogButtonUploadTitle: "Upload",
    addItemMetadataDialogButtonCancelTitle: "Cancel",
    addItemMetadataDialogTitle1: "Add {0}",
    addItemMetadataDialogTitleGeneric: "Item",
    addDocumentMetadataDialogTitle: "Upload file",
    addFolderMetadataDialogTitle: "Upload folder",
    addDocumentsMetadataDialogTitle: "Upload files",
    addFoldersMetadataDialogTitle: "Upload folders",
    addItemsMetadataDialogTitle: "Upload items",
    addDocumentMetadataDialogAddButtonTitle: "Upload",
    addItemPlaceHolderName: "Enter name",
    emptyObjectNameAria: "Object name",
    itemTitleAria: "{0}, click to rename",
    editNameTooltip: "Edit name",
    saveEditNameTooltip: "Save",
    cancelEditNameTooltip: "Cancel",
    failedToSaveName: "Failed to save name.",
    failedToCreateItem: "Failed to create the new item.",
    failedToValidateForms:
      "Failed to validate all Forms.  Please check that all required fields are entered.",
    switchLanguageTooltip: "Switch language",
    gotoPreviousCategoryTooltip: "Show previous Category",
    gotoNextCategoryTooltip: "Show next Category",
    addNewProperties: "Add properties",
    addNewCategory: "Add a new Category",
    addNewCategoryDialogTitle: "Add Category",
    addNewCategoryDialogAddButtonTitle: "Add",
    removeCategoryTooltip: "Remove this Category",
    removeCategoryWarningTitle: "Remove Category",
    removeCategoryWarningMessage: 'Do you want to remove Category "{0}"?',
    removeCategoryFailMessageTitle: "Remove Category Failed",
    removeCategoryFailMessage: `Failed to remove Category "{0}". 

{1}`,
    getPropertyPanelsFailTitle: "Error Loading Properties",
    getCategoryActionsFailTitle: "Get Category Actions",
    getCategoryActionsFailMessage: `Failed to get Category actions for node "{0}". 

{1}`,
    getActionsForACategoryFailMessage: `Failed to get actions for Category "{0}" of node "{1}". 

{2}`,
    addNewCategoryFailTitle: "Add Category to node",
    addNewCategoryFailMessage: `Failed to add Category "{0}" to node "{1}" with node ID "{2}". 

{3}`,
    categoryExistsMessage: 'Error: Category "{0}" already exists.',
    loadNewCategoryFailTitle: "Get new Category Form",
    loadNewCategoryFailMessage: `Failed to get Form for Category "{0}" on node "{1}" with node ID "{2}". 

{3}`,
    selectCategoryTitle: "Select a Category to add",
    selectCategoryButtonLabel: "Add",
    viewShortcutMessage: "View shortcut",
    viewGenerationMessage: "View generation",
    viewOriginalMessage: "View original",
    shortcutLocationLabel: "Original location",
    closeMetadataButtonTooltip: "Close metadata",
    formValidationErrorMessage: "Required fields must be filled",
    hideValidationErrorMessageIconTooltip: "Hide validation error",
    missingRequiredMetadataForDocuments:
      "Missing required metadata for some document(s).",
    goBackTooltip: "Go back",
    onlyRequiredFieldsLabel: "Only required fields (*)",
    defaultDialogTitle: "Metadata",
    defaultDialogOkButtonTitle: "OK",
    defaultDialogCancelButtonTitle: "Cancel",
    moveOneItemMetadataDialogTitle: "Move {0} item",
    moveMultipleItemsMetadataDialogTitle: "Move {0} items",
    moveItemsMetadataDialogButtonTitle: "Move",
    copyOneItemMetadataDialogTitle: "Copy {0} item",
    copyMultipleItemsMetadataDialogTitle: "Copy {0} items",
    copyItemsMetadataDialogButtonTitle: "Copy",
    missingRequiredMetadataForObjects:
      "Missing required metadata for some object(s).",
    inheritanceOriginalProperties: "with original properties",
    inheritanceDestinationProperties: "with destination properties",
    inheritanceMergedProperties: "with combined properties",
    requiredTooltip: "Required",
    requiredPassedTooltip: "Required fields satisfied.",
    restructureOneItemMetadataDialogTitle: "Restructure {0} item",
    restructureMultipleItemsMetadataDialogTitle: "Restructure {0} items",
    restructureItemsMetadataDialogButtonTitle: "Restructure",
    ToolbarItemVersionInfo: "Properties",
    ToolbarItemVersionDelete: "Delete",
    ToolbarItemPromoteVersion: "Promote to major",
    ToolbarItemVersionPurgeAll: "Purge all previous Versions",
    ToolbarItemVersionDownload: "Download",
    ToolbarItemMakeGeneration: "Create Generation",
    ToolbarItemDocVersionPreview: "Open",
    ToolbarItemCopyLink: "Copy link",
    ToolbarItemEmailLink: "Mail as link",
    ToolbarItemMore: "More actions",
    versionColumnSizeTitle: "Size",
    versionColumnVersionNumberTitle: "Version",
    generation: "Generation",
    openDoc: "Open {0}",
    openDocAria: "Open {0} {1}",
    versionNumInBrowserTitle: "Version {0}",
    docPreviewAlt: "Document Preview",
    versionTableAria: "Versions of {0}",
    ToolbarItemLock: "Lock",
    ToolbarItemUnlock: "Unlock",
    showDescription: "Show description",
    hideDescription: "Hide description",
    action: "Action",
    date: "Date",
    user: "User",
    auditNoResultsPlaceholder: "No results found",
    auditTableAria: "Audit events of {0}",
    formFieldItemIdLabel: "Item ID",
    formFieldSizeLabel: "Size",
    formFieldTypeLabel: "Type",
    formFieldReservedStatusLabel: "Status",
    formFieldReservedByLabel: "Reserved by",
    formFieldlockedByLabel: "Locked by",
    UrlLabel: "Web address",
    UrlTitle: "Web address",
    alpacaPlaceholderNotAvailable: "n/a",
    alpacaPlaceholderUrl: "Add web address",
    alpacaPlaceholderOTNodePicker: "Select",
    alpacaPlaceholderDescription: "Add description",
    NoOwner: "<No Owner>",
    showMore: "Show more",
    showMoreAria: "Show more actions of {0}",
    collapse: "Hide item list",
    expand: "Show item list",
    permissionPage: "Permission Page of {0}",
  }),
  csui.define(
    "csui/models/forms",
    ["csui/lib/backbone", "csui/models/form"],
    function (r, y) {
      "use strict";
      var v = r.Collection.extend({
        model: y,
        constructor: function (n, e) {
          (this.options = e || (e = {})),
            r.Collection.prototype.constructor.call(this, n, e);
        },
      });
      return v;
    }
  ),
  csui.define(
    "csui/models/nodeforms",
    [
      "module",
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/utils/base",
      "csui/models/forms",
      "csui/models/mixins/node.resource/node.resource.mixin",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      var o = a.extend({
        constructor: function (i, s) {
          a.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(s);
        },
        parse: function (t) {
          return t.forms;
        },
      });
      return c.mixin(o.prototype), o;
    }
  ),
  csui.define(
    "csui/models/nodecreateforms",
    [
      "module",
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/utils/base",
      "csui/models/nodeforms",
      "csui/models/node.createform/server.adaptor.mixin",
    ],
    function (r, y, v, m, n, e, a, c) {
      "use strict";
      var o = a.extend(
        {
          constructor: function (i, s) {
            if (
              (a.prototype.constructor.apply(this, arguments),
              (this.type = s.type),
              (this.docParentId = s.docParentId),
              this.type === void 0)
            )
              throw new Error(this.ERR_CONSTRUCTOR_NO_TYPE_GIVEN);
          },
          clone: function () {
            return new this.constructor(this.models, {
              node: this.node,
              type: this.type,
            });
          },
        },
        {
          ERR_CONSTRUCTOR_NO_TYPE_GIVEN:
            "No creation type given in constructor",
        }
      );
      return v.extend(o, { version: "1.0" }), c.mixin(o.prototype), o;
    }
  ),
  csui.define(
    "csui/models/nodeupdateforms",
    [
      "csui/lib/underscore",
      "csui/models/node/node.model",
      "csui/models/nodeforms",
      "csui/models/form",
      "csui/models/appliedcategoryform",
    ],
    function (r, y, v, m, n) {
      "use strict";
      function e(c, o) {
        return c.role_name === "categories" ? new n(c, o) : new m(c, o);
      }
      var a = v.extend({
        constructor: function (o, t) {
          v.prototype.constructor.apply(this, arguments),
            this.makeNodeResource(t);
        },
        model: e,
        clone: function () {
          return new this.constructor(this.models, { node: this.node });
        },
        url: function () {
          return r.str.sformat(
            "{0}/forms/nodes/update?id={1}&read_only={2}",
            this.connector.connection.url,
            this.node.get("id"),
            (this.node.get("isDocReadonlyMode") || !1) + ""
          );
        },
        parse: function (c) {
          var o = [];
          return (c.forms || []).forEach(this._parseForm.bind(this, o)), o;
        },
        _parseForm: function (c, o) {
          o.role_name === "categories"
            ? this._parseCategory(c, o)
            : o.role_name === "systemattributes"
            ? (this.node.systemattributes = o)
            : c.push(o);
        },
        _parseCategory: function (c, o) {
          var t = o.data || {},
            i = (o.schema && o.schema.properties) || {},
            s = (o.options && o.options.fields) || {};
          Object.keys(i).forEach(function (l) {
            y.usesIntegerId && (l = +l);
            var g = t[l] || {},
              f = i[l] || {},
              u = s[l] || {},
              p = f.title,
              x = u.removeable !== !1;
            c.push({
              id: l,
              name: p,
              title: p,
              data: g,
              role_name: "categories",
              removeable: x,
              allow_delete: x,
              categoryId: l,
              options: u,
              schema: f,
            });
          });
        },
      });
      return a;
    }
  ),
  csui.define(
    "csui/widgets/metadata/metadata.forms/server.adaptor.mixin",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/utils/base",
      "csui/utils/url",
      "csui/models/appliedcategories",
      "csui/models/form",
      "csui/models/appliedcategoryform",
      "i18n!csui/widgets/metadata/impl/nls/lang",
      "csui/models/nodecreateforms",
      "csui/models/nodeupdateforms",
      "csui/models/node/node.model",
      "csui/models/version",
    ],
    function (r, y, v, m, n, e, a, c, o, t, i, s, l, g) {
      "use strict";
      var f = {
          makeServerAdaptor: function (p) {
            return this;
          },
          sync: function (p, x, S) {
            return p === "read"
              ? this.action === "copy" ||
                this.action === "move" ||
                this.action === "restructure"
                ? this._getMetadataCopyMoveItemForms(p, x, S)
                : this.action === "create" || this.node.get("id") === void 0
                //CSCCustom-start CSUI0002: pass security information into options container
                //#ORIGINAL CODE
                //? this._getMetadataAddItemForms(p, x, S)
                //#ORIGINAL CODE

                //for multiple items
                ? (function(){
                  var model = x;
                  var options = S;
                  if(model && model.node && model.node.attributes && model.node.attributes.fileObject && model.node.attributes.fileObject.node)
                  {
                      if(model.node.attributes.fileObject.node.SecurityClassification)
                      {
                          options.SecurityClassification=model.node.attributes.fileObject.node.SecurityClassification;
                      }
                      if(model.node.attributes.fileObject.node.SensitivityRating)
                      {
                          options.SensitivityRating=model.node.attributes.fileObject.node.SensitivityRating;
                      }
                  }
                  
                }(), 
                this._getMetadataAddItemForms(p, x, S))
                //CSCCustom-end
                : this.node instanceof g
                //CSCCustom-start CSUI0002: pass security information into options container
                //#ORIGINAL CODE
                //? this._getMetadataVersionsForms(p, x, S)
                //#ORIGINAL CODE

                //for single item
                ? (function(){
                  var options = S;
                  if(this.container)
                  {
                      if(this.container.SecurityClassification)
                      {
                          options.SecurityClassification=this.container.SecurityClassification;
                      }
                      if(this.container.SensitivityRating)
                      {
                          options.SensitivityRating=this.container.SensitivityRating;
                      }
                  }
                }(), 
                this._getMetadataVersionsForms(p, x, S))
                //CSCCustom-end
                : this._getMetadataForms(p, x, S)
              : v.Collection.prototype.sync.apply(this, arguments);
          },
          _getMetadataForms: function (p, x, S) {
            x.trigger("request", x, void 0, S);
            var T = this.node,
              k = T.get("type"),
              A = new s(void 0, { node: T });
            return A.fetch()
              .then(
                y.bind(function (M, N, R) {
                  A.each(function (K) {
                    K.set("allow_delete", K.get("removeable"));
                  }),
                    (this.options = S),
                    (this.forms = A.models),
                    S.success && S.success(this.forms, "success");
                }, this)
              )
              .fail(function (M, N, R) {
                S.error && S.error(M, N, R);
              });
          },
          _getMetadataVersionsForms: function (p, x, S) {
            x.trigger("request", x, void 0, S);
            var T = r.Deferred(),
              k = this.node,
              A = k.get("id"),
              M = k.get("version_number"),
              N = k.connector,
              R = e.combine(
                N.connection.url,
                "forms/nodes/versions/categories"
              ),
              K = { url: R + "?" + r.param({ id: A, version_number: M }) };
            return (
              N.makeAjaxCall(K)
                .done(
                  y.bind(function (G, $, z) {
                    var ue = [],
                      J = G.forms[0];
                    if (J) {
                      var ae = "categories";
                      this.roles === void 0 && (this.roles = {}),
                        this.roles[ae] === void 0 && (this.roles[ae] = {});
                      var q = y.keys(J.options.fields);
                      y.each(
                        q,
                        function (Q) {
                          var ne = J.schema.properties[Q].title,
                            oe = J.data[Q],
                            d = J.options.fields[Q],
                            h = J.schema.properties[Q];
                          l.usesIntegerId && (Q = parseInt(Q));
                          var b = new o(
                            {
                              id: Q,
                              title: ne,
                              allow_delete: !1,
                              removeable: !1,
                            },
                            { node: this.node, categoryId: Q, action: "none" }
                          );
                          ue.push(b),
                            b.set({
                              data: oe,
                              options: d,
                              schema: y.omit(h, ["description"]),
                              role_name: ae,
                              removeable: !1,
                            });
                        },
                        this
                      );
                    }
                    S.success && S.success(ue, "success"), T.resolve();
                  }, this)
                )
                .fail(function () {
                  T.reject.apply(T, arguments);
                }),
              T.promise()
            );
          },
          _getMetadataAddItemForms: function (p, x, S) {
            x.trigger("request", x, void 0, S);
            var T = this.node.get("data"),
              k =
                this.formCollection ||
                new i(void 0, {
                  node: this.container,
                  docParentId: this.node.get("docParentId"),
                  type: this.node.get("type"),
                }),
              A = this.node.get("forms") || void 0,
              M = this.node.get("xhr") || void 0,
              N = {};
            return A && M
              ? ((A.forms[0].id = "general"),
                this._pushForms(A, T, S),
                (this.fetching = !1),
                (this.fetched = !0),
                r.Deferred().resolve())
              : k
                  .fetch()
                  .then(
                    y.bind(function (R, K, G) {
                      //CSCCustom-start CSUI0002: fill security information to category attributes
                      var data = R;
                      var nData = T;
                      var options = S;
  
                      //setting of category base on classification found in the file
                      console.log(options.SecurityClassification,options.SensitivityRating);
                      
                      //get configuration
                      var _config = window._customconfig.DocumentInformation;
                      var docinfo = {
                          id : _config.id,
                          sc : _config.id+"_"+_config.SecurityClassification,
                          sr : _config.id+"_"+_config.SensitivityRating
                      }
  
                      if(_config)
                      {
                          let classificationCategory;
                          if(nData && nData.hasOwnProperty('roles') && nData.roles.hasOwnProperty('categories'))
                          {
                              if(nData.roles.categories.hasOwnProperty(docinfo.id))
                              {
                                  classificationCategory = nData.roles.categories[docinfo.id];
                              }
                          }
                          else if(data && data.forms)
                          {
                              for(var i = 0;i < data.forms.length;i++){
                                  let dataForm = data.forms[i];
                                  if(dataForm.id==="Categories" && dataForm.data.hasOwnProperty(docinfo.id))
                                  {
                                      classificationCategory = dataForm.data[docinfo.id];
                                  }
                              }
                          }
  
                          if(classificationCategory) {
                              if(!this.node.scStatus && classificationCategory.hasOwnProperty(docinfo.sc))
                              {
                                  classificationCategory[docinfo.sc] = options.SecurityClassification||'';//empty string if null
                                  this.node.scStatus = true;//to block further overrides
                              }
                              if(!this.node.srStatus && classificationCategory.hasOwnProperty(docinfo.sr))
                              {
                                  classificationCategory[docinfo.sr] = options.SensitivityRating||'';
                                  this.node.srStatus = true;
                              }
                          }
                      }
                      //CSCCustom-end
                      this._pushForms(R, T, S);
                    }, this)
                  )
                  .fail(function (R, K, G) {
                    S.error && S.error(R, K, G);
                  });
          },
          _pushForms: function (p, x, S) {
            var T = [],
              k = this.node.get("name");
            k !== void 0 && (p.forms[0].data.name = k);
            var A = this.node.get("type");
            if (A === 1) {
              const $ = this.node.get("fileObject"),
                z = this.node.get("original_id") || ($ && $.get("original_id"));
              z !== void 0 && (p.forms[0].data.original_id = z);
            } else if (A === 2) {
              var M = this.node.get("fileObject"),
                N = this.node.get("original_id") || (M && M.get("original_id")),
                R =
                  this.node.get("version_number") ||
                  (M && M.get("version_number"));
              N !== void 0 && (p.forms[0].data.original_id = N),
                R !== void 0 && (p.forms[0].data.version_number = R);
            } else if (A === 140) {
              var K = this.node.get("url");
              K && K.length > 0 && (p.forms[0].data.url = K);
            } else if (
              A === 144 &&
              (k !== void 0 && (p.forms[0].data.file = k), x)
            ) {
              var G = p.forms[0].data;
              x.name && (G.name = x.name),
                x.description && (G.description = x.description),
                x.advanced_versioning &&
                  (G.advanced_versioning = x.advanced_versioning);
            }
            y.each(
              p.forms,
              function ($) {
                $.role_name === "categories"
                  ? this._pushCategoryForms($, T, S)
                  : T.push(new c($));
              },
              this
            ),
              S.success && S.success(T, "success");
          },
          _pushCategoryForms: function (p, x, S) {
            var T = this.node.get("data"),
              k = y.keys(p.options.fields);
            y.each(
              k,
              function (A) {
                if (y.indexOf(this.node.removedCategories, A) === -1) {
                  var M = p.schema.properties[A].title,
                    N = p.data[A];
                  T &&
                    T.roles &&
                    T.roles.categories &&
                    T.roles.categories[A] &&
                    (N = y.extend(N, T.roles.categories[A]));
                  var R = p.options.fields[A],
                    K = y.omit(p.schema.properties[A], "description");
                  l.usesIntegerId && (A = parseInt(A));
                  var G = !(R && R.removeable === !1),
                    $ = new o(
                      {
                        id: A,
                        title: M,
                        data: N,
                        options: R,
                        schema: K,
                        role_name: "categories",
                        allow_delete: G,
                        removeable: G,
                      },
                      { node: this.node, categoryId: A, action: "none" }
                    );
                  S.reset ? x.push($) : this.add($);
                }
              },
              this
            );
          },
          _getMetadataCopyMoveItemForms: function (p, x, S) {
            x.trigger("request", x, void 0, S);
            var T = r.Deferred(),
              k = this,
              A = this.node.get("id"),
              M = this.container.connector,
              N = { original: 0, destination: 1, merged: 2 },
              R;
            k.action === "copy"
              ? (R = "/forms/nodes/copy")
              : (k.action === "move" || k.action === "restructure") &&
                (R = "/forms/nodes/move");
            var K = {
              url:
                M.connection.url +
                R +
                "?" +
                r.param({
                  id: A,
                  parent_id: k.container.get("id"),
                  inheritance: N[k.inheritance],
                }),
            };
            return (
              M.makeAjaxCall(K)
                .done(function (G, $, z) {
                  var ue = [],
                    J;
                  if (
                    (G.forms.length > 1 &&
                      (J = y.find(G.forms, function (oe) {
                        return oe.role_name === "categories";
                      })),
                    J)
                  ) {
                    var ae = J.role_name;
                    k.roles === void 0 && (k.roles = {}),
                      k.roles[ae] === void 0 && (k.roles[ae] = {});
                    var q = k.node.get("data"),
                      Q = {};
                    q && q.roles && q.roles[ae] && (Q = q.roles[ae]);
                    var ne = y.keys(J.options.fields);
                    y.each(ne, function (oe) {
                      if (y.indexOf(k.node.removedCategories, oe) === -1) {
                        var d = J.schema.properties[oe].title,
                          h = J.data[oe],
                          b = J.options.fields[oe],
                          _ = J.schema.properties[oe],
                          C = l.usesIntegerId ? parseInt(oe) : oe,
                          E = b.removeable !== !1,
                          F = new o(
                            { id: C, title: d, removeable: E, allow_delete: E },
                            { node: k.node, categoryId: C, action: "none" }
                          );
                        ue.push(F),
                          y.isEmpty(Q[oe]) === !1 &&
                            y.each(h, function (L, j) {
                              y.has(Q[oe], j) && (h[j] = Q[oe][j]);
                            }),
                          F.set({
                            data: h,
                            options: b,
                            schema: y.omit(_, ["description"]),
                            role_name: ae,
                          });
                      }
                    });
                  }
                  S.success && S.success(ue, "success"), T.resolve();
                })
                .fail(function (G, $, z) {
                  S.error && S.error(G, $, z), T.reject.apply(T, arguments);
                }),
              T.promise()
            );
          },
        },
        u = {
          mixin: function (p) {
            return y.extend(p, f);
          },
        };
      return u;
    }
  ),
  csui.define(
    "csui/widgets/metadata/metadata.forms",
    [
      "csui/lib/backbone",
      "csui/utils/log",
      "csui/models/mixins/node.connectable/node.connectable.mixin",
      "csui/models/mixins/fetchable/fetchable.mixin",
      "csui/widgets/metadata/metadata.forms/server.adaptor.mixin",
    ],
    function (r, y, v, m, n) {
      "use strict";
      var e = r.Collection.extend({
        constructor: function (c, o) {
          o || (o = {}),
            (this.action = o.action),
            (this.inheritance = o.inheritance),
            (this.container = o.container),
            (this.formCollection = o.formCollection),
            r.Collection.prototype.constructor.apply(this, arguments),
            this.makeNodeConnectable(o).makeFetchable(o).makeServerAdaptor(o);
        },
      });
      return (
        v.mixin(e.prototype), m.mixin(e.prototype), n.mixin(e.prototype), e
      );
    }
  ),
  csui.define(
    "csui/widgets/search.results/controls/sorting/impl/nls/localized.strings",
    { root: !0, "en-us": !1, en: !1 }
  ),
  csui.define(
    "csui/widgets/search.results/controls/sorting/impl/nls/root/localized.strings",
    {
      sortBy: "Sort by...",
      sortByThis: "Sort by {0}",
      sortOptionsListAria: "Sort options",
      sortOptionsButtonAria: "Sort options, currently {0}",
      ascending: "{0}: Click to sort ascending",
      descending: "{0}: Click to sort descending",
    }
  ),
  csui.define(
    "hbs!csui/widgets/search.results/controls/sorting/impl/sort.menu",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `  <div class="csui-search-sort-options ">
    <button id="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "id") || (e != null ? i(e, "id") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "id",
                    hash: {},
                    loc: {
                      start: { line: 3, column: 16 },
                      end: { line: 3, column: 22 },
                    },
                  })
                : t)
            ) +
            `" type="button" class="binf-btn binf-btn-default binf-dropdown-toggle"
            data-binf-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="` +
            n.escapeExpression(
              ((t =
                (t =
                  i(a, "sortButtonAria") ||
                  (e != null ? i(e, "sortButtonAria") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "sortButtonAria",
                    hash: {},
                    loc: {
                      start: { line: 4, column: 95 },
                      end: { line: 4, column: 113 },
                    },
                  })
                : t)
            ) +
            `">
      <span class="cs-label">` +
            n.escapeExpression(
              ((t =
                (t = i(a, "title") || (e != null ? i(e, "title") : e)) != null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "title",
                    hash: {},
                    loc: {
                      start: { line: 5, column: 29 },
                      end: { line: 5, column: 38 },
                    },
                  })
                : t)
            ) +
            `</span>
      <span class="cs-icon icon-caret-down"></span>
    </button>
    <ul class="binf-dropdown-menu csui-normal-scrolling" role="menu" aria-label="` +
            n.escapeExpression(
              ((t =
                (t = i(a, "listAria") || (e != null ? i(e, "listAria") : e)) !=
                null
                  ? t
                  : n.hooks.helperMissing),
              typeof t == "function"
                ? t.call(e ?? (n.nullContext || {}), {
                    name: "listAria",
                    hash: {},
                    loc: {
                      start: { line: 8, column: 81 },
                      end: { line: 8, column: 93 },
                    },
                  })
                : t)
            ) +
            `"></ul>
  </div>
  <a href="javascript:void(0);" class="cs-icon search-sort-btn icon-sortArrowDown"></a>
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (t = i(a, "if").call(
            e ?? (n.nullContext || {}),
            e != null ? i(e, "sortEnable") : e,
            {
              name: "if",
              hash: {},
              fn: n.program(1, o, 0),
              inverse: n.noop,
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 11, column: 7 },
              },
            }
          )) != null
            ? t
            : "";
        },
      });
      return (
        v.registerPartial(
          "csui_widgets_search.results_controls_sorting_impl_sort.menu",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "csui/widgets/search.results/controls/sorting/sort.menu.view",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/lib/marionette",
      "i18n!csui/widgets/search.results/controls/sorting/impl/nls/localized.strings",
      "hbs!csui/widgets/search.results/controls/sorting/impl/sort.menu",
      "csui/behaviors/keyboard.navigation/tabable.region.behavior",
      "csui/lib/binf/js/binf",
    ],
    function (r, y, v, m, n, e, a) {
      var c = m.ItemView.extend({
        className: "cs-sort-links",
        template: e,
        templateHelpers: function () {
          var o = { sortBy: n.sortBy },
            t = this.selected.get("title")
              ? this.selected.get("title")
              : this.constants.DEFAULT_SORT;
          return {
            messages: o,
            sortEnable:
              this.collection.models.length &&
              !!this.collection.sorting &&
              this.options.enableSorting,
            id: y.uniqueId("sortButton"),
            sortButtonAria: y.str.sformat(n.sortOptionsButtonAria, t),
            listAria: n.sortOptionsListAria,
          };
        },
        constants: {
          SORT_ASC: "asc",
          SORT_DESC: "desc",
          DEFAULT_SORT: "relevance",
        },
        events: {
          "click .binf-dropdown-menu > li > a": "onSortOptionClick",
          "click a.search-sort-btn": "onSortOrderClick",
          keydown: "onKeyInView",
        },
        ui: {
          toggle: ">.csui-search-sort-options>.binf-dropdown-toggle",
          selectedLabel:
            ">.csui-search-sort-options>.binf-dropdown-toggle >.cs-label",
          selectedIcon:
            ">.csui-search-sort-options>.binf-dropdown-toggle >.cs-icon",
          sortOrderBtn: "a.search-sort-btn",
          dropdownToggle: ".binf-dropdown-toggle",
        },
        constructor: function (t) {
          if (
            (m.View.prototype.constructor.apply(this, arguments),
            (this.config = this.options.config || {}),
            (this.selected = new v.Model()),
            this.collection)
          ) {
            var i = this.options.orderBy || this.collection.orderBy;
            this.collection.setOrder(i, !1),
              this.listenTo(this.collection, "reset", this.render);
          }
          this.listenTo(this.collection, "change", this._refreshSelection),
            this.listenTo(this.selected, "change", this._updateSelection);
        },
        onRender: function () {
          if (
            (this.ui.toggle.binf_dropdown(),
            this.ui.sortOrderBtn.hide(),
            this.collection.sorting !== void 0 &&
              this.collection.sorting.links !== void 0)
          ) {
            this.collection.sorting.sort &&
            this.collection.sorting.sort[0] !== this.constants.DEFAULT_SORT
              ? (this._setSelection(
                  this.collection.sorting.links[this.collection.sorting.sort]
                ),
                this._addDropdownItems(
                  r.extend({}, this.collection.sorting.links),
                  this.collection.sorting.sort[0]
                ),
                this.ui.sortOrderBtn.show())
              : (this._setSelection(
                  this.collection.sorting.links[this.constants.DEFAULT_SORT]
                ),
                this._addDropdownItems(
                  r.extend({}, this.collection.sorting.links),
                  ""
                ),
                this.$el
                  .find(".binf-dropdown-menu > :first-child")
                  .addClass("binf-active"),
                this.$el
                  .find(".binf-dropdown-menu > :first-child a.csui-sort-option")
                  .attr("aria-checked", "true"),
                this.$el
                  .find(".binf-dropdown-menu > :first-child .cs-icon")
                  .addClass("icon-listview-checkmark"),
                this.ui.sortOrderBtn.hide());
            var o = this.selected.get("title"),
              t = y.str.sformat(n.sortOptionsButtonAria, o);
            if (
              (this.ui.selectedLabel.text(o),
              this.selected.get("order") === this.constants.SORT_ASC)
            ) {
              this.ui.sortOrderBtn.removeClass("icon-sortArrowDown"),
                this.ui.sortOrderBtn.addClass("icon-sortArrowUp");
              var i = y.str.sformat(
                n.descending,
                this.selected.get("titleAttr")
              );
              this.ui.sortOrderBtn.attr("title", i).attr("aria-label", t);
            } else {
              this.ui.sortOrderBtn.removeClass("icon-sortArrowUp"),
                this.ui.sortOrderBtn.addClass("icon-sortArrowDown");
              var s = y.str.sformat(
                n.ascending,
                this.selected.get("titleAttr")
              );
              this.ui.sortOrderBtn.attr("title", s).attr("aria-label", t);
            }
          }
        },
        onKeyInView: function (o) {
          o.keyCode === 9 &&
            this.$el.find(".binf-open") &&
            this.$el.find(".binf-open").removeClass("binf-open");
        },
        behaviors: { TabableRegionBehavior: { behaviorClass: a } },
        currentlyFocusedElement: function (o) {
          var t = this.$("*[tabindex]");
          return (
            t.length && t.prop("tabindex", 0),
            o && o.shiftKey
              ? r(t[t.length - 1])
              : this.orderClicked
              ? this.ui.sortOrderBtn
              : r(t[0])
          );
        },
        _setSelection: function (o) {
          var t = {};
          this.collection.sorting.sort
            ? (this.collection.sorting.sort[0].indexOf(
                this.constants.SORT_DESC
              ) === 0 &&
                ((t.id = this.collection.sorting.sort[0].replace(/desc_/g, "")),
                (t.order = this.constants.SORT_DESC)),
              this.collection.sorting.sort[0].indexOf(
                this.constants.SORT_ASC
              ) === 0 &&
                ((t.id = this.collection.sorting.sort[0].replace(/asc_/g, "")),
                (t.order = this.constants.SORT_ASC)))
            : ((t.id = ""), (t.order = this.constants.SORT_DESC)),
            (t.titleAttr = y.str.trim(
              o && o.display_name
                ? o.display_name
                : o && o.name
                ? this.trimSortOptionName(o.name)
                : "empty"
            )),
            (t.title = this.truncateCategoryName(t.titleAttr));
          var i = y.str.sformat(n.sortByThis, this.formatColon(t.titleAttr));
          this.$el
            .find(".csui-search-sort-options 	.binf-dropdown-toggle")
            .attr("title", i),
            this.selected.set(t);
        },
        _updateSelection: function () {
          this.ui.selectedLabel.text(this.selected.get("title"));
        },
        _refreshSelection: function (o) {
          o.collection &&
            o.collection.inMetadataNavigationView &&
            (o.collection.isSortOptionSelected = !0),
            o.get("id") === this.selected.get("id") && this._setSelection(o);
        },
        resetCollection: function (o, t) {
          this.collection.setOrder(o, !0);
        },
        sortPage: function (o) {
          o.preventDefault(), o.stopPropagation();
          var t = [],
            i = r(o.currentTarget).attr("data-csui-sortoption-id");
          i !== void 0
            ? t.push(i + " " + this.constants.SORT_DESC)
            : t.push(this.constants.DEFAULT_SORT),
            this.resetCollection(t.join(), !0);
        },
        _addDropdownItems: function (o, t) {
          var i = this.$el.find(".binf-dropdown-menu"),
            s = this;
          if (o[this.constants.DEFAULT_SORT]) {
            var l = s.trimSortOptionName(o[s.constants.DEFAULT_SORT].name);
            i.append(
              '<li role="presentation"><a role="menuitemradio" aria-checked="false" href="#" class="csui-sort-option" data-binf-toggle="tab"><span class="cs-icon"></span><span class="cs-label" title="' +
                l +
                '">' +
                l +
                "</span></a></li>"
            ),
              delete o[s.constants.DEFAULT_SORT];
          }
          for (var g in o)
            if (g.search("asc_") === 0) delete o[g];
            else {
              var f = g.replace(/desc_/g, ""),
                u = o[g].display_name
                  ? o[g].display_name
                  : s.trimSortOptionName(o[g].name);
              u = s.formatColon(u);
              var p = s.truncateCategoryName(u);
              t.split(/_(.+)/, 2)[1] === g.split(/_(.+)/, 2)[1]
                ? i.append(
                    '<li role="presentation" class="binf-active"><a role="menuitemradio" aria-checked="true" data-csui-sortoption-id="' +
                      f +
                      '" href="#" class="csui-sort-option" data-binf-toggle="tab"><span class="cs-icon icon-listview-checkmark"></span><span class="cs-label" title="' +
                      u +
                      '">' +
                      p +
                      "</span></a></li>"
                  )
                : i.append(
                    '<li role="presentation"><a role="menuitemradio" aria-checked="false" data-csui-sortoption-id="' +
                      f +
                      '" href="#" class="csui-sort-option" data-binf-toggle="tab"><span class="cs-icon"></span><span class="cs-label" title="' +
                      u +
                      '">' +
                      p +
                      "</span></a></li>"
                  );
            }
        },
        activate: function (o) {
          this.$el.find("li").hasClass("binf-active") === !0 &&
            (this.$el.find("li").removeClass("binf-active"),
            this.$el
              .find("li a.csui-sort-option")
              .attr("aria-checked", "false"),
            this.$el
              .find("li .cs-icon")
              .removeClass("icon-listview-checkmark")),
            r(o.parentElement).addClass("binf-active"),
            r(o).find("a.csui-sort-option").attr("aria-checked", "true"),
            r(o).find("span.cs-icon").addClass("icon-listview-checkmark");
        },
        resetSelection: function (o, t) {
          var i = {};
          (i.id = o),
            (i.title = y.str.trim(t.innerText)),
            (i.titleAttr = y.str.trim(t.title)),
            (i.order = this.constants.SORT_DESC),
            this.selected.set(i);
        },
        onSortOptionClick: function (o) {
          (this.collection.isSortOptionSelected = !0),
            o.preventDefault(),
            o.stopPropagation(),
            (this.orderClicked = !1),
            this.activate(o.currentTarget);
          var t = r(o.currentTarget).attr("data-csui-sortoption-id");
          t === void 0 && (t = ""),
            this.sortPage(o),
            this.ui.toggle.binf_dropdown("toggle"),
            this.trigger("change:sortOrder");
        },
        onSortOrderClick: function (o) {
          (this.collection.isSortOptionSelected = !0),
            o.preventDefault(),
            o.stopPropagation(),
            (this.orderClicked = !0);
          var t = [];
          this.ui.sortOrderBtn.hasClass("icon-sortArrowDown")
            ? (this.ui.sortOrderBtn.removeClass("icon-sortArrowDown"),
              this.ui.sortOrderBtn.addClass("icon-sortArrowUp"),
              t.push(this.selected.id + " " + this.constants.SORT_ASC))
            : (this.ui.sortOrderBtn.removeClass("icon-sortArrowUp"),
              this.ui.sortOrderBtn.addClass("icon-sortArrowDown"),
              t.push(this.selected.id + " " + this.constants.SORT_DESC)),
            this.collection.setOrder(t.join(), !0);
        },
        trimSortOptionName: function (o) {
          return o.replace(
            /\(*\s([;\s\w\W\"\=\,\:\.\/\~\{\}\?\!\-\%\&\#\$\^\(\)]*?)\)/g,
            ""
          );
        },
        truncateCategoryName: function (o, t) {
          return o.replace(/^[^:]*:\s*/, "");
        },
        formatColon: function (o) {
          return o.replace(/:([^\s])/, ": $1");
        },
      });
      return c;
    }
  ),
  csui.define(
    "csui/widgets/metadata/impl/metadata.forms",
    ["csui/widgets/metadata/metadata.forms"],
    function (r) {
      return r;
    }
  ),
  csui.define(
    "csui/widgets/metadata/impl/metadata.utils",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/lib/backbone",
      "csui/utils/url",
      "csui/widgets/metadata/impl/metadata.forms",
      "csui/models/appliedcategories/category.validation.model",
    ],
    function (r, y, v, m, n, e) {
      function a() {}
      return (
        r.extend(a.prototype, v.Events, {
          ContainerHasEnforcedEmptyRequiredMetadata: function (c) {
            var o = y.Deferred(),
              t = r.defaults(
                {
                  name: c.name,
                  id: c.id,
                  docParentId: c.docParentId,
                  type: c.addableType,
                },
                c.data
              ),
              i = new v.Model(t);
            c.enforcedRequiredAttrs &&
              (i.options || (i.options = {}),
              (i.options.enforcedRequiredAttrs = !0));
            var s = new n(void 0, {
              node: i,
              action: c.action,
              connector: c.container.connector,
              container: c.container,
              inheritance: c.inheritance,
              autofetch: !0,
              autoreset: !0,
            });
            return (
              s
                .fetch()
                .done(
                  r.bind(function () {
                    if (s.models.length === 0)
                      o.resolve({ hasRequiredMetadata: !1 });
                    else {
                      var l = this.FormsCollectionHasRequiredAttributes(s);
                      o.resolve({
                        hasRequiredMetadata: !l,
                        initialFormData: s,
                      });
                    }
                  }, this)
                )
                .fail(function (l) {
                  o.reject(l);
                }),
              o.promise()
            );
          },
          FormsCollectionHasRequiredAttributes: function (c) {
            var o = !0;
            return (
              r.each(
                c.models,
                r.bind(function (t) {
                  var i = this._checkForAlpacaRequiredFields(t);
                  o = o && i;
                }, this)
              ),
              o
            );
          },
          jsonObjTraverse: function (c, o, t, i, s, l) {
            for (var g in c)
              c.hasOwnProperty(g) &&
                (c[t] !== void 0 &&
                  c[t] === i &&
                  r.indexOf(s, l) === -1 &&
                  s.push(l),
                typeof c[g] == "object" &&
                  this.jsonObjTraverse(c[g], o + "." + g, t, i, s, g));
          },
          _checkForAlpacaRequiredFields: function (c) {
            var o = !0,
              t = c.get("data"),
              i = c.get("options"),
              s = c.get("schema"),
              l = [],
              g = [],
              f = [];
            this.jsonObjTraverse(s, "", "required", !0, g, "properties"),
              this.jsonObjTraverse(i, "", "validate", !1, f, "fields");
            var u = function (T, k) {
                var A = k.filter(function (M) {
                  return T.indexOf(M) === -1;
                });
                return A;
              },
              p = u(f, g),
              x = function (T, k, A, M) {
                for (var N in T)
                  T.hasOwnProperty(N) &&
                    (N === A && M.push(T[A]),
                    typeof T[N] == "object" && x(T[N], k + "." + N, A, M));
              };
            if (p) {
              var S = !1;
              r.each(p, function (T) {
                if (
                  ((l = []),
                  x(t, "", T.toString(), l),
                  r.each(l, function (k) {
                    var A = function (M) {
                      if (M instanceof Array && (M !== null || M !== ""))
                        r.each(M, function (N) {
                          A(N);
                        });
                      else if (M === null || M === "") {
                        S = !0;
                        return;
                      }
                    };
                    if (!S) A(k);
                    else {
                      o = !1;
                      return;
                    }
                  }),
                  S)
                ) {
                  o = !1;
                  return;
                }
              });
            }
            return o;
          },
          AlpacaFormOptionsSchemaHaveRequiredFields: function (c, o, t) {
            var i = !1,
              s = [];
            if (t && t === "general") {
              if (o && o.properties) {
                o.properties.name && (o.properties.name.required = !1),
                  o.properties.advanced_versioning &&
                    (o.properties.advanced_versioning.required = !1),
                  o.properties.file && (o.properties.file.required = !1);
                for (var l in o.properties)
                  o.properties.hasOwnProperty(l) &&
                    o.properties[l].required &&
                    !c.fields[l].hidden &&
                    (i = !0);
              }
            } else
              o &&
                i === !1 &&
                (this.jsonObjTraverse(o, "", "required", !0, s, "properties"),
                s.length > 0 && (i = !0));
            return i;
          },
          ContainerHasEnforcedEmptyRequiredMetadataOnNodes: function (c) {
            if (!c.items || c.items.length < 1 || !c.container)
              return y.Deferred().reject({});
            var o = y.Deferred(),
              t = r.map(c.items, function (g) {
                return g.id;
              }),
              i = { ids: t },
              s = c.container.connector,
              l = new e({}, { connector: s });
            return (
              l
                .save(i, { type: "POST", processData: !1, contentType: !1 })
                .done(
                  r.bind(function (g) {
                    if (c.inheritance === "original")
                      o.resolve({
                        requiredMetadata: !1,
                        enforcedItems: g.results,
                      });
                    else if (g.results && g.results.length > 0) {
                      var f = {
                        action: c.action,
                        id: g.results[0].id,
                        inheritance: c.inheritance,
                        container: c.container,
                        enforcedRequiredAttrs: !0,
                      };
                      this.ContainerHasEnforcedEmptyRequiredMetadata(f)
                        .done(function (u) {
                          u.hasRequiredMetadata === !0
                            ? o.resolve({
                                requiredMetadata: !0,
                                enforcedItems: g.results,
                              })
                            : o.resolve({
                                requiredMetadata: !1,
                                enforcedItems: g.results,
                              });
                        })
                        .fail(function (u) {
                          o.reject(u);
                        });
                    } else
                      o.resolve({
                        requiredMetadata: !1,
                        enforcedItems: g.results,
                      });
                  }, this)
                )
                .fail(function (g) {
                  o.reject(g);
                }),
              o.promise()
            );
          },
        }),
        (a.prototype.get = v.Model.prototype.get),
        r.extend(a, { version: "1.0" }),
        a
      );
    }
  ),
  csui.define(
    "csui/models/appliedcategories/category.action.server.adaptor.mixin",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/utils/url",
      "csui/models/version",
    ],
    function (r, y, v, m) {
      "use strict";
      var n = {
        mixin: function (e) {
          return y.extend(e, {
            makeServerAdaptor: function (a) {
              return this;
            },
            url: function () {
              return v.combine(this.node.urlBase(), this.options.urlResource);
            },
            parse: function () {
              return this.node instanceof m
                ? {}
                : this.node.get("id") === void 0 || this.options.action
                ? { categories_add: "dummy value" }
                : this.constructor.__super__.parse.apply(this, arguments);
            },
          });
        },
      };
      return n;
    }
  ),
  csui.define(
    "csui/models/appliedcategories/appliedcategoriesaction",
    [
      "csui/lib/jquery",
      "csui/lib/underscore",
      "csui/lib/backbone",
      "csui/utils/url",
      "csui/models/appliedcategories",
      "csui/models/version",
      "csui/models/appliedcategories/category.action.server.adaptor.mixin",
    ],
    function (r, y, v, m, n, e, a) {
      "use strict";
      var c = n.extend({
        constructor: function (t, i) {
          n.prototype.constructor.apply(this, arguments),
            (this.options = i || {}),
            y.defaults(this.options, { urlResource: "" });
        },
        fetch: function () {
          return this.node instanceof e ||
            this.node.get("id") === void 0 ||
            this.options.action
            ? ((this.fetching = !1),
              (this.fetched = !0),
              r.Deferred().resolve())
            : n.prototype.fetch.apply(this, arguments);
        },
        isFetchable: function () {
          return this.node.isFetchableDirectly
            ? this.node.isFetchableDirectly()
            : !1;
        },
      });
      return a.mixin(c.prototype), c;
    }
  ),
  csui.define("csui/controls/multilingual.text.picker/impl/nls/lang", {
    root: !0,
    "en-us": !1,
    en: !1,
  }),
  csui.define("csui/controls/multilingual.text.picker/impl/nls/root/lang", {
    formHeading:
      "This field can be translated for each defined metadata language",
    dialogTitle: "Multilingual Values",
    btnDone: "Done",
    btnCancel: "Cancel",
    globeIcon: "Edit in multiple languages",
    valueRequired: "One of the values is required",
  }),
  csui.define(
    "hbs!csui/controls/multilingual.text.picker/impl/multilingual.form",
    ["module", "hbs", "nuc/lib/handlebars"],
    function (r, y, v) {
      var m = v.template({
        1: function (n, e, a, c, o) {
          var t,
            i =
              n.lookupProperty ||
              function (s, l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) return s[l];
              };
          return (
            `    <div class="binf-row">
      <label class="binf-control-label alpaca-control-label binf-col-sm-6 text-right ` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              e != null ? i(e, "default") : e,
              {
                name: "if",
                hash: {},
                fn: n.program(2, o, 0),
                inverse: n.noop,
                data: o,
                loc: {
                  start: { line: 9, column: 85 },
                  end: { line: 10, column: 35 },
                },
              }
            )) != null
              ? t
              : "") +
            '" for="input-' +
            n.escapeExpression(
              n.lambda(e != null ? i(e, "language_code") : e, e)
            ) +
            `"
             title="` +
            n.escapeExpression(
              n.lambda(e != null ? i(e, "display_name") : e, e)
            ) +
            `"
             lang="` +
            n.escapeExpression(
              n.lambda(e != null ? i(e, "language_code") : e, e)
            ) +
            '">' +
            n.escapeExpression(
              n.lambda(e != null ? i(e, "display_name") : e, e)
            ) +
            ` </label>
      <div class="binf-col-sm-12 input-container">
` +
            ((t = i(a, "if").call(
              e ?? (n.nullContext || {}),
              (t = o && i(o, "root")) && i(t, "textFieldRequired"),
              {
                name: "if",
                hash: {},
                fn: n.program(4, o, 0),
                inverse: n.program(6, o, 0),
                data: o,
                loc: {
                  start: { line: 14, column: 8 },
                  end: { line: 25, column: 15 },
                },
              }
            )) != null
              ? t
              : "") +
            `      </div>
    </div>
`
          );
        },
        2: function (n, e, a, c, o) {
          return "bold";
        },
        4: function (n, e, a, c, o) {
          var t =
            n.lookupProperty ||
            function (i, s) {
              if (Object.prototype.hasOwnProperty.call(i, s)) return i[s];
            };
          return (
            '          <label lang="' +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "language_code") : e, e)
            ) +
            `">
            <input id="input-` +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "language_code") : e, e)
            ) +
            '" type="text" value="' +
            n.escapeExpression(n.lambda(e != null ? t(e, "value") : e, e)) +
            `"
                   title="` +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "display_name") : e, e)
            ) +
            `"
                   lang="` +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "language_code") : e, e)
            ) +
            `"/>
          </label>
`
          );
        },
        6: function (n, e, a, c, o) {
          var t =
            n.lookupProperty ||
            function (i, s) {
              if (Object.prototype.hasOwnProperty.call(i, s)) return i[s];
            };
          return (
            '          <label lang="' +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "language_code") : e, e)
            ) +
            `">
          <textarea id="input-` +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "language_code") : e, e)
            ) +
            `"
                    title="` +
            n.escapeExpression(
              n.lambda(e != null ? t(e, "display_name") : e, e)
            ) +
            '">' +
            n.escapeExpression(n.lambda(e != null ? t(e, "value") : e, e)) +
            `</textarea>
          </label>
`
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (n, e, a, c, o) {
          var t,
            i,
            s =
              n.lookupProperty ||
              function (l, g) {
                if (Object.prototype.hasOwnProperty.call(l, g)) return l[g];
              };
          return (
            `<div class="cs-ml-form-container csui-normal-scrolling alpaca-container-item">
  <div class="csui-inlineform-group csui-inlineform-required-error" role="alert">
    <div class="binf-text-danger" title="` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "valueRequired") ||
                  (e != null ? s(e, "valueRequired") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "valueRequired",
                    hash: {},
                    data: o,
                    loc: {
                      start: { line: 3, column: 41 },
                      end: { line: 3, column: 58 },
                    },
                  })
                : i)
            ) +
            `">
      <span class="csui-text-danger">` +
            n.escapeExpression(
              ((i =
                (i =
                  s(a, "valueRequired") ||
                  (e != null ? s(e, "valueRequired") : e)) != null
                  ? i
                  : n.hooks.helperMissing),
              typeof i == "function"
                ? i.call(e ?? (n.nullContext || {}), {
                    name: "valueRequired",
                    hash: {},
                    data: o,
                    loc: {
                      start: { line: 4, column: 37 },
                      end: { line: 4, column: 54 },
                    },
                  })
                : i)
            ) +
            `</span>
    </div>
  </div>
` +
            ((t = s(a, "each").call(
              e ?? (n.nullContext || {}),
              e != null ? s(e, "languages") : e,
              {
                name: "each",
                hash: {},
                fn: n.program(1, o, 0),
                inverse: n.noop,
                data: o,
                loc: {
                  start: { line: 7, column: 2 },
                  end: { line: 28, column: 11 },
                },
              }
            )) != null
              ? t
              : "") +
            `</div>

`
          );
        },
        useData: !0,
      });
      return (
        v.registerPartial(
          "csui_controls_multilingual.text.picker_impl_multilingual.form",
          m
        ),
        m
      );
    }
  ),
  csui.define(
    "css!csui/controls/multilingual.text.picker/impl/multilingual.form",
    [],
    function () {}
  ),
  csui.define(
    "csui/controls/multilingual.text.picker/impl/multilingual.form.view",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "i18n",
      "csui/lib/marionette3",
      "i18n!csui/controls/multilingual.text.picker/impl/nls/lang",
      "csui/utils/base",
      "hbs!csui/controls/multilingual.text.picker/impl/multilingual.form",
      "css!csui/controls/multilingual.text.picker/impl/multilingual.form",
      "csui/lib/binf/js/binf",
      "csui/lib/handlebars.helpers.xif",
    ],
    function (r, y, v, m, n, e, a) {
      var c = m.View.extend({
        template: a,
        className: "cs-multilingual-form",
        templateContext: function () {
          return {
            formHeading: n.formHeading,
            enableheading: this.options.isDialog,
            languages: this.data,
            btnDone: n.btnDone,
            btnCancel: n.btnCancel,
            valueRequired: n.valueRequired,
            isPopover: !this.options.isDialog,
            textFieldRequired: this.options.textField,
          };
        },
        ui: {
          errorMsg: ".csui-inlineform-required-error",
          invisibleOverlay: ".csui-multilingual-invisibleOverlay",
          textareaFields: "textarea",
        },
        events: {
          "keyup @ui.textareaFields": "adjustTextareaHeight",
          keyup: "onPopoverKeyUp",
          "keydown input, @ui.textareaFields": "onKeyDown",
          "focus input, @ui.textareaFields": "onFieldFocus",
        },
        constructor: function (t) {
          m.View.apply(this, arguments),
            (this.options = t || (t = {})),
            this.initializationData(),
            this.listenTo(
              this,
              "ml:show:popover",
              r.bind(this.showPopover, this)
            ),
            this.listenTo(
              this,
              "ml:hide:popover",
              r.bind(this.closePopover, this)
            );
        },
        initializationData: function () {
          (this.prevData = ""),
            r.defaults(this.options, { valueRequired: !1, textField: !0 }),
            (this.targetElement = y(y.fn.binf_modal.getDefaultContainer())),
            (this.data = this.options.data);
          var o = r.findIndex(this.data, { default: !0 }),
            t = e.getUserMetadataLanguageInfo(),
            i;
          if (o !== 0) {
            var s = this.data.splice(o, 1);
            this.data.unshift(s[0]);
          }
          if (((i = r.findIndex(this.data, { language_code: t })), i > 0)) {
            var l = this.data.splice(i, 1);
            this.data.unshift(l[0]);
          }
          this.options.popoverTargetElement
            .parent()
            .addClass("csui-multilingual-input"),
            (this.globeIcon = this.options.mlGlobeIcon),
            this.globeIcon &&
              this.globeIcon.attr({
                title: n.globeIcon,
                "aria-label": n.globeIcon,
                "aria-expanded": !1,
              });
        },
        _setFocus: function (o) {
          var t = !o.shiftKey,
            i = this.$el.find("input,textarea"),
            s = t ? 0 : i.length - 1,
            l = i.eq(s);
          l.trigger("focus");
        },
        _onClickDone: function (o) {
          this.options.changetoReadmodeOnclose &&
            !this.options.valueRequired &&
            (this.options.parentView.isF2KeyPressed = !0),
            this.options.popoverTargetElement.prop("disabled", !1),
            this.options.popoverTargetElement.removeClass("mlDisabled"),
            (this.isPopoverOpen = !1),
            (this._result = this.getData()),
            this.ui.errorMsg.hide(),
            this._result
              ? ((this.prevData = ""),
                this.removeEventBindings(),
                this.$popover.binf_popover("destroy"),
                this.globeIcon.trigger("focus"))
              : this.options.valueRequired
              ? (this.ui.errorMsg.show(),
                this.$el
                  .find(".binf-row:first input,.binf-row:first textarea")
                  .trigger("focus"))
              : this.closePopover(),
            o && o.preventDefault();
        },
        closePopover: function () {
          this.options.popoverTargetElement.prop("disabled", !1),
            this.options.popoverTargetElement.removeClass("mlDisabled"),
            this.$popover && this.$popover.binf_popover("destroy"),
            this.removeEventBindings();
        },
        getData: function () {
          var o = this,
            t = !0;
          return (
            (this.prevData = JSON.parse(JSON.stringify(this.data))),
            r.each(this.data, function (i) {
              (i.value = o.$el.find("#input-" + i.language_code).val()),
                i.value && i.value.trim() && (t = !1);
            }),
            this.options.valueRequired && t ? null : this.data
          );
        },
        _placement: function () {
          var o = this.options.popoverTargetElement,
            t = y("otc-header-bar").length
              ? "otc-header-bar"
              : "nav.csui-navbar",
            i = o.offset().top,
            s = document.body.getBoundingClientRect().top,
            l = y(window).height(),
            g = s ? s + i : i,
            f = o.is("textarea") ? 26 : o.innerHeight(),
            u = o.closest(".csui-outertablecontainer"),
            p = o.closest(".binf-tab-content"),
            x =
              u.find("thead").length > 0
                ? u.find("thead").outerHeight()
                : u.find(".csui-thumbnail-header").outerHeight(),
            S = u.find(".csui-table-paginationview"),
            T =
              u.length && !s
                ? u.offset().top + x
                : p.length
                ? p.offset().top + s + 18
                : 0,
            k = S.length ? S.outerHeight() : 20,
            A = l - (g + k + f),
            M = 17,
            N = l - (A + T + f),
            R = A + N < l / 2;
          return (
            R && (N = l - (A + f)),
            A > N
              ? ((this.popOverHeight = A - M), "bottom")
              : ((this.popOverHeight = N - M - 1),
                s && (this.popOverHeight -= k),
                ((!s && o.hasClass("title-input")) || R) &&
                  (this.popOverHeight -= y(t).outerHeight() || 0),
                "top")
          );
        },
        showPopover: function () {
          (this.$popover = this.targetElement),
            this.prevData && (this.data = r.clone(this.prevData));
          var o = this.data[0],
            t = this.options.popoverTargetElement;
          o.value &&
            o.value !== t.val() &&
            !t.hasClass("mlDisabled") &&
            (o.value = t.val()),
            !t.hasClass("mlDisabled") &&
              this.options.parentView &&
              this.options.parentView.model &&
              !this.options.parentView.model.get("id") &&
              (o.value = t.val()),
            !t.hasClass("mlDisabled") && (o.value = t.val()),
            (this._popoverDoneRequired = !0),
            this.bindUIElements(),
            this.render(),
            this.options.parentView &&
              this.listenTo(
                this.options.parentView,
                "ml:set:focus",
                this._setFocus
              ),
            this.options.popoverTargetElement.prop("disabled", !0),
            this.options.popoverTargetElement.addClass("mlDisabled");
          var i = this._placement(),
            s = {
              html: !0,
              content: this.el,
              trigger: "manual",
              placement: i,
              class: "csui-multiLingual-popover",
            },
            l = this;
          this.$popover.binf_popover(s),
            this.$popover.binf_popover("toggle"),
            (this.isPopoverOpen = !0),
            v.settings &&
              v.settings.rtl &&
              this.$el.parents(".binf-popover").addClass("csui-popover-rtl"),
            this.$popover &&
              this.$popover.append(
                '<div class="csui-multilingual-invisibleOverlay"></div>'
              ),
            this.$el
              .parents(".binf-popover")
              .addClass("binf-invisible")
              .attr("aria-label", n.dialogTitle)
              .attr("role", "dialog"),
            this._onShowMLPopover(i),
            this.$el.parents(".binf-popover").removeClass("binf-invisible"),
            this.addEventBindings(),
            this.$popover
              .off("shown.binf.popover")
              .on("shown.binf.popover", function () {
                l.globeIcon.attr("aria-expanded", !0),
                  l.$el
                    .find(".binf-row:first input,.binf-row:first textarea")
                    .trigger("select"),
                  l.options &&
                    !l.options.textField &&
                    r.each(l.$el.find("textarea"), function (g) {
                      l.adjustTextareaHeight(void 0, g);
                    });
              }),
            this.$popover
              .off("hide.binf.popover")
              .on("hide.binf.popover", function () {
                l.globeIcon.attr("aria-expanded", !1),
                  l._popoverDoneRequired &&
                    (l.trigger("ml:doneWith:popover", l._result),
                    (l._popoverDoneRequired = !1));
              }),
            this.$popover
              .off("hidden.binf.popover")
              .on("hidden.binf.popover", function () {
                l.$popover
                  .parent()
                  .removeClass("csui-multilingual-input-wrapper"),
                  l.$popover.binf_popover("destroy"),
                  l.globeIcon.trigger("focus"),
                  l.$popover &&
                    l.$popover
                      .find(".csui-multilingual-invisibleOverlay")
                      .remove();
              });
        },
        addEventBindings: function () {
          y(window)
            .off("resize", r.bind(this.closePopover, this))
            .on("resize", r.bind(this.closePopover, this)),
            y(window)
              .off("popstate", r.bind(this.closePopover, this))
              .on("popstate", r.bind(this.closePopover, this)),
            y(document)
              .off("scroll", r.bind(this.closePopover, this))
              .on("scroll", r.bind(this.closePopover, this)),
            y(".globe-icon-mask,.csui-multilingual-invisibleOverlay")
              .off("click")
              .on("click", r.bind(this._onClickDone, this));
        },
        removeEventBindings: function () {
          y(window).off("resize", r.bind(this.closePopover, this)),
            y(document).off("scroll", r.bind(this.closePopover, this)),
            y(".globe-icon-mask,.csui-multilingual-invisibleOverlay").off(
              "click"
            );
        },
        _onShowMLPopover: function (o) {
          let t = v.settings && v.settings.rtl,
            i = this.options.popoverTargetElement,
            s = document.body.getBoundingClientRect().top,
            l = s + window.scrollY,
            g = this.$el.parents(".binf-popover"),
            f = g.find(".binf-arrow"),
            u = this.$popover.closest(".binf-modal-dialog"),
            p = 0,
            x,
            S,
            T;
          g.addClass("csui-multilingual-input-wrapper");
          const k = g.outerWidth();
          (s -= l),
            (p = i.innerWidth() - g.innerWidth()),
            f.append(
              '<div class="globe-icon-mask" title="' + n.globeIcon + '"></div>'
            ),
            u.length && (e.isIE11() || (p -= u.offset().left)),
            (x = i.offset().top + (i.is("textarea") ? 26 : i.innerHeight())),
            (S = y(window).innerHeight() - i.offset().top + 10),
            (T = t ? i.offset().left : p + i.offset().left),
            s &&
              ((x += s),
              (S = y(window).innerHeight() - (i.offset().top + s) + 10)),
            f.removeClass("csui-remove-arrow-mark-styles"),
            T < 0 &&
              ((T = this.globeIcon.offset().left - 5),
              f.addClass("csui-remove-arrow-mark-styles")),
            t &&
              y(".cs-perspective-panel").innerWidth() < T + k &&
              ((T = T - k + this.globeIcon.innerWidth() + 5),
              f.addClass("csui-remove-arrow-mark-styles"));
          var A = { position: "fixed", left: T, top: "auto", bottom: "auto" };
          g.find(".cs-ml-form-container").css("maxHeight", this.popOverHeight),
            o === "top" ? (A.bottom = S) : (A.top = x),
            g.css(A);
        },
        onPopoverKeyUp: function (o) {
          switch ((o.stopPropagation(), o && o.keyCode)) {
            case 27:
              this.options &&
              (this.options.changetoReadmodeOnclose ||
                !this.options.valueRequired)
                ? (this.closePopover(), this.trigger("ml:close:writeMode"))
                : this._onClickDone(o);
              break;
            case 113:
              this._onClickDone(o);
              break;
            default:
              return;
          }
        },
        onKeyDown: function (o) {
          if ((o.stopPropagation(), o.keyCode === 9)) {
            var t = this.$el.find("input,textarea"),
              i = t.length - 1,
              s = t.index(o.target);
            i === s && !o.shiftKey
              ? (t.eq(0).trigger("focus"),
                o.stopPropagation(),
                o.preventDefault())
              : s === 0 &&
                o.shiftKey &&
                (t.eq(i).trigger("focus"),
                o.stopPropagation(),
                o.preventDefault());
          } else if (o.keyCode === 27 && e.isIE11()) return !1;
        },
        adjustTextareaHeight: function (o, t) {
          var i = (o && o.target) || t,
            s,
            l;
          i.value === ""
            ? (i.style.height = "")
            : ((i.style.height = "26px"),
              (s = i.scrollHeight),
              (l = i.offsetHeight),
              (i.style.height = l > s ? l : s + "px"));
        },
        onFieldFocus: function (o) {
          o.stopPropagation();
        },
      });
      return c;
    }
  ),
  csui.define(
    "csui/controls/multilingual.text.picker/multilingual.popover.mixin",
    [
      "module",
      "require",
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/url",
      "csui/utils/base",
    ],
    function (r, y, v, m, n, e) {
      "use strict";
      var a = r.config();
      v.defaults(a, {
        PopoverFormView:
          "csui/controls/multilingual.text.picker/impl/multilingual.form.view",
      });
      var c = {
        mixin: function (o) {
          return v.extend(o, {
            multiLingualForm: "",
            _loadMultiLingualPopover: function (t) {
              var i = this;
              (this.targetElement = t.targetElement), (i.mlOptions = t);
              var s = JSON.parse(JSON.stringify(i.metadataLanguages.languages));
              this._updatePrevobeject(s),
                (this.mlGlobeIcon = t.mlGlobeIcon),
                v.defaults(t, {
                  valueRequired: !1,
                  isTextAreaField: !1,
                  changetoReadmodeOnclose: !1,
                }),
                (this.changetoReadmodeFlag = t.changetoReadmodeOnclose);
              var l = {
                data: s,
                popoverTargetElement: i.targetElement,
                valueRequired: t.validationRequired,
                mlGlobeIcon: t.mlGlobeIcon,
                parentView: i,
                textField: !t.isTextAreaField,
                changetoReadmodeOnclose: t.changetoReadmodeOnclose,
              };
              y([a.PopoverFormView], function (g) {
                (i.multiLingualForm = new g(l)),
                  (i._isReadyToSave = !0),
                  i.trigger("multiLingualForm:isReady"),
                  i.changetoReadmodeFlag &&
                    i
                      .stopListening(i.multiLingualForm, "ml:close:writeMode")
                      .listenTo(
                        i.multiLingualForm,
                        "ml:close:writeMode",
                        function () {
                          i.trigger("ml:close:writeMode");
                        }
                      );
              }),
                i.model.get("id") !== void 0 &&
                  i.mode !== "writeonly" &&
                  i.disableElement(s),
                (i._isReadyToSave = !0);
            },
            _updatePrevobeject: function (t) {
              var i = this,
                s = i.mlOptions.multilingualData;
              v.isObject(s) &&
                v.each(t, function (l) {
                  l.value = s[l.language_code] || "";
                }),
                (i.prevObject = JSON.parse(JSON.stringify(t)));
            },
            _showLanguagePopover: function () {
              var t = this,
                i = t.$el;
              if (!t._isReadyToSave) {
                this.multiLingualForm &&
                  this.multiLingualForm.trigger("ml:hide:popover");
                return;
              }
              i.find(".csui-edit-save").length ||
                (i = t.$el.parents(".csui-inline-editform")),
                this._updatePrevobeject(this.prevObject),
                i.addClass("csui-multilingual-greyout"),
                (t._isReadyToSave = !1),
                this.multiLingualForm &&
                  this.multiLingualForm.trigger("ml:show:popover"),
                this.stopListening(
                  this.multiLingualForm,
                  "ml:doneWith:popover"
                ).listenTo(
                  this.multiLingualForm,
                  "ml:doneWith:popover",
                  v.bind(function (s) {
                    s && this._handlePickerSuccess(s),
                      i.removeClass("csui-multilingual-greyout"),
                      (t._isReadyToSave = !0),
                      (t.mlOptions.popoverClosed = !0);
                  }, this)
                );
            },
            _handlePickerSuccess: function (t) {
              var i = this;
              this.editVal = "";
              var s = {};
              v.each(t, function (l) {
                (s[l.language_code] = l.value),
                  i.editVal || (i.editVal = l.value);
              }),
                this.disableElement(t),
                this.isEqualObjects(this.prevObject, t)
                  ? this.changetoReadmodeFlag &&
                    this.trigger("ml:close:writeMode")
                  : (this.trigger("ml:value:updated", {
                      value_multilingual: s,
                      value: this.editVal,
                    }),
                    (this.mlOptions.multilingualData = s));
            },
            requiredInfoAvilable: function (t) {
              var i = m.Deferred();
              if (this.model.get(t) || !this.model.get("id")) i.resolve();
              else {
                var s = this.model,
                  l = s.get("id"),
                  g = s.connector ? s.connector : this.options.connector,
                  f = n.combine(
                    g.getConnectionUrl().getApiBase("v2"),
                    "/nodes/" + l + "/properties"
                  ),
                  u = { type: "GET", url: f };
                g.makeAjaxCall(u)
                  .done(
                    v.bind(function (p) {
                      var x = p.results.data.properties,
                        S = {
                          name: x.name,
                          description: x.description,
                          name_multilingual: x.name_multilingual,
                          description_multilingual: x.description_multilingual,
                        };
                      x[t] && (S[t] = x[t]),
                        s.set(S, { silent: !0 }),
                        i.resolve(p);
                    }, this)
                  )
                  .fail(function (p) {
                    i.reject(p);
                  });
              }
              return i.promise();
            },
            disableElement: function (t) {
              var i = e.getUserMetadataLanguageInfo(),
                s = v.find(t, { language_code: i }),
                l = v.find(t, function (g) {
                  return g.value !== "";
                });
              this.targetElement.prop("disabled", !1),
                this.targetElement.removeClass("mlDisabled"),
                s &&
                  s.value === "" &&
                  l &&
                  ((this._isReadyToSave = !0),
                  this.targetElement.prop("disabled", !0),
                  this.targetElement.addClass("mlDisabled"),
                  (this.mlOptions.popoverClosed = !1));
            },
            isEqualObjects: function (t, i) {
              var s = !0;
              return (
                v.each(i, function (l) {
                  l.value ===
                  v.findWhere(t, { language_code: l.language_code }).value
                    ? (s = s && !0)
                    : (s = !1);
                }),
                s
              );
            },
            keyDownOnGlobeIcon: function (t) {
              switch (t.keyCode) {
                case 13:
                case 32:
                  this.mlGlobeIcon.prop("ariaExpanded", !0),
                    this._showLanguagePopover(),
                    t.preventDefault(),
                    t.stopPropagation();
                  break;
                case 27:
                  this.multiLingualForm &&
                    (this.multiLingualForm &&
                      this.multiLingualForm.trigger("ml:hide:popover"),
                    t.preventDefault(),
                    t.stopPropagation());
                  break;
              }
            },
            _openMLFlyoutInEditMode: function () {
              var t = e.getMetadataLanguageInfo();
              if (t.enabled) {
                var i = t.defaultLanguage,
                  s = e.getUserMetadataLanguageInfo(),
                  l = this.mlOptions?.multilingualData,
                  g =
                    v.values(l).filter(function (f) {
                      return !!f;
                    }).length >= 2;
                l &&
                  (!l[s] || g) &&
                  (this.multiLingualForm
                    ? (this.targetElement.addClass("mlDisabled"),
                      this._showLanguagePopover(),
                      this.targetElement.prop("disabled", !0))
                    : this.listenToOnce(
                        this,
                        "multiLingualForm:isReady",
                        this._showLanguagePopover
                      ));
              }
            },
            updateMLdata: function (t) {
              var i = t && t.target.value,
                s = e.getUserMetadataLanguageInfo(),
                l = this.mlOptions?.multilingualData;
              l && (l[s] = i);
            },
          });
        },
      };
      return c;
    }
  ),
  csui.define(
    "csui/temporary/cop/commands/defaultactionitems",
    [],
    function () {
      "use strict";
      return [
        { equals: { type: [356, 357] }, signature: "OpenBlog", sequence: 30 },
        {
          equals: { type: [123475, 123476] },
          signature: "OpenFAQ",
          sequence: 30,
        },
        {
          equals: { type: [123469, 123470] },
          signature: "OpenForum",
          sequence: 30,
        },
        { equals: { type: [5573, 5574] }, signature: "OpenWiki", sequence: 30 },
        { equals: { type: 3030331 }, signature: "OpenMailStore", sequence: 30 },
      ];
    }
  ),
  csui.define(
    "csui/temporary/activeviews/commands/defaultactionitems",
    [],
    function () {
      "use strict";
      return [{ equals: { type: 30309 }, signature: "Disabled", sequence: 30 }];
    }
  ),
  csui.define(
    "csui/temporary/appearances/commands/defaultactionitems",
    [],
    function () {
      "use strict";
      return [{ equals: { type: 480 }, signature: "Disabled", sequence: 30 }];
    }
  ),
  csui.define(
    "csui/utils/letter-avatar-random-color/letter-avatar-colors",
    ["module"],
    function (r) {
      var y = {
          colors: [
            "#414979",
            "#2e3d98",
            "#4f3690",
            "#e00051",
            "#006353",
            "#007599",
            "#147bbc",
            "#a0006b",
            "#ba004C",
          ],
        },
        v = {
          getLetterAvatarColor: function (m) {
            if (!m) return "";
            var n = 0,
              e = 0,
              a = m.length;
            m = m.toUpperCase();
            for (var c = 0; c < a; c++) n += m.charCodeAt(c);
            return (
              (e = parseInt(n.toString().split("").pop())),
              (e = e === 9 ? e - 1 : e),
              y.colors[e]
            );
          },
        };
      return v;
    }
  ),
  csui.define(
    "csui/utils/user.avatar.color",
    [
      "csui/lib/underscore",
      "csui/utils/letter-avatar-random-color/letter-avatar-colors",
    ],
    function (r, y) {
      var v = {
        getUserAvatarColor: function (m) {
          if (!m || r.isEmpty(m)) return "";
          var n =
            m.initials && m.initials.length > 1
              ? m.initials
              : m.name
              ? m.name.substring(0, 2)
              : "";
          return y.getLetterAvatarColor(n);
        },
      };
      return v;
    }
  ),
  csui.define(
    "csui/controls/node-type.icon/node-type.icon.item.view.mixin",
    [
      "csui/lib/underscore",
      "csui/lib/jquery",
      "csui/utils/user.avatar.color",
      "csui/utils/nodesprites",
      "csui/controls/node-type.icon/node-type.icon.view",
    ],
    function (r, y, v, m, n) {
      var e = {
        mixin: function (a) {
          return r.extend(a, {
            makeNodeTypeIconItemView: function () {
              this.listenTo(this, "destroy", function () {
                this.nodeTypeIconView && this.nodeTypeIconView.destroy();
              });
            },
            renderNodeTypeIconView: function (c, o, t, i, s) {
              var l = y(o);
              (o = l[0] ? l : o), (t = t || ""), (i = i || ""), (s = s || {});
              var g = (" " + t + " ").indexOf(" csui-initials ") >= 0,
                f = {
                  node: c,
                  nodeSprite: g ? new m.model({ className: t }) : s.nodeSprite,
                  size: s.size,
                  title: s.title,
                };
              this.nodeTypeIconView && this.nodeTypeIconView.destroy();
              var u = (this.nodeTypeIconView = new n(f));
              if ((u.render(), u.$el.addClass(o.attr("class")), g)) {
                var p = c.attributes.initials,
                  x;
                if (p) x = v.getUserAvatarColor(c.attributes);
                else {
                  var S = c.get(c.nameAttribute || "name") || "",
                    T = S.trim().indexOf(" ");
                  (p = T > 0 ? S[0] + S[T + 1] : S.substring(0, 2)),
                    (x = v.getUserAvatarColor({ initials: p }));
                }
                u.ui.iconElement.text(p), u.ui.iconElement.css("background", x);
              }
              u.ui.iconElement.addClass(t),
                u.ui.imageElement.addClass(i),
                o.replaceWith(u.el);
            },
          });
        },
      };
      return e;
    }
  ),
  csui.define(
    "bundles/csui-view-support",
    [
      "csui/lib/ally",
      "csui/lib/bootstrap3-typeahead",
      "csui/lib/jquery.mousehover",
      "csui/lib/fancytree/jquery.fancytree",
      "csui/lib/fancytree/jquery.fancytree.filter",
      "csui/behaviors/collection.error/collection.error.behavior",
      "csui/behaviors/collection.state/collection.state.behavior",
      "csui/behaviors/collection.state/collection.state.view",
      "csui/controls/tableactionbar/tableactionbar.view",
      "csui/controls/dialog/dialog.view",
      "csui/controls/dialog/impl/header.view",
      "csui/controls/dialog/footer.view",
      "csui/controls/facet.bar/facet.bar.view",
      "csui/controls/facet.panel/facet.panel.view",
      "csui/controls/list/behaviors/list.view.keyboard.behavior",
      "csui/controls/list/emptylist.view",
      "csui/controls/list/list.view",
      "csui/controls/list/list.state.view",
      "csui/controls/treebrowse/node.tree.view",
      "css!csui/controls/list/impl/list",
      "csui/controls/list/simplelist.view",
      "csui/controls/list/simpletreelist.view",
      "csui/controls/listitem/inline.menu.view",
      "csui/controls/listitem/listitemobject.view",
      "csui/controls/listitem/listitemstandard.view",
      "csui/controls/listitem/listitemstateful.view",
      "csui/controls/listitem/simpletreelistitem.view",
      "csui/controls/table/cells/search/search.cell/search.cell.popover.list.view",
      "csui/controls/toolbar/toolbar.view",
      "csui/controls/toolbar/toolbar.command.controller",
      "csui/controls/toolbar/toolitem.model",
      "csui/controls/toolbar/toolitem.custom.view",
      "csui/controls/toolbar/toolitem.view",
      "csui/controls/toolbar/flyout.toolitem.view",
      "csui/controls/toolbar/toolitems.factory",
      "csui/controls/toolbar/toolitems.filtered.model",
      "csui/controls/toolbar/toolitems.mask",
      "csui/controls/toolbar/delayed.toolbar.view",
      "csui/controls/toolbar/toolbar.state.behavior",
      "hbs!csui/controls/toolbar/toolitem",
      "csui/controls/fileupload/impl/upload.controller",
      "csui/controls/checkbox/checkbox.view",
      "csui/controls/disclosure/disclosure.view",
      "i18n!csui/controls/listitem/impl/nls/lang",
      "i18n!csui/controls/fileupload/impl/nls/lang",
      "csui/models/appliedcategories",
      "csui/models/appliedcategory",
      "csui/models/fileupload",
      "csui/models/fileuploads",
      "csui/models/namequery",
      "csui/models/nodeversions",
      "csui/models/versions",
      "csui/models/facet",
      "csui/models/facets",
      "csui/models/facettopic",
      "csui/models/facettopics",
      "csui/models/node.facets/facet.query.mixin",
      "csui/models/node.facets2/facet.query.mixin",
      "csui/models/widget/search.results/search.facet.query.mixin",
      "csui/models/node/node.facet.factory",
      "csui/models/node/node.facet2.factory",
      "csui/models/widget/recycle.items/recycle.items.facets.factory",
      "csui/models/nodefacets",
      "csui/models/nodefacets2",
      "csui/models/widget/search.results/search.results.model",
      "csui/models/permission/permission.table.columns.model",
      "csui/models/widget/recycle.items/recycle.items.facets",
      "csui/utils/commands/impl/full.page.modal/full.page.modal.view",
      "csui/controls/full.page.modal/full.page.modal.view",
      "csui/utils/thumbnail/thumbnail.object",
      "csui/utils/thumbnail/thumbnail.view",
      "csui/utils/expiration.warning/expiration.warning.dialog",
      "csui/utils/commands/open.plugins/impl/core.open.plugins",
      "csui/utils/contexts/factories/search.results.factory",
      "csui/utils/high.contrast/detector",
      "csui/utils/impl/signin.dialog/signin.dialog",
      "csui/utils/toolitem.masks/global.toolitems.mask",
      "csui/utils/responsivecontainer",
      "csui/utils/proxy",
      "css!csui/controls/form/impl/form",
      "csui/widgets/metadata/metadata.forms",
      "csui/widgets/search.results/controls/sorting/sort.menu.view",
      "csui/widgets/metadata/impl/metadata.forms",
      "csui/widgets/metadata/impl/metadata.utils",
      "i18n!csui/widgets/metadata/impl/nls/lang",
      "csui/models/appliedcategoryform",
      "csui/models/appliedcategories/appliedcategoriesaction",
      "csui/models/form",
      "csui/models/forms",
      "csui/models/nodecreateforms",
      "csui/models/nodeforms",
      "csui/models/nodeupdateforms",
      "csui/controls/multilingual.text.picker/impl/multilingual.form.view",
      "csui/controls/multilingual.text.picker/multilingual.popover.mixin",
      "i18n!csui/controls/multilingual.text.picker/impl/nls/lang",
      "csui/temporary/cop/commands/defaultactionitems",
      "csui/temporary/activeviews/commands/defaultactionitems",
      "csui/temporary/appearances/commands/defaultactionitems",
      "csui/models/node.facets/server.adaptor.mixin",
      "csui/models/node.facets2/server.adaptor.mixin",
      "csui/widgets/metadata/metadata.forms/server.adaptor.mixin",
      "csui/models/appliedcategories/server.adaptor.mixin",
      "csui/models/appliedcategories/category.action.server.adaptor.mixin",
      "csui/models/namequery/server.adaptor.mixin",
      "csui/models/widget/recycle.items/facet.server.adaptor.mixin",
      "csui/utils/user.avatar.color",
      "csui/utils/letter-avatar-random-color/letter-avatar-colors",
      "csui/controls/mixins/dynamic.toolitems/reopening.toolbar.mixin",
      "csui/controls/node-type.icon/node-type.icon.item.view.mixin",
    ],
    {}
  ),
  csui.require(["require", "css"], function (r, y) {
    y.styleLoad(r, "csui/bundles/csui-view-support", !0);
  });
/**
 * @preserve
 * ally.js - v1.4.1
 * https://allyjs.io/
 * MIT License
 */
/**
 * @preserve
 * bootstrap3-typeahead.js v3.1.0
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * Original written by @mdo and @fat
 * Copyright 2014 Bass Jobsen @bassjobsen
 * Licensed under the Apache License, Version 2.0
 */
/**
 * @preserve
 * jquery.mousehover 0.2.1
 * https://github.com/prantlf/jquery.mousehover
 *
 * Copyright (c) 2017 Ferdinand Prantl
 * Licensed under the MIT license.
 */
/**
 * @preserve
 * jquery.fancytree.js
 * Tree view control with support for lazy loading and much more.
 * https://github.com/mar10/fancytree/
 *
 * Copyright (c) 2008-2019, Martin Wendt (http://wwWendt.de)
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.30.2
 * @date 2019-01-13T08:17:01Z
 *
 * Changes done by OT:
 *  1. Change shortcut methods (e.g. focus) to use explicit "trigger" (to avoid JQmigrate warnings)
 */
/**
 * @preserve
 * jquery.fancytree.filter.js
 *
 * Remove or highlight tree nodes, based on a filter.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2019, Martin Wendt (http://wwWendt.de)
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 2.30.2
 * @date 2019-01-13T08:17:01Z
 */
//# sourceMappingURL=csui-view-support.js.map

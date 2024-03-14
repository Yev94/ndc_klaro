var urlPoliticas = {
    cookies: {
      es: '/preguntas-frecuentes?#textos-legales',
      en: '/preguntas-frecuentes?#textos-legales',
      pt: '/preguntas-frecuentes?#textos-legales',
      it: '/preguntas-frecuentes?#textos-legales',
    },
    privacidad: {
      es: 'https://dominio.com/preguntas-frecuentes?#textos-legales',
      en: 'https://dominio.com/preguntas-frecuentes?#textos-legales',
      pt: 'https://dominio.com/preguntas-frecuentes?#textos-legales',
      it: 'https://dominio.com/preguntas-frecuentes?#textos-legales',
    }
  }
  
  var urlPoweredby = {
    ndc: {
      es:'https://niveldecalidad.com/',
    },
    klaro: {
      es: 'https://klaro.org/',
    }
  }
  
  //Color corporativo
  var corp_color = "#000000";
  
  cssColor = ":root {--corporative-color:" + corp_color + "} ::-webkit-scrollbar-thumb{background:" + corp_color + "cf}";
  
  var klaroConfig = {
    version: 1,
    elementID: 'ndc_klaro',
    styling: {
      theme: ['light', 'top', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'ndc_klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: true,
    disablePoweredBy: false,
    translations: {
      es: {
        privacyPolicyUrl: urlPoliticas.cookies.es,
        purposes: {
          analytics: {
            title: "Analítica",
            description: "Nos permiten contar las visitas y fuentes de circulación para mejorar el desempeño de nuestro sitio. Nos ayudan a saber qué páginas son las más o menos populares, y ver cuántas personas visitan el sitio. Toda la información que recogen estas cookies es anónima.",
          },
        },
      },
      en: {
        privacyPolicyUrl: urlPoliticas.cookies.en,
        purposes: {
          analytics: {
            title: "Analytics",
            description: "They allow us to count visits and traffic sources to improve the performance of our site. They help us to know which pages are the most or least popular, and to see how many people visit the site. All information these cookies collect is anonymous.",
          },
        },
      },
      pt: {
        privacyPolicyUrl: urlPoliticas.cookies.pt,
        purposes: {
          analytics: {
            title: "Analítica",
            description: "Permitem-nos contar as visitas e as fontes de tráfego para melhorar o desempenho do nosso sítio. Ajudam-nos a saber quais são as páginas mais ou menos populares e a ver quantas pessoas visitam o sítio. Todas as informações recolhidas por estes cookies são anónimas.",
          },
        },
      },
      it: {
        privacyPolicyUrl: urlPoliticas.cookies.it,
        purposes: {
          analytics: {
            title: "Analisi",
            description: "Ci permettono di contare le visite e le fonti di traffico per migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più o meno popolari e a vedere quante persone visitano il sito. Tutte le informazioni raccolte da questi cookie sono anonime.",
          },
        },
      },
    },
    services: [
      {
        name: 'GoogleAnalytics',
        title: 'Google Analytics',
        description: 'Used by Google Analytics to distinguish unique users by assigning a randomly generated number as a client identifier to calculate visitor, session, and campaign data for our site\'s analytics reports.',
        purposes: ['analytics'],
        default: false,
        cookie: ['_ga', '_gid'],
      },
      {
        name: 'Doubleclick',
        title: 'Double Click',
        description: 'This cookie is installed by Doubleclick and provides information about how the end user uses the website and any advertising that the end user may have seen before visiting the website.',
        purposes: ['advertising'],
        default: false,
        cookie: ['IDE'],
      },
      {
        name: 'MetaAds',
        title: 'Meta Ads',
        description: 'Used by Meta to deliver a range of advertising products, such as real-time offers from third-party advertisers.',
        purposes: ['advertising'],
        default: false,
        cookie: ['_fbp', '_fbc'],
      },
      {
        name: 'GoogleAds',
        title: 'Google Ads',
        description: 'Used by Google AdSense to experiment with the effectiveness of advertisements on websites that use their services.',
        purposes: ['advertising'],
        default: false,
        cookie: ['_gcl_au'],
      },
      {
        name: 'Consentimientos',
        title: 'Cookie Consent Record',
        description: 'It is a technical or functional cookie, its purpose is to remember user preferences and is not used for tracking or analysis.',
        purposes: ['functional'],
        required: true,
        default: true,
        cookie: ['ndc_klaro'],
      },
      {
        name: 'PHPSessionID',
        title: 'PHP Session ID',
        description: 'Cookie generated by applications based on the PHP language. It is a general-purpose identifier used to maintain user session variables. It is usually a randomly generated number, the way it is used may be site-specific, but a good example is maintaining a login state for a user between pages.',
        purposes: ['functional'],
        required: true,
        default: true,
        cookie: ['PHPSESSID'],
      },
    ],
  };
  
  function checkBodyAndInsertElement() {
    if (document.body) {  // Verifica si el body está disponible
      // El body está disponible, inserta tu elemento
      ! function (e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("klaro", [], t) : "object" == typeof exports ? exports.klaro = t() : e.klaro = t()
      }(this, function () {
        return function (e) {
          var t = {};
  
          function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
              i: o,
              l: !1,
              exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
          }
          return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: o
            })
          }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(e, "__esModule", {
              value: !0
            })
          }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
              enumerable: !0,
              value: e
            }), 2 & t && "string" != typeof e)
              for (var r in e) n.d(o, r, (function (t) {
                return e[t]
              }).bind(null, r));
            return o
          }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
              return e.default
            } : function () {
              return e
            };
            return n.d(t, "a", t), t
          }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }, n.p = "", n(n.s = 189)
        }([function (e, t, n) {
          var o = n(2),
            r = n(27).f,
            i = n(21),
            a = n(22),
            c = n(66),
            s = n(101),
            l = n(58);
          e.exports = function (e, t) {
            var n, u, p, d, f, v = e.target,
              m = e.global,
              h = e.stat;
            if (n = m ? o : h ? o[v] || c(v, {}) : (o[v] || {}).prototype)
              for (u in t) {
                if (d = t[u], p = e.noTargetGet ? (f = r(n, u)) && f.value : n[u], !l(m ? u : v + (h ? "." : "#") + u, e.forced) && void 0 !== p) {
                  if (typeof d == typeof p) continue;
                  s(d, p)
                } (e.sham || p && p.sham) && i(d, "sham", !0), a(n, u, d, e)
              }
          }
        }, function (e, t) {
          e.exports = function (e) {
            try {
              return !!e()
            } catch (t) {
              return !0
            }
          }
        }, function (e, t, n) {
          (function (t) {
            var n = function (e) {
              return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
          }).call(this, n(159))
        }, function (e, t, n) {
          var o = n(2),
            r = n(68),
            i = n(15),
            a = n(55),
            c = n(72),
            s = n(106),
            l = r("wks"),
            u = o.Symbol,
            p = s ? u : u && u.withoutSetter || a;
          e.exports = function (e) {
            return i(l, e) || (c && i(u, e) ? l[e] = u[e] : l[e] = p("Symbol." + e)), l[e]
          }
        }, function (e, t) {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(2),
            i = n(34),
            a = n(33),
            c = n(8),
            s = n(72),
            l = n(106),
            u = n(1),
            p = n(15),
            d = n(59),
            f = n(4),
            v = n(9),
            m = n(23),
            h = n(18),
            y = n(53),
            g = n(42),
            b = n(44),
            k = n(45),
            $ = n(56),
            _ = n(162),
            x = n(71),
            w = n(27),
            z = n(16),
            P = n(51),
            S = n(21),
            A = n(22),
            j = n(68),
            C = n(54),
            O = n(43),
            E = n(55),
            D = n(3),
            I = n(108),
            N = n(109),
            M = n(46),
            q = n(32),
            T = n(47).forEach,
            R = C("hidden"),
            U = D("toPrimitive"),
            L = q.set,
            W = q.getterFor("Symbol"),
            H = Object.prototype,
            B = r.Symbol,
            F = i("JSON", "stringify"),
            K = w.f,
            V = z.f,
            G = _.f,
            Z = P.f,
            Y = j("symbols"),
            Q = j("op-symbols"),
            X = j("string-to-symbol-registry"),
            J = j("symbol-to-string-registry"),
            ee = j("wks"),
            et = r.QObject,
            en = !et || !et.prototype || !et.prototype.findChild,
            eo = c && u(function () {
              return 7 != b(V({}, "a", {
                get: function () {
                  return V(this, "a", {
                    value: 7
                  }).a
                }
              })).a
            }) ? function (e, t, n) {
              var o = K(H, t);
              o && delete H[t], V(e, t, n), o && e !== H && V(H, t, o)
            } : V,
            er = function (e, t) {
              var n = Y[e] = b(B.prototype);
              return L(n, {
                type: "Symbol",
                tag: e,
                description: t
              }), c || (n.description = t), n
            },
            ei = l ? function (e) {
              return "symbol" == typeof e
            } : function (e) {
              return Object(e) instanceof B
            },
            ea = function (e, t, n) {
              e === H && ea(Q, t, n), v(e);
              var o = y(t, !0);
              return v(n), p(Y, o) ? (n.enumerable ? (p(e, R) && e[R][o] && (e[R][o] = !1), n = b(n, {
                enumerable: g(0, !1)
              })) : (p(e, R) || V(e, R, g(1, {})), e[R][o] = !0), eo(e, o, n)) : V(e, o, n)
            },
            ec = function (e, t) {
              v(e);
              var n = h(t),
                o = k(n).concat(ep(n));
              return T(o, function (t) {
                c && !es.call(n, t) || ea(e, t, n[t])
              }), e
            },
            es = function (e) {
              var t = y(e, !0),
                n = Z.call(this, t);
              return !(this === H && p(Y, t) && !p(Q, t)) && (!(n || !p(this, t) || !p(Y, t) || p(this, R) && this[R][t]) || n)
            },
            el = function (e, t) {
              var n = h(e),
                o = y(t, !0);
              if (n !== H || !p(Y, o) || p(Q, o)) {
                var r = K(n, o);
                return !r || !p(Y, o) || p(n, R) && n[R][o] || (r.enumerable = !0), r
              }
            },
            eu = function (e) {
              var t = G(h(e)),
                n = [];
              return T(t, function (e) {
                p(Y, e) || p(O, e) || n.push(e)
              }), n
            },
            ep = function (e) {
              var t = e === H,
                n = G(t ? Q : h(e)),
                o = [];
              return T(n, function (e) {
                p(Y, e) && (!t || p(H, e)) && o.push(Y[e])
              }), o
            };
          s || (A((B = function () {
            if (this instanceof B) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
              t = E(e),
              n = function (e) {
                this === H && n.call(Q, e), p(this, R) && p(this[R], t) && (this[R][t] = !1), eo(this, t, g(1, e))
              };
            return c && en && eo(H, t, {
              configurable: !0,
              set: n
            }), er(t, e)
          }).prototype, "toString", function () {
            return W(this).tag
          }), A(B, "withoutSetter", function (e) {
            return er(E(e), e)
          }), P.f = es, z.f = ea, w.f = el, $.f = _.f = eu, x.f = ep, I.f = function (e) {
            return er(D(e), e)
          }, c && (V(B.prototype, "description", {
            configurable: !0,
            get: function () {
              return W(this).description
            }
          }), a || A(H, "propertyIsEnumerable", es, {
            unsafe: !0
          }))), o({
            global: !0,
            wrap: !0,
            forced: !s,
            sham: !s
          }, {
            Symbol: B
          }), T(k(ee), function (e) {
            N(e)
          }), o({
            target: "Symbol",
            stat: !0,
            forced: !s
          }, {
            for: function (e) {
              var t = String(e);
              if (p(X, t)) return X[t];
              var n = B(t);
              return X[t] = n, J[n] = t, n
            },
            keyFor: function (e) {
              if (!ei(e)) throw TypeError(e + " is not a symbol");
              if (p(J, e)) return J[e]
            },
            useSetter: function () {
              en = !0
            },
            useSimple: function () {
              en = !1
            }
          }), o({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !c
          }, {
            create: function (e, t) {
              return void 0 === t ? b(e) : ec(b(e), t)
            },
            defineProperty: ea,
            defineProperties: ec,
            getOwnPropertyDescriptor: el
          }), o({
            target: "Object",
            stat: !0,
            forced: !s
          }, {
            getOwnPropertyNames: eu,
            getOwnPropertySymbols: ep
          }), o({
            target: "Object",
            stat: !0,
            forced: u(function () {
              x.f(1)
            })
          }, {
            getOwnPropertySymbols: function (e) {
              return x.f(m(e))
            }
          }), F && o({
            target: "JSON",
            stat: !0,
            forced: !s || u(function () {
              var e = B();
              return "[null]" != F([e]) || "{}" != F({
                a: e
              }) || "{}" != F(Object(e))
            })
          }, {
            stringify: function (e, t, n) {
              for (var o, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
              if (o = t, (f(t) || void 0 !== e) && !ei(e)) return d(t) || (t = function (e, t) {
                if ("function" == typeof o && (t = o.call(this, e, t)), !ei(t)) return t
              }), r[1] = t, F.apply(null, r)
            }
          }), B.prototype[U] || S(B.prototype, U, B.prototype.valueOf), M(B, "Symbol"), O[R] = !0
        }, function (e, t, n) {
          "use strict";
          var o = n(18),
            r = n(75),
            i = n(49),
            a = n(32),
            c = n(79),
            s = a.set,
            l = a.getterFor("Array Iterator");
          e.exports = c(Array, "Array", function (e, t) {
            s(this, {
              type: "Array Iterator",
              target: o(e),
              index: 0,
              kind: t
            })
          }, function () {
            var e = l(this),
              t = e.target,
              n = e.kind,
              o = e.index++;
            return !t || o >= t.length ? (e.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: o,
              done: !1
            } : "values" == n ? {
              value: t[o],
              done: !1
            } : {
              value: [o, t[o]],
              done: !1
            }
          }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
        }, function (e, t, n) {
          var o = n(77),
            r = n(22),
            i = n(168);
          o || r(Object.prototype, "toString", i, {
            unsafe: !0
          })
        }, function (e, t, n) {
          var o = n(1);
          e.exports = !o(function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function () {
                return 7
              }
            })[1]
          })
        }, function (e, t, n) {
          var o = n(4);
          e.exports = function (e) {
            if (!o(e)) throw TypeError(String(e) + " is not an object");
            return e
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(8),
            i = n(2),
            a = n(15),
            c = n(4),
            s = n(16).f,
            l = n(101),
            u = i.Symbol;
          if (r && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
            var p = {},
              d = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                  t = this instanceof d ? new u(e) : void 0 === e ? u() : u(e);
                return "" === e && (p[t] = !0), t
              };
            l(d, u);
            var f = d.prototype = u.prototype;
            f.constructor = d;
            var v = f.toString,
              m = "Symbol(test)" == String(u("test")),
              h = /^Symbol\((.*)\)[^)]+$/;
            s(f, "description", {
              configurable: !0,
              get: function () {
                var e = c(this) ? this.valueOf() : this,
                  t = v.call(e);
                if (a(p, e)) return "";
                var n = m ? t.slice(7, -1) : t.replace(h, "$1");
                return "" === n ? void 0 : n
              }
            }), o({
              global: !0,
              forced: !0
            }, {
              Symbol: d
            })
          }
        }, function (e, t, n) {
          n(109)("iterator")
        }, function (e, t, n) {
          "use strict";
          var o = n(22),
            r = n(9),
            i = n(1),
            a = n(88),
            c = RegExp.prototype,
            s = c.toString,
            l = i(function () {
              return "/a/b" != s.call({
                source: "a",
                flags: "b"
              })
            }),
            u = "toString" != s.name;
          (l || u) && o(RegExp.prototype, "toString", function () {
            var e = r(this),
              t = String(e.source),
              n = e.flags;
            return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n)
          }, {
            unsafe: !0
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(124).charAt,
            r = n(32),
            i = n(79),
            a = r.set,
            c = r.getterFor("String Iterator");
          i(String, "String", function (e) {
            a(this, {
              type: "String Iterator",
              string: String(e),
              index: 0
            })
          }, function () {
            var e, t = c(this),
              n = t.string,
              r = t.index;
            return r >= n.length ? {
              value: void 0,
              done: !0
            } : (e = o(n, r), t.index += e.length, {
              value: e,
              done: !1
            })
          })
        }, function (e, t, n) {
          var o = n(2),
            r = n(126),
            i = n(6),
            a = n(21),
            c = n(3),
            s = c("iterator"),
            l = c("toStringTag"),
            u = i.values;
          for (var p in r) {
            var d = o[p],
              f = d && d.prototype;
            if (f) {
              if (f[s] !== u) try {
                a(f, s, u)
              } catch (v) {
                f[s] = u
              }
              if (f[l] || a(f, l, p), r[p]) {
                for (var m in i)
                  if (f[m] !== i[m]) try {
                    a(f, m, i[m])
                  } catch (h) {
                    f[m] = i[m]
                  }
              }
            }
          }
        }, function (e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function (e, t) {
            return n.call(e, t)
          }
        }, function (e, t, n) {
          var o = n(8),
            r = n(99),
            i = n(9),
            a = n(53),
            c = Object.defineProperty;
          t.f = o ? c : function (e, t, n) {
            if (i(e), t = a(t, !0), i(n), r) try {
              return c(e, t, n)
            } catch (o) { }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
          }
        }, function (e, t, n) {
          var o = n(8),
            r = n(16).f,
            i = Function.prototype,
            a = i.toString,
            c = /^\s*function ([^ (]*)/;
          !o || "name" in i || r(i, "name", {
            configurable: !0,
            get: function () {
              try {
                return a.call(this).match(c)[1]
              } catch (e) {
                return ""
              }
            }
          })
        }, function (e, t, n) {
          var o = n(52),
            r = n(26);
          e.exports = function (e) {
            return o(r(e))
          }
        }, function (e, t, n) {
          var o = n(57),
            r = Math.min;
          e.exports = function (e) {
            return e > 0 ? r(o(e), 9007199254740991) : 0
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(4),
            i = n(59),
            a = n(105),
            c = n(19),
            s = n(18),
            l = n(60),
            u = n(3),
            p = n(61),
            d = n(36),
            f = p("slice"),
            v = d("slice", {
              ACCESSORS: !0,
              0: 0,
              1: 2
            }),
            m = u("species"),
            h = [].slice,
            y = Math.max;
          o({
            target: "Array",
            proto: !0,
            forced: !f || !v
          }, {
            slice: function (e, t) {
              var n, o, u, p = s(this),
                d = c(p.length),
                f = a(e, d),
                v = a(void 0 === t ? d : t, d);
              if (i(p) && ("function" == typeof (n = p.constructor) && (n === Array || i(n.prototype)) ? n = void 0 : r(n) && null === (n = n[m]) && (n = void 0), n === Array || void 0 === n)) return h.call(p, f, v);
              for (o = new (void 0 === n ? Array : n)(y(v - f, 0)), u = 0; f < v; f++, u++) f in p && l(o, u, p[f]);
              return o.length = u, o
            }
          })
        }, function (e, t, n) {
          var o = n(8),
            r = n(16),
            i = n(42);
          e.exports = o ? function (e, t, n) {
            return r.f(e, t, i(1, n))
          } : function (e, t, n) {
            return e[t] = n, e
          }
        }, function (e, t, n) {
          var o = n(2),
            r = n(21),
            i = n(15),
            a = n(66),
            c = n(67),
            s = n(32),
            l = s.get,
            u = s.enforce,
            p = String(String).split("String");
          (e.exports = function (e, t, n, c) {
            var s = !!c && !!c.unsafe,
              l = !!c && !!c.enumerable,
              d = !!c && !!c.noTargetGet;
            "function" == typeof n && ("string" != typeof t || i(n, "name") || r(n, "name", t), u(n).source = p.join("string" == typeof t ? t : "")), e !== o ? (s ? !d && e[t] && (l = !0) : delete e[t], l ? e[t] = n : r(e, t, n)) : l ? e[t] = n : a(t, n)
          })(Function.prototype, "toString", function () {
            return "function" == typeof this && l(this).source || c(this)
          })
        }, function (e, t, n) {
          var o = n(26);
          e.exports = function (e) {
            return Object(o(e))
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(164);
          o({
            target: "Array",
            stat: !0,
            forced: !n(78)(function (e) {
              Array.from(e)
            })
          }, {
            from: r
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(47).map,
            i = n(61),
            a = n(36),
            c = i("map"),
            s = a("map");
          o({
            target: "Array",
            proto: !0,
            forced: !c || !s
          }, {
            map: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        }, function (e, t) {
          e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
          }
        }, function (e, t, n) {
          var o = n(8),
            r = n(51),
            i = n(42),
            a = n(18),
            c = n(53),
            s = n(15),
            l = n(99),
            u = Object.getOwnPropertyDescriptor;
          t.f = o ? u : function (e, t) {
            if (e = a(e), t = c(t, !0), l) try {
              return u(e, t)
            } catch (n) { }
            if (s(e, t)) return i(!r.f.call(e, t), e[t])
          }
        }, function (e, t) {
          var n = {}.toString;
          e.exports = function (e) {
            return n.call(e).slice(8, -1)
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(1),
            i = n(23),
            a = n(80),
            c = n(117);
          o({
            target: "Object",
            stat: !0,
            forced: r(function () {
              a(1)
            }),
            sham: !c
          }, {
            getPrototypeOf: function (e) {
              return a(i(e))
            }
          })
        }, function (e, t, n) {
          n(0)({
            target: "Object",
            stat: !0
          }, {
            setPrototypeOf: n(81)
          })
        }, function (e, t, n) {
          var o = n(0),
            r = n(34),
            i = n(35),
            a = n(9),
            c = n(4),
            s = n(44),
            l = n(169),
            u = n(1),
            p = r("Reflect", "construct"),
            d = u(function () {
              function e() { }
              return !(p(function () { }, [], e) instanceof e)
            }),
            f = !u(function () {
              p(function () { })
            }),
            v = d || f;
          o({
            target: "Reflect",
            stat: !0,
            forced: v,
            sham: v
          }, {
            construct: function (e, t) {
              i(e), a(t);
              var n = arguments.length < 3 ? e : i(arguments[2]);
              if (f && !d) return p(e, t, n);
              if (e == n) {
                switch (t.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t[0]);
                  case 2:
                    return new e(t[0], t[1]);
                  case 3:
                    return new e(t[0], t[1], t[2]);
                  case 4:
                    return new e(t[0], t[1], t[2], t[3])
                }
                var o = [null];
                return o.push.apply(o, t), new (l.apply(e, o))
              }
              var r = n.prototype,
                u = s(c(r) ? r : Object.prototype),
                v = Function.apply.call(e, u, t);
              return c(v) ? v : u
            }
          })
        }, function (e, t, n) {
          var o, r, i, a = n(160),
            c = n(2),
            s = n(4),
            l = n(21),
            u = n(15),
            p = n(54),
            d = n(43),
            f = c.WeakMap;
          if (a) {
            var v = new f,
              m = v.get,
              h = v.has,
              y = v.set;
            o = function (e, t) {
              return y.call(v, e, t), t
            }, r = function (e) {
              return m.call(v, e) || {}
            }, i = function (e) {
              return h.call(v, e)
            }
          } else {
            var g = p("state");
            d[g] = !0, o = function (e, t) {
              return l(e, g, t), t
            }, r = function (e) {
              return u(e, g) ? e[g] : {}
            }, i = function (e) {
              return u(e, g)
            }
          }
          e.exports = {
            set: o,
            get: r,
            has: i,
            enforce: function (e) {
              return i(e) ? r(e) : o(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!s(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
              }
            }
          }
        }, function (e, t) {
          e.exports = !1
        }, function (e, t, n) {
          var o = n(103),
            r = n(2),
            i = function (e) {
              return "function" == typeof e ? e : void 0
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? i(o[e]) || i(r[e]) : o[e] && o[e][t] || r[e] && r[e][t]
          }
        }, function (e, t) {
          e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
          }
        }, function (e, t, n) {
          var o = n(8),
            r = n(1),
            i = n(15),
            a = Object.defineProperty,
            c = {},
            s = function (e) {
              throw e
            };
          e.exports = function (e, t) {
            if (i(c, e)) return c[e];
            t || (t = {});
            var n = [][e],
              l = !!i(t, "ACCESSORS") && t.ACCESSORS,
              u = i(t, 0) ? t[0] : s,
              p = i(t, 1) ? t[1] : void 0;
            return c[e] = !!n && !r(function () {
              if (l && !o) return !0;
              var e = {
                length: -1
              };
              l ? a(e, 1, {
                enumerable: !0,
                get: s
              }) : e[1] = 1, n.call(e, u, p)
            })
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(23),
            i = n(45);
          o({
            target: "Object",
            stat: !0,
            forced: n(1)(function () {
              i(1)
            })
          }, {
            keys: function (e) {
              return i(r(e))
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(63);
          o({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== r
          }, {
            exec: r
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(52),
            i = n(18),
            a = n(62),
            c = [].join,
            s = a("join", ",");
          o({
            target: "Array",
            proto: !0,
            forced: r != Object || !s
          }, {
            join: function (e) {
              return c.call(i(this), void 0 === e ? "," : e)
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(1),
            i = n(59),
            a = n(4),
            c = n(23),
            s = n(19),
            l = n(60),
            u = n(110),
            p = n(61),
            d = n(3),
            f = n(73),
            v = d("isConcatSpreadable"),
            m = f >= 51 || !r(function () {
              var e = [];
              return e[v] = !1, e.concat()[0] !== e
            }),
            h = p("concat"),
            y = function (e) {
              if (!a(e)) return !1;
              var t = e[v];
              return void 0 !== t ? !!t : i(e)
            };
          o({
            target: "Array",
            proto: !0,
            forced: !m || !h
          }, {
            concat: function (e) {
              var t, n, o, r, i, a = c(this),
                p = u(a, 0),
                d = 0;
              for (t = -1, o = arguments.length; t < o; t++)
                if (y(i = -1 === t ? a : arguments[t])) {
                  if (d + (r = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                  for (n = 0; n < r; n++, d++) n in i && l(p, d, i[n])
                } else {
                  if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                  l(p, d++, i)
                } return p.length = d, p
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(47).filter,
            i = n(61),
            a = n(36),
            c = i("filter"),
            s = a("filter");
          o({
            target: "Array",
            proto: !0,
            forced: !c || !s
          }, {
            filter: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        }, function (e, t) {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            }
          }
        }, function (e, t) {
          e.exports = {}
        }, function (e, t, n) {
          var o, r = n(9),
            i = n(161),
            a = n(70),
            c = n(43),
            s = n(107),
            l = n(65),
            u = n(54)("IE_PROTO"),
            p = function () { },
            d = function (e) {
              return "<script>" + e + "</script>"
            },
            f = function () {
              try {
                o = document.domain && new ActiveXObject("htmlfile")
              } catch (e) { }
              f = o ? ((t = o).write(d("")), t.close(), n = t.parentWindow.Object, t = null, n) : ((i = l("iframe")).style.display = "none", s.appendChild(i), i.src = String("javascript:"), (r = i.contentWindow.document).open(), r.write(d("document.F=Object")), r.close(), r.F);
              for (var t, n, r, i, c = a.length; c--;) delete f.prototype[a[c]];
              return f()
            };
          c[u] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (p.prototype = r(e), n = new p, p.prototype = null, n[u] = e) : n = f(), void 0 === t ? n : i(n, t)
          }
        }, function (e, t, n) {
          var o = n(104),
            r = n(70);
          e.exports = Object.keys || function (e) {
            return o(e, r)
          }
        }, function (e, t, n) {
          var o = n(16).f,
            r = n(15),
            i = n(3)("toStringTag");
          e.exports = function (e, t, n) {
            e && !r(e = n ? e : e.prototype, i) && o(e, i, {
              configurable: !0,
              value: t
            })
          }
        }, function (e, t, n) {
          var o = n(48),
            r = n(52),
            i = n(23),
            a = n(19),
            c = n(110),
            s = [].push,
            l = function (e) {
              var t = 1 == e,
                n = 2 == e,
                l = 3 == e,
                u = 4 == e,
                p = 6 == e,
                d = 5 == e || p;
              return function (f, v, m, h) {
                for (var y, g, b = i(f), k = r(b), $ = o(v, m, 3), _ = a(k.length), x = 0, w = h || c, z = t ? w(f, _) : n ? w(f, 0) : void 0; _ > x; x++)
                  if ((d || x in k) && (g = $(y = k[x], x, b), e)) {
                    if (t) z[x] = g;
                    else if (g) switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return x;
                      case 2:
                        s.call(z, y)
                    } else if (u) return !1
                  } return p ? -1 : l || u ? u : z
              }
            };
          e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6)
          }
        }, function (e, t, n) {
          var o = n(35);
          e.exports = function (e, t, n) {
            if (o(e), void 0 === t) return e;
            switch (n) {
              case 0:
                return function () {
                  return e.call(t)
                };
              case 1:
                return function (n) {
                  return e.call(t, n)
                };
              case 2:
                return function (n, o) {
                  return e.call(t, n, o)
                };
              case 3:
                return function (n, o, r) {
                  return e.call(t, n, o, r)
                }
            }
            return function () {
              return e.apply(t, arguments)
            }
          }
        }, function (e, t) {
          e.exports = {}
        }, function (e, t, n) {
          var o = n(0),
            r = n(173);
          o({
            target: "Object",
            stat: !0,
            forced: Object.assign !== r
          }, {
            assign: r
          })
        }, function (e, t, n) {
          "use strict";
          var o = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            i = r && !o.call({
              1: 2
            }, 1);
          t.f = i ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
          } : o
        }, function (e, t, n) {
          var o = n(1),
            r = n(28),
            i = "".split;
          e.exports = o(function () {
            return !Object("z").propertyIsEnumerable(0)
          }) ? function (e) {
            return "String" == r(e) ? i.call(e, "") : Object(e)
          } : Object
        }, function (e, t, n) {
          var o = n(4);
          e.exports = function (e, t) {
            var n, r;
            if (!o(e)) return e;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e)) || "function" == typeof (n = e.valueOf) && !o(r = n.call(e)) || !t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
          }
        }, function (e, t, n) {
          var o = n(68),
            r = n(55),
            i = o("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = r(e))
          }
        }, function (e, t) {
          var n = 0,
            o = Math.random();
          e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + o).toString(36)
          }
        }, function (e, t, n) {
          var o = n(104),
            r = n(70).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function (e) {
            return o(e, r)
          }
        }, function (e, t) {
          var n = Math.ceil,
            o = Math.floor;
          e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
          }
        }, function (e, t, n) {
          var o = n(1),
            r = /#|\.prototype\./,
            i = function (e, t) {
              var n = c[a(e)];
              return n == l || n != s && ("function" == typeof t ? o(t) : !!t)
            },
            a = i.normalize = function (e) {
              return String(e).replace(r, ".").toLowerCase()
            },
            c = i.data = {},
            s = i.NATIVE = "N",
            l = i.POLYFILL = "P";
          e.exports = i
        }, function (e, t, n) {
          var o = n(28);
          e.exports = Array.isArray || function (e) {
            return "Array" == o(e)
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(53),
            r = n(16),
            i = n(42);
          e.exports = function (e, t, n) {
            var a = o(t);
            a in e ? r.f(e, a, i(0, n)) : e[a] = n
          }
        }, function (e, t, n) {
          var o = n(1),
            r = n(3),
            i = n(73),
            a = r("species");
          e.exports = function (e) {
            return i >= 51 || !o(function () {
              var t = [];
              return (t.constructor = {})[a] = function () {
                return {
                  foo: 1
                }
              }, 1 !== t[e](Boolean).foo
            })
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(1);
          e.exports = function (e, t) {
            var n = [][e];
            return !!n && o(function () {
              n.call(null, t || function () {
                throw 1
              }, 1)
            })
          }
        }, function (e, t, n) {
          "use strict";
          var o, r, i = n(88),
            a = n(123),
            c = RegExp.prototype.exec,
            s = String.prototype.replace,
            l = c,
            u = (o = /a/, r = /b*/g, c.call(o, "a"), c.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
            p = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            d = void 0 !== /()??/.exec("")[1];
          (u || d || p) && (l = function (e) {
            var t, n, o, r, a = this,
              l = p && a.sticky,
              f = i.call(a),
              v = a.source,
              m = 0,
              h = e;
            return l && (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"), h = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (v = "(?: " + v + ")", h = " " + h, m++), n = RegExp("^(?:" + v + ")", f)), d && (n = RegExp("^" + v + "$(?!\\s)", f)), u && (t = a.lastIndex), o = c.call(l ? n : a, h), l ? o ? (o.input = o.input.slice(m), o[0] = o[0].slice(m), o.index = a.lastIndex, a.lastIndex += o[0].length) : a.lastIndex = 0 : u && o && (a.lastIndex = a.global ? o.index + o[0].length : t), d && o && o.length > 1 && s.call(o[0], n, function () {
              for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (o[r] = void 0)
            }), o
          }), e.exports = l
        }, function (e, t, n) {
          var o = n(8),
            r = n(2),
            i = n(58),
            a = n(120),
            c = n(16).f,
            s = n(56).f,
            l = n(91),
            u = n(88),
            p = n(123),
            d = n(22),
            f = n(1),
            v = n(32).set,
            m = n(85),
            h = n(3)("match"),
            y = r.RegExp,
            g = y.prototype,
            b = /a/g,
            k = /a/g,
            $ = new y(b) !== b,
            _ = p.UNSUPPORTED_Y;
          if (o && i("RegExp", !$ || _ || f(function () {
            return k[h] = !1, y(b) != b || y(k) == k || "/a/i" != y(b, "i")
          }))) {
            for (var x = function (e, t) {
              var n, o = this instanceof x,
                r = l(e),
                i = void 0 === t;
              if (!o && r && e.constructor === x && i) return e;
              $ ? r && !i && (e = e.source) : e instanceof x && (i && (t = u.call(e)), e = e.source), _ && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
              var c = a($ ? new y(e, t) : y(e, t), o ? this : g, x);
              return _ && n && v(c, {
                sticky: n
              }), c
            }, w = function (e) {
              (e in x) || c(x, e, {
                configurable: !0,
                get: function () {
                  return y[e]
                },
                set: function (t) {
                  y[e] = t
                }
              })
            }, z = s(y), P = 0; z.length > P;) w(z[P++]);
            g.constructor = x, x.prototype = g, d(r, "RegExp", x)
          }
          m("RegExp")
        }, function (e, t, n) {
          var o = n(2),
            r = n(4),
            i = o.document,
            a = r(i) && r(i.createElement);
          e.exports = function (e) {
            return a ? i.createElement(e) : {}
          }
        }, function (e, t, n) {
          var o = n(2),
            r = n(21);
          e.exports = function (e, t) {
            try {
              r(o, e, t)
            } catch (n) {
              o[e] = t
            }
            return t
          }
        }, function (e, t, n) {
          var o = n(100),
            r = Function.toString;
          "function" != typeof o.inspectSource && (o.inspectSource = function (e) {
            return r.call(e)
          }), e.exports = o.inspectSource
        }, function (e, t, n) {
          var o = n(33),
            r = n(100);
          (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.6.5",
            mode: o ? "pure" : "global",
            copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
          })
        }, function (e, t, n) {
          var o = n(18),
            r = n(19),
            i = n(105),
            a = function (e) {
              return function (t, n, a) {
                var c, s = o(t),
                  l = r(s.length),
                  u = i(a, l);
                if (e && n != n) {
                  for (; l > u;)
                    if ((c = s[u++]) != c) return !0
                } else
                  for (; l > u; u++)
                    if ((e || u in s) && s[u] === n) return e || u || 0;
                return !e && -1
              }
            };
          e.exports = {
            includes: a(!0),
            indexOf: a(!1)
          }
        }, function (e, t) {
          e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function (e, t) {
          t.f = Object.getOwnPropertySymbols
        }, function (e, t, n) {
          var o = n(1);
          e.exports = !!Object.getOwnPropertySymbols && !o(function () {
            return !String(Symbol())
          })
        }, function (e, t, n) {
          var o, r, i = n(2),
            a = n(74),
            c = i.process,
            s = c && c.versions,
            l = s && s.v8;
          l ? r = (o = l.split("."))[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = o[1]), e.exports = r && +r
        }, function (e, t, n) {
          var o = n(34);
          e.exports = o("navigator", "userAgent") || ""
        }, function (e, t, n) {
          var o = n(3),
            r = n(44),
            i = n(16),
            a = o("unscopables"),
            c = Array.prototype;
          null == c[a] && i.f(c, a, {
            configurable: !0,
            value: r(null)
          }), e.exports = function (e) {
            c[a][e] = !0
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(111);
          o({
            target: "Array",
            proto: !0,
            forced: [].forEach != r
          }, {
            forEach: r
          })
        }, function (e, t, n) {
          var o = {};
          o[n(3)("toStringTag")] = "z", e.exports = "[object z]" === String(o)
        }, function (e, t, n) {
          var o = n(3)("iterator"),
            r = !1;
          try {
            var i = 0,
              a = {
                next: function () {
                  return {
                    done: !!i++
                  }
                },
                return: function () {
                  r = !0
                }
              };
            a[o] = function () {
              return this
            }, Array.from(a, function () {
              throw 2
            })
          } catch (c) { }
          e.exports = function (e, t) {
            if (!t && !r) return !1;
            var n = !1;
            try {
              var i = {};
              i[o] = function () {
                return {
                  next: function () {
                    return {
                      done: n = !0
                    }
                  }
                }
              }, e(i)
            } catch (a) { }
            return n
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(165),
            i = n(80),
            a = n(81),
            c = n(46),
            s = n(21),
            l = n(22),
            u = n(3),
            p = n(33),
            d = n(49),
            f = n(116),
            v = f.IteratorPrototype,
            m = f.BUGGY_SAFARI_ITERATORS,
            h = u("iterator"),
            y = function () {
              return this
            };
          e.exports = function (e, t, n, u, f, g, b) {
            r(n, t, u);
            var k, $, _, x = function (e) {
              if (e === f && A) return A;
              if (!m && e in P) return P[e];
              switch (e) {
                case "keys":
                case "values":
                case "entries":
                  return function () {
                    return new n(this, e)
                  }
              }
              return function () {
                return new n(this)
              }
            },
              w = t + " Iterator",
              z = !1,
              P = e.prototype,
              S = P[h] || P["@@iterator"] || f && P[f],
              A = !m && S || x(f),
              j = "Array" == t && P.entries || S;
            if (j && (k = i(j.call(new e)), v !== Object.prototype && k.next && (p || i(k) === v || (a ? a(k, v) : "function" != typeof k[h] && s(k, h, y)), c(k, w, !0, !0), p && (d[w] = y))), "values" == f && S && "values" !== S.name && (z = !0, A = function () {
              return S.call(this)
            }), p && !b || P[h] === A || s(P, h, A), d[t] = A, f) {
              if ($ = {
                values: x("values"),
                keys: g ? A : x("keys"),
                entries: x("entries")
              }, b)
                for (_ in $) !m && !z && _ in P || l(P, _, $[_]);
              else o({
                target: t,
                proto: !0,
                forced: m || z
              }, $)
            }
            return $
          }
        }, function (e, t, n) {
          var o = n(15),
            r = n(23),
            i = n(54),
            a = n(117),
            c = i("IE_PROTO"),
            s = Object.prototype;
          e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = r(e), o(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
          }
        }, function (e, t, n) {
          var o = n(9),
            r = n(166);
          e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (i) { }
            return function (n, i) {
              return o(n), r(i), t ? e.call(n, i) : n.__proto__ = i, n
            }
          }() : void 0)
        }, function (e, t, n) {
          "use strict";
          var o = n(118),
            r = n(121);
          e.exports = o("Map", function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0)
            }
          }, r)
        }, function (e, t, n) {
          var o = n(9),
            r = n(113),
            i = n(19),
            a = n(48),
            c = n(114),
            s = n(112),
            l = function (e, t) {
              this.stopped = e, this.result = t
            };
          (e.exports = function (e, t, n, u, p) {
            var d, f, v, m, h, y, g, b = a(t, n, u ? 2 : 1);
            if (p) d = e;
            else {
              if ("function" != typeof (f = c(e))) throw TypeError("Target is not iterable");
              if (r(f)) {
                for (v = 0, m = i(e.length); m > v; v++)
                  if ((h = u ? b(o(g = e[v])[0], g[1]) : b(e[v])) && h instanceof l) return h;
                return new l(!1)
              }
              d = f.call(e)
            }
            for (y = d.next; !(g = y.call(d)).done;)
              if ("object" == typeof (h = s(d, b, g.value, u)) && h && h instanceof l) return h;
            return new l(!1)
          }).stop = function (e) {
            return new l(!0, e)
          }
        }, function (e, t) {
          e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(34),
            r = n(16),
            i = n(3),
            a = n(8),
            c = i("species");
          e.exports = function (e) {
            var t = o(e),
              n = r.f;
            a && t && !t[c] && n(t, c, {
              configurable: !0,
              get: function () {
                return this
              }
            })
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(1),
            i = n(18),
            a = n(27).f,
            c = n(8),
            s = r(function () {
              a(1)
            });
          o({
            target: "Object",
            stat: !0,
            forced: !c || s,
            sham: !c
          }, {
            getOwnPropertyDescriptor: function (e, t) {
              return a(i(e), t)
            }
          })
        }, function (e, t, n) {
          var o = n(0),
            r = n(8),
            i = n(102),
            a = n(18),
            c = n(27),
            s = n(60);
          o({
            target: "Object",
            stat: !0,
            sham: !r
          }, {
            getOwnPropertyDescriptors: function (e) {
              for (var t, n, o = a(e), r = c.f, l = i(o), u = {}, p = 0; l.length > p;) void 0 !== (n = r(o, t = l[p++])) && s(u, t, n);
              return u
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(9);
          e.exports = function () {
            var e = o(this),
              t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(90),
            r = n(91),
            i = n(9),
            a = n(26),
            c = n(125),
            s = n(92),
            l = n(19),
            u = n(93),
            p = n(63),
            d = n(1),
            f = [].push,
            v = Math.min,
            m = !d(function () {
              return !RegExp(4294967295, "y")
            });
          o("split", 2, function (e, t, n) {
            var o;
            return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
              var o = String(a(this)),
                i = void 0 === n ? 4294967295 : n >>> 0;
              if (0 === i) return [];
              if (void 0 === e) return [o];
              if (!r(e)) return t.call(o, e, i);
              for (var c, s, l, u = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), v = 0, m = RegExp(e.source, d + "g");
                (c = p.call(m, o)) && !((s = m.lastIndex) > v && (u.push(o.slice(v, c.index)), c.length > 1 && c.index < o.length && f.apply(u, c.slice(1)), l = c[0].length, v = s, u.length >= i));) m.lastIndex === c.index && m.lastIndex++;
              return v === o.length ? !l && m.test("") || u.push("") : u.push(o.slice(v)), u.length > i ? u.slice(0, i) : u
            } : "0".split(void 0, 0).length ? function (e, n) {
              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            } : t, [function (t, n) {
              var r = a(this),
                i = null == t ? void 0 : t[e];
              return void 0 !== i ? i.call(t, r, n) : o.call(String(r), t, n)
            }, function (e, r) {
              var a = n(o, e, this, r, o !== t);
              if (a.done) return a.value;
              var p = i(e),
                d = String(this),
                f = c(p, RegExp),
                h = p.unicode,
                y = (p.ignoreCase ? "i" : "") + (p.multiline ? "m" : "") + (p.unicode ? "u" : "") + (m ? "y" : "g"),
                g = new f(m ? p : "^(?:" + p.source + ")", y),
                b = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === b) return [];
              if (0 === d.length) return null === u(g, d) ? [d] : [];
              for (var k = 0, $ = 0, _ = []; $ < d.length;) {
                g.lastIndex = m ? $ : 0;
                var x, w = u(g, m ? d : d.slice($));
                if (null === w || (x = v(l(g.lastIndex + (m ? 0 : $)), d.length)) === k) $ = s(d, $, h);
                else {
                  if (_.push(d.slice(k, $)), _.length === b) return _;
                  for (var z = 1; z <= w.length - 1; z++)
                    if (_.push(w[z]), _.length === b) return _;
                  $ = k = x
                }
              }
              return _.push(d.slice(k)), _
            }]
          }, !m)
        }, function (e, t, n) {
          "use strict";
          n(38);
          var o = n(22),
            r = n(1),
            i = n(3),
            a = n(63),
            c = n(21),
            s = i("species"),
            l = !r(function () {
              var e = /./;
              return e.exec = function () {
                var e = [];
                return e.groups = {
                  a: "7"
                }, e
              }, "7" !== "".replace(e, "$<a>")
            }),
            u = "$0" === "a".replace(/./, "$0"),
            p = i("replace"),
            d = !!/./[p] && "" === /./[p]("a", "$0"),
            f = !r(function () {
              var e = /(?:)/,
                t = e.exec;
              e.exec = function () {
                return t.apply(this, arguments)
              };
              var n = "ab".split(e);
              return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            });
          e.exports = function (e, t, n, p) {
            var v = i(e),
              m = !r(function () {
                var t = {};
                return t[v] = function () {
                  return 7
                }, 7 != ""[e](t)
              }),
              h = m && !r(function () {
                var t = !1,
                  n = /a/;
                return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function () {
                  return n
                }, n.flags = "", n[v] = /./[v]), n.exec = function () {
                  return t = !0, null
                }, n[v](""), !t
              });
            if (!m || !h || "replace" === e && (!l || !u || d) || "split" === e && !f) {
              var y = /./[v],
                g = n(v, ""[e], function (e, t, n, o, r) {
                  return t.exec === a ? m && !r ? {
                    done: !0,
                    value: y.call(t, n, o)
                  } : {
                    done: !0,
                    value: e.call(n, t, o)
                  } : {
                    done: !1
                  }
                }, {
                  REPLACE_KEEPS_$0: u,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                }),
                b = g[0],
                k = g[1];
              o(String.prototype, e, b), o(RegExp.prototype, v, 2 == t ? function (e, t) {
                return k.call(e, this, t)
              } : function (e) {
                return k.call(e, this)
              })
            }
            p && c(RegExp.prototype[v], "sham", !0)
          }
        }, function (e, t, n) {
          var o = n(4),
            r = n(28),
            i = n(3)("match");
          e.exports = function (e) {
            var t;
            return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e))
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(124).charAt;
          e.exports = function (e, t, n) {
            return t + (n ? o(e, t).length : 1)
          }
        }, function (e, t, n) {
          var o = n(28),
            r = n(63);
          e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
              var i = n.call(e, t);
              if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
              return i
            }
            if ("RegExp" !== o(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
          }
        }, function (e, t, n) {
          var o = n(2),
            r = n(126),
            i = n(111),
            a = n(21);
          for (var c in r) {
            var s = o[c],
              l = s && s.prototype;
            if (l && l.forEach !== i) try {
              a(l, "forEach", i)
            } catch (u) {
              l.forEach = i
            }
          }
        }, function (e, t, n) {
          var o = n(91);
          e.exports = function (e) {
            if (o(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
          }
        }, function (e, t, n) {
          var o = n(3)("match");
          e.exports = function (e) {
            var t = /./;
            try {
              "/./"[e](t)
            } catch (n) {
              try {
                return t[o] = !1, "/./"[e](t)
              } catch (r) { }
            }
            return !1
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(176).entries;
          o({
            target: "Object",
            stat: !0
          }, {
            entries: function (e) {
              return r(e)
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o, r = n(0),
            i = n(27).f,
            a = n(19),
            c = n(95),
            s = n(26),
            l = n(96),
            u = n(33),
            p = "".startsWith,
            d = Math.min,
            f = l("startsWith");
          r({
            target: "String",
            proto: !0,
            forced: !!(u || f || !(o = i(String.prototype, "startsWith")) || o.writable) && !f
          }, {
            startsWith: function (e) {
              var t = String(s(this));
              c(e);
              var n = a(d(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                o = String(e);
              return p ? p.call(t, o, n) : t.slice(n, n + o.length) === o
            }
          })
        }, function (e, t, n) {
          var o = n(8),
            r = n(1),
            i = n(65);
          e.exports = !o && !r(function () {
            return 7 != Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          })
        }, function (e, t, n) {
          var o = n(2),
            r = n(66),
            i = o["__core-js_shared__"] || r("__core-js_shared__", {});
          e.exports = i
        }, function (e, t, n) {
          var o = n(15),
            r = n(102),
            i = n(27),
            a = n(16);
          e.exports = function (e, t) {
            for (var n = r(t), c = a.f, s = i.f, l = 0; l < n.length; l++) {
              var u = n[l];
              o(e, u) || c(e, u, s(t, u))
            }
          }
        }, function (e, t, n) {
          var o = n(34),
            r = n(56),
            i = n(71),
            a = n(9);
          e.exports = o("Reflect", "ownKeys") || function (e) {
            var t = r.f(a(e)),
              n = i.f;
            return n ? t.concat(n(e)) : t
          }
        }, function (e, t, n) {
          var o = n(2);
          e.exports = o
        }, function (e, t, n) {
          var o = n(15),
            r = n(18),
            i = n(69).indexOf,
            a = n(43);
          e.exports = function (e, t) {
            var n, c = r(e),
              s = 0,
              l = [];
            for (n in c) !o(a, n) && o(c, n) && l.push(n);
            for (; t.length > s;) o(c, n = t[s++]) && (~i(l, n) || l.push(n));
            return l
          }
        }, function (e, t, n) {
          var o = n(57),
            r = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var n = o(e);
            return n < 0 ? r(n + t, 0) : i(n, t)
          }
        }, function (e, t, n) {
          var o = n(72);
          e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, function (e, t, n) {
          var o = n(34);
          e.exports = o("document", "documentElement")
        }, function (e, t, n) {
          var o = n(3);
          t.f = o
        }, function (e, t, n) {
          var o = n(103),
            r = n(15),
            i = n(108),
            a = n(16).f;
          e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = {});
            r(t, e) || a(t, e, {
              value: i.f(e)
            })
          }
        }, function (e, t, n) {
          var o = n(4),
            r = n(59),
            i = n(3)("species");
          e.exports = function (e, t) {
            var n;
            return r(e) && ("function" == typeof (n = e.constructor) && (n === Array || r(n.prototype)) ? n = void 0 : o(n) && null === (n = n[i]) && (n = void 0)), new (void 0 === n ? Array : n)(0 === t ? 0 : t)
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(47).forEach,
            r = n(62),
            i = n(36),
            a = r("forEach"),
            c = i("forEach");
          e.exports = a && c ? [].forEach : function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
        }, function (e, t, n) {
          var o = n(9);
          e.exports = function (e, t, n, r) {
            try {
              return r ? t(o(n)[0], n[1]) : t(n)
            } catch (i) {
              var a = e.return;
              throw void 0 !== a && o(a.call(e)), i
            }
          }
        }, function (e, t, n) {
          var o = n(3),
            r = n(49),
            i = o("iterator"),
            a = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (r.Array === e || a[i] === e)
          }
        }, function (e, t, n) {
          var o = n(115),
            r = n(49),
            i = n(3)("iterator");
          e.exports = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || r[o(e)]
          }
        }, function (e, t, n) {
          var o = n(77),
            r = n(28),
            i = n(3)("toStringTag"),
            a = "Arguments" == r(function () {
              return arguments
            }());
          e.exports = o ? r : function (e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
              try {
                return e[t]
              } catch (n) { }
            }(t = Object(e), i)) ? n : a ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
          }
        }, function (e, t, n) {
          "use strict";
          var o, r, i, a = n(80),
            c = n(21),
            s = n(15),
            l = n(3),
            u = n(33),
            p = l("iterator"),
            d = !1;
          [].keys && ("next" in (i = [].keys()) ? (r = a(a(i))) !== Object.prototype && (o = r) : d = !0), null == o && (o = {}), u || s(o, p) || c(o, p, function () {
            return this
          }), e.exports = {
            IteratorPrototype: o,
            BUGGY_SAFARI_ITERATORS: d
          }
        }, function (e, t, n) {
          var o = n(1);
          e.exports = !o(function () {
            function e() { }
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(2),
            i = n(58),
            a = n(22),
            c = n(119),
            s = n(83),
            l = n(84),
            u = n(4),
            p = n(1),
            d = n(78),
            f = n(46),
            v = n(120);
          e.exports = function (e, t, n) {
            var m = -1 !== e.indexOf("Map"),
              h = -1 !== e.indexOf("Weak"),
              y = m ? "set" : "add",
              g = r[e],
              b = g && g.prototype,
              k = g,
              $ = {},
              _ = function (e) {
                var t = b[e];
                a(b, e, "add" == e ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this
                } : "delete" == e ? function (e) {
                  return !(h && !u(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function (e) {
                  return h && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function (e) {
                  return !(h && !u(e)) && t.call(this, 0 === e ? 0 : e)
                } : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this
                })
              };
            if (i(e, "function" != typeof g || !(h || b.forEach && !p(function () {
              (new g).entries().next()
            })))) k = n.getConstructor(t, e, m, y), c.REQUIRED = !0;
            else if (i(e, !0)) {
              var x = new k,
                w = x[y](h ? {} : -0, 1) != x,
                z = p(function () {
                  x.has(1)
                }),
                P = d(function (e) {
                  new g(e)
                }),
                S = !h && p(function () {
                  for (var e = new g, t = 5; t--;) e[y](t, t);
                  return !e.has(-0)
                });
              P || ((k = t(function (t, n) {
                l(t, k, e);
                var o = v(new g, t, k);
                return null != n && s(n, o[y], o, m), o
              })).prototype = b, b.constructor = k), (z || S) && (_("delete"), _("has"), m && _("get")), (S || w) && _(y), h && b.clear && delete b.clear
            }
            return $[e] = k, o({
              global: !0,
              forced: k != g
            }, $), f(k, e), h || n.setStrong(k, e, m), k
          }
        }, function (e, t, n) {
          var o = n(43),
            r = n(4),
            i = n(15),
            a = n(16).f,
            c = n(55),
            s = n(167),
            l = c("meta"),
            u = 0,
            p = Object.isExtensible || function () {
              return !0
            },
            d = function (e) {
              a(e, l, {
                value: {
                  objectID: "O" + ++u,
                  weakData: {}
                }
              })
            },
            f = e.exports = {
              REQUIRED: !1,
              fastKey: function (e, t) {
                if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, l)) {
                  if (!p(e)) return "F";
                  if (!t) return "E";
                  d(e)
                }
                return e[l].objectID
              },
              getWeakData: function (e, t) {
                if (!i(e, l)) {
                  if (!p(e)) return !0;
                  if (!t) return !1;
                  d(e)
                }
                return e[l].weakData
              },
              onFreeze: function (e) {
                return s && f.REQUIRED && p(e) && !i(e, l) && d(e), e
              }
            };
          o[l] = !0
        }, function (e, t, n) {
          var o = n(4),
            r = n(81);
          e.exports = function (e, t, n) {
            var i, a;
            return r && "function" == typeof (i = t.constructor) && i !== n && o(a = i.prototype) && a !== n.prototype && r(e, a), e
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(16).f,
            r = n(44),
            i = n(122),
            a = n(48),
            c = n(84),
            s = n(83),
            l = n(79),
            u = n(85),
            p = n(8),
            d = n(119).fastKey,
            f = n(32),
            v = f.set,
            m = f.getterFor;
          e.exports = {
            getConstructor: function (e, t, n, l) {
              var u = e(function (e, o) {
                c(e, u, t), v(e, {
                  type: t,
                  index: r(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), p || (e.size = 0), null != o && s(o, e[l], e, n)
              }),
                f = m(t),
                h = function (e, t, n) {
                  var o, r, i = f(e),
                    a = y(e, t);
                  return a ? a.value = n : (i.last = a = {
                    index: r = d(t, !0),
                    key: t,
                    value: n,
                    previous: o = i.last,
                    next: void 0,
                    removed: !1
                  }, i.first || (i.first = a), o && (o.next = a), p ? i.size++ : e.size++, "F" !== r && (i.index[r] = a)), e
                },
                y = function (e, t) {
                  var n, o = f(e),
                    r = d(t);
                  if ("F" !== r) return o.index[r];
                  for (n = o.first; n; n = n.next)
                    if (n.key == t) return n
                };
              return i(u.prototype, {
                clear: function () {
                  for (var e = f(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                  e.first = e.last = void 0, p ? e.size = 0 : this.size = 0
                },
                delete: function (e) {
                  var t = f(this),
                    n = y(this, e);
                  if (n) {
                    var o = n.next,
                      r = n.previous;
                    delete t.index[n.index], n.removed = !0, r && (r.next = o), o && (o.previous = r), t.first == n && (t.first = o), t.last == n && (t.last = r), p ? t.size-- : this.size--
                  }
                  return !!n
                },
                forEach: function (e) {
                  for (var t, n = f(this), o = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                    for (o(t.value, t.key, this); t && t.removed;) t = t.previous
                },
                has: function (e) {
                  return !!y(this, e)
                }
              }), i(u.prototype, n ? {
                get: function (e) {
                  var t = y(this, e);
                  return t && t.value
                },
                set: function (e, t) {
                  return h(this, 0 === e ? 0 : e, t)
                }
              } : {
                add: function (e) {
                  return h(this, e = 0 === e ? 0 : e, e)
                }
              }), p && o(u.prototype, "size", {
                get: function () {
                  return f(this).size
                }
              }), u
            },
            setStrong: function (e, t, n) {
              var o = t + " Iterator",
                r = m(t),
                i = m(o);
              l(e, t, function (e, t) {
                v(this, {
                  type: o,
                  target: e,
                  state: r(e),
                  kind: t,
                  last: void 0
                })
              }, function () {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                  value: n.key,
                  done: !1
                } : "values" == t ? {
                  value: n.value,
                  done: !1
                } : {
                  value: [n.key, n.value],
                  done: !1
                } : (e.target = void 0, {
                  value: void 0,
                  done: !0
                })
              }, n ? "entries" : "values", !n, !0), u(t)
            }
          }
        }, function (e, t, n) {
          var o = n(22);
          e.exports = function (e, t, n) {
            for (var r in t) o(e, r, t[r], n);
            return e
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(1);
  
          function r(e, t) {
            return RegExp(e, t)
          }
          t.UNSUPPORTED_Y = o(function () {
            var e = r("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
          }), t.BROKEN_CARET = o(function () {
            var e = r("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
          })
        }, function (e, t, n) {
          var o = n(57),
            r = n(26),
            i = function (e) {
              return function (t, n) {
                var i, a, c = String(r(t)),
                  s = o(n),
                  l = c.length;
                return s < 0 || s >= l ? e ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === l || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? c.charAt(s) : i : e ? c.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
              }
            };
          e.exports = {
            codeAt: i(!1),
            charAt: i(!0)
          }
        }, function (e, t, n) {
          var o = n(9),
            r = n(35),
            i = n(3)("species");
          e.exports = function (e, t) {
            var n, a = o(e).constructor;
            return void 0 === a || null == (n = o(a)[i]) ? t : r(n)
          }
        }, function (e, t) {
          e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(69).indexOf,
            i = n(62),
            a = n(36),
            c = [].indexOf,
            s = !!c && 1 / [1].indexOf(1, -0) < 0,
            l = i("indexOf"),
            u = a("indexOf", {
              ACCESSORS: !0,
              1: 0
            });
          o({
            target: "Array",
            proto: !0,
            forced: s || !l || !u
          }, {
            indexOf: function (e) {
              return s ? c.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(35),
            i = n(23),
            a = n(1),
            c = n(62),
            s = [],
            l = s.sort,
            u = a(function () {
              s.sort(void 0)
            }),
            p = a(function () {
              s.sort(null)
            }),
            d = c("sort");
          o({
            target: "Array",
            proto: !0,
            forced: u || !p || !d
          }, {
            sort: function (e) {
              return void 0 === e ? l.call(i(this)) : l.call(i(this), r(e))
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(118),
            r = n(121);
          e.exports = o("Set", function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0)
            }
          }, r)
        }, function (e, t, n) {
          "use strict";
          var o = n(90),
            r = n(9),
            i = n(23),
            a = n(19),
            c = n(57),
            s = n(26),
            l = n(92),
            u = n(93),
            p = Math.max,
            d = Math.min,
            f = Math.floor,
            v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            m = /\$([$&'`]|\d\d?)/g;
          o("replace", 2, function (e, t, n, o) {
            var h = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
              y = o.REPLACE_KEEPS_$0,
              g = h ? "$" : "$0";
            return [function (n, o) {
              var r = s(this),
                i = null == n ? void 0 : n[e];
              return void 0 !== i ? i.call(n, r, o) : t.call(String(r), n, o)
            }, function (e, o) {
              if (!h && y || "string" == typeof o && -1 === o.indexOf(g)) {
                var i = n(t, e, this, o);
                if (i.done) return i.value
              }
              var s = r(e),
                f = String(this),
                v = "function" == typeof o;
              v || (o = String(o));
              var m = s.global;
              if (m) {
                var k = s.unicode;
                s.lastIndex = 0
              }
              for (var $ = []; ;) {
                var _ = u(s, f);
                if (null === _ || ($.push(_), !m)) break;
                "" === String(_[0]) && (s.lastIndex = l(f, a(s.lastIndex), k))
              }
              for (var x, w = "", z = 0, P = 0; P < $.length; P++) {
                _ = $[P];
                for (var S = String(_[0]), A = p(d(c(_.index), f.length), 0), j = [], C = 1; C < _.length; C++) j.push(void 0 === (x = _[C]) ? x : String(x));
                var O = _.groups;
                if (v) {
                  var E = [S].concat(j, A, f);
                  void 0 !== O && E.push(O);
                  var D = String(o.apply(void 0, E))
                } else D = b(S, f, A, j, O, o);
                A >= z && (w += f.slice(z, A) + D, z = A + S.length)
              }
              return w + f.slice(z)
            }];
  
            function b(e, n, o, r, a, c) {
              var s = o + e.length,
                l = r.length,
                u = m;
              return void 0 !== a && (a = i(a), u = v), t.call(c, u, function (t, i) {
                var c;
                switch (i.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e;
                  case "`":
                    return n.slice(0, o);
                  case "'":
                    return n.slice(s);
                  case "<":
                    c = a[i.slice(1, -1)];
                    break;
                  default:
                    var u = +i;
                    if (0 === u) return t;
                    if (u > l) {
                      var p = f(u / 10);
                      return 0 === p ? t : p <= l ? void 0 === r[p - 1] ? i.charAt(1) : r[p - 1] + i.charAt(1) : t
                    }
                    c = r[u - 1]
                }
                return void 0 === c ? "" : c
              })
            }
          })
        }, function (e, t, n) {
          var o, r, i, a = n(2),
            c = n(1),
            s = n(28),
            l = n(48),
            u = n(107),
            p = n(65),
            d = n(132),
            f = a.location,
            v = a.setImmediate,
            m = a.clearImmediate,
            h = a.process,
            y = a.MessageChannel,
            g = a.Dispatch,
            b = 0,
            k = {},
            $ = function (e) {
              if (k.hasOwnProperty(e)) {
                var t = k[e];
                delete k[e], t()
              }
            },
            _ = function (e) {
              return function () {
                $(e)
              }
            },
            x = function (e) {
              $(e.data)
            },
            w = function (e) {
              a.postMessage(e + "", f.protocol + "//" + f.host)
            };
          v && m || (v = function (e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return k[++b] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, o(b), b
          }, m = function (e) {
            delete k[e]
          }, "process" == s(h) ? o = function (e) {
            h.nextTick(_(e))
          } : g && g.now ? o = function (e) {
            g.now(_(e))
          } : y && !d ? (i = (r = new y).port2, r.port1.onmessage = x, o = l(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(w) || "file:" === f.protocol ? o = "onreadystatechange" in p("script") ? function (e) {
            u.appendChild(p("script")).onreadystatechange = function () {
              u.removeChild(this), $(e)
            }
          } : function (e) {
            setTimeout(_(e), 0)
          } : (o = w, a.addEventListener("message", x, !1))), e.exports = {
            set: v,
            clear: m
          }
        }, function (e, t, n) {
          var o = n(74);
          e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o)
        }, function (e, t, n) {
          "use strict";
          var o = n(35),
            r = function (e) {
              var t, n;
              this.promise = new e(function (e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
              }), this.resolve = o(t), this.reject = o(n)
            };
          e.exports.f = function (e) {
            return new r(e)
          }
        }, function (e, t, n) {
          e.exports = n(171)()
        }, function (e, t) {
          e.exports = {
            acceptAll: "照单全收",
            acceptSelected: "接受选择",
            close: "密切",
            consentModal: {
              description: "在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。",
              privacyPolicy: {
                name: "隐私政策",
                text: "要了解更多，请阅读我们的{privacyPolicy} 。"
              },
              title: "我们想使用的服务"
            },
            consentNotice: {
              changeDescription: "自上次访问后有变化，请更新您的同意。",
              description: "你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。",
              imprint: {
                name: "印记"
              },
              learnMore: "让我来选",
              privacyPolicy: {
                name: "隐私政策"
              },
              testing: "测试模式！"
            },
            contextualConsent: {
              acceptAlways: "总是",
              acceptOnce: "是的，是的",
              description: "你想加载由{title} 提供的外部内容吗？"
            },
            decline: "我拒绝",
            ok: "没事的",
            poweredBy: "由 <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> 与 <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>共同实施",
            privacyPolicy: {
              name: "隐私政策",
              text: "要了解更多，请阅读我们的{privacyPolicy} 。"
            },
            purposeItem: {
              service: "服务",
              services: "服务"
            },
            purposes: {
              advertising: {
                description: "这些服务处理个人信息，向您展示个性化或基于兴趣的广告。",
                title: "广告宣传"
              },
              functional: {
                description: "这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n",
                title: "服务提供"
              },
              marketing: {
                description: "这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。",
                title: "市场营销"
              },
              performance: {
                description: "这些服务处理个人信息是为了优化本网站提供的服务。\n",
                title: "性能优化"
              }
            },
            save: "挽救",
            service: {
              disableAll: {
                description: "使用此开关可启用或禁用所有服务。",
                title: "启用或停用所有服务"
              },
              optOut: {
                description: "这个服务是默认加载的(但你可以选择退出)",
                title: "(选择退出)"
              },
              purpose: "目的",
              purposes: "目的",
              required: {
                description: "这种服务是必须的",
                title: "(总是需要)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Aceitar todos",
            acceptSelected: "Confirmar preferências",
            close: "Fechar",
            consentModal: {
              description: "Aqui pode ativar e/ou desativar os cookies de acordo com as suas preferências, exceto os cookies que são estritamente necessários para o funcionamento da Plataforma. Ao clicar em “Confirmar preferências”, a seleção de cookies que efectuou será guardada. Se não tiver selecionado nenhuma opção, premir este botão equivale a rejeitar todos os cookies. Também pode aceitar ou rejeitar todos os cookies premindo o botão “Aceitar todos” ou “Descartar todos”.",
              privacyPolicy: {
                name: "Política de Cookies",
                text: "Para mais informações, consulte o nosso {privacyPolicy}."
              },
              title: "Definições de Cookies"
            },
            consentNotice: {
              changeDescription: "Houve mudan\xe7as desde sua \xfaltima visita, queira renovar seu consentimento.",
              description: "<h1>Cookies de Consentimento</h1><span class='cookie-description'>Utilizamos cookies para fins analíticos e para apresentar publicidade adaptada às suas preferências. Partilhamos informações sobre a sua utilização do nosso sítio com os nossos parceiros de redes sociais, publicidade e análise, que podem combiná-las com outras informações que lhes tenha fornecido ou que tenham recolhido a partir da sua utilização dos respectivos serviços. Pode definir ou rejeitar cookies clicando em “Preferências”. Também pode aceitar ou rejeitar todos os cookies clicando no botão “Aceitar todos” ou “Descartar todos”. Para mais informações, consulte a nossa {privacyPolicy} y nuestra <a href='" + urlPoliticas.privacidad.pt + "' target='_blank'>Política de privacidade</a>.<span>",
              imprint: {
                name: "Imprimir"
              },
              learnMore: "Preferências",
              privacyPolicy: {
                name: "Política de Cookies"
              },
              testing: "Modo de teste!"
            },
            contextualConsent: {
              acceptAlways: "Sempre",
              acceptOnce: "Sim",
              description: "Voc\xea deseja carregar conte\xfado externo fornecido por {title}?"
            },
            decline: "Descartar tudo",
            ok: "Aceitar tudo",
            poweredBy: "Implementado pela <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> com a <a href='" + urlPoweredby.klaro.es + "' target='_blank'>Klaro</a>",
            privacyPolicy: {
              name: "Política de Cookies",
              text: "Para saber mais, por favor, leia nossa {privacyPolicy}."
            },
            purposeItem: {
              service: "servi\xe7o",
              services: "servi\xe7os"
            },
            purposes: {
              advertising: {
                description: "Utilizados para criar um perfil dos seus interesses e mostrar-lhe anúncios relevantes noutros sítios. Não armazenam diretamente informações pessoais, mas baseiam-se na identificação única do seu browser e dispositivo de acesso à Internet.",
                title: "Marketing"
              },
              functional: {
                description: "Necessários para o funcionamento do sítio Web e não podem ser desactivados nos nossos sistemas. São normalmente configurados para responder a acções que o utilizador toma para receber serviços, como ajustar as suas preferências de privacidade, iniciar sessão no sítio ou preencher formulários.",
                title: "Funcional"
              },
              marketing: {
                description: "Esses servi\xe7os processam informa\xe7\xf5es pessoais para mostrar a voc\xea conte\xfado relevante sobre produtos, servi\xe7os ou t\xf3picos que possam ser do seu interesse.",
                title: "Marketing"
              },
              performance: {
                description: "Esses servi\xe7os processam informa\xe7\xf5es pessoais para otimizar o servi\xe7o que este website oferece.\n",
                title: "Otimiza\xe7\xe3o do desempenho"
              }
            },
            save: "Salvar",
            service: {
              disableAll: {
                description: "Use essa chave para habilitar ou desabilitar todos os servi\xe7os.",
                title: "Habilitar ou desabilitar todos os servi\xe7os"
              },
              optOut: {
                description: "Estes servi\xe7os s\xe3o carregados por padr\xe3o (mas o voc\xea pode optar por n\xe3o participar).",
                title: "(opt-out)"
              },
              purpose: "Objetivo",
              purposes: "Objetivos",
              required: {
                description: "Esses servi\xe7os s\xe3o sempre necess\xe1rios",
                title: "(sempre necess\xe1rio)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Accepta-les totes",
            acceptSelected: "Accepta les escollides",
            service: {
              disableAll: {
                description: "Useu aquest bot\xf3 per a habilitar o deshabilitar totes les aplicacions.",
                title: "Habilita/deshabilita totes les aplicacions"
              },
              optOut: {
                description: "Aquesta aplicaci\xf3 es carrega per defecte, per\xf2 podeu desactivar-la",
                title: "(opt-out)"
              },
              purpose: "Finalitat",
              purposes: "Finalitats",
              required: {
                description: "Aquesta aplicaci\xf3 es necessita sempre",
                title: "(necess\xe0ria)"
              }
            },
            close: "Tanca",
            consentModal: {
              description: "Aqu\xed podeu veure i personalitzar la informaci\xf3 que recopilem sobre v\xf3s.",
              privacyPolicy: {
                name: "pol\xedtica de privadesa",
                text: "Per a m\xe9s informaci\xf3, consulteu la nostra {privacyPolicy}."
              },
              title: "Informaci\xf3 que recopilem"
            },
            consentNotice: {
              changeDescription: "Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.",
              description: "Recopilem i processem la vostra informaci\xf3 personal amb les seg\xfcents finalitats: {purposes}.",
              imprint: {
                name: "Empremta"
              },
              learnMore: "Saber-ne m\xe9s",
              privacyPolicy: {
                name: "pol\xedtica de privadesa"
              }
            },
            decline: "Rebutja",
            ok: "Accepta",
            poweredBy: "Implementat per <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a>amb<a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro</a>",
            purposeItem: {
              service: "aplicaci\xf3",
              services: "aplicacions"
            },
            save: "Desa"
          }
        }, function (e, t) {
          e.exports = {
            privacyPolicy: {
              name: "z\xe1sady ochrany soukrom\xed",
              text: 'Pro dalš\xed informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.'
            },
            consentModal: {
              title: "Služby, kter\xe9 bychom r\xe1di využili",
              description: "Zde můžete posoudit a přizpůsobit služby, kter\xe9 bychom r\xe1di na tomto webu použ\xedvali. M\xe1te to pod kontrolou! Povolte nebo zakažte služby, jak uzn\xe1te za vhodn\xe9."
            },
            consentNotice: {
              testing: "Testing mode!",
              changeDescription: "Od vaš\xed posledn\xed n\xe1vštěvy došlo ke změn\xe1m, obnovte pros\xedm svůj souhlas.",
              description: "„Dobr\xfd den! Můžeme povolit někter\xe9 dalš\xed služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“",
              "learnMore|capitalize": "Vyberu si"
            },
            účely: {
              functional: {
                "title|capitalize": "Poskytov\xe1n\xed služeb",
                description: "Tyto služby jsou nezbytn\xe9 pro spr\xe1vn\xe9 fungov\xe1n\xed tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala spr\xe1vně.\n"
              },
              performance: {
                "title|capitalize": "Optimalizace v\xfdkonu",
                description: "V r\xe1mci těchto služeb jsou zpracov\xe1v\xe1ny osobn\xed \xfadaje za \xfačelem optimalizace služeb, kter\xe9 jsou na tomto webu poskytov\xe1ny.\n"
              },
              marketing: {
                "title|capitalize": "Marketing",
                description: "V r\xe1mci těchto služeb jsou zpracov\xe1v\xe1ny osobn\xed \xfadaje, aby se v\xe1m zobrazoval relevantn\xed obsah o produktech, služb\xe1ch nebo t\xe9matech, kter\xe9 by v\xe1s mohly zaj\xedmat."
              },
              advertising: {
                "title|capitalize": "Reklama",
                description: "V r\xe1mci těchto služeb jsou zpracov\xe1v\xe1ny osobn\xed \xfadaje, aby v\xe1m zobrazovaly personalizovan\xe9 nebo z\xe1jmově orientovan\xe9 reklamy."
              }
            },
            purposeItem: {
              service: "Jednoduch\xe1 služba <tr-snip></tr-snip> , kterou nainstaluji do sv\xe9ho poč\xedtače.",
              services: "Několik jednoduch\xfdch služeb <tr-snip></tr-snip> , kter\xe9 nainstaluji do sv\xe9ho poč\xedtače."
            },
            "ok|capitalize": "To je v poř\xe1dku",
            save: "uložit",
            "decline|capitalize": "Nepřij\xedm\xe1m",
            close: "zavř\xedt",
            acceptAll: "přijmout vše",
            acceptSelected: "přijmout vybran\xe9",
            service: {
              disableAll: {
                title: "povolit nebo zak\xe1zat všechny služby",
                description: "Pomoc\xed tohoto přep\xednače můžete povolit nebo zak\xe1zat všechny služby."
              },
              optOut: {
                title: "(opt-out)",
                description: "Tato služba se nač\xedt\xe1 ve v\xfdchoz\xedm nastaven\xed (ale můžete ji zrušit)"
              },
              required: {
                title: "(vždy vyžadov\xe1no)",
                description: "Tato služba je vždy vyžadov\xe1na"
              },
              purposes: "Zpracov\xe1n\xed  pro \xfačely <tr-snip></tr-snip>",
              purpose: "Zpracov\xe1n\xed pro \xfačely <tr-snip></tr-snip>"
            },
            poweredBy: "Prov\xe1d\xed <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> se společnost\xed <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            contextualConsent: {
              description: "Chcete nač\xedst extern\xed obsah dod\xe1van\xfd prostřednictv\xedm {title}?",
              acceptOnce: "Ano",
              acceptAlways: "Vždy"
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Tillad alle",
            acceptSelected: "Tillad udvalgte",
            service: {
              disableAll: {
                description: "Brug denne kontakt til at aktivere/deaktivere alle apps.",
                title: "Aktiver/deaktiver alle applikatione"
              },
              optOut: {
                description: "Denne applikation indl\xe6ses som standard (men du kan deaktivere den)",
                title: "Opt-Out"
              },
              purpose: "Form\xe5l",
              purposes: "Form\xe5l",
              required: {
                description: "Denne applikation er altid n\xf8dvendig",
                title: "(Altid n\xf8dvendig)"
              }
            },
            close: "Luk",
            consentModal: {
              description: "Her kan du se og \xe6ndre, hvilke informationer vi gemmer om dig.",
              privacyPolicy: {
                name: "Flere informationer finde du under {privacyPolicy}",
                text: "databeskyttelseserkl\xe6ring."
              },
              title: "Informationer, som vi gemmer"
            },
            consentNotice: {
              changeDescription: "Der har v\xe6ret \xe6ndringer siden dit sidste bes\xf8g. Opdater dit valg.",
              description: "Vi gemmer og behandler dine personlige oplysninger til f\xf8lgende form\xe5l: {purposes}.",
              imprint: {
                name: ""
              },
              learnMore: "L\xe6s mere",
              privacyPolicy: {
                name: "Datenschutzerkl\xe4rung"
              }
            },
            decline: "Afvis",
            ok: "Ok",
            poweredBy: "Implementeret af <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> med <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Gem"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Alle akzeptieren",
            acceptSelected: "Ausgew\xe4hlte akzeptieren",
            close: "Schlie\xdfen",
            consentModal: {
              description: "Hier k\xf6nnen Sie die Dienste, die wir auf dieser Website nutzen m\xf6chten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es f\xfcr richtig halten.",
              privacyPolicy: {
                name: "Datenschutzerkl\xe4rung",
                text: "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."
              },
              title: "Dienste, die wir nutzen m\xf6chten"
            },
            consentNotice: {
              changeDescription: "Seit Ihrem letzten Besuch gab es \xc4nderungen, bitte erneuern Sie Ihre Zustimmung.",
              description: "<h1>Zustimmungs-Cookies</h1><span class='cookie-description'>Wir verwenden Cookies zu Analysezwecken und zur Anzeige von Werbung, die auf Ihre Präferenzen zugeschnitten ist. Wir geben Informationen über Ihre Nutzung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter, die diese mit anderen Informationen kombinieren können, die Sie ihnen zur Verfügung gestellt haben oder die sie aus Ihrer Nutzung ihrer Dienste gesammelt haben. Sie können Cookies zulassen oder ablehnen, indem Sie auf Einstellungen klicken. Sie können auch alle akzeptieren oder ablehnen, indem Sie auf die Schaltfläche Alle akzeptieren oder Ablehnen klicken. For more information, please see our {privacyPolicy} and our <a href='" + urlPoliticas.privacidad.en + "' target='_blank'>Privacy Policy</a>.<span>",
              imprint: {
                name: "Impressum"
              },
              learnMore: "Lassen Sie mich w\xe4hlen",
              privacyPolicy: {
                name: "Datenschutzerkl\xe4rung"
              },
              testing: "Testmodus!"
            },
            contextualConsent: {
              acceptAlways: "Immer",
              acceptOnce: "Ja",
              description: "M\xf6chten Sie von {title} bereitgestellte externe Inhalte laden?"
            },
            decline: "Ich lehne ab",
            ok: "Das ist ok",
            poweredBy: "Durchgeführt von <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> mit <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "Datenschutzerkl\xe4rung",
              text: "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."
            },
            purposeItem: {
              service: "Dienst",
              services: "Dienste"
            },
            purposes: {
              advertising: {
                description: "Diese Dienste verarbeiten pers\xf6nliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.",
                title: "Werbung"
              },
              functional: {
                description: "Diese Dienste sind f\xfcr die korrekte Funktion dieser Website unerl\xe4sslich. Sie k\xf6nnen sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren w\xfcrde.\n",
                title: "Dienstbereitstellung"
              },
              marketing: {
                description: "Diese Dienste verarbeiten pers\xf6nliche Daten, um Ihnen relevante Inhalte \xfcber Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren k\xf6nnten.",
                title: "Marketing"
              },
              performance: {
                description: "Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n",
                title: "Optimierung der Leistung"
              }
            },
            save: "Speichern",
            service: {
              disableAll: {
                description: "Mit diesem Schalter k\xf6nnen Sie alle Dienste aktivieren oder deaktivieren.",
                title: "Alle Dienste aktivieren oder deaktivieren"
              },
              optOut: {
                description: "Diese Dienste werden standardm\xe4\xdfig geladen (Sie k\xf6nnen sich jedoch abmelden)",
                title: "(Opt-out)"
              },
              purpose: "Zweck",
              purposes: "Zwecke",
              required: {
                description: "Dieser Service ist immer erforderlich",
                title: "(immer erforderlich)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.",
                title: "Για όλες τις εφαρμογές"
              },
              optOut: {
                description: "Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί",
                title: "(μη απαιτούμενο)"
              },
              purpose: "Σκοπός",
              purposes: "Σκοποί",
              required: {
                description: "Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό",
                title: "(απαιτούμενο)"
              }
            },
            close: "Κλείσιμο",
            consentModal: {
              description: "Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.",
              privacyPolicy: {
                name: "Πολιτική Απορρήτου",
                text: "Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}."
              },
              title: "Πληροφορίες που συλλέγουμε"
            },
            consentNotice: {
              changeDescription: "Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.",
              description: "Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Περισσότερα",
              privacyPolicy: {
                name: "Πολιτική Απορρήτου"
              }
            },
            decline: "Απόρριπτω",
            ok: "OK",
            poweredBy: "Υλοποιήθηκε από την <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> με την <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Αποθήκευση"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Accept all",
            acceptSelected: "Confirm Preferences",
            close: "Close",
            consentModal: {
              description: "Here you can activate and/or disable cookies according to your preferences, except those cookies that are strictly necessary for the operation of the Platform. By clicking “Confirm Preferences”, the selection of cookies you have made will be saved. If you have not selected any option, pressing this button will be equivalent to reject all cookies. You can also accept or reject all cookies by pressing the “Accept all” or “Deny” button.",
              privacyPolicy: {
                name: "Cookies Policy",
                text: "For further information, please see our {privacyPolicy}"
              },
              title: "Cookie Settings"
            },
            consentNotice: {
              changeDescription: "There were changes since your last visit, please renew your consent.",
              description: "<h1>Consent Cookies</h1><span class='cookie-description'>We use cookies for analytical purposes and to display advertising personalized to your preferences. We share information about your use of our site with our social media, advertising and analytics partners, who may combine it with other information you have provided to them or that they have collected from your use of their services. You can set or reject cookies by clicking on “Preferences”. You can also accept or reject all by clicking the “Accept all” or “Deny” button. For more information, please see our {privacyPolicy} and our <a href='" + urlPoliticas.privacidad.en + "' target='_blank'>Privacy Policy</a>.<span>",
              imprint: {
                name: "Print"
              },
              learnMore: "Preferences",
              privacyPolicy: {
                name: "Cookies Policy"
              },
              testing: "Testing mode!"
            },
            contextualConsent: {
              acceptAlways: "Always",
              acceptOnce: "Yes",
              description: "Do you want to load external content supplied by {title}?"
            },
            decline: "Deny",
            ok: "That's ok",
            poweredBy: "Implemented by <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC with <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "Cookies Policy",
              text: "To learn more, please read our {privacyPolicy}."
            },
            purposeItem: {
              service: "service",
              services: "services"
            },
            purposes: {
              advertising: {
                description: "Used to create a profile of your interests and show you relevant advertisements on other sites. They do not store personal information directly, but are based on the unique identification of your browser and Internet access device.",
                title: "Marketing"
              },
              functional: {
                description: "Necessary for the website to function and cannot be disabled on our systems. They are usually set up to respond to actions you take to receive services, such as adjusting your privacy preferences, logging into the site, or filling out forms.",
                title: "Functional"
              },
              marketing: {
                description: "These services process personal information to show you relevant content about products, services or topics that you might be interested in.",
                title: "Marketing"
              },
              performance: {
                description: "These services process personal information to optimize the service that this website offers.\n",
                title: "Performance Optimization"
              }
            },
            save: "Save",
            service: {
              disableAll: {
                description: "Use this switch to enable or disable all services.",
                title: "Enable or disable all services"
              },
              optOut: {
                description: "This services is loaded by default (but you can opt out)",
                title: "(opt-out)"
              },
              purpose: "Purpose",
              purposes: "Purposes",
              required: {
                description: "This services is always required",
                title: "(always required)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Aceptar todas",
            acceptSelected: "Confirmar Preferencias",
            close: "Cerrar",
            consentModal: {
              description: "Aqu\xed podr\xe1s podr\xe1s activar y/o desactivar las cookies de acuerdo con tus preferencias, salvo aquellas Cookies que son estrictamente necesarias para el funcionamiento de la Plataforma. Al pulsar “Confirmar Preferencias”, se guardar\xe1 la selecci\xf3n de cookies que has realizado. Si no has seleccionado ninguna opci\xf3n, pulsar este bot\xf3n equivaldr\xe1 a rechazar todas las cookies. Tambi\xe9n puedes aceptar o rechazar todas las cookies pulsando el bot\xf3n “Aceptar todas” o “Rechazar todas”.",
              privacyPolicy: {
                name: "Pol\xedtica de Cookies",
                text: "Para m\xe1s informaci\xf3n, consulte nuestra {privacyPolicy}"
              },
              title: "Configuraci\xf3n de Cookies"
            },
            consentNotice: {
              changeDescription: "Ha habido cambios en las cookies desde su \xfaltima visita. Debe renovar su consentimiento.",
              description: "<h1>Consentimiento de Cookies</h1><span class='cookie-description'>Utilizamos cookies con finalidades anal\xedticas y para mostrar publicidad personalizada con sus preferencias. Compartimos información sobre el uso que hace de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, que pueden combinarla con otra información que usted les haya proporcionado o que hayan recopilado a partir del uso que usted hace de sus servicios. Puede configurar o rechazar las cookies haciendo click en “Preferencias”. Tambi\xe9n puede aceptar o rechazar todas pulsando el bot\xf3n “Aceptar todas” o “Rechazar todas”. Para m\xe1s informaci\xf3n, consulte nuestra {privacyPolicy} y nuestra <a href=" + urlPoliticas.privacidad.es + " target='_blank'>Política de Privacidad</a>.<span>",
              imprint: {
                name: "Imprimir"
              },
              learnMore: "Preferencias",
              privacyPolicy: {
                name: "Pol\xedtica de Cookies"
              },
              testing: "\xa1Modo de prueba!"
            },
            contextualConsent: {
              acceptAlways: "Siempre",
              acceptOnce: "S\xed",
              description: "\xbfQuieres cargar el contenido externo suministrado por {title}?"
            },
            decline: "Rechazar todas",
            ok: "Aceptar todas",
            poweredBy: "Implementado por <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> con <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "Pol\xedtica de Cookies",
              text: "Para m\xe1s informaci\xf3n, consulte nuestra {privacyPolicy}."
            },
            purposeItem: {
              service: "servicio",
              services: "servicios"
            },
            purposes: {
              advertising: {
                description: "Utilizadas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. No almacenan información personal directamente, sino que se basan en la identificación única de su navegador y dispositivo de acceso al Internet.",
                title: "Marketing"
              },
              functional: {
                description: "Necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted para recibir servicios, tales como ajustar sus preferencias de privacidad, iniciar sesión en el sitio, o llenar formularios.",
                title: "Funcionales"
              },
              marketing: {
                description: "Estos servicios procesan informaci\xf3n personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.",
                title: "Marketing"
              },
              performance: {
                description: "Estos servicios procesan informaci\xf3n personal para optimizar el servicio que ofrece este sitio.",
                title: "Optimizaci\xf3n del rendimiento"
              }
            },
            save: "Guardar",
            service: {
              disableAll: {
                description: "Utilice el interruptor para aceptar o rechazar todas las cookies excepto las necesarias.",
                title: "Aceptar o Rechazar todas las Cookies"
              },
              optOut: {
                description: "Este servicio est\xe1 habilitado por defecto (pero puede optar por lo contrario)",
                title: "(desactivar)"
              },
              purpose: "Finalidad",
              purposes: "Finalidades",
              required: {
                description: "Este servicio es necesario siempre",
                title: "(siempre requerido)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Aktivoi kaikki p\xe4\xe4lle/pois.",
                title: "Valitse kaikki"
              },
              optOut: {
                description: "Ladataan oletuksena (mutta voit ottaa sen pois p\xe4\xe4lt\xe4)",
                title: "(ladataan oletuksena)"
              },
              purpose: "K\xe4ytt\xf6tarkoitus",
              purposes: "K\xe4ytt\xf6tarkoitukset",
              required: {
                description: "Sivusto vaatii t\xe4m\xe4n aina",
                title: "(vaaditaan)"
              }
            },
            close: "Sulje",
            consentModal: {
              description: "Voit tarkastella ja muokata sinusta ker\xe4\xe4mi\xe4mme tietoja.",
              privacyPolicy: {
                name: "tietosuojasivultamme",
                text: "Voit lukea lis\xe4tietoja {privacyPolicy}."
              },
              title: "Ker\xe4\xe4m\xe4mme tiedot"
            },
            consentNotice: {
              changeDescription: "Olemme tehneet muutoksia ehtoihin viime vierailusi j\xe4lkeen, tarkista ehdot.",
              description: "Ker\xe4\xe4mme ja k\xe4sittelemme henkil\xf6tietoja seuraaviin tarkoituksiin: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Lue lis\xe4\xe4",
              privacyPolicy: {
                name: "tietosuojasivultamme"
              }
            },
            decline: "Hylk\xe4\xe4",
            ok: "Hyv\xe4ksy",
            poweredBy: "<a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> toteuttanut yhdessä <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaron </a> kanssa",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Tallenna"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Accepter tout",
            acceptSelected: "Accepter s\xe9lectionn\xe9",
            close: "Fermer",
            consentModal: {
              description: "Vous pouvez ici \xe9valuer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui d\xe9cidez ! Activez ou d\xe9sactivez les services comme bon vous semble.",
              privacyPolicy: {
                name: "politique de confidentialit\xe9",
                text: "Pour en savoir plus, veuillez lire notre {privacyPolicy}."
              },
              title: "Services que nous souhaitons utiliser"
            },
            consentNotice: {
              changeDescription: "Il y a eu des changements depuis votre derni\xe8re visite, veuillez renouveler votre consentement.",
              description: "Bonjour ! Pourrions-nous activer des services suppl\xe9mentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.",
              imprint: {
                name: "mentions l\xe9gales"
              },
              learnMore: "Laissez-moi choisir",
              privacyPolicy: {
                name: "politique de confidentialit\xe9"
              },
              testing: "Mode test !"
            },
            contextualConsent: {
              acceptAlways: "Toujours",
              acceptOnce: "Oui",
              description: "Vous souhaitez charger un contenu externe fourni par {title}?"
            },
            decline: "Je refuse",
            ok: "C'est bon.",
            poweredBy: "Mise en œuvre par le <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> avec <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "politique de confidentialit\xe9",
              text: "Pour en savoir plus, veuillez lire notre {privacyPolicy}."
            },
            purposeItem: {
              service: "service",
              services: "services"
            },
            purposes: {
              advertising: {
                description: "Ces services traitent les informations personnelles pour vous pr\xe9senter des publicit\xe9s personnalis\xe9es ou bas\xe9es sur des int\xe9r\xeats.",
                title: "Publicit\xe9"
              },
              functional: {
                description: "Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les d\xe9sactiver ici car le service ne fonctionnerait pas correctement autrement.\n",
                title: "Prestation de services"
              },
              marketing: {
                description: "Ces services traitent les informations personnelles afin de vous pr\xe9senter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous int\xe9resser.",
                title: "Marketing"
              },
              performance: {
                description: "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
                title: "Optimisation de la performance"
              }
            },
            save: "Enregistrer",
            service: {
              disableAll: {
                description: "Utilisez ce commutateur pour activer ou d\xe9sactiver tous les services.",
                title: "Activer ou d\xe9sactiver tous les services"
              },
              optOut: {
                description: "Ce service est charg\xe9 par d\xe9faut (mais vous pouvez le d\xe9sactiver)",
                title: "(opt-out)"
              },
              purpose: "Objet",
              purposes: "Fins",
              required: {
                description: "Ce service est toujours n\xe9cessaire",
                title: "(toujours requis)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Aceptar todas",
            acceptSelected: "Confirmar Preferencias",
            close: "Pechar",
            consentModal: {
              description: "Aqu\xed pode avaliar e personalizar os servizos que nos gustar\xeda utilizar neste sitio web. \xa1Vostede decide! Habilite ou deshabilite os servicios como lle conve\xf1a.",
              privacyPolicy: {
                name: "pol\xedtica de privacidade",
                text: "Para saber m\xe1is, por favor lea a nosa {privacyPolicy}."
              },
              title: "Servizos que nos gustar\xeda utilizar"
            },
            consentNotice: {
              changeDescription: "Houbo cambios nas cookies dende a s\xfaa \xfaltima visita. Debe renovar o seu consentimento.",
              description: "\xa1Ola! \xbfPoder\xedamos habilitar alg\xfans servizos adicionais para {purposes}? Sempre poder\xe1 cambiar ou retirar o s\xe9u consentimento m\xe1is tarde.",
              imprint: {
                name: "Imprimir"
              },
              learnMore: "Quero elixir",
              privacyPolicy: {
                name: "pol\xedtica de privacidade"
              },
              testing: "\xa1Modo de proba!"
            },
            decline: "Descartar todas",
            ok: "De acordo",
            poweredBy: "Implementado por <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> con <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "pol\xedtica de privacidade",
              text: "Para saber m\xe1is, por favor lea a nosa {privacyPolicy}."
            },
            purposeItem: {
              service: "servizo",
              services: "servizos"
            },
            purposes: {
              advertising: {
                description: "Estes servizos procesan informaci\xf3n persoal para mostrarlle anuncios personalizados ou basados en intereses.",
                title: "Publicidade"
              },
              functional: {
                description: "Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a p\xe1xina non funcionar\xeda correctamente.",
                title: "Prestaci\xf3n de servizos"
              },
              marketing: {
                description: "Estes servizos procesan informaci\xf3n persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.",
                title: "Marketing"
              },
              performance: {
                description: "Estes servizos procesan informaci\xf3n persoal para optimizar o servizo que ofrece este sitio.",
                title: "Optimizaci\xf3n do rendimento"
              }
            },
            save: "Gardar",
            service: {
              disableAll: {
                description: "Utilice este interruptor para activar ou desactivar todos os servizos.",
                title: "Activar ou desactivar todos os servizos"
              },
              optOut: {
                description: "Este servizo est\xe1 habilitado por defecto (pero pode optar polo contrario)",
                title: "(desactivar)"
              },
              purpose: "Finalidade",
              purposes: "Finalidades",
              required: {
                description: "Este servizo \xe9 necesario sempre",
                title: "(sempre requirido)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Haszn\xe1ld ezt a kapcsol\xf3t az \xf6sszes alkalmaz\xe1s enged\xe9lyez\xe9s\xe9hez/letilt\xe1s\xe1hoz.",
                title: "\xd6sszes app \xe1tkapcsol\xe1sa"
              },
              optOut: {
                description: "Ez az alkalmaz\xe1s alap\xe9rtelmez\xe9s szerint bet\xf6lt\xf6tt (de ki lehet kapcsolni)",
                title: "(leiratkoz\xe1s)"
              },
              purpose: "C\xe9l",
              purposes: "C\xe9lok",
              required: {
                description: "Ez az alkalmaz\xe1s mindig k\xf6telező",
                title: "(mindig k\xf6telező)"
              }
            },
            close: "Elvet",
            consentModal: {
              description: "Itt l\xe1thatod \xe9s testreszabhatod az r\xf3lad gyűjt\xf6tt inform\xe1ci\xf3kat.",
              privacyPolicy: {
                name: "adatv\xe9delmi ir\xe1nyelveinket",
                text: "Tov\xe1bbi inform\xe1ci\xf3\xe9rt k\xe9rj\xfck, olvassd el az {privacyPolicy}."
              },
              title: "Inform\xe1ci\xf3k, amiket gyűjt\xfcnk"
            },
            consentNotice: {
              changeDescription: "Az utols\xf3 l\xe1togat\xe1s \xf3ta v\xe1ltoz\xe1sok t\xf6rt\xe9ntek, k\xe9rj\xfck, friss\xedtsd a hozz\xe1j\xe1rul\xe1sodat.",
              description: "Az szem\xe9lyes adataidat \xf6sszegyűjtj\xfck \xe9s feldolgozzuk az al\xe1bbi c\xe9lokra: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Tudj meg t\xf6bbet",
              privacyPolicy: {
                name: "adatv\xe9delmi ir\xe1nyelveinket"
              }
            },
            decline: "Ment\xe9s",
            ok: "Elfogad",
            poweredBy: "Az <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> és a <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a> által végrehajtott",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Save"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Prihvati sve",
            acceptSelected: "",
            acceptSelected_en: "Prihvati odabrane",
            service: {
              disableAll: {
                description: "Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.",
                title: "Izmeijeni sve"
              },
              optOut: {
                description: "Ova aplikacija je učitana automatski (ali je možete onemogućiti)",
                title: "(onemogućite)"
              },
              purpose: "Svrha",
              purposes: "Svrhe",
              required: {
                description: "Ova aplikacija je uvijek obavezna",
                title: "(obavezna)"
              }
            },
            close: "Zatvori",
            consentModal: {
              description: "Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.",
              privacyPolicy: {
                name: "pravila privatnosti",
                text: "Za više informacije pročitajte naša {privacyPolicy}."
              },
              title: "Informacije koje prikupljamo"
            },
            consentNotice: {
              changeDescription: "Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.",
              description: "Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Saznajte više",
              privacyPolicy: {
                name: "pravila privatnosti"
              }
            },
            decline: "Odbij",
            ok: "U redu",
            poweredBy: "Izvaja <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> s podjetjem <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Spremi"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Accettare tutti",
            acceptSelected: "Confermare le preferenze",
            close: "Chiudi",
            consentModal: {
              description: "Qui potete attivare e/o disattivare i cookie in base alle vostre preferenze, ad eccezione di quelli strettamente necessari per il funzionamento della piattaforma. Facendo clic su “Conferma preferenze”, la selezione dei cookie effettuata verrà salvata. Se non avete selezionato alcuna opzione, premere questo pulsante equivale a rifiutare tutti i cookie. È inoltre possibile accettare o rifiutare tutti i cookie premendo il pulsante “Accetta tutto” o “Rifiuta tutto”.",
              privacyPolicy: {
                name: "Informativa sui cookie",
                text: "Per ulteriori informazioni, consultare la nostra {privacyPolicy}."
              },
              title: "Impostazioni dei cookie"
            },
            consentNotice: {
              changeDescription: "Dall'ultima visita sono state apportate modifiche ai cookie. È necessario rinnovare il consenso.",
              description: "<h1>Consenso ai Cookies</h1><span class='cookie-description'>Utilizziamo i cookie per scopi analitici e per visualizzare pubblicità personalizzata in base alle vostre preferenze. Condividiamo le informazioni sull'utilizzo del nostro sito con i nostri partner di social media, pubblicità e analisi, che possono combinarle con altre informazioni che avete fornito loro o che hanno raccolto dall'utilizzo dei loro servizi. È possibile configurare o rifiutare i cookie facendo clic su  Preferenze. È inoltre possibile accettare o rifiutare tutto premendo il pulsante “Accetta tutto” o “Rifiuta tutto”. Per ulteriori informazioni, consultare la nostra {privacyPolicy} e la nostra <a href=" + urlPoliticas.privacidad.it + " target='_blank'>Privacy Policy</a>.<span>",
              imprint: {
                name: "Impronta"
              },
              learnMore: "Preferenze",
              privacyPolicy: {
                name: "Informativa sui cookie"
              },
              testing: "Modalit\xe0 di test!"
            },
            contextualConsent: {
              acceptAlways: "Sempre",
              acceptOnce: "S\xec",
              description: "Vuole caricare contenuti esterni forniti da {title}?"
            },
            decline: "Rifiutare tutti",
            ok: "Accettare tutti",
            poweredBy: "Implementato da <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> con <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "Informativa sui cookie",
              text: "Per saperne di pi\xf9, legga la nostra {privacyPolicy}."
            },
            purposeItem: {
              service: "servizio",
              services: "servizi"
            },
            purposes: {
              advertising: {
                description: "Utilizzati per creare un profilo dei vostri interessi e mostrarvi pubblicità pertinenti su altri siti. Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione univoca del browser e del dispositivo di accesso a Internet.",
                title: "Marketing"
              },
              functional: {
                description: "Necessari per il funzionamento del sito web e non possono essere disabilitati sui nostri sistemi. Di solito sono impostati per rispondere alle azioni che l'utente compie per ricevere i servizi, come la regolazione delle preferenze sulla privacy, l'accesso al sito o la compilazione di moduli.",
                title: "Funzionale"
              },
              marketing: {
                description: "Questi servizi elaborano le informazioni personali per mostrarvi contenuti pertinenti su prodotti, servizi o argomenti che potrebbero interessarvi.",
                title: "Marketing"
              },
              performance: {
                description: "Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito.",
                title: "Ottimizzazione delle prestazioni"
              }
            },
            save: "Salva",
            service: {
              disableAll: {
                description: "Utilizzi questo interruttore per attivare o disattivare tutti i cookie tranne quelli richiesti.",
                title: "Attivare o Disattivare tutti i Cookie"
              },
              optOut: {
                description: "Questo servizio \xe8 caricato di default (ma \xe8 possibile scegliere di non usufruirne)",
                title: "(opt-out)"
              },
              purpose: "Scopo dell",
              purposes: "Finalit\xe0",
              required: {
                description: "Questo servizio \xe8 sempre richiesto",
                title: "(sempre richiesto)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Accepteer alle",
            acceptSelected: "Geselecteerde",
            close: "Sluit",
            consentModal: {
              description: "Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.",
              privacyPolicy: {
                name: "privacybeleid",
                text: "Voor meer informatie kunt u ons {privacyPolicy} lezen."
              },
              title: "Diensten die we graag willen gebruiken"
            },
            consentNotice: {
              changeDescription: "Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.",
              description: "Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.",
              imprint: {
                name: "impressum"
              },
              learnMore: "Laat me kiezen",
              privacyPolicy: {
                name: "privacybeleid"
              },
              testing: "Testmodus!"
            },
            contextualConsent: {
              acceptAlways: "Altijd",
              acceptOnce: "Ja",
              description: "Wilt u externe content laden die door {title} wordt aangeleverd ?"
            },
            decline: "Ik weiger",
            ok: "Dat is ok\xe9",
            poweredBy: "Uitgevoerd door <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> met <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "privacybeleid",
              text: "Voor meer informatie kunt u ons {privacyPolicy} lezen."
            },
            purposeItem: {
              service: "service",
              services: "diensten"
            },
            purposes: {
              advertising: {
                description: "Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.",
                title: "Reclame"
              },
              functional: {
                description: "Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n",
                title: "Dienstverlening"
              },
              marketing: {
                description: "Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u ge\xefnteresseerd zou kunnen zijn.",
                title: "Marketing"
              },
              performance: {
                description: "Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n",
                title: "Optimalisatie van de prestaties"
              }
            },
            save: "Opslaan",
            service: {
              disableAll: {
                description: "Gebruik deze schakelaar om alle diensten in of uit te schakelen.",
                title: "Alle diensten in- of uitschakelen"
              },
              optOut: {
                description: "Deze diensten worden standaard geladen (maar u kunt zich afmelden)",
                title: "(opt-out)"
              },
              purpose: "Verwerkingsdoel",
              purposes: "Verwerkingsdoeleinden",
              required: {
                description: "Deze diensten zijn altijd nodig",
                title: "(altijd nodig)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Godtar alle",
            acceptSelected: "Godtar valgt",
            service: {
              disableAll: {
                description: "Bruk denne for \xe5 skru av/p\xe5 alle apper.",
                title: "Bytt alle apper"
              },
              optOut: {
                description: "Denne appen er lastet som standard (men du kan skru det av)",
                title: "(opt-out)"
              },
              purpose: "\xc5rsak",
              purposes: "\xc5rsaker",
              required: {
                description: "Denne applikasjonen er alltid p\xe5krevd",
                title: "(alltid p\xe5krevd)"
              }
            },
            close: "",
            close_en: "Close",
            consentModal: {
              description: "Her kan du se og velge hvilken informasjon vi samler inn om deg.",
              privacyPolicy: {
                name: "personvernerkl\xe6ring",
                text: "For \xe5 l\xe6re mer, vennligst les v\xe5r {privacyPolicy}."
              },
              title: "Informasjon vi samler inn"
            },
            consentNotice: {
              changeDescription: "Det har skjedd endringer siden ditt siste bes\xf8k, vennligst oppdater ditt samtykke.",
              description: "Vi samler inn og prosesserer din personlige informasjon av f\xf8lgende \xe5rsaker: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "L\xe6r mer",
              privacyPolicy: {
                name: "personvernerkl\xe6ring"
              }
            },
            decline: "Avsl\xe5",
            ok: "OK",
            poweredBy: "Implementert av <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> i samarbeid med <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Opslaan"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.",
                title: "Comutați \xeentre toate aplicațiile"
              },
              optOut: {
                description: "Această aplicație este \xeencărcată \xeen mod implicit (dar puteți renunța)",
                title: "(opt-out)"
              },
              purpose: "Scop",
              purposes: "Scopuri",
              required: {
                description: "Această aplicație este \xeentotdeauna necesară",
                title: "(\xeentotdeauna necesar)"
              }
            },
            close: "",
            close_en: "Close",
            consentModal: {
              description: "Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.",
              privacyPolicy: {
                name: "politica privacy",
                text: "Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}."
              },
              title: "Informațiile pe care le colectăm"
            },
            consentNotice: {
              changeDescription: "Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțăm\xe2ntul.",
              description: "Colectăm și procesăm informațiile dvs. personale \xeen următoarele scopuri: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Află mai multe",
              privacyPolicy: {
                name: "politica privacy"
              }
            },
            decline: "Renunță",
            ok: "OK",
            poweredBy: "Implementat de <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> împreună cu <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Salvează"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.",
                title: "Izmeni sve"
              },
              optOut: {
                description: "Ova aplikacija je učitana automatski (ali je možete onesposobiti)",
                title: "(onesposobite)"
              },
              purpose: "Svrha",
              purposes: "Svrhe",
              required: {
                description: "Ova aplikacija je uvek neophodna",
                title: "(neophodna)"
              }
            },
            close: "Zatvori",
            consentModal: {
              description: "Ovde možete videti i podesiti informacije koje prikupljamo o Vama.",
              privacyPolicy: {
                name: "politiku privatnosti",
                text: "Za više informacije pročitajte našu {privacyPolicy}."
              },
              title: "Informacije koje prikupljamo"
            },
            consentNotice: {
              changeDescription: "Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.",
              description: "Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Saznajte više",
              privacyPolicy: {
                name: "politiku privatnosti"
              }
            },
            decline: "Odbij",
            ok: "U redu",
            poweredBy: "Izvaja <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> s podjetjem <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Sačuvaj"
          }
        }, function (e, t) {
          e.exports = {
            consentModal: {
              title: "Информације које прикупљамо",
              description: "Овде можете видет и подесити информације које прикупљамо о Вама.\n",
              privacyPolicy: {
                name: "политику приватности",
                text: "За више информација прочитајте нашу {privacyPolicy}.\n"
              }
            },
            consentNotice: {
              changeDescription: "Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.",
              description: "Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n",
              learnMore: "Сазнајте више",
              privacyPolicy: {
                name: "политику приватности"
              }
            },
            ok: "У реду",
            save: "Сачувај",
            decline: "Одбиј",
            close: "Затвори",
            service: {
              disableAll: {
                title: "Измени све",
                description: "Користите овај прекидач да омогућите/онеспособите све апликације одједном."
              },
              optOut: {
                title: "(онеспособите)",
                description: "Ова апликација је учитана аутоматски (али је можете онеспособити)"
              },
              required: {
                title: "(неопходна)",
                description: "Ова апликација је увек неопходна."
              },
              purposes: "Сврхе",
              purpose: "Сврха"
            },
            poweredBy: "Реалізовано <a href='" + urlPoweredby.ndc.es + "' target='_blank'> НДЦ </a> спільно з <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Acceptera alla",
            acceptSelected: "Acceptera markerat",
            service: {
              disableAll: {
                description: "Anv\xe4nd detta reglage f\xf6r att aktivera/avaktivera samtliga appar.",
                title: "\xc4ndra f\xf6r alla appar"
              },
              optOut: {
                description: "Den h\xe4r appen laddas som standardinst\xe4llning (men du kan avaktivera den)",
                title: "(Avaktivera)"
              },
              purpose: "Syfte",
              purposes: "Syften",
              required: {
                description: "Den h\xe4r applikationen kr\xe4vs alltid",
                title: "(Kr\xe4vs alltid)"
              }
            },
            close: "St\xe4ng",
            consentModal: {
              description: "H\xe4r kan du se och anpassa vilken information vi samlar om dig.",
              privacyPolicy: {
                name: "Integritetspolicy",
                text: "F\xf6r att veta mer, l\xe4s v\xe5r {privacyPolicy}."
              },
              title: "Information som vi samlar"
            },
            consentNotice: {
              changeDescription: "Det har skett f\xf6r\xe4ndringar sedan ditt senaste bes\xf6k, var god uppdatera ditt medgivande.",
              description: "Vi samlar och bearbetar din personliga data i f\xf6ljande syften: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "L\xe4s mer",
              privacyPolicy: {
                name: "Integritetspolicy"
              }
            },
            decline: "Avb\xf6j",
            ok: "OK",
            poweredBy: "Genomf\xf6rt av <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> med  <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Spara"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            service: {
              disableAll: {
                description: "Toplu a\xe7ma/kapama i\xe7in bu d\xfcğmeyi kullanabilirsin.",
                title: "T\xfcm uygulamaları a\xe7/kapat"
              },
              optOut: {
                description: "Bu uygulama varsayılanda y\xfcklendi (ancak iptal edebilirsin)",
                title: "(isteğe bağlı)"
              },
              purpose: "Ama\xe7",
              purposes: "Ama\xe7lar",
              required: {
                description: "Bu uygulama her zaman gerekli",
                title: "(her zaman gerekli)"
              }
            },
            close: "Kapat",
            consentModal: {
              description: "Hakkınızda topladığımız bilgileri burada g\xf6rebilir ve \xf6zelleştirebilirsiniz.",
              privacyPolicy: {
                name: "Gizlilik Politikası",
                text: "Daha fazlası i\xe7in l\xfctfen {privacyPolicy} sayfamızı okuyun."
              },
              title: "Sakladığımız bilgiler"
            },
            consentNotice: {
              changeDescription: "Son ziyaretinizden bu yana değişiklikler oldu, l\xfctfen se\xe7iminizi g\xfcncelleyin.",
              description: "Kişisel bilgilerinizi aşağıdaki ama\xe7larla saklıyor ve işliyoruz: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Daha fazla bilgi",
              privacyPolicy: {
                name: "Gizlilik Politikası"
              }
            },
            decline: "Reddet",
            ok: "Tamam",
            poweredBy: "<a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> tarafından <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a> ile birlikte uygulandı",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Kaydet"
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Zaakceptować wszystkie",
            acceptSelected: "Zaakceptować wybrany",
            close: "Blisko",
            consentModal: {
              description: "Tutaj mogą Państwo ocenić i dostosować usługi, z kt\xf3rych chcielibyśmy skorzystać na tej stronie. Jesteście Państwo odpowiedzialni! Mogą Państwo włączać lub wyłączać usługi według własnego uznania.",
              privacyPolicy: {
                name: "polityka prywatności",
                text: "Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."
              },
              title: "Usługi, z kt\xf3rych chcielibyśmy skorzystać"
            },
            consentNotice: {
              changeDescription: "Od czasu ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.",
              description: "Witam! Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo p\xf3źniej zmienić lub wycofać swoją zgodę.",
              imprint: {
                name: "odcisk"
              },
              learnMore: "Pozw\xf3l mi wybrać",
              privacyPolicy: {
                name: "polityka prywatności"
              },
              testing: "Tryb testowy!"
            },
            contextualConsent: {
              acceptAlways: "Zawsze",
              acceptOnce: "Tak",
              description: "Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?"
            },
            decline: "Odmawiam",
            ok: "To jest ok.",
            poweredBy: "Wdrożone przez <a href='" + urlPoweredby.ndc.es + "' target='_blank'> NDC </a> we współpracy z <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            privacyPolicy: {
              name: "polityka prywatności",
              text: "Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."
            },
            purposeItem: {
              service: "usługa",
              services: "usług"
            },
            purposes: {
              advertising: {
                description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach ogłoszeń.",
                title: "Reklama"
              },
              functional: {
                description: "Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie usługa nie działałaby prawidłowo.\n",
                title: "Świadczenie usług"
              },
              marketing: {
                description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produkt\xf3w, usług lub temat\xf3w, kt\xf3rymi mogą być Państwo zainteresowani.",
                title: "Marketing"
              },
              performance: {
                description: "Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n",
                title: "Optymalizacja wydajności"
              }
            },
            save: "Z wyjątkiem",
            service: {
              disableAll: {
                description: "Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.",
                title: "Włączać lub wyłączać wszystkie usługi"
              },
              optOut: {
                description: "Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)",
                title: "(opt-out)"
              },
              purpose: "Cel",
              purposes: "Cele",
              required: {
                description: "Usługi te są zawsze wymagane",
                title: "(zawsze wymagane)"
              }
            }
          }
        }, function (e, t) {
          e.exports = {
            acceptAll: "Принять всё",
            acceptSelected: "Принять выбранные",
            service: {
              disableAll: {
                description: "Используйте этот переключатель, чтобы включить/отключить все приложения.",
                title: "Переключить все приложения"
              },
              optOut: {
                description: "Это приложение включено по умолчанию (но вы можете отказаться)",
                title: "(отказаться)"
              },
              purpose: "Намерение",
              purposes: "Намерения",
              required: {
                description: "Это обязательное приложение",
                title: "(всегда обязательный)"
              }
            },
            close: "Закрыть",
            consentModal: {
              description: "Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.",
              privacyPolicy: {
                name: "Соглашение",
                text: "Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}."
              },
              title: "Информация, которую мы сохраняем"
            },
            consentNotice: {
              changeDescription: "Со времени вашего последнего визита произошли изменения, обновите своё согласие.",
              description: "Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.",
              imprint: {
                name: "",
                name_en: "imprint"
              },
              learnMore: "Настроить",
              privacyPolicy: {
                name: "политика конфиденциальности"
              }
            },
            decline: "Отклонить",
            ok: "Принять",
            poweredBy: "Выполнено <a href='" + urlPoweredby.ndc.es + "' target='_blank'> НДЦ </a> совместно с компанией <a href='" + urlPoweredby.klaro.es + "' target='_blank'> Klaro </a>",
            purposeItem: {
              service: "",
              services: ""
            },
            save: "Сохранить"
          }
        }, function (e, t) {
          var n;
          n = function () {
            return this
          }();
          try {
            n = n || Function("return this")()
          } catch (o) {
            "object" == typeof window && (n = window)
          }
          e.exports = n
        }, function (e, t, n) {
          var o = n(2),
            r = n(67),
            i = o.WeakMap;
          e.exports = "function" == typeof i && /native code/.test(r(i))
        }, function (e, t, n) {
          var o = n(8),
            r = n(16),
            i = n(9),
            a = n(45);
          e.exports = o ? Object.defineProperties : function (e, t) {
            i(e);
            for (var n, o = a(t), c = o.length, s = 0; c > s;) r.f(e, n = o[s++], t[n]);
            return e
          }
        }, function (e, t, n) {
          var o = n(18),
            r = n(56).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e.exports.f = function (e) {
            return a && "[object Window]" == i.call(e) ? function (e) {
              try {
                return r(e)
              } catch (t) {
                return a.slice()
              }
            }(e) : r(o(e))
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(47).find,
            i = n(75),
            a = n(36),
            c = !0,
            s = a("find");
          "find" in [] && [,].find(function () {
            c = !1
          }), o({
            target: "Array",
            proto: !0,
            forced: c || !s
          }, {
            find: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          }), i("find")
        }, function (e, t, n) {
          "use strict";
          var o = n(48),
            r = n(23),
            i = n(112),
            a = n(113),
            c = n(19),
            s = n(60),
            l = n(114);
          e.exports = function (e) {
            var t, n, u, p, d, f, v = r(e),
              m = "function" == typeof this ? this : Array,
              h = arguments.length,
              y = h > 1 ? arguments[1] : void 0,
              g = void 0 !== y,
              b = l(v),
              k = 0;
            if (g && (y = o(y, h > 2 ? arguments[2] : void 0, 2)), null == b || m == Array && a(b))
              for (n = new m(t = c(v.length)); t > k; k++) f = g ? y(v[k], k) : v[k], s(n, k, f);
            else
              for (d = (p = b.call(v)).next, n = new m; !(u = d.call(p)).done; k++) f = g ? i(p, y, [u.value, k], !0) : u.value, s(n, k, f);
            return n.length = k, n
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(116).IteratorPrototype,
            r = n(44),
            i = n(42),
            a = n(46),
            c = n(49),
            s = function () {
              return this
            };
          e.exports = function (e, t, n) {
            var l = t + " Iterator";
            return e.prototype = r(o, {
              next: i(1, n)
            }), a(e, l, !1, !0), c[l] = s, e
          }
        }, function (e, t, n) {
          var o = n(4);
          e.exports = function (e) {
            if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
          }
        }, function (e, t, n) {
          var o = n(1);
          e.exports = !o(function () {
            return Object.isExtensible(Object.preventExtensions({}))
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(77),
            r = n(115);
          e.exports = o ? ({}).toString : function () {
            return "[object " + r(this) + "]"
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(35),
            r = n(4),
            i = [].slice,
            a = {},
            c = function (e, t, n) {
              if (!(t in a)) {
                for (var o = [], r = 0; r < t; r++) o[r] = "a[" + r + "]";
                a[t] = Function("C,a", "return new C(" + o.join(",") + ")")
              }
              return a[t](e, n)
            };
          e.exports = Function.bind || function (e) {
            var t = o(this),
              n = i.call(arguments, 1),
              a = function () {
                var o = n.concat(i.call(arguments));
                return this instanceof a ? c(t, o.length, o) : t.apply(e, o)
              };
            return r(t.prototype) && (a.prototype = t.prototype), a
          }
        }, function (e, t, n) {
          var o = n(0),
            r = n(2),
            i = n(74),
            a = [].slice,
            c = function (e) {
              return function (t, n) {
                var o = arguments.length > 2,
                  r = o ? a.call(arguments, 2) : void 0;
                return e(o ? function () {
                  ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, n)
              }
            };
          o({
            global: !0,
            bind: !0,
            forced: /MSIE .\./.test(i)
          }, {
            setTimeout: c(r.setTimeout),
            setInterval: c(r.setInterval)
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(172);
  
          function r() { }
  
          function i() { }
          i.resetWarningCache = r, e.exports = function () {
            function e(e, t, n, r, i, a) {
              if (a !== o) {
                var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
              }
            }
  
            function t() {
              return e
            }
            e.isRequired = e;
            var n = {
              array: e,
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
              checkPropTypes: i,
              resetWarningCache: r
            };
            return n.PropTypes = n, n
          }
        }, function (e, t, n) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }, function (e, t, n) {
          "use strict";
          var o = n(8),
            r = n(1),
            i = n(45),
            a = n(71),
            c = n(51),
            s = n(23),
            l = n(52),
            u = Object.assign,
            p = Object.defineProperty;
          e.exports = !u || r(function () {
            if (o && 1 !== u({
              b: 1
            }, u(p({}, "a", {
              enumerable: !0,
              get: function () {
                p(this, "b", {
                  value: 3,
                  enumerable: !1
                })
              }
            }), {
              b: 2
            })).b) return !0;
            var e = {},
              t = {},
              n = Symbol();
            return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (e) {
              t[e] = e
            }), 7 != u({}, e)[n] || "abcdefghijklmnopqrst" != i(u({}, t)).join("")
          }) ? function (e, t) {
            for (var n = s(e), r = arguments.length, u = 1, p = a.f, d = c.f; r > u;)
              for (var f, v = l(arguments[u++]), m = p ? i(v).concat(p(v)) : i(v), h = m.length, y = 0; h > y;) f = m[y++], o && !d.call(v, f) || (n[f] = v[f]);
            return n
          } : u
        }, function (e, t, n) {
          "use strict";
          var o, r = n(0),
            i = n(27).f,
            a = n(19),
            c = n(95),
            s = n(26),
            l = n(96),
            u = n(33),
            p = "".endsWith,
            d = Math.min,
            f = l("endsWith");
          r({
            target: "String",
            proto: !0,
            forced: !!(u || f || !(o = i(String.prototype, "endsWith")) || o.writable) && !f
          }, {
            endsWith: function (e) {
              var t = String(s(this));
              c(e);
              var n = arguments.length > 1 ? arguments[1] : void 0,
                o = a(t.length),
                r = void 0 === n ? o : d(a(n), o),
                i = String(e);
              return p ? p.call(t, i, r) : t.slice(r - i.length, r) === i
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o = n(90),
            r = n(9),
            i = n(19),
            a = n(26),
            c = n(92),
            s = n(93);
          o("match", 1, function (e, t, n) {
            return [function (t) {
              var n = a(this),
                o = null == t ? void 0 : t[e];
              return void 0 !== o ? o.call(t, n) : RegExp(t)[e](String(n))
            }, function (e) {
              var o = n(t, e, this);
              if (o.done) return o.value;
              var a = r(e),
                l = String(this);
              if (!a.global) return s(a, l);
              var u = a.unicode;
              a.lastIndex = 0;
              for (var p, d = [], f = 0; null !== (p = s(a, l));) {
                var v = String(p[0]);
                d[f] = v, "" === v && (a.lastIndex = c(l, i(a.lastIndex), u)), f++
              }
              return 0 === f ? null : d
            }]
          })
        }, function (e, t, n) {
          var o = n(8),
            r = n(45),
            i = n(18),
            a = n(51).f,
            c = function (e) {
              return function (t) {
                for (var n, c = i(t), s = r(c), l = s.length, u = 0, p = []; l > u;) n = s[u++], o && !a.call(c, n) || p.push(e ? [n, c[n]] : c[n]);
                return p
              }
            };
          e.exports = {
            entries: c(!0),
            values: c(!1)
          }
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(69).includes,
            i = n(75);
          o({
            target: "Array",
            proto: !0,
            forced: !n(36)("indexOf", {
              ACCESSORS: !0,
              1: 0
            })
          }, {
            includes: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          }), i("includes")
        }, function (e, t, n) {
          "use strict";
          var o = n(0),
            r = n(95),
            i = n(26);
          o({
            target: "String",
            proto: !0,
            forced: !n(96)("includes")
          }, {
            includes: function (e) {
              return !!~String(i(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        }, function (e, t, n) {
          "use strict";
          var o, r, i, a, c = n(0),
            s = n(33),
            l = n(2),
            u = n(34),
            p = n(180),
            d = n(22),
            f = n(122),
            v = n(46),
            m = n(85),
            h = n(4),
            y = n(35),
            g = n(84),
            b = n(28),
            k = n(67),
            $ = n(83),
            _ = n(78),
            x = n(125),
            w = n(131).set,
            z = n(181),
            P = n(182),
            S = n(183),
            A = n(133),
            j = n(184),
            C = n(32),
            O = n(58),
            E = n(3),
            D = n(73),
            I = E("species"),
            N = "Promise",
            M = C.get,
            q = C.set,
            T = C.getterFor(N),
            R = p,
            U = l.TypeError,
            L = l.document,
            W = l.process,
            H = u("fetch"),
            B = A.f,
            F = B,
            K = "process" == b(W),
            V = !!(L && L.createEvent && l.dispatchEvent),
            G = O(N, function () {
              if (!(k(R) !== String(R)) && (66 === D || !K && "function" != typeof PromiseRejectionEvent) || s && !R.prototype.finally) return !0;
              if (D >= 51 && /native code/.test(R)) return !1;
              var e = R.resolve(1),
                t = function (e) {
                  e(function () { }, function () { })
                };
              return (e.constructor = {})[I] = t, !(e.then(function () { }) instanceof t)
            }),
            Z = G || !_(function (e) {
              R.all(e).catch(function () { })
            }),
            Y = function (e) {
              var t;
              return !(!h(e) || "function" != typeof (t = e.then)) && t
            },
            Q = function (e, t, n) {
              if (!t.notified) {
                t.notified = !0;
                var o = t.reactions;
                z(function () {
                  for (var r = t.value, i = 1 == t.state, a = 0; o.length > a;) {
                    var c, s, l, u = o[a++],
                      p = i ? u.ok : u.fail,
                      d = u.resolve,
                      f = u.reject,
                      v = u.domain;
                    try {
                      p ? (i || (2 === t.rejection && et(e, t), t.rejection = 1), !0 === p ? c = r : (v && v.enter(), c = p(r), v && (v.exit(), l = !0)), c === u.promise ? f(U("Promise-chain cycle")) : (s = Y(c)) ? s.call(c, d, f) : d(c)) : f(r)
                    } catch (m) {
                      v && !l && v.exit(), f(m)
                    }
                  }
                  t.reactions = [], t.notified = !1, n && !t.rejection && J(e, t)
                })
              }
            },
            X = function (e, t, n) {
              var o, r;
              V ? ((o = L.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), l.dispatchEvent(o)) : o = {
                promise: t,
                reason: n
              }, (r = l["on" + e]) ? r(o) : "unhandledrejection" === e && S("Unhandled promise rejection", n)
            },
            J = function (e, t) {
              w.call(l, function () {
                var n, o = t.value;
                if (ee(t) && (n = j(function () {
                  K ? W.emit("unhandledRejection", o, e) : X("unhandledrejection", e, o)
                }), t.rejection = K || ee(t) ? 2 : 1, n.error)) throw n.value
              })
            },
            ee = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            et = function (e, t) {
              w.call(l, function () {
                K ? W.emit("rejectionHandled", e) : X("rejectionhandled", e, t.value)
              })
            },
            en = function (e, t, n, o) {
              return function (r) {
                e(t, n, r, o)
              }
            },
            eo = function (e, t, n, o) {
              t.done || (t.done = !0, o && (t = o), t.value = n, t.state = 2, Q(e, t, !0))
            },
            er = function (e, t, n, o) {
              if (!t.done) {
                t.done = !0, o && (t = o);
                try {
                  if (e === n) throw U("Promise can't be resolved itself");
                  var r = Y(n);
                  r ? z(function () {
                    var o = {
                      done: !1
                    };
                    try {
                      r.call(n, en(er, e, o, t), en(eo, e, o, t))
                    } catch (i) {
                      eo(e, o, i, t)
                    }
                  }) : (t.value = n, t.state = 1, Q(e, t, !1))
                } catch (i) {
                  eo(e, {
                    done: !1
                  }, i, t)
                }
              }
            };
          G && (R = function (e) {
            g(this, R, N), y(e), o.call(this);
            var t = M(this);
            try {
              e(en(er, this, t), en(eo, this, t))
            } catch (n) {
              eo(this, t, n)
            }
          }, (o = function (e) {
            q(this, {
              type: N,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: 0,
              value: void 0
            })
          }).prototype = f(R.prototype, {
            then: function (e, t) {
              var n = T(this),
                o = B(x(this, R));
              return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o.domain = K ? W.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n.state && Q(this, n, !1), o.promise
            },
            catch: function (e) {
              return this.then(void 0, e)
            }
          }), r = function () {
            var e = new o,
              t = M(e);
            this.promise = e, this.resolve = en(er, e, t), this.reject = en(eo, e, t)
          }, A.f = B = function (e) {
            return e === R || e === i ? new r(e) : F(e)
          }, s || "function" != typeof p || (a = p.prototype.then, d(p.prototype, "then", function (e, t) {
            var n = this;
            return new R(function (e, t) {
              a.call(n, e, t)
            }).then(e, t)
          }, {
            unsafe: !0
          }), "function" == typeof H && c({
            global: !0,
            enumerable: !0,
            forced: !0
          }, {
            fetch: function (e) {
              return P(R, H.apply(l, arguments))
            }
          }))), c({
            global: !0,
            wrap: !0,
            forced: G
          }, {
            Promise: R
          }), v(R, N, !1, !0), m(N), i = u(N), c({
            target: N,
            stat: !0,
            forced: G
          }, {
            reject: function (e) {
              var t = B(this);
              return t.reject.call(void 0, e), t.promise
            }
          }), c({
            target: N,
            stat: !0,
            forced: s || G
          }, {
            resolve: function (e) {
              return P(s && this === i ? R : this, e)
            }
          }), c({
            target: N,
            stat: !0,
            forced: Z
          }, {
            all: function (e) {
              var t = this,
                n = B(t),
                o = n.resolve,
                r = n.reject,
                i = j(function () {
                  var n = y(t.resolve),
                    i = [],
                    a = 0,
                    c = 1;
                  $(e, function (e) {
                    var s = a++,
                      l = !1;
                    i.push(void 0), c++, n.call(t, e).then(function (e) {
                      l || (l = !0, i[s] = e, --c || o(i))
                    }, r)
                  }), --c || o(i)
                });
              return i.error && r(i.value), n.promise
            },
            race: function (e) {
              var t = this,
                n = B(t),
                o = n.reject,
                r = j(function () {
                  var r = y(t.resolve);
                  $(e, function (e) {
                    r.call(t, e).then(n.resolve, o)
                  })
                });
              return r.error && o(r.value), n.promise
            }
          })
        }, function (e, t, n) {
          var o = n(2);
          e.exports = o.Promise
        }, function (e, t, n) {
          var o, r, i, a, c, s, l, u, p = n(2),
            d = n(27).f,
            f = n(28),
            v = n(131).set,
            m = n(132),
            h = p.MutationObserver || p.WebKitMutationObserver,
            y = p.process,
            g = p.Promise,
            b = "process" == f(y),
            k = d(p, "queueMicrotask"),
            $ = k && k.value;
          $ || (o = function () {
            var e, t;
            for (b && (e = y.domain) && e.exit(); r;) {
              t = r.fn, r = r.next;
              try {
                t()
              } catch (n) {
                throw r ? a() : i = void 0, n
              }
            }
            i = void 0, e && e.enter()
          }, b ? a = function () {
            y.nextTick(o)
          } : h && !m ? (c = !0, s = document.createTextNode(""), new h(o).observe(s, {
            characterData: !0
          }), a = function () {
            s.data = c = !c
          }) : g && g.resolve ? (u = (l = g.resolve(void 0)).then, a = function () {
            u.call(l, o)
          }) : a = function () {
            v.call(p, o)
          }), e.exports = $ || function (e) {
            var t = {
              fn: e,
              next: void 0
            };
            i && (i.next = t), r || (r = t, a()), i = t
          }
        }, function (e, t, n) {
          var o = n(9),
            r = n(4),
            i = n(133);
          e.exports = function (e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise
          }
        }, function (e, t, n) {
          var o = n(2);
          e.exports = function (e, t) {
            var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
          }
        }, function (e, t) {
          e.exports = function (e) {
            try {
              return {
                error: !1,
                value: e()
              }
            } catch (t) {
              return {
                error: !0,
                value: t
              }
            }
          }
        }, function (e, t, n) {
          var o = n(186),
            r = n(187);
          "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
          ]), o(r, {
            attributes: {
              "data-context": "klaro-styles"
            },
            insert: "head",
            singleton: !1
          }), e.exports = r.locals || {}
        }, function (e, t, n) {
          "use strict";
          var o, r, i = (o = {}, function (e) {
            if (void 0 === o[e]) {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head
              } catch (n) {
                t = null
              }
              o[e] = t
            }
            return o[e]
          }),
            a = [];
  
          function c(e) {
            for (var t = -1, n = 0; n < a.length; n++)
              if (a[n].identifier === e) {
                t = n;
                break
              } return t
          }
  
          function s(e, t) {
            for (var n = {}, o = [], r = 0; r < e.length; r++) {
              var i = e[r],
                s = t.base ? i[0] + t.base : i[0],
                l = n[s] || 0,
                u = "".concat(s, " ").concat(l);
              n[s] = l + 1;
              var p = c(u),
                d = {
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3]
                }; - 1 !== p ? (a[p].references++, a[p].updater(d)) : a.push({
                  identifier: u,
                  updater: h(d, t),
                  references: 1
                }), o.push(u)
            }
            return o
          }
  
          function l(e) {
            var t = document.createElement("style"),
              o = e.attributes || {};
            if (void 0 === o.nonce) {
              var r = n.nc;
              r && (o.nonce = r)
            }
            if (Object.keys(o).forEach(function (e) {
              t.setAttribute(e, o[e])
            }), "function" == typeof e.insert) e.insert(t);
            else {
              var a = i(e.insert || "head");
              if (!a) throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              a.appendChild(t)
            }
            return t
          }
          var u, p = (u = [], function (e, t) {
            return u[e] = t, u.filter(Boolean).join("\n")
          });
  
          function d(e, t, n, o) {
            var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
            if (e.styleSheet) e.styleSheet.cssText = p(t, r);
            else {
              var i = document.createTextNode(r),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
          }
  
          function f(e, t, n) {
            var o = n.css,
              r = n.media,
              i = n.sourceMap;
            if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o;
            else {
              for (; e.firstChild;) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(o))
            }
          }
          var v = null,
            m = 0;
  
          function h(e, t) {
            var n, o, r;
            if (t.singleton) {
              var i = m++;
              n = v || (v = l(t)), o = d.bind(null, n, i, !1), r = d.bind(null, n, i, !0)
            } else n = l(t), o = f.bind(null, n, t), r = function () {
              ! function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
              }(n)
            };
            return o(e),
              function (t) {
                t ? (t.css !== e.css || t.media !== e.media || t.sourceMap !== e.sourceMap) && o(e = t) : r()
              }
          }
          e.exports = function (e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
            var n = s(e = e || [], t);
            return function (e) {
              if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var o = 0; o < n.length; o++) {
                  var r = c(n[o]);
                  a[r].references--
                }
                for (var i = s(e, t), l = 0; l < n.length; l++) {
                  var u = c(n[l]);
                  0 === a[u].references && (a[u].updater(), a.splice(u, 1))
                }
                n = i
              }
            }
          }
        }, function (e, t, n) {
          (t = n(188)(!1)).push([e.i, cssColor + '.klaro .context-notice .slider,.klaro .cookie-modal .cm-modal.cm-klaro,.klaro .cookie-modal .slider,.klaro .cookie-modal-notice,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,.2),5px 5px 10px 0 rgba(0,0,0,.19)}.klaro,.klaro button{font-family:inherit;font-family:var(--font-family,inherit);font-size:14px;font-size:var(--font-size,14px)}.klaro ::-webkit-scrollbar{width:4px;height:10px}.klaro ::-webkit-scrollbar-thumb:hover{background:var(--corporative-color)}.klaro ::-webkit-scrollbar-thumb{transition:2s;border-radius:10px}.klaro.cm-as-context-notice{height:100%;padding-bottom:12px;padding-top:12px}.klaro .context-notice .cm-switch-container,.klaro .cookie-modal .cm-switch-container,.klaro .cookie-notice .cm-switch-container{border-bottom-style:var(--border-style,solid);border-bottom-width:var(--border-width,1px);border-bottom:1px solid #c8c8c8;border-bottom-color:var(--light2,#c8c8c8);display:block;position:relative;padding:10px 10px 10px 66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro .context-notice .cm-switch-container:last-child,.klaro .cookie-modal .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .context-notice .cm-switch-container p,.klaro .context-notice .cm-switch-container:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service:first-child,.klaro .cookie-modal .cm-switch-container p,.klaro .cookie-modal .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container p,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .context-notice .cm-switch,.klaro .cookie-modal .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:var(--corporative-color);background-color:var(--green1,var(--corporative-color))}.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:var(--corporative-color);background-color:var(--green1,var(--corporative-color));opacity:.6}.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{background-color:var(--corporative-color);background-color:var(--green2,var(--corporative-color));opacity:.8}.klaro .context-notice .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{background-color:var(--corporative-color);background-color:var(--green2,var(--corporative-color));opacity:.8;cursor:not-allowed}.klaro .context-notice .cm-list-input,.klaro .cookie-modal .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .context-notice .cm-list-title,.klaro .cookie-modal .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:.9em;font-weight:600}.klaro .context-notice .cm-list-description,.klaro .cookie-modal .cm-list-description,.klaro .cookie-notice .cm-list-description{color:#7c7c7c;color:var(--dark3,#7c7c7c);font-size:.9em;padding-top:4px}.klaro .context-notice .cm-list-label .cm-switch,.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .context-notice .cm-list-label .slider,.klaro .cookie-modal .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{background-color:#f2f2f2;background-color:var(--white2,#f2f2f2);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:.4s;width:50px;display:inline-block}.klaro .context-notice .cm-list-label .slider::before,.klaro .cookie-modal .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{background-color:#e6e6e6;background-color:var(--white3,#e6e6e6);position:absolute;content:"";height:20px;width:20px;left:5px;bottom:5px;transition:.4s}.klaro .context-notice .cm-list-label .slider.round,.klaro .cookie-modal .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .context-notice .cm-list-label .slider.round::before,.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .context-notice .cm-list-label input:focus+.slider,.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3,#48dfb2);box-shadow:0 0 1px var(color,green3)}.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-label input:checked+.slider::before,.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .context-notice .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,.2),5px 5px 10px 0 rgba(125,125,125,.19)}.klaro .context-notice a,.klaro .cookie-modal a,.klaro .cookie-notice a{color:var(--corporative-color);color:var(--green1,var(--corporative-color));text-decoration:none}.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice li,.klaro .context-notice p,.klaro .context-notice strong,.klaro .context-notice ul,.klaro .context-notice.cm-dark p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal li,.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal ul,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice ul{color:#fafafa;color:var(--light1,#fafafa)}.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice li,.klaro .context-notice p,.klaro .context-notice ul,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal li,.klaro .cookie-modal p,.klaro .cookie-modal ul,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice li,.klaro .cookie-notice p,.klaro .cookie-notice ul{display:block;text-align:left;margin:.7em 0 0;padding:0}.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice h3,.klaro .context-notice h4,.klaro .context-notice h5,.klaro .context-notice h6,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal h3,.klaro .cookie-modal h4,.klaro .cookie-modal h5,.klaro .cookie-modal h6,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice h3,.klaro .cookie-notice h4,.klaro .cookie-notice h5,.klaro .cookie-notice h6{font-family:inherit;font-family:var(--title-font-family,inherit)}.klaro .context-notice .cm-link,.klaro .cookie-modal .cm-link,.klaro .cookie-notice .cm-link{margin-right:.5em;vertical-align:middle}.klaro .context-notice .cm-btn,.klaro .cookie-modal .cm-btn,.klaro .cookie-notice .cm-btn{color:#fff;color:var(--button-text-color,#fff);background-color:#5c5c5c;background-color:var(--dark2,#5c5c5c);border-radius:4px;border-radius:var(--border-radius,4px);padding:12px;margin-right:.5em;border-style:none;font-size:1em;cursor:pointer}.klaro .context-notice .cm-btn:disabled,.klaro .cookie-modal .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:.5}.klaro .context-notice .cm-btn.cm-btn-close,.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background-color:#c8c8c8;background-color:var(--light2,#c8c8c8)}.klaro .context-notice .cm-btn.cm-btn-success,.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background-color:var(--corporative-color);background-color:var(--green1,var(--corporative-color));border:1px solid var(--green1,var(--corporative-color))}.klaro .context-notice .cm-btn.cm-btn-success-var,.klaro .cookie-modal .cm-btn.cm-btn-success-var,.klaro .cookie-notice .cm-btn.cm-btn-success-var{background-color:var(--corporative-color);background-color:var(--green2,var(--corporative-color))}.klaro .cn-decline[type=button],.klaro .context-notice .cm-btn.cm-btn-info,.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background-color:transparent;color:var(--corporative-color);border:none;text-decoration:none}.klaro .context-notice{border-radius:4px;border-radius:var(--border-radius,4px);border-style:var(--border-style,solid);border-width:var(--border-width,1px);border:1px solid #c8c8c8;border-color:var(--light2,#c8c8c8);background-color:#fafafa;background-color:var(--light1,#fafafa);display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;padding:12px;height:100%}.klaro .context-notice.cm-dark{background-color:#333;background-color:var(--dark1,#333);border-color:#5c5c5c;border-color:var(--dark2,#5c5c5c)}.klaro .cookie-notice h1{margin-top:0;margin-bottom:22px}.klaro .context-notice.cm-dark p a{color:#459cdc;color:var(--blue2,#459cdc)}.klaro .context-notice p{color:#333;color:var(--dark1,#333);flex-grow:0;text-align:center;padding-top:0;margin-top:0}.klaro .context-notice p a{color:var(--corporative-color);color:var(--green2,var(--corporative-color))}.klaro .context-notice p.cm-buttons{margin-top:12px}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:99999}.klaro .cookie-modal .cm-modal.cm-klaro,.klaro .cookie-modal-notice{color:#fafafa;z-index:1001;max-height:98%;top:50%;overflow:auto}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{max-height:80vh;position:relative;-ms-transform:none;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{background-color:#333;background-color:var(--dark1,#333);color:var(--light1,#fafafa);width:100%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed}@media (min-width:660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;border-radius:var(--border-radius,4px);position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:0 0;cursor:pointer;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#fafafa;stroke:var(--light1,#fafafa)}.klaro .cookie-modal .cm-modal .cm-footer{border-top-color:var(--dark2,#5c5c5c);border-top-width:var(--border-width,1px);border-top:1px solid #5c5c5c;border-top-style:var(--border-style,solid);padding:1em}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row-reverse;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#5c5c5c;color:var(--dark2,#5c5c5c)}.klaro .cookie-modal .cm-modal .cm-header{border-bottom-width:var(--border-width,1px);border-bottom-style:var(--border-style,solid);border-bottom:1px solid #5c5c5c;border-bottom-color:var(--dark2,#5c5c5c);padding:24px}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{max-height:200px;margin:2px;overflow:auto;padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-caret{color:#a0a0a0;color:var(--light3,#a0a0a0)}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p.purposes{color:#a0a0a0;color:var(--light3,#a0a0a0);font-size:.8em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service.cm-toggle-all{border-top-width:var(--border-width,1px);border-top-style:var(--border-style,solid);border-top:1px solid #5c5c5c;border-top-color:var(--dark2,#5c5c5c);padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required{color:#5c5c5c;color:var(--dark2,#5c5c5c);padding-left:.2em;font-size:.8em}.klaro .cm-service .slider.round,.klaro .cookie-notice-hidden{display:none}.klaro .cookie-notice:not(.cookie-modal-notice){background-color:#333;background-color:var(--dark1,#333);z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width:1024px){.klaro .cookie-notice:not(.cookie-modal-notice){border-radius:4px;border-radius:var(--border-radius,4px);position:fixed;position:var(--notice-position,fixed);right:20px;right:var(--notice-right,20px);left:auto;left:var(--notice-left,auto);bottom:20px;bottom:var(--notice-bottom,20px);top:auto;top:var(--notice-top,auto);max-width:400px;max-width:var(--notice-max-width,400px);box-shadow:0 4px 6px 0 rgba(0,0,0,.2),5px 5px 10px 0 rgba(0,0,0,.19)}}@media (max-width:1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:0 1em 1em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:.5em}@media (max-width:414px){.klaro .cookie-notice h1{margin-bottom:10px}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}.klaro .cookie-modal .cm-modal .cm-footer-buttons,.klaro .cookie-modal-notice div.cn-ok{flex-direction:column-reverse}.klaro .cookie-modal-notice .cn-buttons{display:flex;flex-direction:column-reverse;width:100%}.klaro .cookie-notice h1{font-size:25px;position:sticky;top:0;background-color:#fafafa}.klaro .cookie-modal .cookie-notice.cookie-modal-notice p{overflow-y:scroll;height:200px;padding-right:8px}div.klaro div.cookie-modal div.cookie-notice.cookie-modal-notice{transform:translateY(0);bottom:0;top:auto;position:fixed;max-width:100%;padding:10px}div.klaro .cookie-modal .cm-modal.cm-klaro{transform:translateY(0);bottom:0;top:auto;position:fixed;max-width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-modal-notice{background-color:#333;background-color:var(--dark1,#333);color:var(--light1,#fafafa);width:auto;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;padding:20px}@media (min-width:400px){.klaro .cookie-modal-notice{border-radius:4px;border-radius:var(--border-radius,4px);position:relative;margin:0 auto;max-width:700px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required{color:#000}\n', ""]), e.exports = t
        }, function (e, t, n) {
          "use strict";
          e.exports = function (e) {
            var t = [];
            return t.toString = function () {
              return this.map(function (t) {
                var n = function (e, t) {
                  var n, o, r, i = e[1] || "",
                    a = e[3];
                  if (!a) return i;
                  if (t && "function" == typeof btoa) {
                    var c = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */"));
                    return [i].concat(a.sources.map(function (e) {
                      return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                    })).concat([c]).join("\n")
                  }
                  return [i].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
              }).join("")
            }, t.i = function (e, n, o) {
              "string" == typeof e && (e = [
                [null, e, ""]
              ]);
              var r = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (r[a] = !0)
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                o && r[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
              }
            }, t
          }
        }, function (e, t, n) {
          "use strict";
          n.r(t), n.d(t, "updateConfig", function () {
            return function e(t, n, o) {
              void 0 === o && (o = !0);
              for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                var a = r[i],
                  c = n[a],
                  s = t[a];
                "string" == typeof c ? (o || void 0 === s) && (t[a] = c) : "object" === eK(c) && ("object" === eK(s) ? e(s, c, o) : (o || void 0 === s) && (t[a] = c))
              }
              return t
            }
          }), n.d(t, "getElementID", function () {
            return tQ
          }), n.d(t, "getElement", function () {
            return tX
          }), n.d(t, "addEventListener", function () {
            return tJ
          }), n.d(t, "getConfigTranslations", function () {
            return nt
          }), n.d(t, "render", function () {
            return no
          }), n.d(t, "renderContextualConsentNotices", function () {
            return nr
          }), n.d(t, "validateConfig", function () {
            return na
          }), n.d(t, "setup", function () {
            return nc
          }), n.d(t, "show", function () {
            return ns
          }), n.d(t, "resetManagers", function () {
            return nu
          }), n.d(t, "getManager", function () {
            return np
          }), n.d(t, "version", function () {
            return nd
          }), n.d(t, "language", function () {
            return eg
          }), n.d(t, "defaultConfig", function () {
            return tU
          }), n.d(t, "defaultTranslations", function () {
            return tG
          }), n(5), n(10), n(11), n(40), n(41), n(163), n(76), n(24), n(6), n(25), n(20), n(17), n(82), n(86), n(87), n(37), n(7), n(38), n(12), n(13), n(89), n(94), n(14);
          var o, r, i, a, c, s = {},
            l = [],
            u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  
          function p(e, t) {
            for (var n in t) e[n] = t[n];
            return e
          }
  
          function d(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
          }
  
          function f(e, t, n) {
            var o, r = arguments,
              i = {};
            for (o in t) "key" !== o && "ref" !== o && (i[o] = t[o]);
            if (arguments.length > 3)
              for (n = [n], o = 3; o < arguments.length; o++) n.push(r[o]);
            if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps)
              for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
            return v(e, i, t && t.key, t && t.ref, null)
          }
  
          function v(e, t, n, r, i) {
            var a = {
              type: e,
              props: t,
              key: n,
              ref: r,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              constructor: void 0,
              __v: i
            };
            return null == i && (a.__v = a), o.vnode && o.vnode(a), a
          }
  
          function m(e) {
            return e.children
          }
  
          function h(e, t) {
            this.props = e, this.context = t
          }
  
          function y(e, t) {
            if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? y(e) : null
          }
  
          function g(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
              for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                  e.__e = e.__c.base = n.__e;
                  break
                } return g(e)
            }
          }
  
          function b(e) {
            (!e.__d && (e.__d = !0) && r.push(e) && !k.__r++ || a !== o.debounceRendering) && ((a = o.debounceRendering) || i)(k)
          }
  
          function k() {
            for (var e; k.__r = r.length;) e = r.sort(function (e, t) {
              return e.__v.__b - t.__v.__b
            }), r = [], e.some(function (e) {
              var t, n, o, r, i, a, c;
              e.__d && (a = (i = (t = e).__v).__e, (c = t.__P) && (n = [], (o = p({}, i)).__v = o, r = S(c, i, o, t.__n, void 0 !== c.ownerSVGElement, null, n, null == a ? y(i) : a), A(n, i), r != a && g(i)))
            })
          }
  
          function $(e, t, n, o, r, i, a, c, u, p) {
            var f, h, g, b, k, $, _, w = o && o.__k || l,
              z = w.length;
            for (u == s && (u = null != a ? a[0] : z ? y(o, 0) : null), n.__k = [], f = 0; f < t.length; f++)
              if (null != (b = n.__k[f] = null == (b = t[f]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b ? v(null, b, null, null, b) : Array.isArray(b) ? v(m, {
                children: b
              }, null, null, null) : null != b.__e || null != b.__c ? v(b.type, b.props, b.key, null, b.__v) : b)) {
                if (b.__ = n, b.__b = n.__b + 1, null === (g = w[f]) || g && b.key == g.key && b.type === g.type) w[f] = void 0;
                else
                  for (h = 0; h < z; h++) {
                    if ((g = w[h]) && b.key == g.key && b.type === g.type) {
                      w[h] = void 0;
                      break
                    }
                    g = null
                  }
                k = S(e, b, g = g || s, r, i, a, c, u, p), (h = b.ref) && g.ref != h && (_ || (_ = []), g.ref && _.push(g.ref, null, b), _.push(h, b.__c || k, b)), null != k ? (null == $ && ($ = k), u = x(e, b, g, w, a, k, u), p || "option" != n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && g.__e == u && u.parentNode != e && (u = y(g))
              } if (n.__e = $, null != a && "function" != typeof n.type)
              for (f = a.length; f--;) null != a[f] && d(a[f]);
            for (f = z; f--;) null != w[f] && C(w[f], w[f]);
            if (_)
              for (f = 0; f < _.length; f++) j(_[f], _[++f], _[++f])
          }
  
          function _(e) {
            return null == e || "boolean" == typeof e ? [] : Array.isArray(e) ? l.concat.apply([], e.map(_)) : [e]
          }
  
          function x(e, t, n, o, r, i, a) {
            var c, s, l;
            if (void 0 !== t.__d) c = t.__d, t.__d = void 0;
            else if (r == n || i != a || null == i.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(i), c = null;
            else {
              for (s = a, l = 0;
                (s = s.nextSibling) && l < o.length; l += 2)
                if (s == i) break e;
              e.insertBefore(i, a), c = a
            } return void 0 !== c ? c : i.nextSibling
          }
  
          function w(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === u.test(t) ? n + "px" : null == n ? "" : n
          }
  
          function z(e, t, n, o, r) {
            var i, a, c, s, l;
            if (r ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) {
              if (i = e.style, "string" == typeof n) i.cssText = n;
              else {
                if ("string" == typeof o && (i.cssText = "", o = null), o)
                  for (s in o) n && s in n || w(i, s, "");
                if (n)
                  for (l in n) o && n[l] === o[l] || w(i, l, n[l])
              }
            } else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), t = ((c = t.toLowerCase()) in e ? c : t).slice(2), n ? (o || e.addEventListener(t, P, a), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, P, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && !r && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null != n && (!1 !== n || /^ar/.test(t)) ? e.setAttribute(t, n) : e.removeAttribute(t))
          }
  
          function P(e) {
            this.l[e.type](o.event ? o.event(e) : e)
          }
  
          function S(e, t, n, r, i, a, c, u, d) {
            var f, v, y, g, b, k, _, w, P, S, A, j = t.type;
            if (void 0 !== t.constructor) return null;
            (f = o.__b) && f(t);
            try {
              e: if ("function" == typeof j) {
                if (w = t.props, P = (f = j.contextType) && r[f.__c], S = f ? P ? P.props.value : f.__ : r, n.__c ? _ = (v = t.__c = n.__c).__ = v.__E : ("prototype" in j && j.prototype.render ? t.__c = v = new j(w, S) : (t.__c = v = new h(w, S), v.constructor = j, v.render = O), P && P.sub(v), v.props = w, v.state || (v.state = {}), v.context = S, v.__n = r, y = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != j.getDerivedStateFromProps && (v.__s == v.state && (v.__s = p({}, v.__s)), p(v.__s, j.getDerivedStateFromProps(w, v.__s))), g = v.props, b = v.state, y) null == j.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
                else {
                  if (null == j.getDerivedStateFromProps && w !== g && null != v.componentWillReceiveProps && v.componentWillReceiveProps(w, S), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(w, v.__s, S) || t.__v === n.__v) {
                    v.props = w, v.state = v.__s, t.__v !== n.__v && (v.__d = !1), v.__v = t, t.__e = n.__e, t.__k = n.__k, v.__h.length && c.push(v),
                      function e(t, n, o) {
                        var r, i;
                        for (r = 0; r < t.__k.length; r++)(i = t.__k[r]) && (i.__ = t, i.__e && ("function" == typeof i.type && i.__k.length > 1 && e(i, n, o), n = x(o, i, i, t.__k, null, i.__e, n), "function" == typeof t.type && (t.__d = n)))
                      }(t, u, e);
                    break e
                  }
                  null != v.componentWillUpdate && v.componentWillUpdate(w, v.__s, S), null != v.componentDidUpdate && v.__h.push(function () {
                    v.componentDidUpdate(g, b, k)
                  })
                }
                v.context = S, v.props = w, v.state = v.__s, (f = o.__r) && f(t), v.__d = !1, v.__v = t, v.__P = e, f = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (r = p(p({}, r), v.getChildContext())), y || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(g, b)), A = null != f && f.type == m && null == f.key ? f.props.children : f, $(e, Array.isArray(A) ? A : [A], t, n, r, i, a, c, u, d), v.base = t.__e, v.__h.length && c.push(v), _ && (v.__E = v.__ = null), v.__e = !1
              } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function e(t, n, o, r, i, a, c, u) {
                var p, d, f, v, m, h = o.props,
                  y = n.props;
                if (i = "svg" === n.type || i, null != a) {
                  for (p = 0; p < a.length; p++)
                    if (null != (d = a[p]) && ((null === n.type ? 3 === d.nodeType : d.localName === n.type) || t == d)) {
                      t = d, a[p] = null;
                      break
                    }
                }
                if (null == t) {
                  if (null === n.type) return document.createTextNode(y);
                  t = i ? document.createElementNS("http://www.w3.org/2000/svg", n.type) : document.createElement(n.type, y.is && {
                    is: y.is
                  }), a = null, u = !1
                }
                if (null === n.type) h !== y && t.data !== y && (t.data = y);
                else {
                  if (null != a && (a = l.slice.call(t.childNodes)), f = (h = o.props || s).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, !u) {
                    if (null != a)
                      for (h = {}, m = 0; m < t.attributes.length; m++) h[t.attributes[m].name] = t.attributes[m].value;
                    (v || f) && (v && f && v.__html == f.__html || (t.innerHTML = v && v.__html || ""))
                  } (function (e, t, n, o, r) {
                    var i;
                    for (i in n) "children" === i || "key" === i || i in t || z(e, i, null, n[i], o);
                    for (i in t) r && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || z(e, i, t[i], n[i], o)
                  })(t, y, h, i, u), v ? n.__k = [] : $(t, Array.isArray(p = n.props.children) ? p : [p], n, o, r, "foreignObject" !== n.type && i, a, c, s, u), u || ("value" in y && void 0 !== (p = y.value) && p !== t.value && z(t, "value", p, h.value, !1), "checked" in y && void 0 !== (p = y.checked) && p !== t.checked && z(t, "checked", p, h.checked, !1))
                }
                return t
              }(n.__e, t, n, r, i, a, c, d);
              (f = o.diffed) && f(t)
            }
            catch (C) {
              t.__v = null, o.__e(C, t, n)
            }
            return t.__e
          }
  
          function A(e, t) {
            o.__c && o.__c(t, e), e.some(function (t) {
              try {
                e = t.__h, t.__h = [], e.some(function (e) {
                  e.call(t)
                })
              } catch (n) {
                o.__e(n, t.__v)
              }
            })
          }
  
          function j(e, t, n) {
            try {
              "function" == typeof e ? e(t) : e.current = t
            } catch (r) {
              o.__e(r, n)
            }
          }
  
          function C(e, t, n) {
            var r, i, a;
            if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || j(r, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
              if (r.componentWillUnmount) try {
                r.componentWillUnmount()
              } catch (c) {
                o.__e(c, t)
              }
              r.base = r.__P = null
            }
            if (r = e.__k)
              for (a = 0; a < r.length; a++) r[a] && C(r[a], t, n);
            null != i && d(i)
          }
  
          function O(e, t, n) {
            return this.constructor(e, n)
          }
          o = {
            __e: function (e, t) {
              for (var n, o; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                  if (n.constructor && null != n.constructor.getDerivedStateFromError && (o = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (o = !0, n.componentDidCatch(e)), o) return b(n.__E = n)
                } catch (r) {
                  e = r
                }
              throw e
            }
          }, h.prototype.setState = function (e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && p(n, e), null != e && this.__v && (t && this.__h.push(t), b(this))
          }, h.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), b(this))
          }, h.prototype.render = m, r = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, c = s;
          var E, D, I, N = 0,
            M = [],
            q = o.__r,
            T = o.diffed,
            R = o.__c,
            U = o.unmount;
  
          function L(e, t) {
            o.__h && o.__h(D, e, N || t), N = 0;
            var n = D.__H || (D.__H = {
              __: [],
              __h: []
            });
            return e >= n.__.length && n.__.push({}), n.__[e]
          }
  
          function W() {
            M.some(function (e) {
              if (e.__P) try {
                e.__H.__h.forEach(B), e.__H.__h.forEach(F), e.__H.__h = []
              } catch (t) {
                return e.__H.__h = [], o.__e(t, e.__v), !0
              }
            }), M = []
          }
          o.__r = function (e) {
            q && q(e), E = 0;
            var t = (D = e.__c).__H;
            t && (t.__h.forEach(B), t.__h.forEach(F), t.__h = [])
          }, o.diffed = function (e) {
            T && T(e);
            var t = e.__c;
            t && t.__H && t.__H.__h.length && (1 !== M.push(t) && I === o.requestAnimationFrame || ((I = o.requestAnimationFrame) || function (e) {
              var t, n = function () {
                clearTimeout(o), H && cancelAnimationFrame(t), setTimeout(e)
              },
                o = setTimeout(n, 100);
              H && (t = requestAnimationFrame(n))
            })(W))
          }, o.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(B), e.__h = e.__h.filter(function (e) {
                  return !e.__ || F(e)
                })
              } catch (n) {
                t.some(function (e) {
                  e.__h && (e.__h = [])
                }), t = [], o.__e(n, e.__v)
              }
            }), R && R(e, t)
          }, o.unmount = function (e) {
            U && U(e);
            var t = e.__c;
            if (t && t.__H) try {
              t.__H.__.forEach(B)
            } catch (n) {
              o.__e(n, t.__v)
            }
          };
          var H = "function" == typeof requestAnimationFrame;
  
          function B(e) {
            "function" == typeof e.u && e.u()
          }
  
          function F(e) {
            e.u = e.__()
          }
  
          function K(e, t) {
            return "function" == typeof t ? t(e) : t
          }
  
          function V(e, t) {
            for (var n in e)
              if ("__source" !== n && !(n in t)) return !0;
            for (var o in t)
              if ("__source" !== o && e[o] !== t[o]) return !0;
            return !1
          } ! function (e) {
            var t, n;
  
            function o(t) {
              var n;
              return (n = e.call(this, t) || this).isPureReactComponent = !0, n
            }
            n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.prototype.shouldComponentUpdate = function (e, t) {
              return V(this.props, e) || V(this.state, t)
            }
          }(h);
          var G = o.__b;
          o.__b = function (e) {
            e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), G && G(e)
          }, "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
          var Z = o.__e;
  
          function Y() {
            this.__u = 0, this.o = null, this.__b = null
          }
  
          function Q(e) {
            var t = e.__.__c;
            return t && t.u && t.u(e)
          }
  
          function X() {
            this.i = null, this.l = null
          }
          o.__e = function (e, t, n) {
            if (e.then) {
              for (var o, r = t; r = r.__;)
                if ((o = r.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t.__c)
            }
            Z(e, t, n)
          }, (Y.prototype = new h).__c = function (e, t) {
            var n = this;
            null == n.o && (n.o = []), n.o.push(t);
            var o = Q(n.__v),
              r = !1,
              i = function () {
                r || (r = !0, t.componentWillUnmount = t.__c, o ? o(a) : a())
              };
            t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
              i(), t.__c && t.__c()
            };
            var a = function () {
              var e;
              if (!--n.__u)
                for (n.__v.__k[0] = function e(t) {
                  return t && (t.__v = null, t.__k = t.__k && t.__k.map(e)), t
                }(n.state.u), n.setState({
                  u: n.__b = null
                }); e = n.o.pop();) e.forceUpdate()
            };
            n.__u++ || n.setState({
              u: n.__b = n.__v.__k[0]
            }), e.then(i, i)
          }, Y.prototype.componentWillUnmount = function () {
            this.o = []
          }, Y.prototype.render = function (e, t) {
            return this.__b && (this.__v.__k && (this.__v.__k[0] = function e(t) {
              return t && ((t = function e(t, n) {
                for (var o in n) t[o] = n[o];
                return t
              }({}, t)).__c = null, t.__k = t.__k && t.__k.map(e)), t
            }(this.__b)), this.__b = null), [f(m, null, t.u ? null : e.children), t.u && e.fallback]
          };
          var J, ee = function (e, t, n) {
            if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
              for (n = e.i; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.i = n = n[2]
              }
          };
          (X.prototype = new h).u = function (e) {
            var t = this,
              n = Q(t.__v),
              o = t.l.get(e);
            return o[0]++,
              function (r) {
                var i = function () {
                  t.props.revealOrder ? (o.push(r), ee(t, e, o)) : r()
                };
                n ? n(i) : i()
              }
          }, X.prototype.render = function (e) {
            this.i = null, this.l = new Map;
            var t = _(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);
            return e.children
          }, X.prototype.componentDidUpdate = X.prototype.componentDidMount = function () {
            var e = this;
            e.l.forEach(function (t, n) {
              ee(e, n, t)
            })
          }, (J = (function e() { }).prototype).getChildContext = function () {
            return this.props.context
          }, J.render = function (e) {
            return e.children
          };
          var et = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
          h.prototype.isReactComponent = {};
          var en = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  
          function eo(e, t, n) {
            var r, i, a, u, p, d;
            if (null == t.__k)
              for (; t.firstChild;) t.removeChild(t.firstChild);
            return r = e, i = t, o.__ && o.__(r, i), p = (u = a === c) ? null : a && a.__k || i.__k, r = f(m, null, [r]), d = [], S(i, (u ? i : a || i).__k = r, p || s, s, void 0 !== i.ownerSVGElement, a && !u ? [a] : p ? null : i.childNodes.length ? l.slice.call(i.childNodes) : null, d, a || s, u), A(d, r), "function" == typeof n && n(), e ? e.__c : null
          }
          var er = o.event;
  
          function ei(e, t) {
            e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
              configurable: !1,
              get: function () {
                return this["UNSAFE_" + t]
              },
              set: function (e) {
                this["UNSAFE_" + t] = e
              }
            })
          }
          o.event = function (e) {
            er && (e = er(e)), e.persist = function () { };
            var t = !1,
              n = !1,
              o = e.stopPropagation;
            e.stopPropagation = function () {
              o.call(e), t = !0
            };
            var r = e.preventDefault;
            return e.preventDefault = function () {
              r.call(e), n = !0
            }, e.isPropagationStopped = function () {
              return t
            }, e.isDefaultPrevented = function () {
              return n
            }, e.nativeEvent = e
          };
          var ea = {
            configurable: !0,
            get: function () {
              return this.class
            }
          },
            ec = o.vnode;
          o.vnode = function (e) {
            e.$$typeof = en;
            var t, n, o, r = e.type,
              i = e.props;
            if (r) {
              if (i.class != i.className && (ea.enumerable = "className" in i, null != i.className && (i.class = i.className), Object.defineProperty(i, "className", ea)), "function" != typeof r) {
                for (o in i.defaultValue && void 0 !== i.value && (i.value || 0 === i.value || (i.value = i.defaultValue), delete i.defaultValue), Array.isArray(i.value) && i.multiple && "select" === r && (_(i.children).forEach(function (e) {
                  -1 != i.value.indexOf(e.props.value) && (e.props.selected = !0)
                }), delete i.value), !0 === i.download && (i.download = ""), i)
                  if (t = et.test(o)) break;
                if (t)
                  for (o in n = e.props = {}, i) n[et.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = i[o]
              } ! function (t) {
                var n = e.type,
                  o = e.props;
                if (o && "string" == typeof n) {
                  var r = {};
                  for (var i in o) /^on(Ani|Tra|Tou)/.test(i) && (o[i.toLowerCase()] = o[i], delete o[i]), r[i.toLowerCase()] = i;
                  if (r.ondoubleclick && (o.ondblclick = o[r.ondoubleclick], delete o[r.ondoubleclick]), r.onbeforeinput && (o.onbeforeinput = o[r.onbeforeinput], delete o[r.onbeforeinput]), r.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(o.type))) {
                    var a = r.oninput || "oninput";
                    o[a] || (o[a] = o[r.onchange], delete o[r.onchange])
                  }
                }
              }(), "function" == typeof r && !r.m && r.prototype && (ei(r.prototype, "componentWillMount"), ei(r.prototype, "componentWillReceiveProps"), ei(r.prototype, "componentWillUpdate"), r.m = !0)
            }
            ec && ec(e)
          };
          var es = f,
            el = m,
            eu = h,
            ep = (n(29), n(30), n(31), n(127), n(39), n(128), n(170), n(134)),
            ed = function (e) {
              var t = e.t;
              return es("svg", {
                role: "img",
                "aria-label": t(["close"]),
                width: "12",
                height: "12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
              }, es("title", null, t(["close"])), es("line", {
                x1: "1",
                y1: "11",
                x2: "11",
                y2: "1",
                strokeWidth: "1"
              }), es("line", {
                x1: "1",
                y1: "1",
                x2: "11",
                y2: "11",
                strokeWidth: "1"
              }))
            };
  
          function ef(e) {
            return e.split("-").map(function (e) {
              return e.slice(0, 1).toUpperCase() + e.slice(1)
            }).join(" ")
          }
  
          function ev(e) {
            return function (e) {
              if (Array.isArray(e)) return em(e)
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
              if (e) {
                if ("string" == typeof e) return em(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return em(e, t)
              }
            }(e) || function () {
              throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
  
          function em(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function eh(e) {
            return (eh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
          ed.propTypes = {
            t: n.n(ep).a.func
          }, n(50), n(64), n(174), n(175);
          var ey = function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            var r, i = eh(n[0]);
            r = 0 === n.length ? {} : "string" === i || "number" === i ? Array.prototype.slice.call(n) : n[0];
            for (var a = [], c = e.toString(); c.length > 0;) {
              var s = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
              if (null !== s) {
                var l = c.substr(0, s.index);
                c = c.substr(s.index + s[0].length);
                var u = parseInt(s[1]);
                a.push(l), u != u ? a.push(r[s[1]]) : a.push(r[u])
              } else a.push(c), c = ""
            }
            return a
          };
  
          function eg(e) {
            if (void 0 !== e && void 0 !== e.lang && "zz" !== e.lang) return e.lang;
            var t = (document.documentElement.lang || (void 0 !== e && void 0 !== e.languages && void 0 !== e.languages[0] ? e.languages[0] : "en")).toLowerCase(),
              n = RegExp("^([\\w]+)-([\\w]+)$").exec(t);
            return null === n ? t : n[1]
          }
  
          function eb(e, t, n) {
            var o = t;
            Array.isArray(o) || (o = [o]);
            for (var r = e, i = 0; i < o.length; i++) {
              if (void 0 === r) return n;
              if (void 0 !== o[i] && o[i].endsWith("?")) {
                var a = o[i].slice(0, o[i].length - 1),
                  c = void 0;
                void 0 !== (c = r instanceof Map ? r.get(a) : r[a]) && "string" == typeof c && (r = c)
              } else r = r instanceof Map ? r.get(o[i]) : r[o[i]]
            }
            return void 0 === r || "string" != typeof r ? n : "" !== r ? r : void 0
          }
  
          function ek(e, t, n, o) {
            var r = o,
              i = !1;
            "!" === r[0] && (r = r.slice(1), i = !0), Array.isArray(r) || (r = [r]);
            var a = eb(e, [t].concat(ev(r)));
            if (void 0 === a && void 0 !== n && (a = eb(e, [n].concat(ev(r)))), void 0 === a) {
              if (i) return;
              return ["[missing translation: ".concat(t, "/").concat(r.join("/"), "]")]
            }
            for (var c = arguments.length, s = Array(c > 4 ? c - 4 : 0), l = 4; l < c; l++) s[l - 4] = arguments[l];
            return s.length > 0 ? ey.apply(void 0, [a].concat(s)) : a
          }
          var e$ = function (e) {
            var t = e.text;
            if (t instanceof Array || (t = [t]), !0 === e.config.htmlTexts) {
              var n = !1;
              "<" === t[0][0] && (n = !0);
              var o = t.map(function (e, t) {
                return "string" == typeof e ? es("span", {
                  key: t,
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                }) : e
              });
              return es(n ? el : "span", null, o)
            }
            return es("span", null, t)
          };
  
          function e_(e) {
            return (e_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function e8() {
            return (e8 = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
              }
              return e
            }).apply(this, arguments)
          }
  
          function ex(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function ew(e, t) {
            return (ew = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function ez(e) {
            return (ez = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
          var eP = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && ew(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = ez(t);
              if (n) {
                var a = ez(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === e_(o) || "function" == typeof o) ? o : function (e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e)
            });
  
            function c() {
              return function e(t, n) {
                if (!(t instanceof n)) throw TypeError("Cannot call a class as a function")
              }(this, c), a.apply(this, arguments)
            }
            return o = c, r = [{
              key: "render",
              value: function () {
                var e, t = this.props,
                  n = t.checked,
                  o = t.onlyRequiredEnabled,
                  r = t.onToggle,
                  i = t.name,
                  a = t.lang,
                  c = t.config,
                  s = t.translations,
                  l = t.title,
                  u = t.description,
                  p = t.t,
                  d = this.props.required || !1,
                  f = this.props.optOut || !1,
                  v = this.props.purposes || [],
                  m = "service-item-".concat(i),
                  h = v.map(function (e) {
                    return p(["!", "purposes", e, "title?"]) || ef(e)
                  }).join(", "),
                  y = f ? es("span", {
                    className: "cm-opt-out",
                    title: p(["service", "optOut", "description"])
                  }, p(["service", "optOut", "title"])) : "",
                  g = d ? es("span", {
                    className: "cm-required",
                    title: p(["service", "required", "description"])
                  }, p(["service", "required", "title"])) : "";
                v.length > 0 && (e = es("p", {
                  className: "purposes"
                }, p(["service", v.length > 1 ? "purposes" : "purpose"]), ":", " ", h));
                var b = u || ek(s, a, "zz", ["!", "description"]) || p(["!", i, "description?"]);
                return es("div", null, es("input", {
                  id: m,
                  className: "cm-list-input" + (d ? " required" : "") + (o ? " half-checked only-required" : ""),
                  "aria-describedby": "".concat(m, "-description"),
                  disabled: d,
                  checked: n || d,
                  type: "checkbox",
                  onChange: function (e) {
                    r(e.target.checked)
                  }
                }), es("label", e8({
                  htmlFor: m,
                  className: "cm-list-label"
                }, d ? {
                  tabIndex: "0"
                } : {}), es("span", {
                  className: "cm-list-title"
                }, l || ek(s, a, "zz", ["!", "title"]) || p(["!", i, "title?"]) || ef(i)), g, y, es("span", {
                  className: "cm-switch"
                }, es("div", {
                  className: "slider round active"
                }))), es("div", {
                  id: "".concat(m, "-description")
                }, b && es("p", {
                  className: "cm-list-description"
                }, es(e$, {
                  config: c,
                  text: b
                })), e))
              }
            }], ex(o.prototype, r), i && ex(o, i), c
          }(eu);
  
          function eS(e) {
            return (eS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function e0(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function eA(e, t) {
            return (eA = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function ej(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
  
          function eC(e) {
            return (eC = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
  
          function eO() {
            return (eO = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
              }
              return e
            }).apply(this, arguments)
          }
          var e1 = function (e) {
            var t = e.services,
              n = e.config,
              o = e.consents,
              r = e.lang,
              i = e.toggle,
              a = e.t;
            return t.map(function (e) {
              var t = o[e.name];
              return es("li", {
                key: e.name,
                className: "cm-service"
              }, es(eP, eO({
                checked: t || e.required,
                onToggle: function (t) {
                  i([e], t)
                },
                config: n,
                lang: r,
                t: a
              }, e)))
            })
          },
            e3 = function (e) {
              ! function (e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }), t && eA(e, t)
              }(c, e);
              var t, n, o, r, i, a = (t = c, n = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
                } catch (e) {
                  return !1
                }
              }(), function () {
                var e, o, r, i = eC(t);
                if (n) {
                  var a = eC(this).constructor;
                  r = Reflect.construct(i, arguments, a)
                } else r = i.apply(this, arguments);
                return e = this, o = r, o && ("object" === eS(o) || "function" == typeof o) ? o : ej(e)
              });
  
              function c(e) {
                var t;
                return function (e, t) {
                  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, c), t = a.call(this, e), e.manager.watch(ej(t)), t.state = {
                  consents: e.manager.consents
                }, t
              }
              return o = c, r = [{
                key: "componentWillUnmount",
                value: function () {
                  this.props.manager.unwatch(this)
                }
              }, {
                key: "update",
                value: function (e, t, n) {
                  e === this.props.manager && "consents" === t && this.setState({
                    consents: n
                  })
                }
              }, {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.config,
                    n = e.t,
                    o = e.manager,
                    r = e.lang,
                    i = this.state.consents,
                    a = t.services,
                    c = function (e, t) {
                      e.map(function (e) {
                        e.required || o.updateConsent(e.name, t)
                      })
                    },
                    s = es(e1, {
                      config: t,
                      lang: r,
                      services: a,
                      t: n,
                      consents: i,
                      toggle: c
                    }),
                    l = a.filter(function (e) {
                      return !e.required
                    }),
                    u = l.filter(function (e) {
                      return i[e.name]
                    }).length,
                    p = a.filter(function (e) {
                      return e.required
                    }).length,
                    d = u === l.length;
                  return a.filter(function (e) {
                    return e.required
                  }).length, es("ul", {
                    className: "cm-services"
                  }, s, !t.hideToggleAll && l.length > 1 && es("li", {
                    className: "cm-service cm-toggle-all"
                  }, es(eP, {
                    name: "disableAll",
                    title: n(["service", "disableAll", "title"]),
                    description: n(["service", "disableAll", "description"]),
                    checked: d,
                    config: t,
                    onlyRequiredEnabled: !d && p > 0,
                    onToggle: function (e) {
                      c(a, e)
                    },
                    lang: r,
                    t: n
                  })))
                }
              }], e0(o.prototype, r), i && e0(o, i), c
            }(eu);
  
          function eE(e) {
            return (eE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function e2() {
            return (e2 = Object.assign || function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
              }
              return e
            }).apply(this, arguments)
          }
  
          function eD(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function eI(e, t) {
            return (eI = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function eN(e) {
            return (eN = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
          var e4 = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && eI(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = eN(t);
              if (n) {
                var a = eN(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === eE(o) || "function" == typeof o) ? o : function (e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e)
            });
  
            function c(e) {
              var t;
              return function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, c), (t = a.call(this, e)).state = {
                servicesVisible: !1
              }, t
            }
            return o = c, r = [{
              key: "render",
              value: function () {
                var e, t = this,
                  n = this.props,
                  o = n.allEnabled,
                  r = n.onlyRequiredEnabled,
                  i = n.allDisabled,
                  a = n.services,
                  c = n.config,
                  s = n.onToggle,
                  l = n.name,
                  u = n.lang,
                  p = n.manager,
                  d = n.consents,
                  f = n.title,
                  v = n.description,
                  m = n.t,
                  h = this.state.servicesVisible,
                  y = this.props.required || !1,
                  g = this.props.purposes || [],
                  b = "purpose-item-".concat(l),
                  k = g.map(function (e) {
                    return m(["!", "purposes", e, "title?"]) || ef(e)
                  }).join(", "),
                  $ = y ? es("span", {
                    className: "cm-required",
                    title: m(["!", "service", "required", "description"]) || ""
                  }, m(["service", "required", "title"])) : "";
                g.length > 0 && (e = es("p", {
                  className: "purposes"
                }, m(["purpose", g.length > 1 ? "purposes" : "purpose"]), ": ", k));
                var _ = es(e1, {
                  config: c,
                  lang: u,
                  services: a,
                  toggle: function (e, t) {
                    e.map(function (e) {
                      e.required || p.updateConsent(e.name, t)
                    })
                  },
                  consents: d,
                  t: m
                }),
                  x = v || m(["!", "purposes", l, "description"]);
                return es(el, null, es("input", {
                  id: b,
                  className: "cm-list-input" + (y ? " required" : "") + (o ? "" : r ? " only-required" : " half-checked"),
                  "aria-describedby": "".concat(b, "-description"),
                  disabled: y,
                  checked: o || !i && !r,
                  type: "checkbox",
                  onChange: function (e) {
                    s(e.target.checked)
                  }
                }), es("label", e2({
                  htmlFor: b,
                  className: "cm-list-label"
                }, y ? {
                  tabIndex: "0"
                } : {}), es("span", {
                  className: "cm-list-title"
                }, f || m(["!", "purposes", l, "title?"]) || ef(l)), $, es("span", {
                  className: "cm-switch"
                }, es("div", {
                  className: "slider round active"
                }))), es("div", {
                  id: "".concat(b, "-description")
                }, x && es("p", {
                  className: "cm-list-description"
                }, es(e$, {
                  config: c,
                  text: x
                })), e), a.length > 0 && es("div", {
                  className: "cm-services"
                }, es("div", {
                  className: "cm-caret"
                }, es("a", {
                  href: "#",
                  onClick: function (e) {
                    e.preventDefault(), t.setState({
                      servicesVisible: !h
                    })
                  }
                }, h && es("span", null, "↑") || es("span", null, "↓"), " ", a.length, " ", m(["purposeItem", a.length > 1 ? "services" : "service"]))), es("ul", {
                  className: "cm-content" + (h ? " expanded" : "")
                }, _)))
              }
            }], eD(o.prototype, r), i && eD(o, i), c
          }(eu);
  
          function e6(e) {
            return (e6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function e7(e, t) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (r = function (e, t) {
                if (e) {
                  if ("string" == typeof e) return eM(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eM(e, t)
                }
              }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                  o = function () { };
                return {
                  s: o,
                  n: function () {
                    return n >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[n++]
                    }
                  },
                  e: function (e) {
                    throw e
                  },
                  f: o
                }
              }
              throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, a = !0,
              c = !1;
            return {
              s: function () {
                r = e[Symbol.iterator]()
              },
              n: function () {
                var e = r.next();
                return a = e.done, e
              },
              e: function (e) {
                c = !0, i = e
              },
              f: function () {
                try {
                  a || null == r.return || r.return()
                } finally {
                  if (c) throw i
                }
              }
            }
          }
  
          function eM(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function eq(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function eT(e, t) {
            return (eT = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function e5(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
  
          function eR(e) {
            return (eR = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
          var eU = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && eT(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = eR(t);
              if (n) {
                var a = eR(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === e6(o) || "function" == typeof o) ? o : e5(e)
            });
  
            function c(e) {
              var t;
              return function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, c), t = a.call(this, e), e.manager.watch(e5(t)), t.state = {
                consents: e.manager.consents
              }, t
            }
            return o = c, r = [{
              key: "componentWillUnmount",
              value: function () {
                this.props.manager.unwatch(this)
              }
            }, {
              key: "update",
              value: function (e, t, n) {
                e === this.props.manager && "consents" === t && this.setState({
                  consents: n
                })
              }
            }, {
              key: "render",
              value: function () {
                var e, t = this.props,
                  n = t.config,
                  o = t.t,
                  r = t.manager,
                  i = t.lang,
                  a = this.state.consents,
                  c = n.services,
                  s = {},
                  l = e7(c);
                try {
                  for (l.s(); !(e = l.n()).done;) {
                    var u, p = e.value,
                      d = e7(p.purposes);
                    try {
                      for (d.s(); !(u = d.n()).done;) {
                        var f = u.value;
                        void 0 === s[f] && (s[f] = []), s[f].push(p)
                      }
                    } catch (v) {
                      d.e(v)
                    } finally {
                      d.f()
                    }
                  }
                } catch (m) {
                  l.e(m)
                } finally {
                  l.f()
                }
                var h = function (e, t) {
                  e.map(function (e) {
                    var n, o = e7(s[e]);
                    try {
                      for (o.s(); !(n = o.n()).done;) {
                        var i = n.value;
                        i.required || r.updateConsent(i.name, t)
                      }
                    } catch (a) {
                      o.e(a)
                    } finally {
                      o.f()
                    }
                  })
                },
                  y = function (e) {
                    var t, n = {
                      allEnabled: !0,
                      onlyRequiredEnabled: !0,
                      allDisabled: !0,
                      allRequired: !0
                    },
                      o = e7(e);
                    try {
                      for (o.s(); !(t = o.n()).done;) {
                        var r = t.value;
                        r.required || (n.allRequired = !1), a[r.name] ? (r.required || (n.onlyRequiredEnabled = !1), n.allDisabled = !1) : r.required || (n.allEnabled = !1)
                      }
                    } catch (i) {
                      o.e(i)
                    } finally {
                      o.f()
                    }
                    return n.allDisabled && (n.onlyRequiredEnabled = !1), n
                  },
                  g = n.purposeOrder || [],
                  b = Object.keys(s).sort(function (e, t) {
                    return g.indexOf(e) - g.indexOf(t)
                  }).map(function (e) {
                    var t = y(s[e]);
                    return es("li", {
                      key: e,
                      className: "cm-purpose"
                    }, es(e4, {
                      allEnabled: t.allEnabled,
                      allDisabled: t.allDisabled,
                      onlyRequiredEnabled: t.onlyRequiredEnabled,
                      required: t.allRequired,
                      consents: a,
                      name: e,
                      config: n,
                      lang: i,
                      manager: r,
                      onToggle: function (t) {
                        h([e], t)
                      },
                      services: s[e],
                      t: o
                    }))
                  }),
                  k = Object.keys(s).filter(function (e) {
                    var t, n = e7(s[e]);
                    try {
                      for (n.s(); !(t = n.n()).done;)
                        if (!t.value.required) return !0
                    } catch (o) {
                      n.e(o)
                    } finally {
                      n.f()
                    }
                    return !1
                  }),
                  $ = y(c);
                return es("ul", {
                  className: "cm-purposes"
                }, b, k.length > 1 && es("li", {
                  className: "cm-purpose cm-toggle-all"
                }, es(e4, {
                  name: "disableAll",
                  title: o(["service", "disableAll", "title"]),
                  description: o(["service", "disableAll", "description"]),
                  allDisabled: $.allDisabled,
                  allEnabled: $.allEnabled,
                  onlyRequiredEnabled: $.onlyRequiredEnabled,
                  onToggle: function (e) {
                    h(Object.keys(s), e)
                  },
                  manager: r,
                  consents: a,
                  config: n,
                  lang: i,
                  services: [],
                  t: o
                })))
              }
            }], eq(o.prototype, r), i && eq(o, i), c
          }(eu);
  
          function eL(e) {
            return (eL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function eW(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function eH(e, t) {
            return (eH = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function eB(e) {
            return (eB = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
          var eF = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && eH(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = eB(t);
              if (n) {
                var a = eB(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === eL(o) || "function" == typeof o) ? o : function (e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e)
            });
  
            function c() {
              return function e(t, n) {
                if (!(t instanceof n)) throw TypeError("Cannot call a class as a function")
              }(this, c), a.apply(this, arguments)
            }
            return o = c, r = [{
              key: "render",
              value: function () {
                var e, t, n, o = this.props,
                  r = o.hide,
                  i = o.confirming,
                  a = o.saveAndHide,
                  c = o.acceptAndHide,
                  s = o.declineAndHide,
                  l = o.config,
                  u = o.manager,
                  p = o.lang,
                  d = o.t,
                  f = l.embedded,
                  v = void 0 === l.groupByPurpose || l.groupByPurpose;
                l.mustConsent || (e = es("button", {
                  title: d(["close"]),
                  className: "hide",
                  type: "button",
                  onClick: r
                }, es(ed, {
                  t: d
                }))), l.hideDeclineAll || u.confirmed || (t = es("button", {
                  disabled: i,
                  className: "cm-btn cm-btn-decline cm-btn-danger cn-decline",
                  type: "button",
                  onClick: s
                }, d(["decline"])));
                var m, h, y, g = es("button", {
                  disabled: i,
                  className: "cm-btn cm-btn-success cm-btn-info cm-btn-accept",
                  type: "button",
                  onClick: a
                }, d([u.confirmed ? "save" : "acceptSelected"]));
                l.acceptAll && !u.confirmed && (n = es("button", {
                  disabled: i,
                  className: "cm-btn cm-btn-success cm-btn-accept-all",
                  type: "button",
                  onClick: c
                }, d(["acceptAll"]))), void 0 !== l.privacyPolicy ? "string" == typeof l.privacyPolicy ? m = l.privacyPolicy : "object" === eL(l.privacyPolicy) && (m = l.privacyPolicy[p] || l.privacyPolicy.default) : void 0 !== (m = d(["!", "privacyPolicyUrl"], {
                  lang: p
                })) && (m = m.join("")), void 0 !== m && (h = es("a", {
                  key: "ppLink",
                  href: m,
                  target: "_blank",
                  rel: "noopener"
                }, d(["privacyPolicy", "name"]))), y = es(v ? eU : e3, {
                  t: d,
                  config: l,
                  manager: u,
                  lang: p
                });
                var b = es("div", {
                  className: "cm-modal cm-klaro"
                }, es("div", {
                  className: "cm-header"
                }, e, es("h1", {
                  className: "title"
                }, es(e$, {
                  config: l,
                  text: d(["consentModal", "title"])
                })), es("p", null, es(e$, {
                  config: l,
                  text: [d(["consentModal", "description"])].concat(h && [" "].concat(d(["privacyPolicy", "text"], {
                    privacyPolicy: h
                  })) || [])
                }))), es("div", {
                  className: "cm-body"
                }, y), es("div", {
                  className: "cm-footer"
                }, es("div", {
                  className: "cm-footer-buttons"
                }, t, g, n), !l.disablePoweredBy && es("p", {
                  className: "cm-powered-by"
                }, l.poweredBy || "Powered by ", es("a", {
                  target: "_blank",
                  href: urlPoweredby.ndc.es,
                  rel: "noopener"
                }, "NDC"), " with ", es("a", {
                  target: "_blank",
                  href: urlPoweredby.klaro.es,
                  rel: "noopener"
                }, "Klaro"))));
              
              return f ? es("div", {
                className: "cookie-modal cm-embedded"
              }, b) : es("div", {
                className: "cookie-modal"
              }, es("div", {
                className: "cm-bg",
                onClick: r
              }), b);  
              }
            }], eW(o.prototype, r), i && eW(o, i), c
          }(eu);
  
          function eK(e) {
            return (eK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function eV(e) {
            return (eV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function e9(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function eG(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function eZ(e, t) {
            return (eZ = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function eY(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
  
          function eQ(e) {
            return (eQ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
  
          function eX(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }
          n(129);
          var eJ = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && eZ(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = eQ(t);
              if (n) {
                var a = eQ(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === eV(o) || "function" == typeof o) ? o : eY(e)
            });
  
            function c(e) {
              var t;
              return function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, c), eX(eY(t = a.call(this, e)), "executeButtonClicked", function (e, n, o) {
                var r = t.state.modal,
                  i = 0;
                e && (i = t.props.manager.changeAll(n));
                var a = t.props.manager.confirmed;
                if (t.props.manager.saveAndApplyConsents(o), e && !a && (r || t.props.config.mustConsent)) {
                  var c = function () {
                    t.setState({
                      confirming: !1
                    }), t.props.hide()
                  };
                  t.setState({
                    confirming: !0
                  }), 0 === i ? c() : setTimeout(c, 800)
                } else t.props.hide()
              }), eX(eY(t), "saveAndHide", function () {
                t.executeButtonClicked(!1, !1, "save")
              }), eX(eY(t), "acceptAndHide", function () {
                t.executeButtonClicked(!0, !0, "accept")
              }), eX(eY(t), "declineAndHide", function () {
                t.executeButtonClicked(!0, !1, "decline")
              }), t.state = {
                modal: e.modal,
                confirming: !1
              }, t
            }
            return o = c, r = [{
              key: "componentDidUpdate",
              value: function (e) {
                e.modal !== this.props.modal && this.setState({
                  modal: this.props.modal
                })
              }
            }, {
              key: "render",
              value: function () {
                var e, t, n = this,
                  o = this.props,
                  r = o.lang,
                  i = o.config,
                  a = o.show,
                  c = o.manager,
                  s = o.testing,
                  l = o.t,
                  u = this.state,
                  p = u.confirming,
                  d = u.modal,
                  f = i.embedded,
                  v = i.noticeAsModal,
                  m = i.hideLearnMore,
                  h = i.purposeOrder || [],
                  y = (function (e) {
                    for (var t = new Set([]), n = 0; n < e.services.length; n++)
                      for (var o = e.services[n].purposes || [], r = 0; r < o.length; r++) t.add(o[r]);
                    return Array.from(t)
                  })(i).filter(function (e) {
                    return "functional" !== e
                  }).sort(function (e, t) {
                    return h.indexOf(e) - h.indexOf(t)
                  }).map(function (e) {
                    return l(["!", "purposes", e, "title?"]) || ef(e)
                  }),
                  g = "";
                g = 1 === y.length ? y[0] : [].concat(function (e) {
                  if (Array.isArray(e)) return e9(e)
                }(t = y.slice(0, -2)) || function (e) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(t) || function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return e9(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e9(e, t)
                  }
                }(t) || function () {
                  throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(), [y.slice(-2).join(" & ")]).join(", "), void 0 !== i.privacyPolicy ? "string" == typeof i.privacyPolicy ? e = i.privacyPolicy : "object" === eV(i.privacyPolicy) && (e = i.privacyPolicy[r] || i.privacyPolicy.default) : void 0 !== (e = l(["!", "privacyPolicyUrl"], {
                  lang: r
                })) && (e = e.join(""));
                var b, k = function (e) {
                  e.preventDefault(), n.setState({
                    modal: !0
                  })
                };
                if (c.changed && (b = es("p", {
                  className: "cn-changes"
                }, l(["consentNotice", "changeDescription"]))), !a && !s && !p) return es("div", null);
                var $, _ = (!i.mustConsent || v) && !c.confirmed && !i.noNotice,
                  x = i.hideDeclineAll ? "" : es("button", {
                    className: "cm-btn cm-btn-danger cn-decline",
                    type: "button",
                    onClick: this.declineAndHide
                  }, l(["decline"])),
                  w = i.acceptAll ? es("button", {
                    className: "cm-btn cm-btn-success",
                    type: "button",
                    onClick: this.acceptAndHide
                  }, l(["ok"])) : es("button", {
                    className: "cm-btn cm-btn-success",
                    type: "button",
                    onClick: this.saveAndHide
                  }, l(["ok"])),
                  z = function () {
                    return v ? es("button", {
                      key: "learnMoreLink",
                      className: "cm-btn cm-btn-lern-more cm-btn-info",
                      type: "button",
                      onClick: k
                    }, l(["consentNotice", "learnMore"])) : es("a", {
                      key: "learnMoreLink",
                      className: "cm-link cn-learn-more",
                      href: "#",
                      onClick: k
                    }, l(["consentNotice", "learnMore"]))
                  };
                if (void 0 !== e && ($ = es("a", {
                  key: "ppLink",
                  href: e
                }, l(["privacyPolicy", "name"]))), d || c.confirmed && !s || !c.confirmed && i.mustConsent) return es(eF, {
                  t: l,
                  lang: r,
                  config: i,
                  hide: function () {
                    i.mustConsent && !i.acceptAll || (c.confirmed && !s ? n.props.hide() : n.setState({
                      modal: !1
                    }))
                  },
                  confirming: p,
                  declineAndHide: this.declineAndHide,
                  saveAndHide: this.saveAndHide,
                  acceptAndHide: this.acceptAndHide,
                  manager: c
                });
                var P = es("div", {
                  className: "cookie-notice ".concat(_ || s ? "" : "cookie-notice-hidden", " ").concat(v ? "cookie-modal-notice" : "", " ").concat(f ? "cn-embedded" : "")
                }, es("div", {
                  className: "cn-body"
                }, es("p", null, es(e$, {
                  config: i,
                  text: l(["consentNotice", "description"], {
                    purposes: es("strong", {
                      key: "strong"
                    }, g),
                    privacyPolicy: $,
                    learnMoreLink: z()
                  })
                })), s && es("p", null, l(["consentNotice", "testing"])), b, es("div", {
                  className: "cn-ok"
                }, !m && z(), es("div", {
                  className: "cn-buttons"
                }, x, w))));
                return v ? es("div", {
                  className: "cookie-modal"
                }, es("div", {
                  className: "cm-bg"
                }), P) : P
              }
            }], eG(o.prototype, r), i && eG(o, i), c
          }(eu);
  
          function te(e) {
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function tt(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function tn(e, t) {
            return (tn = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function to(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
  
          function tr(e) {
            return (tr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
          var ti = function (e) {
            ! function (e, t) {
              if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && tn(e, t)
            }(c, e);
            var t, n, o, r, i, a = (t = c, n = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }(), function () {
              var e, o, r, i = tr(t);
              if (n) {
                var a = tr(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return e = this, o = r, o && ("object" === te(o) || "function" == typeof o) ? o : to(e)
            });
  
            function c(e) {
              var t;
              return function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, c), t = a.call(this, e), e.manager.watch(to(t)), t.state = {
                show: e.show > 0 || !e.manager.confirmed
              }, t
            }
            return o = c, r = [{
              key: "componentWillUnmount",
              value: function () {
                this.props.manager.unwatch(this)
              }
            }, {
              key: "update",
              value: function (e, t) {
                e === this.props.manager && "applyConsents" === t && (!this.props.config.embedded && this.props.manager.confirmed ? this.setState({
                  show: !1
                }) : this.forceUpdate())
              }
            }, {
              key: "notifyApi",
              value: function () {
                var e = this.props,
                  t = e.api,
                  n = e.modal,
                  o = e.show,
                  r = e.config;
                if (void 0 !== t) {
                  if (n || o > 0) return;
                  this.props.manager.confirmed || this.props.manager.auxiliaryStore.getWithKey("shown-before") || (t.update(this, "showNotice", {
                    config: r
                  }), this.props.manager.auxiliaryStore.setWithKey("shown-before", !0))
                }
              }
            }, {
              key: "componentDidMount",
              value: function () {
                this.notifyApi()
              }
            }, {
              key: "componentDidUpdate",
              value: function (e) {
                if (e.show !== this.props.show) {
                  this.notifyApi();
                  var t = this.props.show > 0 || !this.props.manager.confirmed;
                  t !== this.state.show && this.setState({
                    show: t
                  })
                }
              }
            }, {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.config,
                  o = t.t,
                  r = t.lang,
                  i = t.testing,
                  a = t.manager,
                  c = t.modal,
                  s = this.state.show,
                  l = n.additionalClass,
                  u = n.embedded;
                return es("div", {
                  lang: r,
                  className: (n.stylePrefix || "klaro") + (void 0 !== l ? " " + l : "")
                }, es(eJ, {
                  key: "app-" + this.props.show,
                  t: o,
                  testing: i,
                  show: s,
                  lang: r,
                  modal: c,
                  hide: function () {
                    u || e.setState({
                      show: !1
                    })
                  },
                  config: n,
                  manager: a
                }))
              }
            }], tt(o.prototype, r), i && tt(o, i), c
          }(eu);
  
          function ta(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
          var tc = function (e) {
            var t, n, r, i, a, c, s, l, u, p = 0,
              d = e.manager,
              f = e.style,
              v = e.config,
              m = e.t,
              h = e.lang,
              y = e.service,
              g = function (e) {
                if (Array.isArray(e)) return e
              }(i = (N = 1, t = K, (r = L(E++, 2)).t = t, r.__c || (r.__c = D, r.__ = [n ? n(p) : K(void 0, p), function (e) {
                var t = r.t(r.__[0], e);
                r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
              }]), r.__)) || function (e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                  var n = [],
                    o = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                  } catch (s) {
                    r = !0, i = s
                  } finally {
                    try {
                      o || null == c.return || c.return()
                    } finally {
                      if (r) throw i
                    }
                  }
                  return n
                }
              }(i, 2) || function (e, t) {
                if (e) {
                  if ("string" == typeof e) return ta(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ta(e, t)
                }
              }(i, 2) || function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }(),
              b = g[0],
              k = g[1],
              $ = v.additionalClass,
              _ = (v.embedded, v.stylePrefix);
            a = function () {
              var e = {
                update: function () {
                  return k(b + 1)
                }
              };
              return d.watch(e),
                function () {
                  d.unwatch(e)
                }
            }, s = L(E++, 3), !o.__s && (l = s.__H, u = c, !l || u.some(function (e, t) {
              return e !== l[t]
            })) && (s.__ = a, s.__H = c, D.__H.__h.push(s));
            var x = ek(y.translations || {}, h, "es", ["!", "title"]) || m(["!", y.name, "title?"]) || ef(y.name);
            return es("div", {
              lang: h,
              className: (_ || "klaro") + (void 0 !== $ ? " " + $ : "") + " cm-as-context-notice"
            }, es("div", {
              className: "context-notice" + (void 0 !== f ? " cm-".concat(f) : "")
            }, es("p", null, m(["contextualConsent", "description"], {
              title: x
            })), es("p", {
              className: "cm-buttons"
            }, es("button", {
              className: "cm-btn cm-btn-success",
              type: "button",
              onClick: function () {
                d.updateConsent(y.name, !0), d.applyConsents(!1, !0, y.name), d.updateConsent(y.name, !1)
              }
            }, m(["contextualConsent", "acceptOnce"])), es("button", {
              className: "cm-btn cm-btn-success-var",
              type: "button",
              onClick: function () {
                d.updateConsent(y.name, !0), d.confirmed && d.saveConsents("contextual-accept"), d.applyConsents(!1, !0, y.name)
              }
            }, m(["contextualConsent", "acceptAlways"])))))
          };
  
          function ts() {
            for (var e = document.cookie.split(";"), t = [], n = RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"), o = 0; o < e.length; o++) {
              var r = e[o],
                i = n.exec(r);
              null !== i && t.push({
                name: i[1],
                value: i[2]
              })
            }
            return t
          }
  
          function tl(e, t, n) {
            var o = e + "=; Max-Age=-99999999;";
            document.cookie = o, o += " path=" + (t || "/") + ";", document.cookie = o, void 0 !== n && (o += " domain=" + n + ";", document.cookie = o)
          }
  
          function tu(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e
            }(e) || function (e, t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                  o = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                } catch (s) {
                  r = !0, i = s
                } finally {
                  try {
                    o || null == c.return || c.return()
                  } finally {
                    if (r) throw i
                  }
                }
                return n
              }
            }(e, t) || tp(e, t) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
  
          function tp(e, t) {
            if (e) {
              if ("string" == typeof e) return td(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? td(e, t) : void 0
            }
          }
  
          function td(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function tf(e) {
            for (var t = {}, n = 0; n < e.attributes.length; n++) {
              var o = e.attributes[n];
              o.name.startsWith("data-") && (t[o.name.slice(5)] = o.value)
            }
            return t
          }
  
          function tv(e, t) {
            for (var n = Object.keys(e), o = 0; o < n.length; o++) {
              var r = n[o],
                i = e[r];
              t[r] !== i && t.setAttribute("data-" + r, i)
            }
          }
  
          function tm(e) {
            return (tm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
  
          function th(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && ty(e, t)
          }
  
          function ty(e, t) {
            return (ty = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }
  
          function tg(e) {
            var t = function () {
              if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
              } catch (e) {
                return !1
              }
            }();
            return function () {
              var n, o, r, i = tb(e);
              if (t) {
                var a = tb(this).constructor;
                r = Reflect.construct(i, arguments, a)
              } else r = i.apply(this, arguments);
              return n = this, o = r, o && ("object" === tm(o) || "function" == typeof o) ? o : function (e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(n)
            }
          }
  
          function tb(e) {
            return (tb = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }
  
          function tk(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
          }
  
          function t$(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
  
          function t_(e, t, n) {
            return t && t$(e.prototype, t), n && t$(e, n), e
          }
          n(97), n(130), n(98), n(177), n(178);
          var t8 = function () {
            function e() {
              tk(this, e), this.value = null
            }
            return t_(e, [{
              key: "get",
              value: function () {
                return this.value
              }
            }, {
              key: "set",
              value: function (e) {
                this.value = e
              }
            }, {
              key: "delete",
              value: function () {
                this.value = null
              }
            }]), e
          }(),
            tx = function () {
              function e(t) {
                tk(this, e), this.cookieName = t.storageName, this.cookieDomain = t.cookieDomain, this.cookiePath = t.cookiePath, this.cookieExpiresAfterDays = t.cookieExpiresAfterDays
              }
              return t_(e, [{
                key: "get",
                value: function () {
                  var e = function (e) {
                    for (var t = ts(), n = 0; n < t.length; n++)
                      if (t[n].name === e) return t[n];
                    return null
                  }(this.cookieName);
                  return e ? e.value : null
                }
              }, {
                key: "set",
                value: function (e) {
                  return function (e, t, n, o, r) {
                    var i = "";
                    if (n) {
                      var a = new Date;
                      a.setTime(a.getTime() + 24 * n * 36e5), i = "; expires=" + a.toUTCString()
                    }
                    void 0 !== o && (i += "; domain=" + o), i += void 0 !== r ? "; path=" + r : "; path=/", document.cookie = e + "=" + (t || "") + i + "; SameSite=Lax"
                  }(this.cookieName, e, this.cookieExpiresAfterDays, this.cookieDomain, this.cookiePath)
                }
              }, {
                key: "delete",
                value: function () {
                  return tl(this.cookieName)
                }
              }]), e
            }(),
            tw = function () {
              function e(t, n) {
                tk(this, e), this.key = t.storageName, this.handle = n
              }
              return t_(e, [{
                key: "get",
                value: function () {
                  return this.handle.getItem(this.key)
                }
              }, {
                key: "getWithKey",
                value: function (e) {
                  return this.handle.getItem(e)
                }
              }, {
                key: "set",
                value: function (e) {
                  return this.handle.setItem(this.key, e)
                }
              }, {
                key: "setWithKey",
                value: function (e, t) {
                  return this.handle.setItem(e, t)
                }
              }, {
                key: "delete",
                value: function () {
                  return this.handle.removeItem(this.key)
                }
              }, {
                key: "deleteWithKey",
                value: function (e) {
                  return this.handle.removeItem(e)
                }
              }]), e
            }(),
            tz = function (e) {
              th(n, e);
              var t = tg(n);
  
              function n(e) {
                return tk(this, n), t.call(this, e, localStorage)
              }
              return n
            }(tw),
            tP = function (e) {
              th(n, e);
              var t = tg(n);
  
              function n(e) {
                return tk(this, n), t.call(this, e, sessionStorage)
              }
              return n
            }(tw),
            tS = {
              cookie: tx,
              test: t8,
              localStorage: tz,
              sessionStorage: tP
            };
  
          function t0(e, t) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (r = tj(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                  o = function () { };
                return {
                  s: o,
                  n: function () {
                    return n >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[n++]
                    }
                  },
                  e: function (e) {
                    throw e
                  },
                  f: o
                }
              }
              throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, a = !0,
              c = !1;
            return {
              s: function () {
                r = e[Symbol.iterator]()
              },
              n: function () {
                var e = r.next();
                return a = e.done, e
              },
              e: function (e) {
                c = !0, i = e
              },
              f: function () {
                try {
                  a || null == r.return || r.return()
                } finally {
                  if (c) throw i
                }
              }
            }
          }
  
          function tA(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e
            }(e) || function (e, t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                  o = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                } catch (s) {
                  r = !0, i = s
                } finally {
                  try {
                    o || null == c.return || c.return()
                  } finally {
                    if (r) throw i
                  }
                }
                return n
              }
            }(e, t) || tj(e, t) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
  
          function tj(e, t) {
            if (e) {
              if ("string" == typeof e) return tC(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tC(e, t) : void 0
            }
          }
  
          function tC(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function tO(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t && (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })), n.push.apply(n, o)
            }
            return n
          }
  
          function t1(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? tO(Object(n), !0).forEach(function (t) {
                t3(e, t, n[t])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tO(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
            return e
          }
  
          function t3(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }
  
          function tE(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
          var t2 = function () {
            var e, t, n;
  
            function o(e, t, n) {
              ! function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, o), this.config = e, this.store = void 0 !== t ? t : new tS[this.storageMethod](this), void 0 === this.store && (this.store = tS.cookie), this.auxiliaryStore = void 0 !== n ? n : new tP(this), this.consents = this.defaultConsents, this.confirmed = !1, this.changed = !1, this.states = {}, this.initialized = {}, this.executedOnce = {}, this.watchers = new Set([]), this.loadConsents(), this.applyConsents(), this.savedConsents = t1({}, this.consents)
            }
            return e = o, t = [{
              key: "watch",
              value: function (e) {
                this.watchers.has(e) || this.watchers.add(e)
              }
            }, {
              key: "unwatch",
              value: function (e) {
                this.watchers.has(e) && this.watchers.delete(e)
              }
            }, {
              key: "notify",
              value: function (e, t) {
                var n = this;
                this.watchers.forEach(function (o) {
                  o.update(n, e, t)
                })
              }
            }, {
              key: "getService",
              value: function (e) {
                var t = this.config.services.filter(function (t) {
                  return t.name === e
                });
                if (t.length > 0) return t[0]
              }
            }, {
              key: "getDefaultConsent",
              value: function (e) {
                var t = e.default || e.required;
                return void 0 === t && (t = this.config.default), void 0 === t && (t = !1), t
              }
            }, {
              key: "changeAll",
              value: function (e) {
                var t = this,
                  n = 0;
                return this.config.services.filter(function (e) {
                  return !e.contextualConsentOnly
                }).map(function (o) {
                  o.required || t.config.required || e ? t.updateConsent(o.name, !0) && n++ : t.updateConsent(o.name, !1) && n++
                }), n
              }
            }, {
              key: "updateConsent",
              value: function (e, t) {
                var n = (this.consents[e] || !1) !== t;
                return this.consents[e] = t, this.notify("consents", this.consents), n
              }
            }, {
              key: "resetConsents",
              value: function () {
                this.consents = this.defaultConsents, this.states = {}, this.confirmed = !1, this.applyConsents(), this.savedConsents = t1({}, this.consents), this.store.delete(), this.notify("consents", this.consents)
              }
            }, {
              key: "getConsent",
              value: function (e) {
                return this.consents[e] || !1
              }
            }, {
              key: "loadConsents",
              value: function () {
                var e = this.store.get();
                return null !== e && (this.consents = JSON.parse(decodeURIComponent(e)), this._checkConsents(), this.notify("consents", this.consents)), this.consents
              }
            }, {
              key: "saveAndApplyConsents",
              value: function (e) {
                this.saveConsents(e), this.applyConsents()
              }
            }, {
              key: "changedConsents",
              value: function () {
                for (var e = {}, t = 0, n = Object.entries(this.consents); t < n.length; t++) {
                  var o = tA(n[t], 2),
                    r = o[0],
                    i = o[1];
                  this.savedConsents[r] !== i && (e[r] = i)
                }
                return e
              }
            }, {
              key: "saveConsents",
              value: function (e) {
                var t = encodeURIComponent(JSON.stringify(this.consents));
                this.store.set(t), this.confirmed = !0, this.changed = !1;
                var n = this.changedConsents();
                this.savedConsents = t1({}, this.consents), this.notify("saveConsents", {
                  changes: n,
                  consents: this.consents,
                  type: e || "script"
                })
              }
            }, {
              key: "applyConsents",
              value: function (e, t, n) {
                function o(e, t) {
                  if (void 0 !== e) return ("function" == typeof e ? e : Function("opts", e))(t)
                }
                for (var r = 0, i = 0; i < this.config.services.length; i++) {
                  var a = this.config.services[i];
                  if (void 0 === n || n === a.name) {
                    var c = a.vars || {},
                      s = {
                        service: a,
                        config: this.config,
                        vars: c
                      };
                    this.initialized[a.name] || (this.initialized[a.name] = !0, o(a.onInit, s))
                  }
                }
                for (var l = 0; l < this.config.services.length; l++) {
                  var u = this.config.services[l];
                  if (void 0 === n || n === u.name) {
                    var p = this.states[u.name],
                      d = u.vars || {},
                      f = void 0 !== u.optOut ? u.optOut : this.config.optOut || !1,
                      v = void 0 !== u.required ? u.required : this.config.required || !1,
                      m = this.confirmed || f || e || t,
                      h = this.getConsent(u.name) && m || v,
                      y = {
                        service: u,
                        config: this.config,
                        vars: d,
                        consents: this.consents,
                        confirmed: this.confirmed
                      };
                    p !== h && r++, e || (o(h ? u.onAccept : u.onDecline, y), this.updateServiceElements(u, h), this.updateServiceStorage(u, h), void 0 !== u.callback && u.callback(h, u), void 0 !== this.config.callback && this.config.callback(h, u), this.states[u.name] = h)
                  }
                }
                return this.notify("applyConsents", r, n), r
              }
            }, {
              key: "updateServiceElements",
              value: function (e, t) {
                if (t) {
                  if (e.onlyOnce && this.executedOnce[e.name]) return;
                  this.executedOnce[e.name] = !0
                }
                for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), o = 0; o < n.length; o++) {
                  var r = n[o],
                    i = r.parentElement,
                    a = tf(r),
                    c = a.type,
                    s = a.src,
                    l = a.href,
                    u = ["href", "src", "type"];
                  if ("placeholder" !== c) {
                    if ("IFRAME" === r.tagName) {
                      if (t && r.src === s) {
                        console.debug("Skipping ".concat(r.tagName, " for service ").concat(e.name, ", as it already has the correct type..."));
                        continue
                      }
                      var p, d = document.createElement(r.tagName),
                        f = t0(r.attributes);
                      try {
                        for (f.s(); !(p = f.n()).done;) {
                          var v = p.value;
                          d.setAttribute(v.name, v.value)
                        }
                      } catch (m) {
                        f.e(m)
                      } finally {
                        f.f()
                      }
                      d.innerText = r.innerText, d.text = r.text, t ? (void 0 !== a["original-display"] && (d.style.display = a["original-display"]), void 0 !== a.src && (d.src = a.src)) : (d.src = "", void 0 !== a["modified-by-klaro"] && void 0 !== a["original-display"] ? d.setAttribute("data-original-display", a["original-display"]) : (void 0 !== r.style.display && d.setAttribute("data-original-display", r.style.display), d.setAttribute("data-modified-by-klaro", "yes")), d.style.display = "none"), i.insertBefore(d, r), i.removeChild(r)
                    } else if ("SCRIPT" === r.tagName || "LINK" === r.tagName) {
                      if (t && r.type === (c || "") && r.src === s) {
                        console.debug("Skipping ".concat(r.tagName, " for service ").concat(e.name, ", as it already has the correct type or src..."));
                        continue
                      }
                      var h, y = document.createElement(r.tagName),
                        g = t0(r.attributes);
                      try {
                        for (g.s(); !(h = g.n()).done;) {
                          var b = h.value;
                          y.setAttribute(b.name, b.value)
                        }
                      } catch (k) {
                        g.e(k)
                      } finally {
                        g.f()
                      }
                      y.innerText = r.innerText, y.text = r.text, t ? (y.type = c || "", void 0 !== s && (y.src = s), void 0 !== l && (y.href = l)) : y.type = "text/plain", i.insertBefore(y, r), i.removeChild(r)
                    } else {
                      if (t) {
                        var $, _ = t0(u);
                        try {
                          for (_.s(); !($ = _.n()).done;) {
                            var x = $.value,
                              w = a[x];
                            void 0 !== w && (void 0 === a["original-" + x] && (a["original-" + x] = r[x]), r[x] = w)
                          }
                        } catch (z) {
                          _.e(z)
                        } finally {
                          _.f()
                        }
                        void 0 !== a.title && (r.title = a.title), void 0 !== a["original-display"] ? r.style.display = a["original-display"] : r.style.removeProperty("display")
                      } else {
                        void 0 !== a.title && r.removeAttribute("title"), void 0 === a["original-display"] && void 0 !== r.style.display && (a["original-display"] = r.style.display), r.style.display = "none";
                        var P, S = t0(u);
                        try {
                          for (S.s(); !(P = S.n()).done;) {
                            var A = P.value;
                            void 0 !== a[A] && (void 0 !== a["original-" + A] ? r[A] = a["original-" + A] : r.removeAttribute(A))
                          }
                        } catch (j) {
                          S.e(j)
                        } finally {
                          S.f()
                        }
                      }
                      tv(a, r)
                    }
                  } else t ? (r.style.display = "none", a["original-display"] = r.style.display) : r.style.display = a["original-display"] || "block"
                }
              }
            }, {
              key: "updateServiceStorage",
              value: function (e, t) {
                if (!t && void 0 !== e.cookies && e.cookies.length > 0)
                  for (var n = ts(), o = 0; o < e.cookies.length; o++) {
                    var r = e.cookies[o],
                      i = void 0,
                      a = void 0;
                    if (r instanceof Array) {
                      var c = tA(r, 3);
                      r = c[0], i = c[1], a = c[2]
                    } else if (r instanceof Object && !(r instanceof RegExp)) {
                      var s = r;
                      r = s.pattern, i = s.path, a = s.domain
                    }
                    if (void 0 !== r) {
                      r instanceof RegExp || (r = r.startsWith("^") ? RegExp(r) : RegExp("^" + r.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") + "$"));
                      for (var l = 0; l < n.length; l++) {
                        var u = n[l];
                        null !== r.exec(u.name) && (console.debug("Deleting cookie:", u.name, "Matched pattern:", r, "Path:", i, "Domain:", a), tl(u.name, i, a), void 0 === a && tl(u.name, i, "." + window.location.hostname))
                      }
                    }
                  }
              }
            }, {
              key: "_checkConsents",
              value: function () {
                for (var e = !0, t = new Set(this.config.services.map(function (e) {
                  return e.name
                })), n = new Set(Object.keys(this.consents)), o = 0, r = Object.keys(this.consents); o < r.length; o++) {
                  var i = r[o];
                  t.has(i) || delete this.consents[i]
                }
                var a, c = t0(this.config.services);
                try {
                  for (c.s(); !(a = c.n()).done;) {
                    var s = a.value;
                    n.has(s.name) || (this.consents[s.name] = this.getDefaultConsent(s), e = !1)
                  }
                } catch (l) {
                  c.e(l)
                } finally {
                  c.f()
                }
                this.confirmed = e, e || (this.changed = !0)
              }
            }, {
              key: "storageMethod",
              get: function () {
                return this.config.storageMethod || "cookie"
              }
            }, {
              key: "storageName",
              get: function () {
                return this.config.storageName || this.config.cookieName || "klaro"
              }
            }, {
              key: "cookieDomain",
              get: function () {
                return this.config.cookieDomain || void 0
              }
            }, {
              key: "cookiePath",
              get: function () {
                return this.config.cookiePath || void 0
              }
            }, {
              key: "cookieExpiresAfterDays",
              get: function () {
                return this.config.cookieExpiresAfterDays || 120
              }
            }, {
              key: "defaultConsents",
              get: function () {
                for (var e = {}, t = 0; t < this.config.services.length; t++) {
                  var n = this.config.services[t];
                  e[n.name] = this.getDefaultConsent(n)
                }
                return e
              }
            }], tE(e.prototype, t), n && tE(e, n), o
          }();
  
          function tD(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t && (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })), n.push.apply(n, o)
            }
            return n
          }
  
          function tI(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? tD(Object(n), !0).forEach(function (t) {
                tN(e, t, n[t])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tD(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
            return e
          }
  
          function tN(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }
  
          function t4(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
          n(179);
          var t6 = function () {
            var e, t, n;
  
            function o(e, t, n) {
              ! function (e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
              }(this, o), this.url = e, this.id = t, this.opts = Object.assign({}, n)
            }
            return e = o, t = [{
              key: "getLocationData",
              value: function (e) {
                var t = e.records || {};
                return {
                  pathname: void 0 === t.savePathname || t.savePathname ? location.pathname : void 0,
                  port: "" !== location.port ? parseInt(location.port) : 0,
                  hostname: location.hostname,
                  protocol: location.protocol.slice(0, location.protocol.length - 1)
                }
              }
            }, {
              key: "getUserData",
              value: function () {
                return {
                  client_version: nd(),
                  client_name: "klaro:web"
                }
              }
            }, {
              key: "getBaseConsentData",
              value: function (e) {
                return {
                  location_data: this.getLocationData(e),
                  user_data: this.getUserData(e)
                }
              }
            }, {
              key: "update",
              value: function (e, t, n) {
                if ("saveConsents" === t) {
                  if ("save" !== n.type || 0 !== Object.keys(n.changes).length) {
                    var o = tI(tI({}, this.getBaseConsentData(e.config)), {}, {
                      consent_data: {
                        consents: n.consents,
                        changes: "save" === n.type ? n.changes : void 0,
                        type: n.type,
                        config: e.config.id
                      }
                    });
                    this.submitConsentData(o)
                  }
                } else if ("showNotice" === t) {
                  var r = tI(tI({}, this.getBaseConsentData(n.config)), {}, {
                    consent_data: {
                      consents: {},
                      changes: {},
                      type: "show",
                      config: n.config.id
                    }
                  });
                  this.submitConsentData(r)
                }
              }
            }, {
              key: "apiRequest",
              value: function (e, t, n, o) {
                var r = this;
                return new Promise(function (i, a) {
                  var c, s, l = new XMLHttpRequest;
                  l.addEventListener("load", function () {
                    var e = JSON.parse(l.response);
                    l.status < 200 || l.status >= 300 ? (e.status = l.status, a(e)) : i(e, l.status)
                  }), l.addEventListener("error", function () {
                    a({
                      status: 0,
                      xhr: l
                    })
                  }), void 0 !== n && ("GET" === e ? t += "??" + Object.keys(s = n).map(function (e) {
                    return e + "=" + encodeURIComponent(s[e])
                  }).join("&") : c = JSON.stringify(n)), l.open(e, r.url + t), void 0 !== c && l.setRequestHeader("Content-Type", o || "application/json;charset=UTF-8"), l.send(c)
                })
              }
            }, {
              key: "submitConsentData",
              value: function (e) {
                return this.apiRequest("POST", "/v1/privacy-managers/" + this.id + "/submit", e, "text/plain;charset=UTF-8")
              }
            }, {
              key: "loadConfig",
              value: function (e) {
                return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/config.json?name=" + e + (this.opts.testing ? "&testing=true" : ""))
              }
            }, {
              key: "loadConfigs",
              value: function () {
                return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/configs.json" + (this.opts.testing ? "&testing=true" : ""))
              }
            }], t4(e.prototype, t), n && t4(e, n), o
          }();
  
          function t7(e, t) {
            return function (e) {
              if (Array.isArray(e)) return e
            }(e) || function (e, t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                  o = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                } catch (s) {
                  r = !0, i = s
                } finally {
                  try {
                    o || null == c.return || c.return()
                  } finally {
                    if (r) throw i
                  }
                }
                return n
              }
            }(e, t) || tM(e, t) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
  
          function tM(e, t) {
            if (e) {
              if ("string" == typeof e) return tq(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tq(e, t) : void 0
            }
          }
  
          function tq(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function tT(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
  
          function t5(e) {
            for (var t = new Map([]), n = 0, o = Object.keys(e); n < o.length; n++) {
              var r = o[n],
                i = e[r];
              "string" == typeof r && ("string" == typeof i || null === i ? t.set(r, i) : t.set(r, t5(i)))
            }
            return t
          }
  
          function tR(e, t, n, o) {
            var r = function (e, t, n) {
              if (n instanceof Map) {
                var o = new Map([]);
                tR(o, n, !0, !1), e.set(t, o)
              } else e.set(t, n)
            };
            if (!(t instanceof Map && e instanceof Map)) throw Error("Parameters are not maps!");
            void 0 === n && (n = !0), void 0 === o && (o = !1), o && (e = new e.constructor(e));
            var i, a = function e(t, n) {
              if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return tT(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tT(e, t)
                  }
                }(t))) {
                  i && (t = i);
                  var o = 0,
                    r = function () { };
                  return {
                    s: r,
                    n: function () {
                      return o >= t.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: t[o++]
                      }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: r
                  }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }
              var i, a, c = !0,
                s = !1;
              return {
                s: function () {
                  i = t[Symbol.iterator]()
                },
                n: function () {
                  var e = i.next();
                  return c = e.done, e
                },
                e: function (e) {
                  s = !0, a = e
                },
                f: function () {
                  try {
                    c || null == i.return || i.return()
                  } finally {
                    if (s) throw a
                  }
                }
              }
            }(t.keys());
            try {
              for (a.s(); !(i = a.n()).done;) {
                var c = i.value,
                  s = t.get(c),
                  l = e.get(c);
                if (e.has(c)) {
                  if (s instanceof Map && l instanceof Map) e.set(c, tR(l, s, n, o));
                  else {
                    if (!n) continue;
                    r(e, c, s)
                  }
                } else r(e, c, s)
              }
            } catch (u) {
              a.e(u)
            } finally {
              a.f()
            }
            return e
          }
          var tU, tL = {
            top: {
              _meta: {
                incompatibleWith: ["bottom"]
              },
              "notice-top": "20px",
              "notice-bottom": "auto"
            },
            bottom: {
              _meta: {
                incompatibleWith: ["top"]
              },
              "notice-bottom": "20px",
              "notice-top": "auto"
            },
            left: {
              _meta: {
                incompatibleWith: ["wide"]
              },
              "notice-left": "20px",
              "notice-right": "auto"
            },
            right: {
              _meta: {
                incompatibleWith: ["wide"]
              },
              "notice-right": "20px",
              "notice-left": "auto"
            },
            wide: {
              "notice-left": "20px",
              "notice-right": "auto",
              "notice-max-width": "calc(100vw - 60px)",
              "notice-position": "fixed"
            },
            light: {
              "button-text-color": "#fff",
              dark1: "#fafafa",
              dark2: "#000",
              dark3: "#555",
              light1: "#444",
              light2: "#666",
              light3: "#111",
              green3: "#f00"
            }
          };
  
          function tW(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t && (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })), n.push.apply(n, o)
            }
            return n
          }
  
          function tH(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? tW(Object(n), !0).forEach(function (t) {
                tB(e, t, n[t])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tW(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
            return e
          }
  
          function tB(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }
  
          function tF(e) {
            return function (e) {
              if (Array.isArray(e)) return t9(e)
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || tV(e) || function () {
              throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
          }
  
          function tK(e, t) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (r = tV(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                  o = function () { };
                return {
                  s: o,
                  n: function () {
                    return n >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[n++]
                    }
                  },
                  e: function (e) {
                    throw e
                  },
                  f: o
                }
              }
              throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, a = !0,
              c = !1;
            return {
              s: function () {
                r = e[Symbol.iterator]()
              },
              n: function () {
                var e = r.next();
                return a = e.done, e
              },
              e: function (e) {
                c = !0, i = e
              },
              f: function () {
                try {
                  a || null == r.return || r.return()
                } finally {
                  if (c) throw i
                }
              }
            }
          }
  
          function tV(e, t) {
            if (e) {
              if ("string" == typeof e) return t9(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t9(e, t) : void 0
            }
          }
  
          function t9(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
          }
          n(185);
          var tG = new Map([]),
            tZ = {},
            tY = {};
  
          function tQ(e, t) {
            return (e.elementID || "klaro") + (t ? "-ide" : "")
          }
  
          function tX(e, t) {
            var n = tQ(e, t),
              o = document.getElementById(n);
            return null === o && ((o = document.createElement("div")).id = n, document.body.appendChild(o)), o
          }
  
          function tJ(e, t) {
            if (void 0 === tZ[e] ? tZ[e] = [t] : tZ[e].push(t), void 0 !== tY[e]) {
              var n, o = tK(tY[e]);
              try {
                for (o.s(); !(n = o.n()).done;) {
                  var r = n.value;
                  if (!1 === t.apply(void 0, tF(r))) break
                }
              } catch (i) {
                o.e(i)
              } finally {
                o.f()
              }
            }
          }
  
          function ne(e) {
            for (var t = tZ[e], n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            if (void 0 === tY[e] ? tY[e] = [o] : tY[e].push(o), void 0 !== t) {
              var i, a = tK(t);
              try {
                for (a.s(); !(i = a.n()).done;) {
                  var c = i.value;
                  if (!0 === c.apply(void 0, o)) return !0
                }
              } catch (s) {
                a.e(s)
              } finally {
                a.f()
              }
            }
          }
  
          function nt(e) {
            var t = new Map([]);
            return tR(t, tG), tR(t, t5(e.translations || {})), t
          }
          var nn = 1;
  
          function no(e, t) {
            if (void 0 !== e) {
              t = t || {}, ne("render", e = na(e), t);
              var n = 0;
              t.show && (n = nn++);
              var o = tX(e),
                r = np(e);
              void 0 !== t.api && r.watch(t.api),
                function e(t, n, o) {
                  if (void 0 !== t.styling) {
                    var r = Object.assign({}, t.styling);
                    if (void 0 !== r.theme) {
                      var i = r.theme;
                      i instanceof Array || (i = [i]), r = {};
                      var a, c = function (e, t) {
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                          if (Array.isArray(e) || (r = tM(e))) {
                            r && (e = r);
                            var n = 0,
                              o = function () { };
                            return {
                              s: o,
                              n: function () {
                                return n >= e.length ? {
                                  done: !0
                                } : {
                                  done: !1,
                                  value: e[n++]
                                }
                              },
                              e: function (e) {
                                throw e
                              },
                              f: o
                            }
                          }
                          throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var r, i, a = !0,
                          c = !1;
                        return {
                          s: function () {
                            r = e[Symbol.iterator]()
                          },
                          n: function () {
                            var e = r.next();
                            return a = e.done, e
                          },
                          e: function (e) {
                            c = !0, i = e
                          },
                          f: function () {
                            try {
                              a || null == r.return || r.return()
                            } finally {
                              if (c) throw i
                            }
                          }
                        }
                      }(i);
                      try {
                        for (c.s(); !(a = c.n()).done;) {
                          var s = n[a.value];
                          if (void 0 !== s)
                            for (var l = 0, u = Object.entries(s); l < u.length; l++) {
                              var p = t7(u[l], 2),
                                d = p[0],
                                f = p[1];
                              d.startsWith("_") || (r[d] = f)
                            }
                        }
                      } catch (v) {
                        c.e(v)
                      } finally {
                        c.f()
                      }
                      for (var m = 0, h = Object.entries(t.styling); m < h.length; m++) {
                        var y = t7(h[m], 2),
                          g = y[0],
                          b = y[1];
                        "theme" !== g && (r[g] = b)
                      }
                    }
                    void 0 === o && (o = document.documentElement);
                    for (var k = 0, $ = Object.entries(r); k < $.length; k++) {
                      var _ = t7($[k], 2),
                        x = _[0],
                        w = _[1];
                      o.style.setProperty("--" + x, w)
                    }
                    window.document.documentMode && o === document.documentElement && function e(t) {
                      var n, o = function (e, t) {
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                          if (Array.isArray(e) || (r = tp(e))) {
                            r && (e = r);
                            var n = 0,
                              o = function () { };
                            return {
                              s: o,
                              n: function () {
                                return n >= e.length ? {
                                  done: !0
                                } : {
                                  done: !1,
                                  value: e[n++]
                                }
                              },
                              e: function (e) {
                                throw e
                              },
                              f: o
                            }
                          }
                          throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var r, i, a = !0,
                          c = !1;
                        return {
                          s: function () {
                            r = e[Symbol.iterator]()
                          },
                          n: function () {
                            var e = r.next();
                            return a = e.done, e
                          },
                          e: function (e) {
                            c = !0, i = e
                          },
                          f: function () {
                            try {
                              a || null == r.return || r.return()
                            } finally {
                              if (c) throw i
                            }
                          }
                        }
                      }(document.querySelectorAll("style[data-context=klaro-styles]"));
                      try {
                        for (o.s(); !(n = o.n()).done;) {
                          var r = n.value,
                            i = r.innerText;
                          void 0 !== r.styleSheet && (i = r.styleSheet.cssText);
                          for (var a = 0, c = Object.entries(t); a < c.length; a++) ! function () {
                            var e = tu(c[a], 2),
                              t = e[0],
                              n = e[1],
                              o = RegExp("([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--" + t + ",\\s*[^\\)]+\\)", "g");
                            i = i.replace(o, function (e, o) {
                              return "".concat(o, ": ").concat(n, "; ").concat(o, ": var(--").concat(t, ", ").concat(n, ")")
                            })
                          }();
                          var s = document.createElement("style");
                          s.setAttribute("type", "text/css"), s.setAttribute("data-context", "klaro-styles"), void 0 !== s.styleSheet ? s.styleSheet.cssText = i : s.innerText = i, r.parentElement.appendChild(s), r.parentElement.removeChild(r)
                        }
                      } catch (l) {
                        o.e(l)
                      } finally {
                        o.f()
                      }
                    }(r)
                  }
                }(e, tL, o);
              var i = eg(e),
                a = nt(e),
                c = function () {
                  for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                  // Aqui se aplica idioma por defecto
                  return ek.apply(void 0, [a, i, e.fallbackLang || "en"].concat(n))
                },
                s = eo(es(ti, {
                  t: c,
                  lang: i,
                  manager: r,
                  config: e,
                  testing: t.testing,
                  modal: t.modal,
                  api: t.api,
                  show: n
                }), o);
              return nr(r, c, i, e, t), s
            }
          }
  
          function nr(e, t, n, o, r) {
            var i, a = [],
              c = tK(o.services);
            try {
              for (c.s(); !(i = c.n()).done;) {
                var s, l = i.value,
                  u = e.getConsent(l.name) && e.confirmed,
                  p = tK(document.querySelectorAll("[data-name='" + l.name + "']"));
                try {
                  for (p.s(); !(s = p.n()).done;) {
                    var d = s.value,
                      f = tf(d);
                    if ("placeholder" !== f.type && ("IFRAME" === d.tagName || "DIV" === d.tagName)) {
                      var v = d.previousElementSibling;
                      if (null !== v) {
                        var m = tf(v);
                        "placeholder" === m.type && m.name === l.name || (v = null)
                      }
                      if (null === v) {
                        (v = document.createElement("DIV")).style.maxWidth = d.width + "px", v.style.height = d.height + "px", tv({
                          type: "placeholder",
                          name: l.name
                        }, v), u && (v.style.display = "none"), d.parentElement.insertBefore(v, d);
                        var h = eo(es(tc, {
                          t: t,
                          lang: n,
                          manager: e,
                          config: o,
                          service: l,
                          style: f.style,
                          testing: r.testing,
                          api: r.api
                        }), v);
                        a.push(h)
                      }
                      "IFRAME" === d.tagName && (f.src = d.src), void 0 === f["modified-by-klaro"] && void 0 === d.style.display && (f["original-display"] = d.style.display), f["modified-by-klaro"] = "yes", tv(f, d), u || (d.src = "", d.style.display = "none")
                    }
                  }
                } catch (y) {
                  p.e(y)
                } finally {
                  p.f()
                }
              }
            } catch (g) {
              c.e(g)
            } finally {
              c.f()
            }
            return a
          }
  
          function ni(e) {
            e()
          }
  
          function na(e) {
            var t = tH({}, e);
            return 2 === t.version || (void 0 !== t.apps && void 0 === t.services && (t.services = t.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services`"), delete t.apps), void 0 !== t.translations && void 0 !== t.translations.apps && void 0 === t.services && (t.translations.services = t.translations.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key"), delete t.translations.apps)), t
          }
  
          function nc(e) {
            if (void 0 !== window) {
              var t = function (e) {
                if (null !== document.currentScript && void 0 !== document.currentScript) return document.currentScript;
                for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                  var o = t[n];
                  if (o.src.includes(e)) return o
                }
                return null
              }("klaro"),
                n = new Map(decodeURI(location.hash.slice(1)).split("&").map(function (e) {
                  return e.split("=")
                }).map(function (e) {
                  return 1 === e.length ? [e[0], !0] : e
                })),
                o = n.get("klaro-testing"),
                r = function (e) {
                  var t = tH(tH({}, e), {}, {
                    testing: o
                  });
                  tU.noAutoLoad || tU.testing && !t.testing || no(tU, t)
                };
              if (void 0 !== e) tU = e, ni(function () {
                return r({})
              });
              else if (null !== t) {
                var i = function (e) {
                  var t = e.getAttribute("data-klaro-id");
                  if (null !== t) return t;
                  var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);
                  return null !== n ? n[1] : null
                }(t),
                  a = function (e) {
                    var t = e.getAttribute("data-klaro-api-url");
                    if (null !== t) return t;
                    var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src);
                    return null !== n ? n[1] : null
                  }(t),
                  c = function (e, t) {
                    if (e.has("klaro-config")) return e.get("klaro-config");
                    var n = t.getAttribute("data-klaro-config");
                    return null !== n ? n : "default"
                  }(n, t);
                if (null !== i) {
                  var s = new t6(a, i, {
                    testing: o
                  });
                  if (void 0 !== window.klaroApiConfigs) {
                    if (!0 === ne("apiConfigsLoaded", window.klaroApiConfigs, s)) return;
                    var l = window.klaroApiConfigs.find(function (e) {
                      return e.name === c && ("active" === e.status || o)
                    });
                    void 0 !== l ? (tU = l, ni(function () {
                      return r({
                        api: s
                      })
                    })) : ne("apiConfigsFailed", {})
                  } else s.loadConfig(c).then(function (e) {
                    !0 !== ne("apiConfigsLoaded", [e], s) && (tU = e, ni(function () {
                      return r({
                        api: s
                      })
                    }))
                  }).catch(function (e) {
                    console.error(e, "cannot load Klaro configs"), ne("apiConfigsFailed", e)
                  })
                } else {
                  var u = t.getAttribute("data-klaro-config") || "klaroConfig";
                  void 0 !== (tU = window[u]) && ni(function () {
                    return r({})
                  })
                }
              }
              n.has("klaro-ide") && function (e) {
                var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || "",
                  n = document.createElement("script");
                n.src = "" !== t ? t + "/ide.js" : "ide.js", n.type = "application/javascript";
                var o, r = tK(n.attributes);
                try {
                  for (r.s(); !(o = r.n()).done;) {
                    var i = o.value;
                    n.setAttribute(i.name, i.value)
                  }
                } catch (a) {
                  r.e(a)
                } finally {
                  r.f()
                }
                document.head.appendChild(n)
              }(t)
            }
          }
  
          function ns(e, t, n) {
            return no(e = e || tU, {
              show: !0,
              modal: t,
              api: n
            }), !1
          }
          var nl = {};
  
          function nu() {
            for (var e in Object.keys(nl)) delete nl[e]
          }
  
          function np(e) {
            var t = (e = e || tU).storageName || e.cookieName || "default";
            return void 0 === nl[t] && (nl[t] = new t2(na(e))), nl[t]
          }
  
          function nd() {
            return "v0.7.18".slice(1)
          }
          var nf = n(135),
            nv = n.n(nf),
            nm = n(136),
            nh = n.n(nm),
            ny = n(137),
            ng = n.n(ny),
            nb = n(138),
            nk = n.n(nb),
            n$ = n(139),
            n_ = n.n(n$),
            n8 = n(140),
            nx = n.n(n8),
            nw = n(141),
            nz = n.n(nw),
            nP = n(142),
            nS = n.n(nP),
            n0 = n(143),
            nA = n.n(n0),
            nj = n(144),
            nC = n.n(nj),
            nO = n(145),
            n1 = n.n(nO),
            n3 = n(146),
            nE = n.n(n3),
            n2 = n(147),
            nD = n.n(n2),
            nI = n(148),
            nN = n.n(nI),
            n4 = n(149),
            n6 = n.n(n4),
            n7 = n(150),
            nM = n.n(n7),
            nq = n(151),
            nT = n.n(nq),
            n5 = n(152),
            nR = n.n(n5),
            nU = n(153),
            nL = n.n(nU),
            nW = n(154),
            nH = n.n(nW),
            nB = n(155),
            nF = n.n(nB),
            nK = n(156),
            nV = n.n(nK),
            n9 = n(157),
            nG = n.n(n9),
            nZ = n(158),
            nY = n.n(nZ),
            nQ = t5({
              ca: ng.a,
              cs: nk.a,
              da: n_.a,
              de: nx.a,
              el: nz.a,
              en: nS.a,
              gb: nS.a,
              zh: nv.a,
              pt: nh.a,
              es: nA.a,
              fi: nC.a,
              fr: n1.a,
              gl: nE.a,
              hu: nD.a,
              hr: nN.a,
              it: n6.a,
              nl: nM.a,
              no: nT.a,
              ro: nR.a,
              sr: nL.a,
              sr_cyrl: nH.a,
              sv: nF.a,
              tr: nV.a,
              pl: nG.a,
              ru: nY.a
            });
          tR(tG, nQ), nc()
        }])
      });
  
      const ndc_consentData = {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
        personalization_storage: "granted",
        functionality_storage: "granted",
        security_storage: "granted",
      };
  
      let observer;
  
      function runWhenGTMIsLoaded(callback) {
        //  If gtag is already loaded, call the callback immediately. Otherwise, wait for it to load and  then call the callback.
        if (window.google_tag_manager) {
          callback();
        } else {
          requestAnimationFrame(() => runWhenGTMIsLoaded(callback));
        }
      }
  
      function addEventToButtons(targetNode) {
  
        const acceptAllButton = targetNode.querySelector('.cm-btn.cm-btn-success:not(.cm-btn-info)');
  
        // Si acceptAllButton es null, sal de la función
        if (!acceptAllButton) return;
        // Asegúrate de no agregar el evento más de una vez al mismo botón
        if (!acceptAllButton.dataset.eventAdded) {
  
          acceptAllButton.dataset.eventAdded = 'true'; // Marca el botón como "con evento"
  
          acceptAllButton.addEventListener('click', function () {
            runWhenGTMIsLoaded(() => {
              function gtag() { dataLayer.push(arguments); }
              gtag('consent', 'update', ndc_consentData);
              ndc_consentData.event = "gtm_consent_update";
              window.dataLayer.push(ndc_consentData);
              observer.disconnect();
            });
          });
  
        }
      }
  
      const ndc_klaroBanner = document.querySelector(".klaro .cookie-notice");
  
      if (ndc_klaroBanner) {
        // Select the node that will be observed for mutations
        const ndc_targetNode = document.querySelector(".klaro");
        addEventToButtons(ndc_targetNode);
  
        observer = new MutationObserver(() => addEventToButtons(ndc_targetNode));
  
        observer.observe(ndc_targetNode, { childList: true, subtree: true });
  
      }
    } else {
      // Si el body aún no está disponible, vuelve a revisar en el siguiente frame
      requestAnimationFrame(checkBodyAndInsertElement);
    }
  }
  
  // Inicia la verificación
  checkBodyAndInsertElement();
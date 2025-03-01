!(function () {
    "use strict";
    var e = {
            6664: function (e, t, n) {
                var o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    i =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (e, t) {
                                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                              }
                            : function (e, t) {
                                  e.default = t;
                              }),
                    a =
                        (this && this.__importStar) ||
                        function (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                            return i(t, e), t;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 });
                var u = n(6654),
                    c = a(n(1920));
                function s(e) {
                    void 0 === e && (e = !1), u.initializePopovers(e), u.initializePopups(e), u.initializeSidetabs(e), u.initializeSliders(e), u.initializeWidgets(e);
                }
                var l = function () {
                    return s(!1);
                };
                (e.exports = o(o({}, c), {
                    load: l,
                    reload: function () {
                        return s(!0);
                    },
                })),
                    document.addEventListener("DOMContentLoaded", l, !1),
                    ("interactive" !== document.readyState && "complete" !== document.readyState) || l();
            },
            8027: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.DEFAULT_DOMAIN = t.POPUP_SIZE = t.SLIDER_WIDTH = t.SLIDER_POSITION = t.SIDETAB_ATTRIBUTE = t.WIDGET_ATTRIBUTE = t.SLIDER_ATTRIBUTE = t.POPUP_ATTRIBUTE = t.POPOVER_ATTRIBUTE = void 0),
                    (t.POPOVER_ATTRIBUTE = "data-tf-popover"),
                    (t.POPUP_ATTRIBUTE = "data-tf-popup"),
                    (t.SLIDER_ATTRIBUTE = "data-tf-slider"),
                    (t.WIDGET_ATTRIBUTE = "data-tf-widget"),
                    (t.SIDETAB_ATTRIBUTE = "data-tf-sidetab"),
                    (t.SLIDER_POSITION = "right"),
                    (t.SLIDER_WIDTH = 800),
                    (t.POPUP_SIZE = 100),
                    (t.DEFAULT_DOMAIN = "form.typeform.com");
            },
            7528: function (e, t, n) {
                var o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    r =
                        (this && this.__rest) ||
                        function (e, t) {
                            var n = {};
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                            }
                            return n;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createPopover = void 0);
                var i = n(6797),
                    a = n(1320),
                    u = function (e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t));
                    },
                    c = function (e, t) {
                        void 0 === e && (e = "div"), void 0 === t && (t = "tf-v1-popover-button-icon");
                        var n = document.createElement(e);
                        return (n.className = t + " tf-v1-close-icon"), (n.innerHTML = "&times;"), (n.dataset.testid = t), n;
                    },
                    s = { buttonColor: "#3a7685" };
                t.createPopover = function (e, t) {
                    void 0 === t && (t = {});
                    var n,
                        l,
                        d,
                        f = o(o({}, s), t),
                        p = f.domain,
                        v = r(f, ["domain"]),
                        m = i.createIframe("popover", { formId: e, domain: p, options: v }),
                        h = m.iframe,
                        b = m.embedId,
                        y = m.refresh,
                        g = m.focus,
                        w = (function (e, t) {
                            var n = document.createElement("div");
                            return (n.className = "tf-v1-popover"), (n.dataset.testid = "tf-v1-popover"), i.setElementSize(n, { width: e, height: t });
                        })(v.width, v.height),
                        O = (function () {
                            var e = document.createElement("div");
                            return (e.className = "tf-v1-popover-wrapper"), (e.dataset.testid = "tf-v1-popover-wrapper"), e;
                        })(),
                        _ = (function (e, t) {
                            var n = i.getTextColor(t),
                                o = document.createElement("div");
                            o.className = "tf-v1-popover-button-icon";
                            var r =
                                    '<svg class="default" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                                    n +
                                    '"></path>\n  </svg>',
                                a = null == e ? void 0 : e.startsWith("http");
                            return (o.innerHTML = a ? "<img alt='popover trigger icon button' src='" + e + "'/>" : null != e ? e : r), (o.dataset.testid = "default-icon"), o;
                        })(v.customIcon, v.buttonColor || s.buttonColor),
                        P = (function () {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return (t.className = "tf-v1-popover-button-icon"), (t.dataset.testid = "spinner-icon"), t.append(e), t;
                        })(),
                        E = c(),
                        j = c("a", "tf-v1-popover-close"),
                        I = (function (e) {
                            var t = i.getTextColor(e),
                                n = document.createElement("button");
                            return (n.className = "tf-v1-popover-button"), (n.dataset.testid = "tf-v1-popover-button"), (n.style.backgroundColor = e), (n.style.color = t), n;
                        })(v.buttonColor || s.buttonColor);
                    (v.container || document.body).append(w), O.append(h), w.append(I), w.append(j), I.append(_);
                    var T = function () {
                        l &&
                            l.parentNode &&
                            (l.classList.add("closing"),
                            setTimeout(function () {
                                i.unmountElement(l);
                            }, 250));
                    };
                    v.tooltip &&
                        v.tooltip.length > 0 &&
                        ((l = (function (e, t) {
                            var n = document.createElement("span");
                            (n.className = "tf-v1-popover-tooltip-close"), (n.dataset.testid = "tf-v1-popover-tooltip-close"), (n.innerHTML = "&times;"), (n.onclick = t);
                            var o = document.createElement("div");
                            (o.className = "tf-v1-popover-tooltip-text"), (o.innerHTML = e);
                            var r = document.createElement("div");
                            return (r.className = "tf-v1-popover-tooltip"), (r.dataset.testid = "tf-v1-popover-tooltip"), r.appendChild(o), r.appendChild(n), r;
                        })(v.tooltip, T)),
                        w.append(l)),
                        v.notificationDays && (v.enableSandbox || a.canBuildNotificationDot(e)) && ((d = a.buildNotificationDot()), I.append(d)),
                        (h.onload = function () {
                            w.classList.add("open"), (O.style.opacity = "1"), (j.style.opacity = "1"), u(P, E), i.addCustomKeyboardListener(M);
                        });
                    var S = i.makeAutoResize(w),
                        C = function () {
                            i.isOpen(O) ||
                                (T(),
                                d &&
                                    (d.classList.add("closing"),
                                    v.notificationDays && !v.enableSandbox && a.saveNotificationDotHideUntilTime(e, v.notificationDays),
                                    setTimeout(function () {
                                        i.unmountElement(d);
                                    }, 250)),
                                S(),
                                window.addEventListener("resize", S),
                                setTimeout(function () {
                                    i.isInPage(O)
                                        ? ((O.style.opacity = "0"),
                                          (j.style.opacity = "0"),
                                          (O.style.display = "flex"),
                                          setTimeout(function () {
                                              w.classList.add("open"), (O.style.opacity = "1"), (j.style.opacity = "1");
                                          }),
                                          u(_, E))
                                        : (w.append(O), u(_, P), (O.style.opacity = "0"), (j.style.opacity = "0"));
                                }));
                        },
                        M = function () {
                            var e;
                            i.isOpen(w) &&
                                (null === (e = t.onClose) || void 0 === e || e.call(t),
                                setTimeout(function () {
                                    v.keepSession ? (O.style.display = "none") : i.unmountElement(O), w.classList.remove("open"), u(E, _);
                                }, 250));
                        };
                    i.setAutoClose(b, v.autoClose, M);
                    var L = function () {
                        i.isOpen(O) ? M() : C();
                    };
                    return (
                        (I.onclick = L),
                        (j.onclick = M),
                        v.open && !i.isOpen(O) && (n = i.handleCustomOpen(C, v.open, v.openValue)),
                        {
                            open: C,
                            close: M,
                            toggle: L,
                            refresh: y,
                            focus: g,
                            unmount: function () {
                                i.unmountElement(w), window.removeEventListener("resize", S), v.open && (null == n ? void 0 : n.remove) && n.remove();
                            },
                        }
                    );
                };
            },
            1797: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(7528), t), r(n(6100), t);
            },
            1320: function (e, t) {
                var n =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (n =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                    return e;
                                }),
                            n.apply(this, arguments)
                        );
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildNotificationDot = t.canBuildNotificationDot = t.saveNotificationDotHideUntilTime = void 0);
                var o = "tfNotificationData",
                    r = function () {
                        var e = localStorage.getItem(o);
                        return e ? JSON.parse(e) : {};
                    },
                    i = function (e) {
                        e && localStorage.setItem(o, JSON.stringify(e));
                    };
                (t.saveNotificationDotHideUntilTime = function (e, t) {
                    var o,
                        a = new Date();
                    a.setDate(a.getDate() + t), i(n(n({}, r()), (((o = {})[e] = { hideUntilTime: a.getTime() }), o)));
                }),
                    (t.canBuildNotificationDot = function (e) {
                        var t = (function (e) {
                            var t;
                            return (null === (t = r()[e]) || void 0 === t ? void 0 : t.hideUntilTime) || 0;
                        })(e);
                        return (
                            new Date().getTime() > t &&
                            (t &&
                                (function (e) {
                                    var t = r();
                                    delete t[e], i(t);
                                })(e),
                            !0)
                        );
                    }),
                    (t.buildNotificationDot = function () {
                        var e = document.createElement("span");
                        return (e.className = "tf-v1-popover-unread-dot"), (e.dataset.testid = "tf-v1-popover-unread-dot"), e;
                    });
            },
            6100: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
            },
            9630: function (e, t, n) {
                var o =
                    (this && this.__rest) ||
                    function (e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createPopup = void 0);
                var r = n(6797),
                    i = n(8027),
                    a = n(6797);
                t.createPopup = function (e, t) {
                    if ((void 0 === t && (t = {}), !r.hasDom())) return { open: function () {}, close: function () {}, toggle: function () {}, refresh: function () {}, focus: function () {}, unmount: function () {} };
                    var n,
                        u = t.width,
                        c = t.height,
                        s = t.size,
                        l = void 0 === s ? i.POPUP_SIZE : s,
                        d = t.onClose,
                        f = t.domain,
                        p = o(t, ["width", "height", "size", "onClose", "domain"]),
                        v = r.createIframe("popup", { formId: e, domain: f, options: p }),
                        m = v.iframe,
                        h = v.embedId,
                        b = v.refresh,
                        y = v.focus,
                        g = document.body.style.overflow,
                        w = (function () {
                            var e = document.createElement("div");
                            return (e.className = "tf-v1-popup"), (e.dataset.testid = "tf-v1-popup"), (e.style.opacity = "0"), e;
                        })(),
                        O = (function () {
                            var e = document.createElement("div");
                            return (e.className = "tf-v1-spinner"), e;
                        })(),
                        _ = (function (e, t, n) {
                            var o = document.createElement("div");
                            return (
                                (o.className = "tf-v1-iframe-wrapper"),
                                (o.style.opacity = "0"),
                                r.isDefined(e) && r.isDefined(t) ? r.setElementSize(o, { width: e, height: t }) : ((o.style.width = "calc(" + n + "% - 80px)"), (o.style.height = "calc(" + n + "% - 80px)"), o)
                            );
                        })(u, c, l);
                    _.append(m), w.append(O), w.append(_);
                    var P = p.container || document.body;
                    m.onload = function () {
                        (_.style.opacity = "1"),
                            setTimeout(function () {
                                O.style.display = "none";
                            }, 250),
                            r.addCustomKeyboardListener(I);
                    };
                    var E = a.makeAutoResize(w),
                        j = function () {
                            a.isOpen(w) ||
                                (a.isInPage(w) ? (w.style.display = "flex") : ((O.style.display = "block"), P.append(w)),
                                (document.body.style.overflow = "hidden"),
                                E(),
                                window.addEventListener("resize", E),
                                setTimeout(function () {
                                    w.style.opacity = "1";
                                }));
                        },
                        I = function () {
                            a.isOpen(w) &&
                                (null == d || d(),
                                (w.style.opacity = "0"),
                                (document.body.style.overflow = g),
                                setTimeout(function () {
                                    p.keepSession ? (w.style.display = "none") : T();
                                }, 250));
                        };
                    _.append(
                        (function (e) {
                            var t = document.createElement("a");
                            return (t.className = "tf-v1-close tf-v1-close-icon"), (t.innerHTML = "&times;"), (t.onclick = e), t;
                        })(I)
                    ),
                        r.setAutoClose(h, p.autoClose, I),
                        p.open && !a.isOpen(w) && (n = r.handleCustomOpen(j, p.open, p.openValue));
                    var T = function () {
                        r.unmountElement(w), window.removeEventListener("resize", E), p.open && (null == n ? void 0 : n.remove) && n.remove();
                    };
                    return {
                        open: j,
                        close: I,
                        toggle: function () {
                            a.isOpen(w) ? I() : j();
                        },
                        refresh: b,
                        focus: y,
                        unmount: T,
                    };
                };
            },
            5970: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(9630), t), r(n(7394), t);
            },
            7394: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
            },
            382: function (e, t, n) {
                var o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    r =
                        (this && this.__rest) ||
                        function (e, t) {
                            var n = {};
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                            }
                            return n;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSidetab = void 0);
                var i = n(6797),
                    a = { buttonColor: "#3a7685", buttonText: "Launch me" },
                    u = function (e, t) {
                        void 0 === e && (e = "div"), void 0 === t && (t = "tf-v1-sidetab-button-icon");
                        var n = document.createElement(e);
                        return (n.className = t + " tf-v1-close-icon"), (n.innerHTML = "&times;"), (n.dataset.testid = t), n;
                    },
                    c = function (e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t));
                    };
                t.createSidetab = function (e, t) {
                    void 0 === t && (t = {});
                    var n,
                        s = o(o({}, a), t),
                        l = s.domain,
                        d = r(s, ["domain"]),
                        f = i.createIframe("side-tab", { formId: e, domain: l, options: d }),
                        p = f.iframe,
                        v = f.embedId,
                        m = f.refresh,
                        h = f.focus,
                        b = (function (e, t) {
                            var n = document.createElement("div");
                            return (n.className = "tf-v1-sidetab"), (n.dataset.testid = "tf-v1-sidetab"), i.setElementSize(n, { width: e, height: t });
                        })(d.width, d.height),
                        y = (function () {
                            var e = document.createElement("div");
                            return (e.className = "tf-v1-sidetab-wrapper"), (e.dataset.testid = "tf-v1-sidetab-wrapper"), e;
                        })(),
                        g = (function () {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return (t.className = "tf-v1-sidetab-button-icon"), (t.dataset.testid = "spinner-icon"), t.append(e), t;
                        })(),
                        w = (function (e) {
                            var t = i.getTextColor(e),
                                n = document.createElement("button");
                            return (n.className = "tf-v1-sidetab-button"), (n.style.backgroundColor = e), (n.style.color = t), n;
                        })(d.buttonColor || a.buttonColor),
                        O = (function (e) {
                            var t = document.createElement("span");
                            return (t.className = "tf-v1-sidetab-button-text"), (t.innerHTML = e), t;
                        })(d.buttonText || a.buttonText),
                        _ = (function (e, t) {
                            var n = i.getTextColor(t),
                                o = document.createElement("div");
                            o.className = "tf-v1-sidetab-button-icon";
                            var r =
                                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                                    n +
                                    '"></path>\n  </svg>',
                                a = null == e ? void 0 : e.startsWith("http");
                            return (o.innerHTML = a ? "<img alt='popover trigger icon button' src='" + e + "'/>" : null != e ? e : r), (o.dataset.testid = "default-icon"), o;
                        })(d.customIcon, d.buttonColor || a.buttonColor),
                        P = u(),
                        E = u("a", "tf-v1-sidetab-close");
                    (d.container || document.body).append(b),
                        y.append(p),
                        b.append(w),
                        b.append(E),
                        w.append(_),
                        w.append(O),
                        setTimeout(function () {
                            b.classList.add("ready");
                        }, 250),
                        (p.onload = function () {
                            b.classList.add("open"), c(g, P), i.addCustomKeyboardListener(T);
                        });
                    var j = i.makeAutoResize(b),
                        I = function () {
                            i.isOpen(y) || (j(), window.addEventListener("resize", j), i.isInPage(y) ? ((y.style.display = "flex"), b.classList.add("open"), c(_, P)) : (b.append(y), c(_, g)));
                        },
                        T = function () {
                            var e;
                            i.isOpen(y) &&
                                (null === (e = d.onClose) || void 0 === e || e.call(d),
                                b.classList.remove("open"),
                                setTimeout(function () {
                                    d.keepSession ? (y.style.display = "none") : i.unmountElement(y), c(P, _);
                                }, 250));
                        };
                    i.setAutoClose(v, d.autoClose, T);
                    var S = function () {
                        i.isOpen(y) ? T() : I();
                    };
                    return (
                        (w.onclick = S),
                        (E.onclick = T),
                        d.open && !i.isOpen(y) && (n = i.handleCustomOpen(I, d.open, d.openValue)),
                        {
                            open: I,
                            close: T,
                            toggle: S,
                            refresh: m,
                            focus: h,
                            unmount: function () {
                                i.unmountElement(b), window.removeEventListener("resize", j), d.open && (null == n ? void 0 : n.remove) && n.remove();
                            },
                        }
                    );
                };
            },
            1434: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(382), t), r(n(7668), t);
            },
            7668: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
            },
            2603: function (e, t, n) {
                var o =
                    (this && this.__rest) ||
                    function (e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSlider = void 0);
                var r = n(6797),
                    i = n(8027);
                t.createSlider = function (e, t) {
                    if ((void 0 === t && (t = {}), !r.hasDom())) return { open: function () {}, close: function () {}, toggle: function () {}, refresh: function () {}, focus: function () {}, unmount: function () {} };
                    var n,
                        a = t.position,
                        u = void 0 === a ? i.SLIDER_POSITION : a,
                        c = t.width,
                        s = void 0 === c ? i.SLIDER_WIDTH : c,
                        l = t.onClose,
                        d = t.domain,
                        f = o(t, ["position", "width", "onClose", "domain"]),
                        p = r.createIframe("slider", { formId: e, domain: d, options: f }),
                        v = p.iframe,
                        m = p.embedId,
                        h = p.refresh,
                        b = p.focus,
                        y = document.body.style.overflow,
                        g = (function (e) {
                            var t = document.createElement("div");
                            return (t.className = "tf-v1-slider " + e), (t.dataset.testid = "tf-v1-slider"), (t.style.opacity = "0"), t;
                        })(u),
                        w = (function () {
                            var e = document.createElement("div");
                            return (e.className = "tf-v1-spinner"), e;
                        })(),
                        O = (function (e, t) {
                            var n = document.createElement("div");
                            return (n.className = "tf-v1-iframe-wrapper"), (n.style[e] = "-100%"), r.setElementSize(n, { width: t });
                        })(u, s);
                    O.append(v), g.append(w), g.append(O);
                    var _ = f.container || document.body;
                    v.onload = function () {
                        (O.style[u] = "0"),
                            setTimeout(function () {
                                w.style.display = "none";
                            }, 500),
                            r.addCustomKeyboardListener(j);
                    };
                    var P = r.makeAutoResize(g),
                        E = function () {
                            r.isOpen(g) ||
                                (P(),
                                window.addEventListener("resize", P),
                                r.isInPage(g)
                                    ? ((g.style.display = "flex"),
                                      setTimeout(function () {
                                          O.style[u] = "0";
                                      }))
                                    : (_.append(g), (w.style.display = "block")),
                                (document.body.style.overflow = "hidden"),
                                setTimeout(function () {
                                    g.style.opacity = "1";
                                }));
                        },
                        j = function () {
                            r.isOpen(g) &&
                                (null == l || l(),
                                (g.style.opacity = "0"),
                                (O.style[u] = "-100%"),
                                (document.body.style.overflow = y),
                                setTimeout(function () {
                                    f.keepSession ? (g.style.display = "none") : I();
                                }, 500));
                        };
                    r.setAutoClose(m, f.autoClose, j),
                        O.append(
                            (function (e) {
                                var t = document.createElement("a");
                                return (t.className = "tf-v1-close tf-v1-close-icon"), (t.innerHTML = "&times;"), (t.onclick = e), t;
                            })(j)
                        ),
                        f.open && !r.isOpen(g) && (n = r.handleCustomOpen(E, f.open, f.openValue));
                    var I = function () {
                        r.unmountElement(g), window.removeEventListener("resize", P), f.open && (null == n ? void 0 : n.remove) && n.remove();
                    };
                    return {
                        open: E,
                        close: j,
                        toggle: function () {
                            r.isOpen(g) ? j() : E();
                        },
                        refresh: h,
                        focus: b,
                        unmount: I,
                    };
                };
            },
            4071: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(2603), t), r(n(3162), t);
            },
            3162: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
            },
            718: function (e, t, n) {
                var o =
                        (this && this.__rest) ||
                        function (e, t) {
                            var n = {};
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                            }
                            return n;
                        },
                    r =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var o,
                                r,
                                i = n.call(e),
                                a = [];
                            try {
                                for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; ) a.push(o.value);
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return a;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createWidget = void 0);
                var i = n(6797),
                    a = n(8554),
                    u = n(2313),
                    c = n(1126);
                t.createWidget = function (e, t) {
                    if (!i.hasDom()) return { refresh: function () {}, focus: function () {}, unmount: function () {} };
                    var n = t.domain,
                        s = o(t, ["domain"]);
                    (s.inlineOnMobile = t.inlineOnMobile || t.fullScreen), s.inlineOnMobile || (!s.forceTouch && !i.isFullscreen()) || ((s.displayAsFullScreenModal = !0), (s.forceTouch = !0));
                    var l,
                        d = i.createIframe("widget", { formId: e, domain: n, options: s }),
                        f = d.embedId,
                        p = d.iframe,
                        v = d.refresh,
                        m = d.focus,
                        h = u.buildWidget(p, s.width, s.height);
                    if ((s.fullScreen && (c.overrideFullScreenStyles(t.container, p), (l = i.makeAutoResize(t.container, !0)), window.addEventListener("resize", l), l()), s.autoResize)) {
                        var b = r(
                                "string" == typeof s.autoResize
                                    ? s.autoResize.split(",").map(function (e) {
                                          return parseInt(e);
                                      })
                                    : [],
                                2
                            ),
                            y = b[0],
                            g = b[1];
                        window.addEventListener(
                            "message",
                            a.getFormHeightChangedHandler(f, function (e) {
                                var n = Math.max(e.height, y || 0);
                                g && (n = Math.min(n, g)), (t.container.style.height = n + "px");
                            })
                        );
                    }
                    s.autoFocus &&
                        window.addEventListener(
                            "message",
                            a.getFormReadyHandler(f, function () {
                                setTimeout(function () {
                                    m();
                                }, 1e3);
                            })
                        );
                    var w,
                        O = function () {
                            return t.container.append(h);
                        };
                    if (((t.container.innerHTML = ""), t.lazy ? i.lazyInitialize(t.container, O) : O(), s.displayAsFullScreenModal)) {
                        var _ = "",
                            P = t.container;
                        l = i.makeAutoResize(P);
                        var E = P.style.height;
                        window.addEventListener(
                            "message",
                            a.getWelcomeScreenHiddenHandler(f, function () {
                                P.classList.add("tf-v1-widget-fullscreen"), void 0 !== t.opacity && (P.style.backgroundColor = _), l(), window.addEventListener("resize", l);
                            })
                        ),
                            window.addEventListener(
                                "message",
                                a.getFormThemeHandler(f, function (e) {
                                    var t;
                                    _ = i.changeColorOpacity(null === (t = null == e ? void 0 : e.theme) || void 0 === t ? void 0 : t.backgroundColor);
                                })
                            );
                        var j = (((w = document.createElement("a")).className = "tf-v1-widget-close tf-v1-close-icon"), (w.innerHTML = "&times;"), w);
                        (j.onclick = function () {
                            var e;
                            if (
                                (window.removeEventListener("resize", l),
                                (P.style.height = E),
                                null === (e = t.onClose) || void 0 === e || e.call(t),
                                P.classList.remove("tf-v1-widget-fullscreen"),
                                (P.style.backgroundColor = ""),
                                t.keepSession)
                            ) {
                                var n = document.createElement("div");
                                (n.className = "tf-v1-widget-iframe-overlay"),
                                    (n.onclick = function () {
                                        P.classList.add("tf-v1-widget-fullscreen"), i.unmountElement(n);
                                    }),
                                    h.append(n);
                            } else (t.container.innerHTML = ""), O(), P.append(j);
                        }),
                            P.append(j);
                    }
                    return {
                        refresh: v,
                        focus: m,
                        unmount: function () {
                            l && window.removeEventListener("resize", l), i.unmountElement(h);
                        },
                    };
                };
            },
            1419: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildWidget = void 0);
                var o = n(6797);
                t.buildWidget = function (e, t, n) {
                    var r = document.createElement("div");
                    return (r.className = "tf-v1-widget"), (r.dataset.testid = "tf-v1-widget"), r.append(e), o.setElementSize(r, { width: t, height: n });
                };
            },
            2313: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1419), t);
            },
            1126: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.overrideFullScreenStyles = void 0),
                    (t.overrideFullScreenStyles = function (e, t) {
                        Object.assign(e.style, { zIndex: "10001", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }), (t.style.borderRadius = "0"), Object.assign(document.body.style, { overflow: "hidden" });
                    });
            },
            9321: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(718), t), r(n(4058), t);
            },
            4058: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 });
            },
            1920: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1797), t), r(n(5970), t), r(n(4071), t), r(n(9321), t), r(n(1434), t);
            },
            5455: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildOptionsFromAttributes = void 0);
                var o = n(6797);
                t.buildOptionsFromAttributes = function (e) {
                    return o.loadOptionsFromAttributes(e, {
                        source: "string",
                        domain: "string",
                        medium: "string",
                        mediumVersion: "string",
                        open: "string",
                        openValue: "integer",
                        hideFooter: "boolean",
                        hideHeaders: "boolean",
                        opacity: "integer",
                        disableTracking: "boolean",
                        onReady: "function",
                        onSubmit: "function",
                        onQuestionChanged: "function",
                        onHeightChanged: "function",
                        autoResize: "stringOrBoolean",
                        onClose: "function",
                        onEndingButtonClick: "function",
                        transitiveSearchParams: "arrayOrBoolean",
                        hidden: "record",
                        chat: "boolean",
                        buttonColor: "string",
                        customIcon: "string",
                        width: "integer",
                        height: "integer",
                        size: "integer",
                        buttonText: "string",
                        position: "string",
                        enableSandbox: "boolean",
                        tooltip: "string",
                        notificationDays: "integer",
                        autoClose: "integerOrBoolean",
                        shareGaInstance: "stringOrBoolean",
                        forceTouch: "boolean",
                        inlineOnMobile: "boolean",
                        autoFocus: "boolean",
                        tracking: "record",
                        redirectTarget: "string",
                        iframeProps: "record",
                        lazy: "boolean",
                        keepSession: "boolean",
                        hubspot: "boolean",
                        disableScroll: "boolean",
                        fullScreen: "boolean",
                        noHeading: "boolean",
                    });
                };
            },
            6654: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(8806), t), r(n(8933), t), r(n(7833), t), r(n(5361), t), r(n(2103), t);
            },
            8806: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializePopovers = void 0);
                var o = n(1797),
                    r = n(8027),
                    i = n(7308);
                t.initializePopovers = function (e) {
                    void 0 === e && (e = !1),
                        i.initialize(r.POPOVER_ATTRIBUTE, "popover.css", e, function (e, t, n) {
                            var r = o.createPopover(e, t).toggle;
                            n.onclick = r;
                        });
                };
            },
            8933: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializePopups = void 0);
                var o = n(5970),
                    r = n(8027),
                    i = n(7308);
                t.initializePopups = function (e) {
                    void 0 === e && (e = !1),
                        i.initialize(r.POPUP_ATTRIBUTE, "popup.css", e, function (e, t, n) {
                            var r = o.createPopup(e, t).toggle;
                            n.onclick = r;
                        });
                };
            },
            2103: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeSidetabs = void 0);
                var o = n(1434),
                    r = n(8027),
                    i = n(7308);
                t.initializeSidetabs = function (e) {
                    void 0 === e && (e = !1),
                        i.initialize(r.SIDETAB_ATTRIBUTE, "sidetab.css", e, function (e, t) {
                            o.createSidetab(e, t);
                        });
                };
            },
            7833: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeSliders = void 0);
                var o = n(4071),
                    r = n(8027),
                    i = n(7308);
                t.initializeSliders = function (e) {
                    void 0 === e && (e = !1),
                        i.initialize(r.SLIDER_ATTRIBUTE, "slider.css", e, function (e, t, n) {
                            var r = o.createSlider(e, t).toggle;
                            n.onclick = r;
                        });
                };
            },
            5361: function (e, t, n) {
                var o =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (o =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                    return e;
                                }),
                            o.apply(this, arguments)
                        );
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeWidgets = void 0);
                var r = n(9321),
                    i = n(8027),
                    a = n(7308);
                t.initializeWidgets = function (e) {
                    void 0 === e && (e = !1),
                        a.initialize(i.WIDGET_ATTRIBUTE, "widget.css", e, function (e, t, n) {
                            r.createWidget(e, o(o({}, t), { container: n }));
                        });
                };
            },
            7308: function (e, t, n) {
                var o =
                        (this && this.__awaiter) ||
                        function (e, t, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(e) {
                                    try {
                                        c(o.next(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function u(e) {
                                    try {
                                        c(o.throw(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done
                                        ? r(e.value)
                                        : ((t = e.value),
                                          t instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t);
                                                })).then(a, u);
                                }
                                c((o = o.apply(e, t || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = { next: u(0), throw: u(1), return: u(2) }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function u(i) {
                                return function (u) {
                                    return (function (i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a; )
                                            try {
                                                if (((n = 1), o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done)) return r;
                                                switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: i[1], done: !1 };
                                                    case 5:
                                                        a.label++, (o = i[1]), (i = [0]);
                                                        continue;
                                                    case 7:
                                                        (i = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                            a.label = i[1];
                                                            break;
                                                        }
                                                        if (6 === i[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = i);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(i);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                i = t.call(e, a);
                                            } catch (e) {
                                                (i = [6, e]), (o = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 };
                                    })([i, u]);
                                };
                            }
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.initialize = void 0);
                var i = n(6797),
                    a = n(5455);
                t.initialize = function (e, t, n, u) {
                    return (
                        void 0 === n && (n = !1),
                        o(void 0, void 0, void 0, function () {
                            var o, c, s, l;
                            return r(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        (o = document.querySelectorAll("[" + e + "]")).length > 0 && i.includeCss(t), (c = 0), (r.label = 1);
                                    case 1:
                                        if (!(c < o.length)) return [3, 5];
                                        if (((s = o.item(c)), !n && "true" === s.dataset.tfLoaded)) return [3, 4];
                                        if (!(l = s.getAttribute(e))) throw new Error("Invalid " + e + "=" + l + " for embed #" + c);
                                        return s.hasAttribute("data-tf-hubspot") ? [4, i.waitForHubspotCookie()] : [3, 3];
                                    case 2:
                                        r.sent(), (r.label = 3);
                                    case 3:
                                        u(l, a.buildOptionsFromAttributes(s), s), (s.dataset.tfLoaded = "true"), (r.label = 4);
                                    case 4:
                                        return (c += 1), [3, 1];
                                    case 5:
                                        return [2];
                                }
                            });
                        })
                    );
                };
            },
            3626: function (e, t, n) {
                var o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    r =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var o,
                                r,
                                i = n.call(e),
                                a = [];
                            try {
                                for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; ) a.push(o.value);
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return a;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildIframeSrc = void 0);
                var i = n(8027),
                    a = n(4527),
                    u = n(2346),
                    c = n(2698),
                    s = n(863),
                    l = { widget: "embed-widget", popup: "popup-blank", slider: "popup-drawer", popover: "popup-popover", "side-tab": "popup-side-panel" };
                t.buildIframeSrc = function (e) {
                    var t = e.domain,
                        n = e.formId,
                        d = e.type,
                        f = e.embedId,
                        p = e.options,
                        v = (function (e, t, n) {
                            var r = n.transitiveSearchParams,
                                i = n.source,
                                a = n.medium,
                                u = n.mediumVersion,
                                s = n.hideFooter,
                                d = n.hideHeaders,
                                f = n.opacity,
                                p = n.disableTracking,
                                v = n.enableSandbox,
                                m = n.shareGaInstance,
                                h = n.forceTouch,
                                b = n.displayAsFullScreenModal,
                                y = n.tracking,
                                g = n.redirectTarget,
                                w = n.autoResize,
                                O = n.disableScroll,
                                _ = n.onEndingButtonClick,
                                P = n.noHeading,
                                E = c.getTransitiveSearchParams(r);
                            return o(
                                o(
                                    o(
                                        {},
                                        {
                                            "typeform-embed-id": t,
                                            "typeform-embed": l[e],
                                            "typeform-source": i,
                                            "typeform-medium": a,
                                            "typeform-medium-version": u,
                                            "embed-hide-footer": s ? "true" : void 0,
                                            "embed-hide-headers": d ? "true" : void 0,
                                            "embed-opacity": f,
                                            "disable-tracking": p || v ? "true" : void 0,
                                            "__dangerous-disable-submissions": v ? "true" : void 0,
                                            "share-ga-instance": m ? "true" : void 0,
                                            "force-touch": h ? "true" : void 0,
                                            "add-placeholder-ws": "widget" === e && b ? "true" : void 0,
                                            "typeform-embed-redirect-target": g,
                                            "typeform-embed-auto-resize": w ? "true" : void 0,
                                            "typeform-embed-disable-scroll": O ? "true" : void 0,
                                            "typeform-embed-handle-ending-button-click": _ ? "true" : void 0,
                                            "typeform-embed-no-heading": P ? "true" : void 0,
                                        }
                                    ),
                                    E
                                ),
                                y
                            );
                        })(
                            d,
                            f,
                            (function (e) {
                                return (
                                    e.noHeading || (e.noHeading = document.querySelectorAll("h1").length > 0),
                                    o(
                                        o(
                                            {},
                                            { source: null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.hostname.replace(/^www\./, ""), medium: "embed-sdk", mediumVersion: "next" }
                                        ),
                                        a.removeUndefinedKeys(e)
                                    )
                                );
                                var t;
                            })(p)
                        ),
                        m = (function (e, t, n) {
                            return void 0 === t && (t = i.DEFAULT_DOMAIN), void 0 === n && (n = !1), e.startsWith("http://") || e.startsWith("https://") ? new URL(e) : new URL("https://" + t + "/" + (n ? "c" : "to") + "/" + e);
                        })(n, t, p.chat);
                    if (
                        (Object.entries(v)
                            .filter(function (e) {
                                var t = r(e, 2)[1];
                                return u.isDefined(t);
                            })
                            .forEach(function (e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    o = t[1];
                                m.searchParams.set(n, o);
                            }),
                        p.hubspot)
                    ) {
                        var h = s.getHubspotHiddenFields();
                        p.hidden = o(o({}, p.hidden), h);
                    }
                    if (p.hidden) {
                        var b = new URLSearchParams();
                        Object.entries(p.hidden)
                            .filter(function (e) {
                                var t = r(e, 2)[1];
                                return u.isDefined(t) && "" !== t;
                            })
                            .forEach(function (e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    o = t[1];
                                "boolean" == typeof p.transitiveSearchParams && m.searchParams.delete(n), b.set(n, o);
                            });
                        var y = b.toString();
                        y && (m.hash = y);
                    }
                    return m.href;
                };
            },
            2391: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.changeColorOpacity = void 0),
                    (t.changeColorOpacity = function (e, t) {
                        return void 0 === e && (e = ""), void 0 === t && (t = 255), e.startsWith("rgba(") ? (null == e ? void 0 : e.replace(/, [\d.]+\)$/, ", " + t + ")")) : e;
                    });
            },
            8972: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleCustomOpen = void 0);
                var n = { remove: function () {} };
                t.handleCustomOpen = function (e, t, o) {
                    switch (t) {
                        case "load":
                            return e(), n;
                        case "exit":
                            return o
                                ? (function (e, t) {
                                      var n = 0,
                                          o = function (r) {
                                              r.clientY < e && r.clientY < n ? (document.removeEventListener("mousemove", o, !0), t()) : (n = r.clientY);
                                          };
                                      return (
                                          document.addEventListener("mousemove", o, !0),
                                          {
                                              remove: function () {
                                                  return document.removeEventListener("mousemove", o, !0);
                                              },
                                          }
                                      );
                                  })(o, e)
                                : n;
                        case "time":
                            return (
                                setTimeout(function () {
                                    e();
                                }, o),
                                n
                            );
                        case "scroll":
                            return o
                                ? (function (e, t) {
                                      function n() {
                                          var o = window.pageYOffset || document.documentElement.scrollTop,
                                              r = document.documentElement.clientTop || 0,
                                              i = document.documentElement.scrollHeight,
                                              a = o - r,
                                              u = (a / i) * 100,
                                              c = a + window.innerHeight >= i;
                                          (u >= e || c) && (t(), document.removeEventListener("scroll", n));
                                      }
                                      return (
                                          document.addEventListener("scroll", n),
                                          {
                                              remove: function () {
                                                  return document.removeEventListener("scroll", n);
                                              },
                                          }
                                      );
                                  })(o, e)
                                : n;
                        default:
                            return n;
                    }
                };
            },
            1553: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.createIframe = void 0);
                var o = n(3626),
                    r = n(6797),
                    i = n(8866),
                    a = n(8554),
                    u = n(2256),
                    c = n(7144),
                    s = n(5511);
                t.createIframe = function (e, t) {
                    var n = t.formId,
                        l = t.domain,
                        d = t.options,
                        f = i.generateEmbedId(),
                        p = d.iframeProps,
                        v = void 0 === p ? {} : p,
                        m = d.onReady,
                        h = d.onQuestionChanged,
                        b = d.onHeightChanged,
                        y = d.onSubmit,
                        g = d.onEndingButtonClick,
                        w = d.shareGaInstance,
                        O = o.buildIframeSrc({ formId: n, domain: l, embedId: f, type: e, options: d }),
                        _ = document.createElement("iframe");
                    return (
                        (_.src = O),
                        (_.dataset.testid = "iframe"),
                        (_.style.border = "0px"),
                        (_.allow = "microphone; camera"),
                        Object.keys(v).forEach(function (e) {
                            _.setAttribute(e, v[e]);
                        }),
                        _.addEventListener("load", u.triggerIframeRedraw, { once: !0 }),
                        window.addEventListener("message", a.getFormReadyHandler(f, m)),
                        window.addEventListener("message", a.getFormQuestionChangedHandler(f, h)),
                        window.addEventListener("message", a.getFormHeightChangedHandler(f, b)),
                        window.addEventListener("message", a.getFormSubmitHandler(f, y)),
                        window.addEventListener(
                            "message",
                            a.getFormThemeHandler(f, function (e) {
                                var t;
                                if (null == e ? void 0 : e.theme) {
                                    var n = document.querySelector(".tf-v1-close-icon");
                                    n && (n.style.color = null === (t = e.theme) || void 0 === t ? void 0 : t.color);
                                }
                            })
                        ),
                        window.addEventListener("message", a.getThankYouScreenButtonClickHandler(f, g)),
                        "widget" !== e && window.addEventListener("message", c.dispatchCustomKeyEventFromIframe),
                        w &&
                            window.addEventListener(
                                "message",
                                a.getFormReadyHandler(f, function () {
                                    r.setupGaInstance(_, f, w);
                                })
                            ),
                        {
                            iframe: _,
                            embedId: f,
                            refresh: function () {
                                return s.refreshIframe(_);
                            },
                            focus: function () {
                                var e;
                                null === (e = _.contentWindow) || void 0 === e || e.postMessage("embed-focus", "*");
                            },
                        }
                    );
                };
            },
            8866: function (e, t) {
                var n =
                    (this && this.__read) ||
                    function (e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o,
                            r,
                            i = n.call(e),
                            a = [];
                        try {
                            for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; ) a.push(o.value);
                        } catch (e) {
                            r = { error: e };
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                        return a;
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.generateEmbedId = void 0),
                    (t.generateEmbedId = function () {
                        var e = Math.random();
                        return n(String(e).split("."), 2)[1];
                    });
            },
            8554: function (e, t) {
                var n =
                    (this && this.__rest) ||
                    function (e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                        }
                        return n;
                    };
                function o(e, t, o) {
                    return function (r) {
                        var i = r.data,
                            a = i.type,
                            u = i.embedId,
                            c = n(i, ["type", "embedId"]);
                        a === e && u === t && (null == o || o(c));
                    };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.getThankYouScreenButtonClickHandler = t.getFormThemeHandler = t.getWelcomeScreenHiddenHandler = t.getFormSubmitHandler = t.getFormHeightChangedHandler = t.getFormQuestionChangedHandler = t.getFormReadyHandler = void 0),
                    (t.getFormReadyHandler = function (e, t) {
                        return o("form-ready", e, t);
                    }),
                    (t.getFormQuestionChangedHandler = function (e, t) {
                        return o("form-screen-changed", e, t);
                    }),
                    (t.getFormHeightChangedHandler = function (e, t) {
                        return o("form-height-changed", e, t);
                    }),
                    (t.getFormSubmitHandler = function (e, t) {
                        return o("form-submit", e, t);
                    }),
                    (t.getWelcomeScreenHiddenHandler = function (e, t) {
                        return o("welcome-screen-hidden", e, t);
                    }),
                    (t.getFormThemeHandler = function (e, t) {
                        return o("form-theme", e, t);
                    }),
                    (t.getThankYouScreenButtonClickHandler = function (e, t) {
                        return o("thank-you-screen-button-click", e, t);
                    });
            },
            339: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1553), t), r(n(7144), t);
            },
            5511: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.refreshIframe = void 0),
                    (t.refreshIframe = function (e) {
                        if (e) {
                            var t = e.src;
                            if (t.includes("&refresh")) {
                                var n = t.split("&refresh#");
                                e.src = n.join("#");
                            } else ((n = t.split("#"))[0] = n[0] + "&refresh"), (e.src = n.join("#"));
                        }
                    });
            },
            7144: function (e, t) {
                var n =
                        (this && this.__awaiter) ||
                        function (e, t, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(e) {
                                    try {
                                        c(o.next(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function u(e) {
                                    try {
                                        c(o.throw(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done
                                        ? r(e.value)
                                        : ((t = e.value),
                                          t instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t);
                                                })).then(a, u);
                                }
                                c((o = o.apply(e, t || [])).next());
                            });
                        },
                    o =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = { next: u(0), throw: u(1), return: u(2) }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function u(i) {
                                return function (u) {
                                    return (function (i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a; )
                                            try {
                                                if (((n = 1), o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done)) return r;
                                                switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: i[1], done: !1 };
                                                    case 5:
                                                        a.label++, (o = i[1]), (i = [0]);
                                                        continue;
                                                    case 7:
                                                        (i = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                            a.label = i[1];
                                                            break;
                                                        }
                                                        if (6 === i[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = i);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(i);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                i = t.call(e, a);
                                            } catch (e) {
                                                (i = [6, e]), (o = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 };
                                    })([i, u]);
                                };
                            }
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.dispatchCustomKeyEventFromIframe = t.removeCustomKeyboardListener = t.addCustomKeyboardListener = void 0);
                var r = "Escape",
                    i = function (e, i) {
                        return n(void 0, void 0, void 0, function () {
                            return o(this, function (n) {
                                return e.code === r && "function" == typeof i && (i(), t.removeCustomKeyboardListener()), [2];
                            });
                        });
                    };
                (t.addCustomKeyboardListener = function (e) {
                    return window.document.addEventListener("keydown", function (t) {
                        return i(t, e);
                    });
                }),
                    (t.removeCustomKeyboardListener = function () {
                        return window.document.removeEventListener("keydown", i);
                    }),
                    (t.dispatchCustomKeyEventFromIframe = function (e) {
                        "form-close" === e.data.type && window.document.dispatchEvent(new KeyboardEvent("keydown", { code: r }));
                    });
            },
            2256: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.triggerIframeRedraw = void 0),
                    (t.triggerIframeRedraw = function () {
                        this.style.transform = "translateZ(0)";
                    });
            },
            8939: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.getTextColor = void 0);
                var o = n(2938);
                t.getTextColor = function (e) {
                    if (!e) return "#FFFFFF";
                    var t = e.startsWith("#")
                            ? o.hexRgb(e)
                            : (function (e) {
                                  var t = { red: 0, green: 0, blue: 0 },
                                      n = e.match(/\d+/g);
                                  return n && ((t.red = parseInt(n[0], 10)), (t.green = parseInt(n[0], 10)), (t.blue = parseInt(n[0], 10))), t;
                              })(e),
                        n = t.red,
                        r = t.green,
                        i = t.blue;
                    return Math.round((299 * n + 587 * r + 114 * i) / 1e3) > 150 ? "#000000" : "#FFFFFF";
                };
            },
            2698: function (e, t) {
                var n =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (n =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                    return e;
                                }),
                            n.apply(this, arguments)
                        );
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.getTransitiveSearchParams = void 0),
                    (t.getTransitiveSearchParams = function (e) {
                        var t = new URL(window.location.href);
                        return "boolean" == typeof e && e
                            ? Object.fromEntries(t.searchParams.entries())
                            : Array.isArray(e) && e.length > 0
                            ? e.reduce(function (e, o) {
                                  var r,
                                      i = t.searchParams.get(o);
                                  return i ? n(n({}, e), (((r = {})[o] = i), r)) : e;
                              }, {})
                            : {};
                    });
            },
            8252: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.hasDom = void 0),
                    (t.hasDom = function () {
                        return "undefined" != typeof document && "undefined" != typeof window;
                    });
            },
            2938: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.hexRgb = void 0);
                var n = new RegExp("[^#a-f\\d]", "gi"),
                    o = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i");
                t.hexRgb = function (e) {
                    if ("string" != typeof e || n.test(e) || !o.test(e)) throw new TypeError("Expected a valid hex string");
                    8 === (e = e.replace(/^#/, "")).length && (e = e.slice(0, 6)), 4 === e.length && (e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                    var t = Number.parseInt(e, 16);
                    return { red: t >> 16, green: (t >> 8) & 255, blue: 255 & t };
                };
            },
            863: function (e, t, n) {
                var o =
                        (this && this.__awaiter) ||
                        function (e, t, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function a(e) {
                                    try {
                                        c(o.next(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function u(e) {
                                    try {
                                        c(o.throw(e));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done
                                        ? r(e.value)
                                        : ((t = e.value),
                                          t instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t);
                                                })).then(a, u);
                                }
                                c((o = o.apply(e, t || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                o,
                                r,
                                i,
                                a = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = { next: u(0), throw: u(1), return: u(2) }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function u(i) {
                                return function (u) {
                                    return (function (i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a; )
                                            try {
                                                if (((n = 1), o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done)) return r;
                                                switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: i[1], done: !1 };
                                                    case 5:
                                                        a.label++, (o = i[1]), (i = [0]);
                                                        continue;
                                                    case 7:
                                                        (i = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                            a.label = i[1];
                                                            break;
                                                        }
                                                        if (6 === i[0] && a.label < r[1]) {
                                                            (a.label = r[1]), (r = i);
                                                            break;
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            (a.label = r[2]), a.ops.push(i);
                                                            break;
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                i = t.call(e, a);
                                            } catch (e) {
                                                (i = [6, e]), (o = 0);
                                            } finally {
                                                n = r = 0;
                                            }
                                        if (5 & i[0]) throw i[1];
                                        return { value: i[0] ? i[1] : void 0, done: !0 };
                                    })([i, u]);
                                };
                            }
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.waitForHubspotCookie = t.getHubspotHiddenFields = t.getHubspotCookieValue = void 0);
                var i = n(4623);
                (t.getHubspotCookieValue = function () {
                    var e = document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));
                    return (e && e[2]) || void 0;
                }),
                    (t.getHubspotHiddenFields = function () {
                        return { hubspot_page_name: document.title, hubspot_page_url: window.location.href, hubspot_utk: t.getHubspotCookieValue() };
                    }),
                    (t.waitForHubspotCookie = function () {
                        return o(void 0, void 0, void 0, function () {
                            var e, n;
                            return r(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        (e = 10), (n = 0), (o.label = 1);
                                    case 1:
                                        return !t.getHubspotCookieValue() && n < e ? [4, i.sleep(250)] : [3, 4];
                                    case 2:
                                        o.sent(), (o.label = 3);
                                    case 3:
                                        return n++, [3, 1];
                                    case 4:
                                        return [2];
                                }
                            });
                        });
                    });
            },
            9071: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.includeCss = void 0),
                    (t.includeCss = function (e) {
                        var t = (function (e) {
                            return "https://embed.typeform.com/next/css/" + e;
                        })(e);
                        if (!document.querySelector('link[href="' + t + '"]')) {
                            var n = document.createElement("link");
                            (n.rel = "stylesheet"), (n.href = t), document.head.append(n);
                        }
                    });
            },
            6797: function (e, t, n) {
                var o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, o) {
                                  void 0 === o && (o = n),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          },
                                      });
                              }
                            : function (e, t, n, o) {
                                  void 0 === o && (o = n), (e[o] = t[n]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    r(n(3626), t),
                    r(n(339), t),
                    r(n(8252), t),
                    r(n(9071), t),
                    r(n(2346), t),
                    r(n(7377), t),
                    r(n(6563), t),
                    r(n(4527), t),
                    r(n(9533), t),
                    r(n(1451), t),
                    r(n(8972), t),
                    r(n(4748), t),
                    r(n(4392), t),
                    r(n(8939), t),
                    r(n(9917), t),
                    r(n(1987), t),
                    r(n(318), t),
                    r(n(2391), t),
                    r(n(863), t);
            },
            2346: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.isDefined = void 0),
                    (t.isDefined = function (e) {
                        return null != e;
                    });
            },
            1987: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.isVisible = t.isInPage = t.isOpen = void 0),
                    (t.isOpen = function (e) {
                        return t.isInPage(e) && t.isVisible(e);
                    }),
                    (t.isInPage = function (e) {
                        return !!e.parentNode;
                    }),
                    (t.isVisible = function (e) {
                        return "none" !== e.style.display;
                    });
            },
            9917: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.lazyInitialize = void 0),
                    (t.lazyInitialize = function (e, t) {
                        var n = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                                e.isIntersecting && (t(), n.unobserve(e.target));
                            });
                        });
                        n.observe(e);
                    });
            },
            7377: function (e, t) {
                var n =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (n =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                n.apply(this, arguments)
                            );
                        },
                    o =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var o,
                                r,
                                i = n.call(e),
                                a = [];
                            try {
                                for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; ) a.push(o.value);
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return a;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.loadOptionsFromAttributes = t.transformAttributeValue = t.camelCaseToKebabCase = void 0),
                    (t.camelCaseToKebabCase = function (e) {
                        return e
                            .split("")
                            .map(function (e, t) {
                                return e.toUpperCase() === e ? (0 !== t ? "-" : "") + e.toLowerCase() : e;
                            })
                            .join("");
                    });
                var r = function (e) {
                        return e || void 0;
                    },
                    i = function (e) {
                        return "" === e || "yes" === e || "true" === e;
                    },
                    a = function (e) {
                        var t = e ? parseInt(e, 10) : NaN;
                        return isNaN(t) ? void 0 : t;
                    },
                    u = "%ESCAPED_COMMA%",
                    c = function (e) {
                        if (e)
                            return e
                                .replace(/\s/g, "")
                                .replace(/\\,/g, u)
                                .split(",")
                                .filter(function (e) {
                                    return !!e;
                                })
                                .map(function (e) {
                                    return e.replace(u, ",");
                                });
                    };
                (t.transformAttributeValue = function (e, t) {
                    var s, l, d;
                    switch (t) {
                        case "string":
                            return r(e);
                        case "boolean":
                            return i(e);
                        case "integer":
                            return a(e);
                        case "function":
                            return (function (e) {
                                var t = e && e in window ? window[e] : void 0;
                                return "function" == typeof t ? t : void 0;
                            })(e);
                        case "array":
                            return c(e);
                        case "record":
                            return (function (e) {
                                if (e)
                                    return e
                                        .replace(/\\,/g, u)
                                        .split(",")
                                        .filter(function (e) {
                                            return !!e;
                                        })
                                        .map(function (e) {
                                            return e.replace(u, ",");
                                        })
                                        .reduce(function (e, t) {
                                            var r,
                                                i = t.match(/^([^=]+)=(.*)$/);
                                            if (i) {
                                                var a = o(i, 3),
                                                    u = a[1],
                                                    c = a[2];
                                                return n(n({}, e), (((r = {})[u.trim()] = c), r));
                                            }
                                            return e;
                                        }, {});
                            })(e);
                        case "integerOrBoolean":
                            return null !== (s = a(e)) && void 0 !== s ? s : i(e);
                        case "stringOrBoolean":
                            return null !== (l = r(e)) && void 0 !== l ? l : i(e);
                        case "arrayOrBoolean":
                            return null !== (d = c(e)) && void 0 !== d ? d : i(e);
                        default:
                            throw new Error("Invalid attribute transformation " + t);
                    }
                }),
                    (t.loadOptionsFromAttributes = function (e, o) {
                        return Object.keys(o).reduce(function (r, i) {
                            var a;
                            return n(n({}, r), (((a = {})[i] = t.transformAttributeValue(e.getAttribute("data-tf-" + t.camelCaseToKebabCase(i)), o[i])), a));
                        }, {});
                    });
            },
            318: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeAutoResize = void 0);
                var o = n(6563);
                t.makeAutoResize = function (e, t) {
                    return (
                        void 0 === t && (t = !1),
                        function () {
                            var n = t || o.isMobile();
                            e && n && e.style.setProperty("height", window.innerHeight + "px", "important");
                        }
                    );
                };
            },
            6563: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.isFullscreen = t.isMobile = t.isBigScreen = void 0),
                    (t.isBigScreen = function () {
                        return window.screen.width >= 1024 && window.screen.height >= 768;
                    }),
                    (t.isMobile = function () {
                        return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase());
                    }),
                    (t.isFullscreen = function () {
                        return t.isMobile() && !t.isBigScreen();
                    });
            },
            4527: function (e, t, n) {
                var o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                        return e;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    r =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var o,
                                r,
                                i = n.call(e),
                                a = [];
                            try {
                                for (; (void 0 === t || t-- > 0) && !(o = i.next()).done; ) a.push(o.value);
                            } catch (e) {
                                r = { error: e };
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return a;
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeUndefinedKeys = void 0);
                var i = n(2346);
                t.removeUndefinedKeys = function (e) {
                    return Object.entries(e)
                        .filter(function (e) {
                            var t = r(e, 2)[1];
                            return i.isDefined(t);
                        })
                        .reduce(function (e, t) {
                            var n,
                                i = r(t, 2),
                                a = i[0],
                                u = i[1];
                            return o(o({}, e), (((n = {})[a] = u), n));
                        }, {});
                };
            },
            4748: function (e, t, n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.setAutoClose = void 0);
                var o = n(8554);
                t.setAutoClose = function (e, t, n) {
                    if (t && n) {
                        var r = "number" == typeof t ? t : 0;
                        window.addEventListener(
                            "message",
                            o.getFormSubmitHandler(e, function () {
                                return setTimeout(n, r);
                            })
                        );
                    }
                };
            },
            9533: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.setElementSize = void 0),
                    (t.setElementSize = function (e, t) {
                        var n = t.width,
                            o = t.height;
                        return n && (e.style.width = n + "px"), o && (e.style.height = o + "px"), e;
                    });
            },
            4392: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.setupGaInstance = t.sendGaIdMessage = void 0),
                    (t.sendGaIdMessage = function (e, t, n) {
                        var o = { embedId: e, gaClientId: t };
                        setTimeout(function () {
                            n && n.contentWindow && n.contentWindow.postMessage({ type: "ga-client-id", data: o }, "*");
                        }, 0);
                    });
                var n = function (e) {
                    console.error(e);
                };
                t.setupGaInstance = function (e, o, r) {
                    var i = "string" == typeof r ? r : void 0;
                    if (window.gtag) {
                        if (
                            (i ||
                                (i = (function () {
                                    if (window.dataLayer) {
                                        var e = window.dataLayer.find(function (e) {
                                            return e.length > 1 && "config" === e[0];
                                        });
                                        return e && e[1];
                                    }
                                })()),
                            !i)
                        )
                            return void n(
                                "Whoops! You enabled the shareGaInstance feature in yourtypeform embed but the tracker ID could not be retrieved. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascriptcode in your page and use correct tracker ID. "
                            );
                        var a = !1;
                        window.gtag("get", i, "client_id", function (n) {
                            (a = !0), t.sendGaIdMessage(o, n, e);
                        }),
                            setTimeout(function () {
                                a ||
                                    n(
                                        "Whoops! You enabled the shareGaInstance feature in yourtypeform embed but the tracker with ID " +
                                            i +
                                            " was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascriptcode in your page and use correct tracker ID. "
                                    );
                            }, 3e3);
                    } else
                        try {
                            var u = (function (e, t) {
                                return t
                                    ? e.find(function (e) {
                                          return e.get("trackingId") === t;
                                      })
                                    : e[0];
                            })(window.ga.getAll(), i);
                            u
                                ? t.sendGaIdMessage(o, u.get("clientId"), e)
                                : n(
                                      "Whoops! You enabled the shareGaInstance feature in yourtypeform embed but the tracker with ID " +
                                          i +
                                          " was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascriptcode in your page and use correct tracker ID. "
                                  );
                        } catch (e) {
                            n(
                                "Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. "
                            ),
                                n(e);
                        }
                };
            },
            4623: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.sleep = void 0),
                    (t.sleep = function (e) {
                        return new Promise(function (t) {
                            return setTimeout(t, e);
                        });
                    });
            },
            1451: function (e, t) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.unmountElement = void 0),
                    (t.unmountElement = function (e) {
                        var t;
                        null === (t = e.parentNode) || void 0 === t || t.removeChild(e);
                    });
            },
        },
        t = {},
        n = (function n(o) {
            var r = t[o];
            if (void 0 !== r) return r.exports;
            var i = (t[o] = { exports: {} });
            return e[o].call(i.exports, i, i.exports, n), i.exports;
        })(6664);
    window.tf = n;
})();

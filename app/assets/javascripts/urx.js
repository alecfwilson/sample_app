
(function(v) {
    $urx = function(f) {
        var b = {},
            s = null;
        b.setApiKey = function(a) {
            s = a
        };
        b.getSingle = function(a, b) {
            if (void 0 !== a && void 0 !== b) {
                var c = a[b];
                return null === c ? void 0 : Array.isArray(c) ? c[0] : c
            }
        };
        b.getMany = function(a, b) {
            if (void 0 === a || void 0 === b) return [];
            var c = a[b];
            return null === c ? [] : Array.isArray(c) ? c : [c]
        };
        (function(a, b) {
            var c = {
                    extend: function(a, e) {
                        for (var b in e) - 1 !== "browser cpu device engine os".indexOf(b) && 0 === e[b].length % 2 && (a[b] = e[b].concat(a[b]));
                        return a
                    },
                    has: function(a, e) {
                        if ("string" === typeof a) return -1 !==
                            e.toLowerCase().indexOf(a.toLowerCase())
                    },
                    lowerize: function(a) {
                        return a.toLowerCase()
                    }
                },
                e = function() {
                    for (var a, e = 0, c, d, u, h, g, f, k = arguments; e < k.length && !g;) {
                        var l = k[e],
                            m = k[e + 1];
                        if ("undefined" === typeof a)
                            for (u in a = {}, m) h = m[u], "object" === typeof h ? a[h[0]] = b : a[h] = b;
                        for (c = d = 0; c < l.length && !g;)
                            if (g = l[c++].exec(this.getUA()))
                                for (u = 0; u < m.length; u++) f = g[++d], h = m[u], "object" === typeof h && 0 < h.length ? 2 == h.length ? a[h[0]] = "function" == typeof h[1] ? h[1].call(this, f) : h[1] : 3 == h.length ? a[h[0]] = "function" !== typeof h[1] ||
                                    h[1].exec && h[1].test ? f ? f.replace(h[1], h[2]) : b : f ? h[1].call(this, f, h[2]) : b : 4 == h.length && (a[h[0]] = f ? h[3].call(this, f.replace(h[1], h[2])) : b) : a[h] = f ? f : b;
                        e += 2
                    }
                    return a
                },
                d = function(a, e) {
                    for (var d in e)
                        if ("object" === typeof e[d] && 0 < e[d].length)
                            for (var r = 0; r < e[d].length; r++) {
                                if (c.has(e[d][r], a)) return "?" === d ? b : d
                            } else if (c.has(e[d], a)) return "?" === d ? b : d;
                    return a
                },
                g = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2E3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    "8.1": "NT 6.3",
                    10: "NT 6.4",
                    RT: "ARM"
                },
                f = {
                    browser: [
                        [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                        ["name", "version", "major"],
                        [/\s(opr)\/((\d+)?[\w\.]+)/i],
                        [
                            ["name", "Opera"], "version", "major"
                        ],
                        [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i,
                            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i
                        ],
                        ["name", "version", "major"],
                        [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                        [
                            ["name", "IE"], "version", "major"
                        ],
                        [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                        [
                            ["name", "Yandex"], "version", "major"
                        ],
                        [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                        [
                            ["name", /_/g, " "], "version", "major"
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],
                        ["name", "version", "major"],
                        [/(dolfin)\/((\d+)?[\w\.]+)/i],
                        [
                            ["name", "Dolphin"], "version", "major"
                        ],
                        [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                        [
                            ["name", "Chrome"], "version", "major"
                        ],
                        [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                        ["version", "major", ["name", "Mobile Safari"]],
                        [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                        ["version", "major", "name"],
                        [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                        ["name", ["major", d, {
                                1: ["/8", "/1", "/3"],
                                2: "/4",
                                "?": "/"
                            }],
                            ["version", d, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]
                        ],
                        [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                        ["name", "version", "major"],
                        [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                        [
                            ["name", "Netscape"], "version", "major"
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,
                            /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i
                        ],
                        ["name", "version", "major"]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            ["architecture", "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            ["architecture", c.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            ["architecture", "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            ["architecture", "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            ["architecture", /ower/, "", c.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            ["architecture", "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            ["architecture", c.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        ["model", "vendor", ["type", "tablet"]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        ["model", ["vendor", "Apple"],
                            ["type", "tablet"]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            ["model", "Apple TV"],
                            ["vendor", "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i,
                            /(dell)\s(strea[kpr\s\d]*[\dko])/i
                        ],
                        ["vendor", "model", ["type", "tablet"]],
                        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                        ["model", ["vendor", "Amazon"],
                            ["type", "tablet"]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                        [
                            ["model", d, {
                                "Fire Phone": ["SD", "KF"]
                            }],
                            ["vendor", "Amazon"],
                            ["type", "mobile"]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        ["model", "vendor", ["type", "mobile"]],
                        [/\((ip[honed|\s\w*]+);/i],
                        ["model", ["vendor", "Apple"],
                            ["type", "mobile"]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                            /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i
                        ],
                        ["vendor", "model", ["type", "mobile"]],
                        [/\(bb10;\s(\w+)/i],
                        ["model", ["vendor", "BlackBerry"],
                            ["type", "mobile"]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                        ["model", ["vendor", "Asus"],
                            ["type", "tablet"]
                        ],
                        [/(sony)\s(tablet\s[ps])/i],
                        ["vendor", "model", ["type", "tablet"]],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        ["vendor", "model", ["type", "console"]],
                        [/android.+;\s(shield)\sbuild/i],
                        ["model", ["vendor", "Nvidia"],
                            ["type", "console"]
                        ],
                        [/(playstation\s[3portablevi]+)/i],
                        ["model", ["vendor", "Sony"],
                            ["type", "console"]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            ["vendor", d, {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }],
                            ["model", d, {
                                "Evo Shift 4G": "7373KT"
                            }],
                            ["type", "mobile"]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        ["vendor", "model", ["type", "tablet"]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                        ["vendor", ["model", /_/g, " "],
                            ["type", "mobile"]
                        ],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        ["model", ["vendor", "Microsoft"],
                            ["type", "console"]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            ["model", /\./g, " "],
                            ["vendor", "Microsoft"],
                            ["type", "mobile"]
                        ],
                        [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i],
                        [
                            ["vendor", "Motorola"], "model", ["type", "mobile"]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        ["model", ["vendor", "Motorola"],
                            ["type", "tablet"]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            ["vendor", "Samsung"], "model", ["type", "tablet"]
                        ],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                        [
                            ["vendor", "Samsung"], "model", ["type", "mobile"]
                        ],
                        [/(samsung);smarttv/i],
                        ["vendor", "model", ["type", "smarttv"]],
                        [/\(dtv[\);].+(aquos)/i],
                        ["model", ["vendor", "Sharp"],
                            ["type", "smarttv"]
                        ],
                        [/sie-(\w+)*/i],
                        ["model", ["vendor", "Siemens"],
                            ["type", "mobile"]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                        [
                            ["vendor", "Nokia"], "model", ["type", "mobile"]
                        ],
                        [/android\s3\.[\s\w-;]{10}(a\d{3})/i],
                        ["model", ["vendor", "Acer"],
                            ["type", "tablet"]
                        ],
                        [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            ["vendor", "LG"], "model", ["type", "tablet"]
                        ],
                        [/(lg) netcast\.tv/i],
                        ["vendor", "model", ["type", "smarttv"]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                        ["model", ["vendor", "LG"],
                            ["type", "mobile"]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        ["model", ["vendor", "Lenovo"],
                            ["type", "tablet"]
                        ],
                        [/linux;.+((jolla));/i],
                        ["vendor", "model", ["type", "mobile"]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        ["vendor", "model", ["type", "wearable"]],
                        [/android.+;\s(glass)\s\d/i],
                        ["model", ["vendor", "Google"],
                            ["type", "wearable"]
                        ],
                        [/(mobile|tablet);.+rv\:.+gecko\//i],
                        [
                            ["type", c.lowerize], "vendor", "model"
                        ]
                    ],
                    engine: [
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        ["name", "version"],
                        [/rv\:([\w\.]+).*(gecko)/i],
                        ["version", "name"]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        ["name", "version"],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        ["name", ["version", d, g]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            ["name", "Windows"],
                            ["version", d, g]
                        ],
                        [/\((bb)(10);/i],
                        [
                            ["name", "BlackBerry"], "version"
                        ],
                        [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                        ["name", "version"],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                        [
                            ["name", "Symbian"], "version"
                        ],
                        [/\((series40);/i],
                        ["name"],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            ["name",
                                "Firefox OS"
                            ], "version"
                        ],
                        [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                        ["name", "version"],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            ["name", "Chromium OS"], "version"
                        ],
                        [/(sunos)\s?([\w\.]+\d)*/i],
                        [
                            ["name", "Solaris"], "version"
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                        ["name", "version"],
                        [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                        [
                            ["name", "iOS"],
                            ["version", /_/g, "."]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            ["name", "Mac OS"],
                            ["version", /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                        ["name", "version"]
                    ]
                },
                k = function(b, d) {
                    if (!(this instanceof k)) return (new k(b, d)).getResult();
                    var g =
                        b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ""),
                        r = d ? c.extend(f, d) : f;
                    this.getBrowser = function() {
                        return e.apply(this, r.browser)
                    };
                    this.getCPU = function() {
                        return e.apply(this, r.cpu)
                    };
                    this.getDevice = function() {
                        return e.apply(this, r.device)
                    };
                    this.getEngine = function() {
                        return e.apply(this, r.engine)
                    };
                    this.getOS = function() {
                        return e.apply(this, r.os)
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    };
                    this.getUA = function() {
                        return g
                    };
                    this.setUA = function(a) {
                        g = a;
                        return this
                    };
                    this.setUA(g)
                };
            k.VERSION = "0.7.3";
            k.BROWSER = {
                NAME: "name",
                MAJOR: "major",
                VERSION: "version"
            };
            k.CPU = {
                ARCHITECTURE: "architecture"
            };
            k.DEVICE = {
                MODEL: "model",
                VENDOR: "vendor",
                TYPE: "type",
                CONSOLE: "console",
                MOBILE: "mobile",
                SMARTTV: "smarttv",
                TABLET: "tablet",
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            };
            k.ENGINE = {
                NAME: "name",
                VERSION: "version"
            };
            k.OS = {
                NAME: "name",
                VERSION: "version"
            };
            if ("undefined" !== typeof exports) "undefined" !== typeof module && module.exports &&
                (exports = module.exports = k), exports.UAParser = k;
            else {
                a.UAParser = k;
                "function" === typeof define && define.amd && define(function() {
                    return k
                });
                var l = a.jQuery || a.Zepto;
                if ("undefined" !== typeof l) {
                    var m = new k;
                    l.ua = m.getResult();
                    l.ua.get = function() {
                        return m.getUA()
                    };
                    l.ua.set = function(a) {
                        m.setUA(a);
                        a = m.getResult();
                        for (var e in a) l.ua[e] = a[e]
                    }
                }
            }
        })(f);
        var g = function(a) {
                var b = new UAParser;
                b.setUA(a);
                a = b.getResult();
                switch (a.os.name) {
                    case "Android":
                        a.platform = "Android";
                        break;
                    case "iOS":
                        a.platform = "tablet" === a.device.type ?
                            "Apple iPad" : "Apple iPhone";
                        break;
                    default:
                        a.platform = "Desktop"
                }
                return a
            },
            l = function(a) {
                return "Chrome" === a.browser.name || "Chromium" === a.browser.name
            },
            m = function(a, b, c, e) {
                var d = new XMLHttpRequest;
                d.onreadystatechange = function() {
                    4 === d.readyState && c(d)
                };
                d.ontimeout = function() {
                    e(d, "The request to URX API has timed out.")
                };
                d.onerror = function() {
                    e(d, "There was an error loading data from the URX API.")
                };
                d.open("GET", a);
                if (null === s) throw "Error, No URX API Key Provided. Please set your API key before making requests.";
                a = g(navigator.userAgent);
                for (var f in b) null !== b[f] && d.setRequestHeader(f, b[f]);
                d.setRequestHeader("X-API-Key", s);
                "Desktop" != a.platform && (b = "urx-client/1.0 (" + [a.os.name.toLowerCase(), a.os.version, "web"].join("; ") + ")", d.setRequestHeader("X-Alternate-User-Agent", b));
                d.setRequestHeader("Accept", "application/json");
                d.overrideMimeType("application/json");
                d.send()
            },
            t = function(a) {
                f.addEventListener("pagehide", function() {
                    clearTimeout(a)
                });
                f.addEventListener("pageshow", function() {
                    clearTimeout(a)
                });
                f.addEventListener("blur",
                    function() {
                        clearTimeout(a)
                    });
                f.addEventListener("unload", function() {
                    clearTimeout(a)
                });
                document.addEventListener("webkitvisibilitychange", function() {
                    document.webkitHidden && clearTimeout(a)
                })
            },
            p = function(a, b, c) {
                var e = document.createElement("iframe");
                e.style.width = "1px";
                e.style.height = "1px";
                e.border = "none";
                e.style.display = "none";
                e.src = a;
                document.body.appendChild(e);
                t(setTimeout(function() {
                    c()
                }, b))
            },
            n = function(a, b, c) {
                if (void 0 === b) f.location = a;
                else {
                    var e = g(navigator.userAgent);
                    if ("Firefox" === e.browser.name ||
                        l(e) && 25 > e.browser.major) p(a, 2E3, c);
                    else if (l(e) && 25 <= e.browser.major && 35 > e.browser.major) f.location.href = "intent:#Intent;S.org.chromium.chrome.browser.webapp_url=" + encodeURIComponent("data:text/html," + encodeURIComponent('<script>window.location.href="' + a + '";\x3c/script>')) + ";S.org.chromium.chrome.browser.webapp_id=0;SEL;component=com.android.chrome/com.google.android.apps.chrome.webapps.WebappActivity0;end", t(setTimeout(function() {
                        c()
                    }, 2E3));
                    else if (l(e) && 35 <= e.browser.major) {
                        var d = a.indexOf(":"),
                            e = a.slice(0, d);
                        (a = a.slice(d + 1, a.length)) && 0 < a.length && b && 0 < b.length && e && f.location.replace("intent:" + a + "#Intent;scheme=" + e + ";package=" + b + ";end")
                    } else c()
                }
            };
        b.launchDeeplink = function(a, b, c) {
            switch (g(navigator.userAgent).platform) {
                case "Apple iPad":
                case "Apple iPhone":
                    p(a, 1E3, c);
                    break;
                case "Android":
                    n(a, b, c);
                    break;
                default:
                    f.location = a
            }
        };
        b.resolveUrl = function(a, g, c) {
            a = a.replace("://", ":/");
            m("https://beta.urx.io/" + encodeURIComponent(a), {}, function(a) {
                switch (a.status) {
                    case 400:
                        c(a, "The request going to the URX API was bad.");
                        break;
                    case 422:
                        c(a, "The URX API was unable to process this request.");
                        break;
                    case 403:
                    case 406:
                        c(a, "The URX API will not allow you to execute this request, maybe your API Key is not valid?");
                        break;
                    case 404:
                        c(a, "Destination could not be found.");
                        break;
                    case 410:
                        c(a, "The intended destination no longer exists.");
                        break;
                    case 429:
                        c(a, "This API key is being rate limited by the URX API.");
                        break;
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        c(a, "The URX API is currently unavailable.");
                    default:
                        void 0 === a.responseText &&
                            c(a, "No response body.");
                        var d, f = !1;
                        try {
                            d = JSON.parse(a.responseText), f = !0
                        } catch (l) {
                            c(a, "The JSON being returned by the API is unparsable.")
                        }!0 === f && (a = {
                            entityData: d,
                            appId: b.getSingle(b.getSingle(d, "application"), "@id"),
                            installLink: b.getSingle(b.getSingle(d, "application"), "installUrl"),
                            deepLink: b.getSingle(d, "urlTemplate"),
                            webLink: b.getSingle(d, "sameAs")
                        }, g(a))
                }
            }, c)
        };
        b.resolveUrlDeeplink = function(a, f, c) {
            b.resolveUrl(a, function(a) {
                b.launchDeeplink(a.deepLink, a.appId, function() {
                    c(a)
                })
            }, f)
        };
        b.resolveUrlDeeplinkWithWebFallback =
            function(a, g) {
                b.resolveUrlDeeplink(a, g, function(a) {
                    f.location = a.webLink
                })
            };
        b.resolveUrlDeeplinkWithAppStoreFallback = function(a, g) {
            b.resolveUrlDeeplink(a, g, function(a) {
                f.location = void 0 !== a.installLink ? a.installLink : a.webLink
            })
        };
        b.search = function(a, g, c) {
            m("https://beta.urx.io/" + encodeURIComponent(a), {}, function(a) {
                switch (a.status) {
                    case 400:
                        c(a, "The request going to the URX API was bad.");
                        break;
                    case 403:
                        c(a, "The URX API will not allow you to execute this request, maybe your API Key is not valid?");
                        break;
                    case 404:
                        c(a, "No search results found for the requested query.");
                        break;
                    case 422:
                        c(a, "The URX API was unable to process this request.");
                        break;
                    case 406:
                        c(a, "The query to be executed by the API is unacceptable.");
                        break;
                    case 410:
                        c(a, "The intended destination no longer exists.");
                        break;
                    case 429:
                        c(a, "This API key is being rate limited by the URX API.");
                        break;
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        c(a, "The URX API is currently unavailable.");
                    default:
                        void 0 === a.responseText && c(a, "No response body.");
                        var d,
                            l = !1;
                        try {
                            d = JSON.parse(a.responseText), l = !0
                        } catch (t) {
                            c(a, "The JSON being returned by the API is unparsable.")
                        }
                        if (!0 === l) {
                            a = a.getResponseHeader("x-correlation-id");
                            for (var l = [], k = d.result, n = function(a) {
                                        return null === a || void 0 === a || "string" !== typeof a ? void 0 : a
                                    }, s = function(a) {
                                        if (null !== a && void 0 !== a) {
                                            if ("string" === typeof a) return a;
                                            var c = b.getSingle(a, "contentUrl");
                                            if ("string" === typeof c) return c;
                                            c = b.getSingle(a, "embedUrl");
                                            if ("string" === typeof c) return c;
                                            a = b.getSingle(a, "url");
                                            if ("string" === typeof a) return a
                                        }
                                    },
                                    p = 0; p < k.length; p++) {
                                var q = k[p],
                                    q = {
                                        entityData: q,
                                        resultPosition: p,
                                        correlationId: a,
                                        name: n(b.getSingle(q, "name")),
                                        imageUrl: s(b.getSingle(q, "image")),
                                        descriptionText: n(b.getSingle(q, "description")),
                                        callToActionText: n(b.getSingle(b.getSingle(q, "potentialAction"), "description")),
                                        appName: n(b.getSingle(b.getSingle(q, "potentialAction"), "name")),
                                        urxResolutionUrl: "https://beta.urx.io/" + b.getSingle(b.getSingle(b.getSingle(q, "potentialAction"), "target"), "urlTemplate").replace("https://urx.io/", "").replace("://",
                                            ":/"),
                                        resolve: function(a, c) {
                                            m(this.urxResolutionUrl, {
                                                "X-Correlation-Id": this.correlationId,
                                                "X-Result-Position": this.resultPosition
                                            }, function(d) {
                                                switch (d.status) {
                                                    case 400:
                                                        c(d, "The request going to the URX API was bad.");
                                                        break;
                                                    case 422:
                                                        c(d, "The URX API was unable to process this request.");
                                                        break;
                                                    case 403:
                                                    case 406:
                                                        c(d, "The URX API will not allow you to execute this request, maybe your API Key is not valid?");
                                                        break;
                                                    case 404:
                                                        c(d, "Destination could not be found.");
                                                        break;
                                                    case 410:
                                                        c(d, "The intended destination no longer exists.");
                                                        break;
                                                    case 429:
                                                        c(d, "This API key is being rate limited by the URX API.");
                                                        break;
                                                    case 500:
                                                    case 502:
                                                    case 503:
                                                    case 504:
                                                        c(d, "The URX API is currently unavailable.");
                                                    default:
                                                        void 0 === d.responseText && c(d, "No response body.");
                                                        var e, g = !1;
                                                        try {
                                                            e = JSON.parse(d.responseText), g = !0
                                                        } catch (f) {
                                                            c(d, "The JSON being returned by the API is unparsable.")
                                                        }!0 === g && (d = {
                                                            entityData: e,
                                                            appId: b.getSingle(b.getSingle(e, "application"), "@id"),
                                                            installLink: b.getSingle(b.getSingle(e, "application"), "installUrl"),
                                                            deepLink: b.getSingle(e,
                                                                "urlTemplate"),
                                                            webLink: b.getSingle(e, "sameAs")
                                                        }, a(d))
                                                }
                                            }, c)
                                        },
                                        resolveDeeplink: function(a, c) {
                                            this.resolve(function(a) {
                                                b.launchDeeplink(a.deepLink, a.appId, function() {
                                                    c(a)
                                                })
                                            }, a)
                                        },
                                        resolveDeeplinkWithWebFallback: function(a) {
                                            this.resolveDeeplink(a, function(a) {
                                                f.location = a.webLink
                                            })
                                        },
                                        resolveDeeplinkWithAppStoreFallback: function(a) {
                                            this.resolveDeeplink(a, function(a) {
                                                f.location = void 0 !== a.installLink ? a.installLink : a.webLink
                                            })
                                        }
                                    };
                                l.push(q)
                            }
                            g({
                                entityData: d,
                                results: l
                            })
                        }
                }
            }, c)
        };
        return b
    }(v);
    (function(f) {
        var b = function(b) {
                return b.split(";").join(" !important;")
            },
            s = document.currentScript || document.querySelector('script[src="urx.js"]');
        void 0 !== f && ($urx.setApiKey("q8e+TZjbTFw+inpaS0euL9acVR6cZRoKvZCs++KElj4akkgF3C4L0D+vY3Epuck9J+3t0yEni0N9niA=|D83KJ/9E6p3SEMBGlwO2ENELBz6GODce"), $urx.search(f + "warriors tickets limit:1 domain:seatgeek.com", function(g) {
            var f = g.results[0],
                m = b("padding: 0; border: 0; font-size: 16px; font-weight: 600; font-family: 'Helvetica Neue', sans-serif; line-height: 1; "),
                t = b("margin:0;");
            g = document.createElement("div");
            g.className = "";
            s.parentNode.insertBefore(g, s);
            g.setAttribute("style", m + t + b("width:100% ; height:48px; background:white; border: 1px solid #EDEDED; -webkit-box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.15); box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.15); -webkit-border-radius: 5px; -moz-border-radius: 5px; -ms-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px;"));
            g.addEventListener("click", function() {
                f.resolveDeeplinkWithAppStoreFallback(function(a, b) {
                    console.log(b)
                })
            });
            var p = document.createElement("ul");
            p.setAttribute("style", m + t + b("height:100%;"));
            g.appendChild(p);
            g = function(a, c) {
                var e = "";
                void 0 === c && (e = t);
                var d = document.createElement("li");
                d.setAttribute("style", m + e + b("display:inline-block; height:calc(100% - 12px); vertical-align: middle; margin-top:12px;"));
                p.appendChild(d);
                e = document.createElement(a);
                d.appendChild(e);
                return e
            };
            var n = $urx.getSingle($urx.getSingle(f.entityData, "potentialAction"), "image");
            if (void 0 !== n) {
                var a = g("img");
                a.src = n;
                a.setAttribute("style", m + b("width:24px; margin-left:12px;"))
            }
            n =
                g("p");
            n.appendChild(v.top.document.createTextNode(f.callToActionText + " in " + f.appName));
            n.setAttribute("style", b("margin-top:4px; margin-left:12px;"));
            g = g("img", !0);
            g.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAB1CAYAAADtCac0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyMTMzOTdBQzE2MTFFNEE0RjhFMjYwOTQ1Mjc0NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyMTMzOThBQzE2MTFFNEE0RjhFMjYwOTQ1Mjc0NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTIxMzM5NUFDMTYxMUU0QTRGOEUyNjA5NDUyNzQ1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTIxMzM5NkFDMTYxMUU0QTRGOEUyNjA5NDUyNzQ1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phy+wzQAAAZ/SURBVHja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";
            g.setAttribute("style", m + t + b("width: 8px; margin-top: 6px;"));
            g.parentNode.setAttribute("style", g.parentNode.getAttribute("style") + b(" float:right; margin-right:12px"))
        }, function(b, f) {
            console.log(f)
        }))
    })("")
})(window);

const e = "maplestory-skills", s = window, t = document, a = {
  s: 0,
  t: "/"
}, r = !!t.documentElement.attachShadow, i = /* */ (() => {
  let e = !1;
  try {
    t.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        e = !0;
      }
    }));
  } catch (e) {}
  return e;
})(), l = (() => {
  try {
    return new CSSStyleSheet(), !0;
  } catch (e) {}
  return !1;
})(), n = e => console.error(e);

let o = 0, c = !1;

const d = [], u = [], h = [], m = e => s => {
  // queue dom reads
  e.push(s), c || (c = !0, requestAnimationFrame(b));
}, g = e => {
  for (let s = 0; s < e.length; s++) try {
    e[s](performance.now());
  } catch (e) {
    n(e);
  }
  e.length = 0;
}, f = (e, s) => {
  let t = 0, a = 0;
  for (;t < e.length && (a = performance.now()) < s; ) try {
    e[t++](a);
  } catch (e) {
    n(e);
  }
  t === e.length ? e.length = 0 : 0 !== t && e.splice(0, t);
}, b = () => {
  o++, 
  // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!
  g(d);
  const e = 2 /* queueAsync */ & a.s ? performance.now() + 7 * Math.ceil(o * (1 / 22)) : 1 / 0;
  // DOM WRITES!!!
    f(u, e), f(h, e), u.length > 0 && (h.push(...u), u.length = 0), (c = d.length + u.length + h.length > 0) ? 
  // still more to do yet, but we've run out of time
  // let's let this thing cool off and try again in the next tick
  requestAnimationFrame(b) : o = 0;
}, p = /* */ m(u), y = e => {
  if (0 == (1 /* isTmpDisconnected */ & a.s)) {
    const s = je(e);
    s.i && (s.i(), s.i = void 0), 
    // clear CSS var-shim tracking
    Fe && Fe.removeHost(e);
  }
}, k = (e, s) => 
// ensure this value is of the correct prop type
null != e && "object" != typeof e && "function" != typeof e ? 4 /* Boolean */ & s ? "false" !== e && ("" === e || !!e) : 2 /* Number */ & s ? parseFloat(e) : 1 /* String */ & s ? String(e) : e : e, w = "hydrated", v = new WeakMap(), $ = (e, s) => {
  let t = De.get(e);
  l ? (t = t || new CSSStyleSheet()).replace(s) : t = s, De.set(e, t);
}, S = (e, s, a, r) => {
  let i = j(s, a), l = De.get(i);
  if (l) if ("string" == typeof l) {
    let s = v.get(e = e.head || e), a;
    s || v.set(e, s = new Set()), s.has(i) || (Fe ? (i = (a = Fe.createHostStyle(r, i, l))["s-sc"], 
    // we don't want to add this styleID to the appliedStyles Set
    // since the cssVarShim might need to apply several different
    // stylesheets for the same component
    s = null) : (a = t.createElement("style")).innerHTML = l, e.appendChild(a), s && s.add(i));
  } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [ ...e.adoptedStyleSheets, l ]);
  return i;
}, x = (e, s, t) => {
  const a = S(e.shadowRoot && r ? e.shadowRoot : e.getRootNode(), s.l, t, e);
  10 /* needsScopedEncapsulation */ & s.s && (
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  // DOM WRITE!!
  e["s-sc"] = a, e.classList.add(a + "-h"));
}, j = (e, s) => "sc-" + e, B = {}, M = e => null != e, C = e => e.toLowerCase();

function R(e) {
  return `__sc_import_${e.replace(/\s|-/g, "_")}`;
}

/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */ const D = [];

function F(e, s) {
  let t = null, a = !1, r = !1, i = arguments.length, l, n;
  for (;i-- > 2; ) D.push(arguments[i]);
  for (;D.length > 0; ) {
    let s = D.pop();
    if (s && void 0 !== s.pop) for (i = s.length; i--; ) D.push(s[i]); else "boolean" == typeof s && (s = null), 
    (r = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (r = !1)), 
    r && a ? t[t.length - 1].o += s : null === t ? t = [ r ? {
      s: 0,
      o: s
    } : s ] : t.push(r ? {
      s: 0,
      o: s
    } : s), a = r;
  }
  if (null != s) {
    if (
    // normalize class / classname attributes
    s.className && (s["class"] = s.className), "object" == typeof s["class"]) {
      for (i in s["class"]) s["class"][i] && D.push(i);
      s["class"] = D.join(" "), D.length = 0;
    }
    null != s.key && (l = s.key), null != s.name && (n = s.name);
  }
  if ("function" == typeof e) 
  // nodeName is a functional component
  return e(s, t || [], T);
  const o = {
    u: e,
    h: t,
    g: void 0,
    s: 0
  };
  return o.p = s, o.o = void 0, o.k = l, o.v = n, o;
}

const O = {}, T = {
  forEach: (e, s) => e.map(_).forEach(s),
  map: (e, s) => e.map(_).map(s).map(A)
}, _ = e => ({
  vattrs: e.p,
  vchildren: e.h,
  vkey: e.k,
  vname: e.v,
  vtag: e.u,
  vtext: e.o
}), A = e => ({
  s: 0,
  p: e.vattrs,
  h: e.vchildren,
  k: e.vkey,
  v: e.vname,
  u: e.vtag,
  o: e.vtext
}), L = (e, s, t, a, r, i) => {
  if ("class" !== s || r) if ("style" === s) {
    for (const s in t) a && null != a[s] || (/-/.test(s) ? e.style.removeProperty(s) : e.style[s] = "");
    for (const s in a) t && a[s] === t[s] || (/-/.test(s) ? e.style.setProperty(s, a[s]) : e.style[s] = a[s]);
  } else if ("key" === s) ; else if ("ref" === s) 
  // minifier will clean this up
  a(e); else if (s.startsWith("on") && !Ce(e, s)) 
  // Event Handlers
  // so if the member name starts with "on" and the 3rd characters is
  // a capital letter, and it's not already a member on the element,
  // then we're assuming it's an event listener
  // standard event
  // the JSX attribute could have been "onMouseOver" and the
  // member name "onmouseover" is on the element's prototype
  // so let's add the listener "mouseover", which is all lowercased
  s = Ce(e, C(s)) ? C(s.substring(2)) : C(s[2]) + s.substring(3), t && e.removeEventListener(s, t), 
  a && e.addEventListener(s, a); else {
    // Set property if it exists and it's not a SVG
    const t = Ce(e, s), l = [ "object", "function" ].includes(typeof a);
    if ((t || l && null !== a) && !r) try {
      e[s] = null == a && -1 === e.tagName.indexOf("-") ? "" : a;
    } catch (e) {}
    null == a || !1 === a ? e.removeAttribute(s) : (!t || 4 /* isHost */ & i || r) && !l && (a = !0 === a ? "" : a.toString(), 
    e.setAttribute(s, a));
  } else if (t !== a) {
    const s = P(t), r = P(a), i = s.filter(e => !r.includes(e)), l = P(e.className).filter(e => !i.includes(e)), n = r.filter(e => !s.includes(e) && !l.includes(e));
    l.push(...n), e.className = l.join(" ");
  }
}, P = e => null == e || "" === e ? [] : e.split(" "), W = (e, s, t, a) => {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  const r = 11 /* DocumentFragment */ === s.g.nodeType && s.g.host ? s.g.host : s.g, i = e && e.p || B, l = s.p || B;
  // remove attributes no longer present on the vnode by setting them to undefined
  for (a in i) l && null != l[a] || null == i[a] || L(r, a, i[a], void 0, t, s.s);
  // add new & update changed attributes
  for (a in l) a in i && l[a] === ("value" === a || "checked" === a ? r[a] : i[a]) || L(r, a, i[a], l[a], t, s.s);
};

let q, U, E, z = !1, G = !1, K = !1, N = !1;

const I = (e, s, a, r) => {
  const i = s.h[a];
  let l = 0, n, o, c;
  if (z || (
  // remember for later we need to check to relocate nodes
  K = !0, "slot" === i.u && (q && 
  // scoped css needs to add its scoped id to the parent element
  r.classList.add(q + "-s"), 
  // slot element has fallback content
  // still create an element that "mocks" the slot element
  i.s |= i.h ? 2 /* isSlotFallback */ : 1 /* isSlotReference */)), M(i.o)) 
  // create text node
  i.g = t.createTextNode(i.o); else if (1 /* isSlotReference */ & i.s) 
  // create a slot reference node
  i.g = t.createTextNode(""); else if (
  // create element
  (n = i.g = t.createElement(2 /* isSlotFallback */ & i.s ? "slot-fb" : i.u))["s-lr"] = !1, 
  W(null, i, N), M(q) && n["s-si"] !== q && 
  // if there is a scopeId and this is the initial render
  // then let's add the scopeId as a css class
  n.classList.add(n["s-si"] = q), i.h) for (l = 0; l < i.h.length; ++l) 
  // create the node
  // return node could have been null
  (o = I(e, i, l, n)) && 
  // append our new node
  n.appendChild(o);
  return i.g["s-hn"] = E, i.s & (2 /* isSlotFallback */ | 1 /* isSlotReference */) && (
  // remember the content reference comment
  i.g["s-sr"] = !0, 
  // remember the content reference comment
  i.g["s-cr"] = U, 
  // remember the slot name, or empty string for default slot
  i.g["s-sn"] = i.v || "", (
  // check if we've got an old vnode for this slot
  c = e && e.h && e.h[a]) && c.u === i.u && e.g && 
  // we've got an old slot vnode and the wrapper is being replaced
  // so let's move the old slot content back to it's original location
  H(e.g, !1)), i.g;
}, H = (e, s) => {
  a.s |= 1 /* isTmpDisconnected */;
  const t = e.childNodes;
  for (let e = t.length - 1; e >= 0; e--) {
    const a = t[e];
    a["s-hn"] !== E && a["s-ol"] && (
    // // this child node in the old element is from another component
    // // remove this node from the old slot's parent
    // childNode.remove();
    // and relocate it back to it's original location
    Z(a).insertBefore(a, Y(a)), 
    // remove the old original location comment entirely
    // later on the patch function will know what to do
    // and move this to the correct spot in need be
    a["s-ol"].remove(), a["s-ol"] = void 0, K = !0), s && H(a, s);
  }
  a.s &= ~1 /* isTmpDisconnected */;
}, V = (e, s, t, a, r, i) => {
  let l = e["s-cr"] && e["s-cr"].parentNode || e, n;
  for (l.shadowRoot && C(l.tagName) === E && (l = l.shadowRoot); r <= i; ++r) a[r] && (n = I(null, t, r, e)) && (a[r].g = n, 
  l.insertBefore(n, Y(s)));
}, J = (e, s, t, a) => {
  for (;s <= t; ++s) M(e[s]) && (a = e[s].g, re(e[s], !0), 
  // we're removing this element
  // so it's possible we need to show slot fallback content now
  G = !0, a["s-ol"] ? 
  // remove the original location comment
  a["s-ol"].remove() : 
  // it's possible that child nodes of the node
  // that's being removed are slot nodes
  H(a, !0), 
  // remove the vnode's element from the dom
  a.remove());
}, Q = (e, s, t, a) => {
  let r = 0, i = 0, l = 0, n = 0, o = s.length - 1, c = s[0], d = s[o], u = a.length - 1, h = a[0], m = a[u], g, f;
  for (;r <= o && i <= u; ) if (null == c) 
  // Vnode might have been moved left
  c = s[++r]; else if (null == d) d = s[--o]; else if (null == h) h = a[++i]; else if (null == m) m = a[--u]; else if (X(c, h)) ee(c, h), 
  c = s[++r], h = a[++i]; else if (X(d, m)) ee(d, m), d = s[--o], m = a[--u]; else if (X(c, m)) 
  // Vnode moved right
  "slot" !== c.u && "slot" !== m.u || H(c.g.parentNode, !1), ee(c, m), e.insertBefore(c.g, d.g.nextSibling), 
  c = s[++r], m = a[--u]; else if (X(d, h)) 
  // Vnode moved left
  "slot" !== c.u && "slot" !== m.u || H(d.g.parentNode, !1), ee(d, h), e.insertBefore(d.g, c.g), 
  d = s[--o], h = a[++i]; else {
    for (
    // createKeyToOldIdx
    l = -1, n = r; n <= o; ++n) if (s[n] && M(s[n].k) && s[n].k === h.k) {
      l = n;
      break;
    }
    l >= 0 ? ((f = s[l]).u !== h.u ? g = I(s && s[i], t, l, e) : (ee(f, h), s[l] = void 0, 
    g = f.g), h = a[++i]) : (
    // new element
    g = I(s && s[i], t, i, e), h = a[++i]), g && Z(c.g).insertBefore(g, Y(c.g));
  }
  r > o ? V(e, null == a[u + 1] ? null : a[u + 1].g, t, a, i, u) : i > u && J(s, r, o);
}, X = (e, s) => 
// compare if two vnode to see if they're "technically" the same
// need to have the same element tag, and same key to be the same
e.u === s.u && ("slot" === e.u ? e.v === s.v : e.k === s.k), Y = e => e && e["s-ol"] ? e["s-ol"] : e, Z = e => (e["s-ol"] ? e["s-ol"] : e).parentNode, ee = (e, s) => {
  const t = s.g = e.g, a = e.h, r = s.h;
  let i;
  M(s.o) ? (i = t["s-cr"]) ? 
  // this element has slotted content
  i.parentNode.textContent = s.o : e.o !== s.o && (
  // update the text content for the text only vnode
  // and also only if the text is different than before
  t.textContent = s.o) : ("slot" === s.u || 
  // either this is the first render of an element OR it's an update
  // AND we already know it's possible it could have changed
  // this updates the element's css classes, attrs, props, listeners, etc.
  W(e, s, N), M(a) && M(r) ? 
  // looks like there's child vnodes for both the old and new vnodes
  Q(t, a, s, r) : M(r) ? (
  // no old child vnodes, but there are new child vnodes to add
  M(e.o) && (
  // the old vnode was text, so be sure to clear it out
  t.textContent = ""), 
  // add the new vnode children
  V(t, null, s, r, 0, r.length - 1)) : M(a) && 
  // no new child vnodes, but there are old child vnodes to remove
  J(a, 0, a.length - 1));
}, se = (e, s, t, a, r, i, l, n) => {
  for (a = 0, r = (t = e.childNodes).length; a < r; a++) if (1 /* ElementNode */ === (s = t[a]).nodeType) {
    if (s["s-sr"]) for (
    // this is a slot fallback node
    // get the slot name for this slot reference node
    l = s["s-sn"], 
    // by default always show a fallback slot node
    // then hide it if there are other slots in the light dom
    s.hidden = !1, i = 0; i < r; i++) if (t[i]["s-hn"] !== s["s-hn"]) if (
    // this sibling node is from a different component
    n = t[i].nodeType, "" !== l) {
      // this is a named fallback slot node
      if (1 /* ElementNode */ === n && l === t[i].getAttribute("slot")) {
        s.hidden = !0;
        break;
      }
    } else 
    // this is a default fallback slot node
    // any element or text node (with content)
    // should hide the default fallback slot node
    if (1 /* ElementNode */ === n || 3 /* TextNode */ === n && "" !== t[i].textContent.trim()) {
      s.hidden = !0;
      break;
    }
    // keep drilling down
        se(s);
  }
}, te = [], ae = e => {
  // tslint:disable-next-line: prefer-const
  let s = e.childNodes, t = s.length, a = 0, r = 0, i = 0, l, n, o, c;
  for (t = s.length; a < t; a++) {
    if ((l = s[a])["s-sr"] && (n = l["s-cr"])) for (
    // first got the content reference comment node
    // then we got it's parent, which is where all the host content is in now
    c = l["s-sn"], r = (o = n.parentNode.childNodes).length - 1; r >= 0; r--) (n = o[r])["s-cn"] || n["s-nr"] || n["s-hn"] === l["s-hn"] || ((3 /* TextNode */ === (
    // let's do some relocating to its new home
    // but never relocate a content reference node
    // that is suppose to always represent the original content location
    i = n.nodeType) || 8 /* CommentNode */ === i) && "" === c || 1 /* ElementNode */ === i && null === n.getAttribute("slot") && "" === c || 1 /* ElementNode */ === i && n.getAttribute("slot") === c) && (
    // it's possible we've already decided to relocate this node
    te.some(e => e.nodeToRelocate === n) || (
    // made some changes to slots
    // let's make sure we also double check
    // fallbacks are correctly hidden or shown
    G = !0, n["s-sn"] = c, 
    // add to our list of nodes to relocate
    te.push({
      slotRefNode: l,
      nodeToRelocate: n
    })));
    1 /* ElementNode */ === l.nodeType && ae(l);
  }
}, re = (e, s) => {
  e && (e.p && e.p.ref && e.p.ref(s ? null : e.g), e.h && e.h.forEach(e => {
    re(e, s);
  }));
}, ie = e => e && e.u === O, le = (e, s, i, l) => {
  const n = s.$ || {
    s: 0
  };
  if (E = C(e.tagName), ie(l) ? l.u = null : l = F(null, null, l), i.S && (l.p = l.p || {}, 
  i.S.forEach(([s, t]) => l.p[t] = e[s])), l.s |= 4 /* isHost */ , s.$ = l, l.g = n.g = e.shadowRoot || e, 
  U = e["s-cr"], z = !!(r && 1 /* shadowDomEncapsulation */ & i.s), q = e["s-sc"], 
  // always reset
  K = G = !1, 
  // synchronous patch
  ee(n, l), K) {
    ae(l.g);
    for (let e = 0; e < te.length; e++) {
      const s = te[e];
      if (!s.nodeToRelocate["s-ol"]) {
        // add a reference node marking this node's original location
        // keep a reference to this node for later lookups
        const e = t.createTextNode("");
        e["s-nr"] = s.nodeToRelocate, s.nodeToRelocate.parentNode.insertBefore(s.nodeToRelocate["s-ol"] = e, s.nodeToRelocate);
      }
    }
    // while we're moving nodes around existing nodes, temporarily disable
    // the disconnectCallback from working
        a.s |= 1 /* isTmpDisconnected */;
    for (let e = 0; e < te.length; e++) {
      const s = te[e], t = s.slotRefNode.parentNode;
      // by default we're just going to insert it directly
      // after the slot reference node
            let a = s.slotRefNode.nextSibling, r = s.nodeToRelocate["s-ol"];
      for (;r = r.previousSibling; ) {
        let e = r["s-nr"];
        if (e && e && e["s-sn"] === s.nodeToRelocate["s-sn"] && t === e.parentNode && (e = e.nextSibling) && e && !e["s-nr"]) {
          a = e;
          break;
        }
      }
      (!a && t !== s.nodeToRelocate.parentNode || s.nodeToRelocate.nextSibling !== a) && s.nodeToRelocate !== a && 
      // add it back to the dom but in its new home
      t.insertBefore(s.nodeToRelocate, a);
    }
    // done moving nodes around
    // allow the disconnect callback to work again
        a.s &= ~1 /* isTmpDisconnected */;
  }
  G && se(l.g), 
  // always reset
  te.length = 0;
}, ne = async (e, s, t, a) => {
  s.j |= 16 /* isQueuedForUpdate */;
  const r = s.B;
  try {
    a ? r.componentWillLoad && await r.componentWillLoad() : r.componentWillUpdate && await r.componentWillUpdate();
  } catch (e) {
    n(e);
  }
  // there is no ancestorc omponent or the ancestor component
  // has already fired off its lifecycle update then
  // fire off the initial update
    p(() => oe(e, s, t, a, r));
}, oe = (e, s, t, a, r) => {
  s.j &= ~16 /* isQueuedForUpdate */ , e["s-lr"] = !1, a && 
  // DOM WRITE!
  x(e, t, s.M), 
  // tell the platform we're actively rendering
  // if a value is changed within a render() then
  // this tells the platform not to queue the change
  s.j |= 4 /* isActiveRender */;
  try {
    // looks like we've got child nodes to render into this host element
    // or we need to update the css class/attrs on the host element
    // DOM WRITE!
    le(e, s, t, r.render());
  } catch (e) {
    n(e);
  }
  s.j &= ~4 /* isActiveRender */ , Fe && Fe.updateHost(e), e["s-lr"] = !0, s.j |= 2 /* hasRendered */ , 
  void 0 !== e["s-rc"] && (
  // ok, so turns out there are some child host elements
  // waiting on this parent element to load
  // let's fire off all update callbacks waiting
  e["s-rc"].forEach(e => e()), e["s-rc"] = void 0), ce(e, s);
}, ce = (e, s, r) => {
  if (!e["s-al"]) {
    const i = s.B, l = s.C;
    512 /* hasLoadedComponent */ & s.j || (s.j |= 512 /* hasLoadedComponent */ , 
    // DOM WRITE!
    // add the css class that this element has officially hydrated
    e.classList.add(w), i.componentDidLoad && i.componentDidLoad(), s.R(e), l || (
    // on appload
    // we have finish the first big initial render
    t.documentElement.classList.add(w), setTimeout(() => a.s |= 2 /* queueAsync */ , 999))), 
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    l && (
    // ok so this element already has a known ancestor component
    // let's make sure we remove this element from its ancestor's
    // known list of child elements which are actively loading
    (r = l["s-al"]) && (
    // remove this element from the actively loading map
    r.delete(e), 
    // the ancestor's initializeComponent method will do the actual checks
    // to see if the ancestor is actually loaded or not
    // then let's call the ancestor's initializeComponent method if there's no length
    // (which actually ends up as this method again but for the ancestor)
    0 === r.size && (l["s-al"] = void 0, l["s-init"]())), s.C = void 0);
  }
}, de = (e, s) => je(e).D.get(s), ue = (e, s, t, a) => {
  // check our new property value against our internal value
  const r = je(e), i = r.F, l = r.D.get(s), o = r.j;
  if (!((t = k(t, a.O[s][0])) === l || 8 /* isConstructingInstance */ & o && void 0 !== l) && (
  // gadzooks! the property's value has changed!!
  // set our new value!
  r.D.set(s, t), r.B)) {
    // get an array of method names of watch functions to call
    if (a.T && 1 /* hasConnected */ == (o & (1 /* hasConnected */ | 8 /* isConstructingInstance */))) {
      const e = a.T[s];
      e && 
      // this instance is watching for when this property changed
      e.forEach(e => {
        try {
          // fire off each of the watch methods that are watching this property
          r.B[e].call(r.B, t, l, s);
        } catch (e) {
          n(e);
        }
      });
    }
    2 /* hasRendered */ == (o & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) && 
    // looks like this value actually changed, so we've got work to do!
    // but only if we've already rendered, otherwise just chill out
    // queue that we need to do an update, but don't worry about queuing
    // up millions cuz this function ensures it only runs once
    ne(i, r, a, !1);
  }
}, he = (e, s, t, a) => {
  if (s.O) {
    e.watchers && (s.T = e.watchers);
    // It's better to have a const than two Object.entries()
        const r = Object.entries(s.O);
    if (r.forEach(([r, [i]]) => {
      31 & i || a && 32 /* State */ & i ? 
      // proxyComponent - prop
      Object.defineProperty(e.prototype, r, {
        get() {
          // proxyComponent, get value
          return de(this, r);
        },
        set(e) {
          // proxyComponent, set value
          ue(this, r, e, s);
        },
        configurable: !0,
        enumerable: !0
      }) : t && 64 /* Method */ & i && 
      // proxyComponent - method
      Object.defineProperty(e.prototype, r, {
        value() {
          const e = je(this), s = arguments;
          return e._.then(() => e.B[r].apply(e.B, s));
        }
      });
    }), t) {
      const t = new Map();
      e.prototype.attributeChangedCallback = function(e, s, a) {
        const r = t.get(e);
        this[r] = (null !== a || "boolean" != typeof this[r]) && a;
      }, 
      // create an array of attributes to observe
      // and also create a map of html attribute name to js property name
      e.observedAttributes = r.filter(([e, s]) => 15 /* HasAttribute */ & s[0]).map(([e, a]) => {
        const r = a[1] || e;
        return t.set(r, e), 512 /* ReflectAttr */ & a[0] && s.S.push([ e, r ]), r;
      });
    }
  }
  return e;
}, me = (e, s, t) => {
  const a = t.map(([t, a, r]) => {
    const i = fe(e, t), l = ge(s, r), n = be(t);
    return i.addEventListener(a, l, n), () => i.removeEventListener(a, l, n);
  });
  return () => a.forEach(e => e());
}, ge = (e, s) => t => e.B ? e.B[s](t) : e._.then(() => e.B[s](t)).catch(n), fe = (e, t) => 8 /* TargetWindow */ & t ? s : e, be = e => i ? {
  passive: 0 != (1 /* Passive */ & e),
  capture: 0 != (2 /* Capture */ & e)
} : 0 != (2 /* Capture */ & e), pe = async (e, s, t, a, r) => {
  // initializeComponent
  if (!(256 /* hasInitializedComponent */ & s.j)) {
    // we haven't initialized this element yet
    s.j |= 256 /* hasInitializedComponent */;
    // lazy loaded components
    try {
      // request the component's implementation to be
      // wired up with the host element
      (r = await Re(t, s, a)).isProxied || (t.T = r.watchers, he(r, t, 0, 1), r.isProxied = !0), 
      s.j |= 8 /* isConstructingInstance */ , 
      // construct the lazy-loaded component implementation
      // passing the hostRef is very important during
      // construction in order to directly wire together the
      // host element and the lazy-loaded instance
      new r(s), s.j &= ~8 /* isConstructingInstance */;
    } catch (e) {
      n(e);
    }
    if (!r.isStyleRegistered && r.style) {
      // this component has styles but we haven't registered them yet
      let e = r.style, a = j(t.l, s.M);
      8 /* needsShadowDomShim */ & t.s && (e = await Promise.resolve(require("./chunk-9ca7d9da.js")).then(s => s.scopeCss(e, a, !1))), 
      $(a, e), r.isStyleRegistered = !0;
    }
  }
  // we've successfully created a lazy instance
    s.C && !s.C["s-lr"] ? 
  // this is the intial load and this component it has an ancestor component
  // but the ancestor component has NOT fired its will update lifecycle yet
  // so let's just cool our jets and wait for the ancestor to continue first
  s.C["s-rc"].push(() => 
  // this will get fired off when the ancestor component
  // finally gets around to rendering its lazy self
  // fire off the initial update
  pe(e, s, t)) : ne(e, s, t, !0);
}, ye = (e, s) => {
  if (0 == (1 /* isTmpDisconnected */ & a.s)) {
    // connectedCallback
    const t = je(e);
    if (s.A && (
    // initialize our event listeners on the host element
    // we do this now so that we can listening to events that may
    // have fired even before the instance is ready
    t.i = me(e, t, s.A)), !(1 /* hasConnected */ & t.j)) {
      let a;
      // first time this component has connected
      t.j |= 1 /* hasConnected */ , a || 
      // initUpdate
      // if the slot polyfill is required we'll need to put some nodes
      // in here to act as original content anchors as we move nodes around
      // host element has been connected to the DOM
      (4 & s.s || 8 /* needsShadowDomShim */ & s.s) && ke(e);
      {
        // find the first ancestor component (if there is one) and register
        // this component as one of the actively loading child components for its ancestor
        let s = e;
        for (;s = s.parentNode || s.host; ) 
        // climb up the ancestors looking for the first
        // component that hasn't finished its lifecycle update yet
        if (s["s-init"] && !s["s-lr"]) {
          // we found this components first ancestor component
          // keep a reference to this component's ancestor component
          t.C = s, 
          // ensure there is an array to contain a reference to each of the child components
          // and set this component as one of the ancestor's child components it should wait on
          (s["s-al"] = s["s-al"] || new Set()).add(e);
          break;
        }
      }
      // Lazy properties
      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            s.O && Object.entries(s.O).forEach(([s, [t]]) => {
        if (31 /* Prop */ & t && e.hasOwnProperty(s)) {
          const t = e[s];
          delete e[s], e[s] = t;
        }
      }), pe(e, t, s);
    }
  }
}, ke = (e, s) => {
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  let a;
  (s = e["s-cr"] = t.createComment(a = ""))["s-cn"] = !0, e.insertBefore(s, e.firstChild);
}, we = (e, i = {}) => {
  const l = [], n = i.exclude || [], o = t.head, c = s.customElements, d = /* */ o.querySelector("meta[charset]"), u = /* */ t.createElement("style");
  i.resourcesUrl && (a.t = new URL(i.resourcesUrl, t.baseURI).href), e.forEach(e => e[1].forEach(s => {
    const t = {
      s: s[0],
      l: s[1],
      O: s[2],
      A: s[3],
      S: [],
      T: {}
    };
    !r && 1 /* shadowDomEncapsulation */ & t.s && (t.s |= 8 /* needsShadowDomShim */);
    const a = t.l, i = class extends HTMLElement {
      // StencilLazyHost
      constructor(e) {
        // @ts-ignore
        super(e), this["s-lr"] = !1, this["s-rc"] = [], Me(e = this), 1 /* shadowDomEncapsulation */ === t.s && 
        // this component is using shadow dom
        // and this browser supports shadow dom
        // add the read-only property "shadowRoot" to the host element
        e.attachShadow({
          mode: "open"
        }), 8 /* needsShadowDomShim */ & t.s && (e.shadowRoot = e);
      }
      connectedCallback() {
        ye(this, t);
      }
      disconnectedCallback() {
        y(this);
      }
      "s-init"() {
        const e = je(this);
        e.B && ce(this, e);
      }
      "s-hmr"(e) {}
      forceUpdate() {
        {
          const e = je(this);
          ne(this, e, t, !1);
        }
      }
      componentOnReady() {
        return je(this)._;
      }
    };
    t.L = e[0], n.includes(a) || c.get(a) || (l.push(a), c.define(a, he(i, t, 1, 0)));
  })), 
  // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
  u.innerHTML = l + "{visibility:hidden}.hydrated{visibility:inherit}", u.setAttribute("data-styles", ""), 
  o.insertBefore(u, d ? d.nextSibling : o.firstChild);
}, ve = (e, s, t) => {
  const a = Se(e);
  return {
    emit: e => a.dispatchEvent(new CustomEvent(s, {
      bubbles: !!(4 /* Bubbles */ & t),
      composed: !!(2 /* Composed */ & t),
      cancelable: !!(1 /* Cancellable */ & t),
      detail: e
    }))
  };
}, $e = e => new URL(e, a.t).pathname, Se = e => je(e).F, xe = new WeakMap(), je = e => xe.get(e), Be = (e, s) => xe.set(s.B = e, s), Me = e => {
  // TODO: it's so ugly, but minifies really well
  {
    const s = {
      j: 0,
      F: e
    };
    return s._ = new Promise(e => s.R = e), s.D = new Map(), xe.set(e, s);
  }
}, Ce = (e, s) => s in e, Re = (e, s, t) => {
  // loadModuleImport
  const a = e.L;
  return Promise.resolve(require(
  /* webpackInclude: /\.entry\.js$/ */
  /* webpackExclude: /\.(system|cjs)\.entry\.js$/ */
  /* webpackMode: "lazy" */
  `./${a}.entry.js${""}`)).then(s => s[e.l.replace(/-/g, "_")], n);
}, De = new Map(), Fe = s.__stencil_cssshim, Oe = async () => {
  const s = Array.from(t.querySelectorAll("script")).find(s => s.src.includes(e)), a = new URL(".", new URL(s ? s.src : "", t.baseURI));
  return Te(a.href), window.customElements || 
  // @ts-ignore
  await Promise.resolve(require("./chunk-81604c6f.js")), a.pathname;
}, Te = a => {
  const r = R(e);
  try {
    s[r] = new Function("w", "return import(w);");
  } catch (e) {
    const i = new Map();
    s[r] = (e => {
      const l = new URL(e, a).href;
      let n = i.get(l);
      if (!n) {
        const e = t.createElement("script");
        e.type = "module", e.src = URL.createObjectURL(new Blob([ `import * as m from '${l}'; window.${r}.m = m;` ], {
          type: "application/javascript"
        })), n = new Promise(t => {
          e.onload = (() => {
            t(s[r].m), e.remove();
          });
        }), i.set(l, n), t.head.appendChild(e);
      }
      return n;
    });
  }
}, _e = (e, s) => {
  we([ [ "ms-assassin.cjs", [ [ 1, "ms-assassin", {
    editable: [ 516 ],
    extras: [ 4 ],
    darkCloak: [ 1026, "dark-cloak" ],
    dash: [ 1026 ],
    deathSentence: [ 1026, "death-sentence" ],
    fatalStrikes: [ 1026, "fatal-strikes" ],
    fragmentedStar: [ 1026, "fragmented-star" ],
    luckyStars: [ 1026, "lucky-stars" ],
    markOfDeath: [ 1026, "mark-of-death" ],
    mirrorImageDarkBlade: [ 1026, "mirror-image-dark-blade" ],
    shadowArts: [ 1026, "shadow-arts" ],
    shadowBurst: [ 1026, "shadow-burst" ],
    shadowChaser: [ 1026, "shadow-chaser" ],
    shadowCutter: [ 1026, "shadow-cutter" ],
    shadowWeb: [ 1026, "shadow-web" ],
    soulGrind: [ 1026, "soul-grind" ],
    starChaser: [ 1026, "star-chaser" ],
    starFlurry: [ 1026, "star-flurry" ],
    thrownWeaponMastery: [ 1026, "thrown-weapon-mastery" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-archer.cjs", [ [ 1, "ms-archer", {
    editable: [ 516 ],
    extras: [ 4 ],
    agileArcher: [ 1026, "agile-archer" ],
    arrowBarrage: [ 1026, "arrow-barrage" ],
    arrowStorm: [ 1026, "arrow-storm" ],
    arrowStream: [ 1026, "arrow-stream" ],
    bowSwing: [ 1026, "bow-swing" ],
    bronzeEagle: [ 1026, "bronze-eagle" ],
    conditioning: [ 1026 ],
    eagleClaw: [ 1026, "eagle-claw" ],
    eagleGlide: [ 1026, "eagle-glide" ],
    eaglesMajesty: [ 1026, "eagles-majesty" ],
    evasiveSalvo: [ 1026, "evasive-salvo" ],
    iceArrow: [ 1026, "ice-arrow" ],
    precisionShooter: [ 1026, "precision-shooter" ],
    rapidShot: [ 1026, "rapid-shot" ],
    screwdriverShot: [ 1026, "screwdriver-shot" ],
    sharpEyes: [ 1026, "sharp-eyes" ],
    snipe: [ 1026 ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-priest.cjs", [ [ 1, "ms-priest", {
    editable: [ 516 ],
    extras: [ 4 ],
    heavenlyWings: [ 1026, "heavenly-wings" ],
    steadfastFaith: [ 1026, "steadfast-faith" ],
    celestialLight: [ 1026, "celestial-light" ],
    holyBlast: [ 1026, "holy-blast" ],
    healingPrayer: [ 1026, "healing-prayer" ],
    scepterMastery: [ 1026, "scepter-mastery" ],
    celestialGuardian: [ 1026, "celestial-guardian" ],
    shieldOfTheArchon: [ 1026, "shield-of-the-archon" ],
    scourgingWave: [ 1026, "scourging-wave" ],
    celestialBlessings: [ 1026, "celestial-blessings" ],
    holyRelic: [ 1026, "holy-relic" ],
    sanctuary: [ 1026 ],
    holySymbol: [ 1026, "holy-symbol" ],
    healingMastery: [ 1026, "healing-mastery" ],
    smitingAura: [ 1026, "smiting-aura" ],
    disciple: [ 1026 ],
    angelicRay: [ 1026, "angelic-ray" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-berserker.cjs", [ [ 1, "ms-berserker", {
    editable: [ 516 ],
    extras: [ 4 ],
    adrenalineRush: [ 1026, "adrenaline-rush" ],
    bloodPrice: [ 1026, "blood-price" ],
    bloodlust: [ 1026 ],
    darkAura: [ 1026, "dark-aura" ],
    darkBreaker: [ 1026, "dark-breaker" ],
    darkMight: [ 1026, "dark-might" ],
    deathSpin: [ 1026, "death-spin" ],
    deepWounds: [ 1026, "deep-wounds" ],
    earthquake: [ 1026 ],
    greatswordMastery: [ 1026, "greatsword-mastery" ],
    groundBreaker: [ 1026, "ground-breaker" ],
    inhumanEndurance: [ 1026, "inhuman-endurance" ],
    intimidation: [ 1026 ],
    ragingSlash: [ 1026, "raging-slash" ],
    voidSlash: [ 1026, "void-slash" ],
    warriorsInstinct: [ 1026, "warriors-instinct" ],
    xSlash: [ 1026, "x-slash" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-heavy-gunner.cjs", [ [ 1, "ms-heavy-gunner", {
    editable: [ 516 ],
    extras: [ 4 ],
    advancedBullets: [ 1026, "advanced-bullets" ],
    advancedMissiles: [ 1026, "advanced-missiles" ],
    advancedPulseWeapons: [ 1026, "advanced-pulse-weapons" ],
    blastChargeKit: [ 1026, "blast-charge-kit" ],
    bulletSpray: [ 1026, "bullet-spray" ],
    electricBlast: [ 1026, "electric-blast" ],
    gatlingFire: [ 1026, "gatling-fire" ],
    homingMissiles: [ 1026, "homing-missiles" ],
    jetBoots: [ 1026, "jet-boots" ],
    lockOn: [ 1026, "lock-on" ],
    magneticBomb: [ 1026, "magnetic-bomb" ],
    mBomb: [ 1026, "m-bomb" ],
    medKit: [ 1026, "med-kit" ],
    reload: [ 1026 ],
    rocketLauncher: [ 1026, "rocket-launcher" ],
    stunGrenades: [ 1026, "stun-grenades" ],
    suborbitalBombardment: [ 1026, "suborbital-bombardment" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-knight.cjs", [ [ 1, "ms-knight", {
    editable: [ 516 ],
    extras: [ 4 ],
    bulwark: [ 1026 ],
    crossCut: [ 1026, "cross-cut" ],
    defenderOfTheFaith: [ 1026, "defender-of-the-faith" ],
    divineStrike: [ 1026, "divine-strike" ],
    drillThrust: [ 1026, "drill-thrust" ],
    ironDefense: [ 1026, "iron-defense" ],
    ironShield: [ 1026, "iron-shield" ],
    longswordMastery: [ 1026, "longsword-mastery" ],
    shieldBooster: [ 1026, "shield-booster" ],
    shieldCharge: [ 1026, "shield-charge" ],
    shieldMastery: [ 1026, "shield-mastery" ],
    shieldToss: [ 1026, "shield-toss" ],
    shieldWall: [ 1026, "shield-wall" ],
    stingingFlurry: [ 1026, "stinging-flurry" ],
    tornadoSlash: [ 1026, "tornado-slash" ],
    typhoonSlash: [ 1026, "typhoon-slash" ],
    warhorn: [ 1026 ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-runeblade.cjs", [ [ 1, "ms-runeblade", {
    editable: [ 516 ],
    extras: [ 516 ],
    sigil: [ 1537 ],
    bladeChasm: [ 1026, "blade-chasm" ],
    bladeMastery: [ 1026, "blade-mastery" ],
    blink: [ 1026 ],
    elementalPotency: [ 1026, "elemental-potency" ],
    echoingBlade: [ 1026, "echoing-blade" ],
    flameSigil: [ 1026, "flame-sigil" ],
    flurry: [ 1026 ],
    frostSigil: [ 1026, "frost-sigil" ],
    gravityRune: [ 1026, "gravity-rune" ],
    honingRunes: [ 1026, "honing-runes" ],
    illusoryBlades: [ 1026, "illusory-blades" ],
    impact: [ 1026 ],
    runeBalance: [ 1026, "rune-balance" ],
    runeFocus: [ 1026, "rune-focus" ],
    stormSigil: [ 1026, "storm-sigil" ],
    wardingRune: [ 1026, "warding-rune" ],
    whirlingBlades: [ 1026, "whirling-blades" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-soul-binder.cjs", [ [ 1, "ms-soul-binder", {
    editable: [ 516 ],
    extras: [ 4 ],
    animusFocus: [ 1026, "animus-focus" ],
    concussionOrb: [ 1026, "concussion-orb" ],
    soaringOrb: [ 1026, "soaring-orb" ],
    ragingTempest: [ 1026, "raging-tempest" ],
    staticFlash: [ 1026, "static-flash" ],
    energySurge: [ 1026, "energy-surge" ],
    expansionBlast: [ 1026, "expansion-blast" ],
    flashStrike: [ 1026, "flash-strike" ],
    illusion: [ 1026 ],
    healingBond: [ 1026, "healing-bond" ],
    mantraArray: [ 1026, "mantra-array" ],
    narubashanUnleashed: [ 1026, "narubashan-unleashed" ],
    orbMastery: [ 1026, "orb-mastery" ],
    radiantSalvo: [ 1026, "radiant-salvo" ],
    shootingStar: [ 1026, "shooting-star" ],
    lightBarrier: [ 1026, "light-barrier" ],
    fountOfRenewal: [ 1026, "fount-of-renewal" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-striker.cjs", [ [ 1, "ms-striker", {
    editable: [ 516 ],
    extras: [ 4 ],
    beatdown: [ 1026 ],
    dragonKick: [ 1026, "dragon-kick" ],
    fightingSpirit: [ 1026, "fighting-spirit" ],
    fistsOfFury: [ 1026, "fists-of-fury" ],
    giganticBurst: [ 1026, "gigantic-burst" ],
    guardDash: [ 1026, "guard-dash" ],
    guillotine: [ 1026 ],
    hurricaneCutter: [ 1026, "hurricane-cutter" ],
    kickTechnician: [ 1026, "kick-technician" ],
    knuckleMissile: [ 1026, "knuckle-missile" ],
    magnumBlow: [ 1026, "magnum-blow" ],
    maharPunch: [ 1026, "mahar-punch" ],
    overcome: [ 1026 ],
    paceControl: [ 1026, "pace-control" ],
    patternBreak: [ 1026, "pattern-break" ],
    powerPuncher: [ 1026, "power-puncher" ],
    risingKick: [ 1026, "rising-kick" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-thief.cjs", [ [ 1, "ms-thief", {
    editable: [ 516 ],
    extras: [ 4 ],
    bladeDance: [ 1026, "blade-dance" ],
    cunningTactics: [ 1026, "cunning-tactics" ],
    deftCombatant: [ 1026, "deft-combatant" ],
    doubleSlash: [ 1026, "double-slash" ],
    haste: [ 1026 ],
    mesoguardPlus: [ 1026, "mesoguard-plus" ],
    mindBreaker: [ 1026, "mind-breaker" ],
    mindStealer: [ 1026, "mind-stealer" ],
    poisonEdge: [ 1026, "poison-edge" ],
    poisonVial: [ 1026, "poison-vial" ],
    quickStep: [ 1026, "quick-step" ],
    retaliation: [ 1026 ],
    ruthlessGuile: [ 1026, "ruthless-guile" ],
    somersaultKick: [ 1026, "somersault-kick" ],
    spiritThief: [ 1026, "spirit-thief" ],
    surpriseAttack: [ 1026, "surprise-attack" ],
    viciousCuts: [ 1026, "vicious-cuts" ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-wizard.cjs", [ [ 1, "ms-wizard", {
    editable: [ 516 ],
    extras: [ 4 ],
    arcaneBlast: [ 1026, "arcane-blast" ],
    chainLightning: [ 1026, "chain-lightning" ],
    cryomancy: [ 1026 ],
    electromancy: [ 1026 ],
    elementalMaster: [ 1026, "elemental-master" ],
    flameTornado: [ 1026, "flame-tornado" ],
    flameWave: [ 1026, "flame-wave" ],
    focusSeal: [ 1026, "focus-seal" ],
    iceSpear: [ 1026, "ice-spear" ],
    iceStorm: [ 1026, "ice-storm" ],
    magicArmor: [ 1026, "magic-armor" ],
    manaClaw: [ 1026, "mana-claw" ],
    manaFont: [ 1026, "mana-font" ],
    phantomClaw: [ 1026, "phantom-claw" ],
    pyromancy: [ 1026 ],
    teleport: [ 1026 ],
    thunderbolt: [ 1026 ],
    skills: [ 32 ],
    getData: [ 64 ]
  } ] ] ], [ "ms-extra-counter_2.cjs", [ [ 1, "ms-extra-counter", {
    editor: [ 1 ],
    _editor: [ 32 ],
    _pointsLeft: [ 32 ]
  } ], [ 1, "ms-extra-outlet", {
    editor: [ 1 ],
    _editor: [ 32 ],
    _skills: [ 32 ],
    _tagName: [ 32 ]
  } ] ] ], [ "ms-chart_5.cjs", [ [ 1, "ms-chart", {
    msClass: [ 1, "ms-class" ]
  }, [ [ 9, "resize", "resize" ] ] ], [ 1, "ms-footer" ], [ 1, "ms-icon", {
    name: [ 513 ],
    sp: [ 516 ]
  } ], [ 1, "ms-skill", {
    level: [ 1538 ],
    skill: [ 16 ],
    extras: [ 4 ],
    column: [ 1538 ],
    row: [ 1538 ],
    limitReached: [ 4, "limit-reached" ],
    locked: [ 516 ],
    required: [ 513 ],
    disabled: [ 4 ],
    loop: [ 4 ],
    overlayLevel: [ 32 ]
  } ], [ 1, "ms-skill-overlay", {
    level: [ 514 ],
    skill: [ 16 ],
    extras: [ 4 ]
  } ] ] ] ], s);
};

exports.Host = O, exports.createEvent = ve, exports.defineCustomElements = _e, exports.getAssetPath = $e, 
exports.getElement = Se, exports.h = F, exports.patchBrowser = Oe, exports.registerInstance = Be;
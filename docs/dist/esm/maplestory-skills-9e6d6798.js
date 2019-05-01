const e = "maplestory-skills", t = window, a = document, s = {
  t: 0,
  s: "/"
}, r = !!a.documentElement.attachShadow, i = /* */ (() => {
  let e = !1;
  try {
    a.addEventListener("e", null, Object.defineProperty({}, "passive", {
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

const d = [], u = [], h = [], m = e => t => {
  // queue dom reads
  e.push(t), c || (c = !0, requestAnimationFrame(b));
}, g = e => {
  for (let t = 0; t < e.length; t++) try {
    e[t](performance.now());
  } catch (e) {
    n(e);
  }
  e.length = 0;
}, f = (e, t) => {
  let a = 0, s = 0;
  for (;a < e.length && (s = performance.now()) < t; ) try {
    e[a++](s);
  } catch (e) {
    n(e);
  }
  a === e.length ? e.length = 0 : 0 !== a && e.splice(0, a);
}, b = () => {
  o++, 
  // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!
  g(d);
  const e = 2 /* queueAsync */ & s.t ? performance.now() + 7 * Math.ceil(o * (1 / 22)) : 1 / 0;
  // DOM WRITES!!!
    f(u, e), f(h, e), u.length > 0 && (h.push(...u), u.length = 0), (c = d.length + u.length + h.length > 0) ? 
  // still more to do yet, but we've run out of time
  // let's let this thing cool off and try again in the next tick
  requestAnimationFrame(b) : o = 0;
}, y = /* */ m(u), p = e => {
  if (0 == (1 /* isTmpDisconnected */ & s.t)) {
    const t = xe(e);
    t.i && (t.i(), t.i = void 0), 
    // clear CSS var-shim tracking
    Fe && Fe.removeHost(e);
  }
}, k = (e, t) => 
// ensure this value is of the correct prop type
null != e && "object" != typeof e && "function" != typeof e ? 4 /* Boolean */ & t ? "false" !== e && ("" === e || !!e) : 2 /* Number */ & t ? parseFloat(e) : 1 /* String */ & t ? String(e) : e : e, w = "hydrated", v = new WeakMap(), $ = (e, t) => {
  let a = De.get(e);
  l ? (a = a || new CSSStyleSheet()).replace(t) : a = t, De.set(e, a);
}, S = (e, t, s, r) => {
  let i = x(t, s), l = De.get(i);
  if (l) if ("string" == typeof l) {
    let t = v.get(e = e.head || e), s;
    t || v.set(e, t = new Set()), t.has(i) || (Fe ? (i = (s = Fe.createHostStyle(r, i, l))["s-sc"], 
    // we don't want to add this styleID to the appliedStyles Set
    // since the cssVarShim might need to apply several different
    // stylesheets for the same component
    t = null) : (s = a.createElement("style")).innerHTML = l, e.appendChild(s), t && t.add(i));
  } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [ ...e.adoptedStyleSheets, l ]);
  return i;
}, B = (e, t, a) => {
  const s = S(e.shadowRoot && r ? e.shadowRoot : e.getRootNode(), t.l, a, e);
  10 /* needsScopedEncapsulation */ & t.t && (
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  // DOM WRITE!!
  e["s-sc"] = s, e.classList.add(s + "-h"));
}, x = (e, t) => "sc-" + e, M = {}, C = e => null != e, R = e => e.toLowerCase();

function j(e) {
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

function F(e, t) {
  let a = null, s = !1, r = !1, i = arguments.length, l, n;
  for (;i-- > 2; ) D.push(arguments[i]);
  for (;D.length > 0; ) {
    let t = D.pop();
    if (t && void 0 !== t.pop) for (i = t.length; i--; ) D.push(t[i]); else "boolean" == typeof t && (t = null), 
    (r = "function" != typeof e) && (null == t ? t = "" : "number" == typeof t ? t = String(t) : "string" != typeof t && (r = !1)), 
    r && s ? a[a.length - 1].o += t : null === a ? a = [ r ? {
      t: 0,
      o: t
    } : t ] : a.push(r ? {
      t: 0,
      o: t
    } : t), s = r;
  }
  if (null != t) {
    if (
    // normalize class / classname attributes
    t.className && (t["class"] = t.className), "object" == typeof t["class"]) {
      for (i in t["class"]) t["class"][i] && D.push(i);
      t["class"] = D.join(" "), D.length = 0;
    }
    null != t.key && (l = t.key), null != t.name && (n = t.name);
  }
  if ("function" == typeof e) 
  // nodeName is a functional component
  return e(t, a || [], T);
  const o = {
    u: e,
    h: a,
    g: void 0,
    t: 0
  };
  return o.p = t, o.o = void 0, o.k = l, o.v = n, o;
}

const O = {}, T = {
  forEach: (e, t) => e.map(_).forEach(t),
  map: (e, t) => e.map(_).map(t).map(A)
}, _ = e => ({
  vattrs: e.p,
  vchildren: e.h,
  vkey: e.k,
  vname: e.v,
  vtag: e.u,
  vtext: e.o
}), A = e => ({
  t: 0,
  p: e.vattrs,
  h: e.vchildren,
  k: e.vkey,
  v: e.vname,
  u: e.vtag,
  o: e.vtext
}), L = (e, t, a, s, r, i) => {
  if ("class" !== t || r) if ("style" === t) {
    for (const t in a) s && null != s[t] || (/-/.test(t) ? e.style.removeProperty(t) : e.style[t] = "");
    for (const t in s) a && s[t] === a[t] || (/-/.test(t) ? e.style.setProperty(t, s[t]) : e.style[t] = s[t]);
  } else if ("key" === t) ; else if ("ref" === t) 
  // minifier will clean this up
  s(e); else if (t.startsWith("on") && !Re(e, t)) 
  // Event Handlers
  // so if the member name starts with "on" and the 3rd characters is
  // a capital letter, and it's not already a member on the element,
  // then we're assuming it's an event listener
  // standard event
  // the JSX attribute could have been "onMouseOver" and the
  // member name "onmouseover" is on the element's prototype
  // so let's add the listener "mouseover", which is all lowercased
  t = Re(e, R(t)) ? R(t.substring(2)) : R(t[2]) + t.substring(3), a && e.removeEventListener(t, a), 
  s && e.addEventListener(t, s); else {
    // Set property if it exists and it's not a SVG
    const a = Re(e, t), l = [ "object", "function" ].includes(typeof s);
    if ((a || l && null !== s) && !r) try {
      e[t] = null == s && -1 === e.tagName.indexOf("-") ? "" : s;
    } catch (e) {}
    null == s || !1 === s ? e.removeAttribute(t) : (!a || 4 /* isHost */ & i || r) && !l && (s = !0 === s ? "" : s.toString(), 
    e.setAttribute(t, s));
  } else if (a !== s) {
    const t = W(a), r = W(s), i = t.filter(e => !r.includes(e)), l = W(e.className).filter(e => !i.includes(e)), n = r.filter(e => !t.includes(e) && !l.includes(e));
    l.push(...n), e.className = l.join(" ");
  }
}, W = e => null == e || "" === e ? [] : e.split(" "), P = (e, t, a, s) => {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  const r = 11 /* DocumentFragment */ === t.g.nodeType && t.g.host ? t.g.host : t.g, i = e && e.p || M, l = t.p || M;
  // remove attributes no longer present on the vnode by setting them to undefined
  for (s in i) l && null != l[s] || null == i[s] || L(r, s, i[s], void 0, a, t.t);
  // add new & update changed attributes
  for (s in l) s in i && l[s] === ("value" === s || "checked" === s ? r[s] : i[s]) || L(r, s, i[s], l[s], a, t.t);
};

let U, E, q, z = !1, G = !1, K = !1, N = !1;

const I = (e, t, s, r) => {
  const i = t.h[s];
  let l = 0, n, o, c;
  if (z || (
  // remember for later we need to check to relocate nodes
  K = !0, "slot" === i.u && (U && 
  // scoped css needs to add its scoped id to the parent element
  r.classList.add(U + "-s"), 
  // slot element has fallback content
  // still create an element that "mocks" the slot element
  i.t |= i.h ? 2 /* isSlotFallback */ : 1 /* isSlotReference */)), C(i.o)) 
  // create text node
  i.g = a.createTextNode(i.o); else if (1 /* isSlotReference */ & i.t) 
  // create a slot reference node
  i.g = a.createTextNode(""); else if (
  // create element
  (n = i.g = a.createElement(2 /* isSlotFallback */ & i.t ? "slot-fb" : i.u))["s-lr"] = !1, 
  P(null, i, N), C(U) && n["s-si"] !== U && 
  // if there is a scopeId and this is the initial render
  // then let's add the scopeId as a css class
  n.classList.add(n["s-si"] = U), i.h) for (l = 0; l < i.h.length; ++l) 
  // create the node
  // return node could have been null
  (o = I(e, i, l, n)) && 
  // append our new node
  n.appendChild(o);
  return i.g["s-hn"] = q, i.t & (2 /* isSlotFallback */ | 1 /* isSlotReference */) && (
  // remember the content reference comment
  i.g["s-sr"] = !0, 
  // remember the content reference comment
  i.g["s-cr"] = E, 
  // remember the slot name, or empty string for default slot
  i.g["s-sn"] = i.v || "", (
  // check if we've got an old vnode for this slot
  c = e && e.h && e.h[s]) && c.u === i.u && e.g && 
  // we've got an old slot vnode and the wrapper is being replaced
  // so let's move the old slot content back to it's original location
  H(e.g, !1)), i.g;
}, H = (e, t) => {
  s.t |= 1 /* isTmpDisconnected */;
  const a = e.childNodes;
  for (let e = a.length - 1; e >= 0; e--) {
    const s = a[e];
    s["s-hn"] !== q && s["s-ol"] && (
    // // this child node in the old element is from another component
    // // remove this node from the old slot's parent
    // childNode.remove();
    // and relocate it back to it's original location
    Z(s).insertBefore(s, Y(s)), 
    // remove the old original location comment entirely
    // later on the patch function will know what to do
    // and move this to the correct spot in need be
    s["s-ol"].remove(), s["s-ol"] = void 0, K = !0), t && H(s, t);
  }
  s.t &= ~1 /* isTmpDisconnected */;
}, V = (e, t, a, s, r, i) => {
  let l = e["s-cr"] && e["s-cr"].parentNode || e, n;
  for (l.shadowRoot && R(l.tagName) === q && (l = l.shadowRoot); r <= i; ++r) s[r] && (n = I(null, a, r, e)) && (s[r].g = n, 
  l.insertBefore(n, Y(t)));
}, J = (e, t, a, s) => {
  for (;t <= a; ++t) C(e[t]) && (s = e[t].g, re(e[t], !0), 
  // we're removing this element
  // so it's possible we need to show slot fallback content now
  G = !0, s["s-ol"] ? 
  // remove the original location comment
  s["s-ol"].remove() : 
  // it's possible that child nodes of the node
  // that's being removed are slot nodes
  H(s, !0), 
  // remove the vnode's element from the dom
  s.remove());
}, Q = (e, t, a, s) => {
  let r = 0, i = 0, l = 0, n = 0, o = t.length - 1, c = t[0], d = t[o], u = s.length - 1, h = s[0], m = s[u], g, f;
  for (;r <= o && i <= u; ) if (null == c) 
  // Vnode might have been moved left
  c = t[++r]; else if (null == d) d = t[--o]; else if (null == h) h = s[++i]; else if (null == m) m = s[--u]; else if (X(c, h)) ee(c, h), 
  c = t[++r], h = s[++i]; else if (X(d, m)) ee(d, m), d = t[--o], m = s[--u]; else if (X(c, m)) 
  // Vnode moved right
  "slot" !== c.u && "slot" !== m.u || H(c.g.parentNode, !1), ee(c, m), e.insertBefore(c.g, d.g.nextSibling), 
  c = t[++r], m = s[--u]; else if (X(d, h)) 
  // Vnode moved left
  "slot" !== c.u && "slot" !== m.u || H(d.g.parentNode, !1), ee(d, h), e.insertBefore(d.g, c.g), 
  d = t[--o], h = s[++i]; else {
    for (
    // createKeyToOldIdx
    l = -1, n = r; n <= o; ++n) if (t[n] && C(t[n].k) && t[n].k === h.k) {
      l = n;
      break;
    }
    l >= 0 ? ((f = t[l]).u !== h.u ? g = I(t && t[i], a, l, e) : (ee(f, h), t[l] = void 0, 
    g = f.g), h = s[++i]) : (
    // new element
    g = I(t && t[i], a, i, e), h = s[++i]), g && Z(c.g).insertBefore(g, Y(c.g));
  }
  r > o ? V(e, null == s[u + 1] ? null : s[u + 1].g, a, s, i, u) : i > u && J(t, r, o);
}, X = (e, t) => 
// compare if two vnode to see if they're "technically" the same
// need to have the same element tag, and same key to be the same
e.u === t.u && ("slot" === e.u ? e.v === t.v : e.k === t.k), Y = e => e && e["s-ol"] ? e["s-ol"] : e, Z = e => (e["s-ol"] ? e["s-ol"] : e).parentNode, ee = (e, t) => {
  const a = t.g = e.g, s = e.h, r = t.h;
  let i;
  C(t.o) ? (i = a["s-cr"]) ? 
  // this element has slotted content
  i.parentNode.textContent = t.o : e.o !== t.o && (
  // update the text content for the text only vnode
  // and also only if the text is different than before
  a.textContent = t.o) : ("slot" === t.u || 
  // either this is the first render of an element OR it's an update
  // AND we already know it's possible it could have changed
  // this updates the element's css classes, attrs, props, listeners, etc.
  P(e, t, N), C(s) && C(r) ? 
  // looks like there's child vnodes for both the old and new vnodes
  Q(a, s, t, r) : C(r) ? (
  // no old child vnodes, but there are new child vnodes to add
  C(e.o) && (
  // the old vnode was text, so be sure to clear it out
  a.textContent = ""), 
  // add the new vnode children
  V(a, null, t, r, 0, r.length - 1)) : C(s) && 
  // no new child vnodes, but there are old child vnodes to remove
  J(s, 0, s.length - 1));
}, te = (e, t, a, s, r, i, l, n) => {
  for (s = 0, r = (a = e.childNodes).length; s < r; s++) if (1 /* ElementNode */ === (t = a[s]).nodeType) {
    if (t["s-sr"]) for (
    // this is a slot fallback node
    // get the slot name for this slot reference node
    l = t["s-sn"], 
    // by default always show a fallback slot node
    // then hide it if there are other slots in the light dom
    t.hidden = !1, i = 0; i < r; i++) if (a[i]["s-hn"] !== t["s-hn"]) if (
    // this sibling node is from a different component
    n = a[i].nodeType, "" !== l) {
      // this is a named fallback slot node
      if (1 /* ElementNode */ === n && l === a[i].getAttribute("slot")) {
        t.hidden = !0;
        break;
      }
    } else 
    // this is a default fallback slot node
    // any element or text node (with content)
    // should hide the default fallback slot node
    if (1 /* ElementNode */ === n || 3 /* TextNode */ === n && "" !== a[i].textContent.trim()) {
      t.hidden = !0;
      break;
    }
    // keep drilling down
        te(t);
  }
}, ae = [], se = e => {
  // tslint:disable-next-line: prefer-const
  let t = e.childNodes, a = t.length, s = 0, r = 0, i = 0, l, n, o, c;
  for (a = t.length; s < a; s++) {
    if ((l = t[s])["s-sr"] && (n = l["s-cr"])) for (
    // first got the content reference comment node
    // then we got it's parent, which is where all the host content is in now
    c = l["s-sn"], r = (o = n.parentNode.childNodes).length - 1; r >= 0; r--) (n = o[r])["s-cn"] || n["s-nr"] || n["s-hn"] === l["s-hn"] || ((3 /* TextNode */ === (
    // let's do some relocating to its new home
    // but never relocate a content reference node
    // that is suppose to always represent the original content location
    i = n.nodeType) || 8 /* CommentNode */ === i) && "" === c || 1 /* ElementNode */ === i && null === n.getAttribute("slot") && "" === c || 1 /* ElementNode */ === i && n.getAttribute("slot") === c) && (
    // it's possible we've already decided to relocate this node
    ae.some(e => e.nodeToRelocate === n) || (
    // made some changes to slots
    // let's make sure we also double check
    // fallbacks are correctly hidden or shown
    G = !0, n["s-sn"] = c, 
    // add to our list of nodes to relocate
    ae.push({
      slotRefNode: l,
      nodeToRelocate: n
    })));
    1 /* ElementNode */ === l.nodeType && se(l);
  }
}, re = (e, t) => {
  e && (e.p && e.p.ref && e.p.ref(t ? null : e.g), e.h && e.h.forEach(e => {
    re(e, t);
  }));
}, ie = e => e && e.u === O, le = (e, t, i, l) => {
  const n = t.$ || {
    t: 0
  };
  if (q = R(e.tagName), ie(l) ? l.u = null : l = F(null, null, l), i.S && (l.p = l.p || {}, 
  i.S.forEach(([t, a]) => l.p[a] = e[t])), l.t |= 4 /* isHost */ , t.$ = l, l.g = n.g = e.shadowRoot || e, 
  E = e["s-cr"], z = !!(r && 1 /* shadowDomEncapsulation */ & i.t), U = e["s-sc"], 
  // always reset
  K = G = !1, 
  // synchronous patch
  ee(n, l), K) {
    se(l.g);
    for (let e = 0; e < ae.length; e++) {
      const t = ae[e];
      if (!t.nodeToRelocate["s-ol"]) {
        // add a reference node marking this node's original location
        // keep a reference to this node for later lookups
        const e = a.createTextNode("");
        e["s-nr"] = t.nodeToRelocate, t.nodeToRelocate.parentNode.insertBefore(t.nodeToRelocate["s-ol"] = e, t.nodeToRelocate);
      }
    }
    // while we're moving nodes around existing nodes, temporarily disable
    // the disconnectCallback from working
        s.t |= 1 /* isTmpDisconnected */;
    for (let e = 0; e < ae.length; e++) {
      const t = ae[e], a = t.slotRefNode.parentNode;
      // by default we're just going to insert it directly
      // after the slot reference node
            let s = t.slotRefNode.nextSibling, r = t.nodeToRelocate["s-ol"];
      for (;r = r.previousSibling; ) {
        let e = r["s-nr"];
        if (e && e && e["s-sn"] === t.nodeToRelocate["s-sn"] && a === e.parentNode && (e = e.nextSibling) && e && !e["s-nr"]) {
          s = e;
          break;
        }
      }
      (!s && a !== t.nodeToRelocate.parentNode || t.nodeToRelocate.nextSibling !== s) && t.nodeToRelocate !== s && 
      // add it back to the dom but in its new home
      a.insertBefore(t.nodeToRelocate, s);
    }
    // done moving nodes around
    // allow the disconnect callback to work again
        s.t &= ~1 /* isTmpDisconnected */;
  }
  G && te(l.g), 
  // always reset
  ae.length = 0;
}, ne = async (e, t, a, s) => {
  t.B |= 16 /* isQueuedForUpdate */;
  const r = t.M;
  try {
    s ? r.componentWillLoad && await r.componentWillLoad() : r.componentWillUpdate && await r.componentWillUpdate();
  } catch (e) {
    n(e);
  }
  // there is no ancestorc omponent or the ancestor component
  // has already fired off its lifecycle update then
  // fire off the initial update
    y(() => oe(e, t, a, s, r));
}, oe = (e, t, a, s, r) => {
  t.B &= ~16 /* isQueuedForUpdate */ , e["s-lr"] = !1, s && 
  // DOM WRITE!
  B(e, a, t.C), 
  // tell the platform we're actively rendering
  // if a value is changed within a render() then
  // this tells the platform not to queue the change
  t.B |= 4 /* isActiveRender */;
  try {
    // looks like we've got child nodes to render into this host element
    // or we need to update the css class/attrs on the host element
    // DOM WRITE!
    le(e, t, a, r.render());
  } catch (e) {
    n(e);
  }
  t.B &= ~4 /* isActiveRender */ , Fe && Fe.updateHost(e), e["s-lr"] = !0, t.B |= 2 /* hasRendered */ , 
  void 0 !== e["s-rc"] && (
  // ok, so turns out there are some child host elements
  // waiting on this parent element to load
  // let's fire off all update callbacks waiting
  e["s-rc"].forEach(e => e()), e["s-rc"] = void 0), ce(e, t);
}, ce = (e, t, r) => {
  if (!e["s-al"]) {
    const i = t.M, l = t.R;
    512 /* hasLoadedComponent */ & t.B || (t.B |= 512 /* hasLoadedComponent */ , 
    // DOM WRITE!
    // add the css class that this element has officially hydrated
    e.classList.add(w), i.componentDidLoad && i.componentDidLoad(), t.j(e), l || (
    // on appload
    // we have finish the first big initial render
    a.documentElement.classList.add(w), setTimeout(() => s.t |= 2 /* queueAsync */ , 999))), 
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
    0 === r.size && (l["s-al"] = void 0, l["s-init"]())), t.R = void 0);
  }
}, de = (e, t) => xe(e).D.get(t), ue = (e, t, a, s) => {
  // check our new property value against our internal value
  const r = xe(e), i = r.F, l = r.D.get(t), o = r.B;
  if (!((a = k(a, s.O[t][0])) === l || 8 /* isConstructingInstance */ & o && void 0 !== l) && (
  // gadzooks! the property's value has changed!!
  // set our new value!
  r.D.set(t, a), r.M)) {
    // get an array of method names of watch functions to call
    if (s.T && 1 /* hasConnected */ == (o & (1 /* hasConnected */ | 8 /* isConstructingInstance */))) {
      const e = s.T[t];
      e && 
      // this instance is watching for when this property changed
      e.forEach(e => {
        try {
          // fire off each of the watch methods that are watching this property
          r.M[e].call(r.M, a, l, t);
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
    ne(i, r, s, !1);
  }
}, he = (e, t, a, s) => {
  if (t.O) {
    e.watchers && (t.T = e.watchers);
    // It's better to have a const than two Object.entries()
        const r = Object.entries(t.O);
    if (r.forEach(([r, [i]]) => {
      31 & i || s && 32 /* State */ & i ? 
      // proxyComponent - prop
      Object.defineProperty(e.prototype, r, {
        get() {
          // proxyComponent, get value
          return de(this, r);
        },
        set(e) {
          // proxyComponent, set value
          ue(this, r, e, t);
        },
        configurable: !0,
        enumerable: !0
      }) : a && 64 /* Method */ & i && 
      // proxyComponent - method
      Object.defineProperty(e.prototype, r, {
        value() {
          const e = xe(this), t = arguments;
          return e._.then(() => e.M[r].apply(e.M, t));
        }
      });
    }), a) {
      const a = new Map();
      e.prototype.attributeChangedCallback = function(e, t, s) {
        const r = a.get(e);
        this[r] = (null !== s || "boolean" != typeof this[r]) && s;
      }, 
      // create an array of attributes to observe
      // and also create a map of html attribute name to js property name
      e.observedAttributes = r.filter(([e, t]) => 15 /* HasAttribute */ & t[0]).map(([e, s]) => {
        const r = s[1] || e;
        return a.set(r, e), 512 /* ReflectAttr */ & s[0] && t.S.push([ e, r ]), r;
      });
    }
  }
  return e;
}, me = (e, t, a) => {
  const s = a.map(([a, s, r]) => {
    const i = fe(e, a), l = ge(t, r), n = be(a);
    return i.addEventListener(s, l, n), () => i.removeEventListener(s, l, n);
  });
  return () => s.forEach(e => e());
}, ge = (e, t) => a => e.M ? e.M[t](a) : e._.then(() => e.M[t](a)).catch(n), fe = (e, a) => 8 /* TargetWindow */ & a ? t : e, be = e => i ? {
  passive: 0 != (1 /* Passive */ & e),
  capture: 0 != (2 /* Capture */ & e)
} : 0 != (2 /* Capture */ & e), ye = async (e, t, a, s, r) => {
  // initializeComponent
  if (!(256 /* hasInitializedComponent */ & t.B)) {
    // we haven't initialized this element yet
    t.B |= 256 /* hasInitializedComponent */;
    // lazy loaded components
    try {
      // request the component's implementation to be
      // wired up with the host element
      (r = await je(a, t, s)).isProxied || (a.T = r.watchers, he(r, a, 0, 1), r.isProxied = !0), 
      t.B |= 8 /* isConstructingInstance */ , 
      // construct the lazy-loaded component implementation
      // passing the hostRef is very important during
      // construction in order to directly wire together the
      // host element and the lazy-loaded instance
      new r(t), t.B &= ~8 /* isConstructingInstance */;
    } catch (e) {
      n(e);
    }
    if (!r.isStyleRegistered && r.style) {
      // this component has styles but we haven't registered them yet
      let e = r.style, s = x(a.l, t.C);
      8 /* needsShadowDomShim */ & a.t && (e = await import("./chunk-7375d451.js").then(t => t.scopeCss(e, s, !1))), 
      $(s, e), r.isStyleRegistered = !0;
    }
  }
  // we've successfully created a lazy instance
    t.R && !t.R["s-lr"] ? 
  // this is the intial load and this component it has an ancestor component
  // but the ancestor component has NOT fired its will update lifecycle yet
  // so let's just cool our jets and wait for the ancestor to continue first
  t.R["s-rc"].push(() => 
  // this will get fired off when the ancestor component
  // finally gets around to rendering its lazy self
  // fire off the initial update
  ye(e, t, a)) : ne(e, t, a, !0);
}, pe = (e, t) => {
  if (0 == (1 /* isTmpDisconnected */ & s.t)) {
    // connectedCallback
    const a = xe(e);
    if (t.A && (
    // initialize our event listeners on the host element
    // we do this now so that we can listening to events that may
    // have fired even before the instance is ready
    a.i = me(e, a, t.A)), !(1 /* hasConnected */ & a.B)) {
      let s;
      // first time this component has connected
      a.B |= 1 /* hasConnected */ , s || 
      // initUpdate
      // if the slot polyfill is required we'll need to put some nodes
      // in here to act as original content anchors as we move nodes around
      // host element has been connected to the DOM
      (4 & t.t || 8 /* needsShadowDomShim */ & t.t) && ke(e);
      {
        // find the first ancestor component (if there is one) and register
        // this component as one of the actively loading child components for its ancestor
        let t = e;
        for (;t = t.parentNode || t.host; ) 
        // climb up the ancestors looking for the first
        // component that hasn't finished its lifecycle update yet
        if (t["s-init"] && !t["s-lr"]) {
          // we found this components first ancestor component
          // keep a reference to this component's ancestor component
          a.R = t, 
          // ensure there is an array to contain a reference to each of the child components
          // and set this component as one of the ancestor's child components it should wait on
          (t["s-al"] = t["s-al"] || new Set()).add(e);
          break;
        }
      }
      // Lazy properties
      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            t.O && Object.entries(t.O).forEach(([t, [a]]) => {
        if (31 /* Prop */ & a && e.hasOwnProperty(t)) {
          const a = e[t];
          delete e[t], e[t] = a;
        }
      }), ye(e, a, t);
    }
  }
}, ke = (e, t) => {
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  let s;
  (t = e["s-cr"] = a.createComment(s = ""))["s-cn"] = !0, e.insertBefore(t, e.firstChild);
}, we = (e, i = {}) => {
  const l = [], n = i.exclude || [], o = a.head, c = t.customElements, d = /* */ o.querySelector("meta[charset]"), u = /* */ a.createElement("style");
  i.resourcesUrl && (s.s = new URL(i.resourcesUrl, a.baseURI).href), e.forEach(e => e[1].forEach(t => {
    const a = {
      t: t[0],
      l: t[1],
      O: t[2],
      A: t[3],
      S: [],
      T: {}
    };
    !r && 1 /* shadowDomEncapsulation */ & a.t && (a.t |= 8 /* needsShadowDomShim */);
    const s = a.l, i = class extends HTMLElement {
      // StencilLazyHost
      constructor(e) {
        // @ts-ignore
        super(e), this["s-lr"] = !1, this["s-rc"] = [], Ce(e = this), 1 /* shadowDomEncapsulation */ === a.t && 
        // this component is using shadow dom
        // and this browser supports shadow dom
        // add the read-only property "shadowRoot" to the host element
        e.attachShadow({
          mode: "open"
        }), 8 /* needsShadowDomShim */ & a.t && (e.shadowRoot = e);
      }
      connectedCallback() {
        pe(this, a);
      }
      disconnectedCallback() {
        p(this);
      }
      "s-init"() {
        const e = xe(this);
        e.M && ce(this, e);
      }
      "s-hmr"(e) {}
      forceUpdate() {
        {
          const e = xe(this);
          ne(this, e, a, !1);
        }
      }
      componentOnReady() {
        return xe(this)._;
      }
    };
    a.L = e[0], n.includes(s) || c.get(s) || (l.push(s), c.define(s, he(i, a, 1, 0)));
  })), 
  // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
  u.innerHTML = l + "{visibility:hidden}.hydrated{visibility:inherit}", u.setAttribute("data-styles", ""), 
  o.insertBefore(u, d ? d.nextSibling : o.firstChild);
}, ve = (e, t, a) => {
  const s = Se(e);
  return {
    emit: e => s.dispatchEvent(new CustomEvent(t, {
      bubbles: !!(4 /* Bubbles */ & a),
      composed: !!(2 /* Composed */ & a),
      cancelable: !!(1 /* Cancellable */ & a),
      detail: e
    }))
  };
}, $e = e => new URL(e, s.s).pathname, Se = e => xe(e).F, Be = new WeakMap(), xe = e => Be.get(e), Me = (e, t) => Be.set(t.M = e, t), Ce = e => {
  // TODO: it's so ugly, but minifies really well
  {
    const t = {
      B: 0,
      F: e
    };
    return t._ = new Promise(e => t.j = e), t.D = new Map(), Be.set(e, t);
  }
}, Re = (e, t) => t in e, je = (e, t, a) => {
  // loadModuleImport
  const s = e.L;
  return import(
  /* webpackInclude: /\.entry\.js$/ */
  /* webpackExclude: /\.(system|cjs)\.entry\.js$/ */
  /* webpackMode: "lazy" */
  `./${s}.entry.js${""}`).then(t => t[e.l.replace(/-/g, "_")], n);
}, De = new Map(), Fe = t.__stencil_cssshim, Oe = async () => {
  const t = Array.from(a.querySelectorAll("script")).find(t => t.src.includes(e)), s = new URL(".", new URL(t ? t.src : "", a.baseURI));
  return Te(s.href), window.customElements || 
  // @ts-ignore
  await import("./chunk-a2e4723b.js"), s.pathname;
}, Te = s => {
  const r = j(e);
  try {
    t[r] = new Function("w", "return import(w);");
  } catch (e) {
    const i = new Map();
    t[r] = (e => {
      const l = new URL(e, s).href;
      let n = i.get(l);
      if (!n) {
        const e = a.createElement("script");
        e.type = "module", e.src = URL.createObjectURL(new Blob([ `import * as m from '${l}'; window.${r}.m = m;` ], {
          type: "application/javascript"
        })), n = new Promise(a => {
          e.onload = (() => {
            a(t[r].m), e.remove();
          });
        }), i.set(l, n), a.head.appendChild(e);
      }
      return n;
    });
  }
}, _e = (e, t) => {
  we([ [ "ms-assassin", [ [ 1, "ms-assassin", {
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
  } ] ] ], [ "ms-archer", [ [ 1, "ms-archer", {
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
  } ] ] ], [ "ms-priest", [ [ 1, "ms-priest", {
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
  } ] ] ], [ "ms-berserker", [ [ 1, "ms-berserker", {
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
  } ] ] ], [ "ms-heavy-gunner", [ [ 1, "ms-heavy-gunner", {
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
  } ] ] ], [ "ms-knight", [ [ 1, "ms-knight", {
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
  } ] ] ], [ "ms-runeblade", [ [ 1, "ms-runeblade", {
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
  } ] ] ], [ "ms-soul-binder", [ [ 1, "ms-soul-binder", {
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
  } ] ] ], [ "ms-striker", [ [ 1, "ms-striker", {
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
  } ] ] ], [ "ms-thief", [ [ 1, "ms-thief", {
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
  } ] ] ], [ "ms-wizard", [ [ 1, "ms-wizard", {
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
  } ] ] ], [ "ms-extra-counter_2", [ [ 1, "ms-extra-counter", {
    editor: [ 1 ],
    _editor: [ 32 ],
    _pointsLeft: [ 32 ]
  } ], [ 1, "ms-extra-outlet", {
    editor: [ 1 ],
    _editor: [ 32 ],
    _skills: [ 32 ],
    _tagName: [ 32 ]
  } ] ] ], [ "ms-chart_5", [ [ 1, "ms-chart", {
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
  } ] ] ] ], t);
};

export { Oe as a, _e as b, F as c, Me as d, ve as e, $e as f, O as g, Se as h };
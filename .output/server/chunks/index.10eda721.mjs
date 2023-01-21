import { defineComponent, onMounted, onUnmounted, ref, unref, provide, inject, computed, watch, h, Fragment, useSSRContext, withCtx, createTextVNode, createVNode, cloneVNode, watchEffect, isRef, openBlock, createBlock, createElementBlock, createElementVNode, mergeProps } from 'vue';
import { u as useHead } from './composables.853a86f6.mjs';
import { a as useNuxtApp, u as useState, _ as _export_sfc } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import crypto from 'crypto';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ws';

const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

const native = {
  randomUUID: crypto.randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
function useTheme() {
  const enabled = useState("theme", () => null);
  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem("theme", enabled.value ? "dark" : "light");
    setTheme();
  };
  function setTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || !theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      enabled.value = true;
    } else {
      document.documentElement.removeAttribute("data-theme");
      enabled.value = false;
    }
  }
  return {
    enabled,
    toggleTheme,
    setTheme
  };
}
function u(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var R = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(R || {}), O = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(O || {});
function P({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i }) {
  var a2;
  let n2 = k(o2, e2), s = Object.assign(i, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return p$2(s);
  if (t2 & 1) {
    let l = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u(l, { [0]() {
      return null;
    }, [1]() {
      return p$2({ ...i, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return p$2(s);
}
function p$2({ props: r2, attrs: t2, slots: e2, slot: o2, name: i }) {
  var y;
  let { as: n2, ...s } = w(r2, ["unmount", "static"]), a2 = (y = e2.default) == null ? void 0 : y.call(e2, o2), l = {};
  if (o2) {
    let d2 = false, u2 = [];
    for (let [f2, c] of Object.entries(o2))
      typeof c == "boolean" && (d2 = true), c === true && u2.push(f2);
    d2 && (l["data-headlessui-state"] = u2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = g(a2 != null ? a2 : []), Object.keys(s).length > 0 || Object.keys(t2).length > 0) {
      let [d2, ...u2] = a2 != null ? a2 : [];
      if (!x(d2) || u2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t2)).sort((f2, c) => f2.localeCompare(c)).map((f2) => `  - ${f2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f2) => `  - ${f2}`).join(`
`)].join(`
`));
      return cloneVNode(d2, Object.assign({}, s, l));
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, s, l), { default: () => a2 });
}
function g(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? g(t2.children) : [t2]);
}
function k(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i of r2)
    for (let n2 in i)
      n2.startsWith("on") && typeof i[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i[n2])) : t2[n2] = i[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i) => [i, void 0])));
  for (let i in e2)
    Object.assign(t2, { [i](n2, ...s) {
      let a2 = e2[i];
      for (let l of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        l(n2, ...s);
      }
    } });
  return t2;
}
function V(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function w(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function x(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
let e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function o(n2) {
  var l;
  return n2 == null || n2.value == null ? null : (l = n2.value.$el) != null ? l : n2.value;
}
function r(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function b$1(t2, e2) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var o$12;
    n2.value || !o(e2) || o(e2) instanceof HTMLButtonElement && !((o$12 = o(e2)) != null && o$12.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var a$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return P({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function p$1(n2) {
  var t2;
  let r2 = (t2 = n2 == null ? void 0 : n2.form) != null ? t2 : n2.closest("form");
  if (!!r2) {
    for (let i of r2.elements)
      if (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image") {
        i.click();
        return;
      }
  }
}
function d$1(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
let p = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M({ slot: t2 = ref({}), name: i = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s(n2) {
    return e2.value.push(n2), () => {
      let r2 = e2.value.indexOf(n2);
      r2 !== -1 && e2.value.splice(r2, 1);
    };
  }
  return provide(p, { register: s, slot: t2, name: i, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t2, { attrs: i, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s = "Description", slot: n2 = ref({}), props: r2 = {} } = e2, { id: d2, ...l } = t2, c = { ...Object.entries(r2).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: d2 };
    return P({ ourProps: c, theirProps: l, slot: n2.value, attrs: i, slots: o2, name: s });
  };
} });
let a = Symbol("LabelContext");
function d() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
  }
  return t2;
}
function K({ slot: t2 = {}, name: n2 = "Label", props: i = {} } = {}) {
  let e2 = ref([]);
  function l(r2) {
    return e2.value.push(r2), () => {
      let o2 = e2.value.indexOf(r2);
      o2 !== -1 && e2.value.splice(o2, 1);
    };
  }
  return provide(a, { register: l, slot: t2, name: n2, props: i }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t2, { slots: n2, attrs: i }) {
  let e2 = d();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: l = "Label", slot: r2 = {}, props: o2 = {} } = e2, { id: p2, passive: c, ...s } = t2, u2 = { ...Object.entries(o2).reduce((f2, [b2, g2]) => Object.assign(f2, { [b2]: unref(g2) }), {}), id: p2 };
    return c && (delete u2.onClick, delete s.onClick), P({ ourProps: u2, theirProps: s, slot: r2, attrs: i, slots: n2, name: l });
  };
} });
let S = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: c, attrs: o2 }) {
  let r2 = ref(null), p2 = K({ name: "SwitchLabel", props: { onClick() {
    !r2.value || (r2.value.click(), r2.value.focus({ preventScroll: true }));
  } } }), t2 = M({ name: "SwitchDescription" });
  return provide(S, { switchRef: r2, labelledby: p2, describedby: t2 }), () => P({ theirProps: l, ourProps: {}, slot: {}, slots: c, attrs: o2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l, { emit: c, attrs: o$2, slots: r2, expose: p2 }) {
  let t2 = inject(S, null), [i, s] = d$1(computed(() => l.modelValue), (e2) => c("update:modelValue", e2), computed(() => l.defaultChecked));
  function f$1() {
    s(!i.value);
  }
  let w$1 = ref(null), u2 = t2 === null ? w$1 : t2.switchRef, k2 = b$1(computed(() => ({ as: l.as, type: o$2.type })), u2);
  p2({ el: u2, $el: u2 });
  function C(e2) {
    e2.preventDefault(), f$1();
  }
  function g2(e2) {
    e2.key === o$1.Space ? (e2.preventDefault(), f$1()) : e2.key === o$1.Enter && p$1(e2.currentTarget);
  }
  function R2(e2) {
    e2.preventDefault();
  }
  let a2 = computed(() => {
    var e2, n2;
    return (n2 = (e2 = o(u2)) == null ? void 0 : e2.closest) == null ? void 0 : n2.call(e2, "form");
  });
  return onMounted(() => {
    watch([a2], () => {
      if (!a2.value || l.defaultChecked === void 0)
        return;
      function e2() {
        s(l.defaultChecked);
      }
      return a2.value.addEventListener("reset", e2), () => {
        var n2;
        (n2 = a2.value) == null || n2.removeEventListener("reset", e2);
      };
    }, { immediate: true });
  }), () => {
    let { id: e2, name: n2, value: D, ...E2 } = l, K2 = { checked: i.value }, L = { id: e2, ref: u2, role: "switch", type: k2.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": t2 == null ? void 0 : t2.labelledby.value, "aria-describedby": t2 == null ? void 0 : t2.describedby.value, onClick: C, onKeyup: g2, onKeypress: R2 };
    return h(Fragment, [n2 != null && i.value != null ? h(f, V({ features: a$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i.value, name: n2, value: D })) : null, P({ ourProps: L, theirProps: { ...o$2, ...w(E2, ["modelValue", "defaultChecked"]) }, slot: K2, attrs: o$2, slots: r2, name: "Switch" })]);
  };
} });
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createElementVNode("path", { d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" })
  ]);
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModeSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [{ children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }` }]
    });
    const { setTheme, enabled, toggleTheme } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(enabled) !== null) {
        _push(ssrRenderComponent(unref(ue), {
          modelValue: unref(enabled),
          "onUpdate:modelValue": ($event) => isRef(enabled) ? enabled.value = $event : null,
          onClick: unref(toggleTheme),
          class: [unref(enabled) ? "bg-black" : "bg-orange-50", "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>Mode setting</span><span aria-hidden="true" class="${ssrRenderClass([unref(enabled) ? "translate-x-9" : "translate-x-0", "pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}>`);
              if (unref(enabled)) {
                _push2(ssrRenderComponent(unref(render$1), { class: "h-[34px] w-[34px] fill-gray-300" }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(render), { class: "h-[34px] w-[34px] fill-yellow-500" }, null, _parent2, _scopeId));
              }
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, "Mode setting"),
                createVNode("span", {
                  "aria-hidden": "true",
                  class: [unref(enabled) ? "translate-x-9" : "translate-x-0", "pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out"]
                }, [
                  unref(enabled) ? (openBlock(), createBlock(unref(render$1), {
                    key: 0,
                    class: "h-[34px] w-[34px] fill-gray-300"
                  })) : (openBlock(), createBlock(unref(render), {
                    key: 1,
                    class: "h-[34px] w-[34px] fill-yellow-500"
                  }))
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModeSwitch.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ModeSwitch = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between bg-gray-200 dark:bg-gray-900 h-24 w-full overflow-hidden px-5" }, _attrs))}><div></div>`);
  _push(ssrRenderComponent(_component_ModeSwitch, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const message = ref("");
    useNuxtApp();
    v4();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Header = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nuxt 3 Websocket`);
                } else {
                  return [
                    createTextVNode("Nuxt 3 Websocket")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Nuxt 3 Websocket")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="h-screen w-full grid place-items-center bg-gray-200 dark:bg-black"><span class="flex flex-col items-centers space-y-4"><span class="text-slate-900 dark:text-gray-100">${ssrInterpolate(unref(message))}</span><button class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random number</button></span></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.10eda721.mjs.map

function e(e,t,n,o,i,s,r,a,d,l){"boolean"!=typeof r&&(d=a,a=r,r=!1);var c,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=c):t&&(c=r?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),c)if(f.functional){var u=f.render;f.render=function(e,t){return c.call(t),u(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return n}var t=e({render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vue-component-test"},[this._v("\n  Vue Component Test - "+this._s(this.param)+"\n")])},staticRenderFns:[]},void 0,{props:{param:{type:String,default:""}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function n(e){n.installed||(n.installed=!0,e.component("VueComponentTest",t))}var o={install:n},i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(o),t.install=n;export default t;
//# sourceMappingURL=vue-component-test.esm.js.map
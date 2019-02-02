// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import route from "./route";

// 전역 컴포넌트 등록
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { store } from "./store/index";

const requireComponent = require.context("./components/common", false, /.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: route,
  store,
  components: { App },
  render: h => h(App)
});

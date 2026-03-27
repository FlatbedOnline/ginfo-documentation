export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/disponibilidade.html", { loader: () => import(/* webpackChunkName: "disponibilidade.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/disponibilidade.html.js"), meta: {"title":"Regra Disponibilidade"} }],
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"Perguntas frequentes"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Portal de suporte Ginfo"} }],
  ["/pneus.html", { loader: () => import(/* webpackChunkName: "pneus.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/pneus.html.js"), meta: {"title":"Pneus"} }],
  ["/stresstest.html", { loader: () => import(/* webpackChunkName: "stresstest.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/stresstest.html.js"), meta: {"title":"Stress test"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

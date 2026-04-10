export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/aplicativo-checklist.html", { loader: () => import(/* webpackChunkName: "aplicativo-checklist.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/aplicativo-checklist.html.js"), meta: {"title":"Aplicativo Checklist"} }],
  ["/blitz-de-trajeto.html", { loader: () => import(/* webpackChunkName: "blitz-de-trajeto.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/blitz-de-trajeto.html.js"), meta: {"title":"Blitz de Trajeto"} }],
  ["/disponibilidade.html", { loader: () => import(/* webpackChunkName: "disponibilidade.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/disponibilidade.html.js"), meta: {"title":"Regra Disponibilidade"} }],
  ["/dto.html", { loader: () => import(/* webpackChunkName: "dto.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/dto.html.js"), meta: {"title":"DTO"} }],
  ["/estoque.html", { loader: () => import(/* webpackChunkName: "estoque.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/estoque.html.js"), meta: {"title":"Estoque"} }],
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"Perguntas frequentes"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Portal de suporte Ginfo"} }],
  ["/pneus.html", { loader: () => import(/* webpackChunkName: "pneus.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/pneus.html.js"), meta: {"title":"Pneus"} }],
  ["/power-bi.html", { loader: () => import(/* webpackChunkName: "power-bi.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/power-bi.html.js"), meta: {"title":"Power BI"} }],
  ["/relatos.html", { loader: () => import(/* webpackChunkName: "relatos.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/relatos.html.js"), meta: {"title":"Relatos"} }],
  ["/stresstest.html", { loader: () => import(/* webpackChunkName: "stresstest.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/stresstest.html.js"), meta: {"title":"Stress test"} }],
  ["/terminal-de-oficina.html", { loader: () => import(/* webpackChunkName: "terminal-de-oficina.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/terminal-de-oficina.html.js"), meta: {"title":"Terminal de Oficina"} }],
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

export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"Perguntas frequentes:"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Portal de suporte Ginfo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/2026-03-18.html", { loader: () => import(/* webpackChunkName: "2026-03-18.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/2026-03-18.html.js"), meta: {"title":""} }],
  ["/pneus.html", { loader: () => import(/* webpackChunkName: "pneus.html" */"/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/pneus.html.js"), meta: {"title":"Pneus"} }],
]);

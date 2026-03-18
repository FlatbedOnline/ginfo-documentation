export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"C:/Documentação GINFO/ginfo-documentation/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"Perguntas frequentes:"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Documentação GINFO/ginfo-documentation/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Portal de suporte Ginfo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Documentação GINFO/ginfo-documentation/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

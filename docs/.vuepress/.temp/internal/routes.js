export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"Perguntas frequentes:"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Portal de suporte Ginfo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

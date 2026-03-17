export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/second_page.html", { loader: () => import(/* webpackChunkName: "second_page.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/second_page.html.js"), meta: {"title":"mero teste de routing."} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Pagina central da sessão"} }],
  ["/guide/config.html", { loader: () => import(/* webpackChunkName: "guide_config.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/guide/config.html.js"), meta: {"title":"Segundo teste de routing."} }],
  ["/guide/install.html", { loader: () => import(/* webpackChunkName: "guide_install.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/guide/install.html.js"), meta: {"title":"Primeiro teste"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

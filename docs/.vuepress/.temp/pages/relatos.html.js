import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/relatos.html.vue"
const data = JSON.parse("{\"path\":\"/relatos.html\",\"title\":\"Relatos\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1775758583000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1},{\"name\":\"ginfoprojeto-arch\",\"username\":\"ginfoprojeto-arch\",\"email\":\"ginfo.projeto@gmail.com\",\"commits\":1,\"url\":\"https://github.com/ginfoprojeto-arch\"}],\"changelog\":[{\"hash\":\"e5811158ce5150cb378f4e5cae8b2140e1621fb6\",\"time\":1775758583000,\"email\":\"ginfo.projeto@gmail.com\",\"author\":\"ginfoprojeto-arch\",\"message\":\"vault backup: 2026-04-09 15:16:23\"},{\"hash\":\"9e40ed2fac3058c58a4f8df9e25c6971ea626141\",\"time\":1775563876000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"criação de novas sessões\"}]},\"filePathRelative\":\"relatos.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

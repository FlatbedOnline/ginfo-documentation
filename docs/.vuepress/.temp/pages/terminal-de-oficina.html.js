import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/terminal-de-oficina.html.vue"
const data = JSON.parse("{\"path\":\"/terminal-de-oficina.html\",\"title\":\"Terminal de Oficina\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1775563876000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"9e40ed2fac3058c58a4f8df9e25c6971ea626141\",\"time\":1775563876000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"criação de novas sessões\"}]},\"filePathRelative\":\"terminal-de-oficina.md\"}")
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

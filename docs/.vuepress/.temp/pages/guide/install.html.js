import comp from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/guide/install.html.vue"
const data = JSON.parse("{\"path\":\"/guide/install.html\",\"title\":\"Primeiro teste\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/install.md\"}")
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

import comp from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/second_page.html.vue"
const data = JSON.parse("{\"path\":\"/second_page.html\",\"title\":\"mero teste de routing.\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"second_page.md\"}")
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

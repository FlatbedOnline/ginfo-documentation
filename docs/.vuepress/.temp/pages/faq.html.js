import comp from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/docs/.vuepress/.temp/pages/faq.html.vue"
const data = JSON.parse("{\"path\":\"/faq.html\",\"title\":\"Perguntas frequentes:\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1773754478000,\"contributors\":[{\"name\":\"Eduardo Basquiat\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"cbd54338f0a08d601b778d0612181c6212236476\",\"time\":1773754478000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Eduardo Basquiat\",\"message\":\"new changes\"}]},\"filePathRelative\":\"faq.md\"}")
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

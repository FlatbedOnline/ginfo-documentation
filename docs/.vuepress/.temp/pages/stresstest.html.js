import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/stresstest.html.vue"
const data = JSON.parse("{\"path\":\"/stresstest.html\",\"title\":\"Stress test\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1773921688000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"c91b5e6d23eee61752198f2c06851b0c7e025bf1\",\"time\":1773921688000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"acréscimo da sessão stress test\"}]},\"filePathRelative\":\"stresstest.md\"}")
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

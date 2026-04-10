import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/stresstest.html.vue"
const data = JSON.parse("{\"path\":\"/stresstest.html\",\"title\":\"Stress test\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1775759522000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"2c4412da0298e57bb4f0865bcd91a014229ac0f0\",\"time\":1775759522000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"stresstest atualizado\"},{\"hash\":\"fcc11512c9ab62aee1039750d9143422ce0f0a06\",\"time\":1775759253000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"stress test atualizado\"},{\"hash\":\"60c40e86e27985c2c10b85bb04428c46c190d9d7\",\"time\":1773921688000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"acréscimo da sessão stress test\"},{\"hash\":\"c91b5e6d23eee61752198f2c06851b0c7e025bf1\",\"time\":1773921688000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"acréscimo da sessão stress test\"}]},\"filePathRelative\":\"stresstest.md\"}")
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

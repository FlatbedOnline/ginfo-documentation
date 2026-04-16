import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Portal de suporte Ginfo\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1775851218000,\"contributors\":[{\"name\":\"Eduardo Basquiat\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1},{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"9adbb92684f1e9d98d849ff4a9212bac2cfa0d66\",\"time\":1775851218000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"correção de erros\"},{\"hash\":\"cd9d4978365dadb136e6025e08efb4908e753f77\",\"time\":1773922490000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"Alterações no index, também inclui um tutorial de md.\"},{\"hash\":\"5f4a91b91f18afd8105f120eaf92a183a5c4762a\",\"time\":1773922490000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"Alterações no index, também inclui um tutorial de md.\"},{\"hash\":\"cbd54338f0a08d601b778d0612181c6212236476\",\"time\":1773754478000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Eduardo Basquiat\",\"message\":\"new changes\"}]},\"filePathRelative\":\"index.md\"}")
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

import comp from "/home/carlos-eduardo/Documents/ginfo-documentation/docs/.vuepress/.temp/pages/dto.html.vue"
const data = JSON.parse("{\"path\":\"/dto.html\",\"title\":\"DTO\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1775481580000,\"contributors\":[{\"name\":\"Carlos Eduardo\",\"username\":\"\",\"email\":\"flatbed@tutanota.com\",\"commits\":1},{\"name\":\"ginfoprojeto-arch\",\"username\":\"ginfoprojeto-arch\",\"email\":\"ginfo.projeto@gmail.com\",\"commits\":1,\"url\":\"https://github.com/ginfoprojeto-arch\"}],\"changelog\":[{\"hash\":\"61eeeee0689bafb419e13e5de8f83c2d0152a12a\",\"time\":1775481580000,\"email\":\"ginfo.projeto@gmail.com\",\"author\":\"ginfoprojeto-arch\",\"message\":\"vault backup: 2026-04-06 10:19:40\"},{\"hash\":\"edc3b995f1360e6d9e5862acb7e174cc8b6fecbb\",\"time\":1775477789000,\"email\":\"flatbed@tutanota.com\",\"author\":\"Carlos Eduardo\",\"message\":\"inserção de telas\"}]},\"filePathRelative\":\"dto.md\"}")
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

import { GitContributors } from "/home/jploso/Trabalho/ginfo-documentation/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/home/jploso/Trabalho/ginfo-documentation/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

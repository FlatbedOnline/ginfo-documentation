import { GitContributors } from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

import { CodeTabs } from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";
import "/home/eduardo-basquiat/Documents/inove-doc/ginfo-documentation/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

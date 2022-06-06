import { defineClientConfig } from '@vuepress/client';
import { VButton } from '../../node_modules/vfast-ui/lib/vfast-ui.es.min.js';
import '../../node_modules/vfast-ui/src/button/index.less';
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log(123, app);
    app.component('VButton', VButton);
  },
  setup() {},
  rootComponents: []
});

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__federation_expose_Mount-DkbMNdr3.js","assets/jsx-runtime-XI9uIe3W.js","assets/index-CIQ6_Rzc.js","assets/index-DPp_4SNT.js","assets/__federation_expose_App-DwG_12xm.js","assets/preload-helper-DozDN73s.js","assets/__federation_fn_import-Bi7vPVnK.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-DozDN73s.js';

__vitePreload(async () => { const {autoMount} = await import('./__federation_expose_Mount-DkbMNdr3.js');return { autoMount }},true              ?__vite__mapDeps([0,1,2,3,4,5,6]):void 0).then(({ autoMount }) => {
  autoMount();
}).catch((error) => {
  console.error("Failed to load Tailwind MFE:", error);
});

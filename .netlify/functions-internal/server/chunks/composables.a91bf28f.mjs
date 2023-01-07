import { u as useNuxtApp } from './server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.a91bf28f.mjs.map

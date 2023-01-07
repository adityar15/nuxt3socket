import { u as useNuxtApp } from './server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.570d6880.mjs.map

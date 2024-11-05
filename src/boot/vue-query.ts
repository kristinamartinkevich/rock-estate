import { boot } from 'quasar/wrappers';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';

const queryClient = new QueryClient();

export default boot(({ app }) => {
  app.use(VueQueryPlugin, { queryClient });
});

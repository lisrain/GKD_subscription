import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 5678,
  name: '听雨的 GKD订阅-请勿传播',
  version: 0,
  author: 'lisrain',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/lisrain/GKD_subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '弹窗类-更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@ImageView[clickable=true] - [desc="立即更新"]',
        },
      ],
    },
  ],
});

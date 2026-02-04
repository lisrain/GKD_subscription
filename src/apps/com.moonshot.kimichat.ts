import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moonshot.kimichat',
  name: 'Kimi',
  groups: [
    {
      key: 1,
      name: '弹窗类-关闭模型能力推广弹窗',
      desc: '关闭模型能力推广弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@View[clickable=true][visibleToUser=true] - TextView - [text^="Kimi"]',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '淘宝闪购',
  groups: [
    {
      key: 1,
      name: '弹窗类-应用内更新权限弹窗',
      desc: '作者：鹤凌九霄',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="应用内更新权限"]',
            '[text="立即设置"] - [text="取消"]',
          ],
          fastQuery: true,
          activityIds: ['me.ele.application.ui.Launcher.LauncherActivity'],
        },
      ],
    },
  ],
});

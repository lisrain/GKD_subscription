import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 1,
      name: '弹窗类-关闭搜题完成后弹窗',
      desc: '自动关闭悬浮窗搜题后提示弹窗',
      rules: [
        {
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            '[text="完成"] < @View[visibleToUser=true] - [text="恭喜学神，已完成本次搜题"]',
        },
      ],
    },
  ],
});

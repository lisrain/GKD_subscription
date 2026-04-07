import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wenyu.bodian',
  name: '波点音乐',
  groups: [
    {
      key: 1,
      name: '弹窗类-首页VIP弹窗',
      desc: '自动关闭进入软件时的VIP弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '[desc*="今日VIP"] + ImageView[visibleToUser=true][width=height]',
        },
        {
          key: 2,
          activityIds: '.MainActivity',
          matches: '[text="立即开通"] -2 TextView[visibleToUser=true]',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'cn.wenyu.bodian.MainActivity',
          matches:
            '[text="畅听会员年卡"] - @TextView[visibleToUser=true] < View <2 View < WebView < WebView <2 View < View < FrameLayout < [id="android:id/content"]',
        },
      ],
    },
  ],
});

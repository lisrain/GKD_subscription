import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '弹窗类-玩赚中心签到',
      desc: '自动跳过每日玩赚中心签到弹窗',
      enable: false,
      rules: [
        {
          activityIds: '.liteapp.app.UPLiteAppActivity1',
          matches:
            '@[text="签到成功"] <<n * - Image[text^="success-head@"] <<n [text="玩赚中心"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-支付成功后自动点击完成',
      desc: '支付成功后自动点击完成',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.react.UPActivityReactNative',
          matches: '@[text="完成"] < ViewGroup - ScrollView [text="支付成功"]',
        },
      ],
    },
  ],
});

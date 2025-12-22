import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '弹窗类-跳过学生票弹窗',
      desc: '自动点击跳过按钮跳过学生票弹窗',
      rules: [
        {
          matches: ['[vid="cancel"]'],
          fastQuery: true,
          activityIds: ['com.MobileTicket.ui.activity.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动确认登录',
      desc: '自动确认登录12306网站',
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '@[text="确认登录"] -2 [text="12306网站登录确认"]',
        },
      ],
    },
  ],
});

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
      name: '功能类-自动确认登录网站',
      desc: '自动确认登录12306网站&本人车票校验',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@[text="确认登录"][visibleToUser=true] -2 [text="12306网站登录确认"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@[vid="sure"][visibleToUser=true] < LinearLayout - FrameLayout > [text="登录成功"]',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@[vid="sure"][visibleToUser=true] < LinearLayout - FrameLayout > [text="身份核验成功！"]',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 2,
      name: '功能类-自动清除未读消息',
      desc: '消息页自动点击消息清除并确认',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[text="消息"] + [text*="("] + [text="清除未读"][visibleToUser=true]',
          ],
          fastQuery: true,
          activityIds: ['com.ct.client.activity.MainActivity'],
        },
        {
          key: 1,
          preKeys: [0],
          matches: ['[vid="ll_bt"] > [vid="bt_sure"][visibleToUser=true]'],
          fastQuery: true,
          activityIds: ['com.ct.client.activity.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '弹窗类-自动关闭推送通知提醒弹窗',
      desc: '自动关闭推送通知提醒弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.selfservice5.activity.MealAllowanceActivityBlue',
          matches:
            '@[vid="tv_deny"][visibleToUser=true] < LinearLayout -n [text="开启推送通知"]',
        },
      ],
    },
  ],
});

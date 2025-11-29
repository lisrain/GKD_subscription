import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.abjlvcha.main',
  name: '绿茶VPN',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击主页',
      desc: '自动点击主页,避开导航推广',
      actionCd: 500,
      rules: [
        {
          matches: ['[text="网址分类"][left>0]', '[vid="main_button_group"]'],
          fastQuery: true,
          activityIds: ['com.lvcha.main.activity.MainActivity'],
        },
      ],
    },
  ],
});

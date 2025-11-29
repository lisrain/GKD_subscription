import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wenyu.bodian',
  name: '波点音乐',
  groups: [
    {
      key: 1,
      name: '弹窗类-首页弹窗',
      desc: '自动关闭进入软件时的弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '[desc="看3个广告领今日VIP"] + ImageView[visibleToUser=true][width=height]',
        },
      ],
    },
  ],
});

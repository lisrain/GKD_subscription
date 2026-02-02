import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 1,
      name: '局部类-QQ空间详情评论区末尾广告',
      desc: '自动点击广告-关闭此条广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.qzone.reborn.base.QZoneShellActivity',
          matches:
            '[text="广告"][visibleToUser=true] < @[vid="ozu"] <<4 [vid="ozn"] <<2 [vid="ozq"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: 'com.qzone.reborn.base.QZoneShellActivity',
          matches:
            '[text="关闭此条广告"] <2 @LinearLayout - View < LinearLayout',
        },
      ],
    },
  ],
});

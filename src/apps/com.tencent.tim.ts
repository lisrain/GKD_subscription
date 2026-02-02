import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tim',
  name: 'TIM',
  groups: [
    {
      key: 1,
      name: '分段广告类-好友动态卡片广告',
      desc: '作者：鹤凌九霄  规则借鉴自Alsouler',
      rules: [
        {
          key: 0,
          matches: ['View[desc="广告"] + ImageView[clickable=true]'],
          fastQuery: true,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: [
            '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部类-好友动态详情页广告',
      rules: [
        {
          matches: [
            '[id="com.tencent.tim.qzone_df_impl:id/c6o"]',
            '[desc="关闭广告" || id="com.tencent.tim.qzone_df_impl:id/c6p"][clickable=true]',
          ],
          activityIds: ['com.qzone.reborn.base.QZoneShellActivity'],
        },
      ],
    },
  ],
});

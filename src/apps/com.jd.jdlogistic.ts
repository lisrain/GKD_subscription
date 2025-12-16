import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlogistic',
  name: '京东快递',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.flutter.HomeActivity',
          matches:
            '@[desc="跳过"][visibleToUser=true] - [desc="上滑或点击查看详情"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部类-自动关闭小组件提示',
      desc: '自动关闭添加桌面小组件提示',
      rules: [
        {
          activityIds: '.flutter.HomeActivity',
          matches:
            '@ImageView[index=10] - [desc="去添加"] <<n [desc="添加桌面小组件，寄件查件更方便~"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗类-首页弹窗',
      desc: '自动关闭首页推广弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.flutter.HomeActivity',
          matches:
            '@ImageView <2 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
        },
      ],
    },
  ],
});

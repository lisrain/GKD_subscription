import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '局部类-隐藏搜索发现',
      desc: '自动点击隐藏搜索发现',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.NewPageActivity',
          matches:
            '@[desc="隐藏搜索发现"][visibleToUser=true] - [text="搜索发现"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-缓存清理自动点击[确定]',
      desc: '设置-清除缓存-自动点击[确定]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.NewPageActivity',
          matches:
            '@[text="确定"][visibleToUser=true] <<n LinearLayout -2 LinearLayout > [vid="title"][text="确定要清除缓存吗？"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗类-关闭[评价领现金]弹窗',
      desc: '自动X掉[评价领现金]',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '@ImageView < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [parent=null]',
        },
      ],
    },
  ],
});

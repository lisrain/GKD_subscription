import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '局部类-我的页面专属福利',
      desc: '关闭我的页面专属福利部分[每日一次]',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@TextView[visibleToUser=true][width>height] < View + [text="专属福利"] <<n WebView[text="福利专区"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部类-首页banner广告',
      desc: '自动关闭首页banner广告[每日一次][待实测]',
      enable: false,
      rules: [
        {
          activityIds: '.ui.MainActivity',
          matches:
            '[vid="ad_mark"][text="广告"] <<n [vid="home_banner_root"] >n [vid="banner_item_close"][width=height][visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗类-关闭消息通知开启弹窗',
      desc: '点击右上角X跳过弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@[vid="dialog_cancel"][visibleToUser=true] <2 * + [vid="dialog_footer"] > [text="开启消息通知"]',
        },
      ],
    },
  ],
});

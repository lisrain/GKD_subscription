import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星定制版',
  groups: [
    {
      key: 1,
      name: '局部类-我的页面专属福利',
      desc: '关闭我的页面专属福利部分（每日一次）',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@TextView[visibleToUser=true][width>height] < View + [text="专属福利"] <<n WebView[text="福利专区"]',
        },
      ],
    },
  ],
});

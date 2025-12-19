import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wetype',
  name: '微信输入法',
  groups: [
    {
      key: 1,
      name: '弹窗类-拼写Plus关闭功能时跳过弹窗',
      desc: '拼写Plus关闭功能时自动点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.hld.reactnative.activity.SimpleReactActivity',
          matches: ['[text="拼写Plus"]', '@[desc="关闭"] -3 [text^="关闭「"]'],
        },
      ],
    },
  ],
});

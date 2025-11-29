import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '功能类-拼好饭自动打开号码保护',
      desc: '拼好饭订单页自动打开号码保护',
      matchRoot: true,
      rules: [
        {
          key: 0,
          action: 'click',
          matches: [
            '@Image < View < View < View - [text="放心吃"||text="可享权益"]',
          ],
          excludeMatches: [
            '@[text="号码保护"][visibleToUser=true] - Image - View[text="可享权益"]',
          ],
          activityIds: ['com.meituan.msc.modules.container.MSCActivity'],
        },
        {
          key: 1,
          preKeys: [0],
          action: 'click',
          matches: ['@Image - View - [text="号码保护"]'],
          matchRoot: true,
          activityIds: ['com.meituan.msc.modules.container.MSCActivity'],
        },
      ],
    },
  ],
});

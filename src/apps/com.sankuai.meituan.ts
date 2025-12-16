import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '功能类-拼好饭自动打开号码保护',
      desc: '拼好饭订单页自动打开号码保护',
      enable: false,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '@View[visibleToUser=true][text=""][desc=null] - [text="放心吃"||text="可享权益"]',
          ],
          excludeMatches: ['@[text="号码保护"] -n [text="可享权益"]'],
          activityIds: ['com.meituan.msc.modules.container.MSCActivity'],
        },
        {
          key: 1,
          preKeys: [0],
          action: 'clickCenter',
          matches: [
            '@[visibleToUser=true][text="未开启"][desc=null] -2 View - [text="号码保护"]',
          ],
          excludeMatches: [
            '@[visibleToUser=true][text="隐私保护中"][desc=null] -2 View - [text="号码保护"]',
          ],
          activityIds: ['com.meituan.msc.modules.container.MSCActivity'],
        },
      ],
    },
  ],
});

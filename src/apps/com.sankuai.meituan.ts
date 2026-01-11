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
            '@View[visibleToUser=true][text=""][desc=null] - [text="放心吃"||text="可享权益"]',
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
    {
      key: 2,
      name: '功能类-缓存清理自动点击[确定]',
      desc: '设置-清理缓存-自动点击[确定]',
      rules: [
        {
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            '@[text="确定"][visibleToUser=true] -2 [text="缓存是使用美团过程中的临时数据，清理缓存不会影响你使用美团功能。"] - [text="确定要清理缓存吗"]',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '测试类-签到领现金弹窗',
      desc: '关闭签到领现金各类多余弹窗',
      rules: [
        {
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: ['[text="大额省钱包"]', '[text$=".jpg_"]'],
        },
        {
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: [
            '[text="签到频道红包"]',
            '@Button[text="关闭"] <2 View[id="redBagMod"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-缓存清理自动点击[确定]',
      desc: '存储空间-一键清理-自动点击[确定]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.android.cachecleaner.CacheCleanActivity',
          matches:
            '@[text="确定"] <<n [id="android:id/buttonPanel"] - [id="android:id/contentPanel"] * + [text="清理淘宝缓存可能需要一点时间，清理过程中请耐心等候"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部类-菜鸟小程序banner广告',
      rules: [
        {
          activityIds: 'com.alibaba.triver.container.TriverMainActivity',
          matches:
            '@Image[width<50][height<50][visibleToUser=true] <<n View - TextView[id="anchor_packageTopAnchor"] <<n View[id=null]',
        },
      ],
    },
  ],
});

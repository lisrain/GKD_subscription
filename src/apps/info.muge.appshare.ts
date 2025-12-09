import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 1,
      name: '功能类-自动跳过奖励已领取后的广告',
      desc: '自动跳过奖励已领取后的广告页面',
      rules: [
        {
          matches: ['@[text="｜跳过"] - [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '测试类-搜索结果页广告',
      desc: '自动关闭搜索页面各类广告',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.view.search.v4.SearchActivity',
          matches: [
            'FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true][width=height] <<n [vid="adView"]',
          ],
          excludeMatches: ['[text="热门搜索"]'],
        },
        {
          action: 'clickCenter',
          activityIds: '.view.search.v4.SearchActivity',
          matches:
            'View[childCount=5] > View[index=3] > @Image[visibleToUser=true][width<60&&height<60] <<12 WebView',
        },
      ],
    },
    {
      key: 3,
      name: '测试类-自动关闭应用详情页广告栏',
      desc: '自动关闭应用详情页中部广告栏',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.view.app.detail.v4.AppDetailV4Activity',
          matches: [
            'FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true][width=height] <<n [vid="cardAd"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部类-帖子页广告',
      desc: '自动关闭广场帖子页各类广告',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.view.article.ArticleDetailActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout > @ImageView[visibleToUser=true][width=height] <<n [vid="adView"]',
        },
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: '.view.article.ArticleDetailActivity',
          matches:
            'FrameLayout[childCount=3] > FrameLayout > @ImageView[visibleToUser=true][width=height] <<n [vid="adView"]',
        },
      ],
    },
    {
      key: 0,
      name: '开屏广告-保证展示率',
      desc: '延时2s跳过，规则来源：AIsouler',
      actionMaximumKey: 0,
      actionDelay: 2000,
      actionMaximum: 1,
      priorityTime: 10000,
      order: -10,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          matches: ['[text*="跳过"][visibleToUser=true][text.length<=10]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/14553551'],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'width * 0.6984',
          },
          matches: ['@ViewGroup > [text="跳过"][visibleToUser=true]'],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/15269380',
            'https://i.gkd.li/i/15285908',
            'https://i.gkd.li/i/15520277',
          ],
        },
      ],
    },
  ],
});

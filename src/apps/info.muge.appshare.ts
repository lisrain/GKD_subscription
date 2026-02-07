import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      actionDelay: 2000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][visibleToUser=true][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14553551',
        },
        {
          // 该开屏广告需要点击坐标在跳过按钮下半部分内才能跳过
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.5',
            top: 'width * 0.6984',
          },
          matches: '@ViewGroup > [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15269380',
            'https://i.gkd.li/i/15285908',
            'https://i.gkd.li/i/15520277',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动跳过奖励已领取后的广告',
      desc: '自动跳过奖励已领取后的广告页面',
      enable: false,
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
      name: '功能类-缓存清理自动清理选中缓存',
      desc: '自动点击缓存清理-清除选中缓存（多为广告sdk缓存）',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.settings.cache.CacheClearActivity',
          matches: '[vid="btnClearCache"][visibleToUser=true]',
        },
      ],
    },
  ],
});

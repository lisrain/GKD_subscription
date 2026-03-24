import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 5,
      name: '弹窗类-恭喜获得积分',
      desc: '自动跳过恭喜获得积分弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[text="知道了"] - [text^="胖乖积分"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-关闭开屏外卖红包弹窗',
      desc: '关闭外卖红包弹窗（建议禁止app剪贴板权限）',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[vid="iv_cancel"]'],
          fastQuery: true,
          activityIds: ['com.qiekj.user.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动选中支付宝支付',
      desc: '自动选中支付宝支付',
      actionDelay: 250,
      actionMaximum: 1,
      rules: [
        {
          matches: [
            '[vid="tvPayName"][text="支付宝支付"] + [vid="viewSelector"]',
          ],
          fastQuery: true,
          activityIds: ['com.qiekj.user.ui.activity.scan.AfterPayUseAct'],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动选中积分抵扣',
      desc: '自动选中积分抵扣',
      actionMaximum: 1,
      rules: [
        {
          matches: ['[text="自动抵扣"] + [vid="switchView"][checked=false]'],
          fastQuery: true,
          activityIds: ['com.qiekj.user.ui.activity.scan.AfterPayUseAct'],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗类-使用前付款页弹窗广告',
      desc: '自动关闭使用设备前付款页弹窗广告',
      rules: [
        {
          activityIds: '.ui.activity.scan.AfterPayUseAct',
          matches:
            '@[id$="wm_pop_pic_close"][visibleToUser=true] - [id$="wm_pop_pic_container"]',
        },
        {
          fastQuery: true,
          activityIds:
            'cn.vlion.ad.inland.ad.interstitial.VlionCustomInterstitialActivity',
          matches:
            '@[vid="vilon_close"||vid="vilon_close_miss"][visibleToUser=true] <<n [vid="vlion_ad_closed"]',
        },
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[width<60][height<60][visibleToUser=true] <<2 View - View > TextView[text="反馈"]',
        },
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@ImageView[visibleToUser=true] <<4 ViewGroup + ViewGroup > ViewGroup + ViewGroup >3 [text="反馈"]',
        },
        {
          activityIds: '.ui.activity.scan.AfterPayUseAct',
          matches:
            'ImageView[id="com.wangmai.allmodules:id/wm_pop_pic_close"][visibleToUser=true] <<n [id="com.wangmai.allmodules:id/rl_popup_content"]',
        },
      ],
    },
    {
      key: 7,
      name: '局部类-局部广告',
      desc: '自动关闭首页局部sdk广告',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=false][visibleToUser=true][width=height] <<2 * - TextView <<n [id="com.kwad.dy.sdk:id/ksad_container"]',
        },
      ],
    },
  ],
});

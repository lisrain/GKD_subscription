import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 1,
      name: '弹窗类-首页弹窗广告',
      desc: '首页弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="anythink_myoffer_btn_close_id"][visibleToUser=true]',
          ],
          fastQuery: true,
          activityIds: ['com.anythink.basead.ui.ATPortraitTranslucentActivity'],
        },
        {
          matches: [
            '[vid="beizi_interstitial_ad_close_iv"][visibleToUser=true]',
          ],
          fastQuery: true,
          activityIds: [
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
          ],
        },
        {
          matches: [
            '[id="android:id/content"] > FrameLayout > FrameLayout > FrameLayout > FrameLayout + FrameLayout > ImageView[index=0]',
          ],
          activityIds: ['com.zzw.october.MainActivity'],
        },
        {
          matches: ['@ImageView - [text="反馈"]'],
          fastQuery: true,
          activityIds: ['com.octopus.ad.AdActivity'],
        },
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@ImageView[index=0][visibleToUser=true] < ViewGroup - ViewGroup > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/25535351',
        },
      ],
    },
  ],
});

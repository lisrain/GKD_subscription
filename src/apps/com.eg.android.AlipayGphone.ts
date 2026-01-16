import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '测试类-胖乖生活小程序-取消洗护用品',
      desc: '取消洗衣时默认选中的洗护用品',
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: [
            '[text="企鹅洗衣"]',
            '[text^="+洗护用品"]',
            '@View[visibleToUser=true] <<n View - View > [text="请添加洗护用品"]',
          ],
          excludeMatches: [
            '@TextView[text=""][visibleToUser=true] <<n View - View > [text="请添加洗护用品"]',
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: [
            '[text="企鹅洗衣"]',
            '[text^="+洗护用品"]',
            '@View[visibleToUser=true] <<n View -2 View > [text="请添加洗护用品"]',
          ],
          excludeMatches: [
            '@TextView[text=""][visibleToUser=true] <<n View -2 View > [text="请添加洗护用品"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗类-关闭选择通知接收范围弹窗',
      desc: '选择通知接收范围-暂时不用',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches: '@[text="暂时不用"][visibleToUser=true] < LinearLayout -3 [text="选择通知接收范围"]',
        },
      ],
    }
  ],
});

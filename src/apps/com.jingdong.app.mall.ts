import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '功能类-缓存清理自动点击[确定]',
      desc: '储存空间-一键清理-自动点击[确定]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.storage.StorageCleanActivity',
          matches:
            '@[vid="jd_dialog_neg_button"][text="确定"][visibleToUser=true] <<n [vid="ll_btns"] - * > [text="确定清除数据？"||text="确定清除缓存数据？"]',
        },
      ],
    },
  ],
});

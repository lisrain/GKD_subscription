import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '弹窗类-关闭[你可能感兴趣的优质博主]',
      desc: '自动点击X关闭弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.page.recommend.AccountRecommendActivity',
          matches:
            '@[vid="recommend_close_activity"][visibleToUser=true] <2 LinearLayout >n [text="你可能感兴趣的优质博主推荐"]',
        },
      ],
    },
  ],
});

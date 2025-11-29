import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 1,
      name: '功能类-学习通电脑端自动登录',
      desc: '学习通电脑端自动登录',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '@[desc="登录"][visibleToUser=true] < View <2 [text="登录确认"]',
          ],
          activityIds: ['com.chaoxing.mobile.webapp.ui.WebAppViewerActivity'],
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务',
  groups: [
    {
      key: 16,
      name: '弹窗类-自动关闭不足xx分体验优化',
      desc: '自动关闭不足xx分体验优化弹窗',
      rules: [
        {
          key: 1,
          matches: [
            '[text="体检优化"] < [vid="topPanel"] + * + [vid="buttonPanel"] > [text="退出"]',
          ],
          fastQuery: true,
          activityIds: ['com.miui.securityscan.MainEntryActivity'],
        },
        {
          key: 2,
          matches: [
            '[text="体检优化"] < [vid="topPanel"] + * + [vid="buttonPanel"] > [text="取消"]',
          ],
          fastQuery: true,
          activityIds: ['com.miui.securityscan.MainEntryActivity'],
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.digitalchina.mobile.dfhfz1',
  name: 'e福州',
  groups: [
    {
      key: 1,
      name: '弹窗类-首页弹窗',
      desc: '自动关闭首页"银行卡重新签约"弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.systoon.toon.business.main.view.MainFunctionActivity',
          fastQuery: true,
          matches:
            '@[vid="closeBtn"][visibleToUser=true] - [vid="rl_content"] < RelativeLayout',
          snapshotUrls: 'https://i.gkd.li/i/24785999',
        },
      ],
    },
  ],
});

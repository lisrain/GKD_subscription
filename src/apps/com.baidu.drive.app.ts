import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.drive.app',
  name: '百度网盘-国际版',
  groups: [
    {
      key: 1,
      name: '分段广告类-咱不开启安全备份',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.NewQuickSettingsActivity',
          matches:
            '@[vid="not_open"][text="暂不开启"][visibleToUser=true] - [vid="btn_text"][text="开启安全备份"]',
          snapshotUrls: 'https://i.gkd.li/i/25009631',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.NewQuickSettingsActivity',
          matches:
            '@[vid="dialog_button_cancel"][text="暂不开启"][visibleToUser=true] -2 [text="是否开启照片自动备份？"]',
        },
      ],
    },
  ],
});

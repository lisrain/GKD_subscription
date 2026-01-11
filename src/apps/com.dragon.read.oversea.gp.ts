import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read.oversea.gp',
  name: '番茄小说',
  groups: [
    {
      key: 1,
      name: '功能类-书架自动展开全部',
      desc: '书架页自动点击展开全部',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@[vid="unfold_tv"][text="展开全部"] + ImageView[vid="unfold_iv"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗类-自动取消[开启推送提醒]',
      desc: '自动点击取消[开启推送提醒]',
      rules: [
        {
          matches: [
            '@[text="取消"][visibleToUser=true] <<n *[vid="content_view"] > *[vid="layout_text"] > *[text="开启推送提醒"][visibleToUser=true]',
          ],
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-清理缓存自动点击[一键清理]',
      desc: '清理缓存页自动点击[一键清理]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.dragon.read.component.biz.impl.mine.clean.DiskCleanActivity',
          matches:
            '@[vid="clean_cache_btn"][visibleToUser=true] + [text="可清理的缓存"]',
        },
      ],
    },
  ],
});

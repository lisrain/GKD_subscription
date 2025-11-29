import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhipuai.qingyan',
  name: '智谱清言',
  groups: [
    {
      key: 1,
      name: '弹窗类-自动跳过更新',
      desc: '弹窗类-自动跳过更新',
      resetMatch: 'app',
      rules: [
        {
          action: 'click',
          matches: ['[vid="tv_confirm_cancel"][visibleToUser=true]'],
          fastQuery: true,
          activityIds: ['.homepager.HomePagerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '[功能类]自动忽略首页推荐',
      desc: '自动忽略首页智能体推荐',
      rules: [
        {
          key: 0,
          action: 'longClick',
          matches: ['@[vid="rl_parent"] > [vid="iv_main_agent_avatar"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.zhipuai.qingyan.homepager.HomePagerActivity'],
        },
        {
          key: 3,
          preKeys: [0],
          matches: ['[vid="ll_homemenu_remove"]'],
          fastQuery: true,
          activityIds: ['com.zhipuai.qingyan.homepager.HomePagerActivity'],
        },
      ],
    },
  ],
});

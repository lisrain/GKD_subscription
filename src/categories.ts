import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
    enable: true,
  },
  {
    key: 1,
    name: '弹窗类',
    enable: true,
  },
  {
    // 部分非广告但属于可以自动点击的弹窗或按钮
    key: 6,
    name: '功能类',
    enable: true,
  },
  {
    // 预留接口，把gkd当自动化用
    key: 7,
    name: '任务类',
    enable: false,
  },
  {
    // 部分无操作影响但看着不舒服的内容
    key: 8,
    name: '占位类',
    enable: false,
  },
]);

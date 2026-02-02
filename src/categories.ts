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
    key: 2,
    name: '功能类',
    enable: true,
  },
  {
    // 预留接口，把gkd当自动化用，默认不启用
    key: 3,
    name: '任务类',
    enable: false,
  },
  {
    // 部分无操作影响但看着不舒服的广告类，默认不启用
    key: 4,
    name: '局部类',
    enable: false,
  },
  {
    // 部分还在测试中的规则，默认不启用
    key: 5,
    name: '测试类',
    enable: false,
  },
  {
    // 部分还在测试中的规则，默认不启用
    key: 6,
    name: '分段广告类',
    enable: false,
  },
]);

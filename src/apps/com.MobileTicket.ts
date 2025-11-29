import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
     "id": "com.MobileTicket",
      "name": "铁路12306",
      "groups": [
        {
          "key": 1,
          "name": "跳过学生票弹窗",
          "desc": "自动点击跳过按钮跳过学生票弹窗",
          "rules": [
            {
              "matches": [
                "[vid=\"cancel\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.MobileTicket.ui.activity.MainActivity"
              ]
            }
          ]
        }
      ]
});

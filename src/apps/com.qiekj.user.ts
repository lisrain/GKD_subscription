import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
      "id": "com.qiekj.user",
      "name": "胖乖生活",
      "groups": [
        {
          "key": 1,
          "name": "[弹窗类]自动跳过更新",
          "desc": "[弹窗类]自动跳过更新弹窗",

          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app",
          "rules": [
            {
              "matches": [
                "[vid=\"llUpdate\"] > [text=\"立即更新\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 5,
          "name": "自动关闭积分领取",
          "desc": "自动关闭积分领取",
          "rules": [
            {
              "matches": [
                "[text=\"胖乖积分\"]",
                "[vid=\"award\"] + [vid=\"cancel\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 9,
          "name": "[2]自动取消跳转+返回",
          "desc": "自动取消跳转弹窗并返回",
          "enable":false
          "rules": [
            {
              "key": 6,
              "matches": [
                "[text=\"您需要离开胖乖生活前往其他应用吗？\"]",
                "[text=\"取消\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.ui.activity.web.WebViewAct"
              ]
            },
            {
              "key": 7,
              "preKeys": [
                6
              ],
              "matches": [
                "[text=\"正在跳转\"] - TextView"
              ],
              "activityIds": [
                "com.qiekj.user.ui.activity.web.WebViewAct"
              ]
            },
            {
              "key": 8,
              "preKeys": [
                7
              ],
              "matches": [
                "[text=\"胖乖积分\"]",
                "[vid=\"award\"] + [vid=\"cancel\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 4,
          "name": "[1]自动点击外卖红包-领福利",
          "desc": "自动点击外卖红包-领福利",
          "enable":false
          "actionDelay": 3500,
          "rules": [
            {
              "matches": [
                "[text=\"天天领外卖红包\"] +4 [text=\"领福利\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 14,
          "name": "[2]自动直接返回beta",
          "desc": "自动直接返回并确认获取积分",
          "rules": [
            {
              "key": 7,
              "matches": [
                "[text=\"正在跳转\"] - TextView"
              ],
              "activityIds": [
                "com.qiekj.user.ui.activity.web.WebViewAct"
              ]
            },
            {
              "key": 8,
              "preKeys": [
                7
              ],
              "matches": [
                "[text=\"胖乖积分\"]",
                "[vid=\"award\"] + [vid=\"cancel\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 2,
          "name": "弹窗类-关闭开屏外卖红包弹窗",
          "desc": "关闭外卖红包弹窗",
          "enable":false
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app",
          "rules": [
            {
              "matches": [
                "[vid=\"iv_cancel\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.MainActivity"
              ]
            }
          ]
        },
        {
          "key": 20,
          "name": "功能类-自动选中支付宝支付&抵扣",
          "desc": "自动选中支付宝支付&积分抵扣",
          "actionDelay": 250,
          "actionMaximum": 1,
          "rules": [
            {
              "matches": [
                "[vid=\"tvPayName\"][text=\"支付宝支付\"] + [vid=\"viewSelector\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.ui.activity.scan.AfterPayUseAct"
              ]
            },
            {
              "matches": [
                "[text=\"自动抵扣\"] + [vid=\"switchView\"][checked=false]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.qiekj.user.ui.activity.scan.AfterPayUseAct"
              ]
            }
          ]
        }
      ]
});

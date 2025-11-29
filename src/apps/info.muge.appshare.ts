import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
   "id": "info.muge.appshare",
      "name": "AppShare",
      "groups": [
        {
          "key": 1,
          "name": "[功能类]自动跳过'奖励已领取'后的广告",
          "desc": "自动跳过'奖励已领取'后的广告页面",
          "rules": [
            {
              "matches": [
                "@[text=\"｜跳过\"] - [text=\"奖励已领取\"]"
              ],
              "activityIds": [
                "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
              ]
            }
          ]
        },
        {
          "key": 2,
          "name": "[占位类]自动关闭搜索页底部广告栏",
          "desc": "自动关闭搜索页底部广告栏",
          "actionDelay": 2000,
          "enable":false, 
          "rules": [
            {
              "matches": [
                "@ImageView < FrameLayout <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"adView\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "info.muge.appshare.view.search.v4.SearchActivity"
              ]
            },
            {
              "matches": [
                "@View < FrameLayout <3 FrameLayout < FrameLayout < FrameLayout <4 FrameLayout < FrameLayout < FrameLayout < [vid=\"adView\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "info.muge.appshare.view.search.v4.SearchActivity"
              ]
            }
          ]
        },
        {
          "key": 0,
          "name": "［保证展示率]开屏广告",
          "desc": "规则来源：AIsouler",
          "actionMaximumKey": 0,
          "actionDelay": 2000,
          "actionMaximum": 1,
          "priorityTime": 10000,
          "order": -10,
          "matchTime": 10000,
          "resetMatch": "app",
          "rules": [
            {
              "key": 0,
              "anyMatches": [
                "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\"][visibleToUser=true]",
                "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
              ],
              "fastQuery": true,
              "snapshotUrls": [
                "https://i.gkd.li/i/13842826",
                "https://i.gkd.li/i/13939089",
                "https://i.gkd.li/i/14260635"
              ]
            },
            {
              "key": 1,
              "matches": [
                "[text*=\"跳过\"][visibleToUser=true][text.length<=10]"
              ],
              "fastQuery": true,
              "snapshotUrls": [
                "https://i.gkd.li/i/14553551"
              ]
            },
            {
              "key": 2,
              "position": {
                "left": "width * 0.5",
                "top": "width * 0.6984"
              },
              "matches": [
                "@ViewGroup > [text=\"跳过\"][visibleToUser=true]"
              ],
              "fastQuery": true,
              "snapshotUrls": [
                "https://i.gkd.li/i/15269380",
                "https://i.gkd.li/i/15285908",
                "https://i.gkd.li/i/15520277"
              ]
            }
          ]
        }
      ]
});

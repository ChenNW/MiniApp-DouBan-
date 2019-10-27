// pages/Login/login.js
Page({

  Wechat_click: function(){

  console.log('微信登录')

    },

    account_click:function(){

      console.log('账号登陆')
    },
 
    agreement: function(){

      wx.navigateTo({
        url: '/pages/Agreement/agreement',
        
      });
  

    }
})
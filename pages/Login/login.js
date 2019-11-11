// pages/Login/login.js
Page({

    getPhoneNumber() {

        // console.log('微信登录')
        // wx.login({
        //     timeout: 10000,
        //     success: (result) => {

        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });

        wx.login({
            timeout: 10000,
            success: (result) => {
                console.log(result)
            },
            fail: () => {},
            complete: () => {}
        });



    },

    account_click: function() {

        console.log('账号登陆')
    },

    agreement: function() {

        wx.navigateTo({
            url: '/pages/Agreement/agreement',

        });
    },




})
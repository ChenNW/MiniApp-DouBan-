// pages/Profile/profile.js
Page({

    LoginButtonClick: function() {
        console.log('点击了登录按钮')
            // 获取地理位置

        wx.navigateTo({
            url: '/pages/Login/login',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });


        /*
            wx.getLocation({
            type: 'wgs84',
            altitude: false,
            success: (result) => {

                const latitude = result.latitude;
                const longitude = result.longitude;
                const speed = result.speed;
                const accracy = result.accuracy; //位置的精确度

                wx.openLocation({
                    latitude,
                    longitude,
                    scale: 18
                })

                wx.showModal({
                    title: 'latitude',
                    content: '',
                    showCancel: true,
                    cancelText: '取消',
                    cancelColor: '#000000',
                    confirmText: '确定',
                    confirmColor: '#3CC51F',
                    success: (result) => {
                        if (result.confirm) {

                        }
                    },
                    fail: () => {},
                    complete: () => {
                        console.log('6666')
                    }
                });

            },
            fail: () => {},
            complete: () => {}
        });
        */



    },
    // 列表
    data: {
        items: [{
                icon: 'ic_cat_movie.png',
                title: '观影分析',
                count: 0,
                has: '看过',
                mark: '标记10部影片\n开启观影分析'
            },
            {
                icon: 'ic_cat_book.png',
                title: '读书分析',
                count: 0,
                has: '读过',
                mark: '标记10本书\n开启读书分析'
            },
            {
                icon: 'ic_cat_music.png',
                title: '音乐分析',
                count: 0,
                has: '听过',
                mark: '标记10张唱片\n开启观音乐分析'
            }
        ]
    },

    beginAction: function(evt) {

        console.log(evt)

    }


})
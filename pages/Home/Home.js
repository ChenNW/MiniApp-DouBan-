// pages/Home/Home.js
Page({

    onLoad: function() {

        this.getLocation((city) => {

            this.getHotMoves(city)
        })

        this.getNnewMoves()

    },

    data: {

        hot_list: [{
                small: "123",
                title: '电影',
                average: '8.9',
                stars: '40'
            },
            {
                small: "456",
                title: '电影1',
                average: '8.9',
                stars: '40'
            }
        ],

        new_moves: [{
                small: "123",
                title: '电影',
                average: '8.9',
                stars: '40'
            },
            {
                small: "456",
                title: '电影1',
                average: '8.9',
                stars: '40'
            }


        ]
    },

    //请求新片榜
    getNnewMoves: function() {

        var reqTask = wx.request({
            url: 'https://douban-api.uieee.com/v2/movie/new_movies',
            data: {},
            header: { 'content-type': 'json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                console.log(result)
            },
            fail: () => {},
            complete: () => {}
        });





    },




    //请求热门数据
    getHotMoves: function(city) {

        wx.showLoading({
            title: '加载中',
            mask: true,
        });

        wx.request({
            url: 'https://douban-api.uieee.com/v2/movie/in_theaters',
            data: {
                city: city
            },
            header: { 'content-type': 'json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                wx.hideLoading();
                // console.log(result.data)

                this.hot_list = result.data.subjects;
                this.setData({ hot_list: result.data.subjects })


            },
            fail: () => {
                wx.db.toastError('数据请求失败')

            },
            complete: () => {}
        });


    },


    //获取城市位置
    getLocation: function(success) {

        wx.getLocation({
            type: 'wgs84',
            altitude: false,
            success: (result) => {

                // console.log(result)
                wx.request({
                    url: 'https://api.map.baidu.com/reverse_geocoding/v3',
                    data: {
                        coordtype: 'wgs84',
                        ak: 'GzGgzXhMCD8rEHAuKLp2pLF8khc4teTC',
                        location: `${result.latitude},${result.longitude}`,
                        output: 'json'
                    },
                    header: { 'content-type': 'application/json' },
                    method: 'GET',
                    dataType: 'json',
                    responseType: 'text',
                    success: (result) => {
                        let city = result.data.result.addressComponent.city
                        city = city.substr(0, city.length - 1)
                        success(city)
                    },
                    fail: () => {
                        wx.db.toastError('获取城市失败')
                    },
                    complete: () => {}
                });




            },
            fail: () => {
                wx.db.toastError('获取位置失败')
            },
            complete: () => {}
        });

    }


})














wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#58BE6B',
    //导航栏渐变
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});

/*
wx.getSetting({
    success: (result) => {

        console.log(result)
    },
    fail: () => {},
    complete: () => {}
});
*/


/*
//刷新
wx.startPullDownRefresh({
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});
*/


//1. 显示加载框
/**
    wx.showLoading({
    title: "加载中...",
    mask: true,
    success: (result) => {

    },
    fail: () => {

    },
    complete: () => {}
})

setTimeout(() => {
    wx.hideLoading();

}, 2000);
     */

// 2 .显示提示框
/*
wx.showToast({
    title: '我是提示框',
    icon: 'none',
    image: '/assets/imgs/rating_star_small_on.png',
    duration: 3000,
    mask: false,
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});
*/

// 3. alert提示框
/*
wx.showModal({
    title: '我是标题',
    content: '我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿我是内容,我是内容,还好还好哈哈哈哈哈嘿嘿嘿嘿嘿嘿',
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
    complete: (result) => {

        let string;
        if (result.cancel) {
            string = '点击了取消'
        } else {
            string = '点击了确定按钮'
        }
        wx.showToast({
            title: string,
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });  
    }
    });
    */

// 4.showActionSheet
/*
wx.showActionSheet({
    itemList: ['我是标题1', '我是标题2', '我是标题3'],
    itemColor: '#000000',
    success: (result) => {
        wx.showModal({
            title: '我的标题' + result.tapIndex,
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
            complete: () => {}
        });

    },
    fail: () => {},
    complete: () => {}
});
*/
// 5.导航条相关方法
/*
//5.1导航栏显示加载圈
wx.showNavigationBarLoading();
setTimeout(() => {
    wx.hideNavigationBarLoading();
}, 2000);

// 5.2设置导航栏标题
wx.setNavigationBarTitle({
    title: '我是首页',
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});

//5.3设置标题颜色
wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#58BE6B',
    //导航栏渐变
    animation: {
        duration: 2000,
        timingFunc: 'linear'
    },
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});

// wx.setBackgroundTextStyle({
//     textStyle: 'dark'
// });

wx.showTabBarRedDot({
    index: 1,
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});

wx.wx.showTabBar({
    animation: true,
    success: (result) => {

    },
    fail: () => {},
    complete: () => {}
});
*/
// pages/Home/Home.js
Page({

    Move_detail: function() {

        wx.navigateTo({
            url: '/pages/movedetail/movedetail',
            fail: () => {
                wx.db.toastError('跳转失败')
                console.log(error)
            },
            complete: () => {}
        });

    },

    //查看更多
    seeMore: function(res) {
        const index = (res.currentTarget.dataset.index);
        const obj = this.data.allData[index];
        wx.navigateTo({
            url: `/pages/seeMore/seeMore?title=${obj.title}&url=${obj.url}`,
        });


    },
    onLoad: function() {
        this.loadLocalData();
        // this.getLocation((city) => {
        //     this.loadNewData(0, { city: city })
        // });
        // this.loadNewData(1);
        // this.loadNewData(2);
        // this.loadNewData(3);
        // this.loadNewData(4);

    },


    data: {
        allData: [{
                title: '影院热映',
                url: 'v2/movie/in_theaters',
                movies: []

            },
            {
                title: '新片榜',
                url: 'v2/movie/new_movies',
                movies: []

            },
            {
                title: '口碑榜',
                url: 'v2/movie/weekly',
                movies: []

            },
            {
                title: 'Top250',
                url: 'v2/movie/top250',
                movies: []
            },
            {
                title: '北美票房榜',
                url: 'v2/movie/us_box',
                movies: []
            },



        ]
    },
    //加载本地数据
    loadLocalData: function() {
        for (let index = 0; index < this.data.allData.length; index++) {
            let obj = this.data.allData[index];
            obj.movies = wx.getStorageSync(obj.url) || [];
        }
        this.setData(this.data);
    },

    //加载新数据
    loadNewData: function(index, params) {

        wx.showLoading({
            title: '加载中',
            mask: true,
        });

        wx.request({
            url: wx.db.url(this.data.allData[index].url),
            data: params,
            header: { 'content-type': 'json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                let obj = this.data.allData[index];
                wx.hideLoading();
                console.log(result.data)

                obj.title = result.data.title;
                const movies = result.data.subjects;
                for (let idx = 0; idx < movies.length; idx++) {
                    let movie = movies[idx].subject || movies[idx];
                    obj.movies.push(movie);
                }
                this.setData(this.data);

                //数据缓存
                wx.setStorage({
                    key: obj.url,
                    data: obj.movies,
                    success: (result) => {
                        // wx.db.toastSuccess('缓存成功');
                    },
                });


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
// pages/Profile/profile.js
Page({

    LoginButtonClick: function() {
        console.log('点击了登录按钮')
    },
    // 列表
    // data: {

    //     listData: [
    //         '123',
    //         '345',
    //         '123',
    //         '456',


    //     ]


    // }

    data: {
        goodsArray: [{
                title: '颜域蝴蝶结荷叶领雪纺连衣裙女夏时尚高端斑点裙子2018年新款热销',
                desc: '黑点 M码',
                price: '￥999.0',
                num: '2'
            },
            {
                title: '颜域蝴蝶结荷叶领雪纺连衣裙女夏时尚高端斑点裙子2018年新款热销',
                desc: '黑点 M码',
                price: '￥999.0',
                num: '2'
            },
            {
                title: '颜域蝴蝶结荷叶领雪纺连衣裙女夏时尚高端斑点裙子2018年新款热销',
                desc: '黑点 M码',
                price: '￥999.0',
                num: '2'
            },
            {
                title: '颜域蝴蝶结荷叶领雪纺连衣裙女夏时尚高端斑点裙子2018年新款热销',
                desc: '黑点 M码',
                price: '￥999.0',
                num: '2'
            },
            {
                title: '颜域蝴蝶结荷叶领雪纺连衣裙女夏时尚高端斑点裙子2018年新款热销',
                desc: '黑点 M码',
                price: '￥999.0',
                num: '2'
            }
        ]
    },
    canvasIdErrorCallback: function(e) {
        console.error(e.detail.errMsg)
    },
    onReady: function(e) {
        this.goodsList = this.selectComponent("#goodsList");
    }

})
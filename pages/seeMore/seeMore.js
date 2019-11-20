// pages/seeMore/seeMore.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: []

    },

    onLoad: function(options) {
        console.log(options.title);
        wx.setNavigationBarTitle({
            title: options.title,
        });
        this.data.movies = wx.getStorageSync(options.url);
        this.setData(this.data);


    },

})
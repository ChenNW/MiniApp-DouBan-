// pages/movie-detail/movie-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        title: ""


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const movie = JSON.parse(options.movie);
        console.log(movie);
        wx.setNavigationBarTitle({
            title: movie.title,
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });

    },

})
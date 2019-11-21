// pages/CustomMovieItem/customMovieItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

        movie: {
            type: Object,
            value: null
        }


    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

        Move_detail: function() {
            wx.navigateTo({
                url: `/pages/movie-detail/movie-detail?movie=${ JSON.stringify(this.data.movie) }`,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });

        }
    }
})
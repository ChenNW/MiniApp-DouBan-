// pages/Profile/profile.js
Page({

    LoginButtonClick: function() {
        console.log('点击了登录按钮')
    },
    // 列表
    data: {
        items: [
            {
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

    beginAction:function(evt){

        console.log(evt)

    }
   

})
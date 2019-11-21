// pages/component/nav-bar/nav-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        title_color: {
            type: String,
            value: '#fff'
        },
        // 状态栏颜色
        statusBarColor: {
            type: String,
            value: '#fff'
        },
        // 导航栏背景色
        navBarColor: {
            type: String,
            value: '#fff'
        },
        //返回按钮是否显示
        back: {
            type: String,
            value: 'true'
        },
        //home按钮是否显示
        home: {
            type: String,
            value: 'true'
        }



    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarStyle: '', // 状态栏样式
        navBarStyle: '' // 导航栏样式
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },

    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行

            const statusBarStyle = `
        height:${ wx.db.statusBarHeight }px
        background-color: ${ this.data.statusBarColor } 
        `;
            const navBarStyle = `
        height:${wx.db.navBarHeight}px;
        background-color: ${ this.data.navBarColor };
        color: ${ this.data.title_color };
        `;

            this.setData({ statusBarStyle, navBarStyle })


        },

    },

})
<template>
    <div>
    <div class="recommend-title">For your weekend!</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key= "item.id">
            <div class='item-img-wrapper'>
                <img class="item-img" :src="item.imgUrl"/>
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
    // data () {
    //     return {
    //     recommendList: [{
    //         id: '001',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
    //         title: 'Countryside',
    //         desc: 'Place to Relax!!'
    //     },
    //     {
    //         id: '002',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
    //         title: 'Zoo',
    //         desc: 'Zebras, Monkeys and Koala '
    //     },
    //     {
    //         id: '003',
    //         imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
    //         title: 'Garden',
    //         desc: 'Enjoy!!'
    //     }
    //     ]
    //     }
    // }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        line-height .2rem
        background #eee
        padding .3rem 0
        tex-text-indent .2rem
        font-size .4rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
        .item-desc
            line-height .44rem
            font-size .32rem
            color #ccc
            ellipsis()
        .item-button
            background #ff9300
            padding 0 .5rem
            border-radius .06rem
            margin-top .16rem
            color #fff
</style>

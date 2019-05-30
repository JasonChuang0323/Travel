<template>
    <div>
    <div class="recommend-title">Where to play?</div>
    <ul>
        <router-link tag="li"
         class="item border-bottom"
          v-for="item of list"
         :key= "item.id"
           :to= "'/detail/' + item.id">
                <img class="item-img" :src="item.imgUrl"/>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">Detail</button>
            </div>
        </router-link>
    </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
    // data () {
    //     return {
    //     recommendList: [{
    //         id: '001',
    //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
    //         title: 'Gold Coast Sea World',
    //         desc: 'Enjoy your holiday with sea animals!!'
    //     },
    //     {
    //         id: '002',
    //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ea/ea459039354370daa3.img.jpg_200x200_8c51fc3d.jpg',
    //         title: 'Eiffel Tower',
    //         desc: 'Romantic place. '
    //     },
    //     {
    //         id: '003',
    //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
    //         title: 'Amusement park',
    //         desc: 'Playing rollar coaster with your friend!!'
    //     }
    //     ]
    //     }
    // }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margintop .2rem
        line-height .4rem
        background #eee
        padding .3rem 0
        tex-text-indent .2rem
        font-size .4rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
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

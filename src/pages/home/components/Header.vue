<template>
    <div class='header'>
        <div class = "header-left">
        <span class= "iconfont back-icon">&#xe633; </span>
        </div>
        <div class="header-input">
            <span class= "iconfont">&#xe611; </span>
            Favourite Country/City
        </div>
        <router-link to='/city'>
        <div class="header-right">
            {{this.city}}
        <span class= "iconfont down">&#xe64a; </span>
        </div>
        </router-link>
    </div>

</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
    }
}
</script>
//  1rem = 50px in html using stylus
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
    .header
        display : flex
        line-height :.86rem
        background : $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align :center
                margin-left :.2rem
                font-size :.4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top : .12rem
            margin-left : .2rem
            padding-left : .2rem
            background :#fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width 1.4rem
            padding 0 0.05rem
            margin-left: .05rem
            width:1.24rem
            float: right
            text-align center
            color #fff
            .down
                font-size :.25rem

</style>

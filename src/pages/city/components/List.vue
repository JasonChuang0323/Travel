<template>
    <div class='list' ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom"> Current city</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}} </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">Popular city</div>
                <div class="button-list">
                    <div class="button-wrapper"
                     v-for = 'item of hot'
                      :key='item.id'
                      @click='handleClick(item.name)'
                     >
                        <div class="button">{{item.spell}} </div>
                    </div>
                </div>
            </div>
            <div
            class="area" v-for="(item, index) of cities"
            :key='index'
            :ref='index'
            >
                <div class="title border-topbottom"> {{index}}</div>
                <div class='item-list'>
                    <div
                        class='item border-bottom'
                        v-for='city of item'
                        :key='city.id'
                        @click='handleClick(city.spell)'
                    >
                        {{city.spell}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'Citylist',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    methods: {
        handleClick (city) {
            // this.$store.commit('changeCityName', city)
            this.changeCityName(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCityName'])
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                // let scroll to this DOM
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    border-bottom
        &:before
            border-color: #ccc
    .list
        position absolute
        overflow hidden
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left 0.2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                width 33.33%
                float left
                .button
                    padding .05rem 0
                    text-align center
                    margin .1rem
                    border .02rem solid #ccc
                    border-radius .02rem
        .item-list
            .item
                line-height .76rem
                color #666
                padding-left .2rem
</style>

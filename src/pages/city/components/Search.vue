<template>
    <div>
        <div class='search'>
            <input v-model="keyword" type="text" placeholder="Input city name" class="search-input"/>
        </div>
        <div class="search-content" ref = 'search' v-show='keyword'>
            <ul>
                <li class = 'serach-item border-bottom'
                v-for = 'item of list'
                :key = "item.id"
                @click='handleClick(item.spell)' >{{item.spell}}</li>
                <li class = 'serach-item border-bottom' v-show = 'hasNoData'
                 >No result match</li>
            </ul>
        </div>
    </div>

</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: 'Search',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    methods: {
        handleClick (city) {
            this.$store.commit('changeCityName', city)
            this.$router.push('/')
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color: #666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .serach-item
            line-height .62rem
            padding-left .2rem
            background #fff
            color #666
</style>

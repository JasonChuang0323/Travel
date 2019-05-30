<template>
    <div>
        <Banner
        :sightName='sightName'
        :bannerImg='bannerImg'
        :gallaryImgs='gallaryImgs'
        ></Banner>
        <DetailHeader></DetailHeader>
        <div class='content'>
            <DetailList :list='list'></DetailList>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        Banner,
        DetailHeader,
        DetailList
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json?id=' + this.$route.params.id)
            .then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>
<style lang='stylus' scoped>
    .content
        height 50rem
</style>

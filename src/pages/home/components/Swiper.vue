<template>
    <div class='wrapper'>
      <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swipe-image" :src="item.imgUrl"
        />
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: true,
                speed: 1300

            },
            swiperList: [{
                id: '01',
                imgUrl: 'https://imgs.qunarzz.com/p/tts1/1508/f5/d39a001a272e3c.jpg_r_480x320x90_ab6add13.jpg'
            }, {
                id: '02',
                imgUrl: 'https://imgs.qunarzz.com/p/tts5/1611/bb/def5b583d00df802.jpg_r_480x320x90_0bd9cd2e.jpg'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom :35.25%

    .swipe-image
        height 150px
        width 100%
</style>

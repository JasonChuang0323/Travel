<template>
    <div class='header'>
        Choose City
        <router-link to='/'>
        <div class= "iconfont back-icon">&#xe633; </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Choosecity'
}
</script>
<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .4rem
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>

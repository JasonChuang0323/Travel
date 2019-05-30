<template>
    <div>
    <CityHeader></CityHeader>
    <CitySearch :cities= 'cities'></CitySearch>
    <CityList :cities= 'cities' :hot="hotCities" :letter="letter"></CityList>
    <Alphabet
    :cities= 'cities'
    @change='handleletterClick'
    ></Alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleletterClick (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang='stylus' scoped>

</style>

/* eslint-disable */
export default {
    changeCityName (state, city) {
        state.city = city
        try {
            localStorage.city = city
        }catch(e){}      
    }
}
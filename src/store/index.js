import Vue from 'vue'
import Vuex from 'vuex'


import header from './modules/header'
import calcTool from './modules/calc-tool'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        header,
        calcTool
    }
})
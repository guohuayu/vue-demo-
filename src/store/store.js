/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
//import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({     //此处S是大写
    state:{
        name:'郭桦宇',
        inputValue:'111',
        userC:'我是userC',
        userD:'我是user D'
    },
    getters:{
        getname(state){
            return state.name
        },
         
    },
    mutations:{
        setuserC(state,name){
            state.userC=name
        },
        setuserD(state,name){
            state.userD=name
        },
        setname(state,name){
            state.name=name
        }
    },
    actions:{
        setuserA({commit},name){
            commit('setuserD',name)
        },
        setname({commit},name){
            commit('setname',name)
        }
    }       
})


 
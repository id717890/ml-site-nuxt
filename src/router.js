import Vue from 'vue' // импортируем вью
import Router from 'vue-router' // импортируем роутер
import Home from '@/views/Home'
import Pozhalujsta from '@/views/Pozhalujsta'

Vue.use(Router) //регистрируем роутер как плагин

export default new Router({ // экспортируем по дефолту новый экземпляр класса Router
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/pozhalujsta',
            component: () => import('./views/Pozhalujsta.vue')
        },
    ]
})
import Vue from 'vue' // импортируем вью
import Router from 'vue-router' // импортируем роутер
import Home from '@/views/Home'
import Pozhalujsta from '@/views/Pozhalujsta'
import M5Bonus from '@/views/M5Bonus'
import SladkoezhkamVezet from '@/views/SladkoezhkamVezet.vue'
import Approval from '@/views/Approval.vue'

Vue.use(Router) //регистрируем роутер как плагин

export default new Router({ // экспортируем по дефолту новый экземпляр класса Router
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/pozhalujsta',
            component: () => import('./views/Pozhalujsta.vue')
        },
        {
            path: '/m5_bonus',
            component: () => import('./views/M5Bonus.vue')
        },
        {
            path: '/sladkoezhkam_vezet',
            component: () => import('./views/SladkoezhkamVezet.vue')
        },
        {
            path: '/approval',
            component: () => import('./views/Approval.vue')
        },
    ]
})
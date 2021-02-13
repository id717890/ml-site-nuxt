<template>
    <main>
        <UnifiedPlatform />
        
        <OurPartners
            v-bind:items="items"
        />
            <router-link to="/pozhalujsta">Page 1</router-link>

    </main>
</template>



<script>

import UnifiedPlatform from '@/components/UnifiedPlatform.vue'
import OurPartners from '@/components/OurPartners.vue'

export default {
  name: 'App',
  data() {
    return {
      items: [
        {id: 1, titile: 'Пожалуйста', description: 'Коалиционная программа', link: '#1', image: '#'},
        {id: 2, titile: 'M5 BONUS', description: 'Торговый центр', link: '#2', image: '#'},
        {id: 3, titile: 'Сладкоежкам везет', description: 'Розничная сеть', link: '#3', image: '#'}
      ]
    }
  },
  components: {
    UnifiedPlatform,
    OurPartners
  }
}
</script>
<template>
    <main>
        <UnifiedPlatform />
        
        <OurPartners
            v-bind:items="items"
        />
        <Convenient />
        <PopularTemplates />
        <Algorithms/>
        <ForYou />
            <router-link to="/pozhalujsta">Page 1</router-link>

    </main>
</template>



<script>

import UnifiedPlatform from '@/components/UnifiedPlatform.vue'
import OurPartners from '@/components/OurPartners.vue'
import Convenient from '@/components/Convenient.vue'
import PopularTemplates from '@/components/PopularTemplates.vue'
import Algorithms from '@/components/Algorithms.vue'
import ForYou from '@/components/ForYou.vue'

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
    OurPartners,
    Convenient,
    PopularTemplates,
    Algorithms,
    ForYou
  }
}
</script>
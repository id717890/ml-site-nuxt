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
        <Connections />
        <Pricing />
        <TechnologyFriends />

        
        
            <!-- <router-link to="/pozhalujsta/">Page 1</router-link> -->

    </main>
</template>



<script>

import UnifiedPlatform from '@/components/UnifiedPlatform.vue'
import OurPartners from '@/components/OurPartners.vue'
import Convenient from '@/components/Convenient.vue'
import PopularTemplates from '@/components/PopularTemplates.vue'
import Algorithms from '@/components/Algorithms.vue'
import ForYou from '@/components/ForYou.vue'
import Connections from '@/components/Connections.vue'
import TechnologyFriends from '@/components/TechnologyFriends.vue'
import Pricing from '@/components/Pricing.vue'



export default {
  name: 'App',
  data() {
    return {
      items: [
        {id: 1, titile: 'Пожалуйста', description: 'Коалиционная программа', link: '/pozhalujsta/', image: 'please.png'},
        {id: 2, titile: 'M5 BONUS', description: 'Торговый центр', link: '/m5_bonus/', image: 'm5.png'},
        {id: 3, titile: 'Сладкоежкам везет', description: 'Розничная сеть', link: '/sladkoezhkam_vezet/', image: 'medoboryi.png'}
      ]
    }
  },
  components: {
    UnifiedPlatform,
    OurPartners,
    Convenient,
    PopularTemplates,
    Algorithms,
    ForYou,
    Connections,
    TechnologyFriends,
    Pricing

  }
}
</script>
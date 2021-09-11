<template>
  <div>
    <!-- <IndexPageMobile class="index-page-mobile" /> -->
    <component
      :is="block.component"
      v-for="block in blocks"
      :key="block.id"
      class="index-page-not-mobile"
      :settings="block"
    ></component>
    <component
      :is="block.component"
      v-for="block in blocksMobile"
      :key="block.id"
      class="index-page-mobile"
      :settings="block"
    ></component>
    <IndexingLinks />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cloneDeep } from 'lodash'
import MainDefault from '~/components/IndexBlock/Main/Default'
import PartnersDefault from '~/components/IndexBlock/Partner/Default'
import PartnersTabAndTag from '~/components/IndexBlock/Partner/TabAndTag'
import SliderAnd4ImageDefault from '~/components/IndexBlock/SliderAnd4Image/Default'
import ConvenientDefault from '~/components/IndexBlock/Convenient/Default'
import TemplateDefault from '~/components/IndexBlock/Template/Default'
import AlgorithmDefault from '~/components/IndexBlock/Algorithm/Default'
import AdvertisingDefault from '~/components/IndexBlock/Advertising/Default'
import ConnectionDefault from '~/components/IndexBlock/Connection/Default'
import PricingDefault from '~/components/IndexBlock/Pricing/Default'
import PricingSecond from '~/components/IndexBlock/Pricing/Second'
import PricingThird from '~/components/IndexBlock/Pricing/Third'
import FriendDefault from '~/components/IndexBlock/Friend/Default'
import FriendSecond from '~/components/IndexBlock/Friend/Second'
import TechDefault from '~/components/IndexBlock/Tech/Default'
import IndexPageMobile from '~/components/IndexBlock/Mobile/Index.vue'
import MainMobileDefault from '~/components/IndexBlock/Mobile/components/Main.vue'
import NavBtnsMobileDefault from '~/components/IndexBlock/Mobile/components/NavBtns.vue'
import FunctionAndConnectionMobielDefault from '~/components/IndexBlock/Mobile/components/FunctionAndConnection.vue'
import PartnerMobileDefault from '~/components/IndexBlock/Partner/Mobile/Default.vue'
import IndexingLinks from '~/components/IndexingLinks.vue'
export default {
  name: 'HomePage',
  components: {
    MainDefault,
    PartnersDefault,
    PartnersTabAndTag,
    SliderAnd4ImageDefault,
    ConvenientDefault,
    TemplateDefault,
    AlgorithmDefault,
    AdvertisingDefault,
    ConnectionDefault,
    PricingDefault,
    PricingSecond,
    PricingThird,
    FriendDefault,
    FriendSecond,
    TechDefault,
    IndexingLinks,
    IndexPageMobile,
    MainMobileDefault,
    NavBtnsMobileDefault,
    FunctionAndConnectionMobielDefault,
    PartnerMobileDefault,
  },
  scrollToTop: false,
  head() {
    return {
      title: 'Больше чем система лояльности!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'desc: Больше чем система лояльности!',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      config: (state) => state?.app?.config,
    }),
    blocksMobile() {
      const buffer = cloneDeep(this.config?.indexBlocksMobile)
      buffer?.sort((a, b) => {
        if (a?.order < b?.order) {
          return -1
        }
        if (a?.order > b?.order) {
          return 1
        }
        return 0
      })
      return buffer?.map((x) => {
        // x.component = null
        x.component = `${x.name}${x.style}`
        return x
      })
    },
    blocks() {
      const buffer = cloneDeep(this.config?.indexBlocks)
      buffer?.sort((a, b) => {
        if (a?.order < b?.order) {
          return -1
        }
        if (a?.order > b?.order) {
          return 1
        }
        return 0
      })
      return buffer?.map((x) => {
        // x.component = null
        x.component = `${x.name}${x.style}`
        return x
      })
    },
  },
  mounted() {
    // console.log(this.blocks)
  },
}
</script>

<style lang="scss">
// .index-page-mobile {
// }

// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 0) and (max-width: 767.98px) {
  .index-page-mobile {
    display: block;
  }

  .index-page-not-mobile {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 768px) {
  .index-page-mobile {
    display: none;
  }

  .index-page-not-mobile {
    display: block;
  }
}
</style>

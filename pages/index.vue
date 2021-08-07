<template>
  <div>
    <nuxt-link
      class="d-none"
      to="/коалиционная-программа-лояльности-пожалуйста.html"
      title="коалиционная программа лояльности пожалуйста"
    >
      ref1
    </nuxt-link>
    <nuxt-link
      class="d-none"
      to="/программа-лояльности-m5-bonus.html"
      title="программа лояльности M5 bonus"
      >ref2</nuxt-link
    >
    <nuxt-link
      class="d-none"
      to="/программа-лояльности-сладкоежкам-везёт.html"
      title="программа лояльности сладкоежкам везёт"
    >
      ref3
    </nuxt-link>
    <component
      :is="block.component"
      v-for="(block, index) in blocks"
      :key="index"
      :settings="block"
    ></component>
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
import FriendDefault from '~/components/IndexBlock/Friend/Default'
import TechDefault from '~/components/IndexBlock/Tech/Default'
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
    FriendDefault,
    TechDefault,
  },
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

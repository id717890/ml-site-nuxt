<template>
  <MlPartnerDetail v-if="details" :settings="details" />
</template>

<script>
import { mapState } from 'vuex'
import MlPartnerDetail from '~/components/MlPartnerDetail/Default.vue'
const PARTNERS = 'PARTNERS'
export default {
  name: 'PartnerPage',
  components: {
    MlPartnerDetail,
  },
  async asyncData({ store, route }) {
    const config = store?.state?.app?.config
    // console.log(config)
    if (!config) return
    const findBlock = config?.indexBlocks.find(
      (x) => x?.name?.toLowerCase() === PARTNERS?.toLowerCase()
    )
    if (!findBlock) return
    // prettier-ignore
    // eslint-disable-next-line
    const findPartner = findBlock?.partners?.find((x) => x?.id == route?.params?.id)
    return {
      currentPartner: findPartner,
    }
  },
  head() {
    return {
      title:
        this.currentPartner?.details?.title1 || 'Система лояльности MLoyalty!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.currentPartner?.details?.title1 +
              ' ' +
              this.currentPartner?.details?.businessName ||
            `desc: Партнер №${this.id}`,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      config: (state) => state?.app?.config,
    }),
    id() {
      return this.$route?.params?.id
    },
    details() {
      // if (!this.config) return
      // const findBlock = this.config?.indexBlocks.find(
      //   (x) =>
      //     x?.name?.toLowerCase() ===
      //     this.$const?.BLOCKS?.PARTNERS?.toLowerCase()
      // )
      // if (!findBlock) return
      // // eslint-disable-next-line eqeqeq
      // const findPartner = findBlock?.partners?.find((x) => x?.id == this.id)
      return this.currentPartner
    },
  },
  mounted() {
    console.log(this.details?.details?.title1)
  },
}
</script>

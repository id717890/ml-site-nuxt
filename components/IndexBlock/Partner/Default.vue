<template>
  <section class="result">
    <div class="container-old ml-container">
      <div class="title_1">Нам доверяют и получают результат</div>

      <div class="block_partners flex">
        <div
          v-for="partner in showedPartners"
          :key="partner.id"
          style="flex-grow: 0 !important"
          class="item flex"
        >
          <div class="image">
            <nuxt-link
              :to="'/partner/' + partner.id"
              class="img_link"
              title="Подробнее"
              rel="nofollow"
            >
              <img :src="partner.image" :alt="partner.title" class="img" />
            </nuxt-link>
          </div>
          <div class="name">
            <nuxt-link
              :to="'/partner/' + partner.id"
              class="item_title"
              title="Подробнее"
            >
              {{ partner.title }}
            </nuxt-link>
            <!-- <router-link :to="item.link" class="item_title" title="Подробнее">{{item.titile}}</router-link> -->
          </div>
          <div class="desc">
            {{ partner.description }}
          </div>
          <!-- <router-link :to="item.link" class="link btn bg_tr" title="Подробнее" rel="nofollow">Подробнее</router-link> -->
        </div>
        <!-- <OurPartnersItem v-for="item of items" :item="item" /> -->
      </div>
      <div v-if="isShowMore" class="midle_btn back_link my-0 mt-3">
        <a
          href="#"
          title="Показать еще"
          class="link_line"
          @click.prevent="showMorePartners"
        >
          Показать еще
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerBlockDefault',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    showItems: 3,
  }),
  computed: {
    partners() {
      return this.settings?.partners
    },
    showedPartners() {
      if (this.partners?.length <= this.showItems) {
        return this.partners
      }
      return this.partners?.slice(0, this.showItems)
    },
    defaults() {
      return this.settings?.defaults
    },
    isShowMore() {
      return this.partners?.length > this.showItems
    },
  },
  mounted() {
    // console.log(this.partners)
    this.setInitialize()
  },
  methods: {
    showMorePartners() {
      this.showItems += this.showItems
    },
    setInitialize() {
      const { showItems } = this.defaults
      if (showItems) {
        this.showItems = showItems
      }
    },
  },
}
</script>

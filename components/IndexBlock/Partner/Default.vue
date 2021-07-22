<template>
  <section class="result">
    <div class="container ml-container">
      <div class="title_1">Нам доверяют и получают результат</div>

      <div class="block_partners flex">
        <div
          v-for="partner in partners"
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
              <img
                :src="'/img/' + partner.image"
                :alt="partner.title"
                class="img"
              />
            </nuxt-link>
            <!-- <router-link :to="item.link"  class="img_link" title="Подробнее" rel="nofollow">
                <img :src="'/img/' + item.image" v-bind:alt="item.titile"  class="img">
            </router-link> -->
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
    </div>
  </section>
  <!-- <div class="item flex">
    <div class="image">
      <a
        :href="item.link"
        class="img_link"
        title="Подробнее"
        rel="nofollow"
      >
        <img :src="'/img/' + item.image" :alt="item.titile" class="img" />
      </a>
    </div>
    <div class="name">
      <router-link :to="item.link" class="item_title" title="Подробнее">{{
        item.titile
      }}</router-link>
    </div>
    <div class="desc">
      {{ item.description }}
    </div>
    <router-link
      :to="item.link"
      class="link btn bg_tr"
      title="Подробнее"
      rel="nofollow"
      >Подробнее</router-link
    >
  </div> -->
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
  computed: {
    partners() {
      return this.settings?.partners
    },
  },
  mounted() {
    // console.log(this.partners)
  },
}
</script>

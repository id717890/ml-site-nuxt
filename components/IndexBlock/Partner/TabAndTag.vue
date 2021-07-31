<template>
  <section class="result">
    <div class="container ml-container">
      <div class="title_1">Нам доверяют и получают результат</div>
      <div
        v-if="tags"
        class="partner-filter-tag container ml-container v-application"
      >
        <a
          v-for="tag in tags"
          :key="tag.id"
          href="#"
          class="btn-tag mr-4"
          :title="tag.name"
          :class="{ active: tag.selected }"
          @click.prevent="selectTag(tag)"
        >
          <!-- <Fa v-if="tag.selected" icon="tag" class="mr-1" /> -->
          {{ tag.name }}
        </a>
        <v-btn title="Сбросить фильтры" icon @click="clearFilter">
          <fa icon="redo" />
        </v-btn>
        <!-- <v-btn
          v-for="tag in tags"
          :key="tag.id"
          :outlined="!tag.selected"
          :depressed="!tag.selected"
          class="mr-2"
          :color="!tag.selected ? '' : 'primary'"
          @click="selectTag(tag)"
        >
          <Fa icon="tag" class="mr-1" />
          {{ tag.name }}
        </v-btn> -->
      </div>

      <div class="block_partners flex mt-5">
        <div
          v-for="partner in showedPartners"
          :key="partner.id"
          style="flex-grow: 0 !important"
          class="item flex"
        >
          <div class="image">
            <div v-if="partner.special" class="special-tags v-application">
              <v-btn
                v-for="tag in partner.special"
                :key="tag.color"
                class="mr-1 white--text"
                elevation="0"
                :color="tag.color"
                small
                >{{ tag.text }}</v-btn
              >
            </div>
            <a
              href="#"
              class="img_link"
              title="Подробнее"
              rel="nofollow"
              @click.prevent="openInfo(partner)"
            >
              <img :src="partner.image" :alt="partner.title" class="img" />
            </a>
          </div>
          <div class="name">
            <a
              href="#"
              class="item_title"
              title="Подробнее"
              @click.prevent="openInfo(partner)"
            >
              {{ partner.title }}
            </a>
            <!-- <router-link :to="item.link" class="item_title" title="Подробнее">{{item.titile}}</router-link> -->
          </div>
          <div class="desc">
            {{ partner.description }}
          </div>
          <a
            href="#"
            class="link btn bg_tr"
            title="Подробнее"
            rel="nofollow"
            @click.prevent="openInfo(partner)"
            >Подробнее</a
          >
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
import PartnerInfoModal from './components/ModalInfo.vue'

export default {
  name: 'PartnerBlockTabAndTag',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    showItems: 3,
    tags: [],
  }),
  computed: {
    partners() {
      return this.settings?.partners
    },
    selectedTags() {
      return this.tags
        ?.filter((tag) => tag.selected)
        ?.map((tag) => tag?.name?.toLowerCase())
    },
    partnersByTags() {
      if (!this.selectedTags?.length) return this.partners
      return this.partners?.filter((partner) =>
        partner?.tags?.some((x) =>
          this.selectedTags?.includes(x?.toLowerCase())
        )
      )
    },
    showedPartners() {
      if (this.partnersByTags?.length <= this.showItems) {
        return this.partnersByTags
      }
      return this.partnersByTags?.slice(0, this.showItems)
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
    clearFilter() {
      const result = []
      this.tags.forEach((tag) => {
        tag.selected = false
        result.push(tag)
      })
      this.$set(this, 'tags', result)
    },
    openInfo(partner) {
      console.log(partner)
      this.$modal.show(
        PartnerInfoModal,
        {
          content: partner?.content,
        },
        {
          ...this.$const.MODAL_SETTINGS,
          maxWidth: 760,
          width: 760,
          clickToClose: false,
        }
      )
    },
    selectTag(tag) {
      const find = this.tags?.find((x) => x?.id === tag?.id)
      if (find) {
        const indexOf = this.tags.indexOf(find)
        if (indexOf >= 0) {
          this.tags?.splice(indexOf, 1, {
            id: tag?.id,
            name: tag?.name,
            selected: !tag?.selected,
          })
        }
      }
    },
    showMorePartners() {
      this.showItems += this.showItems
    },
    setInitialize() {
      const { showItems } = this.defaults
      if (showItems) {
        this.showItems = showItems
      }
      this.initTags()
    },
    initTags() {
      const tags = this.settings?.defaults?.tags
      if (!tags || !tags.length) return
      this.tags = tags.map((tag, index) => ({
        name: tag,
        id: index,
        selected: false,
      }))
    },
  },
}
</script>

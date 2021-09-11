<template>
  <section v-if="settings" class="technology technology-mobile px-4 pt-0">
    <div class="ml-text-28-700 mb-2">{{ settings.title1 }}</div>
    <div v-if="tags" class="friend-filter-tag-mobile v-application">
      <a
        v-for="tag in tags"
        :key="tag.id"
        href="#"
        class="btn-tag me-2 mb-2"
        :title="tag.name"
        :class="{ active: tag.selected }"
        @click.prevent="selectTag(tag)"
      >
        {{ tag.name }}
      </a>
      <!-- <v-btn title="Сбросить фильтры" icon @click="clearFilter(true)">
        <fa icon="redo" />
      </v-btn> -->
    </div>
    <div class="v-application">
      <div v-if="friendsByTags" class="tabs-wrapper">
        <div class="technology_flex px-0 justify-content-around">
          <div
            v-for="(friend, index) in friendsByTags"
            :key="index"
            class="item"
          >
            <div v-if="friend.tags" class="tags v-application">
              <v-btn
                v-for="tag in friend.tags"
                :key="tag.color"
                class="tag mr-1 white--text text-lowercase py-0"
                height="22"
                elevation="0"
                :color="tag.color"
                small
              >
                {{ tag.name }}
              </v-btn>
            </div>
            <img
              :src="friend.image"
              alt="Наши технологические друзья"
              :style="friend.style"
              :title="friend.name"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FriendMobileBlockDefault',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    tags: [
      { name: 'Кассы и Cms', id: 1, selected: true },
      { name: 'Рассылки и боты', id: 2, selected: false },
      { name: 'Платежи', id: 3, selected: false },
      { name: 'Crm', id: 4, selected: false },
      { name: 'Другие', id: 5, selected: false },
    ],
  }),
  computed: {
    friends() {
      if (!this.settings || !this.settings?.items) return []
      return this.settings?.items
    },
    selectedTags() {
      return this.tags
        ?.filter((tag) => tag.selected)
        ?.map((tag) => tag?.name?.toLowerCase())
    },
    friendsByTags() {
      if (!this.selectedTags?.length) {
        // const result = []
        // this.friends.forEach((friend) => {
        //   result.concat(friend.items)
        // })
        return this.friends[0].items
        // return this.friends.reduce(
        //   (result, item) => result.concat(item.items),
        //   []
        // )
        // return []
      }
      return this.friends.find(
        (x) => x?.name?.toLowerCase() === this.selectedTags[0]
      )?.items
      // console.log(2)
      // let result = []
      // this.selectedTags.forEach((tag) => {
      //   console.log(tag)
      //   const find = this.friends.find(
      //     (x) => x.name.toLowerCase() === tag.toLowerCase()
      //   )
      //   console.log(find)
      //   if (find && find?.items?.length) {
      //     result = result.concat(find.items)
      //   }
      // })
      // return result
      // return this.friends?.filter((friend) =>
      //   friend?.tags?.some((x) =>
      //     this.selectedTags?.includes(x?.toLowerCase())
      //   )
      // )
    },
  },
  mounted() {
    // console.log('mount', this.settings)
    this.setInitialize()
  },
  created() {
    // console.log('create', this.settings)
  },
  methods: {
    selectTag(tag) {
      this.clearFilter()
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
    clearFilter(def = false) {
      const result = []
      this.tags.forEach((tag, index) => {
        tag.selected = def ? index === 0 : false
        result.push(tag)
      })
      this.$set(this, 'tags', result)
    },
    initTags() {
      this.$set(
        this,
        'tags',
        this.settings?.items?.map((tag, index) => {
          return {
            name: tag.name,
            id: index,
            selected: index === 0,
          }
        })
      )
    },
    // setArrowsForTabs() {
    //   const elPrev = document.querySelector('.v-slide-group__prev')
    //   const elNext = document.querySelector('.v-slide-group__next')
    //   if (elPrev) {
    //     elPrev.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class=""></path></svg>`
    //   }
    //   if (elNext) {
    //     elNext.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>`
    //   }
    // },
    setInitialize() {
      // setTimeout(() => {
      //   this.setArrowsForTabs()
      // }, 500)
      // setTimeout(() => {
      // this.initTags()
      // }, 1000)
      // setTimeout(() => {
      // this.$forceUpdate()
      // }, 1500)
    },
  },
}
</script>

<style lang="scss" scoped>
// .technology_flex {
// padding: 15px;
// }

.technology_flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 13px 0 55px;
  justify-content: center;
  padding-left: 14px;
  padding-right: 14px;

  img {
    max-width: 110px;
  }

  .item {
    padding: 20px;
    position: relative;

    .tags {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
    }
  }
}

.technology-mobile {
  .item {
    width: 150px;
  }
}

.friend-filter-tag-mobile {
  .btn-tag.active {
    background: linear-gradient(
      270deg,
      #ff5766 0%,
      #ff856f 100%,
      #ff856f 100%
    ) !important;
    color: white !important;
  }
}
</style>

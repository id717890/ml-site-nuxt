<template>
  <section v-if="settings" class="technology">
    <div class="container-old">
      <div class="title_2">{{ settings.title1 }}</div>
      <div class="description">{{ settings.title2 }}</div>
      <div class="flex technology_flex px-0">
        <div
          v-for="(friend, index) in settings.items"
          :key="index"
          :class="'item item_' + friend.id"
        >
          <img :src="friend.image" alt="Наши технологические друзья" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FriendBlockDefault',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
}
</script>

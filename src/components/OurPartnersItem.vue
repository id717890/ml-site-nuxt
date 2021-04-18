<template>
    <div class="item flex">
        <div class="image">
            <!-- <a :href="item.link" class="img_link" title="Подробнее" rel="nofollow"> -->
                <!-- <img src="../assets/img/medoboryi.png" alt="" class="img"> -->
                <!-- <img :src="item.image" alt="" class="img"> -->
            <router-link :to="item.link"  class="img_link" title="Подробнее" rel="nofollow">
                <img :src="'/img/' + item.image" v-bind:alt="item.titile"  class="img">
            </router-link>
            <!-- </a> -->
        </div>
        <div class="name">
            <router-link :to="item.link" class="item_title" title="Подробнее">{{item.titile}}</router-link>
        </div>
        <div class="desc">
            {{item.description}}
        </div>
        <router-link :to="item.link" class="link btn bg_tr" title="Подробнее" rel="nofollow">Подробнее</router-link>
    </div>
</template>



<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

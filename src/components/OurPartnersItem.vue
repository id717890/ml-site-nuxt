<template>
    <div class="item flex">
        <div class="image">
            <a href="#" class="img_link" title="Подробнее" rel="nofollow">
                <img src="../assets/img/medoboryi.png" alt="" class="img">
            </a>
        </div>
        <div class="name">
            <a href="#" class="item_title" title="Подробнее">{{item.titile}}</a>
        </div>
        <div class="desc">
            {{item.description}}
        </div>
        <a href="#" class="link btn bg_tr" title="Подробнее" rel="nofollow">Подробнее</a>
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
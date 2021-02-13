<template>
    <section class="result">
        <div class="container ">
            <div class="title_1">Нам доверяют и получают результат</div>

            <div class="block_partners flex">
                <OurPartnersItem 
                    v-for="item of items"
                    v-bind:item="item"
                />
            </div>
        </div>
    </section>
</template>

<script>
import OurPartnersItem from '@/components/OurPartnersItem'
export default {
    props: ['items'],
    components: {
        OurPartnersItem
    }
}
</script>
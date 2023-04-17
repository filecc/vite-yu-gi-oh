<template>
    <div v-if="card">
        <div @click="setSelecttedCardID()" class="card mx-auto" style="width: 13rem;">
            <img :src="card.card_images[0].image_url" class="card-img-top img-fluid" alt="...">
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    data(){
        return {
            cardID : this.id,
        }
    },
    props: {
        card: Object,
        id: Number,
    },
    methods: {
        setSelecttedCardID(){
            store.cardSelectedId = this.cardID;
            store.showDetails = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    width: 13rem;
    @media screen and (max-width: 500px) {
        width: 16rem;
    }
    cursor: pointer;
}
</style>
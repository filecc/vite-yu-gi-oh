<template>
    <div v-if="!store.loading" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gx-0">
         
        <div class="col p-1" v-for="card in store.cardsList">
            <SingleCard :card="card" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';
    export default {
    data() {
        return {
            store,
        };
    },
    components: { SingleCard }
}
</script>

<style lang="scss" scoped>

</style>
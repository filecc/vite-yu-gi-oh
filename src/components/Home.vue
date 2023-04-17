<template>
   <AppHeader />
   <div class="pt-5">
    <div v-if="store.loading">
      <Loader />
    </div>
    <div v-else>
      <CardList />
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import AppHeader from './AppHeader.vue';
import CardList from './CardList.vue';
import Loader from './Loader.vue';

    export default {
        data(){
            return {
                store,
            }
        },
    components: { AppHeader, Loader, CardList }
}
</script>

<style lang="scss" scoped>

</style>
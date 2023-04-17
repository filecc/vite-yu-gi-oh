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
import { store } from './store';
import axios from 'axios';
import Loader from './components/Loader.vue';
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    Loader,
    AppHeader,
    CardList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getAllCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(res => {
          store.cardsList = res.data.data;
          store.loading = false;
          this.getAllArchetypes();
        })
    },
    getAllArchetypes() {
      const allArchetypes = [];
      store.cardsList.forEach(element => {
        if (!allArchetypes.includes(element.archetype) && element.archetype != undefined) {
          allArchetypes.push(element.archetype);
        }
      });
      store.archetypes = allArchetypes;
      console.log(store.cardsList);
    }
  },
  mounted() {
    this.getAllCards();

  }
}
</script>

<style lang="scss" scoped></style>
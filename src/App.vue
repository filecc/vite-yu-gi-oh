<template>
  <Home />
</template>

<script>
import { store } from './store';
import axios from 'axios';
import Home from './components/Home.vue';
import CardDetail from './components/CardDetail.vue';


export default {
  components: {
    Home
},
  data() {
    return {
      store,
      
    }
  },
  methods: {
    getAllCards() {
      axios.get(store.URL)
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
  },
  
}
</script>

<style lang="scss" scoped></style>
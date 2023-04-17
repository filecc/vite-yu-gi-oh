<template>
    <header>
        <div class="container">
            <div class="p-2">
                <h1 class="text-center h4">Yu-Gi-Oh Decks</h1>
            </div>
            <div class="row" v-if="store.archetypes">
                <div class="col-12 col-sm-5 col-md-4 mx-auto">
                    <select @change="event => changeArchetype(event)" class="form-select" name="archetypesSelect"
                        id="archetypesSelect">
                        <option value="all">ALL</option>
                        <option v-for="item in store.archetypes.sort()"
                            :value="item">{{ item.toUpperCase() }}</option>
                    </select>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        changeArchetype(e) {
            store.loading = true;
            if (e.target.options.selectedIndex >= 0) {
                if (e.target.options[e.target.options.selectedIndex].value != 'all') {
                    store.URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${e.target.options[e.target.options.selectedIndex].value}`;
                    axios.get(store.URL)
                        .then(res => {
                            store.cardsList = res.data.data;
                            store.loading = false;
                        })
                } else {
                    store.URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
                    axios.get(store.URL)
                        .then(res => {
                            store.cardsList = res.data.data;
                            store.loading = false;

                        });
                      
                }

            }
        }
    }

}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;
    right: 0;
    background-color: white;
    padding: 1rem 0;
}
</style>
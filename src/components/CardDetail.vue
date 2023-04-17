<template>
    <div v-if="store.loading">
        <Loader />
    </div>
    <div v-else>
        <div v-if="singleCard">
            <div class="container pt-2">
                <h2 class="text-center text-md-start">Card Detail</h2>
                <div class="row">
                    <div class="col-10 col-md-4 mx-auto">
                        <div>
                            <img class="img-fluid" :src="singleCard.card_images[0].image_url" alt="">
                        </div>
                    </div>
                    <div class="col-10 col-md-8 mx-auto">
                        <div class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">Name</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.name }}</small>
                            </div>
                        </div>
                       
                        <div class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">Archetype</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.archetype }}</small>
                            </div>
                        </div>

                        <div class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">Race</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.race }}</small>
                            </div>
                        </div>

                        <div class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">Type</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.type }}</small>
                            </div>
                        </div>
                        <div class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">Description</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.desc }}</small>
                            </div>
                        </div>
                        <div v-if="singleCard.atk" class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">ATK</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.atk }}</small>
                            </div>
                        </div>
                        <div v-if="singleCard.def" class="row text-center text-md-start">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">DEF</p>
                            </div>
                            <div class="col-12 col-md-8">
                               <small>{{ singleCard.def }}</small>
                            </div>
                        </div>
                        <div v-if="singleCard.card_sets"  class="row text-center text-md-start mt-2">
                            <div class="col-12 col-md-4">
                                <p class="fw-bold m-0 p-0">SET</p>
                               
                            </div>
                            <div class="col-12 col-md-8">
                                <ul v-for="set in singleCard.card_sets" class="list-unstyled">
                                    <li>

                                            <h6 class="m-0 p-0">{{ set.set_name }}</h6>
                                            <p class="p-0 m-0" > code: {{ set.set_code }} </p>
                                            <p class="p-0 m-0" > price: {{ set.set_price }} </p>
                                            <p class="p-0 m-0" > rarity: {{ set.set_rarity }} </p>
                                        
                                        
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
               
                <div class="mt-2">
                    <button @click="() => store.showDetails = false" class="btn btn-primary">Back to list</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import Loader from './Loader.vue';
export default {
    data() {
        return {
            store,
            singleCard: null,
        };
    },
    methods: {
        getSingleCard() {
            store.loading = true;
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${store.cardSelectedId}`)
                .then(res => {
                    this.singleCard = res.data.data[0];
                    store.loading = false;
                });
                
        }
    },
    mounted() {
        this.getSingleCard();
       
    },
    components: { Loader }
}
</script>

<style lang="scss" scoped></style>
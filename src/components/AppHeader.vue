<template>
    <header>
        <div class="container">
        <div class="p-2">
            <h1 class="text-center h4">Yu-Gi-Oh Decks</h1>
        </div>
        <div class="row" v-if="!store.loading">
            <div class="col-12 col-sm-5 col-md-4 mx-auto">
                <select class="form-select" name="archetypesSelect" id="archetypesSelect">
                    <option v-for="item in store.archetypes" :value="item">{{ item.toUpperCase() }}</option>
                </select>
            </div>

        </div>
    </div>
    </header>
   
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped>
header{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    background-color: white;
    padding: 1rem 0;
}
</style>
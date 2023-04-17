import { reactive } from "vue";

export const store = reactive({
    URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardsList: null,
    archetypes: null,
    loading: true,
    archetypeSelected: 'all',
});
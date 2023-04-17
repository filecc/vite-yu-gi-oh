<template>
    <div v-if="card">
        {{ card.name }}
    </div>
</template>

<script>
import { store } from '../store';
    export default {
        data(){
            return {
                store,
            }
        },
        props: {
            card: Object,
        }
    }
</script>

<style lang="scss" scoped>

</style>
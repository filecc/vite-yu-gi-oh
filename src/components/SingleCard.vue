<template>
    <div v-if="card">
        <div class="card mx-auto" style="width: 13rem;">
            <img :src="card.card_images[0].image_url" class="card-img-top img-fluid" alt="...">
            <!-- <div class="card-body">
                <h5 class="card-title"> {{ card.name }}</h5>
                <p class="card-text">{{ card.desc }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped></style>
<template>
    <div class="HouseCard card">
        <RouterLink :to="{name: 'house', params: { houseId: house.id }}">
            <img :src="house.imgUrl" alt="house picture">
        </RouterLink>

        <div class="card-body">
            <h1>
                {{ house.bedrooms }}  {{ house.bathrooms }} {{ house.price }}
            </h1>
        </div>
        <div class="on-hover">
            <img :src="house.seller.picture" alt="house seller picture">
        </div>
    </div>
</template>

<script> 
export default {
    props:{
        house: { type: Object, required: true},
        showSeller: { type: Boolean, default: true }
    },
    setup() {

        return{}
    }
}
</script>
<style lang="scss" scoped></style>
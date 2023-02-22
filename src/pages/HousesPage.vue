<template>
  <div class="housesPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4" v-for="h in houses">
          <HouseCard :house="h" />
          <h1>cheese:{{ cheese }}</h1>
          <button @click="increaseCheese">cheese ++</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop.js';

export default {
  setup(){

async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.error(error, '[getting houses]')
  }
}
  
onMounted(() => {
  getHouses()
})
let cheese = ref(0)

return {
      increaseCheese() {
        cheese.value++
      },
      cheese,
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

<template>
  <section>
    <h2>Our cars</h2>
    <ul>
      <vehicle-list
        id="1"
        make="Ford"
        model="Kuga"
        modelYear="2016"
      ></vehicle-list>
      <vehicle-list
        id="2"
        make="Volvo"
        model="V60"
        modelYear="2019"
      ></vehicle-list>
    </ul>
  </section>
</template>

<script>
import VehicleList from './components/VehicleList.vue';
export default {
  components: { VehicleList },
  data() {
    return {
      vehicles: [
        {
          id: 1,
          make: 'Ford',
          model: 'Kuga',
          modelYear: '2016',
        },
        {
          id: 2,
          make: 'Volvo',
          model: 'V60',
          modelYear: '2019',
        },
      ],
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

body {
  font-family: 'Lato', sans-serif;
  background-color: #42b883;
}

button {
  padding: 0.5rem;
  border: none;
  outline: none !important;
  background-color: blueviolet;
  color: #fff;
  border-radius: 40px;
  cursor: pointer;
  margin-right: 0.8rem;
  min-width: 100px;
}

.input-button {
  border-radius: 0;
}

input {
  padding: 0.5rem 0.3rem;
  border: solid 1px #333;
  outline: none !important;
  border-radius: 5px;
  margin-bottom: 0.3rem;
  margin-right: 0.2rem;
}
</style>

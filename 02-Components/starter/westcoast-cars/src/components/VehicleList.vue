<template>
  <li>
    <h4>{{ vehicle.make }}</h4>
    <div>{{ vehicle.model }} - {{ vehicle.modelYear }}</div>
  </li>
</template>
<script>
export default {
  props: ['id', 'make', 'model', 'modelYear'],
  data() {
    return {
      vehicle: {
        make: 'Ford',
        model: 'Kuga',
        modelYear: '2016',
      },
    };
  },
};
</script>

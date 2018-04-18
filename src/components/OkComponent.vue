<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <p>Route context</p>
  </div>
</template>

<script>
export default {
  name: 'OkComponent',
  props: ['name'],
  data() {
    return {
      msg: 'Ok Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Montserrat'
}
</style>

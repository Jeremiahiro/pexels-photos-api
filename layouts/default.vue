<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/General/Header'
export default {
  components: { Header },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>

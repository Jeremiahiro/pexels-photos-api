<template>
  <div>
      <div class="border-b-2 border-gray-200">
      <div class="lg:w-2/3 mx-auto text-center p-2">
        <nuxt-link 
            :to="{ name: 'index'}" 
            exact 
            class="nav py-1 lg:px-2 mr-1 font-medium text-xs lg:text-lg hover:text-green-400">
          Home
        </nuxt-link>
        <nuxt-link 
            :to="{ name: 'photos' }" 
            exact 
            class="nav py-1 lg:px-2 mr-1 font-medium text-xs lg:text-lg hover:text-green-400">
          Discover
        </nuxt-link>
        <nuxt-link 
            :to="{ name: 'photos' }" 
            exact 
            class="nav py-1 lg:px-2 mr-1 font-medium text-xs lg:text-lg hover:text-green-400">
          Videos
        </nuxt-link>
        <nuxt-link 
            :to="{ name: 'photos' }" 
            exact 
            class="nav py-1 lg:px-2 mr-1 font-medium text-xs lg:text-lg hover:text-green-400">
          Leaderboard
        </nuxt-link>
        <nuxt-link 
            :to="{ name: 'photos' }" 
            exact 
            class="nav py-1 lg:px-2 mr-1 font-medium text-xs lg:text-lg hover:text-green-400">
          Challenges
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "sub-nav-menu",
}
</script>

<style>

</style>

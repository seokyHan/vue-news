<template>
  <div>
    <div v-for="(user, index) in users" :key="index"> {{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>
<style>

</style>
<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),
  //   // ...mapState({
  //   //   ask: state => state.ask
  //   // })
  // },
  // created() {
  //   this.$store.dispatch('fetchAsk')
}
</script>

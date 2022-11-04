<template>
  <div>
    <section>
      <UserProfile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${ fetchedItem.user }`">
          {{ fetchedItem.user }}
        </router-link>
        <!-- 템플릿은 태그 없이 텍스트만 들어감 -->
        <template slot="time">{{ 'posted ' + fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('fetchItem', itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
<template>
  <div>
    <ul class="item-list">
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <div class="points">
          {{ item.points || '-' }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by
            <router-link 
              v-if="item.user"
              class="link-text" :to="`/user/${item.user}`">
              {{  item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    listItems() {
      return this.$store.state.list
    }
  },
}
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  display: flex;
  align-items: center;
  width: 80px;
  height: 60px;
  justify-content: center;
  color: #42b883;
}
.item-title {
  margin: 0;
}
.link-text {
 color: #828282;
}
</style>
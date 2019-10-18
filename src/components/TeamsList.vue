<template>
  <div class="panels">
    <div class="logo">
      <img :src="`${teams.logo}`" :alt="`${teams.name}`" />
    </div>
    <div class="name">
      <router-link :to="`/team/${teams.team_id}`">
        <h2>{{teams.name}}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teams"]
};
</script>


<template>
  <div class="panels">
    <div class="logo">
      <img :src="`${teams.logo}`" :alt="`${teams.name}`" />
    </div>
    <div class="name">
      <h2>{{teams.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teams"]
};
</script>


<template>
  <div>
    <img :src="team.logo" alt />
    {{team.name}}
  </div>
</template>

<script>
export default {
  name: "Team",
  props: ["id"],
  computed: {
    team() {
      const id = parseInt(this.id);
      return this.$store.getters["teams/getTeamById"](id);
    }
  }
};
</script>


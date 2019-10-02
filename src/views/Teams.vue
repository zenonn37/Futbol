<template>
  <div>
    <TeamsList :teams="team" v-for="team in teams" :key="team.id" />
  </div>
</template>

<script>
import TeamsList from "@/components/TeamsList";
export default {
  components: {
    TeamsList
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    teams() {
      return this.$store.getters.TEAMS_ALL;
    }
  }
};
</script>


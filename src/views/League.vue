<template>
  <div>
    <div>
      <img width="150px" :src="league.flag" alt />
    </div>
    <div>
      <h1>{{league.name}}</h1>
      <ul>
        <li v-for="t in teams" :key="t.team_id">
          <img width="50px" :src="t.logo" :alt="t.name" />
          <router-link :to="`/team/${t.team_id}`">{{t.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  components: {},
  name: "League",
  data() {
    return {};
  },
  computed: {
    league() {
      const id = this.id;
      const leg = this.$store.getters["league/get_league"](id);

      if (Object.keys(leg).length > 0) {
        return leg;
      } else {
        return "No League's Available!";
      }
      console.log(leg);
    },
    teams() {
      const id = this.id;
      const teams = this.$store.getters["teams/TEAMS_ALL"];

      if (Object.keys(teams).length > 0) {
        console.log(teams);

        return teams;
      } else {
        return "No Teams's Available!";
      }
    }
  },

  methods: {},
  created() {
    const teams = this.$store.dispatch("league/get_teams", this.id);
  }
};
</script>


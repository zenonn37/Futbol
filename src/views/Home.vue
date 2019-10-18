<template>
  <div class="home">
    <form @submit.prevent="onSend()">
      <input type="text" v-model="league.country" placeholder="Enter Country" />
      <input type="text" v-model="league.season" placeholder="Enter Season" />
      <input type="submit" value="GO" />
    </form>

    <ul>
      <li v-for="l in leagues" :key="l.league_id">
        <div class="logo-list">
          <img :src="l.logo" alt="logo" />
          <router-link :to="`/league/${l.league_id}`">{{l.name}}</router-link>
        </div>
      </li>
    </ul>
    <div>Search Your Favorite Country</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "home",
  components: {},
  data() {
    return {
      league: {
        country: "",
        season: "",
        results: [],
        loading: false
      }
    };
  },
  computed: {
    leagues() {
      const array = [];
      const leg = this.$store.getters["league/get_leagues"];
      console.log(leg);

      if (leg.length < 0) {
        return array;
      } else {
        return leg;
      }
    }
  },

  methods: {
    onSend() {
      console.log(this.league);
      this.$store.dispatch("league/getcountry", this.league);
      // axios
      //   .post("http://apps.test/api/country", {
      //     country: this.league.country,
      //     season: this.league.season
      //   })
      //   .then(res => {
      //     console.log(res.data.body.api.leagues);
      //     this.league = res.data.body.api.leagues;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

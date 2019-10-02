<template>
  <form @submit.prevent="submit()">
    <div class="form-field">
      <input type="email" v-model=" data.username" placeholder="Email" />
    </div>
    <div class="form-field">
      <input type="password" v-model=" data.password" placeholder="Password" />
    </div>

    <input type="submit" value="Login" />
  </form>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      data: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      console.log("test");

      this.$store.dispatch("LOGIN", this.data).then(() => {
        console.log("you are in");
        this.$store.dispatch("USER");
        this.$router.push("/");
      });
    }
  }
};
</script>




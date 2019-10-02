<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/auth">Auth</router-link>|
      <router-link to="/teams">Teams</router-link>
    </div>
    <router-view />
  </div>
</template>


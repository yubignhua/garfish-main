<template>
  <nav>
    <router-link to="/">main</router-link> |
    <router-link to="/sub1">sub1</router-link> |
    <router-link to="/sub2">sub2</router-link>
  </nav>
  <div id="subApp"></div>

  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const navigateToAbout = () => {
      router.push('/sub1')
    }

    return {
      navigateToAbout
    }
  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

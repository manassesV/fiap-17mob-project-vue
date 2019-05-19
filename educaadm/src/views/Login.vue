<template>
  <div class="home">
    <AuthLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import AuthLogin from '@/components/AuthLogin.vue'

export default {
  name: 'home',
  components: {
    AuthLogin
  }
}
</script>

<template>
  <div class="home">
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/RegisterUser.vue'

export default {
  name: 'register',
  components: {
    Register
  }
}
</script>

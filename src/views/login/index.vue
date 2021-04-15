<!--  -->
<template>
  <button @click="login">登录</button>
</template>

<script>
export default {
    name:'Login',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      login(){
          this.$router.replace('/Layout')
      }
  }
}

</script>
<style scoped>
</style>
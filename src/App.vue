<script>

export default {
  name: 'App',
}
</script>

<template >
  <div id="app" >
    <div class="container">
    <h1>VERO App</h1>
      <nav>
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/login">Login</router-link>  
      <router-link class="router-link" to="/signup">Sign Up</router-link>
    </nav>
    </div>
    
    <router-view/>
  </div>
</template>

<style scoped >
.container {
  background-color: #f8f9fa;
}
h1{
  text-align: center;
  margin-bottom: 20px;
}
nav {
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.router-link{
  text-decoration: none;
  color: #000;
}

</style>

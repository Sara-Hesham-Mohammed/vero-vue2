 
<script>
import api from "../services/api";

export default {
  name: "LoginPage",
  data() {
    return { email: null, password: null};
  },
  methods: {
    onSubmit(){
      let userInfo = {
        email: this.email,
        password: this.password
      }

      //reset the form
      this.email = null;
      this.password = null;

      console.log("userInfo", userInfo);
      
      //send data to the server
      api.sendData(userInfo).then(response => {
        if (response.status === 200) {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again.");
        }
      });
    }
  },
};
</script>
<!-- Login Form -->
<template>
  <form method="POST" class="login-form" @submit.prevent="onSubmit">
    <p class="form-title">Login</p>

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" required />
      <router-link to="/forgot-password">Forgot Password?</router-link>

    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px 25px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

label {
  font-weight: 500;
  margin-bottom: 5px;
  color: #444;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
.error{
  color: red;
  font-size: 0.9rem;
  text-align: center;

}
</style>

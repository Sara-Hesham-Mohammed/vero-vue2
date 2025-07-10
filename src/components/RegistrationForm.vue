<script>
import api from "../services/api";

export default {
  name: "RegistrationForm",
  data() {
    return { fullname: null, mobile_number: null, email: null, password: null };
  },
  methods: {
    onSubmit(){
      let userInfo = {
        name : this.fullname,
        email: this.email,
        mobile_number: this.mobile_number,
        password: this.password
      }

      //reset the form
      this.fullname = null;
      this.email = null;
      this.mobile_number = null;
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
<!-- Registration Form -->
<template>
  <form method="POST" class="register-form" @submit.prevent="onSubmit" action="https://api.example.com/endpoint">
    <p class="form-title">Register</p>

    <label for="name">Full Name</label>
    <input type="text" name="name" v-model="fullname" required />

    <label for="number">Phone Number</label>
    <input type="text" name="number" v-model="mobile_number" required />

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" required />

    <button type="submit">Register</button>
  </form>
</template>

<style scoped>
.register-form {
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
</style>

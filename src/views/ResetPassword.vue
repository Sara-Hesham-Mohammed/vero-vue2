<script>
import api from "../services/api";

export default {
  name: "ResetPassword",
  data() {
    return {
      password: null,
      confirmPassword: null,
      userToken: null,
    };
  },
  methods: {
    onSubmit() {
      let newPasswordData = {
        password: this.password,
        confirm_password: this.confirmPassword,
        user_token: this.userToken,
      };

      //reset the form
      this.password = null;
      this.confirmPassword = null;

      console.log("New password data", newPasswordData);

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      api.resetPassword(newPasswordData);
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      console.log("Token from Laravel:", token);
      this.userToken = token;
    } else {
      console.error("No token provided");
    }
  },
};
</script>
<template>
  <form method="POST" class="pass-reset-form" @submit.prevent="onSubmit">
    <p class="form-title">Reset Your Password</p>

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" required />

    <label for="confirm-password">Confirm Password</label>
    <input
      type="password"
      name="confirm-password"
      v-model="confirmPassword"
      required
    />

    <button type="submit">Reset</button>
  </form>
</template>

<style scoped>
.pass-reset-form {
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

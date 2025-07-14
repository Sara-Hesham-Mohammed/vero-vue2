<script>
import api from "../services/api";

export default {
  name: "EmailForgotPassword",
  data() {
    return { email: null, popupMsg:"" };
  },
  methods: {
    showPopUp(msg) {
      this.popupMsg = msg;
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },

    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    async onSubmit() {
      let userEmail = {
        email: this.email,
      };

      //reset the form
      this.email = null;

      console.log(userEmail);

      try {
        const response = await api.forgotPassword(userEmail);
        this.showPopUp(response.message);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
<template>
  <div>
    <form method="POST" class="email-form" @submit.prevent="onSubmit">
      <p class="form-title">Send Password Reset Email</p>

      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" required />

      <button type="submit">Send</button>
    </form>

    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>{{ popupMsg }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.email-form {
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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>

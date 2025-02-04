<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import axios from "axios";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  try {
    const response = await axios.post("http://localhost:5000/auth/login", {
      email: email.value,
      password: password.value,
    });

    auth.setUser(response.data.user, response.data.token);
    router.push("/dashboard"); // Redirection après connexion
  } catch (error) {
    errorMessage.value = "Identifiants incorrects";
  }
};
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-xl font-bold mb-4">Connexion</h2>

      <form @submit.prevent="login">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-2 border rounded mb-2"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" class="w-full bg-primary text-white p-2 rounded">
          Se connecter
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>

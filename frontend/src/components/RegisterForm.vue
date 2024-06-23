<template>
  <form @submit.prevent="register">
    <input v-model="walletAddress" placeholder="Wallet Address" required>
    <input v-model="username" placeholder="Username" required>
    <input v-model="email" type="email" placeholder="Email" required>
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { register } from '@/services/api'

export default {
  name: 'RegisterForm',
  setup() {
    const generateDummyAddress = () => {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let address = 'ton';
      for (let i = 0; i < 33; i++) {
        address += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return address;
    }
    const walletAddress = ref(generateDummyAddress())
    const username = ref('')
    const email = ref('')

    const registerUser = async () => {
      try {
        await register (walletAddress.value, username.value, email.value)
        alert('Registration successful')
      } catch(error) {
        alert('Registration failed')
      }
    }

    return {
      walletAddress,
      username,
      email,
      register: registerUser
    }
  }
}
</script>
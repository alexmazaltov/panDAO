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
    const walletAddress = ref('')
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
      register: registerUser
    }
  }
}
</script>
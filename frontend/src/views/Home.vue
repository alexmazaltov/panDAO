<template>
  <div>
    <h1>Welcome to panDAO</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Home',
  components: {
    RegisterForm
  }
}
</script>
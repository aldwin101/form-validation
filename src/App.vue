<template>
  <section class="h-screen flex justify-center items-center">
    <div class="rounded fixed top-0 py-4 w-1/3">
      <div class="flex justify-center w-full mt-16">
        <button
          class="py-3 px-4 transition w-full rounded-tl-lg rounded-tr-lg"
          @click.prevent="tab = 'login'"
          :class="{
            'hover:text-black text-black bg-white': tab === 'login',
            'hover:text-blue-500 border-l border-t border-r border-gray-300': tab === 'register'
          }"
        >
          Login
        </button>
        <button
          class="py-3 px-4 transition w-full rounded-tl-lg rounded-tr-lg"
          @click.prevent="tab = 'register'"
          :class="{
            'hover:text-black text-black bg-white': tab === 'register',
            'hover:text-blue-500 border-l border-t border-r border-gray-300': tab === 'login'
          }"
        >
          Register
        </button>
      </div>
      <login-form v-if="tab === 'login'" />
      <register-form v-else />
    </div>
  </section>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>

<template>
  <!-- Login Form -->
  <section class="px-2 bg-white p-5 rounded-b-lg">
    <vee-form class="mx-3" :validation-schema="loginSchema">
      <!-- Email -->
      <div class="mb-4">
        <label>Email</label>
        <vee-field
          name="email"
          type="email"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Password -->
      <div class="mb-4">
        <label>Password</label>
        <vee-field
          name="password"
          type="password"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your password"
        />
        <ErrorMessage class="text-red-600" name="password" />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-3 rounded transition hover:bg-blue-600"
      >
        Login
      </button>
    </vee-form>
  </section>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:10|max:50'
      }
    }
  }
}
</script>

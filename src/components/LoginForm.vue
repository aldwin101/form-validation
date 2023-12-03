<template>
  <!-- Login Form -->
  <section class="px-2 bg-white p-5 rounded-b-lg">
    <form class="mx-3">
      <!-- Email -->
      <div class="mb-4 w-full">
        <label>Email</label>
        <input
          type="email"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your email"
        />
      </div>
      <!-- Password -->
      <div class="mb-4">
        <label>Password</label>
        <input
          type="password"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your password"
        />
      </div>
      <!-- Login Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-3 rounded transition hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

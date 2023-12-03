<template>
  <!-- Registration Form -->
  <section class="px-2 bg-white p-5 rounded-b-lg">
    <form class="mx-3">
      <!-- Name -->
      <div class="mb-4">
        <label>Name</label>
        <input
          type="text"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your name"
        />
      </div>
      <!-- Email -->
      <div class="mb-4">
        <label>Email</label>
        <input
          type="text"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your email"
        />
      </div>
      <!-- Password -->
      <div class="mb-4">
        <label>Password</label>
        <input
          type="text"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Create a password"
        />
      </div>
      <!-- Confirm Password -->
      <div class="mb-4">
        <label>Confirm password</label>
        <input
          type="password"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Confirm your password"
        />
      </div>
      <!-- Register Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-3 rounded transition hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<template>
  <!-- Registration Form -->
  <section class="px-2 bg-white p-5 rounded-b-lg">
    <vee-form class="mx-3" :validation-schema="registerSchema">
      <!-- Name -->
      <div class="mb-4">
        <label>Name</label>
        <vee-field
          name="name"
          type="text"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Enter your name"
        />
        <ErrorMessage class="text-red-600" name="name" />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label>Email</label>
        <vee-field
          name="email"
          type="text"
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
          placeholder="Create a password"
        />
        <ErrorMessage class="text-red-600" name="password" />
      </div>
      <!-- Confirm Password -->
      <div class="mb-4">
        <label>Confirm password</label>
        <vee-field
          name="confirm_password"
          type="password"
          class="block w-full py-2 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-gray-400 rounded"
          placeholder="Confirm your password"
        />
        <ErrorMessage class="text-red-600" name="confirm_password" />
      </div>

      <!-- Register Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-3 rounded transition hover:bg-blue-600"
      >
        Register
      </button>
    </vee-form>
  </section>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      registerSchema: {
        name: 'required|alpha_spaces',
        email: 'required|email',
        password: 'required|min:10|max:50',
        confirm_password: 'confirmed:@password|required'
      }
    }
  }
}
</script>

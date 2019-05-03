<template>
  <div
    class="bg-gray-050 text-gray-800 shadow-lg flex flex-col min-h-screen font-sans subpixel-antialiased"
  >
    <header
      :class="[
        bland ? '' : 'bg-yellow-vivid-300 gradient-yellow border-b-2 border-gray-800',
        'px-8',
      ]"
    >
      <nav class="flex items-center justify-between flex-wrap py-3">
        <g-link to="/" class="flex items-center text-gray-800">
          <Logo class="w-16 h-16 mb-3 mr-3" />
          <span class="font-semibold text-4xl tracking-tight">{{
            $static.metaData.siteName
          }}</span>
        </g-link>
        <div class="block md:hidden">
          <button
            @click="toggleMenu"
            class="flex items-center px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline text-gray-800 border-gray-800 hover:text-gray-500 hover:border-gray-500"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          :class="[
            menuOpen ? 'hidden' : 'block',
            'text-xl list-reset ml-auto -mb-2 w-full md:flex md:items-center md:w-auto',
          ]"
        >
          <!-- <li>
            <g-link
              to="/"
              class="text-gray-800 hover:underline mr-4"
              exact-active-class="underline"
              >Home</g-link
            >
          </li> -->
          <li class="my-4">
            <g-link
              to="/dashboard"
              class="text-gray-800 hover:underline mr-4"
              exact-active-class="underline"
              >Dashboard</g-link
            >
          </li>
          <li class="my-4">
            <g-link
              to="/settings"
              class="text-gray-800 hover:underline"
              exact-active-class="underline"
              >Settings</g-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="flex-1 bg-transparent">
      <slot />
    </main>
    <footer class="mono py-6 border-t border-gray-100">
      <p class="text-center text-gray-600">Design Sandbox © {{ getYear() }}</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Logo from '../images/logo.svg'
export default {
  components: {
    Logo,
  },
  props: {
    bland: {
      type: Boolean,
    },
  },
  data: function() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

.gradient-yellow {
  background-image: radial-gradient(
    ellipse farthest-side at right center,
    #fadb5f 0%,
    #f7c948 58.6%
  );
}
</style>

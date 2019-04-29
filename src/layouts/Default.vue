<template>
  <div
    class="bg-gray-050 text-gray-800 shadow-lg flex flex-col min-h-screen subpixel-antialiased"
  >
    <header class="bg-yellow-vivid-300 gradient border-b-2 border-gray-800 px-8">
      <nav class="flex items-center justify-between flex-wrap py-3">
        <g-link to="/" class="flex items-center text-gray-800">
          <Logo class="w-16 h-16 mb-3 mr-3" />
          <span class="font-semibold text-4xl tracking-tight">{{
            $static.metaData.siteName
          }}</span>
        </g-link>
        <ul class="text-xl list-reset flex ml-auto -mb-2">
          <!-- <li>
            <g-link
              to="/"
              class="text-gray-800 hover:underline mr-4"
              exact-active-class="underline"
              >Home</g-link
            >
          </li>
          <li>
            <g-link
              to="/dashboard"
              class="text-gray-800 hover:underline mr-4"
              exact-active-class="underline"
              >Dashboard</g-link
            >
          </li> -->
          <li>
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
import Logo from '~/icons/logo.svg'
export default {
  components: {
    Logo,
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

.gradient {
  background-image: radial-gradient(
    ellipse farthest-side at right center,
    #fadb5f 0%,
    #f7c948 58.6%
  );
}
</style>

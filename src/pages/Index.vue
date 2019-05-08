<template>
  <Layout>
    <main class="container my-4">
      <div class="w-full sm:w-5/6 mx-auto">
        <h1 class="text-4xl text-center">Gallery</h1>
        <p class="text-center">
          Examples are adapted from the wonderful book
          <a
            class="text-light-blue-vivid-700 hover:underline"
            href="https://refactoringui.com/book/"
            >Refactoring UI</a
          >.
        </p>

        <div class="mt-8 flex flex-wrap justify-between -mx-4">
          <div class="w-1/2 px-3">
            <g-link
              to="/settings"
              class="block border border-gray-100 rounded hover:shadow-lg relative"
            >
              <div
                class="absolute right-0 rounded-bl inline-block bg-yellow-400 text-center p-2"
              >
                <span class="text-yellow-900 text-xl">Settings</span>
              </div>
              <g-image src="../images/settings.png"></g-image>
            </g-link>
          </div>
          <div class="w-1/2 px-3">
            <g-link
              to="/dashboard"
              class="block border border-gray-100 rounded hover:shadow-lg relative"
            >
              <div
                class="absolute right-0 rounded-bl inline-block bg-yellow-400 text-center p-2"
              >
                <span class="text-yellow-900 text-xl">Dashboard</span>
              </div>
              <g-image src="../images/dashboard.png"></g-image>
            </g-link>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

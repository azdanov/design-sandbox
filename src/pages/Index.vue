<template>
  <Layout>
    <main class="container my-4">
      <div class="w-full sm:w-3/4 mx-auto">
        <h1 class="text-4xl">Hello, world!</h1>

        <p class="text-xl">
          Currently this is a WIP. Check out the
          <g-link class="text-light-blue-vivid-700 hover:underline" to="/settings"
            >Settings</g-link
          >
          page which should be done.
        </p>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

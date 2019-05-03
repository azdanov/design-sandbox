<template>
  <div class="py-3 flex flex-col items-center">
    <h3 class="font-bold uppercase text-light-blue-vivid-100">
      {{ title }}
    </h3>
    <p class="text-white text-4xl font-light">{{ description }}</p>
    <button
      class="bg-light-blue-vivid-800 border-light-blue-vivid-800 hover:border-light-blue-vivid-900 hover:bg-light-blue-vivid-900 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 mt-2 rounded-full cursor-pointer flex items-center"
    >
      {{ action }}
      <span class="ml-2">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 8 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m5.293 6.95.707.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z"
            transform="matrix(0 -1 1 0 0 12)"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>

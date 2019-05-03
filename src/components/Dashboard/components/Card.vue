<template>
  <div class="w-full md:flex-1 flex flex-col my-3 mx-3 shadow-md bg-white rounded-lg">
    <div class="flex-1 px-5 py-4">
      <div class="flex flex-wrap justify-between">
        <p class="font-bold text-light-blue-vivid-900">
          {{ title }}
        </p>
        <Badge :type="status">{{ status }}</Badge>
      </div>
      <p class="text-2xl text-light-blue-vivid-800">
        {{ description }}
      </p>
      <p class="text-gray-500">
        {{ date }}
      </p>
    </div>
    <button
      class="py-2 bg-gray-075 hover:bg-gray-100 text-gray-700 w-full justify-center flex items-center focus:outline-none focus:shadow-outline"
    >
      {{ action }}
      <span class="ml-2 text-gray-500">
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
import Badge from './Badge'

export default {
  components: {
    Badge,
  },
  props: {
    title: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    action: { type: String, required: true },
  },
}
</script>

<style scoped></style>

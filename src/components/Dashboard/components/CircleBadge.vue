<template>
  <span
    v-if="!hidden"
    :class="[
      type === 'Pending' ? 'bg-yellow-vivid-200' : '',
      type === 'Overdue' ? 'bg-red-vivid-200' : '',
      type === 'Paid' ? 'bg-teal-200' : '',
      'inline-block w-4 h-4 mr-2 rounded-full',
    ]"
  ></span>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true, default: '' },
    hidden: { type: Boolean },
  },
}
</script>

<style scoped></style>

<template>
  <span
    :class="[
      type === 'Pending' ? 'bg-yellow-vivid-100 text-yellow-vivid-800' : '',
      type === 'Overdue' ? 'bg-red-vivid-100 text-red-vivid-800' : '',
      type === 'Paid' ? 'bg-teal-100 text-teal-800' : '',
      'inline-block rounded-full px-3',
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true },
  },
}
</script>

<style></style>

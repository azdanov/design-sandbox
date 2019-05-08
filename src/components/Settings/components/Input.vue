<template>
  <fieldset class="mb-4">
    <label :for="labelLower" class="block mb-2 text-lg">{{ label }}</label>
    <input
      @input="$emit('input', $event.target.value)"
      :id="labelLower"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
    />
  </fieldset>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    labelLower() {
      return this.label.toLowerCase();
    }
  }
};
</script>

<style></style>

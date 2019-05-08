<template>
  <div class="flex items-center mb-3 relative">
    <input
      id="notifications_activity"
      :checked="checked"
      class="checkbox__input"
      type="checkbox"
      name="notifications"
    />
    <label for="notifications_activity" class="checkbox__label">
      {{ title }}
      <small class="w-full text-gray-600">{{ description }}</small
      ><span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="postcss">
.checkbox__input {
  @apply opacity-0 mr-4 leading-tight text-lg;
}

.checkbox__label {
  @apply flex flex-wrap items-baseline -mb-1 cursor-pointer;
}

.checkbox__input + .checkbox__label::before {
  @apply w-5 h-5 rounded border border-light-blue-vivid-600 absolute left-0 top-0 mt-1;
  content: "";
}

.checkbox__input:focus + .checkbox__label::before {
  @apply shadow-outline outline-none;
  content: "";
}

.checkbox__input:checked + .checkbox__label::before {
  @apply bg-light-blue-vivid-600;
  content: "";
}

.checkbox__input:checked + .checkbox__label .checkmark {
  @apply absolute inline-block top-0 left-0 mt-1 cursor-pointer;
  width: 22px;
  height: 20px;
  transform: rotate(45deg);
}

.checkbox__input:checked + .checkbox__label .checkmark:before {
  @apply absolute bg-white;
  content: "";
  width: 2px;
  height: 10px;
  left: 11px;
  top: 5px;
}

.checkbox__input:checked + .checkbox__label .checkmark:after {
  @apply absolute bg-white;
  content: "";
  width: 5px;
  height: 2px;
  left: 7px;
  top: 13px;
}
</style>

<template>
  <div>
    <input
      :id="`plan-${tierLower}`"
      :value="tierLower"
      @click="handleSelect"
      :checked="selected === tierLower"
      class="radio__input"
      type="radio"
      name="plan"
    />
    <label :for="`plan-${tierLower}`" class="radio__label">
      <div class="relative">
        <span class="block uppercase font-bold font-bold">{{ tier }}</span>
        <span class="highlight font-bold text-3xl">{{ quantity }}&nbsp;</span
        ><span class="highlight font-bold text-xl">GB</span>&nbsp;<span
          class="hidden lg:inline"
          >uploads</span
        >
        $<span class="highlight font-bold">{{ price }}</span
        >/mo
        <span class="checkmark"></span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    tier: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  computed: {
    tierLower() {
      return this.tier.toLowerCase();
    }
  },
  methods: {
    handleSelect() {
      this.$emit("selected", this.tierLower);
    }
  }
};
</script>

<style lang="postcss">
.radio__label {
  @apply py-3 px-4 bg-white border-2 border-gray-100 rounded cursor-pointer mb-2 flex items-baseline text-gray-600;
}

.radio__input {
  @apply hidden;
}

.radio__input:checked + .radio__label {
  @apply bg-teal-050 border-2 border-teal-400 text-teal-700;
}

.radio__input:checked + .radio__label .highlight {
  @apply text-teal-800;
}

.radio__input + .radio__label .checkmark {
  @apply hidden;
}

.radio__input:checked + .radio__label .checkmark {
  @apply bg-teal-400 absolute inline-block bottom-0 right-0 rounded-full -mr-2 -mb-1;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
}

@screen md {
  .radio__input:checked + .radio__label .checkmark {
    @apply bottom-auto top-0;
  }
}

.radio__input:checked + .radio__label .checkmark:before {
  @apply absolute bg-white;
  content: "";
  width: 2px;
  height: 10px;
  left: 11px;
  top: 5px;
}

.radio__input:checked + .radio__label .checkmark:after {
  @apply absolute bg-white;
  content: "";
  width: 5px;
  height: 2px;
  left: 7px;
  top: 13px;
}
</style>

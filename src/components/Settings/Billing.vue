<template>
  <fieldset class="pb-6 mb-6 border-b border-grey-100">
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
      <div class="w-full md:w-4/12 mb-3 md:mb-0">
        <legend class="text-lg">Billing</legend>
        <small class="text-grey-600 block pt-1 pb-2"
          >Make sure to keep your payment method up-to-date for an effortless and
          care-free experience.</small
        >
      </div>
      <div class="w-full md:w-7/12">
        <fieldset class="mb-4">
          <fieldset>
            <div class="flex items-baseline justify-between">
              <legend class="block mb-2 text-lg">Change Plan</legend>

              <input
                id="subscription"
                class="text-light-blue-vivid-700 cursor-pointer bg-grey-050 hover:underline"
                type="button"
                value="Cancel subscription"
              />
            </div>
            <div class="flex">
              <input
                id="plan-basic"
                class="radio__input"
                type="radio"
                name="plan"
                value="basic"
              />
              <label for="plan-basic" class="radio__label">
                <div class="relative">
                  <span class="block uppercase font-bold font-bold">Basic</span>
                  <span class="highlight font-bold text-3xl">1&nbsp;</span
                  ><span class="highlight font-bold text-xl">GB</span>&nbsp;<span
                    class="hidden lg:inline"
                    >uploads</span
                  >
                  $<span class="highlight font-bold">5</span>/mo
                  <span class="checkmark"></span>
                </div>
              </label>
              <input
                id="plan-essential"
                class="radio__input"
                type="radio"
                name="plan"
                value="essential"
                checked
              />
              <label for="plan-essential" class="radio__label mx-4">
                <div class="relative">
                  <span class="block uppercase font-bold">Essential</span>
                  <span class="highlight font-bold text-3xl">5&nbsp;</span
                  ><span class="highlight font-bold text-xl">GB</span>&nbsp;<span
                    class="hidden lg:inline"
                    >uploads</span
                  >
                  $<span class="highlight font-bold">10</span>/mo
                  <span class="checkmark"></span>
                </div>
              </label>
              <input
                id="plan-pro"
                class="radio__input"
                type="radio"
                name="plan"
                value="pro"
              />
              <label for="plan-pro" class="radio__label">
                <div class="relative">
                  <span class="block uppercase font-bold">Pro</span>
                  <span class="highlight font-bold text-3xl">15&nbsp;</span
                  ><span class="highlight font-bold text-xl">GB</span>&nbsp;<span
                    class="hidden lg:inline"
                    >uploads</span
                  >
                  $<span class="highlight font-bold">20</span>/mo
                  <span class="checkmark"></span>
                </div>
              </label>
            </div>
          </fieldset>
        </fieldset>

        <fieldset class="mt-8 mb-4">
          <legend class="mb-3 block text-lg">Payment method</legend>
          <div
            class="flex justify-between p-3 border bg-grey-075 border-grey-200 rounded"
          >
            <p>
              Visa ending in 5555
              <span class="block text-grey-500">
                expires 1/2019
              </span>
            </p>
            <input
              id="payment_method"
              class="bg-grey-050 hover:bg-white border text-grey-700 hover:text-grey-600 border-grey-200 hover:border-grey-100 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded cursor-pointer"
              type="button"
              value="Update"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.radio__label {
  @apply py-3 px-4 bg-white border-2 border-grey-100 rounded cursor-pointer mb-2 flex items-baseline w-1/3 text-grey-600;
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
  content: '';
  width: 2px;
  height: 10px;
  left: 11px;
  top: 5px;
}

.radio__input:checked + .radio__label .checkmark:after {
  @apply absolute bg-white;
  content: '';
  width: 5px;
  height: 2px;
  left: 7px;
  top: 13px;
}
</style>

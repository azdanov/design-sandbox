<template>
  <fieldset class="pb-6 mb-6 border-b border-gray-100">
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
      <div class="w-full md:w-4/12 mb-3 md:mb-0">
        <legend class="text-lg">Billing</legend>
        <small class="text-gray-600 block pt-1 pb-2"
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
                class="text-light-blue-vivid-700 cursor-pointer bg-gray-050 hover:underline"
                type="button"
                value="Cancel subscription"
              />
            </div>
            <div class="flex">
              <Radio
                @selected="updateSelected"
                :selected="selected"
                class="w-1/3"
                tier="Basic"
                quantity="1"
                price="5"
              ></Radio>
              <Radio
                @selected="updateSelected"
                :selected="selected"
                class="w-1/3 mx-3"
                tier="Essential"
                quantity="5"
                price="10"
              ></Radio>
              <Radio
                @selected="updateSelected"
                :selected="selected"
                class="w-1/3"
                tier="Pro"
                quantity="15"
                price="20"
              ></Radio>
            </div>
          </fieldset>
        </fieldset>

        <fieldset class="mt-8 mb-4">
          <legend class="mb-3 block text-lg">Payment method</legend>
          <div
            class="flex justify-between p-3 border bg-gray-075 border-gray-200 rounded"
          >
            <p>
              Visa ending in 5555
              <span class="block text-gray-500">
                expires 1/2019
              </span>
            </p>
            <input
              id="payment_method"
              class="bg-gray-050 hover:bg-white border text-gray-700 hover:text-gray-600 border-gray-200 hover:border-gray-100 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded cursor-pointer"
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
import Radio from './components/Radio'
export default {
  components: { Radio },
  data: function() {
    return { selected: 'essential' }
  },
  methods: {
    updateSelected(selection) {
      this.selected = selection
    },
  },
}
</script>

<style lang="postcss"></style>

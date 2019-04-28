<template>
  <fieldset class="pb-6 mb-6 border-b border-grey-100">
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
      <div class="w-full md:w-4/12 mb-3 md:mb-0">
        <legend class="text-lg">Basics</legend>
        <small class="text-grey-600 block pt-1 pb-2"
          >Having an up-to-date email address attached to your account is a great step
          towar improved account security</small
        >
      </div>
      <div class="w-full md:w-7/12">
        <fieldset class="mb-4">
          <label for="email" class="block mb-2 text-lg">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value="jsmith@example.com"
            class="block appearance-none w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
          />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="password">Password</label>
          <input
            id="password"
            class="bg-grey-050 hover:bg-white border text-grey-700 hover:text-grey-600 border-grey-200 hover:border-grey-100 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded cursor-pointer"
            type="button"
            value="Change password"
          />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="language">Language</label>
          <div class="relative">
            <select
              id="language"
              name="language"
              class="block appearance-none bg-white w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
            >
              <option value="en">English</option>
              <option value="et">Estonian</option>
              <option value="ru">Russian</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </fieldset>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="country">Country</label>
          <div class="relative">
            <select
              id="country"
              name="country"
              class="block appearance-none bg-white w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
            >
              <option value="est">Estonia</option>
              <option value="rus">Russia</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {}
</script>

<style></style>

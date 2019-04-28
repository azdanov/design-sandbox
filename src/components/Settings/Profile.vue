<template>
  <fieldset class="pb-6 mb-6 border-b border-grey-100">
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
      <div class="w-full md:w-4/12 mb-3 md:mb-0">
        <legend class="text-lg">Profile</legend>
        <small class="text-grey-600 block pt-1 pb-2"
          >This information will be shown publicly so be careful what information is
          provided</small
        >
      </div>
      <div class="w-full md:w-7/12">
        <div class="flex">
          <fieldset class="mb-4 w-full mr-4">
            <label class="block mb-2 text-lg" for="first_name">First Name</label>
            <input
              id="first_name"
              placeholder="First Name"
              class="block appearance-none w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
              type="text"
              value="John"
            />
          </fieldset>

          <fieldset class="mb-4 w-full">
            <label class="block mb-2 text-lg" for="last_name">Last Name</label>
            <input
              id="last_name"
              class="block appearance-none w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
              type="text"
              placeholder="Last Name"
              value="Smith"
            />
          </fieldset>
        </div>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="Picture">Picture</label>
          <input
            id="picture"
            class="bg-grey-050 hover:bg-white border text-grey-700 hover:text-grey-600 border-grey-200 hover:border-grey-100 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded cursor-pointer"
            type="button"
            value="Change picture"
          />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="username">Username</label>
          <input
            id="username"
            class="block appearance-none w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
            type="text"
            placeholder="Username"
            value="JSmith"
          />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block mb-2 text-lg" for="about_you">About You</label>
          <textarea
            id="about_you"
            rows="4"
            placeholder="Tell others more about yourself…"
            class="block appearance-none w-full border border-grey-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-grey-500"
          >
One mission age see firm language resource trouble. School state TV argue go. Success reality begin.</textarea
          >
        </fieldset>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {}
</script>

<style></style>

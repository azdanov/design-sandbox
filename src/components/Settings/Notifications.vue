<template>
  <fieldset class="pb-6 mb-6 border-b border-gray-100">
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
      <div class="w-full md:w-4/12 mb-3 md:mb-0">
        <legend class="text-lg">Notifications</legend>
        <small class="text-gray-600 block pt-1 pb-2"
          >Get notified of activity going on with your account. Notifications will be
          sent to the email that you have provided.</small
        >
      </div>
      <div class="w-full md:w-7/12">
        <Checkbox
          title="Account Activity"
          description="Get important notifications about you or activity you've missed"
          checked
        ></Checkbox>
        <Checkbox
          title="New For You"
          description="A weekly email featuring activity from people you follow"
        ></Checkbox>
        <Checkbox
          title="Meetups Near You"
          description="Get a new email when a Meetup is posted close to your location"
        ></Checkbox>
        <Checkbox
          title="Company News"
          description="Get news, announcements, and product updates"
          checked
        ></Checkbox>
        <Checkbox
          title="Weekly Jobs"
          description="Weekly digest of design jobs"
        ></Checkbox>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Checkbox from './components/Checkbox'
export default {
  components: {
    Checkbox,
  },
}
</script>

<style></style>

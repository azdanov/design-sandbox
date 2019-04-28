<template>
  <Layout>
    <main class="container mt-8 mb-16">
      <div class="w-full px-10 sm:px-0 sm:w-9/12 md:w-11/12 xl:w-3/4 mx-auto">
        <h1 class="text-2xl border-b border-grey-100 pb-2">Account Settings</h1>
        <form class="mt-5">
          <Basics></Basics>
          <Profile></Profile>
          <Billing></Billing>
          <Notifications></Notifications>
          <Actions></Actions>
        </form>
      </div>
    </main>
  </Layout>
</template>

<script>
import Basics from '@/components/Settings/Basics'
import Profile from '@/components/Settings/Profile'
import Billing from '@/components/Settings/Billing'
import Notifications from '@/components/Settings/Notifications'
import Actions from '@/components/Settings/Actions'

export default {
  components: {
    Basics,
    Profile,
    Billing,
    Notifications,
    Actions,
  },
  metaInfo: {
    title: 'Settings',
  },
}
</script>

<style>
</style>

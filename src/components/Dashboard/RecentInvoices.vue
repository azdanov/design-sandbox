<template>
  <div>
    <h2 class="text-xl mb-3 text-light-blue-vivid-900">Recent Invoices</h2>
    <section class="flex flex-wrap justify-between -mx-3">
      <Card
        key="item.title"
        v-for="item in items"
        :title="item.title"
        :status="item.status"
        :description="item.price"
        :date="item.date"
        :action="item.action"
      ></Card>
    </section>
  </div>
</template>

<script>
import faker from 'faker'
import Card from './components/Card'

export default {
  components: { Card },
  props: { items: { type: Array, require: true, default: () => [] } },
  data: function() {
    return { faker }
  },
}
</script>

<style scoped></style>

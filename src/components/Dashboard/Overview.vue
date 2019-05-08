<template>
  <div class="flex justify-between w-full lg:w-10/12 mx-auto">
    <Action
      :key="item.title"
      v-for="item in items"
      :title="item.title"
      :description="item.description"
      :action="item.action"
      class="flex-1 pr-6"
    ></Action>
  </div>
</template>

<script>
import Action from "./components/Action";

export default {
  components: {
    Action
  },
  props: { items: { type: Array, require: true, default: () => [] } }
};
</script>

<style></style>

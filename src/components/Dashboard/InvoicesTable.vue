<template>
  <div>
    <h2 class="text-xl mb-3 text-light-blue-vivid-900">All Invoices</h2>

    <table
      class="table hidden sm:table table-auto w-full text-left bg-white shadow-lg rounded-lg"
    >
      <tr class="text-light-blue-vivid-900">
        <th class="hidden md:table-cell"></th>
        <th class="pl-2 md:pl-0">Client</th>
        <th>Issued Date</th>
        <th>Due Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th></th>
      </tr>
      <tr v-for="item in items">
        <td class="hidden md:table-cell">
          <img
            :src="item.avatar"
            :alt="item.name"
            class="rounded-full w-12 h-12 mx-auto"
          />
        </td>
        <td class="leading-tight pl-2 md:pl-0">
          {{ item.name }} <br />
          <span class="text-gray-500 text-sm">{{ item.id }}</span>
        </td>
        <td>{{ item.issued }}</td>
        <td>{{ item.due }}</td>
        <td class="leading-tight">
          {{ item.price }}
          <br />
          <span class="text-gray-500 text-sm">{{ item.currency }}</span>
        </td>
        <td>
          <Badge :type="item.status">
            {{ item.status }}
          </Badge>
        </td>
        <td>
          <button class="text-light-blue-vivid-700 hover:underline">
            {{ item.action }}
          </button>
        </td>
      </tr>
    </table>

    <table class="table sm:hidden w-full text-left">
      <tr>
        <th class="uppercase pl-3 w-1/2">Client</th>
        <th class="uppercase w-1/2 text-right pr-8">Amount</th>
        <th></th>
      </tr>
      <tr v-for="item in items">
        <td class="pl-3 w-1/2">
          {{ item.name }} <br />
          <span class="text-gray-500 text-sm">{{ item.id }}</span>
        </td>
        <td class="w-1/2 text-right pr-8">
          <div class="inline-flex items-center">
            <CircleBadge
              :type="item.status"
              :hidden="item.status === 'Paid'"
            ></CircleBadge>
            {{ item.price }}
          </div>
          <br />
          <span class="text-gray-500 text-sm">{{ item.currency }}</span>
        </td>
        <td class="pr-2">
          <button
            class="bg-gray-100 text-gray-600 rounded-full w-6 h-6 flex justify-center cursor-pointer"
          >
            <span>
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 8 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5.293 6.95.707.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z"
                  transform="matrix(0 -1 1 0 0 12)"
                />
              </svg>
            </span>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import faker from 'faker'
import Badge from './components/Badge'
import CircleBadge from './components/CircleBadge'

export default {
  components: {
    CircleBadge,
    Badge,
  },
  props: { items: { type: Array, require: true, default: () => [] } },
  data: function() {
    return {
      faker,
    }
  },
  methods: {
    /**
     * @param {number} number
     * @returns {string}
     */
    toCurrency(number) {
      return number.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    },
    price() {
      return this.toCurrency(
        faker.random.number({
          min: 100,
          max: 9000,
        }),
      )
    },
  },
}
</script>

<style>
.table td,
.table th {
  @apply py-4;
}

.table th {
  @apply uppercase;
}

.table tr:nth-of-type(odd) {
  @apply bg-gray-075;
}
</style>

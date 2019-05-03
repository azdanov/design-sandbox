<template>
  <Layout :bland="true">
    <section class="gradient-blue py-2">
      <Overview :items="overviews"></Overview>
    </section>

    <div class="px-3 mx-auto w-full lg:w-10/12">
      <RecentInvoices :items="invoices" class="mt-8 my-10"></RecentInvoices>

      <div class="mt-8 mb-12">
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
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000045</span>
            </td>
            <td>Aug. 10, 2018</td>
            <td>In 2 days</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span
                class="bg-yellow-vivid-100 rounded-full px-3 py-1 text-yellow-vivid-800"
              >
                Pending
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
              </button>
            </td>
          </tr>
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000044</span>
            </td>
            <td>Aug. 7, 2018</td>
            <td>Yesterday</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span class="bg-red-vivid-100 rounded-full px-3 py-1 text-red-vivid-800">
                Overdue
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
              </button>
            </td>
          </tr>
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000043</span>
            </td>
            <td>Jul. 23, 2018</td>
            <td>16 days ago</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span class="bg-teal-200 rounded-full px-3 py-1 text-teal-800">
                Paid
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
              </button>
            </td>
          </tr>
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000042</span>
            </td>
            <td>Jul. 13, 2018</td>
            <td>1 month ago</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span class="bg-teal-200 rounded-full px-3 py-1 text-teal-800">
                Paid
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
              </button>
            </td>
          </tr>
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000041</span>
            </td>
            <td>Jul. 9, 2018</td>
            <td>1 month ago</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span class="bg-teal-200 rounded-full px-3 py-1 text-teal-800">
                Paid
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
              </button>
            </td>
          </tr>
          <tr>
            <td class="hidden md:table-cell">
              <img
                :src="faker.internet.avatar()"
                class="rounded-full w-12 h-12 mx-auto"
                alt=""
              />
            </td>
            <td class="leading-tight pl-2 md:pl-0">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000040</span>
            </td>
            <td>Jul. 6, 2018</td>
            <td>1 month ago</td>
            <td class="leading-tight">
              {{ price() }}
              <br />
              <span class="text-gray-500 text-sm">EU</span>
            </td>
            <td>
              <span class="bg-teal-200 rounded-full px-3 py-1 text-teal-800">
                Paid
              </span>
            </td>
            <td>
              <button class="text-light-blue-vivid-700 hover:underline">
                View
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000045</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                <span
                  class="inline-block w-4 h-4 mr-2 bg-yellow-vivid-200 rounded-full"
                ></span>
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000044</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                <span
                  class="inline-block w-4 h-4 mr-2 bg-red-vivid-200 rounded-full"
                ></span>
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000043</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000042</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000041</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
          <tr>
            <td class="pl-3 w-1/2">
              {{ faker.name.findName() }} <br />
              <span class="text-gray-500 text-sm">000040</span>
            </td>
            <td class="w-1/2 text-right pr-8">
              <div class="inline-flex items-center">
                {{ price() }}
              </div>
              <br />
              <span class="text-gray-500 text-sm">EU</span>
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
    </div>
  </Layout>
</template>

<script>
import faker from 'faker'
import Overview from '@/components/Dashboard/Overview'
import RecentInvoices from '@/components/Dashboard/RecentInvoices'

export default {
  components: {
    Overview,
    RecentInvoices,
  },
  metaInfo: {
    title: 'Dashboard',
  },
  data: function() {
    return {
      faker,
      overviews: [
        { title: 'Overdue', description: this.price(), action: 'View all' },
        { title: 'Total', description: this.price(), action: 'View all' },
        { title: 'In Draft', description: this.price(), action: 'View all' },
      ],
      invoices: [
        {
          title: faker.name.findName(),
          status: 'Pending',
          price: this.price(),
          date: 'Due in 2 days',
          action: 'View Invoice',
        },
        {
          title: faker.name.findName(),
          status: 'Overdue',
          price: this.price(),
          date: 'Due Yesterday',
          action: 'View Invoice',
        },
        {
          title: faker.name.findName(),
          status: 'Paid',
          price: this.price(),
          date: 'Due 16 days ago',
          action: 'View Invoice',
        },
      ],
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
.gradient-blue {
  background-image: linear-gradient(to top right, #127fbf 0%, #0b69a3 70%);
}
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

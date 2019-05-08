<template>
  <Layout :bland="true">
    <section class="gradient-blue py-2">
      <Overview :items="overviews"></Overview>
    </section>

    <div class="px-3 mx-auto w-full lg:w-10/12">
      <InvoicesCards :items="invoices" class="mt-8 my-10"></InvoicesCards>

      <InvoicesTable :items="clients" class="mt-8 mb-12"></InvoicesTable>
    </div>
  </Layout>
</template>

<script>
import faker from "faker";
import Overview from "../components/Dashboard/Overview";
import InvoicesCards from "../components/Dashboard/InvoicesCards";
import InvoicesTable from "../components/Dashboard/InvoicesTable";

export default {
  components: {
    Overview,
    InvoicesCards,
    InvoicesTable
  },
  metaInfo: {
    title: "Dashboard"
  },
  data: function() {
    return {
      faker,
      overviews: [
        { title: "Overdue", description: this.price(), action: "View all" },
        { title: "Total", description: this.price(), action: "View all" },
        { title: "In Draft", description: this.price(), action: "View all" }
      ],
      invoices: [
        {
          title: faker.name.findName(),
          status: "Pending",
          price: this.price(),
          date: "Due in 2 days",
          action: "View Invoice"
        },
        {
          title: faker.name.findName(),
          status: "Overdue",
          price: this.price(),
          date: "Due Yesterday",
          action: "View Invoice"
        },
        {
          title: faker.name.findName(),
          status: "Paid",
          price: this.price(),
          date: "Due 16 days ago",
          action: "View Invoice"
        }
      ],
      clients: [
        {
          id: "000045",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Aug. 10, 2018",
          due: "In 2 days",
          price: this.price(),
          currency: "EU",
          status: "Pending",
          action: "View"
        },
        {
          id: "000044",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Aug. 7, 2018",
          due: "Yesterday",
          price: this.price(),
          currency: "EU",
          status: "Overdue",
          action: "View"
        },
        {
          id: "000043",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Jul. 23, 2018",
          due: "16 days ago",
          price: this.price(),
          currency: "EU",
          status: "Paid",
          action: "View"
        },
        {
          id: "000042",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Jul. 13, 2018",
          due: "1 month ago",
          price: this.price(),
          currency: "EU",
          status: "Paid",
          action: "View"
        },
        {
          id: "000041",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Jul. 9, 2018",
          due: "1 month ago",
          price: this.price(),
          currency: "EU",
          status: "Paid",
          action: "View"
        },
        {
          id: "000040",
          avatar: faker.internet.avatar(),
          name: faker.name.findName(),
          issued: "Jul. 6, 2018",
          due: "1 month ago",
          price: this.price(),
          currency: "EU",
          status: "Paid",
          action: "View"
        }
      ]
    };
  },
  methods: {
    /**
     * @param {number} number
     * @returns {string}
     */
    toCurrency(number) {
      return number.toLocaleString("en-GB", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    },
    price() {
      return this.toCurrency(
        faker.random.number({
          min: 100,
          max: 9000
        })
      );
    }
  }
};
</script>

<style>
.gradient-blue {
  background-image: linear-gradient(to top right, #127fbf 0%, #0b69a3 70%);
}
</style>

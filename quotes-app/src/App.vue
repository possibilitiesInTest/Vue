<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <app-delete-info></app-delete-info>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import DeleteInfo from "./components/DeleteInfo.vue";

export default {
  data() {
    return {
      quotes: ["Just one quote to get us started"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appDeleteInfo: DeleteInfo
  }
};
</script>

<style>
</style>
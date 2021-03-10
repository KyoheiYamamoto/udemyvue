<template>
  <div>
    <LikeHeader />
    <h2>{{ number }}</h2>
    <LIkeNumber :total-number="number" @my-click="incrementNumber"></LIkeNumber>
    <LIkeNumber :total-number="number"></LIkeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";
export default {
  data() {
    return {
      number: 14,
    };
  },
  components: {
    LikeHeader,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>
<style scoped>
div {
  border: 1px solid blue;
}
</style>

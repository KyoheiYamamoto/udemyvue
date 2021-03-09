<template>
  <div>
    <LikeHeader />
    <h2>{{ number }}</h2>
    <LIkeNumber :total-number="number" test-props="test"></LIkeNumber>
    <LIkeNumber :total-number="number" test-props="test"></LIkeNumber>
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
};
</script>
<style scoped>
div {
  border: 1px solid blue;
}
</style>

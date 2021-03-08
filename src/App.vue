<template>
<div>
  <LikeHeader />
  <LIkeNumber></LIkeNumber>
</div>
</template>

<script>
import LikeHeader from './components/LikeHeader'
export default {
    components:{
      LikeHeader
    }
}
</script>
<style scoped>
div {
  border: 1px solid blue;
}
</style>

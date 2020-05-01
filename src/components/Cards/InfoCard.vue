<template>
  <transition
    @enter="fadeInRight"
    @leave="fadeOutLeftDelay"
  >
    <div
      v-if="card"
      class="info-card"
    >
      {{ card.code }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.info-card {
  background-color: $card-background-color;
  border-radius: 1rem;
  max-width: 55rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 49rem;
  margin-right: 3rem;
  opacity: 0;
}
</style>

<template>
  <div class="info-card">
    <div class="info-card__info">
      <span class="info-card__highlight">
        {{ card.infoType }}
      </span>
      <p
        v-for="(key, index) in infoKeys"
        :key="index"
        class="info-card__label"
      >
        {{ card[key] }}
      </p>
    </div>
    <div class="info-card__data">
      <div
        v-for="(key, index) in dataKeys"
        :key="index"
        class="info-card__row"
      >
        <span class="info-card__label">
          {{ language[key] }}
        </span>
        <span class="info-card__value">
          {{ card[key] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    language: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    infoKeys () {
      return Object.keys(this.card).slice(1, 4)
    },
    dataKeys () {
      return Object.keys(this.card).slice(4)
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
  flex: 0 0 100%;
  opacity: 0;
  position: relative;

  &__first {
    z-index: 2;
  }

  &__last {
    z-index: 1;
  }

  &__info {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $separator-color;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
  }

  &__highlight {
    font-size: 2.4rem;
    font-weight: 300;
    color: $card-highlight-color;
    margin-bottom: 2rem;
  }

  &__row {
    display: flex;
    margin-bottom: 1.5rem;
  }

  &__label {
    font-size: 1.3rem;
    color: $card-label-color;
    margin-top: 0;
    min-width: 19rem;
  }

  &__value {
    flex: 1;
    font-size: 1.3rem;
    color: $card-data-color;
  }
}
</style>

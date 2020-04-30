<template>
  <div class="card-container">
    <div
      v-for="(card, index) in mainCards"
      :key="card.code"
      :data-card="index"
      class="card"
    >
      {{ card.buyerName }}
      <div class="card__logo-container">
        <img
          src="../../assets/logo-510.png"
          class="card__logo"
        >
        <span class="card__status" @click="swipeCard()">{{ card.status }}</span>
      </div>
      <div class="card__invoice-info">
        <div class="card__invoice">
          <span>{{ language.invoice }}</span>
          <span>{{ card.code }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
    language: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
      selected: 0,
      mainCards: [],
    }
  },
  watch: {
    cards: {
      immediate: true,
      handler (newData, oldData) {
        if (newData) {
          this.mainCards = this.cards
        }
      },
    },
  },
  methods: {
    swipeCard () {
      const elements = document.querySelectorAll('.card')
      const card = this.mainCards[this.mainCards.length - 1]
      elements[this.mainCards.length - 3].classList.add('beforeEnter')
      elements[this.mainCards.length - 2].classList.add('onEnter')
      elements[this.mainCards.length - 1].classList.add('onLeave')
      this.mainCards = this.mainCards.unshift(card)
      this.moveElement().then(() => {
        elements.forEach(el => {
          el.classList.remove('beforeEnter')
          el.classList.remove('onEnter')
          el.classList.remove('onLeave')
        })
      })
    },
    moveElement () {
      return new Promise(resolve => setTimeout(() => resolve(this.test()), 500))
    },
    test () {
      this.mainCards = this.mainCards.pop()
    },
  },
}
</script>

<style lang="scss" scoped>
$default-diff:  50px;
$default-width: 100%;
$default-min: 10%;

.card-container {
  position: relative;
  width: 100%;
  max-width: 80rem;
  height: 40rem;

  .card {
    background-color: $card-background-color;
    border-radius: 1rem;
    max-width: 80rem;
    padding: 8rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;

    &__logo-container {
      display: flex;
      justify-content: space-between;
    }

    &__logo {
      max-width: 9rem;
    }

    &__status {
      border: 2px solid $card-status-color;
      padding: 0.3rem 1.3rem;
      max-height: 3rem;
      border-radius: 2.4rem;
      font-size: 1.2rem;
      line-height: 2rem;
      color: $card-status-color;
    }

    &:last-child {
      z-index: 3;
    }

    &.beforeEnter {
      animation: beforeRestore 500ms;
    }

    &.onEnter {
      animation: restore 500ms;
    }

    &.onLeave {
      animation: scaleUp 500ms;
    }

    @for $i from 1 through 3 {
      &:not(:last-child):nth-child(#{$i}) {
        top: ($default-diff - (($i * 20) - 10));
        transform: scale(0.9 + (0.01 * $i) + (0.02 * $i));
        opacity: (0 + 0.25 * $i);
        z-index: $i;
      }
    }
  }
}

@keyframes scaleUp {
    0% {transform: scale(1) translateY(0); opacity: 1;}
    100% {transform: scale(1.05) translateY(-40px); opacity: 0;}
}

@keyframes restore {
    0% {transform: scale(0.96); opacity: 0.5; top: 20px;}
    100% {transform: scale(1); opacity: 1; top: 0;}
}

@keyframes beforeRestore {
    0% {transform: scale(0.93); opacity: 0.25; top: 40px;}
    100% {transform: scale(0.96); opacity: 0.5; top: 20px;}
}
</style>

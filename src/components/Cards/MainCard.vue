<template>
  <div
    id="card-container"
    class="card-container"
  >
    <div
      v-for="(card, index) in mainCards"
      :key="index"
      :data-card="index"
      :class="classModifier(card)"
      class="card"
    >
      <div class="card__logo-container">
        <img
          src="../../assets/logo-510.png"
          class="card__logo"
        >
        <span class="card__status">{{ card.status }}</span>
      </div>
      <div class="card__row card__invoice-info">
        <div class="card__cell">
          <span class="card__label">{{ language.invoice }}</span>
          <span class="card__highlight">{{ card.code }}</span>
        </div>
        <div class="card__cell card__right">
          <span class="card__label">{{ language.totalAmount }}</span>
          <span class="card__highlight">€{{ card.totalAmount }}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__cell">
          <span class="card__label">{{ language.buyerName }}</span>
          <span class="card__data">{{ card.buyerName }}</span>
        </div>
        <div class="card__cell">
          <span class="card__label">{{ language.sellerName }}</span>
          <span class="card__data">{{ card.sellerName }}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__cell">
          <span class="card__label">{{ language.started }}</span>
          <span class="card__data">{{ card.started }}</span>
        </div>
        <div class="card__cell">
          <span class="card__label">{{ language.blockchainAddress }}</span>
          <span class="card__data">{{ card.blockchainAddress }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import Hammer from 'hammerjs'

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
  mounted () {
    this.createSwipe()
  },
  methods: {
    createSwipe () {
      const container = document.getElementById('card-container')
      const mc = new Hammer(container)
      mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
      mc.on('swipeup', (ev) => {
        this.swipeCard()
      })
    },
    swipeCard () {
      const cloneCard = cloneDeep(this.mainCards[this.mainCards.length - 1])
      this.mainCards.unshift(cloneCard)
      this.mainCards[this.mainCards.length - 3].class = 'beforeEnter'
      this.mainCards[this.mainCards.length - 2].class = 'onEnter'
      this.mainCards[this.mainCards.length - 1].class = 'onLeave'
      this.removeElement().then(() => {
      })
    },
    removeElement () {
      return new Promise(resolve => setTimeout(() => resolve(this.popCard()), 500))
    },
    popCard () {
      this.mainCards.pop()
      this.mainCards.forEach(el => {
        el.class = null
      })
    },
    classModifier (card) {
      return card.class && `${card.class}`
    },
  },
}
</script>

<style lang="scss" scoped>
$default-diff:  70px;
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

    &__invoice-info {
      margin-top: 5rem;
    }

    &__row {
      display: flex;
      margin-top: 5rem;
    }

    &__cell {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__right {
      text-align: right;
    }

    &__label {
      font-size: 1.3rem;
      color: $card-label-color;
      margin-bottom: 0.7rem;
    }

    &__data {
      font-size: 1.8rem;
      font-weight: 300;
      color: $card-data-color;
    }

    &__highlight {
      font-size: 2.4rem;
      font-weight: 300;
      color: $card-highlight-color;
    }

    &:last-child {
      z-index: 3;
    }

    &.beforeEnter {
      animation: beforeRestore 500ms;
      will-change: transform;
    }

    &.onEnter {
      animation: restore 500ms;
      will-change: transform;
    }

    &.onLeave {
      animation: scaleUp 500ms;
      will-change: transform;
    }

    @for $i from 1 through 3 {
      &:not(:last-child):nth-child(#{$i}) {
        top: ($default-diff - (($i * 30) - 20));
        transform: scale(0.85 + (0.05 * $i));
        opacity: (0 + 0.25 * $i);
        z-index: $i;
      }
    }
  }
}

@keyframes scaleUp {
    0% {transform: scale(1) translateY(0); opacity: 1;}
    20% {transform: scale(1.01) translateY(-10px); opacity: 0.8;}
    40% {transform: scale(1.02) translateY(-20px); opacity: 0.6;}
    60% {transform: scale(1.03) translateY(-30px); opacity: 0.4;}
    80% {transform: scale(1.04) translateY(-40px); opacity: 0.2;}
    100% {transform: scale(1.05) translateY(-50px); opacity: 0;}
}

@keyframes restore {
    0% {transform: scale(0.95); opacity: 0.5; top: 30px;}
    20% {transform: scale(0.96); opacity: 0.6; top: 24px;}
    40% {transform: scale(0.97); opacity: 0.7; top: 18px;}
    60% {transform: scale(0.98); opacity: 0.8; top: 12px;}
    80% {transform: scale(0.99); opacity: 0.9; top: 6px;}
    100% {transform: scale(1); opacity: 1; top: 0;}
}

@keyframes beforeRestore {
    0% {transform: scale(0.9); opacity: 0.25; top: 60px;}
    20% {transform: scale(0.91); opacity: 0.3; top: 54px;}
    40% {transform: scale(0.92); opacity: 0.35; top: 48px;}
    60% {transform: scale(0.93); opacity: 0.4; top: 42px;}
    80% {transform: scale(0.94); opacity: 0.45; top: 36px;}
    100% {transform: scale(0.95); opacity: 0.5; top: 30px;}
}
</style>

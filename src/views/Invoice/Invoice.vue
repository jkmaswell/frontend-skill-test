<template>
  <div class="invoice">
    <div class="invoice__loader">
      <transition @leave="ballFade">
        <div
          v-if="showLoader"
          class="invoice__loader__shadow-ball"
        />
      </transition>
      <transition @leave="fadeOutUp">
        <type-header
          v-if="showLoader"
          v-bind="headerSettings"
          size="large"
          class="invoice__loader__header"
        />
      </transition>
      <transition @leave="fade">
        <loader-spinner v-if="showLoader" />
      </transition>
    </div>
    <template>
      <div class="invoice__header">
        <transition
          @enter="fadeIn"
        >
          <img
            v-if="!showLoader"
            src="../../assets/button-el.png"
            class="invoice__header__img"
          >
        </transition>
        <transition
          @enter="fadeInLeft"
        >
          <type-header
            v-if="!showLoader"
            v-bind="headerSettings"
            size="small"
            class="invoice__header__info"
          />
        </transition>
      </div>
      <div
        :class="selectCard && 'selected'"
        class="invoice__content"
      >
        <transition
          @enter="fadeInLeft"
          @leave="fadeOut"
        >
          <button
            v-if="selectCard"
            class="invoice__button invoice__back-button"
            @click="goBack()"
          >
            <img src="../../assets/icon-arrow-left.png">
          </button>
        </transition>
        <transition
          @enter="fadeInUp"
        >
          <main-card
            v-if="!showLoader"
            :cards="invoices"
            :language="viewLanguage.card"
            @selected="showCardInfo"
          />
        </transition>
        <transition
          @enter="fadeInRight"
          @leave="fadeOutLeftDelay"
        >
          <info-card
            v-if="selectCard"
            :card="selectCard.info[0]"
            :language="viewLanguage.info"
            class="info-card__first"
          />
        </transition>
        <transition
          @enter="fadeInRightDelay"
          @leave="fadeOutLeft"
        >
          <info-card
            v-if="selectCard"
            :card="selectCard.info[1]"
            :language="viewLanguage.info"
            class="info-card__last"
          />
        </transition>
      </div>
      <transition
        @enter="scaleUp"
        @leave="scaleDown"
      >
        <button
          v-if="selectCard"
          class="invoice__button invoice__wallet"
        >
          <img
            src="../../assets/icon-wallet.png"
            class="invoice__wallet__icon"
          >
        </button>
      </transition>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Hammer from 'hammerjs'
import velocity from 'velocity-animate'
import languageMixin from '@/mixins/languageMixin'
import animationsMixin from '@/mixins/animationsMixin'
import TypeHeader from '@/components/TypeHeader/TypeHeader'
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner'
import MainCard from '@/components/Cards/MainCard'
import InfoCard from '@/components/Cards/InfoCard'

export default {
  components: {
    TypeHeader,
    LoaderSpinner,
    MainCard,
    InfoCard,
  },
  mixins: [languageMixin('invoice'), animationsMixin],
  data () {
    return {
      showLoader: true,
      type: 'Invoice',
      client: 'STF Belgium',
      startDate: 'January',
      endDate: 'April',
      year: '2018',
      selectCard: null,
    }
  },
  computed: {
    ...mapState({
      invoices: state => state.invoices.invoices,
    }),
    headerSettings () {
      return {
        language: this.viewLanguage,
        type: this.type,
        client: this.client,
        startDate: this.startDate,
        endDate: this.endDate,
        year: this.year,
      }
    },
  },
  mounted () {
    this.dispatchAction('invoices/getInvoices').then(() => {
      this.createHorizontalSwipe()

      // Simulate Long BE calling
      setTimeout(() => {
        this.showLoader = false
      }, 3000)
    })
  },
  methods: {
    ...mapActions({
      dispatchAction: 'dispatchAction',
    }),
    createHorizontalSwipe () {
      const container = document.querySelector('.invoice__content')
      const options = {
        preventDefault: true,
      }
      const mc = new Hammer(container, options)
      mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
      mc.on('swiperight', (ev) => {
        this.scrollLeft()
      })
      mc.on('swipeleft', (ev) => {
        this.scrollRight()
      })
    },
    ballFade (el, done) {
      velocity(el, { opacity: 1, translateX: '-100px', translateY: '-100px' }, { duration: 600 })
      velocity(el, { opacity: 0 }, { delay: 50, complete: done })
    },
    showCardInfo (card) {
      this.selectCard = card
    },
    goBack () {
      this.selectCard = null
    },
    scrollLeft () {
      const containerSelected = document.querySelector('.invoice__content.selected')
      if (containerSelected) {
        containerSelected.style.transform = 'translateX(0)'
      }
    },
    scrollRight () {
      const containerSelected = document.querySelector('.invoice__content.selected')
      const offset = 100
      if (containerSelected) {
        containerSelected.style.transform = `translateX(calc(${containerSelected.offsetWidth}px - ${containerSelected.scrollWidth}px - ${offset}px))`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.invoice {
  width: 100%;
  position: relative;

  &__loader {
    text-align: center;
    max-width: 80rem;
    margin: auto;

    &__header {
      margin: 16rem 0 24rem;
    }

    &__shadow-ball {
      background: radial-gradient(circle, rgba($shadow-ball-color-start,0.6) 0%, rgba($shadow-ball-color-end,0) 50%);
      width: 100rem;
      height: 100rem;
      position: fixed;
      left: -29rem;
      top: -23rem;
      transition: $transition;
    }
  }

  &__header {
    display: flex;
    align-items: center;

    &__img {
      opacity: 0;
      width: 9rem;
      margin-right: 2rem;
      transition: $transition;
    }

    &__info {
      opacity: 0;
      transition: $transition;
    }
  }

  &__content {
    display: flex;
    position: absolute;
    min-width: 100%;
    left: 50%;
    top: 50%;
    margin-top: -25rem;
    margin-left: -40rem;

    &.selected {
      transition: $transition;
      will-change: transform;
      left: 0;
      margin-left: 8rem;
    }

    &:not(.selected) {
      transition: $transition;
      transition-delay: 0.6s;
    }
  }

  &__button {
    background: none;
    border: none;
    opacity: 0;
    outline: none;
    transition: $transition;
  }

  &__back-button {
    position: absolute;
    z-index: 3;
    outline: none;
    width: 5rem;
    top: 50%;
    height: 4rem;
    margin-top: -2rem;
    left: -8rem;
  }

  &__wallet {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    background-color: $wallet-color;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.8rem 2.5rem -0.5rem $wallet-color;

    &__icon {
      filter: contrast(100);
      width: 3rem;
    }
  }
}
</style>

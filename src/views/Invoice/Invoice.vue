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
    </template>
  </div>
</template>

<script>
import languageMixin from '@/mixins/languageMixin'
import animationsMixin from '@/mixins/animationsMixin'
import TypeHeader from '@/components/TypeHeader/TypeHeader'
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner'
import velocity from 'velocity-animate'

export default {
  components: {
    TypeHeader,
    LoaderSpinner,
  },
  mixins: [languageMixin('loader'), animationsMixin],
  data () {
    return {
      showLoader: true,
      type: 'Invoice',
      client: 'STF Belgium',
      startDate: 'January',
      endDate: 'April',
      year: '2018',
    }
  },
  computed: {
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
    setTimeout(() => {
      this.showLoader = false
    }, 5000)
  },
  methods: {
    ballFade (el, done) {
      velocity(el, { opacity: 1, translateX: '-100px', translateY: '-100px' }, { duration: 600 })
      velocity(el, { opacity: 0 }, { delay: 50, complete: done })
    },
  },
}
</script>

<style lang="scss" scoped>
.invoice {
  width: 100%;

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
    }
  }

  &__header {
    display: flex;
    align-items: center;

    &__img {
      opacity: 0;
      width: 9rem;
      margin-right: 2rem;
    }

    &__info {
      opacity: 0;
    }
  }
}
</style>

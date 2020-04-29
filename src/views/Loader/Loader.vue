<template>
  <div class="loader">
    <div class="loader__shadow-ball" />
    <transition @leave="headerTransition">
      <type-header
        v-if="show"
        v-bind="headerSettings"
      />
    </transition>
    <loader-spinner />
  </div>
</template>

<script>
import languageMixin from '@/mixins/languageMixin'
import TypeHeader from '@/components/TypeHeader/TypeHeader'
import LoaderSpinner from '@/components/LoaderSpinner/LoaderSpinner'
import velocity from 'velocity-animate'

export default {
  components: {
    TypeHeader,
    LoaderSpinner,
  },
  mixins: [languageMixin('loader')],
  data () {
    return {
      show: true,
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
        size: 'large',
      }
    },
  },
  mounted () {
    setTimeout(() => {
      this.show = false
      // this.$router.push({ name: 'invoice' })
    }, 5000)
  },
  methods: {
    headerTransition (el, done) {
      velocity(el, { opacity: 0, transform: 'translateY(10px)' }, { complete: done }).then(() => {
        console.log('done')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.loader {
  text-align: center;
  max-width: 80rem;
  margin: 16rem auto 0;

  .header {
    margin-bottom: 24rem;
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
</style>

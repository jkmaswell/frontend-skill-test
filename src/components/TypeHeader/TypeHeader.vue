<template>
  <h1
    :class="sizeModifier"
    class="header"
  >
    {{ language.showMe }}
    <span class="header__entry">{{ type }}</span>
    {{ language.of }}
    <span class="header__entry">{{ client }}</span>
    {{ language.from }}
    <span class="header__entry">{{ startDate }}</span>
    {{ language.to }}
    <span class="header__entry">{{ endDate }}</span>
    {{ language.of }}
    <span class="header__entry">{{ year }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    language: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: null,
    },
    client: {
      type: String,
      default: null,
    },
    startDate: {
      type: String,
      default: null,
    },
    endDate: {
      type: String,
      default: null,
    },
    year: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'small',
      validator: value => ['small', 'large'].includes(value),
    },
  },
  computed: {
    sizeModifier () {
      return `header--${this.size}`
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  color: $header-primary-color;
  font-weight: 200;

  &__entry {
    color: $header-secondary-color;
  }

  &--small {
    font-size: 1.8rem;
  }

  &--large {
    font-size: 5rem;
  }
}
</style>

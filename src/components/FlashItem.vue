<template>
    <div v-bind:class="alertClass" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <p>{{ flash.message }}</p>
    </div>
</template>

<script>
export default {
  props: ['flash'],
  computed: {
    alertClass() {
      const alertClass = {};
      alertClass[`uk-alert-${this.flash.type}`] = true;
      return alertClass;
    },
  },
};
</script>


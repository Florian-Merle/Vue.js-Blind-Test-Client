<template>
  <div class="flashs">
    <flash-item
      v-for="(flash, index) in flashs"
      v-bind:key="`flash-${index}`"
      v-bind:flash="flash">
    </flash-item>
  </div>
</template>

<script>
import FlashItem from './FlashItem';

export default {
  name: 'Flash',
  components: {
    'flash-item': FlashItem,
  },
  data() {
    return {
      flashs: [],
    };
  },
  mounted() {
    this.$eventBus.$on('flash', (args) => {
      if (!args.message) { return; }

      const flash = {
        ...{
          type: 'primary',
          duration: 2500,
        },
        ...args,
      };

      this.flashs.push(flash);

      if (flash.duration !== 0) {
        setTimeout(() => {
          this.flashs = this.flashs.filter(e => e !== flash);
        }, flash.duration);
      }
    });
  },
};
</script>

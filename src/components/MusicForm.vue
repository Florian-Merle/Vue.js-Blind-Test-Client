<template>
  <div>
    <div class="uk-margin">
      <input class="uk-input" type="text" v-model="music.name" placeholder="Name">
    </div>

    <div class="uk-margin">
      <input class="uk-input" type="text" v-model="music.url" placeholder="URL">
    </div>

    <button v-on:click="addWrongAnswer()"
      class="uk-button uk-button-default"
      >Add a wrong answer</button>


    <div class="uk-margin uk-column-1-2"
      v-for="(wrongAnswer, index) in music.wrongAnswers"
      v-bind:key="index">

      <div>
        <input
          class="uk-input"
          type="text"
          v-model="music.wrongAnswers[index]"
          v-bind:placeholder="`Wrong answer n°${index+1}`">
      </div>

      <div>
        <button v-on:click="removeWrongAnswer(index)"
          class="uk-button uk-button-default"
          >Remove answer</button>
      </div>
    </div>

    <input class="uk-button uk-button-default"
      type="submit"
      v-model="action"
      v-on:click="publish()">
  </div>
</template>

<script>

export default {
  name: 'MusicForm',
  data() {
    return {
      music: {
        name: '',
        url: '',
        wrongAnswers: [],
      },
      create: true,
    };
  },
  props: ['musicData'],
  watch: {
    musicData: {
      immediate: true,
      handler(newVal) {
        if (!newVal) { return; }
        this.music = newVal;
        this.create = false;
      },
    },
  },
  methods: {
    publish() {
      this.$emit('musicPublished', this.music);
    },
    addWrongAnswer() {
      this.music.wrongAnswers.push('');
    },
    removeWrongAnswer(index) {
      this.music.wrongAnswers.splice(index, 1);
    },
  },
  computed: {
    action() {
      return this.create ? 'Create' : 'Update';
    },
  },
};
</script>

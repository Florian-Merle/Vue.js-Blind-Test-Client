<template>
  <div>
    <h2>Find the title 🎶</h2>

    <music-player v-bind:url="music.url">
    </music-player>

    <div
      class="uk-button uk-button-default uk-margin-small-bottom uk-width-1-1"
      v-for="(answer, index) in possibleAnswers"
      v-bind:key="`answer-${index}`"
      v-on:click="submitAnswer(answer)">
        {{ answer }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import MusicPlayer from '@/components/MusicPlayer';

export default {
  name: 'GameView',
  components: {
    musicPlayer: MusicPlayer,
  },
  props: ['music'],
  computed: {
    possibleAnswers() {
      const answers = _.clone(this.music.wrongAnswers);
      answers[answers.length] = this.music.name;
      return _.shuffle(answers);
    },
  },
  methods: {
    submitAnswer(submittedAnswer) {
      this.$emit(
        'answerSubmitted',
        submittedAnswer === this.music.name,
      );
    },
  },
};
</script>

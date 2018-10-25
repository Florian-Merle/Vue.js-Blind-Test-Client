<template>
  <div>
    <h1>Play</h1>

    <game-view
      v-if="currentMusic"
      v-bind:music="currentMusic"
      @answerSubmitted="answerSubmitted">
      </game-view>

    <div
      v-if="gameFinished"
      class="uk-card uk-card-default uk-card-hover uk-card-body">
      <div class="uk-card-body">
        Game finished,
        {{ correctAnswerCounter }} correct answers out of {{ playlist.musics.length }}
      </div>
      <div class="uk-card-footer">
        <router-link :to="{ path: '/' }" class="uk-button uk-button-text">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { PLAYLIST_QUERY_WITH_MUSICS } from '@/graphql';
import GameView from '@/components/GameView';

export default {
  name: 'Game',
  components: {
    gameView: GameView,
  },
  data() {
    return {
      playlist: {},
      musicCounter: 0,
      correctAnswerCounter: 0,
      gameFinished: false,
    };
  },
  async created() {
    const result = await this.$apollo.query({
      query: PLAYLIST_QUERY_WITH_MUSICS,
      variables: {
        id: this.$route.params.id,
      },
    });

    this.playlist = Object.assign({}, this.playlist, result.data.playlist);
  },
  computed: {
    currentMusic() {
      return this.playlist.musics ? this.playlist.musics[this.musicCounter] : null;
    },
  },
  methods: {
    answerSubmitted(result) {
      if (result) {
        this.correctAnswerCounter += 1;
      }

      this.musicCounter += 1;
      if (this.musicCounter >= this.playlist.musics.length) {
        this.gameFinished = true;
      }
    },
  },
};
</script>

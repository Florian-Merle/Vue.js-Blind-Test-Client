<template>
  <div>
    <iframe
      class="music-player"
      allow="autoplay"
      v-bind:src="iframeUrl">
    </iframe>

    <div class="scene">
      <div id="turntable">
        <div id="arm"></div>
        <div id="buttons">Eject</div>
      </div>
      <div id="vinyl">
        <div class="face">
          <div class="sticker">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url'],
  computed: {
    iframeUrl() {
      return `https://www.deezer.com/plugins/player?type=tracks&id=${this.url}&autoplay=true`;
    },
  },
};
</script>


<style scoped>
.music-player {
  display: none;
}

.scene {
  transform: perspective(400px) rotateX(50deg);
  width: 550px;
  margin: auto;
}

@keyframes fullRotation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wiggle {
  0% { transform: rotate(35deg); }
  50% { transform: rotate(50deg); }
  100% { transform: rotate(35deg); }
}

#vinyl {
  width: 180px;
  height: 180px;

  margin: 50px auto;
  margin-right: 40%;
}

#vinyl .face:before, #vinyl .face:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 80%;
  height: 80%;
  border-radius: 50%;

  content: '';
  display: block;

  border: 1px solid #111;
}

#vinyl .face:after {
  width: 50%;
  height: 50%;
}

#vinyl .face {
  width: 100%;
  height: 100%;
  border-radius: 50%;

  position: relative;

  background-image: linear-gradient(to top, #464646, #383838, #2b2b2b, #1e1e1e, #111111);

  box-shadow: 0px 0px 10px 5px;

  animation-name: fullRotation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#vinyl .face .sticker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  margin: auto;

  background-image: radial-gradient(circle, #ffb600, #e1a61a, #c49526, #a8852e, #8e7433);
}

#vinyl .face .sticker:before {
  content: '?';
  display: block;
  height: 100%;

  transform: rotate(220deg);

  text-align: center;
  font-size: 1.2em;
  font-family: 'Arial Black', Gadget, sans-serif;
  user-select: none;
}

#vinyl .face .sticker:after {
  content: '';

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 15%;
  height: 15%;
  border-radius: 50%;
  margin: auto;

  background-image: radial-gradient(circle, #fbfbfb, #f0f0f0, #e6e6e6, #dbdbdb, #d1d1d1);
}

#turntable {
  display: block;

  position: absolute;
  top: -8%;
  bottom: -8%;
  left: 18%;
  right: 18%;

  border-bottom: 5px solid #aeaeae;
  background-image: linear-gradient(to bottom, #bcbcbc, #b7b7b7, #b3b3b3, #aeaeae, #aaaaaa);
  box-shadow: 0px 10px 5px 3px;
}

#buttons {
  position: absolute;
  bottom: 4%;
  right: 12%;
  height: 10%;
  width: 12%;

  color: #eee;
  background-color: #222;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.8em;
  text-align: center;
  user-select: none;

  box-shadow: 0px 0px 5px 2px #666;
}

#arm {
  position: absolute;
  top: 14%;
  right: 15%;
  height: 70%;
  width: 1%;

  transform-origin: 50% 0%;
  animation-name: wiggle;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  z-index: 10;

  background-color: #888;
}

#arm:before {
  content: '';
  display: block;

  width: 300%;
  height: 20%;
  margin-left: -100%;

  background-color: #000;
}

#arm:after {
  position: absolute;
  content: '';
  display: block;

  bottom: 0;
  width: 200%;
  height: 8%;
  margin-left: -50%;

  background-color: #000;
}
</style>

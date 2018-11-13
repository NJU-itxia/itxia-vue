<template>
  <div class="container">
    <div :class="eggDiv" id="eggDiv" @click="changeClass">
    </div>
    <div :class="touchDiv" @mouseenter="touchStart" @mouseleave="touchEnd">
    </div>
    <div id="box1">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Lab",
    data() {
      return {
        eggDiv: "normal",
        changeTable: {
          "normal": "changeColor",
          "changeColor": "normal",
        },
        touchDiv: "touchDiv",
      }
    },
    methods: {
      changeClass() {
        this.eggDiv = this.changeTable[this.eggDiv];
      },
      touchStart() {
        console.log("here");
        this.touchDiv = ["touchDiv", "rotateDiv"]
      },
      touchEnd() {
        console.log("sajd")
        this.touchDiv = "touchDiv"
      }
    }
  }
</script>

<style scoped>
  @keyframes reverse {
    from {
      opacity: 1;
      transform: rotateY(0deg);
    }
    to {
      opacity: 0.5;
      transform: rotateY(180deg);
    }
  }

  @keyframes myfirst {
    0% {
      background: #afdcff;
      left: 100px;
      top: 30px;
      transform: rotateX(37deg);
    }
    25% {
      background: #f1ff62;
      left: 200px;
      top: 20px;
      transform: scaleX(2);
    }
    50% {
      background: #86ffad;
      left: 200px;
      top: 200px;
      transform: rotate(20deg);
    }
    75% {
      background: rgba(123, 128, 126, 0.56);
      left: 70px;
      top: 200px;
    }
    100% {
      background: #ff9e85;
      left: 50px;
      top: 120px;
    }
  }

  #eggDiv {
    width: 100px;
    height: 100px;
    position: fixed;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  .touchDiv {
    position: fixed;
    top: 200px;
    right: 600px;
    width: 300px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }

  .rotateDiv {
    animation: reverse 5s;
    transform: rotateY(180deg);
  }

  .normal {
    background-color: #fff;
  }

  .changeColor {
    animation: myfirst 5s;
    background-color: #42b983;
  }

  #box1 {
    position: fixed;
    right: 20px;
    height: 100px;
    width: 100px;
    background: #67a95f;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
    transition: background 2s ease, transform 2s;
  }

  #box1:hover {
    transform: scaleY(5);
    /*transform: rotate(180deg) scale(.5, .5);*/
    background: #ff9b67;
  }

</style>

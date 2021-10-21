<template>
  <div class="app-toast info" v-if="isShow">
    {{ text }}
  </div>
</template>
<style scoped>
  .app-toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background: #ccc;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    color: #fff;
    }
    .info {
      background: #00aaee;
      }
</style>
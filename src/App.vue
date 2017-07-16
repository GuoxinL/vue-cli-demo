<template>
  <div id="app">
    <img src="./assets/logo.png">
    name传参
    <p>------------------------{{ $route.name }}------------------------</p>
    <div>
      <router-link to="/">Home</router-link>
      |
      通过router-link标签中的to传参
      <router-link :to="{name:'Hi', params: {username: 'Guoxin'}}">Hi</router-link>
      |
      <router-link to="/hi/hi1">Hi1</router-link>
      |
      <router-link to="/hi/hi2">Hi2</router-link>

    </div>

    <transition name="fade">
      <router-view></router-view>
    </transition>
    <transition name="fade">
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    </transition>
    <transition name="fade">
      <router-link to="/params/198/高实在是高">params</router-link>
    </transition>
    |
    <transition name="fade">
      <router-link to="/home">hoho hoho hoho hoho hoho hohome</router-link>
    </transition>
    <div>
      <p>css过渡类名：</p>
      <p>组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：</p>

      <p>fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。</p>
      <p>fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。</p>
      <p>fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。</p>
      <p>fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。</p>
      <p>从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>

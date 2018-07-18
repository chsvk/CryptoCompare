<template>
  <div id="app">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" href="#">Customers</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crypto"><a class="nav-link" href="#">Crypto</a></router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>

  .nav{
    margin-top: 10px;
    margin-bottom: 20px;
  }

</style>

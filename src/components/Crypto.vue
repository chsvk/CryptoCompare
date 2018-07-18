<template>
  <div class="hello">
    <div class="crypto-container" v-for="(value,key) in cryptos">
      <span class="left">{{key}}</span>
      <span class="right">{{value.INR}} Indian Rupees</span>
      </br>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Crypto',
  data() {
    return {
      cryptos: []
    }
  },
  created(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=INR')
    .then(Response=>{
      this.cryptos = Response.data;
      console.log(Response);
    }).catch(e=>{
      console.log(e);
    })
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body{
  background: #f1f1f1;
}

.crypto-container{
  background: white;
  width: 70%;
  margin: 0 auto 4px auto;
  padding: 1em;
  box-shadow: 1px 1px 0 lightgrey; 
  align-self: center;
  justify-self: center;
}

.left{
  margin-left: 20px;
  float: left;
  font-weight: bold;
}

.right{
  margin-right: 20px;
  float: right;
  font-weight: bold;
}

</style>

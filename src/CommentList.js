<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style>
    .red {
      color: #f00;
    }
    .green {
      color: #009688;
    }
  </style>
</head>
<body>
  <div id="app">
    <ul>
      <li @click="changeRed = '苹果'" :class="{red: changeRed === '苹果'}">苹果</li>
      <li @click="changeRed = '香蕉'" :class="{red: changeRed === '香蕉'}">香蕉</li>
      <li @click="changeRed = '菠萝'" :class="{red: changeRed === '菠萝'}">菠萝</li>
    </ul>
    <hr/>
    <ul>
      <li v-for="(item, index) in list" :key="index" 
          :class="{green: green == index}" 
          @click="changeGreen(index)">
        {{item}}
      </li>
    </ul>
  </div>

  <script>
    new Vue({
      el: '#app',
      data: {
        changeRed: '',
        list: ["语文","数学","英语"],
        green: ''
      },
      methods: {
        changeGreen(index) {
          this.green = index
        }
      }
    })
  </script>
</body>
</html>
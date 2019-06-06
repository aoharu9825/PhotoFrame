(function(){
  'use strict';

  let timeoutId;

  const vm = new Vue({
    el: '#app',
    data:{
      newItem:'',
      nowItem:'0',
      datas:[]
    },
    watch:{
      datas:{
        handler: function(){
          localStorage.setItem('datas', JSON.stringify(this.datas));
        },
        deep: true
      }
    },
    mounted: function(){
      this.datas = JSON.parse(localStorage.getItem('datas')) || [];
    },
    methods:{
      addItem: function(){
        const item = {
          picture: 'PhotoFrame_pic/' + document.getElementById("picture").files[0].name,
          quote: this.newItem
        }
        this.datas.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        this.datas.splice(index, 1);
      },
      change: function(){
        this.nowItem = Math.floor(Math.random()*this.datas.length);
      },
      play: function(){
        const play = document.getElementById('play');
        const pause = document.getElementById('pause');

        play.classList.add('hidden');
        pause.classList.remove('hidden');

        timeoutId = setTimeout(()=>{
          this.nowItem++;
          if(this.nowItem === this.datas.length){this.nowItem = 0;}
          this.play();
        }, 5000);
      },
      pause: function(){
        play.classList.remove('hidden');
        pause.classList.add('hidden');
        clearTimeout(timeoutId);
      }
    }
  });
}());

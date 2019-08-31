<template>
  <div class="container">
    <div class="display">{{input || 0}}</div>
    <div class="btn" v-on:click="clear">C</div>
    <div class="btn" @click="assign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div class="btn operators" @click="divide">÷</div>
    <div class="btn" @click="push('7')">7</div>
    <div class="btn"  @click="push('8')">8</div>
    <div class="btn"  @click="push('9')">9</div>
    <div class="btn operators" @click="multiply">x</div>
    <div class="btn"  @click="push('4')">4</div>
    <div class="btn"  @click="push('5')">5</div>
    <div class="btn"  @click="push('6')">6</div>
    <div class="btn operators" @click="add">+</div>
    <div class="btn"  @click="push('1')">1</div>
    <div class="btn"  @click="push('2')">2</div>
    <div class="btn"  @click="push('3')">3</div>
    <div class="btn operators" @click="subtract">-</div>
    <div class="zero btn"  @click="push('0')">0</div>
    <div class="btn"  @click="push('.')">.</div>
    <div class="btn operators" @click="equal">=</div>
  </div>
  </template>

<script>
export default {
  name: 'calculator',
  props: {
    msg: String
  },
  data(){
    return {
      input:"",
      previous:null,
      operatorClicked:false,
      operator:null,
      showModal:false
      

    }
   },     
   methods:{
      clear(){

        this.input="";
        

      },
      assign(){
        if(this.input>0){
        this.input=this.input*-1;
          }
        else if(this.input<0){
          this.input=this.input*-1;
          }
        },
        percent(){
          this.input=parseFloat(this.input/100);
        },
        push(num){
                if(this.operatorClicked){
                    this.input='';
                    this.operatorClicked=false;
                }

               if(num=="."){
                  let myArray=this.input.split("");
                  if(myArray.indexOf(num)==-1){
                    this.input=this.input +num;
                      }
                  }
                else{
                this.input=this.input + num;
              }
        },
        setPrevious(){
          this.previous=this.input;
          this.operatorClicked=true;
        },
     
        add(){
          this.operator=(a,b)=> a + b;
          this.setPrevious();
        },
        subtract(){
           this.operator=(a,b)=> a - b;
           this.setPrevious();
        },
        multiply(){
          this.operator=(a,b)=> a * b;
          this.setPrevious();
        },
        divide(){
          this.operator=(a,b)=> a / b;
          this.setPrevious();
        },
        equal(){
          this.input=`${this.operator(parseFloat(this.previous),parseFloat(this.input))}`;
          this.previous=null;
        },
        toggleModal(){
          this.showModal=!this.showModal;
        }

     
   } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width:40%;
  margin-left:30%;
  margin-top: 10%;
  font-size:50px;
  display: grid;
  grid-template-columns:repeat(4,1fr);
  grid-auto-rows:minmax(40px,1fr);
}
.display {
  grid-column: 1/5;
  border: 2px solid #9B9388;
  background-color:#403C35;
  color:white;
  border-bottom:none;
  text-align: center;  

}
.zero {
  grid-column:1/3;
}
.btn {
  border : 1px solid #9B9388;
  background-color:#ECE8E7;
  text-align: center;
  }
.btn:hover {
  background-color:#CBC6BE; 
  cursor:pointer;
}

.operators {
  background-color:#FCA237;
  color:white;
}
.operators:hover {
  background-color:#F9910C;
}

</style>

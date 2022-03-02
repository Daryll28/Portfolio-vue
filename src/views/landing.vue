<template>
<section id="Home" style="max-height:100vh">

   
<div class="container"  >
<div class="row">

<div class="col-lg-5 col-sm-12" para>
  <span class="one">Daryll Grainger</span><br>
  <span class="two">Aspiring <br> Front <br> End <br> Developer</span>
</div>


  <div class="col-lg-5 col-sm-12 pic" >
 <img src="../assets/images/pic1.png" class="me" alt="Avatar" >
        </div>
</div>

        </div>


</section>
</template>

<script>

</script>


<style scoped>




.home{
    color: white;
    height: 100%;
}
.heading{
    padding-top: 250px;
    font-size: 90px;
    
}

.me{
  border: 2px solid red;
  box-shadow: 0 9px 92px 0 rgb(0, 17, 255);
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 80%;
  width: 80% ;
  height: 80%



}

.container{
  padding-top: 190px
}

.pic{
  margin-left: 150px
}


body {
  height: 100%;
  font-family: 'tradegothiclt-bold', sans-serif;
    padding: 15px;
  background-color: black;
  color: white;
  font-size: 15px;
  
}

span {
    padding-top: 15px;
  font-size: 3.5em;
  color: white;
  text-transform: uppercase;
  color: white;
  	-webkit-animation: text-shadow-pop-tl 0.9s both;
	        animation: text-shadow-pop-tl 0.9s both;
          border: none !important;

}

@-webkit-keyframes text-shadow-pop-tl {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: -1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}
@keyframes text-shadow-pop-tl {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: -1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}


span {
  border-bottom: .39em solid;
  border-top: .39em solid;
    border-left: .39em solid;
  border-right: .39em solid;



border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: white;
}



@media screen and (max-width: 385px){
.container{
  padding:0;
  padding-top:160px !important; 
  overflow: hidden;
  margin: 0;
}
.pic{
  padding: 0;
  margin-top: 110px !important;
  width: min-content;

}

}

@media screen and (max-width: 485px){
.container{
  padding:0;
    padding-top:160px !important; 

  overflow: hidden;
  margin: 0;
}
.pic{
  padding: 0;
  margin: 0;
}
}

@media screen and (max-width: 585px){
.container{
  padding:0;
    padding-top:160px !important; 

  overflow: hidden;
  margin: 0;
}
.pic{
  padding: 0;
  margin: 0;
}
}

@media screen and (max-width: 770px){
.one{
    font-size: 30px !important;
}
.container{
  padding:0 !important;
    padding-top:160px !important; 
margin: 0 !important;
  overflow: hidden;
}
.two{
   font-size: 30px !important;
}
.me{
width: 80%;
height:80% ; 
}
.pic{
  overflow: hidden;
}
}



@media screen and (max-width: 920px){
*{
  padding: 0 !important;
  margin: 0 !important;
}
.me{
  width:50%;


}
}




.me{
  	-webkit-animation: flip-scale-2-ver-left 0.9s linear both;
	        animation: flip-scale-2-ver-left 0.9s linear both;
}

@-webkit-keyframes flip-scale-2-ver-left {
  0% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  50% {
    -webkit-transform: translateX(-50%) rotateY(90deg) scale(2);
            transform: translateX(-50%) rotateY(90deg) scale(2);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  100% {
    -webkit-transform: translateX(-100%) rotateY(180deg) scale(1);
            transform: translateX(-100%) rotateY(180deg) scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
}
@keyframes flip-scale-2-ver-left {
  0% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  50% {
    -webkit-transform: translateX(-50%) rotateY(90deg) scale(2);
            transform: translateX(-50%) rotateY(90deg) scale(2);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  100% {
    -webkit-transform: translateX(-100%) rotateY(180deg) scale(1);
            transform: translateX(-100%) rotateY(180deg) scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
}




</style>
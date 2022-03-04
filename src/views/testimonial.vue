<template>
                                                            
<section id="testimonials">

<div class="container" style=" color: white">

<h1 >Testimonial</h1>


                                  
<div   class="row" style="justify-content: center;  ">
<div class="col-md-3 col-sm-12 fol">
<div class="card" style="width: 18rem; background-color:transparent">
<img src="../assets/images/Godwin_crop.jpeg" class="card-img-top picture" alt="...">
<div class="card-body">
<h5 class="card-title">Godwin Dzvapatsva</h5>
<span>---Head of Curriculum and Learning---</span>
<p class="card-text" style="margin-top:80px">Daryll has great potential in the coding space. - Godwin-Head of Curriculum and Learning</p>

</div>
</div>
</div>
                                
<div class="col-md-3 col-sm-12 fol">
<div class="card" style="width: 18rem; background-color:transparent">
<img src="../assets/images/siyabonga.jpg" class="card-img-top picture" alt="...">
<div class="card-body">
<h5 class="card-title">Siyabonga Mkhosana</h5>
<p class="card-text" style="margin-top:85px">Daryll is a high spirited young man, he maintains an optimistic approach on work tasks handed to him and commits himself even on off-days. </p>
</div>
</div>
</div>
    

                             
<div class="col-md-3 col-sm-12 fol">

<div class="card" style="width: 18rem;  background-color:transparent">
<img src="../assets/images/CHAD.jpg" class="card-img-top picture" alt="...">
<div class="card-body">
<h5 class="card-title">Chad Hendricks</h5>
<p class="card-text">In the short time I’ve got to know Daryll I’ve come to see how good he is at adapting to new things and how good he is at socialising with peers. Daryll is an amazing Individual that is committed and he would be an amazing asset to any company.</p>

</div>
</div>
</div>


<div class="col-md-3 col-sm-12 fol">

<div class="card" style="width: 18rem;  background-color:transparent; ">
<img src="../assets/images/Reese4.jpeg" style="height:19rem !important" class="card-img-top picture" alt="...">
<div class="card-body">
<h5 class="card-title">Resse Abrahams</h5>
<p class="card-text">Daryll is a very creative developer, through his career, he has displayed a "work-hard" attitude and is extremely hard-working. He always strives his best and is a perfectionist that always strives to deliver his tasks and get work done</p>


</div>
</div>
</div>

</div>
</div>
</section>



</template>

<script>
export default {

}
</script>

<style scoped>






h1{
  border-bottom: 2px solid white;
  margin-bottom: 80px;
}





#testimonials{
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/Background_pic.webp);
    background-size: cover;
    min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
.card{
    border:1px solid red;
  box-shadow: 0 9px 92px 0 rgb(0, 17, 255);
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
}
.container{
  padding: 0 !important;
  margin: 0 !important;
  	-webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}




h1{
  padding-right:130px; 
}

@media (max-width: 340px){
  .container{
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
  }
  .picture{
    width: 75%;
  }
  .card{
    width: auto !important;
  }
}

@media (max-width: 400px){  
  .card{
    width:auto ;
  }
}

@media (max-width: 770px){
  .container{
  }
  .picture{
    width: 100%;
  }
  .card{
    padding: 0% !important;
  }

}

</style>
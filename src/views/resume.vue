<template>
              


<section id="resume" style="justify-content: center; flex-direction: column; min-height: 100vh; display: flex;">

  <div class="container">
  <div class="row" style=" justify-content: flex-end;">
<div class="col">
  <h1 style="text-align: center;">Resume</h1>

      <div class="col-sm-6" style="text-align: center; width: 100%; color: white;">
      <br />
      <h3>Educational Background</h3>
      <p class="resume_para">I started high school in 2016 and finished in 2020 at Bridgetown High School .</p>
      <h3>Work Experience</h3>
      <p>Don't actually have work experience but i do assist my friend with panel beating in my spare time .</p>
      <h3>Soft Skills</h3>
      <p class="resume_para">Problem solving</p>
      <p class="resume_para">Teamwork</p>
      <p class="resume_para">Always Interested in technology</p>
      <p class="resume_para">Communication</p>
      <p class="resume_para">Adaptable </p>
    </div>

    

    <h3>Technical Skills</h3>
    <div class="label">
    <div id="container" >
      <div class="sss" style="display: inline-block;">
        <meter id="html" class="meter" value="8" min="0" max="10">8 out of 10</meter>
        <label for="html">HTML</label>
      </div>
      <br />
      <div class="sss" style="display: inline-block;">
        <meter id="css" class="meter" value="7" min="0" max="10">7 out of 10</meter>
        <label for="css">CSS</label>
      </div>
      <br />
      <div class="sss" style="display: inline-block;">
        <meter id="bootstrap" class="meter" value="6" min="0" max="10">6 out of 10</meter>
        <label for="bootstrap">Bootsrap</label>
      </div>
      <br />
      <div class="sss" style="display: inline-block;">
        <meter id="word" class="meter" value="7.6" min="0" max="10">9 out of 10</meter>
        <label for="word">Word</label>
      </div>
      <br />
      <div class="sss" style="display:inline-block">
        <meter id="powerpoint" class="meter" value="5.9" min="0" max="10">5 out of 10</meter>
        <label for="powerpoint">Powerpoint</label>
      </div>
      <br />
      <div class="sss" style="display: inline-block">
        <meter id="excel" class="meter" value="4" min="0" max="10">5 out of 10</meter>
        <label for="excel">Excel</label>
      </div>
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
meter{
    width: 550px;
    height: 30px;
    align-content: center;
    display: block;

  border:1  px solid red;
  box-shadow: 0 9px 92px 0 rgb(0, 17, 255);
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
}
label{
    justify-content:left;
    display: flex;
    flex-direction: column;
    color: white;
    
}
#resume{
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/Background_pic.webp);


}


h1{
  border-bottom: 2px solid;
    color: white;

}







.container{
  	-webkit-animation: tilt-in-fwd-bl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: tilt-in-fwd-bl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes tilt-in-fwd-bl {
  0% {
    -webkit-transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
            transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-fwd-bl {
  0% {
    -webkit-transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
            transform: rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}






@media screen and (max-width: 480px){
.container{
padding-left: 0px !important;
}
label{
  color: white;
}
}
@media screen and (max-width: 770px){
.meter{
  width: 270px;
  display: block;
  
}

.container{
padding: 0px !important;
}
label{
  color: white;
}
}


label{
  color: white;
}
h3{
  color: blue;
  
}


@media screen and (max-width: 1300px){
    .container{
    padding-left: 170px;
}
}


</style>
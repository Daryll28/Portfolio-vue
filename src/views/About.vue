<template>




<section id="about" style="justify-content: center; flex-direction: column; min-height: 100vh; display: flex; background-color: black; text-align:center">
      <div class="container" style="display: flex; justify-content: center;  color: white; padding-top:117px; ">
        
        <div class="col">
          <div class="about" style="
            justify-content: center;
            display: flex;
            flex-direction: column;
            <!-- padding: 20px; -->
          ">
          <div id="parent">
            <h1 class="about-me" >
              Things About Me
            </h1>
            <p style="font-size: large; color: rgb(255, 255, 255)">
              An energetic individual who always wants to know how things work.<br />
              Dont get bored easily...i am very commited .<br />
              I was born in Cape Town on the 29th of March 2003 .<br />
              <br/>

              </p>
            <h4 style="color: blue">
              (Where did my passion for coding start:)
            </h4>
            <br />
            <p style="font-size: large;"> I have been surrounded by technology for many years. <br />
              All my brothers studied different types of technology,<br />
              and I was always interested in what they were showing me.<br />
              I knew from early on that it was a field I wanted to go into.</p>
            <h4>(Passion Board)</h4>
            <p>
              PC gaming<br />
              Playing soccer<br/>
              interacting with people
              

            </p>
            <!-- ABOUT PAGE BOX -->
            <div class="box" style="display: flex; padding: 40px; flex-wrap: wrap; justify-content: center; ">
              <div class="box-small" style="width: 250px">
                5<br />
                Projects completed
              </div>
              <div class="box-small" style="width: 250px">
                5-7 weeks<br />
                Time spent on the projects
              </div>
              </div>
            </div>
          </div>
        </div>
      



</div>

     


</section>
            





</template>


<script>
export default {}

</script>


<style scoped>


h3{
  color: blue;
}
h4{
  color: blue;
}
.box-small{
  color: white;
  border-radius: 2%;
  word-spacing: 1px;
  border: 2px solid red;
  box-shadow: 0 3px 92px 0 rgb(0, 17, 255);
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 10px;
background: transparent
}
.box-small:hover{
  background: blue;
  transition:1.0s;
  color:red
}



#about{
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/Background_pic.webp);
}
h1{
  border-bottom: 1px solid;
    animation: caret 1.5s steps(1) infinite;
}

.container{
  	-webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}
@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}





@media screen and (max-width: 380px){

  .container{
    display: block !important;
    
  }
  *{
    padding: 0 !important;
    margin: 0 !important;
  }
  
}

@media screen and (max-width: 590px){
  me{
    display: none;
  }
*{
  padding: 0 !important;
  margin: 0;

}
}


@media screen and (max-width: 650px){
  *{
padding: 0 !important; 
margin: 0 !important;
  }
}


@media screen and (max-width: 860px){

  *{

padding: 0 !important;
margin-left: 40px

    
    
  }

}

@media screen and (max-width: 960px){

  *{
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 0 !important;
    overflow: hidden;
  
  }
  p{
    font-size: 22px ;
    
  }
  .box-small{
    font-size: 19px ;
    width: 210px ;
  }
  .about-me{
    font-size: 40px ;
  }

}


@media screen and (max-width: 1300px){
    .container{
    padding-left: 40px;
}
.me{
  width: 70%;
}
}
</style>




<template>
<div class="navigation">
<div class="sidebar">
  <router-link to="/" class="">Home <i class="bi bi-house"></i></router-link>
  <router-link  to="/about"> About <i class="bi bi-info-circle"></i> </router-link> 
    <router-link to="/resume">Resume <i class="bi bi-file-person"></i></router-link> 
       <router-link to="/projects">Projects <i class="bi bi-kanban"></i></router-link> 
       <router-link to="/Testimonial">Testimonial <i class="bi bi-people-fill"></i></router-link> 
       <router-link to="/contact">Contact <i class="bi bi-person-rolodex"></i></router-link> 
</div>


<nav class="navbar navbar-expand-lg navbar-light " style="background-color:black">
  <div class="container-fluid" style="background:black">
    <a class="navbar-brand" href="#" style="color:white;">RESUME</a>
    <button class="navbar-toggler" style="color:white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i class="bi bi-arrow-down-circle-fill" style="font-size:35px !important;"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" style="color:white" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color:white" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color:white" to="/resume">Resume</router-link>
        </li>
                <li class="nav-item">
          <router-link class="nav-link" style="color:white" to="/projects">Projects</router-link>
        </li>
                <li class="nav-item">
          <router-link class="nav-link" style="color:white" to="/Testimonial">Testimonials</router-link>
        </li>
                <li class="nav-item">
          <router-link class="nav-link" style="color:white" to="/contact">Contact</router-link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
       
</div>







</template>

<script>

</script>

<style>
.active:hover,a.router-link-active{
  background-color: blue;
  color: rgb(255, 0, 0);

}
body {
  margin: 0;
  font-family: "Lato", sans-serif;
              

}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: rgb(0, 0, 0);
  position: fixed;
  height: 100%;
  overflow: none;
  z-index:100000000000000000000;
  


  box-shadow: 0 9px 92px 0 rgb(0, 17, 255);
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 10px;
  
  
}
.navbar{
  display: none !important;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #04AA6D;
  color: rgb(255, 0, 0);
}

.sidebar a:hover:not(.active) {
  background-color: blue;
  transition: 0.5s;
  color: rgb(255, 0, 0);
}






@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    background: black;
    display: none;
    
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}



}



@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
    background: black;
  }
}

@media screen and (max-width: 380px){
  .sidebar{
    padding: o;
    margin: 0 auto ;
    font-size: small;
  }
}

@media screen and (max-width: 920px){
  *{
   font-size: 22px !important; 
  }
}

@media screen and (max-width: 1200px){
    .sidebar{
display: none
}
  .navbar{
  display: initial !important;
}
*{
  margin: 0 !important;  
}
.me{
  width: 100%
}

}
</style>



 
       
     
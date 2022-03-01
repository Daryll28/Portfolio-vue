<template>
  
  <section id="contactpage" style="min-height:100vh">
        <h1 style="margin-bottom: 60px;justify-content:center;text-align:center;text-decoration:underline">contact me</h1>
      <div class="container">

<div class=row>
<div class=col-lg-6 col-md-12 col-sm-12>


    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
<input type="email" name="_replyto" required v-model="email">  


 <label>Message:</label>
<input type="message" required v-model="message">  


<label>Role//Reason:</label>
<select v-model="role">
    <option value="developer"> Web Developer</option>
        <option value="designer"> Web Desinger</option>
        <option value="recruitment">Recruitment</option>
                <option value="just_to_get_in_touch">Just to get in touch</option>


</select>
                        <!-- checkbox -->

                            <!-- submit button -->
<div class="submit">
    <button>Submit</button>
</div>
</form>
      </div>
     

      <div id="stukie" class=col-lg-6 col-md-12 col-sm-12>
<h1>Address:</h1>
<span style="font-size:20px">Athlone,Cape Town,7764,South Africa</span><br><br><br>
<h1>Cell Number:</h1>
<span style="font-size:20px">0681323110</span><br><br><br>
  
     <h1>Email: </h1>
     <span style="font-size:20px"> daryllgrainger28@gmail.com</span>
    </div>
 </div>







</div>
  </section>
</template>

<script>
export default {
name: 'contact',
components: { 
},
data(){
    return{
email: '',
password: '',
role: '',
terms: 'false',
names: [],
tempSkill: '',
Skills: [],
passwordError: ''
    }
},
methods: {
handleSubmit(e) {
//validate password
this.passwordError = this.password.length > 5 ? 
'' : 'Password must be atleast 6 chars long'
if(!this.passwordError) {
console.log('email:', this.email)
console.log('password:', this.password)
console.log('role:', this.role)



}
}
}


}

</script>

<style scoped>

h1{
	-webkit-animation: slide-left 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-left 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          	-webkit-animation: text-shadow-pop-tl 0.9s both;
	        animation: text-shadow-pop-tl 0.9s both;


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

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(-900px);
            transform: translateX(-900px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(-900px);
            transform: translateX(-900px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

form{
    max-width: 550px;
    margin: 30px auto;
    background: transparent;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    border: 3px solid red;
    padding-top: 150px;
    padding-bottom: 150px;
    color: white;
    margin-top:0;
    box-shadow: 0 9px 92px 0 rgb(0, 17, 255);
    backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 10px;    
  font-family: "Lato", sans-serif;
  	-webkit-animation: bounce-in-top 1.1s both;
	        animation: bounce-in-top 1.1s both;
}
@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}




label {
    color: white;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    border-bottom: 1px solid #ddd;
    color: blue;
    background: black;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
    color: blue;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
text-align: center;
}
.error {
    color: red;
    margin-top: 10px;
    font-size: 0.9em;
    font-weight: bold;
}
button:hover{
    background: red;
}
#contactpage{
          background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/Background_pic.webp);
overflow:none;
overflow:hidden;
  
}
*{
    color: white;
}




h1{
    color: white;
}


@media (max-width: 340px){
    .container{
        padding: 0 !important;
        width: 100%;
        margin: 0;
    }
    h1{
        font-size: 42px !important;
    }
    }



@media screen and (max-width:920px){
    .container{
        padding-left: 50px;
        padding-top: 70px;
        
    }
}

#stukie{
  	-webkit-animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-elliptic-left-bck {
  0% {
    -webkit-transform: translateX(-800px) rotateY(-30deg) scale(6.5);
            transform: translateX(-800px) rotateY(-30deg) scale(6.5);
    -webkit-transform-origin: 200% 50%;
            transform-origin: 200% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -600px 50%;
            transform-origin: -600px 50%;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-left-bck {
  0% {
    -webkit-transform: translateX(-800px) rotateY(-30deg) scale(6.5);
            transform: translateX(-800px) rotateY(-30deg) scale(6.5);
    -webkit-transform-origin: 200% 50%;
            transform-origin: 200% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -600px 50%;
            transform-origin: -600px 50%;
    opacity: 1;
  }
}

</style>    
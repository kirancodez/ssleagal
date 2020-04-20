<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ssleagel</title>
    <script   src="./assets/js/jquery.min.js" ></script>
    <script   src="./assets/js/custom.js" ></script>
    <script src="./assets/js/bootstrap.min.js" ></script>
    <script src="./assets/js/gsap.min.js" ></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/custom-dist.css">
</head>
<body>
<section class="header-section">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="row mainSec">
  <div class="BrandSec">
    <a href=""><img src="./assets/img/logo1.png" alt="" width="140px"></a>
  </div>
  <div class="navigation-wrapper">
    <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About Us</a>
      </li>
      <li>
        <a href="">Practice Area</a>
      </li>
      <li>
        <a href="">Attorney</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  </div>
  <div class="ContactSec mt-3">
    <p><span class="mr-2"><img src="./assets/svg/phone.svg" alt="" class="phonesvg" ></span><a href="tel:+91987654321">+91 987-654-321</a></p>
  </div>
</div>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
  </ol>
  <div class="bg-white  Timeindicator ">
  <div class="row w-100">
    <div class="col-md-8 ">
    <div class="d-flex progress_section">
    <p class="CurrentSlide mr-3">01</p>
      <div id="myProgress" >
          <div id="myBar"></div>
        </div>
    <p class="NextSlide ml-3 ">02 </p>
    <div class="arrowdiv">
    <a class="carosalnav" href="#carouselExampleIndicators" role="button" data-slide="prev">  
   <span><img src="./assets/svg/longleft.svg" alt="" width="43px" class="leftArrow"></span>
  </a>
   <a class="carosalnav" href="#carouselExampleIndicators" role="button" data-slide="next">  
   <span><img src="./assets/svg/longleft.svg" alt="" width="43px" class="rightArrow"></span>
  </a>
    </div>
   
    <!-- <img src="./assets/svg/longleft.svg" alt="" width="50px" class="rightArrow"> -->
    </div>
    </div>  
    <div class="col-md-4 Visitblog ">
      <div class="blogdiv d-flex">
        <p>Visit Our Blog</p>
	      <a href="#" class="social-button hover" target="_blank">
		      <span><img width="25px" src="./assets/svg/iconfinder_ic_keyboard_arrow_right_48px_352468.svg" alt=""></span>
        </a>
        </div>
    </div>
  </div>      
  <!--  -->
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img class="d-block w-100" src="./assets/img/slide2.jpg" alt="First slide">
      <div class="carosel-content">
        <p>LEAGAL   CONSULTING</p>
        <h1>If you have any - <br>leagal problems in your life ... <br><span>We are available</span></h1>
        <button><span class="d-flex"><img width="30px" class="mr-3 ml-2" src="./assets/svg/chat.svg" alt=""><p class="mt-1">GET CONVERSATION</p></span></button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/img/slide1.jpg" alt="Second slide">
      <div class="carosel-content">
        <p>LEAGAL   CONSULTING</p>
        <h1>If you have any - <br>leagal problems in your life ... <br><span>We are available</span></h1>
        <button><span class="d-flex"><img width="30px" class="mr-3 ml-2" src="./assets/svg/chat.svg" alt=""><p class="mt-1">GET CONVERSATION</p></span></button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/img/slide3.jpg" alt="Third slide">
    </div>
  </div>
</div>
</section>
<section class="mobile_header_section">
<div id="mycarouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <a href="" class="logoimg"><img src="./assets/img/logo1.png" alt="" width="140px"></a>
<div class="button_container" id="toggle">
  <span class="top"></span>
  <span class="middle"></span>
  <span class="bottom"></span>
</div>

<div class="overlay" id="overlay">
  <nav class="overlay-menu">
    <ul>
      <li ><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./assets/img/slide1.jpg" alt="First slide">
      <div class="Mobile_carosal_content">
        <p>LEAGAL   CONSULTING</p>
        <h1>If you have any - <br>leagal problems in your life ... <br><span>We are available</span></h1>
        <button><span class="d-flex"><img width="30px" class="mr-3 ml-2" src="./assets/svg/chat.svg" alt=""><p class="mt-1">GET CONVERSATION</p></span></button>
      </div>
    </div>
    <div class="indicator-mob">
        <div class="blogdiv d-flex">
          <div class="carosalNum">
            <h3>01</h3>
          </div>
          <div class="BlgCnt">
            <div class="d-flex vstblg">
            <p>Visit Our Blog</p>
	          <a href="#" class="social-button hover" target="_blank">
		        <span><img width="25px" src="./assets/svg/iconfinder_ic_keyboard_arrow_right_48px_352468.svg" alt=""></span>
            </a>
            </div> 
          </div>

        </div>
    </div>
    <!-- <div class="carousel-item">
      <img class="d-block w-100" src="./assets/img/slide2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/img/slide3.jpg" alt="Third slide">
    </div> -->
  </div>
</div>

</section>

<section class="Aboutus_Section">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p>WHO WE ARE</p>
        <h3>Best Why Lawers Need It ?</h3>
        <p class="Content mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempora vero ab unde, rem quod sapiente architecto aut ex, quidem at. Illo fugit voluptas eius, aliquid natus maxime! Non, optio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem error quisquam adipisci! Repellat 
        </p>
        <p class="Content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem error quisquam adipisci! Repellat 
        </p>
        <button clas="mr-3">LEARN MORE</button>
        <button class="contact_btn">CONTACT US</button>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" src="./assets/img/lady.png" alt="">
      </div>
    </div>
  </div>
</section>


</body>
</html>

<!-- https://codepen.io/PaulVanO/pen/GgGeyE 
    https://codepen.io/ig_design/pen/yrwgwO - scroll up 
-->
<template>
  <div class="home">
    <!-- <h1>Home page</h1> -->
    <section class="home-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account
            will be a one-stop-shop for spending, saving,
            budgeting, investing, and much more.</p>
          <button class="home-btn" type="submit">  Request Invite</button>
          </div>
          
        </div>
      </div>
    </div>
    <div class="phone-container">
      <!-- <img src="assets/images/bg-intro-desktop.svg" alt="" class=" bank-img1"> -->
      <img src="./assets/images/image-mockups.png" class="phone-mockup">
    </div>
  </section>

  <section class="about-section">
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="">Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub.<br> Control your finances like never before.</p>
          </div>
        </div>
        <div class="row row-grid">
          <div class="col-md-3">
            <div class="about-card">
              <img src="./assets/images/icon-online.svg">
              <h4>Online Banking</h4>
              <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="about-card">
              <img src="./assets/images/icon-budgeting.svg">
              <h4>Simple Budgeting</h4>
              <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="about-card">
              <img src="./assets/images/icon-onboarding.svg">
              <h4>Fast Onboarding</h4>
              <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="about-card">
              <img src="./assets/images/icon-api.svg">
              <h4>Open API</h4>
              <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
          </div>
        </div>
    </div>
    
  </section>

  <section class="articles-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Latest Articles</h1>
        </div>
      </div>
      <div class="row row-grid">
        <div class="col-md-3">
          <div class="articles-resources">
            <div class="articles-resource-img">
                <img src="./assets/images/image-currency.jpg">
            </div>
            <div class="articles-headline">
              <p class="articles-author">By Claire Robinson</p>
                <h3>Receive money in any currency with no fees</h3>
                <p class="articles-message">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="articles-resources">
            <div class="articles-resource-img">
                <img src="./assets/images/image-restaurant.jpg">
            </div>
                <div class="articles-headline">
              <p class="articles-author">By Wilson Hutton</p>
                <h3>Treat yourself without worrying about money</h3>
                <p class="articles-message">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="articles-resources">
            <div class="articles-resource-img">
                <img src="./assets/images/image-plane.jpg">
            </div>
                <div class="articles-headline">
              <p class="articles-author">By Wilson Hutton</p>
                <h3>Take your Easybank card wherever you go</h3>
                <p class="articles-message">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="articles-resources">
            <div class="articles-resource-img">
                <img src="./assets/images/image-confetti.jpg">
            </div>
                <div class="articles-headline">
                <p class="articles-author">By Claire Robinson</p>
                <h3>Our invite-only Beta accounts are now live!</h3>
                <p class="articles-message">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <a class="navbar-brand" href="#">
            <img src="./assets/images/logo-2.png" alt="Easybank logo">
          </a>
          <div class="icon-container">
            <span class="icon-stack">
              <a href="#">
                <img src="./assets/images/icon-facebook.svg">
              </a>
            </span>
            <span class="icon-stack">
              <a href="#">
                <img src="./assets/images/icon-youtube.svg">
              </a>
            </span>
            <span class="icon-stack">
              <a href="#">
                <img src="./assets/images/icon-twitter.svg">
              </a>
            </span>
            <span class="icon-stack">
              <a href="#">
                <img src="./assets/images/icon-pinterest.svg">
              </a>
            </span>
            <span class="icon-stack">
              <a href="#">
                <img src="./assets/images/icon-instagram.svg">
              </a>
            </span>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <ul class="footer-link">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <ul class="footer-link">
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div class="col-md-3 text-right">
          <div>
            <button class="home-btn" type="submit">  Request Invite</button>
            <div>
              <span>
                &copy; Easybank. All Rights Reserved
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
/* HOME SECTION STYLES STARTS */
.home-section {
    background: url("../images/bg-intro-desktop.svg") no-repeat;
    padding: 180px 0px;
    background-size: 61% 150%;    
    position: relative;
    background-color: #fafafa;
    background-position: right -110px top -200px;
    /*overflow-x: hidden;*/
}

.home-section h1 {
    color: #2a2f45;
    max-width:300px;
    margin-bottom: 10px;
    /*font-size: 30px;*/
}

/* @media() */

.home-section p {
  line-height: 1.5rem;
  color: #9e9da2;
  font-size: 16px;
  max-width:390px;
   margin-bottom: 10px;
}

.home-section .home-btn { 
  background: linear-gradient(to right, #30cf73, #2cb9cb);
  color: #fff;
  font-weight: 400;
  border-radius: 25px;
  border: none;
  padding: 8px 25px;
} 

.phone-container {
    position: absolute;
    top: -100px;
    right: 0px;
}

.phone-mockup {
    width: 680px;
}

/* HOME SECTION STYLES ENDS */

/*------------------------------------------*/
/*   About Section Start
/*------------------------------------------*/

.about-section {
  padding: 80px 0 80px 0;
  background-color: #f4f5f7;
}

.about-section h1 {
    font-family: Arial, Helvetica, sans-serif;  
    font-size: 30px;
    color: #575a6e;
    margin: 10px auto;
}

.about-section p {
  font-size: 16px;
  color: #b5b6bb;
  line-height: 1.5rem;
  padding-bottom: 10px;
  padding-top: 10px;  
}

.about-card {
    margin: 30px 0 0 0;
    height: 300px;
}

.about-card img {
    width: 50px;
}

.about-card h4 {
    color: #575a6e;
    margin: 20px 0 0 0;
}

.about-card p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 2;
    max-width: 400px;
    margin: auto;
    color: #b5b6bb;
}

/*------------------------------------------*/
/*   About Section Ends
/*------------------------------------------*/

/*------------------------------------------*/
/*   Articles Section Starts
/*------------------------------------------*/

.articles-section {
  padding: 80px 0 80px 0;
  background: #fafafa;
}

.articles-section h1 {
    font-family: Arial, Helvetica, sans-serif;  
    font-size: 30px;
    color: #575a6e;
    margin: 10px auto;
    margin-bottom: 70px
}

.articles-resources {
  height: 420px;
  /*border: 1px solid black;*/
  border-radius: 5px;
  background-color: #ffffff;
}

.articles-resource-img {
  height: 200px;
  /*border-radius: 5px;*/
  max-width: 100%;
}

.articles-resource-img img {
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: top;
  display: block;
  height: 100%;
  width: 100%;
}

.articles-headline {
  padding: 16px;
}

.articles-headline .articles-author {
  font-size: 12px;
   color: #b5b6bb;
}

.articles-headline h3 {
  font-size: 20px;
   color: #575a6e;
}

.articles-headline .articles-message {
  font-size: 14px;
   color: #b5b6bb;
}

/*------------------------------------------*/
/*   Articles Section Ends
/*------------------------------------------*/

/*------------------------------------------*/
/*   Footer Section Starts
/*------------------------------------------*/

.footer-section {
  padding: 40px 0 40px 0;
  background: #2d314e;
}

.footer-section img {
  padding-bottom: 10px;
  margin: 0px;
}

.icon-container img {
  justify-content: space-between;

}

.footer-section .footer-link li {
  list-style-type: none;
}

.footer-link li {
  color: #fff;
  padding: 5px 0;
  cursor: pointer;
  font-size: 12px;
}

.footer-section .home-btn {
  background: linear-gradient(to right, #30cf73, #2cb9cb);
  color: #fff;
  font-weight: 400;
  border-radius: 25px;
  border: none;
  padding: 8px 25px;
}

.footer-section span {
  color: #fff;
  padding: 15px 0 0 0;
  font-size: 12px;
}


</style>

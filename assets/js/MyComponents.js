class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer id="footer" class="footer">

    <div class="container">
      <div style="text-align: center;">

        <img src="assets/img/BrightEducationSteno.png" height="100" width="120" />
        <p>The best online courses you'll find</p>
<span style="color: #1f1f24;font-weight: bold;">Sunil Barara</span>
      </div>
      <br>

      <div class="row gy-2 addressDiv">
       <!--   <div class="col-lg-4 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p style ="white-space: normal !important;">
              DG-B-1704 & 05, Christian Ganj, Ajmer, Rajasthan 305001
            </p>
          </div>

        </div> -->

        <div class="col-lg-6 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p style ="white-space: normal !important;">
              <strong>Phone:</strong> <a href="tel:+919602596476" style="color: #ffffff">+91 9602596476</a> <br>
              <strong>Email:</strong> <a href="mailto:  brighteducationstenoclasses@gmail.com"
                style="color: #ffffff; "> brighteducationstenoclasses@gmail.com</a><br>
                
            </p>
          </div>
        </div>
 
        <div class="col-lg-6 col-md-6 footer-links">
          <h4>Follow Us</h4>

          <div class="social-links d-flex">
            
            <a href="https://wa.me/+919602596476?text=Hello,%20I%20came%20across%20Bright%20Education%20Steno%20website.%20I%20want%20to%20join%20course." target="_blank" class="facebook"><i class="bi bi-whatsapp"></i></a>
           
            <a href="https://t.me/brighteducationsteno" class="linkedin" target="_blank"><i class="bi bi-telegram"></i></a>
                <a href="https://youtube.com/@bright_education_steno?si=_jno0lv_wdyQ1z3l" target="_blank" class="google-plus"><i class="bi bi-youtube"></i></a>   
         
                </div>
        </div>

      </div>
    </div>
     
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Bright Education Steno</span></strong>. All
        Rights Reserved
      </div> 
    </div>

  </footer>  <!-- Designed and Developed by Sunil Barara -->
  <!--Mobile Number: 7878438668 -->`;
  }
}
class Testimonials extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `  <section id="testimonials" class="testimonials">
   
      <div class="container" data-aos="zoom-in">

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""> -->
                <h3>Jared Gray</h3>
                <h4>Vice President, Director of Operations</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Rakesh and his team are extremely knowledgeable about Salesforce. They are very responsive to
                  requests,
                  have great communication, and do excellent work. They have helped me build a very unique, customized
                  Salesforce environment that has been very helpful for my business. I am very happy I found Rakesh and
                  his
                  team to handle my Salesforce needs. I highly recommend them.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""> -->
                <h3>Omer Saeed</h3>
                <h4>Callidus Cloud</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Rakesh and the CloudCertitude team have been a valuable partner in our Salesforce efforts for many
                  years.
                  They took over an enhanced a complicated AppExchange Package, and helped us pass multiple security
                  reviews
                  over the years. They have also developed new packages that helped solve specific needs for our
                  customers,
                  coming up with creative solutions. They have always communicated well with our team and delivered
                  projects
                  on time and budget.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <!-- <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""> -->
                <h3>Mit freundlichen Grüßen</h3>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  We work with Rakesh and his team for over 3 years now and he and his team members always meet or
                  exceed
                  expectations. We are very happy with the work ethic and the attitude towards deadlines and emergencies
                  –
                  if need be he himself will join working teams or get appropriate and technical specialized
                  consultants.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div><!-- End testimonial item -->


          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>`;
  }
}
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `  <!-- Designed and Developed by Sunil Barara -->
  <!--Mobile Number: 7878438668 -->
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="Home.html"><img src="assets/img/BrightEducationSteno.png" height="60" width="70" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="./" class="logo"><img src="assets/img/BrightEducationSteno.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="#hero">Home</a></li>   -->
  
          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
          
          <li style="display:none;" id="drpDownProfileBtn" >
            <a class="nav-link scrollto" href="Profile.html">Profile</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Home.html">Home</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Typing.html">Typing</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="English-Steno.html">English Steno</a>
          </li>
           
          <li>
            <a class="nav-link scrollto" href="Hindi-Steno.html">Hindi Steno</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Result.html">Result</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Pricing.html">Pricing</a>
          </li>
           
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li id="mainProfileBtn" class=".profileIconClass" >
          <a class="scrollto RequestDemo" href="Profile.html" style="
          border-width: 0px;
      "><img class="profileIconClass" src="https://static.vecteezy.com/system/resources/previews/010/056/184/non_2x/people-icon-sign-symbol-design-free-png.png" style="
          height: -9%;
          width: 47px;
          position: absolute;
      "></a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle " id="crossBttn"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  `;
  }
}
class AllNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` <!-- Designed and Developed by Sunil Barara -->
  <!--Mobile Number: 7878438668 --><header id="header" class="fixed-top"  >
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="./"><img src="assets/img/cloudlogo.png" height="100" width="100" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="./" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="./">Home</a></li> -->

          <li class="dropdown dropDownServiceNormal">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="serviceMenu" style="display: flex; align-items: normal !important">
              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Implementation
                </ol>
                <li class="ServiceLi">
                  <a href="SalesCloud.html">Sales Cloud</a>
                </li>
                <li class="ServiceLi">
                  <a href="ServiceCloud.html">Service Cloud</a>
                </li>
                <li class="ServiceLi"><a href="MarketingCloud.html">Marketing Cloud</a></li>
                <li class="ServiceLi"><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                <li class="ServiceLi"><a href="ExperienceCloud.html">Experience Cloud</a></li>
                <li class="ServiceLi">
                  <a href="FinancialCloud.html">Financial services Cloud</a>
                </li>
                <li class="ServiceLi"><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                <li class="ServiceLi"><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                <li class="ServiceLi"><a href="EducationCloud.html">Education Cloud</a></li>
                <li class="ServiceLi"><a href="HealthCloud.html">Health Cloud</a></li>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Migration
                </ol>
                <li class="ServiceLi">
                  <a href="ClassicToLightningMigration.html">Classic to Lightning </a>
                </li>
                <li class="ServiceLi">
                  <a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce </a>
                </li>
              </div>

              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Development
                </ol>
                <li class="ServiceLi">
                  <a href="CustomCloud.html">Custom Cloud App</a>
                </li>
                <li class="ServiceLi">
                  <a href="MobileFirst.html">Mobile-First Solution</a>
                </li>
                <li class="ServiceLi">
                  <a href="AppExchange.html">AppExchange Product</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceCustomization.html">Salesforce Customization</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceConfiguration.html">Salesforce Configuration</a>
                </li>
                
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Support
                </ol>
                <li class="ServiceLi"><a href="ManagedServices.html">Managed Services</a></li>
                <li class="ServiceLi">
                  <a href="RemoteAdministrator.html">Remote Administrator</a>
                </li>
                <li class="ServiceLi">
                  <a href="SalesforceProductionSupport.html">Salesforce Production </a>
                </li>
                <li class="ServiceLi">
                  <a href="UserAdminAndManagementTraning.html">User Admin and Management</a>
                </li>
              </div>




              <div>
                <ol style="color: black; font-weight: bold; padding-left: 13px;cursor:pointer">
                  Integration & Consulting
                </ol>
                <li class="ServiceLi"><a href="ERPIntegration.html">ERP </a></li>
                <li class="ServiceLi">
                  <a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                </li>
                <li class="ServiceLi">
                  <a href="MarketingAutomationIntegration.html">Marketing Automation </a>
                </li>
                <li class="ServiceLi">
                  <a href="SocialMediaIntegration.html">Social Media </a>
                </li>
                <li class="ServiceLi">
                  <a href="ECommerceIntegration.html">E-Commerce </a>
                </li>
                <li class="ServiceLi"><a href="ChatbotIntegration.html">Chatbot </a></li>
                <li class="ServiceLi">
                  <a href="PaymentGatewayIntegration.html">Payment Gateway </a>
                </li>
                <li class="ServiceLi">
                  <a href="CollaborationToolsIntegration.html">Collaboration Tools </a>
                </li>
                <li class="ServiceLi">
                  <a href="CalendeEmailIntegration.html">Calender & Email </a>
                </li>
                <li class="ServiceLi"><a href="CTI.html">CTI</a></li>
                <li class="ServiceLi"><a href="ITSMIntgration.html">ITSM </a></li>
              </div>
            </ul>
          </li>

          <!-- for Mobile responsive navbar  -->
          <li class="dropdown dropDownServiceMobile">
            <a href="#Features"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown">
                <a href="#"><span>Implementation</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="SalesCloud.html">Sales Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="MarketingCloud.html">Marketing Cloud</a></li>
                  <li><a href="ServiceCloud.html">Service Cloud</a></li>
                  <li><a href="AnalyticsCloud.html">Analytics Cloud</a></li>
                  <li><a href="ExperienceCloud.html">Experience Cloud</a></li>
                  <li><a href="FinancialCloud.html">Financial services Cloud</a></li>
                  <li><a href="NonProfitCloud.html">Non-Profit Cloud</a></li>
                  <li><a href="SalesforcePardot.html">Salesforce Pardot</a></li>
                  <li><a href="EducationCloud.html">Education Cloud</a></li>
                  <li><a href="HealthCloud.html">Health Cloud</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Development</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="CustomCloud.html">Custom Cloud App </a></li>
                  <li><a href="MobileFirst.html">Mobile-First Solution </a></li>
                  <li><a href="AppExchange.html">AppExchange Product </a></li>
                  <li><a href="SalesforceCustomization.html">Salesforce Customization</a></li>
                  <li><a href="SalesforceConfiguration.html">Salesforce Configuration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Migration</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ClassicToLightningMigration.html">Classic to Lightning Migration</a>
                  </li>
                  <li><a href="ThirdPartyToSalesforceMigration.html">Third-Party to Salesforce
                      Migration</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Support</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ManagedServices.html">Managed Services</a></li>
                  <li><a href="RemoteAdministrator.html">Remote Administrator</a></li>
                  <li><a href="SalesforceProductionSupport.html">Salesforce Production Support</a>
                  </li>
                  <li><a href="UserAdminAndManagementTraning.html">User Admin and Management
                      Training</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#"><span>Integration and Consulting</span>
                  <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="ERPIntegration.html">ERP </a></li>
                  <li><a href="AccountingSoftwareIntegration.html">Accounting Software </a>
                  </li>
                  <li><a href="MarketingAutomationIntegration.html">Marketing Automation
                    </a>
                  </li>
                  <li><a href="SocialMediaIntegration.html">Social Media </a></li>
                  <li><a href="ECommerceIntegration.html">E-Commerce </a></li>
                  <li><a href="ChatbotIntegration.html">Chatbot </a></li>
                  <li><a href="PaymentGatewayIntegration.html">Payment Gateway </a></li>
                  <li><a href="CollaborationToolsIntegration.html">Collaboration Tools
                    </a>
                  </li>
                  <li><a href="CalendeEmailIntegration.html">Calender & Email </a></li>
                  <li><a href="CTI.html">CTI</a></li>
                  <li><a href="ITSMIntgration.html">ITSM </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- for Mobile responsive navbar  -->

          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
          <li class="dropdown">
            <a href="#Industries"><span>Industries</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="NonProfit.html">Non-Profit</a></li>
              <li><a href="Education.html">Education</a></li>
              <li><a href="Publicsector.html">Public Sector</a></li>
              <li><a href="HealthCare.html">Healthcare</a></li>
              <li><a href="LifeSciences.html">Life Sciences</a></li>
              <li><a href="CommunicationMedia.html">Communication & media</a></li>
              <li><a href="Manufacturing.html">Manufacturing</a></li>
              <li><a href="HighTech.html">High Tech</a></li>
              <li><a href="Retails.html">Consumer Goods & Retail</a></li>
              <li><a href="FinancialServices.html">Financial Services</a></li>
              <li><a href="ProfessionalServices.html">Professional Services</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-link scrollto" href="product.html">Our Product</a>
          </li>
          <li class="dropdown">
            <a href="#About"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="././#about">About us</a></li>
               <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="././#team">Leadership</a></li>
              <li><a href="Career.html">Careers</a></li>
              <li><a href="CaseStudy.html">Case Study</a></li>
              <li><a href="Contact.html">Contact us</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
          <li>
            <a class="getstarted scrollto" href="././#contact">Request Demo</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header> `;
  }
}
class ContactCareerNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` <!-- Designed and Developed by Sunil Barara -->
  <!--Mobile Number: 7878438668 --><header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="Home.html"><img src="assets/img/BrightEducationSteno.png" height="60" width="70" /></a>
      </h1>
      <nav id="navbar" class="navbar">
        <ul>
        <li>
            <a style="display:none;" class="nav-link scrollto" id="drpDownProfileBtn" href="Profile.html">Profile</a>
          </li>

           <li>
            <a class="nav-link scrollto" href="Home.html">Home</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Typing.html">Typing</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="English-Steno.html">English Steno</a>
          </li>
           
          <li>
            <a class="nav-link scrollto" href="Hindi-Steno.html">Hindi Steno</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Result.html">Result</a>
          </li>
          <li>
            <a class="nav-link scrollto" href="Pricing.html">Pricing</a>
          </li>
           
          <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
         <li id="mainProfileBtn" class=".profileIconClass" >
          <a class="scrollto RequestDemo" href="Profile.html" style="
          border-width: 0px;
      "><img class="profileIconClass" src="https://static.vecteezy.com/system/resources/previews/010/056/184/non_2x/people-icon-sign-symbol-design-free-png.png" style="
          height: -9%;
          width: 47px;
          position: absolute;
      "></a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle " id="crossBttn"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header> `;
  }
}
class Whatsapp_Chat extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` <!-- Designed and Developed by Sunil Barara -->
  <!--Mobile Number: 7878438668 --> <div style="position: fixed;bottom: 10px;z-index: 36;right: 22px;" class="Whatsapp d-block" id="whatsapp_logo">
    <a href=" https://wa.me/+919602596476?text=Hello,%20I%20came%20across%20BrightEducationSteno%20website.%20I%20want%20to%20join%20course." target="_blank"> <img src="./assets/img/Whatsapp_Logo.png" alt="Whatsapp_Logo"
        style="width: 50px;"></a>

    <!-- <i class="bi bi-whatsapp" style="color: #198754; font-size: 40px;"></i> -->

  </div>
  <script>
    addEventListener('scroll', () => {

      var scroll = $(window).scrollTop();

      if (scroll > 100) {
        $('#whatsapp_logo').removeClass("d-none");
        $('#whatsapp_logo').addClass("d-block");
      }
      else {
        $('#whatsapp_logo').removeClass("d-block");
        $('#whatsapp_logo').addClass("d-none");
      }

    });
    </script>`;
  }
}
class ShowToast extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div id="toastDiv"
    style="position:fixed; top: 80px;z-index:10000;display:none;flex-direction:column;width:100%;height:4rem;align-items:center;">
    <div id="formendSuccess" class="toast"
      style="background-color: rgb(255, 255, 255);width: 25%;justify-content: center;height: 100%;border-left-style: solid;border-left-width: thick;border-left-color: #14ed25;min-width:18rem;"
      role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body" style="height:100%;display:flex;justify-content:space-between">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24"
            style="fill:#40C057;">
            <path
              d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z">
            </path>
          </svg>
        </div>
        <div class="p-0 toastDivNew" style="margin-left:-40px;">  
          <strong>Success</strong>
          <div>Request Submitted</div>
        </div>
        <div></div>
        <div></div>
        <div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
            onclick="crossClicked()"></button>
        </div>




      </div>
    </div>



    <!-- <div id="errorDiv" style="position:fixed; top: 80px;z-index:10000;display:none;width:100%;height:4rem;justify-content:center;"> -->
    <div id="formendError" class="toast"
      style="background-color: rgb(255, 255, 255);width: 25%;justify-content: center;height: 100%;border-left-style: solid;border-left-width: thick;border-left-color: #ed2214;min-width:18rem;"
      role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body" style="height:100%;display:flex;justify-content:space-between">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24"
            style="fill:#ed2214;">
            <path
              d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z">
            </path>
          </svg>
        </div>
        <div class="p-0 toastDivNew" style="margin-left:-40px;">
          <strong>Error Occured</strong>
          <div>Request Not Submitted</div>
        </div>
        <div></div>
        <div></div>
        <div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
            onclick="crossClicked()"></button>
        </div>
      </div>
    </div>
  </div>`;
  }
}
class NotLoginIndexPage extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
     
   
    <head>
     
      <!-- FAVICONS ICON -->
       
     
      <!-- MOBILE SPECIFIC -->
       
       
      
      <!-- STYLESHEETS -->
      <link rel="stylesheet" type="text/css" href="assets/css/plugins.min.css">
      <link rel="stylesheet" type="text/css" href="assets/plugins/fontawesome/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="assets/plugins/line-awesome/css/line-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="assets/plugins/flaticon/flaticon.css">
      <link rel="stylesheet" type="text/css" href="assets/plugins/themify/themify-icons.css">
      <link rel="stylesheet" type="text/css" href="assets/css/style.min.css">
      <link class="skin" rel="stylesheet" type="text/css" href="assets/css/skin/skin-1.min.css">
      <link rel="stylesheet" type="text/css" href="assets/css/templete.min.css">
      
      <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
      
    .notification-bx{margin:0;padding:0;list-style:none}
    .notification-bx li{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:10px;margin-bottom:10px}
    .notification-bx li a{font-weight:500;font-size:14px;line-height:28px;color:#666;padding:0 0 0 40px;display:block;font-family:Roboto;position:relative}
    .notification-bx li a:after{content:"\f0ca";font-family:FontAwesome;color:#4582ff;position:absolute;left:4px;top:2px;font-size:22px}	
      
    .admitcard-bx{margin:0;padding:0;list-style:none}
    .admitcard-bx li{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:10px;margin-bottom:10px}
    .admitcard-bx li a{font-weight:500;font-size:14px;line-height:28px;color:#666;padding:0 0 0 40px;display:block;font-family:Roboto;position:relative}
    .admitcard-bx li a:after{content:"\f2c2";font-family:FontAwesome;color:#4582ff;position:absolute;left:4px;top:2px;font-size:22px}	
      
    .results-bx{margin:0;padding:0;list-style:none}
    .results-bx li{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:10px;margin-bottom:10px}
    .results-bx li a{font-weight:500;font-size:14px;line-height:28px;color:#666;padding:0 0 0 40px;display:block;font-family:Roboto;position:relative}
    .results-bx li a:after{content:"\f00a";font-family:FontAwesome;color:#4582ff;position:absolute;left:4px;top:2px;font-size:22px}	
    
    .DZ-theme-btn.DZ-bt-support-now {
    display:none;
    }.DZ-theme-btn.DZ-bt-buy-now  {
    display:none;
    }
      </style>
    </head>
    <body id="bg">
    <div class="page-wraper">
    
     
        
        <!-- header END --><style>
    @media screen and (max-width: 576px) {
    .slide-item-img img {
        height: 200px;
    }
    }
    </style>
    <header>
    <!-- Navbar section  -->
    <app-NotLoginPageNavbar></app-NotLoginPageNavbar>
    </header>
    <section id="hero" style="margin-top: -20px;">
    <div class="hero-container" style="opacity:1" data-aos="fade-up" data-aos-delay="150">
      <div class="d-flex">
        <img class="HeroImage" src="assets/img/BrightEducationSteno.png" />
      </div> <br />
      <h2>
        The best online courses you'll find
      </h2>
      <div class="d-flex">
        <!-- <a href="tel:+919999105081" style="color: #ffffff">+91 9602596476</a> -->
        <a class="btn-get-started scrollto" href="tel:+919602596476" style="color: #ffffff">Speak To An Expert</a>
      </div>
    </div>
  </section>

        <!-- Content -->
        <div class="page-content bg-white">
            <marquee><b style="font-size:2rem;">गहरे सागरों को पी लें, फिर भी होंठ न हिलें, ऐसी रीत चाहिए।</b></marquee>
            <!-- Slider Banner -->
            <!-- Main Slider -->
            <div class="owl-slider owl-carousel owl-theme owl-btn-center-lr dots-none">
          <div class="item slide-item">
            <div class="slide-item-img"><img src="assets/img/BrightEducationSteno.png" /></div>
          </div>
        </div> 
        <!-- Slider Banner -->
        <div class="content-block"> 
            
            
                <!-- About Us -->
                <div class="section-full bg-white content-inner-2" style="background-image:url(images/pattern/pt1.png);">
                    <div class="container">
              <div class="section-head text-center">
                <h2 class="title">Bright Education Steno and Typing Classes.</h2>
                <p class="ext">(स्टेनो एवं टाइपिंग हेतु सर्वश्रेष्ठ शिक्षण संस्थान)</p>
              </div>
              <div class="row align-items-center about-bx2">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <img src="assets/img/BrightEducationSteno.png" class="img" alt=""/>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="about-box">
                    <h3 class="title"><center>भारत की सर्वश्रेष्ठ स्टेनो एवं टाइपिंग ऑनलाइन टेस्ट सीरीज</h3>
                    <p class="ext">नमस्कार प्रिय विद्यार्थियों </p>
                    <ul class="list-check">	
                      <li>BRIGHT EDUCATION STENO  के ऑनलाइन टेस्ट पोर्टल में आप सभी का स्वागत है।</li>
                      <li>BRIGHT EDUCATION STENO एक ऐसा प्लेटफार्म है, जहां हम आपको टेस्ट सीरीज के साथ-साथ बेहतर और प्रमाणिक मार्गदर्शन प्रदान करते हैं और आपके सपनों को पूरा करने में आपकी मदद करते हैं।</li>								
                      <li>BRIGHT EDUCATION STENO टेस्ट पोर्टल की शुरुआत एक मिशन के रूप में की गई है, जिसका उद्देश्य युवाओं को सही मार्गदर्शन प्रदान कर उन्हें एक बेहतर कैरियर हासिल करने में मदद करने के साथ-साथ एक बेहतर इंसान भी बनाना है। </li>
                      <li>आप सभी के लिए हमने स्टेनोग्राफर तथा विभिन्न प्रतियोगी परीक्षाओं के लिए यह ऑनलाइन टेस्ट पोर्टल बनाया है, ताकि हर अभ्यर्थी घर बैठे इस पोर्टल पर टेस्ट देके अपनी एक्यूरेसी जांच सके। </li>
                      <li> हमारा विश्वास है कि BRIGHT EDUCATION STENO का यह ऑनलाइन टेस्ट पोर्टल आपके सपनों को पूरा करने में निश्चित रूप से मददगार साबित होगा</li>
                       
    </p>
    <p class="ext">Bright EducationSteno द्वारा दी जाने वाली सुविधाएं :-</p>
                    <ul class="list-check">	
                      <li>रोजाना अलग-अलग गति में डिक्टेशन। </li>
                      <li>जो नए विद्यार्थी है, जिनकी स्टेनो डिक्टेशन स्पीड ज्यादा नहीं है, उनके लिए कम स्पीड में डिक्टेशन।</li>								
                      <li>नए विद्यार्थियों के लिए डिक्टेशन के साथ-साथ pdf उपलब्ध। </li>
                      <li> नए विद्यार्थी जो हाल ही में स्टेनो बेसिक कंप्लीट करके डिक्टेशन में आए हैं, उनके लिए अलग से मोटिवेशन क्लास।</li>
                      <li> सप्ताह में एक स्पेशल टेस्ट।</li>
                      <li>महीने में एक महा स्पेशल टेस्ट एवं मोटिवेशन क्लास</li>
                    </ul> 
                  </div>
                </div>
              </div>
            </div>
                </div>
           
              </div>
            </div>
                </div>
                
        </div>
        </div>
    
      <!-- Content END-->
      <!-- Footer  
       
        -->
        <button class="scroltop fa fa-chevron-up" ></button>
    </div>
    <!-- JAVASCRIPT FILES ========================================= -->
    <script src="js/combining.js"></script><!-- Combining JS  -->
    <script src="js/jquery.marquee.js"></script><!-- LOADING JS -->
    <script>
      $(function(){
        $('.marquee').marquee({
          speed: 100,
          gap: 0,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true,
          pauseOnHover: true
        });	
        $('.marquee1').marquee({
          speed: 50,
          gap: 0,
          delayBeforeStart: 0,
          direction: 'up',
          duplicated: true,
          pauseOnHover: true
        });	
      });
    </script>
    </body>
    
    
    `;
  }
}
class NotLoginPageNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
        <a href="index.html"><img src="assets/img/BrightEducationSteno.png" height="60" width="70" /></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="./" class="logo"><img src="assets/img/BrightEducationSteno.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <!-- <li><a class="nav-link scrollto active" href="#hero">Home</a></li>   -->
  
          <!-- <li><a class="nav-link scrollto" href="#team">Our Product</a></li>   -->
           
          <li>
            <a class="nav-link scrollto" href="index.html">Home</a>
          </li>
         
          <li>
            <a class="nav-link scrollto" href="LoginForm.html">Login</a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle " id="crossBttn"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>`;
  }
}
class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <div class="body-container">

    <div class="main-container container bgc-transparent">

      <div class="main-content minh-100 justify-content-center">
        <div class="p-2 p-md-4">
          <div class="row" id="row-1">
            <div class="col-12 col-xl-10 offset-xl-1 bgc-white shadow radius-1 overflow-hidden">

              <div class="row" id="row-2">

                <div id="id-col-intro" class="col-lg-5 d-none d-lg-flex border-r-1 brc-default-l3 px-0">
                  <!-- the left side section is carousel in this demo, to show some example variations -->

                  <div id="loginBgCarousel" class="carousel slide minw-100 h-100">
                    
                    <div class="carousel-inner minw-100 h-100">
                      <div class="carousel-item active minw-100 h-100">
                        <!-- default carousel section that you see when you open login page -->
                        <div style="background-image: url(img/login-bg-1.svg);" class="px-3 bgc-blue-l4 d-flex flex-column align-items-center justify-content-center">
                          <a class="mt-5 mb-2" href="#">
                            <img src="img/ins_logo.png" width="125px" height="125px">
                          </a>

                          <h2 class="text-primary-d1">
                            Bright Education Steno <span class="text-80 text-dark-l1"> Classes</span>
                          </h2>

                          <div class="mt-5 mx-4 text-dark-tp3">
                            <span class="text-120">
                         Join our Plateform to make Your,<br> Score Better &amp; Practice well!
                     </span>
                            <hr class="mb-1 brc-black-tp10">
                          
                          </div>

                          <div class="mt-auto mb-4 text-dark-tp2">
                           
                          </div>
                        </div>
                      </div>
          
                      <div class="carousel-item minw-100 h-100">
                        <!-- the second carousel item with dark background -->
                        <div style="background-image: url(img/login-bg-2.svg);" class="d-flex flex-column align-items-center justify-content-start">
                          
                        </div>
                      </div>

                      <div class="carousel-item minw-100 h-100">
                        <div style="background-image: url(img/login-bg-3.jpg);" class="d-flex flex-column align-items-center justify-content-start">
                         
                        </div>
                      </div>

                      <div class="carousel-item minw-100 h-100">
                        <div style="background-image: url(img/login-bg-4.jpg);" class="d-flex flex-column align-items-center justify-content-start">
                         
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div id="id-col-main" class="col-12 col-lg-7 py-lg-5 bgc-white px-0">
                  <!-- you can also use these tab links -->
                  <ul class="d-none mt-n4 mb-4 nav nav-tabs nav-tabs-simple justify-content-end bgc-black-tp11" role="tablist">
                    <li class="nav-item mx-2">
                      <a class="nav-link active px-2" data-toggle="tab" href="#id-tab-login" role="tab" aria-controls="id-tab-login" aria-selected="true">
                        Login
                      </a>
                    </li>
                    <li class="nav-item mx-2">
                      <a class="nav-link px-2" data-toggle="tab" href="#id-tab-signup" role="tab" aria-controls="id-tab-signup" aria-selected="false">
                        Signup
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content tab-sliding border-0 p-0" data-swipe="right">

                    <div class="tab-pane active show mh-100 px-3 px-lg-0 pb-3" id="id-tab-login">
                      <!-- show this in desktop -->
                      <div class="d-none d-lg-block col-md-6 offset-md-3 mt-lg-4 px-0">
                        <h4 class="text-dark-tp4 border-b-1 brc-secondary-l2 pb-1 text-130">
                          <i class="fa fa-user text-orange-m1 mr-1"></i>
                          Welcome
                        </h4>
                      </div>

                      <!-- show this in mobile device -->
                      <div class="d-lg-none text-secondary-m1 my-4 text-center">
                                                 Welcome
                      </div>

                      <form autocomplete="off" class="form-row" id="loginForm">
          <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
           <center><span id="loginStatus"></span></center>
           </div>
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <div class="d-flex align-items-center input-floating-label text-blue brc-blue-m2">
                            <input placeholder="Username" type="text" class="form-control form-control-lg pr-4 shadow-none" value="9602596476" name="login_mobile" required="">
                            <i class="fa fa-phone text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 ml-n3" for="id-login-username">
                              Mobile
                            </label>
                          </div>
                        </div>

                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mt-md-1">
                          <div class="d-flex align-items-center input-floating-label text-blue brc-blue-m2">
                            <input placeholder="Password" type="password" class="form-control form-control-lg pr-4 shadow-none" value="rakeshjaat" name="login_password" required="">
                            <i class="fa fa-key text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 ml-n3" for="id-login-password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-right text-md-right mt-n2">
                          <a href="#" class="text-primary-m1 text-95" data-toggle="tab" data-target="#id-tab-forgot">
                            Forgot Password?
                          </a>
                        </div>

                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <label class="d-inline-block  mb-0 text-dark-l1">
                            <input type="checkbox" class="mr-1" id=" customCheckLogin" name="remember" checked="">
                            Remember me
                          </label>

                          <button type="submit" class="btn btn-primary btn-block px-4 btn-bold mt-2 mb-1">
                            Sign In
                          </button>
                        </div>
                      </form>
          
                      <div class="form-row">
                        <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">

                          <hr class="brc-default-l2 mt-0 mb-2 w-100">
            <div class="mt-n4 bgc-white-tp2 px-3 py-1 text-secondary-d3 text-90"> Join Us</div>
                          <br>
                          <hr class="brc-default-l2 mt-0 mb-2 w-100">
            <div class="mt-n4 bgc-white-tp2 px-3 py-1 text-secondary-d3 text-90">8949287761</div>

                          <div class="p-0 px-md-2 text-dark-tp3 my-3">
                            <a class="text-success-m1 text-600 mx-1" data-toggle="tab" data-target="#id-tab-signup" href="#">
                              Click Here To Register
                            </a>
                          </div>

                         <hr class="brc-default-l2 w-100">
                          <div class="mt-n4 bgc-white-tp2 px-3 py-1 text-secondary-d3 text-90">Stay Connected With Us Using</div>

                            <div class="my-2">
             
            <a href="https://t.me/stenoupdates" target="_blank">
                            <button type="button" class="btn btn-bgc-white btn-lighter-info btn-h-info btn-a-info border-2 radius-round btn-lg px-25 mx-1">
                              <i class="fab fa-telegram text-110"></i>
                            </button></a>
              
                          <a href="https://www.youtube.com/channel/UCUJL5NbVmRvFZbdUdBdUbgg" target="_blank">
                            <button type="button" class="btn btn-bgc-white btn-lighter-red btn-h-red btn-a-red border-2 radius-round btn-lg px-25 mx-1">
                              <i class="fab fa-youtube text-110"></i>
                            </button></a>

            <a href="https://wa.me/+919602596476?text=Hello,%20I%20came%20across%20BrightEducationSteno%20website.%20I%20want%20to%20join%20course." target="_blank">
                            <button type="button" class="btn btn-bgc-white btn-lighter-green btn-h-green btn-a-green border-2 radius-round btn-lg px-25 mx-1">
                              <i class="fab fa-whatsapp text-110"></i>
                            </button></a>
                            
                            
            <a href="tel:8949287761" target="_blank">
                            <button type="button" class="btn btn-bgc-white btn-lighter-warning btn-h-warning btn-a-green border-2 radius-round btn-lg px-25 mx-1">
                              <i class="fa fa-phone text-100"></i>
                            </button></a>
                          </div>
            <hr class="brc-default-l2 w-100 mb-2">
                        </div>
                      </div>
                    </div>


                    <div class="tab-pane mh-100 px-3 px-lg-0 pb-3" id="id-tab-signup" data-swipe-prev="#id-tab-login">
                      <div class="position-tl ml-3 mt-3 mt-lg-0">
                        <a href="#" class="btn btn-light-default btn-h-light-default btn-a-light-default btn-bgc-tp" data-toggle="tab" data-target="#id-tab-login">
                          <i class="fa fa-arrow-left"></i>
                        </a>
                      </div>

                      <!-- show this in desktop -->
                      <div class="d-none d-lg-block col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-lg-4 px-0">
                        <h4 class="text-dark-tp4 border-b-1 brc-grey-l1 pb-1 text-130">
                          <i class="fa fa-user text-purple mr-1"></i>
                          Create an Account
                        </h4>
                      </div>

                      <!-- show this in mobile device -->
                      <div class="d-lg-none text-secondary-m1 my-4 text-center">
                       <img src="img/ins_logo.png" height="75px" width="75px">
                        <h1 class="text-170">
                          <span class="text-blue-d1">Bright Education Steno <span class="text-80 text-dark-tp4"></span></span>
                        </h1>

                        Create an Account
           
                      </div>


                      <form autocomplete="off" class="form-row " id="registerForm" name="registerForm">
           <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
           <center><span id="RegistrationStatus"></span></center>
           </div>
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <div class="d-flex align-items-center input-floating-label text-success brc-success-m2">
                            <input placeholder="Email" type="email" class="form-control form-control-lg pr-4 shadow-none" name="email" required="">
                            <i class="fa fa-envelope text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 text-100 ml-n3" for="id-signup-email">
                              Email
                            </label>
                          </div>
                        </div>

                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
                          <div class="d-flex align-items-center input-floating-label text-success brc-success-m2">
                            <input placeholder="Mobile Number" type="text" pattern="[6789][0-9]{9}" title="Please Enter Valid 10 Digit Mobile Number" class="form-control form-control-lg pr-4 shadow-none" name="mobile" required="">
                            <i class="fa fa-phone text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 text-100 ml-n3" for="id-signup-username">
                              Mobile
                            </label>
                          </div>
                        </div>
            
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
                          <div class="d-flex align-items-center input-floating-label text-success brc-success-m2">
                            <input placeholder="Username" type="text" class="form-control form-control-lg pr-4 shadow-none" name="username" required="" onkeypress="return ((event.charCode >= 65 &amp;&amp; event.charCode <= 90) || (event.charCode >= 97 &amp;&amp; event.charCode <= 122) || (event.charCode == 32))" title="Only alphabets are allowed.">
                            <i class="fa fa-user text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 text-100 ml-n3" for="id-signup-username">
                              Name
                            </label>
                          </div>
                        </div>
                        
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
                          <div class="d-flex align-items-center input-floating-label text-success brc-success-m2">
                            <input placeholder="Password" type="password" class="form-control form-control-lg pr-4 shadow-none" name="password" required="">
                            <i class="fa fa-key text-grey-m2 ml-n4"></i>
                            <label class="floating-label text-grey-l1 text-100 ml-n3" for="id-signup-password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
                          <label class="d-inline-block mt-1 mb-0 text-secondary-d2">
                            <input type="checkbox" class="mr-1" id="id-agree" required="">
                            <span class="text-dark-m3">I have read and agree to <a href="#" class="text-blue-d2">terms</a></span>
                          </label>

                          <button type="submit" name="signupForm" value="signupForm" class="btn btn-success btn-block px-4 btn-bold mt-1">
                            Sign Up
                          </button>
                        </div>
                      </form>
                      
                      <div class="form-row w-100">
                        <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">
                          <hr class="brc-default-l2 mt-0 mb-2 w-100">
                          <div class="p-0 px-md-2 text-dark-tp4 my-3">
                            Already Joined?
                            <a class="text-blue-d1 text-600 mx-1" data-toggle="tab" data-target="#id-tab-login" href="#">
                              Login here
                            </a>
                          </div>
                          <hr class="brc-default-l2 w-100 mb-2">
                        </div>
                      </div>
                    </div>

                    <div class="tab-pane mh-100 px-3 px-lg-0 pb-3" id="id-tab-forgot" data-swipe-prev="#id-tab-login">
                      <div class="position-tl ml-3 mt-2">
                        <a href="#" class="btn btn-light-default btn-h-light-default btn-a-light-default btn-bgc-tp" data-toggle="tab" data-target="#id-tab-login">
                          <i class="fa fa-arrow-left"></i>
                        </a>
                      </div>

                      <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5 px-0">
                        <h4 class="pt-4 pt-md-0 text-dark-tp4 border-b-1 brc-grey-l2 pb-1 text-130">
                          <i class="fa fa-key text-brown-m1 mr-1"></i>
                          Recover Password
                        </h4>
                      </div>

<center><span id="recoverStatus"></span></center>
                      <form autocomplete="off" class="form-row" id="recoverForm">
          <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
          
           </div>
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <label class="text-secondary-d3 mb-3">
                            Enter your email address and we'll send you the instructions:
                          </label>
                          <div class="d-flex align-items-center">
                            <input type="email" class="form-control form-control-lg pr-4 shadow-none" name="recover_email" required="" placeholder="Email">
                            <i class="fa fa-envelope text-grey-m2 ml-n4"></i>
                          </div>
                        </div>
                        
                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" style="display:none;" id="recovery_opt_section">
                          
                          <div class="d-flex align-items-center">
                            <input type="text" class="form-control form-control-lg pr-4 shadow-none" name="recover_otp" placeholder="OTP">
                            <i class="fa fa-key text-grey-m2 ml-n4"></i>
                          </div>
                        </div>

                        <div class="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <button type="submit" class="btn btn-orange btn-block px-4 btn-bold mt-2 ">
                            Continue
                          </button>
                        </div>
                      </form>

                      <div class="form-row w-100">
                        <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">
                          <hr class="brc-default-l2 mt-0 mb-2 w-100">
                          <div class="p-0 px-md-2 text-dark-tp4 my-3">
                            <a class="text-blue-d1 text-600 btn-text-slide-x" data-toggle="tab" data-target="#id-tab-login" href="#">
                              <i class="btn-text-2 fa fa-arrow-left text-110 align-text-bottom mr-2"></i>Back to Login
                            </a>
                          </div>
<hr class="brc-default-l2 mt-0 mb-2 w-100">
                        </div>
                      </div>
                    </div>
                  </div><!-- .tab-content -->
                </div>
              </div><!-- /.row -->
            </div><!-- /.col -->
          </div><!-- /.row -->
          <div class="d-lg-none my-3 text-white-tp1 text-center">
     
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define("app-notloginindexpage", NotLoginIndexPage);
customElements.define("app-notloginpagenavbar", NotLoginPageNavbar);
customElements.define("app-loginform", LoginForm);
customElements.define("app-showtoast", ShowToast);
customElements.define("app-whatsapp", Whatsapp_Chat);
customElements.define("app-contactcareernavbar", ContactCareerNavbar);
customElements.define("app-header", AllNavbar);
customElements.define("app-navbar", Navbar);
customElements.define("app-testimonials", Testimonials);
customElements.define("app-footer", Footer);

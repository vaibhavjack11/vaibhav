import React from "react";
import HomeSlider from "./HomeSlider";

export default function Home(props) {
  const handleScrollToStates = (topY) => {
    window.scrollTo({ top: topY, behavior: "smooth" });
  };
  return (
    <div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a
              href="#s"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToStates(0);
              }}
            >
              Vaibhav_Soni
            </a>
          </h1>
          {/* <a href="index.html" className="logo mr-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a> */}
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(0);
                  }}
                >
                  INTRODUCTION
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(340);
                  }}
                >
                  EDUCATIONS
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(1200);
                  }}
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(1700);
                  }}
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(2200);
                  }}
                >
                  ACHIVEMENTS
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToStates(3500);
                  }}
                >
                  CONTACT ME
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
          <div type="button" className="get-started-btn" data-toggle="modal" data-target="#formtoGetStart">Drop</div>
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <HomeSlider></HomeSlider>
      </section>
      {/* End Hero */}
      <main id="main">
        <section id="category" className="services section-bg">
          <div className="section-title">
            <h2>EDUCATIONAL QUALIFICATIONS</h2>
          </div>
          <div className="row pl-4 pr-4">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mb-4"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box pt-4">
                <div className="icon">
                  <img src="images/27.jpg" alt="d" style={{ width: "100%" }} />
                </div>
                <h4>
                  <a href>Wooden cooling tower cross flow type </a>
                </h4>
                <p>
                  We offer custom engineered cooling towers made of pultruded
                  fiberglass which are the best solution in worst environments.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-4"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box pt-4">
                <div className="icon">
                  <img src="images/24.webp" alt="d" style={{ width: "100%" }} />
                </div>
                <h4>
                  <a href>Cross flow cooling towers</a>
                </h4>
                <p>
                  We supply a wide range of quality cross flow cooling towers
                  which are suited in all types of industries to cool recycle
                  water flow.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box pt-4">
                <div className="icon">
                  <img src="images/25.webp" alt="d" style={{ width: "100%" }} />
                </div>
                <h4>
                  <a href>Fanless filless cooling tower</a>
                </h4>
                <p>
                  We are passionately engaged in providing a wide range of
                  fanless cooling towers which are in demand because of their
                  superior quality.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box pt-4">
                <div className="icon">
                  <img src="images/26.webp" alt="d" style={{ width: "100%" }} />
                </div>
                <h4>
                  <a href>Multi cell cooling towers</a>
                </h4>
                <p>
                  With our knowledge & experience in the industry, we offer an
                  extensive range of multi cell cooling tower as per our clients
                  demands.
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
        <section id="products" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-title">
              <h2> PRODUCTS</h2>
            </div>
            <div className="row pl-4 pr-4">
              <div id="owl-example" className="owl-carousel">
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/1.jpg"
                    alt="image"
                  />
                  <div>
                    <p> FRP Natural Draft Cooling Tower</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/2.jpg"
                    alt="image"
                  />
                  <div>
                    <p>Valve For Cooling Point</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/3.jpg"
                    alt="image"
                  />
                  <div>
                    <p>Forced Draft Cooling Tower</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/4.jpg"
                    alt="image"
                  />
                  <div>
                    <p>Water Cooling Tower</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/5.jpg"
                    alt="image"
                  />
                  <div>
                    <p>Bottle Type Cooling Tower</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/6.jpg"
                    alt="image"
                  />
                  <div>
                    <p>FRP Package Cooling Towers</p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/7.jpeg"
                    alt="image"
                  />
                  <div>
                    <p> FRP induced draft cuboid design cooling </p>
                  </div>
                </div>
                <div className="item">
                  <img
                    className="imageStyle"
                    src="images/Product/8.jpg"
                    alt="image"
                  />
                  <div>
                    <p> FRP induced draft bottle design </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= About Us Section ======= */}
        <section id="aboutId" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>ABOUT VAIBHAV</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <img
                  src="https://image3.jdomni.in/banner/14092019/0B/A5/30/7252F6504236AD6323BEC33D6E_1568459918710.webp"
                  style={{ width: "100%", borderRadius: 10 }}
                  alt="A"
                ></img>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  We, Aadarsh Cooling Tower are a company engaged in offering a
                  wide range of cooling towers. These are made up of excellent
                  raw materials procured from reliable vendors for superior
                  quality. Been in the market since years now, we hold a strong
                  base in Hirapur, Raipur-Chhattisgarh, CHHATTISGARH. Our towers
                  are widely used in various industries for cooling of water
                  flow. Our products have gained huge appreciation as
                  characterized by dimensional stability and capacity to deliver
                  efficient operation along with reduced maintenance cost.n
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/* <a href="#s" className="btn-learn-more">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        <section id="gallery" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>ACHIVEMENTS</h2>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-2.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-3.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-4.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-5.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-6.webp"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="App 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-7.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-8.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Card 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    style={{ width: "100%" }}
                    src="images/gallery-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <a
                    href="images/gallery-9.jpg"
                    data-gall="portfolioGallery"
                    className="venobox preview-link"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="section-title">
              <h2 style={{ color: "#47b2e4" }}> TESTIMONIALS</h2>
            </div>
            <div className="row pl-4 pr-4">
              <div id="owl-example1" className="owl-carousel">
                <div className="item">
                  <p>
                    Excellent cooling towers offered and that too at affordable
                    rates.
                  </p>
                  <div>
                    <h5 style={{ color: "white" }}>- Rahul Singh</h5>
                  </div>
                </div>
                <div className="item">
                  <p>
                    They provide customized cooling tower as per the customers
                    business requirement.
                  </p>
                  <div>
                    <h5 style={{ color: "white" }}>- Suraj Malhotra</h5>
                  </div>
                </div>
                <div className="item">
                  <p>
                    One of the best in the market related to cooling tower
                    technology. Excellent quality.
                  </p>
                  <div>
                    <h5 style={{ color: "white" }}>- Pankaj Sharma</h5>
                  </div>
                  
                </div>
                <div className="item">
                  <p>
                   JSW special products Ltd - Raigarh BEC food Bhiali Engineering
                  </p>
                  <div>
                    <h5 style={{ color: "white" }}>- Agarwal Mills Pvt Ltd</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>CONTACT VAIBHAV</h2>
            </div>
            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>
                      Near By Yaduvanshi Chowk,Tenduwa Road, Hirapur,
                      Raipur-Chhattisgarh, CHHATTISGARH 492099
                    </p>
                  </div>
                  <div className="email">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>apcoolingtower@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>+91-9893168054</p>
                  </div>
                  <div className="phone">
                    <i className="icofont-clock-time"></i>
                    <h4>Our Timings:</h4>
                    <p>
                      Mon - Sat : 09:00 AM - 06:00 PM / 12:00 AM - 12:00 AM Sun
                      : Closed / 12:00 AM - 12:00 AM
                    </p>
                  </div>
                  <iframe
                    title=""
                    src="https://maps.google.com/maps?q=Near%20By%20Yaduvanshi%20Chowk,Tenduwa%20Road,%20Hirapur,%20Raipur-Chhattisgarh,%20CHHATTISGARH%20492099&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: "290px" }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      data-rule="required"
                      data-msg="Please write something for us"
                      defaultValue={""}
                    />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        {/* <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 footer-contact">
                <h3>Aadarsh Cooling Tower</h3>
                <p>
                  Near By Yaduvanshi Chowk,Tenduwa Road, Hirapur,
                  Raipur-Chhattisgarh, CHHATTISGARH 492099
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +91-9893168054
                  <br />
                  <strong>Email:</strong> apcoolingtower@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-5 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#category">CATEGORIES</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">TESTIMONIALS</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#aboutId">ABOUT US</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">CONTACT US</a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="#s">Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className="social-links mt-3">
                  <a href="#s" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#s" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#s" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#s" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#s" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="row" style={{ borderTop: "2px solid #e1e6f5" }}>
              <div className="col-12 pt-3">
                <p>
                  © Copyrights 2021 - 2022. Aadarsh Cooling Tower.All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

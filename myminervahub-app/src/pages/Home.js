import NavBar from "../components/NavBar/NavBar";
import ProductSlideshow from "../components/Home/ProductSlideshow";
import Footer from "../components/Home/Footer";
import CBimg from '../img/corebanking.png';
import SMSimg from '../img/schoolmanagementsystem.png';
import Pluximg from '../img/plux.png';
import ASimg from '../img/AS.png';
import PSimg from '../img/PS.png';
import SProducts from '../img/software-service.png';
import IHuman from '../img/impact-human.png';
import MDIcon from '../img/mobile-dev-icon.png';
import SDIcon from '../img/software-dev-icon.png';
import WDIcon from '../img/web-dev-icon.png';
import wwdarrowicon from '../img/wwd-arrow-icon.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () =>{
  AOS.init();
return(
    <>
        <NavBar />
    <section className="hero-section">
      <div className="hero_a">
          <h1>Building a world full of <span>solutions</span></h1>
          {/* <p>Bring your ideas to life.</p> */}
          <p className='p2'>We provide IT solutions for every business</p>
          <button className="get-started_btn">Get Started</button>
      </div>
      <div className="hero_b">

      </div>

    </section>
    <section className='aboutus-section'>
    <div className='about-div'>
    <div className='about-cards'>
          <div data-aos-delay="1500"  data-aos="zoom-in-up"  className='about-card bg-bluey'>
            <img className='about-card_img' src={SProducts} alt="" />
            <h2 className='mh-blue'>Providing software products and services</h2>
          </div>
          <div data-aos="zoom-in-up"  className='about-card bg-greeny'>
          <img className='about-card_img' src={IHuman} alt="" />
            <h2 className='mh-blue'>Impacting humanity positively</h2>
          </div>
          <div data-aos="zoom-in-up"  className='about-card bg-ashy'>
            <h2 className='mh-blue'>Lorem</h2>
          </div>
          <div data-aos="zoom-in-up"  className='about-card bg-orangey'>
            <h2 className='mh-blue'>Lorem</h2>
          </div>
          {/* <h2 className='mh-blue'>About</h2>
          <p>We provide software products and services to private and comparate entities as well as individuals.</p>
          </div>
          <div className='about-card'>
            <h2 className='mh-blue'>Vision</h2>
            <p>To impact all humanity positively</p>
          </div>
          <div className='about-card'>
            <h2 className='mh-blue'>Mission</h2>
            <p>To be one of the most recognized companies in the world</p>
          </div> */}
        </div>
    </div>
    </section>
    <section className="what-we-do">
        <div className="what-we-do_heading">
          <span>WHAT DO WE DO?</span>
          <h2>We bring your ideas to life.</h2>
          <p>We use Technology to drive day to day activities with the aim of impacting lives positively</p>
        </div>
        <div className="what-we-do_contents">
        <div className="wwd-content">
              <div>
                <img className="wwd-content_icon-web"  src={WDIcon} alt="" />
                <p>Web Development</p>
              </div>
              <img className="wwd-content_arrowicon"  src={wwdarrowicon} alt="" />
            </div>
            <div className="wwd-content">
              <div>
                <img className="wwd-content_icon"  src={MDIcon} alt="" />
                <p>Mobile Development</p>
              </div>
              <img className="wwd-content_arrowicon"  src={wwdarrowicon} alt="" />
            </div>
            <div className="wwd-content">
              <div>
                <img className="wwd-content_icon"  src={SDIcon} alt="" />
                <p>Software Development</p>
              </div>
              <img className="wwd-content_arrowicon"  src={wwdarrowicon} alt="" />
            </div>
            <div className="wwd-content">
              <div>
                <img className="wwd-content_icon"  src={MDIcon} alt="" />
                <p>Digital Marketing</p>
              </div>
              <img className="wwd-content_arrowicon"  src={wwdarrowicon} alt="" />
            </div>
        </div>
    </section>
        {/* <ProductSlideshow /> */}
    <section className="service-section">
        
        <div className="service-tabs">
            
              <div className="service-heading">
                  <h1>Our Solutions</h1>
              </div>
            
            <div className="service-tab">
              <div data-aos="fade-right"  className="">
                  <img src={ CBimg } className='service-img mt-1'  alt='' />
              </div>
              <div className="baseline">
                    <h1>Ozi</h1>
                    <p>We make your management and financial experience exciting and convenient</p>
                    <ul>
                    <li>Core Banking As A Service (BAAS) </li>
                    <li>FinTech Management</li>
                    <li>Multiple Branch & Staff Management</li>
                    <li>Recharge Card Banking</li>
                  </ul>
                    <a className="store-tag"  href="#"> View</a>
                <div className="store-icon_div">
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={PSimg} className="ps-img" alt="playstore"/>
                        <div className="ps-sub_div">
                          <p>GET IT ON</p>
                          <span>Google Play</span>
                        </div>
                      </div>
                    </a>
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={ASimg} className="as-img" alt="appstore"/>
                        <div className="ps-sub_div">
                          <p>Available ON</p>
                          <span>App Store</span>
                        </div>
                      </div>
                    </a>
                </div>
              </div>
            </div>
            <div className="service-tab_revrse">
              <div className="baseline">
                  <h2>Plux</h2>
                  <p>Seemlessly pay electricty bill and earn comission</p>
                  <ul>
                    <li>Prepaid plan</li>
                    <li>Postpaid plan</li>
                  </ul>
                  <a className="store-tag"  href="#"> View</a>
                <div className="store-icon_div">
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={PSimg} className="ps-img" alt="playstore"/>
                        <div className="ps-sub_div">
                          <p>GET IT ON</p>
                          <span>Google Play</span>
                        </div>
                      </div>
                    </a>
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={ASimg} className="as-img" alt="appstore"/>
                        <div className="ps-sub_div">
                          <p>Available ON</p>
                          <span>App Store</span>
                        </div>
                      </div>
                    </a>
                </div>
              </div>
              <div className="" data-aos="fade-left">
                  <img src={ Pluximg } className='service-img mt-1'  alt='' />
              </div>
            </div>
            <div className="service-tab">
              <div className="">
                  <img src={ SMSimg } className='service-img_SMS mt-1'  alt='' />
              </div>
              <div className="baseline">
                  <h1>School Management System</h1>
                  <p>Lorem sit proem diego lapasire tenten </p>
                  <ul>
                    <li>Core Banking As A Service (BAAS) </li>
                    <li>Postpaid plan</li>
                    <li>FinTech Management</li>
                    <li>Postpaid plan</li>
                  </ul>
                  <a className="store-tag"  href="#"> View</a>
                <div className="store-icon_div">
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={PSimg} className="ps-img" alt="playstore"/>
                        <div className="ps-sub_div">
                          <p>GET IT ON</p>
                          <span>Google Play</span>
                        </div>
                      </div>
                    </a>
                    <a className="store-tag" href="#">
                      <div className="ps-div">
                        <img src={ASimg} className="as-img" alt="appstore"/>
                        <div className="ps-sub_div">
                          <p>Available ON</p>
                          <span>App Store</span>
                        </div>
                      </div>
                    </a>
                </div>
              </div>
            </div>
        </div>
    </section>
        <Footer />
    </>
)
}

export default Home;
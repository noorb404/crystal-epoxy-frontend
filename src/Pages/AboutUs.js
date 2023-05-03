import React from 'react';
import './AboutUs.css';
import story from "../Images/story.jpg";
import epoxyPassion from "../Images/epoxyPassion.jpg";
import woodMix from "../Images/woodepoxymix.jpg";
import woodWork from "../Images/woodWork.jpg";
import olive from "../Images/olivewood.png";
import eucalyptus  from "../Images/Eucalyptuswood.jpg";
import maple from "../Images/maplewood.jpg";
import Hero from './Hero';
import { FaArrowRight } from 'react-icons/fa';
import insta from '../Images/instapng.png';
import smallInsta from '../Images/smallInsta.png';

function AboutUs() {
  return (
    <div >
    <div className="about-us">
    <Hero 
        title="CRYSTAL EPOXY LTD." 
        subtitle="" 
        imageSrc={"https://res.cloudinary.com/ddlf8wxvm/image/upload/v1683123596/aboutuscover_c3cbkm.png"} 
      />
      <div className="breadcrumb">
        <ul>
          <li><a className='home-link' href="/">Home</a></li>
          <li><span>/</span></li>
          <li>About</li>
        </ul>
      </div>
          <div className="insta-section">
        <picture>
          <source media="(max-width: 767px)" srcSet={smallInsta} />
          <img src={insta} alt="Instagram preview" className="insta-image" />
        </picture>
        <div className="insta-headline">
          <h2>Follow us</h2>
          <h1>On Instagram!</h1>
          <a
            href="https://www.instagram.com/crystal.wood_epoxydesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-us-link"
            style={{ color: "#f7f7f4", padding: "10px" }}
          >
            @CRYSTAL.WOOD_EPOXYDESIGN<FaArrowRight style={{ marginLeft:'7px',paddingTop: "5px" }} />
          </a>
        </div>
      </div>
      <div className='separator'></div>
      <section className="about-us__intro">
        <div className="about-us__container">
          <div className="about-us__text">
            <h2 className="about-us__subheading">Our Passion for Wood and Epoxy</h2>
            <p className="about-us__paragraph">
              At Crystal Epoxy, we're passionate about creating beautiful and unique pieces of furniture that showcase the natural beauty of wood and the creativity of epoxy. We specialize in using high-quality materials and expert techniques to create stunning tables, desks, and other furniture pieces that are as functional as they are beautiful.
            </p>
            <p className="about-us__paragraph">
              Our team of skilled craftsmen combines traditional woodworking techniques with modern technology and innovative design concepts to create pieces that are truly one-of-a-kind. Whether you're looking for a custom-designed piece for your home or office, or a unique gift for a loved one, we have the expertise and experience to bring your vision to life.
            </p>
          </div>
          <img src={epoxyPassion} alt="Wood types" className="about-us__image my-img" />
        </div>
      </section>
      <section className="about-us__section">
        <div className="about-us__container">
          <img src={story} alt="About Us" className="about-us__image" />
          <div className="about-us__text">
            <h2 className="about-us__subheading">Our Story</h2>
            <p className="about-us__paragraph">
              Crystal Epoxy was founded by a team of woodworking and epoxy enthusiasts who saw the potential for combining these two materials to create stunning pieces of furniture. They began experimenting with different techniques and materials, and quickly discovered the magic of epoxy.
            </p>
            <p className="about-us__paragraph">
              Today, Crystal Epoxy has grown into a thriving business with a dedicated team of designers and craftsmen who are committed to creating unique and beautiful pieces of furniture that are both functional and practical. From coffee tables to dining room sets, we take pride in every piece we create, and we're always striving to push the boundaries of what's possible with wood and epoxy.
            </p>
          </div>
        </div>
      </section>
      <div className='separator'></div>

      <section className="about-us__woods">
        <h1 style={{color:'#303030' , paddingBottom:'20px'}}>Part of Our Wood Collection</h1>
        <div className="about-us__container">
            <div className="about-us__wood">
            <img src={olive} alt="Wood type" className="about-us__wood-image" />
            <h3 className="about-us__wood-heading">Olive</h3>
            <p className="about-us__wood-description">
            Olive wood is prized for its dense, intricate grain patterns and durability, making it a popular choice for carving and decorative items.
            </p>
            </div>
            <div className="about-us__wood">
            <img src={eucalyptus} alt="Wood type" className="about-us__wood-image" />
            <h3 className="about-us__wood-heading">Eucalyptus</h3>
            <p className="about-us__wood-description">
            Eucalyptus wood is known for its light color and distinctive scent, and is commonly used for furniture, flooring, and paper production.
            </p>
            </div>
            <div className="about-us__wood">
            <img src={maple} alt="Wood type" className="about-us__wood-image" />
            <h3 className="about-us__wood-heading">Maple</h3>
            <p className="about-us__wood-description">
                Maple is a hard, dense wood that is known for its light color and fine grain pattern. It's a popular choice for furniture because of its durability and resistance to wear and tear.
            </p>
            </div>
        </div>
        </section>
      <div className='separator'></div>

      <section className="about-us__section">
        <div className="about-us__container">
          <img src={woodMix} alt="Epoxy resin" className="about-us__image" />
          <div className="about-us__text">
            <h2 className="about-us__subheading">Mixing Wood and Epoxy</h2>
            <p className="about-us__paragraph">
              At Crystal Epoxy, we specialize in creating unique pieces of furniture that combine the beauty of wood with the creativity of epoxy. By mixing these two materials, we're able to create pieces that are truly one-of-a-kind and showcase the natural beauty of wood in a whole new way.
            </p>
            <p className="about-us__paragraph">
              Our team of skilled craftsmen uses a variety of techniques to create stunning designs that are both functional and practical. From river tables to desks to countertops, we can create custom pieces that are tailored to your specific needs and preferences.
            </p>
          </div>
        </div>
      </section>
      <section className="about-us__section" style={{paddingBottom:'30px'}}>
        <div className="about-us__container">
          <div className="about-us__text">
            <h2 className="about-us__subheading">Our Work</h2>
            <p className="about-us__paragraph">
              We take pride in every piece of furniture we create, and we're always pushing the boundaries of what's possible with wood and epoxy. Our team of designers and craftsmen are dedicated to creating pieces that are not only beautiful and unique, but also functional and practical.
            </p>
            <p className="about-us__paragraph">
              Whether you're looking for a custom-designed dining room table, a beautiful coffee table, or a unique desk for your home office, we have the expertise and experience to create a piece that's perfect for you.
            </p>
            </div>
          <img src={woodWork} alt="Epoxy resin" className="about-us__image" />

            </div>
        </section>

    </div>

    </div>
    );
}

export default AboutUs;
import './ContactComponent.css';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export function ContactComponent() {
  return (
    <section className="contact">
      <div className="contact__info">
        <div className="contact__item">
          <span className="contact__icon"><FaPhone /></span>
          <span className="contact__label">Phone:</span>
          <span className="contact__value">+972 52-727-1875</span>
        </div>
        <div className="contact__item">
          <span className="contact__icon"><FaMapMarkerAlt /></span>
          <span className="contact__label">Address:</span>
          <span className="contact__value">Israel Arraba Hazafon</span>
        </div>
        <div className="contact__item">
        <span className="contact__icon"><FaFacebookF /></span>

          <span className="contact__label">Facebook:</span>
          <span className="contact__value"><a href="https://www.facebook.com/profile.php?id=100088418421973">Crystal Epoxy <FaArrowRight style={{ paddingTop: "5px" }} /></a></span>
        </div>
        <div className="contact__item">
        <span className="contact__icon"><FaInstagram /></span>
          <span className="contact__label">Instagram:</span>
          <span className="contact__value"><a href="https://www.instagram.com/crystal.wood_epoxydesign/">Crystal Epoxy <FaArrowRight style={{ paddingTop: "5px" }} /></a></span>
        </div>
        <div className="contact__item">
          <span className="contact__icon"><FaEnvelope /></span>
          <span className="contact__label">Email:</span>
          <span className="contact__value">crystalepoxy797@gmail.com</span>
        </div>
          
      </div>
    </section>
  );
}

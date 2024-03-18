import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/ISTEGELSINLOGO.png';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="ps-8">
        <div className="row no-gutters">
          {/* 1. Sütun */}
          <div className="col-md-3">
            <div className="footer-logo">
              <Link className="navbar-brand" to="/">
                <img src={logo} width="140" alt="Hoaxify Logo" />
              </Link>
            </div>
            <ul className="list-unstyled mt-5">
              <li className="mb-1">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Telefon: 123-456-7890
              </li>
              <li className="mb-1 mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Email: info@example.com
              </li>
              <li className="mb-1 d-flex flex-column mt-5">
                <button className="btn btn-outline-light border me-2 flex-grow-1 mb-1" type="button" style={{ width: "150px" }}>
                  <FontAwesomeIcon icon={faGoogle} className="me-2" />
                  <span className="d-none d-md-inline">Google Play</span>
                  <span className="d-inline d-md-none">Play</span>
                </button>

                <button className="btn btn-outline-light border me-2 flex-grow-1 mt-2" type="button" style={{ width: "150px" }}>
                  <FontAwesomeIcon icon={faApple} className="me-2" />
                  <span className="d-none d-md-inline">App Store</span>
                  <span className="d-inline d-md-none">App</span>
                </button>
              </li>




            </ul>
          </div>

          {/* 2. Sütun */}
          <div className="col-md-3">
            <h5 className="footer-column-title mb-4">İş Arayan İşlemleri</h5>
            <ul className="list-unstyled">
              <li><Link className="nav-link footer-underline" to="/contact">İş İlanları</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İstanbul İş İlanları</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Depremzede İş İlanları</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İş Arayan Girişi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Özgeçmiş Oluştur</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Cv Oluştur</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İş Rehberi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Meslek Rehberi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Maaşlar</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Maaş Hesaplama Robotu</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Üniversite Rehberi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Üniversite Bölümleri</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Özgeçmiş Rehberi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Bildirimler</Link></li>
            </ul>
          </div>

          {/* 3. Sütun */}
          <div className="col-md-3">
            <h5 className="footer-column-title mb-4">Firma İşlemleri</h5>
            <ul className="list-unstyled">
              <li><Link className="nav-link footer-underline" to="/contact">İş İlanı Yayınla</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Firma Üyeliği</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Firma Giriş</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İşveren Girişi</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İstihdam Ödülleri</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Avantajlar ve Fırsatlar</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Eleman Bulma Rehberi</Link></li>
            </ul>
          </div>


          <div className="col-md-3">
            <h5 className="footer-column-title mb-4">Kurumsal</h5>
            <ul className="list-unstyled">
              <li><Link className="nav-link footer-underline" to="/contact">Eleman.net Hakkında</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Reklam Verin</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">Kurumsal Dergi - Emag</Link></li>
              <li><Link className="nav-link footer-underline" to="/contact">İletişim</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

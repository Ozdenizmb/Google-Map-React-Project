import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/ISTEGELSINLOGO.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from './ProfileImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { logoutSuccess } from '../redux/authActions';
import '../css/Component.css';

const TopBar = () => {

    const { isLoggedIn, email, name, surname, logoPath } = useSelector(store => ({
        isLoggedIn: store.isLoggedIn,
        email : store.email,
        name: store.name,
        surname: store.surname,
        logoPath: store.logoPath
    }));

    const user = {
        image : logoPath
    };

    const dispatch = useDispatch();
    const onLogoutSuccess = () => {
        dispatch(logoutSuccess());
    };

    const menuArea = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('click', menuClickTracker);
        return() => {
            document.removeEventListener('click', menuClickTracker);
        }
    }, [isLoggedIn]);

    const menuClickTracker = (event) => {
        if(menuArea.current === null || !menuArea.current.contains(event.target)) {
            setMenuVisible(false);
        }
    }

    const onClickDropDown = () => {
        setMenuVisible(true);
    }

    const onClickProfile = () => {
        setMenuVisible(false);
    }

    let links = (
        <ul className="navbar-nav">
            <li className="topbar_buttons">
                <Link className="nav-link text-white" to="/">
                    Anasayfa
                </Link>
            </li>
            <li className="topbar_buttons">
                <Link className="nav-link text-white" to="/contact">
                    İletişim
                </Link>
            </li>
            <li className="topbar_buttons">
                <Link className="nav-link text-white" to="/login">
                    Giriş Yap
                </Link>
            </li>
            <li className="topbar_buttons">
                <Link className="nav-link text-white" to="/signup">
                    Kaydol
                </Link>
            </li>
        </ul>
    );

    if(isLoggedIn) {
        let dropdownClass = 'dropdown-menu p-0 shadow';
        if(menuVisible) {
            dropdownClass += ' show';
        }

        links = (
            <ul className="navbar-nav" ref={menuArea}>
                <li className="topbar_buttons">
                    <Link className="nav-link text-white" to="/">
                        Anasayfa
                    </Link>
                </li>
                <li className="topbar_buttons">
                    <Link className="nav-link text-white" to="/map-page">
                        Map
                    </Link>
                </li>
                <li className="topbar_buttons me-3">
                    <Link className="nav-link text-white" to="/contact">
                        İletişim
                    </Link>
                </li>
                <li>

                    <div className="d-flex" style={{cursor: 'pointer'}} onClick={onClickDropDown}>
                        <ProfileImage user={user} width={"32"} height={"32"} imageCss="m-auto" />
                        <span className="nav-link dropdown-toggle">{name}</span>
                    </div>

                    <div className={dropdownClass}>
                        
                        <Link className="dropdown-item d-flex p-2" to={`/profile/${email}`} onClick={onClickProfile}>
                            <FontAwesomeIcon icon={faPerson} className="text-info me-2 pt-1" />
                            Profilim
                        </Link>
                        <span className="dropdown-item d-flex p-2" style={{cursor:'pointer'}} onClick={onLogoutSuccess}>
                            <FontAwesomeIcon icon={faPowerOff} className="text-danger me-2 pt-1" />
                            Çıkış Yap
                        </span>
                    </div>

                </li>
            </ul>
        );
    }

    return (
        <div className="top-bar-container bg-dark shadow-sm"> 
            <nav className="navbar container navbar-expand">
                <div className="container-fluid">
    
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="140" alt="Hoaxify Logo"/>
                    </Link>
    
                    {links}
    
                </div>
            </nav>
        </div>
    );
    

};

export default TopBar;

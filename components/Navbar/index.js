import React from 'react'
import Link from 'next/link'
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="VEDUS Logo" width="150"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form className="d-flex flex-grow-1 justify-content-center" role="search">
              <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn text-light" type="submit" style={{backgroundColor:"#0B2447"}}>Ara</button>
            </form>
            {/* Menü Kısmı Başlangıç */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Ana Sayfa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/courses">Özel Dersler</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Bize Ulaşın</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUser/> Sedanur Çevik
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/">Profilim</Link></li>
                  <li><Link className="dropdown-item" href="/courses">Verdiğim Dersler</Link></li>
                  <li><Link className="dropdown-item" href="/contact">Aldığım Dersler</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">
                    <FaSignOutAlt/> Çıkış Yap</a></li>
                </ul>
              </li>
            </ul>
             {/* Menü Kısmı Bitiş*/}
        </div>
      </div>
    </nav>
  )
}

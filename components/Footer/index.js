import { getAllCategories } from '@/pages/api/categories';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaGoogle, FaInstagram ,FaMedium, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [categories, setCategories]=useState([])

  useEffect(()=>{
    getAllCategories().then(data => {
      setCategories(data);
    }).catch(err => {
      console.log(err);
    });
  },[])

  return (
    <footer className="text-center text-lg-start text-light" style={{backgroundColor:"#0B2447"}}>

      <section className="" style={{padding:"5px"}}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>VEDUS
              </h6>
              <p>
                Bir çocuğun eğitimine gönüllü destek olarak başarıya giden o yolda beraber yürüyebilirsiniz.
              </p>
            </div>
    
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Sayfalar
              </h6>
              <p>
                <Link href={"/"} className="text-reset">Ana Sayfa</Link>
              </p>
              <p>
                <Link href={"/courses"} className="text-reset">Özel Dersler</Link>
              </p>
              <p>
                <Link href={"/contact"} className="text-reset">Bize Ulaşın</Link>
              </p>
            </div>
    
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                KATEGORİLER
              </h6>
              {categories?.map((category) => (
                <p key={category.id}>
                  <Link href={"#!"} className="text-reset">
                    {category.category_name}
                  </Link>
                </p>
              ))}
            </div>
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">İLETİŞİM</h6>
              <p><i className="fas fa-home"></i> İstanbul</p>
              <p>
                <i className="fas fa-envelope"></i>
                info@vedus.com
              </p>
            </div>
          </div>
        </div>

      </section>

      <hr/>

      <div className="text-center p-4" style={{backgroundColor: "#0B2447"}}>
        <div className="flex mt-2 mb-4 space-x-1 sm:justify-end md:mt-0">
          <span style={{marginRight:"auto",alignItems: "center"}}>
            © 2023 &nbsp;
          <a className="text-reset fw-bold" href="#!">vedus.com</a>
          </span>
          <a href="#!" className="me-4 text-light">
            <FaFacebook/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaTwitter/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaGoogle/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaInstagram/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaLinkedin/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaGithub/>
          </a>
          <a href="#!" className="me-4 text-light">
            <FaMedium/>
          </a>
        </div>

      </div>
      
    </footer>
  )
}

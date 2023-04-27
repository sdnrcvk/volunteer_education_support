import React from 'react'
import { FaTwitter, FaGlobe, FaLinkedin, FaEdit, FaGithub, FaGoogle, FaInstagram , FaMedium, FaFacebook } from "react-icons/fa";
import Head from 'next/head'
import Layout from '@/components/Layout'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Link from 'next/link';
  

export default function Profile() {
  return (
    <>
    <Head>
      <title>VEDUS | Profil</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossOrigin="anonymous"/>
    </Head>
    <Layout>
    <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profil  :</h1>
            </div>
        </div>
      
      <div className="container py-4">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <MDBContainer>
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
                      alt="avatar"
                      className="rounded-circle m-auto"
                      style={{ width: '150px' }}
                      fluid />
                    <p className="text-muted mb-1 mt-2">Bilgisayar Mühendisi</p>
                    <p className="text-muted mb-1">Tokat / Merkez</p>
                    <Link href="/edit-profile" className="position-absolute" style={{ top: '10px', right: '10px' }}>
                      <MDBBtn color="warning">
                        <FaEdit />
                      </MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <FaGlobe/>
                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <FaInstagram/>
                        <MDBCardText>mdbootstrap</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <FaLinkedin/>
                        <MDBCardText>mdbootstrap</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Ad Soyad</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Sedanur Çevik</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Doğum Tarihi</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">18.04.1999</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Telefon</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">0545 *** ** **</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Cinsiyet</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Kadın</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>İl / İlçe</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Tokat / Merkez</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">sdnrcvk@gmail.com</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Şifre</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">*******</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md="12">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-3 text-center" style={{ fontSize:"larger" }}><b>Hakkımda</b></MDBCardText>
                        <MDBCardText className="mb-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo, sunt nesciunt unde tempore doloremque dolorem repellat fugiat cum omnis dolor eveniet delectus voluptatibus accusamus. Dolorem molestiae temporibus fugit voluptate!
                            Distinctio, illo enim facilis quibusdam officia nulla illum nostrum aut, doloribus at voluptate sequi debitis pariatur corrupti consequatur quasi totam! Ipsum ad nemo in eos doloribus vel sed quod eligendi?
                            Quam at repudiandae hic maxime facere eveniet provident harum est, nulla atque in voluptatibus maiores id quibusdam nostrum explicabo sint laudantium? Non sapiente, vero enim dolor amet doloremque vel voluptatibus?
                            Velit maiores recusandae itaque sunt modi quaerat ad? Cumque fugit facilis facere rerum inventore corporis adipisci ea ducimus ipsa accusamus, libero obcaecati doloremque minus, magnam eveniet repellendus tempore, veritatis enim.
                            Atque similique nam recusandae ut eius vel voluptatem dolore, voluptatum tempore sapiente sed cupiditate sint accusamus. Ad pariatur fugit deleniti, doloremque, officiis esse repellendus numquam ut maxime excepturi sequi. Necessitatibus.
                            Repellat, debitis cumque! Magnam quibusdam, voluptatum incidunt unde, soluta quos cumque at aut enim dicta placeat vel numquam! Maiores quam neque fuga nostrum deserunt aperiam illum est, distinctio perspiciatis nam.
                            Quibusdam delectus consectetur voluptas animi optio culpa quasi reprehenderit cumque hic laborum sed accusantium, eos, impedit quos sit quas perferendis, laboriosam modi facilis ipsa corporis ratione amet deserunt. At, quo?
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </section>
    </Layout>
  </>
  )
}

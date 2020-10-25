import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import imageFEWeb from "../images/fe-web.jpg"
import imageFEMobile from "../images/fe-mobile.jpg"
import imageLaptop from "../images/laptop.jpg"
import figma from "../images/logo-figma.png"
import react from "../images/logo-react.png"
import sketch from "../images/logo-sketch.png"
import swift from "../images/logo-swift.png"
import xcode from "../images/logo-xcode.png"

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Banner">
        <div className="BannerText">
          <h2>
            Learn design and code <br /> in one place
          </h2>
          <p>
            Prototype and build apps with React, React Native, Flutter, and
            More.
          </p>
          <button>Watch Video</button>
        </div>

        <svg
          width="100%"
          height="172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              dur="10s"
              attributeName="d"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                "
            ></animate>
          </path>
        </svg>
      </div>
      <div className="Logo">
        <img src={react} alt="react" />
        <img src={figma} alt="figma" />
        <img src={swift} alt="swift" />
        <img src={xcode} alt="xcode" />
        <img src={sketch} alt="sketch" />
      </div>
      <div className="Promo">
        <button>Try for free</button>
        <h3>Gratis coba 7 hari</h3>
        <p>
          Lalu cukup bayar 50 ribu per bulan untuk dapat mengakses semua materi.
          Cancel anytime.
        </p>
      </div>
      <div className="Course">
        <h1>Materi</h1>
        <div className="CourseCard">
          <div className="Card">
            <img src={imageFEWeb} alt="reactjs" />
            <h3>React JS</h3>
            <p>12 Sections</p>
          </div>
          <div className="Card">
            <img
              src={imageFEMobile}
              alt="react native"
              width="100%"
              height="100%"
            />
            <h3>React Native</h3>
            <p>12 Sections</p>
          </div>
          <div className="Card">
            <img src={imageFEWeb} alt="reactjs" />
            <h3>Vue JS</h3>
            <p>12 Sections</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

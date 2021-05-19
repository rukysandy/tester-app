import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import BackgroundImage from "gatsby-background-image"
// import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import styled from "styled-components"
import graduated from "../images/graduated.svg"

import Button from "./button"

const BannerStyles = styled.section`
  background-image: url(${graduated});
  filter: blur(100);
  background-size: 100px;
  background-attachment: fixed;
  font-size: 5px;
  height: 90vh;
  width: 100%;
  background-color: #453cef;
  border-radius: 15px;
  color: #f7f9f9;
  .hero-div {
    background-color: #453cef;
    height: 90vh;
    width: 100%;
    opacity: 0.9;
    border-radius: 15px;
  }

  .hero-content-div {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .hero-content {
    text-align: center;
    height: 100%;
    width: 100%;
    max-width: 200px;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* margin-left: auto;
    margin-right: auto; */

    @media (min-width: 768px) {
      width: 50%;
      height: 300px;
      max-width: 650px;
    }

    h1 {
      font-size: calc(1.5rem + 3vw);
      line-height: 1.2;
      font-weight: bold;

      span {
        background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-size: 1.15rem;
      /* font-family: roboto Slab; */
      @media (min-width: 768px) {
        line-height: 1.69;
        font-size: 2rem;
        letter-spacing: -0.2px;
      }

      @media (min-width: 1200px) {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    /* button,
    .anchor {
      margin: 0 auto;
    } */

    @media (min-width: 768px) {
      max-width: 800px;

      h1 {
        font-size: calc(2rem + 3vw);
        padding-bottom: 30px;
      }
    }
    @media (min-width: 1200px) {
      h1 {
        /* font-size: 4rem; */
        font-size: calc(2.5rem + 3vw);
        padding-bottom: 30px;
      }
    }
  }
`

const Banner = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "collegStudent.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000, quality: 90) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <>
      <BannerStyles>
        <div className="hero-div">
          <div className="hero-content-div">
            <div className="hero-content">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
              >
                Get help from the <span> expert</span> consultants.
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
              >
                Achieve your educational , business and personal goals. A
                consultation with us Today will make a difference.
              </motion.p>
              <Link to="about" smooth={true} duration={500}>
                {/* <span className="sr-only">Jump to about</span> */}
                <Button
                  cta="Learn More"
                  label="Banner Learn More"
                  anchor={true}
                  href="linking"
                />
              </Link>
            </div>
            <div>
              <StaticImage
                src="../images/hero-main-chick.png"
                alt="hero-Image"
                placeholder="blurred"
                layout="constrained"
                // width={300}
                // height={300}
              />
            </div>
          </div>
        </div>
      </BannerStyles>
    </>
  )
}

export default Banner

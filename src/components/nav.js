import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../images/AIO.svg"

export const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 90px;
    height: 70px;
  }
  .Logo {
    padding: 5px 0;
  }
  .nav-links {
  }

  /* .burger-menu {
    
  } */
  .masthead {
    /* position: fixed; */
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledBurger = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;

  /* top: 15px;
    right: 20px; */
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .burger-bar {
    z-index: 10;
    width: 3rem;
    height: 0.4rem;
    background-color: ${({ open }) => (open ? "#fdfefe" : "#453cef")};
    /* background-color: ${({ open }) => (!open ? " #fdfefe" : "#453cef")}; */
    /* background-color: #453cef; */
    border-radius: 15px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      /* transform: translateY(-5px); */
      transform: ${({ isOpen }) =>
        isOpen == true ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  li {
    padding: 18px 20px;
    .nav-link {
      text-decoration: none;
      text-transform: capitalize;
    }
  }
  @media (max-width: 768px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    padding-top: 3.5rem;
    margin: 0;
    transition: transform 0.3s ease-in-out;
    /* display: none; */
    .nav-link {
      color: #fdfefe;
    }
  }
`

const RightNav = ({ isOpen }) => {
  console.log("rightnavOpen", isOpen)
  return (
    <Ul isOpen={isOpen}>
      <li>
        <Link className="nav-link  " to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link  " to="/">
          About Us
        </Link>
      </li>

      <li>
        <Link className="nav-link  " to="/">
          Our Service
        </Link>
      </li>
      <li>
        <Link className="nav-link  " to=" /">
          Contact Us!
        </Link>
      </li>
    </Ul>
  )
}

const Burger = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
    // console.log("OPEN : ", isOpen)
  }
  return (
    <>
      <StyledBurger isOpen={isOpen} className="burger-menu" onClick={toggleNav}>
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </StyledBurger>
      <RightNav isOpen={isOpen} />
    </>
  )
}

export default function Nav() {
  useEffect(function () {
    console.log(
      "window Height",
      window.innerHeight,
      "wiindow width",
      window.innerWidth
    )
  }, [])
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
    console.log("OPEN : ", isOpen)
  }
  return (
    <NavStyles>
      <div className="masthead flex-container">
        <div className="Logo">
          <img src={Logo} alt="Startup Logo" />
        </div>

        <Burger />
        {/* <StyledBurger
          isOpen={isOpen}
          className="burger-menu"
          onClick={toggleNav}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </StyledBurger> */}

        {/* <button
        className="toggle-btn"
        // className={isOpen ? "toggle-btn toggle-btn-active" : "toggle-btn"}
        // className="toggle-btn"
        // type="button"
        // onClick={toggleNav}
        // aria-label="Menu Button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      </div>
      {/* <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        <li>
          <Link className="nav-link  " to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link  " to="/">
            About Us
          </Link>
        </li>

        <li>
          <Link className="nav-link  " to="/">
            Our Service
          </Link>
        </li>
        <li>
          <Link className="nav-link  " to=" /">
            Contact Us!
          </Link>
        </li>
      </ul> */}
    </NavStyles>
  )
}

import { useState, useEffect } from "react";
import "../../css/style.css"
import Logo from "../../img/minerva_hub_white.png"
import BasicMenu from "../dropdowns/NavDropdown"



function NavBar(){

  const [state, setState] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
const openNav =()=>{
  setState(!state);
}
const handleClick = event => {
  // event.currentTarget.classList.toggle('open');
  event.currentTarget.classList.toggle('toggle');
  // event.currentTarget.classList.toggle('fade');
}
    const navLinks = [
      {name: "Home"}, 
      {name: "About Us", submenu:true, sublinks:[
        { Head: "Policies", link: "/"},
        { Head: "About Us", link: "/"}

        
      ]}, 
      {name: "Our Solutions"}, 
      {name: "Contact Us"},
      ]
    return(
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="logo">
        <img src={Logo} alt="Logo" className="logoTop" />
      </div>
      <div onClick={()=>{openNav();handleClick()}}  className='hamburger'>
        <div className={'line1 ' + (state ? 'toggleline1':'')}></div>
        <div className={'line2 ' + (state ? 'toggleline2':'')}></div>
        <div className={'line3 ' + (state ? 'toggleline3':'')}></div>
      </div>
      <ul  className= {'nav-links ' + (state ? 'nav-linksopen':'')}>
          {/* <li className= {'' + (state ? 'fade':'')}><a href=""><BasicMenu/></a></li> */}
          {
               navLinks.map(item =>(
                <>
                   <li className= {'' + (state ? 'fade':'')}><a>{item.name}</a></li>
                </>
               ))
           }
          
          <a className="nav-button">Sign In</a>
      </ul>
      
  
        </nav>
    )
}

export default NavBar;
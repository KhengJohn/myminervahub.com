import React from 'react'
import {} from '../../css/style.css'
import Logo from "../../img/minerva_hub_white.png"
import { Link, Routes, Route} from 'react-router-dom';
import { FAQs } from '../../pages/Faqs'
const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer-div'>
            <div>
              <h3>Our Solutions</h3>
                 <ul>
                   <li><Link to='/fintech'>FinTech</Link></li>
                   <li><Link to='/inventory technology'>Inventort Technology</Link></li>
                   <li><Link to='/school management system'>School Management System</Link></li>
                 </ul>
            </div>
            <div>
              <h3>Resources</h3>
                 <ul>
                   <li><Link to='/privacy & policy'>Privacy and Policy</Link></li>
                   <li><Link to='/documntations'>Documentation</Link></li>
                   <li><Link to='/support'>Support</Link></li>
                   <li><Link to='/downloads'>Downloads</Link></li>
                 </ul>
            </div>
            <div>
              <h3>About Us</h3>
                 <ul>
                   <li><Link to='/faqs'>FAQs</Link></li>
                   <li><Link to='/carrers'>Carrers</Link></li>
                   <li><Link to='/team'>Our Team</Link></li>
                 </ul>
            </div>
            <div>
            <img src={Logo} alt="Logo" className="logo-footer" />
                 <ul>
                   <li><Link to=''>+234 703 916 2908</Link></li>
                   <li><Link to=''>info@myminervahub.com</Link></li>
                   <li><Link to=''>Vintage Estate City College, Abuja</Link></li>
                 </ul>
            </div>
        </div>
        <Routes>
            <Route path="/fintech" element= { <h1>Fintech</h1> } />
            <Route path="/inventory technology" element= { <h1>Inventory Technology</h1> } />
            <Route path="/school management system" element= { <h1>School Management System</h1> } />
            <Route path="/privacy & policy" element= { <h1>Privacy and Policies</h1> } />
            <Route path="/documntations" element= { <h1>Documentation</h1> } />
            <Route path="/support" element= { <h1>Support</h1> } />
            <Route path="/downloads" element= { <h1>Downloads</h1>} />
            <Route path="/faqs" element= { <FAQs /> } />
            <Route path="/carrers" element= { <h1>Carrers</h1> } />
            <Route path="/team" element= { <h1>Team</h1> } />
        </Routes>
    </section>
  )
}

export default Footer
import React from 'react';
import CBimg from '../../img/corebanking.png';
import SMSimg from '../../img/schoolmanagementsystem.png';
import Pluximg from '../../img/plux.png';

const ServiceSection = () => {
  return (
    <section className="service-section">
        
        <div className="service-tabs">
            <div className="service-heading">
                {/* <h1>Our Solutions</h1> */}
            </div>
            <div className="">
                
            </div>
            <div className="TT">
                <img src={ CBimg } className='service-img mt-1'  alt='' />
                <div className='RC1'>Core Banking Service</div>
                <div className='RC2'>Recharge Card Banking</div>
                <div className='RC3'>FinTech Management</div>
                <div className='RC4'>Branch & Staff</div>
            </div>
            <div className="service-tab text-left">
                <h1>Ozi</h1>
                <p>Lorem sit proem diego lapasire tenten gesoreliujm satinospo</p>
            </div>
            <div className="service-tab text-left ">
                <h1>Plux</h1>
                <p>Lorem sit proem diego lapasire tenten gesoreliujm satinospo</p>
            </div>
            <div className="">
                <img src={ Pluximg } className='service-img_plux mt-1'  alt='' />
            </div>
            <div className="">
                <img src={ SMSimg } className='service-img mt-1'  alt='' />
            </div>
            <div className="service-tab text-left">
                <h1>School Management System</h1>
                <p>Lorem sit proem diego lapasire tenten gesoreliujm satinospo</p>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection
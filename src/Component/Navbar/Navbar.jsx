import React from 'react'
import logo from '../../Assets/images/1x/Artboard 1 copy 2.png'
import back from '../../Assets/images/icons/PNG/Back_2.png'
import clock from '../../Assets/images/icons/PNG/Clock.png'
import style from './Navbar.module.css'

export default function Navbar() {
     
  return <>
       <div id="behindtop" className="behindtop"></div>
    <nav className="top fixed-top bg-white border border-bottom border-1 border-light-subtle">
          <div className="container-fluid d-flex flex-wrap justify-content-between ps-5 pe-5 align-content-center">
               <div className="top-left d-flex flex-wrap ps-md-3 align-items-center">
               <div className="cursor-pointer d-flex align-items-center pt-2 pb-2">
                    <img src={back} alt="back" />          
                    <span className="ps-3 pe-3 font color-green fs-4">Back</span>
               </div>
               <div className="d-flex flex-column pt-2 pb-2">
                    <h3 className="fs-3 m-0">Introduction to Genetic Algorithm</h3>
                    <p className="text-secondary">Quiz • 15 min</p>
               </div>
               </div>
               <div className="top-right d-flex flex-wrap ps-md-3 align-items-center pt-2 pb-2 time">
                    <img src={clock} alt="clock"/>            
                    <p className="ps-2 fw-semibold fs-4">
                         Due Dec 10, 11:59<br/>
                         PM PST 
                    </p>
               </div>
          </div>
     </nav>
  </>
}

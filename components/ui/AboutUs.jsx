import React from 'react'

export default function AboutUs() {
    return (
        <div className='row pb-5 aboutUsContainer'>
            <div className="col-sm-8 col-12">
                <h2 className=' fw-lighter'>Innovazia is a Digital Experience Agency that delivers <span className='underlinePart'>high performance</span> digital experiences for <span>mid-range and large enterprises as well as startups</span></h2>
            </div>
            <div className="col-4 px-5 d-flex justify-content-center align-items-center d-none d-sm-flex">
                <button className='contactBtn'>Contact Us</button>
                <svg height="200" width="300" >
              <g fill="none" stroke="black" stroke-width="4">
                <circle stroke-dasharray="1,10"cx={'150'} cy={'100'}  r="74" />
              </g>
            </svg>
            </div>
        </div>
    )
}

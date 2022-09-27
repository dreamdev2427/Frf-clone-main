import React, { useState } from 'react'

export default function Header() {
    const [menu,setMenu] = useState(false)

        return (
            <header className='header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-1">
                            <a href="/" className='logo'>
                                <img src="/images/favicon.png" alt="logo" />
                                <p>Friktion</p>
                            </a>
                        </div>
                        <div className="col-sm-7">
                            <div className="main-menu">
                                <ul className='nav-menu'>
                                    <li className='nav-item'><a href="/" className='nav-link'>Volts</a></li>
                                    <li className='nav-item'><a href="/" className='nav-link'>Analytics</a></li>
                                    <li className='nav-item'><a href="/" className='nav-link'>Portfolio</a></li>
                                    <li className='nav-item'><a href="/" className='nav-link'>Circuits</a></li>
                                    <li className='nav-item'><a href="/" className='nav-link'>Docs</a></li>
                                    <li className='nav-item'><a href="/" className='nav-link'>Community</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="last-col">
                                <div className="toggle-menu">
                                    <button onClick={()=>{setMenu(!menu)}}>
                                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon">
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                        </svg>
                                    </button>
                                    {menu ? <>
                                    <div className="mobile-menu">
                                        <div className="mobile-main-menu">
                                            <a href="/" className='nav-link'>Volts</a>
                                            <a href="/" className='nav-link'>Analytics</a>
                                            <a href="/" className='nav-link'>Portfolio</a>
                                            <a href="/" className='nav-link'>Circuits</a>
                                            <a href="/" className='nav-link'>Docs</a>
                                            <a href="/" className='nav-link'>Discord</a>
                                            <a href="/" className='nav-link'>Twitter</a>
                                            <a href="/" className='nav-link'>Forum</a>
                                            <a href="/" className='nav-link'>Medium</a>
                                        </div>
                                    </div>

                                    </> : ''}
                                </div>
                                <button className='notification'>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="dt-w-6 dt-h-6 dt-rounded-full">
                                        <path d="M7.5 14.167v-.75a.75.75 0 0 0-.75.75h.75Zm5 0h.75a.75.75 0 0 0-.75-.75v.75Zm-5 .75h5v-1.5h-5v1.5Zm4.25-.75V15h1.5v-.833h-1.5ZM8.25 15v-.833h-1.5V15h1.5ZM10 16.75A1.75 1.75 0 0 1 8.25 15h-1.5A3.25 3.25 0 0 0 10 18.25v-1.5ZM11.75 15A1.75 1.75 0 0 1 10 16.75v1.5A3.25 3.25 0 0 0 13.25 15h-1.5Z" fill="currentColor"></path><path d="m3.577 12.256-.53-.53.53.53Zm.426-.426.53.53-.53-.53Zm11.994 0 .53-.53-.53.53Zm.426.426.53-.53-.53.53ZM10 2.5v.75-.75Zm5.833 10.917H4.167v1.5h11.666v-1.5Zm-11.75-.084v-.488h-1.5v.488h1.5Zm.025-.547.425-.425-1.06-1.061-.426.425 1.06 1.061Zm.809-1.35V8.332h-1.5v3.102h1.5Zm10.166-3.103v3.102h1.5V8.333h-1.5Zm.383 4.027.426.426 1.06-1.06-.425-.426-1.06 1.06Zm.45.485v.488h1.5v-.488h-1.5Zm-.024-.059a.083.083 0 0 1 .025.06h1.5c0-.42-.167-.823-.464-1.12l-1.06 1.06Zm-.809-1.35c0 .346.138.68.383.925l1.061-1.061a.192.192 0 0 1 .056.135h-1.5Zm1.5-3.103A6.583 6.583 0 0 0 10 1.75v1.5a5.083 5.083 0 0 1 5.083 5.083h1.5Zm-11.666 0A5.083 5.083 0 0 1 10 3.25v-1.5a6.583 6.583 0 0 0-6.583 6.583h1.5Zm-.384 4.027c.246-.245.384-.578.384-.925h-1.5c0-.05.02-.1.056-.135l1.06 1.06Zm-.45.485c0-.022.01-.043.025-.059l-1.06-1.06c-.298.296-.465.7-.465 1.12h1.5Zm.084.572a.083.083 0 0 1-.084-.084h-1.5c0 .875.71 1.584 1.584 1.584v-1.5Zm11.666 1.5c.875 0 1.584-.71 1.584-1.584h-1.5a.083.083 0 0 1-.084.084v1.5Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                                <a href="/" className='primarybtn'>Connect Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
}

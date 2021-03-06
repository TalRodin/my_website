import Link from 'next/link';
import React from 'react'
const Navbar = () => (
    <div className="menu">
        <div className="label">Menu</div>
        <div className="spacer"></div>
                <div className="item"><span><Link href='/'><a>Home</a></Link></span></div>
                <div className="item"><span><Link href='/about'><a>About</a></Link></span></div>
                <div className="item"><span><Link href='/articles'><a>Articles</a></Link></span></div>
                <div className="item"><span><Link href='/projects'><a>Projects</a></Link></span></div>
        <style jsx>
            {`@import url('https://fonts.googleapis.com/css?family=Lato');
            .menu {
                text-transform: uppercase;
                letter-spacing: 2px;
                // color: black;
                display: inline-block;
                cursor: pointer;
                background:transparent;
                // pointer-events: none;
                // bottom: 10px;
                left: 30px; 
                font-family: 'Lato', sans-serif;
                color:#424242;
                position:fixed;
              }
            a{
                font-family: 'Lato', sans-serif;
                color:#424242;
                text-decoration: none;
            }
            .menu:hover {
                pointer-events: all;
              }
              .label {
                display: inline-block;
                cursor: pointer;
                pointer-events: all;
                font-size: small;
                letter-spacing: 2px;
                
              }
              .spacer {
                display: inline-block;
                width: 80px;
                margin-left: 15px;
                margin-right: 15px;
                vertical-align: middle;
                cursor: pointer;
                position: relative;
              }
              .spacer:before {
                content: "";
                position: absolute;
                background: linear-gradient(to right, transparent, black, transparent);
                /* border-bottom: 1px solid black; */
                height: 1px;
                width: 0%;
                transition: width 0.25s ease;
                transition-delay: 0.7s;
              }
            .item {
                position: relative;
                display: inline-block;
                margin-right: 30px;
                top: 10px;
                opacity: 0;
                transition: opacity 0.5s ease, top 0.5s ease;
                transition-delay: 0;
                font-size: small;
                text-decoration: none;
              }
            span {
                transition: color 0.5s ease;
            }
            .item:hover span {
                color: #757575;	
              }
            .menu:hover .spacer:before {
                width: 100%;
                transition-delay: 0s;
              }
            .menu:hover .item {
                opacity: 1;
                top: 0px;
              }
            .item:nth-child(1) {
                transition-delay: 0.45s;
              }
            .item:nth-child(2) {
                transition-delay: 0.4s;
              }
            .item:nth-child(3) {
                transition-delay: 0.35s;
              }
            .item:nth-child(4) {
                transition-delay: 0.3s;
              }
            .item:nth-child(5) {
                transition-delay: 0.25s;
              }
            .item:nth-child(6) {
                transition-delay: 0.2s;
              }
            .item:nth-child(7) {
                transition-delay: 0.15s;
              }
            .item:nth-child(8) {
                transition-delay: 0.1s;
              }
            .item:nth-child(9) {
                transition-delay: 0.05s;
              }
            .item:nth-child(10) {
                transition-delay: 0s;
              }
            .menu:hover .item:nth-child(1) {
                transition-delay: 0.25s;
              }
            .menu:hover .item:nth-child(2) {
                transition-delay: 0.3s;
              }
            .menu:hover .item:nth-child(3) {
                transition-delay: 0.35s;
              }
            .menu:hover .item:nth-child(4) {
                transition-delay: 0.4s;
              }
            .menu:hover .item:nth-child(5) {
                transition-delay: 0.45s;
              }
            .menu:hover .item:nth-child(6) {
                transition-delay: 0.5s;
              }
            .menu:hover .item:nth-child(7) {
                transition-delay: 0.55s;
              }
            .menu:hover .item:nth-child(8) {
                transition-delay: 0.6s;
              }
            .menu:hover .item:nth-child(9) {
                transition-delay: 0.65s;
              }
            .menu:hover .item:nth-child(10) {
                transition-delay: 0.7s;
              }
            `}
        </style>
    
    </div>
);

export default Navbar;
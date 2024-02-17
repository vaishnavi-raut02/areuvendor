import React from "react";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    
      <div className="bg-purple-500 w-full md:w-100 lg:w-100 xl:w-100 sm:w-full">
        
  <div className="container flex flex-col md:flex-row justify-between items-center mx-4 md:mx-auto lg:mx-auto xl:mx-auto p-4 md:p-20 lg:p-20 xl:p-20">
    <div className="img--1">

    <img 
  className="w-full h-auto max-w-full max-h-full rounded-2xl" 
  loading="lazy" 
  decoding="async" 
  src="https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png?w=836" 
  alt="" 
  srcSet="
    https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png 320w,
    https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png?w=253&h=310 640w, 
    https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png?w=768&h=941 768w, 
    https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png?w=836&h=1024 1024w" 
  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, 1000px"
/>

    </div>

    <div className="heading text-white mx-4 md:mx-8 lg:mx-12 xl:mx-12 mt-4 md:mt-0">
      <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4">Get started with us!</h2>
      <p className="my-2 md:my-6 lg:my-6 xl:my-6 font-semibold text-sm md:text-base lg:text-base xl:text-base">
        Fill out the form below, or call <span className="link link-hover underline hover:no-underline">1-877-331-7752</span> to get started.
      </p>

      <div className="flex flex-wrap gap-4 mb-4 md:mb-8 lg:mb-8 xl:mb-8">
        <input
          className="p-2 rounded border border-gray-300 hover:border-gray-500 text-black"
          type="text"
          placeholder="First Name"
          required="true"
        />
        <input
          className="p-2 rounded border border-gray-300 hover:border-gray-500 text-black"
          type="text"
          placeholder="Last name"
          required="true"
        />
      </div>


      <div className="flex flex-wrap gap-4 mb-4 md:mb-8 lg:mb-8 xl:mb-8">
        <input
          className="p-2 rounded border border-gray-300 hover:border-gray-500 text-black"
          type="text"
          placeholder="Company"
          required="true"
        />
        <select className="p-2 rounded border border-gray-300 hover:border-gray-500" required style={{ color: '#666666', width: '240px', height: '40px' }}>
          <option value="" disabled selected style={{ color: '#999999' }}>Business Category</option>
          <option value="US" style={{ color: '#666666' }}>Travel Agent</option>
          <option value="CA" style={{ color: '#666666' }}>Wedding Bands</option>
          <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
          <option value="UK" style={{ color: '#666666' }}>Wedding Dresses</option>
          <option value="UK" style={{ color: '#666666' }}>Wedding Planner</option>
          <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
          <option value="UK" style={{ color: '#666666' }}>DJ'S</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 md:mb-8 lg:mb-8 xl:mb-8">
        <input
          className="p-2 rounded border border-gray-300 hover:border-gray-500 text-black"
          type="text"
          placeholder="Phone"
          required="true"
        />
        <input
          className="p-2 rounded border border-gray-300 hover:border-gray-500 text-black"
          type="text"
          placeholder="Email"
          required="true"
        />
      </div>
      <div className="mb-4 md:mb-8 lg:mb-8 xl:mb-8">
        <select className="p-2 rounded border border-gray-300 hover:border-gray-500" required style={{ color: '#666666', width: '240px', height: '40px' }}>
          <option value="" disabled selected style={{ color: '#999999' }}>Country</option>
          <option value="US" style={{ color: '#666666' }}>United States</option>
          <option value="CA" style={{ color: '#666666' }}>Canada</option>
          <option value="UK" style={{ color: '#666666' }}>United Kingdom</option>
        </select>
      </div>

      <div className="flex justify-start align-center mb-4 md:mb-8 lg:mb-8 xl:mb-8">
        <input type="checkbox" name="" id="" className="mr-2" />
        <p className="text-sm md:text-base lg:text-base xl:text-base">
          By submitting and sharing your information you agree to
          WeddingPro’s <span className="link link-hover underline hover:no-underline font-bold">terms of use</span> and <span className="link link-hover underline hover:no-underline font-bold">privacy policy.</span>
        </p>
      </div>

      <div className="flex items-center justify-center">
  <button 
    type="button" 
    className="py-4 px-20 flex items-center gap-x-2 text-sm font-bold rounded-full border border-gray-200 bg-white text-purple-900 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  >
    Get in touch
  </button>
</div>

    </div>
  </div>
</div>



    <div>
      <p className="text text-center italic text-sm m-5">Photo: Terri Baskin Photography |  Sarah Khan Event Styling, Amilye Saunders, Elegance By Roya; Iris Mannings Photography | Angelica & Co. Weddings, She Loves Me; Caroline Lima Photography;<br/> Arevalo & Co</p>
    </div>
    
    {/* footer */}
      <footer className="footer p-24 bg-white py-120 ">

  <aside className="aside">
    <div className="img">
  <Image
      src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo-with-knot.svg"
      width="200"
      height="200"
      alt="Picture of the author"
    />
    </div>

 
 <div className="flex space-x-7 py-10">
  <div className=" w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-black transition duration-500">
    <FaFacebook />
  </div> 
  <div className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition  duration-500">
    <FaInstagram />
  </div>
  <div className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition duration-500">
    <FaXTwitter />
  </div>
  <div className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition duration-500">
    <FaPinterest/>
  </div>
  
  
</div>



  <div class="content  flex space-x-4 ">

            <Image className="float-left" src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/weddingpro-app-logo.svg" alt="" width="50"
      height="50" />
            <div class="item-body text-lg space-y-5">
            Get the WeddingPro for<br/> Vendors App
            </div>
          </div>

  <div className="flex space-x-5 ">
  <Image src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/app-store.svg" alt="" width="120"
      height="120"/>
  <Image src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/play-store.svg" alt="" width="120"
      height="120"/>
  </div>

  </aside>
<nav className="space-y-4">
    <h6 className="footer-title">Product</h6> 
    <a className="link link-hover underline hover:no-underline font-semibold">How it Works </a>
    <a className="link link-hover underline hover:no-underline font-semibold">Storefront</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Inbox</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Insights</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Reviews</a>
  </nav> 
  <nav className="space-y-4">
    <h6 className="footer-title">Resources</h6> 
    <a className="link link-hover underline hover:no-underline font-semibold">Email Templates</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Blog</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Reports</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Webinars</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Events</a>
    <a className="link link-hover underline hover:no-underline font-semibold">YouTube</a>
    <a className="link link-hover underline hover:no-underline font-semibold">How to Use Our App</a>
  </nav> 
  <nav className="space-y-4">
    <h6 className="footer-title">About WeddingPro</h6> 
    <a className="link link-hover underline hover:no-underline font-semibold">The Knot Worldwide</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Vendor Support</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Fellowship for Change</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Educator Program</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Careers</a>
    <a className="link link-hover underline hover:no-underline font-semibold">International</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Privacy Policy</a>
    <a className="link link-hover underline hover:no-underline font-semibold">Terms & Conditions</a>
  </nav>

 
</footer>


<div>
   <hr />
<footer className="footer items-center footer-center p-10 bg-base-950 text-base-content justify-center">

  <copyright className="flex ">
  <p className="mr-4">© 2024 WeddingPro</p>
  <a className="link link-hover mr-4">1-888-934-0949</a>
  <a className="link link-hover mr-4"> Web Accessibility</a>
  <a className="link link-hover"> CA Privacy</a>


  </copyright>

  </footer>
  </div>
  
    </>
  );
};

export default Footer;
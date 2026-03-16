import React, { useState } from "react";
import {FaArrowDown, FaArrowCircleDown} from 'react-icons/fa'

const Footer = () => {
  // Shop
  const shop = [
    {
      names: "Store",
    },
    {
      names: "Mac",
    },
    {
      names: "iPad",
    },
    {
      names: "iPhone",
    },
    {
      names: "Watch",
    },
    {
      names: "AirPods",
    },
    {
      names: "TV & Home",
    },
    {
      names: "AirTag",
    },
    {
      names: "Accessories",
    },
    {
      names: "Gift Cards",
    },
  ];

  const wallet = [
    {
      names: "Wallet",
    },
  ];

  const account = [
    {
      names: "Manage Your Apple Account",
    },
    {
      names: "Apple Store Account",
    },
    {
      names: "iCloud.com",
    },
  ];

  const entertainment = [
    {
      names: "Apple One",
    },
    {
      names: "Apple TV",
    },
    {
      names: "Apple Music",
    },
    {
      names: "Apple Arcade",
    },
    {
      names: "Apple Fitness+",
    },
    {
      names: "Apple Podcasts",
    },
    {
      names: "Apple Books",
    },
    {
      names: "App store",
    },
  ];

  const applestore = [
    {
        names:"find a Store"
    },
     {
        names:"Genius Bar"
    },
     {
        names:"Today at Apple"
    },
     {
        names:"Group Reservations"
    },
     {
        names:"Apple Camp"
    },
     {
        names:"Apple Trade In"
    },
     {
        names:"Ways to Buy"
    },
     {
        names:"Recycling Programme"
    },
     {
        names:"Order Status"
    },
     {
        names:"Shopping Help"
    },
  ];

  const business = [
    {
        names:"Apple and Business"
    },
    {
        names:"Shop for Business"
    },
    
  ];

  const education = [
    {
        names:"Apple and Education"
    },
    {
        names:"Shop for Education"
    },
    {
        names:"Shop for University"
    },
  ];

  const healthcare = [
    {
        names:"Apple and Healthcare"
    },
  ];

  const government = [
    {
        names:"Apple and Government"
    },
  ];

  const applevalues = [
    {
        names:"Accessibility"
    },
    {
        names:"Education"
    },
    {
        names:"Environment"
    },
    {
        names:"Privacy"
    },
    {
        names:"Supply Chain Innovation"
    },
  ];

  const about = [
    {
        names:"Newsroom"
    },
    {
        names:"Apple Leadership"
    },
    {
        names:"Career Oppurtunities"
    },
    {
        names:"Investor"
    },
    {
        names:"Ethics & Compliance"
    },
    {
        names:"Events"
    },
    {
        names:"Contact Apple"
    },
  ];

//   const [open, setOpen] = useState(false)
    const[openIndex, setOpenIndex] = useState(null)

    const togglesection = (index)=>
    {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    <div className="bg-gray-100">
      {/* Section 1 */}
      <div>
        <p className="text-xs text-gray-500 p-3">
          *No Cost EMI is available with the purchase of an{" "}
          <span>eligible product</span> made using qualifying cards on 3- or
          6-month tenures from most leading card issuers. Monthly pricing is
          rounded to the nearest rupee. Exact pricing will be provided by your
          card issuer, subject to your card issuer’s terms and conditions.
          Minimum order spend applies as per your card issuer’s threshold. No
          Cost EMI is not available to business customers and cannot be combined
          with Apple Store for Education or Corporate Employee Purchase Plan
          pricing. Card eligibility is subject to terms and conditions between
          you and your card issuer. Offer may be revised or withdrawn at any
          time without any prior notice.{" "}
          <span className="underline">Terms apply</span>.
        </p>
        <p className="text-xs p-3 text-gray-500">
          ‡Instant cashback is available with the purchase of an{" "}
          <span>eligible product</span> with qualifying American Express, Axis
          Bank and ICICI Bank cards only. Minimum transaction value of ₹10001
          applies. <span>Click here</span> to see instant cashback amounts and
          eligible devices. Instant cashback is available for up to two orders
          per rolling 90-day period with an eligible card. Card eligibility is
          subject to terms and conditions between you and your card issuer.
          Total transaction value is calculated after any trade-in credit or
          eligible discount is applied. Any subsequent order adjustment(s) or
          cancellation(s) may result in instant cashback being recalculated, and
          any refund may be adjusted to account for instant cashback clawback;
          this may result in no refund being made to you. Offer may be revised
          or withdrawn at any time without any prior notice.{" "}
          <span>Additional terms apply</span>. Instant cashback is not available
          to business customers and cannot be combined with Apple Store for
          Education or Corporate Employee Purchase Plan pricing. Multiple
          separate orders cannot be combined for instant cashback.
        </p>
        <p className="text-xs p-3 text-gray-500">
          A subscription is required for Apple TV.
        </p>
        <p className="text-xs py-3 text-gray-500 border-b border-gray-300 mx-3">
          Features are subject to change. Some features, applications and
          services may not be available in all regions or all languages.
        </p>
      </div>
      {/* Section 2 for large screen */}
      <div className=" my-5 mx-10 py-5  md:grid-cols-5 grid-cols-1 hidden md:grid">
        <div className="flex flex-col gap-5">
          {/* S1 */}
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-semibold   ">Shop and Learn</li>
            {shop.map((data, index) => (
              <li className= {`text-gray-600 text-sm cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
          {/* S2 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">Apple Wallet</li>
            {wallet.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          {/* S3 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">Account</li>
            {account.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
          {/* S4 */}
          <ul className="flex flex-col gap-2  ">
            <li className="text-sm font-semibold">Account</li>
            {entertainment.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          {/* S5 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">Apple Store</li>
            {applestore.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          {/* S6 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">For Business</li>
            {business.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           {/* S7 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">For Education</li>
            {education.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           {/* S8 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">For Healthcare</li>
            {healthcare.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           {/* S9 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">For Government</li>
            {government.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          {/* S10 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">Apple Values</li>
            {applevalues.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           {/* S11 */}
          <ul className="flex flex-col gap-2 ">
            <li className="text-sm font-semibold">About Apple</li>
            {about.map((data, index) => (
              <li className="text-gray-600 text-sm cursor-pointer" key={index}>
                {data.names}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Section 3 for small screen */}
      <div className="mx-10 my-10 text-sm flex flex-col gap-5 md:hidden">
        {/* S1 */}
        <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Shop and learn</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(0)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 0? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {shop.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
          <h1 className="border-b border-gray-400"></h1>
          {/* S2 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Apple wallet</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(1)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 1? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {wallet.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S3 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Account</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(2)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 2? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {account.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S4 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Entertainment</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(3)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 3? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {entertainment.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S5 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Apple Store</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(4)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 4? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {applestore.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S6 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">For Business</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(5)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 5? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {business.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S7 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">
                For Education
            </h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(6)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 6? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {education.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S8 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">For Government</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(7)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 7? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {government.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S9 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">Apple Values</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(8)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 8? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {applevalues.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S10 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">For Healthcare</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(9)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 9? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {healthcare.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
          {/* S11 */}
            <div className="flex items-center justify-between ">
            <h1 className="text-gray-600">About Apple</h1>
            <FaArrowDown onClick={
                ()=>
                {
                    togglesection(10)
                }
            } className="text-gray-500 cursor-pointer"/>
            
        </div>
             <ul className={` ${ openIndex === 10? `flex`:`hidden`}   flex-col gap-2 my-3 `} >
            {about.map((data, index) => (
              <li className= {`text-gray-600 text-xs cursor-pointer `} key={index}>
                {data.names}
              </li>
            ))}
          </ul>
           <h1 className="border-b border-gray-400"></h1>
      </div>

      {/* Section 4 */}
      <div className="mx-10">
        <div>
            <h1 className="text-gray-400 text-xs md:text-sm border-b border-gray-400 pb-3">More ways to shop: <span className="text-blue-500">Find an Apple Store</span> or other retailer near you. Or call <span className="text-blue-500">000800 040 1966</span>.</h1>
        </div>
        <div className="md:flex items-center justify-between pb-10">
            <p className="text-gray-400 text-xs md:text-sm mt-5">Copyright © 2026 Apple Inc. All rights reserved.</p>
            <ul className="flex items-center gap-3 text-gray-400 text-xs md:text-sm mt-2">
                <li>Privacy Policy | </li>
                <li>Terms of Use | </li>
                <li>Sales Policy | </li>
                <li>Legal | </li>
                <li>Site Map</li>
            </ul>
        </div>
      </div>
            
    </div>
  );
};

export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section = ({ borderColor, imageSrc, topTag, title, description ,linkHref, buttonText, marginTop }) => {
  return (
    <>
    <div className="relative m-16 mb-4">
      <div className={`border-${borderColor} border-2 absolute md:top-14 left-16 right-14 md:bottom-10 xl:bottom-10 rounded-2xl z-10`}>          
      {topTag && (
            <span className="media-tag bg-purple-700 top-80 font-semibold text-white text-justify align-middle  md:relative p-3 left-0" >{topTag}</span>
          )}</div>
      <div className="bg-white-100 rounded-lg  gap-8 p-8 flex items-center justify-between">
        <figure className="wp-block-media-text__media relative">

          <Image
            src={imageSrc}
            className="rounded-2xl"
            width={1395}
            height={1284}

          />
        </figure>
        <div className="wp-block-media-text__content text-wrap  md:mx-0 md:mt-11 md:pt-8 md:pl-8 z-20">
          <h1 className="text-4xl font-semibold mb-8 top-8" >{title}</h1>
          <p className="text-lg mb-6">
            {description}
          </p>
           
            <div className='bg-white py-2 px-4 rounded-full border border-purple-900 font-semibold  text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-56'>
              <Link href={linkHref}>
                {buttonText}
              </Link>
            </div>
          
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Section;

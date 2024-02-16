import Image from "next/image";
import React from "react";
import Link from "next/link";

const Section2page5 = ({
  imagesrc5,
  title5,
  description5,
  linkHref5,
  buttonText5,
  imagewidth5,
  imageheight5,
}) => {
  return (
    <>
      <div className="relative pl-4 pr-4 md:mb-20 mt-20">
        <div className="border-purple-700 border-2 absolute top-28 left-4 md:left-24 right-10 md:right-24 bottom-10 rounded-xl"></div>
        <div className="bg-white-100 rounded-lg gap-8 md:p-8 md:flex md:items-center md:justify-between">
          <figure className="wp-block-media-text__media relative  md:mr-28 mb-4 md:-mb-8 md:w-1/2 md:order-last">
            <div className="-mt-4 md:-mt-0 drop-shadow-2xl">
              <Image
                src={imagesrc5}
                className="rounded-2xl"
                width={imagewidth5}
                height={imageheight5}
              />
            </div>
          </figure>
          <div className="w-full md:w-1/2 py-14 md:py-28 pl-6 pr-6 md:pl-36 z-20">
            <h1 className="text-4xl font-semibold mb-8">{title5}</h1>
            <p className="text-lg mb-8">{description5}</p>
            <div className={`bg-white py-2 px-4 rounded-full border border-purple-900 font-semibold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
              <Link href={linkHref5}>{buttonText5}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2page5;

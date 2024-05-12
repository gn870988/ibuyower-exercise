import React from "react";
import Image from "next/image";
import { Auction } from "@/types";

type Props = {
  auction: Auction;
};

export default function AuctionSilde({ auction }: Props) {
  return (
    <swiper-slide>
      <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="w-fit rounded-full border border-[#929292] px-2 py-0.5 text-[9px] font-[800] text-[#929292] absolute left-4 top-3">
          {auction.sellType}
        </div>
        <div className="relative mx-3 mt-10 flex h-60 overflow-hidden rounded-xl">
          <Image src={auction.imageUrl} alt="image" width={400} height={400} />
        </div>
        <div className="relative mt-3 px-5 pb-5">
          <a href="#">
            <h5 className="text-lg tracking-tight text-slate-900">
              {auction.title}
            </h5>
          </a>
          <div className="relative mt-10">
            <ul className="flex flex-col items-start gap-2 overflow-hidden md:gap-1">
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {auction.operatingSystem}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {auction.cpu}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {auction.displayCard}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {auction.drive}
              </li>
              <li className="list-none whitespace-normal text-start text-xs xl:text-sm">
                {auction.memory}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#F2F6FA] !p-5">
          <div className="flex w-fit !border-0 bg-red-600 py-1 text-white gap-1 rounded-full px-2 text-[11px]">
            <span>Save ${auction.originalPrice - auction.specialPrice}</span>
          </div>
          <div className="flex items-end gap-3 mt-3">
            <p className="text-[20px] font-bold">${auction.specialPrice}</p>
            <p className="relative bottom-1 !my-0 text-xs text-gray-400 line-through">
              ${auction.originalPrice}
            </p>
          </div>
          <div>
            <p className="text-xs">
              Starting at{" "}
              <span className="text-blue-600">
                ${auction.monthlyPayment}/mo
              </span>{" "}
              with affirm
            </p>
          </div>
          <div className="flex justify-between gap-2  xl:!gap-1 mt-5 3xs:!flex-col 3xsMax:!flex-col 2xs:!flex-row xs:!flex-row">
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold">Free Shipping</span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                Delivery By {auction.DeliveryDate}
              </span>
            </div>
            <div>
              <a href="#">
                <button className="bg-white hover:!bg-red-600 hover:border-red-600 transition duration-300 ease-in-out !border-inherit relative flex text-xs 2xs:text-sm border border-solid !border-red-600 text-red-600 hover:!text-white !text-center !px-3 !py-1 rounded-[30px] !bg-transparent">
                  {auction.buttonType}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  );
}

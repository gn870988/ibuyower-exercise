"use client";
import React from "react";
import HeaderPage from "./homepages/HeaderPage";
import mockdata from "@/mockdata/data.json";
import { Auction } from "@/types";
import AuctionContainer from "./auctions/AuctionContainer";
import { register } from "swiper/element/bundle";
register();

type State = {
  auctions: Auction[];
};

const data: State = {
  auctions: mockdata,
};

export default function Home() {
  return (
    <>
      <HeaderPage />
      <AuctionContainer auctions={data.auctions} />
    </>
  );
}

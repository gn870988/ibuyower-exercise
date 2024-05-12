import { Auction } from "@/types";
import setting from "@/app/settings/swipercontainer-breakpoints-setting.json";
import AuctionSilde from "./AuctionSilde";

type Props = {
  auctions: Auction[];
};

export default function AuctionContainer({ auctions }: Props) {
  return (
    <swiper-container navigation="true" breakpoints={JSON.stringify(setting)}>
      {auctions.map((auction) => (
        <AuctionSilde auction={auction} key={auction.id} />
      ))}
    </swiper-container>
  );
}

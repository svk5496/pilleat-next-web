import styled from "@emotion/styled";
import { Breakpoint } from "@/core/mediaQuery";
import numberWithComma from "@/utils/numberWithComma";
import { theme } from "@/core/theme";
import Sticker from "@/components/common/sticker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductItemBase = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (min-width: ${Breakpoint.mobile}) {
    width: 23%;
  }
  &:hover {
    img {
      transform: scale(1.03);
      transition: 0.2s ease-in-out;
      transform-origin: center center;
    }
  }
`;

const ThumbnailWrapper = styled.div`
  max-width: 160px;
  max-height: 160px;
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  @media (min-width: ${Breakpoint.mobile}) {
    width: 100%;
    max-width: 240px;
    height: 25vw;
    max-height: 240px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const ProductTextWrapper = styled.div`
  width: 100%;
`;

const ProductItemTitle = styled.h5`
  font-size: 14px;
  white-space: nowrap;
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 0 10px 0;
  @media (min-width: ${Breakpoint.mobile}) {
    font-size: 15px;
  }
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 0 4px 0 0;
  }
`;

const DiscountWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-bottom: 4px;
  p {
    font-size: 12px;
  }
`;

const LinedText = styled.p`
  text-decoration: line-through;
  color: ${theme.lightTheme.fontGray};
`;

const PriceText = styled.p`
  font-weight: 500;
  color: ${theme.lightTheme.danger};
`;

const PillText = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: ${theme.lightTheme.danger};
  margin: 0;
`;

const StickerWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  max-height: 52px;
  overflow: hidden;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  padding-top: 8px;
  display: flex;
  align-items: center;
  p {
    font-size: 12px;
    color: ${theme.lightTheme.gray};
    padding: 0 0 0 4px;
  }
`;

interface ProductItemProps {
  thumbnail: string;
  title: string;
  isSale: boolean;
  price: string;
  discountPercent: string;
  totalPrice: string;
  pricePerPill: string;
  unit: string;
  healthGoals: string[];
  reviewScore: string;
  reviewCount: string;
}

function ProductItem({
  thumbnail,
  title,
  isSale,
  price,
  discountPercent,
  totalPrice,
  pricePerPill,
  unit,
  healthGoals,
  reviewScore,
  reviewCount,
}: ProductItemProps) {
  const router = useRouter();
  return (
    <ProductItemBase>
      <ThumbnailWrapper>
        <Image src={thumbnail} alt={thumbnail}></Image>
      </ThumbnailWrapper>
      <ProductTextWrapper>
        <ProductItemTitle>{title}</ProductItemTitle>
        {isSale ? (
          <PriceWrapper>
            <DiscountWrapper>
              <p>{discountPercent}</p>
              <LinedText>{numberWithComma(price)}원</LinedText>
            </DiscountWrapper>
            <PriceText>{numberWithComma(totalPrice)}원</PriceText>
          </PriceWrapper>
        ) : (
          <PriceWrapper>
            <PriceText>{numberWithComma(totalPrice)}원</PriceText>
          </PriceWrapper>
        )}
        {unit === "정" || unit === "캡슐" ? (
          <PillText>(1알당 {numberWithComma(pricePerPill)}원)</PillText>
        ) : null}
        {unit === "분말" || unit === "액상" ? (
          <PillText>(10ml당 {numberWithComma(pricePerPill)}원)</PillText>
        ) : null}
      </ProductTextWrapper>
      <StickerWrapper>
        {healthGoals.length > 0
          ? healthGoals.map((healthgoal) =>
              Sticker({ key: healthgoal, label: healthgoal })
            )
          : null}
      </StickerWrapper>
      <ReviewWrapper>
        <FontAwesomeIcon
          icon={faStar}
          size={"sm"}
          color={"tomato"}
        ></FontAwesomeIcon>
        <p>평점 {reviewScore}/5 |</p>
        <p>리뷰 {numberWithComma(reviewCount)}</p>
      </ReviewWrapper>
    </ProductItemBase>
  );
}

export default ProductItem;

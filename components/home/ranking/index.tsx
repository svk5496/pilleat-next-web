import styled from "@emotion/styled";
import { Breakpoint } from "@/core/mediaQuery";
import { theme } from "@/core/theme";
import ProductItem from "@/components/common/productItem";

const RankingBase = styled.div`
  width: 100%;
  max-width: ${Breakpoint.desktop};
  padding-bottom: 40px;
`;

const RankingWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    cursor: pointer;
    color: ${theme.lightTheme.primary};
  }
  @media (min-width: ${Breakpoint.mobile}) {
    h3 {
      font-size: 24px;
    }
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  gap: 2%;
  display: flex;
  flex-wrap: wrap;
`;

const mockData = [
  {
    id: 1,
    thumbnail:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2022/04/01/10/5/4cb64750-9392-45af-a013-627b543dd666.jpg",
    title:
      "액티브 엽산400액티브 엽산400액티브 엽산400액티브 엽산400액티브 엽산400액티브 엽산400액티브 엽산400액티브 엽산400",
    isSale: false,
    price: "22240",
    pricePerPill: "741",
    unit: "정",
    discountPercent: "",
    totalPrice: "22240",
    healthGoal: ["여성건강", "태아건강", "마음건강"],
    reviewScore: "5",
    reviewCount: "214",
  },
  {
    id: 2,
    thumbnail:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/25549552505535-8792ea5d-0733-4256-8e50-ffc088ae6d5b.jpg",
    title: "가르시니아 플러스",
    isSale: true,
    price: "10000",
    pricePerPill: "90",
    unit: "캡슐",
    discountPercent: "10%",
    totalPrice: "9000",
    healthGoal: ["여성건강", "태아건강", "마음건강"],
    reviewScore: "4.5",
    reviewCount: "5190",
  },
  {
    id: 3,
    thumbnail:
      "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/ecfe/ea6d4ce70e22b8a0111174a06e45d6797f2a4453fc29e68262ce3eab51af.jpg",
    title: "엘리나 C",
    isSale: false,
    price: "24000",
    pricePerPill: "200",
    unit: "액상",
    discountPercent: "",
    totalPrice: "24000",
    healthGoal: ["피로회복", "간건강", "치아건강"],
    reviewScore: "5",
    reviewCount: "223",
  },
  {
    id: 4,
    thumbnail:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1b1d/ebed46f3e5d5a842d2af0a623c872d17b617d07e6f3b2410abaa270f9937.jpg",
    title: "트루엔 눈피로 플로라루테인",
    isSale: true,
    price: "48000",
    pricePerPill: "800",
    unit: "분말",
    discountPercent: "10%",
    totalPrice: "43200",
    healthGoal: ["피로회복", "눈건강"],
    reviewScore: "5",
    reviewCount: "540",
  },
];

function RankingHome() {
  return (
    <RankingBase>
      <RankingWrapper>
        <HeaderWrapper>
          <h3>튼튼 랭킹</h3>
          <p>더보기</p>
        </HeaderWrapper>
        <ProductWrapper>
          {mockData.map((product) => (
            <ProductItem
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              isSale={product.isSale}
              price={product.price}
              discountPercent={product.discountPercent}
              totalPrice={product.price}
              pricePerPill={product.pricePerPill}
              unit={product.unit}
              healthGoals={product.healthGoal}
              reviewScore={product.reviewScore}
              reviewCount={product.reviewCount}
            ></ProductItem>
          ))}
        </ProductWrapper>
      </RankingWrapper>
    </RankingBase>
  );
}

export default RankingHome;

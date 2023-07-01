import styled from "@emotion/styled";
import { theme } from "@/core/theme";
import { Breakpoint } from "@/core/mediaQuery";
import { useRouter } from "next/router";
import { HEALTH_GOAL } from "@/utils/router";
import Sticker from "@/components/common/sticker";
import Image from "next/image";

const NutrientGoalBase = styled.div`
  width: 100%;
  max-width: ${Breakpoint.desktop};
  padding-bottom: 40px;
`;

const NutrientWrapper = styled.div`
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

const NutrientItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 4%;
  flex-wrap: wrap;
`;

const NutrientItem = styled.div`
  width: 46%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${Breakpoint.mobile}) {
    width: 21%;
    margin-bottom: 30px;
  }
`;

const NutrientThumbnail = styled.div`
  width: 100%;
  min-height: 110px;
  max-height: 120px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NutrientTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  color: ${theme.lightTheme.fontColor};
  h4 {
    margin: 0 0 6px 0;
  }
  p {
    font-size: 13px;
    margin-bottom: 18px;
    color: ${theme.lightTheme.fontGray};
  }
`;

const StickerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 26px;
  overflow: hidden;
`;

interface NutrientItemProp {
  nutrient: string;
  displayText: string;
  thumbnail: string;
  totalItem?: number;
  healthGoals: string[];
  bio?: string;
}

const mockNutrientData: NutrientItemProp[] = [
  {
    nutrient: "EPA와DHA의합",
    displayText: "오메가3",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/omega3_220.webp",
    totalItem: 1,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "오메가3는 에이코사펜타엔산(EPA)와 도코사헥사엔산(DHA)로 구성되어 있습니다. 관찰 연구에 따르면, 오메가 3를 꾸준히 섭취할 경우, 관상동맥 심장병의 위험이 낮아집니다. 또한, 인지 기능 저하 즉, 알츠하이며병 및 치매 위험을 감소시켜줍니다. 오메가3의 지방산은 항염증 성질을 가지고 있어서 관절염 증상을 완화하는데 도움이 됩니다.",
  },
  {
    nutrient: "비타민B1",
    displayText: "비타민B1",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_B1_220.webp",
    totalItem: 2,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 B1의 효능은 뇌 건강에 대한 도움뿐만 아니라, 세포 성장 및 발달에 대해서도 도움을 줍니다. 반면 결핍의 될 경우에는 식욕부진, 근육 기능 감소, 구역질 및 구토감을 유발할 수 있기에 적절한 보충이 필요합니다.",
  },
  {
    nutrient: "비타민B2",
    displayText: "비타민B2",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_B2_220.webp",
    totalItem: 3,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 B2가 결핍되면 피로감, 탈모, 입 주변의 발진, 백내장, 빈혈, 신경계 이상 등, 다양한 문제점을 유발하게 될 수 있기에 이를 보충하기 위해서 평소 꾸준하게 보충하는 것이 중요합니다.",
  },
  {
    nutrient: "비타민B6",
    displayText: "비타민B6",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_B6_220.webp",
    totalItem: 5,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 B6는 피리독신으로 구선되어 있습니다. 비타민 B6는 뇌 건강과 콜레스트롤 조절, 장 건강에 도움을 줄 수 있다고 합니다. 그렇기에 결핍이 된다면 문제가 커져 피로감은 물론, 지루성 피부염과 혼란감, 마비, 수근관 증후군을 유발할 수 있습니다.",
  },
  {
    nutrient: "비타민B12",
    displayText: "비타민B12",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_B12_220.webp",
    totalItem: 6,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 B12의 효능은 뇌, 신경, 혈액 건강에 대한 전반적인 도움을 주고, 빈혈에도 도움을 줍니다. 그렇기에 결핍이 된다면 혈, 우울감, 피로감, 환각, 불면증, 기억력 감퇴, 백반 등의 다양한 문제를 유발할 수 있습니다.",
  },
  {
    nutrient: "비타민D",
    displayText: "비타민D",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_D_220.webp",
    totalItem: 7,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 D는 햇빛을 통해 얻을 수 있는 영양소입니다. 비타민 D는 우리 몸의 칼슘과 인 수준을 유지하기 때문에 뼈, 근육, 치아 건강에 필수적인 비타민입니다. 비타민 D는 면역을 강화시켜줄 뿐만아니라, 구강 건강 개선에도 효과가 있습니다. 비타민 D가 부족할 경우, 구루병과 골연화증, 면역 체계 약화, 우울증등의 건강 악화로 이어질 수 있습니다.",
  },
  {
    nutrient: "비타민C",
    displayText: "비타민C",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_C_220.webp",
    totalItem: 8,

    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 C는 체내에서 합성되지 않아, 음식물을 통해서만 섭취할 수 있는 필수 영양소로, 비타민 C를 섭취하면 시력 개선과 세포 성장과 발달에 도움을 줍니다. 또한 칼슘과 인 흡수, 이용을 조절해서 뼈와 치아 건강에 도움을 줍니다. 결핍시, 만성 피로에 시달리고, 기분이 저하되는데, 심할 경우 괴혈병 증상을 유발할 수 있습니다.",
  },
  {
    nutrient: "비타민A",
    displayText: "비타민A",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_A_220.webp",
    totalItem: 9,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 A는 콜레스트롤 수치를 낮춰, 혈류를 원활하게 만들어 심장병, 동맥경화 같은 혈관계 질환에도 도움을 줍니다. 비타민A는 베타카로틴 성분이 가장 많이 포함되어 있는데, 베타카로틴은 우리 몸에 유해한 활성산소를 제거하고 세포 손상도 막아서 노화를 방지합니다.",
  },
  {
    nutrient: "비타민E",
    displayText: "비타민E",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/vitamin_E_220.webp",
    totalItem: 10,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "비타민 E는 세포의 노화를 막고, 세포막을 유지하는 항산화 물질로, 유해한 활성산소를 무력화하고 암을 예방하며, 다양한 염증성 질환을 예방하는 데 도움이 됩니다. 또한 비타민E는 나쁜 콜레스트롤의 산화를 막아, 혈행 개선에 도움을 주어 심혈관계 질환을 예방합니다.",
  },

  {
    nutrient: "프로바이오틱스",
    displayText: "프로바이오틱스",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/probiotics_220.webp",
    totalItem: 11,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "프로바이오틱스란, 우리에게 친숙한 '유산균'이라는 이름으로 불리는 것으로, 영양분을 먹이 삼아 장 내부의 건강을 지키는 박테리아입니다. 이 박테리아는 특히 장 건강에 도음을 줘서 설사나 변비를 예방할 수 있습니다. 또한, 원인 없이 복통이나 복푸팽창, 비정상적 배변을 유발하는 과민성 대장 증흐군 증상을 완화해줍니다. 프로바이오틱스는 면역력을 향상시켜주고 혈중 콜레스트롤을 감소시켜주는 성분입니다.",
  },
  // {
  //   nutrient: "진세노사이드Rg1과Rb1의합",
  //   displayText: "홍삼",
  //   thumbnail:
  //     "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/jinseno_220.webp",
  //   totalItem: 12,
  // healthGoals : ["눈건강","노화방지","면역기능"],
  //   bio: "홍삼은 진세노사이드 Rb3의 합으로 구성이 되어있는데, 진세노사이드는 면역력 증진에 도움을 줄수 있고, 피고감 개선, 항산화, 기억력, 형소판 응집 억제를통한 혈액 흐름에 도움을 줍니다.  ",
  // },
  {
    nutrient: "단백질",
    displayText: "단백질",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/protein_220.webp",
    totalItem: 13,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "단백질이란, 우리 몸을 구성하고 있는 기본 요소 중 하나로 몸의 성장과 발달에 매우 중요한 역할을 하는 구성 성분입니다. 단백질이 부족할 경우에는 피로감이 쉽게 느껴지고, 기초 대사량이 줄어들어 혈당 조절이 어려워집니다. ",
  },
  {
    nutrient: "철",
    displayText: "철분",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/iron_220.webp",
    totalItem: 14,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "철분은 에너지 생성에 필요한 성분으로, 체내에서 비생성되는 영양소라 섭취를 통해서만 공급이 됩니다. 임산부에게 철분은 태아 건강에 특히나 중요한 요소라, 태아 신경관의 정상 발달을 위하 꼭 챙겨야하는 영양소입니다. 철분이 모자란 경우 빈혈을 유발할 수 있습니다.",
  },
  {
    nutrient: "엽산",
    displayText: "엽산",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/iron_220.webp",
    totalItem: 15,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "엽산은 세포 분열과 성장에 도움, 태아의 신경관 형성에 도움, 혈액의 오모시스테인 수준을 정상으로 유지, 빈혈 개선, 심혈관 건강, 뇌 건강, 탈모 예방, 피부미용, 다이어트 등에 도움이 됩니다. 특히 태아 건강관 밀접한 연관이 있어서 임산부영양제로 엽산이 보충해주는것이 권장됩니다.",
  },
  {
    nutrient: "칼슘",
    displayText: "칼슘",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/iron_220.webp",
    totalItem: 16,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "칼슘은 비타민 D와 마찬가지로 뼈 치아 건강, 신경 근육 기능, 심장의 건강, 정상적인 혈액 응고에 필요, 골다골증 위험 감소 등, 뼈와 밀접한 연관이 있습니다. 또한 수면에 도움을 주고, 근육 경련 예방, 뼈 건강, 당뇨, 에너지 생성등의 효능이 있습니다.",
  },
  {
    nutrient: "감마리놀렌산",
    displayText: "감마리놀렌산",
    thumbnail:
      "https://buytamine.s3.ap-northeast-2.amazonaws.com/img/nutrient/gamari_220.webp",
    totalItem: 17,
    healthGoals: ["눈건강", "노화방지", "면역기능"],
    bio: "감마리놀렌산은 달맞이꽃이에서 추출한 성분으로, 여성건강에 특히 도움이 됩니다. 여성 호르몬을 조절하거나 생리불순, 생리통 완화등에 도움을 줄 수 있고, 피부 건강 캐어가 가능한 성분입니다. 또한, 노화 방지, 관절염 관리등의 효과가 있습니다.",
  },
];

function NutrientHome() {
  const rounter = useRouter();
  const handleClick = (healthGoal: string) => {
    rounter.push(`${HEALTH_GOAL}?healthGoal=${healthGoal}`);
  };
  return (
    <NutrientGoalBase>
      <NutrientWrapper>
        <HeaderWrapper>
          <h3>영양소로 찾기</h3>
          <p>더보기</p>
        </HeaderWrapper>
        <NutrientItemWrapper>
          {mockNutrientData.slice(0, 8).map((nutrient, idx) => (
            <NutrientItem key={idx}>
              <NutrientThumbnail>
                <Image
                  src={nutrient.thumbnail}
                  alt={nutrient.thumbnail}
                ></Image>
              </NutrientThumbnail>
              <NutrientTextBox>
                <h4>{nutrient.displayText}</h4>
                <p>상품수: {nutrient.totalItem}개</p>
                <StickerWrapper>
                  {nutrient.nutrient.length > 0
                    ? nutrient.healthGoals.map((healthgoal) =>
                        Sticker({ key: healthgoal, label: healthgoal })
                      )
                    : null}
                </StickerWrapper>
              </NutrientTextBox>
            </NutrientItem>
          ))}
        </NutrientItemWrapper>
      </NutrientWrapper>
    </NutrientGoalBase>
  );
}

export default NutrientHome;

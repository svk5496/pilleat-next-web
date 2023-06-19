import Seo from "@/components/common/Seo";
import CarouselHome from "@/components/home/carousel";
import HealthGoalHome from "@/components/home/healthGoal";
import RankingHome from "@/components/home/ranking";
import NutrientHome from "@/components/home/nutrient";

export default function Home() {
  return (
    <>
      <Seo title="홈"></Seo>
      <CarouselHome></CarouselHome>
      <HealthGoalHome></HealthGoalHome>
      <RankingHome></RankingHome>
      <NutrientHome></NutrientHome>
    </>
  );
}

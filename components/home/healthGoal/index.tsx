import styled from "@emotion/styled";
import { theme } from "@/core/theme";
import { Breakpoint } from "@/core/mediaQuery";
import { useRouter } from "next/router";
import { HEALTH_GOAL } from "@/utils/router";
import { HEALTH_GOAL_ARRAY } from "@/components/home/healthGoal/navigation";

const HealthGoalBase = styled.div`
  width: 100%;
  max-width: ${Breakpoint.desktop};
  padding-bottom: 40px;
`;

const HealthGoalWrapper = styled.div`
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

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  @media (min-width: ${Breakpoint.mobile}) {
    gap: 2%;
  }
`;

const IconCard = styled.div`
  width: 20%;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 6px;
    font-size: 12px;
  }
  :hover {
    cursor: pointer;
    div {
      background-color: ${theme.lightTheme.bgColorDark};
    }
  }
  @media (min-width: ${Breakpoint.mobile}) {
    width: 14%;
    margin: 10px 0;
    p {
      margin: 10px 0;
      font-size: 14px;
    }
  }
  @media (min-width: ${Breakpoint.tablet}) {
    margin: 10px 0;
    p {
      margin: 10px 0;
      font-size: 14px;
    }
  }
`;

const IconBackground = styled.div`
  width: 100%;
  height: 18vw;
  max-height: 90px;
  background-color: ${theme.lightTheme.bgGrayLight};
  transition: ease-in-out 0.3s;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50%;
    height: 50%;
  }
  @media (min-width: ${Breakpoint.mobile}) {
    height: 12vw;
    max-height: 150px;
  }
`;

function HealthGoalHome() {
  const rounter = useRouter();
  const handleClick = (healthGoal: string) => {
    rounter.push(`${HEALTH_GOAL}?healthGoal=${healthGoal}`);
  };
  return (
    <HealthGoalBase>
      <HealthGoalWrapper>
        <HeaderWrapper>
          <h3>건강목표로 찾기</h3>
          <p>더보기</p>
        </HeaderWrapper>
        <IconWrapper>
          {HEALTH_GOAL_ARRAY.map((healthGoal) => (
            <IconCard
              onClick={() => handleClick(healthGoal.healthGoal)}
              key={healthGoal.id}
            >
              <IconBackground>{healthGoal.icon}</IconBackground>
              <p>{healthGoal.healthGoal}</p>
            </IconCard>
          ))}
        </IconWrapper>
      </HealthGoalWrapper>
    </HealthGoalBase>
  );
}

export default HealthGoalHome;

import { ButtonText } from "@/components/atoms/Button/Text/Index";
import { theme } from "@/core/colors/theme";
import { Breakpoint } from "@/styles/mediaQuery";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Base = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  top: 0;
  border-bottom: 1px solid ${theme.lightTheme.borderColor};
  @media (min-width: ${Breakpoint.mobile}) {
    height: 60px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
`;

const MainMenuWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  padding: 0px 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${theme.lightTheme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  span {
    color: white;
  }
`;

const SubMenuWeb = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
`;

interface MenuProp {
  isSelected: boolean;
}

const Menu = styled.p<MenuProp>`
  height: 100% - 1px;
  width: 60px;
  margin: 0px 10px;
  vertical-align: center;
  padding: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 4px solid
    ${(props) => (props.isSelected ? theme.lightTheme.primary : "transparant")};
  :hover {
    color: ${theme.lightTheme.primary};
  }
`;

const AuthWrapper = styled.div`
  width: 30%;
  min-width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface GNBProps {
  variant?: "home" | "nutrient" | "healthGoal";
}

export default function GNB({ variant = "home" }: GNBProps) {
  const router = useRouter();
  return (
    <Base>
      <Header>
        <MainMenuWrapper>
          <LogoWrapper>
            <span>알약하나</span>
          </LogoWrapper>
          <SubMenuWeb>
            <Menu isSelected={variant === "home"}>홈</Menu>
            <Menu isSelected={variant === "healthGoal"}>건강목표</Menu>
            <Menu isSelected={variant === "nutrient"}>영양소</Menu>
          </SubMenuWeb>

          <h4>검색 comp</h4>
        </MainMenuWrapper>
        <AuthWrapper>
          <ButtonText variant="primary" label="로그인"></ButtonText>
          <ButtonText
            variant="default"
            label="회원가입"
            margin="0px 10px"
          ></ButtonText>
        </AuthWrapper>
      </Header>
    </Base>
  );
}

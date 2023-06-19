import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FlexRowBox } from "../../../common/flexBox";
import GNBMenu from "../LNB/menu";
import { theme } from "@/core/theme";
import { Breakpoint } from "@/core/mediaQuery";

const Base = styled.div`
  width: 100%;
  max-width: 1200px;
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

const AuthWrapper = styled.div`
  width: 30%;
  min-width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sideBarData = [
  { dataName: "데이터", key: 1, routes: "/rhksflwkdjemals/data" },
  { dataName: "건강목표", key: 2, routes: "/rhksflwkdjemals/healthGoal" },
  { dataName: "영양소", key: 3, routes: "/rhksflwkdjemals/nutrient" },
];

export default function AdminGNB() {
  const router = useRouter();
  return (
    <Base>
      <Header>
        <MainMenuWrapper>
          <FlexRowBox alignItem="center">
            <LogoWrapper>
              <span>어드민</span>
            </LogoWrapper>
            <GNBMenu selectedMenu={router.pathname}></GNBMenu>
          </FlexRowBox>

          <h4>검색 comp</h4>
        </MainMenuWrapper>
        {/* <AuthWrapper>
          <ButtonText variant="primary" label="로그인"></ButtonText>
          <ButtonText
            variant="default"
            label="회원가입"
            margin="0px 10px"
          ></ButtonText>
        </AuthWrapper> */}
      </Header>
    </Base>
  );
}

import { theme } from "@/core/colors/theme";
import { Breakpoint } from "@/styles/mediaQuery";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import GNBMenu from "../../menu";
import { FlexRowBox } from "@/components/atoms/layouts";

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

const AuthWrapper = styled.div`
  width: 30%;
  min-width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface GNBProps {
  variant?: string;
}

export default function GNB({ variant = "/" }: GNBProps) {
  const router = useRouter();
  return (
    <Base>
      <Header>
        <MainMenuWrapper>
          <FlexRowBox alignItem="center">
            <LogoWrapper>
              <span>알약하나</span>
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

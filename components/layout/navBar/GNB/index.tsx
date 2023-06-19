import { Breakpoint } from "@/core/mediaQuery";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { theme } from "@/core/theme";
import { FlexRowBox } from "../../../common/flexBox";
import { css, useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Base = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 45px;
  display: flex;
  justify-content: center;
  top: 0;
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
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 40px;
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

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${theme.lightTheme.bgGrayDark};
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

const Search = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${theme.lightTheme.bgGrayDark};
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
          <FlexRowBox justifyContent="flex-start">
            <LogoWrapper>
              <span>튼튼</span>
            </LogoWrapper>
          </FlexRowBox>
          <FlexRowBox justifyContent="flex-end">
            <Search>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
              ></FontAwesomeIcon>
            </Search>
            <Avatar>
              <FontAwesomeIcon
                icon={faUser}
                color="gray"
                size="2xl"
              ></FontAwesomeIcon>
            </Avatar>
          </FlexRowBox>
          <div></div>
        </MainMenuWrapper>
      </Header>
    </Base>
  );
}

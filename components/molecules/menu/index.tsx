import DropDown from "@/components/atoms/DropDown";
import { theme } from "@/core/colors/theme";
import { Breakpoint } from "@/styles/mediaQuery";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Base = styled.div`
  width: 200px;
  height: 100%;
  @media (min-width: ${Breakpoint.mobile}) {
    width: 300px;
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
    ${(props) =>
      props.isSelected ? theme.lightTheme.primary : theme.lightTheme.bgColor};
  :hover {
    color: ${theme.lightTheme.primary};
  }
`;

const MenuArray = [
  { id: "1", label: "홈", path: "/" },
  { id: "2", label: "건강목표", path: "/healthgoal" },
  { id: "3", label: "영양소", path: "/nutrient" },
];

interface GNBMenuProps {
  selectedMenu: string;
}

export default function GNBMenu({ selectedMenu }: GNBMenuProps) {
  const router = useRouter();
  const handleClick = (routes: string) => {
    router.push(routes);
  };

  const mobile = useMediaQuery(`(min-width:${Breakpoint.mobile})`);

  return (
    <Base>
      {mobile ? (
        <SubMenuWeb>
          {MenuArray.map((menu) => (
            <Menu
              isSelected={selectedMenu === menu.path}
              onClick={() => handleClick(menu.path)}
            >
              {menu.label}
            </Menu>
          ))}
        </SubMenuWeb>
      ) : (
        <>
          <DropDown label="드롭다운" menuItemArray={MenuArray}></DropDown>
        </>
      )}
    </Base>
  );
}

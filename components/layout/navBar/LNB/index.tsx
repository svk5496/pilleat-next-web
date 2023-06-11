import { Breakpoint } from "@/styles/mediaQuery";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import GNBMenu from "./menu";
import { theme } from "@/core/colors/theme";

const Base = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 45px;
  display: flex;
  justify-content: center;
  top: 0;
  border-bottom: 1px solid ${theme.lightTheme.borderColor};
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
  margin: 0px 10px 0px 0px;
  vertical-align: center;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? theme.lightTheme.fontColor : theme.lightTheme.fontGray};
  font-size: 15px;
  @media (min-width: ${Breakpoint.mobile}) {
    font-size: 16px;
  }
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

export default function LNB() {
  const router = useRouter();
  const handleClick = (routes: string) => {
    router.push(routes);
  };
  return (
    <Base>
      <SubMenuWeb>
        {MenuArray.map((menu) => (
          <Menu
            key={menu.id}
            isSelected={router.pathname === menu.path}
            onClick={() => handleClick(menu.path)}
          >
            {menu.label}
          </Menu>
        ))}
      </SubMenuWeb>{" "}
    </Base>
  );
}

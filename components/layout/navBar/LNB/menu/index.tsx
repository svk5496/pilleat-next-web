import DropDown from "../../../../common/DropDown";
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

const MenuArray = [
  { id: "1", label: "홈", path: "/" },
  { id: "2", label: "건강목표", path: "/healthgoal" },
  { id: "3", label: "영양소", path: "/nutrient" },
];

interface GNBMenuProps {
  selectedMenu: string;
}

export default function GNBMenu({ selectedMenu }: GNBMenuProps) {
  return (
    <Base>
      <DropDown label="드롭다운" menuItemArray={MenuArray}></DropDown>
    </Base>
  );
}

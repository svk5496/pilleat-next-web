import { theme } from "@/core/colors/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const DropDownToggle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
`;

const DropDownMenu = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 50px;
  border: 1px solid ${theme.lightTheme.borderColor};
  border-radius: 5px;
  z-index: 2;
  background-color: ${theme.lightTheme.bgColor};
`;

const MenuItem = styled.button`
  border: none;
  background-color: white;
  width: 100%;
  height: 40px;
  :hover {
    background-color: ${theme.lightTheme.bgGrayDark};
    cursor: pointer;
  }
`;

interface MenuProp {
  id: string;
  label: string;
  path: string;
}

interface DropDownProps {
  label: string;
  menuItemArray: MenuProp[];
}

export default function DropDown({ label, menuItemArray }: DropDownProps) {
  const [modal, setModal] = useState(false);
  const handleDropDownClick = () => {
    setModal(!modal);
  };
  const router = useRouter();
  const menuClick = (path: string) => {
    setModal(false);
    router.push(path);
  };

  return (
    <Base>
      <DropDownToggle onClick={() => handleDropDownClick()}>
        {label}
      </DropDownToggle>
      {modal ? (
        <DropDownMenu>
          {menuItemArray.map((menu) => (
            <MenuItem id={menu.id} onClick={() => menuClick(menu.path)}>
              {menu.label}
            </MenuItem>
          ))}
        </DropDownMenu>
      ) : (
        <></>
      )}
    </Base>
  );
}

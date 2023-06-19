import { LayoutProps } from "@/components/layout";
import GNB from "@/components/layout/navBar/GNB";
import styled from "@emotion/styled";
import LNB from "@/components/layout/navBar/LNB";

const LayoutBase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function UserLayout({
  mode = "user",
  menu = "home",
  currentPage,
  children,
}: LayoutProps) {
  return (
    <LayoutBase>
      <GNB></GNB>
      <LNB></LNB>
      {children}
    </LayoutBase>
  );
}

export default UserLayout;

import styled from "@emotion/styled";
import AdminSideBar from "../bars/AdminSideBar";
import GNB from "../bars/GNB";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

interface publicLayoutProp {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: publicLayoutProp) {
  return (
    <Base>
      <GNB></GNB>
      {children}
    </Base>
  );
}

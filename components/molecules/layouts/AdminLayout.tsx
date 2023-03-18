import styled from "@emotion/styled";
import AdminSideBar from "../bars/AdminSideBar";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

interface AdminLayoutProp {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProp) {
  return (
    <Base>
      <AdminSideBar></AdminSideBar>
      {children}
    </Base>
  );
}

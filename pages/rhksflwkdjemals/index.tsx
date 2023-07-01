import Index from "@/components/layout/navBar/AdminGNB";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import AdminLayout from "@/components/layout/AdminLayout";
import { AppProps } from "next/app";
import { LayoutProps } from "@/components/layout";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function Admin() {
  return (
    <>
      <Seo title="관리자페이지"></Seo>
      <AdminLayout menu="home" mode="admin">
        <div>관리자페이지입니다</div>
      </AdminLayout>
    </>
  );
}

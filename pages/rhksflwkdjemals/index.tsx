import AdminSideBar from "@/components/molecules/bars/AdminSideBar";
import Seo from "@/components/atoms/Seo";
import styled from "@emotion/styled";
import AdminLayout from "@/components/molecules/layouts/AdminLayout";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function Admin() {
  return (
    <>
      <Seo title="관리자페이지"></Seo>
      <AdminLayout>
        <div>관리자페이지입니다</div>
      </AdminLayout>
    </>
  );
}

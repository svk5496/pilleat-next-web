import styled from "@emotion/styled";
import UserLayout from "@/components/layout/UserLayout";
import AdminLayout from "@/components/layout/AdminLayout";

const LayoutBase = styled.div`
  width: 100%;
  height: 100%;
`;

export interface LayoutProps {
  mode: string;
  menu: string;
  currentPage: string;
  children?: React.ReactNode;
}

function Layout({
  mode = "user",
  menu = "home",
  currentPage,
  children,
}: LayoutProps) {
  return (
    <>
      <LayoutBase>
        {mode === "user" ? (
          <UserLayout mode={"user"} menu={menu} currentPage={currentPage}>
            {children}
          </UserLayout>
        ) : (
          <AdminLayout mode={"admin"} menu={menu} currentPage={currentPage}>
            {children}
          </AdminLayout>
        )}
      </LayoutBase>
    </>
  );
}

export default Layout;

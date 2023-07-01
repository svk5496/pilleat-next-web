import { LayoutProps } from "@/components/layout";
import React from "react";
import AdminGNB from "@/components/layout/navBar/AdminGNB";

function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <AdminGNB></AdminGNB>
      {children}
    </div>
  );
}

export default AdminLayout;

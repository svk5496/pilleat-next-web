import AdminLayout from "@/components/molecules/layouts/AdminLayout";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Base = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default function AdminData() {
  return (
    <AdminLayout>
      <Base>
        <h4>건강기능 식품 최신화 버튼</h4>
        <Button color="primary" variant="contained">
          건강기능 식품 최신화
        </Button>
      </Base>
    </AdminLayout>
  );
}

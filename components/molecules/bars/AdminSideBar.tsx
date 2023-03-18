import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Base = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
`;

const sideBarData = [
  { dataName: "데이터", key: 1, routes: "/rhksflwkdjemals/data" },
  { dataName: "건강목표", key: 2, routes: "/rhksflwkdjemals/healthGoal" },
  { dataName: "영양소", key: 3, routes: "/rhksflwkdjemals/nutrient" },
];

export default function AdminSideBar() {
  const router = useRouter();
  return (
    <Base>
      {sideBarData.map((data) => (
        <Button
          key={data.key}
          color="inherit"
          variant="text"
          onClick={() => router.push(data.routes)}
        >
          {data.dataName}
        </Button>
      ))}
    </Base>
  );
}

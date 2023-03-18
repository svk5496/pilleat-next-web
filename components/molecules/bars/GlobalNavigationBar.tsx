import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Base = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 20px;
  border-bottom: 1px solid gray;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export default function GNB() {
  const router = useRouter();
  return (
    <Base>
      <MenuWrapper>
        <h4>알약하나</h4>
        <h4>검색</h4>
      </MenuWrapper>
    </Base>
  );
}

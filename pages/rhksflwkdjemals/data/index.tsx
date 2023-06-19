import AdminLayout from "@/components/common/molecules/layouts/AdminLayout";
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";

const Base = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const CREATE_PRODUCTS = gql`
  mutation Mutation($name: String!) {
    createProduct(name: $name) {
      error
      ok
    }
  }
`;

interface food {
  BSSH_NM: string;
  CRET_DTM: string;
  CSTDY_MTHD: string;
  DISPOS: string;
  IFTKN_ATNT_MATR_CN: string;
  LAST_UPDT_DTM: string;
  LCNS_NO: string;
  NTK_MTHD: string;
  POG_DAYCNT: string;
  PRDLST_NM: string;
  PRDLST_REPORT_NO: string;
  PRDT_SHAP_CD_NM: string;
  PRIMARY_FNCLTY: string;
  PRMS_DT: string;
  RAWMTRL_NM: string;
  SHAP: string | null;
  STDR_STND: string | null;
}

export default function AdminData() {
  const [foods, setFoods] = useState<food[]>([]);
  const [startPoint, setStartPoint] = useState("200");
  const [endPoint, setEndPoint] = useState("299");

  const handleDownloadClick = () => {
    const API_KEY = process.env.NEXT_PUBLIC_HEALTH_FOOD_API_KEY;
    const serviceName = "C003";
    const link = `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceName}/json/${startPoint}/${endPoint}`;
    console.log(link);
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        const products = json.C003.row;
        setFoods(products);
      });
  };
  console.log(foods);

  const [createProduct, {}] = useMutation(CREATE_PRODUCTS, {});

  const handleCreateClick = () => {
    foods.map((food) => {
      createProduct({
        variables: {
          // name:food.name
        },
      });
    });
  };

  return (
    <AdminLayout>
      <Base>
        <h4>데이터 다운로드</h4>
        <Button
          onClick={handleDownloadClick}
          color="primary"
          variant="outlined"
        >
          건강기능 식품 데이터 다운로드
        </Button>
        {foods.length > 0 ? (
          <>
            <h4>데이터 업로드</h4>
            <Button
              onClick={handleCreateClick}
              color="primary"
              variant="contained"
            >
              건강기능 식품 데이터 업로드
            </Button>
          </>
        ) : null}
      </Base>
    </AdminLayout>
  );
}

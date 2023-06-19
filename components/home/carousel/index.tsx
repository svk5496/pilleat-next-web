import styled from "@emotion/styled";
import Slider from "react-slick";

const CarouselWapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px 0;
`;

const Box1 = styled.div`
  height: 240px;
  width: 95%;
  border-radius: 20px;
  background-color: #2beead;
`;

const Box2 = styled.div`
  height: 240px;
  width: 95%;
  border-radius: 20px;
  background-color: #393767;
`;

const Box3 = styled.div`
  height: 240px;
  width: 95%;
  border-radius: 20px;

  background-color: #b6c6f2;
`;

const Box4 = styled.div`
  height: 240px;
  width: 95%;
  border-radius: 20px;

  background-color: #fffd40;
`;

const Box5 = styled.div`
  height: 240px;
  width: 95%;
  border-radius: 20px;

  background-color: #f8c276;
`;

export default function CarouselHome() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    autoPlay: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <CarouselWapper>
      <Slider {...settings}>
        <div style={{ display: "flex", justifyContent: "center", width: 360 }}>
          <Box1></Box1>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: 360 }}>
          <Box2></Box2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: 360 }}>
          <Box3></Box3>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: 360 }}>
          <Box4></Box4>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: 360 }}>
          <Box5></Box5>
        </div>
      </Slider>
    </CarouselWapper>
  );
}

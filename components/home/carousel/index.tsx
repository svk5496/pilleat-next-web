import styled from "@emotion/styled";
import Slider from "react-slick";
import { Breakpoint } from "@/core/mediaQuery";

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  .slick-slide {
    display: flex;
    justify-content: center;
    height: 220px;
    width: 360px;
    div {
      background-color: lightgreen;
      border-radius: 20px;
      height: 100%;
      width: 95%;
    }
  }
  .slick-slider {
    height: 100%;
    max-height: 260px;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    .slick-active {
      button::before {
      }
    }
    button::before {
    }
  }
  @media (min-width: ${Breakpoint.mobile}) {
    max-height: 440px;
    height: 440px;
    .slick-slide {
      width: 600px;
      height: 400px;
    }
    .slick-slider {
      height: 100%;
      max-height: 440px;
    }
    .slick-dots {
      position: absolute;
      bottom: 0;
      .slick-active {
        button::before {
        }
      }
      button::before {
      }
    }
  }
`;

const SliderCard = styled.div``;

export default function CarouselHome() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <SliderCard>
          <div></div>
        </SliderCard>
        <SliderCard>
          <div></div>
        </SliderCard>
        <SliderCard>
          <div></div>
        </SliderCard>
        <SliderCard>
          <div></div>
        </SliderCard>
        <SliderCard>
          <div></div>
        </SliderCard>
      </Slider>
    </CarouselWrapper>
  );
}

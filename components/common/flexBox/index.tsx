import styled from "@emotion/styled";

interface FlexBoxProps {
  width?: string;
  height?: string;
  flexDirection?: string;
  alignItem?: string;
  justifyContent?: string;
}

export const FlexRowBox = styled.div<FlexBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};
`;

FlexRowBox.defaultProps = {
  width: "100%",
  height: "100%",
  flexDirection: "row",
  alignItem: "center",
  justifyContent: "center",
};

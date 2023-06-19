import styled from "@emotion/styled";
import { theme } from "@/core/theme";

const StyledSticker = styled.div`
  background-color: ${theme.lightTheme.bgGray};
  border-radius: 4px;
  padding: 4px;
  margin: 0 8px 4px 0;
  p {
    font-size: 12px;
    font-weight: 400;
    margin: 0px;
    color: ${theme.lightTheme.fontColorLight};
  }
`;

interface StickerProp {
  label: string;
  key: any;
}

export default function Sticker({ label, key }: StickerProp) {
  return (
    <StyledSticker key={key}>
      <p>{label}</p>
    </StyledSticker>
  );
}

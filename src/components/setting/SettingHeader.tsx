//style
import styled from "styled-components";
import { Heading1 } from "../../style/font";
import { ReactComponent as Pencil } from "../../assets/icons/Pencil.svg";
const SettingHeader = () => {
  return (
    <SettingHeaderWrapper>
      <Heading1 color="var(--gray-7)">내 프로필</Heading1>
      <Pencil />
    </SettingHeaderWrapper>
  );
};
export default SettingHeader;

const SettingHeaderWrapper = styled.div`
  height: 4.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & :first-child {
    padding-left: 1.25rem;
  }
  & :last-child {
    padding-right: 1.26rem;
  }
`;

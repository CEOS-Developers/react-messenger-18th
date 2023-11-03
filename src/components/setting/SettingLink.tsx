//style
import styled from "styled-components";
import { Body1 } from "../../style/font";
import { ReactComponent as Link } from "../../assets/icons/Link.svg";
import { ReactComponent as Next } from "../../assets/icons/Next.svg";
const SettingLink = () => {
  const designerUrl = "https://www.instagram.com/naenzae_/";
  const developerUrl = "https://www.instagram.com/2_95k/";
  return (
    <SettingLinkWrapper>
      <BussinessCard>
        <Body1 color="var(--gray-7)">명함</Body1>
        <NextIcon />
      </BussinessCard>
      <SNSHeader>
        <Body1 color="var(--gray-7)">SNS</Body1>
      </SNSHeader>
      <SNSLink>
        <Body1 color="var(--green)">인스타그램</Body1>
        <LinkIcon
          onClick={() => {
            window.open(designerUrl);
          }}
        />
      </SNSLink>
      <SNSLink>
        <Body1 color="var(--green)">이메일</Body1>
        <LinkIcon
          onClick={() => {
            window.open(developerUrl);
          }}
        />
      </SNSLink>
      <SNSLink>
        <Body1 color="var(--green)">홈페이지</Body1>
        <NextIcon />
      </SNSLink>
    </SettingLinkWrapper>
  );
};
export default SettingLink;
const SettingLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 24rem;
`;
const LinkIcon = styled(Link)`
  padding: 0.25rem 0.25rem 0.25rem 0.56rem;
  cursor: pointer;
`;
const NextIcon = styled(Next)`
  padding: 0.25rem 0.56rem 0.25rem 0.56rem;
`;
const BussinessCard = styled.div`
  display: flex;
  height: 3.75rem;
  width: 23.4375rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3125rem;
  & > ${Body1} {
    margin-left: 1.25rem;
  }
  & > ${NextIcon} {
    margin-right: 0.69rem;
  }
`;
const SNSHeader = styled.div`
  height: 4.19rem;
  width: 22.1875rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5rem;
  margin-left: 1.25rem;
`;
const SNSLink = styled.div`
  height: 3.75rem;
  display: flex;
  width: 23.4375rem;
  justify-content: space-between;
  align-items: center;
  & > ${Body1} {
    margin-left: 1.25rem;
  }
  & > ${LinkIcon} {
    margin-right: 0.69rem;
  }
  & > ${NextIcon} {
    margin-right: 0.69rem;
  }
`;

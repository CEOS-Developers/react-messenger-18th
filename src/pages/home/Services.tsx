import styled from 'styled-components';
import { ReactComponent as StickersIcon } from 'static/images/stickers-icon.svg';
import { ReactComponent as PencilIcon } from 'static/images/pencil-icon.svg';
import { ReactComponent as OfficialIcon } from 'static/images/official-icon.svg';
import { ReactComponent as PointsIcon } from 'static/images/line-point-icon.svg';

const Services = () => {
  return (
    <ServicesContainer>
      <div className="title">Services</div>
      <div className="btns">
        <ServiceButton>
          <StickersIcon />
          <div className="button-name">Stickers</div>
        </ServiceButton>
        <ServiceButton>
          <PencilIcon />
          <div className="button-name">Themes</div>
        </ServiceButton>
        <ServiceButton>
          <OfficialIcon />
          <div className="button-name">
            Official
            <br />
            Accounts
          </div>
        </ServiceButton>
        <ServiceButton>
          <PointsIcon />
          <div className="button-name">
            LINE
            <br />
            Points
          </div>
        </ServiceButton>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  margin-top: 20px;
  padding: 0 12px;
  .title {
    font-size: 14px;
    line-height: 160%; /* 22.4px */
  }
  .btns {
    margin-top: 12px;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
  }
`;

const ServiceButton = styled.button`
  .button-name {
    height: 36px;
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    color: var(--Gray-3);
    line-height: 120%;
  }
`;

export default Services;

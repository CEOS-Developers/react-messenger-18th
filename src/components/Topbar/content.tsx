import { useRecoilState } from "recoil";
import {
  EndContentContainer,
  MidContentContainer,
  TopbarInnerContainer,
} from "./content.element";
import { talkState } from "@/states";

import alienSrc from "@/assets/images/alien.png";

interface IMidContent {
  name: string;
  iconSrc: string;
}

interface ITCProps {
  leftIcon: string;
  leftSize: number;
  midContent?: IMidContent;
  rightIcon: string[];
}
const TopbarContent = ({
  leftIcon,
  leftSize,
  midContent,
  rightIcon,
}: ITCProps) => {
  const [talker, setTalker] = useRecoilState(talkState);

  const handleTalkerChange = () => {
    setTalker((talker) => 3 - talker);
  };
  return (
    <TopbarInnerContainer>
      <img
        src={leftIcon}
        alt="back"
        width={leftSize}
        height={leftSize}
      />
      {midContent ? (
        talker === 1 ? (
          <MidContentContainer onClick={handleTalkerChange}>
            <img
              src={midContent.iconSrc}
              alt="profile"
              width={36}
              height={36}
            />
            <div className="textDiv">
              <span className="subText">{midContent.name}</span>
              <span className="caption">현재 활동 중</span>
            </div>
          </MidContentContainer>
        ) : (
          <MidContentContainer onClick={handleTalkerChange}>
            <img
              src={alienSrc}
              alt="profile"
              width={36}
              height={36}
            />
            <div className="textDiv">
              <span className="subText">이하경</span>
              <span className="caption">현재 활동 중</span>
            </div>
          </MidContentContainer>
        )
      ) : (
        <>Chat</>
      )}
      <EndContentContainer>
        {rightIcon.map((iconSrc, idx) => (
          <div key={iconSrc + idx}>
            <img
              alt="right top icon"
              src={iconSrc}
            />
            {iconSrc.includes("video") && <span className={"video"} />}
          </div>
        ))}
      </EndContentContainer>
    </TopbarInnerContainer>
  );
};

export default TopbarContent;

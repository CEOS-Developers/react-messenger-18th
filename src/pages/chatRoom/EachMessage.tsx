import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import styled from 'styled-components';
import { TMessage } from 'types';
import { ReactComponent as HeartIcon } from 'static/images/heart-icon.svg';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { convertDayDateFormat, convertTimeFormat } from 'utils';

interface EachMessageProps {
  message: TMessage;
  isOwnMessage: boolean;
  isNextDay: boolean;
  handleDoubleClickMessage: () => void;
}

const EachMessage = ({
  message,
  isOwnMessage,
  isNextDay,
  handleDoubleClickMessage,
}: EachMessageProps) => {
  const orders = isOwnMessage ? [1, 0] : [0, 1];

  return (
    <EachMessageContainer>
      {isNextDay && (
        <DayDateContainer>
          {convertDayDateFormat(message.time)}
        </DayDateContainer>
      )}
      <MessageBody $isOwnMessage={isOwnMessage}>
        {!isOwnMessage && (
          <MessageProfileImage
            children={
              message.profileImage ? (
                <img src={message.profileImage} alt="profile" />
              ) : (
                <DefaultProfileIcon />
              )
            }
          />
        )}
        <TextAndLikeOuter $order={orders[0]} $isOwnMessage={isOwnMessage}>
          <MessageText
            $isOwnMessage={isOwnMessage}
            onDoubleClick={handleDoubleClickMessage}
          >
            {message.text}
          </MessageText>
          {message.likeCount > 0 && (
            <LikeContainer>
              <HeartIcon />
              <div className="like-count">{message.likeCount}</div>
            </LikeContainer>
          )}
        </TextAndLikeOuter>

        <MessageExtraInfo $order={orders[1]} $isLiked={message.likeCount > 0}>
          {isOwnMessage && message.isRead && <div className="">Read</div>}
          <div className="">{convertTimeFormat(message.time)}</div>
        </MessageExtraInfo>
      </MessageBody>
    </EachMessageContainer>
  );
};

const ChatRoomMyMessageColor = '#ACE49B';

const EachMessageContainer = styled.div`
  margin-bottom: 8px;
`;

const MessageBody = styled.div<{ $isOwnMessage: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isOwnMessage ? 'end' : 'start')};
`;

const MessageProfileImage = styled(ButtonWithIcon)`
  width: 36px;
  height: 36px;
  margin-right: 11px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextAndLikeOuter = styled.div<{ $order: number; $isOwnMessage: boolean }>`
  order: ${(props) => props.$order};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isOwnMessage ? 'end' : 'start')};
`;

const MessageText = styled.div<{ $isOwnMessage: boolean }>`
  border-radius: 16px;
  background-color: ${(props) =>
    props.$isOwnMessage ? ChatRoomMyMessageColor : 'white'};
  padding: 8px 12px;
  font-size: 14px;
  line-height: 160%;
  max-width: 244px;
  word-break: break-all;
  white-space: break-spaces;
`;

const MessageExtraInfo = styled.div<{ $order: number; $isLiked: boolean }>`
  order: ${(props) => props.$order};
  margin: auto 10px 0 10px;
  margin-bottom: ${(props) => (props.$isLiked ? '31px' : '3px')};
  font-size: 10px;
  font-weight: 300;
  line-height: 160%;
  color: #5a5a5a;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const LikeContainer = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 6px 0 2px 0;
  svg {
    margin-right: 3px;
  }
  .like-count {
    margin-left: 3px;
    font-size: 12px;
    font-weight: 300;
    line-height: 120%;
    color: white;
  }
`;

const DayDateContainer = styled.div`
  width: fit-content;
  margin: 4px 0 12px 0;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  padding: 3px 8px;

  height: 20px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
  color: white;
`;

export default EachMessage;

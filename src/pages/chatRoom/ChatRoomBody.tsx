import EachMessage from 'pages/chatRoom/EachMessage';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import { TMessage } from 'types';
import { checkIsNextDay } from 'utils';

const MESSAGES: TMessage[] = [
  {
    id: 0,
    fromUserId: 1,
    toUserId: 0,
    profileImage: null,
    text: '국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서',
    time: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
    isRead: true,
    likeCount: 1,
  },
  {
    id: 1,
    fromUserId: 0,
    toUserId: 1,
    profileImage: null,
    text: '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.\n국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.',
    time: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
    isRead: true,
    likeCount: 0,
  },
  {
    id: 2,
    fromUserId: 1,
    toUserId: 0,
    profileImage: null,
    text: '국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서',
    time: new Date().toISOString(),
    isRead: true,
    likeCount: 1,
  },
  {
    id: 3,
    fromUserId: 0,
    toUserId: 1,
    profileImage: null,
    text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    time: new Date().toISOString(),
    isRead: true,
    likeCount: 1,
  },
  {
    id: 4,
    fromUserId: 1,
    toUserId: 0,
    profileImage: null,
    text: '국',
    time: new Date().toISOString(),
    isRead: true,
    likeCount: 0,
  },
  {
    id: 5,
    fromUserId: 0,
    toUserId: 1,
    profileImage: null,
    text: '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.\n국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.',
    time: new Date().toISOString(),
    isRead: true,
    likeCount: 1,
  },
];

const ChatRoomBody = () => {
  const { id } = useParams();
  let before = '';
  return (
    <ChatRoomBodyContainer>
      {MESSAGES.map((message) => {
        const isNextDay = checkIsNextDay(before, message.time);
        before = message.time;
        return (
          <EachMessage
            key={`${message.id}${message.text}`}
            message={message}
            isOwnMessage={Number(id) === message.fromUserId}
            isNextDay={isNextDay}
          />
        );
      })}
    </ChatRoomBodyContainer>
  );
};

const ChatRoomBodyContainer = styled.div`
  background-color: ${ChatRoomBackgroundColor};
  padding: 61px 8px 64px 8px;
`;

export default ChatRoomBody;

import { chatRoomState } from "../state/chatRoomState";
import { majorState } from "../state/majorState";

export const designerListData = [
  {
    id: 0,
    img: "/img/default.jpg",
    name: "전윤수",
    message: "세오스 화이팅!",
    majorIn: majorState.DESIGNER,
    group: {
      id: 0,
      name: "CEOS 18기 펫뷸러스",
      state: chatRoomState.MAIN,
    },
  },
  {
    id: 1,
    img: "/img/nightview.jpg",
    name: "최윤서",
    message: "디자인 화이팅~!!",
    majorIn: majorState.DESIGNER,
    group: {
      id: 1,
      name: "기업적디자인스튜디오(1)",
      state: chatRoomState.MAIN,
    },
  },
  {
    id: 2,
    img: "/img/wolf.jpg",
    name: "이다인",
    message: "상태메세지",
    majorIn: majorState.DESIGNER,
    group: {
      id: 1,
      name: "2022-1 사이드프로젝트",
      state: chatRoomState.SUB,
    },
  },
];

export const developerListData = [
  {
    id: 0,
    img: "/img/tottenham.jpg",
    name: "김진호",
    message: "프론트 화이팅~!!",
    majorIn: majorState.FRONTEND,
    group: {
      id: 1,
      name: "기업적디자인스튜디오(1)",
      state: chatRoomState.MAIN,
    },
  },
  {
    id: 1,
    img: "/img/beer.jpg",
    name: "김지원",
    message: "상태메세지",
    majorIn: majorState.FRONTEND,
    group: {
      id: 0,
      name: "2022-2 사이드프로젝트",
      state: chatRoomState.SUB,
    },
  },
];

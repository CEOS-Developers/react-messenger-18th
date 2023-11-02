import React from 'react';
import { useParams } from 'react-router-dom';

const MyPage = () => {
  const { uid } = useParams();
  return (
    <div>
      <h1>{uid}사용자 마이페이지 냐냥</h1>
    </div>
  );
};
export default MyPage;

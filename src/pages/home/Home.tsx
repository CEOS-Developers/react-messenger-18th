import HomeBody from 'pages/home/HomeBody';
import HomeHeader from 'pages/home/HomeHeader';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  }, [query]);

  return (
    <HomeContainer>
      <HomeHeader query={query} setQuery={setQuery} />
      {isLoading ? (
        <ClipLoader
          size={40}
          cssOverride={{
            display: 'flex',
            margin: '0 auto',
            marginTop: '30px',
            textAlign: 'center',
          }}
        />
      ) : (
        <HomeBody query={query} />
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  background-color: var(--Background-White);
  // padding: 0 12px;
  // position: relative;
`;
export default Home;

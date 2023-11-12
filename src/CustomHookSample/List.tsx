import styled from 'styled-components';
import Content from './Content';
import { GetMovies } from './type/MovieType';
import useAxios from './Hooks/useHooks';

interface CategoryProps {
  option: string;
  listText: string;
}

const List = ({ option, listText }: CategoryProps) => {
  const { data, loading } = useAxios<GetMovies>({
    url: `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
  });

  return (
    <>
      <ListText
        style={{
          paddingLeft: '8px',
          marginTop: '48px',
          marginBottom: '2px',
        }}
      >
        {listText}
      </ListText>
      <ListBlock>
        {data &&
          data.results.map((movie, index) => (
            <Content key={index} content={movie} rank={index} />
          ))}
      </ListBlock>
    </>
  );
};

export default List;

const ListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const ListText = styled.h2`
  padding-left: 8px;
  margin-top: 48px;
  margin-bottom: 2px;
`;

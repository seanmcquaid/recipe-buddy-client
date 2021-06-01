import styled from 'styled-components';
import { H1 } from '../../components';

const SearchRecipes = () => {
  return (
    <PageContainer>
      <Header>
        <H1>Search Recipes</H1>
      </Header>
      <Main></Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default SearchRecipes;
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { H1, P } from '../../components';
import LoginForm from './LoginForm';

const Login = () => {
  const errorMessage = useSelector();
  return (
    <PageContainer>
      <Header>
        <H1>Login</H1>
        <P>{errorMessage}</P>
      </Header>
      <Main>
        <LoginForm />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Login;

import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { theme } from "./GlobalStyles";
import NavBar from "./Navbar";

const StyledLayout = styled.div`
  position: relative;
`;

const ContentWrap = styled.div`
  min-height: 100vh;
  padding-bottom: 5rem;
`;

const Main = styled.main`
  width: 75%;
  margin: 2rem auto;
  text-align: center;
`;

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <ContentWrap>
          <HeaderWrap>
            <Header />
            <NavBar />
          </HeaderWrap>
          <Main>{props.children}</Main>
        </ContentWrap>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;

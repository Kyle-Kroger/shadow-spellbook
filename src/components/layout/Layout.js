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
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  
`;

const HeaderShadow = styled.div`
  box-shadow: 0 5px 15px 7px rgba(0, 0, 0, 0.4);
`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <ContentWrap>
          <HeaderWrap>
            <Header />
            <HeaderShadow />
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

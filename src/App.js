import { Fragment } from "react";
import GlobalStyle from "./components/layout/GlobalStyles";
import Layout from "./components/layout/Layout";
import Page from "./components/ui/Page";
import PageCover from "./components/ui/PageCover";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <PageCover>
          <Page>
            <p>Main content goes here!!</p>
          </Page>
          <Page>
            <p>Main content goes here!!</p>
          </Page>
        </PageCover>
      </Layout>
    </Fragment>
  );
}

export default App;

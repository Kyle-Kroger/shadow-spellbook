import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";

const NotFound = (props) => {
  return ( <PageCover>
    <Page>
      <h1>It seems that content doesn't exist within my pages</h1>
    </Page>
    <Page>
      <p>Main content goes here!!</p>
    </Page>
  </PageCover> );
}
 
export default NotFound;
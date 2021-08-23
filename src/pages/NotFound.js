import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";

const NotFound = (props) => {
  return ( <PageCover>
    <Page>
      <h1>Its seems I could not find the page you were looking for</h1>
    </Page>
    <Page>
      <p>Main content goes here!!</p>
    </Page>
  </PageCover> );
}
 
export default NotFound;
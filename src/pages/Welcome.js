import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";


const Welcome = (props) => {
  return (
    <PageCover>
      <Page>
        <h1>Welcome to the Shadow Grimoire</h1>
      </Page>
      <Page>
        <p>Main content goes here!!</p>
      </Page>
    </PageCover>
  );
};

export default Welcome;

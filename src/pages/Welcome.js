import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";


const Welcome = (props) => {
  return (
    <PageCover>
      <Page>
        <h1>Welcome to the Shadow Grimoire</h1>
      </Page>
      <Page>
        <p>I am a magical spell book with the following properties: explain long rest, casting, adding, and deleting spells. Also random free selected spell</p>
      </Page>
    </PageCover>
  );
};

export default Welcome;

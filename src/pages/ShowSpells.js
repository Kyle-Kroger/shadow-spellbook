import SpellList from "../components/spell-list/SpellList";
import Page from "../components/ui/Page";
import PageCover from "../components/ui/PageCover";

const ShowSpells = (props) => {
  return (
    <PageCover>
      <Page>
        <SpellList />
      </Page>
      <Page>
        <p>Main content goes here!!</p>
      </Page>
    </PageCover>
  );
};

export default ShowSpells;

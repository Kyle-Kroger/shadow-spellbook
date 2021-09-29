import { useDispatch } from "react-redux";

import YesNoPrompt from "../ui/YesNoPrompt";
import { spellbookModeActions, SPELLBOOK_MODES } from "../../store/spellbook-mode-slice";
import { spellListActions } from "../../store/spell-list-slice";

const SpellPrompt = (props) => {
  //The action that is passed in should be one of the modes of the mode-slice
  const {spellName, spellIndex, action, onClose: handleClose} = props;

  const dispatch = useDispatch();
  let message;
  let yesFunc;
  if(action === SPELLBOOK_MODES.CAST) {
    message = `Would you like to cast ${spellName}?`;
    yesFunc = () => {
      dispatch(spellListActions.castSpell(spellIndex));
      handleClose();
    };
  } else if(action === SPELLBOOK_MODES.DELETE) {
    message = `Are you certain you want to permanently delete ${spellName} from the spellbook? This action is irreversible`;
    yesFunc = () => {
      dispatch(spellListActions.deleteSpell(spellIndex));
      handleClose();
    };
  } else if(action === SPELLBOOK_MODES.SET_ACTIVE) {
    message = `Do you want to set ${spellName} as the active (free) spell?`;
    yesFunc = () => {
      //is this bad to have 2 dispatches in the same function? maybe thunking is something to look into
      dispatch(spellListActions.setActiveSpell(spellIndex));
      handleClose();
      dispatch(spellbookModeActions.toggleMode(SPELLBOOK_MODES.SET_ACTIVE))
    };
  } else {
    //this should never happen and is an error
  }

  return ( <YesNoPrompt message={message} noFunc={handleClose} yesFunc={yesFunc} />);
}
 
export default SpellPrompt;
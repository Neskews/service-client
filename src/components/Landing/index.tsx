import { connect } from "react-redux";
import { PROCEED_LANDING } from "../../api/actions/process";

import Landing from "./Landing";

export interface ILandingDispatchProps {
    type: string;
}

const mapDispatchToProps = (dispatch: (props: ILandingDispatchProps) => void) => ({
  proceed: () => dispatch({ type: PROCEED_LANDING })
});

export default connect(
  null,
  mapDispatchToProps
)(Landing);

import { getPeople, deletePerson } from './../../api/actions/getPeople';
import { IAction } from '../../api/reducers/types';
import PeopleList from './PeopleList';
import { connect } from 'react-redux';
import { IState } from '../../api/reducers/types';

const mapStateToProps = ({ people }: IState) => ({ people });
const mapDispatchToProps = (dispatch: (action: IAction) => void) => ({
  getPeople: () => getPeople(),
  onDelete: (id: number) => deletePerson(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);

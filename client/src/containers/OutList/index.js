import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecord, fetchList } from "../../store/actions/OutListActions";
import OutList from "../../components/OutList";
class Out extends Component {
  render() {
    return <OutList state={this.props.OutState} />;
  }
}
const MapStateToProps = state => {
  return { OutState: state.OutList };
};
export default connect(
  MapStateToProps,
  {
    updateRecord,
    fetchList
  }
)(Out);

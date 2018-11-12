import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateRecord,
  fetchList,
  setInfo
} from "../../store/actions/OutListActions";
import OutList from "../../components/OutList";
class Out extends Component {
  componentDidMount() {
    this.props.setInfo({ isLoading: true });
    this.props.fetchList();
    setInterval(this.props.fetchList, 10000);
  }
  markOut(e) {
    const id = e.target.parentElement.parentElement.parentElement.dataset.uid;
    this.props.updateRecord({ OID: id });
  }
  updateinfo = data => {
    this.props.setInfo({ markedOut: false });
  };
  render() {
    return (
      <OutList
        markOut={this.markOut.bind(this)}
        setInfo={this.updateinfo.bind(this)}
        state={this.props.OutState}
      />
    );
  }
}
const MapStateToProps = state => {
  return { OutState: state.OutList };
};
export default connect(
  MapStateToProps,
  {
    updateRecord,
    fetchList,
    setInfo
  }
)(Out);

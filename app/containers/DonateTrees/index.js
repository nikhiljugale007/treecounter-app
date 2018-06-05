import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectedPlantProjectSelector } from '../../selectors';
import { selectPlantProjectAction } from '../../actions/selectPlantProjectAction';
import DonateTrees from '../../components/DonateTrees/DonateTress';

class DonationTreesContainer extends Component {
  componentDidMount() {
    this.props.selectPlantProjectAction(1);
  }

  render() {
    return <DonateTrees selectedProject={this.props.selectedProject} />;
  }
}

const mapStateToProps = state => ({
  selectedProject: selectedPlantProjectSelector(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectPlantProjectAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DonationTreesContainer
);

DonationTreesContainer.propTypes = {
  selectedProject: PropTypes.object,
  selectPlantProjectAction: PropTypes.func
};

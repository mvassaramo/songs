import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return(
    <div>detail</div>
  )
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);
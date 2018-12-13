import * as React from "react";
import { getBreeds } from "../api";
import G from "glamorous-native";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import { bindActionCreators } from "redux";

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
export class Detail extends React.Component {
  componentDidMount() {
    this.props.getBreedImageRequest(this.props.navigation.state.params.name);
  }
  render() {
    return (
      <G.View flex={1}>
        {this.props.imageUrl ? (
          <G.Image
            resizeMode="contain"
            height={"100%"}
            width={"100%"}
            source={{ uri: this.props.imageUrl }}
          />
        ) : null}
      </G.View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

import * as React from "react";
import G from "glamorous-native";
import { BreedCard } from "../components/Card.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/actions";
import { ScrollView } from "react-native-gesture-handler";

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class HomeScreen extends React.Component {
  async componentDidMount() {
    const { getBreedsRequest } = this.props;
    const breeds = await getBreedsRequest();
  }
  render() {
    return (
      <G.View flex={1} paddingHorizontal={20}>
        {/* NOT USING FLAT LIST FOR FASTER DEVELOPMENT */}
        <ScrollView>
          {this.props.breeds.map(b => (
            <BreedCard name={b} key={b} onPress={this._handlePress} />
          ))}
        </ScrollView>
      </G.View>
    );
  }

  _handlePress = name => {
    this.props.clearImage();
    this.props.navigation.navigate("BreedDetail", { name });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

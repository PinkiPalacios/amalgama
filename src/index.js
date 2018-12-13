import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./views/HomeScreen";
import BreedDetail from "./views/BreedDetail";

const AppNavigator = createStackNavigator({
  HomeScreen,
  BreedDetail
});

export default createAppContainer(AppNavigator);

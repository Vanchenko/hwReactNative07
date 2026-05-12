import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screens/DetailsScreen";
import { ROUTES } from '../constants/routes';
import MainDrawerNavigator from './MainDrawerNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTES.MAIN_DRAWER}>
          <Stack.Screen
            name={ROUTES.MAIN_DRAWER}
            component={MainDrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.DETAILS}
            component={DetailsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

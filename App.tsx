import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();

// The screen should fill the area below the header with light blue.
function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen content</Text>
    </View>
  );
}

// http://localhost:8081/            detachInactiveScreens={false}: the screen collapses to one line of text.
// http://localhost:8081/?detach=true detachInactiveScreens={true}: the screen fills the viewport.
const detachInactiveScreens =
  new URLSearchParams(window.location.search).get('detach') === 'true';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator detachInactiveScreens={detachInactiveScreens}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

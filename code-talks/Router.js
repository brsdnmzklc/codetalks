import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/auth/Login/Login';
import Sign from './src/screens/auth/Sign/Sign';
import Rooms from './src/screens/Rooms/Rooms';
import RoomMessages from './src/screens/RoomMessages/RoomMessages';
import auth from '@react-native-firebase/auth';
import colors from './src/styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);
  const handleLogOut = () => {
    auth().signOut();
  };
  console.log(userSession);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {userSession ? (
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <Icon
                name="logout"
                size={30}
                onPress={handleLogOut}
                color={colors.ImperialRed}
              />
            ),
          }}>
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              headerTitle: 'Odalar',
              headerTitleAlign: 'center',
              headerTintColor: colors.ImperialRed,
            }}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: 'center',
              headerTintColor: colors.ImperialRed,
            }}
            name="RoomMessages"
            component={RoomMessages}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;

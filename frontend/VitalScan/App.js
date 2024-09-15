import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import HomeAdmins from './pages/HomeAdmins';  // Pantalla para admins
import Profile from './pages/Profile';
import AboutApp from './pages/AboutApp';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';  
import Form from './pages/Form';  // Importamos la pantalla Form
import Support from './pages/Support';  // Importamos la pantalla Support

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LogIn" 
          component={LogIn} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="HomeAdmins" 
          component={HomeAdmins} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="AboutApp" 
          component={AboutApp} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Form" 
          component={Form} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Support" 
          component={Support} 
          options={{ headerShown: false }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

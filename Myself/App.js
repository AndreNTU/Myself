import {BackHandler } from 'react-native';
import StackNavigator from './StackNavigator';
import { UserContext } from './userContext';

BackHandler.addEventListener('hardwareBackPress', function() {return true})

export default function App() {
  return (
    <UserContext> 
   <StackNavigator/>
   </UserContext>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/screens/loginSignUp/login/login';
import Signup_enterEmail from './src/screens/loginSignUp/signup/signup_enterEmail';
import Signup_enterverification from './src/screens/loginSignUp/signup/signup_enterverification';
import Signup_choosepassword from './src/screens/loginSignUp/signup/signup_choosepassword';
import Signup_chooseusername from './src/screens/loginSignUp/signup/signup_chooseusername';
import Signup_account_created from './src/screens/loginSignUp/signup/signup_account_created';
import Forgotpassword_enteremail from './src/screens/loginSignUp/forgotpassword/forgotpassword_enteremail';
import Forgotpassword_enterverificationcode from './src/screens/loginSignUp/forgotpassword/forgotpassword_enterverificationcode';
import Forgotpassword_choosepassword from './src/screens/loginSignUp/forgotpassword/forgotpassword_choosepassword';
import Forgotpassword_accountrecovered from './src/screens/loginSignUp/forgotpassword/forgotpassword_accountrecovered';
import MainPage from './src/screens/mainpage/Mainpage';
import SearchUserPage from './src/screens/mainpage/SearchUserPage';
import TransactionPage from './src/screens/mainpage/TransactionPage';
import My_UserProfile from './src/screens/profile/My_UserProfile';
import Settings1 from './src/screens/settings/Settings1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Login" component={login}
        options={{
          // animation: 'slide_from-right'
        }}
        />
        <Stack.Screen name="Signup_enterEmail" component={Signup_enterEmail} />
        
        <Stack.Screen name="Signup_enterverification" component={Signup_enterverification} />
        <Stack.Screen name="Signup_chooseusername" component={Signup_chooseusername} />
        <Stack.Screen name="Signup_choosepassword" component={Signup_choosepassword} />
        <Stack.Screen name="Signup_account_created" component={Signup_account_created} />

        <Stack.Screen name="Forgotpassword_enteremail" component={Forgotpassword_enteremail} />
        <Stack.Screen name="Forgotpassword_enterverificationcode" component={Forgotpassword_enterverificationcode} />
        <Stack.Screen name="Forgotpassword_choosepassword" component={Forgotpassword_choosepassword} />
        <Stack.Screen name="Forgotpassword_accountrecovered" component={Forgotpassword_accountrecovered} />

        <Stack.Screen name="Mainpage" component={MainPage} />
        <Stack.Screen name="SearchUserPage" component={SearchUserPage}
        
        options={{
          animation: 'slide_from_bottom'
        }}
        />

       <Stack.Screen name="TransactionPage" component={TransactionPage}
        options={{
          animation: 'slide_from_top'
        }}
        />

       <Stack.Screen name="My_UserProfile" component={My_UserProfile}
        
        options={{
          animation: 'slide_from_bottom'
        }}
        />
      <Stack.Screen name="Settings1" component={Settings1} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
import MoneyInput from './src/cards/MoneyInput';
import Prelogin from './src/screens/loginSignUp/login/prelogin';
import FirstIntro from './src/screens/loginSignUp/signup/FirstIntro';
import SecondIntro from './src/screens/loginSignUp/signup/SecondIntro';
import ThirdIntro from './src/screens/loginSignUp/signup/ThirdIntro';
import FourthIntro from './src/screens/loginSignUp/signup/FourthIntro';
import My_Drips from './src/screens/profile/My_Drips';
import TappedPage from './src/screens/mainpage/transactions/TappedPage';
import SendManually from './src/screens/mainpage/transactions/SendManually';
import CardChoosePage from './src/screens/mainpage/transactions/CardChoosePage';
import ScheduleSend from './src/screens/mainpage/transactions/ScheduleSend';
import MyFinances from './src/screens/profile/MyFinances';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>

        <Stack.Screen name="Prelogin" component={Prelogin} />
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
        <Stack.Screen name="MoneyInput" component={MoneyInput} />

       <Stack.Screen name="My_UserProfile" component={My_UserProfile}
        
        options={{
          animation: 'slide_from_bottom'
        }}
        />
      <Stack.Screen name="Settings1" component={Settings1} />
      <Stack.Screen name="FirstIntro" component={FirstIntro} />
      <Stack.Screen name="SecondIntro" component={SecondIntro} />
      <Stack.Screen name="ThirdIntro" component={ThirdIntro} />
      <Stack.Screen name="FourthIntro" component={FourthIntro} />
      <Stack.Screen name="My_Drips" component={My_Drips} />
      <Stack.Screen name="TappedPage" component={TappedPage} />
      <Stack.Screen name = "SendManually" component={SendManually} />
      <Stack.Screen name = "CardChoosePage" component={CardChoosePage} />
      <Stack.Screen name = "ScheduleSend" component={ScheduleSend} />
      <Stack.Screen name = "MyFinances" component={MyFinances} />
      
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

import {SafeAreaView} from 'react-native';
import {CategoryScreen} from './src/screens/categories';
import {NavigationContainer} from '@react-navigation/native';
import {NavigatiosScreens} from './src/routes/routes';

function App() {
  return (
    <>
      <NavigationContainer>
      <NavigatiosScreens />
      </NavigationContainer>
    </>
  );
}

export default App;

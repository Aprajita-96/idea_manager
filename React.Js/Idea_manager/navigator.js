import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginComponent from './components/login';
import AddIdeaComponent from './components/addidea';
import ListIdeaComponent from './components/listIdeas';

const AppNavigator = createStackNavigator({
    Login: LoginComponent,
    AddIdea: AddIdeaComponent,
    ListIdea: ListIdeaComponent,
},
{ 
    initialRouteName: 'Login',
});

export const AppContainer = createAppContainer(AppNavigator);
  
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard11181635Navigator from '../features/Dashboard11181635/navigator';
import BlankScreen1181634Navigator from '../features/BlankScreen1181634/navigator';
import BlankScreen0181633Navigator from '../features/BlankScreen0181633/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard11181635: { screen: Dashboard11181635Navigator },
BlankScreen1181634: { screen: BlankScreen1181634Navigator },
BlankScreen0181633: { screen: BlankScreen0181633Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

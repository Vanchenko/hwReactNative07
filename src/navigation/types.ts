import type { NavigatorScreenParams } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

export type MainTabParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.SEARCH]: undefined;
  [ROUTES.FAVORITES]: undefined;
};

export type MainDrawerParamList = {
  [ROUTES.MAIN_TABS]: NavigatorScreenParams<MainTabParamList>;
  [ROUTES.SETTINGS]: undefined;
};

export type RootStackParamList = {
  [ROUTES.MAIN_DRAWER]: NavigatorScreenParams<MainDrawerParamList>;
  [ROUTES.DETAILS]: {
    recipeId: string;
  };
};

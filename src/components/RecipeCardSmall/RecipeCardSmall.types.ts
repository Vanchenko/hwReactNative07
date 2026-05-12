import { ImageSourcePropType } from 'react-native';

export interface RecipeCardSmallProps {
  title: string;
  image: ImageSourcePropType;
  imageRating?: number;
  onPress?: () => void;
}
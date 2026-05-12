import { ImageSourcePropType } from 'react-native';

export interface RecipeCardProps {
  title: string;
  author: string;
  description: string;
  image: ImageSourcePropType;
  authorAvatar: ImageSourcePropType;
  rating?: number;
  imageRating?: number;
  duration: string;
  difficulty: string;
  onPress?: () => void;
}
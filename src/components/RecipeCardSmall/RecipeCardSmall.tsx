import { Image, Pressable, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { RecipeCardSmallProps } from './RecipeCardSmall.types';
import { styles } from './RecipeCardSmall.styles';

export const RecipeCardSmall = ({
  title,
  image,
  imageRating,
  onPress,
}: RecipeCardSmallProps) => {
  return (
      <Pressable style={styles.imageWrapper} onPress={onPress}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.topBadge}>
          <Icon name="star-outline" size={13} color="#FFFFFF" />
          <Text style={styles.topBadgeText}>{imageRating }</Text>
        </View>

        <View style={styles.bottomMeta}>
          <Text style={styles.bottomMetaText} numberOfLines={2}>{title}</Text>
        </View>
      </Pressable>
  );
};
import { Image, Pressable, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { RecipeCardProps } from './RecipeCard.types';
import { styles } from './RecipeCard.styles';

export const RecipeCard = ({
  title,
  author,
  description,
  image,
  authorAvatar,
  rating,
  imageRating,
  duration,
  difficulty,
  onPress,
}: RecipeCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.topBadge}>
          <Icon name="star-outline" size={13} color="#FFFFFF" />
          <Text style={styles.topBadgeText}>{imageRating ?? rating}</Text>
        </View>

        <View style={styles.bottomMeta}>
          <Text style={styles.bottomMetaText}>{duration}</Text>
          <Text style={styles.bottomMetaDivider}>|</Text>
          <Text style={styles.bottomMetaText}>{difficulty}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.authorRow}>
          <Image source={authorAvatar} style={styles.avatar} resizeMode="cover" />

          <View style={styles.authorContent}>
            <Text style={styles.authorName} numberOfLines={1}>
              {author}
            </Text>

            <View style={styles.ratingBadge}>
              <Icon name="star-outline" size={13} color="#4A4A00" />
              <Text style={styles.ratingBadgeText}>{rating}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>

        <Pressable style={styles.actionButton} onPress={onPress}>
          <View style={styles.actionButtonInner}>
            <Icon name="arrow-up-outline" size={18} color="#FFFFFF" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
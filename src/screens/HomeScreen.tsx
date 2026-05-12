import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ROUTES } from '../constants/routes';
import { RecipeCard } from '../components/RecipeCard';
import { RECIPE_DATA } from '../data/recipedata.ts';
import { MainTabParamList, RootStackParamList } from '../navigation/types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, typeof ROUTES.HOME>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    //  <View style={styles.container}>
    //   <Text style={styles.header}>Головний екран</Text>
    //   <Button
    //     title="Перейти до деталей"
    //     onPress={() => navigation.navigate('Details', { itemId: 42 })}
    //   />
    //   </View>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        { RECIPE_DATA.map(recipe => (
          <RecipeCard
          key={recipe.id}
          title={recipe.title}
          author={recipe.author}
          description={recipe.description}
          image={recipe.image}
          authorAvatar={recipe.authorAvatar}
          rating={recipe.rating}
          imageRating={recipe.imageRating}
          duration={recipe.duration}
          difficulty={recipe.difficulty}
          onPress={() => navigation.navigate(ROUTES.DETAILS, { recipeId: recipe.id })}
        />
        ))}
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F4',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 20,
  },
  txt: {
    color: '#000',
  },
  button: {
    color: '#000',
  },
  logoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},
});

export default HomeScreen;

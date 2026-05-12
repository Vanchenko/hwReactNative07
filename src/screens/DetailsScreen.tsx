import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from '@react-native-vector-icons/ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ROUTES } from '../constants/routes';
import { RECIPE_DATA } from '../data/recipedata';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, typeof ROUTES.DETAILS>;
type DetailsTab = 'Instructions' | 'Ingredients';

const DetailsScreen = ({ navigation, route }: Props) => {
  const [activeTab, setActiveTab] = useState<DetailsTab>('Instructions');
  const recipe = RECIPE_DATA.find(item => item.id === route.params.recipeId);
  const instructionSteps =
    recipe?.instructions
      .split(/\n+/)
      .map(step => step.trim())
      .filter(Boolean) ?? [];

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.fallbackText}>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <ImageBackground
            source={recipe.image}
            style={styles.heroImage}
            imageStyle={styles.heroImageInner}
          >
            <View style={styles.heroTopRow}>
              <Pressable style={styles.iconButton} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back" size={22} color="#FFFFFF" />
              </Pressable>
            </View>

            <View style={styles.heroBottomRow}>
              <View style={styles.imageRatingBadge}>
                <Icon name="star-outline" size={14} color="#FFFFFF" />
                <Text style={styles.imageRatingText}>{recipe.imageRating}</Text>
              </View>

              <View style={styles.actionIconsRow}>
                <Pressable style={styles.iconButtonSmall}>
                  <Icon name="bookmark-outline" size={20} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.iconButtonSmall}>
                  <Icon name="heart-outline" size={20} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.iconButtonSmall}>
                  <Icon name="share-social-outline" size={20} color="#FFFFFF" />
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.authorRow}>
          <Image source={recipe.authorAvatar} style={styles.authorAvatar} />

          <View style={styles.authorPill}>
            <Text style={styles.authorName}>{recipe.author}</Text>

            <View style={styles.authorRatingBadge}>
              <Icon name="star-outline" size={13} color="#5B5200" />
              <Text style={styles.authorRatingText}>{recipe.rating}</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.title}>{recipe.title}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaChip}>
              <Icon name="barbell-outline" size={14} color="#6B78C5" />
              <Text style={styles.metaChipText}>Easy recipe</Text>
            </View>

            <View style={styles.metaChip}>
              <Icon name="restaurant-outline" size={14} color="#6B78C5" />
              <Text style={styles.metaChipText}>{recipe.difficulty}</Text>
            </View>

            <View style={styles.metaChip}>
              <Icon name="time-outline" size={14} color="#6B78C5" />
              <Text style={styles.metaChipText}>{recipe.duration}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.tabsRow}>
            <Pressable
              style={[
                styles.tabButton,
                activeTab === 'Instructions' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('Instructions')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'Instructions' && styles.activeTabButtonText,
                ]}
              >
                Instructions
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.tabButton,
                activeTab === 'Ingredients' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('Ingredients')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'Ingredients' && styles.activeTabButtonText,
                ]}
              >
                Ingredients
              </Text>
            </Pressable>
          </View>

          {activeTab === 'Instructions' ? (
            <View style={styles.tabContent}>
              <Text style={styles.sectionTitle}>{instructionSteps.length} Steps</Text>

              <View style={styles.instructionsList}>
                {instructionSteps.map((step, index) => (
                  <View
                    key={`${index}-${step.slice(0, 24)}`}
                    style={styles.instructionItem}
                  >
                    <View style={styles.instructionIndexBadge}>
                      <Text style={styles.instructionIndexText}>
                        {String(index + 1).padStart(2, '0')}
                      </Text>
                    </View>

                    <Text style={styles.instructionText}>{step}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View style={styles.tabContent}>
              <Text style={styles.sectionTitle}>
                {recipe.ingredients.length} Ingredients
              </Text>

              <View style={styles.ingredientsList}>
                {recipe.ingredients.map((ingredient, index) => (
                  <View key={`${ingredient}-${index}`} style={styles.ingredientItem}>
                    <View style={styles.ingredientIndexBadge}>
                      <Text style={styles.ingredientIndexText}>
                        {String(index + 1).padStart(2, '0')}
                      </Text>
                    </View>

                    <Text style={styles.ingredientText}>{ingredient}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  contentContainer: {
    paddingBottom: 32,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  fallbackText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222222',
    textAlign: 'center',
  },
  heroCard: {
    marginHorizontal: 14,
    marginTop: 8,
  },
  heroImage: {
    height: 286,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 16,
  },
  heroImageInner: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  heroBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonSmall: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRatingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(33, 33, 33, 0.52)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  imageRatingText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  actionIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 20,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10,
    zIndex: 1,
    borderWidth: 2,
    borderColor: '#F4F7F2',
  },
  authorPill: {
    flex: 1,
    backgroundColor: '#3A3A40',
    borderRadius: 24,
    paddingVertical: 10,
    paddingLeft: 28,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  authorRatingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F2F04B',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  authorRatingText: {
    color: '#3B3B2B',
    fontSize: 13,
    fontWeight: '700',
  },
  summaryCard: {
    marginTop: 12,
    marginHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: '#5269C4',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F6F6F8',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  metaChipText: {
    color: '#545A66',
    fontSize: 12,
    fontWeight: '500',
  },
  detailsCard: {
    marginTop: 12,
    marginHorizontal: 14,
    backgroundColor: '#F7FAF5',
    borderRadius: 18,
    padding: 14,
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D6D9E2',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  activeTabButton: {
    borderColor: '#5269C4',
    backgroundColor: '#EEF1FF',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8D93A1',
  },
  activeTabButtonText: {
    color: '#2A3769',
    fontWeight: '700',
  },
  tabContent: {
    gap: 14,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2B2B2B',
  },
  instructionsList: {
    gap: 10,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  instructionIndexBadge: {
    minWidth: 28,
    borderRadius: 7,
    backgroundColor: '#FF6B3D',
    paddingHorizontal: 6,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 2,
  },
  instructionIndexText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  instructionText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#505660',
  },
  ingredientsList: {
    gap: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  ingredientIndexBadge: {
    minWidth: 28,
    borderRadius: 7,
    backgroundColor: '#FF6B3D',
    paddingHorizontal: 6,
    paddingVertical: 5,
    alignItems: 'center',
  },
  ingredientIndexText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  ingredientText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    color: '#333B48',
    fontWeight: '500',
  },
});

export default DetailsScreen;

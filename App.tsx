import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
});

// function AppContent() {
//   const handleButtonPress = () => {
//     Alert.alert('OnPress!!!');
//   };
//   const [text, onChangeText] = React.useState('');
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <View style={styles.logoRow}>
//           <Logo width={20} height={20} />
//           <Text style={styles.txt}>RecipeHUB</Text>
//         </View>
//         <ControlButton title={'Sign In'} onPress={handleButtonPress} />
//         <InputText label={'Login'} value={text} onInput={onChangeText} />
//         <RecipeCard
//           title="Frosted pinecone cake"
//           author="Kelly Mayer"
//           description="In a large bowl, mix together flour, baking powder, sugar, and salt."
//           image={require('./assets/img_recipe1.png')}
//           authorAvatar={require('./assets/ava_kelly_mayer.png')}
//           rating={4.9}
//           imageRating={4.8}
//           duration="30 Min"
//           difficulty="Medium"
//           onPress={() => Alert.alert('Open recipe')}
//         />
//         <RecipeCardSmall
//           title="Chocolate cake with buttercream frosting"
//           image={require('./assets/img_recipe4.png')}
//           imageRating={4.3}
//           onPress={() => Alert.alert('Open recipe small card!')}
//         />
//       </View>
//       <ScrollView contentContainerStyle={styles.container}>
//         { RECIPE_DATA.map(recipe => (
//           <RecipeCard
//           key={recipe.id}
//           title={recipe.title}
//           author={recipe.author}
//           description={recipe.description}
//           image={recipe.image}
//           authorAvatar={recipe.authorAvatar}
//           rating={recipe.rating}
//           imageRating={recipe.imageRating}
//           duration={recipe.duration}
//           difficulty={recipe.difficulty}
//           onPress={() => Alert.alert('Open recipe')}
//         />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 12,
//     paddingLeft: 24,
//     paddingRight: 24,
//     paddingTop: 12,
//   },
//   txt: {
//     color: '#000',
//   },
//   button: {
//     color: '#000',
//   },
//   logoRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: 8,
// },
// });

export default App;

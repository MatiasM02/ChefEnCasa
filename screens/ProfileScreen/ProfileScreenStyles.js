import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#619537',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#619537',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  editButtonText: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  recentRecipesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#619537',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  recentRecipesList: {
    paddingHorizontal: 20,
  },
  recipeContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  recipeImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  recipeInfo: {
    flex: 1,
    marginLeft: 15,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeRating: {
    fontSize: 14,
    color: '#888',
  },
  recipeServings: {
    fontSize: 14,
    color: '#888',
  },
  recipeTime: {
    fontSize: 14,
    color: '#888',
  },
  recipeButton: {
    marginTop: 10,
    backgroundColor: '#619537',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'center', // Centra el botón horizontalmente
  },
  recipeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

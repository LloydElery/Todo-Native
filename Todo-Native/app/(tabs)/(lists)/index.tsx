import { Link, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet } from 'react-native';

const ListsScreen = () => {
  const lists = ['Shopping list', 'Wish list', 'Todo list'];

  return (
    <>
      <View style={styles.container}>
        {lists.map((list) => (
          <Link
            key={list}
            href={{
              pathname: '[id]',
              params: { id: list },
            }}
          >
            {list}
          </Link>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListsScreen;

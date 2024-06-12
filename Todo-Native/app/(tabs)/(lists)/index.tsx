import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

const ListsScreen = () => {
  const listName = 'Shopping list';
  return (
    <>
      <View style={styles.container}>
        <Link
          href={{
            pathname: '(lists)/[id]',
            params: { id: listName },
          }}
        >
          {listName}
        </Link>
        <Link href={'/lists/2'}>List 2</Link>
        <Link href={'/lists/3'}>List 3</Link>
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

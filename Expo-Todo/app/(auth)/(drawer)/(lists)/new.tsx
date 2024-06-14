import HeaderDropdown from '@/components/header-dropdown';
import { defaultStyles } from '@/constants/styles';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewList = () => {
  const [lastEditedList, setLastEditedList] = useState('My List');
  const [listIcon, setListIcon]: any = useState();

  return (
    <>
      <View style={defaultStyles.pageContainer}>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <HeaderDropdown
                title='Lists'
                onSelect={(key) => {
                  console.log(key);
                }}
                selected={lastEditedList}
                items={[
                  {
                    key: 'New List',
                    title: 'Add New List',
                    icon: 'flag',
                  },
                  {
                    key: '1',
                    title: lastEditedList,
                    icon: 'flag',
                  },
                ]}
              />
            ),
          }}
        />
        <Text>NewList</Text>
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

export default NewList;

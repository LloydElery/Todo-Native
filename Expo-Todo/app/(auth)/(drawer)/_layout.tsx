import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/styles';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { Link, useNavigation } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CustomDrawerContent = (props: any) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View style={{ backgroundColor: '#fff', paddingBottom: 16 }}>
        <View style={defaultStyles.searchSection}>
          <Ionicons
            style={defaultStyles.searchIcon}
            name='search'
            size={20}
            color={Colors.greyLight}
          />
          <TextInput
            style={defaultStyles.input}
            placeholder='Search'
            underlineColorAndroid='transparent'
          />
        </View>
      </View>
      {/* Give the custom view any props that is passed to it */}
      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 0 }}
        {...props}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{ padding: 16, paddingBottom: bottom }}>
        <Link href={'/(auth)/(modal)/settings'} asChild>
          <TouchableOpacity style={styles.footer}>
            <Ionicons
              style={defaultStyles.searchIcon}
              name='person-outline'
              size={30}
              color={Colors.greyLight}
            />
            <Text style={styles.userName}>Dennis Jensen</Text>
            <Ionicons
              style={defaultStyles.searchIcon}
              name='ellipsis-horizontal'
              size={20}
              color={Colors.greyLight}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const DrawerLayout = () => {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            style={{ marginLeft: 16 }}
          >
            <FontAwesome6 name='grip-lines' size={20} color={Colors.grey} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: Colors.selected,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#000',
        overlayColor: 'rgba(0, 0, 0, 0.2)',
        drawerItemStyle: { borderRadius: 12 },
        drawerLabelStyle: { marginLeft: -20 },
        drawerStyle: { width: dimensions.width * 0.86 },
      }}
    >
      <Drawer.Screen
        name='(lists)/new'
        options={{
          title: 'New List',
          drawerIcon: () => (
            <View style={[styles.item]}>
              <Ionicons name='add-outline' size={24} color={Colors.greyLight} />
            </View>
          ),
          headerRight: () => (
            <Link href={'/(auth)/(drawer)/(lists)/new'} push asChild>
              <TouchableOpacity>
                <Ionicons
                  name='create-outline'
                  size={24}
                  color={Colors.greyLight}
                  style={{ marginRight: 16 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <Drawer.Screen
        name='just-checked'
        options={{
          title: 'Recently Checked',
          drawerIcon: () => (
            <View style={[styles.item]}>
              <Ionicons
                name='checkmark-outline'
                size={24}
                color={Colors.greyLight}
              />
            </View>
          ),
          headerRight: () => (
            <Link href={'/(auth)/(drawer)/(checked)/all-checked'} push asChild>
              <TouchableOpacity>
                <Ionicons
                  name='list-outline'
                  size={24}
                  color={Colors.greyLight}
                  style={{ marginRight: 16 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  btnImage: {
    margin: 6,
    width: 16,
    height: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
});

export default DrawerLayout;

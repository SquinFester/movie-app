import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { Ionicons, Foundation, FontAwesome5 } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute', borderTopWidth: 0 },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarBackground: () => <BlurView tint='dark' intensity={80} style={StyleSheet.absoluteFill} />,
    }}
  >
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={28}
            color={focused ? 'white' : 'rgba(255,255,255,0.7)'}
          />
        ),
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Foundation name='magnifying-glass' size={28} color={focused ? 'white' : 'rgba(255,255,255,0.6)'} />
        ),
      }}
    />
    <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name={focused ? 'user-alt' : 'user'}
            size={28}
            color={focused ? 'white' : 'rgba(255,255,255,0.7)'}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

export const Navigation = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
)

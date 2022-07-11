import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import ProfileScreen from "./ProfileScreen";


const Tab = createBottomTabNavigator();
// tabbar 导航方式
// https://reactnavigation.org/docs/tab-based-navigation
export const HomeTabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;

                switch (route.name) {
                    case 'Home':
                        iconName = focused
                            ? require('../screen/assets/tabbar/icon_sx_active.png')
                            : require('../screen/assets/tabbar/icon_sx.png');
                        break;
                    case 'Details':
                        iconName = focused
                            ? require('../screen/assets/tabbar/icon_msg_active.png')
                            : require('../screen/assets/tabbar/icon_msg.png');
                        break;
                    case 'Mine':
                        iconName = focused
                            ? require('../screen/assets/tabbar/icon_mine_active.png')
                            : require('../screen/assets/tabbar/icon_mine.png');
                        break;
                }

                return <Image source={iconName} style={{
                    width: 24,
                    height: 24,
                    resizeMode: 'cover',
                }} />;
            },
            tabBarActiveTintColor: '#3577FF',
            tabBarInactiveTintColor: '#333333',
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen
            name="Details"
            component={DetailScreen}
            options={{ tabBarBadge: 3, title: 'Massage' }}
        />
        <Tab.Screen name="Mine" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
);

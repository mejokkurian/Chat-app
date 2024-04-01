import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./Stack";
import { SettingStack } from "./Stack";
import { AuthStackSCreen } from "./Stack";
import LoginScreen from "@/screen/Authenications/Login";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={() => {
        return {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "#000000",
          },
        };
      }}
    >
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
        name="Login"
        component={AuthStackSCreen}
      />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MyTabs;

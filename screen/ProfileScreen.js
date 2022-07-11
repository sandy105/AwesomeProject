import * as React from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../App";

function ProfileScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

export default ProfileScreen;

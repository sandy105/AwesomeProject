import * as React from "react";
import { Button, TextInput, View } from "react-native";
import HomeScreen from "./HomeScreen";
import { AuthContext } from "../App";
function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{padding: 10}}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{padding: 10}}
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })}  style={{padding: 10}}ya />
    </View>
  );
}
export default SignInScreen;

import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";
import CrosswordGrid from "./CrosswordGrid";

const HomeScreen = ({ onStartGame, onLogin, onSignUp, isLogin, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSignUp(username, password);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.homeContainer}>
      <Image
        source={require("./crossword_image.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      )}
      {isLogin ? (
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={switchMode} style={styles.switchButton}>
        <Text style={styles.switchButtonText}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [crosswordData, setCrosswordData] = useState([]);
  const [users, setUsers] = useState([
	{username: 'suraj', password: 'password1'}
  ]);
  const [isLogin, setIsLogin] = useState(true);

  const startGame = () => {
    // Initialize your crossword data here
    setCrosswordData([
      [
        {
          answer: "TIGER",
          hint: "The powerful predator roams the jungle",
          startx: 4,
          starty: 1,
          orientation: "down",
          position: 1,
        },
        {
          answer: "EAGLE",
          hint: "A majestic bird known for its keen eyesight",
          startx: 4,
          starty: 4,
          orientation: "across",
          position: 2,
        },
        {
          answer: "ITALIC",
          hint: "It's a style of typeface characterized by slanted letters",
          startx: 7,
          starty: 1,
          orientation: "down",
          position: 3,
        },
        {
          answer: "INFINITE",
          hint: "It describes something boundless or limitless in extent or quantity",
          startx: 1,
          starty: 2,
          orientation: "across",
          position: 4,
        },
      ],
      [
        {
          answer: "QUIVER",
          hint: "To shake or tremble slightly, often with rapid movements",
          startx: 1,
          starty: 4,
          orientation: "across",
          position: 1,
        },
        {
          answer: "TWIRL",
          hint: "To spin or rotate quickly",
          startx: 3,
          starty: 2,
          orientation: "down",
          position: 2,
        },
        {
          answer: "GAZE",
          hint: `To look steadily and intently at something,
            often implying concentration or contemplation`,
          startx: 5,
          starty: 1,
          orientation: "down",
          position: 3,
        },
        {
          answer: "FLUTE",
          hint: "A musical instrument with a high-pitched sound",
          startx: 2,
          starty: 6,
          orientation: "across",
          position: 4,
        },
      ],
    ]);
    setGameStarted(true);
  };

  const handleLogin = (username, password) => {
    // Simple validation for demonstration purpose
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    // Check if the user exists in the array of users
    const userExists = users.some((user) => user.username === username && user.password === password);
    if (userExists) {
      startGame();
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = (username, password) => {
    // Simple validation for demonstration purpose
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    // Check if the username already exists
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Username already exists");
      return;
    }

    // Add the new user to the users array
    const newUser = { username, password };
    setUsers([...users, newUser]);

    // Start the game
    //startGame();
	setIsLogin(true);
  };

  return (
    <View style={styles.container}>
      {gameStarted ? (
        <CrosswordGrid crosswordData={crosswordData} />
      ) : (
        <HomeScreen onStartGame={startGame} onLogin={handleLogin} onSignUp={handleSignUp} isLogin={isLogin} setIsLogin={setIsLogin}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  switchButton: {
    marginBottom: 10,
  },
  switchButtonText: {
    color: "blue",
  },
});

export default App;
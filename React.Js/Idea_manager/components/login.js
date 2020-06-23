import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from "react-redux";

class Login extends React.Component {
    
  static navigationOptions = {
    headerTitle: 'Login To Submit a new Idea',
  }

  state = {
      userId: '',
      password: '',
      errorMessage: 'Login :',
  };

  moveAddIdea = (response) => {
    response.json().then(data => {
      data.result == 'success' ? 
        this.props.navigation.navigate('AddIdea') :
        this.setState({errorMessage: 'UserName or Password Incorrect!'});
    });
  }

  loginApplication = () => {
    
    fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      response.status == 200 ? 
        this.moveAddIdea(response) : 
        this.setState({errorMessage: 'UserName or Password Incorrect!'})
      })
      .catch(this.setState({ errorMessage: 'Error Occured' }));
  }

    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to Idea Manager!</Text>
              <Text style={styles.instructions}>{this.state.errorMessage}</Text>
              <TextInput placeholder="User ID"
                style={styles.textbox}
                onChangeText={text => this.setState({ userId : text})}
                autocompletetype='username' />

              <TextInput placeholder="Password"
                style={styles.textbox}
                onChangeText={text => this.setState({ password : text})}
                autocompletetype='password' 
                secureTextEntry/>

              <Button title="Login" onPress={() => this.loginApplication()}/>
            </View>
          );
    }
}

let LoginComponent = connect()(Login);
export default LoginComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textbox: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    }
  });
  

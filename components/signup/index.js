
import Logo from '../../assets/logo.png' ;
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as Facebook from 'expo-facebook'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config'

const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(password);
  console.log(email);
  const loginWithFaceBook= async()=>{
    try {
      await Facebook.initializeAsync({
        appId: '653743288669029',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,picture.type(large)`);
         let userData = await response.json()

         const {
          id,
          name,
          picture: {
            data: { url },
          },
        } = userData;
        console.log(url)
        firebase.firestore().collection('users').add({id, name,url}).then(res=>{
          alert('Data Sent')
        }).catch((e)=>{
          alert(e.message)
        })

         props.navigation.navigate('Home')
        // alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            borderColor: 'black',
            // borderBottomWidth: 2,
            // borderTopWidth: 2,
            alignItems: 'center',
          }}>
          <View>
            <Image source={Logo} style={styles.logo} />
          </View>
          <View>
            <Text style={{fontSize: 40}}>SIGN UP</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{}}>
              <TextInput
                placeholder="First name"
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={{}}>
              <TextInput
                placeholder="Last name"
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={{}}>
              <TextInput
                placeholder="Username"
                style={styles.input}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View>
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View style={styles.check}>
            <View>
              <CheckBox />
            </View>
            <View style={{marginTop: 6}}>
              <Text>I Agree to the terms and conditions</Text>
            </View>
          </View>
          <View><Text onPress={() => props.navigation.navigate('Login')} style={{textDecorationLine:"underline", color:"blue"}}>Already An Account?</Text></View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.4,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              <View style={styles.facebook}>
                <TouchableOpacity
                onPress={loginWithFaceBook}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="facebook"
                    color="white"
                    size={30}
                    ></Icon>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text> </Text>
              </View>
              <View style={styles.google}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="google"
                    color="white"
                    size={30}
                    onPress={() => alert('Login with Facebook')}></Icon>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  facebook: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 30,
    backgroundColor: 'blue',
  },
  google: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 30,
    backgroundColor: 'maroon',
  },
  check: {
    // flex:1,
    flexDirection: 'row',
  },
  button: {
    // flex:1,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#C72323',
    marginTop: 20,
  },
  inputContainer: {
    width: 350,
    padding: 10,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  input: {
    padding:10,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderRadius: 4,
    borderColor: 'grey',
  },
  logo: {
    width: 150,
    height: 150,
    borderTopWidth: 10,
    borderColor: 'black',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: '34',
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Signup;
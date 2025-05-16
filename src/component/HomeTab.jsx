import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeTab = () => {
  const handleSubmit = () => {

  }
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../img/catalift_task_img.png')} style={styles.img} />
      <View style={styles.paddingAll}>
        <View style={styles.headSec}>
          <Text style={[styles.hPrimary, styles.color]}>
            CATA
            <Text style={styles.hPrimaryBorder}>LIFT</Text>
          </Text>
          <Text style={[styles.hSecondary, styles.color]}>Give your Career an EXTRA boost</Text>
        </View>
        <View>
          <View style={[styles.logInHead]}>
            <Text style={[styles.color, styles.signInText]}>Sign-In</Text>
            <TouchableOpacity onPress={() => 'Link Privacy Policy'}>
              <Text style={[styles.color, styles.underline]}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.inputArea}
              placeholder="Phone Number"
              placeholderTextColor='rgba(131, 131, 163, 0.88)'
            />
            <TextInput
              style={styles.inputArea}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor='rgba(131, 131, 163, 0.88)'
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => 'Link Forget Password'}>
              <Text style={[styles.underline, styles.forgetPassword]}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnSignIn]} onPress={handleSubmit}>
              <Text style={[styles.btnText]}>Sign-In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpTab}>
            <Text style={[styles.signUpText]}>Don't Have An Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.color, styles.underline , styles.signUpBtn]}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: 'white',
  },
  img: {
    height: 308,
    width: '100%',
  },
  headSec: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    paddingTop: 20,
    paddingBottom: 40,
  },
  hPrimary: {
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hPrimaryBorder: {
    fontWeight: '400',

  },
  hSecondary: {
    fontSize: 20,
    fontWeight: '700'
  },
  color: {
    color: 'rgb(2, 2, 114)',
  },
  underline: {
    textDecorationLine: 'underline'
  },
  paddingAll: {
    padding: 20
  },
  logInHead: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signInText: {
    fontSize: 18,
    fontWeight: '600'
  },
  inputArea: {
    borderColor: 'rgba(109, 109, 172, 0.63)',
    borderWidth: 1.4,
    padding: 15,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    fontSize: 11,
  },
  forgetPassword: {
    opacity: 0.3,
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'right'
  },
  btnSignIn: {
    backgroundColor: 'rgb(2, 2, 114)',
    padding: 12,
    marginTop: 10,
    borderRadius: 12
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    textAlign:'center'
  },
  signUpTab:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  signUpText:{
    opacity: 0.3,
    fontSize:15,
    fontWeight:'500',
    paddingRight:10
  },
  signUpBtn:{
    fontSize: 18,
    fontWeight: '500'
  }

});

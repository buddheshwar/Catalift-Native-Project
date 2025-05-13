import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./src/img/catalift_task_img.png')} style={styles.img} />
      <View style={styles.headSec}>
        <Text style={styles.hPrimary}>
          CATA 
          <Text style={styles.hPrimaryBorder}>LIFT</Text>
        </Text>
        <Text>Give your Career an EXTRA boost</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: 'white',
  },
  img: {
    height: 300,
    width: '100%',
  },
  headSec: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    paddingTop: 40,
    paddingBottom: 40,
  },
  hPrimary: {
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 3,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  hPrimaryBorder: {
    fontWeight: '400',
    color: 'blue',
   
  }
  
  });

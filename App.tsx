/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App(): JSX.Element {

  let marka="Ford";
  let model="Mustang";
  let renk="Kirmizi"
  let mesaj=`Benim bir ${marka} marka ${model} model ${renk} renkte bir aracim var.`;


  return (
    <SafeAreaView >
      <View>
        <Text style={styles.myText}>{mesaj}</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  myText: {
    marginTop:50,
    textAlign:'center',
    color: 'blue',
    backgroundColor: 'gray'
  },
});

export default App;

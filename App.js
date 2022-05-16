import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

const App = () => {
  return(
    <View>
        <Text>Anton wijia</Text>
        <Text>Anton wijia</Text>
        <Text>Anton wijia</Text>
        <View style={styles.ads}>
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ads : {
    position: "relative",
    bottom: 0,
    alignSelf: "center",
  }
});

export default App;
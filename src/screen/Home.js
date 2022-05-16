import React, { useRef } from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Home = ({ navigation }) => {
  
  const [umur, setUmur] = React.useState(0);
  const [kelamin, setKelamin] = React.useState('pria');
  const [tinggi, setTinggi] = React.useState(0);
  const [berat, setBerat] = React.useState(0);
  const [tujuan, setTujuan] = React.useState('menjaga');
  const [aktifitas, setAktifitas] = React.useState('menetap');
  const [result, setResult] = React.useState(false);
  const [bmr, setBmr] = React.useState(0);
  const [tdee, setTdee] = React.useState(0);
  const [tujuanHitungFinal, setTujuanHitungFinal] = React.useState(0);

  const ResultTdee = () => {

    if(umur == '' || tinggi == '' || berat == '') {
      Alert.alert("Message", "Semua form wajib di isi");
      return;
    }

    setResult(true);
    if(kelamin === 'pria'){
       const result = (tinggi * 6.25) + (berat * 9.99) - (umur * 4.92) + 5;
       const dataResult = parseInt(result);
       switch (aktifitas) {
        case "menetap":
           const tdee = dataResult * 1.2;
           setTdee(tdee);
           break;
        case "sedikit":
          const tdeeSedikit = dataResult * 1.375;
          setTdee(tdeeSedikit);
           break;
        case "cukup":
            const tdeeCukup = dataResult * 1.55;
            setTdee(tdeeCukup);
             break;
        case "sangat":
            const tdeeSangat = dataResult * 1.725;
            setTdee(tdeeSangat);
              break;
          default:
            const tdeeEkstra = dataResult * 1.9;
            setTdee(tdeeEkstra);
              break;
       }
       setBmr(dataResult);
    }else{
      const result = (tinggi * 6.25) + (berat * 9.99) - (umur * 4.92) - 161;
      const dataResult = parseInt(result);
      switch (aktifitas) {
        case "menetap":
           const tdee = dataResult * 1.2;
           setTdee(tdee);
           break;
        case "sedikit":
          const tdeeSedikit = dataResult * 1.375;
          setTdee(tdeeSedikit);
           break;
        case "cukup":
            const tdeeCukup = dataResult * 1.55;
            setTdee(tdeeCukup);
             break;
        case "sangat":
            const tdeeSangat = dataResult * 1.725;
            setTdee(tdeeSangat);
              break;
          default:
            const tdeeEkstra = dataResult * 1.9;
            setTdee(tdeeEkstra);
              break;
       }
       setBmr(dataResult);
    }
  }
  const ResetForm = () => {
    setResult(false);
    setUmur(0);
    setKelamin('pria');
    setTinggi(0);
    setBerat(0);
    setTujuan('menjaga');
    setAktifitas('menetap');
    setBmr(0);
    setTdee(0);
    setTujuanHitungFinal(0);
    
  }
  
    return(
    <View style={{ backgroundColor: "#AED6F1"}}>
      <View style={{margin:20}}>
        <View style={{flexDirection: "row"}}>
          <View style={{marginRight: 30}}>
            <Text>Umur</Text>
            <TextInput keyboardType="numeric" style={styles.TextInput} placeholder="Umur (th)" onChangeText={(umur) => setUmur(umur)} value={umur.toString()}/>
          </View>
          <View>
          <Text>Jenis Kelamin</Text>
          <Picker selectedValue={kelamin} style={styles.TextInput} onValueChange={(itemValue, itemIndex) => setKelamin(itemValue)}>
            <Picker.Item label="Pria" value="pria"/>
            <Picker.Item label="Wanita" value="wanita"/>
          </Picker>
          </View>
        </View>
      {/* row 2 */}
        <View style={{flexDirection: "row"}}>
          <View style={{marginRight: 30}}>
            <Text>Tinggi Badan</Text>
            <TextInput keyboardType="numeric" style={styles.TextInput} placeholder="Tinggi (Cm)" onChangeText={(tinggi) => setTinggi(tinggi)} value={tinggi.toString()}/>
          </View>
          <View>
          <View>
            <Text>Berat Badan</Text>
            <TextInput keyboardType="numeric" style={styles.TextInput} placeholder="Berat (Kg)" onChangeText={(berat) => setBerat(berat)} value={berat.toString()}/>
          </View>
          </View>
        </View>
        {/* Row 3 */}
        <View style={{flexDirection: "column"}}>
          <View>
            <Text>Apa Tujuanmu</Text>
            <Picker selectedValue={tujuan} onValueChange={(itemValue, itemIndex) => {
              setTujuan(itemValue);
              switch (itemValue) {
                case "menjaga" : 
                  setTujuanHitungFinal(0);
                  break;
                case "menurunkan" : 
                  setTujuanHitungFinal(-500);
                  break;
                default :
                  setTujuanHitungFinal(500);
                  break;
              }
            }}>
              <Picker.Item label="Menjaga Berat Badan" value="menjaga" />
              <Picker.Item label="Menurunkan Berat Badan" value="menurunkan" />
              <Picker.Item label="Menambahkan Berat Badan" value="Menambahkan" />
            </Picker>
          </View>
          <View>
          <Text>Tingkat Aktifitas</Text>
          <Picker selectedValue={aktifitas} onValueChange={(itemValue, itemIndex) => setAktifitas(itemValue)}>
            <Picker.Item label="Ekstra aktif" value="ekstra"/>
            <Picker.Item label="Sangat aktif" value="sangat"/>
            <Picker.Item label="Cukup aktif" value="cukup"/>
            <Picker.Item label="Sedikit Aktif" value="sedikit"/>
            <Picker.Item label="Menetap" value="menetap"/>
          </Picker>
          </View>
        </View>
        <Button title="Hitung" onPress={() => {ResultTdee();}}/>
        <Button title="Reset" color="red" onPress={() => ResetForm()}/>
        { (result === true) ? 
        <View style={{marginTop:10}}>
          <View style={{marginVertical:10, flexDirection: 'row', borderBottomColor: "#000000", borderBottomWidth: 1}}>
            <Text style={{flex: 0.8}}>Tdee </Text>
            <Text>{parseInt(tdee)} Kalori/Hari</Text>
          </View>
          <View style={{marginVertical:10, flexDirection: 'row', borderBottomColor: "#000000", borderBottomWidth: 1}}>
            <Text style={{flex: 0.8}}>BMR </Text>
            <Text>{bmr} Kalori/Hari</Text>
          </View>
          <View style={{marginVertical:10, flexDirection: 'row', borderBottomColor: "#000000", borderBottomWidth: 1}}>
            <Text style={{flex: 0.8}}>Tujuan {tujuan} </Text>
            <Text> {parseInt(tdee + tujuanHitungFinal)} Kalori/Hari</Text>
          </View>
          <View style={{marginVertical:10, flexDirection: 'row', borderBottomColor: "#000000", borderBottomWidth: 1}}>
            <Text style={{flex: 0.8}}>Umur </Text>
            <Text>{umur} th</Text>
          </View>
        </View>
        : <Text></Text>}
      </View>
      <View>
      </View>
    </View>
    )
  }
const styles = StyleSheet.create({
  TextInput : {
    borderWidth: 1,
    borderColor: "#95A5A6",
    height: 42,
    width: 145,
    borderRadius: 6,
    marginVertical: 5,
  },
});

export default Home;
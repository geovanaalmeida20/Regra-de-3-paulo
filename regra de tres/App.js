import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, TextInput, Button} from
'react-native';

const App = () => {
  const [numero01, setNumero01] = useState('');
  const [numero02, setNumero02] = useState('');
  const [numero03, setNumero03] = useState('');
  const [resultado, setResultado] = useState(null);

const somar = () => {
  const mult = parseFloat(numero01) * parseFloat(numero02) / parseFloat(numero03) ;
  setResultado(mult);
};

return(
  <ScrollView style={styles.corpo}>
  <Text style={styles.titulo}>CALCULADORA</Text>
  <TextInput style={styles.input} keyboardType="numeric" placeholder="primeiro número" value={numero01} onChangeText={setNumero01}/>
  <TextInput style={styles.input} keyboardType="numeric" placeholder="segundo número" value={numero02} onChangeText={setNumero02}/>
  <TextInput style={styles.input} keyboardType="numeric" placeholder="terceiro número" value={numero03} onChangeText={setNumero03}/>

<Button title="CALCULAR" onPress={somar} />
{resultado !== null && <Text style={styles.resultado}>Resultado: {resultado} </Text> }
</ScrollView>
    );
};

const styles = StyleSheet.create({
corpo: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 30
},

titulo: {
  fontSize: 32,
  fontWeight: 'bold',
  marginBottom: 20
},

input: {
  width: '80%', 
  height: 40,
  borderColor: '#A9A9A9',
  borderWidth: 2,
  marginBottom: 20,
  paddingHorizontal: 20,
  borderRadius: 5
},

resultado: {
  fontSize: 36,
  marginTop:20,
  fontWeight: 'bold'
},


});

export default App;
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const MoneyInput = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (text) => {
    // Remove any non-numeric characters
    const sanitizedText = text.replace(/[^0-9.]/g, '');
    setAmount(sanitizedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>$</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
        value={amount}
        onChangeText={handleAmountChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignContent: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    alignSelf: 'center',
  },
});

export default MoneyInput;

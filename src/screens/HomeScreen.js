import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import TransactionItem from '../components/TransactionItem';

export default function HomeScreen() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income'); // 'income' atau 'expense'
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    if (description.trim() && amount.trim() && !isNaN(amount)) {
      setTransactions([...transactions, { description, amount: parseFloat(amount), type }]);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Pencatat Pengeluaran" />
      <TextInput
        style={styles.input}
        placeholder="Deskripsi"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Jumlah"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <View style={styles.buttonContainer}>
        <Button title="Pendapatan" onPress={() => setType('income')} color="#4caf50" />
        <Button title="Pengeluaran" onPress={() => setType('expense')} color="#f44336" />
      </View>
      <Button title="Tambah Transaksi" onPress={addTransaction} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total Saldo: Rp
          {transactions.reduce(
            (total, t) => (t.type === 'income' ? total + t.amount : total - t.amount),
            0
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  summary: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  summaryText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
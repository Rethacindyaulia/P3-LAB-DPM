import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View style={[styles.item, transaction.type === 'expense' ? styles.expense : styles.income]}>
      <Text style={styles.text}>{transaction.description}</Text>
      <Text style={styles.amount}>
        {transaction.type === 'expense' ? '-' : '+'}Rp{transaction.amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expense: {
    borderLeftWidth: 5,
    borderLeftColor: '#f44336',
  },
  income: {
    borderLeftWidth: 5,
    borderLeftColor: '#4caf50',
  },
});

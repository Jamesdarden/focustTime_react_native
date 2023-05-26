import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/size';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.item}>We haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1,
  },
  item: {
    color: colors.white,
    fontSize: spacing.md,
    marginBottom:spacing.sm,
    marginLeft: 4,
  },
  title: {
    color: colors.white,
    fontSize: spacing.md,
    // padding: spacing.md,
    fontWeight: 'bold',
    marginBottom:spacing.sm,
  },
});

import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "@/styles/Colors";

import { TabNavigation } from "@/src/components/layout/tab-navigation";
import { FastActionButton } from "@/src/components/layout/fast-action-button";
import { fastActionsMock } from "@/src/constants/mocks/fast-actions-mock";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/src/components/layout/text";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.expenseContent}>
        <Text style={styles.expenseText}>$2,589.50</Text>
        <Text style={styles.expenseSubtitle}>Despesas do Mês</Text>
      </View>
      <View style={styles.fastActionContainer}>
        <ScrollView horizontal contentContainerStyle={styles.fastActionContent}>
          {fastActionsMock.map((item, index) => (
            <FastActionButton
              key={index}
              iconName={item.iconName}
              iconSize={item.iconSize}
              title={item.title}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.transactionsContainer}>
        <View>
          <Text style={styles.recentTransactionsTitle}>
            Transações recentes
          </Text>
        </View>

        <View style={styles.transactionsFilterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Despesas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Receitas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsContent}>
          <Text style={styles.transactionsTitle}>HOJE</Text>
          <View style={styles.transactionList}>
            <View style={styles.transactionItem}>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>Ifood</Text>
              </View>
              <View style={styles.transactionAmount}>
                <Text style={styles.transactionValue}>-$50.00</Text>
                <Text style={styles.transactionDate}>Aug 26</Text>
              </View>
            </View>
            <View style={styles.transactionItem}>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>Ifood</Text>
              </View>
              <View style={styles.transactionAmount}>
                <Text style={styles.transactionValue}>-$50.00</Text>
                <Text style={styles.transactionDate}>Aug 26</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabNavigationContainer}>
        <TabNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 24,
    backgroundColor: Colors.light.base,
  },
  expenseContent: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  expenseText: {
    fontSize: 34,
    color: Colors.light.white,
    fontWeight: "bold",
  },
  expenseSubtitle: {
    fontWeight: "bold",
    color: Colors.light.veryLightBlue,
  },
  transactionsContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 24,
    backgroundColor: Colors.light.bgBlueLight,
  },
  recentTransactionsTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.light.darkBlue,
  },
  transactionsFilterContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 16,
    gap: 14,
  },
  filterButton: {
    backgroundColor: "white",
    borderRadius: 100,
    flex: 1,
    height: 30,
    justifyContent: "center",
  },
  filterButtonText: {
    color: Colors.light.darkBlue,
    textAlign: "center",
    fontWeight: "bold",
  },
  transactionsContent: {
    width: "100%",
    marginTop: 16,
  },
  transactionsTitle: {
    color: Colors.light.bgGrayDark,
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionList: {
    marginTop: 16,
    gap: 8,
  },
  transactionItem: {
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
  },
  transactionDetails: {
    flex: 1,
    justifyContent: "center",
  },
  transactionName: {
    color: Colors.light.darkBlue,
    fontSize: 22,
    fontWeight: "bold",
  },
  transactionAmount: {
    flex: 1,
  },
  transactionValue: {
    color: Colors.light.red,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  transactionDate: {
    color: Colors.light.darkGray,
    opacity: 0.4,
    fontWeight: "bold",
    textAlign: "right",
  },
  fastActionContainer: {
    paddingHorizontal: 24,
    width: "100%",
  },
  fastActionContent: {
    alignItems: "baseline",
    flexDirection: "row",
    gap: 16,
  },
  tabNavigationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

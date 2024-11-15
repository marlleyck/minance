import React from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { Colors } from "@/styles/Colors";

import { TabNavigation } from "@/src/components/layout/tab-navigation";
import { Card } from "@/src/components/layout/card";
import { FastActionButton } from "@/src/components/layout/fast-action-button";
import { fastActionsMock } from "@/src/constants/mocks/fast-actions-mock";
import { SafeAreaView } from "react-native-safe-area-context";
import { splitItemsIntoColumns } from "@/src/utils/split-items-into-columns";
import { Text } from "@/src/components/layout/text";

export function HomeScreen() {
  const ITEMS_PER_COLUMN = 3;

  const columns = splitItemsIntoColumns(fastActionsMock, ITEMS_PER_COLUMN);

  const fastActions = columns.flatMap((column, columnIndex) =>
    column.map((item, itemIndex) => ({
      id: `${columnIndex}-${itemIndex}`,
      columnIndex,
      ...item,
    }))
  );

  const renderItem: ListRenderItem<FastActionType> = ({ item, index }) => (
    <FastActionButton
      key={index}
      iconName={item.iconName}
      iconSize={item.iconSize}
      title={item.title}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContent}>
        {/* <Card /> */}
        <Text>$2000</Text>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.fastActionContainer}>
          <View style={styles.fastActionContent}>
            <FlatList
              data={fastActions}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={ITEMS_PER_COLUMN}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.contentContainerStyle}
            />
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
  cardContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  actionsContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 24,
    backgroundColor: Colors.light.bgGrayDark,
  },
  actionsContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  fastActionContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fastActionContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  contentContainerStyle: {
    gap: 40,
  },
  tabNavigationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

import React, { useState } from "react";
import { View, Dimensions, FlatList, StyleSheet } from "react-native";
import Video from "react-native-video";
import APP_LOGO from "../../assets/logo.png";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const [videos] = useState([
    { id: "1", url: "https://res.cloudinary.com/demo/video/upload/w_720/sample.mp4" },
    { id: "2", url: "https://res.cloudinary.com/demo/video/upload/w_720/sea_turtle.mp4" }
  ]);

  const renderItem = ({ item }) => (
    <View style={{ height }}>
      <Video
        source={{ uri: item.url }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
        muted={false}
        controls={false}
      />
    </View>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
}

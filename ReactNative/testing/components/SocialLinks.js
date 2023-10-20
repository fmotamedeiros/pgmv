import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  Pressable,
} from "react-native";

const Icons = {
  twitter: require("../assets/twitter.png"),
  instagram: require("../assets/instagram.png"),
};

const SocialLinks = ({ type, link, label }) => {
  const onSocialLinkPress = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.social}>
      { (type === 'twitter' || type === 'instagram') && <Pressable accessibilityRole="button" disabled>
        <Image
          source={Icons[type]}
          style={styles.icon}
        />
      </Pressable> }
      <Text onPress={onSocialLinkPress} style={styles.label}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
  },
});

export default SocialLinks;

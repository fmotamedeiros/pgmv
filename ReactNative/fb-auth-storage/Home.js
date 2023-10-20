import { StatusBar } from "expo-status-bar";
import { signOut, updateProfile } from "firebase/auth";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { auth, storage } from "./Firebase";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';

function Home() {
  
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const [image, setImage] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
    setDisplayName(auth.currentUser.displayName);
  }, [user])

  const logout = () => {
    signOut(auth)
      .catch((error) => {
        console.log(error);
      })
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const imageBlob = await getBlobFroUri(result.assets[0].uri)
     
      const imageRef = ref(storage, 'images/mountains.jpg');
      uploadBytes(imageRef, imageBlob).then(() => {
        console.log('Upload realizado...');
        getDownloadURL(imageRef).then((url) => {
          console.log("URL: " + url);
        })
      });
    }
  };

  const getBlobFroUri = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    return blob;
  };

  const updateUserInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: "Flávio Medeiros",
      photoURL: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
      phoneNumber: "(82) 98723-0354"
    })
    .then(() => {
      console.log("SIM")
      auth.currentUser.reload().then(() => {
        console.log("foi")
        setUser(auth.currentUser);
        setDisplayName(auth.currentUser.displayName);
      });
    });
  }

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      { user && <Text>{`Nome: ${displayName}`}</Text> }
      <Button title='Atualizar Perfil' onPress={updateUserInfo}></Button>
      <Button title='Sair' onPress={logout}></Button>

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
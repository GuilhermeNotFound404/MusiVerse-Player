import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { AudioContext } from '../context/AudioProvider';

export class AudioList extends Component {
  static contextType = AudioContext;

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {this.context.audioFiles.map((item) => (
          <Text style={styles.audioText} key={item.id}>
            {item.filename}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioText: {
    padding: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});

export default AudioList;

/*
renderAudioFiles() {
return this.context.audioFiles.map((audioFile) => (
<View key={audioFile.id} style={styles.audioFileContainer}>
<Text>{audioFile.filename}</Text>
{/* renderizar outras propriedades do objeto audioFile aqui }
</View>
));
}

render() {
return (
<ScrollView contentContainerStyle={styles.scrollViewContainer}>
{this.renderAudioFiles()}
<View style={styles.container}>
<Text>AudioList</Text>
</View>
</ScrollView>
);
}
*/
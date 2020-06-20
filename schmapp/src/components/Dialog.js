import React from 'react';
import {View} from 'react-native';
import Dialog from 'react-native-dialog';

export default function({open, onChange, onSend, onCancel, value}) {
  return (
    <View>
      <Dialog.Container visible={open}>
        <Dialog.Title>Reason</Dialog.Title>
        <Dialog.Description>
          Please provide reason of your Tap Out.
        </Dialog.Description>
        <Dialog.Input
          value={value}
          onChangeText={text => {
            onChange(text);
          }}
          autoFocus
        />
        <Dialog.Button onPress={onSend} label="Send" />
        <Dialog.Button
          onPress={() => {
            onCancel(false);
          }}
          label="Cancel"
        />
      </Dialog.Container>
    </View>
  );
}

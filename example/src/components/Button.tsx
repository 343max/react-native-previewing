import React, { FC } from 'react'
import {
  TouchableHighlight,
  Text,
  Alert,
  StyleProp,
  ViewStyle,
} from 'react-native'
import type { PreviewProvider } from 'src/preview-provider'

type ButtonProps = {
  title: string
  onPress: () => void
  disabled?: boolean
  backgroundColor?: string
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  backgroundColor = '#0089d7',
}) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor: !disabled ? backgroundColor : 'rgba(128,128,128,0.4)',
    borderRadius: 5,
    padding: 10,
  }

  return (
    <TouchableHighlight
      style={buttonStyle}
      onPress={disabled ? undefined : onPress}
    >
      <Text
        style={{
          textAlign: 'center',
          color: !disabled ? '#fff' : 'rgba(0,0,0,0.3)',
          fontWeight: '400',
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </TouchableHighlight>
  )
}

export const ButtonPreview: PreviewProvider = () => [
  <Button
    title="Hello!"
    onPress={() => {
      Alert.alert('Hello to!')
    }}
  />,
  <Button
    title="Hello 2!"
    disabled={true}
    onPress={() => {
      Alert.alert('Hello to!')
    }}
  />,
  <Button
    title="Hello 🍊!"
    onPress={() => {
      Alert.alert('Hello, orange!')
    }}
    backgroundColor="orange"
  />,
]

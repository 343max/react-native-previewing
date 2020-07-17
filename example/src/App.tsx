import React, { FC } from 'react'
import { StyleSheet, View, Text, TextProperties } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

const App: FC = () => {
  const Paragraph: FC<TextProperties> = ({ children, style, ...props }) => (
    <Text style={[{ paddingTop: 10 }, style]} {...props}>
      {children}
    </Text>
  )

  return (
    <View style={styles.container}>
      <View>
        <Paragraph>This is the app. How do I get to see the preview?</Paragraph>
        <Paragraph>- Make sure you are using VSCode</Paragraph>
        <Paragraph>- Command-P to Button.tsx</Paragraph>
        <Paragraph>
          - See ButtonPreview at the very bottom of the file? That's where all
          the previews are.
        </Paragraph>
        <Paragraph>
          - Hit Command-Shift-P → Run Task → Preview: Show Preview for component
          in current file
        </Paragraph>
      </View>
    </View>
  )
}

export default App

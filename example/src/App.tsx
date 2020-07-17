import React, { FC } from 'react'
import { View, Text, TextProperties, SafeAreaView } from 'react-native'

const App: FC = () => {
  const Paragraph: FC<TextProperties> = ({ children, style, ...props }) => (
    <Text style={[{ paddingTop: 10, fontSize: 18 }, style]} {...props}>
      {children}
    </Text>
  )

  return (
    <SafeAreaView>
      <View style={{ padding: 40 }}>
        <Paragraph>This is the app. How do I get to see the preview?</Paragraph>
        <Paragraph>
          - Open the project in VSCode (not the example dir, the whole dir so
          you can see the .vscode dir at the very top.
        </Paragraph>
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
    </SafeAreaView>
  )
}

export default App

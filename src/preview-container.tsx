import React, { FC, ReactElement } from 'react'
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native'
import type { PreviewProvider } from './preview-provider'

interface PreviewDescription {
  generator: PreviewProvider
  generatorName: string
  path: string
}

interface PreviewContainerProps {
  previewDescription: PreviewDescription
}

export const PreviewContainer: FC<PreviewContainerProps> = ({
  previewDescription,
}) => {
  const elements = (() => {
    if (typeof previewDescription.generator !== 'function') {
      return [
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {`${previewDescription.generatorName} is not a function\nSource: ${previewDescription.path}`}
          </Text>
        </View>,
      ]
    }
    const generatedElements = previewDescription.generator()
    if (generatedElements instanceof Array) {
      return generatedElements
    } else {
      return [generatedElements]
    }
  })()

  const style: StyleProp<ViewStyle> = {
    padding: elements.length === 1 ? 0 : 10,
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {elements.map((element, index) => (
          <View key={index} style={style}>
            {element}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export const previewingRootComponent = (
  preview: PreviewDescription
): (() => ReactElement) | null => {
  if (!preview) {
    return null
  } else {
    return function previewingRootContainer() {
      return (
        <PreviewContainer previewDescription={preview as PreviewDescription} />
      )
    }
  }
}

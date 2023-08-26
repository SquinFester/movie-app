import { StyleSheet, Image, ImageResizeMode, ImageStyle } from 'react-native'

type FetchedImageProps = {
  source: string
  alt: string
  resizeMode?: ImageResizeMode
  imageStyles?: ImageStyle
}

export const FetchedImage = ({ source, alt, resizeMode, imageStyles }: FetchedImageProps) => (
  <Image
    source={{ uri: `https://image.tmdb.org/t/p/w500${source}` }}
    alt={alt}
    resizeMode={resizeMode}
    style={{ ...styles.image, ...imageStyles }}
  />
)

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})

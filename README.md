# react-native-avatar
An Avatar Component for React Native

## Exemples

## Dependencies
you need to have these following libraries:
- `react-native-svg`
- `react-native-fast-image'

## Component
### Props
List of props:
- `src?`: [string] Http url of the image
- `imgSize?`: [{ width: number; height: number }] Image size (width and height). By default 50
- `variant?`: ['circle' | 'circular' | 'rounded' | 'square'] Image shape
- `withPlatformIcon` : [boolean] with PlatformIcon
- `platformIconPosition?` : ['top-left' | 'top-right' | 'bottom-left' | 'bottom-right'] Platform icon position
- `platformIcon?` [JSX.Element]

## Usage
By default, Avatar component is `variant={'circle'}` and if `withPlatformIcon={true}`, `platformIconPosition={'bottom-right'}` 
and image size is `width={50}` and `height={50}`

Without PlatformIcon :
```js
import Avatar from 'react-native-avatar'

const ProfilePic: React.FC<Props> = ({...props}) => {
	return (
		<Avatar
			src={props.src}
			withPlatformIcon={false}
		/>
	)
}
```

Whith PlatformIcon : 
```js
import Avatar from 'react-native-avatar'

const ProfilePic: React.FC<Props> = ({...props}) => {
	return (
		<Avatar
			src={props.src}
			imgSize={width: 30, height: 30}
			withPlatformIcon={true}
			variant={'circle'}
			platformIconPosition={'top-left'}
			platformIcon={<></>}
		/>
	)
}
```
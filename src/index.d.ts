declare module "react-native-avatar" {
	import React, { useState } from 'react'
	import { View } from 'react-native'
	import { SvgXml } from 'react-native-svg'
	import FastImage from 'react-native-fast-image'
	import { useStyles } from 'avatar.css'


	interface Props {
		/* Profile picture source */
		src?: string
		/* Image size (width and height) */
		imgSize?: { width: number; height: number }
		/* Avatar variant */
		variant?: 'circle' | 'circular' | 'rounded' | 'square'
		/* Avatar with platform icon */
		withPlatformIcon: boolean
		/* Platform icon position */
		platformIconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
		/* Platform icon component */
		platformIcon?: JSX.Element
	}

	const Avatar: React.FC<Props> = ({
		src,
		imgSize,
		variant = 'circle',
		withPlatformIcon,
		platformIconPosition = 'bottom-right',
		platformIcon,
	}) => {
		const styles = useStyles()
		const [loadingError, setLoadingError] = useState<boolean>(false)

		/* Image Size */
		let imageSize = imgSize ? imgSize : styles.imgSizeDefault

		/* Image Style */
		let styleImg
		switch (variant) {
			case 'circle':
				styleImg = styles.imgCircle
				break
			case 'square':
				styleImg = styles.imgSquare
				break
		}

		/* Platform Icon Style */
		let stylePlatformIcon
		switch (platformIconPosition) {
			case 'top-left':
				stylePlatformIcon = styles.platformIconPositionTopLeft
				break
			case 'top-right':
				stylePlatformIcon = styles.platformIconPositionTopRight
				break
			case 'bottom-left':
				stylePlatformIcon = styles.platformIconPositionBottomLeft
				break
			case 'bottom-right':
				stylePlatformIcon = styles.platformIconPositionBottomRight
				break
		}

		if (src === undefined || src === '' || loadingError) {
			return (
				<>
					<View style={styles.container}>
						<SvgXml
							xml={require('avatar.svg')}
							width={imageSize.width}
							height={imageSize.height}
						/>
					</View>
					{withPlatformIcon && (
						<View style={[styles.platformIcon, stylePlatformIcon]}>{platformIcon}</View>
					)}
				</>
			)
		} else {
			return (
				<>
					<View style={styles.container}>
						<FastImage
							source={{
								uri: src,
							}}
							style={[imageSize, styleImg]}
							onError={() => setLoadingError(true)}
						/>
					</View>
					{withPlatformIcon && (
						<View style={[styles.platformIcon, stylePlatformIcon]}>{platformIcon}</View>
					)}
				</>
			)
		}
	}

	export default Avatar
}

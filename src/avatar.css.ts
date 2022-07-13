import { createStyles, Theme } from 'core/config/theme'

export const useStyles = createStyles((theme: Theme) => ({
    container: {
        alignItems: 'center',
    },
    // Image
    imgSizeDefault: {
        height: 50,
        width: 50,
    },
    imgCircle: {
        borderRadius: 50,
    },
    imgSquare: {
        borderRadius: 0,
    },
    // Platform Icon
    platformIcon: {
        zIndex: 10,
        position: 'absolute',
        width: 22,
        height: 22,
    },
    platformIconPositionTopLeft: {
        top: -4,
        left: '0%',
    },
    platformIconPositionTopRight: {
        top: -4,
        left: '56%',
    },
    platformIconPositionBottomLeft: {
        bottom: -4,
        left: '0%',
    },
    platformIconPositionBottomRight: {
        bottom: -4,
        left: '56%',
    },
}))

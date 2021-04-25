import { useSpring } from 'react-spring'


// title에 animation을 부여하는 코드
export const title = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {duration: 2000},
})

 // start button에 animation을 부여하는 코드
export const startButton = useSpring({
    opacity: 1,
    from: {opacity: 0},
    delay: 1500,
})

// rank button에 animation을 부여하는 코드
export const rankButton = useSpring({
    opacity: 1,
    from: {opacity: 0},
    delay: 2000,
})
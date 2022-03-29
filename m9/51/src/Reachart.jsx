import './App.css';
import MyLineChart from './reachart/MyLineChart/MyLineChart';
import SpecialChart from './reachart/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function Reachart() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip),
    })

    return (
        <div className="App">
            <animated.div style={props}>I will fade in</animated.div>
            <MyLineChart />
            <SpecialChart />
        </div>
    );
}

export default Reachart;
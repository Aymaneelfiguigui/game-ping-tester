import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function Meter(props) {
    return (
        <div class = "meter">
            <CircularProgressbar value={props.value} text={`${props.value} ms`} />   
        </div>
    )

}
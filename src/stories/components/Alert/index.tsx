import React, {FC} from 'react';
import './Alert.css';

export interface AlertProps {
    type: string
    title: string;
    description: string;
}

const Alert: FC<AlertProps> = ({type, title, description}) => {

    const setBackgroundColor = (type: string): string => {
        let color: string = 'warning';

        switch (type) {
            case 'error':
                color = 'red';
                break;
            case 'primary':
                color = 'cyan';
                break;
            default:
                color = 'yellow';
                break;
        }

        return color;
    }

    return (
        <div className='alert_wrapper' style={{'background':setBackgroundColor(type)}}>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Alert;
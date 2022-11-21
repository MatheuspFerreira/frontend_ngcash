import { Spin } from 'antd';
import './carregando.css';

export function Carregando ({textCarregando = 'Carregando'}) {
    return (
        
        <div className='carregando__content'>
            <Spin  size="large" />
            <p>{textCarregando}</p>
            
        </div>

    );
};
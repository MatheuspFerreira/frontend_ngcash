
import { LogoutOutlined, BellFilled, DollarCircleOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Tooltip } from 'antd';
import { useState } from 'react';
import logo from '../../_assets/logo-ngcash-branco.88c5860.svg';
import './home.css';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);


export function Home () {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   
    return(
        <div className='Home__container'>
            <div className='Home__header'>
                <div className='Home__headerContent'>
                    <img  className='Home__logo' src={logo} alt="logo_ng_cash" />
                    <h1>Bem vindo, {'Matheus'}</h1>

                </div>
                <div className='Home__headerContent'>
                <Tooltip title="Notificações" placement="bottom">
                    <BellFilled className='Home__bntLogOut'/>
                </Tooltip>
                <Tooltip title="Logout" placement="bottom">
                    <LogoutOutlined className='Home__bntLogOut' />
                </Tooltip>
                </div>
            </div>
            <div className='Home__content'>
                <div className='Home__firstContent'>
                    <h2><DollarCircleOutlined/> Transferir</h2>
                    <div className='Home__saldo'>
                        <p>Saldo atual</p>
                        <Input.Password
                            className='Home__saldoInput'
                            placeholder="input password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            readOnly={true}
                            value={'R$ 1200,00'}
                        />
                    </div>
                    <div>
                        <Search 
                            placeholder="Digite nome do usuário" 
                            allowClear onSearch={onSearch} 
                            
                            id='Home__search'
                        />

                    </div>

                </div>
                <h2><AppstoreOutlined /> Histórico de transações</h2>
                <div className='Home__secondContent'>
                    
                    <div className='Home__bg'>
                        <ul>
                            <li>Id</li>
                            <li>Usuário</li>
                            <li>Valor</li>
                            <li>Data</li>
                            <li>Tipo</li>
                        </ul>
                    </div>

                </div>
                
                

            </div>

        </div>

    );
}
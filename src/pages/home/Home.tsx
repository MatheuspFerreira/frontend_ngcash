
import { LogoutOutlined, BellFilled, DollarCircleOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Tooltip } from 'antd';
import { useState } from 'react';
import logo from '../../_assets/logo-ngcash-branco.88c5860.svg';
import './home.css';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);




export function Home ({data}:any) {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [user, setUser]= useState(data)

    function logOut () {
        localStorage.clear();
        window.location.reload();

    };
   
    return(
        <div className='Home__container'>
            <div className='Home__header'>
                <div className='Home__headerContent'>
                    <img  className='Home__logo' src={logo} alt="logo_ng_cash" />
                    <h1>Bem vindo, {'Matheus'}</h1>

                </div>
                <div className='Home__options'>
                <Tooltip title="Notificações" placement="bottom">
                    <BellFilled className='Home__bntLogOut'/>
                </Tooltip>
                <Tooltip title="Logout" placement="bottom">
                    <LogoutOutlined className='Home__bntLogOut' onClick={logOut}/>
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
                            placeholder="Digite nome do usuário para transferir" 
                            allowClear onSearch={onSearch} 
                            id='Home__search'
                        />

                    </div>

                </div>
                <h2><AppstoreOutlined /> Histórico de transações</h2>
                <div className='Home__secondContent'>
                    <div className='Home__bg'>
                        <div className='Home__transações'>
                            <ul>
                                <li>Id</li>
                                <li>Usuário</li>
                                <li>Valor</li>
                                <li>Data</li>
                                <li>Tipo</li>
                            </ul>
                            <ul>
                                <li>35</li>
                                <li>Matheus</li>
                                <li>R$ 200,00</li>
                                <li>15/11/2022</li>
                                <li>Cash-in</li>
                            </ul>
                        </div>
                        <div className='Home__filter'>
                            <h3>Filtrar</h3>
                            <section>
                                <label htmlFor="dentificação_do_cliente">Tipo de transação</label>
                                <Tooltip placement="bottom" title="Filtrar por">
                                    <select name="Identificação_do_cliente" required className='Cliente__options' >
                                        <option  value={"Cash-in"} >Cash-in</option>
                                        <option  value={"Cash-out"} >Cash-out</option>

                                    </select> 
                                    
                                    
                                </Tooltip>
                            </section>
                            <section>
                                <label htmlFor="date">Data da transação</label>
                                <input type="date" name='date'/>

                            </section>
                        </div>
                    </div>

                </div>
                               
            </div>

        </div>

    );
}
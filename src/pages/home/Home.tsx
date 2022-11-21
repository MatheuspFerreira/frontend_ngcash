
import { LogoutOutlined, BellFilled, DollarCircleOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Input,Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import userLogged from '../../actions/user/logged';
import logo from '../../_assets/logo-ngcash-branco.88c5860.svg';
import './home.css';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);


export function Home () {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [userData, setUserData]= useState<any>([]);
    const [typeTransaction, setTypeTransaction]= useState<string>('All');

    useEffect(() => {
        
        if(!userData.user) {
            logged();
            return;
        }

        async function logged () {
            
            setUserData(await userLogged());
           
        };
        console.log(userData)
    },[userData])

    function logOut () {
        localStorage.clear();
        window.location.reload();

    };
   
    return(
        <div className='Home__container'>
            <div className='Home__header'>
                <div className='Home__headerContent'>
                    <img  className='Home__logo' src={logo} alt="logo_ng_cash" />
                    <h1>Bem vindo, {userData.user ? userData.user.username.toString() : ""}</h1>
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
                            placeholder="Saldo"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            readOnly={true}
                            value={userData.account ? `R$ ${parseInt(userData.account.balance).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : "" }
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
                                <li>Cash-Out</li>
                                <li>Cash-In</li>
                                <li>Valor</li>
                                <li>Data</li>
                                <li>Tipo</li>
                            </ul>
                            {
                                typeTransaction === 'All' && userData.transactions
                                && 

                                userData.transactions.debited.map((current:any )=> {
                                    const formatDate = current.createdAt.split('-').reverse()

                                    return(
                                        <ul>
                                            <li>{current.id}</li>
                                            <li>Matheus</li>
                                            <li>Matheus</li>
                                            <li>{`R$ ${parseInt(current.value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</li>
                                            <li>{`${formatDate[0]}/${formatDate[1]}/${formatDate[2]}`}</li>
                                            <li>Cash-Out</li>
                                        </ul>
                                    );
                                })
                        
                            }
                            {   
                                typeTransaction === 'All' && userData.transactions
                                && 
                                
                                userData.transactions.credited.map((current:any )=> {
                                    const formatDate = current.createdAt.split('-').reverse()

                                    return(
                                        <ul>
                                            <li>{current.id}</li>
                                            <li>Matheus</li>
                                            <li>Matheus</li>
                                            <li>{`R$ ${parseInt(current.value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</li>
                                            <li>{`${formatDate[0]}/${formatDate[1]}/${formatDate[2]}`}</li>
                                            <li>Cash-In</li>
                                        </ul>
                                    );

                                })  
                            }
                            {   
                                typeTransaction === 'Cash-In' && userData.transactions
                                && 
                                
                                userData.transactions.credited.map((current:any )=> {
                                    const formatDate = current.createdAt.split('-').reverse()

                                    return(
                                        <ul>
                                            <li>{current.id}</li>
                                            <li>Matheus</li>
                                            <li>Matheus</li>
                                            <li>{`R$ ${parseInt(current.value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</li>
                                            <li>{`${formatDate[0]}/${formatDate[1]}/${formatDate[2]}`}</li>
                                            <li>Cash-In</li>
                                        </ul>
                                    );                          

                                })

                            }
                            {   
                                typeTransaction === 'Cash-Out' && userData.transactions
                                && 
                                
                                userData.transactions.debited.map((current:any )=> {
                                    const formatDate = current.createdAt.split('-').reverse()

                                    return(
                                        <ul>
                                            <li>{current.id}</li>
                                            <li>Matheus</li>
                                            <li>Matheus</li>
                                            <li>{`R$ ${parseInt(current.value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</li>
                                            <li>{`${formatDate[0]}/${formatDate[1]}/${formatDate[2]}`}</li>
                                            <li>Cash-Out</li>
                                        </ul>
                                    );
                       
                                })

                            }                           
                        </div>
                        <div className='Home__filter'>
                            <h3>Filtrar</h3>
                            <section>
                                <label htmlFor="dentificação_do_cliente">Tipo de transação</label>
                                <Tooltip placement="bottom" title="Filtrar por">
                                    <select name="Identificação_do_cliente" required className='Home__inputOptions' onChange={event=>setTypeTransaction(event.target.value)}>
                                        <option  value={"All"} >All</option>
                                        <option  value={"Cash-In"} >Cash-In</option>
                                        <option  value={"Cash-Out"} >Cash-Out</option>
                                    </select> 
                                </Tooltip>
                            </section>
                            <section>
                                <label htmlFor="date">Data da transação</label>
                                <input type="date" name='date' className='Home__inputData'/>

                            </section>
                        </div>
                    </div>

                </div>
                               
            </div>

        </div>

    );
}
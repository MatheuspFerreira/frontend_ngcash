import { LockOutlined, UserOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../actions/auth/login';
import celphoneLogo from '../../_assets/ngcash.png'
import './login.css';


export function Login () {
    const [userName, setUserName]= useState<string>('')
    const [password, setPassword]= useState<string>('')

    const navigate = useNavigate()

    async function createLogin () {
        console.log(userName)
        console.log(password)
        const getLogin = await login(userName, password)
        console.log(getLogin)
        if(getLogin?.error) {

            console.log(getLogin)
            return;
        };

        navigate(
            '/home', 
            {
                replace:true
            }
        )


    }

    


    return (
        <div className='Login__container'>
            <div className='Login__firstContent'>
                <img className='Login__celphone' src={celphoneLogo} alt="Celphone.img" />
                <div>
                    <h1>A CARTEIRA DA NOVA GERAÇÃO<br/>É para todas as idades!</h1>
                    <h2>Um pacote de benefícios.</h2>
                    <ul>
                        <li>{<StarOutlined />}Conta grátis</li>
                        <li>{<StarOutlined />}Cartão físico grátis</li>
                        <li>{<StarOutlined />}Cartão virtual grátis</li>
                        <li>{<StarOutlined />}Mesada programada </li>
                    </ul>

                </div>
            </div>
            <div className='Login__secondContent'>
                <div className='Login__form'>
                    <h3>Acessar minha conta</h3>
                    <Form
                        name="normal_login"
                        className="login-form"

                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={event => setUserName(event.target.value)}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={event=>setPassword(event.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Form.Item>
                            
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={createLogin}>
                            Entrar 
                            </Button> 
                             
                        </Form.Item>
                        
                        </Form.Item>
                            
                            <p className="login-form-forgot">
                                Esqueci minha senha
                            </p>
                            <p onClick={()=> navigate('/register', {replace:true})}>
                                Registre-se agora!
                            </p>
                        </Form.Item>
 
                    </Form>
                </div>
               
            </div>
        </div>
    )
}
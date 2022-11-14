import { LockOutlined, UserOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import logo from '../../_assets/logo-ngcash-branco.88c5860.svg';
import celphoneLogo from '../../_assets/ngcash.png'
import './login.css';


export function Login () {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


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
                <img  className='Login__logo' src={logo} alt="NG.CA$H_logo.svg" />
                <div className='Login__form'>
                    <h3>Acessar minha conta</h3>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Form.Item>
                            
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Entrar 
                            </Button> 
                             
                        </Form.Item>
                        
                        </Form.Item>
                            
                            <a className="login-form-forgot" href="/#">
                                Esqueci minha senha
                            </a>
                            <p>
                                <a href="#/"> Registre-se agora!</a>
                            </p>
                        </Form.Item>
 
                    </Form>
                </div>
               
            </div>
        </div>
    )
}
import { LockOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { Feedback } from '../../components/feedback';
import './register.css';


export function Register () {
    const [result, setResult] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return(
        <div className='Register__container'>
            <div className='Register__content'>
                <div className={ result ? '--Disable' : '' }>
                <h2>Faça parte da nova geração!</h2>
                <h3>Cadastre-se</h3>
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
                                
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Cadastrar
                        </Button> 
                                
                    </Form.Item>
                    </Form.Item>
                    </Form.Item>
    
                </Form>

                </div>
                <div className={ result ? 'Register__result' : '--Disable'}>
                <div className={ success ? 'Register__sucess' : '--Disable'}>
                <Feedback 
                    status={'success'}
                    title={'Seu cadastro foi realizado com sucesso!'}
                    subTitle={'Agora é fazer o login e aproveitar todos os benefícios'}
                    btnName={'Login'}
                    click={()=>''}
                        
                />

                </div>
                <div className={ error ? 'Register__error' : '--Disable'}>
                    <Feedback 
                        status={'error'}
                        title={'Não foi possível realizar o seu cadastro'}
                        subTitle={'Não se preocupe, você pode tentar novamente mais tarde.'}
                        btnName={'Login'}
                        click={()=>''}
                            
                    />

                </div>
                </div>
                
            </div>
            

        </div>

    );
}
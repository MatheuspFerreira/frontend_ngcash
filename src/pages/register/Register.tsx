import { LockOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import register from '../../actions/user/register';
import { Feedback } from '../../components/feedback';
import './register.css';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export function Register () {
    const [result, setResult] = useState<boolean>(false);
    const [user, setUser] = useState<any>();

    const onFinish = (values: any) => {
        setUser(values);

    };

    const openNotificationWithIcon = (type: NotificationType, message:string, description:string) => {
        notification[type]({
          message: message,
          description: description
          
        });
    };

    async function userRegister () {
        const userRegister = await register(user.username, user.password);

        if(userRegister.error){
            openNotificationWithIcon('error', 'Atenção!', userRegister.message);
            return;

        };
        setResult(true);
        
    }

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
                                
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={userRegister}>
                            Cadastrar
                        </Button> 
                                
                    </Form.Item>
                    </Form.Item>
                    </Form.Item>
    
                </Form>

                </div>
                <div className={ result ? 'Register__result' : '--Disable'}>
                <Feedback 
                    status={'success'}
                    title={'Seu cadastro foi realizado com sucesso!'}
                    subTitle={'Agora é fazer o login e aproveitar todos os benefícios'}
                    btnName={'Login'}
                    click={()=>''}
                        
                />
                </div>
                
            </div>
            

        </div>

    );
}
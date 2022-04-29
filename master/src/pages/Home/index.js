import React, { useState } from 'react'
import { Card, Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch, history, Helmet, MicroApp } from 'umi'

const HomePage = () => {

    const { isMicroApp, loginUser } = useSelector(state => state.home);
    const dispatch = useDispatch();

    const [inputUserObj, setInputUserObj] = useState({});

    const onFinish = (values) => {
        if (JSON.stringify(loginUser).indexOf(JSON.stringify(values)) !== -1) {
            history.push("/users");
            message.success("登录成功！");
        } else if (JSON.stringify(loginUser).indexOf(values.name) === -1) {
            message.warn("此用户未注册，请注册！");
            setInputUserObj(values)
            handleRegiser();
        } else {
            message.warn("密码错误，请重新输入！");
        }
    };

    const handleRegiser = () => {
        dispatch({
            type: 'home/updateState',
            payload: {
                isMicroApp: true
            }
        })
    }

    const updateLoginUser = (userObj) => {
        loginUser.push(userObj);
        dispatch({
            type: 'home/updateState',
            payload: {
                loginUser,
                isMicroApp: false
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
                <meta name="description" content='Login' />
            </Helmet>
            {!isMicroApp ? (<Card title="Login" style={{ width: '50%', margin: '0 auto', marginTop: '5%' }}>
                <Form
                    name="login-form"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={() => { message.warn("登录失败!") }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="input username" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="input password" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                            Login
                        </Button>
                        <Button type="primary" onClick={handleRegiser}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>) : (<MicroApp name="microapp1" base="/microapp1" autoSetLoading inputUserObj={inputUserObj} updateLoginUser={updateLoginUser} />)}
        </div>
    )
}

export default HomePage;
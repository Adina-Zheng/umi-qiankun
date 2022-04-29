import { Form, Input, InputNumber, Button, Image } from 'antd';
import React, { useEffect } from 'react';
import { Helmet, connectMaster } from 'umi';
import yayImg from '../../assets/yay.jpg';


const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const RegisterForm = (props) => {

    const { inputUserObj, updateLoginUser } = props;
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const { name, password } = values;
        const userObj = {
            name,
            password
        }
        updateLoginUser(userObj)
    }

    useEffect(() => {
        form.setFieldsValue(inputUserObj)
    }, [])

    return (
        <div className='welcome'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
            <Form {...layout}
                form={form}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                style={{ width: '50%', margin: '0 auto', marginTop: '5%' }}
            >
                <Form.Item
                    name='name'
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input placeholder="input name" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="input password" />
                </Form.Item>
                <Form.Item
                    name='email'
                    label="Email"
                    rules={[{ type: 'email' }]}
                >
                    <Input placeholder="input email" />
                </Form.Item>
                <Form.Item
                    name='age'
                    label="Age"
                    rules={[{ type: 'number', min: 0, max: 99 }]}
                >
                    <InputNumber placeholder="input age" />
                </Form.Item>

                <Form.Item name='introduction' label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Image
                width={200}
                src={yayImg}
            />
        </div>
    );
};

export default connectMaster(RegisterForm);
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import { Button, Form, Input, InputNumber, Select, message  } from 'antd'
import "./assets/css/training.css";

import webRequest from "../util/WebRequest";

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const TrainingApplication: React.FC<PageProps> = () => {
    const [canSubmit, setCanSubmit] = React.useState(true);
    const [messageApi, contextHolder] = message.useMessage();

    /* eslint-disable no-template-curly-in-string */
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

    /* eslint-enable no-template-curly-in-string */
    const onFinish = (values: any) => {
        //setCanSubmit(false);

        webRequest.get('https://localhost:7162/WeatherForecast').then(()=>{

        });
        // webRequest.post("/training", values).then((response)=>{
        //     messageApi.info('申请提交成功');
        // }).catch((reason)=>{
        //     messageApi.warning('申请提交失败');
        // });
        
        console.log(values);
    };

    const onGenderChange = (value: string) => {       
      };

    return (
        <>
            <Header></Header>
            <div className="training-form">
                {contextHolder}
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style = {{margin: "0 30vw 0 20vw"}}                    
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email', required:true, message: '请输入邮箱' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'mobile']} label="手机号" rules={[{ required: true, message: '请输入正确的手机号',pattern:new RegExp(/^1(3|4|5|6|7|8|9)\d{9}$/, "g") }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'wechat']} label="微信号" rules={[{ required: true, message: '请输入微信号' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'userType']} label="用户类型">
                        <Select
                            placeholder="公司"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="company">公司</Option>
                            <Option value="organization">组织</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="gender" label="性别">
                        <Select
                        placeholder="男"
                        onChange={onGenderChange}
                        allowClear
                        >
                        <Option value="male">男</Option>
                        <Option value="female">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="备注">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" disabled={!canSubmit}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default TrainingApplication

export const Head: HeadFC = () => <title>Super Brain Nova</title>
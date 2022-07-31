import React, { useCallback } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import { PHONE, SMSCODE } from '@/utils/regexp';
import Captcha from '@/components/Captcha';

import './index.less';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  const checkCode = useCallback(() => {
    const phone = form.getFieldValue('phone');
    if (!PHONE.test(phone)) {
      return false;
    }
    return true;
  }, [form]);
  const handleGetCode = () => {
    if (!checkCode()) return;
  };

  return (
    <div className="login_container">
      <div className="login_left">
        <div className="login_left-title">碳指标</div>
        <div className="login_left-title">交易系统</div>
        <div className="login_left-desc">科学发展，绿色未来</div>
      </div>
      <div className="login_right">
        <Form
          form={form}
          layout="vertical"
          validateTrigger="onBlur"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: PHONE, message: '请输入正确手机号' },
            ]}
          >
            <Input
              placeholder="请输入手机号"
              className="user_input"
              prefix={
                <span style={{ color: '#fff' }}>
                  +86
                  <Divider type="vertical" style={{ borderLeft: '1px solid #fff' }} />
                </span>
              }
            />
          </Form.Item>

          <Form.Item
            name="phonecode"
            rules={[
              { required: true, message: '请输入验证码' },
              { pattern: SMSCODE, message: '请输入正确验证码' },
            ]}
          >
            <Input
              className="user_input"
              placeholder="手机验证码"
              suffix={<Captcha onClick={handleGetCode} checkValue={checkCode} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="user_btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

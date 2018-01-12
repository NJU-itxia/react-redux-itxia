import React, { Component } from "react";
import {Editor, EditorState} from 'draft-js';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

const osSets = [{
  value: 'Windws',
  label: 'Windws',
  children: [{
    value: 'xp',
    label: 'xp',
    children: [{
      value: '64位',
      label: '64位',
    },
    {
      value: '32位',
      label: '32位',
    }]
  },
  {
    value: '7',
    label: '7',
    children: [{
      value: '64位',
      label: '64位',
    },
    {
      value: '32位',
      label: '32位',
    }]
  },
  {
    value: '10',
    label: '10',
    children: [{
      value: '64位',
      label: '64位',
    },
    {
      value: '32位',
      label: '32位',
    }]
  }],
},
{
  value: 'MacOS',
  label: 'MacOS',
  children: [{
    value: '64位',
    label: '64位',
  },
  {
    value: '32位',
    label: '32位',
  }]
},
{
  value: 'Linux',
  label: 'Linux',
  children: [{
    value: '64位',
    label: '64位',
  },
  {
    value: '32位',
    label: '32位',
  }]
}];

class ApplyForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    editorState: EditorState.createEmpty()
  };

  onChange = (editorState) => this.setState({editorState});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log(this.props.form);
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 15 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 15 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 10,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="手机"
        >
          {getFieldDecorator('phone', {
            initialValue: '123',
            rules: [{required: true, message: '请填写你的手机号！'}]
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="姓名"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入你的名字!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          extra='通过邮件接收IT侠的最新回复信息'
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '邮箱格式不正确',
            }, {
              required: true, message: '请填写你的邮箱！',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="校区">
          {getFieldDecorator('campus',{
            rules: [{
              required: true, message: '请选择你的校区!',
            }],
          })(
            <RadioGroup>
              <Radio value="gulou">鼓楼校区</Radio>
              <Radio value="xianlin">仙林校区</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电脑型号"
          extra='电脑型号可以查看发票、说明书标识，在电脑背面或电池下面也有电脑型号标签'
        >
          {getFieldDecorator('model', {
            rules: [{
              required: true, message: '请填写你的电脑型号',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="操作系统"
          extra="如:win-xp,win7-32位/64位,win8-32位/64位,mac,ubuntu-32位/64位"
        >
          {getFieldDecorator('os', {
            initialValue: ['Windows', '10', '64位'],
            rules: [{ type: 'array', required: true, message: '请输入你的系统版本' }],
          })(
            <Cascader options={osSets} showSearch/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="操作系统"
          extra="如:win-xp,win7-32位/64位,win8-32位/64位,mac,ubuntu-32位/64位"
        >
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
        
      </Form>
    );
  }
}

const WrappedApplyForm = Form.create()(ApplyForm);

export {WrappedApplyForm};


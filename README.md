# jts-validator
Caojianping's validator library.

## Installing
Using npm:
```bash
$ npm install jts-validator
```

Using yarn:
```bash
$ yarn add jts-validator
```

## Example
```ts
import {LocalStorage, SessionStorage} from 'jts-storage';

// test for validator
const key = 'test';
let username = '张三',
    password = '李四',
    validator = new Validator();
validator.addRule(
    key,
    { name: 'account', value: account },
    { required: true },
    { required: '用户名不可以为空' }
);
validator.addRule(
    key,
    { name: 'password', value: password },
    { required: true },
    { required: '密码不可以为空' }
);

let result = validator.execute(key);
if (!result.status) {// 验证失败，弹出校验失败数据对象
    alert(result.data);
    return;
}
```

## API
##### Validator.extendRule(rules: ValidationRuleType, messages: ValidationMessageType): boolean
##### Validator.addRule(key: string, model: ValidationModelType, rules: ValidationRuleType, messages: ValidationMessageType = {}): boolean
##### Validator.addRules(key: string, options: Array<ValidationOptionType>): boolean
##### Validator.execute(key: string): ValidationResult

## Rules
```ts
// 规则列表
{
    // 必填规则
    required: any,
    // 最小值规则
    min: any,
    // 最大值规则
    max: any,
    // 值范围规则
    range: any,
    // 最小长度规则
    minLength: any,
    // 最大长度规则
    maxLength: any,
    // 长度范围规则
    rangeLength: any,
    // 最小日期规则
    minDate: any,
    // 最大日期规则
    maxDate: any,
    // 选择规则
    checked: any,
    // 相等规则
    equal: any,
    //不相等规则
    unequal: any,
    // 手机号码规则
    mobile: any,
    // 邮箱规则
    email: any,
    // 格式化规则
    format: any
}
```
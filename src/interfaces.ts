/**
 * 验证器存储数据
 */
export type ValidatorDataStore = {
    [key: string]: { [field: string]: Array<Function> };
};

/**
 * 验证器策略
 */
export interface ValidatorStrategy {
    Rules: ValidationRuleType;
    Messages: ValidationMessageType;
}

/**
 * 验证规则类型
 */
export type ValidationRuleType = { [ruleType: string]: any };

/**
 * 验证消息类型
 */
export type ValidationMessageType = { [msgType: string]: any };

/**
 * 验证模型类型
 */
export interface ValidationModelType {
    name: string;
    value: any;
}

/**
 * 验证选项类型
 */
export interface ValidationOptionType {
    model: ValidationModelType; // 验证模型
    rules: ValidationRuleType; // 验证规则
    messages: ValidationMessageType; // 验证消息
}

/**
 * 验证结果
 */
export interface ValidationResult {
    status: boolean;
    data: any;
}

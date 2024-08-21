export default {
  commonEn: {
    pattern: /^[0-9a-zA-Z_.]+$/,
    message: "请勿输入特殊字符",
  },
  commonCn: {
    pattern: /^[\u4E00-\u9FA50-9a-zA-Z_\-.]+$/,
    message: "请勿输入特殊字符",
  },
  idEn: {
    pattern: /^[0-9a-zA-Z_-]+$/,
    message: "请勿输入特殊字符",
  },
  nameEn: {
    pattern: /^[a-zA-Z_]{1,50}$/,
    message: "请输入英文",
  },
  nameCn: {
    pattern: /^[\u4E00-\u9FA5]+$/,
    message: "请输入纯中文",
  },
  url: {
    pattern: /^[0-9a-zA-Z_./:]+$/,
    message: "请勿输入特殊字符",
  },
  number: {
    pattern: /^[0-9]+$/,
    message: "请输入纯数字",
  },
  phone: {
    pattern: /^[0-9-]+$/,
    message: "请输入正确格式座机号",
  },
  mobilePhone: {
    pattern: /^1[3456789]\d{9}$/,
    message: "请输入正确格式手机号",
  },
  email: {
    pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: "请输入正确格式邮箱",
  },
  password: {
    pattern: /^[0-9a-zA-Z._]{6,18}$/,
    message: "密码长度在6~18位之间且不包含特殊字符",
  },
  code: {
    pattern: /^\w+$/,
    message: "只能包含字母、数字、下划线",
  },
  ip: {
    pattern: /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/,
    message: "请输入正确格式IP地址",
  },
  port: {
    pattern: /^(102[4-9]|10[3-9]\d|1[1-9]\d\d|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
    message: "请输入正确格式端口",
  },
  ipPort: {
    pattern: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,
    message: "请输入正确格式路径,例如 127.0.0.1:1001",
  },
  httpOrHttps: {
    pattern: /(http|https):\/\/([\w.]+\/?)\S*/,
    message: "请输入正确格式地址",
  },
  mpPhoneOrphone: {
    pattern: /(^((\d{11})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$)/,
    message: "请输入正确的联系方式",
  },
  tableNameEn: {
    pattern: /[a-zA-z][a-zA-Z0-9_]*$/,
    message: "请输入正确的名称",
  },
  noNull: {
    pattern: /^\S*$/,
    message: "请输入正确的名称",
  },
  alphabet: {
    pattern: /^[a-zA-Z][a-zA-Z0-9._]{1,20}$/,
    message: "请输入1~20英文字符",
  },
  length: {
    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{1,50}$/,
    message: "请输入汉字、字母、数字或下划线",
  },
  ipCode: {
    pattern: /\d+\.\d+\.\d+\.\d+/,
    message: "ip格式参考（10.10.1.84格式）",
  },
  bpmMail: {
    pattern: /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6}\;))*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/,
    message: "请输入正确格式邮箱,多个以分号隔开",
  },
  emailM: {
    pattern: /^\w+([-+.]\w+)\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: "请输入正确邮件服务器",
  },
  emailPort: {
    pattern: /^[0-9]{2,5}$/,
    message: "请输入2-5位端口号",
  },
  menuUrl: {
    pattern: /[a-zA-z][a-zA-Z0-9_]*$/,
    message: "请输入正确的URL(勿输入中文)",
  },
  menuImgUrl: {
    pattern: /[a-zA-z][a-zA-Z0-9_]*$/,
    message: "请输入正确的图标地址(勿输入中文)",
  },
};

webpackJsonp([3],{Swme:function(e,r){},YDhy:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("Dd8w"),o=t.n(s),n=t("NYxO"),a=t("zL8q"),u={data:function(){var e=this;return{ruleForm:{pass:"",checkPass:"",username:""},rules:{pass:[{validator:function(r,t,s){""===t?s(new Error("请输入密码")):t.length<6||t.length>16?s(new Error("长度为6~16个字符")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),s())},trigger:"blur"}],checkPass:[{validator:function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.ruleForm.pass?s(new Error("两次输入的密码不一致! 请再输入一次您上面输入的密码")):s()},trigger:"blur"}],username:[{validator:function(e,r,t){if(!r)return t(new Error("用户名不能为空"));setTimeout(function(){/\w/.test(r)?r.length<4||r.length>10?t(new Error("长度为4~10个字符")):t():t(new Error("只能是字母数字下划线"))},0)},trigger:"blur"}]}}},methods:o()({},Object(n.b)(["register"]),{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){e?r.register({username:r.ruleForm.username,password:r.ruleForm.checkPass}).then(function(){r.$router.push({path:"/"}),a.Message.success("注册成功")}).catch(function(e){a.Message.error(e.msg)}):a.Message.error("注册失败")})}})},l={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"register"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("h4",[e._v("用户名")]),e._v(" "),t("el-input",{attrs:{placeholder:"4~10个字符，支持字母数字下划线"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"pass"}},[t("h4",[e._v("密码")]),e._v(" "),t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"支持6~16个字符"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"checkPass"}},[t("h4",[e._v("确认密码")]),e._v(" "),t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"再次输入密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即注册")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("已有账号？"),t("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(u,l,!1,function(e){t("Swme")},null,null);r.default=c.exports}});
//# sourceMappingURL=3.1edcb7ba65753b474c5b.js.map
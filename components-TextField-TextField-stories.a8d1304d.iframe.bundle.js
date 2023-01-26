/*! For license information please see components-TextField-TextField-stories.a8d1304d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui=self.webpackChunkvoid_ui||[]).push([[914],{"./src/components/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:()=>AllProps,Default:()=>Default,DisabledAndLabel:()=>DisabledAndLabel,Label:()=>Label,Large:()=>Large,Medium:()=>Medium,PasswordType:()=>PasswordType,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,Tertiary:()=>Tertiary,TrailingIcon:()=>TrailingIcon,TrailingIconAndPasswordType:()=>TrailingIconAndPasswordType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),react_icons_ai__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),_TextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TextField/TextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_TextField__WEBPACK_IMPORTED_MODULE_3__.n,title:"Components/TextField"};var Template=function Template(args){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2__.useState(""),_React$useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_3__.n,Object.assign({},args,{onChange:function onChange(event){setValue(event.target.value)},value}))};Template.displayName="Template";var Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};var Secondary=Template.bind({});Secondary.args={variant:"secondary"};var Tertiary=Template.bind({});Tertiary.args={variant:"tertiary"};var Small=Template.bind({});Small.args={size:"small"};var Medium=Template.bind({});Medium.args={size:"medium"};var Large=Template.bind({});Large.args={size:"large"};var Label=Template.bind({});Label.args={label:"TextField"};var DisabledAndLabel=Template.bind({});DisabledAndLabel.args={disabled:!0,label:"Disabled"};var TrailingIcon=Template.bind({});TrailingIcon.args={trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.mGl,{})};var PasswordType=Template.bind({});PasswordType.args={type:"password"};var TrailingIconAndPasswordType=function TrailingIconAndPasswordType(){var _React$useState3=react__WEBPACK_IMPORTED_MODULE_2__.useState(""),_React$useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState3,2),value=_React$useState4[0],setValue=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_2__.useState("password"),_React$useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState5,2),type=_React$useState6[0],setType=_React$useState6[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_3__.n,{onChange:function onChange(event){setValue(event.target.value)},trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.w8I,{onClick:function onClick(){setType("password"===type?"text":"password")}}),type,value})};TrailingIconAndPasswordType.displayName="TrailingIconAndPasswordType";var AllProps=Template.bind({});AllProps.args={variant:"secondary",size:"small",type:"password",trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.w8I,{}),label:"TextField"},Default.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Default.parameters),Primary.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Tertiary.parameters),Small.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Small.parameters),Medium.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Medium.parameters),Large.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Large.parameters),Label.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},Label.parameters),DisabledAndLabel.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},DisabledAndLabel.parameters),TrailingIcon.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},TrailingIcon.parameters),PasswordType.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},PasswordType.parameters),TrailingIconAndPasswordType.parameters=Object.assign({storySource:{source:'() => {\n  const [value, setValue] = React.useState<string>("");\n  const [type, setType] = React.useState<TextFieldType>("password");\n\n  return (\n    <TextField\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      trailingIcon={\n        <AiFillEye\n          onClick={() => {\n            if (type === "password") {\n              setType("text");\n            } else {\n              setType("password");\n            }\n          }}\n        />\n      }\n      type={type}\n      value={value}\n    />\n  );\n}'}},TrailingIconAndPasswordType.parameters),AllProps.parameters=Object.assign({storySource:{source:'(\n  args\n) => {\n  const [value, setValue] = React.useState<string>("");\n\n  return (\n    <TextField\n      {...args}\n      onChange={(event) => {\n        setValue(event.target.value);\n      }}\n      value={value}\n    />\n  );\n}'}},AllProps.parameters);var __namedExportsOrder=["Default","Primary","Secondary","Tertiary","Small","Medium","Large","Label","DisabledAndLabel","TrailingIcon","PasswordType","TrailingIconAndPasswordType","AllProps"]},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>TextField});__webpack_require__("./node_modules/core-js/modules/es.string.small.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),TextField_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextField/TextField.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(TextField_module.Z,options);const TextField_TextField_module=TextField_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextField=function TextField(props){var _props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,trailingIcon=props.trailingIcon,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,onChange=props.onChange,_props$type=props.type,type=void 0===_props$type?"text":_props$type,_props$label=props.label,label=void 0===_props$label?"textfield":_props$label,value=props.value,inputContainer=classnames_default()(TextField_TextField_module.textFieldContainer,disabled&&TextField_TextField_module.disabled),classes=classnames_default()(TextField_TextField_module.textField,"primary"===variant&&TextField_TextField_module.primary,"secondary"===variant&&TextField_TextField_module.secondary,"tertiary"===variant&&TextField_TextField_module.tertiary,"small"===size&&TextField_TextField_module.small,"medium"===size&&TextField_TextField_module.medium,"large"===size&&TextField_TextField_module.large,disabled&&TextField_TextField_module.disabled),iconClasses=classnames_default()(TextField_TextField_module.icon,"small"===size&&TextField_TextField_module.iconSmall,"medium"===size&&TextField_TextField_module.iconMedium,"large"===size&&TextField_TextField_module.iconLarge,disabled&&TextField_TextField_module.disabled),labelClasses=classnames_default()(TextField_TextField_module.label,"small"===size&&TextField_TextField_module.labelSmall,"medium"===size&&TextField_TextField_module.labelMedium,"large"===size&&TextField_TextField_module.labelLarge,disabled&&TextField_TextField_module.disabledLabel);return(0,jsx_runtime.jsxs)("div",{className:TextField_TextField_module.container,children:[(0,jsx_runtime.jsxs)("div",{className:inputContainer,children:[(0,jsx_runtime.jsx)("input",{"aria-label":label,className:classes,disabled,required:!0,onChange,type,value}),"textfield"!==label&&(0,jsx_runtime.jsx)("span",{className:labelClasses,children:label})]}),trailingIcon&&(0,jsx_runtime.jsx)("span",{className:iconClasses,children:trailingIcon})]})};TextField.displayName="TextField";try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{disabled:{defaultValue:{value:"false"},description:"If the TextField is disabled",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:'"textfield"'},description:"The accessible label for the TextField",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The callback fired when requested to change the value for the TextField",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},size:{defaultValue:{value:'"medium"'},description:"The size of the TextField",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the TextField",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:'"text"'},description:"The type for the input in the TextField",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"search"'},{value:'"tel"'},{value:'"time"'},{value:'"url"'}]}},value:{defaultValue:null,description:"The value for the TextField",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:'"primary"'},description:"The variant for the TextField",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/TextField/TextField.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--DEtzi{display:flex;flex-direction:row;font-family:Verdana,Geneva,Tahoma,sans-serif}.textFieldContainer--vCoW5{display:flex;flex-direction:column}.textFieldContainer--vCoW5 .disabled--q35sR{border:3px solid #dcdcdc !important;cursor:default !important;background-color:#dcdcdc}.textField--mByzx{font-family:Verdana,Geneva,Tahoma,sans-serif;outline:none}.textField--mByzx.primary--elG5T{border:3px solid #ffb74d}.textField--mByzx.primary--elG5T:focus{border:3px solid #ffcb57}.textField--mByzx.primary--elG5T.small--rhwpU{border-radius:6px;font-size:12px;padding:4px}.textField--mByzx.primary--elG5T.small--rhwpU:focus~.label--InsU7,.textField--mByzx.primary--elG5T.small--rhwpU:valid~.label--InsU7{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#ffb74d}.textField--mByzx.primary--elG5T.medium--FzC3q{border-radius:8px;font-size:18px;padding:6px}.textField--mByzx.primary--elG5T.medium--FzC3q:focus~.label--InsU7,.textField--mByzx.primary--elG5T.medium--FzC3q:valid~.label--InsU7{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#ffb74d}.textField--mByzx.primary--elG5T.large--HDBlQ{border-radius:10px;font-size:24px;padding:8px}.textField--mByzx.primary--elG5T.large--HDBlQ:focus~.label--InsU7,.textField--mByzx.primary--elG5T.large--HDBlQ:valid~.label--InsU7{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#ffb74d}.textField--mByzx.secondary--u0_56{border:3px solid #9333ea}.textField--mByzx.secondary--u0_56:focus{border:3px solid #a04cf0}.textField--mByzx.secondary--u0_56.small--rhwpU{border-radius:6px;font-size:12px;padding:4px}.textField--mByzx.secondary--u0_56.small--rhwpU:focus~.label--InsU7,.textField--mByzx.secondary--u0_56.small--rhwpU:valid~.label--InsU7{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#9333ea}.textField--mByzx.secondary--u0_56.medium--FzC3q{border-radius:8px;font-size:18px;padding:6px}.textField--mByzx.secondary--u0_56.medium--FzC3q:focus~.label--InsU7,.textField--mByzx.secondary--u0_56.medium--FzC3q:valid~.label--InsU7{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#9333ea}.textField--mByzx.secondary--u0_56.large--HDBlQ{border-radius:10px;font-size:24px;padding:8px}.textField--mByzx.secondary--u0_56.large--HDBlQ:focus~.label--InsU7,.textField--mByzx.secondary--u0_56.large--HDBlQ:valid~.label--InsU7{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#9333ea}.textField--mByzx.tertiary--kmg5p{border:3px solid #a9a9a9}.textField--mByzx.tertiary--kmg5p:focus{border:3px solid #d3d3d3}.textField--mByzx.tertiary--kmg5p.small--rhwpU{border-radius:6px;font-size:12px;padding:4px}.textField--mByzx.tertiary--kmg5p.small--rhwpU:focus~.label--InsU7,.textField--mByzx.tertiary--kmg5p.small--rhwpU:valid~.label--InsU7{transform:translateX(-6px) translateY(-12px) scale(0.8);color:#a9a9a9}.textField--mByzx.tertiary--kmg5p.medium--FzC3q{border-radius:8px;font-size:18px;padding:6px}.textField--mByzx.tertiary--kmg5p.medium--FzC3q:focus~.label--InsU7,.textField--mByzx.tertiary--kmg5p.medium--FzC3q:valid~.label--InsU7{transform:translateX(-9px) translateY(-18px) scale(0.8);color:#a9a9a9}.textField--mByzx.tertiary--kmg5p.large--HDBlQ{border-radius:10px;font-size:24px;padding:8px}.textField--mByzx.tertiary--kmg5p.large--HDBlQ:focus~.label--InsU7,.textField--mByzx.tertiary--kmg5p.large--HDBlQ:valid~.label--InsU7{transform:translateX(-12px) translateY(-24px) scale(0.8);color:#a9a9a9}.icon--Kx9rg{display:flex;align-items:center;cursor:pointer;user-select:none}.icon--Kx9rg.iconSmall--Xu4BU{font-size:21px;padding:1px}.icon--Kx9rg.iconMedium--hHQGq{font-size:28px;padding:3px}.icon--Kx9rg.iconLarge--tszEQ{font-size:35px;padding:5px}.label--InsU7{position:absolute;transition:all .2s ease-in;color:#737373;pointer-events:none;background-color:#fff}.label--InsU7.labelSmall--DNjcl{margin-left:6px;font-size:12px;margin-top:6px;padding:0px 2px}.label--InsU7.labelMedium--D_PUN{margin-left:6px;font-size:18px;margin-top:8px;padding:0px 3px}.label--InsU7.labelLarge--NXulW{margin-left:12px;font-size:24px;margin-top:10px;padding:0px 4px}.label--InsU7.disabledLabel--pxGcr{background-color:#dcdcdc}","",{version:3,sources:["webpack://./src/components/TextField/TextField.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,kBACE,YAAA,CACA,kBAAA,CACA,4CAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,4CACE,mCAAA,CACA,yBAAA,CACA,wBAAA,CAIJ,kBACE,4CAAA,CACA,YAAA,CAEA,iCACE,wBAAA,CAEA,uCACE,wBAAA,CAGF,8CACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,oIAEE,uDAAA,CACA,aCpCQ,CDwCZ,+CACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,sIAEE,uDAAA,CACA,aChDQ,CDoDZ,8CACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,oIAEE,wDAAA,CACA,aC5DQ,CDiEd,mCACE,wBAAA,CAEA,yCACE,wBAAA,CAGF,gDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,wIAEE,uDAAA,CACA,aC9EU,CDkFd,iDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,0IAEE,uDAAA,CACA,aC1FU,CD8Fd,gDACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,wIAEE,wDAAA,CACA,aCtGU,CD2GhB,kCACE,wBAAA,CAEA,wCACE,wBAAA,CAGF,+CACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,sIAEE,uDAAA,CACA,aCxHS,CD4Hb,gDACE,iBAAA,CACA,cAAA,CACA,WAAA,CAEA,wIAEE,uDAAA,CACA,aCpIS,CDwIb,+CACE,kBAAA,CACA,cAAA,CACA,WAAA,CAEA,sIAEE,wDAAA,CACA,aChJS,CDqJjB,aACE,YAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,8BACE,cAAA,CACA,WAAA,CAGF,+BACE,cAAA,CACA,WAAA,CAGF,8BACE,cAAA,CACA,WAAA,CAIJ,cACE,iBAAA,CACA,0BAAA,CACA,aAAA,CACA,mBAAA,CACA,qBAAA,CACA,gCACE,eAAA,CACA,cAAA,CACA,cAAA,CACA,eAAA,CAEF,iCACE,eAAA,CACA,cAAA,CACA,cAAA,CACA,eAAA,CAEF,gCACE,gBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CAEF,mCACE,wBAAA",sourcesContent:['@use "../../utility/globals";\n\n.container {\n  display: flex;\n  flex-direction: row;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.textFieldContainer {\n  display: flex;\n  flex-direction: column;\n  .disabled {\n    border: 3px solid rgb(220, 220, 220) !important;\n    cursor: default !important;\n    background-color: rgb(220, 220, 220);\n  }\n}\n\n.textField {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  outline: none;\n\n  &.primary {\n    border: 3px solid globals.$primary-color;\n\n    &:focus {\n      border: 3px solid globals.$primary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$primary-color;\n      }\n    }\n  }\n\n  &.secondary {\n    border: 3px solid globals.$secondary-color;\n\n    &:focus {\n      border: 3px solid globals.$secondary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$secondary-color;\n      }\n    }\n  }\n\n  &.tertiary {\n    border: 3px solid globals.$tertiary-color;\n\n    &:focus {\n      border: 3px solid globals.$tertiary-color-pseudo-class;\n    }\n\n    &.small {\n      border-radius: 6px;\n      font-size: 12px;\n      padding: 4px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-6px) translateY(-12px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n\n    &.medium {\n      border-radius: 8px;\n      font-size: 18px;\n      padding: 6px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-9px) translateY(-18px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n\n    &.large {\n      border-radius: 10px;\n      font-size: 24px;\n      padding: 8px;\n\n      &:focus ~ .label,\n      &:valid ~ .label {\n        transform: translateX(-12px) translateY(-24px) scale(0.8);\n        color: globals.$tertiary-color;\n      }\n    }\n  }\n}\n.icon {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  &.iconSmall {\n    font-size: 21px;\n    padding: 1px;\n  }\n\n  &.iconMedium {\n    font-size: 28px;\n    padding: 3px;\n  }\n\n  &.iconLarge {\n    font-size: 35px;\n    padding: 5px;\n  }\n}\n\n.label {\n  position: absolute;\n  transition: all 0.2s ease-in;\n  color: rgb(115, 115, 115);\n  pointer-events: none;\n  background-color: white;\n  &.labelSmall {\n    margin-left: 6px;\n    font-size: 12px;\n    margin-top: 6px;\n    padding: 0px 2px;\n  }\n  &.labelMedium {\n    margin-left: 6px;\n    font-size: 18px;\n    margin-top: 8px;\n    padding: 0px 3px;\n  }\n  &.labelLarge {\n    margin-left: 12px;\n    font-size: 24px;\n    margin-top: 10px;\n    padding: 0px 4px;\n  }\n  &.disabledLabel {\n    background-color: rgb(220, 220, 220);\n  }\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"container--DEtzi",textFieldContainer:"textFieldContainer--vCoW5",disabled:"disabled--q35sR",textField:"textField--mByzx",primary:"primary--elG5T",small:"small--rhwpU",label:"label--InsU7",medium:"medium--FzC3q",large:"large--HDBlQ",secondary:"secondary--u0_56",tertiary:"tertiary--kmg5p",icon:"icon--Kx9rg",iconSmall:"iconSmall--Xu4BU",iconMedium:"iconMedium--hHQGq",iconLarge:"iconLarge--tszEQ",labelSmall:"labelSmall--DNjcl",labelMedium:"labelMedium--D_PUN",labelLarge:"labelLarge--NXulW",disabledLabel:"disabledLabel--pxGcr"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}}}]);
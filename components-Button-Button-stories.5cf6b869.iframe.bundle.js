(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[747],{"./.storybook/components/FlexRowContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>FlexRowContainer});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlexRowContainer=function FlexRowContainer(props){var children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"},children})};FlexRowContainer.displayName="FlexRowContainer";try{FlexRowContainer.displayName="FlexRowContainer",FlexRowContainer.__docgenInfo={description:"",displayName:"FlexRowContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/FlexRowContainer.tsx#FlexRowContainer"]={docgenInfo:FlexRowContainer.__docgenInfo,name:"FlexRowContainer",path:".storybook/components/FlexRowContainer.tsx#FlexRowContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:()=>AllProps,Default:()=>Default,Disabled:()=>Disabled,LeadingIcon:()=>LeadingIcon,LeadingIconAndTrailingIcon:()=>LeadingIconAndTrailingIcon,Size:()=>Size,TrailingIcon:()=>TrailingIcon,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Button.tsx"),react_icons_ai__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),_storybook_components_FlexRowContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/components/FlexRowContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_2__.z,title:"Components/Button"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,Object.assign({},args,{children:"Button"}))};Template.displayName="Template";var Default=Template.bind({}),Size=function Size(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_components_FlexRowContainer__WEBPACK_IMPORTED_MODULE_3__.z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"small",children:"Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"medium",children:"Medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"large",children:"Large"})]})};Size.displayName="Size";var Variant=function Variant(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_components_FlexRowContainer__WEBPACK_IMPORTED_MODULE_3__.z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{variant:"primary",children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{variant:"secondary",children:"Secondary"})]})};Variant.displayName="Variant";var Disabled=Template.bind({});Disabled.args={disabled:!0};var LeadingIcon=Template.bind({});LeadingIcon.args={leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.kyg,{})};var TrailingIcon=Template.bind({});TrailingIcon.args={trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.mGl,{})};var LeadingIconAndTrailingIcon=Template.bind({});LeadingIconAndTrailingIcon.args={leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.kyg,{}),trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.mGl,{})};var AllProps=Template.bind({});AllProps.args={size:"large",variant:"secondary",leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.kyg,{}),trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.mGl,{})},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},Default.parameters),Size.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <FlexRowContainer>\n      <Button size="small">Small</Button>\n      <Button size="medium">Medium</Button>\n      <Button size="large">Large</Button>\n    </FlexRowContainer>\n  );\n}'}},Size.parameters),Variant.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <FlexRowContainer>\n      <Button variant="primary">Primary</Button>\n      <Button variant="secondary">Secondary</Button>\n    </FlexRowContainer>\n  );\n}'}},Variant.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},Disabled.parameters),LeadingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},LeadingIcon.parameters),TrailingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},TrailingIcon.parameters),LeadingIconAndTrailingIcon.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},LeadingIconAndTrailingIcon.parameters),AllProps.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Button {...args}>Button</Button>;\n}"}},AllProps.parameters);var __namedExportsOrder=["Default","Size","Variant","Disabled","LeadingIcon","TrailingIcon","LeadingIconAndTrailingIcon","AllProps"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("./node_modules/react-ripples/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","children","disabled","leadingIcon","onClick","size","trailingIcon","type","variant"],Button=react.forwardRef((function(props,ref){var className=props.className,children=props.children,leadingIcon=(props.disabled,props.leadingIcon),onClick=props.onClick,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,trailingIcon=props.trailingIcon,type=props.type,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),classes=classnames_default()(className,Button_Button_module.button,"small"===size?Button_Button_module.small:"large"===size?Button_Button_module.large:Button_Button_module.medium,"secondary"===variant?Button_Button_module.secondary:Button_Button_module.primary),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leadingIcon&&(0,jsx_runtime.jsx)("span",{className:Button_Button_module.leadingIcon,children:leadingIcon}),children,trailingIcon&&(0,jsx_runtime.jsx)("span",{className:Button_Button_module.trailingIcon,children:trailingIcon})]}),rippleSize=classnames_default()("small"===size?Button_Button_module.smallRipple:"large"===size?Button_Button_module.largeRipple:Button_Button_module.mediumRipple);return(0,jsx_runtime.jsx)(esm.Z,{className:rippleSize,color:"rgba(38, 25, 49, 0.85)",during:300,children:(0,jsx_runtime.jsx)("button",Object.assign({className:classes,onClick,ref,type:"reset"===type?"reset":"submit"===type?"submit":"button"},rest,{children:content}))})}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content for the Button",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If the Button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"The leading icon for the Button",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"The callback fired when the Button is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:'"medium"'},description:"The size of the Button",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the Button",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"The type of the Button",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the Button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.button--b_aG7{border:2px solid #3c3c3c;width:fit-content;font-family:"Poppins",sans-serif;display:flex;flex-direction:row;align-items:center;column-gap:6px;outline:none}.button--b_aG7:hover{cursor:pointer}.primary--taWj2{background-color:#3c3c3c;color:#ebebeb}.primary--taWj2:hover,.primary--taWj2:focus{background-color:#646464;border:2px solid #646464}.primary--taWj2:active{background-color:#261931;border:2px solid #261931}.secondary--sMAVa{background-color:#fff;color:#646464;border:2px solid #646464}.secondary--sMAVa:hover,.secondary--sMAVa:focus{color:#261931;border:2px solid #261931;background-color:#f0f0f0}.secondary--sMAVa:active{background-color:#eee6f0}.small--DfILt{border-radius:6px;font-size:12px;padding:4px 6px;height:25.8px}.small--DfILt .leadingIcon--sypYQ,.small--DfILt .trailingIcon--clgcp{height:12px}.medium--GjSVq{border-radius:8px;font-size:16px;padding:6px 9px;height:34.5px}.medium--GjSVq .leadingIcon--sypYQ,.medium--GjSVq .trailingIcon--clgcp{height:16px}.large--nA9Rz{border-radius:10px;font-size:20px;padding:8px 12px;height:43px}.large--nA9Rz .leadingIcon--sypYQ,.large--nA9Rz .trailingIcon--clgcp{height:20px}.smallRipple--AIhN0{border-radius:6px}.mediumRipple--Noc21{border-radius:8px}.largeRipple--ubQud{border-radius:10px}',"",{version:3,sources:["webpack://./src/components/Button/Button.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,eACE,wBAAA,CACA,iBAAA,CACA,gCCWY,CDVZ,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,YAAA,CACA,qBACE,cAAA,CAIJ,gBACE,wBCRyB,CDSzB,aCHmB,CDInB,4CAEE,wBCXuC,CDYvC,wBAAA,CAGF,uBACE,wBCf8B,CDgB9B,wBAAA,CAIJ,kBACE,qBAAA,CACA,aCfqB,CDgBrB,wBAAA,CACA,gDAEE,aClBmC,CDmBnC,wBAAA,CACA,wBClB0C,CDoB5C,yBACE,wBCpBgC,CDwBpC,cACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,aAAA,CACA,qEAEE,WAAA,CAIJ,eACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,aAAA,CACA,uEAEE,WAAA,CAIJ,cACE,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CACA,qEAEE,WAAA,CAIJ,oBACE,iBAAA,CAGF,qBACE,iBAAA,CAGF,oBACE,kBAAA",sourcesContent:['@use "../../utility/globals";\n\n.button {\n  border: 2px solid globals.$primary-background-color;\n  width: fit-content;\n  font-family: globals.$font-family;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 6px;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.primary {\n  background-color: globals.$primary-background-color;\n  color: globals.$primary-text-color;\n  &:hover,\n  &:focus {\n    background-color: globals.$primary-background-color-hover-and-focus;\n    border: 2px solid\n      globals.$primary-background-color-hover-and-focus;\n  }\n  &:active {\n    background-color: globals.$primary-background-color-active;\n    border: 2px solid globals.$primary-background-color-active;\n  }\n}\n\n.secondary {\n  background-color: white;\n  color: globals.$secondary-text-color;\n  border: 2px solid globals.$secondary-text-color;\n  &:hover,\n  &:focus {\n    color: globals.$secondary-text-color-hover-and-focus;\n    border: 2px solid globals.$secondary-border-color-hover-and-focus;\n    background-color: globals.$secondary-background-color-hover-and-active;\n  }\n  &:active {\n    background-color: globals.$secondary-background-color-active;\n  }\n}\n\n.small {\n  border-radius: 6px;\n  font-size: 12px;\n  padding: 4px 6px;\n  height: 25.8px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 12px;\n  }\n}\n\n.medium {\n  border-radius: 8px;\n  font-size: 16px;\n  padding: 6px 9px;\n  height: 34.5px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 16px;\n  }\n}\n\n.large {\n  border-radius: 10px;\n  font-size: 20px;\n  padding: 8px 12px;\n  height: 43px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 20px;\n  }\n}\n\n.smallRipple {\n  border-radius: 6px;\n}\n\n.mediumRipple {\n  border-radius: 8px;\n}\n\n.largeRipple {\n  border-radius: 10px;\n}\n','@import url("https://fonts.cdnfonts.com/css/poppins");\n\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n\n$primary-background-color: rgb(60, 60, 60);\n$primary-background-color-hover-and-focus: rgb(100, 100, 100);\n$primary-background-color-active: rgb(38, 25, 49);\n$primary-border-color: rgb(20, 20, 20);\n$primary-border-color-hover-and-focus: rgb(35, 10, 35);\n$primary-border-color-active: rgb(0, 0, 0);\n$primary-text-color: rgb(235, 235, 235);\n$font-family: "Poppins", sans-serif;\n\n$secondary-text-color: rgb(100, 100, 100);\n$secondary-text-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-border-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-background-color-hover-and-active: rgb(240, 240, 240);\n$secondary-background-color-active: rgb(238, 230, 240);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"button--b_aG7",primary:"primary--taWj2",secondary:"secondary--sMAVa",small:"small--DfILt",leadingIcon:"leadingIcon--sypYQ",trailingIcon:"trailingIcon--clgcp",medium:"medium--GjSVq",large:"large--nA9Rz",smallRipple:"smallRipple--AIhN0",mediumRipple:"mediumRipple--Noc21",largeRipple:"largeRipple--ubQud"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-ripples/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>esm});var extendStatics,react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),__extends=(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},boxStyle={position:"relative",display:"inline-flex",overflow:"hidden"},withAttrs_assign=function(){return withAttrs_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},withAttrs_assign.apply(this,arguments)};const esm=function(Component){return function(props){return react.createElement(Component,withAttrs_assign({},props))}}((void 0===defaultProps&&(defaultProps={}),(_a=function(_super){function class_1(props){var _this=_super.call(this,props)||this;return _this.timer=0,_this.onClick=function(ev){var _a=_this.props,during=_a.during,onClick=_a.onClick,color=_a.color;ev.stopPropagation();var pageX=ev.pageX,pageY=ev.pageY,rect=ev.currentTarget.getBoundingClientRect(),left=pageX-(rect.left+window.scrollX),top=pageY-(rect.top+window.scrollY),size=Math.max(rect.width,rect.height);_this.setState((function(state){return{rippleStyle:__assign({},state.rippleStyle,{left,top,opacity:1,transform:"translate(-50%, -50%)",transition:"initial",backgroundColor:color})}}),(function(){_this.timer=setTimeout((function(){_this.setState((function(state){return{rippleStyle:__assign({},state.rippleStyle,{opacity:0,transform:"scale("+size/9+")",transition:"all "+during+"ms"})}}))}),50)})),onClick&&onClick(ev)},_this.state={rippleStyle:{position:"absolute",borderRadius:"50%",opacity:0,width:35,height:35,transform:"translate(-50%, -50%)",pointerEvents:"none"}},_this}return __extends(class_1,_super),class_1.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},class_1.prototype.render=function(){var _a=this.props,children=_a.children,className=(_a.during,_a.color,_a.onClick,_a.className),props=__rest(_a,["children","during","color","onClick","className"]),rippleStyle=this.state.rippleStyle;return react.createElement("div",__assign({},props,{className:("react-ripples "+className).trim(),style:boxStyle,onClick:this.onClick}),children,react.createElement("s",{style:rippleStyle}))},class_1}(react.PureComponent)).displayName="Ripples",_a.propTypes={during:prop_types_default().number,color:prop_types_default().string,onClick:prop_types_default().func,className:prop_types_default().string},_a.defaultProps=__assign({during:600,color:"rgba(0, 0, 0, .3)",className:"",onClick:function(){}},defaultProps),_a));var defaultProps,_a}}]);
(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[705],{"./src/components/Popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:()=>AllProps,BottomPosition:()=>BottomPosition,BottomPositionAndNubbin:()=>BottomPositionAndNubbin,Default:()=>Default,LongText:()=>LongText,TopPosition:()=>TopPosition,TopPositionAndNubbin:()=>TopPositionAndNubbin,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Popover_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Popover_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Popover_module.Z,options);const Popover_Popover_module=Popover_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),getPopoverPositionCalculations=function getPopoverPositionCalculations(_ref){var _popoverRef$current$g,_popoverRef$current,_triggerRef$current$g,_triggerRef$current,_popoverRef$current$g2,_popoverRef$current2,_triggerRef$current$g2,_triggerRef$current2,popoverRef=_ref.popoverRef,triggerRef=_ref.triggerRef,position=_ref.position,hasNubbin=_ref.hasNubbin,popoverWidth=null!==(_popoverRef$current$g=null===(_popoverRef$current=popoverRef.current)||void 0===_popoverRef$current?void 0:_popoverRef$current.getBoundingClientRect().width)&&void 0!==_popoverRef$current$g?_popoverRef$current$g:0,left=((null!==(_triggerRef$current$g=null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current?void 0:_triggerRef$current.getBoundingClientRect().width)&&void 0!==_triggerRef$current$g?_triggerRef$current$g:0)-popoverWidth)/2,popoverHeight=null!==(_popoverRef$current$g2=null===(_popoverRef$current2=popoverRef.current)||void 0===_popoverRef$current2?void 0:_popoverRef$current2.getBoundingClientRect().height)&&void 0!==_popoverRef$current$g2?_popoverRef$current$g2:0,triggerHeight=null!==(_triggerRef$current$g2=null===(_triggerRef$current2=triggerRef.current)||void 0===_triggerRef$current2?void 0:_triggerRef$current2.getBoundingClientRect().height)&&void 0!==_triggerRef$current$g2?_triggerRef$current$g2:0,nubbinHeight=hasNubbin?7:0;return{transform:"translate3d("+left+"px, "+("bottom"===position?triggerHeight+5+nubbinHeight:-popoverHeight-5-nubbinHeight)+"px, 0)"}};try{getPopoverPositionCalculations.displayName="getPopoverPositionCalculations",getPopoverPositionCalculations.__docgenInfo={description:"",displayName:"getPopoverPositionCalculations",props:{popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},hasNubbin:{defaultValue:null,description:"",name:"hasNubbin",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utility/getPopoverPositionCalculations.tsx#getPopoverPositionCalculations"]={docgenInfo:getPopoverPositionCalculations.__docgenInfo,name:"getPopoverPositionCalculations",path:"src/utility/getPopoverPositionCalculations.tsx#getPopoverPositionCalculations"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Popover=function Popover(props){var _props$hasNubbin=props.hasNubbin,hasNubbin=void 0!==_props$hasNubbin&&_props$hasNubbin,_props$startsOpen=props.startsOpen,startsOpen=void 0!==_props$startsOpen&&_props$startsOpen,_props$position=props.position,position=void 0===_props$position?"bottom":_props$position,text=props.text,trigger=props.trigger,_React$useState=react.useState(startsOpen),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),showPopover=_React$useState2[0],setShowPopover=_React$useState2[1],popoverRef=react.useRef(null),_React$useState3=react.useState(void 0),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),popoverPositionStyle=_React$useState4[0],setPopoverPositionStyle=_React$useState4[1],triggerRef=react.useRef(null),popover=classnames_default()(Popover_Popover_module.popover,"bottom"===position&&Popover_Popover_module.bottom,"top"===position&&Popover_Popover_module.top,hasNubbin&&Popover_Popover_module.nubbin);return react.useLayoutEffect((function(){setPopoverPositionStyle(getPopoverPositionCalculations({popoverRef,triggerRef,position,hasNubbin}))}),[]),react.useEffect((function(){var _triggerRef$current,_triggerRef$current2;return null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||_triggerRef$current.addEventListener("focus",(function(){setShowPopover(!0)})),null===(_triggerRef$current2=triggerRef.current)||void 0===_triggerRef$current2||_triggerRef$current2.addEventListener("focusout",(function(){setShowPopover(!1)})),function(){var _triggerRef$current3,_triggerRef$current4;null===(_triggerRef$current3=triggerRef.current)||void 0===_triggerRef$current3||_triggerRef$current3.removeEventListener("focus",(function(){setShowPopover(!0)})),null===(_triggerRef$current4=triggerRef.current)||void 0===_triggerRef$current4||_triggerRef$current4.removeEventListener("focusout",(function(){setShowPopover(!1)}))}}),[triggerRef]),(0,jsx_runtime.jsxs)("div",{className:Popover_Popover_module.container,children:[react.cloneElement(trigger,{onMouseEnter:function onMouseEnter(){return setShowPopover(!0)},onMouseLeave:function onMouseLeave(){return setShowPopover(!1)},ref:triggerRef,role:"button",tabIndex:0}),(0,jsx_runtime.jsx)("div",{className:Popover_Popover_module.popoverLayoutContainer,style:popoverPositionStyle,ref:popoverRef,children:(0,jsx_runtime.jsx)(CSSTransition.Z,{in:showPopover,timeout:150,mountOnEnter:!0,unmountOnExit:!0,classNames:"top"===position?{enter:Popover_Popover_module.enterTop,enterActive:Popover_Popover_module.enterTopActive,exit:Popover_Popover_module.exitTop,exitActive:Popover_Popover_module.exitTopActive}:{enter:Popover_Popover_module.enterBottom,enterActive:Popover_Popover_module.enterBottomActive,exit:Popover_Popover_module.exitBottom,exitActive:Popover_Popover_module.exitBottomActive},children:(0,jsx_runtime.jsx)("div",{className:popover,children:text})})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{hasNubbin:{defaultValue:{value:"false"},description:"If the Popover has a nubbin",name:"hasNubbin",required:!1,type:{name:"boolean"}},startsOpen:{defaultValue:{value:"false"},description:"If the Popover initially renders as open",name:"startsOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:'"bottom"'},description:"The position of the Popover",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},text:{defaultValue:null,description:"The text for the Popover",name:"text",required:!0,type:{name:"string"}},trigger:{defaultValue:null,description:"The trigger for the Popover",name:"trigger",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const Popover_stories={component:Popover,title:"Components/Popover"};var Template=function Template(args){return(0,jsx_runtime.jsx)(Popover,Object.assign({},args,{startsOpen:!0,trigger:(0,jsx_runtime.jsx)(Button.z,{variant:"secondary",children:"Trigger"})}))};Template.displayName="Template";var Default=Template.bind({});Default.args={text:"Popover"};var TopPosition=Template.bind({});TopPosition.args={text:"Popover",position:"top"};var BottomPosition=Template.bind({});BottomPosition.args={text:"Popover",position:"bottom"};var TopPositionAndNubbin=Template.bind({});TopPositionAndNubbin.args={text:"Popover",position:"top",hasNubbin:!0};var BottomPositionAndNubbin=Template.bind({});BottomPositionAndNubbin.args={text:"Popover",position:"bottom",hasNubbin:!0};var LongText=Template.bind({});LongText.args={text:"I am a Popover with very long text!",position:"bottom"};var AllProps=Template.bind({});AllProps.args={text:"I am a Popover with very long text!",position:"top",hasNubbin:!0},Default.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},Default.parameters),TopPosition.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},TopPosition.parameters),BottomPosition.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},BottomPosition.parameters),TopPositionAndNubbin.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},TopPositionAndNubbin.parameters),BottomPositionAndNubbin.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},BottomPositionAndNubbin.parameters),LongText.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},LongText.parameters),AllProps.parameters=Object.assign({storySource:{source:'(args) => {\n  return (\n    <Popover\n      {...args}\n      startsOpen\n      trigger={<Button variant="secondary">Trigger</Button>}\n    />\n  );\n}'}},AllProps.parameters);var __namedExportsOrder=["Default","TopPosition","BottomPosition","TopPositionAndNubbin","BottomPositionAndNubbin","LongText","AllProps"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","disabled","leadingIcon","onClick","size","trailingIcon","type","variant"],Button=react.forwardRef((function(props,ref){var children=props.children,leadingIcon=(props.disabled,props.leadingIcon),onClick=props.onClick,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,trailingIcon=props.trailingIcon,type=props.type,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),classes=classnames_default()(Button_Button_module.button,"small"===size?Button_Button_module.small:"large"===size?Button_Button_module.large:Button_Button_module.medium,"secondary"===variant?Button_Button_module.secondary:Button_Button_module.primary),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leadingIcon&&(0,jsx_runtime.jsx)("span",{className:Button_Button_module.leadingIcon,children:leadingIcon}),children,trailingIcon&&(0,jsx_runtime.jsx)("span",{className:Button_Button_module.trailingIcon,children:trailingIcon})]});return(0,jsx_runtime.jsx)("button",Object.assign({className:classes,onClick,ref,type:"reset"===type?"reset":"submit"===type?"submit":"button"},rest,{children:content}))}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content for the Button",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If the Button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"The leading icon for the Button",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"The callback fired when the Button is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:'"medium"'},description:"The size of the Button",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the Button",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"The type of the Button",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the Button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.button--b_aG7{border:2px solid #3c3c3c;width:fit-content;font-family:"Poppins",sans-serif;display:flex;flex-direction:row;align-items:center;column-gap:6px;outline:none}.button--b_aG7:hover{cursor:pointer}.primary--taWj2{background-color:#3c3c3c;color:#ebebeb}.primary--taWj2:hover,.primary--taWj2:focus{background-color:#505050;border:2px solid #505050}.primary--taWj2:active{background-color:#261931;border:2px solid #261931}.secondary--sMAVa{background-color:#fff;color:#646464;border:2px solid #646464}.secondary--sMAVa:hover,.secondary--sMAVa:focus{color:#261931;border:2px solid #261931}.secondary--sMAVa:active{background-color:#eee6f0}.small--DfILt{border-radius:6px;font-size:12px;padding:4px 6px}.small--DfILt .leadingIcon--sypYQ,.small--DfILt .trailingIcon--clgcp{height:12px}.medium--GjSVq{border-radius:8px;font-size:16px;padding:6px 9px}.medium--GjSVq .leadingIcon--sypYQ,.medium--GjSVq .trailingIcon--clgcp{height:16px}.large--nA9Rz{border-radius:10px;font-size:20px;padding:8px 12px}.large--nA9Rz .leadingIcon--sypYQ,.large--nA9Rz .trailingIcon--clgcp{height:20px}',"",{version:3,sources:["webpack://./src/components/Button/Button.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,eACE,wBAAA,CACA,iBAAA,CACA,gCCWY,CDVZ,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,YAAA,CACA,qBACE,cAAA,CAIJ,gBACE,wBCRyB,CDSzB,aCHmB,CDInB,4CAEE,wBCXuC,CDYvC,wBAAA,CAEF,uBACE,wBCd8B,CDe9B,wBAAA,CAIJ,kBACE,qBAAA,CACA,aCdqB,CDerB,wBAAA,CACA,gDAEE,aCjBmC,CDkBnC,wBAAA,CAEF,yBACE,wBCnBgC,CDuBpC,cACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,qEAEE,WAAA,CAIJ,eACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,uEAEE,WAAA,CAIJ,cACE,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,qEAEE,WAAA",sourcesContent:['@use "../../utility/globals";\n\n.button {\n  border: 2px solid globals.$primary-background-color;\n  width: fit-content;\n  font-family: globals.$font-family;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 6px;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.primary {\n  background-color: globals.$primary-background-color;\n  color: globals.$primary-text-color;\n  &:hover,\n  &:focus {\n    background-color: globals.$primary-background-color-hover-and-focus;\n    border: 2px solid globals.$primary-background-color-hover-and-focus;\n  }\n  &:active {\n    background-color: globals.$primary-background-color-active;\n    border: 2px solid globals.$primary-background-color-active;\n  }\n}\n\n.secondary {\n  background-color: white;\n  color: globals.$secondary-text-color;\n  border: 2px solid globals.$secondary-text-color;\n  &:hover,\n  &:focus {\n    color: globals.$secondary-text-color-hover-and-focus;\n    border: 2px solid globals.$secondary-border-color-hover-and-focus;\n  }\n  &:active {\n    background-color: globals.$secondary-background-color-active;\n  }\n}\n\n.small {\n  border-radius: 6px;\n  font-size: 12px;\n  padding: 4px 6px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 12px;\n  }\n}\n\n.medium {\n  border-radius: 8px;\n  font-size: 16px;\n  padding: 6px 9px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 16px;\n  }\n}\n\n.large {\n  border-radius: 10px;\n  font-size: 20px;\n  padding: 8px 12px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 20px;\n  }\n}\n','@import url("https://fonts.cdnfonts.com/css/poppins");\n\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n\n$primary-background-color: rgb(60, 60, 60);\n$primary-background-color-hover-and-focus: rgb(80, 80, 80);\n$primary-background-color-active: rgb(38, 25, 49);\n$primary-border-color: rgb(20, 20, 20);\n$primary-border-color-hover-and-focus: rgb(35, 10, 35);\n$primary-border-color-active: rgb(0, 0, 0);\n$primary-text-color: rgb(235, 235, 235);\n$font-family: "Poppins", sans-serif;\n\n$secondary-text-color: rgb(100, 100, 100);\n$secondary-text-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-border-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-background-color-active: rgb(238, 230, 240);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"button--b_aG7",primary:"primary--taWj2",secondary:"secondary--sMAVa",small:"small--DfILt",leadingIcon:"leadingIcon--sypYQ",trailingIcon:"trailingIcon--clgcp",medium:"medium--GjSVq",large:"large--nA9Rz"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popover/Popover.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.container--vc5LY{position:relative;font-family:"Poppins",sans-serif;font-size:14px}.popoverLayoutContainer--IC4ds{left:0;top:0;position:absolute;z-index:1}.popover--PmG6o{color:#ebebeb;text-align:center;min-width:120px;max-width:120px;background-color:#3c3c3c;border-radius:4px;box-shadow:rgba(0,0,0,.35) 0px 5px 15px;padding:10px 16px;text-overflow:wrap;word-wrap:break-word;z-index:1}.popover--PmG6o.nubbin--grlLv::before{content:"";width:10px;height:10px;z-index:2;background-color:#3c3c3c;position:absolute;transform:translate(-50%, -50%) rotate(45deg)}.bottom--e3qpP::before{top:0;left:50%}.top--Wi9Gx::before{top:100%;left:50%}.enterTop--qt0Gq{opacity:0;transform:translateY(-10px)}.enterTopActive--SeDO9{transform:translateY(0px);opacity:1;transition:all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53)}.exitTop--EFzwD{transform:translateY(0px);opacity:1}.exitTopActive--ZDxLp{transform:translateY(-10px);opacity:0;transition:all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53)}.enterBottom--h1EIX{opacity:0;transform:translateY(10px)}.enterBottomActive--mgb0_{transform:translateY(0px);opacity:1;transition:all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53)}.exitBottom--goXMb{transform:translateY(0px);opacity:1}.exitBottomActive--sugqR{transform:translateY(10px);opacity:0;transition:all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53)}',"",{version:3,sources:["webpack://./src/components/Popover/Popover.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,kBACE,iBAAA,CACA,gCCYY,CDXZ,cAAA,CAGF,+BACE,MAAA,CACA,KAAA,CACA,iBAAA,CACA,SAAA,CAGF,gBACE,aCDmB,CDEnB,iBAAA,CACA,eAAA,CACA,eAAA,CACA,wBCXyB,CDYzB,iBAAA,CACA,uCAAA,CACA,iBAAA,CACA,kBAAA,CACA,oBAAA,CACA,SAAA,CAEE,sCACE,UAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,wBCxBqB,CDyBrB,iBAAA,CACA,6CAAA,CAMJ,uBACE,KAAA,CACA,QAAA,CAKF,oBACE,QAAA,CACA,QAAA,CAIJ,iBACE,SAAA,CACA,2BAAA,CAGF,uBACE,yBAAA,CACA,SAAA,CACA,0DAAA,CAGF,gBACE,yBAAA,CACA,SAAA,CAGF,sBACE,2BAAA,CACA,SAAA,CACA,0DAAA,CAGF,oBACE,SAAA,CACA,0BAAA,CAGF,0BACE,yBAAA,CACA,SAAA,CACA,0DAAA,CAGF,mBACE,yBAAA,CACA,SAAA,CAGF,yBACE,0BAAA,CACA,SAAA,CACA,0DAAA",sourcesContent:['@use "../../utility/globals";\n\n.container {\n  position: relative;\n  font-family: globals.$font-family;\n  font-size: 14px;\n}\n\n.popoverLayoutContainer {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.popover {\n  color: globals.$primary-text-color;\n  text-align: center;\n  min-width: 120px;\n  max-width: 120px;\n  background-color: globals.$primary-background-color;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  padding: 10px 16px;\n  text-overflow: wrap;\n  word-wrap: break-word;\n  z-index: 1;\n  &.nubbin {\n    &::before {\n      content: "";\n      width: 10px;\n      height: 10px;\n      z-index: 2;\n      background-color: globals.$primary-background-color;\n      position: absolute;\n      transform: translate(-50%, -50%) rotate(45deg);\n    }\n  }\n}\n\n.bottom {\n  &::before {\n    top: 0;\n    left: 50%;\n  }\n}\n\n.top {\n  &::before {\n    top: 100%;\n    left: 50%;\n  }\n}\n\n.enterTop {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n\n.enterTopActive {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53);\n}\n\n.exitTop {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.exitTopActive {\n  transform: translateY(-10px);\n  opacity: 0;\n  transition: all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53);\n}\n\n.enterBottom {\n  opacity: 0;\n  transform: translateY(10px);\n}\n\n.enterBottomActive {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53);\n}\n\n.exitBottom {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.exitBottomActive {\n  transform: translateY(10px);\n  opacity: 0;\n  transition: all 150ms cubic-bezier(0.44, -0.01, 0.83, 0.53);\n}\n','@import url("https://fonts.cdnfonts.com/css/poppins");\n\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n\n$primary-background-color: rgb(60, 60, 60);\n$primary-background-color-hover-and-focus: rgb(80, 80, 80);\n$primary-background-color-active: rgb(38, 25, 49);\n$primary-border-color: rgb(20, 20, 20);\n$primary-border-color-hover-and-focus: rgb(35, 10, 35);\n$primary-border-color-active: rgb(0, 0, 0);\n$primary-text-color: rgb(235, 235, 235);\n$font-family: "Poppins", sans-serif;\n\n$secondary-text-color: rgb(100, 100, 100);\n$secondary-text-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-border-color-hover-and-focus: rgb(38, 25, 49);\n$secondary-background-color-active: rgb(238, 230, 240);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"container--vc5LY",popoverLayoutContainer:"popoverLayoutContainer--IC4ds",popover:"popover--PmG6o",nubbin:"nubbin--grlLv",bottom:"bottom--e3qpP",top:"top--Wi9Gx",enterTop:"enterTop--qt0Gq",enterTopActive:"enterTopActive--SeDO9",exitTop:"exitTop--EFzwD",exitTopActive:"exitTopActive--ZDxLp",enterBottom:"enterBottom--h1EIX",enterBottomActive:"enterBottomActive--mgb0_",exitBottom:"exitBottom--goXMb",exitBottomActive:"exitBottomActive--sugqR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}}}]);
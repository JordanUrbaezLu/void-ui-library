(self.webpackChunkastro_ui_library=self.webpackChunkastro_ui_library||[]).push([[580],{"./src/components/AstroMenu/AstroMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignmentBottomCenter:()=>AlignmentBottomCenter,AlignmentBottomLeft:()=>AlignmentBottomLeft,AlignmentBottomRight:()=>AlignmentBottomRight,AlignmentTopCenter:()=>AlignmentTopCenter,AlignmentTopLeft:()=>AlignmentTopLeft,AlignmentTopRight:()=>AlignmentTopRight,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AstroMenu_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),CSSTransition=(__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),AstroMenu_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroMenu/AstroMenu.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroMenu_module.Z,options);const AstroMenu_AstroMenu_module=AstroMenu_module.Z.locals||{};var getAstroMenuAlignmentCalculations=function getAstroMenuAlignmentCalculations(_ref){var _menuRef$current$getB,_menuRef$current,_triggerRef$current$g,_triggerRef$current,_menuRef$current$getB2,_menuRef$current2,_triggerRef$current$g2,_triggerRef$current2,menuRef=_ref.menuRef,triggerRef=_ref.triggerRef,alignment=_ref.alignment,menuWidth=null!==(_menuRef$current$getB=null===(_menuRef$current=menuRef.current)||void 0===_menuRef$current?void 0:_menuRef$current.getBoundingClientRect().width)&&void 0!==_menuRef$current$getB?_menuRef$current$getB:0,triggerWidth=null!==(_triggerRef$current$g=null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current?void 0:_triggerRef$current.getBoundingClientRect().width)&&void 0!==_triggerRef$current$g?_triggerRef$current$g:0,left="topLeft"===alignment||"bottomLeft"===alignment?0:"topCenter"===alignment||"bottomCenter"===alignment?(triggerWidth-menuWidth)/2:triggerWidth-menuWidth,menuHeight=null!==(_menuRef$current$getB2=null===(_menuRef$current2=menuRef.current)||void 0===_menuRef$current2?void 0:_menuRef$current2.getBoundingClientRect().height)&&void 0!==_menuRef$current$getB2?_menuRef$current$getB2:0,triggerHeight=null!==(_triggerRef$current$g2=null===(_triggerRef$current2=triggerRef.current)||void 0===_triggerRef$current2?void 0:_triggerRef$current2.getBoundingClientRect().height)&&void 0!==_triggerRef$current$g2?_triggerRef$current$g2:0;return{transform:"translate3d("+left+"px, "+(alignment.startsWith("bottom")?triggerHeight:-menuHeight)+"px, 0)"}};try{getAstroMenuAlignmentCalculations.displayName="getAstroMenuAlignmentCalculations",getAstroMenuAlignmentCalculations.__docgenInfo={description:"",displayName:"getAstroMenuAlignmentCalculations",props:{menuRef:{defaultValue:null,description:"",name:"menuRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},alignment:{defaultValue:null,description:"",name:"alignment",required:!0,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomCenter"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topCenter"'},{value:'"topRight"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utility/getAstroMenuAlignmentCalculations.tsx#getAstroMenuAlignmentCalculations"]={docgenInfo:getAstroMenuAlignmentCalculations.__docgenInfo,name:"getAstroMenuAlignmentCalculations",path:"src/utility/getAstroMenuAlignmentCalculations.tsx#getAstroMenuAlignmentCalculations"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AstroMenu=function AstroMenu(props){var _props$alignment=props.alignment,alignment=void 0===_props$alignment?"bottomLeft":_props$alignment,children=props.children,isOpen=props.isOpen,onClose=props.onClose,onOpen=props.onOpen,trigger=props.trigger,_React$useState=react.useState(0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),focusedMenuItem=_React$useState2[0],setFocusedMenuItem=_React$useState2[1],menuRef=react.useRef(null),_React$useState3=react.useState(void 0),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),menuAlignmentStyle=_React$useState4[0],setMenuAlignmentStyle=_React$useState4[1],triggerRef=react.useRef(null),lastIndex=react.Children.count(children)-1;return react.useEffect((function(){if(isOpen){var _menuRef$current,menuItem=(null===(_menuRef$current=menuRef.current)||void 0===_menuRef$current?void 0:_menuRef$current.children[0]).children[focusedMenuItem];null==menuItem||menuItem.focus()}}),[isOpen,focusedMenuItem]),react.useLayoutEffect((function(){setMenuAlignmentStyle(getAstroMenuAlignmentCalculations({menuRef,triggerRef,alignment}))}),[]),function useOnClickOutside(ref,handler){react.useEffect((function(){var checkIfOutside=function checkIfOutside(event){var _ref$current;(null===(_ref$current=ref.current)||void 0===_ref$current||!_ref$current.contains(event.target))&&handler()};return document.addEventListener("mousedown",checkIfOutside),function(){document.removeEventListener("mousedown",checkIfOutside)}}))}(triggerRef,onClose),(0,jsx_runtime.jsxs)("div",{className:AstroMenu_AstroMenu_module.container,children:[react.cloneElement(trigger,{onClick:function onClick(){isOpen?onClose():onOpen()},ref:triggerRef,role:"button",tabIndex:0}),(0,jsx_runtime.jsx)("div",{className:AstroMenu_AstroMenu_module.astroMenuLayoutContainer,style:menuAlignmentStyle,ref:menuRef,children:(0,jsx_runtime.jsx)(CSSTransition.Z,{in:isOpen,timeout:150,mountOnEnter:!0,unmountOnExit:!0,classNames:alignment.startsWith("bottom")?{enter:AstroMenu_AstroMenu_module.enterBottom,enterActive:AstroMenu_AstroMenu_module.enterBottomActive,exit:AstroMenu_AstroMenu_module.exitBottom,exitActive:AstroMenu_AstroMenu_module.exitBottomActive}:{enter:AstroMenu_AstroMenu_module.enterTop,enterActive:AstroMenu_AstroMenu_module.enterTopActive,exit:AstroMenu_AstroMenu_module.exitTop,exitActive:AstroMenu_AstroMenu_module.exitTopActive},children:(0,jsx_runtime.jsx)("div",{className:AstroMenu_AstroMenu_module.astroMenuContainer,role:"menu",children:react.Children.map(children,(function(child,index){return react.isValidElement(child)?react.cloneElement(child,{key:index,onClick:function onClick(){onClose(child.props.children)},onKeyDown:function onKeyDown(event){var _triggerRef$current;"Escape"===event.code&&(onClose(),null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||_triggerRef$current.focus());"Enter"===event.code&&(onClose(child.props.children),setTimeout((function(){var _triggerRef$current2;return null===(_triggerRef$current2=triggerRef.current)||void 0===_triggerRef$current2?void 0:_triggerRef$current2.focus()}))),"ArrowUp"===event.code&&function focusPreviousItem(){setFocusedMenuItem((function(prevIndex){return prevIndex-1<0?lastIndex:prevIndex-1}))}(),"ArrowDown"===event.code&&function focusNextItem(){setFocusedMenuItem((function(prevIndex){return prevIndex+1>lastIndex?0:prevIndex+1}))}()},role:"menuitem",tabIndex:index===focusedMenuItem?0:void 0}):null}))})})})]})};AstroMenu.displayName="AstroMenu";try{AstroMenu.displayName="AstroMenu",AstroMenu.__docgenInfo={description:"",displayName:"AstroMenu",props:{alignment:{defaultValue:{value:'"bottomLeft"'},description:"The Menu's alignment relative to its trigger",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"bottomLeft"'},{value:'"bottomCenter"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"topCenter"'},{value:'"topRight"'}]}},children:{defaultValue:null,description:"The content for the AstroMenu",name:"children",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"If the AstroMenu is open",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"The callback fired when the AstroMenu closes",name:"onClose",required:!0,type:{name:"(itemValue?: string | undefined) => void"}},onOpen:{defaultValue:null,description:"The callback fired when the AstroMenu opens",name:"onOpen",required:!0,type:{name:"() => void"}},trigger:{defaultValue:null,description:"The trigger for the AstroMenu",name:"trigger",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroMenu/AstroMenu.tsx#AstroMenu"]={docgenInfo:AstroMenu.__docgenInfo,name:"AstroMenu",path:"src/components/AstroMenu/AstroMenu.tsx#AstroMenu"})}catch(__react_docgen_typescript_loader_error){}var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),AstroMenuItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroMenu/AstroMenuItem.module.scss"),AstroMenuItem_module_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroMenuItem_module.Z,AstroMenuItem_module_options);const AstroMenu_AstroMenuItem_module=AstroMenuItem_module.Z.locals||{};var _excluded=["children"],AstroMenuItem=function AstroMenuItem(props){var children=props.children,rest=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("div",Object.assign({className:AstroMenu_AstroMenuItem_module.astroMenuItemContainer},rest,{children}))};AstroMenuItem.displayName="AstroMenuItem";try{AstroMenuItem.displayName="AstroMenuItem",AstroMenuItem.__docgenInfo={description:"",displayName:"AstroMenuItem",props:{children:{defaultValue:null,description:"The content for the AstroMenuItem",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroMenu/AstroMenuItem.tsx#AstroMenuItem"]={docgenInfo:AstroMenuItem.__docgenInfo,name:"AstroMenuItem",path:"src/components/AstroMenu/AstroMenuItem.tsx#AstroMenuItem"})}catch(__react_docgen_typescript_loader_error){}var AstroButton=__webpack_require__("./src/components/AstroButton/AstroButton.tsx");const AstroMenu_stories={component:AstroMenu,title:"Components/AstroMenu"};var Template=function Template(args){var _React$useState=react.useState(void 0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_React$useState3=react.useState(!0),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),isOpen=_React$useState4[0],setIsOpen=_React$useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"Verdana",paddingBottom:"4px",width:"200px"},children:["Value: ",value]}),(0,jsx_runtime.jsxs)(AstroMenu,Object.assign({},args,{isOpen,onOpen:function onOpen(){return setIsOpen(!0)},onClose:function onClose(itemValue){setIsOpen(!1),void 0!==itemValue&&setValue(itemValue)},trigger:(0,jsx_runtime.jsx)(AstroButton.f,{children:"Trigger"}),children:[(0,jsx_runtime.jsx)(AstroMenuItem,{children:"Menu Item One"}),(0,jsx_runtime.jsx)(AstroMenuItem,{children:"Menu Item Two"}),(0,jsx_runtime.jsx)(AstroMenuItem,{children:"Menu Item Three"}),(0,jsx_runtime.jsx)(AstroMenuItem,{children:"Menu Item Four"})]}))]})},Default=Template.bind({}),AlignmentBottomLeft=Template.bind({});AlignmentBottomLeft.args={alignment:"bottomLeft"};var AlignmentBottomRight=Template.bind({});AlignmentBottomRight.args={alignment:"bottomRight"};var AlignmentBottomCenter=Template.bind({});AlignmentBottomCenter.args={alignment:"bottomCenter"};var AlignmentTopLeft=Template.bind({});AlignmentTopLeft.args={alignment:"topLeft"};var AlignmentTopRight=Template.bind({});AlignmentTopRight.args={alignment:"topRight"};var AlignmentTopCenter=Template.bind({});AlignmentTopCenter.args={alignment:"topCenter"},Default.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},Default.parameters),AlignmentBottomLeft.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentBottomLeft.parameters),AlignmentBottomRight.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentBottomRight.parameters),AlignmentBottomCenter.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentBottomCenter.parameters),AlignmentTopLeft.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentTopLeft.parameters),AlignmentTopRight.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentTopRight.parameters),AlignmentTopCenter.parameters=Object.assign({storySource:{source:'(args) => {\n  const [value, setValue] = React.useState<string | undefined>(undefined);\n  const [isOpen, setIsOpen] = React.useState<boolean>(true);\n\n  return (\n    <>\n      <div\n        style={{ fontFamily: "Verdana", paddingBottom: "4px", width: "200px" }}\n      >\n        Value: {value}\n      </div>\n      <AstroMenu\n        {...args}\n        isOpen={isOpen}\n        onOpen={() => setIsOpen(true)}\n        onClose={(itemValue) => {\n          setIsOpen(false);\n          if (itemValue !== undefined) {\n            setValue(itemValue);\n          }\n        }}\n        trigger={<AstroButton>Trigger</AstroButton>}\n      >\n        <AstroMenuItem>Menu Item One</AstroMenuItem>\n        <AstroMenuItem>Menu Item Two</AstroMenuItem>\n        <AstroMenuItem>Menu Item Three</AstroMenuItem>\n        <AstroMenuItem>Menu Item Four</AstroMenuItem>\n      </AstroMenu>\n    </>\n  );\n}'}},AlignmentTopCenter.parameters);var __namedExportsOrder=["Default","AlignmentBottomLeft","AlignmentBottomRight","AlignmentBottomCenter","AlignmentTopLeft","AlignmentTopRight","AlignmentTopCenter"]},"./src/components/AstroButton/AstroButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>AstroButton});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),AstroButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroButton/AstroButton.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroButton_module.Z,options);const AstroButton_AstroButton_module=AstroButton_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","disabled","leadingIcon","onClick","size","trailingIcon","type","variant"],AstroButton=react.forwardRef((function(props,ref){var children=props.children,disabled=props.disabled,leadingIcon=props.leadingIcon,onClick=props.onClick,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,trailingIcon=props.trailingIcon,type=props.type,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),classes=classnames_default()(AstroButton_AstroButton_module.astroButton,"small"===size?AstroButton_AstroButton_module.small:"large"===size?AstroButton_AstroButton_module.large:AstroButton_AstroButton_module.medium,"secondary"===variant?AstroButton_AstroButton_module.secondary:AstroButton_AstroButton_module.primary,disabled&&AstroButton_AstroButton_module.disabled),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leadingIcon&&(0,jsx_runtime.jsx)("span",{className:AstroButton_AstroButton_module.leadingIcon,children:leadingIcon}),children,trailingIcon&&(0,jsx_runtime.jsx)("span",{className:AstroButton_AstroButton_module.trailingIcon,children:trailingIcon})]});return(0,jsx_runtime.jsx)("button",Object.assign({className:classes,onClick,disabled,ref,type:"reset"===type?"reset":"submit"===type?"submit":"button"},rest,{children:content}))}));try{AstroButton.displayName="AstroButton",AstroButton.__docgenInfo={description:"",displayName:"AstroButton",props:{children:{defaultValue:null,description:"The content for the AstroButton",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If the AstroButton is disabled",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"The leading icon for the AstroButton",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"The callback fired when the AstroButton is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:'"medium"'},description:"The size of the AstroButton",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},trailingIcon:{defaultValue:null,description:"The trailing icon for the AstroButton",name:"trailingIcon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"The type of the AstroButton",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the AstroButton",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroButton/AstroButton.tsx#AstroButton"]={docgenInfo:AstroButton.__docgenInfo,name:"AstroButton",path:"src/components/AstroButton/AstroButton.tsx#AstroButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/schedulers-fix.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),apply=__webpack_require__("./node_modules/core-js/internals/function-apply.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),userAgent=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),validateArgumentsLength=__webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js"),MSIE=/MSIE .\./.test(userAgent),Function=global.Function,wrap=function(scheduler){return MSIE?function(handler,timeout){var boundArgs=validateArgumentsLength(arguments.length,1)>2,fn=isCallable(handler)?handler:Function(handler),args=boundArgs?arraySlice(arguments,2):void 0;return scheduler(boundArgs?function(){apply(fn,this,args)}:fn,timeout)}:scheduler};module.exports={setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/core-js/modules/web.set-interval.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js").setInterval;$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js").setTimeout;$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout})},"./node_modules/core-js/modules/web.timers.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroButton/AstroButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".astroButton--Lx8JE{border-radius:30px;width:fit-content;font-family:Verdana,Geneva,Tahoma,sans-serif;display:flex;flex-direction:row;align-items:center;column-gap:5px}.astroButton--Lx8JE:hover{cursor:pointer}.primary--t6z08{background-color:#ffb74d;color:#000;border:2px solid #ffb74d}.primary--t6z08:hover,.primary--t6z08:focus{color:#9333ea;border:2px solid #9333ea;outline:none}.primary--t6z08:active{background:#ffcb57}.secondary--lEbco{background-color:#9333ea;color:#000;border:2px solid #9333ea}.secondary--lEbco:hover,.secondary--lEbco:focus{color:#ffb74d;border:2px solid #ffb74d}.secondary--lEbco:active{background:#a04cf0}.small--X5YgG{font-size:12px;padding:6px 8px}.small--X5YgG .leadingIcon--zRl5V,.small--X5YgG .trailingIcon--Y1EXn{height:12px}.medium--KMxPy{font-size:16px;padding:8px 10px}.medium--KMxPy .leadingIcon--zRl5V,.medium--KMxPy .trailingIcon--Y1EXn{height:16px}.large--kv5xa{font-size:20px;padding:10px 12px}.large--kv5xa .leadingIcon--zRl5V,.large--kv5xa .trailingIcon--Y1EXn{height:20px}.disabled--Hz_uG{color:gray !important;border:2px solid gray !important;background:rgba(0,0,0,.1) !important;cursor:default !important}","",{version:3,sources:["webpack://./src/components/AstroButton/AstroButton.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,oBACE,kBAAA,CACA,iBAAA,CACA,4CAAA,CAIA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CANA,0BACE,cAAA,CAQJ,gBACE,wBCfc,CDgBd,UAAA,CACA,wBAAA,CACA,4CAEE,aClBc,CDmBd,wBAAA,CACA,YAAA,CAEF,uBACE,kBCxByB,CD4B7B,kBACE,wBC5BgB,CD6BhB,UAAA,CACA,wBAAA,CACA,gDAEE,aCnCY,CDoCZ,wBAAA,CAEF,yBACE,kBCpC2B,CDwC/B,cACE,cAAA,CACA,eAAA,CACA,qEAEE,WAAA,CAIJ,eACE,cAAA,CACA,gBAAA,CACA,uEAEE,WAAA,CAIJ,cACE,cAAA,CACA,iBAAA,CACA,qEAEE,WAAA,CAIJ,iBACE,qBAAA,CACA,gCAAA,CACA,oCAAA,CACA,yBAAA",sourcesContent:['@use "../../utility/globals";\n\n.astroButton {\n  border-radius: 30px;\n  width: fit-content;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  &:hover {\n    cursor: pointer;\n  }\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.primary {\n  background-color: globals.$primary-color;\n  color: black;\n  border: 2px solid globals.$primary-color;\n  &:hover,\n  &:focus {\n    color: globals.$secondary-color;\n    border: 2px solid globals.$secondary-color;\n    outline: none;\n  }\n  &:active {\n    background: globals.$primary-color-pseudo-class;\n  }\n}\n\n.secondary {\n  background-color: globals.$secondary-color;\n  color: black;\n  border: 2px solid globals.$secondary-color;\n  &:hover,\n  &:focus {\n    color: globals.$primary-color;\n    border: 2px solid globals.$primary-color;\n  }\n  &:active {\n    background: globals.$secondary-color-pseudo-class;\n  }\n}\n\n.small {\n  font-size: 12px;\n  padding: 6px 8px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 12px;\n  }\n}\n\n.medium {\n  font-size: 16px;\n  padding: 8px 10px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 16px;\n  }\n}\n\n.large {\n  font-size: 20px;\n  padding: 10px 12px;\n  .leadingIcon,\n  .trailingIcon {\n    height: 20px;\n  }\n}\n\n.disabled {\n  color: gray !important;\n  border: 2px solid gray !important;\n  background: rgb(0, 0, 0, 0.1) !important;\n  cursor: default !important;\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={astroButton:"astroButton--Lx8JE",primary:"primary--t6z08",secondary:"secondary--lEbco",small:"small--X5YgG",leadingIcon:"leadingIcon--zRl5V",trailingIcon:"trailingIcon--Y1EXn",medium:"medium--KMxPy",large:"large--kv5xa",disabled:"disabled--Hz_uG"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroMenu/AstroMenu.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--Kni6Z{position:relative}.astroMenuLayoutContainer--d5mvs{left:0;top:0;position:absolute;z-index:1}.astroMenuContainer--bIsXi{display:flex;flex-direction:column;background-color:#323232;border-radius:4px;padding:6px 0px;box-shadow:rgba(0,0,0,.35) 0px 5px 15px}.enterBottom--JIZH0{opacity:0;transform:translateY(-8px)}.enterBottomActive--tZoo6{transform:translateY(0px);opacity:1;transition:all 150ms ease-in-out}.exitBottom--IqG51{transform:translateY(0px);opacity:1}.exitBottomActive--zjPmt{transform:translateY(-8px);opacity:0;transition:all 150ms ease-in-out}.enterTop--SRm8B{opacity:0;transform:translateY(8px)}.enterTopActive--m7Bh7{transform:translateY(0px);opacity:1;transition:all 150ms ease-in-out}.exitTop--l3iHj{transform:translateY(0px);opacity:1}.exitTopActive--us7lm{transform:translateY(8px);opacity:0;transition:all 150ms ease-in-out}","",{version:3,sources:["webpack://./src/components/AstroMenu/AstroMenu.module.scss"],names:[],mappings:"AAAA,kBACE,iBAAA,CAGF,iCACE,MAAA,CACA,KAAA,CACA,iBAAA,CACA,SAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,uCAAA,CAGF,oBACE,SAAA,CACA,0BAAA,CAGF,0BACE,yBAAA,CACA,SAAA,CACA,gCAAA,CAGF,mBACE,yBAAA,CACA,SAAA,CAGF,yBACE,0BAAA,CACA,SAAA,CACA,gCAAA,CAGF,iBACE,SAAA,CACA,yBAAA,CAGF,uBACE,yBAAA,CACA,SAAA,CACA,gCAAA,CAGF,gBACE,yBAAA,CACA,SAAA,CAGF,sBACE,yBAAA,CACA,SAAA,CACA,gCAAA",sourcesContent:[".container {\n  position: relative;\n}\n\n.astroMenuLayoutContainer {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.astroMenuContainer {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(50, 50, 50);\n  border-radius: 4px;\n  padding: 6px 0px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.enterBottom {\n  opacity: 0;\n  transform: translateY(-8px);\n}\n\n.enterBottomActive {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: all 150ms ease-in-out;\n}\n\n.exitBottom {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.exitBottomActive {\n  transform: translateY(-8px);\n  opacity: 0;\n  transition: all 150ms ease-in-out;\n}\n\n.enterTop {\n  opacity: 0;\n  transform: translateY(8px);\n}\n\n.enterTopActive {\n  transform: translateY(0px);\n  opacity: 1;\n  transition: all 150ms ease-in-out;\n}\n\n.exitTop {\n  transform: translateY(0px);\n  opacity: 1;\n}\n\n.exitTopActive {\n  transform: translateY(8px);\n  opacity: 0;\n  transition: all 150ms ease-in-out;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"container--Kni6Z",astroMenuLayoutContainer:"astroMenuLayoutContainer--d5mvs",astroMenuContainer:"astroMenuContainer--bIsXi",enterBottom:"enterBottom--JIZH0",enterBottomActive:"enterBottomActive--tZoo6",exitBottom:"exitBottom--IqG51",exitBottomActive:"exitBottomActive--zjPmt",enterTop:"enterTop--SRm8B",enterTopActive:"enterTopActive--m7Bh7",exitTop:"exitTop--l3iHj",exitTopActive:"exitTopActive--us7lm"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroMenu/AstroMenuItem.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".astroMenuItemContainer--pM1QU{color:#fff;cursor:pointer;font-family:Verdana,Geneva,Tahoma,sans-serif;padding:0px 8px;user-select:none}.astroMenuItemContainer--pM1QU:hover,.astroMenuItemContainer--pM1QU:focus{background-color:#505050}","",{version:3,sources:["webpack://./src/components/AstroMenu/AstroMenuItem.module.scss"],names:[],mappings:"AAAA,+BACE,UAAA,CACA,cAAA,CACA,4CAAA,CACA,eAAA,CACA,gBAAA,CACA,0EAEE,wBAAA",sourcesContent:[".astroMenuItemContainer {\n  color: white;\n  cursor: pointer;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  padding: 0px 8px;\n  user-select: none;\n  &:hover,\n  &:focus {\n    background-color: rgb(80, 80, 80);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={astroMenuItemContainer:"astroMenuItemContainer--pM1QU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}}}]);
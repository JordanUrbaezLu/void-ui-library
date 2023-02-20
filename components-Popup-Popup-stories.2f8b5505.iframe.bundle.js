"use strict";(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[5726],{"./src/components/Popup/Popup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PositionBottom:()=>PositionBottom,PositionBottomWithIndicator:()=>PositionBottomWithIndicator,PositionBottomWithIndicatorAndLongText:()=>PositionBottomWithIndicatorAndLongText,PositionLeft:()=>PositionLeft,PositionLeftWithIndicator:()=>PositionLeftWithIndicator,PositionLeftWithIndicatorAndLongText:()=>PositionLeftWithIndicatorAndLongText,PositionRight:()=>PositionRight,PositionRightWithIndicator:()=>PositionRightWithIndicator,PositionRightWithIndicatorAndLongText:()=>PositionRightWithIndicatorAndLongText,PositionTop:()=>PositionTop,PositionTopWithIndicator:()=>PositionTopWithIndicator,PositionTopWithIndicatorAndLongText:()=>PositionTopWithIndicatorAndLongText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Popup_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Popup_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/Popup.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Popup_module.Z,options);const Popup_Popup_module=Popup_module.Z.locals||{};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hooks=__webpack_require__("./src/hooks/index.tsx"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),BasePopup_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/BasePopup.module.scss"),BasePopup_module_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(BasePopup_module.Z,BasePopup_module_options);const Popup_BasePopup_module=BasePopup_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BasePopup=react.forwardRef((function(props,ref){var hasIndicator=props.hasIndicator,position=props.position,text=props.text;return(0,jsx_runtime.jsx)("div",{className:classnames_default()(hasIndicator&&Popup_BasePopup_module.indicator,"bottom"===position&&Popup_BasePopup_module.bottom,"top"===position&&Popup_BasePopup_module.top,"left"===position&&Popup_BasePopup_module.left,"right"===position&&Popup_BasePopup_module.right,Popup_BasePopup_module.basePopup),ref,role:"tooltip",children:(0,jsx_runtime.jsx)(Typography.Z,{type:"h2",variant:"primary",children:text})})}));BasePopup.displayName="BasePopup";try{BasePopup.displayName="BasePopup",BasePopup.__docgenInfo={description:"",displayName:"BasePopup",props:{hasIndicator:{defaultValue:null,description:"If the Popup has an indicator",name:"hasIndicator",required:!0,type:{name:"boolean"}},position:{defaultValue:null,description:"The position of the Popup",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},text:{defaultValue:null,description:"The text for the Popup",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popup/BasePopup.tsx#BasePopup"]={docgenInfo:BasePopup.__docgenInfo,name:"BasePopup",path:"src/components/Popup/BasePopup.tsx#BasePopup"})}catch(__react_docgen_typescript_loader_error){}var PopupLayoutContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/PopupLayoutContainer.module.scss"),PopupLayoutContainer_module_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(PopupLayoutContainer_module.Z,PopupLayoutContainer_module_options);const Popup_PopupLayoutContainer_module=PopupLayoutContainer_module.Z.locals||{};var getLayoutStyle=__webpack_require__("./src/utility/getLayoutStyle.tsx"),getPopupPositionStyle=function getPopupPositionStyle(_ref){var position=_ref.position,referrerRef=_ref.referrerRef,targetRef=_ref.targetRef;return(0,getLayoutStyle.V)({calculateLayout:function calculateLayout(_ref2){var referrerHeight=_ref2.referrerHeight,referrerWidth=_ref2.referrerWidth,targetHeight=_ref2.targetHeight,targetWidth=_ref2.targetWidth;return{left:"left"===position?-1*referrerWidth:"right"===position?targetWidth:(targetWidth-referrerWidth)/2,top:"bottom"===position?targetHeight:"top"===position?-1*referrerHeight:(targetHeight-referrerHeight)/2}},referrerRef,targetRef})};try{getPopupPositionStyle.displayName="getPopupPositionStyle",getPopupPositionStyle.__docgenInfo={description:"",displayName:"getPopupPositionStyle",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},referrerRef:{defaultValue:null,description:"",name:"referrerRef",required:!0,type:{name:"RefObject<HTMLElement>"}},targetRef:{defaultValue:null,description:"",name:"targetRef",required:!0,type:{name:"RefObject<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utility/getPopupPositionStyle.tsx#getPopupPositionStyle"]={docgenInfo:getPopupPositionStyle.__docgenInfo,name:"getPopupPositionStyle",path:"src/utility/getPopupPositionStyle.tsx#getPopupPositionStyle"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["className","hasIndicator","position","triggerRef"],PopupLayoutContainer=function PopupLayoutContainer(props){var className=props.className,hasIndicator=props.hasIndicator,position=props.position,triggerRef=props.triggerRef,rest=(0,objectWithoutProperties.Z)(props,_excluded),_React$useState=react.useState({visibility:"hidden"}),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),rootStyle=_React$useState2[0],setRootStyle=_React$useState2[1],referrerRef=react.useRef(null);return react.useEffect((function(){setRootStyle(getPopupPositionStyle({position,referrerRef,targetRef:triggerRef}))}),[position,referrerRef,triggerRef]),(0,jsx_runtime.jsx)("div",Object.assign({className:classnames_default()(className,hasIndicator&&Popup_PopupLayoutContainer_module.hasIndicator,"top"===position&&Popup_PopupLayoutContainer_module.top,"bottom"===position&&Popup_PopupLayoutContainer_module.bottom,"left"===position&&Popup_PopupLayoutContainer_module.left,"right"===position&&Popup_PopupLayoutContainer_module.right,Popup_PopupLayoutContainer_module.layoutContainer),ref:referrerRef,style:rootStyle},rest))};PopupLayoutContainer.displayName="PopupLayoutContainer",PopupLayoutContainer.displayName="PopupLayoutContainer";try{PopupLayoutContainer.displayName="PopupLayoutContainer",PopupLayoutContainer.__docgenInfo={description:"",displayName:"PopupLayoutContainer",props:{hasIndicator:{defaultValue:null,description:"If the Popup has an indicator",name:"hasIndicator",required:!0,type:{name:"boolean"}},position:{defaultValue:null,description:"The position for the Popup",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},triggerRef:{defaultValue:null,description:"The trigger ref for the Popup",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popup/PopupLayoutContainer.tsx#PopupLayoutContainer"]={docgenInfo:PopupLayoutContainer.__docgenInfo,name:"PopupLayoutContainer",path:"src/components/Popup/PopupLayoutContainer.tsx#PopupLayoutContainer"})}catch(__react_docgen_typescript_loader_error){}var Popup_excluded=["children","hasIndicator","isOpen","onClose","onOpen","position","text"],Popup=function Popup(props){var children=props.children,_props$hasIndicator=props.hasIndicator,hasIndicator=void 0!==_props$hasIndicator&&_props$hasIndicator,_props$isOpen=props.isOpen,isOpen=void 0!==_props$isOpen&&_props$isOpen,onClose=props.onClose,onOpen=props.onOpen,_props$position=props.position,position=void 0===_props$position?"bottom":_props$position,text=props.text,rest=(0,objectWithoutProperties.Z)(props,Popup_excluded),popupRef=react.useRef(null),triggerRef=react.useRef(null);return(0,hooks.wx)(triggerRef,onOpen),(0,hooks.i5)(triggerRef,onOpen),(0,hooks.x5)(triggerRef,onClose),(0,hooks.pP)(triggerRef,onClose),(0,jsx_runtime.jsxs)("span",Object.assign({className:classnames_default()("bottom"===position&&Popup_Popup_module.bottom,"top"===position&&Popup_Popup_module.top,"left"===position&&Popup_Popup_module.left,"right"===position&&Popup_Popup_module.right,Popup_Popup_module.container)},rest,{children:[react.cloneElement(react.Children.only(children),{ref:triggerRef,role:"button",tabIndex:0}),(0,jsx_runtime.jsx)(CSSTransition.Z,{classNames:{enter:Popup_Popup_module.enter,enterActive:Popup_Popup_module.enterActive,exit:Popup_Popup_module.exit,exitActive:Popup_Popup_module.exitActive},in:isOpen,mountOnEnter:!0,nodeRef:popupRef,timeout:200,unmountOnExit:!0,children:(0,jsx_runtime.jsx)(PopupLayoutContainer,{hasIndicator,position,triggerRef,children:(0,jsx_runtime.jsx)(BasePopup,{hasIndicator,position,ref:popupRef,text})})})]}))};Popup.displayName="Popup",Popup.displayName="Popup";try{Popup.displayName="Popup",Popup.__docgenInfo={description:"",displayName:"Popup",props:{children:{defaultValue:null,description:"The trigger for the Popup",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},hasIndicator:{defaultValue:{value:"false"},description:"If the Popup has an indicator",name:"hasIndicator",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:{value:"false"},description:"If the Popup is open",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"The callback fired when the Popup closes",name:"onClose",required:!0,type:{name:"(itemValue?: string | undefined) => void"}},onOpen:{defaultValue:null,description:"The callback fired when the Popup opens",name:"onOpen",required:!0,type:{name:"() => void"}},position:{defaultValue:{value:'"bottom"'},description:"The position of the Popup",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},text:{defaultValue:null,description:"The text for the Popup",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popup/Popup.tsx#Popup"]={docgenInfo:Popup.__docgenInfo,name:"Popup",path:"src/components/Popup/Popup.tsx#Popup"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),allowLayoutCalculations=__webpack_require__("./.storybook/utilities/allowLayoutCalculations.tsx");const Popup_stories={component:Popup,parameters:{chromatic:{delay:2e3},layout:"centered"},title:"Components/Popup"};var Template=function Template(args){var _React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1];return(0,jsx_runtime.jsx)(Popup,Object.assign({text:"I am a Popup!"},args,{isOpen,onClose:function onClose(){return setIsOpen(!1)},onOpen:function onOpen(){return setIsOpen(!0)},children:(0,jsx_runtime.jsx)(Button.z,{variant:"secondary",children:"Hover Me!"})}))};Template.displayName="Template";var Default=Template.bind({}),PositionBottom=Template.bind({});PositionBottom.args={position:"bottom"},PositionBottom.play=function(_ref){var canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionBottom.storyName="Position: Bottom";var PositionBottomWithIndicator=Template.bind({});PositionBottomWithIndicator.args={hasIndicator:!0,position:"bottom"},PositionBottomWithIndicator.play=function(_ref2){var canvasElement=_ref2.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionBottomWithIndicator.storyName="Position: Bottom with Indicator";var PositionBottomWithIndicatorAndLongText=Template.bind({});PositionBottomWithIndicatorAndLongText.args={hasIndicator:!0,position:"bottom",text:"I am some very, very, very, very long text!!!!!!"},PositionBottomWithIndicatorAndLongText.play=function(_ref3){var canvasElement=_ref3.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionBottomWithIndicatorAndLongText.storyName="Position: Bottom with Indicator and Long Text ";var PositionTop=Template.bind({});PositionTop.args={position:"top"},PositionTop.play=function(_ref4){var canvasElement=_ref4.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionTop.storyName="Position: Top";var PositionTopWithIndicator=Template.bind({});PositionTopWithIndicator.args={hasIndicator:!0,position:"top"},PositionTopWithIndicator.play=function(_ref5){var canvasElement=_ref5.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionTopWithIndicator.storyName="Position: Top with Indicator";var PositionTopWithIndicatorAndLongText=Template.bind({});PositionTopWithIndicatorAndLongText.args={hasIndicator:!0,position:"top",text:"I am some very, very, very, very long text!!!!!!"},PositionTopWithIndicatorAndLongText.play=function(_ref6){var canvasElement=_ref6.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionTopWithIndicatorAndLongText.storyName="Position: Top with Indicator and Long Text ";var PositionLeft=Template.bind({});PositionLeft.args={position:"left"},PositionLeft.play=function(_ref7){var canvasElement=_ref7.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionLeft.storyName="Position: Left";var PositionLeftWithIndicator=Template.bind({});PositionLeftWithIndicator.args={hasIndicator:!0,position:"left"},PositionLeftWithIndicator.play=function(_ref8){var canvasElement=_ref8.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionLeftWithIndicator.storyName="Position: Left with Indicator";var PositionLeftWithIndicatorAndLongText=Template.bind({});PositionLeftWithIndicatorAndLongText.args={hasIndicator:!0,position:"left",text:"I am some very, very, very, very long text!!!!!!"},PositionLeftWithIndicatorAndLongText.play=function(_ref9){var canvasElement=_ref9.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionLeftWithIndicatorAndLongText.storyName="Position: Left with Indicator and Long Text ";var PositionRight=Template.bind({});PositionRight.args={position:"right"},PositionRight.play=function(_ref10){var canvasElement=_ref10.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionRight.storyName="Position: Right";var PositionRightWithIndicator=Template.bind({});PositionRightWithIndicator.args={hasIndicator:!0,position:"right"},PositionRightWithIndicator.play=function(_ref11){var canvasElement=_ref11.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionRightWithIndicator.storyName="Position: Right with Indicator";var PositionRightWithIndicatorAndLongText=Template.bind({});PositionRightWithIndicatorAndLongText.args={hasIndicator:!0,position:"right",text:"I am some very, very, very, very long text!!!!!!"},PositionRightWithIndicatorAndLongText.play=function(_ref12){var canvasElement=_ref12.canvasElement,canvas=(0,esm.uh)(canvasElement);(0,allowLayoutCalculations.z)((function(){return esm.mV.hover(canvas.getByRole("button"))}))},PositionRightWithIndicatorAndLongText.storyName="Position: Right with Indicator and Long Text ",Default.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},Default.parameters),PositionBottom.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionBottom.parameters),PositionBottomWithIndicator.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionBottomWithIndicator.parameters),PositionBottomWithIndicatorAndLongText.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionBottomWithIndicatorAndLongText.parameters),PositionTop.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionTop.parameters),PositionTopWithIndicator.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionTopWithIndicator.parameters),PositionTopWithIndicatorAndLongText.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionTopWithIndicatorAndLongText.parameters),PositionLeft.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionLeft.parameters),PositionLeftWithIndicator.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionLeftWithIndicator.parameters),PositionLeftWithIndicatorAndLongText.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionLeftWithIndicatorAndLongText.parameters),PositionRight.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionRight.parameters),PositionRightWithIndicator.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionRightWithIndicator.parameters),PositionRightWithIndicatorAndLongText.parameters=Object.assign({storySource:{source:'(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Popup\n      text="I am a Popup!"\n      {...args}\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      onOpen={() => setIsOpen(true)}\n    >\n      <Button variant="secondary">Hover Me!</Button>\n    </Popup>\n  );\n}'}},PositionRightWithIndicatorAndLongText.parameters);var __namedExportsOrder=["Default","PositionBottom","PositionBottomWithIndicator","PositionBottomWithIndicatorAndLongText","PositionTop","PositionTopWithIndicator","PositionTopWithIndicatorAndLongText","PositionLeft","PositionLeftWithIndicator","PositionLeftWithIndicatorAndLongText","PositionRight","PositionRightWithIndicator","PositionRightWithIndicatorAndLongText"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/BasePopup.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,'.basePopup--nE_gH{background:#3c3c3c;border-radius:4px;box-shadow:rgba(0,0,0,.35) 0 5px 15px;padding:8px;position:relative;text-align:center;width:175px}.basePopup--nE_gH.indicator--qayRA::before{background-color:#3c3c3c;content:"";height:10px;position:absolute;transform:translate(-50%, -50%) rotate(45deg);width:10px;z-index:2}.bottom--_TnYu::before{left:50%;top:0}.top--PIzNj::before{left:50%;top:100%}.left--HfX09::before{left:100%;top:50%}.right--bjhoZ::before{left:0%;top:50%}',"",{version:3,sources:["webpack://./src/components/Popup/BasePopup.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,kBACE,kBCDyB,CDEzB,iBAAA,CACA,qCAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CAGE,2CACE,wBCXqB,CDYrB,UAAA,CACA,WAAA,CACA,iBAAA,CACA,6CAAA,CACA,UAAA,CACA,SAAA,CAMJ,uBACE,QAAA,CACA,KAAA,CAKF,oBACE,QAAA,CACA,QAAA,CAKF,qBACE,SAAA,CACA,OAAA,CAKF,sBACE,OAAA,CACA,OAAA",sourcesContent:['@use "../../utility/globals";\n\n.basePopup {\n  background: globals.$primary-background-color;\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;\n  padding: 8px;\n  position: relative;\n  text-align: center;\n  width: 175px;\n\n  &.indicator {\n    &::before {\n      background-color: globals.$primary-background-color;\n      content: "";\n      height: 10px;\n      position: absolute;\n      transform: translate(-50%, -50%) rotate(45deg);\n      width: 10px;\n      z-index: 2;\n    }\n  }\n}\n\n.bottom {\n  &::before {\n    left: 50%;\n    top: 0;\n  }\n}\n\n.top {\n  &::before {\n    left: 50%;\n    top: 100%;\n  }\n}\n\n.left {\n  &::before {\n    left: 100%;\n    top: 50%;\n  }\n}\n\n.right {\n  &::before {\n    left: 0%;\n    top: 50%;\n  }\n}\n','@import "https://fonts.cdnfonts.com/css/poppins";\n\n$primary-background-color: rgb(60 60 60);\n$primary-background-color-hover-and-focus: rgb(100 100 100);\n$primary-background-color-active: rgb(38 25 49);\n$primary-border-color: rgb(20 20 20);\n$primary-border-color-hover-and-focus: rgb(35 10 35);\n$primary-border-color-active: rgb(0 0 0);\n$primary-text-color: rgb(235 235 235);\n$font-family: "Poppins", sans-serif;\n$primary-box-shadow: rgb(56 20 56);\n$secondary-text-color: rgb(100 100 100);\n$secondary-text-color-hover-and-focus: rgb(38 25 49);\n$secondary-border-color-hover-and-focus: rgb(38 25 49);\n$secondary-background-color-hover-and-active: rgb(210 210 210);\n$secondary-background-color-active: rgb(177, 154, 183);\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={basePopup:"basePopup--nE_gH",indicator:"indicator--qayRA",bottom:"bottom--_TnYu",top:"top--PIzNj",left:"left--HfX09",right:"right--bjhoZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/Popup.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.cdnfonts.com/css/poppins);"]),___CSS_LOADER_EXPORT___.push([module.id,".container--HjPoy{box-sizing:inherit;display:inline-block;position:relative}.enter--iSZvR{opacity:0}.top--zyUt1 .enter--iSZvR{transform:translateY(-50px)}.bottom--NFKvx .enter--iSZvR{transform:translateY(50px)}.left--TZbAN .enter--iSZvR{transform:translateX(-50px)}.right--sLWfm .enter--iSZvR{transform:translateX(50px)}.enterActive--GdFon{opacity:1;transition:all 200ms}.container--HjPoy .enterActive--GdFon{transform:none}.exit--IykP4{opacity:1}.exitActive--FD6TH{opacity:0;transition:all 200ms}","",{version:3,sources:["webpack://./src/components/Popup/Popup.module.scss"],names:[],mappings:"AAEA,kBACE,kBAAA,CACA,oBAAA,CACA,iBAAA,CAGF,cACE,SAAA,CAEA,0BACE,2BAAA,CAGF,6BACE,0BAAA,CAGF,2BACE,2BAAA,CAGF,4BACE,0BAAA,CAIJ,oBACE,SAAA,CACA,oBAAA,CAEA,sCACE,cAAA,CAIJ,aACE,SAAA,CAGF,mBACE,SAAA,CACA,oBAAA",sourcesContent:['@use "../../utility/globals";\n\n.container {\n  box-sizing: inherit;\n  display: inline-block;\n  position: relative;\n}\n\n.enter {\n  opacity: 0;\n\n  .top & {\n    transform: translateY(-50px);\n  }\n\n  .bottom & {\n    transform: translateY(50px);\n  }\n\n  .left & {\n    transform: translateX(-50px);\n  }\n\n  .right & {\n    transform: translateX(50px);\n  }\n}\n\n.enterActive {\n  opacity: 1;\n  transition: all 200ms;\n\n  .container & {\n    transform: none;\n  }\n}\n\n.exit {\n  opacity: 1;\n}\n\n.exitActive {\n  opacity: 0;\n  transition: all 200ms;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"container--HjPoy",enter:"enter--iSZvR",top:"top--zyUt1",bottom:"bottom--NFKvx",left:"left--TZbAN",right:"right--sLWfm",enterActive:"enterActive--GdFon",exit:"exit--IykP4",exitActive:"exitActive--FD6TH"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Popup/PopupLayoutContainer.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".layoutContainer--Aamag{left:0;position:absolute;top:0;z-index:200}.bottom--OLMOx{padding-top:8px}.bottom--OLMOx.hasIndicator--JTZoO{padding-top:13px}.top--rw98d{padding-bottom:8px}.top--rw98d.hasIndicator--JTZoO{padding-bottom:13px}.left--OaFAH{padding-right:8px}.left--OaFAH.hasIndicator--JTZoO{padding-right:13px}.right--PjxKs{padding-left:8px}.right--PjxKs.hasIndicator--JTZoO{padding-left:13px}","",{version:3,sources:["webpack://./src/components/Popup/PopupLayoutContainer.module.scss"],names:[],mappings:"AAAA,wBACE,MAAA,CACA,iBAAA,CACA,KAAA,CACA,WAAA,CAGF,eACE,eAAA,CAEA,mCACE,gBAAA,CAIJ,YACE,kBAAA,CAEA,gCACE,mBAAA,CAIJ,aACE,iBAAA,CAEA,iCACE,kBAAA,CAIJ,cACE,gBAAA,CAEA,kCACE,iBAAA",sourcesContent:[".layoutContainer {\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 200;\n}\n\n.bottom {\n  padding-top: 8px;\n\n  &.hasIndicator {\n    padding-top: 13px;\n  }\n}\n\n.top {\n  padding-bottom: 8px;\n\n  &.hasIndicator {\n    padding-bottom: 13px;\n  }\n}\n\n.left {\n  padding-right: 8px;\n\n  &.hasIndicator {\n    padding-right: 13px;\n  }\n}\n\n.right {\n  padding-left: 8px;\n\n  &.hasIndicator {\n    padding-left: 13px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layoutContainer:"layoutContainer--Aamag",bottom:"bottom--OLMOx",hasIndicator:"hasIndicator--JTZoO",top:"top--rw98d",left:"left--OaFAH",right:"right--PjxKs"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
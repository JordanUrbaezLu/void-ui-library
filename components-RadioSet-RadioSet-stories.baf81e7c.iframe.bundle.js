"use strict";(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[3321],{"./src/components/RadioSet/RadioSet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Selected:()=>Selected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioSet_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js")),Radio=__webpack_require__("./src/components/Radio/Radio.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),RadioSet_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/RadioSet/RadioSet.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(RadioSet_module.Z,options);const RadioSet_RadioSet_module=RadioSet_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","className"],RadioSet=function RadioSet(props){var children=props.children,className=props.className,rest=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("ul",Object.assign({className:classnames_default()(RadioSet_RadioSet_module.radioSet,className),role:"list"},rest,{children:react.Children.map(children,(function(radio,index){return radio.type===Radio.Y?(0,jsx_runtime.jsx)("li",{className:RadioSet_RadioSet_module.radioSetItem,role:"listitem",children:radio},index):null}))}))};RadioSet.displayName="RadioSet",RadioSet.displayName="RadioSet";try{RadioSet.displayName="RadioSet",RadioSet.__docgenInfo={description:"",displayName:"RadioSet",props:{children:{defaultValue:null,description:"The Radios in the Radios Set",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioSet/RadioSet.tsx#RadioSet"]={docgenInfo:RadioSet.__docgenInfo,name:"RadioSet",path:"src/components/RadioSet/RadioSet.tsx#RadioSet"})}catch(__react_docgen_typescript_loader_error){}const RadioSet_stories={component:RadioSet,title:"Components/Inputs/RadioSet"};var Default=function Default(){var _React$useState=react.useState([!1,!1,!1,!1]),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isSelectedArray=_React$useState2[0],setIsSelectedArray=_React$useState2[1];return(0,jsx_runtime.jsxs)(RadioSet,{children:[(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[0],onChange:function onChange(){return setIsSelectedArray([!0,!1,!1,!1])},children:"Galaxy"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[1],onChange:function onChange(){return setIsSelectedArray([!1,!0,!1,!1])},children:"Dark Matter"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[2],onChange:function onChange(){return setIsSelectedArray([!1,!1,!0,!1])},children:"Gravity"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[3],onChange:function onChange(){return setIsSelectedArray([!1,!1,!1,!0])},children:"Void"})]})};Default.displayName="Default";var Selected=function Selected(){var _React$useState3=react.useState([!1,!1,!0,!1]),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),isSelectedArray=_React$useState4[0],setIsSelectedArray=_React$useState4[1];return(0,jsx_runtime.jsxs)(RadioSet,{children:[(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[0],onChange:function onChange(){return setIsSelectedArray([!0,!1,!1,!1])},children:"Galaxy"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[1],onChange:function onChange(){return setIsSelectedArray([!1,!0,!1,!1])},children:"Dark Matter"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[2],onChange:function onChange(){return setIsSelectedArray([!1,!1,!0,!1])},children:"Gravity"}),(0,jsx_runtime.jsx)(Radio.Y,{isSelected:isSelectedArray[3],onChange:function onChange(){return setIsSelectedArray([!1,!1,!1,!0])},children:"Void"})]})};Selected.displayName="Selected",Default.parameters=Object.assign({storySource:{source:"() => {\n  const [isSelectedArray, setIsSelectedArray] = React.useState<\n    Array<boolean>\n  >([false, false, false, false]);\n  return (\n    <RadioSet>\n      <Radio\n        isSelected={isSelectedArray[0]}\n        onChange={() =>\n          setIsSelectedArray([true, false, false, false])\n        }\n      >\n        Galaxy\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[1]}\n        onChange={() =>\n          setIsSelectedArray([false, true, false, false])\n        }\n      >\n        Dark Matter\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[2]}\n        onChange={() =>\n          setIsSelectedArray([false, false, true, false])\n        }\n      >\n        Gravity\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[3]}\n        onChange={() =>\n          setIsSelectedArray([false, false, false, true])\n        }\n      >\n        Void\n      </Radio>\n    </RadioSet>\n  );\n}"}},Default.parameters),Selected.parameters=Object.assign({storySource:{source:"() => {\n  const [isSelectedArray, setIsSelectedArray] = React.useState<\n    Array<boolean>\n  >([false, false, true, false]);\n  return (\n    <RadioSet>\n      <Radio\n        isSelected={isSelectedArray[0]}\n        onChange={() =>\n          setIsSelectedArray([true, false, false, false])\n        }\n      >\n        Galaxy\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[1]}\n        onChange={() =>\n          setIsSelectedArray([false, true, false, false])\n        }\n      >\n        Dark Matter\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[2]}\n        onChange={() =>\n          setIsSelectedArray([false, false, true, false])\n        }\n      >\n        Gravity\n      </Radio>\n      <Radio\n        isSelected={isSelectedArray[3]}\n        onChange={() =>\n          setIsSelectedArray([false, false, false, true])\n        }\n      >\n        Void\n      </Radio>\n    </RadioSet>\n  );\n}"}},Selected.parameters);var __namedExportsOrder=["Default","Selected"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/RadioSet/RadioSet.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".radioSet--mwclL{gap:15px;margin:0;padding:0;width:100%}.radioSetItem--KgrWj{list-style:none}","",{version:3,sources:["webpack://./src/components/RadioSet/RadioSet.module.scss"],names:[],mappings:"AAAA,iBACE,QAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CAGF,qBACE,eAAA",sourcesContent:[".radioSet {\n  gap: 15px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.radioSetItem {\n  list-style: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={radioSet:"radioSet--mwclL",radioSetItem:"radioSetItem--KgrWj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
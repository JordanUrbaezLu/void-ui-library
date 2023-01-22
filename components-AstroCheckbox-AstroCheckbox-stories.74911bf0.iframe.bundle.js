/*! For license information please see components-AstroCheckbox-AstroCheckbox-stories.74911bf0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkastro_ui_library=self.webpackChunkastro_ui_library||[]).push([[586],{"./src/components/AstroCheckbox/AstroCheckbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,PrimaryAndLabel:()=>PrimaryAndLabel,Secondary:()=>Secondary,SecondaryAndLabel:()=>SecondaryAndLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AstroCheckbox_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),AstroCheckbox_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroCheckbox/AstroCheckbox.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(AstroCheckbox_module.Z,options);const AstroCheckbox_AstroCheckbox_module=AstroCheckbox_module.Z.locals||{};var index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["isChecked","label","onClick","variant"],AstroCheckbox=function AstroCheckbox(props){var _props$isChecked=props.isChecked,isChecked=void 0!==_props$isChecked&&_props$isChecked,label=props.label,onClick=props.onClick,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),astroCheckboxIcon=classnames_default()(AstroCheckbox_AstroCheckbox_module.astroCheckboxIcon,"primary"===variant&&AstroCheckbox_AstroCheckbox_module.primary,"secondary"===variant&&AstroCheckbox_AstroCheckbox_module.secondary),astroCheckboxBorder=classnames_default()(AstroCheckbox_AstroCheckbox_module.astroCheckboxBorder,"primary"===variant&&AstroCheckbox_AstroCheckbox_module.primary,"secondary"===variant&&AstroCheckbox_AstroCheckbox_module.secondary),astroCheckboxLabel=classnames_default()(AstroCheckbox_AstroCheckbox_module.astroCheckboxLabel,"primary"===variant&&AstroCheckbox_AstroCheckbox_module.primary,"secondary"===variant&&AstroCheckbox_AstroCheckbox_module.secondary,isChecked&&AstroCheckbox_AstroCheckbox_module.checked);return(0,jsx_runtime.jsxs)("div",{className:AstroCheckbox_AstroCheckbox_module.astroCheckboxContainer,role:"checkbox",children:[(0,jsx_runtime.jsxs)("div",Object.assign({className:AstroCheckbox_AstroCheckbox_module.astroCheckbox},rest,{children:[isChecked&&(0,jsx_runtime.jsx)(index_esm.Axp,{className:astroCheckboxIcon,size:34,viewBox:"3 3 18.1 18.1"}),(0,jsx_runtime.jsx)("div",{className:astroCheckboxBorder,onClick})]})),label&&(0,jsx_runtime.jsx)("span",{className:astroCheckboxLabel,children:label})]})};AstroCheckbox.displayName="AstroCheckbox";try{AstroCheckbox.displayName="AstroCheckbox",AstroCheckbox.__docgenInfo={description:"",displayName:"AstroCheckbox",props:{isChecked:{defaultValue:{value:"false"},description:"If the AstroCheckbox is on",name:"isChecked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the AstroCheckbox",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The callback fired when the AstroCheckbox is clicked",name:"onClick",required:!0,type:{name:"() => void"}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the AstroCheckbox",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AstroCheckbox/AstroCheckbox.tsx#AstroCheckbox"]={docgenInfo:AstroCheckbox.__docgenInfo,name:"AstroCheckbox",path:"src/components/AstroCheckbox/AstroCheckbox.tsx#AstroCheckbox"})}catch(__react_docgen_typescript_loader_error){}const AstroCheckbox_stories={component:AstroCheckbox,title:"Components/AstroCheckbox"};var Template=function Template(args){var _React$useState=react.useState(!0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),isChecked=_React$useState2[0],setIsChecked=_React$useState2[1];return(0,jsx_runtime.jsx)(AstroCheckbox,Object.assign({},args,{isChecked,onClick:function onClick(){return setIsChecked(!isChecked)}}))};Template.displayName="Template";var Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};var Secondary=Template.bind({});Secondary.args={variant:"secondary"};var PrimaryAndLabel=Template.bind({});PrimaryAndLabel.args={label:"Astro Checkbox Label",variant:"primary"};var SecondaryAndLabel=Template.bind({});SecondaryAndLabel.args={label:"Astro Checkbox Label",variant:"secondary"},Default.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [isChecked, setIsChecked] = React.useState<boolean>(true);\n\n  return (\n    <AstroCheckbox\n      {...args}\n      isChecked={isChecked}\n      onClick={() => setIsChecked(!isChecked)}\n    />\n  );\n}"}},Default.parameters),Primary.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [isChecked, setIsChecked] = React.useState<boolean>(true);\n\n  return (\n    <AstroCheckbox\n      {...args}\n      isChecked={isChecked}\n      onClick={() => setIsChecked(!isChecked)}\n    />\n  );\n}"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [isChecked, setIsChecked] = React.useState<boolean>(true);\n\n  return (\n    <AstroCheckbox\n      {...args}\n      isChecked={isChecked}\n      onClick={() => setIsChecked(!isChecked)}\n    />\n  );\n}"}},Secondary.parameters),PrimaryAndLabel.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [isChecked, setIsChecked] = React.useState<boolean>(true);\n\n  return (\n    <AstroCheckbox\n      {...args}\n      isChecked={isChecked}\n      onClick={() => setIsChecked(!isChecked)}\n    />\n  );\n}"}},PrimaryAndLabel.parameters),SecondaryAndLabel.parameters=Object.assign({storySource:{source:"(\n  args\n) => {\n  const [isChecked, setIsChecked] = React.useState<boolean>(true);\n\n  return (\n    <AstroCheckbox\n      {...args}\n      isChecked={isChecked}\n      onClick={() => setIsChecked(!isChecked)}\n    />\n  );\n}"}},SecondaryAndLabel.parameters);var __namedExportsOrder=["Default","Primary","Secondary","PrimaryAndLabel","SecondaryAndLabel"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AstroCheckbox/AstroCheckbox.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".astroCheckboxContainer--OFfZi{display:flex;align-items:center}.astroCheckbox--vUUTy{position:relative;max-width:34px;max-height:34px}.astroCheckboxBorder--H0ymU{display:block;border-radius:4px;width:26px;height:26px;cursor:pointer}.astroCheckboxBorder--H0ymU.primary--ne39V{border:4px solid #ffb74d}.astroCheckboxBorder--H0ymU.secondary--QGWff{border:4px solid #9333ea}.astroCheckboxIcon--Lzqcx{position:absolute;top:0;left:0;z-index:-1}.astroCheckboxIcon--Lzqcx.primary--ne39V{color:#ffb74d}.astroCheckboxIcon--Lzqcx.secondary--QGWff{color:#9333ea}.astroCheckboxLabel--nF1E_{font-family:Verdana,Geneva,Tahoma,sans-serif}.astroCheckboxLabel--nF1E_.primary--ne39V{color:#ffb74d}.astroCheckboxLabel--nF1E_.secondary--QGWff{color:#9333ea}.astroCheckboxLabel--nF1E_{color:gray !important;margin-left:8px}.astroCheckboxLabel--nF1E_.checked--BSZEA.primary--ne39V{color:#ffb74d !important}.astroCheckboxLabel--nF1E_.checked--BSZEA.secondary--QGWff{color:#9333ea !important}","",{version:3,sources:["webpack://./src/components/AstroCheckbox/AstroCheckbox.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,+BACE,YAAA,CACA,kBAAA,CAGF,sBACE,iBAAA,CACA,cAAA,CACA,eAAA,CAGF,4BACE,aAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,2CACE,wBAAA,CAEF,6CACE,wBAAA,CAIJ,0BACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,yCACE,aChCY,CDkCd,2CACE,aCjCc,CDqClB,2BACE,4CAAA,CACA,0CACE,aC1CY,CD4Cd,4CACE,aC3Cc,CD+ClB,2BACE,qBAAA,CACA,eAAA,CAGE,yDACE,wBAAA,CAGF,2DACE,wBAAA",sourcesContent:['@use "../../utility/globals";\n\n.astroCheckboxContainer {\n  display: flex;\n  align-items: center;\n}\n\n.astroCheckbox {\n  position: relative;\n  max-width: 34px;\n  max-height: 34px;\n}\n\n.astroCheckboxBorder {\n  display: block;\n  border-radius: 4px;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n  &.primary {\n    border: 4px solid globals.$primary-color;\n  }\n  &.secondary {\n    border: 4px solid globals.$secondary-color;\n  }\n}\n\n.astroCheckboxIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  &.primary {\n    color: globals.$primary-color;\n  }\n  &.secondary {\n    color: globals.$secondary-color;\n  }\n}\n\n.astroCheckboxLabel {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  &.primary {\n    color: globals.$primary-color;\n  }\n  &.secondary {\n    color: globals.$secondary-color;\n  }\n}\n\n.astroCheckboxLabel {\n  color: gray !important;\n  margin-left: 8px;\n\n  &.checked {\n    &.primary {\n      color: globals.$primary-color !important;\n    }\n\n    &.secondary {\n      color: globals.$secondary-color !important;\n    }\n  }\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={astroCheckboxContainer:"astroCheckboxContainer--OFfZi",astroCheckbox:"astroCheckbox--vUUTy",astroCheckboxBorder:"astroCheckboxBorder--H0ymU",primary:"primary--ne39V",secondary:"secondary--QGWff",astroCheckboxIcon:"astroCheckboxIcon--Lzqcx",astroCheckboxLabel:"astroCheckboxLabel--nF1E_",checked:"checked--BSZEA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}}}]);
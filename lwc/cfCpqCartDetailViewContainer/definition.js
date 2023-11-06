let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\"viewby\" : \"None\", \"data\": [{\"label\" : \"test\", \"value\":[{\"Name\":\"Test\"}] }]}]","dsDelay":0,"resultVar":""}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1623329366385-7wnkfj8ua","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"data","fieldValue":"{action}"},{"fieldName":"Session.total","fieldValue":"{action.total}"},{"fieldName":"Session.options","fieldValue":"{action.options}"},{"fieldName":"cartSummary","fieldValue":"{action.cartSummary}"}],"id":"flex-action-1622269525276","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1626004828635-ihzt1tk0z","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"data","fieldValue":"{action.result}"},{"fieldName":"total","fieldValue":"{action.total}"},{"fieldName":"Session.options","fieldValue":"{action.options}"},{"fieldName":"cartSummary","fieldValue":"{action.cartSummary}"},{"fieldName":"load","fieldValue":"true"},{"fieldName":"Session.selectedCartItems","fieldValue":"{action.selectedItems}"},{"fieldName":"Session.selectedItemCount","fieldValue":"{action.selectedItemCount}"}],"id":"flex-action-1626004848531","type":"cardAction"}}],"channelname":"cpq_ui_event_{recordId}","displayLabel":"cpq_ui_event_{recordId}:cpq_update_cart_detailview","element":"action","eventLabel":"pubsub","eventname":"cpq_update_cart_detailview","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1623329366386-8usvefv2y","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"fieldToSearch":"{action.value}","utilMethod":"groupByCartDetailView"},"hasExtraParams":true,"id":"flex-action-1616600765169","message":"cpq_ui_event","subType":"PubSub","type":"Event"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626004828635-pvo5xwfe5","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"fieldToSearch":"{action.value}","utilMethod":"groupByCartDetailView"},"hasExtraParams":true,"id":"flex-action-1625915898289","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqcartdetailoptions","displayLabel":"cpqcartdetailoptions:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1623329366386-uqe37rnd5","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"cartSummary","fieldValue":"{action.response}"}],"id":"flex-action-1620880098333","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626004828635-fopqq4i9w","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"cartSummary","fieldValue":"{action.response}"}],"id":"flex-action-1620880098333","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1623329366386-noyrv3ouz","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"data","fieldValue":"{action.result}"},{"fieldName":"Session.total","fieldValue":"{action.result.totalSize}"}],"id":"flex-action-1622269535519","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626004828635-4cp5lwjde","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"data","fieldValue":"{action.result}"},{"fieldName":"total","fieldValue":"{action.result.totalSize}"}],"id":"flex-action-1625915985866","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_load_more_cart","element":"action","eventLabel":"pubsub","eventname":"cpq_load_more_cart","eventtype":"pubsub","key":"event-3","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626004828635-bvhoi6bhb","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"load","fieldValue":"false"}],"id":"flex-action-1623403799440","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_spinner","element":"action","eventLabel":"pubsub","eventname":"cpq_spinner","eventtype":"pubsub","key":"event-4","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartDetailViewContainer_9_Vlocity","Id":"0RbHn0000010w0dCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqCartDetailViewContainer_9_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"options","val":""},{"name":"channelName","val":"cpqutils"},{"name":"total","val":"0"},{"name":"selectedItemCount","val":"0"},{"name":"selectedCartItems","val":""}],"states":[{"actions":[],"childCards":["cpqAsyncJobStatus","cpqCartErrorPanel","cpqDetailViewFlexTableContainer","cpqCartAppliedPromotionContainer","cpqCartAppliedDiscountContainer"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"customLwc","elementLabel":"Block-0-Custom LWC-0","key":"element_element_block_0_0_customLwc_0_0","name":"Custom LWC","parentElementKey":"element_block_0_0","property":{"currentRecordId":"{recordId}","currentTab":"detail","customlwcname":"cpqTabUtils","enableDetectTabPolling":"enable"},"size":{"default":12,"isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":12,"isResponsive":false},"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","key":"element_element_block_0_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqAsyncJobStatus","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"type":"card"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-0","key":"element_element_element_block_0_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"data.actions.nextproducts","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%7BLabel.Cart%7D%20(%7Btotal%7D)%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-1-Action-1","key":"element_element_element_block_0_0_block_2_0_action_1_0","name":"Action","parentElementKey":"element_element_block_0_0_block_2_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"Session.selectedItemCount","hasMergeField":false,"id":"state-new-condition-0","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1635171326894-xr6btmup0","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQDelete} ({Session.selectedItemCount})","eventName":"cpq_{recordId}","extraParams":{"cartType":"shoppingCart","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{Session.selectedCartItems}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{Session.selectedCartItems}","methodName":"deleteItemFromCart","multiDelete":"true"},"hasExtraParams":true,"id":"flex-action-1635172514576","message":"cpq_multi_delete","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"}],"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"Session.selectedItemCount","hasMergeField":false,"id":"state-new-condition-0","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{Label.CPQDelete} ({Session.selectedItemCount})","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":5,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-right_small slds-p-top_xx-small slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":5,"isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-right_small slds-p-top_xx-small slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":5,"isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-2","key":"element_element_element_block_0_0_block_2_0_outputField_2_0","name":"Text","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"data.actions.nextproducts","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%7BLabel.Cart%7D%20(%7Btotal%7D+)%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_0_block_2_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"10","medium":"8","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col","container":{"class":""},"customClass":"slds-col","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"10","medium":"8","small":"6"},"sizeClass":"slds-large-size_10-of-12 slds-medium-size_8-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col","container":{"class":""},"customClass":"slds-col","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"10","medium":"8","small":"6"},"sizeClass":"slds-large-size_10-of-12 slds-medium-size_8-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-0-ComboBox-3","key":"element_element_block_0_0_baseInputElement_3_0","name":"ComboBox","parentElementKey":"element_block_0_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"options","value":"{Session.options}"},{"id":2,"label":"name","value":"cpqcartdetailoptions"}],"label":"{Label.CPQViewBy}","name":"cpqcartdetailoptions","options":[],"type":"combobox","value":"{viewby}"},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":true,"large":"2","medium":"4","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col","container":{"class":""},"customClass":"slds-col","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"2","medium":"4","small":"6"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_4-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-col","container":{"class":""},"customClass":"slds-col","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"2","medium":"4","small":"6"},"sizeClass":"slds-large-size_2-of-12 slds-medium-size_4-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-FlexCard-0","key":"element_element_block_1_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqCartErrorPanel","cardNode":"{record.cartSummary}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-01","key":"element_element_block_1_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqDetailViewFlexTableContainer","cardNode":"{record.data.result}","data-conditions":{"group":[{"field":"total","hasMergeField":false,"id":"state-new-condition-1","operator":"!=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"actions":"{data.actions}","cartId":"{recordId}","cartType":"shoppingCart","load":"{load}","selectedCartItemsIds":"{Session.selectedCartItemsIds}","viewType":"detailview"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#FAFAF9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FAFAF9;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#FAFAF9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FAFAF9;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-3","key":"element_element_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"total","id":"state-new-condition-0","operator":"==","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoCartItemsFound%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-FlexCard-4","key":"element_element_block_1_0_childCardPreview_3_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqCartAppliedPromotionContainer","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{recordId}","view":"detail"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-FlexCard-5","key":"element_element_block_1_0_childCardPreview_4_0","name":"FlexCard","parentElementKey":"element_block_1_0","property":{"cardName":"cpqCartAppliedDiscountContainer","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{recordId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-cart-detail-view-flextable-container ","container":{"class":"cpq-cart-detail-view-flextable-container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-cart-detail-view-flextable-container ","container":{"class":"cpq-cart-detail-view-flextable-container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#FAFAF9","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#FAFAF9;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartDetailViewContainer","Id":"a3gHn000001pf8xQAC","vlocity_cmt__GlobalKey__c":"cpqCartDetailViewContainer/Vlocity/9/1625820762118"};
  export default definition
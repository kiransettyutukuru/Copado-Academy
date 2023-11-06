let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"showAppliedDiscounts\":false,\"asyncJobResponse\":\"none\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1628665599354-yppnx24fm","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"asyncJobResponse","fieldValue":"{action.response}"}],"id":"flex-action-1628665599415","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_update_bulk_async_job_status","element":"action","eventLabel":"pubsub","eventname":"cpq_update_bulk_async_job_status","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartAppliedDiscountContainer_2_Vlocity","Id":"0RbHn0000010w0U0AA","ManageableState":"unmanaged","MasterLabel":"cfCpqCartAppliedDiscountContainer_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqCartAppliedDiscount"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-0","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"draggable":true,"iconColor":"#0176d3","isOpen":true,"key":"1639134543042-g6mrrodvc","label":"Action","record":"{record}","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal","displayName":"{Label.CPQAddNewDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1639134552106","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"utility:add"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"iconColor":"#0176d3","iconName":"utility:add","label":"{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount","container":{"class":""},"customClass":"cpq__add-new-discount","elementStyleProperties":{"iconColor":"#0176d3"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"conditionString":"asyncJobResponse.isAsyncProcessCompleted == false && asyncJobResponse.isAsyncProcessesPresent > 0","conditions":{"group":[{"field":"asyncJobResponse.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"asyncJobResponse.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-9","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"cpq__add-new-discount__cnd","name":"cpq__add-new-discount__cnd","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-1","name":"Action","property":{"card":"{card}","data-conditions":{"group":[{"field":"showAppliedDiscounts","hasMergeField":false,"id":"state-new-condition-52","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"{Label.CPQAppliedDiscounts}","eventName":"setValues","fieldValues":[{"fieldName":"showAppliedDiscounts","fieldValue":"true"}],"id":"flex-action-1624304286831","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"utility:chevronright"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-heading_small blockLabel slds-p-around_x-small ","container":{"class":"slds-text-heading_small blockLabel"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-heading_small blockLabel slds-p-around_x-small ","container":{"class":"slds-text-heading_small blockLabel"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-2","name":"FlexCard","property":{"cardName":"cpqCartAppliedDiscount","cardNode":"","data-conditions":{"group":[{"field":"showAppliedDiscounts","hasMergeField":false,"id":"state-new-condition-28","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied-disc_container slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied-disc_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartAppliedDiscountContainer","Id":"a3gHn000001pfAAQAC","vlocity_cmt__GlobalKey__c":"cpqCartAppliedDiscountContainer/Vlocity/2/1639134538641"};
  export default definition
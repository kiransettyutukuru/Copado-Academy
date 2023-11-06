export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"training@cme.edu","userId":"005Hn00000Hekq1QA2","userCurrencyCode":"USD","timeStamp":"2020-07-08T21:43:27.933Z","sOmniScriptId":"a29Hn000005rxHLQAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"stepChartPlacement":"right","disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":false,"timeTracking":true,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false}]},"prefillJSON":"{}","lwcId":"a5d53fdc-9c2c-ce20-63c4-de90f471f98f","labelMap":{"UpdateContactId":"StepContacts:BlkUpdatePriContact:UpdateContactId","UpdateEmail":"StepContacts:BlkUpdatePriContact:UpdateEmail","UpdateName":"StepContacts:BlkUpdatePriContact:UpdateName","CreateEmail":"StepContacts:BlkCreatePriContact:CreateEmail","CreateLastName":"StepContacts:BlkCreatePriContact:CreateLastName","CreateFirstName":"StepContacts:BlkCreatePriContact:CreateFirstName","BlkCreatePriContact":"StepContacts:BlkCreatePriContact","BlkChangePriContact":"StepContacts:BlkChangePriContact","BlkUpdatePriContact":"StepContacts:BlkUpdatePriContact","NavigateAction1":"NavigateAction1","IPSavePriContactDetails":"IPSavePriContactDetails","StepContacts":"StepContacts","IPGetAccountPriContactDetails":"IPGetAccountPriContactDetails"},"labelKeyMap":{"New":""},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"IPGetAccountPriContactDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"None","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"AccountId","sendJSONPath":"ContextId","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"team_getPrimaryContactDetails","controlWidth":12},"offSet":0,"name":"IPGetAccountPriContactDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPGetAccountPriContactDetails","lwcId":"lwc0"},{"type":"Step","propSetMap":{"HTMLTemplateId":"","conditionType":"Hide if False","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"disOnTplt":false,"label":"Update Account Primary Contact","show":null,"uiElements":{"StepContacts":"","UpdateName":"","UpdateEmail":"","UpdateContactId":"","BlkUpdatePriContact":"","BlkChangePriContact":"","CreateFirstName":"","CreateLastName":"","CreateEmail":"","BlkCreatePriContact":""}},"offSet":0,"name":"StepContacts","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":1,"response":null,"propSetMap":{"bus":true,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","repeatLimit":null,"repeatClone":false,"repeat":false,"collapse":false,"controlWidth":12,"disOnTplt":false,"label":null,"show":null},"name":"BlkUpdatePriContact","level":1,"JSONPath":"StepContacts:BlkUpdatePriContact","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"readOnly":false,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12,"disOnTplt":false,"label":"Primary Contact Name","show":null},"name":"UpdateName","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc1000-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Email","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","ptrnErrText":"","helpText":"","help":false,"readOnly":false,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":12,"disOnTplt":false,"label":"Primary Contact Email","show":null},"name":"UpdateEmail","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateEmail","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc1001-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":1,"response":null,"propSetMap":{"label":"Text2","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"UpdateContactId","level":2,"JSONPath":"StepContacts:BlkUpdatePriContact|1:UpdateContactId","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc1002-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Block","rootIndex":1,"response":null,"propSetMap":{"bus":true,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","repeatLimit":null,"repeatClone":false,"repeat":false,"collapse":false,"controlWidth":12,"disOnTplt":false,"label":null,"show":null},"name":"BlkChangePriContact","level":1,"JSONPath":"StepContacts:BlkChangePriContact","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Block","rootIndex":1,"response":null,"propSetMap":{"bus":true,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","repeatLimit":null,"repeatClone":false,"repeat":false,"collapse":false,"controlWidth":12,"disOnTplt":false,"label":null,"show":null},"name":"BlkCreatePriContact","level":1,"JSONPath":"StepContacts:BlkCreatePriContact","indexInParent":2,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":12,"disOnTplt":false,"label":"New Contact First Name","show":null},"name":"CreateFirstName","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateFirstName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc1200-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":12,"disOnTplt":false,"label":"New Contact Last Name","show":null},"name":"CreateLastName","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateLastName","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc1201-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Email","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","ptrnErrText":"","helpText":"","help":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":12,"disOnTplt":false,"label":"New Contact Email","show":null},"name":"CreateEmail","level":2,"JSONPath":"StepContacts:BlkCreatePriContact|1:CreateEmail","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc1202-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc12-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"JSONPath":"StepContacts","lwcId":"lwc1"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"IPSavePriContactDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"None","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"AccountId":"%ContextId%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"StepContacts","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"team_savePrimaryContactDetails","controlWidth":12},"offSet":0,"name":"IPSavePriContactDetails","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPSavePriContactDetails","lwcId":"lwc2"},{"type":"Navigate Action","propSetMap":{"targetName":"Account","disOnTplt":false,"targetLWCLayoutOptions":["lightning","newport"],"targetLWCLayout":"lightning","replaceOptions":[{"value":false,"label":"No"},{"value":true,"label":"Yes"}],"replace":true,"iconPositionOptions":["left","right"],"iconPosition":"left","iconVariant":"","iconName":"","variantOptions":["brand","outline-brand","neutral","success","destructive","text-destructive","inverse","link"],"targetTypeOptions":["Component","Current Page","Knowledge Article","Named Page","Navigation Item","Object","Record","Record Relationship","Web Page","Vlocity OmniScript"],"targetId":"%ContextId%","targetFilter":"Recent","recordActionOptions":["clone","edit","view"],"recordAction":"view","objectActionOptions":["home","list","new"],"objectAction":"home","label":"NavigateAction1","message":{},"pubsub":true,"variant":"brand","HTMLTemplateId":"","show":null,"validationRequired":null,"targetType":"Record","controlWidth":12},"offSet":0,"name":"NavigateAction1","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateAction1","lwcId":"lwc3"}],"bReusable":false,"bpVersion":1,"bpType":"team","bpSubType":"updateAccountPrimaryContact","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};
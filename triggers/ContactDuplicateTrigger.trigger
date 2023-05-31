// ContactDuplicateTrigger.trigger
trigger ContactDuplicateTrigger on Contact (before insert, before update) {
    ContactDuplicateHelper.checkForDuplicateContacts(Trigger.new);
}
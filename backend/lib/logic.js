
'use strict';

function authorizeAccess(authorize) {

    var me = getCurrentParticipant();
    console.log('**** AUTH: ' + me.getIdentifier() + ' granting access to ' + authorize.memberId );

    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is not already authorized, we authorize them
    var index = -1;

    if(!me.authorized) {
        me.authorized = [];
    }
    else {
        index = me.authorized.indexOf(authorize.memberId);
    }

    if(index < 0) {
        me.authorized.push(authorize.memberId);

        return getParticipantRegistry('org.acme.pii.Member')
        .then(function (memberRegistry) {

            // emit an event
            var event = getFactory().newEvent('org.acme.pii', 'MemberEvent');
            event.memberTransaction = authorize;
            emit(event);

            // persist the state of the member
            return memberRegistry.update(me);
        });
    }
}

function revokeAccess(revoke) {

    var me = getCurrentParticipant();
    console.log('**** REVOKE: ' + me.getIdentifier() + ' revoking access to ' + revoke.memberId );

    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is authorized, we remove them
    var index = me.authorized ? me.authorized.indexOf(revoke.memberId) : -1;

    if(index>-1) {
        me.authorized.splice(index, 1);

        return getParticipantRegistry('org.acme.pii.Member')
        .then(function (memberRegistry) {

            // emit an event
            var event = getFactory().newEvent('org.acme.pii', 'MemberEvent');
            event.memberTransaction = revoke;
            emit(event);

            // persist the state of the member
            return memberRegistry.update(me);
        });
    }
}
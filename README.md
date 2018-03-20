# Personally Identifiable Information  Network

> A Blockchain network where members can grant/revoke access to their personal medical records to other members.

This business network defines:

**Participant**
`Patients`
`Doctors`
`Medical Labs'

**Transaction**
`AuthorizeAccess` `RevokeAccess`

To test this Business Network Definition in the **Test** tab:

Create two `Member` participants:

```
{
  "$class": "org.acme.pii.Member",
  "email": "memberA@acme.org",
  "firstName": "Billy",
  "lastName": "Thompson"
}
```

```
{
  "$class": "org.acme.pii.Member",
  "email": "memberB@acme.org",
  "firstName": "Jenny",
  "lastName": "Jones"
}
```

Submit a `AuthorizeAccess` transaction:

```
{
  "$class": "org.acme.pii.AuthorizeAccess",
  "memberId": "org.acme.pii.Member#memberA@acme.org"
}
```

This `AuthorizeAccess` allowed `memberA@acme.org` permission to view personal information of other members.

Submit a `RevokeAccess` transaction:

```
{
  "$class": "org.acme.pii.RevokeAccess",
  "memberId": "org.acme.pii.Member#memberB@acme.org"
}
```

This `RevokeAccess` revoked `memberB@acme.org` permission to view personal information of other members.

Congratulations!

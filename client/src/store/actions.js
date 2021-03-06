export const LOAD_LOCAL_STORAGE = 'LOAD_LOCAL_STORAGE'

export const REQUEST_ADD_BILL = 'REQUEST_ADD_BILL'
export const RECEIVE_ADD_BILL = 'RECEIVE_ADD_BILL'
export const REJECT_ADD_BILL = 'REJECT_ADD_BILL'

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN'
export const RECEIVE_SIGN_IN = 'RECEIVE_SIGN_IN'
export const REJECT_SIGN_IN = 'REJECT_SIGN_IN'

export const REQUEST_SIGN_OUT = 'REQUEST_SIGN_OUT'
export const RECEIVE_SIGN_OUT = 'RECEIVE_SIGN_OUT'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const REJECT_USER = 'REJECT_USER'

export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const REJECT_ALL_USERS = 'REJECT_ALL_USERS'

export const REQUEST_ALL_GROUPS = 'REQUEST_ALL_GROUPS'
export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS'
export const REJECT_ALL_GROUPS = 'REJECT_ALL_GROUPS'

export const REQUEST_GROUP_BILLS = 'REQUEST_GROUP_BILLS'
export const RECEIVE_GROUP_BILLS = 'RECEIVE_GROUP_BILLS'
export const REJECT_GROUP_BILLS = 'REJECT_GROUP_BILLS'

export const CREATE_NEW_GROUP = 'CREATE_NEW_GROUP'
export const RECEIVE_NEW_GROUP = 'RECEIVE_NEW_GROUP'

export const REQUEST_GROUP_MEMBERS = 'REQUEST_GROUP_MEMBERS'
export const RECEIVE_GROUP_MEMBERS = 'RECEIVE_GROUP_MEMBERS'
export const REJECT_GROUP_MEMBERS = 'REJECT_GROUP_MEMBERS'

export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const REQUEST_SIGN_UP_TO_GROUP = 'REQUEST_SIGN_UP_TO_GROUP'
export const RECEIVE_SIGN_UP_TO_GROUP = 'RECEIVE_SIGN_UP_TO_GROUP'
export const REJECT_SIGN_UP_TO_GROUP = 'REJECT_SIGN_UP_TO_GROUP'

export default {
  loadLocalStorage: session => ({ type: LOAD_LOCAL_STORAGE, session }),

  requestAddBill: params => ({ type: REQUEST_ADD_BILL, params }),
  receiveAddBill: bill => ({ type: RECEIVE_ADD_BILL, bill }),
  rejectAddBill: error => ({ type: REJECT_ADD_BILL, error }),

  requestUser: () => ({ type: REQUEST_USER }),
  receiveUser: user => ({ type: RECEIVE_USER, user }),
  rejectUser: error => ({ type: REJECT_USER, error }),

  requestAllUsers: () => ({ type: REQUEST_ALL_USERS }),
  receiveAllUsers: users => ({ type: RECEIVE_ALL_USERS, users }),
  rejectAllUsers: error => ({ type: REJECT_ALL_USERS, error }),

  requestSignIn: () => ({ type: REQUEST_SIGN_IN }),
  receiveSignIn: session => ({ type: RECEIVE_SIGN_IN, session }),
  rejectSignIn: error => ({ type: REJECT_SIGN_IN, error }),

  requestAllGroups: () => ({ type: REQUEST_ALL_GROUPS }),
  receiveAllGroups: groups => ({ type: RECEIVE_ALL_GROUPS, groups }),
  rejectAllGroups: error => ({ type: REJECT_ALL_GROUPS, error }),

  requestGroupBills: id => ({ type: REQUEST_GROUP_BILLS, id }),
  receiveGroupBills: bills => ({ type: RECEIVE_GROUP_BILLS, bills }),
  rejectGroupBills: error => ({ type: REJECT_GROUP_BILLS, error }),

  requestSignUpToGroup: group => ({ type: REQUEST_SIGN_UP_TO_GROUP, group }),
  receiveSignUpToGroup: group => ({ type: RECEIVE_SIGN_UP_TO_GROUP, group }),
  rejectSignUpToGroup: group => ({ type: REJECT_SIGN_UP_TO_GROUP, group }),

  requestGroupMembers: id => ({ type: REQUEST_GROUP_MEMBERS, id }),
  receiveGroupMembers: (id, members) => ({
    type: RECEIVE_GROUP_MEMBERS,
    id,
    members,
  }),
  rejectGroupMembers: (id, error) => ({
    type: REJECT_GROUP_MEMBERS,
    id,
    error,
  }),

  requestSignOut: () => ({ type: REQUEST_SIGN_OUT }),
  receiveSignOut: () => ({ type: RECEIVE_SIGN_OUT }),

  createNewGroup: name => ({ type: CREATE_NEW_GROUP, name }),
  receiveNewGroup: group => ({ type: RECEIVE_NEW_GROUP, group }),

  requestCurrentUser: () => ({ type: REQUEST_CURRENT_USER }),
  receiveCurrentUser: (user, groups) => ({
    type: RECEIVE_CURRENT_USER,
    user,
    groups,
  }),
}

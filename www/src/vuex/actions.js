export const login = makeAction('LOGIN')
export const logout = makeAction('LOGOUT')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
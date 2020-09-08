const getters = {
    requestLoading: state => state.app.requestLoading,
    size: state => state.app.size,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    shoppingData: state => state.shoppingCath.shoppingData
}

export default getters;
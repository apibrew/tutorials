const UserRegistration = resource('UserRegistration')
const User = resource('system', 'User')

UserRegistration.onCreate((record) => {
    User.create({
        username: record.username,
        password: record.password,
        roles: [
            {
                "name": 'chat-user'
            }
        ]
    })
})
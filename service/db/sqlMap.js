var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    push: {
        select_name: 'select * from push_list',
        update_status: 'update push_list set'
    }
}

module.exports = sqlMap;
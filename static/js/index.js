$(document).ready(function () {
    var login = $('#login'),
        register = $('#register');

    login.find('input[name=btn]').on('click', function () {
        var username = login.find('input[name=username]').val(),
            password = login.find('input[name=password]').val();
        $.ajax({
            type: 'POST',
            url: '/api/user/login',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function (result) {
                console.log(result);
            }
        })
    })
    register.find('input[name=btn]').on('click', function () {
        var username = register.find('input[name=username]').val(),
            password = register.find('input[name=password]').val(),
            rppassword = register.find('input[name=rppassword]').val();
        if(username===''&&username.length===0){
            alert('账号不能为空');
            return false;
        }
        if(password===''&&password.length===0){
            alert('账号不能为空');
            return false;
        }
        if (rppassword !== password) {
            alert('兩次輸入密碼不一致，請重新輸入')
        } else {
            $.ajax({
                type: 'POST',
                url: '/api/user/register',
                dataType: 'json',
                data: {
                    username: username,
                    password: password
                },
                success: function (result) {
                   alert('后台数据'+result.message);
                }
            })
        }
    })


})
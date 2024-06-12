function kt(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (!username || !email || !password || !repassword) {
        alert('Không được để trống các ô');
    }
    else if(!validateEmail(email)){
        alert('Email không hợp lệ');
    }
    else if(password != repassword){
        alert('Mật khẩu và Nhập lại mật khẩu phải giống nhau');
    }
    else if(password == repassword){
        if(password.length < 8){
            alert('Mật khẩu phải từ 8 ký tự trở lên');
        }else{
            alert('Đăng ký thành công');
            window.location.href = 'login.html';
        }
    }
}
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

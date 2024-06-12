function Kt(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

if(username == '' && password==''){
    alert('Vui lòng nhập đầy đủ thông tin thang ngu nay!');
}
else if(username != 'Theloc' && password != 'Theloc1610'){
        alert('Sai thông tin đăng nhập. Vui lòng thử lại!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

    }else if(password == 'Theloc1610' && username != 'Theloc' || username == 'Theloc' && password != 'Theloc1610'){
        alert('Sai thông tin');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    else{
        alert('Đăng nhập thành công!');
        window.location.href = 'trangchinh.html';
    }
}
document.getElementById('quenmk').addEventListener('click', function() {
    const email = prompt('Vui lòng nhập Email của bạn: ');
    if (email) {
        alert('Yêu cầu khôi phục mật khẩu đã được gửi đến ' + email);
    }
});
document.getElementById('dang_ky').addEventListener('click',function() {
    window.location.href = 'Dangky.html';
});
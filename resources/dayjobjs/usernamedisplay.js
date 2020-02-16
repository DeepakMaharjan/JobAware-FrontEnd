$(document).ready(function () {
    var userid=window.localStorage.getItem('userid');
    var firstname=window.localStorage.getItem('firstname');
    var lastname=window.localStorage.getItem('lastname');
    var image=window.localStorage.getItem('image');

    $('#usernamedisplay').append('<span>'+firstname+" "+lastname+'</span>');
    $('#userphoto').append('<div><img src="file:///home/deepak/Downloads/Web API/Back End/uploads/'+image +'" alt="User Profile" height="40px" width="40px" style="border-radius: 50%;"' +
        '></div>')
})
// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      document.getElementById('FB_LoginButton').style.display='none';
      document.getElementById('MainQuestion').style.display='block';
      testAPI();
    } else if (response.status === 'not_authorized') {
        show_FB_LoginButton();
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      show_FB_LoginButton();
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '131665767185178',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('登入資料'+response.id);
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        '歡迎回來, ' + response.name + '!';
    });
  }
  //顯示FB的登入圖示
  function show_FB_LoginButton(){
      var FB_icon=document.getElementById('FB_LoginButton');
      FB_icon.style.display='inline-block';

  }

  function loginFB(){
     	var appID='131665767185178';
	  if( navigator.userAgent.match('CriOS') )
	         window.open('https://www.facebook.com/dialog/oauth?client_id='+appID+'&redirect_uri='+ document.location.href +'&scope=email,public_profile', '', null);else

	 FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
        });

       FB.getLoginStatus(function(response) {
         statusChangeCallback(response);
        });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
    },{scope:'public_profile,user_friends,email'});}

function RunIt(){
    var height = $('#inputHeight').val();
    var weight = $('#inputWeight').val();


        console.log( weight/Math.pow(height/100,2) );

        alert( weight/Math.pow(height/100,2) );
}

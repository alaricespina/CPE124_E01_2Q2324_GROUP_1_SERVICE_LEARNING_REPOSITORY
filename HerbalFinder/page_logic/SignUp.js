const ShowAlertMessage = (title, message) => {
    Alert.alert(title, message, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  
  const GetAccountAPI = async (username, email, password) => {
    const response = await fetch(ngrok_link.concat('/signup'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning' : true
      },
      body: JSON.stringify({
        'username': username,
        'email': email,
        'password': password
      })
    });
    return await response.json();
  }
  const MatchHandler = (response) => {
    if (response == undefined) {
      return
    }
    else {
      //console.log(response);
      if (response == true) {
        console.log("Try Signing Up Again"); //Insert Message in App to Try Signing Up Again
        ShowAlertMessage("SignUp", "An account has already been made under this username/email.\nPlease Try Signing Up Again!");
      }
      else {
        console.log("Successfully Signed Up"); //Insert Main Function of App
        ShowAlertMessage("SignUp", "Successfully Signed Up!");
      }
    }
  }
  const handleSignUp = (username, email, password) => {
    // Add your sign-up logic here
    GetAccountAPI(username, email, password).then((response) => {
      MatchHandler(response['match']);
    });
  };
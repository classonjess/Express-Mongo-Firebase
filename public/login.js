const firebaseConfig = {
  apiKey: "AIzaSyCIuCqvig-qeQxDEfD9142G8pQR4sZsWL0",
  authDomain: "adding-authentication-3ef37.firebaseapp.com",
  projectId: "adding-authentication-3ef37",
  storageBucket: "adding-authentication-3ef37.appspot.com",
  messagingSenderId: "46967390464",
  appId: "1:46967390464:web:9d8fc4ba724e3c669af3e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function callOpenRoute(){
  firebase.auth().currentUser.getIdToken()
      .then(idToken => {
        console.log('idToken', idToken);

        (async () => {
          let response = await fetch('/auth', {
            method: "GET",
            headers: {
              'Authorization': idToken
            }
          });
          let text = await response.text();
          console.log('response', response);
          routeMsg.innerHTML = text;
        })();
      }).catch(e => console.log('e', e));
}

function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  const auth = firebase.auth();
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    const auth = firebase.auth();
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}
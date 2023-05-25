import React from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";

function App() {


  const [signIn, toggle] = React.useState(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [recBox, setRecBox] = React.useState(false)
  const [result, setResult] = React.useState({ status: false, message: "" })
  const navigate = useNavigate();

  function LoginHandler(e) {
    const data = { email, password }
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((responseData) => {
        console.log(responseData);
        setResult(responseData);

        if (responseData.status) {
          localStorage.setItem("userDetails", JSON.stringify(responseData.data))
          localStorage.setItem("token", responseData.token)
          setEmail("")
          setPassword("")
          setTimeout(() => {
            navigate("/")

          }, 1000);

        }

        setTimeout(() => {
          setResult({ status: false, message: "" });
        }, 8000);
      })
    );

  }

  function SignUpHandler(e) {
    const recruiter = recBox
    const data = { email, password, firstName, lastName, recruiter }
    console.log(data, "dtat")
    fetch("http://localhost:8000/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) =>
      response.json().then((responseData) => {

        setResult(responseData);

        if (responseData.status) {
          // navigate("/login")
          setEmail("")
          setFirstName("")
          setLastName("")
          setPassword("")

          setTimeout(() => {
            setResult({ status: false, message: "" });
            toggle(!signIn)

          }, 2000);
        }
        console.log(responseData)
        setTimeout(() => {
          setResult({ status: false, message: "" });

        }, 8000);
      })
    );

  }

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign Up</Components.Title>
          <Components.Input type='text' placeholder='First Name' />
          <Components.Input type='text' placeholder='Last Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <label class="container">Are you a recruiter</label>
          <Components.Input type='checkbox' value={recBox} onChange={() => setRecBox(!recBox)} />



          {result.status ? (
            <h4 style={{ color: "green" }}>
              {result.message}
            </h4>
          ) : (
            <h4 style={{ color: "red" }}>
              {result.message}
            </h4>
          )}
          <Components.Button onClick={SignUpHandler}>Sign Up</Components.Button>

        </Components.Form>
      </Components.SignUpContainer>



      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={(e) => e.preventDefault()}>
          <Components.Title>Log In</Components.Title>
          <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          {result.status ? (
            <h4 style={{ color: "green" }}>
              {result.message}
            </h4>
          ) : (
            <h4 style={{ color: "red" }}>
              {result.message}
            </h4>
          )}

          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button onClick={LoginHandler}>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}

export default App;
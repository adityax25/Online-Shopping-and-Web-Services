import React,{useState,useEffect} from 'react';
import {Container, Card,Button, Row, Col, Carousel,Tooltip,OverlayTrigger} from "react-bootstrap";
import classes from "./cards.module.css"
import Router from 'next/router'
const Login = () => {
    const users = [
        {
            username:"brendan@gmail.com",
            password:"123456"
        },
        {
            username:"vinyas@gmail.com",
            password:"123456"
        },
        {
            username:"aditya@gmail.com",
            password:"123456"
        },
        {
            username:"abhi@gmail.com",
            password:"123456"
        }
    ]
   
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleSignin = () =>{
        let result = users.find((obj)=>{
            return obj.username === email && obj.password===password
        })
        console.log(result)
        if (result) {
            setHasAccount(email)
            console.log("User has loggedin");
            let rad_buttons  = document.getElementsByName("user_type")
            for(let i = 0; i < rad_buttons.length; i++) {
                if(rad_buttons[i].checked)
                {
                    let route = rad_buttons[i].value
                    Router.push(route)
                    break
                }
            }
        } else {
            alert("Wrong ID or password")
        }
        // console.log("signed in");
    }

    return(
        <section className={classes.login_page}>
            <Row>
                <Col></Col>
                <Col>
                <div className={classes.loginContainer}>
                <h5>Username</h5>
                <input 
                    type='email' 
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.text_input}
                />
                <br/><br/>
                <p className='errorMsg'>{emailError}</p>
                <h5>Password</h5>
                <input 
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.text_input} 
                />
                <p className='errorMsg'>{passwordError}</p>
                <br/><br/>
                <div style={{textAlign:"center"}}>
								<p>Login as</p>
							
								<input type="radio" name="user_type" id="radio1" value="/" />
								<label for="radio1">Customer</label>{" "}
								<input type="radio" name="user_type" id="radio2" value="/seller" />
								<label for="radio2">Seller</label>
                                {"    "}
                                <input type="radio" name="user_type" id="radio3" value="/admin" />
								<label for="radio3">Admin</label>
							</div>
                            <br/>
                <div className='btnContainer'>
                <Button variant="primary" onClick={handleSignin} style={{width:"100%",borderRadius:"30px"}}>Sign In</Button>
                </div>
            </div> 
                </Col>
                <Col></Col>
            </Row>
                       
        </section>
    );   
};

export default Login;
import React, {useState} from 'react';
import { Card, Alert, Button, Container } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "./../context/AuthContext";
const Dashboard = () => {
        const [error, setError] = useState("");
        const {currentUser, logout} = useAuth();
        const history = useHistory();

        const handleLogout = async() =>{
            setError("");
            try{
                await logout().then(() =>{
                    history.push("/login");
                });
                
            } catch (error) {
                setError(error);
            }
        }
    return (
        <Container 
            className = "d-flex align-items-center justify-content-center" 
            style={{ minHeight: "100vh" }}>
        
        <div>
           <Card>
                <Card.Body>
                    <h2 classname = 'text-center mb-4'> Profile </h2>
                    {error? 
                        (<Alert variant = "danger">{JSON.stringify(error)}</Alert>
                        ) : (
                            ""
                    )}
                    <strong> Email: </strong>
                    {currentUser && currentUser.email}

                    <Link to = '/update-profile' classname = 'btn btn-primary w-100 mt-3'> Update Profile </Link>
                </Card.Body>
           </Card>
           <div classname = 'w-100 text-center mt-2'>
               <Button variant = "Link" onClick = {handleLogout}>
                   {" "}
                   Logout
               </Button>

           </div>
        </div>
        </Container>
    )
}

export default Dashboard;
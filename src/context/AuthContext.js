import React, {useState, useEffect, useContext} from 'react';
import {auth} from './../firebase';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

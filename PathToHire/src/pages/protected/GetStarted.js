import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { Typography } from '@mui/material';

function ExternalPage() {
    const dispatch = useDispatch();
    dispatch(setPageTitle({ title: "Get Started" }));
    return (
        <div>
         
            <Typography variant='h2' sx={{textAlign: "center", fontFamily: "sans-serif"}} color={"#74E8C7"}>Welcome</Typography>
            
        </div>
    )
}

export default ExternalPage
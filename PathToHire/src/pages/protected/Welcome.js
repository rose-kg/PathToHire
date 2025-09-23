import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import {Link} from 'react-router-dom'
import TemplatePointers from '../../features/user/components/TemplatePointers'
import React from 'react';
import { Typography } from '@mui/material'
import PowerBIReportViewer from '../../features/powerBI/powerBiViewer'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : ""}))
      }, [])

    return(
      <div >
      <div >
        <div >
            <TemplatePointers />
            <Typography variant='h2' sx={{color: '#30bfb6'}}>{localStorage.getItem("externalUser")}</Typography>
            <Link to="/app/getstarted"><button className="btn bg-base-100 btn-outline">Get Started</button></Link>

       
        </div>
      </div>
    </div>
    )
}

export default InternalPage
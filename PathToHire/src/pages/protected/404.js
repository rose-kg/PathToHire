import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import FaceFrownIcon  from '@heroicons/react/24/solid/FaceFrownIcon'
import React from 'react';

function InternalPage(){

    const dispatch = useDispatch()
// The useEffect here runs once when the 404 page loads.
// It dispatches an action to set the page title (probably in your app’s header) to an empty string.
// This means the header won’t show any title when the 404 page is displayed.
    useEffect(() => {
        dispatch(setPageTitle({ title : ""}))
      }, [])

    return(
        <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <FaceFrownIcon className="h-48 w-48 inline-block"/>
                <h1 className="text-5xl  font-bold">404 - Not Found</h1>
                </div>
            </div>
        </div>
    )
}

export default InternalPage

//Control all the pages part of the App
import React from "react";
import {Link, Outlet} from "react-router-dom"


export function Home(){
    return(
        <div>
            <h1>Company Website</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact</Link>                
            </nav>
        </div>
    );
}

export function Products(){
    return(
        <div>
            <h1>My Products</h1>
            <Outlet/>
            <Link to="/">Back</Link>            
        </div>
    );
}

export function About(){
    return(
        <div>
            <h1>About Company</h1>
            <Link to="/">Back</Link>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1>Contact Company</h1>
            <Link to="/">Back</Link>
        </div>
    );
}

export function Whoops404(){
    return(
        <div>
            <h1>This page doesn't exist!</h1>
            <Link to="/">Back</Link>
        </div>
    )
}

export function FeaturedProducts(){
    return(
        <div>
            <h2>My Featured Products</h2>        
        </div>
    );
}
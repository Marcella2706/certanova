"use client";

import Navbar from '@/components/layout/Navbar';
import React , {useState,ChangeEvent, FormEvent} from 'react';
import Link from "next/link";

export default function SignIn(){
    const [formData, setFormData]=useState({
        email: "",
        password: ""
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        //api call
        console.log("SignIn data: ",formData);
    }
    
    return(
        <>
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-foreground">SIGN IN</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">EMAIL</label>
                        <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-800 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-foreground">PASSWORD</label>
                        <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-800 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                    type="submit"
                    className="w-full py-2 bg-black dark:bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-semibold"
                    >
                        SIGN IN
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link href="/auth/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
        </>
    );
}
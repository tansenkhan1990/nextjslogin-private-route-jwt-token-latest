import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';

const Navbar = () => {
    const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {isAuthenticated && (
                    <>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link href="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link href="/logout">Logout</Link>
                        </li>
                    </>
                )}
                {!isAuthenticated && (
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import style from '../styles/nav.module.scss'


export function Layout({ children }) {
    return (
        <>
            <Head>
                <title>TestTask</title>
            </Head>
            <div className='wrapper'>

                <nav className={style.navGrid}>
                    <Link href="/">Home</Link>
                    <Link href="/listings">listings</Link>
                </nav>
                <main>
                    {children}
                </main>
                <footer>
                    <span>Just Footer</span>
                </footer>
            </div>

        </>
    )
}
import styles from "@/app/styles/navbar.module.css"
import Nav from "@/app/components/Nav"
import Link from "next/link";
import Image from 'next/image';
//import React from 'react'

const Header = () => {
    return(
        <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/logo.png" alt="TenFlex" width={200} height={60} />
            </Link>
            
        </div>
        <Nav/>
    </header>
    );
};

export default Header;
import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

const Herosection = () =>{
return(
    <main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1> Let's watch movie</h1>
                    <p> Checkpout the new movies</p>
                    <Link href="/movie">
                        <button className={styles.button_style}>
                            Explore Movies
                        </button>
                    </Link>

                </div>
                <div className={heroStyles.hero_image}>
                    <Image src="/about1.svg" alt="watching tenflix" width={500} height={400} />

                </div>

            </div>
        </div>

    </main>
)
};

export default Herosection;
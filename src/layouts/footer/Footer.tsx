import Logo from "~/components/Logo"
import styles from "./Footer.module.css"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"

export default function Footer() {
    return (
        <section className="w-full py-4 text-white bg-indigo-950">
            <footer className="max-w-screen-2xl h-full mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className={styles["info"]}>
                        <div className={styles["info-logo"]}>
                            <Logo />
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon className="text-white w-6 pr-1" /> 0866211334
                        </div>
                        <div className={styles["info-mail"]}>
                            <EnvelopeIcon className="text-white w-6" /> info@digitalagency.com
                        </div>
                        <div className={styles["info-address"]}>
                            <MapPinIcon className="text-white w-6" /> 9574 Second Road Dunedin, FL 34698
                        </div>
                    </div>

                    <div className={styles["about"]}>
                        <p>Our Story</p>
                        <p>Team</p>
                        <p>Clients</p>
                        <p>Testimonials</p>
                        <p>Social Media</p>
                    </div>

                    <div className={styles["service"]}>
                        <p>Web Design</p>
                        <p>Social Media</p>
                        <p>PPC Advertising</p>
                        <p>Content Creation</p>
                        <p>Testimonials</p>
                    </div>
                    <div className={styles["portfolio"]}>
                        <p>Case Studies</p>
                        <p>Projects</p>
                        <p>Success Stories</p>
                        <p>Latest Posts</p>
                        <p>Web Design</p>
                    </div>
                </div>
                <div className={styles["footer-copyright"]}>
                    <p>© 2024 Created with Royal Elementor Addons</p>
                </div>
            </footer>
        </section>
    )
}
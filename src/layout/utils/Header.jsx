

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import img from "@/assets/header/logo1.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import ContactModal from "@/components/model/ContactModal";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/router";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
const router = useRouter();
  
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src={img} alt="ALO Logo" width={120} height={60} priority />
        </Link>

        <div className={`${styles.menu} ${open ? styles.show : ""}`}>
          <Link
            href="/about"
            className={`${styles.items} ${pathname === "/about" ? styles.active : ""}`}
          >
            About
          </Link>

          {/* <Link
            href="/program"
            className={`${styles.items} ${pathname === "/program" ? styles.active : ""}`}
          >
            Program
          </Link> */}
      <div
  className={styles.dropdown}
  onMouseEnter={() => setProgramOpen(true)}
  onMouseLeave={() => setProgramOpen(false)}
>
 <div className={styles.items}>
   <span onClick={() => router.push("/program")}>
  Program
</span>
    <FaChevronDown
      className={`${styles.icon} ${programOpen ? styles.rotate : ""}`}
    />
  </div>


  <div className={`${styles.dropdownMenu} ${programOpen ? styles.showDropdown : ""}`}>
     <Link 
  href="/program/uiux" 
  className={styles.dropdownItem}
  onClick={() => setProgramOpen(false)}
>
  Diploma in UI/UX
</Link>

<Link 
  href="/program/fullstack" 
  className={styles.dropdownItem}
  onClick={() => setProgramOpen(false)}
>
  Diploma in Full Stack
</Link>

<Link 
  href="/program/ai" 
  className={styles.dropdownItem}
  onClick={() => setProgramOpen(false)}
>
  Diploma in Artificial Intelligence (AI)
</Link>

<Link 
  href="/program/vfx" 
  className={styles.dropdownItem}
  onClick={() => setProgramOpen(false)}
>
  Diploma in VFX & Animations
</Link>
    </div>

</div>

          <Link
            href="/campus-life"
            className={`${styles.items} ${pathname === "/campus-life" ? styles.active : ""}`}
          >
            Campus Life
          </Link>

          <Link
            href="/contact"
            className={`${styles.items} ${pathname === "/contact" ? styles.active : ""}`}
          >
            Contact
          </Link>

          <div className={styles.menuBtn} onClick={() => setOpenModal(true)}>
            <p>Touch With Us</p>
          </div>
        </div>

        <div className={styles.btn} onClick={() => setOpenModal(true)}>
          <p>Touch With Us</p>
        </div>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Header;

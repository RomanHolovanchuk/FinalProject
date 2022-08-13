import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/image/bombWhite.png";
import SocialFlow from "./SocialFlow/SocialFlow";
function Footer() {
  return (
    <footer className={styles.footer_page}>
      <div className={styles.footer_links}>
        <ul>
          <li className={styles.linku}>About Us</li>
          <li className={styles.linku}>Partnerships</li>
          <li className={styles.linku}>Contact Us</li>
        </ul>
        <ul>
          <li className={styles.linku} >API</li>
          <li className={styles.linku}>Feature Request</li>
          <li className={styles.linku} >Help & Support</li>
        </ul>
        <ul>
          <li className={styles.linku} >Privacy Policy</li>
          <li className={styles.linku} >Cookies Policy</li>
          <li className={styles.linku} >Terms of Use</li>
        </ul>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.footer_bottom}>
<div className={styles.footer_info} >© 2008-2022 Digiwalls Media, all rights reserved. MMOBomb® is a registered trademark.
All other trademarks are property of their respective owners.</div>
<div className={styles.social_links}>
<SocialFlow />
</div>
      </div>
    </footer>
  );
}

export default Footer;

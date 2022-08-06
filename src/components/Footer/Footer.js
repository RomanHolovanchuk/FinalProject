import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/image/bombWhite.png";
import SocialFlow from "./SocialFlow/SocialFlow";
function Footer() {
  return (
    <footer className={styles.footer_page}>
      <div className={styles.footer_links}>
        <ul>
          <li><a className={styles.linku} href="/">About Us</a></li>
          <li><a className={styles.linku} href="/">Partnerships</a></li>
          <li><a className={styles.linku} href="/">Contact Us</a></li>
        </ul>
        <ul>
          <li><a className={styles.linku} href="/">API</a></li>
          <li><a className={styles.linku} href="/">Feature Request</a></li>
          <li><a className={styles.linku} href="/">Help & Support</a></li>
        </ul>
        <ul>
          <li><a className={styles.linku} href="/">Privacy Policy</a></li>
          <li><a className={styles.linku} href="/">Cookies Policy</a></li>
          <li><a className={styles.linku} href="/">Terms of Use</a></li>
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

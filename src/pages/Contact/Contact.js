import React from 'react';
import Contactcss from './contact.module.css';
import useAnalyticsEventTracker from '../../components/GoogleEventTracker';

function GetInTouch() {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');

  return (
    <div className={Contactcss.container}>
      <div className={Contactcss.content}>
        <header>Get in Touch</header>
        <form action="" onSubmit="sendEmail(); reset(); return false">
          <div className={Contactcss.field}>
            <span />
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className={Contactcss.field}>
            <span />
            <input type="email" id="email" placeholder="Email Id" required />
          </div>
          <div className={Contactcss.field}>
            <span />
            <input type="text" id="phone" placeholder="Phone Number" required />
          </div>
          <div className={Contactcss.field}>
            <textarea
              id="message"
              cols="20"
              rows="1"
              placeholder="How can we Help you?"
            />
          </div>
          <input className={Contactcss.send} type="submit" value="Send" onClick={() => gaEventTracker('call')} />
        </form>
      </div>
    </div>
  );
}
export default GetInTouch;

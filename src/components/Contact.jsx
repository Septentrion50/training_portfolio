import { useContext, useEffect } from "react";
import NightMode from "../NightMode";

const Contact = () => {
  const nightmode = useContext(NightMode);

  useEffect(() => {
    nightmode.giveNight('contact');
  }, [nightmode]);

  return (
    <section className="contact">
      <form>
        <h3>You want to chat with me on a specific topic? Just fill the form below and I will reach back to you ASAP!</h3>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Your message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;

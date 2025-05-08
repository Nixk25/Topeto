import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-4 p-2">
      <div className="flex flex-col xl:flex-row bg-background p-10 xl:py-40 py-20 justify-between items-center rounded-xl">
        <h2 className="contactHeadline text-white font-bold flex justify-center items-center mb-10 uppercase">
          Kontakty
        </h2>
        <div className="flex flex-col gap-5 items-center">
          <a href="mailto:topeto.kapela@gmail.com" className="emailText">
            topeto.kapela@gmail.com
          </a>
          <a href="tel:+420702088426" className="phoneText">
            +420 702 088 426
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

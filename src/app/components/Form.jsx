import React from "react";
import style from "../styles/Form.module.css";
export default function Form() {
  return (
    <>
      <div className={style.backgroundDivider}></div>
      <div className={style.formContainer}>
        <div className={style.banner}>Connect with Us Today: Reach Out via Our Contact Form!</div>
        <form className={style.form}>
          <h1 className={style.sendTitle}>Send a message</h1>

          <label htmlFor="fullname" className={style.fullName}>
            Full name<span className={style.spanFullName}>*</span>
          </label>
          <input type="text" name="fullname" className={style.inputForm} />

          <label htmlFor="email" className={style.fullName}>
            E-mail<span className={style.spanFullName}>*</span>
          </label>
          <input type="email" name="email" className={style.inputForm} />

          <label htmlFor="subject" className={style.fullName}>
            Subject<span className={style.spanFullName}>*</span>
          </label>
          <input type="text" name="subject" className={style.inputForm} />

          <label htmlFor="message"  className={style.fullName}>
            Message<span className={style.spanFullName}>*</span>
          </label>
          <textarea name="message" className={style.textAreaForm}></textarea>
          <div className={style.sendBox}>
            <button className={style.btnSend}>
              Send
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={style.svgForm}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

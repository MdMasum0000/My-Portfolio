import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9505937-38a4-49ed-828f-92880b6aae55");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="contact  flex flex-col items-center justify-center gap-20 "
    >
      <div className="contact-title flex  gap-2 ">
        <h1 className="  text-5xl  font-semibold">Get in Touch</h1>
        <img
          className="w-10 h-10   "
          src="https://cdn-icons-png.flaticon.com/128/11600/11600571.png"
          alt=""
        />
      </div>
      <div className="contact-section flex gap-x-80   ">
        <div className="contact-left flex flex-col gap-12 px-20 ">
          <h1
            className="text-5xl font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text
             text-transparent"
          >
            Let's talk
          </h1>
          <p className=" text-white text-base">
            Feel free to reach out to me for collaboration opportunities,
            freelance projects, or any inquiries regarding my work
          </p>
          <div className="contact details flex flex-col gap-7 text-white text-base">
            <div className="contact-detail flex items-center gap-4 ">
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt=""
              />
              <p className="text-xl">mdmasummiah76151.@gmail.com</p>
            </div>
            <div className="contact-detail flex gap-4 items-center">
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png"
                alt=""
              />
              <p className="text-lg">9862636272</p>
            </div>
            <div className="contact-detail flex gap-4 items-center">
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                alt=""
              />
              <p className="text-lg">India,Tripura, Bishalgarh </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-Right flex flex-col items-start gap-5 "
        >
          <label className="text-white text-sm font-normal" htmlFor="">
            Your Name
          </label>
          <input
            className="border-none w-96 h-10 px-5 border-r-4 bg-gray-500 text-white text-sm"
            type="text"
            placeholder="Enter Your name"
            name="name"
          />
          <label className="text-white text-sm font-normal" htmlFor="">
            Your Email
          </label>

          <input
            className="border-none w-96 h-10 px-5 border-r-4 bg-gray-500 text-white text-sm"
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <label className="text-white text-sm font-normal" htmlFor="">
            Write Your Message Here
          </label>
          <textarea
            className="w-96 border-none p-6 border-r-4 bg-gray-500 text-white text-sm"
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>

          <button
            type="submit"
            className=" border-none text-white border-r-2 rounded-3xl bg-gradient-to-r from-orange-700 to-purple-700 text-base px-5 py-3 mb-10 cursor-pointer duration-150
            hover:scale-105 hover:duration-100 "
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

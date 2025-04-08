const Contact = () => {
    return (
      <section className="bg-black text-white py-20 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-400 text-center mt-4">
            Have a project in mind? Let's talk and bring your vision to life!
          </p>
  
          <form className="bg-gray-900 p-8 mt-10 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <textarea placeholder="Your Message" rows={5} className="p-3 mt-6 w-full rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <button type="submit" className="w-full mt-6 py-3 bg-orange-500 rounded-lg font-bold hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
import React, { useState } from 'react';

function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    eventType: '',
    guests: '',
    date: '',
    city: '',
    budget: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-background-light pt-20">
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-primary form-title-shadow leading-tight">
              Book Your Event!
            </h1>
            <p className="font-body text-navy/80 text-lg md:text-xl max-w-2xl mt-4 mx-auto">
              Let's make your celebration unforgettable. Fill out the details below and we'll get back to you!
            </p>
          </div>

          {/* Form Container */}
          <div className="relative bg-white/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 text-primary opacity-50">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,10 C27.9,10 10,27.9 10,50 C10,72.1 27.9,90 50,90 C72.1,90 90,72.1 90,50 C90,27.9 72.1,10 50,10 Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="material-symbols-outlined absolute top-16 -right-6 text-5xl text-secondary rotate-12 opacity-70">
              celebration
            </span>
            <span className="material-symbols-outlined absolute bottom-8 -left-10 text-6xl text-accent -rotate-12 opacity-60">
              cake
            </span>
            <div className="absolute bottom-[-3rem] right-[-2rem] w-24 h-24 border-8 border-dashed border-secondary rounded-full rotate-45 opacity-50"></div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="e.g. Ananya Sharma"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact">Contact Number</label>
                <input
                  className="form-input"
                  id="contact"
                  name="contact"
                  placeholder="Your 10-digit number"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="form-label" htmlFor="eventType">Event Type</label>
                <select
                  className="form-input appearance-none"
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                  <option value="birthday">Birthday</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="guests">Expected Guests</label>
                <input
                  className="form-input"
                  id="guests"
                  name="guests"
                  placeholder="e.g. 150"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="date">Event Date</label>
                <input
                  className="form-input"
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="city">City</label>
                <input
                  className="form-input"
                  id="city"
                  name="city"
                  placeholder="e.g. Mumbai"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="budget">Budget Range</label>
                <input
                  className="form-input"
                  id="budget"
                  name="budget"
                  placeholder="e.g. ₹50,000 - ₹75,000"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2">
                <label className="form-label" htmlFor="notes">Notes</label>
                <textarea
                  className="form-input !rounded-3xl !h-auto py-4"
                  id="notes"
                  name="notes"
                  placeholder="Any special requests or details?"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <button className="submit-button" type="submit">
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookNow;

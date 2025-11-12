import { useState } from 'react'

export default function EventInquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    eventType: 'Wedding',
    expectedGuests: '',
    eventDate: '',
    city: '',
    budget: 10000,
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  return (
    <main className="flex-grow bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="@container">
        <div className="p-6 md:p-8">
          <div
            className="flex min-h-[480px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center rounded-3xl shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(35, 15, 23, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQYipJGJscZBWM0LkCKT9SGo6Y57J_zuDGTNz2lDIwFqYjHDLSxaxNspPeOCb0-fI473Yjq5lV1o8ICV8KJFGCt7bx4tsjACdRoPEBt97hYQ8yAIRobEkg33r0yg1Jvr14I8-rpZgnJBajvK-691OxQD9JhWF_0GrRm-UNNOS0wagABNMAddQFYrWHfHpdEXqBBYb11_0CwDdj9rJSKC3mGqi2WMN3kWgWxM8OqbGKhkcODPdZVFh7NGuLMJ1zIpuqbhyctKoyvA")'
            }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight hero-title-shadow">
                Let's Make Your Event Sweeter
              </h1>
              <h2 className="text-white/95 text-base md:text-lg font-normal leading-normal max-w-xl mx-auto">
                Fill out the details below, and our team will get back to you with a custom quote designed just for your special occasion.
              </h2>
            </div>
            <a
              href="#inquiry-form"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-navy text-base font-bold leading-normal tracking-wider hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="truncate">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <section className="w-full max-w-5xl mx-auto py-16 md:py-24 px-6" id="inquiry-form">
        <div className="flex flex-col items-center">
          {/* Page Heading */}
          <div className="w-full flex flex-wrap justify-center gap-3 mb-8 text-center">
            <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-extrabold text-shadow-blue dark:text-shadow-pink">
              Event Inquiry Form
            </h2>
          </div>

          <div className="w-full mt-4 p-8 md:p-10 bg-white dark:bg-navy/40 border border-gray-200/50 dark:border-white/10 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Event Type */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="eventType"
                >
                  Event Type
                </label>
                <div className="relative">
                  <select
                    className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy dark:text-white">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Expected Guests */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="expectedGuests"
                >
                  Expected Guests
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="expectedGuests"
                  name="expectedGuests"
                  placeholder="e.g., 150"
                  type="number"
                  value={formData.expectedGuests}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Event Date */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="eventDate"
                >
                  Event Date
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="city"
                  name="city"
                  placeholder="e.g., Mumbai"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Budget Range */}
              <div className="flex flex-col md:col-span-2">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="budget"
                >
                  Budget Range (INR): ₹{formData.budget.toLocaleString()}
                </label>
                <input
                  className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 form-range accent-primary"
                  id="budget"
                  max="500000"
                  min="10000"
                  name="budget"
                  step="1000"
                  type="range"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <div className="flex justify-between text-sm text-navy/70 dark:text-gray-300 mt-2">
                  <span>₹10,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col md:col-span-2">
                <label
                  className="text-navy dark:text-white text-base font-semibold leading-normal pb-2"
                  htmlFor="notes"
                >
                  Notes
                </label>
                <textarea
                  className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-2xl text-navy dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-2 border-gray-200 dark:border-white/20 bg-background-light dark:bg-navy/60 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                  id="notes"
                  name="notes"
                  placeholder="Any special requests or details? Let us know here!"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  className="flex min-w-[180px] w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary text-navy text-base font-bold leading-normal tracking-wider hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg"
                  type="submit"
                >
                  <span className="truncate">Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

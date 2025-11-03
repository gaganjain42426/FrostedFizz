import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function EventServices() {
  const [activeTab, setActiveTab] = useState('weddings')

  const eventImages = {
    weddings: [
      {
        name: 'Haldi Ceremony',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEUWko_Si0muiVE85KPGb44tSVXUVEXDjQSb2TeKVz_l1xfKLfUnmsx5LeuXAeNlq0OqbauJhwUD60SayHby_zjC-ELtbaToHastvF0Li-qQkQ2vN78A_I9oulE4gf8V9f5P9B69BFfjCbMXlc6ALUsaCSLoAIdwdiiYLalcDr2gX1OKIio4Ijv0hShAWXlIKGMy3A0o1FCzBoTgkHjiPX-ug1JXfrfuJPSBpwNOsuw9y4ZHMLOqMRJZwIld-iE9Kj8BA8lSRlFw'
      },
      {
        name: 'Mehndi Night',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYW-7XZUPxGhHGXKcnZPzWpjoZe8Jknf41cUdfcJCwGqKqw3WAYQQP5bf02brXgbV17XwWz_-Vsgp7AIXogfjT9QcXwdoTNj9xWqk6eEGWf1otrxAR7y6w2FDgKPUuPUHusJ229jsiCv_KFWA7T1gk54IacIj4sgcXGQpENAZoRUrbVG0rJKVS2fy3PaBVb2Dmy-vLQCnIQkJ54UgUwLQEgtwQ4L93czcTM1mV653oKCWe-YKtIbam0G5a-davKxt0PbEoop4puA'
      },
      {
        name: 'Sangeet',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW1NS2CJ-LudksZBvcP9hyGU-8gL-HvstD5YctonLJm8lGxnunB4kaCE7HbI2suBeVECdqDdps2MkxY7Cs5Nh2xYlW2a1mHKadz6zLh0Z_dhf7h0Qxj_J3zDIiKHU9KeGR09-91icu6r30lRlKhHYekdf2FBgLthwYZzSGOmzoa3oz00tJzI2AJYC4sgPr2thl4plt3QXnkAo887v3xVZSbaq5xmm8XA4GVyIQ6F3ynmcQL7zsd2nmYuBGGWE6qxzIaQ7hD0f7ZA'
      },
      {
        name: 'Reception',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZs9j9zp6DuBcIE5e-lhu8OgZMHcb2Qk70jb5klQoJu3H_MdR-D9UvjqagjQgzzVC5p5-XyxdOcBcTWERdjFSt30Ay4tSSGaCM86NsCffv0hIKK7dcuEM--wRjzHpbQSwlaG102VDOb_Ue8G0RUL5e9hPmMOxju5Cc_JExtAbOF0o3pskmWPKSs2J3bKYilKqsaE1JBnkTKw-jvMN8eUzMFr359iPUNurWowVeFY9tFozXli7hFrXU6WWMcKc1UzHG9Lqm88YjhQ'
      },
    ]
  }

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-[1280px] px-4 py-5 lg:px-40 lg:py-10">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-0">
            <div
              className="flex min-h-[480px] lg:min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkEEsZ5QytlYLx8XM5r_NkcXTxIEaw54BOVCOgEMnhWxTecdkCSHtMz3Y4nAz8nx3dgY5SghHmNlESmaq22pE_g8WBUjBRcytVv7lfGp55QvuPVYUq9QXM7zUl6hbhkcPO76f-7pIx_UeZde78tqT7zvwWaReo7Fkaqm2a5I1vaE-Yc49kVrFVHhvLJG7Y7yDR37WoZmIJED5nzHZ0U3inXA0MNVKXsDgzNjhTLZTBMKL13QGk6GnSKA_8mrM3FtHpvZli6wwryg")'
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl font-display">
                  Fresh Desserts, Unforgettable Events.
                </h1>
                <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg">
                  We bring the counter, staff, and vibes — fresh desserts live at your event.
                </h2>
              </div>
              <Link
                to="/inquiry"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-text-light text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base font-display hover:bg-accent transition-colors"
              >
                <span className="truncate">Plan Your Event</span>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="flex flex-col gap-10 px-4 py-16 lg:py-24 @container">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl font-display">
              How It Works
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-[720px] mx-auto">
              Getting our live dessert experience at your event is as easy as one, two, three!
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 lg:gap-6 p-0">
            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col text-center items-center">
              <div className="text-primary bg-primary/20 rounded-full p-3 mb-2">
                <span className="material-symbols-outlined text-3xl">event</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight font-display">
                  Choose Your Event
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  Select the type of celebration you're hosting.
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col text-center items-center">
              <div className="text-primary bg-primary/20 rounded-full p-3 mb-2">
                <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight font-display">
                  Customize Your Menu
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  Pick your favorite desserts and beverages from our extensive menu.
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col text-center items-center">
              <div className="text-primary bg-primary/20 rounded-full p-3 mb-2">
                <span className="material-symbols-outlined text-3xl">celebration</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight font-display">
                  We Bring the Party
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  Our team arrives with everything needed to delight your guests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Offerings Section */}
        <div className="px-4 py-10">
          <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] font-display text-center pb-8">
            Catering for Every Celebration
          </h2>

          <div className="pb-3">
            <div className="flex flex-wrap justify-center border-b border-border-light dark:border-border-dark px-4 gap-4 md:gap-8">
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
                  activeTab === 'weddings' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-muted-light dark:text-text-muted-dark'
                }`}
                onClick={() => setActiveTab('weddings')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em] font-display">Weddings</p>
              </button>
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
                  activeTab === 'birthdays' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-muted-light dark:text-text-muted-dark'
                }`}
                onClick={() => setActiveTab('birthdays')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em] font-display">Birthdays</p>
              </button>
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
                  activeTab === 'corporate' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-muted-light dark:text-text-muted-dark'
                }`}
                onClick={() => setActiveTab('corporate')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em] font-display">Corporate Gatherings</p>
              </button>
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
                  activeTab === 'festivals' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-muted-light dark:text-text-muted-dark'
                }`}
                onClick={() => setActiveTab('festivals')}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em] font-display">College & School Festivals</p>
              </button>
            </div>
          </div>

          {/* Event Content */}
          {activeTab === 'weddings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
              {eventImages.weddings.map((event, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={event.image}
                      alt={event.name}
                    />
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight font-display">
                    {event.name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

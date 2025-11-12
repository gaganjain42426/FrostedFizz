import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="flex w-full max-w-5xl flex-col gap-16 md:gap-24 px-6">
        {/* Hero Section */}
        <section className="@container">
          <div
            className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-3xl bg-cover bg-center bg-no-repeat p-8 text-center shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbJiXmRfxoXFFMMdOiQJ_Uokal1qoc7NEHfc6uY1eGueQnr7QTjAB9wjRSNYkODPgvQrgPM-IUG7T5z2gEvw04x39FPERLrtJNClwMrkXrYmIKwoZnOwy1M-m_8kHTjY_wSIjQt7agKekW7-NaUL-BVvI4gEIuVD8yaqQDB6PGRsehguPPkWAHJrN6R1pDDAAu8tZz_X-BETmbf_0M3uPggRz75t7MpVcQilSWbAGJgWNlrIfROL8n7YDzcegIekX2gQjqrD2MZQ")'
            }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white hero-title-shadow">
                Our Sweet Story
              </h1>
              <h2 className="max-w-2xl text-base md:text-lg font-normal leading-normal text-white/95">
                Discover the journey of Frosted Fizz, from a small dream in Jaipur to Rajasthan's favorite live dessert experience. Our passion is crafting sweet memories, one event at a time.
              </h2>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white text-shadow-blue dark:text-shadow-pink">Our Journey</h2>
            <p className="mt-3 text-navy/70 dark:text-gray-300">From a small outlet to a catering sensation.</p>
          </div>
          
          <div className="w-full max-w-md">
            <div className="grid grid-cols-[40px_1fr] gap-x-2">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-base">storefront</span>
                </div>
                <div className="h-full w-[1.5px] bg-border-light dark:bg-border-dark grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-base font-bold leading-normal text-navy dark:text-white">Humble Beginnings</p>
                <p className="text-base font-normal leading-normal text-navy/70 dark:text-gray-300">
                  Our first small outlet opens in Jaipur, serving local treats and building a community of dessert lovers.
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="h-2 w-[1.5px] bg-primary/30"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <span className="material-symbols-outlined text-base">celebration</span>
                </div>
                <div className="h-full w-[1.5px] bg-primary/30 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-base font-bold leading-normal text-navy dark:text-white">The Big Leap</p>
                <p className="text-base font-normal leading-normal text-navy/70 dark:text-gray-300">
                  We transitioned to live dessert counters, bringing the magic of fresh, custom-made treats directly to events.
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="h-2 w-[1.5px] bg-primary/30"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/30 text-accent">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-base font-bold leading-normal text-navy dark:text-white">A Rajasthan Favorite</p>
                <p className="text-base font-normal leading-normal text-navy/70 dark:text-gray-300">
                  Becoming the go-to choice for memorable and delicious dessert catering across the entire state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Spotlight */}
        <section className="rounded-3xl bg-white dark:bg-navy/40 shadow-lg p-6 md:p-10 border border-gray-200/50 dark:border-white/10">
          <div className="flex w-full flex-col gap-6 @container md:gap-8 @[520px]:flex-row @[520px]:items-center @[520px]:justify-between">
            <div className="flex flex-col items-center gap-6 text-center @[520px]:flex-row @[520px]:text-left">
              <div
                className="h-32 w-32 flex-shrink-0 rounded-full bg-cover bg-center border-4 border-primary/30"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMIGj7UKYpUJg9lZ-bv4Cj0XK_clkxkY5lmvBa93GQSWS7R0aqnObIQvjUX53fnSis2reeQCt5LGUV1vAiYQEX17UOo52h2n61-B0dJuR2wUFxyXjvJVf3KEsnKgaYOHzz37zvcM8DDtK2qjkKHd2jswUWhS4MptxRtx4J3PV80r0v-PFHIHryZW8tAqavvjWuVV7kYuw0o_jDcLXLvmqd5Lc9w59tTtwr6GKuS-YIOGZt91kQlLOKnacbaUtg-msb_DWO4-xSNg")' }}
              ></div>
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-bold leading-tight text-navy dark:text-white">
                  Meet Our Founder, Gagan Jain
                </p>
                <p className="mt-2 text-base font-normal leading-normal text-navy/70 dark:text-gray-300">
                  "From the very first day, my dream was to spread joy through unique and delicious desserts. Seeing the smiles on our clients' faces is what fuels our passion at Frosted Fizz."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white text-shadow-pink dark:text-shadow-blue">Our Promise</h2>
            <p className="mt-3 text-navy/70 dark:text-gray-300">What makes our experience unforgettable.</p>
          </div>
          
          <div className="grid w-full grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-white dark:bg-navy/40 shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-primary">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">local_florist</span>
              </div>
              <h3 className="text-lg font-bold text-navy dark:text-white">Quality Ingredients</h3>
              <p className="text-sm text-navy/70 dark:text-gray-300">
                We believe the best desserts start with the finest, freshest ingredients, sourced with care.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl bg-white dark:bg-navy/40 shadow-lg hover:shadow-secondary/30 hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-secondary">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <span className="material-symbols-outlined text-3xl">tapas</span>
              </div>
              <h3 className="text-lg font-bold text-navy dark:text-white">The Live Experience</h3>
              <p className="text-sm text-navy/70 dark:text-gray-300">
                Our live counters are more than just food; they're an interactive and engaging show for your guests.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl bg-white dark:bg-navy/40 shadow-lg hover:shadow-accent/40 hover:shadow-2xl transition-all duration-300 p-8 text-center sm:col-span-2 lg:col-span-1 border-2 border-transparent hover:border-accent">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/30 text-accent">
                <span className="material-symbols-outlined text-3xl">sentiment_very_satisfied</span>
              </div>
              <h3 className="text-lg font-bold text-navy dark:text-white">Customer Happiness</h3>
              <p className="text-sm text-navy/70 dark:text-gray-300">
                Your joy is our top priority. We go the extra mile to ensure your event is a sweet success.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="flex flex-col items-center gap-8">
          <h4 className="text-sm font-bold uppercase leading-normal tracking-widest text-navy/70 dark:text-gray-300 text-center">
            Our Setup in Action
          </h4>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 md:gap-6">
            <div
              className="col-span-1 row-span-2 h-full min-h-60 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGfNrxCrhtyN8vTi20yoSH2MtHssLXCx3RdhaPR3GZmFce4MuLjWPI0ufPrhGXA44eOi5P9folooFjJn0gjhWG2nN8mNGG_rBp0PbBDWE9Kdn7t84ts8S2Qh035QZsACCTXAzKo84hHkwXPLcBuWqsvFWJmaZM7jv_nNuD_wVlI8ULZSVxgiG0QwphM2NQ0RIBMXOaZSGJ1eHXjRigRXOSWZLdqSDp6awXUSbtnoyQGowTPSVddkQAvzMgIZMgL5A29azS8LK5jw')" }}
            ></div>
            <div
              className="col-span-1 row-span-1 min-h-40 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNjl5v1DsU7dh6Qzoet9dferovXFPm-9MDHR4eH42lcVAc7bGoMBPi6TzyxHD2EJF_y8yb2SIzTt1QMs-WTcukgPmdVIAA2qzEode0E9VzD-4CSPy7Aqybi7-IIQx9NAx6aXrnJKplLZzjlUPRQIVjgb88_eXqQ55goJb63copa-NyDDlsPek0IRNesyIbqpM1UGYNcp93jX2YzmAXnf5v1GdCQcMT5tdck4wB9XCjj09D0Ubhc2KYv1yLWu7lBqFceWCbis73ow')" }}
            ></div>
            <div
              className="col-span-1 row-span-1 min-h-40 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM2VRMp_FLOrhLDp3dpeCDPQSdqXiAUJBzBScjAQkyauQ43fAhL2dW9yecKo76Tb_Igs1oH98FXwoRjgK8pcv5ApB1CWAKr1ENlYQPb5lePpV2xY-j1xgE7_zPU3c32nuxHd2WSLyfSgZXphbGbC7AX8V7prraE0q_KFiJiCWtm3Crbcct_RbaTIhDw5ZXfaWXyIQde1p2jBFqy0KAi_ybcaBDXiUSv4GLMqy5TNN4D1d3uDKLT6zw5k3p5l8vSAPfm6ZlhhDf4w')" }}
            ></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-navy/50 dark:to-primary/30 shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white">
            Ready to Make Your Event Sweeter?
          </h2>
          <p className="max-w-xl text-navy/70 dark:text-gray-300">
            Let's create unforgettable dessert moments together. Get in touch for a custom quote for your wedding, party, or corporate event.
          </p>
          <Link
            to="/inquiry"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-navy text-base font-bold leading-normal tracking-wider hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span className="truncate">Get a Quote</span>
          </Link>
        </section>
      </div>
    </main>
  )
}

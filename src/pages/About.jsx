import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center py-10 sm:py-16 lg:py-20">
      <div className="flex w-full max-w-4xl flex-col gap-10 sm:gap-16 lg:gap-20 px-4 sm:px-6 lg:px-0">
        {/* Hero Section */}
        <section className="@container">
          <div
            className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center @[480px]:gap-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbJiXmRfxoXFFMMdOiQJ_Uokal1qoc7NEHfc6uY1eGueQnr7QTjAB9wjRSNYkODPgvQrgPM-IUG7T5z2gEvw04x39FPERLrtJNClwMrkXrYmIKwoZnOwy1M-m_8kHTjY_wSIjQt7agKekW7-NaUL-BVvI4gEIuVD8yaqQDB6PGRsehguPPkWAHJrN6R1pDDAAu8tZz_X-BETmbf_0M3uPggRz75t7MpVcQilSWbAGJgWNlrIfROL8n7YDzcegIekX2gQjqrD2MZQ")'
            }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white @[480px]:text-5xl">
                Our Sweet Story
              </h1>
              <h2 className="max-w-2xl text-sm font-normal leading-normal text-white/90 @[480px]:text-base">
                Discover the journey of Frosted Fizz, from a small dream in Jaipur to Rajasthan's favorite live dessert experience. Our passion is crafting sweet memories, one event at a time.
              </h2>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Our Journey</h2>
            <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">From a small outlet to a catering sensation.</p>
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
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Humble Beginnings</p>
                <p className="text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                  Our first small outlet opens in Jaipur, serving local treats and building a community of dessert lovers.
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="h-2 w-[1.5px] bg-border-light dark:bg-border-dark"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-base">celebration</span>
                </div>
                <div className="h-full w-[1.5px] bg-border-light dark:bg-border-dark grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">The Big Leap</p>
                <p className="text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                  We transitioned to live dessert counters, bringing the magic of fresh, custom-made treats directly to events.
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="h-2 w-[1.5px] bg-border-light dark:bg-border-dark"></div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">A Rajasthan Favorite</p>
                <p className="text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                  Becoming the go-to choice for memorable and delicious dessert catering across the entire state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Spotlight */}
        <section className="rounded-xl bg-primary/10 dark:bg-primary/20 p-4 sm:p-8">
          <div className="flex w-full flex-col gap-6 @container sm:gap-8 @[520px]:flex-row @[520px]:items-center @[520px]:justify-between">
            <div className="flex flex-col items-center gap-4 text-center @[520px]:flex-row @[520px]:text-left">
              <div
                className="h-32 w-32 flex-shrink-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMIGj7UKYpUJg9lZ-bv4Cj0XK_clkxkY5lmvBa93GQSWS7R0aqnObIQvjUX53fnSis2reeQCt5LGUV1vAiYQEX17UOo52h2n61-B0dJuR2wUFxyXjvJVf3KEsnKgaYOHzz37zvcM8DDtK2qjkKHd2jswUWhS4MptxRtx4J3PV80r0v-PFHIHryZW8tAqavvjWuVV7kYuw0o_jDcLXLvmqd5Lc9w59tTtwr6GKuS-YIOGZt91kQlLOKnacbaUtg-msb_DWO4-xSNg")' }}
              ></div>
              <div className="flex flex-col">
                <p className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                  Meet Our Founder, Gagan Jain
                </p>
                <p className="mt-1 text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                  "From the very first day, my dream was to spread joy through unique and delicious desserts. Seeing the smiles on our clients' faces is what fuels our passion at Frosted Fizz."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Our Promise</h2>
            <p className="mt-2 text-text-muted-light dark:text-text-muted-dark">What makes our experience unforgettable.</p>
          </div>
          
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border-light dark:border-border-dark p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">local_florist</span>
              </div>
              <h3 className="text-lg font-bold">Quality Ingredients</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                We believe the best desserts start with the finest, freshest ingredients, sourced with care.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-lg border border-border-light dark:border-border-dark p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">tapas</span>
              </div>
              <h3 className="text-lg font-bold">The Live Experience</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                Our live counters are more than just food; they're an interactive and engaging show for your guests.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-lg border border-border-light dark:border-border-dark p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              </div>
              <h3 className="text-lg font-bold">Customer Happiness</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                Your joy is our top priority. We go the extra mile to ensure your event is a sweet success.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="flex flex-col items-center gap-8">
          <h4 className="text-sm font-bold uppercase leading-normal tracking-widest text-text-muted-light dark:text-text-muted-dark text-center">
            Our Setup in Action
          </h4>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-4">
            <div
              className="col-span-1 row-span-2 h-full min-h-60 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGfNrxCrhtyN8vTi20yoSH2MtHssLXCx3RdhaPR3GZmFce4MuLjWPI0ufPrhGXA44eOi5P9folooFjJn0gjhWG2nN8mNGG_rBp0PbBDWE9Kdn7t84ts8S2Qh035QZsACCTXAzKo84hHkwXPLcBuWqsvFWJmaZM7jv_nNuD_wVlI8ULZSVxgiG0QwphM2NQ0RIBMXOaZSGJ1eHXjRigRXOSWZLdqSDp6awXUSbtnoyQGowTPSVddkQAvzMgIZMgL5A29azS8LK5jw')" }}
            ></div>
            <div
              className="col-span-1 row-span-1 min-h-40 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNjl5v1DsU7dh6Qzoet9dferovXFPm-9MDHR4eH42lcVAc7bGoMBPi6TzyxHD2EJF_y8yb2SIzTt1QMs-WTcukgPmdVIAA2qzEode0E9VzD-4CSPy7Aqybi7-IIQx9NAx6aXrnJKplLZzjlUPRQIVjgb88_eXqQ55goJb63copa-NyDDlsPek0IRNesyIbqpM1UGYNcp93jX2YzmAXnf5v1GdCQcMT5tdck4wB9XCjj09D0Ubhc2KYv1yLWu7lBqFceWCbis73ow')" }}
            ></div>
            <div
              className="col-span-1 row-span-1 min-h-40 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM2VRMp_FLOrhLDp3dpeCDPQSdqXiAUJBzBScjAQkyauQ43fAhL2dW9yecKo76Tb_Igs1oH98FXwoRjgK8pcv5ApB1CWAKr1ENlYQPb5lePpV2xY-j1xgE7_zPU3c32nuxHd2WSLyfSgZXphbGbC7AX8V7prraE0q_KFiJiCWtm3Crbcct_RbaTIhDw5ZXfaWXyIQde1p2jBFqy0KAi_ybcaBDXiUSv4GLMqy5TNN4D1d3uDKLT6zw5k3p5l8vSAPfm6ZlhhDf4w')" }}
            ></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center gap-4 rounded-xl bg-primary/10 dark:bg-primary/20 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
            Ready to Make Your Event Sweeter?
          </h2>
          <p className="max-w-xl text-text-muted-light dark:text-text-muted-dark">
            Let's create unforgettable dessert moments together. Get in touch for a custom quote for your wedding, party, or corporate event.
          </p>
          <Link
            to="/inquiry"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent transition-colors"
          >
            <span className="truncate">Get a Quote</span>
          </Link>
        </section>
      </div>
    </main>
  )
}

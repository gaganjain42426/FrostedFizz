export default function Gallery() {
  const customShapes = [
    'clip-path: ellipse(80% 60% at 50% 50%)',
    'clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%)',
    'clip-path: circle(50% at 50% 50%)',
    'clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%)',
    'clip-path: ellipse(60% 80% at 50% 50%)',
  ];

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBib-lkmXy5pf0-oedI_diAalf8k-RU-6RlD40q-NypBkYVDLFylRPUbEvy_LSpmbuBq-HeWQvEN6RCvyqyxIYLcP_OUppe0dC5KentouGP7Ytmm-q_Hl4LKDgft8EZLslMaHju0oG0XK0cbNd5Qc46U9oVYuZTVPTvlyYxeRxw0HPTp3-w3e-Z9GnVXc8fEbNF-IYC7OqztcLe1iASYgcPBECFzff86iBPC_N4hPlN7T_Rc6FE0uIsxXycFDIVGTpIl4Q2Wbb1IQ',
      alt: 'Colorful drinks at a wedding event',
      caption: 'Wedding'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrL-HIy8mP_Y7DJI6R1veICPLo5E8I6gaiPgeIo3yOxatLgpYOuYNqJjv9kgu_hHXNhUYG4HQ7GYuBuEDfYxy1ngmu2izqDSnghbaPZSuH4_JWeH-QZqb1FiayfN6P83FAH3Uoxzv_coOy6DChDiud-rwUTYpmEXNsy8Zn76RZyPYUsrNpAltxvs9bkn_svcYO4a0xAo1rEOiLMlGf6n8r-uI3qcw_uZLXvWrctap75nZ8PUgT0jvh5TxzD-onjId62R6CwjMEtA',
      alt: 'Elaborate milkshakes on a tray',
      caption: 'Birthday Party'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWOJndg1J0BqZVXEZGOV3zuWzoITBS0ZVNLU3Ky6B-RVule82oOS9eDmWS-Zp10a7xyCbccZB0CaMiZLD5r8HO0UDpFGxzL0klCDuRE1Dxr4SpfccOqTNh910ZTDclSuxJgwPK3PfOZP-ZlqdAzUCdPn-weYEKGUUCg0IBhUn-N6z0REe9uU18fA8F5QyL1Fj6QJKhIO08bsGCynWzGcooPlloVPjPBrrukPOY0j1QsP9-LBdvYExfCHGbsj8fIwu8H5XyD3vDlQ',
      alt: 'Bright yellow lemonades in glasses',
      caption: 'Summer Festival'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMQdj2-BAkJGtd7aofgPG1GaJO0YAcRuQuKqTY2I7LyJH9dS1ORPd8joS8vHDEa3eSkQKdGIngy8bZGm205h9TpsG26nlPeJBSBq7Mw01dzjr55SwRDwbzkWN8MXAN5G1vq5G2RrgzTmUeGYwuZ7qt8cp1Sg4y2-GEZ8ia-E81btIE0FUv-zVOesVA3Ynf7EGt8Z16ambUYCxWZFUVM8N7ZRGvvaveo1w6_pKzUw13DERqoJp4fvaA58_W99kwOTJGaxdMOF0Ptg',
      alt: 'Assortment of colorful macarons',
      caption: 'Corporate Event'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_yL8ShS1ZvzyEj0vPqaSm3tRpU50IUkW3skDg4AokDGoye9_1G6uqLiVP2YdRcapGe4g8GktkHGXY8-m3lBpcbISgymdMp4k_bFPIyjqwKFn9tq5c2TitykSv4we9NupsqJbiPePOue_4UhF0qC6TSP3K27XCc-rniZZQ7JsjtWGP3e8LowqY_QfLrVpwmyxEAbP7gkM-oJ0G8omAdQZPyv6bpAWsKs25IjLej21R4Ef8Q8SYiT2_GyTzv7HYsXIQG1NEmdIh7Q',
      alt: 'Pink dessert mousse in a glass',
      caption: 'Baby Shower'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAegXK5wftTp6n0mDGe6DjfM68B1dvkxJdcMFshIR6s5g1XCzipS72xK0caouAbkW0PHkwXWAr7haqq9c86fg40XEWj_ArBbnk5bOAj1hq3cegCmoKNmt-0jIFMYbc73hGD9SsdHTHMXAoX5yEgh50uacxQ7n4BnlBtuSbMOKhYap0stwIuWBEiBz0I6pDvquGRFnD-TJeb3Deq5riKU5YauTTLmAsRjsgNwD0zCYAUi3fKERsflMxI59k9k-KveQZRs92SgPMVQQ',
      alt: 'Elegant dessert table setup',
      caption: 'Wedding'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD19HzZJXqW7tiQaZNz_WGUXop_6QjWpVFbjqkRaq_6bajtw-ep3Z1KS2Tv8snWuEY6V8lCc1Nio16n-5wKOtAkPFWFDahKblTf7RQxkMZNFz2yuBVPJmZWDaXMJ3TxtjKdJfTO7v86wTnbzP2grpB55oI0VCjgx1hs-Tyw0pNU6TwURrud-S2MJcZCxg7rKbQHuyOgbNrlxX64ww-b3_-xWQWb87BGMkCOTbkQONReXr6OTjzCKMu0hyygYSKvGvJXjBLomi4IPQ',
      alt: 'Close up of a decorated cake',
      caption: 'Anniversary'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU3dZFVjMfS72wFzWY2UEBNUPgu0rGTy8ge-DhPlAIc0kNWjyGyk543qKJTTlgoD77THa5Qhhr-I7AaaL2ru8ABTrge5v9fbc-bA6P79DtMwIYe2bao1DVkFsmzEMBKIv5oxsvaaBK5YeZxclTLwRbe0r4qch8XcF-VxuQUyngg2NHhed3zavyxP5whmmbZSvaW1M_B12GIMfPwz5r5Cr26Z5zzsBKKjTKh0FbXmllLPzXesQU2rV5eyGCu3yzKSW4bcZPmu_Stw',
      alt: 'Indian sweets arranged on a plate',
      caption: 'Festival Celebration'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJs7l4YAH4Z3wBZNHaaX7vQMZjC9JsZItUJuWOkJZt8Oo1vbN9w-bFaJjDHio0SCLQ1iW8ql7wxQTZk84U2QQb8BPYaC6SPJQcBcvGQ0-nvnbsyCpdssRJ3yV5umzxSmZY2M9bCLatAOhRFZ1natDObCCagRnz2z6MhB8R3Muwu5ZaJ5QxLh1pIRF2aMlFEvmCKJwPmTSGZR5h3xNpxbQe0XOfU-6FnQeeT-umxn4B2duC-i-lfMUFp4K-_m80UgB9nS2MLXjQow',
      alt: 'A variety of colorful ice creams',
      caption: 'Birthday Party'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8wRygcfzgrddoO_ErIAfz7lswnPZiEDaHCfEYOTpPgyb_9H0p0KK5VYAxf_0Yzqo0Fnpteb5fDZ84CU3RrXEQtIpjB2H75TFO4s0usRvpy2oFO4LDIHTNYhLq7Hor0Ugt1kbPXiWzray1h3J6PrF90N8bdGASzJ_oXs2tDqH1A_bOogxBHSW41Vq-leBaOzhoB5p2KVF8kvPythfXdjojVU7YXXAL0MXe_PM3ekLnBd_Ur9KlR-gj1Ib74w-AkJXuT3eAKxo5CQ',
      alt: 'People toasting with cocktails',
      caption: 'Corporate Mixer'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjozcbmb1pk-xwFh4Uk1RZ0d3U51CSB-jEth8eMC1_CT4ruOEpRqEIIatvhrDsPeShIxbThjrcvq3WABH01fxW9skp7ng2sHuhFtT0Xx3u2VjO9lJapLix_JbgAenB2ZhD2jVuTqQwzFr2DyRj21wOKp4I0o_-S-SJNAqmoHkivJEagwvOgI8nFpd7L7N_A4NBGgwlWAk_3IURO1U7qwg62G2qGGw9jmVSBoSbtRfq1nf6MLEiCyHn6jSFGijnvS6ODu1aIhimAA',
      alt: 'A pink bubbly drink with a flower',
      caption: 'Wedding Reception'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_i_Z0km4bxk1RjOtQchQcrOoHD65fqquKVd5QekvEgj-SRabzpNshrOyvPeUExl7JUHsw8Ypkqr0rD3LfnLR5pH8jC-HmB0Lj6yCroyVvokZg9IpkjilZ0bK1Dm64gOX-jZ5D_7m0CfjHiEJzJIE_i_au44xx40yXDAsdQLCTNzM1bWOUvZRUxXB88c70L6YVDe8HpyRdfEmIiapslesmFge3lngO70HIAk3JF_rZc4kWLqVYVyNg9ua3k2Ue57iCUNcSNVL3w',
      alt: 'A tray of assorted cupcakes',
      caption: 'Corporate Event'
    },
  ]

  const testimonials = [
    {
      text: '"Frosted Fizz was the highlight of our corporate event! The drinks were innovative and absolutely delicious. The team was professional and the setup looked fantastic. Highly recommended!"',
      name: 'Priya S.',
      role: 'Corporate Event',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaneBOho3YH1mDybRyPZm0VPj1m3lvvAtLw6tbAWa9TGVPJcB7WWCOHgM2N9mUdPbsT-swgDCupjXTuxfpKLGOJBUZMkGMQ_Fwj6xTgu4qEy1T4tEAyK8Drxv-Sq4DNMaSgS6guPKi9as57sJb3WGasZpKuAI7XMv9Emror9iERsRIiD6Y0znK5EtG4zCQLTj4YcvVh95M-3SYdTCUU-4an1tA0eZGYwRWgziDJnNlT1pe4M9dZ0c0_8nuS8YBujYMogBGZLHNfA'
    },
    {
      text: '"The dessert bar at my daughter\'s birthday was a massive hit with both kids and adults. Everything was so beautiful and tasted even better. So glad we chose them!"',
      name: 'Rohan Mehta',
      role: 'Birthday Party',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2BeGH4-W8EDBggPqshdCrU26XepJrmnRz7fe2RCmhudsT14UgNSEsJU1OEUV6l3s_gAEVuclfQ3npzLZkumTxm9xAmIfG8wOKPmHvjzrXT7EGKaz10GCJ6qjoTi4kdmjrO7xZW7u2ElraC8nLm3wTlg-tK0Q3mG6K1cXSCdMTki59VNKT-KXKMTSJhZJOKhBcGUuskfrvBxGbGsy53TON6nVWbqg-r7dzRcgLdui_dPMRhHE4hIP-y4HZ0lhk2LgGaaGUIBQrfg'
    },
    {
      text: '"Absolutely stunning and tasty additions to our wedding. Our guests couldn\'t stop talking about the unique flavors and the gorgeous setup. It was perfect!"',
      name: 'Anjali & Vikram',
      role: 'Wedding',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC2nZJ-M1tv1-bdd3Jz6e_gVHRJxW5hEKTxednE9OZb3i1GpPLp4u2josr2jUpexcd8DB1dDwIIOeJxGbr6q7wOjg-2tSjPAAc0k7_SVAQXP6yu-a97h9X-WaUolAT3LyN8s3jO1hhBrrCqlmc-VG2hOQ7iQVkUVoiPvenOtbUTwurPzEcSbmPVlVOtHHiwFLpnOGsBpKte_nkii0yI0tGdFhpKV7vNJ8dOupNbcjisatrVhdBbcdSh-Gw8o6bQObrEPx1Qi5EdA'
    },
    {
      text: '"We hired Frosted Fizz for our annual festival, and they were a crowd favourite. The mocktails were refreshing and the desserts were a delight. Will definitely have them back next year."',
      name: 'Sameer Khan',
      role: 'Music Festival',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBReAxGGkR6s6tqMTXzQKzBzV5aW5W2L_9r3gEiDQQdWrKjceynxbWLs5y4k-kqjL7ZQb6FuAAgVfebCRBarYRjPJB_HnMBdU_fRIH_zfkq582i7j6kPXalrimUP_SC8dHp2tD0WCN-IYhWu0EvgC8FHJEngbC5jeWCGOrsOppejElxttmvpZUGNN_3ucBg8Ug3SLQERq1qOEtALSI9tzdaESXoePgDZACiumJGnwGVvjAGOyYxMdO7oAEBhhUckOxOuIx9gFgwRQ'
    },
  ]

  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="relative bg-background-light dark:bg-navy/10 py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-navy dark:text-white tracking-tighter leading-tight">
            Sweet Moments
          </h1>
          <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-2xl mt-4 mx-auto">
            A glimpse into the fun and flavor we bring to every event. See our desserts and happy customers in action!
          </p>
        </div>

        {/* Unique Shapes Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Large Ellipse Shape - Left */}
            <div className="col-span-1 md:col-span-2 lg:row-span-2">
              <div className="relative w-full h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-secondary/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-secondary/40 transition-shadow duration-300">
                <img 
                  alt="Milkshakes at an event" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'ellipse(80% 60% at 50% 50%)' }}
                  src={galleryImages[0].src}
                />
              </div>
            </div>

            {/* Polygon Shape */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="relative w-full aspect-[4/3] bg-primary/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
                <img 
                  alt="Soft serve ice cream" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)' }}
                  src={galleryImages[1].src}
                />
              </div>
            </div>

            {/* Large Circle - Center with Play Button */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="relative w-full h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-accent/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-accent/40 transition-shadow duration-300 flex items-center justify-center">
                <img 
                  alt="Catering setup" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'circle(50% at 50% 50%)' }}
                  src={galleryImages[2].src}
                />
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-navy backdrop-blur-sm hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trapezoid Shape */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="relative w-full aspect-[4/3] bg-secondary/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-secondary/40 transition-shadow duration-300">
                <img 
                  alt="Falooda dessert" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}
                  src={galleryImages[3].src}
                />
              </div>
            </div>

            {/* Ellipse Shape */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="relative w-full aspect-square bg-primary/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
                <img 
                  alt="Waffle dessert" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'ellipse(60% 80% at 50% 50%)' }}
                  src={galleryImages[4].src}
                />
              </div>
            </div>

            {/* Polygon Wide */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <div className="relative w-full aspect-[16/9] bg-accent/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-accent/40 transition-shadow duration-300">
                <img 
                  alt="Group enjoying desserts" 
                  className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-150 transition-transform duration-500" 
                  style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)' }}
                  src={galleryImages[5].src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-background-light dark:bg-background-dark py-16 md:py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white mb-12">
            Happy Clients, Sweet Words
          </h2>
          <div className="relative">
            <div className="flex flex-col items-center p-8 md:p-12 rounded-3xl bg-white/50 dark:bg-navy/30 backdrop-blur-sm border border-primary/20 dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">format_quote</span>
              <p className="font-body text-xl md:text-2xl font-semibold text-navy/80 dark:text-gray-200 leading-relaxed">
                "Frosted Fizz was the absolute highlight of our wedding! The desserts were incredible and the team was so professional. Our guests are still raving about the milkshakes!"
              </p>
              <p className="mt-6 font-display font-bold text-lg text-navy dark:text-white" style={{ textShadow: '2px 2px 0px #66D6FF, -2px -2px 0px #FF9ECC' }}>
                - Priya & Rohan S.
              </p>
            </div>
            <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2">
              <button className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-navy rounded-full flex items-center justify-center text-navy dark:text-white shadow-lg hover:bg-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2">
              <button className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-navy rounded-full flex items-center justify-center text-navy dark:text-white shadow-lg hover:bg-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 dark:bg-navy/50 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 dark:bg-navy/50 rounded-full"></span>
          </div>
        </div>
      </section>
    </main>
  )
}

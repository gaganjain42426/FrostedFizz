export default function Gallery() {
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

  const splitIntoColumns = (arr, cols) => {
    const result = Array.from({ length: cols }, () => [])
    arr.forEach((item, i) => result[i % cols].push(item))
    return result
  }

  const columns = splitIntoColumns(galleryImages, 4)

  return (
    <main className="flex flex-1 justify-center py-5 sm:py-10">
      <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1 px-4">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex w-full flex-col gap-3 text-center">
            <p className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">Our Sweet Moments</p>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-2xl mx-auto">
              A showcase of our dessert and beverage catering at real events. See how we add a touch of magic to every occasion.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((image, imgIndex) => (
                <div key={imgIndex} className="relative group">
                  <img alt={image.alt} className="h-auto max-w-full rounded-lg" src={image.src} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                    <p className="text-white text-base font-bold leading-tight">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-16 sm:text-3xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-4 w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex snap-center h-full flex-1 flex-col gap-4 rounded-xl bg-primary/10 dark:bg-primary/20 p-6 min-w-full sm:min-w-[45%] lg:min-w-[30%]"
                >
                  <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-primary/20">
                    <img
                      alt={`Portrait of ${testimonial.name}`}
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="text-text-light dark:text-text-dark text-base font-bold leading-normal">
                        {testimonial.name}
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Menu() {
  const menuItems = [
    {
      name: 'Soft Serve Ice Cream',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJgHqlWQkg4PrQz-p9HmJ8vQkXgaexNTNfEdgl3KbkCmOlS2eHWHq0BydB0A2dYTVUkbT49NCrPxjxZFhMhvWFzT_P-Fq0DKdB-ME7L87ai_3aJEuMmWaU9kEO6_jR0nehEHs7mP5HECykVfFZCpzypA_gYnvalXOD7YH7tvAy1WcnigQQPTncGLEspyLxagGjQqcvPOJLoJYr6JHaZJ7N0bk_xg0-CpgLMBmjuGFZ8gRBPVgDkSiLPD94SsocYu8utG0WG5nQsA'
    },
    {
      name: 'Milkshakes & Thick Shakes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAihxz3gUosKEM9xPD0jo8_zWsMqU2MQCw_hQasMD7tkDA_uZfb-Zm__53-ZyXrcsQB0rAQrvDYW_Sn2f5xOZrLyjHQQ9JnE3aAGhUsufJw-FwxIxaj08LN8HgqXvuce5Qv-AsCrFP7LAVS4jy9p8M7y7j7-78cLz20Z97yoqn0dJvyTCuWk_nKP5VV_6ZmAb13S5IqH1SVI_beEwDf00fU8NHrdTTLUXe69P6q_xazbqJzow7ogyZG2wyxM1hSbalxTQu0m0DgWw'
    },
    {
      name: 'Flavored Sodas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0JTo48FIIZRh0xisqLEFgqc6CplDQXf9_LqFpBB-4wCt0sU6hsMIrrGCCCsyD3Ef1LAkgg3CZB04i42QrALy0d_MK3szceL8cbapYyCG1S7uKhyc1E8nCConHz96bKjbpfo2KwnRjIkfmmNvBodJ6cj8XizeYTr-hk0svTMenhBq146bxfjUM0O4KFowNhnBn-zXYYsbKBB7ECx2ua0lcOM14LwZplyFXmNfWsDI92bF7AgU4YTuk89mRgAB-35gcVeRWrXULFQ'
    },
    {
      name: 'Cold Coffee',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLY_tSKk0OiOtU-SGCqXg5ta3wmQDUJAXImvzjASmp9O-QPkBNayoWdqVVCmIcX7r7EWRmGUw7cAuK0UTB50W_vII8bDIgkJuzsNJ1eFQ2dgm-gF46wqQKCdwCY_b7PnNwGs_LPdt3kQ-FHNVxVMCJA6fyB1Vg6IGS-JON-bvKURk187Sc0MbR8gjuJv6a3nyIOWEDyDjP1KLk-RbcNPXDDX1hE1TZkujlDHjoJj4SUOWwfkQsd30zFwty9dJAzaTy47FR5rrZEg'
    },
    {
      name: 'Ice Gola',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwF7lsLYIPPZ3ThWBKa5dkhuBW_HxBFq6MhzoFAMN6WDlVuXnRZllov0t6jVX2JVogSUClqpziuvLfcNnAtHQMML48hg7FvBv467NBVVwdqG31ENABIlzBHKNuUskdPnZx9RRVDNVrn-0h5wfHLmYux2IG__GQQOYpdwRZl5XUAdR9_K9zb58GGPyEyB-7sTWFxDc6FB9wvZbjTKVIB-oZtlREXKAGh-AHOgT7U3yQcwfBTLa5oHU_JNIb2Bv6VyYAEaMMOgohgw'
    },
    {
      name: 'Sugarcane Juice',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNKh24zG64-P1uKbqzRg8q_CpibYHkp7Me-NCbtfbWVO1VcrlLSeMGuoI9_z4wuJ9V_O-lnlGXnavHYiKenVd_ysaSnP-Sye-R49ykHEaW1REmxEsHOuckBMkY30cjlSYn-oqhEE3PrQO-qQ1KXqs7a0y3d-3GiJpYGBwGuKlRxT4_IqpJicv__QG6J85AlUmZ1WQKKvUNec_IgVLiW7eTU270MXDiKOWqPFlWOocujtHevqShGIonkgOJLdNBcSRf9dnb4e4fRA'
    },
    {
      name: 'Waffles',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCezsgY-yiuEo457EEgF022yeu8MF1prHF71yN1BYAfl_eRDfodI3AdUPqYqPZ3wVN8pG5su3EEyNzLVdWeZ8sXJGKnGbc9pjU_mUtJ3mlfJDEtLWLjZ9McD8fWMlfIOgJrR6QrV7y5819EnM0hhCN9pRP8799KlPmarm-osJrRqiQkt4x9Nopfxz_eIu-AP3oL3pBXRV0QZywRZsmPA_h0CA9oOrWdaxV3nWSRwr9n9Wn6vH9pUp-okxWVCsjyFItb1iDsBi1tA'
    },
    {
      name: 'Brownies with Ice Cream',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVxZNBz234_XBdul2MWtcX8CmiUzh0tRj9xLrBUcJ9w7KmgRbrk6F6RiQH7bx6g2j70X5F0W4xCJWgsj3Rl7WlehsLMPHCHTO-WffHhK2n-_LrATHACL0gwcUQlS6aUv4lwh1gnm06OkUHBJKErH5bnI5PFFlhHdMqIcm77Pri0JXtiyOxxE8VlfNjQHuX3Fk4Cx99cr6gqxmLviY3wyIW2CRAOhURQdwGLNcWo-HPr3DV38emJOT9lveXxooDyKOQiu-agb9hCQ'
    },
  ]

  return (
    <main className="flex-1 px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="text-center mb-6">
          <h1 className="text-navy dark:text-white text-4xl md:text-5xl font-extrabold hero-title-shadow">
            Explore Our Menu
          </h1>
        </div>
        
        {/* Body Text */}
        <p className="text-navy/70 dark:text-gray-300 text-base md:text-lg font-normal leading-normal text-center mb-12 md:mb-16">
          Available at events and on-demand catering setups.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-cover bg-center flex flex-col justify-end rounded-3xl aspect-square overflow-hidden shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 60%), url("${item.image}")`
              }}
            >
              <div className="p-4 md:p-6">
                <p className="text-white text-base md:text-lg font-bold leading-tight">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

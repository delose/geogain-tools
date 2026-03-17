import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const resources = [
  {
    category: 'Investing & Brokerage',
    items: [
      {
        name: 'Tiger Brokers',
        description: 'Commission-free trading for stocks, ETFs, and options. Great for SG and US markets.',
        url: 'https://tigr.link/s/80EQVOZ',
        badge: 'Free stock on signup',
        countries: 'SG, US',
      },
      {
        name: 'Syfe',
        description: 'Automated investing with portfolios built for your goals. Low fees, no minimum.',
        url: 'https://www.syfe.com/invite/wealth/SRPS5W9MQ',
        badge: 'Bonus credits',
        countries: 'SG',
      },
      {
        name: 'Endowus',
        description: 'Invest your CPF, SRS, and cash with evidence-based portfolios. Fee rebates included.',
        url: 'https://endowus.com/invite?code=KNAUT',
        badge: 'Fee rebates',
        countries: 'SG',
      },
    ],
  },
  {
    category: 'Money Transfers',
    items: [
      {
        name: 'Wise',
        description: 'Send money abroad at the real exchange rate. Up to 6x cheaper than banks.',
        url: 'https://wise.com/invite/dic/eugenesergiocastrod',
        badge: 'Free first transfer',
        countries: 'Global',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <section className="py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Tools & Resources I Use
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            These are the platforms I personally use and recommend. Some links may earn me a small commission at no extra cost to you.
          </p>
        </section>

        {/* Resource Cards */}
        <section className="pb-20 space-y-12">
          {resources.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold text-brand-accent mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-accent rounded" />
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-accent/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition">
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className="text-xs font-medium bg-brand-accent/15 text-brand-accent px-2 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <span className="text-xs text-white/30">
                          Available in: {item.countries}
                        </span>
                      </div>
                      <span className="text-brand-accent text-sm font-medium whitespace-nowrap mt-1">
                        Get Started →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Disclosure */}
        <section className="pb-12 text-center">
          <p className="text-xs text-white/25 max-w-lg mx-auto">
            Disclosure: Some links on this page are affiliate links. I may earn a small commission if you sign up through them. I only recommend products I personally use.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

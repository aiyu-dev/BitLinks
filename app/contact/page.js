import Link from 'next/link'

const contactMethods = [
  {
    title: 'Email support',
    value: 'hello@bitlinks.app',
    description: 'Share feedback, report an issue, or ask for help.',
    href: 'mailto:hello@bitlinks.app',
  },
  {
    title: 'Business hours',
    value: 'Mon - Fri, 9:00 AM - 6:00 PM',
    description: 'We reply fastest during regular working hours.',
  },
  {
    title: 'Response time',
    value: 'Usually within 24 hours',
    description: 'Simple support with quick follow-up from our team.',
  },
  {
    title: 'Try BitLinks',
    value: 'Create your first short link',
    description: 'Jump in and start sharing cleaner URLs right away.',
    href: '/shorten',
  },
]

const supportTopics = [
  'Broken or expired short links',
  'Feature requests and product feedback',
  'General questions about BitLinks',
]

const Contact = () => {
  return (
    <main className='px-4 py-10'>
      <section className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='rounded-2xl bg-purple-100 p-8 shadow-sm'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-purple-700'>
            Contact us
          </p>
          <h1 className='mt-2 text-4xl font-bold text-gray-900'>We’re here to help.</h1>
          <p className='mt-4 text-lg text-gray-700'>
            Whether you have a question, found an issue, or want to share feedback,
            the BitLinks team would love to hear from you.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {contactMethods.map((item) => (
              <div key={item.title} className='rounded-xl bg-white p-4 shadow-sm'>
                <p className='text-sm font-semibold text-purple-700'>{item.title}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className='mt-1 block text-lg font-bold text-gray-900 hover:text-purple-700'
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className='mt-1 text-lg font-bold text-gray-900'>{item.value}</p>
                )}
                <p className='mt-2 text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>

          <div className='mt-8 rounded-xl bg-purple-700 p-5 text-white'>
            <h2 className='text-xl font-bold'>What can we help with?</h2>
            <ul className='mt-3 space-y-2 text-sm sm:text-base'>
              {supportTopics.map((topic) => (
                <li key={topic} className='flex items-start gap-2'>
                  <span className='mt-0.5'>•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='rounded-2xl bg-white p-8 shadow-sm'>
          <h2 className='text-2xl font-bold text-gray-900'>Send a quick message</h2>
          <p className='mt-2 text-gray-600'>
            The fastest way to reach us is by email. Include your short link and a
            brief note so we can help quicker.
          </p>

          <div className='mt-6 space-y-4'>
            <div>
              <label htmlFor='name' className='mb-2 block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='Your name'
                className='w-full rounded-lg border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-500'
              />
            </div>

            <div>
              <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='you@example.com'
                className='w-full rounded-lg border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-500'
              />
            </div>

            <div>
              <label htmlFor='message' className='mb-2 block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                rows={6}
                placeholder='Tell us how we can help...'
                className='w-full rounded-lg border border-purple-200 px-4 py-3 outline-none transition focus:border-purple-500'
              />
            </div>
          </div>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='mailto:hello@bitlinks.app?subject=BitLinks%20Support'
              className='rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow hover:bg-purple-700'
            >
              Email Support
            </a>
            <Link
              href='/shorten'
              className='rounded-lg border border-purple-300 px-4 py-2 font-semibold text-purple-700 hover:bg-purple-50'
            >
              Shorten a URL
            </Link>
          </div>

          <p className='mt-4 text-sm text-gray-500'>
            Prefer direct contact? Reach out at{' '}
            <a className='font-semibold text-purple-700' href='mailto:hello@bitlinks.app'>
              hello@bitlinks.app
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

export default Contact

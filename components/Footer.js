import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-purple-700 px-4 py-5 text-white'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left'>
        <div>
          <h2 className='text-lg font-bold'>BitLinks</h2>
          <p className='text-sm text-purple-100'>Simple and reliable URL shortening.</p>
        </div>

        <div className='flex gap-4 text-sm font-medium'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <p className='text-sm text-purple-100'>© {year} BitLinks. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
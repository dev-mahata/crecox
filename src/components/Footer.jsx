
import React from 'react'
import logo from "../assets/images/logo.png"
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className='py-10 sm:py-12 md:py-14 lg:py-16'>
      <div className='footer-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 pb-4'>
        <div className='main-footer grid gap-10 md:grid-cols-2 lg:grid-cols-[max-content_max-content_max-content_max-content] justify-between'>
          <div className='max-w-[235px]'>
            <a href=""><img src={logo} alt="" width={96} /></a>
            <p className='mt-4 text-[14px] text-[#6A7282] leading-6'>Building the future of music marketing through community and creativity.</p>
          </div>

          <nav>
            <h2 className='font-semiboldbold'>Platform</h2>
            <ul className='text-[14px] text-[#99A1AF] '>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/about">About</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/artists">For Artists</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/creators">For Creators</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/faq">FAQ</a></li>
            </ul>
          </nav>

          <nav>
            <h2 className='font-semiboldbold'>Legal</h2>
            <ul className='text-[14px] text-[#99A1AF]'>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/privacy">Privacy Policy</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/terms">Terms of Service</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/cookies">Cookie Policy</a></li>
              <li className='mt-4 hover:text-[#C25CF5]'><a href="crecox/guidelines">Guidelines</a></li>
            </ul>
          </nav>

          <div >
            <h2>Connect</h2>
            <ul className='my-4 flex flex-wrap gap-6'>
              <li><a href="#" aria-label="WhatsApp" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaWhatsapp /></a></li>
              <li><a href="#" aria-label="Facebook" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaFacebook /></a></li>
              <li><a href="#" aria-label="Instagram" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaInstagram /></a></li>
              <li><a href="#" aria-label="YouTube" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaYoutube /></a></li>
              <li><a href="#" aria-label="X / Twitter" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaXTwitter /></a></li>
              <li><a href="#" aria-label="LinkedIn" className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[#99A1AF] shadow-[0_0_0_rgba(194,92,245,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C25CF5]/40 hover:text-white hover:shadow-[0_0_18px_rgba(194,92,245,0.18)]'><FaLinkedin /></a></li>
            </ul>
            <a className='text-[14px] text-[#6A7282] leading-5 flex flex-row items-center gap-2 w-fit' href="mailto:debtronyx@gmail.com"><Mail width={16}/> info@crecox.com</a>
          </div>
        </div>

        <div className='text-[12px] leading-5 text-[#6A7282] flex flex-col gap-2 sm:flex-row sm:justify-between justify-between'>
          <p>&copy; 2026 CrecoX. All rights reserved.</p>
          <p>Building the future of music marketing</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

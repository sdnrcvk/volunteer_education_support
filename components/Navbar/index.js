import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link href="/courses">
            Özel Dersler
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Bize Ulaşın
          </Link>
        </li>
        <li>
          <Link href="/login">
            Giriş
          </Link>
        </li>
        <li>
          <Link href="/register">
            Kayıt
          </Link>
        </li>
      </ul>
    </nav>
  )
}

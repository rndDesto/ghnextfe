import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div>
        <Link href={'/category'}>Category</Link>
        <Link href={'/about'}>About</Link>
    </div>
  )
}

export default Navigation
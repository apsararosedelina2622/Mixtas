import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

const Scroll_To_Top = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
  
}

export default Scroll_To_Top
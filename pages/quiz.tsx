import React from 'react'
import { useRouter } from 'next/router'

const Quiz: React.FC = () => {
  const router = useRouter()
  const { name } = router.query

  return <div style={{ color: '#000' }}>Página do Quiz - { name }</div>
}

export default Quiz

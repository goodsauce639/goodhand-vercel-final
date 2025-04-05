import { useState } from 'react'
import { IDKitWidget, ISuccessResult } from '@worldcoin/idkit'

export default function Home() {
  const [verified, setVerified] = useState(false)
  const [proof, setProof] = useState<ISuccessResult | null>(null)

  const handleSuccess = (result: ISuccessResult) => {
    setVerified(true)
    setProof(result)
  }

  return (
    <div>
      <h1>GOODHAND</h1>
      <p>A World ID-powered mini app enabling anyone to create and support real-world impact proposals.</p>

      <IDKitWidget
        app_id="app_fe5e53a5e084944c0cfe985bac9b30fc"
        action="goodhand-proposal"
        onSuccess={handleSuccess}
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>

      {verified && (
        <div style={{ marginTop: 30 }}>
          <h2>Proposal: Mary's School Lunch</h2>
          <p>Mary is a 10-year-old student in Taipei who can't afford school lunch this semester. You can help with 1 WLD.</p>
          <p>Status: ✅ Verified Human</p>
          <p>Thank you for supporting this mission 💖</p>
        </div>
      )}
    </div>
  )
}

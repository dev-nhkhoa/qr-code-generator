import { useState } from 'react'
import QRCode from 'react-qr-code'
import Barcode from 'react-barcode'

function App() {
  const [data, setData] = useState<string>('')

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center gap-2">
        <p>Nhập dữ liệu:</p>
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          className="border border-solid border-black p-2"
        />
      </div>
      <div style={{ background: 'white', padding: '16px' }}>
        <p>QRCODE:</p>
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={data}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div style={{ background: 'white', padding: '16px' }}>
        <p>BARCODE:</p>
        {!data && <p>Chưa có dữ liệu!</p>}
        {data && (
          <>
            <Barcode value={data} height={100} format="CODE128B" />
          </>
        )}
      </div>
    </main>
  )
}

export default App

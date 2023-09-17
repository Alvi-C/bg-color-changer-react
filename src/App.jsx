import { useState } from "react"


function App() {

  const [color, setColor] = useState('#1e272e')
  return (
		<>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <h3 className="text-center text-white text-7xl font-bold pt-80">Change the background color</h3>
				<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
					<div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#c0392b' }}
							onClick={() => setColor('#c0392b')}
						>
							Red
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#009432' }}
							onClick={() => setColor('#009432')}
						>
							Green
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#3498db' }}
							onClick={() => setColor('#3498db')}
						>
							Blue
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#f1c40f' }}
							onClick={() => setColor('#f1c40f')}
						>
							Yellow
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#bdc3c7' }}
							onClick={() => setColor('#bdc3c7')}
						>
							Silver
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#9980FA' }}
							onClick={() => setColor('#9980FA')}
						>
							Purple
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#FDA7DF' }}
							onClick={() => setColor('#FDA7DF')}
						>
							Pink
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#f39c12' }}
							onClick={() => setColor('#f39c12')}
						>
							Orange
						</button>
						<button
							className='outline-none px-4 py-1 text-white rounded-2xl text-sm'
							style={{ backgroundColor: '#1e272e' }}
							onClick={() => setColor('#1e272e')}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App

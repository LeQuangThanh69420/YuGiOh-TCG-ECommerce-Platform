import BUBBLES from '../../constants/bubbles'

import './../../styles/Bubbles.css'

export default function Bubbles() {
  return (
    <div className="bubbles-screen">
        {BUBBLES.map((bubble, index) => 
            <div className='bubble' style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                animation: `bubbling ${bubble.duration}s linear infinite`
            }} key={index}>
            </div>
        )}
    </div>
  )
}

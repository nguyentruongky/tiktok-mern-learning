import './App.css'
import Video from './Video.js'

function App() {
    return (
        <div className="app">
            <div className="app__videos">
                <Video
                    url="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
                    channel="hello"
                    description="This is insance"
                    song="Happy"
                    likes={19}
                    messages={253}
                    shares={298}
                />

                <Video
                    url="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
                    channel="thienhan"
                    description="Beautiful"
                    song="Lovely"
                    likes={1971}
                    messages={1253}
                    shares={2498}
                />
            </div>
        </div>
    )
}

export default App

import './App.css';
import { Canvas } from "react-simple-canvas";

function App() {
  return (
    <div className="App">
      <Canvas
        onUpdate={(ctx, canvas) => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
          ctx.moveTo(110, 75);
          ctx.arc(75, 75, 35, 0, Math.PI, false); 
          ctx.moveTo(65, 65);
          ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
          ctx.moveTo(95, 65);
          ctx.arc(90, 65, 5, 0, Math.PI * 2, true); 
          ctx.stroke();
        }}
      />
    </div>
  );
}

export default App;

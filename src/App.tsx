import { useState } from "react";
import GameScreen from "./components/screens/game/game-screen";
import SplashScreen from "./components/screens/splash/splash-screen";

export default function App() {
  const [state, setState] = useState("progress")

  return state === "idle" 
    ? <SplashScreen setState={setState} /> 
    : <GameScreen state={state} setState={setState} />;
}

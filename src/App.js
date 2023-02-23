import Navbar from "./components/Navbar";
import AppBackground from "./components/Background/AppBackground";
import AppNavigator from "./AppNavigator";

export default function App() {
  return (
    <div className="isolate bg-white">
      <AppBackground />
      <Navbar />
      <AppNavigator />
    </div>
  );
}

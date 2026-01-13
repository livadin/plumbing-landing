// src/App.tsx
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-[#001529] font-sans overflow-hidden text-white">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
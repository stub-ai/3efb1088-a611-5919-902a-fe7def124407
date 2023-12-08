import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <Login />
    </div>
  );
}
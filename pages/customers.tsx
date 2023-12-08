import Header from '../components/Header';

export default function Customers() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      {/* List customers here */}
    </div>
  );
}
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-black text-white">
      <h2 className="text-4xl font-black text-blue-500 mb-4">410 - الصفحة غير موجودة</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        عذراً، هذه الصفحة تم حذفها نهائياً أو لم تعد متوفرة في الموقع الجديد.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
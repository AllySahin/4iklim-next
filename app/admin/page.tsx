'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminPage() {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      window.location.href = '/admin/dashboard';
    } else if (status === 'unauthenticated') {
      window.location.href = '/admin/login';
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <i className="fas fa-spinner fa-spin text-3xl text-gray-400 mb-2"></i>
        <p className="text-gray-500">Yönlendiriliyor...</p>
      </div>
    </div>
  );
}


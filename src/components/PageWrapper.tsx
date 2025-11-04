import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {children}
    </div>
  );
}

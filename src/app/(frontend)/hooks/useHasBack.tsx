'use client';
import { useEffect, useState } from 'react';

export function useHasBack() {
  const [hasBack, setHasBack] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Usually > 1 means there's something to go back to
    console.log(window.history)
    setHasBack(window.history.length > 1);
  }, []);

  return hasBack;
}

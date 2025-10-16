'use client';

import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({
    message: '',
    type: 'info',
    isVisible: false
  });

  const showToast = useCallback((message, type = 'info') => {
    setToast({
      message,
      type,
      isVisible: true
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({
      ...prev,
      isVisible: false
    }));
  }, []);

  return {
    toast,
    showToast,
    hideToast
  };
};
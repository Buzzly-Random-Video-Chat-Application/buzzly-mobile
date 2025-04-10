export const validateEmail = (value: string): string[] => {
  const errors: string[] = [];
  if (value === '') {
    errors.push('Email is required');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value && !emailRegex.test(value)) {
    errors.push('Please enter a valid email');
  }
  return errors;
};

export const validatePassword = (value: string): string[] => {
  const errors: string[] = [];
  if (value === '') {
    errors.push('Password is required');
  }
  if (value && value.length < 6) {
    errors.push('Password must be at least 6 characters');
  }
  return errors;
};

export const validateUsername = (value: string): string[] => {
  const errors: string[] = [];
  if (value === '') {
    errors.push('Username is required');
  }
  if (value && value.length < 3) {
    errors.push('Username must be at least 3 characters');
  }
  return errors;
};

export const validateConfirmPassword = (
  value: string,
  originalPassword: string,
): string[] => {
  const errors: string[] = [];
  if (value === '') {
    errors.push('Confirm Password is required');
  }
  if (value && value !== originalPassword) {
    errors.push('Passwords do not match');
  }
  return errors;
};

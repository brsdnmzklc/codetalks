export default errorMessage => {
  switch (errorMessage) {
    case 'auth/invalid-email':
      return 'Geçersiz Email Adresi';
    case 'auth/invalid-password':
      return 'Geçersiz Şifre';
    case 'auth/email-already-exists':
      return 'Email  zaten kayıtlı';
    case 'auth/email-already-in-use':
      return 'Email  zaten kayıtlı';
    case 'auth/wrong-password':
      return 'Şifre yanlış';
    default:
      return errorMessage;
  }
};

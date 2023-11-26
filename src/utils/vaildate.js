export const checkValidData = (email, password) => {
  const isEmailValid  = /^\S+@\S+\.\S+$/.test(email);
  const isPasswordValid  = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(password);

  if(!isEmailValid) return 'Email Id is not valid';
  if(!isPasswordValid) return 'Password is not valid';

  return null
}
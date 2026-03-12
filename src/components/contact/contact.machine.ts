export type FormState = 'idle' | 'loading' | 'success' | 'error'

export type FormAction = 
  | { type: 'SUBMIT' } 
  | { type: 'SUCCESS' } 
  | { type: 'ERROR' } 
  | { type: 'RESET' };

export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SUBMIT':
      return state === 'idle' || state === 'error' ? 'loading' : state;
    case 'SUCCESS':
      return state === 'loading' ? 'success' : state;
    case 'ERROR':
      return state === 'loading' ? 'error' : state;
    case 'RESET':
      return 'idle';
    default:
      return state;
  }
}

export const buttonConfig = {
  idle: { text: 'Send Message', className: 'bg-blue-600 hover:bg-blue-700 text-white' },
  loading: { text: 'Sending...', className: 'bg-blue-600/70 text-white cursor-not-allowed' },
  success: { text: 'Message Sent!', className: 'bg-green-600 hover:bg-green-700 text-white' },
  error: { text: 'Error. Try Again.', className: 'bg-red-600 hover:bg-red-700 text-white' },
}
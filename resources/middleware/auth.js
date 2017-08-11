// eslint-disable-next-line no-unused-vars
export default function({ store, redirect, error }) {
  if (!store.state.authUser) {
    // If user not connected, redirect to /
    // return redirect('/auth/login');
    error({
      message: 'You are not authorized',
      statusCode: 403
    });
  }
}

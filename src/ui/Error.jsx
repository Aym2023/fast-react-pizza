import { useRouteError } from 'react-router-dom';
import LinkButton from './linkButton';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton t0='-1'>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

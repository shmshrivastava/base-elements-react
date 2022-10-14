import React from 'react';

import { Link } from 'base-elements-react';
import 'base-elements-react/dist/index.css';

const MyAnchor = (props: any) => {
  return (
    <a className='hello' {...props}>
      {props.children}
    </a>
  );
};

function Example() {
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <Link
      href='https://www.example.com'
      component={MyAnchor}
      variation='filled'
      target='_blank'
    >
      Go to example
    </Link>
  );
}

export default Example;

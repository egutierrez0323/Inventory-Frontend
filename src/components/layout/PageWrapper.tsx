import { ReactNode, useEffect } from "react";

type Props = {
  state?: string,
  children: ReactNode;
};

const PageWrapper = (props: Props) => {
//   const dispatch = useDispatch();

  useEffect(() => {
    if (props.state) {
    }
  })
  console.log(props.state);

  return (
    <>{props.children}</>
  );
};

export default PageWrapper;
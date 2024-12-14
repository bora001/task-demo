import { useUserStore } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type WithAuthCheckProps<T> = T extends React.ComponentType<infer P> ? P : never;

const withAuthCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuthCheck: React.FC<
    WithAuthCheckProps<React.ComponentType<P>>
  > = (props) => {
    const router = useRouter();
    const { userName, userRole } = useUserStore((state) => state);

    useEffect(() => {
      if (!userName || !userRole) {
        router.replace("/");
      }
    }, [router, userName, userRole]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthCheck;
};

export default withAuthCheck;

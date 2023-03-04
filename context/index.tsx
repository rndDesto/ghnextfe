import MantineContext from './MantineContext'

type ContextProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ContextProps) => {
  return (
      <MantineContext>{children}</MantineContext>
  );
};

export default Providers;

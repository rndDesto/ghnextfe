import { MantineProvider } from "@mantine/core";
type ContextProps = {
    children: React.ReactNode;
  };
const MantineContext = ({ children }:ContextProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default MantineContext;

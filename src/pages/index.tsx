import { Button, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "../client/trpc";

export default function Home() {
  const { data: message } = useQuery({
    queryKey: ["message"],
    queryFn: () => trpc.message.query(),
  });

  const { data: now } = useQuery({
    queryKey: ["now"],
    queryFn: () => trpc.now.query(),
  });

  if (!message || !now) {
    return null;
  }

  return (
    <>
      <Button>Hello</Button>
      <Text>{message}</Text>
      <Text>{now.toLocaleString()}</Text>
    </>
  );
}

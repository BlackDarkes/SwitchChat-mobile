import { Container } from "@/shared/ui";
import { View } from "react-native";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View>
      <Container className="flex items-center h-screen">{children}</Container>
    </View>
  );
}

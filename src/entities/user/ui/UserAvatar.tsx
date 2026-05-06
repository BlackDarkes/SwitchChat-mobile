import { cn } from "@/shared/lib/utils";
import { Text } from "@/shared/ui";
import { memo } from "react";
import { Image, TouchableOpacity, View } from "react-native";

interface IUserAvatarProps {
  userAvatar: string | undefined | null;
  userName: string | undefined;
  isAvatar?: boolean;
  size?: "middle" | "big";

  handleOpen?: () => void;
}

export const UserAvatar = memo(
  ({
    userAvatar,
    userName,
    isAvatar = false,
    size = "middle",
    handleOpen,
  }: IUserAvatarProps) => {
    const sizeClasses = size === "middle" ? "w-10 h-10" : "w-12 h-12";

    return (
      <TouchableOpacity
        onPress={handleOpen}
        disabled={isAvatar} 
        activeOpacity={0.7}
      >
        {userAvatar ? (
          <Image
            source={{ uri: userAvatar }}
            className={cn("rounded-full", sizeClasses)}
          />
        ) : (
          <View
            className={cn(
              "flex justify-center items-center bg-primary rounded-full",
              sizeClasses,
            )}
          >
            <Text className="text-primary-foreground uppercase font-bold text-base">
              {userName?.slice(0, 1)}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

UserAvatar.displayName = "UserAvatar";

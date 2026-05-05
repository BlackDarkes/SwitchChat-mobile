import { cn } from "@/shared/lib/utils";
import { memo } from "react";
import { Image, TouchableOpacity } from "react-native";

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
    return (
      <>
        {userAvatar ? (
          <TouchableOpacity onPress={handleOpen}>
            <Image
              src={userAvatar}
              alt="avatar"
              width={60}
              height={60}
              className={cn("shrink-0 cursor-pointer", {
                "cursor-default": isAvatar,
                "w-[clamp(30px,4vw,40px)] h-[clamp(30px,4vw,40px)]":
                  size === "middle",
                "w-[clamp(40px,4vw,50px)] h-[clamp(40px,4vw,50px)]":
                  size === "big",
              })}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className={cn(
              "flex justify-center items-center shrink-0",
              "bg-primary-color text-primary-bg uppercase font-bold rounded-full",
              "cursor-pointer",
              {
                "cursor-default": isAvatar,
                "w-[clamp(30px,4vw,40px)] h-[clamp(30px,4vw,40px)]":
                  size === "middle",
                "w-[clamp(40px,4vw,50px)] h-[clamp(40px,4vw,50px)]":
                  size === "big",
              },
            )}
            onPress={handleOpen}
          >
            {userName?.slice(0, 1)}
          </TouchableOpacity>
        )}
      </>
    );
  },
);

UserAvatar.displayName = "UserAvatar";

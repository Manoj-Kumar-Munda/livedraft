"use client";

import { Separator } from "@/components/ui/separator";
import { shallow, useOthersMapped, useSelf } from "@liveblocks/react/suspense";
import { Room } from "./room";

const AVATAR_SIZE = 36;

type TOtherUsers = [
  connectionId: number,
  data: {
    connectionId: number;
    info: {
      name: string;
      avatar: string;
      id: string;
    };
  },
][];
export const Avatars = () => {
  return (
    <Room>
      <AvatarStack />
    </Room>
  );
};

const AvatarStack = () => {
  const users = useOthersMapped(
    (other) => ({
      connectionId: other?.connectionId,
      info: other?.info,
    }),
    shallow
  ) as TOtherUsers;
  const currentUser = useSelf();

  const filteredUsers = users?.filter(
    ([, user]) => currentUser?.id !== user?.info?.id
  );

  const uniqueUsersMap = new Map();
  filteredUsers?.forEach(([connectionId, user]) => {
    if (user?.info?.id) {
      uniqueUsersMap.set(user.info.id, [connectionId, user]);
    }
  });

  const uniqueUsers = Array.from(uniqueUsersMap.values());

  if (users.length === 0) return null;

  return (
    <>
      <div className="flex items-center">
        {currentUser && (
          <div className="relative ml-2">
            <Avatar src={currentUser?.info?.avatar} name="You" />
          </div>
        )}

        <div className="flex">
          {uniqueUsers?.map(([connectionId, data]) => {
            return (
              <Avatar
                key={connectionId}
                src={data?.info?.avatar}
                name={data?.info?.name}
              />
            );
          })}
        </div>
      </div>

      <Separator orientation="vertical" className="h-6" />
    </>
  );
};

interface AvatarProps {
  src: string;
  name: string;
}

const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <div
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      className="group -ml-2 flex shrink-0"
    >
      <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
        {name}
      </div>
      <img alt={name} src={src} className="size-full rounded-full" />
    </div>
  );
};

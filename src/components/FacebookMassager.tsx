// "use client";

import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookMessenger() {
  // const appId = process.env.appId;
  // const pageId = process.env.pageId!;
  return (
    <FacebookProvider appId={"204029249087717"} chatSupport>
      <CustomChat pageId={"921333778073552"} minimized={true} />
    </FacebookProvider>
  );
}

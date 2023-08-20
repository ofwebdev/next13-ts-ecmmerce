// "use client";

import { FacebookProvider, CustomChat } from "react-facebook";
import { SiTruenas } from "react-icons/si";

export default function FacebookMessenger() {
  const appId = process.env.appId as string;
  const pageId = process.env.pageId as string;

  console.log(appId);
  return (
    <FacebookProvider appId={appId} chatSupport>
      <CustomChat pageId={pageId} minimized={SiTruenas} />
    </FacebookProvider>
  );
}

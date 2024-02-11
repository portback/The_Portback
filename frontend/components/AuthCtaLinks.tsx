import Link from "next/link";
import React, { FC } from "react";

type links = {
  name: string;
  href: string;
};

interface CtaLinksI {
  linksArray: links[];
}

const AuthCtaLinks: FC<CtaLinksI> = ({ linksArray }) => {
  return (
    <div className="w-full grid grid-cols-2 space-x-4">
      {linksArray.map((item, i) => (
        <Link key={i} href={item.href}>
          <p className="font-bold text-wrap font-sans text-lg text-primary">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default AuthCtaLinks;

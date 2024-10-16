import Link from "next/link";
import { FC } from "react";

interface BreadcrumbProps {
  links: { label: string; url: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  return (
    <div className="breadcrumb-wrap">
      <div className="container">
        <div className="breadcrumb">
          {links.map((link, index) => (
            <span key={index}>
              <Link href={link.url}>
                {link.label}
              </Link>
              {index < links.length - 1 && <span> &gt; </span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

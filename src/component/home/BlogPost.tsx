// components/BlogPost.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
// interfaces/BlogPostProps.ts
export interface BlogPostProps {
  title: string;
  imageUrl: string;
  postUrl: string;
  category: string;
  categoryUrl: string;
  date: string;
  views: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  imageUrl,
  postUrl,
  category,
  categoryUrl,
  date,
  views,
}) => {
  return (
    <article className="wow fadeIn animated">
      <div className="d-md-flex d-block">
        <div className="post-thumb d-flex mr-15">
          <Link className="color-white" href={postUrl}>
            <Image src={imageUrl} alt={title} width={221} height={147} />
          </Link>
        </div>
        <div className="post-content">
          <div className="entry-meta mb-10 mt-10">
            <Link className="entry-meta meta-2" href={categoryUrl}>
              <span className="post-in font-x-small">{category}</span>
            </Link>
          </div>
          <h4 className="post-title mb-25 text-limit-2-row">
            <Link href="blog-post-fullwidth">{title}</Link>
          </h4>
          <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
            <div>
              <span className="post-on">{date}</span>
              <span className="hit-count has-dot">{views}</span>
            </div>
            <Link href="blog-post-right">Read More</Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

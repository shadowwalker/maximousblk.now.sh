import Link from "next/link";
import { parseISO, format } from "date-fns";

interface Attributes {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}

const BlogPost = ({ title, description, slug, publishedAt }: Attributes) => {
  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <a className="w-full">
          <div className="mb-4 mt-8 w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-coolGray-100">
                {title}
              </h4>
              <p className="text-gray-500 dark:text-coolGray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                {publishedAt && format(parseISO(publishedAt), "MMM, yyy")}
              </p>
            </div>
            <p className="text-gray-600 dark:text-coolGray-400">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogPost;

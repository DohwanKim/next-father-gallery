'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AnchorHTMLAttributes, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { ImagesVariants } from '@/constants/images.enum';
import { Post } from '@/types/posts.type';
import { artTypeToKorean, getCFUrl } from '@/utils/common';

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  postItem: Post;
}

export const PostItemSkeleton = () => {
  return Array.from({ length: 9 }, (_, index) => (
    <div key={index}>
      <Skeleton className="w-full rounded-lg aspect-square drop-shadow-lg mb-5" />
      <div className={'flex flex-col items-center'}>
        <Skeleton className="h-4 w-[200px] mb-2" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ));
};

const PostItem = ({ postItem, ...props }: Props) => {
  const [originImgLoaded, setOriginImgLoaded] = useState<boolean>(false);
  const { img, title, artType } = postItem;

  return (
    <Link
      href={`/gallery/${postItem.id}`}
      className={'[&:hover_img]:scale-105'}
      {...props}
    >
      {img && (
        <div
          className={
            'relative w-full aspect-square mb-5 overflow-hidden rounded-lg drop-shadow-lg'
          }
        >
          {!originImgLoaded && (
            <Image
              fill={true}
              src={getCFUrl(img.id, ImagesVariants.USER_POST_BLUR)}
              alt={''}
              unoptimized
              priority
              className={'object-cover transition-transform duration-500'}
            />
          )}
          <Image
            fill={true}
            src={getCFUrl(img.id, ImagesVariants.USER_POST)}
            alt={''}
            unoptimized
            className={'object-cover transition-transform duration-500'}
            onLoad={() => setOriginImgLoaded(true)}
          />
        </div>
      )}
      <div className={'text-center text-sm'}>
        <h2>{title}</h2>
        <p className={'font-light'}>{artTypeToKorean(artType)}</p>
      </div>
    </Link>
  );
};

export default PostItem;

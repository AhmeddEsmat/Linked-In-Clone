import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandsClapping,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function ActivityPost({ period, image, count,comment, children }) {
  return (
    <div>
      <p className="text-xs text-gray-500">
        <span className="font-medium">Ahmed Esmat</span> posted this • {period}
      </p>
      <div className="my-2 flex items-center">
        <Image
          src={image}
          alt="Post Image"
          className="w-16 h-16 rounded-lg"
          priority
        />
        <p className="px-4">{children}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          <FontAwesomeIcon icon={faHandsClapping} className="text-green-700" />
          <FontAwesomeIcon icon={faThumbsUp} className="text-blue-700" />
          <p className="pl-1 text-gray-500 text-xs">{count}</p>
        </div>
        <div className="text-gray-500 text-xs">{comment} comments</div>
      </div>
    </div>
  );
}

export default ActivityPost;

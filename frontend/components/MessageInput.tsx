"use client ";
import React, { useState } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { Input } from "./ui/input";
import { BsSendCheckFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

function MessageInput() {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    setMessage(message + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-[95%] mx-auto absolute bottom-3">
      <div className="items-center text-white  px-3  border-main-light border-[1px] rounded-2xl flex min-h-[40px] w-[100%] mx-auto absolute bottom-3 justify-between">
        <div className="flex items-center gap-4 flex-1">
          <MdOutlineEmojiEmotions
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            fontSize={23}
          />
          <CiImageOn fontSize={23} />
          <Input
            placeholder="want to say something "
            className="flex-1  outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <BsSendCheckFill />
      </div>
      <div>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiClick={(emoji, event) => {
              handleEmojiSelect(emoji.emoji);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MessageInput;

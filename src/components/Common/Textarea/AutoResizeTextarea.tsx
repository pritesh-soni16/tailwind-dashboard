import { useRef } from "react";

const AutoResizeTextarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "34px"; // reset min height
    el.style.height = el.scrollHeight + "px"; // grow dynamically
  };

  return (
    <textarea
      ref={textareaRef}
      onInput={handleInput}
      className="min-h-[34px] w-full resize-none overflow-hidden p-2 border border-gray-300 rounded"
      {...props}
    />
  );
};

export default AutoResizeTextarea;

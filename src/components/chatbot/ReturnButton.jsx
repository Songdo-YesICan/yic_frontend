import {
  ArrowLeftIcon,
  ChatBubbleOvalLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/react/16/solid";
const ReturnButton = ({onClick}) => {
  return <ChevronLeftIcon class="w-8 h-8" onClick={onClick} />;
};

export default ReturnButton;

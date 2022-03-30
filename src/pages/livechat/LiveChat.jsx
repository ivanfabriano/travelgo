// IMPORT ICONS
import { Face, SupportAgent, SendOutlined } from "@mui/icons-material";

// IMPORT COMPONENTS
import ChatField from "../../components/forms/ChatField";

const LiveChat = () => {
  return (
    <div>
      <div className="pt-20px mx-36px">
        {/* Left Bubble Chat */}
        <div className="flex my-16px">
          <SupportAgent style={{ fontSize: 40 }} />
          <div className="bg-primmary-blue rounded-md text-white p-12px ml-4px">
            Selamat Siang, ada yang bisa Admin bantu ?
          </div>
        </div>

        {/* Right Bubble Chat */}
        <div className="flex justify-end my-16px">
          <div className="bg-primmary-blue rounded-md text-white p-12px mr-4px">
            Saya ingin bertanya mengenai cara refund tiket ?
          </div>
          <Face style={{ fontSize: 40 }} />
        </div>

        {/* Left Bubble Chat */}
        <div className="flex my-16px">
          <SupportAgent style={{ fontSize: 40 }} />
          <div className="bg-primmary-blue rounded-md text-white p-12px ml-4px">
            Mengenai cara refund bisa dilihat di menu FAQ ya Kak
          </div>
        </div>
      </div>

      <div className="flex block fixed inset-x-0 bottom-20 w-full px-36px">
        <div className="w-10/12 pr-8px">
          <ChatField />
        </div>
        <div className="w-2/12 w-10 h-10 bg-primmary-blue rounded-full flex items-center justify-center text-white">
          <SendOutlined />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;

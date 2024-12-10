import { Github, Linkedin, MailOpen } from "lucide-react";
import { Button } from "./ui/button";

export default function SocialLinks() {
  const githubOAuthURL = "https://github.com/AbinAntony8888";
  const discordOAuthURL = "https://discord.gg/tcA8aTKq";
  const stackoverflowdOAuthURL =
    "https://stackoverflow.com/users/20703743/abin-antony";
  const linkedindOAuthURL =
    "https://www.linkedin.com/in/abin-antony-a3b90a292/";
  const emaildOAuthURL =
    "mailto:abinantony8888@gmail.com?subject=Hello%20Abin&body=I%20would%20like%20to%20connect%20with%20you.";

  return (
    <div className="flex flex-wrap items-center justify-center sm:gap-6 xl:gap-24 mb-10 pt-2 gap-y-2 gap-x-2">
      {/* grid grid-cols-3 md:grid-cols-5 */}
      {/* 1 */}
      <Button
        className="bg-gray-900  hover:bg-gray-800 text-white"
        onClick={() => (window.location.href = githubOAuthURL)}
      >
        <Github className=" text-blue-500" />
        GitHub
      </Button>
      {/* 2 */}
      <Button
        className="bg-gray-900  hover:bg-gray-800 text-white"
        onClick={() => (window.location.href = discordOAuthURL)}
      >
        <svg
          className=" text-blue-500"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="discord"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
          ></path>
        </svg>
        Discord
      </Button>
      {/* 3 */}
      <Button
        className="bg-gray-900  hover:bg-gray-800 text-white"
        onClick={() => (window.location.href = emaildOAuthURL)}
      >
        <MailOpen className="text-blue-500" />
        Email
      </Button>
      {/* 4 */}
      <Button
        className="bg-gray-900 hover:bg-gray-800 text-white"
        onClick={() => (window.location.href = stackoverflowdOAuthURL)}
      >
        <svg
          className="text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 20.002V15.002H20V22.002H3V15.002H5V20.002H18Z" />
          <path d="M7.5 14.8L16.8 16.6L17.2 14.6L7.9 12.8L7.5 14.8Z" />
          <path d="M8.4 10.8L17.1 14.5L18 12.7L9.2 9L8.4 10.8Z" />
          <path d="M10.2 6.9L17.8 12.4L19.2 10.9L11.6 5.4L10.2 6.9Z" />
          <path d="M13.4 3.1L19.2 10.7L21 9.5L15.2 1.9L13.4 3.1Z" />
        </svg>
        Stack Overflow
      </Button>
      {/* 5 */}
      <Button
        className="bg-gray-900 hover:bg-gray-800 text-white"
        onClick={() => (window.location.href = linkedindOAuthURL)}
      >
        <Linkedin className=" text-blue-500" />
        LinkedIn
      </Button>
    </div>
  );
}

import Link from "next/link"

const Logo = ({ withName = true }: { withName?: boolean }) => {
  return (
    <Link href="/" className="flex items-center">
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path
          d="M19.9535 0C12.0293 0 5.24931 5.58933 3.87613 13.0293C3.87613 13.0293 3.87613 13.0293 3.87613 13.0293C3.72379 13.7333 3.64762 14.4373 3.64762 15.1413C3.64762 20.0373 7.1339 24 11.9677 24C15.3065 24 18.1903 22.0693 19.5635 19.2C19.5635 19.2 19.5635 19.2 19.5635 19.2C20.9367 22.0693 23.8206 24 27.1593 24C31.9932 24 35.4794 20.0373 35.4794 15.1413C35.4794 14.4373 35.4033 13.7333 35.2509 13.0293C33.8777 5.58933 27.0977 0 19.1735 0H19.9535Z"
          fill="#000000"
        />
      </svg>
      {withName && (
        <span className="ml-2 text-xl font-semibold">GonzoCity</span>
      )}
    </Link>
  )
}

export default Logo

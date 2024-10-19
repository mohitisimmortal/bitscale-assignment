export default function CustomTickIcon({ bgColor = "#3B82F6", tickColor = "white" }) {
    return (
      <div className="flex items-center justify-center">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle with dynamic color */}
          <circle cx="12" cy="12" r="12" fill={bgColor} />
          
          {/* Tick with dynamic color */}
          <path
            d="M9 12.5l2 2 4-4"
            stroke={tickColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  
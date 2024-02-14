type buttonProps = {
  title: string,
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean,
  maxWidth?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}


export default function ButtonGradient({ title, type, disabled, maxWidth, onClick }: buttonProps) {
  return (<button
    onClick={onClick}
    disabled={disabled}
    type={type}
    className={`inline-flex items-center justify-center border-0 rounded-full px-4 py-2 font-bold uppercase text-white cursor-pointer transition-all 
       duration-300 ease-in-out 
       bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl m-5 ${maxWidth ?? ''}`}
    role="button"
  >
    <span className="block bg-slate-600 px-3 py-1.5 rounded-full w-full text-center text-4xl transition-all duration-300 ease-in-out hover:bg-transparent">
      {title}
    </span>
  </button>
  )
}
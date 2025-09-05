
interface BubbleProfileProps {
    label:string;
    icon:React.ReactNode;
}

export default function BubbleProfile({ label, icon }: BubbleProfileProps) {
  return(
    <>
    <div className="bubble-profile">
     <div className="flex items-center gap-2 bg-black/70 rounded-lg px-3 py-1">
        {icon}
        <span className="p-[2px] text-base font-semibold text-white bg-clip-text text-transparent">{label}</span>
      </div>
    </div>
    </>
  )
}

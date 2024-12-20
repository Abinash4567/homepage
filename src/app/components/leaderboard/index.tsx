interface Iprops {
  amount: string;
  caption: string
}

export default function Leaderboard(props: Iprops){
  return (
  <div className="mt-3 mr-12">
    <div className="flex justify-center">
      <div className="font-bold text-sm text-[#081735]">{props.amount}+</div>
    </div>
    <div className="font-medium text-sm">{props.caption}</div>
  </div>
)
}
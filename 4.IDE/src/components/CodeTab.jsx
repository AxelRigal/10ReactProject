import { useDispatch } from "react-redux"
import { updateCode } from "../features/tabs"

export default function CodeTab({id, code}) {
  const dispatch = useDispatch()

  return (
    <textarea
    onChange={(e) => dispatch(updateCode({id, value: e.target.value}))} 
    spellCheck="false" value={code} className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none">

    </textarea>
  )
}
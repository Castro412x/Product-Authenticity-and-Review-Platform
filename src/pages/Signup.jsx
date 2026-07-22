import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}

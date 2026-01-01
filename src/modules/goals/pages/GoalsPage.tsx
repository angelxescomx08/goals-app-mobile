import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useGoalsByUser } from "../hooks/useGoalsByUser"
import { Link } from "react-router"
import { Plus } from "lucide-react"

export const GoalsPage = () => {
  const { goals } = useGoalsByUser()

  return (
    <main className="container p-2">
      <Link to="/panel/goals/create" className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md p-2">
        <Plus className="size-6" />
        <span className="text-sm font-medium">Crear meta</span>
      </Link>
      {goals.data?.data.goals.length === 0 &&
        <Alert variant="destructive">
          <AlertTitle>No hay metas</AlertTitle>
          <AlertDescription>No hay metas creadas todavía.</AlertDescription>
        </Alert>
      }
    </main>
  )
}

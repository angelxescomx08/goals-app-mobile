import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useGoalsByUser } from "../hooks/useGoalsByUser"

export const GoalsPage = () => {
  const { goals } = useGoalsByUser()

  return (
    <main className="container">
      {goals.data?.data.length === 0 &&
      <Alert>
        <AlertTitle>No hay metas</AlertTitle>
        <AlertDescription>No hay metas creadas todavía.</AlertDescription>
      </Alert>
      }
    </main>
  )
}

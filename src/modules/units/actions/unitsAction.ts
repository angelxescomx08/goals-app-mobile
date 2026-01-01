import { api } from "@/lib/api"
import { UnitSchema } from "../schemas/unitSchema"

export async function getUnits() {
  return api.get<{
    units: UnitSchema[]
  }>("/units/by-user")
}
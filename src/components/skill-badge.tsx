import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name = "Skill", level = 75 }: SkillBadgeProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{name}</span>
            <span className="text-sm text-muted-foreground">{level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


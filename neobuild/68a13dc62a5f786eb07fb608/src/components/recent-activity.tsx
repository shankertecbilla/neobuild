import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "created a new post",
      time: "2 hours ago",
      avatar: "JD",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "updated their profile",
      time: "4 hours ago",
      avatar: "JS",
    },
    {
      id: 3,
      user: "Bob Johnson",
      action: "commented on a post",
      time: "8 hours ago",
      avatar: "BJ",
    },
    {
      id: 4,
      user: "Alice Williams",
      action: "uploaded a new file",
      time: "1 day ago",
      avatar: "AW",
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-primary-300 flex items-center justify-center text-white text-xs font-medium">
                {activity.avatar}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user} <span className="font-normal">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
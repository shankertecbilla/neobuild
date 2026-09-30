import { DashboardLayout } from '@/components/dashboard-layout'
import { StatCard } from '@/components/stat-card'
import { RecentActivity } from '@/components/recent-activity'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, DollarSign, BarChart, ShoppingCart } from 'lucide-react'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your dashboard.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Revenue" 
            value="$45,231.89" 
            icon={<DollarSign className="h-4 w-4" />}
            description="compared to last month"
            trend={{ value: 12.5, isPositive: true }}
          />
          <StatCard 
            title="New Customers" 
            value="+2,350" 
            icon={<Users className="h-4 w-4" />}
            description="compared to last month"
            trend={{ value: 5.2, isPositive: true }}
          />
          <StatCard 
            title="Sales" 
            value="+12,234" 
            icon={<ShoppingCart className="h-4 w-4" />}
            description="compared to last month"
            trend={{ value: 2.1, isPositive: false }}
          />
          <StatCard 
            title="Active Users" 
            value="+573" 
            icon={<BarChart className="h-4 w-4" />}
            description="compared to last month"
            trend={{ value: 8.4, isPositive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart placeholder - would include recharts implementation in a real app
              </div>
            </CardContent>
          </Card>
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Settings, User, LogOut, Bell, Search } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header className="dashboard-header border-b bg-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="relative ml-4 md:ml-0 w-64 hidden md:flex">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              placeholder="Search..." 
              className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <div className="text-sm font-medium">{user?.name}</div>
              <div className="text-xs text-muted-foreground">{user?.email}</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-medium">
              {user?.name?.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Mobile version */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs border-r bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold text-primary-600">Dashboard</div>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="space-y-1">
              <Link to="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link to="/users" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <Users className="h-5 w-5" />
                Users
              </Link>
              <Link to="/profile" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <User className="h-5 w-5" />
                Profile
              </Link>
              <Link to="/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
              <button onClick={logout} className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Sidebar - Desktop version */}
      <aside className="dashboard-sidebar hidden md:block w-64 border-r bg-white p-6">
        <div className="text-xl font-bold mb-8 text-primary-600">Dashboard</div>
        <nav className="space-y-1">
          <Link to="/" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link to="/users" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <Users className="h-5 w-5" />
            Users
          </Link>
          <Link to="/profile" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link to="/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <button onClick={logout} className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  )
}
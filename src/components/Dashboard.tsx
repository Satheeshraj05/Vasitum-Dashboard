import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx"
import { Button } from "./ui/button.tsx"
import { MoreHorizontal, ChevronDown, Star, Search, Bell, MessageSquare, Menu, X } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { Headphones, Home, Users, Calendar, Briefcase, Settings } from 'lucide-react'

const chartData = [
    { value: 100 },
    { value: 120 },
    { value: 110 },
    { value: 130 },
    { value: 125 },
    { value: 140 },
]

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="w-full lg:w-2/3 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <StatCard title="Available Position" value="24" subtitle="4 Urgently needed" color="bg-red-50" textColor="text-red-500" />
                                    <StatCard title="Job Open" value="10" subtitle="4 Active hiring" color="bg-blue-50" textColor="text-blue-500" />
                                    <StatCard title="New Employees" value="24" subtitle="4 Department" color="bg-purple-50" textColor="text-purple-500" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <ChartCard
                                        title="Total Employees"
                                        value="216"
                                        change="+2%"
                                        info={["120 Men", "96 Women"]}
                                        footnote="+2% Past month"
                                    />
                                    <ChartCard
                                        title="Talent Request"
                                        value="16"
                                        change="+5%"
                                        info={["6 Men", "10 Women"]}
                                        footnote="+5% Past month"
                                    />
                                </div>
                                <Announcements />
                            </div>
                            <div className="w-full lg:w-1/3 space-y-6">
                                <RecentActivity />
                                <UpcomingSchedule />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

function Sidebar({ open, setOpen }) {
    return (
        <>
            <div
                className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity duration-300 ease-linear lg:hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setOpen(false)}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white transition duration-300 ease-in-out transform 
          lg:relative lg:translate-x-0 z-30
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:w-20 md:translate-x-0
          lg:w-64`}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2 text-indigo-600">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-2xl font-bold md:hidden lg:inline">Vasitum</span>
                    </div>
                    <button onClick={() => setOpen(false)} className="lg:hidden">
                        <X className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
                <nav className="mt-5 px-2">
                    <SidebarItem icon={<Home className="w-5 h-5" />} text="Dashboard" active />
                    <SidebarItem icon={<Users className="w-5 h-5" />} text="Recruitment" />
                    <SidebarItem icon={<Calendar className="w-5 h-5" />} text="Schedule" />
                    <SidebarItem icon={<Briefcase className="w-5 h-5" />} text="Employee" />
                    <SidebarItem icon={<Settings className="w-5 h-5" />} text="Department" />
                    <SidebarItem icon={<Headphones className="w-5 h-5" />} text="Support" />
                    <SidebarItem icon={<Settings className="w-5 h-5" />} text="Settings" />
                </nav>
            </div>
        </>
    )
}

function SidebarItem({ icon, text, active = false }) {
    return (
        <a href="#" className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${active ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            {icon}
            <span className="md:hidden lg:inline">{text}</span>
        </a>
    )
}

function Header({ sidebarOpen, setSidebarOpen }) {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button onClick={() => setSidebarOpen(true)} className="p-1 rounded-full text-gray-400 lg:hidden">
                            <Menu className="h-6 w-6" />
                        </button>
                        <div className="relative ml-4 lg:ml-0">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <Search className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                                type="search"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">View notifications</span>
                            <Bell className="h-6 w-6" />
                        </button>
                        <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">View messages</span>
                            <MessageSquare className="h-6 w-6" />
                        </button>
                        <div className="ml-3 relative">
                            <div className="flex items-center space-x-2">
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <span className="hidden lg:block text-gray-700 text-sm font-medium">Admira John</span>
                                <ChevronDown className="hidden lg:block h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function StatCard({ title, value, subtitle, color, textColor }) {
    return (
        <Card className={`${color} border-none`}>
            <CardContent className="p-3">
                <h3 className="font-normal mb-1 text-xs text-gray-500">{title}</h3>
                <div className={`text-xl font-bold mb-1 ${textColor}`}>{value}</div>
                <p className={`text-xs ${textColor}`}>{subtitle}</p>
            </CardContent>
        </Card>
    )
}

function RecentActivity() {
    return (
        <Card className="bg-[#1B204A] text-white">
            <CardContent className="p-4 flex flex-col h-full justify-between">
                <div>
                    <h3 className="font-medium mb-2 text-lg">Recently Activity</h3>
                    <p className="text-sm text-gray-300 mb-2">10.40 AM, Fri 10 Sept 2021</p>
                    <p className="font-medium mb-2 text-lg">You Posted a New Job</p>
                    <p className="text-sm text-gray-300 mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
                </div>
                <div>
                    <p className="text-sm text-gray-300 mb-2">Today you makes 12 Activity</p>
                    <Button className="bg-[#FF5A5A] hover:bg-[#FF7A7A] text-white font-medium py-2 px-4 rounded w-full">
                        See All Activity
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

function ChartCard({ title, value, change, info, footnote }) {
    return (
        <Card className="bg-white">
            <CardContent className="p-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
                <div className="flex items-baseline space-x-2 mb-1">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm font-medium text-red-500">{change}</div>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                    {info.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <Line type="monotone" dataKey="value" stroke="#FF5A5A" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-xs font-medium text-red-500 mt-2 bg-red-50 inline-block px-2 py-1 rounded">
                    {footnote}
                </div>
            </CardContent>
        </Card>
    )
}

function UpcomingSchedule() {
    return (
        <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
                <CardTitle className="text-lg font-medium text-gray-900">Upcoming Schedule</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-500">
                    Today, 13 Sep 2021
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="px-4 pb-4">
                <div className="mb-4">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Priority</h4>
                    <ScheduleItem
                        title="Review candidate applications"
                        time="Today - 11.30 AM"
                    />
                </div>
                <div>
                    <h4 className="font-medium text-sm text-gray-500 mb-2">Other</h4>
                    <ScheduleItem
                        title="Interview with candidates"
                        time="Today - 10.30 AM"
                    />
                    <ScheduleItem
                        title="Short meeting with product designer from IT Department"
                        time="Today - 09.15 AM"
                    />
                </div>
                <Button className="w-full bg-[#FF5A5A] hover:bg-[#FF7A7A] text-white font-medium mt-4">
                    Create a New Schedule
                </Button>
            </CardContent>
        </Card>
    )
}

function Announcements() {
    return (
        <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
                <CardTitle className="text-lg font-medium text-gray-900">Announcement</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-500">
                    Today, 13 Sep 2021
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="px-4 pb-4">
                <AnnouncementItem
                    title="Outing schedule for every department"
                    time="5 Minutes ago"
                />
                <AnnouncementItem
                    title="Meeting HR Department"
                    time="Yesterday, 12:30 PM"
                />
                <AnnouncementItem
                    title="IT Department need two more talents  for UX/UI Designer position"
                    time="Yesterday, 09:15 AM"
                />
                <Button variant="link" className="mt-4 text-[#FF5A5A] font-medium">
                    See All Announcement
                </Button>
            </CardContent>
        </Card>
    )
}

function AnnouncementItem({ title, time }) {
    return (
        <div className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <Button variant="ghost" size="sm">
                <Star className="h-5 w-5 text-gray-400" />
            </Button>
        </div>
    )
}

function ScheduleItem({ title, time }) {
    return (
        <div className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
                <h4 className="font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
            </Button>
        </div>
    )
}
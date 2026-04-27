import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BoardTimelineView = () => {
  const navigate = useNavigate();
  return (
    <>
      
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] dark:bg-slate-950 text-white dark:text-slate-100 font-sans text-sm font-medium border-b border-white/10 shadow-sm">
<div className="flex items-center gap-md">
<button className="hover:bg-white/10 transition-colors p-1 rounded active:opacity-80 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="text-lg font-black text-white tracking-tight">Workspace</h1>
<nav className="hidden md:flex items-center gap-md ml-xl">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Recent</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Starred</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Templates</a>
<button className="bg-primary-container text-on-primary-container px-3 py-1 rounded-lg font-bold hover:brightness-110 active:opacity-80 transition-all">Create</button>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<input className="bg-white/10 border-none rounded-lg py-1 px-3 text-xs w-48 focus:ring-2 focus:ring-primary-container placeholder-slate-400" placeholder="Search" type="text"/>
<span className="material-symbols-outlined absolute right-2 top-1 text-slate-400 text-sm" data-icon="search">search</span>
</div>
<span className="material-symbols-outlined text-slate-300 hover:text-white cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-slate-300 hover:text-white cursor-pointer" data-icon="help">help</span>
<img alt="Profile" className="w-8 h-8 rounded-full border-2 border-white/20" data-alt="close-up portrait of a professional male designer with a clean aesthetic and soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_pAotJMDc0EyGX_Mhphyr9bTNTLcbzHSrlIbT6V184BNGZjhxlRAXpMkPG49DAB7AMiuVQoRsXpty6w_emUfvly-GlfMU_jKXCrLuu5cQBmDrzPnM-ByOh6QdW3iiWUnNmUqkgk499T4h1iRnVDEAwsQEhruTA8Q17FNMGYnLq9tp-aHZDtarsOBe2EOhLEZZTdekVj7F-bVf6bmcHWcuPnLfYtWGlKbYtOtm9n1M6cnLrsciw0Nh4_p0i4Hn5FxNjN6WC55wUS5z"/>
</div>
</header>
<div className="flex flex-1 pt-12">
<aside className="flex flex-col h-full w-64 border-r bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-4 gap-2 font-sans text-sm">
<div className="flex items-center gap-sm mb-4 px-2">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400 font-bold" data-icon="dashboard">dashboard</span>
<span className="text-blue-600 dark:text-blue-400 font-bold">Productive Flow</span>
</div>
<a className="flex items-center gap-sm p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Boards</span>
</a>
<a className="flex items-center gap-sm p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Members</span>
</a>
<a className="flex items-center gap-sm p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Workspace Settings</span>
</a>
<a className="flex items-center gap-sm p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span>Calendar</span>
</a>
<a className="flex items-center gap-sm p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="timeline">timeline</span>
<span>Timeline</span>
</a>
<a className="flex items-center gap-sm p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>Dashboard</span>
</a>
<div className="mt-xl pt-md border-t border-slate-200 dark:border-slate-800">
<p className="px-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">My Boards</p>
<div className="flex items-center gap-sm p-2 text-slate-600 hover:bg-slate-200/50 rounded-md cursor-pointer">
<div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
<span>Marketing Q4</span>
</div>
<div className="flex items-center gap-sm p-2 text-slate-600 hover:bg-slate-200/50 rounded-md cursor-pointer">
<div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
<span>App Launch</span>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden">
<div className="h-14 flex items-center justify-between px-md border-b border-slate-200 bg-white z-10">
<div className="flex items-center gap-md">
<h2 className="font-headline-md text-on-surface">Timeline: Project Phoenix</h2>
<div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
<div className="flex items-center bg-slate-100 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-bold bg-white shadow-sm rounded-md text-primary">Day</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Week</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Month</button>
</div>
</div>
<div className="flex items-center gap-gutter">
<div className="flex -space-x-2">
<img alt="M1" className="w-8 h-8 rounded-full border-2 border-white" data-alt="professional headshot of a smiling female manager with vibrant expression and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8KMyMRtRAJfpCVv7uOZPROqZn9Hj0l-rAadkywFjI2eEojYkT6UrbJGmUJ3GpbUq88njucWxUMyVopF1txLN82Iz5QUKBnVA60bTqd8DQhFOw1R3pWfD9CEcpFs7GFCMygAhQI6CNuiRPFYtquN300bhpP03EDqStNnObICVbVirHrDe3LBsDM8vfyXejXIIbh-3UO3oa_hsUtjALTxRiy7YVUWX9dNQlAmq05ajua7udZ3zYAZcfexTJKq-5bT62vO7yTjfqaQLu"/>
<img alt="M2" className="w-8 h-8 rounded-full border-2 border-white" data-alt="portrait of a young tech professional man in a casual workspace setting with natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vmUPO4pAG1igFSmY6mmZ_7qIXRqQYTztp8WK57cVxbLdQCTYDFccOHkH_psZLXPca4-zRoupwt61V0QQpYjSGjfaemc6EM7WhBfT2sX2esHscAWqzOnfTobe6YxU-7cpfPXa-ZitE_b3wwq7C6glDBSj9YSvgsdM2usei_K1CvxZi-kCHLjmxgZdb-v1M8ow9fNEYnzTcZ768wSAVTdafnjYExtL1uJJZhAoeZqOyb8fGX58MAp1G6TDuyheyzVU2Y2BEW4QQKl4"/>
<img alt="M3" className="w-8 h-8 rounded-full border-2 border-white" data-alt="close-up portrait of a thoughtful male engineer with soft lighting and professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6JMoLyOoJYRpMZeVkILKo6OtMHWQ5UeC5qN3miOYNu40jItezc3PhxmTWpKlOGDTHTyQYIQc40rgK7-q5sqJqg9TJDA3GwKSftMpKq4amK8dwQpUHBgrnuepx1jFIfFLaDl2VAG0KYX9MkTt3Uey_FJDU4EEbn3B4N7U1AAOxkTw6OgfvHCsQVV4bU6a2uS3ng6pKgJzw8D6YEj2RXUaPk4mrK3k2v_Q4RH_Z1W4O4hRIje0xS0ZeCnpnR5-C6SOg2YCHer_UseFw"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+4</div>
</div>
<button className="flex items-center gap-xs px-3 py-1.5 border border-outline-variant rounded-lg text-sm hover:bg-slate-50">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
<span>Filters</span>
</button>
<button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-xs hover:brightness-110">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
<span>Add Task</span>
</button>
</div>
</div>
<div className="flex-1 overflow-auto relative">
<div className="flex flex-col min-w-[2000px] h-full">
<div className="sticky top-0 z-20 flex bg-white border-b border-slate-200 h-10">
<div className="w-64 shrink-0 flex items-center px-4 border-r border-slate-200 font-label-bold text-slate-500 uppercase tracking-wider text-[10px]">Lists / Tasks</div>
<div className="flex-1 flex timeline-grid">
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">MON 12</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">TUE 13</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-blue-600 bg-blue-50/50">WED 14</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">THU 15</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">FRI 16</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-400 italic">SAT 17</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-400 italic">SUN 18</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">MON 19</div>
<div className="w-40 flex items-center justify-center border-r border-slate-200/50 text-[11px] font-bold text-slate-500">TUE 20</div>
</div>
</div>
<div className="flex flex-1">
<div className="w-64 shrink-0 border-r border-slate-200 bg-slate-50/50">
<div className="p-4 border-b border-slate-200 bg-slate-100/50 flex items-center justify-between">
<span className="font-bold text-xs text-slate-600">Backlog</span>
<span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded-full text-slate-500">3</span>
</div>
<div className="p-4 space-y-md border-b border-slate-200 min-h-[120px]">
<div className="text-xs font-medium text-slate-700 truncate">Initial Research Phase</div>
<div className="text-xs font-medium text-slate-700 truncate">Stakeholder Interviews</div>
<div className="text-xs font-medium text-slate-700 truncate">Resource Allocation</div>
</div>
<div className="p-4 border-b border-slate-200 bg-slate-100/50 flex items-center justify-between">
<span className="font-bold text-xs text-slate-600">In Progress</span>
<span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded-full text-blue-600">2</span>
</div>
<div className="p-4 space-y-md border-b border-slate-200 min-h-[120px]">
<div className="text-xs font-medium text-slate-700 truncate">UI Design Framework</div>
<div className="text-xs font-medium text-slate-700 truncate">API Integration</div>
</div>
<div className="p-4 border-b border-slate-200 bg-slate-100/50 flex items-center justify-between">
<span className="font-bold text-xs text-slate-600">Review</span>
<span className="text-[10px] bg-purple-100 px-2 py-0.5 rounded-full text-purple-600">1</span>
</div>
<div className="p-4 space-y-md border-b border-slate-200 min-h-[80px]">
<div className="text-xs font-medium text-slate-700 truncate">Quality Assurance Check</div>
</div>
</div>
<div className="flex-1 timeline-grid relative py-4">
<div className="absolute left-[320px] top-0 bottom-0 w-0.5 bg-blue-500/30 z-10 pointer-events-none">
<div className="bg-blue-500 text-[9px] text-white px-1 py-0.5 rounded-sm absolute -left-4 top-2 shadow-sm font-bold">TODAY</div>
</div>
<div className="h-[120px] mb-4 relative">
<div className="absolute top-2 left-0 w-80 h-8 bg-blue-500/10 border border-blue-500/20 rounded-lg p-1 group cursor-pointer hover:bg-blue-500/20 transition-all">
<div className="h-full w-full bg-blue-500 rounded-md flex items-center px-3 justify-between shadow-sm">
<span className="text-white text-[11px] font-bold truncate">Initial Research Phase</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-white text-[10px]" data-icon="attachment">attachment</span>
<span className="material-symbols-outlined text-white text-[10px]" data-icon="chat_bubble">chat_bubble</span>
</div>
</div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md transition-opacity">
<span className="material-symbols-outlined text-slate-400 text-xs" data-icon="link">link</span>
</div>
</div>
<div className="absolute top-12 left-40 w-[240px] h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-1 group cursor-pointer hover:bg-emerald-500/20 transition-all">
<div className="h-full w-full bg-emerald-500 rounded-md flex items-center px-3 justify-between shadow-sm">
<span className="text-white text-[11px] font-bold truncate">Stakeholder Interviews</span>
</div>
</div>
<div className="absolute top-[84px] left-[320px] w-40 h-8 bg-amber-500/10 border border-amber-500/20 rounded-lg p-1 group cursor-pointer hover:bg-amber-500/20 transition-all">
<div className="h-full w-full bg-amber-500 rounded-md flex items-center px-3 justify-between shadow-sm">
<span className="text-white text-[11px] font-bold truncate">Resource Allocation</span>
</div>
</div>
</div>
<div className="h-[120px] mb-4 relative mt-10">
<svg className="absolute top-6 left-[280px] w-[120px] h-20 pointer-events-none overflow-visible">
<path d="M 0 0 C 60 0, 40 40, 120 40" fill="none" stroke="#cbd5e1" stroke-dasharray="4" stroke-width="2"></path>
<polygon fill="#cbd5e1" points="120,40 115,37 115,43"></polygon>
</svg>
<div className="absolute top-2 left-80 w-[320px] h-8 bg-blue-600/10 border border-blue-600/20 rounded-lg p-1 group cursor-pointer hover:bg-blue-600/20 transition-all">
<div className="h-full w-full bg-blue-600 rounded-md flex items-center px-3 justify-between shadow-sm border-l-4 border-blue-800">
<span className="text-white text-[11px] font-bold truncate">UI Design Framework</span>
<img alt="Assignee" className="w-4 h-4 rounded-full border border-white" data-alt="avatar of a project leader" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD60Vg9SKtUqlYtdh_HjQA4TmAEgH3fjP43YHh03TDhga_Dl-ABKLmesZ2-OgcRFT58im2IMh7fdj3yd3oI9i5x_gKQ7qd8kXSiSPDT4THlFpxZUvQMkplrFUvP6tReA2dl56Su-LClyDN-r5GVKSYpgc4UT6aK5KN5j1RfCx-L07hgvErSMtWKoPnftHRvGJPEpjLX9NpV9kwsacIoraDAtanzUu2F6MQsfH2pOA2v_a3sLu9OQAqWmy6kpzah4l_l5ckm1sd-wMe"/>
</div>
</div>
<div className="absolute top-12 left-[480px] w-[320px] h-8 bg-blue-600/10 border border-blue-600/20 rounded-lg p-1 group cursor-pointer hover:bg-blue-600/20 transition-all">
<div className="h-full w-full bg-blue-600 rounded-md flex items-center px-3 justify-between shadow-sm border-l-4 border-blue-800">
<span className="text-white text-[11px] font-bold truncate">API Integration</span>
<img alt="Assignee" className="w-4 h-4 rounded-full border border-white" data-alt="avatar of a developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhSwO5hwB1Y-Gl3vu0CCjvE-GOM7qyXnYxAEJOyfIh7maUaY-v3Yanhczs-R3SYC_WYvGCIsuJX4kOHzBXQFxYennpqgLBRh5cHNdzuQ5b_rnQ5e71bzPVpMPfJZyF2W_VhMteRawg_5QNACioO12xz-Lvl65FX9Opzksj1OBGNg_5LAINfIqwj1IgTjV0SbPNDViWD1vEfhLgAz5suL3kPkQB3LnJmQaQrVkTKqHuBcl5s3PqE9soMHJetG8R4GOwy3pGUdSRI66p"/>
</div>
</div>
</div>
<div className="h-[80px] mb-4 relative mt-10">
<div className="absolute top-2 left-[800px] w-40 h-8 bg-purple-500/10 border border-purple-500/20 rounded-lg p-1 group cursor-pointer hover:bg-purple-500/20 transition-all">
<div className="h-full w-full bg-purple-500 rounded-md flex items-center px-3 justify-between shadow-sm">
<span className="text-white text-[11px] font-bold truncate">Quality Assurance Check</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-slate-900 pb-safe border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-medium Inter">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-medium Inter">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="add_box">add_box</span>
<span className="text-[10px] font-medium Inter">Create</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[10px] font-medium Inter">Notifications</span>
</a>
</nav>
<div className="fixed bottom-20 right-6 z-40 md:bottom-6">
<button className="w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all">
<span className="material-symbols-outlined text-2xl" data-icon="calendar_today">calendar_today</span>
</button>
</div>

    </>
  );
};

export default BoardTimelineView;
